/* Home screen: the subject grid. */
import { $, setHtml } from '../lib/dom.js';
import { SUBJECTS, subjectById } from '../content/index.js';
import { selectSubject } from '../state/selection.js';
import { go, SCREENS } from './navigation.js';
import { showToast } from './toast.js';

export function renderSubjectGrid() {
  setHtml('subjectGrid', SUBJECTS.map((s, i) =>
    '<button class="subj' + (s.todo ? ' todo' : '') + '" style="--c:var(--' + s.color + ');--cd:var(--' + s.color + '-d);animation-delay:' + (i * 55) + 'ms" onclick="chooseSubject(\'' + s.id + '\')">'
    + '<i class="frame"></i><span class="bigico">' + s.icon + '</span>'
    + '<span class="badge"><i class="ring"></i><i class="core">' + s.icon + '</i></span>'
    + '<span class="swatch"><i class="dot"></i>' + s.colorName + '</span>'
    + '<h3>' + s.name + '</h3><small>Bekijk de samenvattingen <span>→</span></small></button>',
  ).join(''));
}

/* Cards light up where the mouse is (see --mx/--my in the CSS). */
export function initCardSpotlight() {
  document.addEventListener('mousemove', (e) => {
    const el = e.target.closest ? e.target.closest('.subj,.chapter') : null;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', (e.clientX - r.left) + 'px');
    el.style.setProperty('--my', (e.clientY - r.top) + 'px');
  });
}

/* Colour the whole site in the subject's colour. */
function applySubjectAccent(subject) {
  const root = document.documentElement;
  root.style.setProperty('--accent', 'var(--' + subject.color + ')');
  root.style.setProperty('--accent-d', 'var(--' + subject.color + '-d)');
  const color = getComputedStyle(root).getPropertyValue('--' + subject.color);
  document.querySelectorAll('.aurora i').forEach((n) => { n.style.background = color; });
}

export function chooseSubject(id) {
  const subject = subjectById(id);
  if (subject.mergedInto) {
    showToast('"' + subject.name + '" zit tegenwoordig bij "' + subject.mergedInto + '". Klik daarop.');
    return;
  }
  selectSubject(id);
  applySubjectAccent(subject);
  go(SCREENS.level);
}

export { $ };
