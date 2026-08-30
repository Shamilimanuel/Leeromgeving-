/* Class overview: how a whole class stands on one chapter, paragraph by
   paragraph. The per-student view (src/ui/adminProgress.js) answers "how is
   Jan doing"; this answers "which paragraph should I go over again before the
   test", which is the question a teacher actually has.

   One chapter at a time, deliberately: see classResultsForChapter() in
   src/services/gameProgress.js for why the whole table is not fetched.

   Only validated ids reach inline handlers. The chapter key is never put in
   markup -- it is looked up at click time from the list rendered last, the
   same way adminProgress.js does it. */
import { $, setHtml, escapeHtml, warningBox, infoBox } from '../lib/dom.js';
import { CONTENT, SUBJECTS, parseKey, levelById } from '../content/index.js';
import { levelsForChapter, levelSubtitle } from '../content/levels.js';
import { classResultsForChapter } from '../services/gameProgress.js';

/* Chapter keys of the options in the chapter dropdown, indexed by its value. */
let chapterOptions = [];
/* Active students of the last render: id -> username. */
let classById = {};

function chapterKeysForSubject(subjectId) {
  return Object.keys(CONTENT)
    .filter((key) => parseKey(key).subject === subjectId)
    .sort();
}

/* "BBL · jaar 1 · H2 — Bewegen" */
function chapterOptionLabel(key) {
  const { level, year, chapter } = parseKey(key);
  const levelName = levelById(level);
  const title = CONTENT[key] ? CONTENT[key].title : '';
  return (levelName ? levelName.name : level)
    + ' · jaar ' + year + ' · H' + chapter
    + (title ? ' — ' + title : '');
}

function levelLabel(chapterKey, index) {
  const chapter = CONTENT[chapterKey];
  if (!chapter) return 'Level ' + (index + 1);
  const level = levelsForChapter(chapter)[index];
  if (!level) return 'Level ' + (index + 1);
  return level.title;
}

function levelDetail(chapterKey, index) {
  const chapter = CONTENT[chapterKey];
  if (!chapter) return '';
  const level = levelsForChapter(chapter)[index];
  return level ? levelSubtitle(chapter, level) : '';
}

function scoreClass(pct) {
  if (pct >= 0.8) return ' goed';
  if (pct >= 0.5) return ' matig';
  return ' zwak';
}

/* ── The block ────────────────────────────────────────────────────────── */

/* `students` are the profiles already fetched for the admin render, so this
   block costs no extra query until a chapter is picked. */
export function classOverviewHtml(students) {
  classById = {};
  students.forEach((s) => { classById[s.id] = s.username; });

  const withContent = SUBJECTS.filter((s) => chapterKeysForSubject(s.id).length);
  return '<div class="box admin-blok" id="admin-klas">'
    + '<h3 style="margin-top:0">Klassenoverzicht</h3>'
    + '<p class="dim">Kies een hoofdstuk en zie per paragraaf hoe de klas ervoor staat: '
    + 'wie het gehaald heeft, en waar de scores achterblijven.</p>'
    + '<div class="bar klas-kiezer">'
    + '<select class="veld klas-select" id="klasVak" onchange="adminClassPickSubject()">'
    + '<option value="">Kies een vak…</option>'
    + withContent.map((s) => '<option value="' + escapeHtml(s.id) + '">'
      + escapeHtml(s.name) + '</option>').join('')
    + '</select>'
    + '<select class="veld klas-select" id="klasHoofdstuk" onchange="adminClassPickChapter()" disabled>'
    + '<option value="">Eerst een vak kiezen</option>'
    + '</select>'
    + '</div>'
    + '<div id="klasUitslag"></div>'
    + '</div>';
}

/* Inline handler: a subject was picked, so fill the chapter dropdown. */
export function adminClassPickSubject() {
  const subject = $('klasVak');
  const picker = $('klasHoofdstuk');
  if (!subject || !picker) return;
  setHtml('klasUitslag', '');

  const known = SUBJECTS.some((s) => s.id === subject.value);
  chapterOptions = known ? chapterKeysForSubject(subject.value) : [];
  if (!chapterOptions.length) {
    picker.innerHTML = '<option value="">Eerst een vak kiezen</option>';
    picker.disabled = true;
    return;
  }
  picker.innerHTML = '<option value="">Kies een hoofdstuk…</option>'
    + chapterOptions.map((key, at) => '<option value="' + at + '">'
      + escapeHtml(chapterOptionLabel(key)) + '</option>').join('');
  picker.disabled = false;
}

