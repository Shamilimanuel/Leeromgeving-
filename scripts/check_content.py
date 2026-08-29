#!/usr/bin/env python3
"""
Checks the raw book JSON in data/ and the chapter modules in
src/content/subjects/ for the mistakes we ran into during this project.

Usage:
  python scripts/check_content.py                                  check everything
  python scripts/check_content.py data/rekenen/rekenen-bbl2.json   check one file (.json or .js)

Exit code 0 when everything is fine, 1 when there are errors.

The JavaScript side (every "ready" chapter is registered, keys are valid,
quiz answers point at an option, inline handlers exist) is covered by the
Vitest suite: run `npm test`.
"""
import glob
import json
import os
import re
import sys
import unicodedata

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_DIR = os.path.join(ROOT, 'data')
SUBJECTS_DIR = os.path.join(ROOT, 'src', 'content', 'subjects')

# The messages quote content (∠, é, …); make sure a Windows console can print them.
for stream in (sys.stdout, sys.stderr):
    if hasattr(stream, 'reconfigure'):
        stream.reconfigure(encoding='utf-8', errors='replace')

# Phrases that indicate "thinking out loud" that was accidentally left in a
# quiz explanation. "klopt niet" on its own is deliberately NOT in this list:
# it is a perfectly normal Dutch sentence ("die bewering klopt niet") and gave
# false positives. Only a hesitation word right before "klopt niet" really
# points at an AI correcting itself.
HESITATION_RE = re.compile(
    r'\b(nee,?\s|toch niet|wacht,?\s|(wacht|nee|hmm)\W{1,12}klopt (dit |dat )?niet\??|'
    r'hmm|eigenlijk niet|laat ik|ik bedoel|correctie:|oeps|fout,?\s*ik)\b', re.I)

TAGS = ['div', 'table', 'tr', 'td', 'th', 'ul', 'ol', 'li', 'p', 'span', 'figure']
QUIZ_OPTIONS = 4
MIN_TERMS = 10
MIN_CARDS = 10
MIN_QUIZ = 10
MIN_EXPLANATION_LENGTH = 40


def slug(text):
    text = unicodedata.normalize('NFKD', str(text).lower())
    text = ''.join(c for c in text if not unicodedata.combining(c))
    return re.sub(r'[^a-z0-9]+', '-', text).strip('-')


def check_tags(markup, where, errors):
    for tag in TAGS:
        opened = len(re.findall(r'<' + tag + r'[\s>]', markup))
        closed = len(re.findall(r'</' + tag + '>', markup))
        if opened != closed:
            errors.append('  ✗ %s: <%s> not balanced (%d open, %d close)' % (where, tag, opened, closed))


def check_chapter(chapter, index, file_name, errors, warnings):
    title = chapter.get('titel', '(no title)')
    where = '%s › chapter %d "%s"' % (file_name, index, title)

    if title.lower().startswith('hoofdstuk'):
        warnings.append('  ! %s: title starts with "Hoofdstuk": leave that out' % where)

    subs = chapter.get('subhoofdstukken') or []
    sub_titles = {s.get('titel', '').strip() for s in subs}
    if not subs:
        warnings.append('  ! %s: no subchapters' % where)

    check_tags(chapter.get('uitleg', ''), where + ' (chapter explanation)', errors)
    for s in subs:
        sub_title = s.get('titel', '')
        check_tags(s.get('uitleg', ''), where + ' › "%s"' % sub_title, errors)
        if len(s.get('uitleg', '')) < MIN_EXPLANATION_LENGTH:
            warnings.append('  ! %s › "%s": very short explanation' % (where, sub_title))
        for m in re.finditer(r"diagram-nodig'>([^<]{0,90})", s.get('uitleg', '')):
            warnings.append('  ! %s › "%s": asks for a drawing: %s' % (where, sub_title, m.group(1).strip()))

    for items, kind in [(chapter.get('begrippen', []), 'term'), (chapter.get('flashcards', []), 'flashcard')]:
        for item in items:
            section = item.get('paragraaf', '')
            if section and section not in sub_titles:
                # tolerate small spelling differences
                if slug(section) not in {slug(t) for t in sub_titles}:
                    errors.append('  ✗ %s: %s has paragraaf "%s", no matching subchapter' % (where, kind, section))

    for i, q in enumerate(chapter.get('quiz', []) or [], 1):
        options = q.get('opties') or []
        answer_index = q.get('antwoord_index')
        if len(options) != QUIZ_OPTIONS:
            errors.append('  ✗ %s: quiz question %d has %d options (must be %d)' % (where, i, len(options), QUIZ_OPTIONS))
        if not isinstance(answer_index, int) or not (0 <= answer_index < len(options)):
            errors.append('  ✗ %s: quiz question %d has an invalid antwoord_index (%r)' % (where, i, answer_index))
        if HESITATION_RE.search(q.get('uitleg', '')):
            errors.append('  ✗ %s: quiz question %d: explanation looks like thinking out loud: "%s..."'
                          % (where, i, q.get('uitleg', '')[:60]))

    for field, minimum in [('begrippen', MIN_TERMS), ('flashcards', MIN_CARDS)]:
        n = len(chapter.get(field, []))
        if n < minimum:
            warnings.append('  ! %s: only %d %s (target is %d+)' % (where, n, field, minimum))
    n_quiz = len(chapter.get('quiz', []) or [])
    if n_quiz < MIN_QUIZ:
        warnings.append('  ! %s: only %d quiz questions (target is %d-20)' % (where, n_quiz, MIN_QUIZ))


def check_source_file(path, errors, warnings):
    name = os.path.relpath(path, ROOT)
    try:
        data = json.load(open(path, encoding='utf-8'))
    except Exception as e:  # noqa: BLE001
        errors.append('✗ %s: NOT VALID JSON: %s' % (name, str(e)[:120]))
        return
    chapters = data.get('hoofdstukken', [])
    if not chapters:
        errors.append('✗ %s: no "hoofdstukken" found' % name)
        return
    print('%s: %d chapters' % (name, len(chapters)))
    for i, chapter in enumerate(chapters, 1):
        check_chapter(chapter, i, name, errors, warnings)


def check_module_file(path, errors):
    """Quick structural check of a chapter module in src/content/subjects/."""
    name = os.path.relpath(path, ROOT)
    source = open(path, encoding='utf-8').read()
    if 'registerChapter(' not in source:
        return
    if 'registry.js' not in source:
        errors.append('✗ %s: missing the registerChapter import' % name)
    braces = source.count('{') - source.count('}')
    if braces != 0:
        errors.append('✗ %s: curly braces not balanced (difference %d)' % (name, braces))
    check_tags(source, name, errors)


def main():
    errors, warnings = [], []
    targets = sys.argv[1:]

    if targets:
        for path in targets:
            if path.endswith('.json'):
                check_source_file(path, errors, warnings)
            elif path.endswith('.js'):
                check_module_file(path, errors)
    else:
        for path in sorted(glob.glob(os.path.join(DATA_DIR, '*', '*.json'))):
            check_source_file(path, errors, warnings)
        for path in sorted(glob.glob(os.path.join(SUBJECTS_DIR, '*', '*', '*.js'))):
            check_module_file(path, errors)

    print()
    if warnings:
        print('Warnings (%d): worth a look, not necessarily wrong:' % len(warnings))
        for w in warnings:
            print(w)
        print()

    if errors:
        print('ERRORS (%d): fix these first:' % len(errors))
        for e in errors:
            print(e)
        print('\nDo not build before these are fixed.')
        sys.exit(1)
    print('No errors found. Safe to build.')
    sys.exit(0)


if __name__ == '__main__':
    main()
