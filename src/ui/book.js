/* Book screen: the chapters of the chosen subject/level/year. */
import { $, setHtml } from '../lib/dom.js';
import { chapterKey } from '../content/index.js';
import { selection, currentSubject, currentLevel, currentBook, chapterContent, selectionLabel } from '../state/selection.js';
import { progressFor } from '../state/progress.js';
import { questLabel } from './chapter.js';

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

  setHtml('bookBody', book.parts.map((part) => {
    const chapters = part.chapters;
    return '<div class="deel">' + (part.part ? ('<div class="deel-head"><h2>Deel ' + part.part + '</h2>'
      + '<span class="rng">hoofdstuk ' + chapters[0][0] + ' t/m ' + chapters[chapters.length - 1][0] + '</span>'
      + '<span class="status">' + (part.ready ? 'beschikbaar' : 'nog niet') + '</span></div>') : '') + '<div class="chapters">'
      + chapters.map((c, i) => {
        const hasContent = !!chapterContent(c[0]);
        const cls = 'chapter' + (part.ready ? (hasContent ? '' : ' leeg') : ' locked');
        const action = part.ready ? ' onclick="openChapter(\'' + c[0] + '\')"' : ' disabled';
        const p = progressFor(chapterKey(subject.id, selection.level, selection.year, c[0]));
        const badge = p && p.quizCompleted ? '<span class="rdy vg-quiz">✓ ' + p.quizCorrect + '/' + p.quizTotal + '</span>'
          : p && p.viewed ? '<span class="rdy vg-bekeken">gelezen</span>' : (hasContent ? '<span class="rdy">klaar</span>' : '');
        return '<button class="' + cls + '" style="animation-delay:' + (i * 70) + 'ms"' + action + '>'
          + '<i class="frame"></i>'
          + badge
          + '<div class="n">' + questLabel('HOOFDSTUK ' + c[0]) + '</div><h4>' + c[1] + '</h4><p>' + (c[2] || '&nbsp;') + '</p></button>';
      }).join('') + '</div></div>';
  }).join('')
  + '<div class="notice"><strong>Hoofdstuk 2 is helemaal af</strong>: met samenvatting, 42 flashcards, 20 quizvragen en 44 begrippen. '
  + 'De andere hoofdstukken vullen we op dezelfde manier aan.</div>');
}
