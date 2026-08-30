/* Building the exercises of one practice session out of a chapter level.

   Kept apart from the session UI in game.js because this is where the content
   is inspected: which terms are usable, which sentence of the summary has a
   gap worth filling, which paragraph a term belongs to. Each builder returns a
   plan object, or nothing when the level has too little to work with.

   Chapter text is HTML, so anything compared or cut up goes through
   plainText() first. */
import { usableTerms } from '../lib/answers.js';

export const MATCH_MIN = 3;        // pairs needed for a connect exercise
export const MATCH_PAIRS = 5;
const MATCH_MAX_BLOCKS = 2;
const QUIZ_MAX = 3;
const CHOICE_OPTIONS = 4;
const ORDER_MIN_WORDS = 4;         // a shorter description is not a puzzle
const ORDER_MAX_WORDS = 10;        // ...and a longer one is a chore
const GAP_MIN_WORDS = 6;
const GAP_MAX_WORDS = 26;
const SORT_PER_BUCKET = 2;
const SORT_MAX_BUCKETS = 3;
const WORD_EDGE = '\\b';        // word boundary, for the gap exercise

export function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function plainText(html) {
  const box = document.createElement('div');
  box.innerHTML = String(html == null ? '' : html);
  return (box.textContent || '').replace(/\s+/g, ' ').trim();
}