/* Inline handler: a chapter was picked, so fetch and show the class. */
export async function adminClassPickChapter() {
  const picker = $('klasHoofdstuk');
  if (!picker) return;
  const chapterKey = chapterOptions[Number(picker.value)];
  if (!chapterKey) {
    setHtml('klasUitslag', '');
    return;
  }
  setHtml('klasUitslag', infoBox('Bezig met laden…'));
  try {
    const rows = await classResultsForChapter(chapterKey);
    setHtml('klasUitslag', resultsHtml(chapterKey, rows));
  } catch (err) {
    setHtml('klasUitslag', warningBox(err.message));
  }
}

/* ── Working out where the class stands ───────────────────────────────── */

/* One entry per paragraph: how many of the class finished it, how they scored
   together, and who has not done it yet.

   Pure and exported so the counting can be tested on its own -- this is the
   part that would quietly mislead a teacher if it were wrong.

   `levelCount` paragraphs, `rows` straight from the database, `pupils` a map
   of id -> name. Rows belonging to someone outside that map are ignored, so a
   deleted account cannot inflate a count. */
export function summariseClass(levelCount, rows, pupils) {
  const ids = Object.keys(pupils);
  const byLevel = {};
  rows.forEach((row) => {
    if (!pupils[row.gebruiker_id]) return;
    (byLevel[row.level] || (byLevel[row.level] = [])).push(row);
  });

  const out = [];
  for (let index = 0; index < levelCount; index += 1) {
    const done = byLevel[index] || [];
    /* One row per pupil is the rule, but a duplicate must not make "13 of 12".
       Count distinct pupils, not rows. */
    const doneIds = {};
    done.forEach((r) => { doneIds[r.gebruiker_id] = true; });
    const doneCount = Object.keys(doneIds).length;

    const scored = done.filter((r) => r.totaal > 0);
    const correct = scored.reduce((sum, r) => sum + (r.beste || 0), 0);
    const asked = scored.reduce((sum, r) => sum + (r.totaal || 0), 0);

    out.push({
      index,
      done: doneCount,
      total: ids.length,
      /* null, not 0: "nobody has done this" and "everybody scored 0" are
         different things and must not look the same. */
      percent: asked ? correct / asked : null,
      missing: ids.filter((id) => !doneIds[id]).map((id) => pupils[id]).sort(),
    });
  }
  return out;
}

/* ── The table ────────────────────────────────────────────────────────── */

function resultsHtml(chapterKey, rows) {
  const chapter = CONTENT[chapterKey];
  if (!chapter) return warningBox('Dit hoofdstuk is niet geladen.');
  if (!Object.keys(classById).length) {
    return '<p class="lede">Er zijn nog geen leerlingen om te vergelijken.</p>';
  }

  const levels = levelsForChapter(chapter);
  const summary = summariseClass(levels.length, rows, classById);

  const head = '<div class="klas-kop"><b>' + escapeHtml(chapter.title) + '</b>'
    + '<span class="dim">' + levels.length + ' paragrafen · '
    + Object.keys(classById).length + ' leerlingen</span></div>';

  const body = summary.map((row) => {
    const detail = levelDetail(chapterKey, row.index);
    const share = row.total ? Math.round((row.done / row.total) * 100) : 0;
    return '<div class="klas-rij">'
      + '<div class="klas-naam"><b>' + escapeHtml(levelLabel(chapterKey, row.index)) + '</b>'
      + (detail ? '<span class="dim">' + escapeHtml(detail) + '</span>' : '')
      + '</div>'
      + '<div class="klas-cijfers">'
      + '<span class="klas-aantal">' + row.done + '/' + row.total + '</span>'
      + (row.percent === null
        ? '<span class="klas-score dim">—</span>'
        : '<span class="klas-score' + scoreClass(row.percent) + '">'
          + Math.round(row.percent * 100) + '%</span>')
      + '</div>'
      + '<div class="klas-balk"><i style="width:' + share + '%"></i></div>'
      + (row.missing.length
        ? '<div class="klas-mist dim">Nog niet gedaan: ' + escapeHtml(row.missing.join(', ')) + '</div>'
        : '<div class="klas-mist klas-af">Iedereen heeft dit gehaald.</div>')
      + '</div>';
  }).join('');

  return '<div class="klas">' + head + body + '</div>';
}
