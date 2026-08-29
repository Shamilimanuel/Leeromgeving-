/* Glossary tab: searchable list of terms, grouped by section or alphabetical. */
import { $, setHtml } from '../lib/dom.js';
import { chapterContent, currentChapterKey } from '../state/selection.js';
import { isFavorite, toggleFavorite } from '../state/progress.js';
import { sectionForTerm, sectionHeading } from '../content/sections.js';

let groupBySection = true;

export function renderGlossary(chapter) {
  if (!chapter.terms.length) {
    setHtml('chBody',
      '<div class="empty"><h3>Nog geen begrippenlijst</h3><p>Bij dit hoofdstuk staan nog geen begrippen. Kijk bij de samenvatting.</p></div>');
    return;
  }
  setHtml('chBody',
    '<div class="bar"><button class="bt' + (groupBySection ? '' : ' gh') + '" onclick="toggleTermGrouping()">'
    + (groupBySection ? '\u{1F4D1} Op boekvolgorde' : '\u{1F524} Op alfabet') + '</button>'
    + '<input class="zoek" id="zoek" type="search" placeholder="Zoek een begrip…" aria-label="Zoek een begrip" style="flex:1;min-width:180px;margin:0"></div>'
    + '<div id="blist"></div>');
  $('zoek').addEventListener('input', function () { drawTerms(chapter, this.value); });
  drawTerms(chapter, '');
}

export function toggleTermGrouping() {
  groupBySection = !groupBySection;
  renderGlossary(chapterContent());
}

function termHtml(term, index) {
  const starred = isFavorite('term', currentChapterKey(), index);
  return '<div class="term"><button class="star' + (starred ? ' on' : '') + '" onclick="toggleTermFavorite(event,' + index + ')" aria-label="Favoriet">★</button><b>' + term[0] + '</b><span>' + term[1] + '</span></div>';
}

export function toggleTermFavorite(e, index) {
  e.stopPropagation();
  const term = chapterContent().terms[index];
  const now = toggleFavorite('term', currentChapterKey(), index, term[0], term[1]);
  const btn = e.target.closest('button');
  if (btn) btn.classList.toggle('on', now);
}

function drawTerms(chapter, filter) {
  const q = (filter || '').toLowerCase();
  const all = chapter.terms.map((term, index) => ({ term, index }));
  const list = all.filter((x) => x.term[0].indexOf(q) > -1 || x.term[1].toLowerCase().indexOf(q) > -1);
  if (!list.length) {
    setHtml('blist', '<p class="dim">Geen begrip gevonden. Probeer een ander woord.</p>');
    return;
  }
  if (!groupBySection || q) {
    setHtml('blist', list.map((x) => termHtml(x.term, x.index)).join(''));
    return;
  }
  let html = '';
  for (let s = -1; s < chapter.summary.length; s++) {
    const group = list.filter((x) => {
      const section = x.term[2] !== undefined ? x.term[2] : sectionForTerm(chapter, x.term[0]);
      return section === s;
    });
    if (!group.length) continue;
    html += '<div class="parblok"><h4 class="parkop">' + sectionHeading(chapter, s) + ' <span>' + group.length + ' begrippen</span></h4>'
      + group.map((x) => termHtml(x.term, x.index)).join('') + '</div>';
  }
  setHtml('blist', html);
}
