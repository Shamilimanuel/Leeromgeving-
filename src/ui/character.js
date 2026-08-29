/* "Personage" screen: one character card per subject with level, XP and mastery. */
import { $ } from '../lib/dom.js';
import { SUBJECTS } from '../content/index.js';
import { subjectHasContent } from '../content/queries.js';
import { getStreak, today } from '../state/progress.js';
import { subjectStatistics } from '../state/stats.js';

function streakHtml() {
  const s = getStreak();
  if (!s.length || s.lastDay < today() - 1) {
    return '<div class="streak-badge dim2">\u{1F525} Begin vandaag een streak!</div>';
  }
  return '<div class="streak-badge">\u{1F525} ' + s.length + ' dag' + (s.length === 1 ? '' : 'en') + ' op rij geoefend</div>';
}

export function renderCharacterCards() {
  const grid = $('personageGrid');
  if (!grid) return;
  const streakEl = $('streakBadge');
  if (streakEl) streakEl.innerHTML = streakHtml();

  const subjects = SUBJECTS.filter((s) => subjectHasContent(s.id));
  if (!subjects.length) {
    grid.innerHTML = '<p class="dim">Nog geen hoofdstukken beschikbaar.</p>';
    return;
  }
  grid.innerHTML = subjects.map((subject) => {
    const s = subjectStatistics(subject.id);
    let detail = s.quizAttempts ? 'Gem. quizscore ' + s.quizAveragePct + '%' : 'Nog geen quiz gemaakt';
    detail += ' &middot; ' + (s.cardsTotal
      ? s.cardsMastered + '/' + s.cardsTotal + ' flashcards op topniveau'
      : 'nog geen flashcards geoefend');
    return '<div class="persona-card" style="--c:var(--' + subject.color + ');--cd:var(--' + subject.color + '-d)">'
      + '<span class="persona-bigico">' + subject.icon + '</span>'
      + '<div class="persona-head">'
        + '<span class="badge"><i class="ring"></i><i class="core">' + subject.icon + '</i></span>'
        + '<div><h3>' + subject.name + '</h3><small>' + s.read + '/' + s.chapters + ' hoofdstukken gelezen</small></div>'
        + '<div class="persona-lvl"><b>Lv. ' + s.level + '</b><span>Level</span></div>'
      + '</div>'
      + '<div class="persona-row"><div class="lbl"><span>XP</span><span>' + s.xp + ' / ' + s.xpNext + '</span></div>'
        + '<div class="prog"><i style="width:' + (s.xpProgress * 100) + '%"></i></div></div>'
      + '<div class="persona-row"><div class="lbl"><span>Kennis</span><span>' + s.mastery + '%</span></div>'
        + '<div class="prog"><i style="width:' + s.mastery + '%"></i></div></div>'
      + '<div class="persona-detail">' + detail + '</div>'
    + '</div>';
  }).join('');
}
