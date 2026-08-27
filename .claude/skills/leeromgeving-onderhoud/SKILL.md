---
name: leeromgeving-onderhoud
description: Gebruik dit ALTIJD wanneer een bestand in bron/, data/ of uiterlijk/ van dit project wordt toegevoegd, gewijzigd of verwijderd — bijvoorbeeld een nieuwe JSON omzetten, een hoofdstuk bewerken, of iets uit de site verwijderen. Ook gebruiken als de gebruiker vraagt om "de site te bouwen", "een boek toe te voegen" of "controleren of alles nog werkt".
---

# Onderhoud van de leeromgeving

Dit project is de VMBO-studiesite "Samenvattingen". Voordat je iets toevoegt,
wijzigt of verwijdert, en zeker voordat je het als klaar meldt: volg deze
stappen. Sla geen stap over, ook niet bij een kleine wijziging.

## Stap 1 — Vóór je begint

Lees `LEESMIJ.md` als je dat nog niet in deze sessie hebt gedaan, zodat je
weet welk bestand waar hoort.

## Stap 2 — Na een wijziging in bron/

```
python3 gereedschap/controleer.py
```

Los elke regel op die begint met `✗` (FOUT) voor je verdergaat.
Regels met `!` (waarschuwing) mag je melden aan de gebruiker, maar hoeven
niet per se opgelost — bijvoorbeeld "maar 6 flashcards" bij een kort
hoofdstuk kan prima kloppen.

Veelvoorkomende fouten en de reparatie:

| Foutmelding | Wat er mis is | Hoe je het oplost |
|---|---|---|
| GEEN GELDIGE JSON | Meestal een dubbele aanhalingsteken in HTML binnen een string | Zoek `class="` en `style="` in het bestand, vervang door `class='` en `style='` |
| paragraaf ... geen match | Het "paragraaf"-veld verwijst niet naar een bestaande subhoofdstuk-titel | Vergelijk de spelling exact, inclusief nummer ("2.1 Botten" ≠ "2.1 botten") |
| accolades niet in balans | Er ontbreekt een `{` of `}` in een gegenereerd bestand | Bekijk het bestand rond de gemelde regel; vaak een missende `}` aan het eind van registreerStof(...) |
| tag niet in balans | Een `<div>` of `<table>` sluit niet | Zoek het laatst geopende blok van dat type en voeg de sluittag toe |
| lijkt hardop nadenken te bevatten | De quiz-uitleg bevat twijfeltaal ("nee, toch niet...") | Herschrijf de uitleg zodat er alleen het eindresultaat in staat |
| ongeldige antwoord_index | Het antwoord wijst niet naar een bestaande optie, of niet naar de juiste | Tel de opties vanaf 0 en corrigeer het getal |
| JAVASCRIPT-SYNTAXFOUT | Er ontbreekt een komma, haakje of aanhalingsteken in een bestand in `data/` of `uiterlijk/` | Open het genoemde bestand, ga naar de gemelde regel en tel de haakjes/komma's na |
| BOEKEN zegt hoofdstuk ... is klaar, maar STOF is dat hoofdstuk niet geregistreerd | De sleutel in `registreerStof('vak\|niveau\|jaar\|nr', ...)` komt niet overeen met wat `registreerBoek(...)` belooft — vaak een tikfout in vak, niveau, jaar of hoofdstuknummer | Vergelijk de sleutel in het hoofdstukbestand letterlijk met de vermelding in `data/<vak>/<vak>.js` |
| DE SITE LAADT NIET — fout tijdens uitvoeren | Een variabele of functie wordt aangeroepen die niet bestaat (bijv. een verkeerd gespelde naam) | Lees de foutmelding: die noemt de naam die niet gevonden werd. Zoek die naam op in het net gewijzigde bestand |
| index.html verwijst naar "..." maar dat bestaat niet | Een bestand is verwijderd of hernoemd, maar `index.html` is niet opnieuw gebouwd | Draai `python3 bouw.py` |
| staat in data/, maar wordt niet geladen (waarschuwing) | Een nieuw bestand staat in `data/`, maar `index.html` is nog niet bijgewerkt | Draai `python3 bouw.py` |

Deze laatste vier controles laden de site ook **echt** in Node, met een
nagemaakt document — dat is de enige manier om een verkeerd gespelde
variabelenaam te vinden. Alleen kijken naar de JSON is niet genoeg.

## Stap 3 — Nieuwe JSON omzetten naar hoofdstukbestanden

Pas hierna, als stap 2 geen fouten meer geeft:

```
python3 bouw.py --bron
```

Dit zet nieuwe bestanden uit `bron/<vak>/` om naar `data/<vak>/<niveau><jaar>/`
en werkt `index.html` bij.

## Stap 4 — Controleer het eindresultaat

```
python3 gereedschap/controleer.py
```

Draai dit nog een keer, nu over de resultaten in `data/`. Dit vangt fouten
die pas ontstaan tijdens het omzetten zelf.

## Stap 5 — Nooit deze dingen doen

- **Nooit `Leeromgeving.html` met de hand bewerken.** Dat bestand wordt
  gemaakt door `bouw-los.py` en elke handmatige wijziging gaat verloren
  bij de volgende build.
- **Nooit de hele bundel herbouwen voor één kleine wijziging.** Bewerk het
  ene bestand dat moet veranderen; `bouw.py` werkt alleen `index.html` bij
  met een scriptregel, niet de inhoud van andere hoofdstukken.
- **Nooit een vak toevoegen aan `data/` zonder het bijbehorende
  `<vak>.js`-bestand met `registreerBoek(...)`.** Zonder dat bestand weet
  de site niet dat het vak bestaat, ook al staan de hoofdstukken er al.

## Stap 6 — Aan het eind

Meld kort:
- Welke bestanden zijn toegevoegd, gewijzigd of verwijderd
- Het resultaat van de laatste `controleer.py`-run (fouten? waarschuwingen?)
- Of `python3 bouw.py` gedraaid is, zodat `index.html` klopt

Als de gebruiker vraagt om één bestand te delen: draai `python3 bouw-los.py`
en lever `Leeromgeving.html`.
