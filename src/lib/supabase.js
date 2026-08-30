/* Single shared Supabase client.

   Where the session is kept is the student's choice, because the two places
   are right for different machines:

   - sessionStorage (the default) dies when the tab or the installed app is
     closed. That is what a shared school computer needs: the next student
     must never find the previous one signed in.
   - localStorage survives, so "blijf ingelogd op dit apparaat" keeps a
     student signed in on their own phone. With mandatory login the
     alternative is typing a password every single time the app is opened.

   The choice itself lives in localStorage (it has to outlive the tab) and is
   set at sign-in, before the session is written. Reads look in both stores and
   writes keep only one copy, so flipping the choice cannot leave a stale
   session behind in the other one.

   Falls back to the library default when neither store is available (private
   mode, blocked site data). */
import { createClient } from '@supabase/supabase-js';
import { SUPABASE_URL, SUPABASE_ANON_KEY } from '../config.js';
import { STORAGE_KEYS } from './storage.js';

function usable(get) {
  try {
    const s = get();
    s.setItem('__probe', '1');
    s.removeItem('__probe');
    return s;
  } catch {
    return null;
  }
}

const localStore = usable(() => window.localStorage);
const sessionStore = usable(() => window.sessionStorage);

export function isRememberingSession() {
  try {
    return !!localStore && localStore.getItem(STORAGE_KEYS.rememberSession) === '1';
  } catch {
    return false;
  }
}

/* Must be called *before* signing in: it decides where the session that the
   sign-in is about to write ends up. */
export function setRememberSession(on) {
  if (!localStore) return;
  try {
    if (on) localStore.setItem(STORAGE_KEYS.rememberSession, '1');
    else localStore.removeItem(STORAGE_KEYS.rememberSession);
  } catch { /* storage unavailable: falls back to sessionStorage behaviour */ }
}

function primary() {
  return (isRememberingSession() ? localStore : sessionStore) || localStore || sessionStore;
}

function secondary() {
  const first = primary();
  return first === localStore ? sessionStore : localStore;
}

function drop(store, key) {
  if (!store) return;
  try { store.removeItem(key); } catch { /* ignore */ }
}

/* Reads fall back to the other store so a session written under the previous
   choice is still found; writes keep exactly one copy. */
const sessionStorageAdapter = {
  getItem(key) {
    for (const store of [primary(), secondary()]) {
      if (!store) continue;
      try {
        const value = store.getItem(key);
        if (value != null) return value;
      } catch { /* try the other one */ }
    }
    return null;
  },
  setItem(key, value) {
    const store = primary();
    if (!store) return;
    try { store.setItem(key, value); } catch { return; }
    drop(secondary(), key);
  },
  removeItem(key) {
    drop(primary(), key);
    drop(secondary(), key);
  },
};

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    storage: (localStore || sessionStore) ? sessionStorageAdapter : undefined,
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: false,
  },
});
