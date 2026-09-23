/* Which subjects, levels and school years exist.
   `color` values are CSS custom-property names (see src/styles/base.css).
   `icon` values are UI icon names; `icon(name)` from `src/lib/dom.js` turns
   one into markup and `public/icons/icons.css` has to carry a matching
   `.icon-<name>` rule. */

export const SUBJECTS = [
  { id: 'wiskunde',         name: 'Wiskunde',           icon: 'ruler',          color: 'wiskunde',         colorName: 'Groen' },
  { id: 'rekenen',          name: 'Rekenen',            icon: 'calculator',     color: 'rekenen',          colorName: 'Rood' },
  { id: 'biologie',         name: 'Biologie',           icon: 'leaf',           color: 'biologie',         colorName: 'Groen' },
  { id: 'nederlands',       name: 'Nederlands',         icon: 'pen-line',       color: 'nederlands',       colorName: 'Geel' },
  { id: 'engels',           name: 'Engels',             icon: 'globe',          color: 'engels',           colorName: 'Oranje' },
  { id: 'burgerschap',      name: 'Burgerschap',        icon: 'handshake',      color: 'burgerschap',      colorName: 'Lila', todo: true,
    mergedInto: 'Mens & Maatschappij' },
  { id: 'economie',         name: 'Economie',           icon: 'chart-column',   color: 'economie',         colorName: 'Donkerblauw' },
  { id: 'maatschleer',      name: 'Maatschappijleer',   icon: 'scale',          color: 'maatschleer',      colorName: 'Lila' },
  { id: 'maatschkunde',     name: 'Maatschappijkunde',  icon: 'landmark',       color: 'maatschkunde',     colorName: 'Lila' },
  { id: 'mensmaatschappij', name: 'Mens & Maatschappij', icon: 'compass',       color: 'mensmaatschappij', colorName: 'Teal' },
];

export const LEVELS = [
  { id: 'arbeid', name: 'Arbeid', description: 'Praktijkgericht, geen wiskunde',                years: [1, 2, 3, 4], icon: 'hammer',          color: 'niv-arbeid' },
  { id: 'bbl',    name: 'BBL',    description: 'Basisberoepsgerichte leerweg',                  years: [1, 2, 3, 4], icon: 'zap',             color: 'niv-bbl' },
  { id: 'bk',     name: 'BK',     description: 'Basis/kader: alleen leerjaar 1 en 2',     years: [1, 2],       icon: 'target',          color: 'niv-bk' },
  { id: 'tl',     name: 'TL',     description: 'Theoretische leerweg',                          years: [1, 2, 3, 4], icon: 'graduation-cap',  color: 'niv-tl' },
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
