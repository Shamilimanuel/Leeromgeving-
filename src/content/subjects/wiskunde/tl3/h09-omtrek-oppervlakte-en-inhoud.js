import { registerChapter } from '../../../registry.js';

/* Rebuilt 2026-09-25 to the recipe of Economie TL4 H1 (change 6). Added
   from the book: the muurschildering (9.6: 8,64 m2 from 150 cm2 gives
   factor 24) and the containers (9.7: 40 and 135 liter give factor 1,5).
   The rounding rule "tussenantwoorden op één decimaal meer" is this book's
   own. The two drawings are unchanged. Terms, cards and quiz unchanged. */
registerChapter('wiskunde|tl|3|9', {
title:'Omtrek, oppervlakte en inhoud',
summary:[
{heading:'9.1 Eenheden',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>eenheden van <b>lengte</b>, <b>oppervlakte</b> en <b>inhoud</b> omrekenen</li></ul></div>`
+`<div class="box"><h4>Waar dit hoofdstuk over gaat</h4><p>Je rekent met <b>eenheden</b>, de <b>oppervlakte</b> en <b>omtrek</b> van (samengestelde) vlakke figuren, de oppervlakte en <b>inhoud</b> van ruimtefiguren, en wat er gebeurt als je een figuur <b>vergroot</b>.</p></div>`
+`<h5 class="sub">Drie schema's</h5>`
+`<div class="g3">`
+`<div class="box"><h4>Lengte</h4><p>km, hm, dam, m, dm, cm, mm. Per stap <b>&times; 10</b> of <b>: 10</b>.</p></div>`
+`<div class="box"><h4>Oppervlakte</h4><p>km&sup2;, hm&sup2; (<b>ha</b>), dam&sup2; (<b>are</b>), m&sup2;, dm&sup2;, cm&sup2;, mm&sup2;. Per stap <b>&times; 100</b>.</p></div>`
+`<div class="box"><h4>Inhoud</h4><p>m&sup3;, dm&sup3; (<b>liter</b>), cm&sup3; (<b>cc</b>, <b>mL</b>), mm&sup3;. Per stap <b>&times; 1000</b>.</p></div></div>`
+`<div class="call waarom">Waarom &times; 100 en &times; 1000? Een vierkant van 1 dm is <b>10 &times; 10</b> cm = 100 cm&sup2;. Een kubus van 1 dm is <b>10 &times; 10 &times; 10</b> cm = 1000 cm&sup3;.</div>`
+`<div class="voorbeeld"><h4>Voorbeeld: 7,5 m&sup2; en 8000 ha</h4><p>Reken 7,5 m&sup2; om naar cm&sup2; en 8000 ha naar km&sup2;.</p><div class="antwoord">m&sup2; naar cm&sup2; is <b>twee stappen</b>: 7,5 &times; 100 &times; 100 = <b>75 000 cm&sup2;</b>. 8000 ha = 8000 hm&sup2;, één stap naar km&sup2;: 8000 : 100 = <b>80 km&sup2;</b>.</div></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Hoeveel mL is 1 dm&sup3;?</p><p class="check-a">1 dm&sup3; = 1 liter = <b>1000 mL</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (9.1)</b><ul class="lst">
<li>Lengte <b>&times; 10</b>, oppervlakte <b>&times; 100</b>, inhoud <b>&times; 1000</b> per stap.</li>
<li><b>1 ha</b> = 1 hm&sup2;, <b>1 are</b> = 1 dam&sup2;.</li>
<li><b>1 L</b> = 1 dm&sup3;, <b>1 mL</b> = 1 cm&sup3; = 1 cc.</li></ul></div>`},

{heading:'9.2 Oppervlakte en omtrek vlakke figuren',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>de <b>oppervlakte</b> en <b>omtrek</b> van vlakke figuren berekenen</li></ul></div>`
+`<h5 class="sub">De formules</h5>`
+`<div class="tblwrap"><table class="tbl"><tr><th>Figuur</th><th>Oppervlakte</th></tr><tr><td><b>Rechthoek</b>, <b>vierkant</b></td><td>lengte &times; breedte</td></tr><tr><td><b>Driehoek</b></td><td>0,5 &times; zijde &times; hoogte</td></tr><tr><td><b>Parallellogram</b></td><td>zijde &times; hoogte</td></tr><tr><td><b>Cirkel</b></td><td>&pi; &times; straal&sup2; (krijg je erbij)</td></tr></table></div>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Oppervlakte</h4><p>Hoe groot het <b>vlak</b> is, in cm&sup2;.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Omtrek</h4><p>Alle <b>zijden</b> opgeteld, in cm. Bij een cirkel: &pi; &times; diameter.</p></div></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: parallellogram ABCD</h4><p>AB = <b>6 cm</b>, hoogte EF = <b>2 cm</b>, BC = <b>2,5 cm</b>.</p><div class="antwoord">Oppervlakte: 6 &times; 2 = <b>12 cm&sup2;</b>. Overstaande zijden zijn even lang: omtrek 6 + 2,5 + 6 + 2,5 = <b>17 cm</b>.</div></div>`
+`<div class="call warn"><b>Veelgemaakte fout:</b> de <b>schuine zijde</b> als hoogte gebruiken. De hoogte staat altijd <b>loodrecht</b> op de zijde die je gebruikt.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Hoe bereken je de omtrek van een vlakke figuur met rechte zijden?</p><p class="check-a">Tel de lengtes van <b>alle zijden</b> op.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (9.2)</b><ul class="lst">
<li>Ken de formules van <b>rechthoek</b>, <b>driehoek</b> en <b>parallellogram</b> uit je hoofd.</li>
<li>De cirkelformules krijg je <b>erbij</b>.</li>
<li><b>Omtrek</b> = alle zijden samen.</li></ul></div>`},

{heading:'9.3 Oppervlakte en omtrek samengestelde vlakke figuren',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>de oppervlakte van een <b>samengestelde figuur</b> berekenen met <b>verdelen</b> of <b>inlijsten</b></li></ul></div>`
+`<h5 class="sub">Verdelen of inlijsten</h5>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Verdelen</h4><p>Knip de figuur in <b>bekende</b> stukken en tel de oppervlaktes <b>op</b>.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Inlijsten</h4><p>Teken een figuur <b>eromheen</b> en trek de stukken die <b>te veel</b> zijn eraf.</p></div></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: driehoek met een halve cirkel</h4><p>Een driehoek met basis <b>25 cm</b> en hoogte <b>10 cm</b>, met een halve cirkel met straal <b>12,5 cm</b>. Rond af op hele cm&sup2;.</p><div class="antwoord">Driehoek: 0,5 &times; 25 &times; 10 = <b>125 cm&sup2;</b>. Halve cirkel: 0,5 &times; &pi; &times; 12,5&sup2; &asymp; <b>245,4 cm&sup2;</b>. Samen 370,4, dus <b>370 cm&sup2;</b>.</div></div>`
+`<div class="call warn"><b>Afronden:</b> moet het eindantwoord op een aantal decimalen, dan rond je de <b>tussenantwoorden</b> af op <b>één decimaal meer</b>. Eindantwoord op helen: tussenantwoorden op één decimaal.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Wat doe je bij inlijsten met de stukken die te veel zijn?</p><p class="check-a">Je trekt ze <b>af</b> van de figuur eromheen.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (9.3)</b><ul class="lst">
<li><b>Verdelen</b>: stukken optellen.</li>
<li><b>Inlijsten</b>: figuur eromheen, stukken die te veel zijn eraf.</li>
<li>Tussenantwoorden op <b>één decimaal meer</b>.</li></ul></div>`},

{heading:'9.4 Oppervlakte ruimtefiguren',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>de <b>oppervlakte</b> van een <b>ruimtefiguur</b> berekenen met een <b>uitslag</b></li></ul></div>`
+`<h5 class="sub">Alle zijvlakken</h5>`
+`<div class="box"><h4>Cilinder</h4><p>De oppervlakte van een ruimtefiguur is de oppervlakte van <b>alle zijvlakken</b> samen. Een <b>cilinder</b> heeft twee <b>cirkels</b> en een <b>cilindermantel</b>. Vouw je de mantel open, dan is het een <b>rechthoek</b>: de lengte is de <b>omtrek</b> van de cirkel (&pi; &times; diameter), de breedte is de <b>hoogte</b>.</p></div>`
+`<figure class='fig'><svg viewBox="0 0 280 215" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Prisma met een rechthoekig driehoekig grondvlak van 3 bij 4 bij 5 cm en een lengte van 10 cm"><path d="M50 180 L140 180 L50 110 Z" fill="var(--accent)" fill-opacity=".18" stroke="var(--accent)" stroke-width="2" stroke-linejoin="round"/><g fill="none" stroke="var(--mut)" stroke-width="1.2" stroke-dasharray="4 3" opacity=".75"><path d="M50 180 L149 124"/><path d="M149 124 L149 54"/></g><g fill="none" stroke="var(--txt)" stroke-width="1.6" opacity=".8" stroke-linejoin="round"><path d="M140 180 L239 124"/><path d="M50 110 L149 54"/><path d="M239 124 L149 54"/><path d="M149 124 L239 124"/></g><polyline points="62,180 62,168 50,168" fill="none" stroke="var(--accent)" stroke-width="1.6"/><g fill="var(--accent)" font-size="10" font-weight="600" font-family="inherit"><text x="95" y="194" text-anchor="middle">4 cm</text><text x="28" y="149">3 cm</text><text x="103" y="140">5 cm</text><text x="196" y="162">10 cm</text></g></svg><figcaption>Een prisma met een driehoekig grondvlak: twee driehoeken en drie rechthoeken, samen vijf zijvlakken.</figcaption></figure>`
+`<div class="call reken"><b>Stappenplan: oppervlakte van een ruimtefiguur</b><ol class="num">
<li><b>Vouw open</b>: teken de uitslag of schrijf op uit welke vlakken de figuur bestaat.</li>
<li>Reken <b>elk vlak</b> apart uit: rechthoek, driehoek of cirkel.</li>
<li>Let op <b>dubbele vlakken</b>: grondvlak en bovenvlak zijn vaak gelijk.</li>
<li>Tel <b>alles</b> op.</li></ol></div>`
+`<figure class='fig'><svg viewBox="0 0 300 255" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Uitslag van het prisma: drie rechthoeken naast elkaar met boven en onder een driehoek"><g fill="var(--accent)" fill-opacity=".12" stroke="var(--accent)" stroke-width="1.8" stroke-linejoin="round"><path d="M40 60 L82 60 L82 200 L40 200 Z"/><path d="M82 60 L138 60 L138 200 L82 200 Z"/><path d="M138 60 L208 60 L208 200 L138 200 Z"/><path d="M82 60 L138 60 L82 18 Z"/><path d="M82 200 L138 200 L82 242 Z"/></g><g fill="var(--txt)" font-size="9.5" font-family="inherit" text-anchor="middle"><text x="61" y="127">3 &times; 10</text><text x="61" y="141">= 30</text><text x="110" y="127">4 &times; 10</text><text x="110" y="141">= 40</text><text x="173" y="127">5 &times; 10</text><text x="173" y="141">= 50</text><text x="103" y="46">6</text><text x="103" y="219">6</text></g><g fill="var(--accent)" font-size="10" font-weight="600" font-family="inherit"><text x="124" y="253" text-anchor="middle">alles in cm<tspan baseline-shift="super" font-size="7">2</tspan></text><text x="222" y="134">10 cm</text></g></svg><figcaption>De uitslag: drie rechthoeken naast elkaar, met het grond- en bovenvlak eraan vast. Optellen geeft de oppervlakte.</figcaption></figure>`
+`<div class="voorbeeld"><h4>Voorbeeld: een driehoekig prisma</h4><p>Het prisma is <b>10 cm</b> lang. Het grondvlak is een rechthoekige driehoek met zijden <b>3</b>, <b>4</b> en <b>5 cm</b>.</p><div class="antwoord">Grond- en bovenvlak: 2 &times; (0,5 &times; 3 &times; 4) = <b>12 cm&sup2;</b>. Drie rechthoeken: 3 &times; 10 + 4 &times; 10 + 5 &times; 10 = <b>120 cm&sup2;</b>. Samen <b>132 cm&sup2;</b>.</div></div>`
+`<div class="call warn"><b>Veelgemaakte fout:</b> bij een cilinder maar <b>één</b> cirkel meetellen. Er zijn er <b>twee</b>: boven en onder.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Hoeveel zijvlakken heeft een prisma met een driehoekig grondvlak?</p><p class="check-a"><b>Vijf</b>: twee driehoeken en drie rechthoeken.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (9.4)</b><ul class="lst">
<li>Oppervlakte = alle <b>zijvlakken</b> samen.</li>
<li>Cilindermantel: <b>omtrek &times; hoogte</b>.</li>
<li>Vergeet de <b>dubbele</b> vlakken niet.</li></ul></div>`},

{heading:'9.5 Inhoud ruimtefiguren',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>de <b>inhoud</b> van balk, kubus, prisma, cilinder, kegel, piramide en bol berekenen</li></ul></div>`
+`<h5 class="sub">De formules</h5>`
+`<div class="tblwrap"><table class="tbl"><tr><th>Figuur</th><th>Inhoud</th></tr><tr><td><b>Balk</b>, <b>kubus</b> (uit je hoofd)</td><td>lengte &times; breedte &times; hoogte</td></tr><tr><td><b>Prisma</b>, <b>cilinder</b></td><td>oppervlakte grondvlak &times; hoogte</td></tr><tr><td><b>Kegel</b>, <b>piramide</b></td><td>1/3 &times; oppervlakte grondvlak &times; hoogte</td></tr><tr><td><b>Bol</b></td><td>4/3 &times; &pi; &times; straal&sup3;</td></tr></table></div>`
+`<div class="call reken"><b>Stappenplan: inhoud met een grondvlak</b><ol class="num">
<li>Bereken de <b>oppervlakte van het grondvlak</b>.</li>
<li>Vermenigvuldig met de <b>hoogte</b>.</li>
<li>Kegel of piramide: nog <b>&times; 1/3</b>.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: een kegel</h4><p>Straal <b>2 cm</b>, hoogte <b>5 cm</b>. Rond af op één decimaal.</p><div class="antwoord">Grondvlak: &pi; &times; 2&sup2; &asymp; <b>12,57 cm&sup2;</b>. Inhoud: 1/3 &times; 12,57 &times; 5 &asymp; <b>20,9 cm&sup3;</b>.</div></div>`
+`<div class="call waarom">Waarom 1/3? Een kegel of piramide loopt <b>spits</b> toe. Er past precies <b>een derde</b> in van een cilinder of prisma met hetzelfde grondvlak en dezelfde hoogte.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Welke inhoudsformules moet je uit je hoofd kennen?</p><p class="check-a">Die van de <b>balk</b> en de <b>kubus</b>. De rest krijg je erbij.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (9.5)</b><ul class="lst">
<li><b>Prisma, cilinder</b>: grondvlak &times; hoogte.</li>
<li><b>Kegel, piramide</b>: 1/3 &times; grondvlak &times; hoogte.</li>
<li><b>Bol</b>: 4/3 &times; &pi; &times; straal&sup3;.</li></ul></div>`},

{heading:'9.6 Oppervlakte vergroten',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>de <b>oppervlakte</b> van een vergroting berekenen</li>
<li>de <b>vergrotingsfactor</b> berekenen uit twee oppervlaktes</li></ul></div>`
+`<h5 class="sub">Heen en terug</h5>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Factor naar oppervlakte</h4><p>oppervlakte beeld = <b>factor&sup2;</b> &times; oppervlakte origineel</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Oppervlakte naar factor</h4><p>factor = <b>&radic;</b>(oppervlakte beeld : oppervlakte origineel)</p></div></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: twee zeshoeken</h4><p>Vergrotingsfactor <b>1,5</b>. De kleine zeshoek is <b>4,5 cm&sup2;</b>.</p><div class="antwoord">1,5&sup2; &times; 4,5 = 10,125, dus <b>10,1 cm&sup2;</b>.</div></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: een muurschildering</h4><p>Een tekening van <b>15 bij 10 cm</b> wordt een muurschildering van <b>8,64 m&sup2;</b>.</p><div class="antwoord">Origineel: 15 &times; 10 = <b>150 cm&sup2;</b>. 8,64 m&sup2; = 8,64 &times; 100 &times; 100 = <b>86 400 cm&sup2;</b>. Factor: &radic;(86 400 : 150) = &radic;576 = <b>24</b>. De schildering is 24 &times; 15 = <b>360 cm</b> bij 24 &times; 10 = <b>240 cm</b>.</div></div>`
+`<div class="call warn"><b>Eerst dezelfde eenheid!</b> m&sup2; en cm&sup2; mag je niet zomaar delen. Reken eerst om, anders klopt de factor niet.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Een oppervlakte wordt 9 keer zo groot. Wat is de vergrotingsfactor?</p><p class="check-a">&radic;9 = <b>3</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (9.6)</b><ul class="lst">
<li>Oppervlakte: <b>&times; factor&sup2;</b>.</li>
<li>Terug naar de factor: <b>wortel</b> van de verhouding.</li>
<li>Eerst <b>dezelfde eenheid</b>.</li></ul></div>`},

{heading:'9.7 Inhoud vergroten',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>de <b>inhoud</b> van een vergroting berekenen</li>
<li>de <b>vergrotingsfactor</b> berekenen met de <b>derdemachtswortel</b></li></ul></div>`
+`<h5 class="sub">Heen en terug</h5>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Factor naar inhoud</h4><p>inhoud beeld = <b>factor&sup3;</b> &times; inhoud origineel</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Inhoud naar factor</h4><p>factor = <b>&#8731;</b>(inhoud beeld : inhoud origineel)</p></div></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: twee containers</h4><p>De kleine container is <b>40 liter</b>, de grote <b>135 liter</b>. Ze zijn gelijkvormig.</p><div class="antwoord">135 : 40 = <b>3,375</b>. Factor: &#8731;3,375 = <b>1,5</b>.</div></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: twee kubussen</h4><p>Inhoud <b>8 cm&sup3;</b> en <b>216 cm&sup3;</b>.</p><div class="antwoord">216 : 8 = 27. &#8731;27 = <b>3</b>: elke ribbe is 3 keer zo lang.</div></div>`
+`<div class="call warn"><b>Veelgemaakte fout:</b> bij inhoud de <b>gewone wortel</b> nemen. Inhoud gaat in <b>drie</b> richtingen, dus de <b>derdemachtswortel</b> (&#8731; op je rekenmachine).</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Een inhoud wordt 8 keer zo groot. Wat is de vergrotingsfactor?</p><p class="check-a">&#8731;8 = <b>2</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (9.7)</b><ul class="lst">
<li>Inhoud: <b>&times; factor&sup3;</b>.</li>
<li>Terug naar de factor: <b>derdemachtswortel</b>.</li>
<li>Oppervlakte &sup2; en &radic;, inhoud &sup3; en &#8731;.</li></ul></div>`}
],
terms:[
['Are','Een eenheid van oppervlakte, gelijk aan 1 dam² (100 m²).',0],
['Hectare (ha)','Een eenheid van oppervlakte, gelijk aan 1 hm² (10 000 m²).',0],
['Cc (cubieke centimeter)','Een andere naam voor cm³, gelijk aan 1 mL.',0],
['Omtrek','De totale lengte van alle zijden van een vlakke figuur bij elkaar opgeteld.',1],
['Parallellogram','Een vierhoek waarbij de overstaande zijden evenwijdig en even lang zijn.',1],
['Samengestelde vlakke figuur','Een figuur die bestaat uit meerdere gewone vlakke figuren samen.',2],
['Verdelen','Een methode om de oppervlakte van een samengestelde figuur te berekenen door de figuur in stukken te verdelen en de oppervlaktes op te tellen.',2],
['Inlijsten','Een methode om de oppervlakte van een samengestelde figuur te berekenen door er een grote figuur omheen te tekenen en de te veel berekende stukken eraf te trekken.',2],
['Cilindermantel','Het gebogen zijvlak van een cilinder; de uitslag ervan is een rechthoek.',3],
['Prisma','Een ruimtefiguur met twee gelijke, evenwijdige veelhoeken als grondvlak en bovenvlak, verbonden door rechthoeken.',4],
['Kegel','Een ruimtefiguur met een cirkelvormig grondvlak en een top.',4],
['Vergrotingsfactor','Het getal waarmee alle lengtematen van een figuur worden vermenigvuldigd bij een vergroting (of verkleining).',5],
['Derdemachtswortel','De bewerking die het omgekeerde is van de derde macht; gebruikt om de vergrotingsfactor uit een inhoud te berekenen.',6]
],
cards:[
['Hoeveel keer reken je om bij een stap in de lengte-eenheden (bijvoorbeeld van m naar dm)?','×10 (of :10 de andere kant op).',0],
['Hoeveel keer reken je om bij een stap in de oppervlakte-eenheden (bijvoorbeeld van m² naar dm²)?','×100 (of :100 de andere kant op).',0],
['Hoeveel keer reken je om bij een stap in de inhoud-eenheden (bijvoorbeeld van m³ naar dm³)?','×1000 (of :1000 de andere kant op).',0],
['Wat is de formule voor de oppervlakte van een driehoek?','0,5 × zijde × bijbehorende hoogte.',1],
['Wat is de formule voor de oppervlakte van een parallellogram?','Zijde × bijbehorende hoogte.',1],
['Welke twee methodes gebruik je om de oppervlakte van een samengestelde figuur te berekenen?','Verdelen en inlijsten.',2],
['Hoeveel zijvlakken heeft een cilinder?','Drie: het bovenvlak, het ondervlak (allebei cirkels) en de cilindermantel.',3],
['Wat is de formule voor de inhoud van een balk?','Lengte × breedte × hoogte.',4],
['Wat is de formule voor de inhoud van een kegel?','1/3 × oppervlakte grondvlak × hoogte.',4],
['Wat is de formule voor de inhoud van een bol?','4/3 × π × straal³.',4],
['Hoe bereken je de vergrotingsfactor uit twee oppervlaktes?','Vergrotingsfactor = √(oppervlakte vergroting : oppervlakte origineel).',5],
['Hoe bereken je de oppervlakte van een vergroting?','Oppervlakte beeld = vergrotingsfactor² × oppervlakte origineel.',5],
['Hoe bereken je de vergrotingsfactor uit twee inhouden?','Vergrotingsfactor = derdemachtswortel van (inhoud vergroting : inhoud origineel).',6],
['Hoe bereken je de inhoud van een vergroting?','Inhoud beeld = vergrotingsfactor³ × inhoud origineel.',6]
],
quiz:[
['Reken 7,5 m² om naar cm².',['750 cm²','7500 cm²','75 000 cm²','750 000 cm²'],2,'Van m² naar cm² zijn twee stappen ×100: 7,5 × 100 × 100 = 75 000 cm².'],
['Wat is 1 hectare (ha)?',['1 m²','1 are (100 m²)','1 hm² (10 000 m²)','1 km²'],2,'1 hectare (ha) is gelijk aan 1 hm², oftewel 10 000 m².'],
['Wat is de formule voor de oppervlakte van een rechthoek?',['Lengte + breedte','Lengte × breedte','0,5 × lengte × breedte','2 × (lengte + breedte)'],1,'Oppervlakte rechthoek = lengte × breedte.'],
['Bereken de oppervlakte van een driehoek met zijde 8 cm en bijbehorende hoogte 5 cm.',['13 cm²','20 cm²','40 cm²','80 cm²'],1,'Oppervlakte driehoek = 0,5 × 8 × 5 = 20 cm².'],
['Welke twee methodes gebruik je om de oppervlakte van een samengestelde vlakke figuur te berekenen?',['Optellen en aftrekken','Verdelen en inlijsten','Meten en schatten','Vermenigvuldigen en delen'],1,'De twee methodes zijn verdelen (in stukken opdelen) en inlijsten (om de figuur heen tekenen en aftrekken).'],
['Een figuur bestaat uit een rechthoek (35 cm²) waaruit een halve cirkel (9,8 cm²) is weggehaald. Wat is de oppervlakte van de figuur? Rond af op één decimaal.',['25,2 cm²','35,0 cm²','44,8 cm²','9,8 cm²'],0,'35 − 9,8 = 25,2 cm² (methode inlijsten).'],
['Hoeveel zijvlakken heeft een cilinder?',['Twee','Drie','Vier','Vijf'],1,'Een cilinder heeft drie zijvlakken: het bovenvlak, het ondervlak en de cilindermantel.'],
['Welke vorm heeft de uitslag van een cilindermantel?',['Een cirkel','Een driehoek','Een rechthoek','Een vijfhoek'],2,'De uitslag van een cilindermantel is een rechthoek, met lengte = omtrek van de cirkel en breedte = hoogte van de cilinder.'],
['Wat is de formule voor de inhoud van een kubus?',['Lengte × breedte','Lengte × breedte × hoogte','0,5 × lengte × breedte × hoogte','4/3 × π × straal³'],1,'Inhoud kubus = lengte × breedte × hoogte.'],
['Wat is de formule voor de inhoud van een piramide?',['Oppervlakte grondvlak × hoogte','1/3 × oppervlakte grondvlak × hoogte','4/3 × π × straal³','π × straal² × hoogte'],1,'Inhoud piramide = 1/3 × oppervlakte grondvlak × hoogte.'],
['Bereken de inhoud van een kegel met grondvlakstraal 2 cm en hoogte 5 cm. Rond af op één decimaal.',['10,5 cm³','20,9 cm³','31,4 cm³','62,8 cm³'],1,'Inhoud kegel = 1/3 × π × 2² × 5 ≈ 20,9 cm³.'],
['Twee zeshoeken zijn gelijkvormig met vergrotingsfactor 1,5. De oppervlakte van de kleine zeshoek is 4,5 cm². Wat is de oppervlakte van de grote zeshoek?',['6,75 cm²','9,0 cm²','10,1 cm²','13,5 cm²'],2,'Oppervlakte beeld = 1,5² × 4,5 = 10,125 ≈ 10,1 cm².'],
['Hoe bereken je de vergrotingsfactor als je de oppervlaktes van twee gelijkvormige figuren weet?',['Deel de oppervlaktes door elkaar','Trek de wortel uit de verhouding van de oppervlaktes','Vermenigvuldig de oppervlaktes','Trek de oppervlaktes van elkaar af'],1,'Vergrotingsfactor = √(oppervlakte vergroting : oppervlakte origineel).'],
['Twee kubussen zijn gelijkvormig. De kleine heeft inhoud 8 cm³, de grote 216 cm³. Wat is de vergrotingsfactor?',['2','3','9','27'],1,'Vergrotingsfactor = ³√(216 : 8) = ³√27 = 3.'],
['Hoe bereken je de inhoud van een vergroting als je de vergrotingsfactor en de inhoud van het origineel weet?',['Inhoud origineel × vergrotingsfactor','Inhoud origineel × vergrotingsfactor²','Inhoud origineel × vergrotingsfactor³','Inhoud origineel : vergrotingsfactor'],2,'Inhoud beeld = vergrotingsfactor³ × inhoud origineel.'],
['Bij het vergroten van een figuur gebruik je bij oppervlakte de vergrotingsfactor in het kwadraat, en bij inhoud...',['Ook in het kwadraat','In de derde macht','Zonder macht','In de vierde macht'],1,'Bij inhoud gebruik je de vergrotingsfactor in de derde macht.']
]
});
