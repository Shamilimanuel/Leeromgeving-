// @vitest-environment jsdom
/* The tools menu (Gereedschapskist, 2.7): the Pomodoro controls, the switches,
   the favourites count, and the Uitleg tour that used to reopen every visit. */
import { describe, it, expect, beforeAll, afterEach } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const $ = (id) => document.getElementById(id);

let pomodoro;
let menu;
let prefs;
let help;

beforeAll(async () => {
  const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  document.body.innerHTML = html.match(/<body>([\s\S]*)<\/body>/)[1].replace(/<script[^>]*><\/script>/g, '');
  const store = new Map();
  const memoryStorage = {
    getItem: (k) => (store.has(k) ? store.get(k) : null),
    setItem: (k, v) => store.set(k, String(v)),
    removeItem: (k) => store.delete(k),
    clear: () => store.clear(),
  };
  Object.defineProperty(globalThis, 'localStorage', { value: memoryStorage, configurable: true });
  Object.defineProperty(window, 'localStorage', { value: memoryStorage, configurable: true });

  pomodoro = await import('../src/ui/pomodoro.js');
  menu = await import('../src/ui/radialMenu.js');
  prefs = await import('../src/ui/preferences.js');
  help = await import('../src/ui/help.js');
  pomodoro.initPomodoro();
  prefs.initPreferences();
});

const pressed = () => [...$('pomodoroDuur').querySelectorAll('button')]
  .filter((b) => b.getAttribute('aria-pressed') === 'true').map((b) => b.dataset.min);

describe('Pomodoro', () => {
  afterEach(() => {
    if ($('pomodorobtn').textContent === 'Stop') pomodoro.togglePomodoro();
  });

  it('starts at 25 minutes with the real break length', () => {
    expect(pressed()).toEqual(['25']);
    expect($('pomodoroNote').textContent).toBe('25 min werken, dan 5 min pauze');
  });

  it('picks a duration directly, with its own break, and remembers it', () => {
    pomodoro.setPomodoroDuration(45);
    expect(pressed()).toEqual(['45']);
    expect($('pomodoroNote').textContent).toBe('45 min werken, dan 10 min pauze');
    expect(localStorage.getItem('pomodoroDuur')).toBe('45');
    pomodoro.setPomodoroDuration(25);
  });

  it('ignores a duration that is not offered', () => {
    pomodoro.setPomodoroDuration(7);
    expect(pressed()).toEqual(['25']);
  });

  it('shows the running time on the menu button and locks the duration', () => {
    expect($('pomodoroChip').hidden).toBe(true);
    pomodoro.togglePomodoro();
    expect($('pomodorobtn').textContent).toBe('Stop');
    expect($('pomodoroChip').hidden).toBe(false);
    expect($('pomodoroChip').textContent).toBe('25:00');
    expect($('pomodorolabel').textContent).toBe('Focus');
    expect($('pomodoroNote').textContent).toBe('Nog 25:00, daarna 5 min pauze');
    expect([...$('pomodoroDuur').querySelectorAll('button')].every((b) => b.disabled)).toBe(true);

    pomodoro.setPomodoroDuration(10);          // ignored while running
    expect(pressed()).toEqual(['25']);

    pomodoro.togglePomodoro();
    expect($('pomodorobtn').textContent).toBe('Start');
    expect($('pomodoroChip').hidden).toBe(true);
  });
});

describe('the menu', () => {
  it('opens and closes, and says so to assistive technology', () => {
    menu.openRadialMenu();
    expect($('radialmenu').classList.contains('open')).toBe(true);
    expect($('radialtrigger').getAttribute('aria-expanded')).toBe('true');
    menu.closeRadialMenu();
    expect($('radialmenu').classList.contains('open')).toBe(false);
    expect($('radialtrigger').getAttribute('aria-expanded')).toBe('false');
  });

  it('shows how many favourites there are, and nothing when there are none', () => {
    menu.openRadialMenu();
    expect($('favBadge').hidden).toBe(true);
    localStorage.setItem('favorieten', JSON.stringify([
      { type: 'term', chapterKey: 'economie|tl|4|1', id: 0, front: 'Inflatie', back: '…' },
      { type: 'card', chapterKey: 'economie|tl|4|1', id: 1, front: 'Koopkracht', back: '…' },
    ]));
    menu.openRadialMenu();
    expect($('favBadge').hidden).toBe(false);
    expect($('favBadge').textContent).toBe('2');
    menu.closeRadialMenu();
  });

  it('shows dyslexia and light mode as switches that follow the setting', () => {
    expect($('dyslexiebtn').getAttribute('aria-checked')).toBe('false');
    prefs.toggleDyslexia();
    expect($('dyslexiebtn').getAttribute('aria-checked')).toBe('true');
    prefs.toggleDyslexia();
    prefs.toggleLightMode();
    expect($('lichtbtn').getAttribute('aria-checked')).toBe('true');
    prefs.toggleLightMode();
  });
});

describe('the Uitleg tour', () => {
  it('remembers on this device that it was seen', () => {
    help.openHelp(0);
    help.closeHelp();
    expect(localStorage.getItem('uitlegGezien')).toBe('1');
  });

  it('promises nothing that does not exist', () => {
    const slides = fs.readFileSync(path.join(root, 'src', 'ui', 'help.js'), 'utf8');
    expect(slides).not.toMatch(/Vraag het de AI/);
    // Every chapter tab is named, not four of the six.
    for (const tab of ['Samenvatting', 'Flashcards', 'Oefenspel', 'Oefenquiz', 'Begrippenlijst', 'Notities']) {
      expect(slides).toContain(tab);
    }
  });
});
