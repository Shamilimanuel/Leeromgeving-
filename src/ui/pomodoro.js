/* Pomodoro focus timer in the radial menu. */
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

function draw() {
  const btn = $('pomodorobtn');
  const label = $('pomodorolabel');
  if (!btn) return;
  if (!running) {
    btn.innerHTML = '<span class="icon icon-timer" aria-hidden="true"></span>';
    btn.classList.remove('on');
    btn.title = 'Pomodoro-timer starten (' + currentDuration() + ' min werk / ' + currentBreak() + ' min pauze)';
    if (label) label.textContent = 'Pomodoro (' + currentDuration() + ' min)';
    return;
  }
  const m = Math.floor(remainingSeconds / 60);
  const s = remainingSeconds % 60;
  btn.innerHTML = '<span class="icon icon-' + (phase === PHASE.work ? 'target' : 'coffee') + '" aria-hidden="true"></span> '
    + m + ':' + (s < 10 ? '0' : '') + s;
  btn.classList.add('on');
  btn.title = (phase === PHASE.work ? 'Focus' : 'Pauze') + ': klik om te stoppen';
  if (label) label.textContent = phase === PHASE.work ? 'Focus' : 'Pauze';
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

/* Click on the label: switch between 10/25/45/60 minutes (not while running). */
export function cyclePomodoroDuration(e) {
  if (e) e.stopPropagation();
  if (running) return;
  durationIndex = (durationIndex + 1) % DURATION_OPTIONS.length;
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
