/* Personal agenda: tests the student enters themselves ("7 september Wiskunde
   BBL H1 toets"), stored per device in localStorage, same as progress.js and
   notes.js. Adding an item builds a generic, spaced study plan backward from
   the test date -- not tailored to how well the student already knows the
   material, just a reasonable "start early, review right before" schedule. */
import { readJson, writeJson, STORAGE_KEYS as K } from '../lib/storage.js';

const CHECKPOINT_DAYS_BEFORE = [14, 7, 3, 1];
const BASE_MINUTES = 20;
const MINUTES_PER_EXTRA_CHAPTER = 10;
const MAX_MINUTES = 60;

/* What to actually do in a session -- not just "study for 20 min". Generic,
   like the rest of the plan: not tied to a subject or to how well a student
   already knows the material, just a sensible study method per stage
   (understand it, then practice it, then test yourself on it). */
const STUDY_STEPS = {
  enkel: [
    'Lees de samenvatting van het hoofdstuk door.',
    'Overhoor jezelf met de flashcards van dit hoofdstuk.',
    'Maak de quizvragen om te checken wat je nog niet weet.',
  ],
  eerste: [
    'Lees de samenvatting van het hoofdstuk rustig door.',
    'Schrijf de belangrijkste begrippen in je eigen woorden op, op papier.',
    'Bekijk de flashcards van dit hoofdstuk één keer.',
  ],
  midden: [
    'Overhoor jezelf met de flashcards van dit hoofdstuk.',
    'Schrijf de begrippen die je nog niet wist nog een keer voluit op.',
    'Zoek de begrippen op die je lastig vindt in de begrippenlijst.',
  ],
  laatste: [
    'Maak de quizvragen van dit hoofdstuk, zonder te spieken.',
    'Overhoor de flashcards nog een keer, let extra op de kaarten die je fout had.',
    'Lees de samenvatting nog één keer vluchtig door.',
  ],
};

/* Pure: which step-by-step recipe fits a session at this position in the
   plan. Exported separately so the staging rule can be tested on its own. */
export function studyStepsFor(index, total) {
  if (total <= 1) return STUDY_STEPS.enkel;
  if (index === 0) return STUDY_STEPS.eerste;
  if (index === total - 1) return STUDY_STEPS.laatste;
  return STUDY_STEPS.midden;
}

function dayCount(dateStr) {
  const [y, m, d] = dateStr.split('-').map(Number);
  return Date.UTC(y, m - 1, d) / 86400000;
}

export function todayDateStr() {
  const now = new Date();
  return now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2, '0') + '-' + String(now.getDate()).padStart(2, '0');
}

function roundToFive(n) {
  return Math.round(n / 5) * 5;
}

/* Pure: given the exam date, how many chapters are linked, and "today", returns
   the list of study sessions. Kept separate from storage so it can be tested
   without localStorage, the same way authGate.js's screenFor() is. */
export function buildStudyPlan(examDateStr, chapterCount, todayStr = todayDateStr()) {
  const examDay = dayCount(examDateStr);
  const todayDay = dayCount(todayStr);
  const daysUntil = examDay - todayDay;
  if (daysUntil < 0) return [];

  const minutes = Math.min(MAX_MINUTES, BASE_MINUTES + Math.max(0, chapterCount - 1) * MINUTES_PER_EXTRA_CHAPTER);

  if (daysUntil === 0) {
    return [{ date: examDateStr, minutes, done: false, steps: studyStepsFor(0, 1) }];
  }

  const checkpoints = CHECKPOINT_DAYS_BEFORE.filter((c) => c <= daysUntil);
  if (daysUntil > 14) checkpoints.unshift(daysUntil);
  const uniqueSorted = Array.from(new Set(checkpoints)).sort((a, b) => b - a);

  return uniqueSorted.map((daysBefore, index) => {
    const sessionDay = examDay - daysBefore;
    const y = new Date(sessionDay * 86400000);
    const date = y.getUTCFullYear() + '-' + String(y.getUTCMonth() + 1).padStart(2, '0') + '-' + String(y.getUTCDate()).padStart(2, '0');
    const isLast = index === uniqueSorted.length - 1;
    return {
      date,
      minutes: isLast ? roundToFive(minutes * 1.5) : minutes,
      done: false,
      steps: studyStepsFor(index, uniqueSorted.length),
    };
  });
}

function readItems() {
  return readJson(K.agenda, []);
}

function toItem(row) {
  return {
    id: row.id,
    title: row.titel,
    date: row.datum,
    chapterKeys: row.hoofdstukken || [],
    sessions: (row.sessies || []).map((s) => ({ date: s.datum, minutes: s.duur, done: !!s.gedaan, steps: s.stappen || [] })),
  };
}

export function getAgendaItems() {
  return readItems().map(toItem).sort((a, b) => a.date.localeCompare(b.date));
}

function newId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

/* title and dateStr are required; chapterKeys may be empty (a plain reminder
   with no content linked). Returns the mapped item. */
export function addAgendaItem(title, dateStr, chapterKeys) {
  const clean = String(title || '').trim();
  if (!clean) throw new Error('Geef een titel op.');
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateStr || '')) throw new Error('Kies een geldige datum.');
  const keys = Array.isArray(chapterKeys) ? chapterKeys : [];
  const plan = buildStudyPlan(dateStr, keys.length);
  const row = {
    id: newId(),
    titel: clean,
    datum: dateStr,
    hoofdstukken: keys,
    sessies: plan.map((s) => ({ datum: s.date, duur: s.minutes, gedaan: s.done, stappen: s.steps })),
  };
  const items = readItems();
  items.push(row);
  writeJson(K.agenda, items);
  return toItem(row);
}

export function removeAgendaItem(id) {
  const items = readItems().filter((r) => r.id !== id);
  writeJson(K.agenda, items);
}

export function toggleSession(itemId, sessionIndex) {
  const items = readItems();
  const row = items.find((r) => r.id === itemId);
  if (!row || !row.sessies || !row.sessies[sessionIndex]) return;
  row.sessies[sessionIndex].gedaan = !row.sessies[sessionIndex].gedaan;
  writeJson(K.agenda, items);
}
