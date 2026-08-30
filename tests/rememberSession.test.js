// @vitest-environment jsdom
/* "Blijf ingelogd op dit apparaat": which store the session lands in.

   The risk this guards is a session left behind in the other store — on a
   shared school computer that is the next student finding the previous one
   still signed in. */
import { describe, it, expect, beforeEach, vi } from 'vitest';

function memoryStorage() {
  const map = new Map();
  return {
    getItem: (k) => (map.has(k) ? map.get(k) : null),
    setItem: (k, v) => map.set(k, String(v)),
    removeItem: (k) => map.delete(k),
    clear: () => map.clear(),
    get size() { return map.size; },
  };
}

let local;
let session;
let lib;

beforeEach(async () => {
  local = memoryStorage();
  session = memoryStorage();
  Object.defineProperty(window, 'localStorage', { value: local, configurable: true });
  Object.defineProperty(window, 'sessionStorage', { value: session, configurable: true });
  Object.defineProperty(globalThis, 'localStorage', { value: local, configurable: true });

  // The adapter captures the stores at import time, so re-import per test.
  vi.resetModules();
  lib = await import('../src/lib/supabase.js');
});

describe('where the session is stored', () => {
  it('defaults to not remembering', () => {
    expect(lib.isRememberingSession()).toBe(false);
  });

  it('remembers the choice across a closed tab', () => {
    lib.setRememberSession(true);
    expect(lib.isRememberingSession()).toBe(true);
    // The choice itself must outlive the tab, so it belongs in localStorage.
    expect(local.getItem('blijfIngelogd')).toBe('1');
    expect(session.getItem('blijfIngelogd')).toBeNull();
  });

  it('clears the choice again', () => {
    lib.setRememberSession(true);
    lib.setRememberSession(false);
    expect(lib.isRememberingSession()).toBe(false);
    expect(local.getItem('blijfIngelogd')).toBeNull();
  });
});

/* The adapter object is not exported, so drive it through a signed-in session
   the way the Supabase client does: it writes its token under its own key. */
describe('the session token follows the choice', () => {
  const KEY = 'sb-test-auth-token';

  async function writeToken(remember) {
    lib.setRememberSession(remember);
    // Reach the storage adapter the client was built with.
    const store = lib.supabase.auth.storage;
    store.setItem(KEY, 'token-value');
    return store;
  }

  it('keeps the session out of localStorage when not remembering', async () => {
    const store = await writeToken(false);
    expect(session.getItem(KEY)).toBe('token-value');
    expect(local.getItem(KEY)).toBeNull();
    expect(store.getItem(KEY)).toBe('token-value');
  });

  it('puts the session in localStorage when remembering', async () => {
    const store = await writeToken(true);
    expect(local.getItem(KEY)).toBe('token-value');
    expect(session.getItem(KEY)).toBeNull();
    expect(store.getItem(KEY)).toBe('token-value');
  });

  it('leaves no copy behind when the choice changes', async () => {
    const store = await writeToken(true);
    expect(local.getItem(KEY)).toBe('token-value');

    // Same student, next sign-in, box unticked: the localStorage copy must go.
    lib.setRememberSession(false);
    store.setItem(KEY, 'second-token');
    expect(session.getItem(KEY)).toBe('second-token');
    expect(local.getItem(KEY)).toBeNull();
  });

  it('removes the session from both stores on sign-out', async () => {
    const store = await writeToken(true);
    lib.setRememberSession(false);
    store.setItem(KEY, 'second-token');
    // Whatever the choice was, signing out must leave nothing anywhere.
    store.removeItem(KEY);
    expect(local.getItem(KEY)).toBeNull();
    expect(session.getItem(KEY)).toBeNull();
  });
});
