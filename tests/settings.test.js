// @vitest-environment jsdom
/* Instellingen: the five panels, and the display controls that must always show
   the stored preference -- including after the tools menu changed it. */
import { describe, it, expect, beforeAll, beforeEach } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

let prefs;
let settings;
let phone = false;

beforeAll(async () => {
  const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  document.body.innerHTML = html.match(/<body>([\s\S]*)<\/body>/)[1].replace(/<script[^>]*><\/script>/g, '');
  window.matchMedia = () => ({ matches: phone, addEventListener() {}, removeEventListener() {} });
  window.scrollTo = () => {};

  // Same in-memory storage as tests/app.test.js: Node's own global would shadow jsdom's.
  const store = new Map();
  const memoryStorage = {
    getItem: (k) => (store.has(k) ? store.get(k) : null),
    setItem: (k, v) => store.set(k, String(v)),
    removeItem: (k) => store.delete(k),
    clear: () => store.clear(),
  };
  Object.defineProperty(globalThis, 'localStorage', { value: memoryStorage, configurable: true });
  Object.defineProperty(window, 'localStorage', { value: memoryStorage, configurable: true });

  prefs = await import('../src/ui/preferences.js');
  settings = await import('../src/ui/settings.js');
});

beforeEach(() => {
  phone = false;
  localStorage.clear();
  prefs.initPreferences();
  document.getElementById('settingsLayout').classList.remove('is-guest');
});

const $ = (id) => document.getElementById(id);
const panel = () => $('settingsLayout').dataset.panel;

describe('display preferences', () => {
  it('sets a text size directly and ignores unknown sizes', () => {
    prefs.setTextSize('grootst');
    expect(prefs.currentTextSizeLabel()).toBe('grootst');
    expect(localStorage.getItem('tekstgrootte')).toBe('grootst');
    expect(document.documentElement.classList.contains('txt-grootst')).toBe(true);

    prefs.setTextSize('reusachtig');
    expect(prefs.currentTextSizeLabel()).toBe('grootst');
  });

  it('switches the reading font through one body class at a time', () => {
    prefs.setDyslexiaFont('atkinson');
    expect(document.body.classList.contains('dys-font-atkinson')).toBe(true);
    expect(localStorage.getItem('dyslexieLettertype')).toBe('atkinson');

    prefs.setDyslexiaFont('andika');
    expect(document.body.classList.contains('dys-font-atkinson')).toBe(false);
    expect(document.body.classList.contains('dys-font-andika')).toBe(true);

    // Lexend is the default and carries no class.
    prefs.setDyslexiaFont('lexend');
    expect([...document.body.classList].some((c) => c.startsWith('dys-font-'))).toBe(false);
  });

  it('refuses a font that is not on the list', () => {
    prefs.setDyslexiaFont('opendyslexic');
    expect(prefs.currentDyslexiaFont()).toBe('lexend');
  });

  it('restores a saved font, and falls back to Lexend for a bad stored value', () => {
    localStorage.setItem('dyslexieLettertype', 'andika');
    prefs.initPreferences();
    expect(prefs.currentDyslexiaFont()).toBe('andika');

    localStorage.setItem('dyslexieLettertype', 'comic-sans');
    prefs.initPreferences();
    expect(prefs.currentDyslexiaFont()).toBe('lexend');
  });

  it('toggles extra letter spacing and remembers it', () => {
    prefs.toggleLetterSpacing();
    expect(document.body.classList.contains('ruime-letters')).toBe(true);
    expect(localStorage.getItem('letterafstand')).toBe('1');
    prefs.initPreferences();
    expect(prefs.isLetterSpacingOn()).toBe(true);
  });
});

describe('the Weergave controls follow the stored state', () => {
  it('marks the chosen text size', () => {
    settings.settingsSetTextSize('groot');
    const pressed = [...$('setTekstgrootte').querySelectorAll('button')]
      .filter((b) => b.getAttribute('aria-pressed') === 'true').map((b) => b.dataset.size);
    expect(pressed).toEqual(['groot']);
  });

  it('shows the font choice only while dyslexia mode is on', () => {
    expect($('setLettertypes').hidden).toBe(true);
    settings.settingsToggleDyslexia();
    expect($('setDyslexie').getAttribute('aria-checked')).toBe('true');
    expect($('setLettertypes').hidden).toBe(false);

    settings.settingsSetDyslexiaFont('atkinson');
    const checked = [...document.querySelectorAll('input[name=setFont]')].filter((r) => r.checked).map((r) => r.value);
    expect(checked).toEqual(['atkinson']);

    settings.settingsToggleDyslexia();
    expect($('setLettertypes').hidden).toBe(true);
  });

  it('updates the switch when light mode is changed from the tools menu', () => {
    prefs.toggleLightMode();   // what the radial menu calls, not the settings wrapper
    expect($('setLicht').getAttribute('aria-checked')).toBe('true');
    prefs.toggleLightMode();
    expect($('setLicht').getAttribute('aria-checked')).toBe('false');
  });
});

describe('panels', () => {
  it('shows the panel that is asked for and marks its tab', () => {
    settings.showSettingsPanel('gevaarlijk');
    expect(panel()).toBe('gevaarlijk');
    const current = document.querySelectorAll('.set-tab[aria-current="true"]');
    expect(current).toHaveLength(1);
    expect(current[0].dataset.panel).toBe('gevaarlijk');
  });

  it('falls back to the first panel on a wide screen, since there is no list view there', () => {
    settings.showSettingsPanel('');
    expect(panel()).toBe('account');
    settings.showSettingsPanel('bestaatniet');
    expect(panel()).toBe('account');
  });

  it('shows the list of categories on a phone', () => {
    phone = true;
    settings.showSettingsPanel('');
    expect(panel()).toBe('');
  });

  it('keeps a guest out of the account panels', () => {
    $('settingsLayout').classList.add('is-guest');
    settings.showSettingsPanel('gevaarlijk');
    expect(panel()).toBe('weergave');
    settings.showSettingsPanel('over');
    expect(panel()).toBe('over');
  });

  it('has a panel for every tab, and a tab for every panel', () => {
    const tabs = [...document.querySelectorAll('.set-tab')].map((t) => t.dataset.panel).sort();
    const panels = [...document.querySelectorAll('.set-panel')].map((p) => p.dataset.panel).sort();
    expect(tabs).toEqual(['account', 'gegevens', 'gevaarlijk', 'over', 'weergave']);
    expect(panels).toEqual(tabs);
  });
});
