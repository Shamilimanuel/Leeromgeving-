/* Oefenspel: one level of the practice path, played in a full-screen session.

   The student picks a level on the path, the session opens over the page and
   hands out exercises one after another — Duolingo-style, no choosing an
   exercise type. Nine kinds, built in exercises.js:

     match      connect each question to its answer by drawing a line
     type       type the term that belongs to a description
     choice     pick the right term out of four
     order      rebuild a description by tapping its words in order
     gap        fill the blank in a sentence from the summary
     sort       put each term in the paragraph it belongs to
     quiz       a question from the chapter's own quiz
     truefalse  does this description belong to this term?
     oddone     which term does not belong to this paragraph?

   Finishing a level records it and earns XP; the session never touches the
   Leitner spaced-repetition data, which stays the domain of the Flashcards
   buttons.

   Chapter text is rendered raw, the same way the Flashcards and Begrippenlijst
   tabs do it — a few terms contain entities such as "co&ouml;rdinaten". Only
   what a student types is escaped. */
import { $, setHtml, escapeHtml } from '../lib/dom.js';
import { judgeAnswer, usableTerms } from '../lib/answers.js';
import { chapterContent, currentChapterKey } from '../state/selection.js';
import { levelsForChapter } from '../content/levels.js';
import { completeLevel, levelResult, xpForResult } from '../state/gameLevels.js';
import { buildSession, shuffle, plainText } from './exercises.js';
import { pushLevel } from '../services/gameProgress.js';
import { renderPath } from './path.js';
import { showToast } from './toast.js';

const SESSION_STEPS = 8;
const WRONG_FLASH_MS = 500;

let session = null;   // { chapterKey, level, steps, index, correct, done }
let step = null;      // working state of the exercise on screen
let wrongTimer = null;
let resizeHooked = false;

export function resetGameState() {
  clearTimeout(wrongTimer);
  wrongTimer = null;
  session = null;
  step = null;
}

/* Working state for the exercise about to be shown. */
function beginStep() {
  const plan = session.steps[session.index];
  const base = { kind: plan.kind, answered: null, finished: false };

  if (plan.kind === 'match') {
    const ids = plan.pairs.map((pair, i) => i);
    step = {
      ...base,
      pairs: plan.pairs.map((pair, i) => ({ id: i, question: pair.card[0], answer: pair.card[1] })),
      left: shuffle(ids.slice()),
      right: shuffle(ids.slice()),
      solved: [],
      picked: null,
      wrong: 0,
    };
  } else if (plan.kind === 'order') {
    const words = plainText(plan.term[1]).split(' ');
    step = {
      ...base,
      term: plan.term,
      sentence: words.join(' '),
      words: shuffle(words.map((word, i) => ({ word, i }))),
      chosen: [],
    };
  } else if (plan.kind === 'sort') {
    step = {
      ...base,
      buckets: plan.buckets,
      items: plan.items.map((item, i) => ({ ...item, id: i, placed: null })),
      picked: null,
    };
  } else {
    step = { ...base, ...plan };
  }
}

/* ── Opening and closing the session ──────────────────────────────────── */

/* Inline handler: start the level with this index on the current chapter. */
export function openLevel(index) {
  const chapter = chapterContent();
  if (!chapter) return;
  const level = levelsForChapter(chapter)[index];
  if (!level) return;
  const steps = buildSession(chapter, level, SESSION_STEPS);
  if (!steps.length) {
    showToast('Bij dit level staat nog te weinig oefenstof.');
    return;
  }
  session = { chapterKey: currentChapterKey(), level, steps, index: 0, correct: 0, done: false };
  beginStep();
  $('spelwrap').classList.add('show');
  document.body.classList.add('spel-open');
  draw();
}

/* Inline handler: leave the session. Nothing is recorded unless it finished. */
export function closeLevel() {
  $('spelwrap').classList.remove('show');
  document.body.classList.remove('spel-open');
  resetGameState();
  const chapter = chapterContent();
  if (chapter) renderPath(chapter);
}

/* ── Connect ──────────────────────────────────────────────────────────── */

function tileHtml(id, side) {
  const pair = step.pairs.find((p) => p.id === id);
  const solved = step.solved.includes(id);
  const picked = !!(step.picked && step.picked.side === side && step.picked.id === id);
  return '<button type="button" class="spel-tegel' + (solved ? ' opgelost' : '') + (picked ? ' geselecteerd' : '') + '"'
    + ' data-id="' + id + '" data-side="' + side + '"'
    + (solved ? ' disabled' : ' onclick="gameTile(' + id + ',\'' + side + '\')"')
    + '><span class="spel-stip"></span><span class="spel-tekst">'
    + (side === 'question' ? pair.question : pair.answer) + '</span></button>';
}

