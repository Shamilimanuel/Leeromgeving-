# Leeromgeving — Samenvattingen

Studiesite voor VMBO-leerlingen. Gewone HTML, CSS en JavaScript. Geen framework,
geen npm, geen installatie nodig.

## Mapindeling

```
Leeromgeving/
├── index.html              het geraamte — wordt automatisch bijgewerkt
├── bouw.py                 bouwt de site op
├── bouw-los.py             maakt één bestand om te delen
│
├── uiterlijk/              hoe de site eruitziet en werkt
│   ├── style.css           kleuren, kaders, animaties
│   └── app.js              navigatie, flashcards, quiz, help
│
├── data/                   de leerstof, per vak
│   ├── structuur.js        welke vakken, niveaus en leerjaren er zijn
│   └── biologie/
│       ├── biologie.js     welke boeken en hoofdstukken dit vak heeft
│       ├── bbl1/           leerjaar 1
│       │   ├── h01-onderzoeken-en-ontdekken.js
│       │   └── h02-bewegen.js
│       └── bbl2/           leerjaar 2
│
├── bron/                   ruwe JSON uit de schoolboeken, per vak
│   ├── biologie/
│   └── wiskunde/
│
└── gereedschap/
    └── opmaak.py           maakt van platte tekst nette HTML
```

## Zo werk je eraan

**Openen om te testen**
Dubbelklik op `index.html`. Werkt meteen, geen server nodig.

**Een hoofdstuk aanpassen**
Open het bestand in `data/<vak>/<niveau><jaar>/`. Alleen dat ene bestand,
niet de hele site.

**Een nieuw vak toevoegen**
1. Zet de JSON in `bron/<vak>/`
2. Draai `python3 bouw.py --bron`
3. De hoofdstukken komen vanzelf in `data/<vak>/` te staan
4. Maak `data/<vak>/<vak>.js` met de boekgegevens (zie `biologie.js` als voorbeeld)

**Een hoofdstuk met de hand toevoegen**
Zet een bestand in de juiste map en draai `python3 bouw.py`. Meer niet —
index.html wordt vanzelf bijgewerkt.

**Eén bestand maken om te delen**
Draai `python3 bouw-los.py`. Dat maakt `Leeromgeving.html`, één bestand dat
je kunt mailen of op GitHub Pages kunt zetten.

## Hoe een hoofdstukbestand eruitziet

```js
registreerStof('biologie|bbl|1|2', {
titel:'Bewegen',
samenvatting:[
  {kop:'2.1 Botten', html:'<div class="box"><h4>...</h4><p>...</p></div>'}
],
begrippen:[ ['skelet','Alle botten samen.',0] ],
cards:[    ['Wat is een gewricht?','Een beweegbare verbinding.',1] ],
quiz:[     ['Hoeveel botten heb je?',['106','206','306','406'],1,'Ongeveer 206.'] ]
});
```

De laatste waarde bij begrippen en cards is het nummer van de paragraaf
(0 = eerste). Gebruik -1 als het nergens bij hoort.

## Opmaakblokken

| Klasse | Waarvoor |
|---|---|
| `box` met `<h4>` | kader met kop |
| `g2` / `g3` | twee of drie kaders naast elkaar |
| `call` | uitgelicht weetje |
| `call warn` | waarschuwing of veelgemaakte fout |
| `call sum` | "om te onthouden" aan het eind |
| `term` | begrip met uitleg |
| `tblwrap` + `tbl` | tabel |
| `lst` / `num` | opsomming of stappen |
| `fig` | tekening met bijschrift |

## Regels

- Geen localStorage of sessionStorage
- Geen externe bibliotheken behalve Google Fonts
- Samenvattingen in eigen woorden, nooit letterlijk uit het boek
- BBL-niveau: korte zinnen, gewone woorden
