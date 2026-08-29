/* Single shared Supabase client.

   The session is kept in sessionStorage instead of the default localStorage:
   the site is used on shared school computers, and a session must not
   survive closing the tab (otherwise the next student is signed in as the
   previous one). Falls back to the library default when sessionStorage is
   unavailable (privacy mode, blocked site data). */
import { createClient } from '@supabase/supabase-js';
import { SUPABASE_URL, SUPABASE_ANON_KEY } from '../config.js';

function sessionStorageOrDefault() {
  try {
    const s = window.sessionStorage;
    s.setItem('__probe', '1');
    s.removeItem('__probe');
    return s;
  } catch {
    return undefined;
  }
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    storage: sessionStorageOrDefault(),
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: false,
  },
});
