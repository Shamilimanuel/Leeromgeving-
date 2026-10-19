/* Writes the progress bar at the top of TASK.md: `npm run tasks`.

   Counts the checkboxes per `## ` section and overall, and replaces what sits
   between the two markers below. A checkbox is `- [x]` done, `- [ ]` open,
   `- [~]` in progress, `- [!]` blocked, `- [?]` waiting on a decision. The
   percentage is done / all. "Ideas, parked" is left out: parked ideas are not
   commitments, and counting them would make the bar mean less.

   tests/taskProgress.test.js fails when the bar in TASK.md is out of date, so
   ticking a box without running this is caught by `npm run check`. */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const START = '<!-- progress:start -->';
export const END = '<!-- progress:end -->';
export const SKIPPED = ['Ideas, parked'];
const BOX = /^\s*- \[(.)\]/;
const WIDTH = 20;

export function bar(done, total, width = WIDTH) {
  const filled = total ? Math.round((done / total) * width) : 0;
  return '█'.repeat(filled) + '░'.repeat(width - filled);
}

export function pct(done, total) {
  return total ? Math.round((done / total) * 100) : 0;
}

/* { overall, sections: [{ name, done, open, doing, blocked, decide, total }] } */
export function countTasks(markdown) {
  const sections = [];
  let current = null;
  for (const line of markdown.split(/\r?\n/)) {
    const heading = /^## (.+)$/.exec(line);
    if (heading) {
      current = { name: heading[1].trim(), done: 0, open: 0, doing: 0, blocked: 0, decide: 0, total: 0 };
      sections.push(current);
      continue;
    }
    const box = BOX.exec(line);
    if (!box || !current) continue;
    const mark = box[1];
    if (mark === 'x') current.done++;
    else if (mark === ' ') current.open++;
    else if (mark === '~') current.doing++;
    else if (mark === '!') current.blocked++;
    else if (mark === '?') current.decide++;
    else continue;           // e.g. [—] "cannot be done", not a task
    current.total++;
  }
  const counted = sections.filter((s) => s.total && !SKIPPED.includes(s.name));
  const overall = counted.reduce((sum, s) => {
    for (const k of ['done', 'open', 'doing', 'blocked', 'decide', 'total']) sum[k] += s[k];
    return sum;
  }, { done: 0, open: 0, doing: 0, blocked: 0, decide: 0, total: 0 });
  return { overall, sections: counted, skipped: sections.filter((s) => s.total && SKIPPED.includes(s.name)) };
}

export function progressBlock(markdown) {
  const { overall: o, sections, skipped } = countTasks(markdown);
  const rows = sections.map((s) => '| ' + s.name + ' | `' + bar(s.done, s.total, 10) + '` | '
    + pct(s.done, s.total) + '% (' + s.done + '/' + s.total + ') |');
  const parked = skipped.reduce((n, s) => n + s.total, 0);
  return [
    START,
    '**Progress: ' + pct(o.done, o.total) + '%** `' + bar(o.done, o.total) + '` '
      + o.done + ' of ' + o.total + ' done · ' + o.doing + ' in progress · ' + o.open + ' open · '
      + o.blocked + ' blocked · ' + o.decide + ' waiting on a decision',
    '',
    '| Section | | Done |',
    '|---|---|---|',
    ...rows,
    '',
    '*Updated by `npm run tasks`.' + (parked ? ' The ' + parked + ' parked ideas do not count.' : '') + '*',
    END,
  ].join('\n');
}

/* The markdown with its progress block replaced (or inserted after the
   first paragraph under the title when there is none yet). */
export function withProgress(markdown) {
  const block = progressBlock(markdown.replace(new RegExp(START + '[\\s\\S]*?' + END), ''));
  if (markdown.includes(START)) {
    return markdown.replace(new RegExp(START + '[\\s\\S]*?' + END), block);
  }
  const lines = markdown.split('\n');
  const at = lines.findIndex((l, i) => i > 0 && l.trim() === '');
  lines.splice(at + 1, 0, block, '');
  return lines.join('\n');
}

const file = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'TASK.md');
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const before = fs.readFileSync(file, 'utf8');
  const after = withProgress(before);
  fs.writeFileSync(file, after);
  const { overall: o } = countTasks(after);
  console.log('TASK.md: ' + pct(o.done, o.total) + '% (' + o.done + ' of ' + o.total + ' done)');
}
