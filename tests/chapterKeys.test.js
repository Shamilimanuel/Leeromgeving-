/* Two modules must never register the same chapter key.

   Nothing checked this, and it went wrong: `content:build` numbered chapters
   by their position inside one JSON file, so the second file of a book started
   at 1 again and wrote 27 modules whose `registerChapter` key was already
   taken. Both files load, the registry keeps whichever imported last, and a
   chapter is silently replaced by a different one -- Biologie TL1 "Onderzoeken
   en ontdekken" became "Gedrag" with no error anywhere.

   The build no longer does that (data/*.json carries "eerste_hoofdstuk" and
   scripts/check_content.py refuses a collision), but this test is the one that
   catches it at the point where it actually hurts: the content on disk. */
import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const subjectsDir = path.join(root, 'src', 'content', 'subjects');

function chapterModules(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...chapterModules(full));
    else if (entry.name.endsWith('.js')) out.push(full);
  }
  return out;
}

describe('chapter keys', () => {
  const files = chapterModules(subjectsDir);
  const byKey = new Map();
  for (const file of files) {
    const source = fs.readFileSync(file, 'utf8');
    const match = /registerChapter\('([^']+)'/.exec(source);
    if (!match) continue;
    const rel = path.relative(subjectsDir, file).split(path.sep).join('/');
    if (!byKey.has(match[1])) byKey.set(match[1], []);
    byKey.get(match[1]).push(rel);
  }

  it('finds the chapter modules at all', () => {
    expect(byKey.size).toBeGreaterThan(200);
  });

  it('no chapter key is registered by two modules', () => {
    const clashes = [...byKey.entries()]
      .filter(([, files_]) => files_.length > 1)
      .map(([key, files_]) => `${key}: ${files_.join(' + ')}`);
    expect(clashes).toEqual([]);
  });

  it('every key matches its own folder and file name', () => {
    const wrong = [];
    for (const [key, [rel]] of byKey) {
      const [subject, level, year, chapter] = key.split('|');
      const expectedDir = `${subject}/${level}${year}/`;
      if (!rel.startsWith(expectedDir)) {
        wrong.push(`${key} lives in ${rel}, expected ${expectedDir}`);
        continue;
      }
      const nr = /^h(\d+)-/.exec(rel.slice(expectedDir.length));
      if (!nr || Number(nr[1]) !== Number(chapter)) {
        wrong.push(`${key} is in ${rel}, whose number does not match chapter ${chapter}`);
      }
    }
    expect(wrong).toEqual([]);
  });
});
