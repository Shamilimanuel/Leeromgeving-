/* Level / XP / mastery per subject, shown on the character cards.
   There is no separate points counter: everything is derived from data that
   already exists (chapter progress + Leitner boxes), using the same "+N XP"
   language the quiz and exam results use. */
import { allProgress, allLeitner, LEITNER_MAX_BOX } from './progress.js';
import { chapterKeysForSubject } from '../content/queries.js';

export const XP_PER_CHAPTER_READ = 25;
export const XP_PER_CORRECT_ANSWER = 10;
export const XP_PER_MASTERED_CARD = 5;

export function xpForLevel(level) {
  return 100 * level * level;
}

export function levelForXp(xp) {
  let level = 1;
  while (xp >= xpForLevel(level + 1)) level++;
  return level;
}

export function subjectStatistics(subjectId) {
  const keys = chapterKeysForSubject(subjectId);
  const progress = allProgress();
  const leitner = allLeitner();
  const chapters = keys.length;
  let read = 0;
  let xp = 0;
  let quizAttempts = 0;
  let quizPctSum = 0;
  let cardsTotal = 0;
  let cardsScoreSum = 0;
  let cardsMastered = 0;

  keys.forEach((key) => {
    const p = progress[key];
    if (p && p.viewed) {
      read++;
      xp += XP_PER_CHAPTER_READ;
    }
    if (p && p.quizCompleted && p.quizTotal) {
      quizAttempts++;
      quizPctSum += p.quizCorrect / p.quizTotal;
      xp += p.quizCorrect * XP_PER_CORRECT_ANSWER;
    }
    const cards = leitner[key];
    if (cards) {
      Object.keys(cards).forEach((id) => {
        const box = cards[id].box;
        cardsTotal++;
        cardsScoreSum += box / LEITNER_MAX_BOX;
        if (box >= LEITNER_MAX_BOX) {
          cardsMastered++;
          xp += XP_PER_MASTERED_CARD;
        }
      });
    }
  });

  const readPct = chapters ? read / chapters : 0;
  const quizAvgPct = quizAttempts ? quizPctSum / quizAttempts : 0;
  const cardPct = cardsTotal ? cardsScoreSum / cardsTotal : 0;
  const mastery = Math.round(((readPct + quizAvgPct + cardPct) / 3) * 100);
  const level = levelForXp(xp);
  const thresholdNow = xpForLevel(level);
  const thresholdNext = xpForLevel(level + 1);
  const xpProgress = thresholdNext > thresholdNow ? (xp - thresholdNow) / (thresholdNext - thresholdNow) : 1;

  return {
    chapters,
    read,
    xp,
    level,
    xpNext: thresholdNext,
    xpProgress: Math.max(0, Math.min(1, xpProgress)),
    quizAttempts,
    quizAveragePct: Math.round(quizAvgPct * 100),
    cardsTotal,
    cardsMastered,
    mastery,
  };
}
