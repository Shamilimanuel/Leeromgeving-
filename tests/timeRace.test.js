// @vitest-environment jsdom
/* Tijdrace (src/ui/timeRace.js) and the daily goal on the path (path.js). */
import { describe, it, expect, beforeAll, afterEach, vi } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const $ = (id) => document.getElementById(id);

let race;
let pathUi;
let selection;

const TERMS = [
  ['inflatie', 'Algemene prijsstijging.'],
  ['koopkracht', 'Wat je met je inkomen kunt kopen.'],
  ['welvaart', 'Hoe goed je in je behoeften kunt voorzien.'],
  ['welzijn', 'Hoe goed je je voelt.'],
  ['modaal inkomen', 'Het inkomen dat het meest voorkomt.'],
];

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

  race = await import('../src/ui/timeRace.js');
  pathUi = await import('../src/ui/path.js');
  selection = await import('../src/state/selection.js');
  const { registerChapter } = await import('../src/content/registry.js');
  // A made-up chapter, registered under a made-up key.
  registerChapter('proef|tl|1|1', { title: 'Proef', summary: [{ heading: '1.1 Proef', html: '<p>x</p>' }], terms: TERMS, cards: [], quiz: [] });
  Object.assign(selection.selection, { subject: 'proef', level: 'tl', year: '1', chapter: '1' });
});

afterEach(() => {
  race.stopTimeRace();
  vi.useRealTimers();
});

describe('race questions', () => {
  it('needs four usable terms', () => {
    expect(race.canRace({ terms: TERMS.slice(0, 3) })).toBe(false);
    expect(race.canRace({ terms: TERMS })).toBe(true);
  });

  it('always has exactly one right answer, and it is the real one', () => {
    for (let n = 0; n < 200; n++) {
      const q = race.raceQuestion(TERMS);
      expect(q.right).toBeGreaterThanOrEqual(0);
      expect(q.right).toBeLessThan(q.labels.length);
      if (q.kind === 'choice') {
        expect(q.labels).toHaveLength(4);
        expect(new Set(q.labels).size).toBe(4);
        const term = TERMS.find((t) => t[1] === q.prompt);
        expect(q.labels[q.right]).toBe(term[0]);
      } else {
        const fits = TERMS.find((t) => t[0] === q.term)[1] === q.prompt;
        expect(q.right).toBe(fits ? 0 : 1);
      }
    }
  });
});

describe('records', () => {
  it('keeps only an improvement', () => {
    expect(race.saveRaceRecord('a|tl|1|1', 5)).toBe(true);
    expect(race.saveRaceRecord('a|tl|1|1', 3)).toBe(false);
    expect(race.raceRecord('a|tl|1|1')).toBe(5);
    expect(race.saveRaceRecord('a|tl|1|1', 6)).toBe(true);
    expect(race.raceRecord('a|tl|1|1')).toBe(6);
  });
});

describe('a race on screen', () => {
  it('counts answers, ends after 45 seconds, and saves the record', () => {
    vi.useFakeTimers();
    race.startTimeRace();
    expect($('spelwrap').classList.contains('show')).toBe(true);
    expect($('spelScore').textContent).toBe('45 s');

    // Answer three questions with the first option; each is right or wrong.
    // Called directly, like tests/app.test.js does: jsdom's inline onclick
    // does not see handlers assigned onto window.
    for (let n = 0; n < 3; n++) {
      expect($('spelBody').querySelectorAll('.spel-keuze').length).toBeGreaterThanOrEqual(2);
      race.raceAnswer(0);
      vi.advanceTimersByTime(500);
    }
    const stand = $('spelBody').querySelector('.race-stand').textContent;
    const correct = Number(/(\d+) goed/.exec(stand)[1]);
    const wrong = Number(/(\d+) fout/.exec(stand)[1]);
    expect(correct + wrong).toBe(3);

    vi.advanceTimersByTime(45000);
    expect($('spelBody').textContent).toContain('Tijd is om!');
    expect(race.raceRecord('proef|tl|1|1')).toBe(correct);
    // No XP: a race does not touch the practice path's results.
    expect(localStorage.getItem('spellevels')).toBeNull();
  });

  it('stops its clock when the overlay closes', () => {
    vi.useFakeTimers();
    race.startTimeRace();
    expect(race.isRacing()).toBe(true);
    race.stopTimeRace();
    expect(race.isRacing()).toBe(false);
    expect(vi.getTimerCount()).toBe(0);
  });
});

describe('the daily goal on the path', () => {
  it('says which of the three situations the student is in', () => {
    expect(pathUi.streakLine({ length: 3, lastDay: 100 }, 100)).toEqual({ done: true, text: 'Vandaag geoefend · 3 dagen op rij' });
    expect(pathUi.streakLine({ length: 1, lastDay: 99 }, 100)).toEqual({ done: false, text: 'Speel vandaag een level om je reeks van 1 dag te houden' });
    expect(pathUi.streakLine({ length: 4, lastDay: 90 }, 100).text).toBe('Speel een level om een reeks te beginnen');
    expect(pathUi.streakLine({ length: 0 }, 100).text).toBe('Speel een level om een reeks te beginnen');
  });
});
