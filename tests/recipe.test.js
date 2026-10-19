/* Change 6: every summary rebuilt to the recipe of Economie TL4 H1 and
   Biologie BBL1 H1 (decided with Shamil, 2026-09-24). This test only checks
   books listed in tests/fixtures/recipe-headings.json -- a book goes in
   there when it is finished, and from then on it cannot slip back.

   Per paragraph: "Dit leer je", at least one sub-heading, a "Check jezelf",
   "Om te onthouden", about as much bold as the examples, and none of the
   inline `<span class='term'>` that renders as a broken box. The headings
   themselves must not change: practice levels are tied to paragraphs, so a
   renamed, added or removed paragraph moves students' saved progress. */
import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { CONTENT, CHAPTER_KEYS, loadAllContent } from '../src/content/index.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const FINISHED = JSON.parse(fs.readFileSync(path.join(root, 'tests/fixtures/recipe-headings.json'), 'utf8'));

await loadAllContent();

const count = (html, re) => (html.match(re) || []).length;
const MIN_BOLD = 8;

/* Opening and closing <div> tags must pair up, or the page layout breaks. */
function balanced(html) {
  return count(html, /<div\b/g) === count(html, /<\/div>/g);
}

for (const book of Object.keys(FINISHED)) {
  describe('recipe: ' + book, () => {
    const keys = CHAPTER_KEYS.filter((k) => k.startsWith(book + '|'));

    it('keeps every chapter and every paragraph heading exactly as it was', () => {
      const now = Object.fromEntries(keys.map((k) => [k, CONTENT[k].summary.map((s) => s.heading)]));
      expect(now).toEqual(FINISHED[book]);
    });

    for (const key of keys) {
      it(key + ' follows the recipe in every paragraph', () => {
        const problems = [];
        for (const s of CONTENT[key].summary) {
          const h = s.html;
          const where = key + ' ' + s.heading + ': ';
          if (!/class=["']leerdoelen/.test(h)) problems.push(where + 'no "Dit leer je"');
          if (!/class=["']sub/.test(h)) problems.push(where + 'no sub-heading');
          if (!/class=["']check/.test(h)) problems.push(where + 'no "Check jezelf"');
          if (!/call sum/.test(h)) problems.push(where + 'no "Om te onthouden"');
          if (count(h, /<b>/g) < MIN_BOLD) problems.push(where + 'only ' + count(h, /<b>/g) + ' bold');
          if (/<span class=["']term/.test(h)) problems.push(where + 'inline term span (renders as a broken box)');
          if (!balanced(h)) problems.push(where + 'unbalanced <div> tags');
        }
        expect(problems).toEqual([]);
      });
    }
  });
}

it('lists only books that exist', () => {
  for (const book of Object.keys(FINISHED)) {
    expect(CHAPTER_KEYS.some((k) => k.startsWith(book + '|'))).toBe(true);
  }
});