function matchHtml() {
  // One grid rather than two columns: a grid row is as tall as the taller of
  // its two tiles, so a one-line question and a three-line answer still line
  // up and the connecting line runs straight across.
  let rows = '';
  for (let i = 0; i < step.pairs.length; i++) {
    rows += tileHtml(step.left[i], 'question') + tileHtml(step.right[i], 'answer');
  }
  return '<h4 class="spel-opdracht">Verbind wat bij elkaar hoort</h4>'
    + '<div class="spel-veld" id="spelVeld">'
    + '<svg class="spel-lijnen" id="spelLijnen" aria-hidden="true"></svg>'
    + '<div class="spel-grid">' + rows + '</div></div>';
}

/* One line per solved pair, measured after layout so it stays right when the
   text wraps differently on a narrow screen. */
function drawConnectors() {
  const field = $('spelVeld');
  const svg = $('spelLijnen');
  if (!field || !svg || !step || step.kind !== 'match') return;
  const box = field.getBoundingClientRect();
  if (!box.width || !box.height) return;      // not laid out yet, or jsdom
  svg.setAttribute('viewBox', '0 0 ' + box.width + ' ' + box.height);
  svg.innerHTML = step.solved.map((id) => {
    const from = field.querySelector('.spel-tegel[data-side="question"][data-id="' + id + '"]');
    const to = field.querySelector('.spel-tegel[data-side="answer"][data-id="' + id + '"]');
    if (!from || !to) return '';
    const a = from.getBoundingClientRect();
    const b = to.getBoundingClientRect();
    return '<line x1="' + (a.right - box.left) + '" y1="' + (a.top + a.height / 2 - box.top) + '"'
      + ' x2="' + (b.left - box.left) + '" y2="' + (b.top + b.height / 2 - box.top) + '"/>';
  }).join('');
}

function hookResize() {
  if (resizeHooked) return;
  resizeHooked = true;
  window.addEventListener('resize', drawConnectors);
}

/* Inline handler: a tile of the connect exercise was tapped. */
export function gameTile(id, side) {
  if (!step || step.kind !== 'match' || step.finished) return;

  if (!step.picked || step.picked.side === side) {
    step.picked = { side, id };
    draw();
    return;
  }
  if (step.picked.id === id) {
    step.solved.push(id);
    step.picked = null;
    if (step.solved.length === step.pairs.length) finishStep(!step.wrong);
    else draw();
    return;
  }

  step.wrong++;
  const questionId = side === 'question' ? id : step.picked.id;
  const answerId = side === 'answer' ? id : step.picked.id;
  step.picked = null;
  draw();

  const tiles = [
    document.querySelector('.spel-tegel[data-side="question"][data-id="' + questionId + '"]'),
    document.querySelector('.spel-tegel[data-side="answer"][data-id="' + answerId + '"]'),
  ].filter(Boolean);
  tiles.forEach((el) => el.classList.add('fout'));
  clearTimeout(wrongTimer);
  wrongTimer = setTimeout(() => tiles.forEach((el) => el.classList.remove('fout')), WRONG_FLASH_MS);
}

/* ── Type, and fill the gap ───────────────────────────────────────────── */

function inputHtml() {
  return '<input class="veld spel-veldje" id="spelInput" type="text" autocomplete="off" autocapitalize="off"'
    + ' autocorrect="off" spellcheck="false" placeholder="Typ het begrip…" aria-label="Typ het begrip"'
    + (step.answered ? ' disabled' : '')
    + ' onkeydown="if(event.key===\'Enter\'){event.preventDefault();gameCheck()}">';
}

function typeHtml() {
  return '<h4 class="spel-opdracht">Welk begrip hoort hierbij?</h4>'
    + '<p class="spel-omschrijving">' + step.term[1] + '</p>' + inputHtml();
}

function gapHtml() {
  return '<h4 class="spel-opdracht">Vul het ontbrekende begrip in</h4>'
    + '<p class="spel-omschrijving">' + escapeHtml(step.blanked) + '</p>' + inputHtml();
}

