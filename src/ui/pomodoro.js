/* Pomodoro focus timer in the tools menu. While it runs, the time also shows on
   the menu button itself, so it stays visible with the menu closed. */
import { $ } from '../lib/dom.js';
import { readString, writeString, STORAGE_KEYS as K } from '../lib/storage.js';
import { showToast } from './toast.js';

const DURATION_OPTIONS = [10, 25, 45, 60];          // minutes of focus
const BREAK_MINUTES = { 10: 3, 25: 5, 45: 10, 60: 15 };
const PHASE = { work: 'work', break: 'break' };

let durationIndex = 1;
let interval = null;
let phase = PHASE.work;
let running = false;
let remainingSeconds = DURATION_OPTIONS[durationIndex] * 60;

function currentDuration() {
  return DURATION_OPTIONS[durationIndex];
}

function currentBreak() {
  return BREAK_MINUTES[currentDuration()] || 5;
}

function vibrate() {
  try {
    if (navigator.vibrate) navigator.vibrate([120, 60, 120]);
  } catch { /* not supported */ }
}

function clock() {
  const m = Math.floor(remainingSeconds / 60);
  const s = remainingSeconds % 60;
  return m + ':' + (s < 10 ? '0' : '') + s;
}

function draw() {
  const btn = $('pomodorobtn');
  const label = $('pomodorolabel');
  const note = $('pomodoroNote');
  const chip = $('pomodoroChip');
  const group = $('pomodoroDuur');
  if (group) {
    for (const b of group.querySelectorAll('button')) {
      b.setAttribute('aria-pressed', Number(b.dataset.min) === currentDuration() ? 'true' : 'false');
      b.disabled = running;       // the length is fixed once a session runs
    }
  }
  if (!running) {
    if (btn) btn.textContent = 'Start';
    if (label) label.textContent = 'Pomodoro';
    if (note) note.textContent = currentDuration() + ' min werken, dan ' + currentBreak() + ' min pauze';
    if (chip) chip.hidden = true;
    return;
  }
  const what = phase === PHASE.work ? 'Focus' : 'Pauze';
  if (btn) btn.textContent = 'Stop';
  if (label) label.textContent = what;
  if (note) {
    note.textContent = 'Nog ' + clock() + ', daarna '
      + (phase === PHASE.work ? currentBreak() + ' min pauze' : 'weer ' + currentDuration() + ' min focus');
  }
  if (chip) {
    chip.hidden = false;
    chip.textContent = clock();
  }
}

function tick() {
  remainingSeconds--;
  if (remainingSeconds <= 0) {
    if (phase === PHASE.work) {
      phase = PHASE.break;
      remainingSeconds = currentBreak() * 60;
      vibrate();
      showToast('Tijd voor een pauze: ' + currentBreak() + ' minuten!');
    } else {
      phase = PHASE.work;
      remainingSeconds = currentDuration() * 60;
      vibrate();
      showToast('Pauze voorbij: weer ' + currentDuration() + ' minuten focus.');
    }
  }
  draw();
}

function stop() {
  running = false;
  clearInterval(interval);
  interval = null;
  document.body.classList.remove('pomodoro-focus');
  draw();
}

export function togglePomodoro() {
  if (running) {
    stop();
    return;
  }
  running = true;
  phase = PHASE.work;
  remainingSeconds = currentDuration() * 60;
  document.body.classList.add('pomodoro-focus');
  draw();
  interval = setInterval(tick, 1000);
  showToast('Pomodoro gestart: ' + currentDuration() + ' minuten focus.');
}

/* Pick 10/25/45/60 minutes. Ignored while a session runs, and for any other
   value, since it arrives from an inline onclick. */
export function setPomodoroDuration(minutes) {
  const index = DURATION_OPTIONS.indexOf(Number(minutes));
  if (running || index < 0) return;
  durationIndex = index;
  writeString(K.pomodoroDuration, currentDuration());
  remainingSeconds = currentDuration() * 60;
  draw();
}

export function initPomodoro() {
  durationIndex = DURATION_OPTIONS.indexOf(parseInt(readString(K.pomodoroDuration) || '25', 10));
  if (durationIndex < 0) durationIndex = 1;
  remainingSeconds = currentDuration() * 60;
  draw();
}
