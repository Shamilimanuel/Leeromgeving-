/* Book screen: a winding path of chapter nodes, one layer above the
   per-chapter practice path in path.js -- same visual system (.pad,
   .pad-stap, .pad-knop, the LEAN shape), so the two screens read as one
   thing rather than two that happen to look alike.

   A chapter turns green once every one of its Oefenspel levels is done
   (src/state/gameLevels.js); the next chapter that is not is the single
   node that pulses gold and says START, exactly like the "next level" node
   inside a chapter. What does NOT carry over from the per-level path:
   chapters stay freely clickable regardless of progress. A level inside a
   chapter is meant to be played in order, but a book is not -- a student
   opening the site the night before a test on hoofdstuk 7 needs to reach it
   in one tap, not grind through 1-6 first. Only a chapter with no content at
   all (or a book part not yet released) is disabled. */
import { $, setHtml } from '../lib/dom.js';
import { chapterKey } from '../content/index.js';
import { selection, currentSubject, currentLevel, currentBook, chapterContent, selectionLabel } from '../state/selection.js';
import { progressFor } from '../state/progress.js';
import { levelsForChapter } from '../content/levels.js';
import { isLevelDone, gameXpForChapters } from '../state/gameLevels.js';
import { LEAN } from './path.js';
import { questLabel } from './chapter.js';

/* Everything a chapter node needs, computed once so the "which one is
   current" scan and the actual rendering agree with each other. */
function chapterRow(subject, c) {
  const content = chapterContent(c[0]);
  const hasContent = !!content;
  const key = chapterKey(subject.id, selection.level, selection.year, c[0]);
  const levels = hasContent ? levelsForChapter(content) : [];
  const doneCount = levels.filter((l) => isLevelDone(key, l.index)).length;
  const practicable = levels.length > 0;
  const allDone = practicable && doneCount === levels.length;
  return { c, key, levels, doneCount, practicable, allDone, hasContent };
}

