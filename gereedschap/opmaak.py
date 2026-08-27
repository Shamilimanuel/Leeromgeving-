#!/usr/bin/env python3
"""Zet platte uitleg om naar opgemaakte HTML in de stijl van de biologie-hoofdstukken."""
import re, html

def esc(t):
    return html.escape(str(t), quote=False)

# zinnen die een uitgelicht kader verdienen
WAARSCHUW = re.compile(r'^\s*(let op|pas op|opgelet|vergeet niet|onthoud|belangrijk|'
                       r'een veelgemaakte fout|verwar |haal .{0,20}niet door elkaar|'
                       r'dit wordt vaak|dit gaat vaak)', re.I)
WEETJE    = re.compile(r'^\s*(bijvoorbeeld|denk aan|voorbeeld|handig|tip|ezelsbrug|'
                       r'je kunt dit onthouden|zo onthoud je)', re.I)

# "bestaat uit A, B en C"
OPSOM = re.compile(r'\b(bestaat uit|bestaan uit|zijn er|namelijk|dit zijn|onderscheid je|'
                   r'verdeel je in|de volgende)\b\s*:?\s*(.{15,260}?)\.', re.I)
# "Er zijn drie soorten ..."
AANTAL = re.compile(r'\b(er zijn|je hebt|we kennen)\s+(twee|drie|vier|vijf|zes)\b', re.I)


def splits_zinnen(t):
    t = re.sub(r'\s+', ' ', t.strip())
    delen = re.split(r'(?<=[.!?])\s+(?=[A-ZÉÈÊËÀÂÄÖÜÍÏ0-9])', t)
    return [d.strip() for d in delen if d.strip()]


def maak_lijst(inhoud):
    """'een kubus, een balk en een cilinder' -> <ul>"""
    inhoud = re.sub(r'\s+en\s+', ', ', inhoud)
    items = [i.strip(' .;:') for i in inhoud.split(',')]
    items = [i for i in items if 2 < len(i) < 90]
    if len(items) < 2:
        return None
    return '<ul class="lst">' + ''.join('<li>' + esc(i) + '</li>' for i in items) + '</ul>'


def kop_uit_zin(zin):
    """Korte kop afleiden uit de eerste zin van een blok."""
    z = re.sub(r'^(In dit hoofdstuk|Hierin|Daarnaast|Ook|Verder|Tot slot)\s+', '', zin, flags=re.I)
    kern = re.split(r'\b(is|zijn|bestaat|bestaan|heet|heten|noem je|gebruik je|kun je|'
                    r'wordt|worden|heeft|hebben|maak je|krijg je)\b', kern_of(z), 1)[0]
    kern = kern.strip(' ,.;:')
    if 3 <= len(kern) <= 46:
        return kern[0].upper() + kern[1:]
    return None


def kern_of(z):
    return z if len(z) < 400 else z[:400]


EIGENSCHAP = re.compile(r'^(?:Een|De|Het)\s+([\w\- ]{2,26}?)\s+heeft\s+(.{8,190}?)\.?$', re.I)


def probeer_tabel(zinnen):
    """Meerdere 'Een X heeft A, B en C'-zinnen -> vergelijkingstabel."""
    rijen = []
    for z in zinnen:
        m = EIGENSCHAP.match(z.strip())
        if not m:
            return None
        naam = m.group(1).strip()
        waarde = re.sub(r'^bijvoorbeeld\s+', '', m.group(2).strip(), flags=re.I)
        waarde = re.sub(r'\s+en\s+', ', ', waarde)
        rijen.append((naam, [w.strip(' .') for w in waarde.split(',') if w.strip()]))
    if len(rijen) < 2:
        return None
    kolommen = max(len(r[1]) for r in rijen)
    if kolommen < 2 or kolommen > 5:
        return None
    body = ''
    for naam, waarden in rijen:
        cellen = ''.join('<td>' + esc(w) + '</td>' for w in waarden)
        cellen += '<td></td>' * (kolommen - len(waarden))
        body += '<tr><td><b>' + esc(naam[0].upper() + naam[1:]) + '</b></td>' + cellen + '</tr>'
    return ('<div class="tblwrap"><table class="tbl">'
            '<tr><th>Figuur</th>' + '<th></th>' * kolommen + '</tr>' + body + '</table></div>')


def bouw_tabel(rijen):
    kolommen = max(len(r[1]) for r in rijen)
    if kolommen < 2 or kolommen > 5:
        return None
    body = ''
    for naam, waarden in rijen:
        cellen = ''.join('<td>' + esc(w) + '</td>' for w in waarden)
        cellen += '<td></td>' * (kolommen - len(waarden))
        body += '<tr><td><b>' + esc(naam[0].upper() + naam[1:]) + '</b></td>' + cellen + '</tr>'
    return ('<div class="tblwrap"><table class="tbl">' + body + '</table></div>')


