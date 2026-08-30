/* Which practice levels a student finished, and what they earned for them.

   Stored under its own localStorage key as
   { "<chapterKey>": { "<levelIndex>": { done, best, total, xp } } }
   so it sits next to the existing progress rather than inside it. */
import { readJson, writeJson, STORAGE_KEYS as K } from '../lib/storage.js';

export const XP_PER_CORRECT = 10;
export const XP_PERFECT_BONUS = 20;

export function allGameLevels() {
  const stored = readJson(K.gameLevels, {});
  return stored && typeof stored === 'object' ? stored : {};
}

export function levelsDoneFor(chapterKey) {
  return allGameLevels()[chapterKey] || {};
}

export function levelResult(chapterKey, index) {
  return levelsDoneFor(chapterKey)[String(index)] || null;
}

export function isLevelDone(chapterKey, index) {
  const result = levelResult(chapterKey, index);
  return !!(result && result.done);
}

/* Level 1 is always open; after that you need the level before it. */
export function isLevelUnlocked(chapterKey, index) {
  return index === 0 || isLevelDone(chapterKey, index - 1);
}

/* The level the student should play next, or the last one when all are done. */
export function currentLevelIndex(chapterKey, count) {
  for (let i = 0; i < count; i++) if (!isLevelDone(chapterKey, i)) return i;
  return Math.max(0, count - 1);
}

export function xpForResult(correct, total) {
  return correct * XP_PER_CORRECT + (total && correct === total ? XP_PERFECT_BONUS : 0);
}

/* Record a finished level. A replay keeps the best score, and only ever adds
   XP for the part that improved, so grinding one level is not worth it. */
export function completeLevel(chapterKey, index, correct, total) {
  const all = allGameLevels();
  const chapter = all[chapterKey] || (all[chapterKey] = {});
  const key = String(index);
  const previous = chapter[key] || { done: false, best: 0, total: 0, xp: 0 };
  const earned = xpForResult(correct, total);
  const gained = Math.max(0, earned - previous.xp);

  chapter[key] = {
    done: true,
    best: Math.max(previous.best, correct),
    total,
    xp: Math.max(previous.xp, earned),
  };
  writeJson(K.gameLevels, all);
  return { gained, total: chapter[key].xp, improved: correct > previous.best, first: !previous.done };
}

/* Total XP earned in the practice game, over every chapter. */
export function totalGameXp() {
  const all = allGameLevels();
  return Object.keys(all).reduce((sum, chapterKey) => sum
    + Object.keys(all[chapterKey]).reduce((n, index) => n + (all[chapterKey][index].xp || 0), 0), 0);
}

/* XP earned in the chapters given, for the per-subject statistics. */
export function gameXpForChapters(chapterKeys) {
  const all = allGameLevels();
  return chapterKeys.reduce((sum, key) => {
    const chapter = all[key];
    if (!chapter) return sum;
    return sum + Object.keys(chapter).reduce((n, index) => n + (chapter[index].xp || 0), 0);
  }, 0);
}

/* Fold rows coming back from the server into what is stored locally, keeping
   whichever side did better. Used after signing in on another device. */
export function mergeServerLevels(rows) {
  const all = allGameLevels();
  let changed = 0;
  (rows || []).forEach((row) => {
    const chapterKey = row.hoofdstuk;
    const key = String(row.level);
    if (!chapterKey) return;
    const chapter = all[chapterKey] || (all[chapterKey] = {});
    const mine = chapter[key];
    if (mine && mine.xp >= (row.xp || 0) && mine.best >= (row.beste || 0)) return;
    chapter[key] = {
      done: true,
      best: Math.max(mine ? mine.best : 0, row.beste || 0),
      total: Math.max(mine ? mine.total : 0, row.totaal || 0),
      xp: Math.max(mine ? mine.xp : 0, row.xp || 0),
    };
    changed++;
  });
  if (changed) writeJson(K.gameLevels, all);
  return changed;
}

export function clearGameLevels() {
  writeJson(K.gameLevels, {});
}
