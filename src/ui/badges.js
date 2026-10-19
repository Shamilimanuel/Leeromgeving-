/* Badges on screen: the student's "Jouw voortgang" page, and a compact line
   per student in the admin panel. The rules live in src/state/badges.js;
   this module only gathers the input and draws the result. */
import { $, icon } from '../lib/dom.js';
import { CONTENT, CHAPTER_KEYS, loadChapter } from '../content/index.js';
import { levelsForChapter } from '../content/levels.js';
import { BADGES, gameBadges, deviceBadges, levelsFromLocal } from '../state/badges.js';
import { allGameLevels } from '../state/gameLevels.js';
import { localStudyStatus, myStudyStatus, statusFromRow, combineStatus } from '../services/studyStatus.js';

/* "Hoofdstuk af" needs to know how many levels a chapter has, which comes
   from its content, so the books involved are loaded first. A book that
   cannot load (offline, never opened) leaves its chapters "unknown": they
   just do not count as complete yet, rather than breaking the page. */
export async function computeGameBadges(levels) {
  const keys = [...new Set(levels.map((l) => l.chapterKey))];
  await Promise.allSettled(keys.map(loadChapter));
  return gameBadges(levels, {
    levelCount: (key) => (CONTENT[key] ? levelsForChapter(CONTENT[key]).length : null),
    chaptersInBook: (book) => CHAPTER_KEYS.filter((k) => k.startsWith(book + '|')),
  });
}

function tileHtml(badge, r) {
  const status = r.earned
    ? '<span class="badge-status">Gehaald</span>'
    : (r.need > 1 ? '<span class="badge-status">' + r.have + ' van ' + r.need + '</span>' : '');
  return '<div class="badge-tile' + (r.earned ? ' gehaald' : '') + '">'
    + '<span class="badge-coin">' + icon(r.earned ? badge.icon : 'lock') + '</span>'
    + '<span class="badge-t"><b>' + badge.title + '</b><small>' + badge.text + '</small>' + status + '</span>'
    + '<span class="sr-only">' + (r.earned ? 'Gehaald' : 'Nog niet gehaald') + '</span>'
    + '</div>';
}

function gridHtml(kind, results) {
  return '<div class="badge-grid">' + BADGES.filter((b) => b.kind === kind).map((b) => tileHtml(b, results[b.id])).join('') + '</div>';
}

/* The student's own badges, on "Jouw voortgang". */
export async function renderOwnBadges() {
  const target = $('badgeGrid');
  if (!target) return;
  const [game, row] = await Promise.all([computeGameBadges(levelsFromLocal(allGameLevels())), myStudyStatus()]);
  // This device, combined with what the student's other devices sent.
  const device = deviceBadges(combineStatus(localStudyStatus(), statusFromRow(row)));
  const earned = Object.values(game).concat(Object.values(device)).filter((r) => r.earned).length;
  target.innerHTML = '<section class="badges" aria-labelledby="badgesKop">'
    + '<div class="badges-kop"><h2 id="badgesKop">Badges</h2><span class="badges-telling">' + earned + ' van ' + BADGES.length + '</span></div>'
    + '<h3 class="badges-sub">Oefenspel</h3>'
    + gridHtml('spel', game)
    + '<h3 class="badges-sub">Reeks, quiz en lezen</h3>'
    + gridHtml('apparaat', device)
    + '<p class="badges-noot">Je docent ziet dezelfde badges als jij.</p>'
    + '</section>';
}

/* One compact line for the admin panel: every badge a student has earned.
   `results` holds both kinds; the streak/quiz/reading ones come from the
   student's `leerstatus` row (studyStatus.js). */
export function adminBadgeLine(results) {
  const earned = BADGES.filter((b) => results[b.id] && results[b.id].earned);
  const total = BADGES.length;
  return '<div class="admpad-badges"><b>Badges ' + earned.length + '/' + total + '</b>'
    + (earned.length
      ? earned.map((b) => '<span class="admpad-badge">' + icon(b.icon) + b.title + '</span>').join('')
      : '<span class="dim">nog geen</span>')
    + '</div>';
}
