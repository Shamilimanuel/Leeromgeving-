/* Read-only queries across all registered content. */
import { BOOKS, CONTENT, bookKey, parseKey, subjectById, yearsFor } from './index.js';

export const SEARCH_MIN_LENGTH = 2;
export const SEARCH_MAX_RESULTS = 40;

/* `SUBJECT_YEARS` says which years a subject is *taught* at a level; whether we
   have the book is a separate question. Arbeid and BK are taught everywhere and
   summarised nowhere, so without this check the picker sends a student to a
   dead end for 41 of the 77 combinations it offers. */
export function hasBook(subjectId, levelId, year) {
  return !!BOOKS[bookKey(subjectId, levelId, year)];
}

/* Years at this level that we actually have a book for. */
export function bookYearsFor(subjectId, levelId) {
  const years = yearsFor(subjectId, levelId);
  if (!years) return null;
  return years.filter((year) => hasBook(subjectId, levelId, year));
}

/* Chapter keys that belong to a subject. */
export function chapterKeysForSubject(subjectId) {
  return Object.keys(CONTENT).filter((k) => k.indexOf(subjectId + '|') === 0);
}

export function subjectHasContent(subjectId) {
  return Object.keys(CONTENT).some((k) => k.indexOf(subjectId + '|') === 0);
}

/* Every quiz question on the site, tagged with its subject and chapter. */
export function allQuizQuestions() {
  const list = [];
  Object.keys(CONTENT).forEach((key) => {
    const chapter = CONTENT[key];
    const subject = subjectById(parseKey(key).subject);
    if (!subject || !chapter.quiz || !chapter.quiz.length) return;
    chapter.quiz.forEach((question, index) => {
      list.push({ key, subject, title: chapter.title, question, index });
    });
  });
  return list;
}

/* Full-text search over glossary terms and flashcards of all subjects.
   Result: { type: 'term'|'card', key, subject, level, year, title, text, detail } */
export function searchContent(query) {
  const q = (query || '').trim().toLowerCase();
  if (q.length < SEARCH_MIN_LENGTH) return [];
  const results = [];
  Object.keys(CONTENT).forEach((key) => {
    const chapter = CONTENT[key];
    const parts = parseKey(key);
    const subject = subjectById(parts.subject);
    if (!subject) return;
    const base = { key, subject, level: parts.level, year: parts.year, title: chapter.title };
    chapter.terms.forEach((t) => {
      if (t[0].toLowerCase().indexOf(q) > -1 || t[1].toLowerCase().indexOf(q) > -1) {
        results.push(Object.assign({ type: 'term', text: t[0], detail: t[1] }, base));
      }
    });
    chapter.cards.forEach((c) => {
      if (c[0].toLowerCase().indexOf(q) > -1 || c[1].toLowerCase().indexOf(q) > -1) {
        results.push(Object.assign({ type: 'card', text: c[0], detail: c[1] }, base));
      }
    });
  });
  return results.slice(0, SEARCH_MAX_RESULTS);
}

export function shuffle(array) {
  const a = array.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const t = a[i];
    a[i] = a[j];
    a[j] = t;
  }
  return a;
}
