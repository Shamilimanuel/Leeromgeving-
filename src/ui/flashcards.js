/* Flashcards tab with Leitner spaced repetition. */
import { $, setHtml } from '../lib/dom.js';
import { chapterContent, currentChapterKey } from '../state/selection.js';
import { leitnerForCard, updateLeitner, isCardDueToday, isFavorite, toggleFavorite, LEITNER_MAX_BOX } from '../state/progress.js';
import { sectionForCard, sectionHeading } from '../content/sections.js';

let cards = null;        // all cards of the chapter with their session state
let visibleCards = null; // the subset currently shown
let groupBySection = true;

export function resetFlashcardState() {
  cards = null;
  visibleCards = null;
}

function leitnerDotsHtml(cardId) {
  const box = leitnerForCard(cardId).box;
  let dots = '';
  for (let i = 1; i <= LEITNER_MAX_BOX; i++) dots += '<i class="ld' + (i <= box ? ' on' : '') + '"></i>';
  return '<div class="leitner-dots" title="Herhaalniveau ' + box + '/' + LEITNER_MAX_BOX + '">' + dots + '</div>';
}

export function renderFlashcards(chapter) {
  if (!chapter.cards.length) {
    setHtml('chBody',
      '<div class="empty"><h3>Nog geen flashcards</h3><p>Bij dit hoofdstuk staan nog geen kaarten. Kijk bij de samenvatting of de begrippenlijst.</p></div>');
    return;
  }
  if (!cards) {
    cards = chapter.cards.map((c, i) => ({
      question: c[0],
      answer: c[1],
      id: i,
      known: false,
      section: c[2] !== undefined ? c[2] : sectionForCard(chapter, c),
    }));
    visibleCards = cards.slice();
  }
  const dueCount = cards.filter((c) => isCardDueToday(c.id)).length;
  setHtml('chBody',
    '<div class="bar"><button class="bt' + (groupBySection ? '' : ' gh') + '" onclick="toggleCardGrouping()">'
    + (groupBySection ? '\u{1F4D1} Op boekvolgorde' : '\u{1F500} Door elkaar') + '</button>'
    + '<button class="bt gh" onclick="resetCards()">↺ Opnieuw</button>'
    + '<button class="bt gh" onclick="showUnknownCards()">Alleen wat ik nog niet ken</button>'
    + '<button class="bt gh" onclick="showDueCards()">\u{1F4C5} Vandaag te herhalen (' + dueCount + ')</button>'
    + '<span class="cnt" id="kcnt"></span></div>'
    + '<p class="dim">Klik ✓ Ken ik of ↻ Nog niet: een kaart komt dan vanzelf op het juiste moment terug (spaced repetition, ' + LEITNER_MAX_BOX + ' niveaus).</p>'
    + '<div id="cgrid"></div>');
  drawCards();
}

function cardHtml(card, i) {
  const starred = isFavorite('card', currentChapterKey(), card.id);
  return '<div class="fc' + (card.known ? ' known' : '') + '" data-id="' + card.id + '" tabindex="0" role="button" style="animation-delay:' + (i * 25) + 'ms"'
    + ' onclick="flipCard(this,event)" onkeydown="if(event.key===\'Enter\'||event.key===\' \'){event.preventDefault();flipCard(this,event)}">'
    + leitnerDotsHtml(card.id)
    + '<button class="star' + (starred ? ' on' : '') + '" onclick="toggleCardFavorite(event,' + card.id + ')" aria-label="Favoriet">★</button>'
    + '<div class="fc-in"><div class="fc-f"><small>VRAAG</small>' + card.question + '<div class="h">↺ klik om te draaien</div></div>'
    + '<div class="fc-b"><strong>Antwoord</strong><span>' + card.answer + '</span>'
    + '<div class="mk"><button class="y" onclick="markCard(event,' + card.id + ',\'known\')">✓ Ken ik</button>'
    + '<button class="t" onclick="markCard(event,' + card.id + ',\'unsure\')">≈ Twijfelde even</button>'
    + '<button class="n" onclick="markCard(event,' + card.id + ',\'unknown\')">↻ Nog niet</button></div></div></div></div>';
}

export function toggleCardFavorite(e, cardId) {
  e.stopPropagation();
  const c = chapterContent().cards[cardId];
  const now = toggleFavorite('card', currentChapterKey(), cardId, c[0], c[1]);
  const btn = e.target.closest('button');
  if (btn) btn.classList.toggle('on', now);
}

function drawCards() {
  const chapter = chapterContent();
  const target = $('cgrid');
  if (!groupBySection) {
    target.className = 'cgrid';
    target.innerHTML = visibleCards.map(cardHtml).join('');
  } else {
    target.className = '';
    let html = '';
    for (let s = -1; s < chapter.summary.length; s++) {
      const group = visibleCards.filter((c) => c.section === s);
      if (!group.length) continue;
      html += '<div class="parblok"><h4 class="parkop">' + sectionHeading(chapter, s) + ' <span>' + group.length + ' kaarten</span></h4>'
        + '<div class="cgrid">' + group.map(cardHtml).join('') + '</div></div>';
    }
    target.innerHTML = html;
  }
  updateCardCounter();
}

export function toggleCardGrouping() {
  groupBySection = !groupBySection;
  renderFlashcards(chapterContent());
}

export function flipCard(el, e) {
  if (e.target.tagName === 'BUTTON') return;
  el.classList.toggle('flip');
}

/* Inline "check yourself" blocks inside summaries reveal their answer on click. */
export function toggleCheck(el) {
  el.classList.toggle('toon');
}

/* outcome: 'known' | 'unsure' | 'unknown' */
export function markCard(e, cardId, outcome) {
  e.stopPropagation();
  const known = outcome === 'known';
  const a = cards.find((c) => c.id === cardId);
  if (a) a.known = known;
  const b = visibleCards.find((c) => c.id === cardId);
  if (b) b.known = known;
  updateLeitner(cardId, outcome);
  const el = document.querySelector('.fc[data-id="' + cardId + '"]');
  if (el) {
    el.classList.toggle('known', known);
    el.classList.remove('flip');
    const dots = el.querySelector('.leitner-dots');
    if (dots) dots.outerHTML = leitnerDotsHtml(cardId);
  }
  updateCardCounter();
}

function updateCardCounter() {
  const known = cards.filter((c) => c.known).length;
  const el = $('kcnt');
  if (el) el.textContent = known + ' van ' + cards.length + ' gemarkeerd als gekend';
}

export function resetCards() {
  cards.forEach((c) => { c.known = false; });
  visibleCards = cards.slice();
  drawCards();
}

export function showUnknownCards() {
  const rest = cards.filter((c) => !c.known);
  visibleCards = rest.length ? rest : cards.slice();
  drawCards();
  if (!rest.length) alert('Je hebt alle kaarten gemarkeerd als gekend. Alles wordt weer getoond.');
}

export function showDueCards() {
  const rest = cards.filter((c) => isCardDueToday(c.id));
  visibleCards = rest.length ? rest : cards.slice();
  drawCards();
  if (!rest.length) alert('Niks te herhalen vandaag! Kom morgen terug, of oefen gewoon verder, dan komt de planning vanzelf weer bij.');
}
