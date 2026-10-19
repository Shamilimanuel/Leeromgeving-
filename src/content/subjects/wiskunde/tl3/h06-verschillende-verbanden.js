import { registerChapter } from '../../../registry.js';

/* Rebuilt 2026-09-25 to the recipe of Economie TL4 H1 (change 6). Added
   from the book: berg- and dalparabool read from the sign (W = -5a^2 + 300a,
   K = 6a^2 - 7a), the wortel graph as "half a parabola on its side" (6.2)
   and the swing with maximum 2,5 m and minimum 0,5 m (6.4). The drawing is
   unchanged. Terms, cards and quiz unchanged. */
registerChapter('wiskunde|tl|3|6', {
title:'Verschillende verbanden',
summary:[
{heading:'6.1 Kwadratische verbanden',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>een <b>kwadratische formule</b> herkennen</li>
<li>zien of de grafiek een <b>bergparabool</b> of <b>dalparabool</b> wordt, en hem tekenen</li></ul></div>`
+`<div class="box"><h4>Waar dit hoofdstuk over gaat</h4><p>Je leert vier soorten <b>verbanden</b>, elk met een eigen formule en grafiek: <b>kwadratisch</b> (een parabool), <b>wortel</b>, <b>macht</b> en <b>periodiek</b>.</p></div>`
+`<h5 class="sub">Kwadratisch verband</h5>`
+`<div class="box"><h4>Een kwadraat bij de variabele</h4><p>In <b>h = &minus;20t&sup2; + 400t + 4000</b> staat een <b>kwadraat</b> bij de variabele t. Het is een <b>kwadratische formule</b>, en er is een <b>kwadratisch verband</b>. De grafiek is een <b>parabool</b>: symmetrisch, met de <b>symmetrieas</b> door de <b>top</b>.</p></div>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Bergparabool</h4><p><b>Negatief</b> getal voor het kwadraat, zoals W = &minus;5a&sup2; + 300a. De top is een <b>maximum</b>.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Dalparabool</h4><p><b>Positief</b> getal voor het kwadraat, zoals K = 6a&sup2; &minus; 7a. De top is een <b>minimum</b>.</p></div></div>`
+`<h5 class="sub">Een parabool tekenen</h5>`
+`<div class="call reken"><b>Stappenplan: parabool tekenen</b><ol class="num">
<li>Maak een <b>tabel</b> met <b>minstens zeven</b> punten.</li>
<li>Reken bij elk getal de uitkomst uit.</li>
<li>Teken de punten en verbind ze met een <b>vloeiende kromme</b>.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: een duik</h4><p><b>h = 0,25a&sup2; &minus; 3a + 5</b>, met h de hoogte en a de afstand vanaf de kant, in meters. Neem a = 0, 2, 4, 6, 8, 10, 12.</p><div class="antwoord">Er staat een <b>positief</b> getal voor a&sup2;, dus een <b>dalparabool</b>. De tabel is symmetrisch rond <b>a = 6</b>: daar ligt het <b>laagste</b> punt.</div></div>`
+`<figure class='fig'><svg viewBox="0 0 340 175" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Vier grafiekvormen: lineair, kwadratisch, wortel en periodiek"><g stroke="var(--line)" stroke-width="1.4" fill="none"><path d="M14 108 H78"/><path d="M14 108 V34"/><path d="M96 108 H160"/><path d="M96 108 V34"/><path d="M178 108 H242"/><path d="M178 108 V34"/><path d="M260 108 H324"/><path d="M260 108 V34"/></g><g stroke="var(--accent)" stroke-width="2.2" fill="none" stroke-linecap="round"><path d="M16 104 L76 42"/><path d="M100 44 Q128 116 156 44"/><path d="M180 105 Q202 62 240 46"/><path d="M262 74 Q278 36 294 74 T326 74"/></g><g fill="var(--txt)" font-size="10.5" font-weight="600" font-family="inherit" text-anchor="middle"><text x="46" y="132">lineair</text><text x="128" y="132">kwadratisch</text><text x="210" y="132">wortel</text><text x="292" y="132">periodiek</text></g><g fill="var(--mut)" font-size="8.5" font-family="inherit" text-anchor="middle"><text x="46" y="148">rechte lijn</text><text x="128" y="148">dalparabool</text><text x="210" y="148">stijgt steeds</text><text x="292" y="148">herhaalt zich</text><text x="46" y="160">vaste toename</text><text x="128" y="160">of bergparabool</text><text x="210" y="160">langzamer</text><text x="292" y="160">golfbeweging</text></g></svg><figcaption>Aan de vorm van een grafiek zie je meteen met welk soort verband je te maken hebt &mdash; en dus welke formule erbij hoort.</figcaption></figure>`
+`<div class="call warn"><b>Negatief getal invullen?</b> Gebruik <b>haakjes</b>: bij t = &minus;5 tik je &minus;20 &times; <b>(&minus;5)</b>&sup2; in. Zonder haakjes kwadrateert je rekenmachine alleen de 5.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Wordt de grafiek van W = &minus;5a&sup2; + 300a een berg- of een dalparabool?</p><p class="check-a">Een <b>bergparabool</b>: er staat een negatief getal voor a&sup2;.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (6.1)</b><ul class="lst">
<li><b>Kwadraat</b> bij de variabele = kwadratisch, grafiek een <b>parabool</b>.</li>
<li><b>Negatief</b> voor het kwadraat: berg, maximum. <b>Positief</b>: dal, minimum.</li>
<li>Tabel met <b>minstens zeven</b> punten.</li></ul></div>`},

{heading:'6.2 Wortelverbanden',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>een <b>wortelformule</b> herkennen en uitrekenen</li>
<li>de grafiek van een <b>wortelverband</b> tekenen</li></ul></div>`
+`<h5 class="sub">Een variabele onder het wortelteken</h5>`
+`<div class="box"><h4>Wortelformule</h4><p>De zijde van een vierkant is <b>zijde = &radic;oppervlakte</b>. Staat een variabele <b>onder het wortelteken</b>, dan is het een <b>wortelformule</b> en is er een <b>wortelverband</b>. De grafiek ziet eruit als een <b>halve parabool op zijn kant</b>: hij stijgt, maar steeds <b>minder steil</b>.</p></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: hoe ver kun je kijken?</h4><p>Bij helder weer geldt <b>k = &radic;(12,5h)</b>, met k de kijkafstand in km en h de ooghoogte in m. Bereken k bij <b>h = 8</b>.</p><div class="antwoord">Onder de wortel: 12,5 &times; 8 = <b>100</b>. k = &radic;100 = <b>10 km</b>.</div></div>`
+`<div class="call warn"><b>Veelgemaakte fout:</b> de wortel trekken uit alleen de 12,5 of alleen de h. Eerst <b>alles onder het wortelteken</b> uitrekenen, dan de wortel.</div>`
+`<div class="call waarom">Waarom wordt de grafiek steeds minder steil? Om de wortel <b>2 keer</b> zo groot te maken, moet het getal eronder <b>4 keer</b> zo groot worden. Hoe verder je komt, hoe langzamer de uitkomst groeit.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Waar lijkt de grafiek van een wortelverband op?</p><p class="check-a">Op een <b>halve parabool op zijn kant</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (6.2)</b><ul class="lst">
<li>Variabele <b>onder het wortelteken</b> = wortelverband.</li>
<li>Eerst onder de wortel uitrekenen, dan <b>wortel trekken</b>.</li>
<li>Grafiek: stijgt steeds <b>minder steil</b>.</li></ul></div>`},

{heading:'6.3 Machtsverbanden',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>een <b>machtsformule</b> herkennen en uitrekenen</li>
<li>de grafiek van een <b>machtsverband</b> tekenen en aflezen</li></ul></div>`
+`<h5 class="sub">Een macht bij de variabele</h5>`
+`<div class="box"><h4>Machtsformule</h4><p>De inhoud van een bol is <b>I = 4/3 &times; &pi; &times; r&sup3;</b>. Er staat een <b>macht</b> (hier de derde) bij de variabele r: een <b>machtsformule</b>, met een <b>machtsverband</b> tussen straal en inhoud. De grafiek is een <b>vloeiende kromme</b>.</p></div>`
+`<div class="call reken"><b>Stappenplan: machtsformule uitrekenen</b><ol class="num">
<li>Vul het getal in voor de <b>variabele</b>.</li>
<li>Gebruik de <b>machttoets</b> (^ of x<sup>y</sup>).</li>
<li>Tik alles <b>achter elkaar</b> in en druk dan pas op =.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: een zeshoekige piramide</h4><p><b>inhoud = 1,732a&sup3;</b>. Bereken de inhoud bij <b>a = 4 cm</b>.</p><div class="antwoord">4&sup3; = <b>64</b>. 1,732 &times; 64 = 110,848, dus ongeveer <b>110,8 cm&sup3;</b>.</div></div>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Kwadratisch</h4><p>Het <b>kwadraat</b> (&sup2;) bij de variabele.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Macht</h4><p>Een <b>hogere macht</b>, zoals &sup3;, &#8308; of &#8309;.</p></div></div>`
+`<div class="call waarom">Waarom een grafiek? Wil je weten bij welke a de inhoud bijvoorbeeld <b>500</b> is, dan kun je dat niet zomaar terugrekenen. Je <b>leest</b> het af in de grafiek.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Welke toets gebruik je voor een macht?</p><p class="check-a">De <b>machttoets</b>: ^ of x<sup>y</sup>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (6.3)</b><ul class="lst">
<li><b>Macht</b> bij de variabele = machtsverband.</li>
<li>Gebruik de <b>machttoets</b>.</li>
<li>Terugzoeken doe je met de <b>grafiek</b>.</li></ul></div>`},

{heading:'6.4 Periodieke verbanden',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>een <b>periodieke grafiek</b> aflezen: <b>maximum</b>, <b>minimum</b> en <b>periode</b></li>
<li>de <b>evenwichtsstand</b>, <b>amplitude</b> en <b>frequentie</b> berekenen</li></ul></div>`
+`<h5 class="sub">Een grafiek die zich herhaalt</h5>`
+`<div class="box"><h4>Periodiek</h4><p>Een <b>periodieke grafiek</b> herhaalt zich steeds. Er is dan een <b>periodiek verband</b>. De tijd waarna hij zich herhaalt is de <b>periode</b>.</p></div>`
+`<div class="g2">`
+`<div class="box"><h4>Maximum en minimum</h4><p>Het <b>hoogste</b> en het <b>laagste</b> punt.</p></div>`
+`<div class="box"><h4>Evenwichtsstand</h4><p>Het midden: <b>(maximum + minimum) : 2</b>.</p></div></div>`
+`<div class="g2">`
+`<div class="box"><h4>Amplitude</h4><p>Van de evenwichtsstand tot het <b>maximum</b> (of minimum).</p></div>`
+`<div class="box"><h4>Frequentie</h4><p>Hoe vaak de periode in een <b>tijdseenheid</b> past: <b>tijdseenheid : periode</b>.</p></div></div>`
+`<h5 class="sub">Uitrekenen</h5>`
+`<div class="voorbeeld"><h4>Voorbeeld: een schommel</h4><p>Maximum <b>2,5 m</b>, minimum <b>0,5 m</b>, periode <b>4 seconden</b>.</p><div class="antwoord">Evenwichtsstand: (2,5 + 0,5) : 2 = <b>1,5 m</b>. Amplitude: 2,5 &minus; 1,5 = <b>1 m</b>. Frequentie: 60 : 4 = <b>15 keer per minuut</b>.</div></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: tussen 200 en 500 m</h4><p>Hoogste punt <b>500 m</b>, laagste <b>200 m</b>, elke <b>3 minuten</b> dezelfde beweging.</p><div class="antwoord">Evenwichtsstand (500 + 200) : 2 = <b>350 m</b>. Amplitude 500 &minus; 350 = <b>150 m</b>. Frequentie 60 : 3 = <b>20 per uur</b>.</div></div>`
+`<div class="call warn"><b>Veelgemaakte fout:</b> de amplitude uitrekenen als maximum &minus; minimum. Dat is de <b>hele</b> afstand; de amplitude is daar de <b>helft</b> van.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Hoe bereken je de evenwichtsstand?</p><p class="check-a"><b>(maximum + minimum) : 2</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (6.4)</b><ul class="lst">
<li><b>Evenwichtsstand</b> = (max + min) : 2.</li>
<li><b>Amplitude</b> = max &minus; evenwichtsstand.</li>
<li><b>Frequentie</b> = tijdseenheid : periode.</li></ul></div>`}
],
terms:[
['Kwadratische formule','Een formule waarin een kwadraat (tweede macht) van een variabele voorkomt.',0],
['Kwadratisch verband','Het verband tussen twee variabelen dat hoort bij een kwadratische formule; de grafiek is een parabool.',0],
['Parabool','De grafiek bij een kwadratisch verband; een symmetrische, gebogen lijn.',0],
['Top','Het hoogste (bergparabool) of laagste (dalparabool) punt van een parabool.',0],
['Symmetrieas','De verticale lijn door de top van een parabool; de parabool is hierom symmetrisch.',0],
['Dalparabool','Een parabool met een minimum, ontstaat bij een positief getal voor het kwadraat.',0],
['Bergparabool','Een parabool met een maximum, ontstaat bij een negatief getal voor het kwadraat.',0],
['Wortelformule','Een formule waarin een wortelteken voorkomt.',1],
['Wortelverband','Het verband tussen twee variabelen dat hoort bij een wortelformule.',1],
['Machtsformule','Een formule waarin een macht (bijvoorbeeld derde of vierde macht) van een variabele voorkomt.',2],
['Machtsverband','Het verband tussen twee variabelen dat hoort bij een machtsformule; de grafiek is een vloeiende kromme.',2],
['Periodiek verband','Een verband waarbij de grafiek zich na een vaste tijd steeds herhaalt.',3],
['Periode','De tijd waarna een periodieke grafiek zich voor het eerst herhaalt.',3],
['Evenwichtsstand','Het gemiddelde van het maximum en het minimum van een periodieke grafiek.',3],
['Amplitude','Het aantal eenheden tussen de evenwichtsstand en het maximum (of minimum) van een periodieke grafiek.',3]
],
cards:[
['Wat is een kwadratische formule?','Een formule waarin een kwadraat van een variabele voorkomt.',0],
['Welke vorm heeft de grafiek bij een kwadratisch verband?','De vorm van een parabool.',0],
['Wanneer is een parabool een dalparabool?','Als het getal voor het kwadraat positief is; de grafiek heeft dan een minimum.',0],
['Wanneer is een parabool een bergparabool?','Als het getal voor het kwadraat negatief is; de grafiek heeft dan een maximum.',0],
['Wat is de symmetrieas van een parabool?','De verticale lijn door de top van de parabool.',0],
['Wat herken je aan een wortelformule?','Er staat een wortelteken in de formule.',1],
['Hoe bereken je z uit de formule z = √O?','Je trekt de wortel uit O.',1],
['Wat herken je aan een machtsformule?','Er staat een macht (bijvoorbeeld derde of vierde macht) bij de variabele.',2],
['Welke vorm heeft de grafiek bij een machtsverband?','Een vloeiende, stijgende kromme.',2],
['Wat is de periode van een periodieke grafiek?','De tijd waarna de grafiek zich voor het eerst herhaalt.',3],
['Hoe bereken je de evenwichtsstand van een periodieke grafiek?','(maximum + minimum) : 2.',3],
['Hoe bereken je de amplitude van een periodieke grafiek?','Maximum − evenwichtsstand (of evenwichtsstand − minimum).',3],
['Hoe bereken je de frequentie per uur?','60 minuten (of 3600 seconden) delen door de periode.',3]
],
quiz:[
['Wat herken je aan een kwadratische formule?',['Een wortelteken','Een kwadraat bij een variabele','Een breuk','Een macht 5'],1,'Een kwadratische formule bevat een kwadraat (tweede macht) van een variabele.'],
['Welke vorm heeft de grafiek van een kwadratisch verband?',['Een rechte lijn','Een parabool','Een vloeiende stijgende kromme zonder top','Een golf die zich herhaalt'],1,'De grafiek bij een kwadratisch verband is een parabool.'],
['In de formule h = 5a² − 3a + 1 staat een positief getal voor het kwadraat. Wat betekent dit voor de grafiek?',['Het is een bergparabool met een maximum','Het is een dalparabool met een minimum','De grafiek is een rechte lijn','Er is geen top'],1,'Een positief getal voor het kwadraat geeft een dalparabool met een minimum.'],
['Wat is de symmetrieas van een parabool?',['Een horizontale lijn door de top','Een verticale lijn door de top','De x-as','Er is geen symmetrieas'],1,'De symmetrieas is de verticale lijn door de top van de parabool.'],
['Je vult a = −4 in de formule h = 2a² + 3a in. Hoe doe je dat goed op de rekenmachine?',['2 × −4² + 3 × −4','2 × (−4)² + 3 × −4','−2 × 4² + 3 × 4','2 × 4² − 3 × 4'],1,'Bij een negatief getal in het kwadraat gebruik je haakjes: 2 × (−4)² + 3 × −4.'],
['Wat herken je aan een wortelformule?',['Een wortelteken','Een kwadraat','Een macht 4','Een periode'],0,'Een wortelformule bevat een wortelteken.'],
['Bereken met de formule k = √(12,5h) de kijkafstand bij h = 2.',['5 km','6,25 km','12,5 km','25 km'],0,'k = √(12,5 × 2) = √25 = 5 km.'],
['Wat herken je aan een machtsformule?',['Een wortelteken','Een breuk zonder variabele','Een macht (bijvoorbeeld derde of vierde macht) bij de variabele','Een kwadraat'],2,'Een machtsformule bevat een macht (hoger dan een kwadraat, zoals de derde of vierde macht) bij de variabele.'],
['De inhoud van een bol bereken je met I = 4/3 × π × r³. Bereken de inhoud bij r = 3 cm. Rond af op hele cm³.',['28 cm³','113 cm³','339 cm³','36 cm³'],1,'I = 4/3 × π × 3³ = 4/3 × π × 27 ≈ 113,1 cm³, afgerond 113 cm³.'],
['Welke vorm heeft de grafiek bij een machtsverband?',['Een rechte lijn','Een parabool','Een vloeiende, stijgende kromme','Een golf die zich herhaalt'],2,'De grafiek bij een machtsverband is een vloeiende, stijgende kromme.'],
['Wat is een periodieke grafiek?',['Een grafiek die altijd stijgt','Een grafiek die zich na een vaste tijd steeds herhaalt','Een grafiek in de vorm van een parabool','Een grafiek met een wortelteken'],1,'Een periodieke grafiek herhaalt zich steeds na een vaste tijd, de periode.'],
['Een periodieke grafiek heeft een maximum van 6 m en een minimum van 2 m. Wat is de evenwichtsstand?',['2 m','4 m','6 m','8 m'],1,'Evenwichtsstand = (6 + 2) : 2 = 4 m.'],
['Bij dezelfde grafiek (maximum 6 m, minimum 2 m): wat is de amplitude?',['2 m','4 m','6 m','8 m'],0,'Amplitude = maximum − evenwichtsstand = 6 − 4 = 2 m.'],
['Een periodieke grafiek heeft een periode van 3 minuten. Wat is de frequentie per uur?',['3 per uur','10 per uur','20 per uur','60 per uur'],2,'Frequentie = 60 : 3 = 20 per uur.'],
['Wat is de periode van een periodieke grafiek?',['Het hoogste punt van de grafiek','Het gemiddelde van maximum en minimum','De tijd waarna de grafiek zich voor het eerst herhaalt','Het aantal eenheden tot het maximum'],2,'De periode is de tijd waarna de grafiek zich voor het eerst herhaalt.'],
['Hoe bereken je op de rekenmachine 2⁵?',['Met de worteltoets','Met de machttoets (^ of xʸ)','Met de sinustoets','Dat kan niet op een rekenmachine'],1,'Voor een macht gebruik je de machttoets ^ of xʸ op de rekenmachine.']
]
});
