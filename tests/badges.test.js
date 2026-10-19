/* Badge rules (src/state/badges.js). Pure functions, so every rule can be
   checked on exact numbers -- a wrong badge is worse than no badge. */
import { describe, it, expect } from 'vitest';
import { BADGES, gameBadges, deviceBadges, levelsFromLocal, levelsFromRows } from '../src/state/badges.js';

/* A made-up book: two chapters of 3 levels each (the Eindtoets included). */
const opts = {
  levelCount: (key) => ({ 'x|tl|1|1': 3, 'x|tl|1|2': 3 })[key] ?? null,
  chaptersInBook: (book) => (book === 'x|tl|1' ? ['x|tl|1|1', 'x|tl|1|2'] : []),
};
const lvl = (chapter, level, best = 6, total = 8, xp = 40) => ({ chapterKey: 'x|tl|1|' + chapter, level, best, total, xp });

describe('Oefenspel badges', () => {
  it('earns nothing without any level', () => {
    const r = gameBadges([], opts);
    expect(Object.values(r).some((b) => b.earned)).toBe(false);
    expect(r['tien-levels']).toEqual({ earned: false, have: 0, need: 10 });
  });

  it('counts a first level, but not a chapter until every level is done', () => {
    const r = gameBadges([lvl(1, 0), lvl(1, 1)], opts);
    expect(r['eerste-level'].earned).toBe(true);
    expect(r['hoofdstuk-af'].earned).toBe(false);
  });

  it('needs the Eindtoets too before a chapter is complete', () => {
    const r = gameBadges([lvl(1, 0), lvl(1, 1), lvl(1, 2)], opts);
    expect(r['hoofdstuk-af'].earned).toBe(true);
    expect(r['boek-uit']).toEqual({ earned: false, have: 1, need: 2 });
  });

  it('gives Foutloos only for a level that is entirely right', () => {
    expect(gameBadges([lvl(1, 0, 7, 8)], opts).foutloos.earned).toBe(false);
    expect(gameBadges([lvl(1, 0, 8, 8)], opts).foutloos.earned).toBe(true);
    // A level with no questions recorded is not "all right".
    expect(gameBadges([lvl(1, 0, 0, 0)], opts).foutloos.earned).toBe(false);
  });

  it('finishes a book when every chapter in it is complete', () => {
    const all = [0, 1, 2].flatMap((i) => [lvl(1, i), lvl(2, i)]);
    expect(gameBadges(all, opts)['boek-uit'].earned).toBe(true);
  });

  it('does not count a chapter whose size is unknown (its book did not load)', () => {
    const r = gameBadges([lvl(9, 0)], opts);
    expect(r['eerste-level'].earned).toBe(true);
    expect(r['hoofdstuk-af'].earned).toBe(false);
  });

  it('adds up XP across levels', () => {
    const r = gameBadges([lvl(1, 0, 6, 8, 300), lvl(1, 1, 6, 8, 250)], opts);
    expect(r['xp-500']).toEqual({ earned: true, have: 500, need: 500 });
    expect(r['xp-2000'].earned).toBe(false);
  });
});

describe('device badges', () => {
  it('keeps the streak badges once the best run reached them', () => {
    expect(deviceBadges({ bestStreak: 3 })['drie-op-rij'].earned).toBe(true);
    expect(deviceBadges({ bestStreak: 6 })['week-lang']).toEqual({ earned: false, have: 6, need: 7 });
  });

  it('counts only "Klaar met lezen" chapters for Lezer', () => {
    expect(deviceBadges({ chaptersRead: 4 }).lezer.earned).toBe(false);
    expect(deviceBadges({ chaptersRead: 5 }).lezer.earned).toBe(true);
  });
});

describe('the same input from the device and from the server', () => {
  it('reads local results and spelvoortgang rows into the same shape', () => {
    const local = levelsFromLocal({ 'x|tl|1|1': { 0: { done: true, best: 8, total: 8, xp: 40 }, 1: { done: false, best: 2, total: 8, xp: 0 } } });
    const server = levelsFromRows([{ hoofdstuk: 'x|tl|1|1', level: 0, beste: 8, totaal: 8, xp: 40 }]);
    expect(local).toEqual(server);
  });

  it('gives a student and their teacher the same badges for the same results', () => {
    const rows = [0, 1, 2].map((level) => ({ hoofdstuk: 'x|tl|1|1', level, beste: 8, totaal: 8, xp: 40 }));
    const local = { 'x|tl|1|1': Object.fromEntries([0, 1, 2].map((i) => [i, { done: true, best: 8, total: 8, xp: 40 }])) };
    expect(gameBadges(levelsFromLocal(local), opts)).toEqual(gameBadges(levelsFromRows(rows), opts));
  });
});

it('every badge has a known kind and a unique id', () => {
  expect(new Set(BADGES.map((b) => b.id)).size).toBe(BADGES.length);
  expect(BADGES.every((b) => b.kind === 'spel' || b.kind === 'apparaat')).toBe(true);
});

describe('the admin panel line', () => {
  it('lists every earned badge, from both the game and leerstatus', async () => {
    const { adminBadgeLine } = await import('../src/ui/badges.js');
    const results = Object.assign({}, gameBadges([lvl(1, 0, 8, 8)], opts), deviceBadges({ bestStreak: 3 }));
    const html = adminBadgeLine(results);
    expect(html).toContain('Badges 3/12');
    expect(html).toContain('Eerste stap');
    expect(html).toContain('Foutloos');
    expect(html).toContain('Drie op rij');
    expect(html).not.toContain('Een week lang');
    expect(adminBadgeLine(Object.assign({}, gameBadges([], opts), deviceBadges({})))).toContain('nog geen');
  });
});

describe('leerstatus: the three numbers mirrored to the server', () => {
  it('reads a row, and combines devices by keeping the highest value', async () => {
    const { statusFromRow, combineStatus } = await import('../src/services/studyStatus.js');
    expect(statusFromRow(null)).toEqual({ bestStreak: 0, perfectQuiz: false, chaptersRead: 0 });
    const server = statusFromRow({ beste_reeks: 5, quiz_foutloos: true, hoofdstukken_gelezen: 3 });
    const phone = { bestStreak: 2, perfectQuiz: false, chaptersRead: 4 };
    // The same rule the database trigger applies (20260924192242_leerstatus.sql).
    expect(combineStatus(phone, server)).toEqual({ bestStreak: 5, perfectQuiz: true, chaptersRead: 4 });
  });
});
