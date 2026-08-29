#!/usr/bin/env python3
"""
Converts the raw book JSON in data/<subject>/*.json into chapter modules:

    src/content/subjects/<subject>/<level><year>/hNN-<slug>.js

Usage:
  python scripts/build_content.py                                  convert every book in data/
  python scripts/build_content.py data/economie/economie-tl3.json  convert one book

A generated module with the same file name is overwritten, so a hand-edited
chapter must not share its file name with a generated one. The subject file
(src/content/subjects/<subject>/<subject>.js, with the registerBook calls)
is not generated: write it by hand, see biologie.js as an example.

Run `python scripts/check_content.py` before and `npm test` afterwards.

JSON schema of a book (field names are Dutch: that is how the books were
transcribed and it is the input contract of this script):

  {"hoofdstukken": [
     {"titel": "...", "uitleg": "...",
      "subhoofdstukken": [{"titel": "...", "uitleg": "..."}],
      "begrippen":  [{"term": "...", "uitleg": "...", "paragraaf": "<subchapter title>"}],
      "flashcards": [{"vraag": "...", "antwoord": "...", "paragraaf": "..."}],
      "quiz":       [{"vraag": "...", "opties": ["...", ...], "antwoord_index": 0, "uitleg": "..."}]}]}
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
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from content_formatter import explanation_to_html  # noqa: E402

# Relative import path from a chapter module to the registry.
REGISTRY_IMPORT = "import { registerChapter } from '../../../registry.js';"
MAX_SLUG_LENGTH = 44
# "economie-tl3.json" -> level "tl", year 3. Files without a level word fall back to bbl.
LEVEL_IN_FILENAME_RE = re.compile(r'\b(arbeid|bbl|bk|tl)[\s_-]*(\d)', re.I)


def slug(text):
    text = unicodedata.normalize('NFKD', str(text).lower())
    text = ''.join(c for c in text if not unicodedata.combining(c))
    return re.sub(r'[^a-z0-9]+', '-', text).strip('-')[:MAX_SLUG_LENGTH]


def level_and_year_from_filename(name):
    m = LEVEL_IN_FILENAME_RE.search(name)
    if m:
        return m.group(1).lower(), int(m.group(2))
    m2 = re.search(r'(\d)', name)
    return 'bbl', (int(m2.group(1)) if m2 else 1)


def convert_json(only=None):
    """Convert all books (or a single file). Returns the number of chapters written."""
    written = 0
    paths = [os.path.abspath(only)] if only else sorted(glob.glob(os.path.join(DATA_DIR, '*', '*.json')))

    for json_path in paths:
        if not os.path.exists(json_path):
            print('  ! file not found: %s' % json_path)
            continue
        subject = os.path.basename(os.path.dirname(json_path))
        name = os.path.basename(json_path)
        level, year = level_and_year_from_filename(name)
        try:
            data = json.load(open(json_path, encoding='utf-8'))
        except Exception as e:  # noqa: BLE001
            print('  ! %s is not valid JSON: %s' % (name, str(e)[:60]))
            continue
        target_dir = os.path.join(SUBJECTS_DIR, subject, level + str(year))
        os.makedirs(target_dir, exist_ok=True)
        for nr, raw in enumerate(data.get('hoofdstukken', []), 1):
            chapter = build_chapter(raw, explanation_to_html)
            key = '%s|%s|%d|%d' % (subject, level, year, nr)
            file_name = 'h%02d-%s.js' % (nr, slug(raw.get('titel', 'hoofdstuk')))
            with open(os.path.join(target_dir, file_name), 'w', encoding='utf-8', newline='\n') as f:
                f.write(to_module(key, chapter))
            written += 1
    return written


def build_chapter(raw, format_html):
    """Raw JSON chapter -> {title, summary, terms, cards, quiz} (the shape registerChapter expects)."""
    subs = raw.get('subhoofdstukken') or []
    sub_titles = [s.get('titel', '') for s in subs]
    has_section_field = any('paragraaf' in t for t in raw.get('begrippen', []))

    def find_section(value):
        """Section index for an explicit 'paragraaf' value, matching loosely on the slug."""
        if not value:
            return -1
        wanted = slug(value)
        for i, t in enumerate(sub_titles):
            if slug(t) == wanted:
                return i
        for i, t in enumerate(sub_titles):
            if wanted and (wanted in slug(t) or slug(t) in wanted):
                return i
        return -1

    def guess_section(text):
        """Section whose title + explanation shares the most long words with `text`."""
        words = set(re.findall(r'[a-zA-Zà-ü]{5,}', text.lower()))
        best, top = -1, 0
        for i, s in enumerate(subs):
            section_words = set(re.findall(r'[a-zA-Zà-ü]{5,}',
                                           (s.get('titel', '') + ' ' + s.get('uitleg', '')).lower()))
            n = len(words & section_words)
            if n > top:
                best, top = i, n
        return best

    terms = []
    for t in raw.get('begrippen', []):
        term, explanation = t.get('term', ''), t.get('uitleg', '')
        if term and explanation:
            section = find_section(t.get('paragraaf')) if has_section_field else guess_section(term + ' ' + explanation)
            terms.append([term, explanation, section])
    terms_per_section = {}
    for t in terms:
        terms_per_section.setdefault(t[2], []).append(t)

    summary = []
    intro = format_html(raw.get('uitleg', ''), '', None, is_intro=True)
    if not subs:
        summary.append({'heading': raw.get('titel', 'Samenvatting'),
                        'html': intro or '<p class="dim">Nog geen uitleg.</p>'})
    for i, sub in enumerate(subs):
        body = intro if (i == 0 and intro) else ''
        body += format_html(sub.get('uitleg', ''), sub.get('titel', ''), terms_per_section.get(i, []))
        summary.append({'heading': sub.get('titel', 'Paragraaf %d' % (i + 1)),
                        'html': body or '<p class="dim">Nog geen uitleg.</p>'})

    cards = []
    for c in raw.get('flashcards', []):
        question, answer = c.get('vraag', ''), c.get('antwoord', '')
        if question and answer:
            section = find_section(c.get('paragraaf')) if 'paragraaf' in c else guess_section(question + ' ' + answer)
            cards.append([question, answer, section])

    quiz = []
    for q in raw.get('quiz', []) or []:
        options, answer_index = q.get('opties') or [], q.get('antwoord_index')
        if q.get('vraag') and len(options) >= 2 and isinstance(answer_index, int) and 0 <= answer_index < len(options):
            quiz.append([q['vraag'], options, answer_index, q.get('uitleg', '')])

    return {'title': raw.get('titel', 'Hoofdstuk'), 'summary': summary,
            'terms': terms, 'cards': cards, 'quiz': quiz}


def js_string(value):
    """Single-quoted JS string literal (newlines collapsed to spaces).

    Also neutralises ``</script`` and the U+2028/U+2029 line separators so the
    output stays valid when the modules are inlined into a single HTML file."""
    text = (str(value)
            .replace('\\', '\\\\').replace("'", "\\'")
            .replace('\r', '').replace('\n', ' ')
            .replace('\u2028', '\\u2028').replace('\u2029', '\\u2029'))
    text = re.sub(r'</(script)', r'<\\/\1', text, flags=re.I)
    return "'" + text + "'"


def to_module(key, chapter):
    lines = [REGISTRY_IMPORT, '', 'registerChapter(%s, {' % js_string(key), 'title:%s,' % js_string(chapter['title']), 'summary:[']
    lines.append(',\n'.join('{heading:%s,html:%s}' % (js_string(s['heading']), js_string(s['html'])) for s in chapter['summary']))
    lines.append('],\nterms:[')
    lines.append(',\n'.join('[%s,%s,%d]' % (js_string(t[0]), js_string(t[1]), t[2]) for t in chapter['terms']))
    lines.append('],\ncards:[')
    lines.append(',\n'.join('[%s,%s,%d]' % (js_string(c[0]), js_string(c[1]), c[2]) for c in chapter['cards']))
    lines.append('],\nquiz:[')
    lines.append(',\n'.join('[%s,[%s],%d,%s]' % (js_string(q[0]), ','.join(js_string(o) for o in q[1]), q[2], js_string(q[3]))
                            for q in chapter['quiz']))
    lines.append(']\n});')
    return '\n'.join(lines) + '\n'


if __name__ == '__main__':
    target = sys.argv[1] if len(sys.argv) > 1 else None
    count = convert_json(only=target)
    if target:
        print('Chapters written from %s: %d' % (target, count))
    else:
        print('Chapters written from data/: %d' % count)
    print('Next: `npm test` (loads every module) and `npm run dev` to look at the result.')
