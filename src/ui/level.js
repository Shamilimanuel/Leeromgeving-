/* Level + school year screen. */
import { $, setHtml } from '../lib/dom.js';
import { LEVELS, yearsFor } from '../content/index.js';
import { selection, currentSubject } from '../state/selection.js';
import { go, SCREENS } from './navigation.js';

export function renderLevel() {
  const subject = currentSubject();
  $('lvlBrand').textContent = subject.name;
  setHtml('nivChips', LEVELS.map((level, i) => {
    const years = yearsFor(subject.id, level.id);
    if (!years || !years.length) {
      return '<button class="niv-card disabled" disabled title="Niet beschikbaar bij dit vak" style="animation-delay:' + (i * 60) + 'ms">'
        + '<span class="bigico">' + level.icon + '</span>'
        + '<span class="ico">' + level.icon + '</span><h3>' + level.name + '</h3><p>Niet beschikbaar bij dit vak</p></button>';
    }
    const selected = selection.level === level.id;
    return '<button class="niv-card' + (selected ? ' sel' : '') + '" style="--c:var(--' + level.color + ');--cd:var(--' + level.color + '-d);animation-delay:' + (i * 60) + 'ms" onclick="chooseLevel(\'' + level.id + '\')">'
      + '<span class="bigico">' + level.icon + '</span><span class="check">\u{2713}</span>'
      + '<span class="ico">' + level.icon + '</span><h3>' + level.name + '</h3><p>' + level.description + '</p></button>';
  }).join(''));

  const yearRow = $('jaarRow');
  if (!selection.level) {
    yearRow.style.display = 'none';
    return;
  }
  yearRow.style.display = '';
  const years = yearsFor(subject.id, selection.level);
  if (!years || !years.length) {
    setHtml('jaarChips', '<span class="hint">Dit vak wordt op dit niveau niet gegeven.</span>');
    return;
  }
  setHtml('jaarChips', years.map((year, i) =>
    '<button class="jaar-card" style="animation-delay:' + (i * 70) + 'ms" onclick="chooseYear(' + year + ')"><b>' + year + '</b><span>Jaar</span></button>',
  ).join(''));
}

export function chooseLevel(id) {
  selection.level = id;
  selection.year = null;
  renderLevel();
}

export function chooseYear(year) {
  selection.year = year;
  go(SCREENS.book);
}
