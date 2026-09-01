/* buildStudyPlan() is pure (an explicit "today" argument, like screenFor() in
   authGate.js), so the spacing rules can be tested without localStorage. */
import { describe, it, expect } from 'vitest';
import { buildStudyPlan, studyStepsFor } from '../src/state/agenda.js';

const TODAY = '2026-08-31';

describe('buildStudyPlan', () => {
  it('returns nothing for a test date already in the past', () => {
    expect(buildStudyPlan('2026-08-30', 0, TODAY)).toEqual([]);
  });

  it('plans a single same-day session for a test today', () => {
    const plan = buildStudyPlan(TODAY, 0, TODAY);
    expect(plan).toHaveLength(1);
    expect(plan[0].date).toBe(TODAY);
    expect(plan[0].done).toBe(false);
  });

  it('only the day-before checkpoint survives for a test tomorrow', () => {
    const plan = buildStudyPlan('2026-09-01', 0, TODAY);
    expect(plan.map((s) => s.date)).toEqual(['2026-08-31']);
  });

  it('adds the 3-day checkpoint once there is room for it', () => {
    const plan = buildStudyPlan('2026-09-05', 0, TODAY); // 5 days out
    expect(plan.map((s) => s.date)).toEqual(['2026-09-02', '2026-09-04']);
  });

  it('uses all four checkpoints for a test far enough away', () => {
    const plan = buildStudyPlan('2026-09-14', 0, TODAY); // 14 days out
    expect(plan.map((s) => s.date)).toEqual(['2026-08-31', '2026-09-07', '2026-09-11', '2026-09-13']);
  });

  it('prepends a "start now" session when the test is more than 14 days out', () => {
    const plan = buildStudyPlan('2026-09-30', 0, TODAY); // 30 days out
    expect(plan[0].date).toBe(TODAY);
    expect(plan.map((s) => s.date)).toEqual(['2026-08-31', '2026-09-16', '2026-09-23', '2026-09-27', '2026-09-29']);
  });

  it('scales minutes with the number of linked chapters, capped at 60', () => {
    // The 5-day-out date has two sessions (3-day and 1-day checkpoints), so
    // plan[0] (the 3-day one) is not the boosted "last before the test" slot.
    expect(buildStudyPlan('2026-09-05', 0, TODAY)[0].minutes).toBe(20);
    expect(buildStudyPlan('2026-09-05', 1, TODAY)[0].minutes).toBe(20);
    expect(buildStudyPlan('2026-09-05', 3, TODAY)[0].minutes).toBe(40);
    expect(buildStudyPlan('2026-09-05', 10, TODAY)[0].minutes).toBe(60);
  });

  it('gives the last session before the test extra time', () => {
    const plan = buildStudyPlan('2026-09-05', 1, TODAY);
    expect(plan[plan.length - 1].minutes).toBe(30); // 20 * 1.5, rounded to 5
    expect(plan[0].minutes).toBe(20);
  });

  it('attaches a step-by-step recipe to every session', () => {
    const plan = buildStudyPlan('2026-09-14', 0, TODAY); // 14 days out, 4 sessions
    plan.forEach((s) => {
      expect(Array.isArray(s.steps)).toBe(true);
      expect(s.steps.length).toBeGreaterThan(0);
    });
    // First session: understand it. Last: test yourself.
    expect(plan[0].steps).toEqual(studyStepsFor(0, plan.length));
    expect(plan[plan.length - 1].steps).toEqual(studyStepsFor(plan.length - 1, plan.length));
  });
});

describe('studyStepsFor', () => {
  it('gives a single combined recipe when there is only one session', () => {
    expect(studyStepsFor(0, 1)).not.toEqual(studyStepsFor(0, 3)); // "enkel" differs from "eerste"
  });

  it('stages understand -> practice -> test yourself across a longer plan', () => {
    const first = studyStepsFor(0, 4);
    const middle = studyStepsFor(1, 4);
    const last = studyStepsFor(3, 4);
    expect(first).not.toEqual(middle);
    expect(middle).not.toEqual(last);
    expect(first).not.toEqual(last);
    // Every middle session (not just index 1) gets the same "practice" recipe.
    expect(studyStepsFor(2, 4)).toEqual(middle);
  });
});
