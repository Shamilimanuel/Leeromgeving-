/* Chapter screen: header, tab bar and the active tab's content. */
import { $, setHtml } from '../lib/dom.js';
import { selection, TABS, currentSubject, currentBook, chapterContent, selectionLabel, selectFromKey } from '../state/selection.js';
import { go, SCREENS, scrollScreenToTop } from './navigation.js';
import { renderSummary, resetSummaryState } from './summary.js';
import { renderFlashcards, resetFlashcardState } from './flashcards.js';
import { resetGameState } from './game.js';
import { renderPath } from './path.js';
import { levelsForChapter } from '../content/levels.js';
import { renderQuiz, resetQuizState } from './quiz.js';
import { renderGlossary } from './glossary.js';
import { renderNotes } from './notes.js';

/* Tab id -> label. Ids are internal; labels are what students see. */
const TAB_LIST = [
  [TABS.summary, 'Samenvatting'],
  [TABS.flashcards, 'Flashcards'],
  [TABS.game, 'Oefenspel'],
  [TABS.quiz, 'Oefenquiz'],
  [TABS.terms, 'Begrippenlijst'],
  [TABS.notes, 'Notities'],
];

/* The site uses "missie" (quest) instead of "hoofdstuk" in labels. */
export function questLabel(text) {
  return text.replace(/hoofdstuk/gi, (m) => (m === m.toUpperCase() ? 'MISSIE' : 'Missie'));
}

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

export function openChapter(nr) {
  selection.chapter = nr;
  selection.tab = TABS.summary;
  resetTabState();
  go(SCREENS.chapter);
}

/* Open a chapter from a full chapter key (search result, favourite). */
export function openChapterFromKey(key, tab) {
  selectFromKey(key, tab);
  resetTabState();
  go(SCREENS.chapter);
}

function tabCount(chapter, tabId) {
  if (!chapter) return 0;
  if (tabId === TABS.flashcards) return chapter.cards.length;
  if (tabId === TABS.game) return levelsForChapter(chapter).length;
  if (tabId === TABS.quiz) return chapter.quiz.length;
  if (tabId === TABS.terms) return chapter.terms.length;
  return 1;
}

export function renderChapter() {
  const subject = currentSubject();
  const info = chapterInfo(selection.chapter);
  const chapter = chapterContent();
  $('chBrand').textContent = subject.name;
  $('chCrumb').textContent = selectionLabel() + ' · deel ' + info.part;
  $('chPill').textContent = questLabel('Hoofdstuk ' + info.chapter[0]) + ' · deel ' + info.part;
  $('chTitle').textContent = info.chapter[1];
  $('chTag').textContent = info.chapter[2] || '';

  setHtml('chTabs', TAB_LIST.map(([id, label]) => {
    const n = tabCount(chapter, id);
    const noCounter = id === TABS.summary || id === TABS.notes;
    return '<button class="tab' + (selection.tab === id ? ' on' : '') + (n ? '' : ' leegtab') + '" onclick="setTab(\'' + id + '\')">' + label
      + (n && !noCounter ? ' <span class="tel">' + n + '</span>' : '') + '</button>';
  }).join('') + '<i class="tabslide" id="tabslide"></i>');

  let tabIndex = TAB_LIST.findIndex(([id]) => id === selection.tab);
  if (tabIndex < 0) tabIndex = 0;
  // Measure the active tab: the labels differ in width, so an equal share per
  // tab would leave the underline sitting next to the tab it belongs to.
  const slider = $('tabslide');
  const activeTab = $('chTabs').children[tabIndex];
  if (slider && activeTab && activeTab.offsetWidth) {
    slider.style.width = activeTab.offsetWidth + 'px';
    slider.style.left = activeTab.offsetLeft + 'px';
  } else if (slider) {
    slider.style.width = (100 / TAB_LIST.length) + '%';
    slider.style.left = (tabIndex * (100 / TAB_LIST.length)) + '%';
  }

  if (!chapter) {
    setHtml('chBody',
      '<div class="empty"><h3>Dit hoofdstuk is nog niet ingevuld</h3>'
      + '<p>De samenvatting, flashcards en quiz van dit hoofdstuk komen er nog aan.<br>'
      + 'Hoofdstuk 2 (Bewegen) is al wel helemaal af, bekijk die om te zien hoe het eruitziet.</p></div>');
    return;
  }
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