function escapeRegex(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function wordCount(text) {
  return text ? text.split(' ').length : 0;
}

/* ── One builder per exercise kind ────────────────────────────────────── */

/* Connect five question/answer pairs, in one or two rounds. Maths and
   arithmetic chapters lean on this: their "terms" are whole constructions that
   are no good to type, so their material sits in the flashcards. */
function buildMatch(context) {
  const { cards } = context.level;
  if (cards.length < MATCH_MIN) return [];
  const order = shuffle(cards.slice());
  const size = Math.min(MATCH_PAIRS, order.length);
  const blocks = Math.min(MATCH_MAX_BLOCKS, Math.floor(order.length / size));
  const out = [];
  for (let at = 0; out.length < Math.max(1, blocks); at += size) {
    out.push({ kind: 'match', pairs: order.slice(at, at + size) });
    if (at + size * 2 > order.length) break;
  }
  return out;
}

/* Type the term that belongs to a description. */
function buildType(context) {
  return context.pull(3).map((term) => ({ kind: 'type', term }));
}

/* Pick the right term out of four. */
function buildChoice(context) {
  if (context.chapterTerms.length < CHOICE_OPTIONS) return [];
  return context.pull(2).map((term) => {
    const wrong = shuffle(context.chapterTerms.filter((t) => t[0] !== term[0]))
      .slice(0, CHOICE_OPTIONS - 1);
    return { kind: 'choice', term, options: shuffle([term, ...wrong]) };
  });
}

/* Rebuild a description by tapping its words in order. */
function buildOrder(context) {
  return context.pull(2, (term) => {
    const n = wordCount(plainText(term[1]));
    return n >= ORDER_MIN_WORDS && n <= ORDER_MAX_WORDS;
  }).map((term) => ({ kind: 'order', term }));
}

/* A sentence out of the summary with the term blanked out. Only sentences that
   actually contain the term are usable, which is why this can come back empty. */
function buildGap(context) {
  const { chapter, level } = context;
  const sections = [...new Set(level.sections)].filter((i) => i >= 0 && chapter.summary[i]);
  if (!sections.length) return [];

  const sentences = [];
  sections.forEach((i) => {
    plainText(chapter.summary[i].html).split(/(?<=[.!?])\s+/).forEach((sentence) => {
      const n = wordCount(sentence);
      if (n >= GAP_MIN_WORDS && n <= GAP_MAX_WORDS) sentences.push(sentence);
    });
  });
  if (!sentences.length) return [];

  const sentenceFor = (term) => {
    const needle = plainText(term[0]);
    if (needle.length < 4) return null;
    const pattern = new RegExp(WORD_EDGE + escapeRegex(needle) + WORD_EDGE, 'i');
    const sentence = sentences.find((s) => pattern.test(s));
    return sentence ? { sentence, blanked: sentence.replace(pattern, '_____') } : null;
  };
  return context.pull(2, (term) => !!sentenceFor(term))
    .map((term) => ({ kind: 'gap', term, ...sentenceFor(term) }));
}

/* Sort terms into the paragraph they belong to. Needs a level that spans more
   than one paragraph, so in practice this is the Eindtoets and merged levels. */
function buildSort(context) {
  const { chapter, level } = context;
  const sections = [...new Set(level.sections)].filter((i) => i >= 0 && chapter.summary[i]);
  if (sections.length < 2) return [];

  const buckets = shuffle(sections.slice()).slice(0, SORT_MAX_BUCKETS)
    .map((at) => ({ section: at, heading: chapter.summary[at].heading }));
  const items = [];
  buckets.forEach((bucket) => {
    const inBucket = shuffle(level.terms.filter((t) => t[2] === bucket.section));
    inBucket.slice(0, SORT_PER_BUCKET).forEach((term) => items.push({ term, section: bucket.section }));
  });
  // Every bucket has to be able to receive something, or the puzzle is unfair.
  if (buckets.some((b) => !items.some((i) => i.section === b.section))) return [];
  if (items.length < 4) return [];
  return [{ kind: 'sort', buckets, items: shuffle(items) }];
}

/* The chapter's own quiz questions. They carry no paragraph index, so they
   belong to the chapter as a whole rather than to one level. */
function buildQuiz(context) {
  const pool = (context.chapter.quiz || []).filter((q) => Array.isArray(q[1]) && q[1].length > 1);
  if (!pool.length) return [];
  return shuffle(pool.slice()).slice(0, context.level.isFinal ? QUIZ_MAX : QUIZ_MAX - 1)
    .map((question) => ({ kind: 'quiz', question }));
}

/* Does this description belong to this term? Half the time it does not. */
function buildTrueFalse(context) {
  if (context.chapterTerms.length < 2) return [];
  return context.pull(2).map((term) => {
    const isTrue = Math.random() < 0.5;
    if (isTrue) return { kind: 'truefalse', term, shown: term[1], isTrue: true };
    const other = shuffle(context.chapterTerms.filter((t) => t[0] !== term[0]))[0];
    return { kind: 'truefalse', term, shown: other[1], isTrue: false };
  });
}

/* Three terms from this paragraph and one from another: which is the odd one?
   The paragraph is named in the question, otherwise it is a guess. */
function buildOddOne(context) {
  const { chapter, level } = context;
  const own = [...new Set(level.sections)].filter((i) => i >= 0 && chapter.summary[i]);
  if (!own.length || level.isFinal) return [];

  const inLevel = shuffle(context.levelTerms.slice()).slice(0, 3);
  if (inLevel.length < 3) return [];
  const outside = shuffle(usableTerms(chapter).filter((t) => {
    const at = t[2];
    return at !== undefined && at >= 0 && !own.includes(at);
  }));
  if (!outside.length) return [];

  const odd = outside[0];
  return [{
    kind: 'oddone',
    heading: chapter.summary[own[0]].heading,
    odd,
    options: shuffle([...inLevel, odd]),
  }];
}

/* Order matters: the builders that can only use particular terms (one that
   appears in a summary sentence, one with a description of the right length)
   get first pick, and the ones that work with any term take what is left. */
const BUILDERS = [
  buildMatch, buildSort, buildQuiz, buildOddOne,
  buildGap, buildOrder, buildChoice, buildTrueFalse, buildType,
];

/* The exercises of one session: every builder contributes what it can, then
   the kinds are taken in turn so a session is varied rather than five typing
   questions in a row. */
export function buildSession(chapter, level, count) {
  const levelTerms = usableTerms({ terms: level.terms });
  const pool = shuffle(levelTerms.slice());
  const context = {
    chapter,
    level,
    levelTerms,
    chapterTerms: usableTerms(chapter),
    /* Take up to `n` terms out of the pool for good, so that no two exercises
       in one session end up asking about the same term. */
    pull: (n, ok) => {
      const out = [];
      for (let i = 0; i < pool.length && out.length < n;) {
        if (!ok || ok(pool[i])) out.push(pool.splice(i, 1)[0]);
        else i++;
      }
      return out;
    },
  };

  const byKind = BUILDERS.map((build) => shuffle(build(context))).filter((list) => list.length);
  const steps = [];
  for (let round = 0; steps.length < count && byKind.some((list) => list.length); round++) {
    byKind.forEach((list) => {
      if (steps.length < count && list.length) steps.push(list.shift());
    });
  }
  return shuffle(steps).slice(0, count);
}
