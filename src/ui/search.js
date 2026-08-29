/* Global search overlay (terms and flashcards across all subjects). */
import { $, setHtml } from '../lib/dom.js';
import { levelById } from '../content/index.js';
import { searchContent, SEARCH_MIN_LENGTH } from '../content/queries.js';
import { TABS } from '../state/selection.js';
import { openChapterFromKey } from './chapter.js';

let results = [];

export function openSearch() {
  $('zoekwrap').classList.add('show');
  const input = $('globZoek');
  if (input) {
    input.value = '';
    setTimeout(() => input.focus(), 80);
  }
  drawResults([]);
}

export function closeSearch() {
  $('zoekwrap').classList.remove('show');
}

export function onSearchInput(value) {
  drawResults(searchContent(value));
}

function drawResults(list) {
  results = list;
  const target = $('zoekres');
  if (!target) return;
  if (!list.length) {
    target.innerHTML = '<p class="dim">Typ minstens ' + SEARCH_MIN_LENGTH + ' letters om te zoeken in alle vakken.</p>';
    return;
  }
  setHtml('zoekres', list.map((r, i) => {
    const level = levelById(r.level);
    return '<div class="zres" onclick="openSearchResult(' + i + ')"><span class="zvak" style="color:var(--' + r.subject.color + ')">' + r.subject.name + '</span>'
      + '<b>' + r.text + '</b><span class="zdetail">' + r.detail + '</span>'
      + '<span class="zpad">' + r.title + ' · ' + (level ? level.name : r.level) + ' ' + r.year + '</span></div>';
  }).join(''));
}

export function openSearchResult(i) {
  const r = results[i];
  if (!r) return;
  closeSearch();
  openChapterFromKey(r.key, r.type === 'card' ? TABS.flashcards : TABS.terms);
}

export function initSearch() {
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    const wrap = $('zoekwrap');
    if (wrap && wrap.classList.contains('show')) closeSearch();
  });
}
