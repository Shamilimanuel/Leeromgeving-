/* Splash screen: three stages that advance automatically or on "Verder". */
import { $ } from '../lib/dom.js';

const STAGES = ['stage-scene', 'stage-mission', 'stage-credit'];
const STAGE_DURATIONS_MS = [4200, 6500];
let stage = 0;
let timer = null;

export function advanceIntro() {
  if (stage >= STAGES.length - 1) return;
  clearTimeout(timer);
  $(STAGES[stage]).classList.add('hide');
  stage++;
  $(STAGES[stage]).classList.remove('hide');
  const nextButton = $('introVerder');
  if (stage >= STAGES.length - 1) {
    if (nextButton) nextButton.style.display = 'none';
  } else {
    timer = setTimeout(advanceIntro, STAGE_DURATIONS_MS[stage]);
  }
}

export function initIntro() {
  timer = setTimeout(advanceIntro, STAGE_DURATIONS_MS[0]);
}
