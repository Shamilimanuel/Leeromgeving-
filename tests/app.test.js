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

  // Let the boot settle: the mandatory-login gate reads the stored session
  // asynchronously and may navigate when it resolves.
  await new Promise((resolve) => setTimeout(resolve, 50));

  // This walkthrough is about content navigation, not accounts. Switching
  // REQUIRE_LOGIN on would otherwise hold this signed-out walkthrough at the
  // login screen and, because a failing test blocks the deploy, make the
  // switch unflippable. The gate itself is covered by tests/authGate.test.js.
  const { setNavigationGate, go } = await import('../src/ui/navigation.js');
  setNavigationGate((id) => id);
  go('home');
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
    // The book screen is a winding chapter path (book.js), the same visual
    // system as the per-chapter level path in path.js -- .pad-stap nodes,
    // not the flat .chapter card grid this used to be.
    expect(document.querySelectorAll('#bookBody .pad-stap').length).toBe(6);
    expect(document.querySelectorAll('#bookBody .pad-stap.nu').length).toBe(1);
    expect(document.getElementById('bkTitle').textContent).toContain('Biologie');
  });

  it('opens a chapter on the summary tab', () => {
    window.openChapter('2');
    expect(screenIsOn('chapter')).toBe(true);
    expect(document.getElementById('chTitle').textContent).toBe('Bewegen');
    expect(document.querySelectorAll('#chBody .sect').length).toBeGreaterThan(0);
    expect([...document.querySelectorAll('#chTabs .tab')].map((t) => t.textContent.trim().split(' ')[0]))
      .toEqual(['Samenvatting', 'Flashcards', 'Oefenspel', 'Oefenquiz', 'Begrippenlijst', 'Notities']);
    expect(localStorage.getItem('voortgang')).toContain('biologie|bbl|1|2');
  });

  it('shows the practice path with only the first level open', () => {
    window.setTab('game');
    const nodes = [...document.querySelectorAll('#chBody .pad-stap')];
    expect(nodes.length).toBeGreaterThan(1);
    expect(nodes[0].querySelector('.pad-knop').disabled).toBe(false);
    expect(nodes[1].querySelector('.pad-knop').disabled).toBe(true);
    expect(document.querySelector('#chBody .pad-stap.nu')).toBe(nodes[0]);
  });

  it('plays level 1 and turns its node green', async () => {
    const { CONTENT } = await import('../src/content/index.js');
    const chapter = CONTENT['biologie|bbl|1|2'];
    const terms = chapter.terms;

    const plain = (html) => {
      const box = document.createElement('div');
      box.innerHTML = html;
      return (box.textContent || '').replace(/\s+/g, ' ').trim();
    };
    const termBy = (index, shown) => terms.find((t) => t[index] === shown);
    // jsdom does not resolve inline handlers against window, so read the
    // argument out of the markup and call the handler the way the app would.
    const argOf = (el) => Number(el.getAttribute('onclick').match(/\((\d+)/)[1]);
    const pick = (label) => {
      const button = [...document.querySelectorAll('#spelBody .spel-keuze')]
        .find((b) => b.innerHTML === label);
      expect(button, 'an option reading "' + label + '"').toBeTruthy();
      window.gameChoose(argOf(button));
    };

    // Answer one exercise of each kind correctly, from what is on screen.
    const play = {
      match() {
        const ids = [...new Set([...document.querySelectorAll('#spelBody .spel-tegel')]
          .map((t) => Number(t.dataset.id)))];
        ids.forEach((id) => {
          window.gameTile(id, 'question');
          window.gameTile(id, 'answer');
        });
      },
      type() {
        const term = termBy(1, document.querySelector('.spel-omschrijving').innerHTML);
        expect(term, 'the description belongs to a term of this chapter').toBeTruthy();
        document.getElementById('spelInput').value = term[0];
        window.gameCheck();
      },
      gap() {
        // Put each term back in the blank and see which one rebuilds a
        // sentence that really occurs in the summary.
        const parts = plain(document.querySelector('.spel-omschrijving').textContent).split('_____');
        const text = chapter.summary.map((sec) => plain(sec.html).toLowerCase()).join(' ');
        const term = terms.find((t) => text.includes(parts.join(plain(t[0])).toLowerCase()));
        expect(term, 'the blank belongs to a term of this chapter').toBeTruthy();
        document.getElementById('spelInput').value = term[0];
        window.gameCheck();
      },
      choice() {
        const term = termBy(1, document.querySelector('.spel-omschrijving').innerHTML);
        expect(term, 'the description belongs to a term of this chapter').toBeTruthy();
        pick(term[0]);
      },
      quiz() {
        const asked = document.querySelector('.spel-omschrijving').innerHTML;
        const entry = chapter.quiz.find((q) => q[0] === asked);
        expect(entry, 'the question comes from this chapter').toBeTruthy();
        pick(entry[1][entry[2]]);
      },
      truefalse() {
        const shown = document.querySelector('.spel-omschrijving').innerHTML.split('<br>');
        const term = termBy(0, shown[0].replace(/<\/?b>/g, ''));
        expect(term, 'the term comes from this chapter').toBeTruthy();
        pick(term[1] === shown[1] ? 'Ja, dat klopt' : 'Nee, dat klopt niet');
      },
      oddone() {
        // Three options share a paragraph and one does not; that one is it.
        const options = [...document.querySelectorAll('#spelBody .spel-keuze')]
          .map((b) => termBy(0, b.innerHTML));
        expect(options.every(Boolean), 'every option is a term of this chapter').toBe(true);
        const tally = {};
        options.forEach((t) => { tally[t[2]] = (tally[t[2]] || 0) + 1; });
        const odd = options.find((t) => tally[t[2]] === 1);
        expect(odd, 'exactly one option is from another paragraph').toBeTruthy();
        pick(odd[0]);
      },
      order() {
        const term = termBy(0, document.querySelector('.spel-omschrijving').innerHTML);
        expect(term, 'the word puzzle shows a term of this chapter').toBeTruthy();
        plain(term[1]).split(' ').forEach((word) => {
          const tile = [...document.querySelectorAll('#spelBody .spel-bank .spel-woord')]
            .find((b) => !b.disabled && b.textContent === word);
          expect(tile, 'a bank tile holding "' + word + '"').toBeTruthy();
          window.gamePickWord(argOf(tile));
        });
      },
      sort() {
        const headings = [...document.querySelectorAll('#spelBody .spel-bak h5')]
          .map((h) => h.textContent);
        [...document.querySelectorAll('#spelBody .spel-chips .spel-chip')].forEach((chip) => {
          const term = termBy(0, chip.innerHTML);
          expect(term, 'the chip is a term of this chapter').toBeTruthy();
          window.gameSortPick(argOf(chip));
          const at = headings.indexOf(chapter.summary[term[2]].heading);
          expect(at, 'a bucket for the right paragraph').toBeGreaterThan(-1);
          window.gameSortDrop(at);
        });
      },
    };

    window.setTab('game');
    window.openLevel(0);
    expect(document.getElementById('spelwrap').classList.contains('show')).toBe(true);

    const seen = new Set();
    for (let guard = 0; guard < 20 && !document.querySelector('.spel-klaar'); guard++) {
      const kind = document.querySelector('#spelBody .spel-vraag').dataset.soort;
      expect(play[kind], 'a way to answer a "' + kind + '" exercise').toBeTruthy();
      seen.add(kind);
      play[kind]();
      expect(document.querySelector('#spelBody .spel-fb.fout'),
        'answering a "' + kind + '" exercise correctly').toBeNull();
      window.gameNext();
    }

    // Finished, with a perfect run and the result written to storage.
    const finish = document.querySelector('.spel-klaar');
    expect(finish, 'the level ends within 20 exercises').toBeTruthy();
    expect(finish.textContent).toContain('Perfect');
    expect(seen.size, 'a session mixes several kinds of exercise').toBeGreaterThan(2);
    expect(localStorage.getItem('spellevels')).toContain('biologie|bbl|1|2');

    window.closeLevel();
    expect(document.getElementById('spelwrap').classList.contains('show')).toBe(false);

    // Level 1 is green with a check, and level 2 has opened up.
    const nodes = [...document.querySelectorAll('#chBody .pad-stap')];
    expect(nodes[0].querySelector('.pad-knop').classList.contains('klaar')).toBe(true);
    expect(nodes[0].querySelector('.pad-gezicht').textContent).toBe('\u2713');
    expect(nodes[1].querySelector('.pad-knop').disabled).toBe(false);
    window.setTab('summary');
  });

  it('finishes chapter 2 and shows it green on the book path, without locking any other chapter', async () => {
    const { CONTENT } = await import('../src/content/index.js');
    const { levelsForChapter } = await import('../src/content/levels.js');
    const { completeLevel } = await import('../src/state/gameLevels.js');
    const key = 'biologie|bbl|1|2';
    const levels = levelsForChapter(CONTENT[key]);
    // Level 0 is already done from the previous test. Finish the rest through
    // the state module directly rather than replaying every exercise kind
    // again -- completeLevel() is exactly what that playthrough calls.
    levels.slice(1).forEach((level) => {
      const count = level.terms.length + level.cards.length;
      completeLevel(key, level.index, count, count);
    });

    window.go('book');
    const nodeFor = (nr) => document.querySelector('#bookBody button[onclick*="openChapter(\'' + nr + '\')"]').closest('.pad-stap');

    const node2 = nodeFor('2');
    expect(node2.querySelector('.pad-knop').classList.contains('klaar')).toBe(true);
    expect(node2.querySelector('.pad-gezicht').textContent).toBe('✓');
    expect(node2.classList.contains('nu')).toBe(false);

    // Chapter 1 was never touched, but the book path does not lock chapters
    // in order the way levels inside a chapter do -- it stays fully
    // clickable, and being first in line and not yet done, it is now the one
    // recommended node.
    const node1 = nodeFor('1');
    expect(node1.querySelector('.pad-knop').disabled).toBe(false);
    expect(node1.querySelector('.pad-knop').classList.contains('op-slot')).toBe(false);
    expect(node1.classList.contains('nu')).toBe(true);
    expect(document.querySelectorAll('#bookBody .pad-stap.nu').length).toBe(1);

    window.openChapter('2');
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

  /* src/ui/account.js reads these by id, so a rename in index.html would
     silently drop the choice and sign every student out on closing the app. */
  it('offers "blijf ingelogd" on the sign-in form, unticked', () => {
    const box = document.getElementById('inlogBlijf');
    expect(box).toBeTruthy();
    expect(box.checked).toBe(false);
    expect(box.closest('label').textContent).toContain('Blijf ingelogd op dit apparaat');
    expect(document.getElementById('regBlijf')).toBeTruthy();
  });

  it('warns against using it on a shared school computer', () => {
    expect(document.querySelector('.blijfuitleg').textContent).toContain('school');
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
