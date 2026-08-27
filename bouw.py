#!/usr/bin/env python3
"""
Bouwt de leeromgeving op.

Gebruik:
  python3 bouw.py                         werkt index.html bij met alles wat in data/ staat
  python3 bouw.py --bron                  zet ALLE JSON uit bron/ om naar data/, en dan pas
  python3 bouw.py --bron <pad-naar-json>  zet alleen dat ene boek om

Draai dit na elke wijziging.
"""
import os, re, sys, glob, json, unicodedata

HIER = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(HIER, 'gereedschap'))


def slug(t):
    t = unicodedata.normalize('NFKD', str(t).lower())
    t = ''.join(c for c in t if not unicodedata.combining(c))
    return re.sub(r'[^a-z0-9]+', '-', t).strip('-')[:44]


# ══════════ 1. index.html bijwerken ══════════
def vernieuw_index():
    pad = os.path.join(HIER, 'index.html')
    idx = open(pad, encoding='utf-8').read()

    regels = ['<script src="data/structuur.js"></script>']
    for vak in sorted(os.listdir(os.path.join(HIER, 'data'))):
        vakmap = os.path.join(HIER, 'data', vak)
        if not os.path.isdir(vakmap):
            continue
        # het vakbestand zelf eerst
        vakbestand = os.path.join(vakmap, vak + '.js')
        if os.path.exists(vakbestand):
            regels.append('<script src="data/%s/%s.js"></script>' % (vak, vak))
        # daarna alle hoofdstukken, per niveau/jaar
        for niveau in sorted(os.listdir(vakmap)):
            nivmap = os.path.join(vakmap, niveau)
            if not os.path.isdir(nivmap):
                continue
            for best in sorted(os.listdir(nivmap)):
                if best.endswith('.js'):
                    regels.append('<script src="data/%s/%s/%s"></script>' % (vak, niveau, best))

    blok = '<!-- STOF:START -->\n' + '\n'.join(regels) + '\n<!-- STOF:EINDE -->'
    idx = re.sub(r'<!-- STOF:START -->.*?<!-- STOF:EINDE -->', blok, idx, flags=re.S)
    open(pad, 'w', encoding='utf-8').write(idx)
    return len(regels) - 1


# ══════════ 2. JSON omzetten ══════════
def zet_json_om(alleen=None):
    from opmaak import uitleg_naar_html
    gemaakt = 0
    if alleen:
        paden = [os.path.abspath(alleen)]
    else:
        paden = sorted(glob.glob(os.path.join(HIER, 'bron', '*', '*.json')))

    for jsonpad in paden:
        if not os.path.exists(jsonpad):
            print('  ! bestand niet gevonden: %s' % jsonpad)
            continue
        vak = os.path.basename(os.path.dirname(jsonpad))
        naam = os.path.basename(jsonpad)
        # niveau uit de bestandsnaam halen (bijv. "economie-tl3.json" -> tl, 3).
        # Val terug op bbl als er geen niveau-woord met een cijfer erachter staat,
        # zodat oudere bestandsnamen zonder expliciet niveau blijven werken.
        m = re.search(r'\b(arbeid|bbl|bk|tl)[\s_-]*(\d)', naam, re.I)
        if m:
            niveau, jaar = m.group(1).lower(), int(m.group(2))
        else:
            m2 = re.search(r'(\d)', naam)
            niveau, jaar = 'bbl', (int(m2.group(1)) if m2 else 1)
        try:
            data = json.load(open(jsonpad, encoding='utf-8'))
        except Exception as e:
            print('  ! %s is geen geldige JSON: %s' % (naam, str(e)[:60]))
            continue
        doelmap = os.path.join(HIER, 'data', vak, niveau + str(jaar))
        os.makedirs(doelmap, exist_ok=True)
        for nr, h in enumerate(data.get('hoofdstukken', []), 1):
            inhoud = bouw_hoofdstuk(h, uitleg_naar_html)
            sleutel = '%s|%s|%d|%d' % (vak, niveau, jaar, nr)
            bestandsnaam = 'h%02d-%s.js' % (nr, slug(h.get('titel', 'hoofdstuk')))
            open(os.path.join(doelmap, bestandsnaam), 'w', encoding='utf-8').write(
                naar_js(sleutel, inhoud))
            gemaakt += 1
    return gemaakt


