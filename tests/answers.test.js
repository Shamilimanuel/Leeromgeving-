// @vitest-environment jsdom
/* Answer checking for the typing exercise of the Oefenspel. This is the part
   with real judgement in it: a student typing "coordinaten" for
   "co&ouml;rdinaten" is right, and one typing "bot" for "been" is not. */
import { describe, it, expect } from 'vitest';
import { judgeAnswer, acceptedAnswers, usableTerms } from '../src/lib/answers.js';

describe('accepted spellings of a term', () => {
  it('decodes the HTML entities the content uses', () => {
    expect(acceptedAnswers('richtingsco&euml;ffici&euml;nt')).toContain('richtingscoefficient');
    expect(acceptedAnswers('co&ouml;rdinaten in de ruimte')).toContain('coordinaten in de ruimte');
  });

  it('treats a bracketed part as optional', () => {
    const accepted = acceptedAnswers('diameter (middellijn)');
    expect(accepted).toContain('diameter middellijn');
    expect(accepted).toContain('diameter');
    expect(accepted).toContain('middellijn');
  });

  it('accepts either side of a spaced slash', () => {
    const accepted = acceptedAnswers('dalparabool / bergparabool');
    expect(accepted).toContain('dalparabool');
    expect(accepted).toContain('bergparabool');
  });

  it('keeps a unit with an unspaced slash in one piece', () => {
    const accepted = acceptedAnswers('meter per seconde (m/s)');
    expect(accepted).toContain('m/s');
    expect(accepted).not.toContain('m');
  });
});

describe('judging a typed answer', () => {
  it('accepts the exact term, in any case, with any stray punctuation', () => {
    expect(judgeAnswer('gewricht', 'gewricht')).toBe('correct');
    expect(judgeAnswer('  Gewricht! ', 'gewricht')).toBe('correct');
  });

  it('accepts an answer typed without the accents', () => {
    expect(judgeAnswer('coordinaten in de ruimte', 'co&ouml;rdinaten in de ruimte')).toBe('correct');
  });

  it('accepts the optional part of an English verb either way', () => {
    expect(judgeAnswer('admire', '(to) admire')).toBe('correct');
    expect(judgeAnswer('to admire', '(to) admire')).toBe('correct');
  });

  it('calls a single typo in a long word "near", not wrong', () => {
    expect(judgeAnswer('gewrichtsbandn', 'gewrichtsbanden')).toBe('near');
    expect(judgeAnswer('armbuigspir', 'armbuigspier')).toBe('near');
  });

  it('does not forgive a typo in a short word', () => {
    expect(judgeAnswer('bot', 'been')).toBe('wrong');
    expect(judgeAnswer('boot', 'been')).toBe('wrong');
  });

  it('does not forgive a mix-up with another term of the same chapter', () => {
    // These pairs differ by one letter but are opposite concepts, so grading
    // them "almost right" would confirm the mistake instead of correcting it.
    const ecology = ['producenten', 'reducenten', 'consumenten'];
    expect(judgeAnswer('producenten', 'reducenten', ecology)).toBe('wrong');
    expect(judgeAnswer('reducenten', 'producenten', ecology)).toBe('wrong');

    const stimuli = ['inwendige prikkel', 'uitwendige prikkel'];
    expect(judgeAnswer('inwendige prikkel', 'uitwendige prikkel', stimuli)).toBe('wrong');

    const bones = ['kraakbeen', 'spaakbeen', 'ellepijp'];
    expect(judgeAnswer('kraakbeen', 'spaakbeen', bones)).toBe('wrong');
  });

  it('still forgives a real typo when no other term comes close', () => {
    const chapter = ['gewrichtsbanden', 'gewricht', 'spier', 'pees'];
    expect(judgeAnswer('gewrichtsbandn', 'gewrichtsbanden', chapter)).toBe('near');
  });

  it('rejects a different word and an empty answer', () => {
    expect(judgeAnswer('spier', 'gewricht')).toBe('wrong');
    expect(judgeAnswer('', 'gewricht')).toBe('wrong');
    expect(judgeAnswer('   ', 'gewricht')).toBe('wrong');
  });
});

describe('choosing terms to play with', () => {
  it('leaves out terms that are a sentence rather than a word', () => {
    const chapter = {
      terms: [
        ['gewricht', 'Beweeglijke verbinding tussen botten.'],
        ['Driehoek tekenen met twee zijden en de hoek ertussen gegeven', 'Een constructie.'],
      ],
    };
    expect(usableTerms(chapter).map((t) => t[0])).toEqual(['gewricht']);
  });

  it('survives a chapter with no terms at all', () => {
    expect(usableTerms({}).length).toBe(0);
    expect(usableTerms({ terms: [] }).length).toBe(0);
  });
});
