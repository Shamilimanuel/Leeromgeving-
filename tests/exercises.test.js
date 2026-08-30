// @vitest-environment jsdom
/* Every level of every chapter has to be playable: the session builder must
   come back with a full set of exercises, whatever the content looks like. */
import { describe, it, expect } from 'vitest';
import { CONTENT } from '../src/content/index.js';
import { levelsForChapter } from '../src/content/levels.js';
import { buildSession } from '../src/ui/exercises.js';

const SESSION_STEPS = 8;
const chapterKeys = Object.keys(CONTENT);

describe('building a session out of a level', () => {
  it('builds a full enough session for every level of every chapter', () => {
    // A session is capped at eight exercises but a small paragraph may hold
    // fewer; what matters is that no level is left nearly empty. Two levels in
    // the whole site bottom out at four, which is short but still a level.
    const thin = [];
    const kinds = new Set();
    let levels = 0;

    chapterKeys.forEach((key) => {
      levelsForChapter(CONTENT[key]).forEach((level) => {
        levels++;
        const steps = buildSession(CONTENT[key], level, SESSION_STEPS);
        steps.forEach((s) => kinds.add(s.kind));
        expect(steps.length).toBeLessThanOrEqual(SESSION_STEPS);
        if (steps.length < 4) thin.push(key + ' ' + level.title + ': ' + steps.length);
      });
    });

    expect(levels).toBeGreaterThan(500);
    expect(thin, 'levels with fewer than four exercises').toEqual([]);
    // Every exercise kind has to actually turn up somewhere in the content.
    expect([...kinds].sort()).toEqual(
      ['choice', 'gap', 'match', 'oddone', 'order', 'quiz', 'sort', 'truefalse', 'type'],
    );
  });

  it('never asks the same thing twice in one session', () => {
    const chapter = CONTENT['biologie|bbl|1|2'];
    levelsForChapter(chapter).forEach((level) => {
      for (let run = 0; run < 20; run++) {
        const steps = buildSession(chapter, level, SESSION_STEPS);
        const asked = steps.filter((s) => s.term).map((s) => s.term[0]);
        expect(new Set(asked).size, level.title + ' repeats a term').toBe(asked.length);
      }
    });
  });

  it('keeps the sort exercise to levels that span more than one paragraph', () => {
    chapterKeys.slice(0, 40).forEach((key) => {
      levelsForChapter(CONTENT[key]).forEach((level) => {
        const steps = buildSession(CONTENT[key], level, SESSION_STEPS);
        if (steps.some((s) => s.kind === 'sort')) {
          expect(new Set(level.sections).size).toBeGreaterThan(1);
        }
      });
    });
  });
});