function chapterNodeHtml(row, globalIndex, isCurrent) {
  const { c, key, levels, doneCount, practicable, allDone, hasContent } = row;
  const state = allDone ? 'klaar' : (!hasContent ? 'op-slot' : '');
  const face = allDone ? '✓'
    : !hasContent ? '<span class="icon icon-lock" aria-hidden="true"></span>'
      : c[0];
  const badge = allDone
    ? '<span class="pad-score">' + gameXpForChapters([key]) + ' XP</span>'
    : practicable ? '<span class="pad-score">' + doneCount + '/' + levels.length + ' levels</span>' : '';
  const label = questLabel('Hoofdstuk ' + c[0]);

  return '<li class="pad-stap' + (isCurrent ? ' nu' : '') + '" style="--lean:' + LEAN[globalIndex % LEAN.length] + 'px;animation-delay:' + (globalIndex * 70) + 'ms">'
    + '<button class="pad-knop' + (state ? ' ' + state : '') + '"'
    + (hasContent ? ' onclick="openChapter(\'' + c[0] + '\')"' : ' disabled')
    + ' aria-label="' + label + ': ' + (c[1] || '').replace(/"/g, '&quot;') + '">'
    + '<span class="pad-gezicht">' + face + '</span></button>'
    + '<div class="pad-tekst"><b>' + (c[1] || '') + '</b>'
    + '<small>' + label + (c[2] ? ' &middot; ' + c[2] : '') + '</small>'
    + badge + '</div>'
    + (isCurrent ? '<span class="pad-start">START</span>' : '')
    + '</li>';
}

/* A book part not released yet: the original flat, disabled card grid.
   Kept verbatim -- no book currently has one, but the schema still supports
   `ready:false` and a half-published book should not lose this fallback. */
function lockedPartHtml(subject, part) {
  return '<div class="chapters">' + part.chapters.map((c, i) => {
    const p = progressFor(chapterKey(subject.id, selection.level, selection.year, c[0]));
    const badge = p && p.quizCompleted ? '<span class="rdy vg-quiz">✓ ' + p.quizCorrect + '/' + p.quizTotal + '</span>'
      : p && p.viewed ? '<span class="rdy vg-bekeken">gelezen</span>' : '';
    return '<button class="chapter locked" style="animation-delay:' + (i * 70) + 'ms" disabled>'
      + '<i class="frame"></i>' + badge
      + '<div class="n">' + questLabel('HOOFDSTUK ' + c[0]) + '</div><h4>' + c[1] + '</h4><p>' + (c[2] || '&nbsp;') + '</p></button>';
  }).join('') + '</div>';
}

export function renderBook() {
  const subject = currentSubject();
  const book = currentBook();
  $('bkBrand').textContent = subject.name;
  $('bkCrumb').textContent = selectionLabel();
  $('bkPill').textContent = selectionLabel();
  $('bkTitle').textContent = subject.name + ': ' + currentLevel().name + ' leerjaar ' + selection.year;

  if (!book) {
    $('bkTag').textContent = '';
    const message = subject.id === 'burgerschap'
      ? '<div class="empty"><h3>Burgerschap zit bij Mens &amp; Maatschappij</h3>'
        + '<p>Voor dit lesprogramma wordt burgerschap gegeven via het vak <b>Mens &amp; Maatschappij</b>. '
        + 'Ga terug en kies dat vak in plaats van Burgerschap.</p></div>'
      : '<div class="empty"><h3>Dit boek staat er nog niet in</h3><p>Kies een ander leerjaar of niveau.</p></div>';
    setHtml('bookBody', message);
    return;
  }

  const total = book.parts.reduce((n, part) => n + part.chapters.length, 0);
  let available = 0;
  let completed = 0;
  book.parts.forEach((part) => {
    part.chapters.forEach((c) => {
      if (chapterContent(c[0])) available++;
      const p = progressFor(chapterKey(subject.id, selection.level, selection.year, c[0]));
      if (p && p.quizCompleted) completed++;
    });
  });
  $('bkTag').textContent =
    book.method + ' · ' + total + ' hoofdstukken, waarvan ' + available + ' met een volledige samenvatting.'
    + (completed ? ' · ' + completed + ' van ' + total + ' hoofdstukken afgerond.' : '')
    + (book.parts.length > 1 ? ' Het boek is uitgegeven in twee delen; hieronder staat alles bij elkaar.' : '');

  // Every chapter of every released part, in book order, with its practice
  // state worked out once. The lean/stagger index runs across all of them so
  // the winding shape flows from one deel into the next.
  const rows = [];
  book.parts.forEach((part) => { if (part.ready) part.chapters.forEach((c) => rows.push(chapterRow(subject, c))); });
  const currentRow = rows.find((r) => r.hasContent && r.practicable && !r.allDone);
  const practicableRows = rows.filter((r) => r.practicable);
  const doneChapters = practicableRows.filter((r) => r.allDone).length;
  const bookFinished = practicableRows.length > 0 && doneChapters === practicableRows.length;

  const summary = practicableRows.length === 0 ? '' : '<div class="pad-kop">'
    + '<div class="pad-kop-tel"><b>' + doneChapters + ' van de ' + practicableRows.length + '</b> hoofdstukken uitgespeeld</div>'
    + '<div class="pad-kop-xp">' + gameXpForChapters(rows.map((r) => r.key)) + ' XP</div>'
    + '<div class="prog pad-prog"><i style="width:' + Math.round((doneChapters / practicableRows.length) * 100) + '%"></i></div>'
    + '</div>';

  let globalIndex = 0;
  const parts = book.parts.map((part) => {
    const head = part.part ? ('<div class="deel-head"><h2>Deel ' + part.part + '</h2>'
      + '<span class="rng">hoofdstuk ' + part.chapters[0][0] + ' t/m ' + part.chapters[part.chapters.length - 1][0] + '</span>'
      + '<span class="status">' + (part.ready ? 'beschikbaar' : 'nog niet') + '</span></div>') : '';
    const body = part.ready
      ? '<ol class="pad">' + part.chapters.map(() => {
        const row = rows[globalIndex];
        const html = chapterNodeHtml(row, globalIndex, row === currentRow);
        globalIndex++;
        return html;
      }).join('') + '</ol>'
      : lockedPartHtml(subject, part);
    return '<div class="deel">' + head + body + '</div>';
  }).join('');

  setHtml('bookBody', summary + parts
    + (bookFinished
      ? '<div class="pad-af"><span class="icon icon-trophy" aria-hidden="true"></span> Dit boek is helemaal uitgespeeld. Je kunt elk hoofdstuk opnieuw oefenen.</div>'
      : ''));
}
