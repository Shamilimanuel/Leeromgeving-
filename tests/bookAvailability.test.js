/* The level picker offers a year because the subject is *taught* then
   (SUBJECT_YEARS), which says nothing about whether we have written that book.
   Arbeid and BK are taught across the board and summarised nowhere, so before
   `hasBook` guarded the picker, 41 of the 77 combinations it offered opened on
   "dit boek staat er nog niet in".

   These tests hold the two halves apart: what is offered as openable must
   exist, and what exists must be reachable. */
import { describe, it, expect } from 'vitest';
import { SUBJECTS, LEVELS, SUBJECT_YEARS, BOOKS, bookKey } from '../src/content/index.js';
import { hasBook, bookYearsFor } from '../src/content/queries.js';

function everyCombination() {
  const out = [];
  for (const subject of SUBJECTS) {
    for (const level of LEVELS) {
      const years = (SUBJECT_YEARS[subject.id] || {})[level.id];
      if (!years) continue;
      for (const year of years) out.push({ subject, level, year });
    }
  }
  return out;
}

describe('book availability', () => {
  it('every year the picker leaves openable has a registered book', () => {
    const broken = [];
    for (const { subject, level } of everyCombination()) {
      for (const year of bookYearsFor(subject.id, level.id)) {
        if (!BOOKS[bookKey(subject.id, level.id, year)]) broken.push(`${subject.name} ${level.name}${year}`);
      }
    }
    expect(broken).toEqual([]);
  });

  it('every registered book is reachable from the picker', () => {
    const unreachable = Object.keys(BOOKS).filter((key) => {
      const [subjectId, levelId, year] = key.split('|');
      const years = bookYearsFor(subjectId, levelId) || [];
      return !years.includes(Number(year));
    });
    expect(unreachable).toEqual([]);
  });

  /* Not an aspiration: these are the gaps as they stand, and the picker is
     expected to grey them out rather than pretend they open. If a book gets
     written this number goes down and the test says so. */
  it('reports the combinations that are taught but not summarised', () => {
    const missing = everyCombination()
      .filter(({ subject, level, year }) => !hasBook(subject.id, level.id, year))
      .map(({ subject, level, year }) => `${subject.name} ${level.name}${year}`);
    expect(missing).toHaveLength(41);
    expect(missing).toContain('Wiskunde TL1');
    expect(missing).toContain('Maatschappijkunde TL3');
  });
});