def bouw_hoofdstuk(h, opmaak):
    subs = h.get('subhoofdstukken') or []
    subtitels = [s.get('titel', '') for s in subs]
    heeft_par = any('paragraaf' in b for b in h.get('begrippen', []))

    def zoek(waarde):
        if not waarde:
            return -1
        d = slug(waarde)
        for i, t in enumerate(subtitels):
            if slug(t) == d:
                return i
        for i, t in enumerate(subtitels):
            if d and (d in slug(t) or slug(t) in d):
                return i
        return -1

    def raad(tekst):
        w = set(re.findall(r'[a-zA-Zà-ü]{5,}', tekst.lower()))
        beste, top = -1, 0
        for i, s in enumerate(subs):
            sw = set(re.findall(r'[a-zA-Zà-ü]{5,}',
                                (s.get('titel', '') + ' ' + s.get('uitleg', '')).lower()))
            n = len(w & sw)
            if n > top:
                beste, top = i, n
        return beste

    begrippen = []
    for b in h.get('begrippen', []):
        t, u = b.get('term', ''), b.get('uitleg', '')
        if t and u:
            begrippen.append([t, u, zoek(b.get('paragraaf')) if heeft_par else raad(t + ' ' + u)])
    per_par = {}
    for b in begrippen:
        per_par.setdefault(b[2], []).append(b)

    samenvatting = []
    intro = opmaak(h.get('uitleg', ''), '', None, is_intro=True)
    if not subs:
        samenvatting.append({'kop': h.get('titel', 'Samenvatting'),
                             'html': intro or '<p class="dim">Nog geen uitleg.</p>'})
    for i, sub in enumerate(subs):
        body = (intro if i == 0 and intro else '')
        body += opmaak(sub.get('uitleg', ''), sub.get('titel', ''), per_par.get(i, []))
        samenvatting.append({'kop': sub.get('titel', 'Paragraaf %d' % (i + 1)),
                             'html': body or '<p class="dim">Nog geen uitleg.</p>'})

    kaarten = []
    for c in h.get('flashcards', []):
        v, a = c.get('vraag', ''), c.get('antwoord', '')
        if v and a:
            kaarten.append([v, a, zoek(c.get('paragraaf')) if 'paragraaf' in c else raad(v + ' ' + a)])

    quiz = []
    for q in h.get('quiz', []) or []:
        o, ai = q.get('opties') or [], q.get('antwoord_index')
        if q.get('vraag') and len(o) >= 2 and isinstance(ai, int) and 0 <= ai < len(o):
            quiz.append([q['vraag'], o, ai, q.get('uitleg', '')])

    return {'titel': h.get('titel', 'Hoofdstuk'), 'samenvatting': samenvatting,
            'begrippen': begrippen, 'cards': kaarten, 'quiz': quiz}


def js(s):
    return "'" + str(s).replace('\\', '\\\\').replace("'", "\\'").replace('\r', '').replace('\n', ' ') + "'"


def naar_js(sleutel, h):
    r = ["registreerStof(%s, {" % js(sleutel), 'titel:%s,' % js(h['titel']), 'samenvatting:[']
    r.append(',\n'.join('{kop:%s,html:%s}' % (js(p['kop']), js(p['html'])) for p in h['samenvatting']))
    r.append('],\nbegrippen:[')
    r.append(',\n'.join('[%s,%s,%d]' % (js(b[0]), js(b[1]), b[2]) for b in h['begrippen']))
    r.append('],\ncards:[')
    r.append(',\n'.join('[%s,%s,%d]' % (js(c[0]), js(c[1]), c[2]) for c in h['cards']))
    r.append('],\nquiz:[')
    r.append(',\n'.join('[%s,[%s],%d,%s]' % (js(q[0]), ','.join(js(o) for o in q[1]), q[2], js(q[3]))
                        for q in h['quiz']))
    r.append(']\n});')
    return '\n'.join(r) + '\n'


if __name__ == '__main__':
    if '--bron' in sys.argv:
        i = sys.argv.index('--bron')
        pad_erna = sys.argv[i + 1] if len(sys.argv) > i + 1 else None
        n = zet_json_om(alleen=pad_erna)
        if pad_erna:
            print('Hoofdstukken gemaakt uit %s: %d' % (pad_erna, n))
        else:
            print('Hoofdstukken gemaakt uit heel bron/: %d' % n)
    m = vernieuw_index()
    print('index.html bijgewerkt: %d stofbestanden ingeladen' % m)
    if '--bron' not in sys.argv:
        print('\nTip: draai "python3 bouw.py --bron" om de JSON uit bron/ mee te nemen,'
             '\nof "python3 bouw.py --bron bron/<vak>/<boek>.json" voor één boek.')
