/* The student's current position: subject → level → year → chapter → tab. */
import { BOOKS, CONTENT, bookKey, chapterKey, parseKey, subjectById, levelById } from '../content/index.js';

export const TABS = {
  summary: 'summary',
  flashcards: 'flashcards',
  game: 'game',
  quiz: 'quiz',
  terms: 'terms',
  notes: 'notes',
};

export const selection = {
  subject: null,
  level: null,
  year: null,
  chapter: null,
  tab: TABS.summary,
};

export function currentSubject() {
  return subjectById(selection.subject);
}

export function currentLevel() {
  return levelById(selection.level);
}

export function currentBook() {
  return BOOKS[bookKey(selection.subject, selection.level, selection.year)];
}

export function bookFor(subjectId, levelId, year) {
  return BOOKS[bookKey(subjectId, levelId, year)];
}

/* Content of a chapter in the current book (defaults to the selected chapter). */
export function chapterContent(chapter) {
  return CONTENT[chapterKey(selection.subject, selection.level, selection.year, chapter || selection.chapter)];
}

export function currentChapterKey() {
  return chapterKey(selection.subject, selection.level, selection.year, selection.chapter);
}

/* "Biologie · BBL · leerjaar 1" */
export function selectionLabel() {
  return currentSubject().name + ' · ' + currentLevel().name + ' · leerjaar ' + selection.year;
}

export function selectSubject(subjectId) {
  selection.subject = subjectId;
  selection.level = null;
  selection.year = null;
  selection.chapter = null;
}

/* Jump straight to a chapter from a full chapter key (search results, favourites).
   Chapter numbers are kept as strings: that is how books list them
   (`['2', 'Bewegen', ...]`) and how `openChapter` receives them. */
export function selectFromKey(key, tab) {
  const parts = parseKey(key);
  selection.subject = parts.subject;
  selection.level = parts.level;
  selection.year = parts.year;
  selection.chapter = parts.chapter;
  selection.tab = tab;
}
