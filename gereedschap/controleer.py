#!/usr/bin/env python3
"""
Controleert de leeromgeving op de fouten die we tijdens dit project zijn tegengekomen.

Gebruik:
  python3 gereedschap/controleer.py            controleert alles in bron/ en data/
  python3 gereedschap/controleer.py bron/rekenen/Rekenen_BBL2.json   controleert één bestand

Geeft exit-code 0 als alles goed is, 1 als er problemen zijn.
Claude Code gebruikt dit om zichzelf te controleren voor en na een wijziging.
"""
import json, os, re, sys, glob, unicodedata, subprocess, shutil

HIER = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
NODE = shutil.which('node')

# Zinnen die wijzen op hardop-nadenken dat per ongeluk is blijven staan.
# "klopt niet" staat hier bewust NIET los in de lijst: dat is een heel
# gewone Nederlandse zin (bijv. "die bewering klopt niet") en gaf valse
# meldingen. Alleen de combinatie van een twijfelwoord vlak vóór "klopt
# niet" duidt echt op een AI die zichzelf corrigeert.
TWIJFEL = re.compile(
    r'\b(nee,?\s|toch niet|wacht,?\s|(wacht|nee|hmm)\W{1,12}klopt (dit |dat )?niet\??|'
    r'hmm|eigenlijk niet|laat ik|ik bedoel|correctie:|oeps|fout,?\s*ik)\b', re.I)

TAGS = ['div', 'table', 'tr', 'td', 'th', 'ul', 'ol', 'li', 'p', 'span', 'figure']


def slug(t):
    t = unicodedata.normalize('NFKD', str(t).lower())
    t = ''.join(c for c in t if not unicodedata.combining(c))
    return re.sub(r'[^a-z0-9]+', '-', t).strip('-')


def check_tags(html, waar, meldingen):
    for tag in TAGS:
        open_n = len(re.findall(r'<' + tag + r'[\s>]', html))
        dicht_n = len(re.findall(r'</' + tag + '>', html))
        if open_n != dicht_n:
            meldingen.append('  ✗ %s: <%s> niet in balans (open %d, dicht %d)'
                             % (waar, tag, open_n, dicht_n))


def check_hoofdstuk(h, index, bestand, meldingen, waarschuwingen):
    titel = h.get('titel', '(geen titel)')
    waar = '%s › hoofdstuk %d "%s"' % (bestand, index, titel)

    if titel.lower().startswith('hoofdstuk'):
        waarschuwingen.append('  ! %s: titel begint met "Hoofdstuk" — hoort er niet in' % waar)

    subs = h.get('subhoofdstukken') or []
    subtitels = {s.get('titel', '').strip() for s in subs}
    if not subs:
        waarschuwingen.append('  ! %s: geen subhoofdstukken' % waar)

    check_tags(h.get('uitleg', ''), waar + ' (hoofdstuk-uitleg)', meldingen)
    for s in subs:
        check_tags(s.get('uitleg', ''), waar + ' › "%s"' % s.get('titel', ''), meldingen)
        if len(s.get('uitleg', '')) < 40:
            waarschuwingen.append('  ! %s › "%s": erg korte uitleg' % (waar, s.get('titel', '')))
        for m in re.finditer(r"diagram-nodig'>([^<]{0,90})", s.get('uitleg', '')):
            waarschuwingen.append('  ! %s › "%s": vraagt om een tekening — %s'
                                  % (waar, s.get('titel', ''), m.group(1).strip()))

    for lijst, veld in [(h.get('begrippen', []), 'begrip'), (h.get('flashcards', []), 'flashcard')]:
        for item in lijst:
            par = item.get('paragraaf', '')
            if par and par not in subtitels:
                # kleine schrijfverschillen door de vingers zien
                if slug(par) not in {slug(t) for t in subtitels}:
                    meldingen.append('  ✗ %s: %s heeft paragraaf "%s", geen match in subhoofdstukken'
                                     % (waar, veld, par))

    for i, q in enumerate(h.get('quiz', []) or [], 1):
        opties = q.get('opties') or []
        ai = q.get('antwoord_index')
        if len(opties) != 4:
            meldingen.append('  ✗ %s: quizvraag %d heeft %d opties (moet 4 zijn)' % (waar, i, len(opties)))
        if not isinstance(ai, int) or not (0 <= ai < len(opties)):
            meldingen.append('  ✗ %s: quizvraag %d heeft ongeldige antwoord_index (%r)' % (waar, i, ai))
        if TWIJFEL.search(q.get('uitleg', '')):
            meldingen.append('  ✗ %s: quizvraag %d — uitleg lijkt hardop nadenken te bevatten: "%s..."'
                             % (waar, i, q.get('uitleg', '')[:60]))

    for veld in ['begrippen', 'flashcards']:
        n = len(h.get(veld, []))
        if n < 10:
            waarschuwingen.append('  ! %s: maar %d %s (streefgetal is 10+)' % (waar, n, veld))
    nq = len(h.get('quiz', []) or [])
    if nq < 10:
        waarschuwingen.append('  ! %s: maar %d quizvragen (streefgetal is 10-20)' % (waar, nq))


