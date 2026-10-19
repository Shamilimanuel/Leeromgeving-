import { registerChapter } from '../../../registry.js';

/* Rebuilt 2026-09-24 to the recipe of Economie TL4 H1 (change 6). Fixed: the
   7.1 example said 347 : 2 = 171,5 (it is 173,5; minus 2 gives 171,5) and
   told students to check it themselves. Added from the book: the order of
   operations on the calculator, the kubussen formula n^2 + 1 (7.3) and
   maximum and minimum on the reuzenrad graph (7.5). Terms, cards and quiz
   unchanged. */
registerChapter('wiskunde|tl|2|7', {
title:'Formules en grafieken',
summary:[
{heading:'7.1 Formules met een deelstreep',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>de <b>rekenvolgorde</b> gebruiken, ook op je <b>rekenmachine</b></li>
<li>rekenen met een <b>deelstreep</b> en de <b>breukentoets</b></li></ul></div>`
+`<div class="box"><h4>Waar dit hoofdstuk over gaat</h4><p>Je rekent met lastigere <b>formules</b>: met een <b>deelstreep</b>, met <b>haakjes</b>, met <b>kwadraten</b> en met <b>wortels</b>. Aan het eind lees je <b>periodieke grafieken</b> af.</p></div>`
+`<h5 class="sub">De rekenvolgorde</h5>`
+`<div class="call reken"><b>Rekenvolgorde</b><ol class="num">
<li>Wat binnen de <b>haakjes</b> staat.</li>
<li><b>Machtsverheffen</b> en <b>worteltrekken</b>, van links naar rechts.</li>
<li><b>Vermenigvuldigen</b> en <b>delen</b>, van links naar rechts.</li>
<li><b>Optellen</b> en <b>aftrekken</b>, van links naar rechts.</li></ol></div>`
+`<div class="box"><h4>Je rekenmachine kent de volgorde</h4><p>Tik alles <b>achter elkaar</b> in en druk pas aan het eind op <b>=</b>. Voor een macht gebruik je de <b>machttoets</b>: 8,9<sup>4</sup> = <b>6274,2241</b>.</p></div>`
+`<h5 class="sub">De deelstreep</h5>`
+`<div class="box"><h4>Boven en onder apart</h4><p>Bij een <b>deelstreep</b> reken je eerst alles <b>boven</b> en alles <b>onder</b> de streep uit, en dan pas <b>deel</b> je. Op je rekenmachine gebruik je de <b>breukentoets</b>; met de <b>cursortoets</b> ga je naar rechts, achter de deelstreep. Krijg je een breuk, maak er dan met de <b>wisseltoets</b> een decimaal getal van.</p></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: (165 + 182) gedeeld door (8 : 4), min 2</h4><p>Bereken.</p><div class="antwoord">Boven: 165 + 182 = <b>347</b>. Onder: 8 : 4 = <b>2</b>. Delen: 347 : 2 = <b>173,5</b>. Dan nog &minus; 2: <b>171,5</b>.</div></div>`
+`<div class="call waarom">Waarom de breukentoets? Tik je 165 + 182 : 8 : 4 gewoon achter elkaar in, dan deelt je rekenmachine <b>alleen</b> 182 (delen gaat vóór optellen). De deelstreep werkt als <b>haakjes</b> om boven en onder.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Wat gaat voor: vermenigvuldigen of optellen?</p><p class="check-a"><b>Vermenigvuldigen</b> (en delen) gaat vóór optellen en aftrekken.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (7.1)</b><ul class="lst">
<li><b>Haakjes</b>, <b>machten en wortels</b>, <b>keer en delen</b>, <b>plus en min</b>.</li>
<li>Deelstreep: eerst <b>boven</b> en <b>onder</b> uitrekenen.</li>
<li>Gebruik de <b>breukentoets</b>.</li></ul></div>`},

{heading:'7.2 Formules met haakjes',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>een formule met <b>haakjes</b> uitrekenen</li>
<li><b>haakjes wegwerken</b></li></ul></div>`
+`<h5 class="sub">Eerst de haakjes</h5>`
+`<div class="box"><h4>Twee manieren</h4><p>In <b>prijs (&euro;) = 5 &times; (t + 3)</b> reken je eerst uit wat <b>binnen de haakjes</b> staat en vermenigvuldig je daarna met het getal <b>ervoor</b>. Je mag de haakjes ook <b>wegwerken</b>: vermenigvuldig <b>elk</b> getal binnen de haakjes: 5 &times; (t + 3) = 5t + 15.</p></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: kosten (&euro;) = 8 &times; (t + 5)</h4><p>Bereken de kosten als <b>t = 4</b>.</p><div class="antwoord">Binnen de haakjes: 4 + 5 = <b>9</b>. Dan 8 &times; 9 = <b>&euro;72</b>. Met weggewerkte haakjes: 8 &times; 4 + 8 &times; 5 = 32 + 40 = <b>72</b>. Hetzelfde.</div></div>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Met haakjes</h4><p><b>8 &times; (t + 5)</b></p></div><div class="vergelijk-vs">=</div><div class="vergelijk-kant"><h4>Haakjes weggewerkt</h4><p><b>8t + 40</b></p></div></div>`
+`<div class="call warn"><b>Veelgemaakte fout:</b> alleen het <b>eerste</b> getal vermenigvuldigen: 8 &times; (t + 5) wordt dan 8t + 5. Het getal voor de haakjes gaat keer <b>alles</b> wat erin staat.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Werk de haakjes weg: 5 &times; (t + 3).</p><p class="check-a"><b>5t + 15</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (7.2)</b><ul class="lst">
<li>Eerst <b>binnen de haakjes</b>, dan keer het getal ervoor.</li>
<li>Wegwerken: <b>a &times; (b + c) = a &times; b + a &times; c</b>.</li></ul></div>`},

{heading:'7.3 Formules met kwadraten',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>rekenen met een <b>kwadratische formule</b></li></ul></div>`
+`<h5 class="sub">Een kwadraat in de formule</h5>`
+`<div class="box"><h4>Kwadratische formule</h4><p>Bij een rij bouwwerken hoort <b>aantal kubussen = n&sup2; + 1</b>, met n het <b>nummer</b> van het bouwwerk. Er staat een <b>kwadraat</b> in, daarom heet dit een <b>kwadratische formule</b>. Voor n = 8: 8&sup2; + 1 = <b>65</b> kubussen.</p></div>`
+`<div class="call reken"><b>Stappenplan: invullen in een kwadratische formule</b><ol class="num">
<li>Vul het getal in op de plaats van de <b>letter</b>.</li>
<li>Reken eerst het <b>kwadraat</b> uit.</li>
<li>Dan <b>keer</b> en <b>delen</b>, daarna <b>plus</b> en <b>min</b>.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: oppervlakte (m&sup2;) = 3 &times; r&sup2;</h4><p>Bereken de oppervlakte als <b>r = 4</b>.</p><div class="antwoord">Eerst het kwadraat: 4&sup2; = <b>16</b>. Dan 3 &times; 16 = <b>48 m&sup2;</b>.</div></div>`
+`<div class="call warn"><b>Veelgemaakte fout:</b> eerst 3 &times; 4 = 12 en dan 12&sup2; = 144. Het kwadraat hoort alleen bij de <b>r</b>, dus eerst <b>kwadrateren</b>.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Hoeveel kubussen heeft bouwwerk 5 bij aantal = n&sup2; + 1?</p><p class="check-a">5&sup2; + 1 = <b>26</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (7.3)</b><ul class="lst">
<li>Een formule met een <b>kwadraat</b> heet <b>kwadratisch</b>.</li>
<li>Het kwadraat reken je <b>eerst</b> uit.</li></ul></div>`},

{heading:'7.4 Formules met wortels',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>rekenen met een formule met een <b>wortel</b></li></ul></div>`
+`<h5 class="sub">Wat onder de wortel staat</h5>`
+`<div class="box"><h4>Eerst onder het wortelteken</h4><p>Staat er een <b>wortelteken</b> in een formule, dan reken je eerst alles uit wat <b>onder</b> het wortelteken staat. Pas daarna trek je de <b>wortel</b>.</p></div>`
+`<div class="call reken"><b>Stappenplan: formule met een wortel</b><ol class="num">
<li>Vul het getal in.</li>
<li>Reken uit wat <b>onder</b> de wortel staat.</li>
<li>Trek de <b>wortel</b> en rond af zoals gevraagd.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: snelheid = &radic;(20 &times; h)</h4><p>Bereken de snelheid als <b>h = 5</b>. Rond af op één decimaal.</p><div class="antwoord">Onder de wortel: 20 &times; 5 = <b>100</b>. &radic;100 = <b>10,0</b>.</div></div>`
+`<div class="call warn"><b>Rekenmachine:</b> na het wortelteken tik je alles in wat eronder hoort. Kom je <b>onder het wortelteken uit</b> met de <b>cursortoets</b>, pas dan gaat de rest van de som verder.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Wat reken je eerst uit bij een formule met een wortel?</p><p class="check-a">Alles wat <b>onder</b> het wortelteken staat.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (7.4)</b><ul class="lst">
<li>Eerst <b>onder</b> de wortel uitrekenen, dan de <b>wortel</b> trekken.</li>
<li>Gebruik de <b>cursortoets</b> om onder de wortel uit te komen.</li></ul></div>`},

{heading:'7.5 Periodieke grafiek',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>een <b>periodieke grafiek</b> herkennen</li>
<li>de <b>periode</b>, het <b>maximum</b> en het <b>minimum</b> aflezen</li></ul></div>`
+`<h5 class="sub">Een patroon dat terugkomt</h5>`
+`<div class="box"><h4>Periodiek</h4><p>Bij een <b>periodieke grafiek</b> herhaalt <b>hetzelfde patroon</b> zich steeds. Denk aan <b>eb en vloed</b> of de hoogte van een bakje in een <b>reuzenrad</b>. De tijd van één herhaling is de <b>periode</b>.</p></div>`
+`<div class="g2">`
+`<div class="box"><h4>Maximum</h4><p>De <b>hoogste</b> waarde van de grafiek.</p></div>`
+`<div class="box"><h4>Minimum</h4><p>De <b>laagste</b> waarde van de grafiek.</p></div></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: Fatma in het reuzenrad</h4><p>In de grafiek zijn <b>3 perioden</b> getekend.</p><div class="antwoord">Het <b>maximum</b> is <b>18 m</b>, het <b>minimum</b> is <b>0 m</b>. Eén periode is één <b>rondje</b> van het rad.</div></div>`
+`<div class="call waarom">Waarom is dat handig? Ken je <b>één periode</b>, dan weet je hoe de grafiek <b>verder</b> gaat: het patroon herhaalt zich gewoon.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Wat is de periode van een periodieke grafiek?</p><p class="check-a">De tijd van <b>één herhaling</b> van het patroon.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (7.5)</b><ul class="lst">
<li><b>Periodiek</b>: het patroon herhaalt zich.</li>
<li><b>Periode</b>: de tijd van één herhaling.</li>
<li><b>Maximum</b> = hoogste, <b>minimum</b> = laagste waarde.</li></ul></div>`}
],
terms:[
['Deelstreep','Een streep in een formule die aangeeft dat je eerst boven en onder de streep apart moet uitrekenen, voordat je deelt.',0],
['Breukentoets','De toets op de rekenmachine waarmee je berekeningen met een deelstreep kunt invoeren.',0],
['Rekenvolgorde','De vaste volgorde waarin je een berekening uitvoert: haakjes, machten/wortels, keer/delen, plus/min.',0],
['Haakjes wegwerken','Een haakje in een formule vervangen door elke term apart te vermenigvuldigen: a × (b + c) = a × b + a × c.',1],
['Kwadraat in een formule','Een deel van een formule dat je eerst moet kwadrateren volgens de rekenvolgorde.',2],
['Wortelteken','Het teken √ dat aangeeft dat je de wortel moet berekenen van wat eronder staat.',3],
['Periodieke grafiek','Een grafiek waarin hetzelfde patroon zich steeds op dezelfde manier herhaalt.',4],
['Periode','De lengte van één herhaling in een periodieke grafiek.',4],
['Formule','Een wiskundig recept waarmee je bij een gegeven waarde een uitkomst kunt berekenen.',1],
['Parabool','Een gebogen vorm die je terugziet in bijvoorbeeld boogconstructies in de architectuur.',2]
],
cards:[
['Wat doe je eerst bij een formule met een deelstreep?','Je berekent eerst alles boven en alles onder de streep apart, voordat je deelt.',0],
['Welke toets gebruik je op de rekenmachine bij een deelstreep?','De breukentoets.',0],
['Hoe werk je de haakjes weg in a × (b + c)?','a × (b + c) = a × b + a × c.',1],
['Wat bereken je eerst in de formule 3 × r²?','Eerst het kwadraat r², daarna pas vermenigvuldigen met 3.',2],
['Wat doe je eerst bij een formule met een wortelteken?','Je berekent eerst wat er onder het wortelteken staat, en trekt daarna de wortel.',3],
['Wat is een periodieke grafiek?','Een grafiek waarbij hetzelfde patroon zich steeds herhaalt.',4],
['Wat is de periode van een periodieke grafiek?','De lengte van één herhaling van het patroon.',4],
['Noem een voorbeeld van iets dat je met een periodieke grafiek kunt weergeven.','Bijvoorbeeld eb en vloed, of de stand van de zon op een dag.',4],
['Wat is de rekenvolgorde bij een berekening?','Eerst haakjes, dan machtsverheffen/worteltrekken, dan keer/delen, dan plus/min.',0],
['Bij de formule kosten (€) = 8 × (t + 5), wat bereken je eerst als t = 4?','Eerst wat in de haakjes staat: 4 + 5 = 9.',1]
],
quiz:[
['Wat moet je bij een deelstreep in een formule eerst doen?',['Meteen delen','Boven en onder de streep apart uitrekenen','Alleen boven de streep uitrekenen','De streep negeren'],1,'Je berekent eerst wat boven en wat onder de deelstreep staat, en deelt daarna pas.'],
['Welke toets gebruik je voor een deelstreep op de rekenmachine?',['De machttoets','De worteltoets','De breukentoets','De haakjestoets'],2,'Met de breukentoets kun je een berekening met een deelstreep invoeren.'],
['Werk de haakjes weg: 4 × (t + 6).',['4t + 6','4t + 24','t + 24','4t + 10'],1,'4 × (t + 6) = 4 × t + 4 × 6 = 4t + 24.'],
['Bij de formule kosten (€) = 8 × (t + 5): wat zijn de kosten als t = 4?',['€37','€52','€72','€92'],2,'4 + 5 = 9, 8 × 9 = 72.'],
['Bij de formule oppervlakte (m²) = 3 × r²: wat is de oppervlakte als r = 4?',['12','24','48','144'],2,'4² = 16, 3 × 16 = 48.'],
['Waarom bereken je bij 3 × r² eerst het kwadraat en dan pas de vermenigvuldiging?',['Dat maakt niet uit','Vanwege de rekenvolgorde: machtsverheffen gaat voor vermenigvuldigen','Omdat r altijd 4 is','Omdat een kwadraat altijd het laatst komt'],1,'Volgens de rekenvolgorde bereken je machten vóór vermenigvuldigen.'],
['Bij de formule snelheid = √(20 × h): wat is de snelheid als h = 5?',['4,0','10,0','100,0','20,0'],1,'20 × 5 = 100, √100 = 10.'],
['Wat bereken je bij een formule met een wortelteken eerst?',['Meteen de wortel','Wat er onder het wortelteken staat','Altijd een kwadraat','Niets, je gokt de uitkomst'],1,'Je berekent eerst wat onder het wortelteken staat, en trekt daarna de wortel.'],
['Wat is een periodieke grafiek?',['Een grafiek die altijd stijgt','Een grafiek waarin een patroon zich steeds herhaalt','Een grafiek zonder assen','Een grafiek met alleen negatieve getallen'],1,'Bij een periodieke grafiek herhaalt hetzelfde patroon zich steeds opnieuw.'],
['Welke situatie kun je het beste met een periodieke grafiek weergeven?',['De groei van een boom over 10 jaar','De hoogte van eb en vloed over een week','Het aantal inwoners van een stad','De prijs van een huis over de tijd'],1,'Eb en vloed herhalen zich steeds op dezelfde manier, dat past bij een periodieke grafiek.'],
['Wat is de periode van een periodieke grafiek?',['Het hoogste punt van de grafiek','De lengte van één herhaling van het patroon','Het beginpunt van de grafiek','De naam van de horizontale as'],1,'De periode is de lengte van één keer het herhaalde patroon.'],
['Werk de haakjes weg: 5 × (2b + 3).',['10b + 3','10b + 15','2b + 15','5b + 15'],1,'5 × (2b + 3) = 5 × 2b + 5 × 3 = 10b + 15.'],
['Wat is de juiste rekenvolgorde?',['Plus/min, dan keer/delen, dan haakjes, dan machten','Haakjes, dan machten/wortels, dan keer/delen, dan plus/min','Machten, dan haakjes, dan plus/min, dan keer/delen','Er is geen vaste volgorde'],1,'Eerst haakjes, dan machtsverheffen en worteltrekken, dan vermenigvuldigen/delen, dan optellen/aftrekken.'],
['Bereken (100 + 20) / (6 : 2).',['10','40','60','120'],1,'(100 + 20) = 120, (6 : 2) = 3, 120 : 3 = 40.'],
['Een paraboolboog in de architectuur heeft de vorm van...',['Een rechte lijn','Een cirkel','Een parabool','Een driehoek'],2,'Een paraboolboog is een boogconstructie in de vorm van een parabool.']
]
});
