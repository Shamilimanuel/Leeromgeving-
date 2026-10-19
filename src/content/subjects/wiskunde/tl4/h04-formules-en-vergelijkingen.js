import { registerChapter } from '../../../registry.js';

/* Rebuilt 2026-09-24 to the recipe of Economie TL4 H1 (change 6), from the
   book scan. Terms, cards and quiz unchanged. */
registerChapter('wiskunde|tl|4|4', {
title:'Formules en vergelijkingen',
summary:[
{heading:'4.1 Omgekeerd evenredig',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>een <b>omgekeerd evenredig verband</b> herkennen</li>
<li>de <b>grafiek</b> tekenen: een <b>hyperbool</b></li></ul></div>`
+`<div class="box"><h4>Waar dit hoofdstuk over gaat</h4><p>Je werkt met <b>omgekeerd evenredige verbanden</b>, <b>stippen-</b> en <b>trapgrafieken</b>, <b>formules met tijd</b>, formules bij <b>hetzelfde verband</b>, en je lost <b>vergelijkingen</b> op met de <b>balansmethode</b> en met <b>inklemmen</b>.</p></div>`
+`<h5 class="sub">n keer zo groot, n keer zo klein</h5>`
+`<div class="g2">`
+`<div class="box"><h4>Het verband</h4><p>Een band voor het schoolfeest kost <b>&euro;600</b>. Per leerling betaal je <b>B = 600 / a</b>. Worden het <b>4 keer zo veel</b> leerlingen, dan wordt het bedrag <b>4 keer zo klein</b>. Dat is een <b>omgekeerd evenredig verband</b>.</p></div>`
+`<div class="box"><h4>De grafiek</h4><p>De grafiek is een <b>hyperbool</b>. Het punt <b>(10, 40)</b> betekent: bij 10 leerlingen betaal je &euro;40. Het punt <b>(40, 10)</b>: bij 40 leerlingen &euro;10.</p></div></div>`
+`<div class="call waarom">Waarom mag a <b>niet 0</b> zijn? Dan moet je <b>delen door 0</b>, en dat kan niet. Voor a = 0 heeft de formule <b>geen betekenis</b>.</div>`
+`<div class="voorbeeld"><h4>Voorbeeld: een foodtruck huren</h4><p>Bij het huren van een foodtruck hoort <b>B = 3000 / a</b>, met B het bedrag per medewerker en a het aantal medewerkers.</p><div class="antwoord">Bij 50 medewerkers: 3000 / 50 = <b>&euro;60</b> per persoon.</div></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Waarom heeft B = 3000 / a geen betekenis voor a = 0?</p><p class="check-a">Omdat je dan zou moeten <b>delen door 0</b>, en dat kan niet.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (4.1)</b><ul class="lst">
<li><b>Omgekeerd evenredig</b>: n keer zo groot geeft n keer zo klein.</li>
<li>De grafiek is een <b>hyperbool</b>.</li>
<li>Je kunt <b>niet delen door 0</b>.</li></ul></div>`},

{heading:'4.2 Stippengrafiek en trapgrafiek',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>een <b>stippengrafiek</b> aflezen</li>
<li>een <b>trapgrafiek</b> aflezen</li></ul></div>`
+`<h5 class="sub">Twee soorten grafieken</h5>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Stippengrafiek</h4><p>Alleen <b>losse punten</b>, <b>geen lijn</b> ertussen. Je kunt alleen <b>hele</b> dingen kopen: één reep chocola kost &euro;0,50, twee repen &euro;1.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Trapgrafiek</h4><p>Alleen <b>horizontale lijnen</b> die in <b>treden</b> omhoog gaan. De treden zitten <b>niet aan elkaar vast</b>. Binnen een trede blijft de uitkomst <b>hetzelfde</b>.</p></div></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: een scooter huren</h4><p>Van <b>0 tot 2 uur</b> kost het &euro;25, van <b>2 tot 4 uur</b> &euro;35, van <b>4 tot 8 uur</b> &euro;55.</p><div class="antwoord">Elke trede is één <b>prijs</b> voor een hele periode. Huur je 3 uur, dan zit je op de tweede trede: <b>&euro;35</b>.</div></div>`
+`<div class="call warn"><b>Let op de randen van een trede.</b> Kijk goed bij welke trede het <b>precieze grensgetal</b> hoort, bijvoorbeeld bij het gewicht van een brief en het aantal postzegels.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Wanneer teken je een stippengrafiek in plaats van een lijn?</p><p class="check-a">Als alleen <b>losse (hele) waarden</b> mogelijk zijn, bijvoorbeeld omdat je alleen hele producten kunt kopen.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (4.2)</b><ul class="lst">
<li><b>Stippengrafiek</b>: losse punten, geen lijn.</li>
<li><b>Trapgrafiek</b>: horizontale treden die niet aan elkaar vastzitten.</li>
<li>Binnen een trede is de uitkomst <b>hetzelfde</b>.</li></ul></div>`},

{heading:'4.3 Formules en tijd',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li><b>formules</b> gebruiken om <b>voorspellingen</b> te doen</li>
<li>de <b>tijd</b> bepalen met een <b>grafiek</b></li></ul></div>`
+`<h5 class="sub">Terug in de tijd</h5>`
+`<div class="box"><h4>Negatieve tijd</h4><p>Bij een grafiek over tijd kun je de horizontale as <b>naar links</b> doortrekken. Daar staan <b>negatieve</b> getallen: die betekenen dat je <b>teruggaat in de tijd</b> vanaf t = 0.</p></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: hondenvoer</h4><p>De voorraad is <b>V = 13 &minus; 0,4t</b>, in kilogram, met t in dagen en <b>t = 0 op 5 juli</b>.</p><div class="antwoord">t = &minus;2 is <b>2 dagen vóór</b> 5 juli: <b>3 juli</b>. t = 4 is <b>9 juli</b>.</div></div>`
+`<h5 class="sub">Voorspellen</h5>`
+`<div class="box"><h4>Een formule bij echte gegevens</h4><p>Door stippen van echte metingen, zoals de gemiddelde <b>lengte van 19-jarigen</b> per jaar, kun je een <b>rechte lijn</b> trekken. Bij die lijn hoort een <b>lineaire formule</b>. Niet alle stippen liggen precies op de lijn, maar met de formule kun je goed <b>voorspellen</b>.</p></div>`
+`<div class="call reken"><b>Stappenplan: welke datum hoort bij een waarde?</b><ol class="num">
<li><b>Verleng</b> de grafiek of los de vergelijking op.</li>
<li>Lees de <b>t</b> af die bij de waarde hoort.</li>
<li>Reken t om naar een <b>datum</b>, vanaf de dag waarop t = 0 is.</li></ol></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Wat betekent een negatieve waarde van t in een formule met tijd?</p><p class="check-a">Dat je <b>teruggaat in de tijd</b>, van vóór t = 0.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (4.3)</b><ul class="lst">
<li><b>Negatieve t</b> = terug in de tijd vanaf t = 0.</li>
<li>Met een formule kun je <b>voorspellen</b>, ook al kloppen echte metingen niet precies.</li>
<li>Een datum vind je door t af te lezen en <b>om te rekenen</b>.</li></ul></div>`},

{heading:'4.4 Formules bij hetzelfde verband',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>bepalen of twee formules <b>hetzelfde verband</b> beschrijven</li></ul></div>`
+`<h5 class="sub">Controleren met getallen</h5>`
+`<div class="box"><h4>Wat betekent het?</h4><p>Twee formules beschrijven <b>hetzelfde verband</b> als ze bij <b>elk getal</b> dezelfde paren waarden geven. Je laat dat zien met <b>berekeningen</b>.</p></div>`
+`<div class="call reken"><b>Stappenplan: hetzelfde verband?</b><ol class="num">
<li>Kies een getal en vul het in de <b>eerste formule</b> in.</li>
<li>Vul de uitkomst in de <b>tweede formule</b> in. Krijg je het <b>begingetal</b> terug?</li>
<li>Doe het nog een keer met een <b>ander getal</b>. Klopt het <b>twee keer</b>, dan is het hetzelfde verband.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: B = 15 + 2a en a = (B &minus; 15) / 2</h4><p>Kies eerst <b>a = 5</b>, daarna <b>a = 10</b>.</p><div class="antwoord">a = 5 geeft B = 25, en B = 25 geeft a = (25 &minus; 15) / 2 = <b>5</b>. a = 10 geeft B = 35, en B = 35 geeft a = <b>10</b>. Het klopt twee keer: <b>hetzelfde verband</b>.</div></div>`
+`<div class="call waarom">Waarom <b>twee</b> keer controleren? Twee formules kunnen toevallig bij <b>één getal</b> kloppen. Bij een tweede getal zie je of het echt <b>altijd</b> klopt.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Hoe controleer je of twee formules hetzelfde verband beschrijven?</p><p class="check-a">Vul een getal in de eerste formule in, vul de uitkomst in de tweede in en kijk of je het <b>oorspronkelijke getal</b> terugkrijgt. Herhaal met een <b>ander getal</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (4.4)</b><ul class="lst">
<li><b>Hetzelfde verband</b>: bij elk getal dezelfde paren waarden.</li>
<li>Invullen, <b>terugrekenen</b>, en het begingetal terugkrijgen.</li>
<li>Controleer met <b>twee</b> verschillende getallen.</li></ul></div>`},

{heading:'4.5 Vergelijkingen oplossen',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>een <b>vergelijking</b> oplossen met de <b>balansmethode</b></li>
<li>een vergelijking oplossen met <b>inklemmen</b></li></ul></div>`
+`<h5 class="sub">De balansmethode</h5>`
+`<div class="box"><h4>Als een weegschaal</h4><p>Een <b>vergelijking</b> is als een <b>weegschaal</b> in evenwicht. Doe je aan <b>beide kanten</b> van het is-teken <b>hetzelfde</b>, dan blijft het in balans. Ga door tot de variabele <b>alleen</b> staat.</p></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: 7a + 9 = 5a + 3</h4><p>Werk stap voor stap aan <b>beide kanten</b>.</p><div class="antwoord">&minus;5a: 2a + 9 = 3. &nbsp;&minus;9: 2a = &minus;6. &nbsp;: 2: <b>a = &minus;3</b>.</div></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: wanneer verdienen ze evenveel?</h4><p>Spelers van twee clubs verdienen <b>25 + 0,5k</b> en <b>75 + 0,3k</b> euro, met k het aantal verkochte kaartjes. Los op: <b>25 + 0,5k = 75 + 0,3k</b>.</p><div class="antwoord">&minus;0,3k: 25 + 0,2k = 75. &nbsp;&minus;25: 0,2k = 50. &nbsp;: 0,2: <b>k = 250</b>. Dan verdienen ze allebei <b>&euro;150</b>.</div></div>`
+`<h5 class="sub">Inklemmen</h5>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Balansmethode</h4><p>Bij een <b>lineaire</b> vergelijking: alleen a en getallen, <b>geen kwadraat</b>.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Inklemmen</h4><p>Bij een <b>kwadraat</b>, een <b>wortel</b> of een <b>macht</b>. Probeer waarden tot de uitkomst net te veel en net te weinig is.</p></div></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: een bungeejump</h4><p>De hoogte is <b>h = t&sup2; &minus; 7t + 16</b>. Wanneer is Marleen op <b>8 m</b>?</p><div class="antwoord">t = 1,4 geeft 8,16 (<b>net te veel</b>), t = 1,5 geeft 7,75 (<b>net te weinig</b>). Dus na ongeveer <b>1,4 seconde</b>, en een tweede keer rond <b>5,6 seconde</b>.</div></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Wanneer gebruik je inklemmen in plaats van de balansmethode?</p><p class="check-a">Bij een vergelijking met een <b>kwadraat</b>, <b>wortel</b> of <b>macht</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (4.5)</b><ul class="lst">
<li><b>Balansmethode</b>: aan beide kanten hetzelfde doen, tot de variabele alleen staat.</li>
<li>Waar twee grafieken <b>snijden</b>, zijn de uitkomsten <b>gelijk</b>: los de vergelijking op.</li>
<li><b>Inklemmen</b> bij een kwadraat, wortel of macht.</li></ul></div>`}
],
terms:[
['omgekeerd evenredig verband','een verband waarbij de ene variabele n keer zo klein wordt als de andere n keer zo groot wordt',0],
['stippengrafiek','een grafiek die alleen uit losse punten bestaat, zonder verbindende lijn, bijvoorbeeld omdat alleen hele aantallen mogelijk zijn',1],
['trapgrafiek','een grafiek die bestaat uit horizontale lijnstukken (treden) die bij een volgend interval springen naar een andere waarde',1],
['trede','een horizontaal lijnstuk in een trapgrafiek dat een vaste waarde binnen een interval aangeeft',1],
['negatieve tijd','een negatieve waarde voor t in een formule, die betekent dat je teruggaat in de tijd ten opzichte van t = 0',2],
['hetzelfde verband','twee formules die, ongeacht welk getal je invult, altijd bij elkaar horende waarden opleveren',3],
['vergelijking','een gelijkheid met een onbekende (variabele) die je moet oplossen',4],
['balansmethode','een methode om een vergelijking op te lossen door aan beide kanten van het is-teken dezelfde bewerking uit te voeren',4],
['linkerlid / rechterlid','het deel van de vergelijking links respectievelijk rechts van het is-teken',4],
['inklemmen','een oplosmethode waarbij je steeds nauwkeuriger een waarde net te veel en net te weinig probeert om de oplossing te benaderen',4],
['kwadratische vergelijking','een vergelijking waarin de onbekende met een kwadraat voorkomt, meestal opgelost met inklemmen',4],
['begingetal','de waarde van een formule bij tijd of variabele gelijk aan 0',2],
['richtingsco&euml;ffici&euml;nt','het getal dat aangeeft hoeveel de uitkomst per eenheid van tijd of variabele verandert',2],
['variabele','een letter in een formule die voor verschillende getallen kan staan',0],
['interval','een deel van de as tussen twee grenzen, waarbinnen bijvoorbeeld een trede van een trapgrafiek geldt',1]
],
cards:[
['Waarom heeft de formule B = 3000/a geen betekenis voor a = 0?','Omdat je dan zou moeten delen door 0, en dat kan niet.',0],
['Wanneer teken je een stippengrafiek in plaats van een lijn?','Als alleen losse (hele) waarden mogelijk zijn, bijvoorbeeld omdat je alleen hele producten kunt kopen.',1],
['Hoe zie je een trede in een trapgrafiek?','Als een horizontaal lijnstuk dat binnen een interval een vaste waarde aangeeft.',1],
['Wat betekent een negatieve waarde van t in een formule met tijd?','Dat je teruggaat in de tijd ten opzichte van t = 0.',2],
['Hoe controleer je of twee formules hetzelfde verband beschrijven?','Je vult een getal in de eerste formule in, berekent de uitkomst, vult die in de tweede formule in en kijkt of je het oorspronkelijke getal terugkrijgt (en herhaalt dit met een ander getal).',3],
['Wat is de balansmethode?','Een methode om een vergelijking op te lossen door aan beide kanten van het is-teken dezelfde bewerking uit te voeren.',4],
['Los op met de balansmethode: 7a + 9 = 5a + 3. Wat is a?','a = -3.',4],
['Wanneer gebruik je inklemmen in plaats van de balansmethode?','Bij een vergelijking met een kwadraat, wortel of macht, die je niet met eenvoudige balansstappen kunt oplossen.',4],
['Wat doe je bij inklemmen als een uitkomst \'te veel\' is?','Je probeert een net kleinere waarde om dichter bij de oplossing te komen.',4],
['Wat is het linkerlid van een vergelijking?','Het deel van de vergelijking links van het is-teken.',4],
['Wat gebeurt er als je bij de balansmethode aan beide kanten hetzelfde getal aftrekt?','De vergelijking blijft kloppen (in balans); je vereenvoudigt de vergelijking zonder de oplossing te veranderen.',4],
['Waarom kun je bij een omgekeerd evenredig verband nooit delen door de variabele als die 0 is?','Omdat delen door 0 wiskundig niet gedefinieerd is.',0],
['Wat teken je NIET tussen de punten van een stippengrafiek?','Een verbindende lijn.',1],
['Hoe vind je bij een formule met tijd de datum die bij een bepaalde waarde hoort?','Je verlengt de grafiek (of lost de vergelijking op), leest de bijbehorende t-waarde af en rekent die om naar een datum.',2],
['Wat controleer je bij het tweede getal wanneer je nagaat of twee formules hetzelfde verband beschrijven?','Of het weer klopt, dus of je opnieuw het oorspronkelijke getal terugkrijgt.',3]
],
quiz:[
['Bij de formule B = 3000/a: voor welke waarde van a heeft de formule geen betekenis?',['a = 1','a = 0','a = 100','a = 3000'],1,'Voor a = 0 zou je moeten delen door 0, dat kan niet.'],
['Wanneer gebruik je een stippengrafiek?',['Als er een lineair verband is','Als alleen hele aantallen mogelijk zijn','Als het verband exponentieel is','Als je een hoek moet berekenen'],1,'Een stippengrafiek gebruik je als alleen losse, hele waarden voorkomen.'],
['Wat kenmerkt een trapgrafiek?',['Een vloeiende kromme','Horizontale lijnstukken (treden) die springen naar een andere waarde','Een rechte lijn door de oorsprong','Een parabool'],1,'Een trapgrafiek bestaat uit horizontale treden die bij een volgend interval springen.'],
['Bij V = 13 - 0,4t met t = 0 op 5 juli: wat betekent t = -2?',['2 dagen na 5 juli','2 dagen voor 5 juli','Het is dan 2 juli','De formule heeft dan geen betekenis'],1,'Een negatieve t betekent teruggaan in de tijd: t = -2 is 2 dagen v&oacute;&oacute;r 5 juli, dus 3 juli.'],
['Twee formules leveren bij elk ingevuld getal steeds bij elkaar horende waarden op. Wat concludeer je?',['De formules zijn fout','De formules beschrijven hetzelfde verband','Het is toeval','De formules horen bij verschillende verbanden'],1,'Als het bij meerdere ingevulde getallen klopt, beschrijven de formules hetzelfde verband.'],
['Los op met de balansmethode: 7a + 9 = 5a + 3.',['a = 3','a = -3','a = 6','a = -6'],1,'7a + 9 = 5a + 3 → 2a + 9 = 3 → 2a = -6 → a = -3.'],
['Los op: 4y + 25 = 5 - 6y.',['y = -2','y = 2','y = -3','y = 3'],0,'4y + 25 = 5 - 6y → 10y + 25 = 5 → 10y = -20 → y = -2.'],
['Wanneer los je een vergelijking op met inklemmen in plaats van de balansmethode?',['Altijd','Bij een vergelijking met een kwadraat, wortel of macht','Alleen bij lineaire vergelijkingen','Nooit, inklemmen is voor grafieken'],1,'Inklemmen gebruik je bij vergelijkingen die je niet stap voor stap met de balansmethode kunt oplossen, zoals kwadratische vergelijkingen.'],
['Bij inklemmen: t = 1,4 geeft h = 8,16 (te veel) en t = 1,5 geeft h = 7,75 (te weinig), bij doel h = 8. Welke conclusie trek je?',['t = 1,4 ligt het dichtst bij de oplossing','t = 1,5 ligt het dichtst bij de oplossing','Er is geen oplossing','Beide waarden zijn even goed'],0,'8,16 ligt dichter bij 8 dan 7,75, dus t = 1,4 ligt het dichtst bij de gezochte waarde.'],
['Wat doe je bij de balansmethode als er in het rechterlid een term met de variabele staat die je wilt wegwerken?',['Je vermenigvuldigt beide kanten met die term','Je trekt die term van beide kanten af (of telt hem op)','Je negeert die term','Je deelt alleen het rechterlid erdoor'],1,'Om een term weg te werken, voer je aan beide kanten dezelfde optel- of aftrekbewerking uit.'],
['Bij een trapgrafiek voor het huren van een scooter kost 0-2 uur &euro;25 en 2-4 uur &euro;35. Iemand huurt de scooter 3,5 uur. Wat betaalt deze persoon?',['&euro;25','&euro;35','&euro;30','&euro;55'],1,'3,5 uur valt in de trede van 2 tot 4 uur, dus het bedrag van die trede geldt: &euro;35.'],
['Waarom kun je in een stippengrafiek geen lijn tussen de punten tekenen?',['Omdat er geen verband is','Omdat tussenliggende waarden niet mogelijk zijn (bijvoorbeeld een half product)','Omdat het altijd om tijd gaat','Omdat de grafiek dan een parabool zou worden'],1,'Bij een stippengrafiek zijn alleen bepaalde (vaak hele) waarden mogelijk, dus een lijn ertussen zou onterecht suggereren dat tussenwaarden ook kunnen.'],
['Wat is de eerste stap om te controleren of twee formules hetzelfde verband beschrijven?',['Beide formules gelijkstellen aan 0','Een getal invullen in de ene formule en de uitkomst in de andere formule invullen','De grafiek tekenen','Een sectorhoek berekenen'],1,'Je vult een getal in de eerste formule in, berekent de uitkomst en controleert of de tweede formule dat getal teruggeeft.'],
['In de formule H = 24 - 2t is 24 het begingetal en -2 de richtingsco&euml;ffici&euml;nt. Wat betekent de richtingsco&euml;ffici&euml;nt -2?',['H neemt per eenheid van t met 2 toe','H neemt per eenheid van t met 2 af','H is altijd 2','t neemt met 2 af'],1,'Een negatieve richtingsco&euml;ffici&euml;nt van -2 betekent een afname van 2 per eenheid van t.'],
['Welke bewerking gebruik je NIET bij de balansmethode?',['Optellen bij beide kanten','Aftrekken van beide kanten','Delen door hetzelfde getal aan beide kanten','Willekeurig een kant veranderen zonder de andere kant aan te passen'],3,'Bij de balansmethode moet je altijd dezelfde bewerking aan beide kanten uitvoeren, anders raakt de vergelijking uit balans.']
]
});
