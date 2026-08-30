/* The counting behind the class overview. A teacher reads this before a test
   and decides which paragraph to go over again, so a wrong count is worse than
   no count at all -- hence the arithmetic lives in a pure function. */
import { describe, it, expect } from 'vitest';
import { summariseClass } from '../src/ui/adminClass.js';

const PUPILS = { a: 'anna', b: 'bram', c: 'chris' };
const row = (id, level, beste, totaal) => ({
  gebruiker_id: id, level, beste, totaal, xp: 0,
});

describe('summariseClass', () => {
  it('reports one entry per paragraph, even the untouched ones', () => {
    const out = summariseClass(3, [], PUPILS);
    expect(out.map((r) => r.index)).toEqual([0, 1, 2]);
    expect(out.every((r) => r.done === 0 && r.total === 3)).toBe(true);
  });

  it('counts who finished and who still has to', () => {
    const out = summariseClass(2, [row('a', 0, 8, 8), row('b', 0, 4, 8)], PUPILS);
    expect(out[0].done).toBe(2);
    expect(out[0].missing).toEqual(['chris']);
    expect(out[1].done).toBe(0);
    expect(out[1].missing).toEqual(['anna', 'bram', 'chris']);
  });

  it('averages over the whole class, not per pupil', () => {
    // 8/8 and 4/8 together is 12 of 16 asked.
    const out = summariseClass(1, [row('a', 0, 8, 8), row('b', 0, 4, 8)], PUPILS);
    expect(out[0].percent).toBeCloseTo(12 / 16);
  });

  it('tells "nobody did it" apart from "everybody scored nothing"', () => {
    /* Both would render as 0% if this collapsed to a number, and they mean
       opposite things to a teacher. */
    expect(summariseClass(1, [], PUPILS)[0].percent).toBeNull();
    expect(summariseClass(1, [row('a', 0, 0, 8)], PUPILS)[0].percent).toBe(0);
  });

  it('ignores results from someone who is not in the class', () => {
    // A deleted or blocked account must not count towards the class.
    const out = summariseClass(1, [row('a', 0, 8, 8), row('zz', 0, 8, 8)], PUPILS);
    expect(out[0].done).toBe(1);
    expect(out[0].missing).toEqual(['bram', 'chris']);
  });

  it('never reports more finishers than there are pupils', () => {
    // Two rows for one pupil is not two pupils.
    const out = summariseClass(1, [row('a', 0, 8, 8), row('a', 0, 6, 8)], PUPILS);
    expect(out[0].done).toBe(1);
    expect(out[0].total).toBe(3);
  });

  it('skips unscored rows when averaging but still counts them as done', () => {
    const out = summariseClass(1, [row('a', 0, 8, 8), row('b', 0, 0, 0)], PUPILS);
    expect(out[0].done).toBe(2);
    expect(out[0].percent).toBeCloseTo(1);
  });

  it('copes with an empty class', () => {
    const out = summariseClass(1, [], {});
    expect(out[0]).toMatchObject({ done: 0, total: 0, percent: null, missing: [] });
  });
});
