import { registerChapter } from '../../../registry.js';

/* Rebuilt 2026-09-24 to the recipe of Economie TL4 H1 (change 6), from the
   book scan. Also corrects 2.5: it described the omgekeerd evenredig verband
   (that is 4.1); in the book 2.5 is the exponentieel verband. The terms,
   cards and quiz questions that belonged to the old 2.5 are replaced to match. */
registerChapter('wiskunde|tl|4|2', {
title:'Verbanden',
summary:[
{heading:'2.1 Lineair verband',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>een <b>lineair verband</b> herkennen aan de <b>grafiek</b> en de <b>tabel</b></li>
<li>een <b>formule</b> maken bij een lineaire <b>stijging</b> en <b>daling</b></li></ul></div>`
+`<div class="box"><h4>Waar dit hoofdstuk over gaat</h4><p>Je leert vijf soorten <b>verbanden</b> herkennen en er formules bij maken: <b>lineair</b>, <b>kwadratisch</b>, <b>machtsverband</b>, <b>wortelverband</b> en <b>exponentieel</b>.</p></div>`
+`<h5 class="sub">Een rechte lijn</h5>`
+`<div class="g2">`
+`<div class="box"><h4>Herkennen</h4><p>De grafiek bij een <b>lineair verband</b> is een <b>rechte lijn</b>. In de tabel zie je een <b>regelmatige toename</b> of een <b>regelmatige afname</b>.</p></div>`
+`<div class="box"><h4>De formule</h4><p><b>uitkomst = begingetal + richtingscoëfficiënt &times; variabele</b></p><p>Het <b>begingetal</b> is de uitkomst bij 0. De <b>richtingscoëfficiënt</b> (rc) zegt hoeveel de uitkomst per stap verandert.</p></div></div>`
+`<div class="call reken"><b>Stappenplan: formule bij een lineair verband</b><ol class="num">
<li>Zoek het <b>begingetal</b>: de uitkomst bij 0.</li>
<li>Bereken de <b>rc</b>: <b>toename van de uitkomst / toename van de variabele</b>.</li>
<li>Vul in: <b>uitkomst = begingetal + rc &times; variabele</b>. Bij een <b>daling</b> is de rc negatief.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: een kaartje voor het pretpark</h4><p>In 2009 kostte een kaartje <b>&euro;19,50</b>, in 2024 <b>&euro;30</b>. De stijging is lineair. Neem t = 0 in 2009.</p><div class="antwoord">Toename: 30 &minus; 19,50 = &euro;10,50 in 15 jaar. rc = 10,50 / 15 = <b>0,7</b>. Formule: <b>P = 19,50 + 0,7t</b>.</div></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Hoe herken je een lineair verband aan de grafiek?</p><p class="check-a">De grafiek is een <b>rechte lijn</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (2.1)</b><ul class="lst">
<li><b>Lineair verband</b>: rechte lijn, regelmatige toename of afname.</li>
<li><b>uitkomst = begingetal + rc &times; variabele</b>.</li>
<li><b>rc</b> = toename van de uitkomst / toename van de variabele.</li></ul></div>`},

{heading:'2.2 Kwadratisch verband',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>een <b>kwadratisch verband</b> en een <b>parabool</b> herkennen</li>
<li>de <b>top</b> van een parabool bepalen met <b>inklemmen</b></li></ul></div>`
+`<h5 class="sub">De parabool</h5>`
+`<div class="box"><h4>Kwadratische formule</h4><p>In de formule <b>H = a&sup2; + 6</b> staat een <b>kwadraat</b> bij de variabele. Dit is een <b>kwadratische formule</b> en er is een <b>kwadratisch verband</b>. De grafiek heeft de vorm van een <b>parabool</b>.</p></div>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Dalparabool</h4><p>Heeft een <b>laagste punt</b>. Daarbij hoort een <b>minimum</b>.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Bergparabool</h4><p>Heeft een <b>hoogste punt</b>. Daarbij hoort een <b>maximum</b>.</p></div></div>`
+`<div class="term"><b>Top</b><span>Het hoogste punt van een bergparabool of het laagste punt van een dalparabool.</span></div>`
+`<h5 class="sub">Inklemmen</h5>`
+`<div class="call reken"><b>Stappenplan: de top vinden met inklemmen</b><ol class="num">
<li>Lees in de grafiek <b>ongeveer</b> af waar de top zit.</li>
<li>Bereken de uitkomst voor <b>minstens drie</b> waarden rond die plek.</li>
<li>Ga steeds <b>dichter bij elkaar</b> zitten, tot de uitkomst niet meer hoger (of lager) wordt.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: de Waalbrug</h4><p>Bij de boog van de Waalbrug bij Nijmegen hoort <b>h = 1,075a &minus; 0,0044a&sup2;</b>, met h de hoogte en a de afstand vanaf de linkerkant, in meters.</p><div class="antwoord">In de grafiek zit het hoogste punt ongeveer bij <b>a = 120</b>. Probeer a = 119, 120, 121, 122 en kijk waar h het grootst is. Zo klem je de <b>top</b> in.</div></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Bij welk soort parabool hoort een maximum?</p><p class="check-a">Bij een <b>bergparabool</b>: het hoogste punt.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (2.2)</b><ul class="lst">
<li>Een <b>kwadraat</b> bij de variabele: <b>kwadratisch verband</b>, grafiek is een <b>parabool</b>.</li>
<li><b>Dalparabool</b> = minimum, <b>bergparabool</b> = maximum; dat punt is de <b>top</b>.</li>
<li>De top vind je met <b>inklemmen</b>.</li></ul></div>`},

{heading:'2.3 Machtsverband',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>de <b>grafiek</b> bij een <b>machtsverband</b> tekenen</li>
<li><b>inklemmen</b> bij een formule met een <b>macht</b></li></ul></div>`
+`<h5 class="sub">Een macht bij de variabele</h5>`
+`<div class="g2">`
+`<div class="box"><h4>Machtsformule</h4><p>In <b>L = t&#8308; + 3</b> staat een <b>macht</b> bij de variabele t. Dit is een <b>machtsformule</b> en er is een <b>machtsverband</b>. De grafiek is een <b>vloeiende kromme</b>.</p></div>`
+`<div class="box"><h4>Grafiek tekenen</h4><p>Maak eerst een <b>tabel</b>: vul voor de variabele een paar waarden in en <b>bereken</b> de uitkomst. Maak zo nodig zelf een <b>verdeling</b> op de verticale as.</p></div></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: een tropische vis</h4><p>Bij het gewicht van een vis hoort <b>G = 0,2L&sup3;</b>, met G het gewicht in grammen en L de lengte in centimeters.</p><div class="antwoord">Bij L = 10: 0,2 &times; 10&sup3; = 0,2 &times; 1000 = <b>200 gram</b>.</div></div>`
+`<div class="call waarom">Een grote waarde terugzoeken, bijvoorbeeld de lengte bij <b>500 gram</b>? Dan <b>klem je in</b>: probeer lengtes tot de uitkomst net onder en net boven 500 ligt.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Welk verband hoort bij L = t&#8308; + 3?</p><p class="check-a">Een <b>machtsverband</b>: de variabele t staat met een macht in de formule.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (2.3)</b><ul class="lst">
<li>Een <b>macht</b> bij de variabele: <b>machtsverband</b>.</li>
<li>De grafiek is een <b>vloeiende kromme</b>; maak eerst een <b>tabel</b>.</li>
<li>Een onbekende waarde vind je met <b>inklemmen</b>.</li></ul></div>`},

{heading:'2.4 Wortelverband',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>de <b>grafiek</b> bij een <b>wortelverband</b> tekenen</li>
<li><b>inklemmen</b> bij een formule met een <b>wortel</b></li></ul></div>`
+`<h5 class="sub">Een wortel in de formule</h5>`
+`<div class="box"><h4>Wortelformule</h4><p>In <b>K = 3 + &radic;t</b> staat de variabele t <b>onder het wortelteken</b>. Dit is een <b>wortelformule</b> en er is een <b>wortelverband</b>. De grafiek is een <b>vloeiende kromme</b>, net als bij een machtsverband.</p></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: de schuine zijde</h4><p>Een rechthoekige driehoek heeft één rechthoekszijde van <b>10 cm</b>. Voor de schuine zijde geldt <b>&radic;(100 + a&sup2;)</b>, met a de andere rechthoekszijde.</p><div class="antwoord">Bij a = 3: &radic;(100 + 9) = &radic;109 &asymp; <b>10,4 cm</b>.</div></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: een kapotte koelkast</h4><p>De temperatuur in een kapotte koelkast is <b>T = 3 + 2&radic;t</b>, met t de tijd in uren. Boven <b>12 &deg;C</b> moet het eten weg.</p><div class="antwoord">Klem in: bij t = 20 is T = 3 + 2 &times; 4,47 &asymp; 11,9; bij t = 21 is T &asymp; 12,2. Na <b>21 uur</b> is het voor het eerst boven de 12 &deg;C.</div></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Waaraan herken je een wortelformule?</p><p class="check-a">De variabele staat <b>onder een wortelteken</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (2.4)</b><ul class="lst">
<li>De variabele <b>onder het wortelteken</b>: <b>wortelverband</b>.</li>
<li>De grafiek is een <b>vloeiende kromme</b>.</li>
<li>Met <b>inklemmen</b> vind je wanneer een grens voor het eerst wordt gehaald.</li></ul></div>`},

{heading:'2.5 Exponenti&euml;el verband',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>rekenen met <b>exponentiële formules</b></li>
<li>de <b>toename</b> of <b>afname</b> in procenten berekenen</li></ul></div>`
+`<h5 class="sub">Begingetal en groeifactor</h5>`
+`<div class="box"><h4>Exponentiële formule</h4><p>In <b>B = 250 &times; 1,035<sup>t</sup></b> is de variabele t een <b>exponent</b>. Dit is een <b>exponentiële formule</b>. <b>250</b> is het <b>begingetal</b>, <b>1,035</b> is de <b>groeifactor</b>.</p><p><b>aantal = begingetal &times; groeifactor<sup>tijd</sup></b></p></div>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Groeifactor boven de 1</h4><p><b>Exponentiële toename</b>. Groeifactor 1,24: elk jaar <b>24%</b> erbij.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Groeifactor onder de 1</h4><p><b>Exponentiële afname</b>. Groeifactor 0,96: elk jaar <b>4%</b> eraf.</p></div></div>`
+`<h5 class="sub">Toename in één jaar</h5>`
+`<div class="call reken"><b>Stappenplan: hoeveel komt er in een jaar bij?</b><ol class="num">
<li>Het jaar loopt van <b>1 januari</b> tot <b>1 januari</b> van het jaar erna.</li>
<li>Bereken het bedrag aan het <b>begin</b> en aan het <b>eind</b> van het jaar.</li>
<li>Trek ze <b>van elkaar af</b>. Rond tussenantwoorden op <b>één decimaal meer</b> af dan het eindantwoord.</li></ol></div>`
+`<div class="term"><b>Verdubbelingstijd</b><span>De tijd die nodig is om het begingetal te verdubbelen. Bij afname heet dit de halveringstijd.</span></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Een bedrag groeit met groeifactor 1,04 per jaar. Wat betekent dat?</p><p class="check-a">Het bedrag <b>stijgt elk jaar met 4%</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (2.5)</b><ul class="lst">
<li><b>aantal = begingetal &times; groeifactor<sup>tijd</sup></b>.</li>
<li>Groeifactor <b>boven 1</b> = toename, <b>onder 1</b> = afname.</li>
<li>Groei in een jaar: bedrag <b>eind</b> min bedrag <b>begin</b> van dat jaar.</li></ul></div>`},

{heading:'2.6 Exponenti&euml;le groei',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>uitleggen of er <b>exponentiële groei</b> is in een <b>tabel</b></li>
<li>de <b>groeifactor</b> berekenen bij een <b>percentage</b></li></ul></div>`
+`<h5 class="sub">Exponentieel of niet?</h5>`
+`<div class="box"><h4>Delingen maken</h4><p>Gaat de bovenste rij van de tabel steeds met <b>+1</b>? Deel dan elk getal in de onderste rij door het getal <b>ervoor</b>. Krijg je steeds <b>dezelfde uitkomst</b>, dan is er een <b>exponentieel verband</b>. Die uitkomst is de <b>groeifactor</b>.</p></div>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Wel exponentieel</h4><p>Het aantal <b>bacteriën</b> wordt elk uur <b>&times; 2</b>. De delingen geven steeds 2.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Niet exponentieel</h4><p>Geven de delingen <b>verschillende</b> uitkomsten, zoals bij de waarde van een scooter, dan is er <b>geen</b> exponentieel verband.</p></div></div>`
+`<h5 class="sub">Groeifactor bij een percentage</h5>`
+`<div class="tblwrap"><table class="tbl"><tr><th>situatie</th><th>groeifactor</th></tr><tr><td><b>toename</b> met p%</td><td>(100 + p) : 100</td></tr><tr><td><b>afname</b> met p%</td><td>(100 &minus; p) : 100</td></tr></table></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: een smeltende sneeuwpop</h4><p>Een sneeuwpop van <b>425 cm</b> wordt elk uur <b>5%</b> kleiner.</p><div class="antwoord">Groeifactor (100 &minus; 5) : 100 = <b>0,95</b>. Na 5 uur: <b>425 &times; 0,95&#8309;</b> &asymp; 329 cm.</div></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Een hoeveelheid neemt elk uur met 5% af. Wat is de groeifactor?</p><p class="check-a">(100 &minus; 5) : 100 = <b>0,95</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (2.6)</b><ul class="lst">
<li>Exponentieel in een tabel: <b>delingen</b> geven steeds <b>dezelfde uitkomst</b>.</li>
<li>Die uitkomst is de <b>groeifactor</b>.</li>
<li>Toename p%: <b>(100 + p) : 100</b>. Afname p%: <b>(100 &minus; p) : 100</b>.</li></ul></div>`}
],
terms:[
['lineair verband','een verband met een regelmatige toename of afname; de grafiek is een rechte lijn',0],
['richtingsco&euml;ffici&euml;nt','het getal dat aangeeft hoeveel de uitkomst per eenheid toeneemt of afneemt (de steilheid van de rechte lijn); afgekort rc',0],
['begingetal','de waarde van de uitkomst bij tijd of variabele gelijk aan 0',0],
['kwadratisch verband','een verband waarbij de formule een kwadraat (macht 2) van de variabele bevat; de grafiek is een parabool',1],
['parabool','de grafiek die hoort bij een kwadratische formule',1],
['top','het hoogste punt van een bergparabool of het laagste punt van een dalparabool',1],
['inklemmen','een onbekende waarde steeds nauwkeuriger benaderen door net te grote en net te kleine waarden te proberen',1],
['machtsverband','een verband waarbij de variabele in de formule met een macht voorkomt; de grafiek is een vloeiende kromme',2],
['wortelverband','een verband waarbij de variabele in de formule onder een wortelteken staat',3],
['exponenti&euml;le formule','een formule waarin de variabele een exponent is, zoals B = 250 &times; 1,035<sup>t</sup>',4],
['verdubbelingstijd','de tijd die nodig is om het begingetal te verdubbelen; bij afname heet dit de halveringstijd',4],
['exponenti&euml;le groei','groei waarbij een aantal steeds met hetzelfde percentage toe- of afneemt',5],
['groeifactor','het getal waarmee je vermenigvuldigt bij exponenti&euml;le groei; bij p% toename is de groeifactor (100+p):100',5],
['exponent','het getal dat aangeeft hoe vaak je met de groeifactor vermenigvuldigt (meestal de tijd)',5],
['dalparabool / bergparabool','een parabool met een laagste punt (dalparabool, minimum) of een hoogste punt (bergparabool, maximum)',1]
],
cards:[
['Hoe herken je een lineair verband aan de grafiek?','De grafiek is een rechte lijn.',0],
['Uit welke twee onderdelen bestaat de formule bij een lineair verband?','Het begingetal en de richtingsco&euml;ffici&euml;nt: uitkomst = begingetal + richtingsco&euml;ffici&euml;nt &times; variabele.',0],
['Hoe bereken je de richtingsco&euml;ffici&euml;nt bij een lineaire stijging?','Toename van de uitkomst gedeeld door de bijbehorende toename van de tijd of variabele.',0],
['Wat is de vorm van de grafiek bij een kwadratisch verband?','Een parabool.',1],
['Wat is het verschil tussen een dalparabool en een bergparabool?','Een dalparabool heeft een laagste punt (minimum), een bergparabool heeft een hoogste punt (maximum).',1],
['Hoe bepaal je de top van een parabool zonder grafische rekenmachine met een grafiekfunctie?','Met inklemmen: je probeert steeds waarden dichter bij het vermoedelijke maximum of minimum.',1],
['Wat is de vorm van de grafiek bij een machtsverband?','Een vloeiende kromme.',2],
['Waaraan herken je een wortelformule?','De variabele staat onder een wortelteken.',3],
['Wat is in B = 250 &times; 1,035<sup>t</sup> het begingetal en wat de groeifactor?','Het begingetal is 250, de groeifactor is 1,035.',4],
['Wat betekent een groeifactor onder de 1?','Exponenti&euml;le afname: het aantal wordt steeds met hetzelfde percentage kleiner.',4],
['Met hoeveel procent neemt iets per jaar toe bij groeifactor 1,24?','Met 24%, want 124% &minus; 100% = 24%.',4],
['Wat is de formule bij exponenti&euml;le groei?','uitkomst = begingetal &times; groeifactor tot de macht tijd',5],
['Hoe bereken je de groeifactor bij een toename van 12%?','(100 + 12) : 100 = 1,12.',5],
['Hoe bereken je de groeifactor bij een afname van 5%?','(100 &minus; 5) : 100 = 0,95.',5],
['Is een groeifactor groter dan 1 een teken van toename of afname?','Toename (exponenti&euml;le groei); een groeifactor kleiner dan 1 hoort bij afname.',5]
],
quiz:[
['De grafiek bij een verband is een rechte lijn. Wat voor verband is dit?',['Kwadratisch verband','Lineair verband','Wortelverband','Omgekeerd evenredig verband'],1,'De grafiek bij een lineair verband is een rechte lijn.'],
['Een kaartje kost in 2009 &euro;19,50 en in 2024 &euro;30, en de stijging is lineair. Wat is de richtingsco&euml;ffici&euml;nt?',['0,7','10,50','1,3','15'],0,'rc = (30 - 19,50) / (2024 - 2009) = 10,50 / 15 = 0,7.'],
['Wat is de vorm van de grafiek bij een kwadratisch verband?',['Een rechte lijn','Een hyperbool','Een parabool','Een trapgrafiek'],2,'De grafiek bij een kwadratische formule heeft de vorm van een parabool.'],
['Bij welk soort parabool hoort een maximum?',['Een dalparabool','Een bergparabool','Een lineaire grafiek','Een hyperbool'],1,'Bij het hoogste punt van een bergparabool hoort een maximum.'],
['Waarmee bepaal je de top van een parabool als je geen exacte formule voor de top hebt?',['Met de balansmethode','Met inklemmen','Met een cirkeldiagram','Met een boomdiagram'],1,'Je bepaalt de top van een parabool door steeds nauwkeuriger in te klemmen.'],
['Welk verband hoort bij de formule L = t&#8308; + 3?',['Lineair verband','Machtsverband','Omgekeerd evenredig verband','Boxplot'],1,'De variabele t staat met een macht (4) in de formule, dus dit is een machtsverband.'],
['Wat is de vorm van de grafiek bij een machtsverband of wortelverband?',['Een rechte lijn','Een vloeiende kromme','Een trapgrafiek','Een stippengrafiek'],1,'Zowel bij machtsverbanden als wortelverbanden is de grafiek een vloeiende kromme.'],
['In de formule K = 3 + &radic;t staat de variabele t...',['als macht','onder een wortelteken','in de noemer van een breuk','als exponent'],1,'Dit is een wortelformule: t staat onder het wortelteken.'],
['In de formule B = 250 &times; 1,035<sup>t</sup> is 250 het...',['begingetal','de groeifactor','de exponent','het percentage'],0,'250 is het begingetal: het bedrag op tijd 0. De groeifactor is 1,035.'],
['Bij de formule B = 30 &times; 0,96<sup>t</sup> is er...',['exponenti&euml;le toename','exponenti&euml;le afname','een lineaire daling','geen verband'],1,'De groeifactor 0,96 ligt onder de 1, dus er is exponenti&euml;le afname.'],
['Een bedrag groeit exponentieel met een groeifactor van 1,04 per jaar. Wat betekent dit?',['Het bedrag daalt elk jaar met 4%','Het bedrag stijgt elk jaar met 4%','Het bedrag stijgt elk jaar met 40%','Het bedrag blijft gelijk'],1,'Een groeifactor van 1,04 hoort bij een toename van 4% per jaar (100% + 4% = 104%, dus 1,04).'],
['Een hoeveelheid neemt elk uur met 5% af. Wat is de groeifactor?',['1,05','0,95','0,5','5'],1,'Bij een afname van 5% is de groeifactor (100 - 5) : 100 = 0,95.'],
['Wat is de formule bij exponenti&euml;le groei?',['uitkomst = begingetal + groeifactor &times; tijd','uitkomst = begingetal &times; groeifactor tot de macht tijd','uitkomst = begingetal / tijd','uitkomst = begingetal &times; tijd&sup2;'],1,'De formule bij exponenti&euml;le groei is uitkomst = begingetal &times; groeifactor^tijd.'],
['Een sneeuwpop van 425 cm smelt met 5% per uur. Welke berekening geeft de hoogte na 5 uur?',['425 - 5 &times; 5','425 &times; 0,95&#8309;','425 &times; 1,05&#8309;','425 : 5'],1,'Bij een afname van 5% per uur is de groeifactor 0,95; na 5 uur is de hoogte 425 &times; 0,95 tot de macht 5.'],
['De tijd in een tabel gaat steeds met 1 omhoog. Hoe zie je of er een exponentieel verband is?',['Je deelt elk getal door het getal ervoor; is de uitkomst steeds gelijk, dan is het exponentieel','Je telt de getallen op','Je kijkt of het verschil steeds gelijk is','Je tekent een cirkeldiagram'],0,'Bij exponenti&euml;le groei geven de delingen steeds dezelfde uitkomst: de groeifactor. Een steeds gelijk verschil hoort bij een lineair verband.']
]
});
