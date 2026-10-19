/* Chapter screen: header, the route (Lezen -> Oefenen -> Toetsen, plus
   Begrippen and Notities on the side) and the active view's content.
   Until 2.7.1 this was a row of six equal tabs; the views underneath and the
   tab ids in `selection.tab` are unchanged. */
import { $, setHtml, icon } from '../lib/dom.js';
import { selection, TABS, currentSubject, currentBook, chapterContent, selectionLabel, selectFromKey, currentChapterKey } from '../state/selection.js';
import { go, SCREENS, scrollScreenToTop } from './navigation.js';
import { renderSummary, resetSummaryState } from './summary.js';
import { renderFlashcards, resetFlashcardState } from './flashcards.js';
import { resetGameState } from './game.js';
import { renderPath } from './path.js';
import { levelsForChapter } from '../content/levels.js';
import { renderQuiz, resetQuizState } from './quiz.js';
import { renderGlossary } from './glossary.js';
import { renderNotes } from './notes.js';
import { showToast } from './toast.js';
import { chapterKey, loadChapter } from '../content/index.js';
import { progressFor, markChapterRead } from '../state/progress.js';
import { isLevelDone } from '../state/gameLevels.js';
import { pushStudyStatus } from '../services/studyStatus.js';

/* The three steps of the route, in order, and which views belong to each.
   Oefenen holds two views; its button opens the practice path. */
const STEPS = [
  { id: 'lezen', label: 'Lezen', tabs: [TABS.summary], opens: TABS.summary },
  { id: 'oefenen', label: 'Oefenen', tabs: [TABS.game, TABS.flashcards], opens: TABS.game },
  { id: 'toetsen', label: 'Toetsen', tabs: [TABS.quiz], opens: TABS.quiz },
];

/* [nr, title, blurb] + part letter of a chapter in the current book. */
export function chapterInfo(nr) {
  let found = null;
  currentBook().parts.forEach((part) => {
    part.chapters.forEach((c) => { if (c[0] === nr) found = { chapter: c, part: part.part }; });
  });
  return found;
}

function resetTabState() {
  resetFlashcardState();
  resetGameState();
  resetQuizState();
  resetSummaryState();
}

/* A chapter's book may still have to be fetched (src/content/loader.js), so
   opening waits for it. The selection only changes once the chapter is there:
   a failed load leaves the student where they were, with a message, instead
   of on an empty chapter screen. When two taps race, the last one wins. */
let openTicket = 0;

async function openWhenLoaded(key, select) {
  const ticket = ++openTicket;
  try {
    await loadChapter(key);
  } catch {
    if (ticket === openTicket) showToast('Dit hoofdstuk kon niet laden. Heb je internet? Probeer het dan opnieuw.');
    return false;
  }
  if (ticket !== openTicket) return false;
  select();
  resetTabState();
  go(SCREENS.chapter);
  return true;
}

export function openChapter(nr) {
  return openWhenLoaded(chapterKey(selection.subject, selection.level, selection.year, nr), () => {
    selection.chapter = nr;
    selection.tab = TABS.summary;
  });
}

/* Open a chapter from a full chapter key (search result, favourite, agenda). */
export function openChapterFromKey(key, tab) {
  return openWhenLoaded(key, () => selectFromKey(key, tab));
}

/* What each step says under its name, and whether it is finished. Only data
   the app really stores: `gelezen`, the levels played, the last quiz result. */
export function stepStatus(stepId, chapter, key) {
  const p = progressFor(key) || {};
  if (stepId === 'lezen') {
    const n = chapter.summary.length;
    return p.read ? { done: true, text: 'Gelezen' } : { done: false, text: n + (n === 1 ? ' paragraaf' : ' paragrafen') };
  }
  if (stepId === 'oefenen') {
    const total = levelsForChapter(chapter).length;
    if (!total) return { done: false, text: chapter.cards.length + ' flashcards', empty: !chapter.cards.length };
    let played = 0;
    for (let i = 0; i < total; i++) if (isLevelDone(key, i)) played++;
    return { done: played === total, text: played ? played + ' van ' + total + ' levels' : total + ' levels' };
  }
  const n = chapter.quiz.length;
  if (!n) return { done: false, text: 'Geen vragen', empty: true };
  if (p.quizCompleted && p.quizTotal) return { done: true, text: 'Laatste: ' + p.quizCorrect + '/' + p.quizTotal };
  return { done: false, text: n + (n === 1 ? ' vraag' : ' vragen') };
}

