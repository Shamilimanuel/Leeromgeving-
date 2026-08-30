/* The practice path of a chapter: a winding column of level nodes.

   A finished level is green with a check, the next one is gold and is the only
   one you can start, the rest are locked. Rendered into the Oefenspel tab; the
   levels themselves are played in the overlay from game.js. */
import { setHtml } from '../lib/dom.js';
import { currentChapterKey } from '../state/selection.js';
import { levelsForChapter, levelSubtitle } from '../content/levels.js';
import { isLevelDone, isLevelUnlocked, levelResult, currentLevelIndex } from '../state/gameLevels.js';

/* How far a node leans out of the middle, per position in the path. Repeating
   the pattern is what gives the column its winding shape. */
const LEAN = [0, 26, 40, 26, 0, -26, -40, -26];

function nodeHtml(chapter, level, chapterKey, currentIndex) {
  const done = isLevelDone(chapterKey, level.index);
  const unlocked = isLevelUnlocked(chapterKey, level.index);
  const isCurrent = level.index === currentIndex && unlocked;
  const result = levelResult(chapterKey, level.index);

  let state = 'op-slot';
  if (done) state = 'klaar';
  else if (unlocked) state = 'open';

  const face = done ? '✓' : (unlocked ? (level.isFinal ? '★' : level.index + 1) : '🔒');
  const label = level.isFinal ? 'Eindtoets' : level.title;
  const score = result ? '<span class="pad-score">' + result.best + '/' + result.total + '</span>' : '';

  return '<li class="pad-stap' + (isCurrent ? ' nu' : '') + '" style="--lean:' + LEAN[level.index % LEAN.length] + 'px">'
    + '<button class="pad-knop ' + state + (level.isFinal ? ' finale' : '') + '"'
    + (unlocked ? ' onclick="openLevel(' + level.index + ')"' : ' disabled')
    + ' aria-label="' + label + ': ' + levelSubtitle(chapter, level) + '">'
    + '<span class="pad-gezicht">' + face + '</span></button>'
    + '<div class="pad-tekst"><b>' + label + '</b>'
    + '<small>' + levelSubtitle(chapter, level) + '</small>' + score + '</div>'
    + (isCurrent ? '<span class="pad-start">START</span>' : '')
    + '</li>';
}

export function renderPath(chapter) {
  const levels = levelsForChapter(chapter);
  if (!levels.length) {
    setHtml('chBody',
      '<div class="empty"><h3>Nog niks om te oefenen</h3>'
      + '<p>Voor het oefenspel zijn flashcards of begrippen nodig, en die staan er bij dit '
      + 'hoofdstuk nog niet. Kijk bij de samenvatting.</p></div>');
    return;
  }

  const chapterKey = currentChapterKey();
  const currentIndex = currentLevelIndex(chapterKey, levels.length);
  const doneCount = levels.filter((l) => isLevelDone(chapterKey, l.index)).length;
  const xp = levels.reduce((sum, l) => {
    const result = levelResult(chapterKey, l.index);
    return sum + (result ? result.xp : 0);
  }, 0);

  setHtml('chBody',
    '<div class="pad-kop">'
    + '<div class="pad-kop-tel"><b>' + doneCount + ' van de ' + levels.length + '</b> levels gehaald</div>'
    + '<div class="pad-kop-xp">' + xp + ' XP</div>'
    + '<div class="prog pad-prog"><i style="width:' + Math.round((doneCount / levels.length) * 100) + '%"></i></div>'
    + '</div>'
    + '<ol class="pad">' + levels.map((l) => nodeHtml(chapter, l, chapterKey, currentIndex)).join('') + '</ol>'
    + (doneCount === levels.length
      ? '<div class="pad-af">🏆 Dit hoofdstuk is helemaal uitgespeeld. Je kunt elk level opnieuw doen.</div>'
      : ''));
}
