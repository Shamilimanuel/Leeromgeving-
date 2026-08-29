/* Quiz tab, with a "practice the questions you got wrong" mode. */
import { $, setHtml } from '../lib/dom.js';
import { chapterContent } from '../state/selection.js';
import { mistakesForChapter, addMistake, removeMistake, markQuizCompleted } from '../state/progress.js';
import { XP_PER_CORRECT_ANSWER } from '../state/stats.js';
import { SCREENS, scrollScreenToTop } from './navigation.js';

let answers = null;        // chosen option index per question, or null
let mistakeMode = false;   // only show questions that were answered wrong earlier

export function resetQuizState() {
  answers = null;
  mistakeMode = false;
}

/* Indices of the questions currently shown. */
function questionIndices(chapter) {
  if (mistakeMode) {
    const mistakes = mistakesForChapter();
    if (mistakes.length) return mistakes;
    mistakeMode = false;
  }
  return chapter.quiz.map((_, i) => i);
}

export function toggleMistakeMode() {
  mistakeMode = !mistakeMode;
  renderQuiz(chapterContent());
}

export function renderQuiz(chapter) {
  if (!chapter.quiz.length) {
    setHtml('chBody',
      '<div class="empty"><h3>Nog geen oefenvragen</h3>'
      + '<p>Bij dit hoofdstuk staan nog geen quizvragen. Gebruik zolang de flashcards en de begrippenlijst om te oefenen.</p></div>');
    return;
  }
  if (!answers) answers = new Array(chapter.quiz.length).fill(null);
  const mistakeCount = mistakesForChapter().length;
  setHtml('chBody',
    '<div class="scorebar"><b id="scoreTxt">0 van ' + chapter.quiz.length + ' beantwoord</b>'
    + '<div class="prog"><i id="progBar"></i></div>'
    + (mistakeCount ? '<button class="bt' + (mistakeMode ? '' : ' gh') + '" onclick="toggleMistakeMode()">\u{1F501} ' + (mistakeMode ? 'Alle vragen' : 'Oefen foute vragen (' + mistakeCount + ')') + '</button>' : '')
    + '<button class="bt gh" onclick="resetQuiz()">↺ Opnieuw</button></div>'
    + '<div id="qlist"></div><div id="qres"></div>');
  drawQuiz(chapter);
}

function drawQuiz(chapter) {
  const indices = questionIndices(chapter);
  setHtml('qlist', indices.map((i, position) => {
    const q = chapter.quiz[i];
    return '<div class="qq" style="animation-delay:' + (position * 35) + 'ms"><div class="qn">VRAAG ' + (i + 1) + ' VAN ' + chapter.quiz.length + '</div>'
      + '<h4>' + q[0] + '</h4>'
      + q[1].map((option, j) => '<button class="opt" id="o' + i + '-' + j + '" onclick="answerQuestion(' + i + ',' + j + ')">' + option + '</button>').join('')
      + '<div class="fb" id="fb' + i + '"></div></div>';
  }).join(''));
  indices.forEach((i) => { if (answers[i] !== null) showAnswer(chapter, i, answers[i]); });
  updateScore(chapter);
}

export function answerQuestion(i, j) {
  const chapter = chapterContent();
  if (answers[i] !== null) return;
  answers[i] = j;
  if (j === chapter.quiz[i][2]) removeMistake(i);
  else addMistake(i);
  showAnswer(chapter, i, j);
  updateScore(chapter);
}

function showAnswer(chapter, i, j) {
  const correct = chapter.quiz[i][2];
  chapter.quiz[i][1].forEach((_, k) => {
    const el = $('o' + i + '-' + k);
    if (!el) return;
    el.disabled = true;
    if (k === correct) el.classList.add('good');
    else if (k === j) el.classList.add('bad');
  });
  const fb = $('fb' + i);
  if (fb) {
    fb.textContent = (j === correct ? '✓ Goed. ' : '✗ Niet goed. ') + chapter.quiz[i][3];
    fb.classList.add('on');
  }
}

function updateScore(chapter) {
  const indices = questionIndices(chapter);
  const done = indices.filter((i) => answers[i] !== null).length;
  const correct = indices.filter((i) => answers[i] === chapter.quiz[i][2]).length;
  $('scoreTxt').textContent = done + ' van ' + indices.length + ' beantwoord, ' + correct + ' goed' + (mistakeMode ? ' (foutenoefening)' : '');
  $('progBar').style.width = (done / indices.length * 100) + '%';
  const result = $('qres');
  if (done === indices.length) {
    const pct = Math.round(correct / indices.length * 100);
    let tip;
    if (pct >= 85) tip = 'Sterk. Je kent dit hoofdstuk. Herhaal over drie dagen nog een keer de flashcards.';
    else if (pct >= 60) tip = 'Op de goede weg. Lees de paragrafen terug van de vragen die fout gingen.';
    else tip = 'Nog niet genoeg. Lees de samenvatting rustig door en doe daarna de flashcards.';
    const title = '\u{1F3C6} Missie voltooid! +' + (correct * XP_PER_CORRECT_ANSWER) + ' XP, score ' + correct + '/' + indices.length + ' (' + pct + '%)';
    result.innerHTML = '<div class="call sum quest-voltooid"><b>' + title + '</b><br>' + tip + '</div>';
    if (!mistakeMode) markQuizCompleted(correct, chapter.quiz.length);
  } else {
    result.innerHTML = '';
  }
}

export function resetQuiz() {
  const chapter = chapterContent();
  answers = new Array(chapter.quiz.length).fill(null);
  mistakeMode = false;
  renderQuiz(chapter);
  scrollScreenToTop(SCREENS.chapter);
}
