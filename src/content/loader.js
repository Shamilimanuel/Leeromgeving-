/* Chapter content, loaded per book when a student needs it.

   Until 2.7 every chapter of every book was bundled into the app, so a student
   downloaded all 37 books (4.2 MB) before the home screen appeared, and every
   book added later made that worse for everyone. Now only the book registries
   (`subjects/<subject>/<subject>.js`: titles and chapter lists, a few kB) load
   up front; a chapter module is fetched when its book is opened.

   What still works without loading anything: which chapters exist. That comes
   from the file names, which follow a fixed shape that
   tests/chapterKeys.test.js enforces:
     subjects/<subject>/<level><year>/h<NN>-<slug>.js  ->  'subject|level|year|NN'

   The offline promise that goes with this (decided 2026-09-23): a book a
   student has opened works offline. The service worker caches whatever is
   fetched, and `warmOpenedBooks()` fetches the opened books again after an
   update, because an update starts a fresh cache. */
import { CONTENT, bookKey, parseKey } from './registry.js';
import { readJson, writeJson, STORAGE_KEYS as K } from '../lib/storage.js';

const MODULES = import.meta.glob('./subjects/*/*/h*.js');
const PATH_RE = /^\.\/subjects\/([a-z]+)\/([a-z]+)(\d+)\/h(\d+)-/;

/* chapter key -> () => Promise<module> */
const LOADERS = {};
for (const path of Object.keys(MODULES)) {
  const m = PATH_RE.exec(path);
  if (m) LOADERS[m[1] + '|' + m[2] + '|' + m[3] + '|' + Number(m[4])] = MODULES[path];
}

/** Every chapter key on the site, loaded or not. */
export const CHAPTER_KEYS = Object.keys(LOADERS).sort();

export function hasChapter(key) {
  return Object.prototype.hasOwnProperty.call(LOADERS, key);
}

function bookOf(key) {
  const { subject, level, year } = parseKey(key);
  return bookKey(subject, level, year);
}

/** Every book key that has at least one chapter module. */
export const BOOK_KEYS = [...new Set(CHAPTER_KEYS.map(bookOf))].sort();

/* One promise per book, so two screens asking at once share one download.
   A failed load is forgotten, so the next attempt tries the network again. */
const loading = new Map();

function rememberOpened(book) {
  const opened = readJson(K.openedBooks, []);
  if (!Array.isArray(opened) || opened.includes(book)) return;
  opened.push(book);
  writeJson(K.openedBooks, opened);
}

/** Load every chapter of one book. Rejects when a chapter cannot be fetched. */
export function loadBookByKey(book, { remember = true } = {}) {
  if (!loading.has(book)) {
    const keys = CHAPTER_KEYS.filter((key) => bookOf(key) === book);
    const promise = Promise.all(keys.map((key) => LOADERS[key]()))
      .then(() => { if (remember) rememberOpened(book); })
      .catch((err) => { loading.delete(book); throw err; });
    loading.set(book, promise);
  }
  return loading.get(book);
}

export function loadBook(subject, level, year) {
  return loadBookByKey(bookKey(subject, level, year));
}

/** Load the book a chapter belongs to; resolves once the chapter is in CONTENT. */
export function loadChapter(key) {
  if (!hasChapter(key)) return Promise.reject(new Error('Onbekend hoofdstuk: ' + key));
  return loadBookByKey(bookOf(key));
}

/* Search and the practice exam look across every subject, so they need every
   book. Offline, the books never opened cannot come in; this reports how many
   failed instead of failing as a whole, so those screens can still use what
   is there and say what is missing. Not remembered as "opened": browsing
   search results should not make the device re-download all of it after
   every update. */
export async function loadAllContent() {
  const results = await Promise.allSettled(BOOK_KEYS.map((book) => loadBookByKey(book, { remember: false })));
  const failed = results.filter((r) => r.status === 'rejected').length;
  return { total: BOOK_KEYS.length, failed };
}

export function isChapterLoaded(key) {
  return Object.prototype.hasOwnProperty.call(CONTENT, key);
}

/* After an update the service worker starts with an empty cache, so books a
   student opened before would no longer work offline. Fetch them again in the
   background -- only when online, and only the ones this device opened. */
export function warmOpenedBooks() {
  if (typeof navigator !== 'undefined' && navigator.onLine === false) return;
  const opened = readJson(K.openedBooks, []);
  if (!Array.isArray(opened)) return;
  for (const book of opened) {
    if (BOOK_KEYS.includes(book)) loadBookByKey(book, { remember: false }).catch(() => {});
  }
}
