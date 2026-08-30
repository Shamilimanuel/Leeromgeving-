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

/* Plays the welcome from the first stage again. With mandatory login the
   splash is only reached after signing in, by which time the timer started at
   boot has already run through the stages behind the login screen. */
export function resetIntro() {
  clearTimeout(timer);
  stage = 0;
  STAGES.forEach((id, at) => {
    const el = $(id);
    if (el) el.classList.toggle('hide', at !== 0);
  });
  const nextButton = $('introVerder');
  if (nextButton) nextButton.style.display = '';
  timer = setTimeout(advanceIntro, STAGE_DURATIONS_MS[0]);
}

export function initIntro() {
  timer = setTimeout(advanceIntro, STAGE_DURATIONS_MS[0]);
}