def blok_html(zinnen):
    """Zinnen omzetten: rijtjes eigenschappen worden tabellen, opsommingen worden lijsten."""
    delen, buffer, rijen = [], [], []

    def leeg_buffer():
        if buffer:
            delen.append('<p>' + ' '.join(buffer) + '</p>')
            buffer.clear()

    def leeg_rijen():
        if len(rijen) >= 2:
            t = bouw_tabel(rijen)
            if t:
                delen.append(t)
            else:
                for naam, w in rijen:
                    buffer.append(esc('Een ' + naam + ' heeft ' + ', '.join(w) + '.'))
        elif rijen:
            naam, w = rijen[0]
            buffer.append(esc('Een ' + naam + ' heeft ' + ', '.join(w) + '.'))
        rijen.clear()

    for z in zinnen:
        m = EIGENSCHAP.match(z.strip())
        if m:
            waarde = re.sub(r'^bijvoorbeeld\s+', '', m.group(2).strip(), flags=re.I)
            waarde = re.sub(r'\s+en\s+', ', ', waarde)
            onderdelen = [w.strip(' .') for w in waarde.split(',') if w.strip()]
            if len(onderdelen) >= 2:
                leeg_buffer()
                rijen.append((m.group(1).strip(), onderdelen))
                continue
        leeg_rijen()
        m2 = OPSOM.search(z)
        lijst = maak_lijst(m2.group(2)) if m2 else None
        if lijst:
            kop = z[:m2.start(2)].rstrip(' :')
            if not kop.endswith(('.', ':')):
                kop += ':'
            buffer.append(esc(kop))
            leeg_buffer()
            delen.append(lijst)
            rest = z[m2.end():].strip()
            if rest:
                buffer.append(esc(rest))
        else:
            buffer.append(esc(z))
    leeg_rijen()
    leeg_buffer()
    return ''.join(delen)


def uitleg_naar_html(tekst, titel='', begrippen=None, is_intro=False):
    """Hoofdfunctie: platte uitleg -> opgemaakte HTML."""
    if not tekst or not str(tekst).strip():
        return ''
    tekst = str(tekst).strip()

    # al HTML? dan ongemoeid laten (voor toekomstige, beter gegenereerde bestanden)
    if re.match(r'^\s*<(div|p|ul|ol|table|h[1-6]|figure)\b', tekst, re.I):
        return tekst

    zinnen = splits_zinnen(tekst)
    if not zinnen:
        return ''

    gewoon, callouts = [], []
    for z in zinnen:
        if WAARSCHUW.match(z):
            callouts.append(('warn', z))
        elif WEETJE.match(z) and len(z) < 260:
            callouts.append(('', z))
        else:
            gewoon.append(z)

    # in blokken van maximaal 4 zinnen knippen, liefst bij een "er zijn drie..."-zin
    blokken, huidig = [], []
    for z in gewoon:
        if huidig and (len(huidig) >= 4 or AANTAL.search(z)):
            blokken.append(huidig); huidig = []
        huidig.append(z)
    if huidig:
        blokken.append(huidig)

    uit = []
    for i, blok in enumerate(blokken):
        inhoud = blok_html(blok)
        if not inhoud:
            continue
        kop = ''
        if i == 0 and is_intro:
            kop = '<h4>Waar gaat dit over?</h4>'
        elif i == 0 and titel:
            k = re.sub(r'^\d+[\.\d]*\s*', '', titel).strip()
            if k:
                kop = '<h4>' + esc(k[0].upper() + k[1:]) + '</h4>'
        elif i > 0:
            k = None if EIGENSCHAP.match(blok[0].strip()) else kop_uit_zin(blok[0])
            if k:
                kop = '<h4>' + esc(k) + '</h4>'
        stijl = ' style="margin-top:1rem"' if uit else ''
        uit.append('<div class="box"' + stijl + '>' + kop + inhoud + '</div>')

    for soort, z in callouts:
        cls = 'call warn' if soort == 'warn' else 'call'
        uit.append('<div class="' + cls + '">' + esc(z) + '</div>')

    # belangrijkste begrippen als term-blokken erbij
    if begrippen:
        kies = [b for b in begrippen if len(b[1]) < 190][:5]
        if len(kies) >= 2:
            rijen = ''.join('<div class="term"><b>' + esc(b[0]) + '</b><span>'
                            + esc(b[1]) + '</span></div>' for b in kies)
            uit.append('<div class="box" style="margin-top:1rem"><h4>Begrippen bij dit stuk</h4>'
                       + rijen + '</div>')

    # afsluitend onthoud-blok: de meest feitelijke zinnen
    feiten = [z for z in gewoon if re.search(r'\d|\b(altijd|nooit|moet|geldt|regel)\b', z)
              and 25 < len(z) < 190][:4]
    if len(feiten) < 2 and begrippen:
        feiten = [b[0] + ' \u2014 ' + b[1].rstrip('.') + '.' for b in begrippen[:3]]
    if len(feiten) >= 2:
        punten = ''.join('<li>' + esc(f) + '</li>' for f in feiten)
        titel_kort = re.sub(r'^(\d+[\.\d]*)\s*', r'\1 ', titel).strip() if titel else ''
        uit.append('<div class="call sum"><b>Om te onthouden'
                   + (' \u2014 ' + esc(titel_kort) if titel_kort else '')
                   + '</b><ul class="lst">' + punten + '</ul></div>')

    return ''.join(uit)
