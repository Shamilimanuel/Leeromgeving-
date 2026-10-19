import { registerChapter } from '../../../registry.js';

/* Rebuilt 2026-09-25 to the recipe of Economie TL4 H1 (change 6). Fixed:
   8.2 said the zero before the comma does not count; it does (the book:
   "voor het eerste cijfer zet je zoveel nullen als de negatieve exponent
   aangeeft": 0,0000000409 has 8 zeros, 4,09 x 10^-8). Added from the book:
   45 360 000 000 = 45,36 miljard in groups of three (8.1), 3,6 dagen and
   the kwartaal (8.3), and the verhouding 1 : 7 as fractions (8.5). Terms,
   cards and quiz unchanged. */
registerChapter('wiskunde|tl|3|8', {
title:'Getallen',
summary:[
{heading:'8.1 Grote getallen',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>grote getallen schrijven in <b>cijfers</b> en met de woorden <b>miljoen</b> of <b>miljard</b></li>
<li><b>rekenen</b> met grote getallen</li></ul></div>`
+`<div class="box"><h4>Waar dit hoofdstuk over gaat</h4><p>Je rekent met <b>grote</b> en <b>kleine getallen</b> en schrijft ze in de <b>wetenschappelijke notatie</b>. Je rekent <b>eenheden van tijd</b> en <b>snelheid</b> om en werkt met <b>verhoudingen</b>.</p></div>`
+`<h5 class="sub">Van cijfers naar woorden</h5>`
+`<div class="call reken"><b>Stappenplan: 45 360 000 000 in woorden</b><ol class="num">
<li>Verdeel het getal van <b>achter naar voren</b> in groepjes van <b>3 cijfers</b>: 45 | 360 | 000 | 000.</li>
<li>Het voorste groepje is <b>45 miljard</b> waard.</li>
<li>De cijfers erachter komen <b>achter de komma</b>: 45,360000000 miljard.</li>
<li>Laat de <b>nullen aan het eind</b> weg: <b>45,36 miljard</b>.</li></ol></div>`
+`<div class="tblwrap"><table class="tbl"><tr><th>Woord</th><th>Cijfers</th><th>Nullen</th></tr><tr><td><b>1 miljoen</b></td><td>1 000 000</td><td>6</td></tr><tr><td><b>1 miljard</b></td><td>1 000 000 000</td><td>9</td></tr></table></div>`
+`<h5 class="sub">Rekenen</h5>`
+`<div class="voorbeeld"><h4>Voorbeeld: kleding in Amsterdam</h4><p>Amsterdam had in 2022 <b>881 933</b> inwoners. Gemiddeld geeft iemand <b>&euro;1270</b> per jaar uit aan kleding. Hoeveel is dat samen, in miljard, op twee decimalen?</p><div class="antwoord">881 933 &times; 1270 = <b>1 120 054 910</b>. Groepjes van drie: 1 | 120 | 054 | 910, dus 1,120&hellip; miljard &asymp; <b>1,12 miljard euro</b>.</div></div>`
+`<div class="box"><h4>Eenheden van informatie</h4><p>Een ander woord voor informatie is <b>data</b>. Computers slaan data op in <b>byte</b>, <b>kilobyte</b>, <b>megabyte</b>, <b>gigabyte</b> en <b>terabyte</b>: hoe groter de eenheid, hoe meer <b>opslagcapaciteit</b>.</p></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Schrijf 89 340 000 met het woord miljoen.</p><p class="check-a"><b>89,34 miljoen</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (8.1)</b><ul class="lst">
<li>Groepjes van <b>3 cijfers</b>, van achter naar voren.</li>
<li><b>Miljoen</b> = 6 nullen, <b>miljard</b> = 9 nullen.</li>
<li>Geef het antwoord in de <b>gevraagde</b> vorm.</li></ul></div>`},

{heading:'8.2 Wetenschappelijke notatie',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li><b>grote</b> en <b>kleine</b> getallen schrijven in de <b>wetenschappelijke notatie</b></li>
<li>de notatie <b>voluit</b> schrijven</li></ul></div>`
+`<h5 class="sub">Grote getallen</h5>`
+`<div class="box"><h4>Getal tussen 1 en 10, keer een macht van 10</h4><p>In de <b>wetenschappelijke notatie</b> schrijf je een getal als <b>een getal tussen 1 en 10</b> &times; <b>een macht van 10</b>. Bijvoorbeeld 239 000 000 = <b>2,39 &times; 10<sup>8</sup></b>. De exponent zegt hoeveel plaatsen de komma <b>schuift</b>.</p></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: 8,45 &times; 10<sup>6</sup> voluit</h4><p>Schrijf voluit.</p><div class="antwoord">Exponent 6: de komma schuift <b>6 plaatsen naar rechts</b>. 8,45 &times; 10<sup>6</sup> = <b>8 450 000</b>.</div></div>`
+`<h5 class="sub">Kleine getallen</h5>`
+`<div class="box"><h4>Een negatieve exponent</h4><p>Ook een heel <b>klein</b> getal kun je zo schrijven, met een <b>negatieve exponent</b>. Je rekenmachine doet dat vanzelf als een antwoord niet op het scherm past: 0,004 : 250 000 000 = <b>1,6 &times; 10<sup>&minus;11</sup></b>. Voluit schuift de komma naar <b>links</b>.</p></div>`
+`<div class="call reken"><b>Stappenplan: klein getal voluit</b><ol class="num">
<li>Kijk naar de <b>negatieve exponent</b>, bijvoorbeeld &minus;8.</li>
<li>Zet <b>zoveel nullen</b> vóór het eerste cijfer, de nul vóór de komma <b>meegeteld</b>.</li>
<li>4,09 &times; 10<sup>&minus;8</sup> = <b>0,0000000409</b>: acht nullen.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: 0,0000000061808</h4><p>Schrijf in de wetenschappelijke notatie. Rond af op één decimaal.</p><div class="antwoord">Tel de nullen vóór de 6, de nul vóór de komma meegeteld: <b>9</b>. Dus 6,1808 &times; 10<sup>&minus;9</sup> &asymp; <b>6,2 &times; 10<sup>&minus;9</sup></b>.</div></div>`
+`<div class="call warn"><b>Veelgemaakte fout:</b> de nul <b>vóór de komma</b> vergeten te tellen. Dan kom je één uit: 10<sup>&minus;8</sup> in plaats van 10<sup>&minus;9</sup>.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Schrijf 239 000 000 in de wetenschappelijke notatie.</p><p class="check-a"><b>2,39 &times; 10<sup>8</sup></b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (8.2)</b><ul class="lst">
<li><b>Getal tussen 1 en 10 &times; 10<sup>n</sup></b>.</li>
<li>Groot getal: <b>positieve</b> exponent. Klein getal: <b>negatieve</b>.</li>
<li>Klein getal voluit: zoveel <b>nullen</b> als de exponent, de nul vóór de komma meegeteld.</li></ul></div>`},

{heading:'8.3 Eenheden van tijd',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li><b>eenheden van tijd</b> omrekenen</li>
<li>een <b>decimale tijd</b> omzetten naar uren en minuten</li></ul></div>`
+`<h5 class="sub">Uit je hoofd</h5>`
+`<div class="tblwrap"><table class="tbl"><tr><th>Eenheid</th><th>Is gelijk aan</th></tr><tr><td><b>1 millennium</b></td><td>1000 jaar</td></tr><tr><td><b>1 eeuw</b></td><td>100 jaar</td></tr><tr><td><b>1 jaar</b></td><td>4 kwartalen = 12 maanden = 52 weken = 365 dagen</td></tr><tr><td><b>1 schrikkeljaar</b></td><td>366 dagen</td></tr><tr><td><b>1 kwartaal</b></td><td>3 maanden = 13 weken</td></tr><tr><td><b>1 week</b></td><td>7 dagen</td></tr><tr><td><b>1 dag</b></td><td>24 uur</td></tr><tr><td><b>1 uur</b></td><td>60 minuten</td></tr><tr><td><b>1 minuut</b></td><td>60 seconden</td></tr></table></div>`
+`<h5 class="sub">Decimale tijd</h5>`
+`<div class="call reken"><b>Stappenplan: 3,6 dagen omrekenen</b><ol class="num">
<li>Hele deel apart: <b>3 dagen</b> + 0,6 dag.</li>
<li>0,6 dag &times; 24 = <b>14,4 uur</b>: 14 uur + 0,4 uur.</li>
<li>0,4 uur &times; 60 = <b>24 minuten</b>.</li>
<li>Samen: <b>3 dagen, 14 uur en 24 minuten</b>.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: Wessel fietst naar school</h4><p>Hij woont <b>9 km</b> van school, fietst <b>15 km/uur</b> en vertrekt om <b>08:15</b>.</p><div class="antwoord">9 : 15 = <b>0,6 uur</b> = 0,6 &times; 60 = <b>36 minuten</b>. 08:15 + 36 minuten = <b>08:51</b>.</div></div>`
+`<div class="call warn"><b>Veelgemaakte fout:</b> 3,4 uur is <b>niet</b> 3 uur en 4 minuten. 0,4 uur &times; 60 = 24, dus <b>3 uur en 24 minuten</b>.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Hoeveel maanden is 4,5 jaar?</p><p class="check-a">4 jaar en 0,5 &times; 12 = <b>6 maanden</b>, dus 54 maanden.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (8.3)</b><ul class="lst">
<li>Ken de <b>omrekeningen</b> uit je hoofd.</li>
<li>Decimaal deel apart omrekenen: <b>&times; 60</b>, &times; 24 of &times; 12.</li></ul></div>`},

{heading:'8.4 Eenheden van snelheid',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li><b>snelheid</b> berekenen in <b>m/s</b> en <b>km/uur</b></li>
<li>omrekenen tussen m/s en km/uur</li></ul></div>`
+`<h5 class="sub">Het schema</h5>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>m/s naar km/uur</h4><p><b>&times; 3,6</b></p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>km/uur naar m/s</h4><p><b>: 3,6</b></p></div></div>`
+`<div class="call waarom">Waarom 3,6? In een uur zitten <b>3600</b> seconden en een km is <b>1000</b> m. Eén m/s is dus 3600 m per uur = <b>3,6 km/uur</b>. Een km/uur-getal is daarom altijd het <b>grotere</b> getal.</div>`
+`<div class="call reken"><b>Stappenplan: gemiddelde snelheid in m/s</b><ol class="num">
<li>Reken de afstand om naar <b>meters</b>.</li>
<li>Reken de tijd om naar <b>seconden</b>.</li>
<li>Deel: <b>afstand (m) : tijd (s)</b>.</li>
<li>Voor km/uur: <b>&times; 3,6</b>.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: Jos loopt 39,5 km</h4><p>Zijn tijd is <b>02:14:50</b> (uren:minuten:seconden).</p><div class="antwoord">39,5 km = <b>39 500 m</b>. 2 &times; 3600 + 14 &times; 60 + 50 = <b>8090 s</b>. 39 500 : 8090 = 4,882&hellip; &asymp; <b>4,88 m/s</b>. &times; 3,6 &asymp; <b>17,6 km/uur</b>.</div></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Hoe reken je 10 m/s om naar km/uur?</p><p class="check-a">10 &times; 3,6 = <b>36 km/uur</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (8.4)</b><ul class="lst">
<li><b>m/s &times; 3,6 = km/uur</b>, <b>km/uur : 3,6 = m/s</b>.</li>
<li>m/s: eerst <b>meters</b> en <b>seconden</b>, dan delen.</li></ul></div>`},

{heading:'8.5 Verhoudingen',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>een <b>verhouding</b> lezen en als <b>breuk</b> schrijven</li>
<li>hoeveelheden berekenen met een <b>verhoudingstabel</b></li></ul></div>`
+`<h5 class="sub">Delen</h5>`
+`<div class="box"><h4>1 : 7</h4><p>Meng je <b>1 deel</b> frambozensiroop met <b>7 delen</b> water, dan is de verhouding <b>1 : 7</b> (&ldquo;1 staat tot 7&rdquo;). Een verhouding bestaat altijd uit <b>hele getallen</b>. Samen zijn het 1 + 7 = <b>8 delen</b>, dus de limonade is voor <b>1/8</b> siroop en <b>7/8</b> water.</p></div>`
+`<div class="call reken"><b>Stappenplan: verhoudingstabel</b><ol class="num">
<li>Zet de <b>delen</b> in de bovenste rij, met het <b>totaal</b> erbij.</li>
<li>Reken uit hoeveel <b>één deel</b> is: totale hoeveelheid : totaal aantal delen.</li>
<li>Vermenigvuldig <b>elk deel</b> met dat getal.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: Anneke maakt limonade</h4><p><b>500 mL</b>, van 1 deel siroop op 9 delen water.</p><div class="antwoord">Samen <b>10 delen</b>. Eén deel: 500 : 10 = <b>50 mL</b>. Siroop 1 &times; 50 = <b>50 mL</b>, water 9 &times; 50 = <b>450 mL</b>. Siroop is 1/10 = <b>10%</b>.</div></div>`
+`<div class="call warn"><b>Veelgemaakte fout:</b> bij 1 : 9 denken dat siroop 1/9 is. De breuk gaat over het <b>totaal</b>: 1 + 9 = 10 delen, dus <b>1/10</b>.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Welke breuken horen bij de verhouding 1 : 7?</p><p class="check-a"><b>1/8</b> en <b>7/8</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (8.5)</b><ul class="lst">
<li>Verhouding in <b>hele getallen</b>, zoals 1 : 7.</li>
<li>Breuk = deel : <b>totaal aantal delen</b>.</li>
<li>Percentage = die breuk <b>&times; 100%</b>.</li></ul></div>`}
],
terms:[
['Miljoen','Het getal 1 000 000.',0],
['Miljard','Het getal 1 000 000 000.',0],
['Eenheden van informatie','Eenheden om digitale opslagcapaciteit mee te meten, zoals byte, kilobyte, megabyte, gigabyte en terabyte.',0],
['Wetenschappelijke notatie','Een manier om heel grote of heel kleine getallen kort te schrijven: een getal tussen 1 en 10 vermenigvuldigd met een macht van 10.',1],
['Exponent','Het getal dat aangeeft met welke macht van 10 je vermenigvuldigt in de wetenschappelijke notatie.',1],
['Negatieve exponent','Een exponent kleiner dan 0; hoort bij de wetenschappelijke notatie van een klein getal (kleiner dan 1).',1],
['Millennium','Een tijdseenheid van 1000 jaar.',2],
['Eeuw','Een tijdseenheid van 100 jaar.',2],
['Schrikkeljaar','Een jaar van 366 dagen in plaats van 365 dagen.',2],
['Kilometer per uur (km/uur)','Een eenheid van snelheid: het aantal kilometers dat in één uur wordt afgelegd.',3],
['Meter per seconde (m/s)','Een eenheid van snelheid: het aantal meters dat in één seconde wordt afgelegd.',3],
['Verhoudingstabel','Een tabel waarin je delen van een verhouding en de bijbehorende hoeveelheden naast elkaar zet.',4]
],
cards:[
['Hoeveel is 1 miljard?','1 000 000 000.',0],
['Hoe schrijf je 239 000 000 in de wetenschappelijke notatie?','2,39 × 10⁸.',1],
['Wat betekent een negatieve exponent in de wetenschappelijke notatie?','Het gaat om een klein getal, kleiner dan 1.',1],
['Schrijf 4,09 × 10⁻⁸ voluit.','0,0000000409.',1],
['Hoeveel dagen heeft een jaar (geen schrikkeljaar)?','365 dagen.',2],
['Hoeveel minuten is 0,4 uur?','0,4 × 60 = 24 minuten.',2],
['Hoe reken je m/s om naar km/uur?','Vermenigvuldig met 3,6.',3],
['Hoe reken je km/uur om naar m/s?','Deel door 3,6.',3],
['Hoe bereken je de snelheid in m/s als je de afstand in meters en de tijd in seconden weet?','Snelheid = afstand : tijd.',3],
['Wat doe je met alle getallen in een verhoudingstabel om van delen naar hoeveelheden te gaan?','Je vermenigvuldigt ze allemaal met hetzelfde getal.',4],
['Hoe bereken je een percentage uit een verhouding?','(aantal delen van dat bestanddeel : totaal aantal delen) × 100%.',4]
],
quiz:[
['Hoeveel is 1 miljoen?',['1000','100 000','1 000 000','1 000 000 000'],2,'1 miljoen is 1 000 000.'],
['In 2022 had Duinrell 1,4 miljoen bezoekers. Hoeveel is dat in cijfers?',['14 000','140 000','1 400 000','14 000 000'],2,'1,4 miljoen = 1,4 × 1 000 000 = 1 400 000.'],
['Hoe schrijf je 239 000 000 in de wetenschappelijke notatie?',['2,39 × 10⁶','2,39 × 10⁷','2,39 × 10⁸','23,9 × 10⁷'],2,'239 000 000 = 2,39 × 10⁸: de komma schuift 8 plaatsen.'],
['Schrijf 3,8 × 10⁻⁶ voluit.',['3 800 000','0,0000038','0,000038','0,00000038'],1,'3,8 × 10⁻⁶ = 0,0000038 (zes nullen tot en met het eerste cijfer).'],
['Schrijf 0,0000813 in de wetenschappelijke notatie.',['8,13 × 10⁻⁵','8,13 × 10⁻⁴','8,13 × 10⁵','0,813 × 10⁻⁴'],0,'0,0000813 = 8,13 × 10⁻⁵: er staan 5 nullen voor het eerste cijfer (inclusief de nul voor de komma niet meegeteld apart, de exponent is −5).'],
['Hoeveel jaar is 1 eeuw?',['10 jaar','100 jaar','1000 jaar','12 jaar'],1,'1 eeuw is 100 jaar.'],
['Hoeveel minuten en seconden is 5,2 minuten?',['5 minuten en 2 seconden','5 minuten en 12 seconden','5 minuten en 20 seconden','5 minuten en 30 seconden'],1,'0,2 minuten = 0,2 × 60 = 12 seconden, dus 5,2 minuten = 5 minuten en 12 seconden.'],
['Jos loopt 39 500 m in 8090 seconden. Wat is zijn snelheid in m/s (twee decimalen)?',['3,88 m/s','4,88 m/s','5,88 m/s','48,8 m/s'],1,'39 500 : 8090 = 4,88 m/s (afgerond).'],
['Hoe reken je een snelheid in m/s om naar km/uur?',['Vermenigvuldig met 3,6','Deel door 3,6','Vermenigvuldig met 60','Deel door 60'],0,'Om van m/s naar km/uur te gaan vermenigvuldig je met 3,6.'],
['Een snelheid is 90 km/uur. Wat is dat in m/s?',['25 m/s','32,4 m/s','90 m/s','324 m/s'],0,'90 : 3,6 = 25 m/s.'],
['Bij het maken van metselspecie meng je 2 delen cement, 5 delen zand en 2 delen water. Hoeveel delen is dat totaal?',['7 delen','9 delen','10 delen','2 delen'],1,'2 + 5 + 2 = 9 delen totaal.'],
['Bij dezelfde metselspecie (2 cement : 5 zand : 2 water): hoeveel procent van de specie is zand? Rond af op één decimaal.',['22,2%','50,0%','55,6%','62,5%'],2,'5 van de 9 delen is zand: (5/9) × 100% ≈ 55,6%.'],
['Wat doe je met alle getallen in een verhoudingstabel om van delen naar milliliters te rekenen?',['Ze allemaal optellen','Ze allemaal met hetzelfde getal vermenigvuldigen','Ze allemaal door 100 delen','Willekeurig een getal kiezen'],1,'Je vermenigvuldigt alle getallen in de verhoudingstabel met hetzelfde getal.'],
['Welke eenheid gebruik je voor digitale opslagcapaciteit?',['Kilometer','Kilogram','Gigabyte','Kilowattuur'],2,'Gigabyte (net als byte, kilobyte, megabyte en terabyte) is een eenheid van digitale opslagcapaciteit (informatie).'],
['Wat is 1 miljard gedeeld door 1 miljoen?',['10','100','1000','10 000'],2,'1 000 000 000 : 1 000 000 = 1000.']
]
});
