// @vitest-environment jsdom
/* Splitting a chapter into path levels, and remembering which were finished. */
import { describe, it, expect, beforeEach } from 'vitest';
import { levelsForChapter, levelSubtitle } from '../src/content/levels.js';
import {
  completeLevel, isLevelDone, isLevelUnlocked, currentLevelIndex,
  levelResult, totalGameXp, gameXpForChapters, clearGameLevels, xpForResult,
} from '../src/state/gameLevels.js';

/* A chapter with `perSection` terms and cards in each of `sections` paragraphs. */
function fakeChapter(sections, perSection) {
  const chapter = { summary: [], terms: [], cards: [] };
  for (let s = 0; s < sections; s++) {
    chapter.summary.push({ heading: (s + 1) + '.0 Kop ' + s, html: '' });
    for (let i = 0; i < perSection; i++) {
      chapter.terms.push(['term' + s + '-' + i, 'Omschrijving ' + s + '-' + i, s]);
      chapter.cards.push(['Vraag ' + s + '-' + i, 'Antwoord ' + s + '-' + i, s]);
    }
  }
  return chapter;
}

describe('splitting a chapter into levels', () => {
  it('makes one level per paragraph and ends on a final test', () => {
    const levels = levelsForChapter(fakeChapter(3, 4));   // 8 items per paragraph
    expect(levels.map((l) => l.title)).toEqual(['Level 1', 'Level 2', 'Level 3', 'Eindtoets']);
    expect(levels[3].isFinal).toBe(true);
    expect(levels[0].terms.length).toBe(4);
    // The final level draws from the whole chapter.
    expect(levels[3].terms.length).toBe(12);
  });

  it('merges paragraphs that are too thin to practise on their own', () => {
    // One term + one card per paragraph is under the six-item minimum, so
    // paragraphs are folded together instead of becoming stub levels.
    const levels = levelsForChapter(fakeChapter(6, 1));
    expect(levels.length).toBeLessThan(6);
    levels.filter((l) => !l.isFinal).forEach((level) => {
      expect(level.terms.length + level.cards.length).toBeGreaterThanOrEqual(4);
    });
  });

  it('does not add a final test to a chapter with a single level', () => {
    const levels = levelsForChapter(fakeChapter(1, 5));
    expect(levels.length).toBe(1);
    expect(levels[0].isFinal).toBe(false);
  });

  it('returns nothing for a chapter without content', () => {
    expect(levelsForChapter(null)).toEqual([]);
    expect(levelsForChapter({ summary: [], terms: [], cards: [] })).toEqual([]);
  });

  it('strips the paragraph numbering from the subtitle', () => {
    const chapter = fakeChapter(2, 4);
    const levels = levelsForChapter(chapter);
    expect(levelSubtitle(chapter, levels[0])).toBe('Kop 0');
  });
});

describe('remembering finished levels', () => {
  const key = 'biologie|bbl|1|2';
  beforeEach(() => clearGameLevels());

  it('opens level 1 and locks the rest until the one before is done', () => {
    expect(isLevelUnlocked(key, 0)).toBe(true);
    expect(isLevelUnlocked(key, 1)).toBe(false);
    completeLevel(key, 0, 8, 8);
    expect(isLevelDone(key, 0)).toBe(true);
    expect(isLevelUnlocked(key, 1)).toBe(true);
    expect(isLevelUnlocked(key, 2)).toBe(false);
  });

  it('points at the first level that is not finished yet', () => {
    expect(currentLevelIndex(key, 4)).toBe(0);
    completeLevel(key, 0, 6, 8);
    expect(currentLevelIndex(key, 4)).toBe(1);
    completeLevel(key, 1, 8, 8);
    expect(currentLevelIndex(key, 4)).toBe(2);
  });

  it('pays a bonus for a faultless level', () => {
    expect(xpForResult(6, 8)).toBe(60);
    expect(xpForResult(8, 8)).toBe(100);          // 80 + 20 bonus
  });

  it('only pays for the improvement when a level is replayed', () => {
    const first = completeLevel(key, 0, 5, 8);
    expect(first.gained).toBe(50);
    expect(first.first).toBe(true);

    const worse = completeLevel(key, 0, 2, 8);
    expect(worse.gained).toBe(0);                 // no XP for doing worse
    expect(levelResult(key, 0).best).toBe(5);     // and the best score stands

    const better = completeLevel(key, 0, 8, 8);
    expect(better.gained).toBe(50);               // 100 earned, 50 already paid
    expect(better.improved).toBe(true);
    expect(totalGameXp()).toBe(100);
  });

  it('counts XP per chapter for the subject statistics', () => {
    completeLevel(key, 0, 8, 8);
    completeLevel('biologie|bbl|1|3', 0, 4, 8);
    expect(gameXpForChapters([key])).toBe(100);
    expect(gameXpForChapters([key, 'biologie|bbl|1|3'])).toBe(140);
    expect(gameXpForChapters(['aardrijkskunde|tl|1|1'])).toBe(0);
  });
});
