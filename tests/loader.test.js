/* Chapter content loads per book (src/content/loader.js). These tests pin the
   three things that make that safe: nothing is loaded up front, the file index
   agrees with what the modules register, and only the books a student opened
   are remembered for offline use. */
import { describe, it, expect, beforeAll } from 'vitest';

const store = new Map();
const memoryStorage = {
  getItem: (k) => (store.has(k) ? store.get(k) : null),
  setItem: (k, v) => store.set(k, String(v)),
  removeItem: (k) => store.delete(k),
  clear: () => store.clear(),
};
Object.defineProperty(globalThis, 'localStorage', { value: memoryStorage, configurable: true });

let content;
let queries;

beforeAll(async () => {
  content = await import('../src/content/index.js');
  queries = await import('../src/content/queries.js');
});

describe('before anything is opened', () => {
  it('knows every chapter without loading one', () => {
    expect(content.CHAPTER_KEYS.length).toBeGreaterThan(200);
    expect(Object.keys(content.CONTENT)).toEqual([]);
  });

  it('can list and name a subject\'s chapters without loading them', () => {
    const keys = queries.chapterKeysForSubject('economie');
    expect(keys.length).toBeGreaterThan(0);
    expect(queries.chapterTitle('economie|tl|4|1')).toBe('Inkomen en welvaart');
    expect(Object.keys(content.CONTENT)).toEqual([]);
  });

  it('rejects a chapter that does not exist', async () => {
    await expect(content.loadChapter('economie|tl|4|99')).rejects.toThrow();
  });
});

describe('opening one book', () => {
  it('loads that book and nothing else', async () => {
    await content.loadBook('economie', 'tl', 4);
    const loaded = Object.keys(content.CONTENT);
    expect(loaded.length).toBeGreaterThan(0);
    expect(loaded.every((key) => key.startsWith('economie|tl|4|'))).toBe(true);
    expect(loaded.sort()).toEqual(content.CHAPTER_KEYS.filter((key) => key.startsWith('economie|tl|4|')));
  });

  it('remembers the book for offline use', () => {
    expect(JSON.parse(localStorage.getItem('geopendeBoeken'))).toEqual(['economie|tl|4']);
  });
});

describe('loading everything (search, exam)', () => {
  it('loads every chapter, and the file index matches what the modules register', async () => {
    const { total, failed } = await content.loadAllContent();
    expect(failed).toBe(0);
    expect(total).toBe(content.BOOK_KEYS.length);
    expect(Object.keys(content.CONTENT).sort()).toEqual(content.CHAPTER_KEYS);
  });

  it('does not mark every book as opened', () => {
    expect(JSON.parse(localStorage.getItem('geopendeBoeken'))).toEqual(['economie|tl|4']);
  });

  /* Lists (agenda, admin, stats) show the registry title so they need not load
     the chapter; the chapter screen shows the module's. They must agree. */
  it('gives every chapter the same title in its registry as in its module', () => {
    const differ = content.CHAPTER_KEYS
      .filter((key) => queries.chapterTitle(key) !== content.CONTENT[key].title)
      .map((key) => key + ': "' + queries.chapterTitle(key) + '" vs "' + content.CONTENT[key].title + '"');
    expect(differ).toEqual([]);
  });
});