/* Inline handler: check the typed answer of a type or gap exercise. */
export function gameCheck() {
  if (!step || step.finished || (step.kind !== 'type' && step.kind !== 'gap')) return;
  const input = $('spelInput');
  const given = input ? input.value : '';
  if (!given.trim()) return;             // empty box: wait, do not burn the question
  const others = usableTerms(chapterContent()).map((t) => t[0]);
  const verdict = judgeAnswer(given, step.term[0], others);
  step.answered = { verdict, given };
  finishStep(verdict !== 'wrong');
}

/* ── Multiple choice, quiz question, true/false, odd one out ──────────── */

function optionsHtml(labels, isRight, handler) {
  const picked = step.answered ? step.answered.picked : -1;
  return '<div class="spel-keuzes">' + labels.map((label, i) => {
    let extra = '';
    if (step.answered) extra = isRight(i) ? ' goed' : (i === picked ? ' fout' : '');
    return '<button type="button" class="spel-keuze' + extra + '"'
      + (step.answered ? ' disabled' : ' onclick="' + handler + '(' + i + ')"')
      + '>' + label + '</button>';
  }).join('') + '</div>';
}

function choiceHtml() {
  return '<h4 class="spel-opdracht">Welk begrip hoort hierbij?</h4>'
    + '<p class="spel-omschrijving">' + step.term[1] + '</p>'
    + optionsHtml(step.options.map((o) => o[0]), (i) => step.options[i][0] === step.term[0], 'gameChoose');
}

function quizHtml() {
  const [question, options, correct] = step.question;
  return '<h4 class="spel-opdracht">Oefenvraag</h4>'
    + '<p class="spel-omschrijving">' + question + '</p>'
    + optionsHtml(options, (i) => i === correct, 'gameChoose');
}

function trueFalseHtml() {
  return '<h4 class="spel-opdracht">Klopt deze omschrijving?</h4>'
    + '<p class="spel-omschrijving"><b>' + step.term[0] + '</b><br>' + step.shown + '</p>'
    + optionsHtml(['Ja, dat klopt', 'Nee, dat klopt niet'],
      (i) => (i === 0) === step.isTrue, 'gameChoose');
}

function oddOneHtml() {
  return '<h4 class="spel-opdracht">Welk begrip hoort niet bij deze paragraaf?</h4>'
    + '<p class="spel-omschrijving">' + step.heading + '</p>'
    + optionsHtml(step.options.map((o) => o[0]), (i) => step.options[i][0] === step.odd[0], 'gameChoose');
}

/* Inline handler: an option was picked, in any of the four choice exercises. */
export function gameChoose(i) {
  if (!step || step.finished || step.answered) return;
  let right;
  if (step.kind === 'choice') right = !!step.options[i] && step.options[i][0] === step.term[0];
  else if (step.kind === 'quiz') right = i === step.question[2];
  else if (step.kind === 'truefalse') right = (i === 0) === step.isTrue;
  else if (step.kind === 'oddone') right = !!step.options[i] && step.options[i][0] === step.odd[0];
  else return;
  step.answered = { verdict: right ? 'correct' : 'wrong', picked: i };
  finishStep(right);
}

/* ── Word order ───────────────────────────────────────────────────────── */

function orderHtml() {
  const chosen = step.chosen.map((at, pos) => '<button type="button" class="spel-woord gekozen"'
    + (step.answered ? ' disabled' : ' onclick="gameUnpickWord(' + pos + ')"')
    + '>' + escapeHtml(step.words[at].word) + '</button>').join('');
  const bank = step.words.map((entry, at) => (step.chosen.includes(at)
    ? '<button type="button" class="spel-woord leeg" disabled>' + escapeHtml(entry.word) + '</button>'
    : '<button type="button" class="spel-woord"'
      + (step.answered ? ' disabled' : ' onclick="gamePickWord(' + at + ')"')
      + '>' + escapeHtml(entry.word) + '</button>')).join('');

  return '<h4 class="spel-opdracht">Zet de omschrijving in de goede volgorde</h4>'
    + '<p class="spel-omschrijving">' + step.term[0] + '</p>'
    + '<div class="spel-zin">' + (chosen || '<span class="dim">Tik de woorden hieronder aan…</span>') + '</div>'
    + '<div class="spel-bank">' + bank + '</div>';
}

/* Inline handler: move a word from the bank into the sentence. */
export function gamePickWord(at) {
  if (!step || step.kind !== 'order' || step.answered) return;
  if (step.chosen.includes(at)) return;
  step.chosen.push(at);
  if (step.chosen.length === step.words.length) {
    const given = step.chosen.map((i) => step.words[i].word).join(' ');
    const right = given === step.sentence;
    step.answered = { verdict: right ? 'correct' : 'wrong', given };
    finishStep(right);
    return;
  }
  draw();
}