def check_bron_bestand(pad, meldingen, waarschuwingen):
    naam = os.path.relpath(pad, HIER)
    try:
        data = json.load(open(pad, encoding='utf-8'))
    except Exception as e:
        meldingen.append('✗ %s: GEEN GELDIGE JSON — %s' % (naam, str(e)[:120]))
        return
    hs = data.get('hoofdstukken', [])
    if not hs:
        meldingen.append('✗ %s: geen "hoofdstukken" gevonden' % naam)
        return
    print('%s — %d hoofdstukken' % (naam, len(hs)))
    for i, h in enumerate(hs, 1):
        check_hoofdstuk(h, i, naam, meldingen, waarschuwingen)


def check_data_bestand(pad, meldingen):
    """Snelle syntax-check van een gegenereerd stofbestand in data/."""
    naam = os.path.relpath(pad, HIER)
    inhoud = open(pad, encoding='utf-8').read()
    if 'registreerStof(' not in inhoud:
        return
    haakjes = inhoud.count('{') - inhoud.count('}')
    if haakjes != 0:
        meldingen.append('✗ %s: accolades niet in balans (verschil %d)' % (naam, haakjes))
    check_tags(inhoud, naam, meldingen)


def check_javascript_syntax(meldingen):
    """`node --check` op elk .js-bestand — vangt kapotte komma's en haakjes
    voor het bestand ooit in de browser wordt geladen."""
    if not NODE:
        meldingen.append('  ! node is niet gevonden — syntax-check overgeslagen')
        return
    bestanden = sorted(glob.glob(os.path.join(HIER, 'uiterlijk', '*.js')) +
                       glob.glob(os.path.join(HIER, 'data', '**', '*.js'), recursive=True))
    for pad in bestanden:
        naam = os.path.relpath(pad, HIER)
        r = subprocess.run([NODE, '--check', pad], capture_output=True, text=True)
        if r.returncode != 0:
            fout = r.stderr.strip().splitlines()
            fout = fout[-1] if fout else 'onbekende syntaxfout'
            meldingen.append('  ✗ %s: JAVASCRIPT-SYNTAXFOUT — %s' % (naam, fout[:140]))


def check_index_sync(meldingen, waarschuwingen):
    """Klopt index.html met wat er echt in data/ en uiterlijk/ staat?"""
    idxpad = os.path.join(HIER, 'index.html')
    if not os.path.exists(idxpad):
        return []
    idx = open(idxpad, encoding='utf-8').read()
    verwezen = re.findall(r'<script src="([^"]+)"></script>', idx)
    op_schijf = set()
    for pad in glob.glob(os.path.join(HIER, 'data', '**', '*.js'), recursive=True):
        op_schijf.add(os.path.relpath(pad, HIER).replace(os.sep, '/'))

    for rel in verwezen:
        if rel.startswith('data/') and not os.path.exists(os.path.join(HIER, rel)):
            meldingen.append('  ✗ index.html verwijst naar "%s", maar dat bestand bestaat niet' % rel)
    vermist = op_schijf - set(verwezen)
    for rel in sorted(vermist):
        waarschuwingen.append('  ! "%s" staat in data/, maar wordt niet geladen in index.html — '
                              'draai bouw.py opnieuw' % rel)
    return verwezen


