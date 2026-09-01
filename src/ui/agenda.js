/* Agenda screen: a year-at-a-glance calendar (rolling 12 months from the
   current one). Clicking a day opens an overlay where a student logs a test
   for that date, optionally linked to a chapter, and gets a generic spaced
   study plan back. Everything lives on this device only
   (src/state/agenda.js), like Progress and Notes -- there is no server side
   to this feature.

   The chapter picker follows the subject -> chapter pattern already used by
   src/ui/adminClass.js: a subject dropdown fills a list of chapters (label
   built from the chapter key), rather than a three-level subject/level/year
   cascade. Chapter keys never reach the DOM directly; onclick handlers only
   ever carry an item's own id (safe charset, see state/agenda.js's newId())
   or a numeric index, looked up again at click time. */
import { $, setHtml, escapeHtml, warningBox } from '../lib/dom.js';
import { CONTENT, SUBJECTS, parseKey, levelById } from '../content/index.js';
import { getAgendaItems, addAgendaItem, removeAgendaItem, toggleSession, todayDateStr } from '../state/agenda.js';
import { TABS } from '../state/selection.js';
import { openChapterFromKey } from './chapter.js';

const MONTH_LABELS = ['jan', 'feb', 'mrt', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'];
const WEEKDAY_LABELS = ['ma', 'di', 'wo', 'do', 'vr', 'za', 'zo'];

/* Chapter keys offered for the subject currently picked in the form. */
let chapterOptions = [];
/* The items rendered last, for id-based lookups from inline handlers. */
let lastItems = [];
/* The day the overlay is currently showing, or null when it's closed. */
let openDate = null;

function chapterKeysForSubject(subjectId) {
  return Object.keys(CONTENT)
    .filter((key) => parseKey(key).subject === subjectId)
    .sort();
}

/* "BBL · jaar 1 · H2 — Bewegen", same label shape as adminClass.js. */
function chapterOptionLabel(key) {
  const { level, year, chapter } = parseKey(key);
  const levelName = levelById(level);
  const title = CONTENT[key] ? CONTENT[key].title : '';
  return (levelName ? levelName.name : level) + ' · jaar ' + year + ' · H' + chapter + (title ? ' — ' + title : '');
}

function formatDateLong(dateStr) {
  const [y, m, d] = dateStr.split('-').map(Number);
  try {
    return new Date(Date.UTC(y, m - 1, d))
      .toLocaleDateString('nl-NL', { weekday: 'long', day: 'numeric', month: 'long', timeZone: 'UTC' });
  } catch {
    return dateStr;
  }
}

function formatDateShort(dateStr) {
  const [y, m, d] = dateStr.split('-').map(Number);
  try {
    return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', timeZone: 'UTC' });
  } catch {
    return dateStr;
  }
}

function itemById(id) {
  return lastItems.find((it) => it.id === id);
}

/* ── Calendar ─────────────────────────────────────────────────────────── */

function monthGridHtml(year, month) {
  const startOffset = new Date(Date.UTC(year, month, 1)).getUTCDay(); // 0=Sun..6=Sat
  const mondayFirstOffset = (startOffset + 6) % 7; // 0=Mon..6=Sun
  const daysInMonth = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
  const today = todayDateStr();

  let cells = '';
  for (let i = 0; i < mondayFirstOffset; i += 1) cells += '<span class="agenda-dag leeg"></span>';
  for (let d = 1; d <= daysInMonth; d += 1) {
    const dateStr = year + '-' + String(month + 1).padStart(2, '0') + '-' + String(d).padStart(2, '0');
    const weekday = (mondayFirstOffset + d - 1) % 7;
    const hasExam = lastItems.some((it) => it.date === dateStr);
    const hasSession = !hasExam && lastItems.some((it) => it.sessions.some((s) => s.date === dateStr));
    const classes = ['agenda-dag'];
    if (weekday >= 5) classes.push('weekend');
    if (dateStr === today) classes.push('vandaag');
    if (dateStr < today) classes.push('verleden');
    if (hasExam) classes.push('heeft-toets');
    if (hasSession) classes.push('heeft-sessie');
    cells += '<button type="button" class="' + classes.join(' ') + '" onclick="agendaOpenDag(\'' + dateStr + '\')">' + d + '</button>';
  }

  return '<div class="agenda-maand">'
    + '<h3>' + MONTH_LABELS[month] + '</h3>'
    + '<div class="agenda-weekdagen">' + WEEKDAY_LABELS.map((w) => '<span>' + w + '</span>').join('') + '</div>'
    + '<div class="agenda-dagen">' + cells + '</div>'
    + '</div>';
}

function drawCalendar() {
  const target = $('agendaKalender');
  if (!target) return;
  lastItems = getAgendaItems();
  const year = new Date().getFullYear();
  const label = $('agendaJaar');
  if (label) label.textContent = String(year);
  let html = '';
  for (let month = 0; month < 12; month += 1) html += monthGridHtml(year, month);
  target.innerHTML = html;
}

export function renderAgenda() {
  if (!$('agenda')) return;
  setHtml('agendaVak', '<option value="">Kies een vak…</option>'
    + SUBJECTS.filter((s) => chapterKeysForSubject(s.id).length)
      .map((s) => '<option value="' + escapeHtml(s.id) + '">' + escapeHtml(s.name) + '</option>').join(''));
  drawCalendar();
}

/* ── Day overlay ──────────────────────────────────────────────────────── */

function itemsOnExamDate(dateStr) {
  return lastItems.filter((it) => it.date === dateStr);
}

/* Study sessions scheduled today for a test on a *different* day -- the
   item itself is rendered in full when its own exam date is open, so this
   only covers reminders that would otherwise never be seen. */
function sessionRemindersOnDate(dateStr) {
  const out = [];
  lastItems.forEach((it) => {
    if (it.date === dateStr) return;
    it.sessions.forEach((s, sessionIndex) => {
      if (s.date === dateStr) out.push({ item: it, sessionIndex, session: s });
    });
  });
  return out;
}

function stepsHtml(steps) {
  if (!steps || !steps.length) return '';
  return '<details class="agenda-stappen"><summary class="dim">Wat ga je doen?</summary>'
    + '<ol>' + steps.map((s) => '<li>' + escapeHtml(s) + '</li>').join('') + '</ol></details>';
}

function reminderHtml(r) {
  return '<div class="agenda-sessie-blok' + (r.session.done ? ' gedaan' : '') + '">'
    + '<label class="agenda-sessie">'
    + '<input type="checkbox" ' + (r.session.done ? 'checked' : '')
    + ' onchange="agendaToggleSession(\'' + r.item.id + '\',' + r.sessionIndex + ')">'
    + '<span>Leermoment voor <b>' + escapeHtml(r.item.title) + '</b> &middot; ' + r.session.minutes + ' min</span>'
    + '</label>'
    + stepsHtml(r.session.steps)
    + '</div>';
}

function sessionHtml(item, session, sessionIndex) {
  const late = !session.done && session.date < todayDateStr();
  return '<div class="agenda-sessie-blok' + (session.done ? ' gedaan' : '') + (late ? ' laat' : '') + '">'
    + '<label class="agenda-sessie">'
    + '<input type="checkbox" ' + (session.done ? 'checked' : '')
    + ' onchange="agendaToggleSession(\'' + item.id + '\',' + sessionIndex + ')">'
    + '<span>' + escapeHtml(formatDateShort(session.date)) + ' &middot; ' + session.minutes + ' min</span>'
    + '</label>'
    + stepsHtml(session.steps)
    + '</div>';
}

function itemHtml(item) {
  const chapters = item.chapterKeys
    .map((key, chapterIndex) => {
      const chapter = CONTENT[key];
      if (!chapter) return '';
      return '<button type="button" class="agenda-hfst" onclick="agendaOpenChapter(\'' + item.id + '\',' + chapterIndex + ')">'
        + '&#128214; ' + escapeHtml(chapter.title) + '</button>';
    }).join('');
  const sessions = item.sessions.length
    ? item.sessions.map((s, sessionIndex) => sessionHtml(item, s, sessionIndex)).join('')
    : '<p class="dim">Geen leermomenten meer in te plannen voor deze toets.</p>';

  return '<div class="box agenda-item">'
    + '<div class="agenda-kop">'
    + '<b>' + escapeHtml(item.title) + '</b>'
    + '<button type="button" class="bt gh klein" onclick="agendaRemoveItem(\'' + item.id + '\')" aria-label="Verwijderen">&#10005;</button>'
    + '</div>'
    + (chapters ? '<div class="agenda-hfst-lijst">' + chapters + '</div>' : '')
    + '<div class="agenda-sessies">' + sessions + '</div>'
    + '</div>';
}

function drawDagItems() {
  if (!openDate) return;
  const exams = itemsOnExamDate(openDate);
  const reminders = sessionRemindersOnDate(openDate);
  let html = exams.map(itemHtml).join('');
  if (reminders.length) {
    html += '<div class="agenda-herinneringen"><b>Leermomenten op deze dag:</b>' + reminders.map(reminderHtml).join('') + '</div>';
  }
  if (!exams.length && !reminders.length) html = '<p class="dim">Nog niets gepland op deze dag.</p>';
  setHtml('agendaDagItems', html);
}

export function agendaOpenDag(dateStr) {
  openDate = dateStr;
  lastItems = getAgendaItems();
  const title = $('agendaDagTitel');
  if (title) title.textContent = formatDateLong(dateStr);
  drawDagItems();
  const titelField = $('agendaTitel');
  if (titelField) titelField.value = '';
  const vak = $('agendaVak');
  if (vak) vak.value = '';
  agendaPickSubject();
  setHtml('agendaMelding', '');
  const wrap = $('agendaDagWrap');
  if (wrap) wrap.classList.add('show');
  if (titelField) titelField.focus();
}

export function agendaCloseDag() {
  openDate = null;
  const wrap = $('agendaDagWrap');
  if (wrap) wrap.classList.remove('show');
}

/* ── Inline handlers ──────────────────────────────────────────────────── */

export function agendaPickSubject() {
  const subject = $('agendaVak');
  const target = $('agendaHoofdstukken');
  if (!subject || !target) return;
  chapterOptions = subject.value ? chapterKeysForSubject(subject.value) : [];
  if (!chapterOptions.length) {
    target.innerHTML = '<p class="dim">Kies eerst een vak om aan een hoofdstuk te koppelen.</p>';
    return;
  }
  target.innerHTML = chapterOptions.map((key, at) =>
    '<label class="agenda-hfst-optie"><input type="checkbox" value="' + at + '"> '
    + escapeHtml(chapterOptionLabel(key)) + '</label>').join('');
}

export function agendaSubmit(e) {
  e.preventDefault();
  if (!openDate) return;
  const title = $('agendaTitel').value;
  const chapterKeys = Array.from(document.querySelectorAll('#agendaHoofdstukken input:checked'))
    .map((box) => chapterOptions[Number(box.value)])
    .filter(Boolean);
  try {
    addAgendaItem(title, openDate, chapterKeys);
    $('agendaTitel').value = '';
    const vak = $('agendaVak');
    if (vak) vak.value = '';
    agendaPickSubject();
    setHtml('agendaMelding', '');
    lastItems = getAgendaItems();
    drawDagItems();
    drawCalendar();
  } catch (err) {
    setHtml('agendaMelding', warningBox(err.message));
  }
}

export function agendaRemoveItem(id) {
  removeAgendaItem(id);
  lastItems = getAgendaItems();
  drawDagItems();
  drawCalendar();
}

export function agendaToggleSession(id, sessionIndex) {
  const item = itemById(id);
  if (!item) return;
  toggleSession(id, sessionIndex);
  lastItems = getAgendaItems();
  drawDagItems();
  drawCalendar();
}

export function agendaOpenChapter(id, chapterIndex) {
  const item = itemById(id);
  const key = item && item.chapterKeys[chapterIndex];
  if (!key) return;
  agendaCloseDag();
  openChapterFromKey(key, TABS.summary);
}

export function initAgenda() {
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    const wrap = $('agendaDagWrap');
    if (wrap && wrap.classList.contains('show')) agendaCloseDag();
  });
}
