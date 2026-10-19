/* Help dialog with a few slides. Opens by itself the first time a student
   reaches the home screen, and never again after that -- until 2.7 the
   "seen" flag lived only in memory, so the tour came back on every visit.
   Since 2.8 the flag is kept on the device and on the account, so a
   signed-in student also doesn't get it again on a new phone or after
   clearing the browser. Uitleg in the tools menu opens it on demand. */
import { $, setHtml, icon } from '../lib/dom.js';
import { onEnter, SCREENS } from './navigation.js';
import { readString, writeString, STORAGE_KEYS as K } from '../lib/storage.js';
import { restoreSession, accountHelpSeen, rememberAccountHelpSeen } from '../services/auth.js';

const SLIDES = [
  ['Welkom bij Samenvattingen', 'Deze site helpt je stap voor stap naar de juiste samenvatting. Los overhoren, quizzen maken en flashcards oefenen.', 'hand'],
  ['Kies eerst je vak', 'Elk vak heeft een eigen kleur, gekozen door de docenten zelf. Klik op een gekleurde kaart om verder te gaan.', 'palette'],
  ['Niveau en leerjaar', 'Kies daarna je niveau (Arbeid, BBL, BK of TL) en je leerjaar. Je gaat dan meteen naar het complete boek.', 'library'],
  ['Open een hoofdstuk', 'Klik op een hoofdstuk voor de samenvatting. Bovenaan wissel je tussen Samenvatting, Flashcards, Oefenspel, Oefenquiz, Begrippenlijst en Notities.', 'book-open'],
  ['Oefenen en hulp', 'Bij Flashcards klik je op een kaart om hem om te draaien. In het Oefenspel speel je per paragraaf een level. Zoeken, je favorieten, de oefentoets en de Pomodoro-timer vind je onder de knop met de drie puntjes.', 'lightbulb'],
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

function rememberSeen() {
  helpSeen = true;
  writeString(K.helpSeen, '1');
  rememberAccountHelpSeen();
}

export function closeHelp() {
  $('helpwrap').classList.remove('open');
  rememberSeen();
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
  setHtml('helpBody', '<div class="hslide"><div class="hico">' + icon(s[2]) + '</div><h3>' + s[0] + '</h3><p>' + s[1] + '</p></div>');
  setHtml('helpDots', SLIDES.map((_, i) =>
    '<button class="dot' + (i === slide ? ' on' : '') + '" onclick="goToSlide(' + i + ')" aria-label="Slide ' + (i + 1) + '"></button>',
  ).join(''));
  $('helpPrev').style.visibility = slide === 0 ? 'hidden' : 'visible';
  $('helpNext').textContent = last ? 'Klaar' : 'Volgende';
}

export function initHelp() {
  helpSeen = readString(K.helpSeen) === '1';
  document.addEventListener('keydown', (e) => {
    if (!$('helpwrap').classList.contains('open')) return;
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') previousSlide();
  });
  onEnter((id) => {
    if (id === SCREENS.home && !helpSeen) {
      helpSeen = true;          // in memory only: "Wat is er nieuw?" may still cancel it
      setTimeout(async () => {
        await restoreSession();
        if (!accountHelpSeen() && !$('helpwrap').classList.contains('open')) openHelp(0);
        rememberSeen();
      }, AUTO_OPEN_DELAY_MS);
    } else if (id === SCREENS.home) {
      /* Seen on this device before 2.8: carry that over to the account. */
      restoreSession().then(rememberAccountHelpSeen);
    }
  });
}