def check_runtime(verwezen, meldingen):
    """Laadt alle scripts echt in Node, met een nagemaakt document.
    Dit is de enige manier om een verkeerd gespelde variabelenaam
    of een ontbrekende komma te vinden die de syntax-check niet ziet."""
    if not NODE:
        return
    volgorde = ['data/structuur.js'] + [r for r in verwezen if r != 'data/structuur.js']
    stukken = []
    for rel in volgorde:
        pad = os.path.join(HIER, rel)
        if os.path.exists(pad):
            stukken.append(open(pad, encoding='utf-8').read())
    js = '\n'.join(stukken)

    harnas = ('\n'
'var els={};\n'
"function nep(){return {classList:{add:function(){},remove:function(){},toggle:function(){},\n"
" contains:function(){return false}},style:{},innerHTML:'',textContent:'',\n"
" addEventListener:function(){},appendChild:function(){},querySelectorAll:function(){return []},\n"
" focus:function(){},dataset:{},value:''}}\n"
"global.document={getElementById:function(i){return els[i]||(els[i]=nep())},\n"
" querySelector:function(){return nep()},querySelectorAll:function(){return []},\n"
" addEventListener:function(){},body:nep(),createElement:function(){return nep()}};\n"
"global.window={addEventListener:function(){},matchMedia:function(){return{matches:false}}};\n"
"global.setTimeout=function(){};global.clearTimeout=function(){};global.alert=function(){};\n"
"try{\n"
+ js +
"\n  var uit={ok:true};\n"
"  uit.vakken=(typeof VAKKEN!=='undefined')?VAKKEN.length:-1;\n"
"  uit.boeken=(typeof BOEKEN!=='undefined')?Object.keys(BOEKEN).length:-1;\n"
"  uit.stof=(typeof STOF!=='undefined')?Object.keys(STOF).length:-1;\n"
"  var probleem=[];\n"
"  if(typeof STOF!=='undefined'){\n"
"    Object.keys(STOF).forEach(function(k){\n"
"      if(!STOF[k]) probleem.push('sleutel '+k+' verwijst naar niets (undefined)');\n"
"    });\n"
"  }\n"
"  if(typeof BOEKEN!=='undefined' && typeof STOF!=='undefined'){\n"
"    Object.keys(BOEKEN).forEach(function(bk){\n"
"      var delen=bk.split('|');\n"
"      BOEKEN[bk].delen.forEach(function(deel){\n"
"        if(!deel.klaar) return;\n"
"        deel.hoofdstukken.forEach(function(h){\n"
"          var sleutel=delen[0]+'|'+delen[1]+'|'+delen[2]+'|'+h[0];\n"
"          if(!STOF[sleutel]) probleem.push('BOEKEN zegt hoofdstuk '+h[0]+' ('+h[1]+') is klaar, '\n"
"            +'maar STOF is dat hoofdstuk niet geregistreerd (sleutel '+sleutel+')');\n"
"        });\n"
"      });\n"
"    });\n"
"  }\n"
"  uit.problemen=probleem;\n"
"  console.log('###RESULTAAT###'+JSON.stringify(uit));\n"
"}catch(e){\n"
"  console.log('###FOUT###'+e.message);\n"
"}\n")
    tijdelijk = os.path.join(HIER, '.controleer-tmp.js')
    open(tijdelijk, 'w', encoding='utf-8').write(harnas)
    try:
        r = subprocess.run([NODE, tijdelijk], capture_output=True, text=True)
    finally:
        os.remove(tijdelijk)
    out = r.stdout.strip()
    if '###FOUT###' in out:
        fout = out.split('###FOUT###', 1)[1].strip()
        meldingen.append('  ✗ DE SITE LAADT NIET — fout tijdens uitvoeren: %s' % fout)
        return
    if '###RESULTAAT###' not in out:
        meldingen.append('  ✗ Kon de site niet testen (geen resultaat van Node): %s'
                         % (r.stderr.strip()[:200] or 'onbekende reden'))
        return
    data = json.loads(out.split('###RESULTAAT###', 1)[1])
    for p in data.get('problemen', []):
        meldingen.append('  ✗ ' + p)
    print('Site geladen: %d vakken, %d boeken, %d hoofdstukken met stof'
         % (data['vakken'], data['boeken'], data['stof']))


def main():
    meldingen, waarschuwingen = [], []
    doelen = sys.argv[1:]

    if doelen:
        for pad in doelen:
            if pad.endswith('.json'):
                check_bron_bestand(pad, meldingen, waarschuwingen)
            elif pad.endswith('.js'):
                check_data_bestand(pad, meldingen)
    else:
        for pad in sorted(glob.glob(os.path.join(HIER, 'bron', '*', '*.json'))):
            check_bron_bestand(pad, meldingen, waarschuwingen)
        for pad in sorted(glob.glob(os.path.join(HIER, 'data', '*', '*', '*.js'))):
            check_data_bestand(pad, meldingen)

        print('\nJavascript-syntax controleren...')
        check_javascript_syntax(meldingen)

        print('index.html vergelijken met data/...')
        verwezen = check_index_sync(meldingen, waarschuwingen)

        print('De site echt laden om te testen...')
        check_runtime(verwezen, meldingen)

    print()
    if waarschuwingen:
        print('Waarschuwingen (%d) — kijk even, maar niet per se een fout:' % len(waarschuwingen))
        for w in waarschuwingen:
            print(w)
        print()

    if meldingen:
        print('FOUTEN (%d) — dit moet eerst gerepareerd worden:' % len(meldingen))
        for m in meldingen:
            print(m)
        print('\nNiet verder bouwen voor deze fouten zijn opgelost.')
        sys.exit(1)
    else:
        print('Geen fouten gevonden. Veilig om te bouwen.')
        sys.exit(0)


if __name__ == '__main__':
    main()
