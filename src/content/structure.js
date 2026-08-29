/* Which subjects, levels and school years exist.
   `color` values are CSS custom-property names (see src/styles/base.css). */

export const SUBJECTS = [
  { id: 'wiskunde',         name: 'Wiskunde',           icon: '\u{1F4D0}', color: 'wiskunde',         colorName: 'Groen' },
  { id: 'rekenen',          name: 'Rekenen',            icon: '\u{1F522}', color: 'rekenen',          colorName: 'Rood' },
  { id: 'biologie',         name: 'Biologie',           icon: '\u{1F33F}', color: 'biologie',         colorName: 'Groen' },
  { id: 'nederlands',       name: 'Nederlands',         icon: '\u{270D}',  color: 'nederlands',       colorName: 'Geel' },
  { id: 'engels',           name: 'Engels',             icon: '\u{1F30D}', color: 'engels',           colorName: 'Oranje' },
  { id: 'burgerschap',      name: 'Burgerschap',        icon: '\u{1F91D}', color: 'burgerschap',      colorName: 'Lila', todo: true,
    mergedInto: 'Mens & Maatschappij' },
  { id: 'economie',         name: 'Economie',           icon: '\u{1F4CA}', color: 'economie',         colorName: 'Donkerblauw' },
  { id: 'maatschleer',      name: 'Maatschappijleer',   icon: '\u{2696}',  color: 'maatschleer',      colorName: 'Lila' },
  { id: 'maatschkunde',     name: 'Maatschappijkunde',  icon: '\u{1F3DB}', color: 'maatschkunde',     colorName: 'Lila' },
  { id: 'mensmaatschappij', name: 'Mens & Maatschappij', icon: '\u{1F9ED}', color: 'mensmaatschappij', colorName: 'Teal' },
];

export const LEVELS = [
  { id: 'arbeid', name: 'Arbeid', description: 'Praktijkgericht, geen wiskunde',                years: [1, 2, 3, 4], icon: '\u{2692}',  color: 'niv-arbeid' },
  { id: 'bbl',    name: 'BBL',    description: 'Basisberoepsgerichte leerweg',                  years: [1, 2, 3, 4], icon: '\u{26A1}',  color: 'niv-bbl' },
  { id: 'bk',     name: 'BK',     description: 'Basis/kader: alleen leerjaar 1 en 2',     years: [1, 2],       icon: '\u{1F3AF}', color: 'niv-bk' },
  { id: 'tl',     name: 'TL',     description: 'Theoretische leerweg',                          years: [1, 2, 3, 4], icon: '\u{1F989}', color: 'niv-tl' },
];

/* Which school years exist per subject, per level. `null` = the subject is not taught at that level. */
export const SUBJECT_YEARS = {
  wiskunde:         { arbeid: null,         bbl: [1, 2],       bk: [1, 2], tl: [1, 2, 3, 4] },
  biologie:         { arbeid: [1, 2],       bbl: [1, 2],       bk: [1, 2], tl: [1, 2, 3, 4] },
  rekenen:          { arbeid: [1, 2, 3, 4], bbl: [1, 2, 3, 4], bk: [1, 2], tl: null },
  nederlands:       { arbeid: [1, 2, 3, 4], bbl: [1, 2, 3, 4], bk: [1, 2], tl: [1, 2, 3, 4] },
  engels:           { arbeid: [1, 2, 3, 4], bbl: [1, 2, 3, 4], bk: [1, 2], tl: [1, 2, 3, 4] },
  burgerschap:      { arbeid: [1, 2, 3, 4], bbl: [1, 2, 3, 4], bk: [1, 2], tl: null },
  maatschleer:      { arbeid: null,         bbl: null,         bk: null,   tl: [3] },
  maatschkunde:     { arbeid: null,         bbl: null,         bk: null,   tl: [3, 4] },
  economie:         { arbeid: null,         bbl: null,         bk: null,   tl: [3, 4] },
  mensmaatschappij: { arbeid: [1, 2],       bbl: [1, 2],       bk: [1, 2], tl: null },
};

export function subjectById(id) {
  return SUBJECTS.find((s) => s.id === id);
}

export function levelById(id) {
  return LEVELS.find((l) => l.id === id);
}

/* Years available for a subject at a level (falls back to the level's default years). */
export function yearsFor(subjectId, levelId) {
  const table = SUBJECT_YEARS[subjectId];
  if (!table) return levelById(levelId).years;
  return table[levelId];
}
