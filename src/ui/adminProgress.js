/* Admin view of one student's practice path: what they scored per paragraph,
   and buttons to reset a single level, a whole chapter, or everything.

   The results come from `spelvoortgang` (an admin may read every row); the
   chapter and paragraph names come from the content in the browser, so the
   database only ever stores the chapter key and the level number.

   Only validated ids are written into inline handlers: the student id is a
   uuid, the level a number, and the chapter key is looked up at click time
   from the list rendered last. */
import { setHtml, escapeHtml, warningBox, infoBox, isUuid } from '../lib/dom.js';
import { CONTENT, parseKey, subjectById, levelById } from '../content/index.js';
import { levelsForChapter, levelSubtitle } from '../content/levels.js';
import { levelsForStudent } from '../services/gameProgress.js';
import { clearStudentGameProgress } from '../services/auth.js';
import { showToast } from './toast.js';

let openFor = null;      // student id whose path is on screen
let chapterKeys = [];    // chapter keys of the rows shown, indexed for handlers

function panel(studentId) {
  return 'admpad-' + studentId;
}

/* "Biologie · BBL · leerjaar 1 · hoofdstuk 2", from the chapter key alone. */
function chapterLabel(chapterKey) {
  const { subject, level, year, chapter } = parseKey(chapterKey);
  const subjectName = subjectById(subject);
  const levelName = levelById(level);
  return (subjectName ? subjectName.name : subject)
    + ' · ' + (levelName ? levelName.name : level)
    + ' · jaar ' + year + ' · hoofdstuk ' + chapter;
}

/* Name of one level, from the chapter content when it is loaded. */
function levelLabel(chapterKey, index) {
  const chapter = CONTENT[chapterKey];
  if (!chapter) return 'Level ' + (index + 1);
  const level = levelsForChapter(chapter)[index];
  if (!level) return 'Level ' + (index + 1);
  return level.title + ' — ' + levelSubtitle(chapter, level);
}

function scoreClass(row) {
  if (!row.totaal) return '';
  const pct = row.beste / row.totaal;
  if (pct >= 0.8) return ' goed';
  if (pct >= 0.5) return ' matig';
  return ' zwak';
}

function rowsHtml(rows) {
  const byChapter = {};
  rows.forEach((row) => {
    (byChapter[row.hoofdstuk] || (byChapter[row.hoofdstuk] = [])).push(row);
  });
  chapterKeys = Object.keys(byChapter).sort();

  return chapterKeys.map((chapterKey, at) => {
    const levels = byChapter[chapterKey];
    const xp = levels.reduce((sum, r) => sum + (r.xp || 0), 0);
    return '<div class="admpad-hoofdstuk">'
      + '<div class="admpad-kop"><b>' + escapeHtml(chapterLabel(chapterKey)) + '</b>'
      + '<span class="admpad-xp">' + levels.length + ' levels · ' + xp + ' XP</span>'
      + '<button class="bt gh" onclick="adminClearChapterProgress(' + at + ')">Hoofdstuk wissen</button>'
      + '</div>'
      + levels.map((row) => '<div class="admpad-level">'
        + '<span class="admpad-naam">' + escapeHtml(levelLabel(chapterKey, row.level)) + '</span>'
        + '<span class="admpad-score' + scoreClass(row) + '">' + row.beste + '/' + row.totaal + '</span>'
        + '<span class="admpad-xp">' + (row.xp || 0) + ' XP</span>'
        + '<button class="bt gh" onclick="adminClearLevelProgress(' + at + ',' + row.level + ')">Wissen</button>'
        + '</div>').join('')
      + '</div>';
  }).join('');
}

/* Inline handler: show or hide one student's practice path. */
export async function adminToggleProgress(studentId) {
  if (!isUuid(studentId)) return;
  if (openFor === studentId) {
    setHtml(panel(studentId), '');
    openFor = null;
    return;
  }
  if (openFor) setHtml(panel(openFor), '');
  openFor = studentId;
  setHtml(panel(studentId), infoBox('Bezig met laden…'));
  await refresh();
}

async function refresh() {
  if (!openFor) return;
  try {
    const rows = await levelsForStudent(openFor);
    if (!rows.length) {
      setHtml(panel(openFor), '<div class="admpad"><p class="lede">Deze leerling heeft nog geen level gehaald in het oefenspel.</p></div>');
      chapterKeys = [];
      return;
    }
    const total = rows.reduce((sum, r) => sum + (r.xp || 0), 0);
    setHtml(panel(openFor), '<div class="admpad">'
      + '<div class="admpad-totaal"><b>' + rows.length + ' levels gehaald</b> · ' + total + ' XP'
      + '<button class="bt gh" onclick="adminClearAllProgress()">Alles wissen</button></div>'
      + rowsHtml(rows) + '</div>');
  } catch (err) {
    setHtml(panel(openFor), warningBox(err.message));
  }
}

async function wipe(chapterKey, level, confirmation) {
  if (!openFor) return;
  if (!window.confirm(confirmation)) return;
  try {
    const removed = await clearStudentGameProgress(openFor, chapterKey, level);
    showToast(removed + (removed === 1 ? ' level gewist.' : ' levels gewist.'));
    await refresh();
  } catch (err) {
    showToast(err.message);
  }
}

/* Inline handler: reset one paragraph level. */
export function adminClearLevelProgress(at, level) {
  const chapterKey = chapterKeys[at];
  if (!chapterKey) return;
  wipe(chapterKey, level, 'Voortgang van "' + levelLabel(chapterKey, level) + '" wissen?\n\n'
    + 'De leerling moet dit level opnieuw doen.');
}

/* Inline handler: reset every level of one chapter. */
export function adminClearChapterProgress(at) {
  const chapterKey = chapterKeys[at];
  if (!chapterKey) return;
  wipe(chapterKey, null, 'Alle levels van "' + chapterLabel(chapterKey) + '" wissen?');
}

/* Inline handler: reset the whole practice path of this student. */
export function adminClearAllProgress() {
  wipe(null, null, 'De hele voortgang van het oefenspel van deze leerling wissen?\n\n'
    + 'Alle levels gaan weer op slot. Dit kan niet ongedaan worden gemaakt.');
}

/* The list was re-rendered, so nothing is open any more. */
export function resetProgressPanel() {
  openFor = null;
  chapterKeys = [];
}
