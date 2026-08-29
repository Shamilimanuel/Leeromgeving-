// @vitest-environment jsdom
/* Boots the real application in jsdom (index.html + src/main.js) and walks
   through the main screens the way a student would. No network: the Supabase
   client is created but nothing is signed in, so no requests are made. */
import { describe, it, expect, beforeAll, vi } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function screenIsOn(id) {
  return document.getElementById(id).classList.contains('on');
}

beforeAll(async () => {
  const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  const body = html.match(/<body>([\s\S]*)<\/body>/)[1].replace(/<script[^>]*><\/script>/g, '');
  document.body.innerHTML = body;

  window.matchMedia = () => ({ matches: false, addEventListener() {}, removeEventListener() {} });
  window.alert = vi.fn();
  window.confirm = vi.fn(() => true);
  window.print = vi.fn();

  // Node ships its own (file-backed, disabled) `localStorage` global that shadows
  // jsdom's; replace it with a simple in-memory implementation.
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
});

describe('application boot', () => {
  it('installs the inline handlers on window', () => {
    expect(typeof window.go).toBe('function');
    expect(typeof window.chooseSubject).toBe('function');
    expect(typeof window.openChapter).toBe('function');
  });

  it('renders the subject grid', () => {
    const cards = document.querySelectorAll('#subjectGrid .subj');
    expect(cards.length).toBeGreaterThan(5);
  });
});

describe('subject → level → book → chapter', () => {
  it('navigates to the level screen', () => {
    window.chooseSubject('biologie');
    expect(screenIsOn('level')).toBe(true);
    expect(document.querySelectorAll('#nivChips .niv-card').length).toBe(4);
    expect(document.getElementById('lvlBrand').textContent).toBe('Biologie');
  });

  it('shows the years after picking a level and opens the book', () => {
    window.chooseLevel('bbl');
    expect(document.querySelectorAll('#jaarChips .jaar-card').length).toBe(2);
    window.chooseYear(1);
    expect(screenIsOn('book')).toBe(true);
    expect(document.querySelectorAll('#bookBody .chapter').length).toBe(6);
    expect(document.getElementById('bkTitle').textContent).toContain('Biologie');
  });

  it('opens a chapter on the summary tab', () => {
    window.openChapter('2');
    expect(screenIsOn('chapter')).toBe(true);
    expect(document.getElementById('chTitle').textContent).toBe('Bewegen');
    expect(document.querySelectorAll('#chBody .sect').length).toBeGreaterThan(0);
    expect(document.querySelectorAll('#chTabs .tab').length).toBe(5);
    expect(localStorage.getItem('voortgang')).toContain('biologie|bbl|1|2');
  });

  it('shows flashcards and marks one as known', () => {
    window.setTab('flashcards');
    const cards = document.querySelectorAll('#chBody .fc');
    expect(cards.length).toBeGreaterThan(0);
    const fakeEvent = { stopPropagation() {}, target: cards[0] };
    window.markCard(fakeEvent, 0, 'known');
    expect(document.getElementById('kcnt').textContent).toMatch(/^1 van/);
    expect(JSON.parse(localStorage.getItem('leitner'))['biologie|bbl|1|2']['0'].box).toBe(2);
  });

  it('runs the quiz and records the result', () => {
    window.setTab('quiz');
    const questions = document.querySelectorAll('#qlist .qq');
    expect(questions.length).toBeGreaterThan(0);
    window.answerQuestion(0, 0);
    expect(document.querySelectorAll('#qlist .opt.good').length).toBe(1);
    expect(document.getElementById('scoreTxt').textContent).toMatch(/^1 van/);
  });

  it('shows the glossary and the notes tab', () => {
    window.setTab('terms');
    expect(document.querySelectorAll('#blist .term').length).toBeGreaterThan(0);
    window.setTab('notes');
    expect(document.querySelectorAll('#cornellWrap textarea').length).toBe(2);
    window.addNoteRow();
    expect(document.querySelectorAll('#cornellWrap textarea').length).toBe(4);
  });

  it('toggles the SQ3R reading guide', () => {
    window.setTab('summary');
    window.toggleSq3r();
    expect(document.querySelectorAll('.sq3r-stap').length).toBe(5);
    window.sq3rNext();
    expect(document.querySelector('.sq3r-stap.on').textContent).toContain('Question');
    window.toggleSq3r();
    expect(document.querySelector('.sq3r')).toBeNull();
  });
});

describe('overlays', () => {
  it('search finds glossary terms across subjects', () => {
    window.openSearch();
    window.onSearchInput('skelet');
    const results = document.querySelectorAll('#zoekres .zres');
    expect(results.length).toBeGreaterThan(0);
    window.openSearchResult(0);
    expect(screenIsOn('chapter')).toBe(true);
    // A term result opens the glossary tab, a flashcard result the flashcards tab.
    expect(document.querySelectorAll('#blist .term, #cgrid .fc').length).toBeGreaterThan(0);
  });

  it('starts a practice exam with 10 questions', () => {
    window.openExam();
    window.startExam(10);
    expect(document.querySelectorAll('#examenlijst .qq').length).toBe(10);
    window.closeExam();
  });

  it('shows character cards with a streak badge', () => {
    window.go('personage');
    expect(document.querySelectorAll('#personageGrid .persona-card').length).toBeGreaterThan(5);
    expect(document.getElementById('streakBadge').textContent).toContain('1 dag');
  });

  it('remembers display preferences', () => {
    window.toggleDyslexia();
    expect(document.body.classList.contains('dyslexie-modus')).toBe(true);
    expect(localStorage.getItem('dyslexieModus')).toBe('1');
    window.toggleDyslexia();
    window.cycleTextSize();
    expect(document.documentElement.classList.contains('txt-groot')).toBe(true);
  });
});
