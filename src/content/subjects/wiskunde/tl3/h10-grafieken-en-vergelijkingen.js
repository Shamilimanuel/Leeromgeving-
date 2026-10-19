import { registerChapter } from '../../../registry.js';

/* Rebuilt 2026-09-25 to the recipe of Economie TL4 H1 (change 6). Added
   from the book: the two rental tents (10.2: sum 100 + 520w, difference
   60 - 20w), used again in 10.3 to make an equation of two formules
   (w = 3). Terms, cards and quiz unchanged. */
registerChapter('wiskunde|tl|3|10', {
title:'Grafieken en vergelijkingen',
summary:[
{heading:'10.1 Bijzondere formules en grafieken',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>de grafieken van <b>y = getal</b>, <b>x = getal</b>, <b>y = x</b> en <b>y = &minus;x</b> tekenen</li></ul></div>`
+`<div class="box"><h4>Waar dit hoofdstuk over gaat</h4><p>Je tekent <b>bijzondere grafieken</b>, maakt <b>somgrafieken</b> en <b>verschilgrafieken</b>, en lost <b>vergelijkingen</b> op met de <b>balansmethode</b> en met <b>inklemmen</b>.</p></div>`
+`<h5 class="sub">Rechte lijnen met één variabele</h5>`
+`<div class="tblwrap"><table class="tbl"><tr><th>Formule</th><th>Grafiek</th></tr><tr><td><b>y = getal</b>, bijv. y = 3</td><td><b>horizontale</b> lijn</td></tr><tr><td><b>x = getal</b>, bijv. x = 2</td><td><b>verticale</b> lijn</td></tr><tr><td><b>y = x</b></td><td>schuin omhoog door (0, 0), (1, 1), (2, 2)</td></tr><tr><td><b>y = &minus;x</b></td><td>schuin omlaag door (0, 0), (1, &minus;1), (&minus;1, 1)</td></tr></table></div>`
+`<div class="call waarom">Waarom is y = 3 <b>horizontaal</b>? Elk punt op die lijn heeft <b>y-coördinaat 3</b>, wat x ook is. Alle punten liggen dus op <b>dezelfde hoogte</b>.</div>`
+`<div class="call reken"><b>Stappenplan: zo'n grafiek tekenen</b><ol class="num">
<li>Kies een paar <b>x-waarden</b> (of y-waarden bij x = getal).</li>
<li>Zoek de bijbehorende <b>punten</b>.</li>
<li>Trek een <b>rechte lijn</b> door de punten.</li></ol></div>`
+`<div class="call warn"><b>Veelgemaakte fout:</b> y = getal en x = getal verwisselen. <b>y = getal</b>: overal dezelfde <b>hoogte</b>, dus horizontaal. <b>x = getal</b>: overal even ver naar <b>rechts</b>, dus verticaal.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Hoe loopt de grafiek van x = 2?</p><p class="check-a"><b>Verticaal</b>, door alle punten met x = 2.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (10.1)</b><ul class="lst">
<li><b>y = getal</b>: horizontaal. <b>x = getal</b>: verticaal.</li>
<li><b>y = x</b>: x en y gelijk. <b>y = &minus;x</b>: elkaars tegengestelde.</li></ul></div>`},

{heading:'10.2 Somgrafiek en verschilgrafiek',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>een <b>somformule</b> en een <b>verschilformule</b> maken</li>
<li>een <b>somgrafiek</b> en een <b>verschilgrafiek</b> tekenen</li></ul></div>`
+`<h5 class="sub">Formules optellen en aftrekken</h5>`
+`<div class="box"><h4>Som is plus, verschil is min</h4><p>Formules met <b>dezelfde variabelen</b> kun je <b>optellen</b> (<b>somformule</b>) of <b>aftrekken</b> (<b>verschilformule</b>). Je telt de <b>getallen</b> op of trekt ze af; de variabelen blijven hetzelfde.</p></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: twee tenten huren</h4><p>Tent 1: <b>huurprijs (&euro;) = 20 + 270w</b>. Tent 2: <b>huurprijs (&euro;) = 80 + 250w</b>. Hierin is w de tijd in weken.</p><div class="antwoord">Samen: 20 + 80 = 100 en 270 + 250 = 520, dus <b>huurprijs = 100 + 520w</b>. Tent 2 &minus; tent 1: 80 &minus; 20 = 60 en 250 &minus; 270 = &minus;20, dus <b>huurprijs = 60 &minus; 20w</b>.</div></div>`
+`<h5 class="sub">Zonder formule</h5>`
+`<div class="call reken"><b>Stappenplan: verschilgrafiek uit twee grafieken</b><ol class="num">
<li>Lees de twee grafieken af en zet de getallen in een <b>tabel</b>.</li>
<li>Reken per kolom het <b>verschil</b> uit (bij een somgrafiek de <b>som</b>).</li>
<li>Teken de nieuwe grafiek in <b>hetzelfde assenstelsel</b>.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: winst van een kiosk</h4><p>Een kiosk heeft elke dag <b>omzet</b> en <b>kosten</b>. Teken de winst: omzet &minus; kosten.</p><div class="antwoord">Per dag: <b>winst = omzet &minus; kosten</b>. Komt de verschilgrafiek <b>onder de horizontale as</b>, dan is er die dag <b>verlies</b>.</div></div>`
+`<div class="call waarom">Waarom zegt het snijpunt met de horizontale as iets? Daar is het verschil <b>0</b>: de twee oorspronkelijke grafieken zijn daar <b>even hoog</b>.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Wat is een verschilformule?</p><p class="check-a">Twee formules met dezelfde variabelen <b>van elkaar afgetrokken</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (10.2)</b><ul class="lst">
<li><b>Som</b> = optellen, <b>verschil</b> = aftrekken.</li>
<li>Zonder formule: eerst een <b>tabel</b>.</li>
<li>Verschilgrafiek op 0: de grafieken zijn daar <b>gelijk</b>.</li></ul></div>`},

{heading:'10.3 Vergelijkingen oplossen met de balansmethode',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>een vergelijking met de <b>variabele aan twee kanten</b> oplossen met de <b>balansmethode</b></li>
<li>een <b>vergelijking maken</b> van twee formules</li></ul></div>`
+`<h5 class="sub">Linkerlid en rechterlid</h5>`
+`<div class="box"><h4>Twee kanten</h4><p>Links van het = teken staat het <b>linkerlid</b>, rechts het <b>rechterlid</b>. De letter is de <b>variabele</b>. Bij de <b>balansmethode</b> doe je links en rechts <b>hetzelfde</b>, zodat de balans in evenwicht blijft.</p></div>`
+`<div class="call reken"><b>Stappenplan: balansmethode</b><ol class="num">
<li>Laat de <b>variabele</b> uit het <b>rechterlid</b> verdwijnen.</li>
<li>Laat de <b>losse getallen</b> uit het <b>linkerlid</b> verdwijnen.</li>
<li><b>Deel</b> door het getal vóór de variabele.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: &minus;3a + 2 = 6 + 5a</h4><p>Los op.</p><div class="antwoord">Beide kanten <b>&minus; 5a</b>: &minus;8a + 2 = 6. Beide kanten <b>&minus; 2</b>: &minus;8a = 4. Delen door <b>&minus;8</b>: <b>a = &minus;0,5</b>.</div></div>`
+`<h5 class="sub">Twee formules gelijkstellen</h5>`
+`<div class="voorbeeld"><h4>Voorbeeld: wanneer kosten de tenten evenveel?</h4><p>Tent 1: 20 + 270w. Tent 2: 80 + 250w.</p><div class="antwoord">Stel de rechterleden gelijk: <b>20 + 270w = 80 + 250w</b>. &minus; 250w: 20 + 20w = 80. &minus; 20: 20w = 60. : 20: <b>w = 3</b>. Na 3 weken kosten ze allebei 20 + 810 = <b>&euro;830</b>.</div></div>`
+`<div class="call warn"><b>Let op het minteken:</b> deel je door een <b>negatief</b> getal, dan klapt het teken van je antwoord om: 4 : &minus;8 = <b>&minus;0,5</b>.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Wat is stap 1 van de balansmethode?</p><p class="check-a">De <b>variabele</b> uit het <b>rechterlid</b> laten verdwijnen.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (10.3)</b><ul class="lst">
<li>Variabele rechts weg, losse getallen links weg, dan <b>delen</b>.</li>
<li>Twee formules: <b>rechterleden gelijkstellen</b>.</li>
<li>Links en rechts steeds <b>hetzelfde</b> doen.</li></ul></div>`},

{heading:'10.4 Oplossen met inklemmen',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>een vergelijking met een <b>macht</b> oplossen met <b>inklemmen</b></li></ul></div>`
+`<h5 class="sub">Proberen en insluiten</h5>`
+`<div class="box"><h4>Waarom inklemmen?</h4><p>Staat er een <b>macht</b> in een vergelijking, dan werkt de balansmethode niet. Je <b>probeert</b> steeds een ander getal en klemt de oplossing in tussen een getal dat <b>te weinig</b> en een getal dat <b>te veel</b> geeft.</p></div>`
+`<div class="call reken"><b>Stappenplan: inklemmen</b><ol class="num">
<li>Probeer een getal en reken uit.</li>
<li>Noteer of het <b>te weinig</b> of <b>te veel</b> is.</li>
<li>Kies het volgende getal <b>tussen</b> je grenzen.</li>
<li>Ga door tot de gevraagde <b>nauwkeurigheid</b>, en kies het getal dat het <b>dichtst</b> bij de uitkomst komt.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: 7b&sup3; = 786</h4><p>Los op in één decimaal.</p><div class="antwoord">b = 4,8: 7 &times; 4,8&sup3; = 774,144, <b>te weinig</b>. b = 4,9: 823,543, <b>te veel</b>. 786 ligt veel dichter bij 774 dan bij 824, dus <b>b &asymp; 4,8</b>.</div></div>`
+`<div class="call warn"><b>Laat je werk zien:</b> schrijf bij elk getal dat je probeert de <b>uitkomst</b> en of het te weinig of te veel is. Zo ziet de lezer tussen welke twee getallen de oplossing ligt.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Wanneer gebruik je inklemmen in plaats van de balansmethode?</p><p class="check-a">Als er een <b>macht</b> (of wortel) in de vergelijking staat.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (10.4)</b><ul class="lst">
<li><b>Macht</b> in de vergelijking: inklemmen.</li>
<li>Noteer steeds <b>te weinig</b> of <b>te veel</b>.</li>
<li>Kies het getal dat het <b>dichtst</b> bij de uitkomst komt.</li></ul></div>`}
],
terms:[
['Bijzondere grafiek','Een grafiek die hoort bij een formule met maar één variabele, zoals y = getal, x = getal, y = x of y = −x.',0],
['x-coördinaat','Het eerste getal van een punt (a, b) in een assenstelsel; geeft de plaats op de horizontale as aan.',0],
['y-coördinaat','Het tweede getal van een punt (a, b) in een assenstelsel; geeft de plaats op de verticale as aan.',0],
['Somformule','De formule die je krijgt door twee formules met dezelfde variabele bij elkaar op te tellen.',1],
['Somgrafiek','De grafiek die hoort bij een somformule.',1],
['Verschilformule','De formule die je krijgt door één formule van een andere formule (met dezelfde variabele) af te trekken.',1],
['Verschilgrafiek','De grafiek die hoort bij een verschilformule.',1],
['Linkerlid','Het deel van een vergelijking links van het =-teken.',2],
['Rechterlid','Het deel van een vergelijking rechts van het =-teken.',2],
['Variabele','De letter in een vergelijking of formule waarvan de waarde niet vastligt.',2],
['Balansmethode','Een methode om een vergelijking op te lossen door links en rechts van het =-teken steeds dezelfde bewerking uit te voeren.',2],
['Inklemmen','Een methode om een vergelijking met een macht of wortel op te lossen door steeds een ander getal te proberen, tot je dicht genoeg bij de oplossing bent.',3]
],
cards:[
['Welke soort lijn is de grafiek van y = 3?','Een horizontale lijn.',0],
['Welke soort lijn is de grafiek van x = 2?','Een verticale lijn.',0],
['Door welke punten loopt de grafiek van y = x?','Punten waarbij de x-coördinaat en de y-coördinaat gelijk zijn, zoals (0,0), (1,1) en (2,2).',0],
['Wat is een somformule?','De formule die ontstaat door twee formules met dezelfde variabele bij elkaar op te tellen.',1],
['Wat kun je aflezen bij een snijpunt van een verschilgrafiek met de horizontale as?','Op dat punt zijn de twee oorspronkelijke grafieken (formules) aan elkaar gelijk.',1],
['Wat is het linkerlid van een vergelijking?','Het deel links van het =-teken.',2],
['Wat is de eerste stap van de balansmethode?','Zorg dat de variabele uit het rechterlid verdwijnt.',2],
['Wat is de laatste stap van de balansmethode?','Deel door het getal dat voor de variabele staat.',2],
['Hoe maak je van twee formules een vergelijking?','Je stelt de rechterleden van beide formules aan elkaar gelijk.',2],
['Wanneer gebruik je inklemmen om een vergelijking op te lossen?','Bij vergelijkingen met een macht of een wortel, die je niet direct met de balansmethode kunt oplossen.',3],
['Hoe werkt inklemmen?','Je probeert steeds een ander getal in, totdat je zo dicht mogelijk bij de juiste uitkomst bent.',3]
],
quiz:[
['Welke soort grafiek hoort bij y = 5?',['Een verticale lijn','Een horizontale lijn','Een parabool','Een periodieke grafiek'],1,'Bij y = getal is de grafiek altijd een horizontale lijn.'],
['Welke soort grafiek hoort bij x = −3?',['Een horizontale lijn','Een verticale lijn','Een parabool','Een vloeiende kromme'],1,'Bij x = getal is de grafiek altijd een verticale lijn.'],
['Welk punt ligt op de grafiek van y = −x?',['(2, 2)','(2, −2)','(−2, −2)','(0, 5)'],1,'Bij y = −x zijn de x- en y-coördinaat elkaars tegengestelde, dus (2, −2) past.'],
['Jan verdient inkomsten (€) = 15 + 8,50t, Tara inkomsten (€) = 40 + 8t. Wat is de somformule Jan + Tara?',['inkomsten = 55 + 16,50t','inkomsten = 25 + 0,50t','inkomsten = 55 + 8t','inkomsten = 40 + 8,50t'],0,'Tel de begingetallen (15+40=55) en de rc\'s (8,50+8=16,50) apart op: inkomsten = 55 + 16,50t.'],
['Bij een verschilgrafiek omzet − kosten is de uitkomst op een bepaalde dag negatief. Wat betekent dat?',['Er is winst gemaakt','Er is verlies geleden','De omzet en kosten zijn gelijk','Dat kan niet'],1,'Is de winst (omzet − kosten) negatief, dan is er verlies.'],
['Wat is het rechterlid van de vergelijking 5b + 24 = 3b + 48?',['5b + 24','3b + 48','5b','48'],1,'Het rechterlid is het deel rechts van het =-teken: 3b + 48.'],
['Los op met de balansmethode: 5b + 24 = 3b + 48.',['b = 8','b = 12','b = 24','b = 36'],1,'5b − 3b = 48 − 24, dus 2b = 24, dus b = 12.'],
['Los op met de balansmethode: −3a + 2 = 6 + 5a.',['a = 0,5','a = −0,5','a = 1','a = −1'],1,'−8a + 2 = 6, dus −8a = 4, dus a = −0,5.'],
['Tuinbedrijf Buurman: kosten = 40 + 2,1a. Tuinbedrijf Groen: kosten = 75 + 2a. Bij welke a zijn de kosten gelijk?',['a = 3,5','a = 35','a = 350','a = 3500'],2,'40 + 2,1a = 75 + 2a → 0,1a = 35 → a = 350.'],
['Hoe maak je van twee formules met dezelfde variabele een vergelijking?',['Je telt de linkerleden op','Je stelt de rechterleden aan elkaar gelijk','Je vermenigvuldigt de rechterleden','Je trekt de linkerleden van elkaar af'],1,'Je neemt van beide formules het rechterlid en stelt die aan elkaar gelijk.'],
['Waarom kun je de vergelijking 7b³ = 786 niet meteen met de balansmethode oplossen?',['Omdat er een macht in staat','Omdat er een variabele in staat','Omdat er een getal in staat','Dat kan wel met de balansmethode'],0,'Bij een macht (zoals b³) gebruik je inklemmen in plaats van de balansmethode.'],
['Bij het inklemmen van 7b³ = 786 geeft b = 4,8 een uitkomst van 774,144 en b = 4,9 een uitkomst van 823,543. Wat is de beste oplossing?',['b = 4,8','b = 4,85','b = 4,9','b = 5,0'],0,'774,144 ligt dichter bij 786 dan 823,543, dus b = 4,8 is de beste oplossing.'],
['Wat doe je bij inklemmen als het eerste getal dat je invult te weinig geeft?',['Je stopt met rekenen','Je probeert een groter getal','Je probeert een kleiner getal','Je verandert de vergelijking'],1,'Geeft een getal te weinig, dan probeer je een groter getal om dichter bij de oplossing te komen.'],
['Een remweg (m) = 0,01s² met remweg 75 m. Welke vergelijking moet je oplossen om de snelheid s te vinden?',['0,01s² = 75','0,01s = 75','s² = 0,01 × 75','75 = 0,01 + s²'],0,'Je vult de remweg in de formule in: 0,01s² = 75, en lost dit op (bijvoorbeeld met inklemmen).'],
['Wat is de variabele in de vergelijking 8p − 40 = 50 + 3p?',['8','40','p','50'],2,'De letter p is de variabele in deze vergelijking.']
]
});
