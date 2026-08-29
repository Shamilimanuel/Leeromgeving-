/* Loads every subject and chapter module and checks that the registry is consistent.
   This replaces the old "load the site in Node with a fake document" check. */
import { describe, it, expect } from 'vitest';
import { BOOKS, CONTENT, SUBJECTS, LEVELS, SUBJECT_YEARS, parseKey, subjectById, levelById, chapterKey } from '../src/content/index.js';

const subjectIds = SUBJECTS.map((s) => s.id);
const levelIds = LEVELS.map((l) => l.id);

describe('content registry', () => {
  it('loads a substantial amount of content', () => {
    expect(SUBJECTS.length).toBeGreaterThan(0);
    expect(Object.keys(BOOKS).length).toBeGreaterThan(0);
    expect(Object.keys(CONTENT).length).toBeGreaterThan(200);
  });

  it('uses valid book keys', () => {
    for (const key of Object.keys(BOOKS)) {
      const parts = key.split('|');
      expect(parts, key).toHaveLength(3);
      expect(subjectIds, key).toContain(parts[0]);
      expect(levelIds, key).toContain(parts[1]);
      expect(Number(parts[2]), key).toBeGreaterThan(0);
      expect(BOOKS[key].method, key).toBeTypeOf('string');
      expect(Array.isArray(BOOKS[key].parts), key).toBe(true);
    }
  });

  it('uses valid chapter keys', () => {
    for (const key of Object.keys(CONTENT)) {
      const { subject, level, year, chapter } = parseKey(key);
      expect(subjectById(subject), key).toBeDefined();
      expect(levelById(level), key).toBeDefined();
      expect(Number(year), key).toBeGreaterThan(0);
      expect(Number(chapter), key).toBeGreaterThan(0);
      expect(CONTENT[key], key).toBeTruthy();
    }
  });

  it('gives every chapter the expected shape', () => {
    for (const [key, c] of Object.entries(CONTENT)) {
      expect(c.title, key).toBeTypeOf('string');
      expect(Array.isArray(c.summary), key).toBe(true);
      for (const section of c.summary) {
        expect(section.heading, key).toBeTypeOf('string');
        expect(section.html, key).toBeTypeOf('string');
      }
      // [text, explanation] or [text, explanation, sectionIndex]; hand-written
      // chapters may omit the index (the UI then guesses the section).
      for (const entry of [...c.terms, ...c.cards]) {
        expect(entry.length, key).toBeGreaterThanOrEqual(2);
        expect(entry.length, key).toBeLessThanOrEqual(3);
        expect(entry[0], key).toBeTypeOf('string');
        expect(entry[1], key).toBeTypeOf('string');
        if (entry.length === 3) {
          expect(entry[2], key).toBeGreaterThanOrEqual(-1);
          expect(entry[2], key).toBeLessThan(c.summary.length);
        }
      }
      for (const q of c.quiz) {
        expect(q, key).toHaveLength(4);
        expect(q[1].length, key).toBeGreaterThanOrEqual(2);
        expect(q[2], key).toBeGreaterThanOrEqual(0);
        expect(q[2], key).toBeLessThan(q[1].length);
      }
    }
  });

  it('has content for every chapter a book marks as ready', () => {
    const missing = [];
    for (const [key, book] of Object.entries(BOOKS)) {
      const [subject, level, year] = key.split('|');
      for (const part of book.parts) {
        if (!part.ready) continue;
        for (const [nr, title] of part.chapters) {
          const k = chapterKey(subject, level, year, nr);
          if (!CONTENT[k]) missing.push(k + ' (' + title + ')');
        }
      }
    }
    expect(missing).toEqual([]);
  });

  it('only lists known subjects and levels in SUBJECT_YEARS', () => {
    for (const [subject, table] of Object.entries(SUBJECT_YEARS)) {
      expect(subjectIds).toContain(subject);
      for (const level of Object.keys(table)) expect(levelIds).toContain(level);
    }
  });
});
