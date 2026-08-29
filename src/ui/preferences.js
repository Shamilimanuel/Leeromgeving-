/* Display preferences: dyslexia mode (+ reading ruler), light mode and text size.
   All are remembered in localStorage. */
import { $ } from '../lib/dom.js';
import { readString, writeString, STORAGE_KEYS as K } from '../lib/storage.js';
import { showToast } from './toast.js';

/* ── Dyslexia mode ────────────────────────────────────────────────────── */
let dyslexiaOn = false;

function applyDyslexia() {
  document.body.classList.toggle('dyslexie-modus', dyslexiaOn);
  const btn = $('dyslexiebtn');
  if (btn) btn.classList.toggle('on', dyslexiaOn);
}

export function toggleDyslexia() {
  dyslexiaOn = !dyslexiaOn;
  writeString(K.dyslexia, dyslexiaOn ? '1' : '0');
  applyDyslexia();
  applyReadingRuler();
  showToast(dyslexiaOn ? 'Dyslexie-modus aan' : 'Dyslexie-modus uit');
}

/* ── Reading ruler (follows the mouse, dyslexia mode only) ────────────── */
let rulerEl = null;

function moveReadingRuler(e) {
  if (rulerEl) rulerEl.style.top = (e.clientY - 19) + 'px';
}

function applyReadingRuler() {
  if (dyslexiaOn) {
    if (!rulerEl) {
      rulerEl = document.createElement('div');
      rulerEl.className = 'leesliniaal';
      document.body.appendChild(rulerEl);
      document.addEventListener('mousemove', moveReadingRuler);
    }
    rulerEl.style.display = 'block';
  } else if (rulerEl) {
    rulerEl.style.display = 'none';
  }
}

/* ── Light mode ───────────────────────────────────────────────────────── */
let lightOn = false;

function applyLightMode() {
  document.body.classList.toggle('licht-modus', lightOn);
  const btn = $('lichtbtn');
  if (btn) btn.classList.toggle('on', lightOn);
}

export function toggleLightMode() {
  lightOn = !lightOn;
  writeString(K.lightMode, lightOn ? '1' : '0');
  applyLightMode();
  showToast(lightOn ? 'Lichte modus aan' : 'Lichte modus uit');
}

/* ── Text size (independent of dyslexia mode) ─────────────────────────── */
const TEXT_SIZES = ['normaal', 'groot', 'grootst'];
const TEXT_SIZE_LABELS = { normaal: 'A', groot: 'A+', grootst: 'A++' };
let textSizeIndex = 0;

function applyTextSize() {
  const size = TEXT_SIZES[textSizeIndex];
  document.documentElement.classList.toggle('txt-groot', size === 'groot');
  document.documentElement.classList.toggle('txt-grootst', size === 'grootst');
  const btn = $('tekstgroottebtn');
  if (btn) btn.textContent = '\u{1F524} ' + TEXT_SIZE_LABELS[size];
}

export function cycleTextSize() {
  textSizeIndex = (textSizeIndex + 1) % TEXT_SIZES.length;
  writeString(K.textSize, TEXT_SIZES[textSizeIndex]);
  applyTextSize();
}

/* ── Init: restore saved preferences ─────────────────────────────────── */
export function initPreferences() {
  dyslexiaOn = readString(K.dyslexia) === '1';
  lightOn = readString(K.lightMode) === '1';
  textSizeIndex = Math.max(0, TEXT_SIZES.indexOf(readString(K.textSize) || 'normaal'));
  applyDyslexia();
  applyReadingRuler();
  applyLightMode();
  applyTextSize();
}
