/* Everything the site remembers about a student's practice, stored in
   localStorage: chapter progress, quiz mistakes, Leitner boxes for flashcards,
   the daily streak, favourites and practice-exam history.

   The persisted shapes use the original (Dutch) field names so that data saved
   by earlier versions keeps working. Everything is mapped to English objects at
   this boundary; the rest of the app never sees the stored shape. */
import { readJson, writeJson, STORAGE_KEYS as K } from '../lib/storage.js';
import { currentChapterKey } from './selection.js';

export function today() {
  return Math.floor(Date.now() / 86400000);
}

/* ── Chapter progress: viewed + last quiz result ─────────────────────── */

function toProgress(row) {
  if (!row) return null;
  return {
    viewed: !!row.bekeken,
    quizCompleted: !!row.quizAfgerond,
    quizCorrect: row.quizGoed,
    quizTotal: row.quizTotaal,
  };
}

function readProgressTable() {
  return readJson(K.progress, {});
}

export function progressFor(key) {
  return toProgress(readProgressTable()[key]);
}

/* Map of chapter key -> progress, for aggregate statistics. */
export function allProgress() {
  const table = readProgressTable();
  const out = {};
  Object.keys(table).forEach((key) => { out[key] = toProgress(table[key]); });
  return out;
}

export function markChapterViewed() {
  const table = readProgressTable();
  const key = currentChapterKey();
  updateStreak();
  if (table[key] && table[key].bekeken) return;
  table[key] = table[key] || {};
  table[key].bekeken = true;
  writeJson(K.progress, table);
}

export function markQuizCompleted(correct, total) {
  const table = readProgressTable();
  const key = currentChapterKey();
  table[key] = table[key] || {};
  table[key].quizGoed = correct;
  table[key].quizTotaal = total;
  table[key].quizAfgerond = true;
  writeJson(K.progress, table);
  updateStreak();
}

/* ── Quiz mistakes (for "practice the questions you got wrong") ──────── */

function readMistakes() {
  return readJson(K.mistakes, {});
}

export function mistakesForChapter() {
  return readMistakes()[currentChapterKey()] || [];
}

export function addMistake(questionIndex) {
  const table = readMistakes();
  const key = currentChapterKey();
  table[key] = table[key] || [];
  if (table[key].indexOf(questionIndex) === -1) {
    table[key].push(questionIndex);
    writeJson(K.mistakes, table);
  }
}

export function removeMistake(questionIndex) {
  const table = readMistakes();
  const key = currentChapterKey();
  if (table[key] && table[key].indexOf(questionIndex) > -1) {
    table[key] = table[key].filter((i) => i !== questionIndex);
    writeJson(K.mistakes, table);
  }
}

/* ── Leitner spaced repetition (flashcards) ──────────────────────────── */
/* Five boxes. The higher the box, the longer the wait before the card comes back. */
export const LEITNER_DAYS = [0, 1, 3, 7, 14, 30];
export const LEITNER_MAX_BOX = 5;

function readLeitner() {
  return readJson(K.leitner, {});
}

function toLeitner(row) {
  return row ? { box: row.box, dueDay: row.volgende } : { box: 1, dueDay: 0 };
}

export function leitnerForCard(cardId) {
  const table = readLeitner();
  const key = currentChapterKey();
  return toLeitner(table[key] && table[key][cardId]);
}

/* Map of chapter key -> { cardId -> { box, dueDay } }, for aggregate statistics. */
export function allLeitner() {
  const table = readLeitner();
  const out = {};
  Object.keys(table).forEach((key) => {
    out[key] = {};
    Object.keys(table[key]).forEach((id) => { out[key][id] = toLeitner(table[key][id]); });
  });
  return out;
}

/* outcome: 'known' (move up), 'unsure' (one box back) or 'unknown' (back to box 1). */
export function updateLeitner(cardId, outcome) {
  const current = leitnerForCard(cardId).box;
  const next = outcome === 'known' ? Math.min(current + 1, LEITNER_MAX_BOX)
    : outcome === 'unsure' ? Math.max(current - 1, 1)
      : 1;
  const table = readLeitner();
  const key = currentChapterKey();
  table[key] = table[key] || {};
  table[key][cardId] = { box: next, volgende: today() + LEITNER_DAYS[next] };
  writeJson(K.leitner, table);
  updateStreak();
  return next;
}

export function isCardDueToday(cardId) {
  return leitnerForCard(cardId).dueDay <= today();
}

/* ── Daily streak ─────────────────────────────────────────────────────── */

export function getStreak() {
  const s = readJson(K.streak, {});
  return { length: s.lengte || 0, lastDay: s.laatsteDag };
}

export function updateStreak() {
  const s = readJson(K.streak, {});
  const day = today();
  if (s.laatsteDag === day) return;
  s.lengte = s.laatsteDag === day - 1 ? (s.lengte || 0) + 1 : 1;
  s.laatsteDag = day;
  writeJson(K.streak, s);
}

/* ── Favourites (starred flashcards and glossary terms) ──────────────── */

const STORED_TYPE = { card: 'kaart', term: 'term' };
const TYPE_FROM_STORED = { kaart: 'card', term: 'term' };

function toFavorite(row) {
  return {
    id: row.id,
    type: TYPE_FROM_STORED[row.type] || row.type,
    chapterKey: row.sleutel,
    index: row.key,
    text: row.tekst,
    detail: row.detail,
  };
}

function favoriteId(type, chapterKey, index) {
  return STORED_TYPE[type] + '|' + chapterKey + '|' + index;
}

export function getFavorites() {
  return readJson(K.favorites, []).map(toFavorite);
}

export function isFavorite(type, chapterKey, index) {
  const id = favoriteId(type, chapterKey, index);
  return readJson(K.favorites, []).some((f) => f.id === id);
}

/* Returns true when the item is now a favourite, false when it was removed. */
export function toggleFavorite(type, chapterKey, index, text, detail) {
  const list = readJson(K.favorites, []);
  const id = favoriteId(type, chapterKey, index);
  const at = list.findIndex((f) => f.id === id);
  if (at > -1) {
    list.splice(at, 1);
    writeJson(K.favorites, list);
    return false;
  }
  list.push({ id, type: STORED_TYPE[type], sleutel: chapterKey, key: index, tekst: text, detail });
  writeJson(K.favorites, list);
  return true;
}

export function removeFavoriteAt(position) {
  const list = readJson(K.favorites, []);
  list.splice(position, 1);
  writeJson(K.favorites, list);
}

/* ── Practice-exam history ────────────────────────────────────────────── */

export function getExamHistory() {
  return readJson(K.examHistory, []).map((r) => ({ correct: r.goed, total: r.totaal, date: r.datum }));
}

export function saveExamAttempt(correct, total) {
  let list = readJson(K.examHistory, []);
  list.push({ goed: correct, totaal: total, datum: new Date().toLocaleDateString('nl-NL') });
  if (list.length > 50) list = list.slice(list.length - 50);
  writeJson(K.examHistory, list);
}

/* Wipes everything the student has built up on this device: progress, mistakes,
   flashcard boxes, streak, favourites, exam results and notes. Display
   preferences (text size, dyslexia mode, ...) are deliberately kept, because
   someone resetting their progress still needs the site to stay readable. */
export function clearLearningData() {
  const keys = [
    K.progress, K.mistakes, K.leitner, K.streak,
    K.favorites, K.examHistory, K.sq3r, K.cornell,
  ];
  keys.forEach((key) => {
    try { localStorage.removeItem(key); } catch { /* storage blocked */ }
  });
  return keys.length;
}
