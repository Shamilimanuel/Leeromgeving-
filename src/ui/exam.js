/* Practice exam: a random mix of quiz questions from all subjects. */
import { $, setHtml, escapeHtml, icon } from '../lib/dom.js';
import { allQuizQuestions, shuffle } from '../content/queries.js';
import { loadAllContent } from '../content/index.js';
import { getExamHistory, saveExamAttempt } from '../state/progress.js';
import { XP_PER_CORRECT_ANSWER } from '../state/stats.js';

const HISTORY_SHOWN = 8;
let questions = [];
let answers = [];

export function openExam() {
  $('examenwrap').classList.add('show');
  return renderExamStart();
}

export function closeExam() {
  $('examenwrap').classList.remove('show');
}

/* The exam mixes every subject, so every book has to be loaded first. Without
   internet only the books already on this device can come in; the exam then
   uses those and says so, rather than refusing to start. */
export async function renderExamStart() {
  setHtml('examenBody', '<p class="dim">Oefenvragen uit alle vakken laden…</p>');
  const { total, failed } = await loadAllContent();
  const all = allQuizQuestions();
  const history = getExamHistory();
  const missing = failed
    ? '<div class="call warn">' + failed + ' van de ' + total + ' boeken konden niet laden. Heb je internet? '
      + 'De toets gebruikt nu alleen de vragen uit de boeken die al op dit apparaat staan.</div>'
    : '';
  setHtml('examenBody',
    missing
    + '<p class="dim">Er staan in totaal ' + all.length + ' oefenvragen klaar, uit alle vakken samen.</p>'
    + '<div class="bar"><button class="bt" onclick="startExam(10)">Start oefentoets (10 vragen)</button>'
    + '<button class="bt gh" onclick="startExam(20)">Start oefentoets (20 vragen)</button></div>'
    + (history.length
      ? '<h4 class="parkop">Eerdere pogingen</h4>' + history.slice().reverse().slice(0, HISTORY_SHOWN).map((h) =>
        '<div class="examen-hist"><b>' + h.correct + '/' + h.total + '</b> (' + Math.round(h.correct / h.total * 100) + '%) <span class="dim">' + h.date + '</span></div>',
      ).join('')
      : '<p class="dim">Nog geen eerdere pogingen.</p>'));
}

export function startExam(count) {
  const all = shuffle(allQuizQuestions());
  if (!all.length) {
    alert('Er staan nog geen oefenvragen in de site.');
    return;
  }
  questions = all.slice(0, Math.min(count, all.length));
  answers = new Array(questions.length).fill(null);
  drawExam();
}

function answeredCount() {
  return answers.filter((a) => a !== null).length;
}

function drawExam() {
  const done = answeredCount();
  setHtml('examenBody',
    '<div class="scorebar"><b>' + done + ' van ' + questions.length + ' beantwoord</b>'
    + '<div class="prog"><i style="width:' + (done / questions.length * 100) + '%"></i></div></div>'
    + '<div id="examenlijst"></div><div id="examenres"></div>');
  setHtml('examenlijst', questions.map((item, i) => {
    const q = item.question;
    return '<div class="qq"><div class="qn">VRAAG ' + (i + 1) + ' VAN ' + questions.length + ' · <span style="color:var(--' + item.subject.color + ')">' + item.subject.name + '</span> · ' + item.title + '</div>'
      + '<h4>' + q[0] + '</h4>'
      + q[1].map((option, j) => '<button class="opt" id="eo' + i + '-' + j + '" onclick="answerExamQuestion(' + i + ',' + j + ')">' + option + '</button>').join('')
      + '<div class="fb" id="efb' + i + '"></div></div>';
  }).join(''));
  answers.forEach((a, i) => { if (a !== null) showExamAnswer(i, a); });
  checkExamFinished();
}

export function answerExamQuestion(i, j) {
  if (answers[i] !== null) return;
  answers[i] = j;
  showExamAnswer(i, j);
  const done = answeredCount();
  document.querySelector('#examenBody .scorebar b').textContent = done + ' van ' + questions.length + ' beantwoord';
  document.querySelector('#examenBody .prog i').style.width = (done / questions.length * 100) + '%';
  checkExamFinished();
}

function showExamAnswer(i, j) {
  const correct = questions[i].question[2];
  questions[i].question[1].forEach((_, k) => {
    const el = $('eo' + i + '-' + k);
    if (!el) return;
    el.disabled = true;
    if (k === correct) el.classList.add('good');
    else if (k === j) el.classList.add('bad');
  });
  const fb = $('efb' + i);
  if (fb) {
    /* Icon markup means innerHTML, so the explanation is escaped: it comes
       from a content module, which is ours, but the rule is the rule. */
    fb.innerHTML = (j === correct ? icon('check') + ' Goed. ' : icon('x') + ' Niet goed. ')
      + escapeHtml(questions[i].question[3]);
    fb.classList.add('on');
  }
}

function checkExamFinished() {
  if (answeredCount() < questions.length) return;
  const correct = answers.filter((a, i) => a === questions[i].question[2]).length;
  const perSubject = {};
  questions.forEach((item, i) => {
    const name = item.subject.name;
    perSubject[name] = perSubject[name] || { correct: 0, total: 0 };
    perSubject[name].total++;
    if (answers[i] === item.question[2]) perSubject[name].correct++;
  });
  saveExamAttempt(correct, questions.length);
  const pct = Math.round(correct / questions.length * 100);
  const result = $('examenres');
  if (!result) return;
  const title = icon('trophy') + ' Questreeks voltooid! +' + (correct * XP_PER_CORRECT_ANSWER) + ' XP, ' + correct + '/' + questions.length + ' (' + pct + '%)';
  result.innerHTML = '<div class="call sum quest-voltooid"><b>' + title + '</b><br>'
    + Object.keys(perSubject).map((name) => name + ': ' + perSubject[name].correct + '/' + perSubject[name].total).join(' · ')
    + '</div><div class="bar"><button class="bt gh" onclick="renderExamStart()">← Terug naar overzicht</button></div>';
}
