// @vitest-environment jsdom
/* The "Wat is er nieuw?" sheet: does a returning student actually get it once
   after an update, and does a brand-new student not get it at all? */
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { APP_VERSION, CHANGELOG } from '../src/content/changelog.js';

/* Derived from CHANGELOG, never written out: adding a release entry must not
   break these tests, or every future release would have to fix them. */
const OLDEST = CHANGELOG[CHANGELOG.length - 1].version;
const THIRD_NEWEST = CHANGELOG[2] && CHANGELOG[2].version;

const SHEET = '<div id="home" class="screen"></div>'
  + '<div class="nieuwwrap" id="nieuwwrap"><div id="nieuwBody"></div></div>'
  + '<div class="helpwrap" id="helpwrap"><div id="helpBody"></div><div id="helpDots"></div>'
  + '<button id="helpPrev"></button><button id="helpNext"></button></div>';

function memoryStorage() {
  const store = new Map();
  return {
    getItem: (k) => (store.has(k) ? store.get(k) : null),
    setItem: (k, v) => store.set(k, String(v)),
    removeItem: (k) => store.delete(k),
    clear: () => store.clear(),
  };
}

/* A fresh module registry per test: whatsNew.js keeps the unseen entries in
   module state, and navigation.js keeps its onEnter listeners. */
async function boot(seenVersion) {
  vi.resetModules();
  document.body.innerHTML = SHEET;
  const storage = memoryStorage();
  if (seenVersion) storage.setItem('gezienVersie', seenVersion);
  Object.defineProperty(globalThis, 'localStorage', { value: storage, configurable: true });
  Object.defineProperty(window, 'localStorage', { value: storage, configurable: true });

  const whatsNew = await import('../src/ui/whatsNew.js');
  const navigation = await import('../src/ui/navigation.js');
  const help = await import('../src/ui/help.js');
  return { whatsNew, navigation, help, storage };
}

const isOpen = () => document.getElementById('nieuwwrap').classList.contains('show');
const bodyText = () => document.getElementById('nieuwBody').textContent;
/* The "Nieuw" badge, by element: the release notes themselves also use the
   word, so matching on text would pass for the wrong reason. */
const badges = () => document.querySelectorAll('#nieuwBody .nieuw-vlag');
const helpIsOpen = () => document.getElementById('helpwrap').classList.contains('open');

beforeEach(() => {
  vi.useFakeTimers();
});

describe('after an update', () => {
  it('opens by itself on the home screen, once', async () => {
    const { whatsNew, navigation } = await boot(OLDEST);
    whatsNew.initWhatsNew();
    expect(isOpen()).toBe(false);

    navigation.go('home');
    expect(isOpen()).toBe(false);      // waits a moment first
    vi.runAllTimers();
    expect(isOpen()).toBe(true);

    whatsNew.closeWhatsNew();
    navigation.go('home');
    vi.runAllTimers();
    expect(isOpen()).toBe(false);      // already seen: not again
  });

  it('shows only what changed since the version the student saw', async () => {
    // A student whose last visit was the third-newest release: the two after
    // it are new to them, that one and everything older is not.
    const { whatsNew, navigation } = await boot(THIRD_NEWEST);
    whatsNew.initWhatsNew();
    navigation.go('home');
    vi.runAllTimers();

    expect(bodyText()).toContain(CHANGELOG[0].title);
    expect(bodyText()).toContain(CHANGELOG[1].title);
    expect(bodyText()).not.toContain(CHANGELOG[2].title);
    expect(badges()).toHaveLength(1);
    expect(badges()[0].closest('.nieuw-versie').textContent).toContain(CHANGELOG[0].title);
  });

  it('records the new version, so a reload does not show it again', async () => {
    const { whatsNew, navigation, storage } = await boot(OLDEST);
    whatsNew.initWhatsNew();
    navigation.go('home');
    vi.runAllTimers();
    expect(storage.getItem('gezienVersie')).toBe(APP_VERSION);
  });

  it('stands down the welcome slides, so only one sheet opens', async () => {
    const { whatsNew, navigation, help } = await boot(OLDEST);
    help.initHelp();
    whatsNew.initWhatsNew();
    navigation.go('home');
    vi.runAllTimers();
    expect(isOpen()).toBe(true);
    expect(helpIsOpen()).toBe(false);
  });
});

describe('a first-time visitor', () => {
  it('gets the welcome slides instead of release notes', async () => {
    const { whatsNew, navigation, help, storage } = await boot(null);
    help.initHelp();
    whatsNew.initWhatsNew();
    expect(storage.getItem('gezienVersie')).toBe(APP_VERSION);

    navigation.go('home');
    vi.runAllTimers();
    expect(isOpen()).toBe(false);
    expect(helpIsOpen()).toBe(true);   // the control: the slides do still open
  });
});

describe('opened from the menu', () => {
  it('shows the whole history, without a badge', async () => {
    const { whatsNew } = await boot(APP_VERSION);
    whatsNew.initWhatsNew();
    whatsNew.openWhatsNew();

    expect(isOpen()).toBe(true);
    for (const entry of CHANGELOG) expect(bodyText()).toContain(entry.title);
    expect(badges()).toHaveLength(0);
    expect(bodyText()).toContain('versie ' + APP_VERSION);
  });

  it('closes again', async () => {
    const { whatsNew } = await boot(APP_VERSION);
    whatsNew.openWhatsNew();
    whatsNew.closeWhatsNew();
    expect(isOpen()).toBe(false);
  });
});
