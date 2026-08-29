/* Favourites overlay: starred terms and flashcards. */
import { $, setHtml } from '../lib/dom.js';
import { parseKey, subjectById, levelById } from '../content/index.js';
import { getFavorites, removeFavoriteAt } from '../state/progress.js';
import { TABS } from '../state/selection.js';
import { openChapterFromKey } from './chapter.js';

export function openFavorites() {
  $('favwrap').classList.add('show');
  renderFavorites();
}

export function closeFavorites() {
  $('favwrap').classList.remove('show');
}

function renderFavorites() {
  const list = getFavorites();
  const target = $('favlist');
  if (!target) return;
  if (!list.length) {
    target.innerHTML = '<p class="dim">Nog geen favorieten. Klik op het sterretje bij een begrip of flashcard om het hier te bewaren.</p>';
    return;
  }
  setHtml('favlist', list.map((f, i) => {
    const parts = parseKey(f.chapterKey);
    const subject = subjectById(parts.subject);
    const level = levelById(parts.level);
    return '<div class="favitem"><div class="favgo" onclick="openFavorite(' + i + ')">'
      + '<span class="zvak" style="color:var(--' + (subject ? subject.color : 'accent') + ')">' + (subject ? subject.name : parts.subject) + ' · ' + (level ? level.name : parts.level) + ' ' + parts.year + '</span>'
      + '<b>' + f.text + '</b><span class="zdetail">' + f.detail + '</span></div>'
      + '<button class="favdel" onclick="removeFavorite(' + i + ')" aria-label="Verwijder favoriet">✕</button></div>';
  }).join(''));
}

export function openFavorite(i) {
  const f = getFavorites()[i];
  if (!f) return;
  closeFavorites();
  openChapterFromKey(f.chapterKey, f.type === 'card' ? TABS.flashcards : TABS.terms);
}

export function removeFavorite(i) {
  removeFavoriteAt(i);
  renderFavorites();
}

export function initFavorites() {
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    const wrap = $('favwrap');
    if (wrap && wrap.classList.contains('show')) closeFavorites();
  });
}
