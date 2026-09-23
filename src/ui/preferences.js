/* Display preferences: dyslexia mode (+ reading ruler and reading font), light
   mode, extra letter spacing and text size. All are remembered in localStorage. */
import { $, icon } from '../lib/dom.js';
import { readString, writeString, STORAGE_KEYS as K } from '../lib/storage.js';
import { showToast } from './toast.js';

/* Fired after any preference changes, whoever changed it (the tools menu or
   Instellingen), so a screen showing the controls can redraw them. */
function announce() {
  document.dispatchEvent(new Event('preferences-changed'));
}

/* ── Dyslexia mode ────────────────────────────────────────────────────── */
let dyslexiaOn = false;

function applyDyslexia() {
  document.body.classList.toggle('dyslexie-modus', dyslexiaOn);
  const btn = $('dyslexiebtn');   // the switch in the tools menu
  if (btn) btn.setAttribute('aria-checked', dyslexiaOn ? 'true' : 'false');
}

export function toggleDyslexia() {
  dyslexiaOn = !dyslexiaOn;
  writeString(K.dyslexia, dyslexiaOn ? '1' : '0');
  applyDyslexia();
  applyReadingRuler();
  showToast(dyslexiaOn ? 'Dyslexie-modus aan' : 'Dyslexie-modus uit');
  announce();
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
  const btn = $('lichtbtn');      // the switch in the tools menu
  if (btn) btn.setAttribute('aria-checked', lightOn ? 'true' : 'false');
}

export function toggleLightMode() {
  lightOn = !lightOn;
  writeString(K.lightMode, lightOn ? '1' : '0');
  applyLightMode();
  showToast(lightOn ? 'Lichte modus aan' : 'Lichte modus uit');
  announce();
}

/* ── Text size (independent of dyslexia mode) ─────────────────────────── */
const TEXT_SIZES = ['normaal', 'groot', 'grootst'];
const TEXT_SIZE_LABELS = { normaal: 'A', groot: 'A+', grootst: 'A++' };
let textSizeIndex = 0;

function applyTextSize() {
  const size = TEXT_SIZES[textSizeIndex];
  document.documentElement.classList.toggle('txt-groot', size === 'groot');
  document.documentElement.classList.toggle('txt-grootst', size === 'grootst');
  // The button holds its own icon and label markup, so only the value changes.
  const btn = $('tekstgroottebtn');
  if (btn) {
    const value = btn.querySelector('.snel-waarde');
    if (value) value.textContent = TEXT_SIZE_LABELS[size];
    else btn.innerHTML = icon('a-large-small') + ' ' + TEXT_SIZE_LABELS[size];
  }
}

export function cycleTextSize() {
  textSizeIndex = (textSizeIndex + 1) % TEXT_SIZES.length;
  writeString(K.textSize, TEXT_SIZES[textSizeIndex]);
  applyTextSize();
  announce();
}

/* Settings picks a size directly instead of cycling. Unknown values are
   ignored, since the argument arrives from an inline onclick. */
export function setTextSize(size) {
  const index = TEXT_SIZES.indexOf(size);
  if (index < 0) return;
  textSizeIndex = index;
  writeString(K.textSize, size);
  applyTextSize();
  announce();
}

/* ── Reading font (dyslexia mode only) ────────────────────────────────── */
/* No single "dyslexia font" helps every reader, so the student picks the one
   they read fastest. OpenDyslexic is left out on purpose: controlled studies
   found no benefit from it. Each id maps to a `dys-font-<id>` class on body;
   Lexend is the default and needs no class. */
export const DYSLEXIA_FONTS = ['lexend', 'atkinson', 'andika'];
let dyslexiaFont = 'lexend';

function applyDyslexiaFont() {
  for (const id of DYSLEXIA_FONTS) {
    document.body.classList.toggle('dys-font-' + id, id !== 'lexend' && id === dyslexiaFont);
  }
}

export function setDyslexiaFont(id) {
  if (!DYSLEXIA_FONTS.includes(id)) return;
  dyslexiaFont = id;
  writeString(K.dyslexiaFont, id);
  applyDyslexiaFont();
  announce();
}

/* ── Extra letter spacing ─────────────────────────────────────────────── */
/* Wider spacing between letters reduces crowding, the effect where letters in
   a word blur into each other. Of all typographic changes it has the best
   evidence for dyslexic readers (Zorzi et al., 2012), so it is a separate
   switch that also works without dyslexia mode. */
let spacingOn = false;

function applyLetterSpacing() {
  document.body.classList.toggle('ruime-letters', spacingOn);
}

export function toggleLetterSpacing() {
  spacingOn = !spacingOn;
  writeString(K.letterSpacing, spacingOn ? '1' : '0');
  applyLetterSpacing();
  showToast(spacingOn ? 'Extra letterafstand aan' : 'Extra letterafstand uit');
  announce();
}

/* ── Init: restore saved preferences ─────────────────────────────────── */
export function initPreferences() {
  dyslexiaOn = readString(K.dyslexia) === '1';
  lightOn = readString(K.lightMode) === '1';
  spacingOn = readString(K.letterSpacing) === '1';
  const savedFont = readString(K.dyslexiaFont);
  dyslexiaFont = DYSLEXIA_FONTS.includes(savedFont) ? savedFont : 'lexend';
  textSizeIndex = Math.max(0, TEXT_SIZES.indexOf(readString(K.textSize) || 'normaal'));
  applyDyslexia();
  applyDyslexiaFont();
  applyReadingRuler();
  applyLightMode();
  applyLetterSpacing();
  applyTextSize();
  announce();
}

/* ── Read-only state, for screens that show the current preference ────── */

export function isDyslexiaOn() {
  return dyslexiaOn;
}

export function currentTextSizeLabel() {
  return TEXT_SIZES[textSizeIndex];
}

export function isLightModeOn() {
  return lightOn;
}

export function currentDyslexiaFont() {
  return dyslexiaFont;
}

export function isLetterSpacingOn() {
  return spacingOn;
}