/* Inline handler: take a word back out of the sentence. */
export function gameUnpickWord(position) {
  if (!step || step.kind !== 'order' || step.answered) return;
  step.chosen.splice(position, 1);
  draw();
}

/* ── Sort into paragraphs ─────────────────────────────────────────────── */

function sortHtml() {
  const loose = step.items.filter((item) => item.placed === null);
  const chip = (item) => {
    const picked = step.picked === item.id;
    let extra = picked ? ' geselecteerd' : '';
    if (step.answered) extra = item.placed === item.section ? ' goed' : ' fout';
    return '<button type="button" class="spel-chip' + extra + '"'
      + (step.answered ? ' disabled' : ' onclick="gameSortPick(' + item.id + ')"')
      + '>' + item.term[0] + '</button>';
  };

  return '<h4 class="spel-opdracht">Zet elk begrip bij de goede paragraaf</h4>'
    + '<div class="spel-bank spel-chips">'
    + (loose.length ? loose.map(chip).join('') : '<span class="dim">Alles is verdeeld.</span>')
    + '</div>'
    + '<div class="spel-bakken">' + step.buckets.map((bucket, b) => {
      const inside = step.items.filter((item) => item.placed === bucket.section);
      return '<div class="spel-bak"><h5'
        + (step.answered || step.picked === null ? '' : ' class="kan"')
        + (step.answered ? '' : ' onclick="gameSortDrop(' + b + ')"')
        + '>' + bucket.heading + '</h5>'
        + '<div class="spel-bak-inhoud">'
        + (inside.length ? inside.map(chip).join('') : '<span class="dim">leeg</span>')
        + '</div></div>';
    }).join('') + '</div>';
}

/* Inline handler: pick a term up (or put it back on the pile). */
export function gameSortPick(id) {
  if (!step || step.kind !== 'sort' || step.answered) return;
  const item = step.items.find((i) => i.id === id);
  if (!item) return;
  if (item.placed !== null) {          // tapping a placed term returns it
    item.placed = null;
    step.picked = null;
  } else {
    step.picked = step.picked === id ? null : id;
  }
  draw();
}

/* Inline handler: drop the picked term into a paragraph. */
export function gameSortDrop(b) {
  if (!step || step.kind !== 'sort' || step.answered || step.picked === null) return;
  const bucket = step.buckets[b];
  const item = step.items.find((i) => i.id === step.picked);
  if (!bucket || !item) return;
  item.placed = bucket.section;
  step.picked = null;
  if (step.items.every((i) => i.placed !== null)) {
    const right = step.items.every((i) => i.placed === i.section);
    step.answered = { verdict: right ? 'correct' : 'wrong' };
    finishStep(right);
    return;
  }
  draw();
}

/* ── Giving up, feedback, scoring ─────────────────────────────────────── */

/* Inline handler: show the answer instead of solving it. */
export function gameReveal() {
  if (!step || step.finished) return;
  if (step.kind === 'sort') step.items.forEach((item) => { item.placed = item.section; });
  step.answered = { verdict: 'wrong', given: '', revealed: true };
  finishStep(false);
}

function finishStep(correct) {
  step.finished = true;
  if (correct) session.correct++;
  draw();
}

function rightAnswerHtml() {
  if (step.kind === 'order') return '<span class="spel-gegeven">' + escapeHtml(step.sentence) + '</span>';
  if (step.kind === 'sort') return '<span class="spel-gegeven">De goede verdeling staat hierboven.</span>';
  if (step.kind === 'quiz') {
    const [, options, correct, explanation] = step.question;
    return '<span class="spel-gegeven">' + options[correct]
      + (explanation ? ' — ' + explanation : '') + '</span>';
  }
  if (step.kind === 'truefalse') {
    return '<span class="spel-gegeven">Deze omschrijving hoort '
      + (step.isTrue ? 'wél' : 'niet') + ' bij <b>' + step.term[0] + '</b>.</span>';
  }
  if (step.kind === 'oddone') return '<span class="spel-gegeven"><b>' + step.odd[0] + '</b> hoort er niet bij.</span>';
  return '<span class="spel-gegeven">Het juiste begrip is: <b>' + step.term[0] + '</b></span>';
}

