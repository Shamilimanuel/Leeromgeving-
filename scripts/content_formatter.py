#!/usr/bin/env python3
"""Turns plain-text explanations from the book JSON into formatted HTML in the
style of the hand-written biology chapters (boxes, lists, tables, callouts).

The regular expressions deliberately match Dutch prose: the source material
and the generated summaries are in Dutch, and so are the visible headings
this module emits ("Waar gaat dit over?", "Om te onthouden", ...)."""
import re
import html


def escape(text):
    return html.escape(str(text), quote=False)


# Sentences that deserve a highlighted callout.
WARNING_RE = re.compile(r'^\s*(let op|pas op|opgelet|vergeet niet|onthoud|belangrijk|'
                        r'een veelgemaakte fout|verwar |haal .{0,20}niet door elkaar|'
                        r'dit wordt vaak|dit gaat vaak)', re.I)
TIP_RE = re.compile(r'^\s*(bijvoorbeeld|denk aan|voorbeeld|handig|tip|ezelsbrug|'
                    r'je kunt dit onthouden|zo onthoud je)', re.I)

# "bestaat uit A, B en C" -> bullet list
ENUMERATION_RE = re.compile(r'\b(bestaat uit|bestaan uit|zijn er|namelijk|dit zijn|onderscheid je|'
                            r'verdeel je in|de volgende)\b\s*:?\s*(.{15,260}?)\.', re.I)
# "Er zijn drie soorten ..." -> a good place to start a new block
COUNT_RE = re.compile(r'\b(er zijn|je hebt|we kennen)\s+(twee|drie|vier|vijf|zes)\b', re.I)

# "Een kubus heeft zes vlakken, twaalf ribben en acht hoekpunten." -> table row
PROPERTY_RE = re.compile(r'^(?:Een|De|Het)\s+([\w\- ]{2,26}?)\s+heeft\s+(.{8,190}?)\.?$', re.I)

MAX_SENTENCES_PER_BLOCK = 4
MAX_TERMS_PER_SECTION = 5
MAX_FACTS_TO_REMEMBER = 4


def split_sentences(text):
    text = re.sub(r'\s+', ' ', text.strip())
    parts = re.split(r'(?<=[.!?])\s+(?=[A-ZÉÈÊËÀÂÄÖÜÍÏ0-9])', text)
    return [p.strip() for p in parts if p.strip()]


def make_list(content):
    """'een kubus, een balk en een cilinder' -> <ul>"""
    content = re.sub(r'\s+en\s+', ', ', content)
    items = [i.strip(' .;:') for i in content.split(',')]
    items = [i for i in items if 2 < len(i) < 90]
    if len(items) < 2:
        return None
    return '<ul class="lst">' + ''.join('<li>' + escape(i) + '</li>' for i in items) + '</ul>'


def core_of(sentence):
    return sentence if len(sentence) < 400 else sentence[:400]


def heading_from_sentence(sentence):
    """Derive a short heading from the first sentence of a block."""
    s = re.sub(r'^(In dit hoofdstuk|Hierin|Daarnaast|Ook|Verder|Tot slot)\s+', '', sentence, flags=re.I)
    core = re.split(r'\b(is|zijn|bestaat|bestaan|heet|heten|noem je|gebruik je|kun je|'
                    r'wordt|worden|heeft|hebben|maak je|krijg je)\b', core_of(s), 1)[0]
    core = core.strip(' ,.;:')
    if 3 <= len(core) <= 46:
        return core[0].upper() + core[1:]
    return None


def build_table(rows):
    """[(name, [values...]), ...] -> comparison table, or None when the shape does not fit."""
    columns = max(len(r[1]) for r in rows)
    if columns < 2 or columns > 5:
        return None
    body = ''
    for name, values in rows:
        cells = ''.join('<td>' + escape(v) + '</td>' for v in values)
        cells += '<td></td>' * (columns - len(values))
        body += '<tr><td><b>' + escape(name[0].upper() + name[1:]) + '</b></td>' + cells + '</tr>'
    return '<div class="tblwrap"><table class="tbl">' + body + '</table></div>'


