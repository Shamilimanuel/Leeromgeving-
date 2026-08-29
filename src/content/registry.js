/* Content registry.
   Every subject module calls `registerBook(...)` and every chapter module calls
   `registerChapter(...)` when it is imported, so there is no central list to
   maintain: `src/content/index.js` simply imports everything under `subjects/`.

   Keys:
     book key     'subject|level|year'            e.g. 'biologie|bbl|1'
     chapter key  'subject|level|year|chapter'    e.g. 'biologie|bbl|1|2'
*/

/** 'subject|level|year' -> { method, parts: [{ part, ready, chapters: [[nr, title, blurb], ...] }] } */
export const BOOKS = {};

/** 'subject|level|year|chapter' -> { title, summary, terms, cards, quiz } */
export const CONTENT = {};

export function bookKey(subject, level, year) {
  return subject + '|' + level + '|' + year;
}

export function chapterKey(subject, level, year, chapter) {
  return subject + '|' + level + '|' + year + '|' + chapter;
}

export function parseKey(key) {
  const [subject, level, year, chapter] = String(key).split('|');
  return { subject, level, year, chapter };
}

export function registerBook(subject, level, year, method, parts) {
  BOOKS[bookKey(subject, level, year)] = { method, parts };
}

export function registerChapter(key, chapter) {
  CONTENT[key] = chapter;
}
