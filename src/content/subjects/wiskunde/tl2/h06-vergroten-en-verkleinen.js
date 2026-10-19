import { registerChapter } from '../../../registry.js';

/* Rebuilt 2026-09-24 to the recipe of Economie TL4 H1 (change 6). Added
   from the book: the copier at 71% (6.1), the "is gelijkvormig met" sign
   (6.2), and the 3x3 rectangle and 4x4x4 balk that explain squared and
   cubed (6.3). The drawing is unchanged. Terms, cards and quiz unchanged. */
registerChapter('wiskunde|tl|2|6', {
title:'Vergroten en verkleinen',
summary:[
{heading:'6.1 Vergrotingsfactor',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>de <b>vergrotingsfactor</b> berekenen bij <b>vergroten</b> en <b>verkleinen</b></li>
<li>met een vergrotingsfactor <b>tekenen</b></li></ul></div>`
+`<div class="box"><h4>Waar dit hoofdstuk over gaat</h4><p>Je rekent met de <b>vergrotingsfactor</b>: hoeveel groter of kleiner een figuur wordt. Daarna werk je met <b>gelijkvormige driehoeken</b>, <b>oppervlakte</b> en <b>inhoud</b> van vergrotingen, <b>schaal</b> en <b>schaalmodellen</b>.</p></div>`
+`<h5 class="sub">Origineel en beeld</h5>`
+`<div class="box"><h4>De formule</h4><p>Bij vergroten of verkleinen blijft de <b>vorm</b> hetzelfde en blijven de <b>hoeken</b> even groot. De figuur waar je mee begint is het <b>origineel</b>, de nieuwe figuur het <b>beeld</b>.</p><p><b>vergrotingsfactor = lengte beeld : lengte origineel</b></p></div>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Vergroten</h4><p>Vergrotingsfactor <b>groter dan 1</b>. Het beeld is groter.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Verkleinen</h4><p>Vergrotingsfactor <b>kleiner dan 1</b>. Het beeld is kleiner.</p></div></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: een rechthoek vergroten</h4><p>AB = <b>2,2 cm</b> en het beeld A'B' = <b>3,6 cm</b>. Bereken de vergrotingsfactor. Rond af op twee decimalen.</p><div class="antwoord">A'B' is het beeld, AB het origineel. 3,6 : 2,2 = 1,636&hellip;, dus <b>1,64</b>.</div></div>`
+`<figure class='fig'><svg viewBox="0 0 340 175" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Twee gelijkvormige driehoeken, de grote is twee keer zo groot als de kleine"><g fill="var(--accent)" fill-opacity=".16" stroke="var(--accent)" stroke-width="1.8" stroke-linejoin="round"><path d="M30 110 L90 110 L30 70 Z"/><path d="M170 130 L290 130 L170 50 Z"/></g><polyline points="42,110 42,98 30,98" fill="none" stroke="var(--accent)" stroke-width="1.5"/><polyline points="182,130 182,118 170,118" fill="none" stroke="var(--accent)" stroke-width="1.5"/><g fill="var(--mut)" font-size="9.5" font-family="inherit" text-anchor="middle"><text x="60" y="126">3 cm</text><text x="230" y="146">6 cm</text></g><g fill="var(--mut)" font-size="9.5" font-family="inherit" text-anchor="end"><text x="26" y="94">2 cm</text><text x="166" y="94">4 cm</text></g><g stroke="var(--accent)" stroke-width="1.8" fill="none"><path d="M104 90 H144"/></g><polygon points="144,85 156,90 144,95" fill="var(--accent)"/><text x="130" y="80" fill="var(--accent)" font-size="11" font-weight="600" font-family="inherit" text-anchor="middle">&times; 2</text><g fill="var(--txt)" font-size="10.5" font-family="inherit" text-anchor="middle"><text x="60" y="160">origineel</text><text x="230" y="166">vergroting</text></g><text x="170" y="20" fill="var(--mut)" font-size="9.5" font-family="inherit" text-anchor="middle">de hoeken blijven precies gelijk &mdash; alleen de zijden worden langer</text></svg><figcaption>Bij een vergrotingsfactor van 2 wordt elke zijde twee keer zo lang, maar de <b>oppervlakte</b> wordt 2<sup>2</sup> = 4 keer zo groot. Dat is de val bij deze opgaven.</figcaption></figure>`
+`<h5 class="sub">Rekenen en tekenen met de factor</h5>`
+`<div class="voorbeeld"><h4>Voorbeeld: het kopieerapparaat</h4><p>Bowien verkleint een tekening van <b>420 bij 297 mm</b>. Het apparaat staat op <b>71%</b>.</p><div class="antwoord">71% is een vergrotingsfactor van <b>0,71</b>. 420 &times; 0,71 &asymp; <b>298 mm</b> en 297 &times; 0,71 &asymp; <b>211 mm</b>.</div></div>`
+`<div class="call reken"><b>Stappenplan: tekenen met een vergrotingsfactor</b><ol class="num">
<li>Tel hoe lang elke zijde van het origineel is, bijvoorbeeld in <b>hokjes</b>.</li>
<li>Vermenigvuldig elke lengte met de <b>vergrotingsfactor</b>.</li>
<li>Teken het beeld; de <b>hoeken</b> blijven even groot.</li></ol></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Is het beeld groter of kleiner bij vergrotingsfactor 0,3?</p><p class="check-a"><b>Kleiner</b>, want de factor is kleiner dan 1.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (6.1)</b><ul class="lst">
<li><b>vergrotingsfactor = beeld : origineel</b>.</li>
<li>Groter dan 1: <b>vergroten</b>. Kleiner dan 1: <b>verkleinen</b>.</li>
<li>Een percentage als <b>71%</b> is factor <b>0,71</b>.</li></ul></div>`},

{heading:'6.2 Gelijkvormige driehoeken',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li><b>gelijkvormige driehoeken</b> herkennen</li>
<li>zijden berekenen met een <b>tabel</b> en de <b>vergrotingsfactor</b></li></ul></div>`
+`<h5 class="sub">Gelijkvormig</h5>`
+`<div class="box"><h4>Dezelfde vorm</h4><p>Is &triangle;DEF een vergroting van &triangle;ABC, dan zijn ze <b>gelijkvormig</b>. Je schrijft <b>&triangle;ABC &sim; &triangle;DEF</b>; het teken <b>&sim;</b> spreek je uit als &ldquo;<b>is gelijkvormig met</b>&rdquo;.</p></div>`
+`<div class="g2">`
+`<div class="box"><h4>Overeenkomstige hoeken</h4><p>De hoeken die bij elkaar horen zijn <b>even groot</b>. Dat zie je aan de <b>tekens</b> in de hoeken.</p></div>`
+`<div class="box"><h4>Overeenkomstige zijden</h4><p>De zijden die bij elkaar horen hebben allemaal <b>dezelfde vergrotingsfactor</b>.</p></div></div>`
+`<h5 class="sub">Zijden berekenen</h5>`
+`<div class="call reken"><b>Stappenplan: zijden in gelijkvormige driehoeken</b><ol class="num">
<li>Maak een <b>tabel</b>: de <b>kleine</b> driehoek boven, de <b>grote</b> eronder.</li>
<li>Zet de <b>overeenkomstige zijden</b> onder elkaar.</li>
<li>Bereken de <b>vergrotingsfactor</b> met een kolom waarin beide getallen staan.</li>
<li>Reken de onbekende zijde uit: <b>&times;</b> de factor (of <b>:</b> de factor als je terugrekent).</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: &triangle;PQR &sim; &triangle;CAB</h4><p>PQ = <b>15 cm</b>, CA = <b>30 cm</b>, PR = <b>25 cm</b>. Bereken CB.</p><div class="antwoord">Tabel: PQ en CA onder elkaar, PR en CB onder elkaar. Factor: 30 : 15 = <b>2</b>. CB = 25 &times; 2 = <b>50 cm</b>.</div></div>`
+`<div class="call warn"><b>Let op de volgorde van de letters.</b> In &triangle;PQR &sim; &triangle;CAB hoort P bij C, Q bij A en R bij B. Zo weet je welke zijden <b>overeenkomen</b>.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Wat weet je van de hoeken van twee gelijkvormige driehoeken?</p><p class="check-a">De <b>overeenkomstige hoeken</b> zijn even groot.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (6.2)</b><ul class="lst">
<li><b>&sim;</b> betekent: is gelijkvormig met.</li>
<li>Hoeken <b>gelijk</b>, zijden met <b>dezelfde factor</b>.</li>
<li>Werk met een <b>tabel</b>: klein boven, groot onder.</li></ul></div>`},

{heading:'6.3 Oppervlakte en inhoud vergroten',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>de <b>oppervlakte</b> van een vergroting berekenen</li>
<li>de <b>inhoud</b> van een vergroting berekenen</li></ul></div>`
+`<h5 class="sub">Oppervlakte</h5>`
+`<div class="box"><h4>Vergrotingsfactor in het kwadraat</h4><p>Een rechthoek van <b>3,22 cm&sup2;</b> wordt vergroot met factor <b>3</b>. De kleine rechthoek past <b>3 keer</b> in de lengte en <b>3 keer</b> in de breedte, dus <b>3 &times; 3 = 3&sup2; = 9 keer</b>.</p><p><b>oppervlakte vergroting = vergrotingsfactor&sup2; &times; oppervlakte origineel</b></p></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: 8,5 cm&sup2; met factor 1,7</h4><p>Bereken de oppervlakte van de vergroting. Rond af op één decimaal.</p><div class="antwoord">1,7&sup2; &times; 8,5 = 2,89 &times; 8,5 = 24,565, dus <b>24,6 cm&sup2;</b>.</div></div>`
+`<h5 class="sub">Inhoud</h5>`
+`<div class="box"><h4>Vergrotingsfactor tot de derde</h4><p>Een balk van <b>3,6 dm&sup3;</b> wordt vergroot met factor <b>4</b>. De kleine balk past 4 keer in de lengte, 4 keer in de breedte en 4 keer in de hoogte: <b>4 &times; 4 &times; 4 = 4&sup3; = 64 keer</b>. De grote balk is dus 64 &times; 3,6 = <b>230,4 dm&sup3;</b>.</p><p><b>inhoud vergroting = vergrotingsfactor&sup3; &times; inhoud origineel</b></p></div>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Oppervlakte</h4><p>Twee richtingen: <b>factor&sup2;</b></p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Inhoud</h4><p>Drie richtingen: <b>factor&sup3;</b></p></div></div>`
+`<div class="call warn"><b>Veelgemaakte fout:</b> de oppervlakte gewoon <b>&times; de factor</b> doen. Bij factor 3 wordt een oppervlakte <b>9 keer</b> zo groot, niet 3 keer.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Een balk wordt vergroot met factor 2. Hoeveel keer zo groot wordt de inhoud?</p><p class="check-a">2&sup3; = <b>8 keer</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (6.3)</b><ul class="lst">
<li>Lengtes: <b>&times; factor</b>.</li>
<li>Oppervlakte: <b>&times; factor&sup2;</b>.</li>
<li>Inhoud: <b>&times; factor&sup3;</b>.</li></ul></div>`},

{heading:'6.4 Schaal',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>rekenen met de <b>schaal</b> van een <b>kaart</b> of <b>plattegrond</b></li>
<li>afstanden <b>hemelsbreed</b> berekenen</li></ul></div>`
+`<h5 class="sub">Wat betekent een schaal?</h5>`
+`<div class="box"><h4>Schaal 1 : 100</h4><p>Staat onder een plattegrond <b>schaal 1 : 100</b> (&ldquo;één op honderd&rdquo;), dan zijn de maten in het echt <b>100 keer zo groot</b>. De vergrotingsfactor is dus <b>100</b>.</p></div>`
+`<div class="term"><b>Hemelsbreed</b><span>De afstand in een rechte lijn, zonder rekening te houden met wegen en bochten.</span></div>`
+`<div class="call reken"><b>Stappenplan: echte afstand met een schaal</b><ol class="num">
<li><b>Meet</b> de afstand op de kaart.</li>
<li>Vermenigvuldig met het getal van de <b>schaal</b>.</li>
<li>Reken om naar een handige <b>eenheid</b> (m of km).</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: 1 cm is 30 km</h4><p>Twee plaatsen liggen <b>4 cm</b> uit elkaar op de kaart.</p><div class="antwoord">4 &times; 30 = <b>120 km</b> hemelsbreed.</div></div>`
+`<div class="call waarom">Waarom is de echte weg <b>langer</b>? Een weg gaat om <b>obstakels</b> heen en maakt <b>bochten</b>. Hemelsbreed is altijd de <b>kortste</b> afstand.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Welke vergrotingsfactor hoort bij schaal 1 : 100?</p><p class="check-a"><b>100</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (6.4)</b><ul class="lst">
<li><b>Schaal 1 : n</b>: in het echt <b>n keer</b> zo groot.</li>
<li><b>Hemelsbreed</b> = in een rechte lijn.</li>
<li>Reken om naar een <b>handige eenheid</b>.</li></ul></div>`},

{heading:'6.5 Schaalmodel',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>rekenen met <b>schaalmodellen</b>, van model naar echt en terug</li></ul></div>`
+`<h5 class="sub">Model en werkelijkheid</h5>`
+`<div class="box"><h4>Schaal 1 : 25</h4><p>Een architect maakt een <b>model</b> van nieuwe huizen op <b>schaal 1 : 25</b>. De vergrotingsfactor is <b>25</b>.</p></div>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Model naar echt</h4><p>Maat model <b>&times; 25</b>.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Echt naar model</h4><p>Echte maat <b>: 25</b>.</p></div></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: de Domtoren</h4><p>Een model op schaal <b>1 : 300</b> is <b>37,4 cm</b> hoog. Hoe hoog is de echte toren in meters?</p><div class="antwoord">37,4 &times; 300 = <b>11 220 cm</b>. Omrekenen: 11 220 cm = <b>112,2 m</b>.</div></div>`
+`<div class="call warn"><b>Let op de eenheid.</b> Het antwoord komt eerst in <b>dezelfde eenheid</b> als het model (hier cm). Reken daarna om naar wat er <b>gevraagd</b> wordt.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Een model is op schaal 1 : 25. Hoe reken je van de echte maat naar het model?</p><p class="check-a">Echte maat <b>: 25</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (6.5)</b><ul class="lst">
<li>Model naar echt: <b>&times;</b> het schaalgetal.</li>
<li>Echt naar model: <b>:</b> het schaalgetal.</li>
<li>Reken daarna om naar de <b>gevraagde eenheid</b>.</li></ul></div>`}
],
terms:[
['Vergrotingsfactor','Het getal waarmee de maten van een origineel vermenigvuldigd worden om het beeld te krijgen: lengte beeld : lengte origineel.',0],
['Origineel','De oorspronkelijke figuur voordat hij vergroot of verkleind is.',0],
['Beeld','De figuur die ontstaat na een vergroting of verkleining.',0],
['Gelijkvormig','Figuren zijn gelijkvormig als alle maten dezelfde vergrotingsfactor hebben; ze hebben dan dezelfde vorm.',0],
['Overeenkomstige zijden','Zijden van gelijkvormige figuren die bij elkaar horen en dezelfde vergrotingsfactor hebben.',1],
['Overeenkomstige hoeken','Hoeken van gelijkvormige figuren die bij elkaar horen en even groot zijn.',1],
['Schaal','De verhouding tussen een maat op een tekening of kaart en de echte maat, bijvoorbeeld schaal 1 : 100.',3],
['Hemelsbreed','De afstand tussen twee punten gemeten in een rechte lijn.',3],
['Schaalmodel','Een verkleinde of vergrote nabootsing van een echt voorwerp, gemaakt volgens een vaste schaal.',4],
['Kwadraat van de vergrotingsfactor','De factor waarmee de oppervlakte van een figuur verandert bij een vergroting: vergrotingsfactor².',2],
['Derde macht van de vergrotingsfactor','De factor waarmee de inhoud van een ruimtefiguur verandert bij een vergroting: vergrotingsfactor³.',2]
],
cards:[
['Hoe bereken je de vergrotingsfactor?','vergrotingsfactor = lengte beeld : lengte origineel.',0],
['Wanneer is er sprake van een verkleining?','Als de vergrotingsfactor kleiner is dan 1.',0],
['Wanneer zijn twee figuren gelijkvormig?','Als alle maten dezelfde vergrotingsfactor hebben, zodat de vorm hetzelfde blijft.',0],
['Wat zijn overeenkomstige zijden?','Zijden van gelijkvormige figuren die bij elkaar horen.',1],
['Hoe zet je gelijkvormige driehoeken in een tabel om een onbekende zijde te berekenen?','Je zet de kleinste driehoek boven en de grootste driehoek onder, met overeenkomstige zijden onder elkaar.',1],
['Met welke factor vergroot de oppervlakte van een figuur bij een vergroting?','Met het kwadraat van de vergrotingsfactor.',2],
['Met welke factor vergroot de inhoud van een ruimtefiguur bij een vergroting?','Met de derde macht van de vergrotingsfactor.',2],
['Wat betekent schaal 1 : 100?','Dat de maten in het echt 100 keer zo groot zijn als op de tekening.',3],
['Wat betekent hemelsbreed?','De afstand gemeten in een rechte lijn tussen twee punten.',3],
['Een model is gemaakt op schaal 1 : 300. Hoe bereken je de echte hoogte uit de modelhoogte?','Je vermenigvuldigt de modelhoogte met 300.',4],
['Wat is het origineel bij een vergroting?','De oorspronkelijke figuur, vóór de vergroting.',0]
],
quiz:[
['Zijde AB = 2 cm (origineel) en A\'B\' = 5 cm (beeld). Wat is de vergrotingsfactor?',['0,4','2,5','3','5'],1,'vergrotingsfactor = 5 : 2 = 2,5.'],
['Wanneer is een vergroting eigenlijk een verkleining?',['Als de vergrotingsfactor groter dan 1 is','Als de vergrotingsfactor precies 1 is','Als de vergrotingsfactor kleiner dan 1 is','Dat kan nooit'],2,'Bij een vergrotingsfactor kleiner dan 1 wordt de figuur juist kleiner.'],
['Twee driehoeken zijn gelijkvormig. Wat geldt er voor de overeenkomstige hoeken?',['Ze zijn even groot','Ze zijn samen 180°','Ze zijn samen 90°','Ze verschillen altijd'],0,'Bij gelijkvormige figuren zijn overeenkomstige hoeken altijd even groot.'],
['Driehoek PQR is gelijkvormig met driehoek CAB. PQ = 15, CA = 30, PR = 25. Wat is CB?',['12,5','25','40','50'],3,'vergrotingsfactor = 30 : 15 = 2. CB = 25 × 2 = 50.'],
['Een figuur van 8,5 cm² wordt vergroot met factor 1,7. Wat is de nieuwe oppervlakte? Rond af op één decimaal.',['10,2 cm²','14,45 cm²','24,6 cm²','42,25 cm²'],2,'oppervlakte vergroting = 1,7² × 8,5 = 24,6 cm² (afgerond).'],
['Een doos wordt vergroot met vergrotingsfactor 2. Hoeveel keer zo groot wordt de inhoud?',['2 keer','4 keer','8 keer','16 keer'],2,'inhoud vergroting = vergrotingsfactor³ × inhoud origineel = 2³ = 8 keer zo groot.'],
['Wat betekent schaal 1 : 50 op een plattegrond?',['De tekening is 50 keer zo groot als het echt','De maten in het echt zijn 50 keer zo groot als op de tekening','Er passen 50 tekeningen in het echte object','De schaal heeft niets met de maten te maken'],1,'Bij schaal 1 : 50 zijn de echte maten 50 keer zo groot als op de tekening.'],
['Twee plaatsen liggen 3 cm van elkaar op een kaart met schaal waarbij 1 cm = 30 km. Hoe ver liggen ze hemelsbreed uit elkaar?',['10 km','27 km','33 km','90 km'],3,'3 × 30 = 90 km.'],
['Een model van een toren is gemaakt op schaal 1 : 87 en is 65 cm hoog. Hoe hoog is de echte toren?',['0,75 m','56,55 m','65 m','5655 m'],1,'65 × 87 = 5655 cm = 56,55 m.'],
['Wat is de vergrotingsfactor bij een verkleining tot de helft?',['0,5','1','2','50'],0,'Bij een verkleining tot de helft is de vergrotingsfactor 0,5.'],
['Waarom gebruik je bij oppervlakte het kwadraat van de vergrotingsfactor?',['Omdat lengte én breedte allebei met de vergrotingsfactor vermenigvuldigd worden','Omdat dat toevallig zo is afgesproken','Omdat oppervlakte altijd een kwadraat is','Dat klopt niet, je gebruikt gewoon de vergrotingsfactor'],0,'Zowel lengte als breedte worden vermenigvuldigd met de vergrotingsfactor, dus de oppervlakte met het kwadraat daarvan.'],
['Wat is nodig om met een tabel een onbekende zijde in gelijkvormige driehoeken te berekenen?',['De hoeken van de driehoeken','De vergrotingsfactor tussen de driehoeken','Alleen de oppervlakte','De omtrek van beide driehoeken'],1,'Met de vergrotingsfactor tussen overeenkomstige zijden kun je een onbekende zijde berekenen.'],
['Een postzegel van 7,2 cm² wordt vergroot met factor 12,5. Wat is de oppervlakte van de vergroting? Rond af op een geheel getal.',['90 cm²','1125 cm²','156,25 cm²','12,5 cm²'],1,'oppervlakte vergroting = 12,5² × 7,2 = 1125 cm² (afgerond).']
]
});