function routeHtml(chapter, key) {
  const steps = STEPS.map((step, i) => {
    const s = stepStatus(step.id, chapter, key);
    const on = step.tabs.includes(selection.tab);
    return '<button type="button" class="route-step' + (s.done ? ' klaar' : '') + (s.empty ? ' leeg' : '') + '"'
      + (on ? ' aria-current="step"' : '') + (s.empty ? ' disabled' : '')
      + ' onclick="setTab(\'' + step.opens + '\')">'
      + '<b><em>' + (s.done ? icon('check') : String(i + 1)) + '</em>' + step.label + '</b>'
      + '<small>' + s.text + '</small></button>';
  }).join('');
  const side = '<div class="route-side">'
    + '<button type="button"' + (selection.tab === TABS.terms ? ' aria-current="page"' : '') + ' onclick="setTab(\'' + TABS.terms + '\')">'
    + icon('list-ordered') + 'Begrippen <span class="tel">' + chapter.terms.length + '</span></button>'
    + '<button type="button"' + (selection.tab === TABS.notes ? ' aria-current="page"' : '') + ' onclick="setTab(\'' + TABS.notes + '\')">'
    + icon('pen-line') + 'Notities</button></div>';
  // Oefenen holds two views; while in it, a small switch picks between them.
  const practising = selection.tab === TABS.game || selection.tab === TABS.flashcards;
  const sub = practising
    ? '<div class="route-sub clay-seg" role="group" aria-label="Oefenen">'
      + '<button type="button" aria-pressed="' + (selection.tab === TABS.game) + '" onclick="setTab(\'' + TABS.game + '\')">Oefenspel</button>'
      + '<button type="button" aria-pressed="' + (selection.tab === TABS.flashcards) + '" onclick="setTab(\'' + TABS.flashcards + '\')">Flashcards <span class="tel">' + chapter.cards.length + '</span></button>'
      + '</div>'
    : '';
  return '<nav class="route" aria-label="Stappen van dit hoofdstuk">' + steps + side + '</nav>' + sub;
}

/* Inline handler at the end of the summary: the student says they read it. */
export function finishReading() {
  markChapterRead();
  pushStudyStatus();   // best-effort, for the badges the teacher sees
  setTab(TABS.game);
}

export function renderChapter() {
  const subject = currentSubject();
  const info = chapterInfo(selection.chapter);
  const chapter = chapterContent();
  $('chBrand').textContent = subject.name;
  // Most books have one unnamed part; only name the part when there is one.
  const part = info.part ? ' · deel ' + info.part : '';
  $('chCrumb').textContent = selectionLabel() + part;
  $('chPill').textContent = 'Hoofdstuk ' + info.chapter[0] + part;
  $('chTitle').textContent = info.chapter[1];
  $('chTag').textContent = info.chapter[2] || '';

  if (!chapter) {
    // Opening a chapter waits for its book (openWhenLoaded), so this only shows
    // if a chapter somehow renders without its content.
    setHtml('chTabs', '');
    setHtml('chBody', '<div class="empty"><h3>Dit hoofdstuk kon niet laden</h3>'
      + '<p>Ga terug naar de hoofdstukken en probeer het opnieuw.</p></div>');
    return;
  }
  setHtml('chTabs', routeHtml(chapter, currentChapterKey()));

  if (selection.tab === TABS.summary) renderSummary(chapter);
  if (selection.tab === TABS.flashcards) renderFlashcards(chapter);
  if (selection.tab === TABS.game) renderPath(chapter);
  if (selection.tab === TABS.quiz) renderQuiz(chapter);
  if (selection.tab === TABS.terms) renderGlossary(chapter);
  if (selection.tab === TABS.notes) renderNotes();
}

export function setTab(tabId) {
  selection.tab = tabId;
  renderChapter();
  scrollScreenToTop(SCREENS.chapter);
}