def block_html(sentences):
    """Sentences -> HTML: runs of property sentences become tables, enumerations become lists."""
    parts, buffer, rows = [], [], []

    def flush_buffer():
        if buffer:
            parts.append('<p>' + ' '.join(buffer) + '</p>')
            buffer.clear()

    def flush_rows():
        if len(rows) >= 2:
            table = build_table(rows)
            if table:
                parts.append(table)
            else:
                for name, values in rows:
                    buffer.append(escape('Een ' + name + ' heeft ' + ', '.join(values) + '.'))
        elif rows:
            name, values = rows[0]
            buffer.append(escape('Een ' + name + ' heeft ' + ', '.join(values) + '.'))
        rows.clear()

    for sentence in sentences:
        m = PROPERTY_RE.match(sentence.strip())
        if m:
            value = re.sub(r'^bijvoorbeeld\s+', '', m.group(2).strip(), flags=re.I)
            value = re.sub(r'\s+en\s+', ', ', value)
            items = [v.strip(' .') for v in value.split(',') if v.strip()]
            if len(items) >= 2:
                flush_buffer()
                rows.append((m.group(1).strip(), items))
                continue
        flush_rows()
        m2 = ENUMERATION_RE.search(sentence)
        bullet_list = make_list(m2.group(2)) if m2 else None
        if bullet_list:
            lead = sentence[:m2.start(2)].rstrip(' :')
            if not lead.endswith(('.', ':')):
                lead += ':'
            buffer.append(escape(lead))
            flush_buffer()
            parts.append(bullet_list)
            rest = sentence[m2.end():].strip()
            if rest:
                buffer.append(escape(rest))
        else:
            buffer.append(escape(sentence))
    flush_rows()
    flush_buffer()
    return ''.join(parts)


def explanation_to_html(text, title='', terms=None, is_intro=False):
    """Main entry point: plain explanation -> formatted HTML.

    text     plain prose from the JSON (already-HTML input is returned untouched)
    title    section title, used for the first heading
    terms    [[term, explanation, section], ...] belonging to this section
    is_intro True for the chapter introduction ("Waar gaat dit over?")
    """
    if not text or not str(text).strip():
        return ''
    text = str(text).strip()

    # Already HTML? Leave it alone (for future, better generated files).
    if re.match(r'^\s*<(div|p|ul|ol|table|h[1-6]|figure)\b', text, re.I):
        return text

    sentences = split_sentences(text)
    if not sentences:
        return ''

    regular, callouts = [], []
    for s in sentences:
        if WARNING_RE.match(s):
            callouts.append(('warn', s))
        elif TIP_RE.match(s) and len(s) < 260:
            callouts.append(('', s))
        else:
            regular.append(s)

    # Cut into blocks of at most MAX_SENTENCES_PER_BLOCK, preferably at an "er zijn drie..." sentence.
    blocks, current = [], []
    for s in regular:
        if current and (len(current) >= MAX_SENTENCES_PER_BLOCK or COUNT_RE.search(s)):
            blocks.append(current)
            current = []
        current.append(s)
    if current:
        blocks.append(current)

    out = []
    for i, block in enumerate(blocks):
        content = block_html(block)
        if not content:
            continue
        heading = ''
        if i == 0 and is_intro:
            heading = '<h4>Waar gaat dit over?</h4>'
        elif i == 0 and title:
            t = re.sub(r'^\d+[\.\d]*\s*', '', title).strip()
            if t:
                heading = '<h4>' + escape(t[0].upper() + t[1:]) + '</h4>'
        elif i > 0:
            h = None if PROPERTY_RE.match(block[0].strip()) else heading_from_sentence(block[0])
            if h:
                heading = '<h4>' + escape(h) + '</h4>'
        style = ' style="margin-top:1rem"' if out else ''
        out.append('<div class="box"' + style + '>' + heading + content + '</div>')

    for kind, s in callouts:
        cls = 'call warn' if kind == 'warn' else 'call'
        out.append('<div class="' + cls + '">' + escape(s) + '</div>')

    # The most important terms as term blocks.
    if terms:
        chosen = [t for t in terms if len(t[1]) < 190][:MAX_TERMS_PER_SECTION]
        if len(chosen) >= 2:
            rows = ''.join('<div class="term"><b>' + escape(t[0]) + '</b><span>'
                           + escape(t[1]) + '</span></div>' for t in chosen)
            out.append('<div class="box" style="margin-top:1rem"><h4>Begrippen bij dit stuk</h4>'
                       + rows + '</div>')

    # Closing "remember this" block: the most factual sentences.
    facts = [s for s in regular if re.search(r'\d|\b(altijd|nooit|moet|geldt|regel)\b', s)
             and 25 < len(s) < 190][:MAX_FACTS_TO_REMEMBER]
    if len(facts) < 2 and terms:
        facts = [t[0] + ': ' + t[1].rstrip('.') + '.' for t in terms[:3]]
    if len(facts) >= 2:
        bullets = ''.join('<li>' + escape(f) + '</li>' for f in facts)
        short_title = re.sub(r'^(\d+[\.\d]*)\s*', r'\1 ', title).strip() if title else ''
        out.append('<div class="call sum"><b>Om te onthouden'
                   + (': ' + escape(short_title) if short_title else '')
                   + '</b><ul class="lst">' + bullets + '</ul></div>')

    return ''.join(out)
