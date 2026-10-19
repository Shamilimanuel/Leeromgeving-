/* Badges (2.7.1). Pure: no DOM, no storage, no network -- the student's own
   page and the admin panel call the same functions with the same kind of
   input, so a student and a teacher always see the same Oefenspel badges.

   Two kinds, because their data comes from two places:
   - `spel` badges come from the practice path, mirrored to `spelvoortgang`.
   - `apparaat` badges come from the streak, the quiz and "Klaar met lezen",
     which live on the device and are mirrored (as three numbers) to
     `leerstatus` since 2.7.1. The name is older than that mirror.
   A teacher sees both kinds, in the admin panel.

   Honest limit: a student writes their own `spelvoortgang` rows, so a badge
   is exactly as trustworthy as the XP the admin panel already shows. Nothing
   here can be made fake-proof without the server grading every answer. */

export const BADGES = [
  { id: 'eerste-level', kind: 'spel', icon: 'target', title: 'Eerste stap', text: 'Je eerste level gehaald.' },
  { id: 'foutloos', kind: 'spel', icon: 'star', title: 'Foutloos', text: 'Een level helemaal goed.' },
  { id: 'hoofdstuk-af', kind: 'spel', icon: 'check', title: 'Hoofdstuk af', text: 'Alle levels van een hoofdstuk, de eindtoets ook.' },
  { id: 'tien-levels', kind: 'spel', icon: 'zap', title: 'Doorzetter', text: '10 levels gehaald.', need: 10 },
  { id: 'drie-hoofdstukken', kind: 'spel', icon: 'medal', title: 'Op dreef', text: '3 hoofdstukken helemaal af.', need: 3 },
  { id: 'boek-uit', kind: 'spel', icon: 'library', title: 'Boek uit', text: 'Alle hoofdstukken van één boek af.' },
  { id: 'xp-500', kind: 'spel', icon: 'sparkles', title: '500 XP', text: 'Samen 500 XP in het Oefenspel.', need: 500 },
  { id: 'xp-2000', kind: 'spel', icon: 'trophy', title: '2000 XP', text: 'Samen 2000 XP in het Oefenspel.', need: 2000 },
  { id: 'drie-op-rij', kind: 'apparaat', icon: 'flame', title: 'Drie op rij', text: '3 dagen achter elkaar geoefend.', need: 3 },
  { id: 'week-lang', kind: 'apparaat', icon: 'flame', title: 'Een week lang', text: '7 dagen achter elkaar geoefend.', need: 7 },
  { id: 'alles-goed', kind: 'apparaat', icon: 'lightbulb', title: 'Alles goed', text: 'Een oefenquiz helemaal goed.' },
  { id: 'lezer', kind: 'apparaat', icon: 'book-open', title: 'Lezer', text: '5 hoofdstukken helemaal gelezen.', need: 5 },
];

function bookOf(chapterKey) {
  return String(chapterKey).split('|').slice(0, 3).join('|');
}

/* Oefenspel badges.
   `levels`: every finished level, as { chapterKey, level, best, total, xp }.
   `levelCount(chapterKey)`: how many levels that chapter has (the Eindtoets
     included), or null when its content is not loaded -- then that chapter
     simply cannot count as complete yet.
   `chaptersInBook(bookKey)`: every chapter key of a book.
   Returns { id: { earned, have, need } } for the `spel` badges. */
export function gameBadges(levels, { levelCount, chaptersInBook }) {
  const perChapter = new Map();
  let xp = 0;
  let perfect = false;
  for (const l of levels) {
    if (!perChapter.has(l.chapterKey)) perChapter.set(l.chapterKey, new Set());
    perChapter.get(l.chapterKey).add(Number(l.level));
    xp += Number(l.xp) || 0;
    if (l.total > 0 && l.best >= l.total) perfect = true;
  }

  const complete = new Set();
  for (const [key, done] of perChapter) {
    const count = levelCount(key);
    if (!count) continue;
    let all = true;
    for (let i = 0; i < count; i++) if (!done.has(i)) { all = false; break; }
    if (all) complete.add(key);
  }

  // The book the student got furthest in, for "Boek uit".
  let bookHave = 0;
  let bookNeed = 0;
  for (const book of new Set([...perChapter.keys()].map(bookOf))) {
    const chapters = chaptersInBook(book);
    const have = chapters.filter((k) => complete.has(k)).length;
    if (chapters.length && (have / chapters.length > (bookNeed ? bookHave / bookNeed : -1))) {
      bookHave = have;
      bookNeed = chapters.length;
    }
  }

  const count = levels.length;
  return {
    'eerste-level': { earned: count >= 1, have: Math.min(count, 1), need: 1 },
    foutloos: { earned: perfect, have: perfect ? 1 : 0, need: 1 },
    'hoofdstuk-af': { earned: complete.size >= 1, have: Math.min(complete.size, 1), need: 1 },
    'tien-levels': { earned: count >= 10, have: Math.min(count, 10), need: 10 },
    'drie-hoofdstukken': { earned: complete.size >= 3, have: Math.min(complete.size, 3), need: 3 },
    'boek-uit': { earned: bookNeed > 0 && bookHave === bookNeed, have: bookHave, need: bookNeed || 1 },
    'xp-500': { earned: xp >= 500, have: Math.min(xp, 500), need: 500 },
    'xp-2000': { earned: xp >= 2000, have: Math.min(xp, 2000), need: 2000 },
  };
}

/* Device-only badges, from what this browser remembers.
   `bestStreak`: longest run of days in a row; `perfectQuiz`: whether any
   chapter's last quiz was all correct; `chaptersRead`: chapters marked with
   "Klaar met lezen". */
export function deviceBadges({ bestStreak = 0, perfectQuiz = false, chaptersRead = 0 }) {
  return {
    'drie-op-rij': { earned: bestStreak >= 3, have: Math.min(bestStreak, 3), need: 3 },
    'week-lang': { earned: bestStreak >= 7, have: Math.min(bestStreak, 7), need: 7 },
    'alles-goed': { earned: perfectQuiz, have: perfectQuiz ? 1 : 0, need: 1 },
    lezer: { earned: chaptersRead >= 5, have: Math.min(chaptersRead, 5), need: 5 },
  };
}

/* Local game results ({ chapterKey: { index: { done, best, total, xp } } })
   in the same shape as rows from `spelvoortgang`. */
export function levelsFromLocal(all) {
  const out = [];
  for (const chapterKey of Object.keys(all || {})) {
    const chapter = all[chapterKey] || {};
    for (const index of Object.keys(chapter)) {
      const r = chapter[index];
      if (r && r.done) out.push({ chapterKey, level: Number(index), best: r.best || 0, total: r.total || 0, xp: r.xp || 0 });
    }
  }
  return out;
}

/* Rows from `spelvoortgang` (Dutch column names) in the same shape. */
export function levelsFromRows(rows) {
  return (rows || []).map((r) => ({ chapterKey: r.hoofdstuk, level: Number(r.level), best: r.beste || 0, total: r.totaal || 0, xp: r.xp || 0 }));
}
