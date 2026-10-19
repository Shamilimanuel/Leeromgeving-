import { registerChapter } from '../../../registry.js';

/* Rebuilt 2026-09-24 to the recipe of Economie TL4 H1 (change 6), from the
   book scan. The 3.5 drawing is unchanged; its caption said "y naar achteren"
   while the drawing itself says "naar voren", so the caption now matches. */
registerChapter('wiskunde|tl|4|3', {
title:'Drie dimensies, afstanden en hoeken',
summary:[
{heading:'3.1 Tekenen in perspectief',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>een <b>perspectieftekening</b> maken met een <b>verdwijnpunt</b> en een <b>horizon</b></li></ul></div>`
+`<div class="box"><h4>Waar dit hoofdstuk over gaat</h4><p>Je leert tekenen in <b>perspectief</b>, <b>hoeken</b> berekenen in vlakke figuren en met <b>goniometrie</b>, <b>zijden</b> berekenen, en werken met <b>coördinaten</b> en berekeningen <b>in de ruimte</b>.</p></div>`
+`<h5 class="sub">Wat verder weg is, wordt kleiner</h5>`
+`<div class="box"><h4>Perspectief</h4><p>Bij een tekening in <b>perspectief</b> teken je alles wat <b>verder weg</b> is <b>kleiner</b>. Daardoor lijkt de tekening op de werkelijkheid.</p></div>`
+`<div class="call reken"><b>De drie regels</b><ol class="num">
<li>Evenwijdige lijnen die <b>van je af</b> lopen, komen samen in het <b>verdwijnpunt V</b>.</li>
<li>Het verdwijnpunt ligt op de <b>horizon</b>, en de horizon ligt op <b>ooghoogte</b>.</li>
<li><b>Verticale lijnen</b> blijven verticaal.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: een weg</h4><p>De zijkanten en de middenstreep van een weg zijn in het echt <b>evenwijdig</b>. Op de tekening niet.</p><div class="antwoord">Ze lopen naar <b>één punt op de horizon</b>: het verdwijnpunt V. Trek dus elke lijn van de weg <b>naar V</b>.</div></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Waar snijden evenwijdige lijnen die van je af lopen elkaar in een perspectieftekening?</p><p class="check-a">In het <b>verdwijnpunt</b> op de <b>horizon</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (3.1)</b><ul class="lst">
<li>In <b>perspectief</b> is wat verder weg is kleiner.</li>
<li>Evenwijdige lijnen van je af komen samen in het <b>verdwijnpunt</b> op de <b>horizon</b> (ooghoogte).</li>
<li><b>Verticale lijnen</b> blijven verticaal.</li></ul></div>`},

{heading:'3.2 Hoeken in vlakke figuren',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li><b>hoeken berekenen</b> in vlakke figuren met de regels voor <b>driehoeken</b>, <b>vierhoeken</b> en <b>gestrekte hoeken</b></li></ul></div>`
+`<h5 class="sub">De regels</h5>`
+`<div class="g2">`
+`<div class="box"><h4>Hoekensommen</h4><ul class="lst"><li>De hoeken van een <b>driehoek</b> zijn samen <b>180&deg;</b>.</li><li>De hoeken van een <b>vierhoek</b> zijn samen <b>360&deg;</b>.</li><li>Hoeken die een <b>gestrekte hoek</b> vormen, zijn samen <b>180&deg;</b>.</li><li>In een <b>rechthoekige driehoek</b> is één hoek <b>90&deg;</b>.</li></ul></div>`
+`<div class="box"><h4>Parallellogram</h4><p>In een <b>parallellogram</b> zijn <b>overstaande hoeken</b> even groot. Twee hoeken <b>naast elkaar</b> zijn samen <b>180&deg;</b>.</p></div></div>`
+`<h5 class="sub">Lijnen in een driehoek</h5>`
+`<div class="term"><b>Deellijn</b><span>Deelt een hoek precies doormidden.</span></div>`
+`<div class="term"><b>Hoogtelijn</b><span>Loopt vanuit een hoekpunt loodrecht op de overstaande zijde.</span></div>`
+`<div class="term"><b>Zwaartelijn</b><span>Loopt van een hoekpunt naar het midden van de overstaande zijde.</span></div>`
+`<div class="term" style="margin-bottom:0"><b>Middelloodlijn</b><span>Deelt een lijnstuk middendoor en staat er loodrecht op.</span></div>`
+`<div class="call warn"><b>Elke opgave is anders.</b> Kijk goed welke regel je kunt gebruiken, en schrijf de graden <b>in de hoeken</b> van de figuur. Zo zie je stap voor stap wat je nog mist.</div>`
+`<div class="voorbeeld"><h4>Voorbeeld: een dakspant</h4><p>Het dak is <b>symmetrisch</b> en &ang;A = <b>29&deg;</b>. &#9651;BCF is <b>gelijkzijdig</b> en bij G zijn rechte hoeken.</p><div class="antwoord">Door de symmetrie is &ang;D ook <b>29&deg;</b>. Een gelijkzijdige driehoek heeft hoeken van <b>60&deg;</b>. Met de hoekensom (180&deg;) en de gestrekte hoek reken je de andere hoeken één voor één uit.</div></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Hoeveel graden zijn de hoeken van een vierhoek samen?</p><p class="check-a"><b>360&deg;</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (3.2)</b><ul class="lst">
<li><b>Driehoek</b> 180&deg;, <b>vierhoek</b> 360&deg;, <b>gestrekte hoek</b> 180&deg;.</li>
<li><b>Parallellogram</b>: overstaande hoeken even groot, hoeken naast elkaar samen 180&deg;.</li>
<li><b>Deellijn</b>, <b>hoogtelijn</b>, <b>zwaartelijn</b> en <b>middelloodlijn</b>.</li></ul></div>`},

{heading:'3.3 Hoeken berekenen met goniometrie',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>een <b>hoek</b> berekenen met de <b>sinus</b>, <b>cosinus</b> of <b>tangens</b></li></ul></div>`
+`<h5 class="sub">Twee zijden bekend</h5>`
+`<div class="box"><h4>Wanneer?</h4><p>Weet je <b>twee zijden</b> van een <b>rechthoekige driehoek</b>, dan kun je de <b>scherpe hoeken</b> berekenen. Je gebruikt dan de <b>sinus</b>, <b>cosinus</b> of <b>tangens</b>.</p></div>`
+`<div class="tblwrap"><table class="tbl"><tr><th>afkorting</th><th>betekenis</th></tr><tr><td><b>SOS</b></td><td>Sinus = Overstaande / Schuine zijde</td></tr><tr><td><b>CAS</b></td><td>Cosinus = Aanliggende / Schuine zijde</td></tr><tr><td><b>TOA</b></td><td>Tangens = Overstaande / Aanliggende</td></tr></table></div>`
+`<div class="call reken"><b>Stappenplan: een hoek berekenen</b><ol class="num">
<li>Zet bij de hoek welke zijden je weet: <b>overstaand</b>, <b>aanliggend</b> of <b>schuin</b>.</li>
<li>Kies <b>SOS</b>, <b>CAS</b> of <b>TOA</b> met de twee zijden die je weet.</li>
<li>Gebruik de <b>inverse</b> op je rekenmachine: <b>sin<sup>-1</sup></b>, <b>cos<sup>-1</sup></b> of <b>tan<sup>-1</sup></b>.</li>
<li>Rond af op <b>hele graden</b>.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: een gelijkbenige driehoek</h4><p>Een <b>gelijkbenige</b> driehoek is niet rechthoekig. Wat nu?</p><div class="antwoord">Teken de <b>symmetrieas</b>: die verdeelt de driehoek in <b>twee rechthoekige driehoeken</b> en de tophoek in twee gelijke delen. Reken in één helft en <b>rond tussendoor niet af</b>.</div></div>`
+`<div class="term"><b>Drieletternotatie</b><span>Een hoek benoemen met drie hoofdletters, zoals &ang;ABC. De middelste letter is het hoekpunt.</span></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Welke rekenmachinefunctie gebruik je om een hoek te vinden uit een sinusverhouding?</p><p class="check-a"><b>sin<sup>-1</sup></b>: de inverse sinus.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (3.3)</b><ul class="lst">
<li><b>SOS, CAS, TOA</b> bij twee bekende zijden.</li>
<li>Een hoek vind je met <b>sin<sup>-1</sup>, cos<sup>-1</sup> of tan<sup>-1</sup></b>; rond af op <b>hele graden</b>.</li>
<li><b>Gelijkbenige driehoek</b>: splits hem met de symmetrieas.</li></ul></div>`},

{heading:'3.4 Zijden berekenen in een driehoek',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>een <b>zijde</b> berekenen met de <b>sinus</b>, <b>cosinus</b> of <b>tangens</b></li></ul></div>`
+`<h5 class="sub">Een hoek en een zijde bekend</h5>`
+`<div class="box"><h4>Wanneer?</h4><p>Weet je in een <b>rechthoekige driehoek</b> één <b>scherpe hoek</b> en één <b>zijde</b>, dan bereken je een <b>andere zijde</b> met SOS, CAS of TOA.</p></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: zijde PQ</h4><p>&ang;R = <b>48&deg;</b> en de schuine zijde PR = <b>55 cm</b>. Vanuit &ang;R is PQ de <b>overstaande</b> zijde.</p><div class="antwoord">Overstaand en schuin: <b>SOS</b>. sin 48&deg; = PQ / 55, dus PQ = 55 &times; sin 48&deg; &asymp; <b>40,9 cm</b>.</div></div>`
+`<div class="call ezel"><b>3 = 6 / 2.</b> Weet je 6 niet, dan doe je 2 &times; 3. Weet je 2 niet, dan doe je 6 : 3. Zo zet je sin 48&deg; = PQ / 55 om.</div>`
+`<div class="call warn"><b>Gelijkbenige driehoek?</b> Splits hem eerst met de <b>symmetrieas</b> in twee rechthoekige driehoeken. Daarna gebruik je <b>goniometrie</b> of de <b>stelling van Pythagoras</b>.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Je weet een scherpe hoek en de schuine zijde, en je zoekt de overstaande zijde. Wat gebruik je?</p><p class="check-a">De <b>sinus</b> (SOS): overstaande zijde = schuine zijde &times; sin(hoek).</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (3.4)</b><ul class="lst">
<li>Eén <b>hoek</b> en één <b>zijde</b> bekend: bereken een andere zijde met <b>SOS, CAS of TOA</b>.</li>
<li>Zet de formule om met <b>3 = 6 / 2</b>.</li>
<li><b>Gelijkbenig</b>: eerst splitsen met de symmetrieas.</li></ul></div>`},

{heading:'3.5 Co&ouml;rdinaten in de ruimte',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>de <b>coördinaten</b> van een punt in de <b>ruimte</b> opschrijven</li></ul></div>`
+`<h5 class="sub">Drie assen</h5>`
+`<div class="box"><h4>Drie dimensies</h4><p>De ruimte heeft <b>drie dimensies</b>: lengte, breedte en hoogte. Daarom heb je <b>drie assen</b>: de <b>x-as</b>, de <b>y-as</b> en de <b>z-as</b>. Een punt schrijf je als <b>(x, y, z)</b>. De <b>oorsprong</b> is (0, 0, 0).</p></div>`
+`<div class="call reken"><b>Stappenplan: coördinaten aflezen</b><ol class="num">
<li>Start in de <b>oorsprong</b> O.</li>
<li>Tel de stappen in de <b>x-richting</b>, dan in de <b>y-richting</b>, dan in de <b>z-richting</b> (omhoog).</li>
<li>Schrijf ze in die volgorde op: <b>(x, y, z)</b>. Een halve stap mag: 1,5.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: een korfbalveld</h4><p>Over het veld ligt een rooster, de oorsprong ligt in een hoek. De paal is <b>3,5 m</b> hoog.</p><div class="antwoord">De top van de linkerpaal is <b>(20; 10; 3,5)</b>: 20 en 10 zijn de plek op het veld, 3,5 is de <b>hoogte</b>.</div></div>`
+`<figure class='fig'><svg viewBox="0 0 340 270" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Een assenstelsel in de ruimte met een x-as, y-as en z-as, en het punt P(4, 3, 2)"><g stroke="var(--txt)" stroke-width="1.8" fill="var(--txt)" opacity=".85"><path d="M150 190 H293"/><polygon points="293,186 303,190 293,194"/><path d="M150 190 V73"/><polygon points="146,73 150,63 154,73"/><path d="M150 190 L70 242"/><polygon points="73,246 61,248 68,238"/></g><g stroke="#e2564f" stroke-width="1.6" stroke-dasharray="5 4" fill="none"><path d="M150 190 H254"/><path d="M254 190 L194 229"/><path d="M194 229 V149"/></g><circle cx="194" cy="149" r="5" fill="#e2564f"/><g fill="var(--txt)" font-size="12" font-family="inherit"><text x="307" y="195">x</text><text x="52" y="252">y</text><text x="144" y="60">z</text><text x="202" y="145">P(4, 3, 2)</text><text x="136" y="204">O</text></g><g fill="var(--mut)" font-size="9" font-family="inherit"><text x="232" y="184" text-anchor="middle">4 naar rechts</text><text x="234" y="220">3 naar voren</text><text x="201" y="168">2 omhoog</text></g></svg><figcaption>In de ruimte heb je drie getallen nodig in plaats van twee: <b>x</b> naar rechts, <b>y</b> schuin naar voren en <b>z</b> omhoog. De stippellijnen laten zien hoe je bij P komt.</figcaption></figure>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Wat zijn de coördinaten van de oorsprong?</p><p class="check-a"><b>(0, 0, 0)</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (3.5)</b><ul class="lst">
<li>In de ruimte: <b>drie coördinaten</b> (x, y, z).</li>
<li>Tel vanuit de <b>oorsprong</b> de stappen in de x-, y- en z-richting.</li>
<li>De <b>z</b> is de <b>hoogte</b>.</li></ul></div>`},

{heading:'3.6 Berekeningen in de ruimte',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>de lengte van een <b>lijnstuk</b> in een ruimtefiguur berekenen</li>
<li>een <b>hoek</b> in een ruimtefiguur berekenen</li></ul></div>`
+`<h5 class="sub">Over drie ribben</h5>`
+`<div class="box"><h4>Verlengde stelling van Pythagoras</h4><p>Met de <b>verlengde stelling van Pythagoras</b> bereken je een lijnstuk dwars door een ruimtefiguur, zoals een <b>lichaamsdiagonaal</b>. Je gebruikt de <b>kortste route over drie ribben</b>.</p><p><b>lijnstuk&sup2; = ribbe&sup2; + ribbe&sup2; + ribbe&sup2;</b></p></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: lichaamsdiagonaal BH</h4><p>Balk ABCD EFGH: AB = <b>8 cm</b>, BC = <b>5 cm</b>, CG = <b>10 cm</b>.</p><div class="antwoord">BH&sup2; = 8&sup2; + 5&sup2; + 10&sup2; = 64 + 25 + 100 = 189, dus BH = &radic;189 &asymp; <b>13,7 cm</b>.</div></div>`
+`<div class="call warn"><b>Geen balk?</b> Bij een piramide ga je ook <b>over drie ribben</b> of stukken van ribben, bijvoorbeeld van M naar N via MD, DA en AN.</div>`
+`<h5 class="sub">Hoeken in de ruimte</h5>`
+`<div class="call reken"><b>Stappenplan: een hoek in de ruimte</b><ol class="num">
<li>Zoek een <b>rechthoekige driehoek</b> in een <b>zijvlak</b> of <b>diagonaalvlak</b>.</li>
<li>Teken die driehoek <b>apart</b> en zet de bekende zijden erbij.</li>
<li>Bereken de hoek met <b>SOS, CAS of TOA</b>.</li></ol></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Wat zoek je eerst om een hoek in een ruimtefiguur te berekenen?</p><p class="check-a">Een <b>rechthoekige driehoek</b> in een zijvlak of diagonaalvlak.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (3.6)</b><ul class="lst">
<li><b>Verlengde stelling van Pythagoras</b>: kortste route over <b>drie ribben</b>.</li>
<li>Lijnstuk&sup2; = ribbe&sup2; + ribbe&sup2; + ribbe&sup2;.</li>
<li>Een hoek in de ruimte: zoek een <b>rechthoekige driehoek</b> en gebruik goniometrie.</li></ul></div>`}
],
terms:[
['perspectief','een tekenwijze waarbij dingen die verder weg zijn kleiner worden getekend, zodat de tekening op de werkelijkheid lijkt',0],
['verdwijnpunt','het punt op de horizon waar evenwijdige lijnen die van je af lopen elkaar in een perspectieftekening snijden',0],
['horizon','de horizontale lijn op ooghoogte in een perspectieftekening, waarop het verdwijnpunt ligt',0],
['gestrekte hoek','een hoek van 180 graden',1],
['parallellogram','een vierhoek met twee paar evenwijdige zijden, waarbij overstaande hoeken even groot zijn',1],
['SOS-CAS-TOA','ezelsbruggetje voor sinus (Overstaande/Schuine), cosinus (Aanliggende/Schuine) en tangens (Overstaande/Aanliggende)',2],
['sinus / cosinus / tangens','goniometrische verhoudingen waarmee je in een rechthoekige driehoek een hoek of een zijde kunt berekenen',2],
['drieletternotatie','het benoemen van een hoek met drie hoofdletters, waarbij de middelste letter het hoekpunt is (bijvoorbeeld &ang;ABC)',2],
['schuine zijde','de langste zijde van een rechthoekige driehoek, tegenover de rechte hoek',3],
['co&ouml;rdinaten in de ruimte','drie getallen (x, y, z) die de plaats van een punt in een driedimensionaal assenstelsel aangeven',4],
['oorsprong','het punt (0, 0, 0) in een assenstelsel, waar de assen elkaar snijden',4],
['lichaamsdiagonaal','een lijnstuk dat dwars door een ruimtefiguur loopt, van het ene hoekpunt naar het tegenoverliggende hoekpunt',5],
['verlengde stelling van Pythagoras','de stelling van Pythagoras toegepast met drie ribben achter elkaar, om een lichaamsdiagonaal te berekenen',5],
['diagonaalvlak','een plat vlak binnen een ruimtefiguur dat door een diagonaal van het grondvlak en de bijbehorende hoogte loopt',5],
['ribbe','een zijde (lijnstuk) van een ruimtefiguur, waar twee vlakken elkaar ontmoeten',4]
],
cards:[
['Waar snijden evenwijdige lijnen die van je af lopen elkaar in een perspectieftekening?','In het verdwijnpunt op de horizon.',0],
['Wat blijft verticaal in een perspectieftekening?','Verticale lijnen blijven verticaal.',0],
['Hoeveel graden zijn de hoeken van een driehoek samen?','180 graden.',1],
['Hoeveel graden zijn de hoeken van een vierhoek samen?','360 graden.',1],
['Wat geldt voor overstaande hoeken in een parallellogram?','Overstaande hoeken zijn even groot.',1],
['Waar staat de afkorting SOS voor?','Sinus = Overstaande zijde / Schuine zijde.',2],
['Waar staat de afkorting CAS voor?','Cosinus = Aanliggende zijde / Schuine zijde.',2],
['Waar staat de afkorting TOA voor?','Tangens = Overstaande zijde / Aanliggende zijde.',2],
['Welke rekenmachinefunctie gebruik je om een hoek te berekenen uit een sinusverhouding?','sin<sup>-1</sup> (de inverse sinus).',2],
['Bij drieletternotatie &ang;ABC: welke letter is het hoekpunt?','De middelste letter, in dit geval B.',2],
['Hoe bereken je een zijde als je een scherpe hoek en de schuine zijde weet, en je de overstaande zijde zoekt?','Met de sinus (SOS): overstaande zijde = schuine zijde &times; sin(hoek).',3],
['Uit hoeveel getallen bestaan co&ouml;rdinaten in de ruimte?','Uit drie getallen: (x, y, z).',4],
['Wat zijn de co&ouml;rdinaten van de oorsprong?','(0, 0, 0).',4],
['Wat bereken je met de verlengde stelling van Pythagoras?','De lengte van een lichaamsdiagonaal in een balk of kubus, met behulp van drie ribben.',5],
['Wat zoek je eerst om een hoek in een ruimtefiguur te berekenen?','Een rechthoekige driehoek in een zijvlak of diagonaalvlak van de figuur.',5]
],
quiz:[
['Waar liggen evenwijdige lijnen die van je af lopen in een perspectieftekening?',['Ze blijven evenwijdig op de tekening','Ze snijden elkaar in het verdwijnpunt op de horizon','Ze worden verticaal','Ze verdwijnen uit beeld'],1,'Bij perspectief snijden zulke lijnen elkaar in het verdwijnpunt op de horizon.'],
['Op welke hoogte ligt de horizon in een perspectieftekening?',['Op grondhoogte','Op ooghoogte','Op de hoogte van het hoogste object','Dat maakt niet uit'],1,'De horizon ligt op ooghoogte.'],
['Een driehoek heeft hoeken van 84&deg; en 60&deg;. Hoe groot is de derde hoek?',['36&deg;','96&deg;','180&deg;','144&deg;'],0,'180 - 84 - 60 = 36 graden.'],
['Een vierhoek heeft drie hoeken van 86&deg;, 85&deg; en 108&deg;. Hoe groot is de vierde hoek?',['81&deg;','91&deg;','279&deg;','360&deg;'],0,'360 - 86 - 85 - 108 = 81 graden.'],
['In een rechthoekige driehoek ken je de overstaande zijde en de schuine zijde van een hoek. Welke verhouding gebruik je om de hoek te berekenen?',['Sinus (SOS)','Cosinus (CAS)','Tangens (TOA)','Pythagoras'],0,'Overstaande en schuine zijde horen bij SOS: de sinus.'],
['In &#9651;PQR is &ang;R = 48&deg; en PR (schuine zijde) = 55 cm. Bereken zijde PQ (overstaande zijde van R).',['36,8 cm','40,9 cm','48,0 cm','55,0 cm'],1,'PQ = 55 &times; sin 48&deg; = 40,9 cm.'],
['Bij drieletternotatie &ang;D12 (of &ang;ADC): welke letter geeft het hoekpunt aan?',['De eerste letter','De middelste letter','De laatste letter','Dat maakt niet uit'],1,'Bij drieletternotatie is de middelste letter altijd het hoekpunt van de hoek.'],
['Wat is de vorm van de tekening als je een gelijkbenige driehoek in twee delen splitst via de symmetrieas?',['Twee gelijke rechthoekige driehoeken','Twee parallellogrammen','Een cirkel','Een parabool'],0,'De symmetrieas van een gelijkbenige driehoek splitst hem in twee gelijke rechthoekige driehoeken.'],
['Wat geven co&ouml;rdinaten in de ruimte (x, y, z) aan?',['De plaats van een punt in een driedimensionaal assenstelsel','Alleen de hoogte van een punt','De oppervlakte van een figuur','De hoek van een driehoek'],0,'In de ruimte geef je de plaats van een punt aan met drie co&ouml;rdinaten (x, y, z).'],
['Vanuit de oorsprong zet je 2 stappen in de x-richting, 1 stap in de y-richting en 3 stappen in de z-richting. Wat zijn de co&ouml;rdinaten van dat punt?',['(1, 2, 3)','(2, 1, 3)','(3, 2, 1)','(2, 3, 1)'],1,'De volgorde is (x, y, z), dus (2, 1, 3).'],
['Wat bereken je met de verlengde stelling van Pythagoras?',['De oppervlakte van een cirkel','De lengte van een lichaamsdiagonaal in een balk of kubus','Een percentage','De richtingsco&euml;ffici&euml;nt'],1,'De verlengde stelling van Pythagoras (met drie ribben) geeft de lichaamsdiagonaal.'],
['Een balk heeft AB = 8 cm, BC = 5 cm en CG = 10 cm. Wat is rhz&sup2; in het grondvlak (AB en BC)?',['13','89','40','169'],1,'rhz&sup2; = 8&sup2; + 5&sup2; = 64 + 25 = 89.'],
['Vervolg op de vorige vraag: hoe lang is de lichaamsdiagonaal (afgerond op &eacute;&eacute;n decimaal)?',['9,4 cm','13,7 cm','18,9 cm','23,0 cm'],1,'sz&sup2; = 89 + 10&sup2; = 189, dus lichaamsdiagonaal = &radic;189 &asymp; 13,7 cm.'],
['Wat zoek je eerst als je een hoek in een ruimtefiguur (zoals een balk) wilt berekenen?',['Een rechthoekige driehoek in een zijvlak of diagonaalvlak','De oppervlakte van het grondvlak','De omtrek van de figuur','Het volume van de figuur'],0,'Je zoekt eerst een rechthoekige driehoek in een zij- of diagonaalvlak en gebruikt daarna goniometrie.'],
['Wat geldt voor hoeken die samen een gestrekte hoek vormen?',['Ze zijn samen 90&deg;','Ze zijn samen 180&deg;','Ze zijn samen 360&deg;','Ze zijn altijd gelijk'],1,'Hoeken die samen een gestrekte hoek vormen, zijn samen 180 graden.']
]
});
