/* The progress bar in TASK.md (scripts/task-progress.mjs). */
import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { countTasks, withProgress, bar, pct, START } from '../scripts/task-progress.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const SAMPLE = `# Title

Intro.

## Next up
- [x] done one
- [ ] open one
  - [~] a sub-task in progress
- [!] blocked
- [?] a decision
- [—] cannot be done, not a task

## Ideas, parked
- [ ] an idea
`;

describe('counting', () => {
  it('counts every kind of box, sub-tasks included, and skips parked ideas', () => {
    const { overall, skipped } = countTasks(SAMPLE);
    expect(overall).toEqual({ done: 1, open: 1, doing: 1, blocked: 1, decide: 1, total: 5 });
    expect(skipped[0].total).toBe(1);
  });

  it('draws a bar to scale', () => {
    expect(bar(0, 10, 10)).toBe('░░░░░░░░░░');
    expect(bar(5, 10, 10)).toBe('█████░░░░░');
    expect(bar(10, 10, 10)).toBe('██████████');
    expect(pct(1, 3)).toBe(33);
    expect(pct(0, 0)).toBe(0);
  });

  it('inserts the block once, and replacing it again changes nothing', () => {
    const once = withProgress(SAMPLE);
    expect(once.split(START).length).toBe(2);
    expect(once).toContain('**Progress: 20%**');
    expect(withProgress(once)).toBe(once);
  });
});

it('the bar in TASK.md is up to date -- run `npm run tasks` after ticking boxes', () => {
  const task = fs.readFileSync(path.join(root, 'TASK.md'), 'utf8');
  expect(task).toContain(START);
  expect(withProgress(task)).toBe(task);
});
