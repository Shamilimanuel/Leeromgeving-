/* Summary tab, including the optional SQ3R guided-reading mode
   (Survey, Question, Read, Recite, Review). */
import { setHtml, escapeHtml } from '../lib/dom.js';
import { chapterContent } from '../state/selection.js';
import { markChapterViewed } from '../state/progress.js';
import { sq3rQuestionFor, sq3rReciteText } from '../state/notes.js';
import { SCREENS, scrollScreenToTop } from './navigation.js';

const SQ3R_STEPS = ['Survey', 'Question', 'Read', 'Recite', 'Review'];
const LAST_STEP = SQ3R_STEPS.length - 1;
let sq3rActive = false;
let sq3rStep = 0;

export function resetSummaryState() {
  sq3rActive = false;
  sq3rStep = 0;
}

function sectionHtml(section, index) {
  return '<div class="sect" style="animation-delay:' + (index * 60) + 'ms"><h3>' + section.heading + '</h3>' + section.html + '</div>';
}

export function renderSummary(chapter) {
  const toggle = '<div class="bar sq3r-toggle"><button class="bt' + (sq3rActive ? '' : ' gh') + '" onclick="toggleSq3r()">\u{1F9ED} '
    + (sq3rActive ? 'Stop begeleide leeswijzer' : 'Begeleide leeswijzer (SQ3R)') + '</button></div>';
  if (!sq3rActive) {
    setHtml('chBody', toggle + chapter.summary.map(sectionHtml).join(''));
  } else {
    setHtml('chBody', toggle + sq3rHtml(chapter));
  }
  markChapterViewed();
}

/* Self-check blocks inside a summary: the content modules generate
   `<div class="check" onclick="toonCheck(this)">` with the question visible
   and the answer hidden, and the CSS reveals the answer once the block has
   the `toon` class (see `.check` in src/styles/content.css). Clicking again
   hides it, so a student can re-test themselves. */
export function toonCheck(el) {
  if (el) el.classList.toggle('toon');
}

export function toggleSq3r() {
  sq3rActive = !sq3rActive;
  sq3rStep = 0;
  renderSummary(chapterContent());
}

export function sq3rNext() {
  sq3rStep = Math.min(sq3rStep + 1, LAST_STEP);
  renderSummary(chapterContent());
  scrollScreenToTop(SCREENS.chapter);
}

export function sq3rPrevious() {
  sq3rStep = Math.max(sq3rStep - 1, 0);
  renderSummary(chapterContent());
  scrollScreenToTop(SCREENS.chapter);
}

function sq3rHtml(chapter) {
  const step = sq3rStep;
  let html = '<div class="sq3r"><div class="sq3r-stappen">' + SQ3R_STEPS.map((name, i) =>
    '<span class="sq3r-stap' + (i === step ? ' on' : '') + (i < step ? ' klaar' : '') + '">' + (i + 1) + '. ' + name + '</span>',
  ).join('') + '</div>';

  if (step === 0) {
    html += '<div class="sect"><h3>Stap 1 (Survey): verken het hoofdstuk</h3>'
      + '<p class="dim">Lees eerst alleen de koppen hieronder, zonder de tekst te lezen. Waar denk je dat dit hoofdstuk over gaat?</p>'
      + '<ul class="lst">' + chapter.summary.map((s) => '<li>' + s.heading + '</li>').join('') + '</ul></div>';
  } else if (step === 1) {
    html += '<div class="sect"><h3>Stap 2 (Question): bedenk vragen</h3>'
      + '<p class="dim">Maak van elke kop een vraag voor jezelf. Wat wil je straks kunnen beantwoorden?</p>'
      + chapter.summary.map((s, i) =>
        '<div class="sq3r-vraagrij"><b>' + s.heading + '</b>'
        + '<textarea class="groot-veld" placeholder="Jouw vraag hierbij…" oninput="saveSq3rQuestion(' + i + ',this.value)">'
        + escapeHtml(sq3rQuestionFor(i)) + '</textarea></div>',
      ).join('') + '</div>';
  } else if (step === 2) {
    html += chapter.summary.map(sectionHtml).join('');
  } else if (step === 3) {
    html += '<div class="sect"><h3>Stap 4 (Recite): vertel het na</h3>'
      + '<p class="dim">Kijk niet meer naar de tekst. Vertel in je eigen woorden wat dit hoofdstuk inhield.</p>'
      + '<textarea class="groot-veld" placeholder="Vertel hier in eigen woorden wat dit hoofdstuk ging…" oninput="saveSq3rRecite(this.value)">'
      + escapeHtml(sq3rReciteText()) + '</textarea></div>';
  } else if (step === 4) {
    html += '<div class="sect"><h3>Stap 5 (Review): test jezelf</h3>'
      + '<p>Goed gedaan! Ga nu naar <b>Flashcards</b> of de <b>Oefenquiz</b> hierboven om te testen wat je hebt onthouden.</p></div>';
  }

  html += '<div class="bar sq3r-nav">'
    + '<button class="bt gh" onclick="sq3rPrevious()"' + (step === 0 ? ' disabled' : '') + '>← Vorige</button>'
    + '<button class="bt" onclick="sq3rNext()"' + (step === LAST_STEP ? ' disabled' : '') + '>Volgende →</button></div></div>';
  return html;
}
