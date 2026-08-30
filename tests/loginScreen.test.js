// @vitest-environment jsdom
/* Boots the real app with mandatory login on (the deployed default) and checks
   what a signed-out student is actually shown.

   The regression this guards: the radial menu -- Zoeken, Favorieten, Pomodoro,
   Oefentoets, Dyslexie, Licht, Uitleg -- used to appear on every screen except
   the splash. Behind the gate that made it a way straight past the login into
   half the site. */
import { describe, it, expect, beforeAll, vi } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { REQUIRE_LOGIN } from '../src/config.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

/* These checks only mean anything with the gate on. Building with
   VITE_REQUIRE_LOGIN=0 is the documented way to reopen the site, and a failing
   test blocks the deploy, so this stands down instead of going red. */
const withGate = REQUIRE_LOGIN ? describe : describe.skip;

async function boot() {
  const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  const body = html.match(/<body>([\s\S]*)<\/body>/)[1].replace(/<script[^>]*><\/script>/g, '');
  document.body.innerHTML = body;

  window.matchMedia = () => ({ matches: false, addEventListener() {}, removeEventListener() {} });
  window.alert = vi.fn();
  window.confirm = vi.fn(() => true);
  window.print = vi.fn();

  const store = new Map();
  const memoryStorage = {
    getItem: (k) => (store.has(k) ? store.get(k) : null),
    setItem: (k, v) => store.set(k, String(v)),
    removeItem: (k) => store.delete(k),
    clear: () => store.clear(),
  };
  Object.defineProperty(globalThis, 'localStorage', { value: memoryStorage, configurable: true });
  Object.defineProperty(window, 'localStorage', { value: memoryStorage, configurable: true });

  await import('../src/main.js');
  // initAuthGate reads the stored session before it decides where to land.
  await new Promise((resolve) => setTimeout(resolve, 50));
}

withGate('what a signed-out student sees', () => {
  beforeAll(boot);

  it('lands on the account screen, not the splash', () => {
    expect(document.getElementById('account').classList.contains('on')).toBe(true);
    expect(document.getElementById('splash').classList.contains('on')).toBe(false);
  });

  it('is not offered the tools menu', () => {
    const menu = document.getElementById('radialmenu');
    expect(menu).toBeTruthy();
    expect(menu.classList.contains('show')).toBe(false);
    expect(menu.classList.contains('open')).toBe(false);
  });

  it('cannot reach the tools by navigating', () => {
    window.go('home');
    expect(document.getElementById('radialmenu').classList.contains('show')).toBe(false);
    expect(document.getElementById('account').classList.contains('on')).toBe(true);
  });
});
