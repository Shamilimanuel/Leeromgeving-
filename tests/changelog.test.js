/* The changelog is what students see after an update, and APP_VERSION is what
   decides whether they see it at all. These checks catch the two mistakes that
   are easy to make when releasing: forgetting to bump one of the two version
   numbers, and adding an entry below the newest one instead of above it. */
import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { APP_VERSION, CHANGELOG, isNewerVersion, entriesSince } from '../src/content/changelog.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const packageVersion = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8')).version;
const workerSource = fs.readFileSync(path.join(root, 'public', 'sw.js'), 'utf8');

describe('changelog', () => {
  it('APP_VERSION matches the version in package.json', () => {
    expect(APP_VERSION).toBe(packageVersion);
  });

  /* Without this the update is invisible: a browser installs a new service
     worker only when sw.js changed byte-for-byte, so a release that forgets
     this line ships silently and nobody is told there is a new version. */
  it('APP_VERSION matches the one baked into public/sw.js', () => {
    const inWorker = workerSource.match(/var APP_VERSION = '([^']+)'/);
    expect(inWorker, "public/sw.js should declare var APP_VERSION = '...'").not.toBeNull();
    expect(inWorker[1]).toBe(APP_VERSION);
  });

  it('the newest entry is the current version', () => {
    expect(CHANGELOG[0].version).toBe(APP_VERSION);
  });

  it('is ordered newest first, with no repeated version', () => {
    for (let i = 1; i < CHANGELOG.length; i += 1) {
      expect(
        isNewerVersion(CHANGELOG[i - 1].version, CHANGELOG[i].version),
        CHANGELOG[i - 1].version + ' should come after ' + CHANGELOG[i].version,
      ).toBe(true);
    }
  });

  it('every entry is complete', () => {
    for (const entry of CHANGELOG) {
      expect(entry.version).toMatch(/^\d+\.\d+\.\d+$/);
      expect(entry.date).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(entry.title.length).toBeGreaterThan(0);
      expect(entry.changes.length).toBeGreaterThan(0);
      for (const line of entry.changes) {
        expect(typeof line).toBe('string');
        expect(line.trim().length).toBeGreaterThan(0);
      }
    }
  });
});

describe('isNewerVersion', () => {
  it('compares part by part, not as text', () => {
    expect(isNewerVersion('2.10.0', '2.9.0')).toBe(true);   // "10" < "9" as text
    expect(isNewerVersion('2.3.0', '2.3.0')).toBe(false);
    expect(isNewerVersion('2.2.9', '2.3.0')).toBe(false);
    expect(isNewerVersion('3.0.0', '2.99.99')).toBe(true);
  });

  it('treats a missing or broken value as 0', () => {
    expect(isNewerVersion('1.0.0', null)).toBe(true);
    expect(isNewerVersion('2.3', '2.3.0')).toBe(false);
    expect(isNewerVersion('kapot', '0.0.1')).toBe(false);
  });
});

describe('entriesSince', () => {
  it('returns only what a student has not seen', () => {
    const oldest = CHANGELOG[CHANGELOG.length - 1].version;
    expect(entriesSince(APP_VERSION)).toEqual([]);
    expect(entriesSince(oldest)).toHaveLength(CHANGELOG.length - 1);
    expect(entriesSince('0.0.1')).toHaveLength(CHANGELOG.length);
  });

  it('returns the whole history when nothing was seen yet', () => {
    expect(entriesSince(null)).toEqual(CHANGELOG);
    expect(entriesSince('')).toEqual(CHANGELOG);
  });
});
