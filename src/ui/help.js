/* Help dialog with a few slides; opens automatically the first time the home screen is shown. */
import { $, setHtml } from '../lib/dom.js';
import { onEnter, SCREENS } from './navigation.js';

const SLIDES = [
  ['Welkom bij Samenvattingen', 'Deze site helpt je stap voor stap naar de juiste samenvatting. Los overhoren, quizzen maken en flashcards oefenen.', '\u{1F44B}'],
  ['Kies eerst je vak', 'Elk vak heeft een eigen kleur, gekozen door de docenten zelf. Klik op een gekleurde kaart om verder te gaan.', '\u{1F3A8}'],
  ['Niveau en leerjaar', 'Kies daarna je niveau (Arbeid, BBL, BK of TL) en je leerjaar. Je gaat dan meteen naar het complete boek.', '\u{1F4DA}'],
  ['Open een hoofdstuk', 'Klik op een hoofdstuk voor de samenvatting. Bovenaan wissel je tussen Samenvatting, Flashcards, Oefenquiz en Begrippenlijst.', '\u{1F4D6}'],
  ['Oefenen en hulp', 'Bij Begrippenlijst kun je zoeken. Bij Flashcards klik je een kaart om te draaien. Kom je er niet uit? Klik rechtsonder op ‘Vraag het de AI’ voor stap-voor-stap uitleg.', '\u{1F4A1}'],
];
const AUTO_OPEN_DELAY_MS = 2000;

let slide = 0;
let helpSeen = false;

/* Cancel the automatic welcome. "Wat is er nieuw?" calls this when it has
   something to show, so a student never gets two sheets at once. */
export function markHelpSeen() {
  helpSeen = true;
}

export function openHelp(n) {
  slide = n || 0;
  $('helpwrap').classList.add('open');
  drawSlide();
}

export function closeHelp() {
  $('helpwrap').classList.remove('open');
  helpSeen = true;
}

export function goToSlide(n) {
  if (n < 0 || n >= SLIDES.length) return;
  slide = n;
  drawSlide();
}

export function nextSlide() {
  if (slide === SLIDES.length - 1) closeHelp();
  else goToSlide(slide + 1);
}

export function previousSlide() {
  goToSlide(slide - 1);
}

function drawSlide() {
  const s = SLIDES[slide];
  const last = slide === SLIDES.length - 1;
  setHtml('helpBody', '<div class="hslide"><div class="hico">' + s[2] + '</div><h3>' + s[0] + '</h3><p>' + s[1] + '</p></div>');
  setHtml('helpDots', SLIDES.map((_, i) =>
    '<button class="dot' + (i === slide ? ' on' : '') + '" onclick="goToSlide(' + i + ')" aria-label="Slide ' + (i + 1) + '"></button>',
  ).join(''));
  $('helpPrev').style.visibility = slide === 0 ? 'hidden' : 'visible';
  $('helpNext').textContent = last ? 'Klaar' : 'Volgende';
}

export function initHelp() {
  document.addEventListener('keydown', (e) => {
    if (!$('helpwrap').classList.contains('open')) return;
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') previousSlide();
  });
  onEnter((id) => {
    if (id === SCREENS.home && !helpSeen) {
      helpSeen = true;
      setTimeout(() => openHelp(0), AUTO_OPEN_DELAY_MS);
    }
  });
}
