/* Deciding whether what a student typed counts as the right term.

   Kept out of the UI because the rule has real judgement in it and is covered
   by its own tests: accents and punctuation do not matter, a small typo is
   forgiven, but a "typo" that turns the answer into a different term of the
   same chapter is not. */

const MAX_CHARS = 40;   // a term longer than this is a sentence, not a word
const MAX_WORDS = 4;

/* Terms are authored as HTML, so a few contain entities
   ("richtingsco&euml;ffici&euml;nt"). A detached textarea decodes them without
   parsing any markup: its content model is text, so nothing can execute. */
function decodeEntities(text) {
  if (text.indexOf('&') < 0) return text;
  const box = document.createElement('textarea');
  box.innerHTML = text;
  return box.value;
}

/* Lower case, no accents, no punctuation, single spaces: "Co&ouml;rdinaten!"
   and "coordinaten" have to count as the same answer. */
function normalise(text) {
  return decodeEntities(String(text))
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')   // combining accents, split off by NFD
    .replace(/[^a-z0-9\u00df-\u00ff /]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/* Every spelling that counts as right for one term.

   - "diameter (middellijn)" accepts the whole thing, "diameter", or
     "middellijn" — the brackets hold a synonym or an optional part
     ("(to) admire" in the English vocabulary lists).
   - "dalparabool / bergparabool" accepts either side. Only a slash *with*
     spaces splits, so units such as "km/uur" and "m/s" stay in one piece. */
export function acceptedAnswers(term) {
  const decoded = decodeEntities(String(term));
  const variants = [decoded];
  const withoutBrackets = decoded.replace(/\([^)]*\)/g, ' ');
  const insideBrackets = decoded.match(/\(([^)]*)\)/g);
  if (withoutBrackets !== decoded) {
    variants.push(withoutBrackets);
    if (insideBrackets) insideBrackets.forEach((b) => variants.push(b.slice(1, -1)));
  }
  variants.slice().forEach((v) => {
    if (v.indexOf(' / ') > -1) v.split(' / ').forEach((part) => variants.push(part));
  });
  return [...new Set(variants.map(normalise).filter(Boolean))];
}

/* Levenshtein distance, capped: the terms here are at most 40 characters. */
function editDistance(a, b) {
  let previous = Array.from({ length: b.length + 1 }, (unused, i) => i);
  for (let i = 1; i <= a.length; i++) {
    const current = [i];
    for (let j = 1; j <= b.length; j++) {
      current[j] = Math.min(
        previous[j] + 1,
        current[j - 1] + 1,
        previous[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1),
      );
    }
    previous = current;
  }
  return previous[b.length];
}

/* How many typos to forgive. Short words get none: with three letters left to
   guess, a near miss is not the same as knowing the word. */
function typoAllowance(length) {
  if (length <= 4) return 0;
  if (length <= 8) return 1;
  return 2;
}

/* Distance from what was typed to the nearest spelling that this term accepts. */
function distanceTo(typed, term) {
  return Math.min(...acceptedAnswers(term).map((a) => editDistance(typed, a)));
}

/* 'correct' | 'near' (right word, wrong spelling) | 'wrong'.

   `others` are the remaining terms of the chapter, and they decide whether a
   one-letter miss is a typo or a different word. Chapters are full of pairs
   that differ by a single letter — producenten/reducenten, bollelens/hollelens,
   kraakbeen/spaakbeen, in-/uitwendige prikkel — and those are precisely the
   ones a test asks about. Forgiving them as "almost right" would confirm the
   mix-up instead of correcting it, so an answer that fits another term of the
   chapter at least as well counts as wrong. */
export function judgeAnswer(given, term, others = []) {
  const typed = normalise(given);
  if (!typed) return 'wrong';
  const accepted = acceptedAnswers(term);
  if (accepted.includes(typed)) return 'correct';

  const distance = Math.min(...accepted.map((a) => editDistance(typed, a)));
  const allowed = Math.min(...accepted.map((a) => typoAllowance(a.length)));
  if (distance > allowed) return 'wrong';

  const fitsAnother = others.some((other) => normalise(other) !== normalise(term)
    && distanceTo(typed, other) <= distance);
  return fitsAnother ? 'wrong' : 'near';
}

/* Terms short enough to be worth typing. A chapter here and there defines a
   whole construction as a "term" ("Driehoek tekenen met twee zijden en de hoek
   ertussen gegeven"); typing that out tests patience, not memory. */
export function usableTerms(chapter) {
  return ((chapter && chapter.terms) || []).filter((t) => {
    const plain = decodeEntities(String(t[0]));
    return plain.length <= MAX_CHARS && plain.split(/\s+/).length <= MAX_WORDS;
  });
}
