/* Tijdrace (2.7.1): as many quick questions as you can in 45 seconds, from
   every term in the chapter. The last exercise kind from the Fase 2
   shortlist; it needed a clock instead of a fixed number of steps, which is
   why it is its own module rather than a kind inside game.js.

   It borrows the practice game's full-screen overlay (#spelwrap) but keeps
   its own state, so a race can never touch a level session and vice versa.
   It pays no XP: a race rewards speed and guessing, and paying XP for it
   would make the XP a teacher sees mean less. It keeps a personal record per
   chapter instead. */
import { $, setHtml, icon } from '../lib/dom.js';
import { usableTerms } from '../lib/answers.js';
import { readJson, writeJson, STORAGE_KEYS as K } from '../lib/storage.js';
import { chapterContent, currentChapterKey } from '../state/selection.js';
import { updateStreak } from '../state/progress.js';

export const RACE_SECONDS = 45;
const OPTIONS = 4;
const FLASH_MS = 450;

let race = null;   // { chapterKey, terms, endsAt, correct, wrong, question, answered, timer, over, record }

/* ── Pure parts, tested in tests/timeRace.test.js ────────────────────── */

/* Enough terms to offer four distinct options. */
export function canRace(chapter) {
  return usableTerms(chapter).length >= OPTIONS;
}

/* One question from the chapter's terms. `rand` is injectable for tests.
   Two kinds: which term fits this description (four options), and does this
   description fit this term (yes/no). */
export function raceQuestion(terms, rand = Math.random) {
  const pick = (list) => list[Math.floor(rand() * list.length)];
  const term = pick(terms);
  const others = terms.filter((t) => t[0] !== term[0]);
  if (rand() < 0.5) {
    const wrong = [];
    const pool = others.slice();
    while (wrong.length < OPTIONS - 1 && pool.length) wrong.push(pool.splice(Math.floor(rand() * pool.length), 1)[0]);
    const options = [term, ...wrong];
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(rand() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]];
    }
    return { kind: 'choice', prompt: term[1], labels: options.map((o) => o[0]), right: options.indexOf(term) };
  }
  const isTrue = rand() < 0.5;
  const shown = isTrue ? term[1] : pick(others)[1];
  return { kind: 'truefalse', term: term[0], prompt: shown, labels: ['Klopt', 'Klopt niet'], right: isTrue ? 0 : 1 };
}

export function raceRecord(chapterKey) {
  const all = readJson(K.timeRace, {});
  return (all && all[chapterKey]) || 0;
}

/* Saves only an improvement; says whether it was one. */
export function saveRaceRecord(chapterKey, correct) {
  const all = readJson(K.timeRace, {}) || {};
  if (correct <= (all[chapterKey] || 0)) return false;
  all[chapterKey] = correct;
  writeJson(K.timeRace, all);
  return true;
}

/* ── The race on screen ──────────────────────────────────────────────── */

function secondsLeft() {
  return Math.max(0, Math.ceil((race.endsAt - Date.now()) / 1000));
}

function drawClock() {
  const bar = $('spelProg');
  if (bar) bar.style.width = Math.round((Math.max(0, race.endsAt - Date.now()) / (RACE_SECONDS * 1000)) * 100) + '%';
  const score = $('spelScore');
  if (score) score.textContent = secondsLeft() + ' s';
}

function questionHtml() {
  const q = race.question;
  const picked = race.answered ? race.answered.picked : -1;
  const head = q.kind === 'choice'
    ? '<h4 class="spel-opdracht">Welk begrip hoort hierbij?</h4><p class="spel-omschrijving">' + q.prompt + '</p>'
    : '<h4 class="spel-opdracht">Klopt deze omschrijving?</h4><p class="spel-omschrijving"><b>' + q.term + '</b><br>' + q.prompt + '</p>';
  return '<div class="race-stand"><span>' + icon('check') + ' ' + race.correct + ' goed</span>'
    + '<span class="dim">' + race.wrong + ' fout</span></div>'
    + '<div class="spel-vraag">' + head
    + '<div class="spel-keuzes">' + q.labels.map((label, i) => {
      let extra = '';
      if (race.answered) extra = i === q.right ? ' goed' : (i === picked ? ' fout' : '');
      return '<button type="button" class="spel-keuze' + extra + '"'
        + (race.answered ? ' disabled' : ' onclick="raceAnswer(' + i + ')"') + '>' + label + '</button>';
    }).join('') + '</div></div>';
}

function resultHtml() {
  const recordText = race.newRecord
    ? '<p class="race-record">' + icon('trophy') + ' Nieuw record!</p>'
    : '<p class="dim">Je record voor dit hoofdstuk: ' + race.record + ' goed.</p>';
  return '<div class="spel-klaar">'
    + '<div class="spel-vinkje">' + icon('timer') + '</div>'
    + '<h3>Tijd is om!</h3>'
    + '<div class="spel-buit">'
    + '<div class="spel-buit-vak"><b>' + race.correct + '</b><small>goed</small></div>'
    + '<div class="spel-buit-vak"><b>' + race.wrong + '</b><small>fout</small></div>'
    + '</div>'
    + recordText
    + '<div class="race-knoppen"><button class="bt" onclick="startTimeRace()">Nog een keer</button>'
    + '<button class="bt gh" onclick="closeLevel()">Klaar</button></div></div>';
}

function draw() {
  if (!race) return;
  drawClock();
  setHtml('spelBody', race.over ? resultHtml() : questionHtml());
}

function finish() {
  clearInterval(race.timer);
  race.timer = null;
  race.over = true;
  race.newRecord = saveRaceRecord(race.chapterKey, race.correct);
  race.record = raceRecord(race.chapterKey);
  if (race.correct + race.wrong > 0) updateStreak();   // a race is practice too
  draw();
}

function tick() {
  if (!race || race.over) return;
  if (Date.now() >= race.endsAt) finish();
  else drawClock();
}

/* Inline handler: start (or restart) a race on the open chapter. */
export function startTimeRace() {
  const chapter = chapterContent();
  if (!chapter || !canRace(chapter)) return;
  stopTimeRace();
  race = {
    chapterKey: currentChapterKey(),
    terms: usableTerms(chapter),
    endsAt: Date.now() + RACE_SECONDS * 1000,
    correct: 0,
    wrong: 0,
    answered: null,
    over: false,
  };
  race.question = raceQuestion(race.terms);
  race.timer = setInterval(tick, 200);
  $('spelwrap').classList.add('show');
  document.body.classList.add('spel-open');
  draw();
}

/* Inline handler: an option in the current race question. */
export function raceAnswer(i) {
  if (!race || race.over || race.answered) return;
  const right = i === race.question.right;
  if (right) race.correct++; else race.wrong++;
  race.answered = { picked: i };
  draw();
  // A short flash of right/wrong, then straight on: the clock keeps running.
  setTimeout(() => {
    if (!race || race.over) return;
    race.answered = null;
    race.question = raceQuestion(race.terms);
    draw();
  }, FLASH_MS);
}

/* Called when the overlay closes (closeLevel in game.js). */
export function stopTimeRace() {
  if (race && race.timer) clearInterval(race.timer);
  race = null;
}

export function isRacing() {
  return !!race;
}
