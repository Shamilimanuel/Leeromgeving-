/* Student-written notes, stored per chapter in localStorage:
   - SQ3R guided-reading answers (questions per section + the "recite" text)
   - Cornell notes (cue/note rows + a summary)
   Stored field names are kept for backward compatibility; see progress.js. */
import { readJson, writeJson, STORAGE_KEYS as K } from '../lib/storage.js';
import { currentChapterKey } from './selection.js';

/* ── SQ3R ─────────────────────────────────────────────────────────────── */

function readSq3r() {
  return readJson(K.sq3r, {});
}

export function sq3rQuestionFor(sectionIndex) {
  const row = readSq3r()[currentChapterKey()];
  return (row && row.vragen && row.vragen[sectionIndex]) || '';
}

export function saveSq3rQuestion(sectionIndex, value) {
  const table = readSq3r();
  const key = currentChapterKey();
  table[key] = table[key] || {};
  table[key].vragen = table[key].vragen || {};
  table[key].vragen[sectionIndex] = value;
  writeJson(K.sq3r, table);
}

export function sq3rReciteText() {
  const row = readSq3r()[currentChapterKey()];
  return (row && row.navertellen) || '';
}

export function saveSq3rRecite(value) {
  const table = readSq3r();
  const key = currentChapterKey();
  table[key] = table[key] || {};
  table[key].navertellen = value;
  writeJson(K.sq3r, table);
}

/* ── Cornell notes ────────────────────────────────────────────────────── */

const EMPTY_ROW = () => ({ cue: '', notes: '' });

function readCornell() {
  return readJson(K.cornell, {});
}

/* { rows: [{ cue, notes }], summary } for the current chapter. */
export function cornellNotes() {
  const row = readCornell()[currentChapterKey()];
  if (!row) return { rows: [EMPTY_ROW()], summary: '' };
  return { rows: row.rijen, summary: row.samenvatting };
}

function saveCornellNotes(notes) {
  const table = readCornell();
  table[currentChapterKey()] = { rijen: notes.rows, samenvatting: notes.summary };
  writeJson(K.cornell, table);
}

export function updateCornellField(rowIndex, field, value) {
  const notes = cornellNotes();
  notes.rows[rowIndex][field] = value;
  saveCornellNotes(notes);
}

export function addCornellRow() {
  const notes = cornellNotes();
  notes.rows.push(EMPTY_ROW());
  saveCornellNotes(notes);
  return notes.rows;
}

export function removeCornellRow(rowIndex) {
  const notes = cornellNotes();
  notes.rows.splice(rowIndex, 1);
  if (!notes.rows.length) notes.rows = [EMPTY_ROW()];
  saveCornellNotes(notes);
  return notes.rows;
}

export function saveCornellSummary(value) {
  const notes = cornellNotes();
  notes.summary = value;
  saveCornellNotes(notes);
}

export function clearCornellNotes() {
  const table = readCornell();
  delete table[currentChapterKey()];
  writeJson(K.cornell, table);
}
