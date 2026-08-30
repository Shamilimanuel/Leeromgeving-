/* Splitting a chapter into the levels of its practice path.

   One level per summary paragraph, because the terms and flashcards already
   carry the index of the paragraph they belong to — so the split costs no
   content work. Paragraphs with too little material to practise are merged
   into the next one, and a chapter with more than one level ends on a
   "Eindtoets" that draws from the whole chapter. */
import { sectionForTerm, sectionForCard, sectionHeading } from './sections.js';

const MIN_ITEMS = 6;      // terms + cards a level needs to stand on its own
export const FINAL_LEVEL = 'eindtoets';

/* Terms and cards of a chapter, bucketed per summary paragraph.
   Anything the content does not place (section -1) joins the last bucket. */
function bucketBySection(chapter) {
  const buckets = chapter.summary.map((section, index) => ({
    sections: [index],
    heading: section.heading,
    terms: [],
    cards: [],
  }));
  if (!buckets.length) buckets.push({ sections: [-1], heading: 'Oefenen', terms: [], cards: [] });
  const last = buckets[buckets.length - 1];

  (chapter.terms || []).forEach((term) => {
    const at = term[2] !== undefined ? term[2] : sectionForTerm(chapter, term[0]);
    (buckets[at] || last).terms.push(term);
  });
  (chapter.cards || []).forEach((card, id) => {
    const at = card[2] !== undefined ? card[2] : sectionForCard(chapter, card);
    (buckets[at] || last).cards.push({ card, id });
  });
  return buckets;
}

function itemCount(level) {
  return level.terms.length + level.cards.length;
}

/* The levels of one chapter, in order. Each is
   { index, title, heading, terms, cards, isFinal }. */
export function levelsForChapter(chapter) {
  if (!chapter || !chapter.summary) return [];

  // Merge paragraphs forward until each level has enough to practise with.
  const levels = [];
  let open = null;
  bucketBySection(chapter).forEach((bucket) => {
    if (!open) open = { heading: bucket.heading, sections: [], terms: [], cards: [] };
    open.sections.push(...bucket.sections);
    open.terms.push(...bucket.terms);
    open.cards.push(...bucket.cards);
    if (itemCount(open) >= MIN_ITEMS) {
      levels.push(open);
      open = null;
    }
  });
  // A thin tail joins the level before it rather than becoming a stub.
  if (open && itemCount(open)) {
    if (levels.length) {
      levels[levels.length - 1].sections.push(...open.sections);
      levels[levels.length - 1].terms.push(...open.terms);
      levels[levels.length - 1].cards.push(...open.cards);
    } else {
      levels.push(open);
    }
  }
  if (!levels.length) return [];

  const out = levels.map((level, index) => ({
    index,
    title: 'Level ' + (index + 1),
    heading: level.heading,
    sections: level.sections,
    terms: level.terms,
    cards: level.cards,
    isFinal: false,
  }));

  // Everything together, as a last level to finish the chapter on.
  if (out.length > 1) {
    out.push({
      index: out.length,
      title: 'Eindtoets',
      heading: 'Alles uit dit hoofdstuk',
      sections: out.reduce((all, l) => all.concat(l.sections), []),
      terms: out.reduce((all, l) => all.concat(l.terms), []),
      cards: out.reduce((all, l) => all.concat(l.cards), []),
      isFinal: true,
    });
  }
  return out;
}

/* Heading shown under a level's name, kept short enough for a path node. */
export function levelSubtitle(chapter, level) {
  if (level.isFinal) return level.heading;
  const heading = level.heading || sectionHeading(chapter, level.index);
  return heading.replace(/^\d+(\.\d+)*\s*/, '');
}
