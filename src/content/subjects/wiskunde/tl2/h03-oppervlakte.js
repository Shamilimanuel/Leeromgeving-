import { registerChapter } from '../../../registry.js';

/* Rebuilt 2026-09-24 to the recipe of Economie TL4 H1 (change 6). Added
   from the book: converting area units (x100 per step), the obtuse triangle
   with an extended side, splitting a vlieger, and "keep the answer on your
   calculator" before rounding. The drawing is unchanged. Terms, cards and
   quiz unchanged. */
registerChapter('wiskunde|tl|2|3', {
title:'Oppervlakte',
summary:[
{heading:'3.1 Oppervlakte rechthoek',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>de <b>oppervlakte</b> van een <b>rechthoek</b> berekenen</li>
<li><b>eenheden</b> van oppervlakte omrekenen</li></ul></div>`
+`<div class="box"><h4>Waar dit hoofdstuk over gaat</h4><p>Je berekent de <b>oppervlakte</b> van rechthoeken, driehoeken, parallellogrammen, andere <b>vierhoeken</b>, <b>cirkels</b> en <b>ruimtefiguren</b>, en de <b>omtrek</b> van een cirkel.</p></div>`
+`<h5 class="sub">De formule</h5>`
+`<div class="box"><h4>Lengte keer breedte</h4><p>De <b>oppervlakte</b> is hoe groot het <b>platte vlak</b> binnen de rand is. Je schrijft hem in <b>vierkante eenheden</b>, zoals <b>cm&sup2;</b> of <b>m&sup2;</b>.</p><p><b>oppervlakte rechthoek = lengte &times; breedte</b></p></div>`
+`<h5 class="sub">Eenheden gelijk maken</h5>`
+`<div class="call reken"><b>Stappenplan: oppervlakte rechthoek</b><ol class="num">
<li>Kijk in welke <b>eenheid</b> het antwoord moet.</li>
<li>Maak lengte en breedte <b>dezelfde eenheid</b>.</li>
<li>Reken <b>lengte &times; breedte</b>.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: 2 dm bij 15 cm</h4><p>Bereken de oppervlakte in <b>cm&sup2;</b>.</p><div class="antwoord">2 dm = <b>20 cm</b>. Oppervlakte = 20 &times; 15 = <b>300 cm&sup2;</b>.</div></div>`
+`<div class="call waarom">Waarom is het bij oppervlakte <b>&times; 100</b> per stap, en niet &times; 10? Een vierkant van 1 dm bij 1 dm is <b>10 cm bij 10 cm</b>, dus 1 dm&sup2; = 10 &times; 10 = <b>100 cm&sup2;</b>.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Hoeveel cm&sup2; is 1 dm&sup2;?</p><p class="check-a"><b>100 cm&sup2;</b>, want 10 cm &times; 10 cm.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (3.1)</b><ul class="lst">
<li><b>oppervlakte rechthoek = lengte &times; breedte</b>.</li>
<li>Eerst alles in <b>dezelfde eenheid</b>.</li>
<li>Oppervlakte-eenheden: <b>&times; 100</b> of <b>: 100</b> per stap.</li></ul></div>`},

{heading:'3.2 Oppervlakte driehoek',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>de <b>oppervlakte</b> van een <b>driehoek</b> berekenen</li>
<li>de oppervlakte van een <b>stomphoekige driehoek</b> berekenen</li></ul></div>`
+`<h5 class="sub">Een halve rechthoek</h5>`
+`<div class="box"><h4>Zijde en hoogte</h4><p>Om een driehoek past een <b>rechthoek</b>: de lengte is een <b>zijde</b>, de breedte is de <b>hoogte</b>. De driehoek is precies de <b>helft</b> van die rechthoek.</p><p><b>oppervlakte driehoek = 0,5 &times; zijde &times; hoogte</b></p></div>`
+`<div class="call warn"><b>Let op:</b> de <b>hoogte</b> staat altijd <b>loodrecht</b> op de zijde die erbij hoort. Zoek dus eerst uit <b>welke zijde</b> bij de gegeven hoogte hoort.</div>`
+`<div class="voorbeeld"><h4>Voorbeeld: hoogte AD = 8,5 cm</h4><p>De hoogte hoort bij zijde <b>BC = 16 cm</b>.</p><div class="antwoord">Oppervlakte = 0,5 &times; 16 &times; 8,5 = <b>68 cm&sup2;</b>.</div></div>`
+`<figure class='fig'><svg viewBox="0 0 340 175" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Rechthoek, driehoek en parallellogram met de basis en de hoogte aangegeven"><g fill="var(--accent)" fill-opacity=".16" stroke="var(--accent)" stroke-width="1.8" stroke-linejoin="round"><rect x="22" y="42" width="80" height="56"/><path d="M132 98 L212 98 L182 42 Z"/><path d="M242 98 L312 98 L332 42 L262 42 Z"/></g><g stroke="var(--txt)" stroke-width="1.5" stroke-dasharray="5 4" fill="none" opacity=".9"><path d="M182 42 V98"/><path d="M262 42 V98"/></g><polyline points="35,98 35,85 22,85" fill="none" stroke="var(--txt)" stroke-width="1.5" opacity=".8"/><polyline points="182,98 195,98 195,85" fill="none" stroke="var(--txt)" stroke-width="1.5" opacity=".8"/><polyline points="262,98 275,98 275,85" fill="none" stroke="var(--txt)" stroke-width="1.5" opacity=".8"/><g fill="var(--mut)" font-size="9.5" font-family="inherit" text-anchor="middle"><text x="62" y="112">lengte</text><text x="172" y="112">basis</text><text x="277" y="112">basis</text></g><g fill="var(--mut)" font-size="9.5" font-family="inherit"><text x="16" y="74" text-anchor="end">breedte</text><text x="188" y="74">hoogte</text><text x="268" y="74">hoogte</text></g><g fill="var(--txt)" font-size="10.5" font-weight="600" font-family="inherit" text-anchor="middle"><text x="62" y="140">rechthoek</text><text x="172" y="140">driehoek</text><text x="277" y="140">parallellogram</text></g><g fill="var(--accent)" font-size="10" font-family="inherit" text-anchor="middle"><text x="62" y="158">l &times; b</text><text x="172" y="158">&frac12; &times; b &times; h</text><text x="277" y="158">b &times; h</text></g></svg><figcaption>De <b>hoogte</b> staat altijd loodrecht op de basis &mdash; ook als hij buiten de figuur valt. Dat is bijna altijd waar het misgaat, niet in de formule zelf.</figcaption></figure>`
+`<h5 class="sub">Stomphoekige driehoek</h5>`
+`<div class="box"><h4>Zijde verlengen</h4><p>In een <b>stomphoekige driehoek</b> is één hoek <b>groter dan 90&deg;</b>. Soms valt de hoogte dan <b>buiten</b> de driehoek. Je <b>verlengt</b> de zijde en tekent de hoogte <b>loodrecht</b> op dat verlengstuk. De formule blijft <b>hetzelfde</b>.</p></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Hoe staat de hoogte ten opzichte van de zijde die erbij hoort?</p><p class="check-a"><b>Loodrecht</b>: ze maken een rechte hoek.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (3.2)</b><ul class="lst">
<li><b>oppervlakte driehoek = 0,5 &times; zijde &times; hoogte</b>.</li>
<li>De <b>hoogte</b> staat loodrecht op de zijde.</li>
<li><b>Stomphoekig</b>: verleng de zijde om de hoogte te vinden.</li></ul></div>`},

{heading:'3.3 Oppervlakte parallellogram',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>de <b>oppervlakte</b> van een <b>parallellogram</b> berekenen</li></ul></div>`
+`<h5 class="sub">De formule</h5>`
+`<div class="box"><h4>Twee driehoeken</h4><p>Met een <b>diagonaal</b> verdeel je een parallellogram in <b>twee even grote driehoeken</b>. Twee keer 0,5 &times; zijde &times; hoogte is gewoon <b>zijde &times; hoogte</b>.</p><p><b>oppervlakte parallellogram = zijde &times; hoogte</b></p></div>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Driehoek</h4><p><b>0,5</b> &times; zijde &times; hoogte</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Parallellogram</h4><p>zijde &times; hoogte, <b>zonder</b> 0,5</p></div></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: hoogte EF = 28 mm</h4><p>De hoogte hoort bij zijde BC. BC bestaat uit stukken van <b>21 mm</b> en <b>17 mm</b>.</p><div class="antwoord">BC = 21 + 17 = <b>38 mm</b>. Oppervlakte = 38 &times; 28 = <b>1064 mm&sup2;</b>.</div></div>`
+`<div class="call warn"><b>Neem niet de schuine zijde als hoogte.</b> De hoogte staat <b>loodrecht</b> op de zijde; dat zie je aan het <b>rechtehoekteken</b>.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Welke formule gebruik je voor een parallellogram?</p><p class="check-a"><b>zijde &times; bijbehorende hoogte</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (3.3)</b><ul class="lst">
<li><b>oppervlakte parallellogram = zijde &times; hoogte</b>.</li>
<li>Zijde en hoogte staan <b>loodrecht</b> op elkaar.</li></ul></div>`},

{heading:'3.4 Oppervlakte vierhoeken',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>de oppervlakte van een vierhoek berekenen met <b>verdelen</b></li>
<li>de oppervlakte van een vierhoek berekenen met <b>inlijsten</b></li></ul></div>`
+`<h5 class="sub">Verdelen</h5>`
+`<div class="box"><h4>In stukken knippen</h4><p>Veel vierhoeken kun je <b>verdelen</b> in <b>driehoeken</b> en <b>rechthoeken</b>. Bereken elk stuk <b>apart</b> en tel de oppervlaktes <b>op</b>. Een <b>vlieger</b> verdeel je bijvoorbeeld langs zijn <b>symmetrieas</b> in twee driehoeken.</p></div>`
+`<h5 class="sub">Inlijsten</h5>`
+`<div class="call reken"><b>Stappenplan: inlijsten</b><ol class="num">
<li>Teken een <b>rechthoek</b> die precies <b>om</b> de vierhoek past.</li>
<li>Bereken de oppervlakte van die <b>rechthoek</b>.</li>
<li>Bereken de <b>driehoeken</b> die <b>te veel</b> zijn.</li>
<li>Vierhoek = <b>rechthoek &minus; stukjes die te veel zijn</b>.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: vierhoek PQRS</h4><p>De rechthoek eromheen is <b>24 cm&sup2;</b>. De vier driehoeken die te veel zijn: <b>1,5</b>, <b>5</b>, <b>3</b> en <b>1,5 cm&sup2;</b>.</p><div class="antwoord">24 &minus; 1,5 &minus; 5 &minus; 3 &minus; 1,5 = <b>13 cm&sup2;</b>.</div></div>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Verdelen</h4><p>Stukken <b>optellen</b>. Handig als de vierhoek makkelijk in driehoeken valt.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Inlijsten</h4><p>Stukken <b>aftrekken</b>. Handig bij een <b>scheve</b> vierhoek op roosterpapier.</p></div></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Wat trek je bij inlijsten af van de rechthoek?</p><p class="check-a">De <b>stukjes die te veel zijn</b>, meestal driehoeken.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (3.4)</b><ul class="lst">
<li><b>Verdelen</b>: stukken apart berekenen en optellen.</li>
<li><b>Inlijsten</b>: rechthoek eromheen, stukjes die te veel zijn eraf.</li></ul></div>`},

{heading:'3.5 Omtrek en oppervlakte cirkel',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>de <b>omtrek</b> van een <b>cirkel</b> berekenen</li>
<li>de <b>oppervlakte</b> van een cirkel berekenen</li></ul></div>`
+`<h5 class="sub">Het getal &pi;</h5>`
+`<div class="box"><h4>Pi</h4><p>Deel je bij <b>elke</b> cirkel de <b>omtrek</b> door de <b>diameter</b>, dan krijg je ongeveer <b>3,14</b>. Heel precies is het 3,14159&hellip;: het getal <b>&pi;</b> (pi). Op je rekenmachine zit een <b>&pi;-toets</b>. De <b>diameter</b> is <b>2 keer de straal</b>.</p></div>`
+`<div class="g2">`
+`<div class="box"><h4>Omtrek</h4><p><b>omtrek cirkel = &pi; &times; diameter</b></p></div>`
+`<div class="box"><h4>Oppervlakte</h4><p><b>oppervlakte cirkel = &pi; &times; straal &times; straal</b></p></div></div>`
+`<div class="call warn"><b>Straal of diameter?</b> De omtrek gaat met de <b>diameter</b>, de oppervlakte met de <b>straal</b>. Lees goed wat er gegeven is.</div>`
+`<h5 class="sub">Rekenen met een cirkel</h5>`
+`<div class="voorbeeld"><h4>Voorbeeld: vierkant met een cirkel erin</h4><p>Een vierkant heeft zijden van <b>15 cm</b>. Er past precies een cirkel in. Bereken het stuk <b>buiten</b> de cirkel. Rond af op één decimaal.</p><div class="antwoord">Vierkant: 15 &times; 15 = <b>225 cm&sup2;</b>. Straal: 15 : 2 = <b>7,5 cm</b>. Cirkel: &pi; &times; 7,5 &times; 7,5 &asymp; 176,71&hellip; (laat dit op je rekenmachine staan). 225 &minus; 176,71&hellip; &asymp; <b>48,3 cm&sup2;</b>.</div></div>`
+`<div class="call waarom">Waarom het antwoord op je rekenmachine laten staan? Rond je <b>tussendoor</b> af, dan wordt je eindantwoord net <b>anders</b>. Rond pas <b>aan het eind</b> af.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Met welke formule bereken je de omtrek van een cirkel?</p><p class="check-a"><b>omtrek = &pi; &times; diameter</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (3.5)</b><ul class="lst">
<li><b>Omtrek = &pi; &times; diameter</b>.</li>
<li><b>Oppervlakte = &pi; &times; straal &times; straal</b>.</li>
<li><b>Diameter</b> = 2 &times; straal. Rond pas aan het eind af.</li></ul></div>`},

{heading:'3.6 Oppervlakte ruimtefiguren',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>de <b>oppervlakte</b> van een <b>ruimtefiguur</b> berekenen</li></ul></div>`
+`<h5 class="sub">Alle vlakken bij elkaar</h5>`
+`<div class="box"><h4>De buitenkant</h4><p>De <b>oppervlakte</b> van een ruimtefiguur is de oppervlakte van de hele <b>buitenkant</b>. Je berekent elk <b>zijvlak</b> apart en telt ze <b>op</b>. Bij een <b>balk</b> zijn de vlakken die <b>tegenover elkaar</b> liggen even groot.</p></div>`
+`<div class="call reken"><b>Stappenplan: oppervlakte balk</b><ol class="num">
<li><b>Voor- en achterkant</b>: 2 &times; (lengte &times; hoogte).</li>
<li><b>Linker- en rechterkant</b>: 2 &times; (breedte &times; hoogte).</li>
<li><b>Boven- en onderkant</b>: 2 &times; (lengte &times; breedte).</li>
<li>Tel alles <b>op</b>.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: balk van 4 bij 5 bij 15 cm</h4><p>Bereken de oppervlakte.</p><div class="antwoord">2 &times; (15 &times; 4) = 120. 2 &times; (15 &times; 5) = 150. 2 &times; (5 &times; 4) = 40. Samen <b>310 cm&sup2;</b>.</div></div>`
+`<div class="call warn"><b>Niet verwarren met inhoud.</b> Oppervlakte is de <b>buitenkant</b> in cm&sup2;; inhoud is wat er <b>in</b> past, in cm&sup3;.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Hoeveel vlakken heeft een balk?</p><p class="check-a"><b>Zes</b>, in drie paar die even groot zijn.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (3.6)</b><ul class="lst">
<li>Oppervlakte ruimtefiguur = alle <b>zijvlakken</b> bij elkaar.</li>
<li>Bij een balk: <b>drie paar</b> gelijke vlakken.</li></ul></div>`}
],
terms:[
['Oppervlakte','De grootte van het platte vlak binnen de rand van een figuur, in vierkante eenheden.',0],
['Hoogte (van een driehoek)','De lijn die loodrecht op een zijde van de driehoek staat en naar het tegenoverliggende hoekpunt loopt.',1],
['Inlijsten','Een manier om de oppervlakte van een vierhoek te berekenen door er een rechthoek omheen te tekenen.',3],
['Diameter','De afstand van rand tot rand van een cirkel, gemeten door het middelpunt.',4],
['Straal','De afstand van het middelpunt van een cirkel tot de rand; de helft van de diameter.',4],
['Pi (π)','Een vast getal, ongeveer 3,14, dat je gebruikt bij het berekenen van de omtrek en oppervlakte van een cirkel.',4],
['Omtrek','De lengte van de rand van een figuur helemaal rondom.',4],
['Ruimtefiguur','Een figuur met lengte, breedte én hoogte, zoals een balk of een kubus.',5],
['Zijvlak','Een van de platte vlakken waaruit de buitenkant van een ruimtefiguur bestaat.',5],
['Loodrecht','In een hoek van precies 90° op elkaar staand.',1],
['Vierkante eenheid','Een eenheid van oppervlakte, zoals cm² of m².',0]
],
cards:[
['Wat is de formule voor de oppervlakte van een rechthoek?','oppervlakte rechthoek = lengte × breedte.',0],
['Wat is de formule voor de oppervlakte van een driehoek?','oppervlakte driehoek = 0,5 × zijde × bijbehorende hoogte.',1],
['Wat is de formule voor de oppervlakte van een parallellogram?','oppervlakte parallellogram = zijde × bijbehorende hoogte.',2],
['Wat doe je bij inlijsten?','Je tekent een rechthoek om de vierhoek heen en trekt de te veel meegetelde driehoeken eraf.',3],
['Wat is de formule voor de omtrek van een cirkel?','omtrek cirkel = π × diameter.',4],
['Wat is de formule voor de oppervlakte van een cirkel?','oppervlakte cirkel = π × straal × straal.',4],
['Hoe bereken je de straal als je de diameter weet?','Je deelt de diameter door 2.',4],
['Hoe bereken je de oppervlakte van een ruimtefiguur?','Je berekent de oppervlakte van elk zijvlak en telt die bij elkaar op.',5],
['Waarom is de oppervlakte van een parallellogram gelijk aan zijde × hoogte?','Omdat een parallellogram bestaat uit twee even grote driehoeken, samen twee keer 0,5 × zijde × hoogte.',2],
['Wat is ongeveer de waarde van π?','Ongeveer 3,14.',4],
['Bij welke zijde van een driehoek hoort de hoogte die je gebruikt?','Bij de zijde waar de hoogte loodrecht op staat.',1]
],
quiz:[
['Wat is de oppervlakte van een rechthoek van 12 cm bij 5 cm?',['17 cm²','34 cm²','60 cm²','120 cm²'],2,'oppervlakte rechthoek = 12 × 5 = 60 cm².'],
['Een driehoek heeft zijde 16 cm en bijbehorende hoogte 8,5 cm. Wat is de oppervlakte?',['68 cm²','136 cm²','24,5 cm²','12,5 cm²'],0,'oppervlakte driehoek = 0,5 × 16 × 8,5 = 68 cm².'],
['Een parallellogram heeft zijde 38 mm en bijbehorende hoogte 28 mm. Wat is de oppervlakte?',['66 mm²','532 mm²','1064 mm²','2128 mm²'],2,'oppervlakte parallellogram = 38 × 28 = 1064 mm².'],
['Wat gebruik je om de oppervlakte van een onregelmatige vierhoek te berekenen?',['Inklemmen','De balansmethode','Inlijsten','Een cirkeldiagram'],2,'Bij inlijsten teken je een rechthoek om de vierhoek en trek je de teveel meegerekende stukken eraf.'],
['Wat is de omtrek van een cirkel met diameter 36 cm? Rond af op een geheel getal.',['36 cm','57 cm','113 cm','1018 cm'],2,'omtrek = π × 36 ≈ 113 cm.'],
['Wat is de oppervlakte van een cirkel met straal 10 cm? Rond af op een geheel getal.',['31 cm²','63 cm²','100 cm²','314 cm²'],3,'oppervlakte cirkel = π × 10 × 10 ≈ 314 cm².'],
['Hoe bereken je de straal van een cirkel met diameter 54 mm?',['54 × 2 = 108 mm','54 : 2 = 27 mm','54 × π','54 − 2 = 52 mm'],1,'De straal is de helft van de diameter: 54 : 2 = 27 mm.'],
['Een balk is 4 cm bij 5 cm bij 15 cm. Hoeveel zijvlakken heeft deze balk?',['4','5','6','8'],2,'Een balk heeft 6 zijvlakken: voor-, achter-, boven-, onder-, links- en rechterkant.'],
['Waarom tel je bij een balk de voorkant en de achterkant allebei apart mee?',['Ze zijn precies even groot maar toch losse vlakken van de buitenkant','Ze zijn nooit even groot','Alleen de voorkant telt mee','De achterkant telt dubbel'],0,'Tegenover elkaar liggende vlakken van een balk zijn even groot, maar horen wel allebei bij de buitenkant.'],
['Van vierhoek ABCD is met inlijsten een rechthoek van 24 cm² getekend. De te veel meegerekende driehoeken zijn samen 11 cm². Wat is de oppervlakte van ABCD?',['11 cm²','13 cm²','24 cm²','35 cm²'],1,'24 − 11 = 13 cm².'],
['Welke twee maten heb je minimaal nodig om de oppervlakte van een driehoek te berekenen?',['Twee zijden','Een zijde en de bijbehorende hoogte','Drie hoeken','De omtrek'],1,'oppervlakte driehoek = 0,5 × zijde × bijbehorende hoogte.'],
['Wat is de oppervlakte van een vierkant met zijde 9 cm?',['18 cm²','36 cm²','81 cm²','9 cm²'],2,'Een vierkant is ook een rechthoek: oppervlakte = 9 × 9 = 81 cm².'],
['Een balk heeft een voorkant van 60 cm² en een rechterkant van 75 cm². Hoe groot is de achterkant?',['15 cm²','60 cm²','75 cm²','135 cm²'],1,'De achterkant is even groot als de voorkant: 60 cm².'],
['Bij een parallellogram staan de zijde en de bijbehorende hoogte...',['evenwijdig aan elkaar','loodrecht op elkaar','altijd even lang','nooit loodrecht op elkaar'],1,'De hoogte staat loodrecht (90°) op de zijde waar hij bij hoort.'],
['Een cirkel heeft straal 7,5 cm. Wat is de oppervlakte? Rond af op één decimaal.',['23,6 cm²','47,1 cm²','176,7 cm²','706,9 cm²'],2,'oppervlakte cirkel = π × 7,5 × 7,5 ≈ 176,7 cm².']
]
});
