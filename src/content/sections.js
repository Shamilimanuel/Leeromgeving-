/* Which summary section does a glossary term or flashcard belong to?
   Chapter files usually store the section index explicitly (the last value of
   a term/card entry); these heuristics are the fallback for entries without it. */

export function sectionForTerm(chapter, term) {
  const t = term.toLowerCase();
  for (let i = 0; i < chapter.summary.length; i++) {
    if (chapter.summary[i].html.toLowerCase().indexOf('<b>' + t) > -1) return i;
  }
  for (let i = 0; i < chapter.summary.length; i++) {
    if (chapter.summary[i].html.toLowerCase().indexOf(t) > -1) return i;
  }
  return -1;
}

export function sectionForCard(chapter, card) {
  const words = (card[0] + ' ' + card[1]).toLowerCase().replace(/[^a-zàèéêëïöü ]/g, ' ').split(/\s+/)
    .filter((w) => w.length >= 6);
  let best = -1;
  let top = 0;
  for (let i = 0; i < chapter.summary.length; i++) {
    const html = chapter.summary[i].html.toLowerCase();
    let score = 0;
    words.forEach((w) => { if (html.indexOf(w) > -1) score++; });
    if (score > top) {
      top = score;
      best = i;
    }
  }
  return best;
}

/* Heading of section `index`, or "Overig" (other) for -1. */
export function sectionHeading(chapter, index) {
  return index > -1 ? chapter.summary[index].heading : 'Overig';
}