function feedbackHtml() {
  if (step.kind === 'match') {
    return '<div class="spel-fb goed"><b>✓ Alles verbonden!</b>'
      + (step.wrong ? ' <span class="dim">' + step.wrong + ' foute poging'
        + (step.wrong === 1 ? '' : 'en') + '</span>' : '') + '</div>';
  }
  const answered = step.answered || {};
  if (answered.verdict === 'correct') return '<div class="spel-fb goed"><b>✓ Goed!</b></div>';
  if (answered.verdict === 'near') {
    return '<div class="spel-fb bijna"><b>≈ Bijna!</b> Let nog even op de spelling: <b>'
      + step.term[0] + '</b></div>';
  }
  return '<div class="spel-fb fout"><b>✗ Niet goed.</b>' + rightAnswerHtml()
    + (answered.given ? '<span class="spel-gegeven">Jij typte: ' + escapeHtml(answered.given) + '</span>' : '')
    + '</div>';
}

/* ── Moving through the session ───────────────────────────────────────── */

/* Inline handler: on to the next exercise, or to the score screen. */
export function gameNext() {
  if (!session || session.done || !step || !step.finished) return;
  if (session.index === session.steps.length - 1) {
    session.done = true;
    session.result = completeLevel(session.chapterKey, session.level.index,
      session.correct, session.steps.length);
    // Mirrored so a teacher can see it; the result is already saved locally,
    // so a failure here changes nothing the student sees.
    pushLevel(session.chapterKey, session.level.index,
      levelResult(session.chapterKey, session.level.index));
    step = null;
  } else {
    session.index++;
    beginStep();
  }
  draw();
}

function scoreScreenHtml() {
  const total = session.steps.length;
  const perfect = session.correct === total;
  const gained = session.result ? session.result.gained : xpForResult(session.correct, total);
  return '<div class="spel-klaar">'
    + '<div class="spel-vinkje">✓</div>'
    + '<h3>' + (perfect ? 'Perfect!' : 'Level gehaald!') + '</h3>'
    + '<p class="dim">' + session.level.title + ' is klaar.</p>'
    + '<div class="spel-buit">'
    + '<div class="spel-buit-vak"><b>' + session.correct + '/' + total + '</b><small>goed</small></div>'
    + '<div class="spel-buit-vak"><b>+' + gained + '</b><small>XP</small></div>'
    + (perfect ? '<div class="spel-buit-vak"><b>★</b><small>foutloos</small></div>' : '')
    + '</div>'
    + '<button class="bt spel-verder" onclick="closeLevel()">Ga verder →</button></div>';
}

/* ── Drawing ──────────────────────────────────────────────────────────── */

const VIEWS = {
  match: matchHtml,
  type: typeHtml,
  gap: gapHtml,
  choice: choiceHtml,
  quiz: quizHtml,
  truefalse: trueFalseHtml,
  oddone: oddOneHtml,
  order: orderHtml,
  sort: sortHtml,
};

/* Exercises you can be stuck on rather than simply guess at. */
const CAN_REVEAL = ['type', 'gap', 'order', 'sort'];

function buttonsHtml() {
  if (step.finished) {
    const last = session.index === session.steps.length - 1;
    return '<button class="bt" onclick="gameNext()">' + (last ? 'Level afronden →' : 'Volgende →') + '</button>';
  }
  const check = (step.kind === 'type' || step.kind === 'gap')
    ? '<button class="bt" onclick="gameCheck()">Controleer</button>' : '';
  const reveal = CAN_REVEAL.includes(step.kind)
    ? '<button class="bt gh" onclick="gameReveal()">Ik weet het niet</button>' : '';
  return check + reveal;
}

function draw() {
  if (!$('spelBody') || !session) return;
  const total = session.steps.length;
  const done = session.done ? total : session.index + (step && step.finished ? 1 : 0);
  const bar = $('spelProg');
  if (bar) bar.style.width = Math.round((done / total) * 100) + '%';
  const score = $('spelScore');
  if (score) score.textContent = xpForResult(session.correct, total) + ' XP';

  if (session.done) {
    setHtml('spelBody', scoreScreenHtml());
    return;
  }

  setHtml('spelBody',
    '<div class="spel-vraag" data-soort="' + step.kind + '">'
    + VIEWS[step.kind]() + (step.finished ? feedbackHtml() : '') + '</div>'
    + '<div class="spel-voet">' + buttonsHtml() + '</div>');

  if (step.kind === 'match') {
    hookResize();
    drawConnectors();
  } else if ((step.kind === 'type' || step.kind === 'gap') && !step.answered) {
    const input = $('spelInput');
    if (input) input.focus();
  }
}
