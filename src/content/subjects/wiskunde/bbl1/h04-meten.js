import { registerChapter } from '../../../registry.js';

/* Rebuilt 2026-09-25 to the recipe of Economie TL4 H1 (change 6), short
   sentences for BBL. Checked against the book: units of time and weight
   (4.1), hectare/are/centiare in the area schema (4.3), the liter row in
   steps of 10 (4.6) and km/uur to m/s with : 3,6 (4.8) were missing. The
   drawing is unchanged. Terms, cards and quiz unchanged. */
registerChapter('wiskunde|bbl|1|4', {
title:'Meten',
summary:[
{heading:'4.1 Eenheden',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>welke <b>eenheden</b> je gebruikt bij meten</li>
<li>wat de <b>voorvoegsels</b> kilo, hecto, deca, deci, centi en milli betekenen</li></ul></div>`
+`<div class="box"><h4>Waar dit hoofdstuk over gaat</h4><p>Je leert eenheden <b>omrekenen</b> voor lengte, oppervlakte, inhoud en snelheid. En je berekent de <b>omtrek</b>, de <b>oppervlakte</b> en de <b>inhoud</b> van figuren.</p></div>`
+`<h5 class="sub">Soorten eenheden</h5>`
+`<div class="tblwrap"><table class="tbl"><tr><th>Je meet</th><th>Eenheden</th></tr><tr><td><b>lengte</b></td><td>kilometer, meter, centimeter, millimeter</td></tr><tr><td><b>tijd</b></td><td>minuut, uur, maand, jaar</td></tr><tr><td><b>gewicht</b></td><td>gram, kilogram</td></tr><tr><td><b>snelheid</b></td><td>kilometer per uur</td></tr></table></div>`
+`<h5 class="sub">Voorvoegsels</h5>`
+`<div class="box"><h4>Uit het Grieks</h4><p>De <b>voorvoegsels</b> komen uit het Grieks. Ze zeggen hoe groot of klein een eenheid is.</p></div>`
+`<div class="tblwrap"><table class="tbl"><tr><th>Voorvoegsel</th><th>Betekenis</th><th>Waarde</th></tr><tr><td><b>kilo</b></td><td>duizend</td><td>1000</td></tr><tr><td><b>hecto</b></td><td>honderd</td><td>100</td></tr><tr><td><b>deca</b></td><td>tien</td><td>10</td></tr><tr><td><b>deci</b></td><td>tiende</td><td>0,1</td></tr><tr><td><b>centi</b></td><td>honderdste</td><td>0,01</td></tr><tr><td><b>milli</b></td><td>duizendste</td><td>0,001</td></tr></table></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: kilo en centi</h4><p>Wat betekenen kilometer en centimeter?</p><div class="antwoord">Een kilometer is <b>1000 meter</b>. Een centimeter is <b>0,01 meter</b>.</div></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Hoeveel gram is een kilogram?</p><p class="check-a">Kilo is duizend, dus <b>1000 gram</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (4.1)</b><ul class="lst">
<li>Bij meten gebruik je <b>eenheden</b>, zoals meter, liter en gram.</li>
<li><b>kilo</b> = 1000, <b>hecto</b> = 100, <b>deca</b> = 10.</li>
<li><b>deci</b> = 0,1, <b>centi</b> = 0,01, <b>milli</b> = 0,001.</li></ul></div>`},

{heading:'4.2 Eenheden van lengte',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>eenheden van <b>lengte</b> omrekenen met een schema</li>
<li>de <b>omtrek</b> van een figuur berekenen</li></ul></div>`
+`<h5 class="sub">Het schema</h5>`
+`<div class="box"><h4>Stapjes van 10</h4><p>km &rarr; hm &rarr; dam &rarr; m &rarr; dm &rarr; cm &rarr; mm. Een stap naar <b>rechts</b>: <b>&times; 10</b>. Een stap naar <b>links</b>: <b>: 10</b>.</p></div>`
+`<div class="call reken"><b>Stappenplan</b><ol class="num">
<li>Zoek beide eenheden in het <b>schema</b>.</li>
<li>Tel het aantal <b>stappen</b> ertussen.</li>
<li>Naar rechts: zo vaak <b>&times; 10</b>. Naar links: zo vaak <b>: 10</b>.</li></ol></div>`
+`<figure class='fig'><svg viewBox="0 0 340 175" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="De trap van lengte-eenheden van km tot mm, met maal 10 naar rechts en gedeeld door 10 naar links"><defs><marker id="trapR" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--accent)"/></marker></defs><g fill="var(--accent)" fill-opacity=".16" stroke="var(--accent)" stroke-width="1.5"><rect x="14" y="34" width="40" height="24" rx="4"/><rect x="60" y="34" width="40" height="24" rx="4"/><rect x="106" y="34" width="40" height="24" rx="4"/><rect x="152" y="34" width="40" height="24" rx="4"/><rect x="198" y="34" width="40" height="24" rx="4"/><rect x="244" y="34" width="40" height="24" rx="4"/><rect x="290" y="34" width="40" height="24" rx="4"/></g><g fill="var(--txt)" font-size="11" font-weight="600" font-family="inherit" text-anchor="middle"><text x="34" y="51">km</text><text x="80" y="51">hm</text><text x="126" y="51">dam</text><text x="172" y="51">m</text><text x="218" y="51">dm</text><text x="264" y="51">cm</text><text x="310" y="51">mm</text></g><g stroke="var(--accent)" stroke-width="1.6" fill="none" marker-end="url(#trapR)"><path d="M34 26 Q57 8 78 26"/><path d="M80 26 Q103 8 124 26"/><path d="M126 26 Q149 8 170 26"/><path d="M172 26 Q195 8 216 26"/><path d="M218 26 Q241 8 262 26"/><path d="M264 26 Q287 8 308 26"/><path d="M310 66 Q287 84 266 66"/><path d="M264 66 Q241 84 220 66"/><path d="M218 66 Q195 84 174 66"/><path d="M172 66 Q149 84 128 66"/><path d="M126 66 Q103 84 82 66"/><path d="M80 66 Q57 84 36 66"/></g><text x="172" y="14" fill="var(--accent)" font-size="10" font-weight="600" font-family="inherit" text-anchor="middle">naar rechts: keer 10</text><text x="172" y="98" fill="var(--accent)" font-size="10" font-weight="600" font-family="inherit" text-anchor="middle">naar links: delen door 10</text><g fill="var(--mut)" font-size="9.5" font-family="inherit" text-anchor="middle"><text x="172" y="124">1 km = 1000 m &nbsp;&middot;&nbsp; 1 m = 100 cm &nbsp;&middot;&nbsp; 1 cm = 10 mm</text><text x="172" y="142">Bij <tspan font-weight="600">oppervlakte</tspan> is elke stap geen 10 maar 100 (m<tspan baseline-shift="super" font-size="7">2</tspan>, cm<tspan baseline-shift="super" font-size="7">2</tspan>).</text><text x="172" y="160">Bij <tspan font-weight="600">inhoud</tspan> is elke stap 1000 (m<tspan baseline-shift="super" font-size="7">3</tspan>, dm<tspan baseline-shift="super" font-size="7">3</tspan>, cm<tspan baseline-shift="super" font-size="7">3</tspan>).</text></g></svg><figcaption>Tel het aantal stappen tussen de twee eenheden, en vermenigvuldig of deel net zo vaak. Drie stappen naar rechts is dus keer 1000.</figcaption></figure>`
+`<div class="tblwrap"><table class="tbl"><tr><th>Berekening</th><th>Uitkomst</th></tr><tr><td>8 km</td><td>= 8 &times; 10 &times; 10 &times; 10 = <b>8000 m</b></td></tr><tr><td>5600 mm</td><td>= 5600 : 10 : 10 : 10 = <b>5,6 m</b></td></tr><tr><td>3,7 dm</td><td>= 3,7 &times; 10 &times; 10 = <b>370 mm</b></td></tr></table></div>`
+`<h5 class="sub">Omtrek</h5>`
+`<div class="box"><h4>Alle zijden bij elkaar</h4><p>De <b>omtrek</b> is de lengte van <b>alle zijden</b> bij elkaar opgeteld. Bij de omtrek hoort altijd een <b>lengte-eenheid</b>, zoals cm of m.</p></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: rechthoek van 4 cm bij 3 cm</h4><p>Bereken de omtrek.</p><div class="antwoord">4 + 3 + 4 + 3 = <b>14 cm</b>.</div></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Hoeveel cm is 2,5 m?</p><p class="check-a">Twee stappen naar rechts: 2,5 &times; 10 &times; 10 = <b>250 cm</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (4.2)</b><ul class="lst">
<li>Lengte: km, hm, dam, m, dm, cm, mm. Steeds <b>&times; 10</b> of <b>: 10</b>.</li>
<li>De <b>omtrek</b> is alle zijden bij elkaar opgeteld.</li></ul></div>`},

{heading:'4.3 Eenheden van oppervlakte',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>eenheden van <b>oppervlakte</b> omrekenen</li>
<li>de namen <b>hectare</b>, <b>are</b> en <b>centiare</b></li></ul></div>`
+`<h5 class="sub">Stapjes van 100</h5>`
+`<div class="box"><h4>Het schema</h4><p>Het rijtje is hetzelfde als bij lengte, met een <b>&sup2;</b> erachter: km&sup2;, hm&sup2;, dam&sup2;, m&sup2;, dm&sup2;, cm&sup2;, mm&sup2;. Maar nu zijn de stapjes <b>&times; 100</b> en <b>: 100</b>. Het schema staat ook op je <b>maatkaart</b>.</p></div>`
+`<div class="call waarom">Waarom <b>100</b>? Op <b>1 cm&sup2;</b> passen <b>10 bij 10</b> vierkantjes van 1 mm&sup2;. Dat zijn er <b>100</b>.</div>`
+`<div class="box"><h4>Andere namen</h4><p>1 hm&sup2; = 1 <b>hectare</b> (ha). 1 dam&sup2; = 1 <b>are</b> (a). 1 m&sup2; = 1 <b>centiare</b> (ca).</p></div>`
+`<div class="g2">`
+`<div class="voorbeeld"><h4>Voorbeeld: 5 cm&sup2; naar mm&sup2;</h4><p>Eén stap naar rechts.</p><div class="antwoord">5 &times; 100 = <b>500 mm&sup2;</b>.</div></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: 60 ha naar km&sup2;</h4><p>Hectare is hm&sup2;. Eén stap naar links.</p><div class="antwoord">60 : 100 = <b>0,6 km&sup2;</b>.</div></div></div>`
+`<div class="call warn"><b>Let op:</b> lengte gaat met <b>10</b>, oppervlakte met <b>100</b>. Kijk dus eerst of er een <b>&sup2;</b> staat.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Hoeveel dm&sup2; is 3 m&sup2;?</p><p class="check-a">Eén stap naar rechts: 3 &times; 100 = <b>300 dm&sup2;</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (4.3)</b><ul class="lst">
<li>Oppervlakte: stapjes van <b>&times; 100</b> of <b>: 100</b>.</li>
<li>hm&sup2; = <b>hectare</b>, dam&sup2; = <b>are</b>, m&sup2; = <b>centiare</b>.</li></ul></div>`},

{heading:'4.4 Oppervlakte rechthoek',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>de <b>oppervlakte</b> van een <b>rechthoek</b> berekenen</li>
<li>de goede <b>eenheid</b> erbij zetten</li></ul></div>`
+`<h5 class="sub">De formule</h5>`
+`<div class="call reken"><b>oppervlakte rechthoek = lengte &times; breedte</b></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: een tuin</h4><p>Een tuin is <b>6 m</b> lang en <b>1,75 m</b> breed. Bereken de oppervlakte.</p><div class="antwoord">6 &times; 1,75 = <b>10,5 m&sup2;</b>.</div></div>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Omtrek</h4><p>De <b>rand</b> eromheen. Je <b>telt op</b>. Eenheid: <b>m</b> of <b>cm</b>.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Oppervlakte</h4><p>Hoeveel <b>ruimte</b> erin. Je <b>vermenigvuldigt</b>. Eenheid: <b>m&sup2;</b> of <b>cm&sup2;</b>.</p></div></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Een rechthoek is 8 cm bij 5 cm. Wat is de oppervlakte?</p><p class="check-a">8 &times; 5 = <b>40 cm&sup2;</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (4.4)</b><ul class="lst">
<li><b>oppervlakte rechthoek = lengte &times; breedte</b>.</li>
<li>Zet de goede <b>eenheid</b> erbij, bijvoorbeeld <b>m&sup2;</b> of <b>cm&sup2;</b>.</li></ul></div>`},

{heading:'4.5 Oppervlakte driehoek',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>de <b>oppervlakte</b> van een <b>driehoek</b> berekenen</li>
<li>daarvoor een <b>rechthoek</b> om de driehoek tekenen</li></ul></div>`
+`<h5 class="sub">De helft van een rechthoek</h5>`
+`<div class="call reken"><b>Stappenplan</b><ol class="num">
<li>Teken een <b>rechthoek</b> die precies om de driehoek past.</li>
<li>Bereken de <b>oppervlakte van de rechthoek</b>.</li>
<li>Deel door <b>2</b>. Dat is de oppervlakte van de driehoek.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: rechthoek van 4 cm bij 3 cm</h4><p>De driehoek past precies in deze rechthoek.</p><div class="antwoord">Rechthoek: 4 &times; 3 = <b>12 cm&sup2;</b>. Driehoek: 12 : 2 = <b>6 cm&sup2;</b>.</div></div>`
+`<div class="call waarom">Waarom <b>de helft</b>? De driehoek vult precies de <b>helft</b> van de rechthoek. De andere helft is de ruimte eromheen.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">De rechthoek om een driehoek is 10 cm bij 6 cm. Wat is de oppervlakte van de driehoek?</p><p class="check-a">10 &times; 6 = 60. 60 : 2 = <b>30 cm&sup2;</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (4.5)</b><ul class="lst">
<li>Teken eerst de <b>rechthoek</b> die precies om de driehoek past.</li>
<li><b>oppervlakte driehoek = oppervlakte rechthoek : 2</b>.</li></ul></div>`},

{heading:'4.6 Eenheden van inhoud',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>eenheden van <b>inhoud</b> omrekenen</li>
<li><b>liters</b> koppelen aan dm&sup3; en cm&sup3;</li></ul></div>`
+`<h5 class="sub">Stapjes van 1000</h5>`
+`<div class="box"><h4>Het schema</h4><p>Een kubus, een pan en een aquarium hebben een <b>inhoud</b>. De eenheden zijn m&sup3;, dm&sup3;, cm&sup3; en mm&sup3;. De stapjes zijn <b>&times; 1000</b> en <b>: 1000</b>.</p></div>`
+`<div class="box"><h4>Twee namen</h4><p><b>1 dm&sup3; = 1 liter</b> (L). <b>1 cm&sup3; = 1 milliliter</b> (mL).</p></div>`
+`<div class="box"><h4>De liters</h4><p>Tussen L en mL liggen <b>dL</b> en <b>cL</b>. Daar zijn de stapjes <b>&times; 10</b> en <b>: 10</b>, net als bij lengte. Je ziet ze op de <b>maatbeker</b> van je maatkaart.</p></div>`
+`<div class="g2">`
+`<div class="voorbeeld"><h4>Voorbeeld: 7 m&sup3; naar liter</h4><p>m&sup3; naar dm&sup3; is één stap.</p><div class="antwoord">7 &times; 1000 = <b>7000 dm&sup3;</b> = <b>7000 L</b>.</div></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: 800 mL naar dL</h4><p>mL, cL, dL: twee stappen naar links.</p><div class="antwoord">800 : 10 : 10 = <b>8 dL</b>.</div></div></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Hoeveel liter is 3 dm&sup3;?</p><p class="check-a">1 dm&sup3; = 1 L, dus <b>3 L</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (4.6)</b><ul class="lst">
<li>Inhoud: stapjes van <b>&times; 1000</b> of <b>: 1000</b>.</li>
<li><b>1 dm&sup3; = 1 L</b> en <b>1 cm&sup3; = 1 mL</b>.</li>
<li>L, dL, cL, mL: stapjes van <b>10</b>.</li></ul></div>`},

{heading:'4.7 Inhoud balk en kubus',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>de <b>inhoud</b> van een <b>balk</b> en een <b>kubus</b> berekenen</li>
<li>de namen <b>kuub</b> en <b>cc</b></li></ul></div>`
+`<h5 class="sub">De formule</h5>`
+`<div class="call reken"><b>inhoud balk = lengte &times; breedte &times; hoogte</b></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: doos van 25 bij 10 bij 8 cm</h4><p>Bereken de inhoud.</p><div class="antwoord">25 &times; 10 &times; 8 = <b>2000 cm&sup3;</b>. Dat is <b>2 liter</b>.</div></div>`
+`<div class="call waarom">Waarom werkt dit ook voor een <b>kubus</b>? Een kubus is een balk waarvan lengte, breedte en hoogte <b>even lang</b> zijn.</div>`
+`<div class="g2">`
+`<div class="term"><b>Kuub</b><p>Een andere naam voor <b>m&sup3;</b> (kubieke meter).</p></div>`
+`<div class="term"><b>Cc</b><p>Een andere naam voor <b>cm&sup3;</b>. Uit het Frans: <i>centimetre cubique</i>.</p></div></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Een kubus heeft ribben van 3 cm. Wat is de inhoud?</p><p class="check-a">3 &times; 3 &times; 3 = <b>27 cm&sup3;</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (4.7)</b><ul class="lst">
<li><b>inhoud = lengte &times; breedte &times; hoogte</b>, voor balk en kubus.</li>
<li>Inhoud in liters? <b>1 dm&sup3; = 1 L</b>.</li>
<li><b>kuub</b> = m&sup3;, <b>cc</b> = cm&sup3;.</li></ul></div>`},

{heading:'4.8 Eenheden van snelheid',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>de twee belangrijkste eenheden van <b>snelheid</b></li>
<li>omrekenen tussen <b>m/s</b> en <b>km/uur</b></li></ul></div>`
+`<h5 class="sub">Twee eenheden</h5>`
+`<div class="g2">`
+`<div class="term"><b>km/uur</b><p><b>Kilometer per uur</b>. Hoeveel km je in een uur aflegt.</p></div>`
+`<div class="term"><b>m/s</b><p><b>Meter per seconde</b>. Hoeveel meter je in een seconde aflegt.</p></div></div>`
+`<h5 class="sub">Omrekenen</h5>`
+`<div class="call reken"><b>Zo reken je om</b><ol class="num">
<li>Van <b>m/s</b> naar <b>km/uur</b>: <b>&times; 3,6</b>.</li>
<li>Van <b>km/uur</b> naar <b>m/s</b>: <b>: 3,6</b>.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: Loes loopt 2,9 m/s</h4><p>Hoeveel km/uur is dat?</p><div class="antwoord">2,9 &times; 3,6 = 10,44. Afgerond <b>10,4 km/uur</b>.</div></div>`
+`<div class="call warn"><b>Let op:</b> het getal in <b>km/uur</b> is altijd <b>groter</b> dan in m/s. Is je antwoord kleiner? Dan heb je de verkeerde kant op gerekend.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Hoeveel km/uur is 10 m/s?</p><p class="check-a">10 &times; 3,6 = <b>36 km/uur</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (4.8)</b><ul class="lst">
<li>Snelheid meet je in <b>km/uur</b> of <b>m/s</b>.</li>
<li>m/s naar km/uur: <b>&times; 3,6</b>. Terug: <b>: 3,6</b>.</li></ul></div>`}
],
terms:[
['eenheid','Een vaste maat waarmee je iets meet, zoals meter, liter of gram.',0],
['kilo','Voorvoegsel dat duizend (1000) betekent.',0],
['hecto','Voorvoegsel dat honderd (100) betekent.',0],
['deca','Voorvoegsel dat tien (10) betekent.',0],
['deci','Voorvoegsel dat een tiende (0,1) betekent.',0],
['centi','Voorvoegsel dat een honderdste (0,01) betekent.',0],
['milli','Voorvoegsel dat een duizendste (0,001) betekent.',0],
['omtrek','De som van de lengtes van alle zijden van een figuur.',1],
['oppervlakte','De grootte van een vlak, bijvoorbeeld in cm² of m².',3],
['inhoud','Hoeveel ruimte een ruimtefiguur inneemt, bijvoorbeeld in cm³ of liter.',5],
['kubieke meter (kuub)','Een andere naam voor m³, de eenheid van inhoud.',6],
['kilometer per uur (km/uur)','Een eenheid van snelheid: het aantal kilometers dat in een uur wordt afgelegd.',0],
['meter per seconde (m/s)','Een eenheid van snelheid: het aantal meters dat in een seconde wordt afgelegd.',7]
],
cards:[
['Wat betekent het voorvoegsel kilo?','Duizend (1000).',0],
['Wat betekent het voorvoegsel centi?','Een honderdste (0,01).',0],
['Wat betekent het voorvoegsel milli?','Een duizendste (0,001).',0],
['Hoeveel meter is 1 kilometer?','1000 meter.',0],
['Met welke stapjes reken je eenheden van lengte om?','x 10 of : 10.',2],
['Met welke stapjes reken je eenheden van oppervlakte om?','x 100 of : 100.',2],
['Met welke stapjes reken je eenheden van inhoud om?','x 1000 of : 1000.',5],
['Hoe bereken je de omtrek van een figuur?','Je telt de lengtes van alle zijden bij elkaar op.',1],
['Wat is de formule voor de oppervlakte van een rechthoek?','oppervlakte rechthoek = lengte x breedte.',3],
['Hoe bereken je de oppervlakte van een driehoek?','Teken de rechthoek die er precies omheen past en deel de oppervlakte daarvan door 2.',4],
['Hoeveel liter is 1 dm³?','1 liter.',0],
['Hoeveel milliliter is 1 cm³?','1 milliliter.',5],
['Wat is de formule voor de inhoud van een balk?','inhoud balk = lengte x breedte x hoogte.',6],
['Wat is een andere naam voor m³?','Kuub.',6],
['Wat zijn de twee belangrijkste eenheden van snelheid?','Kilometer per uur (km/uur) en meter per seconde (m/s).',7],
['Hoe reken je m/s om naar km/uur?','Je vermenigvuldigt met 3,6.',1],
['Iemand loopt 2,9 m/s. Hoeveel km/uur is dat?','2,9 x 3,6 = 10,44, afgerond 10,4 km/uur.',7]
],
quiz:[
['Wat betekent het voorvoegsel kilo?',['Honderd','Tien','Duizend','Een duizendste'],2,'Kilo betekent duizend, bijvoorbeeld een kilometer is 1000 meter.'],
['Wat betekent het voorvoegsel centi?',['Een tiende','Een honderdste','Honderd','Duizend'],1,'Centi betekent een honderdste; een centimeter is 0,01 meter.'],
['Met welke stap reken je eenheden van lengte om?',['x 100 of : 100','x 10 of : 10','x 1000 of : 1000','x 2 of : 2'],1,'Eenheden van lengte reken je om met stapjes van x 10 of : 10.'],
['Met welke stap reken je eenheden van oppervlakte om?',['x 10 of : 10','x 100 of : 100','x 1000 of : 1000','x 60 of : 60'],1,'Oppervlakte heeft twee dimensies, dus je rekent om met stapjes van x 100 of : 100.'],
['Met welke stap reken je eenheden van inhoud om?',['x 10 of : 10','x 100 of : 100','x 1000 of : 1000','x 3,6 of : 3,6'],2,'Inhoud heeft drie dimensies, dus je rekent om met stapjes van x 1000 of : 1000.'],
['Hoe bereken je de omtrek van een figuur?',['Lengte x breedte','Alle zijden bij elkaar optellen','Lengte x breedte x hoogte','De helft van de oppervlakte'],1,'De omtrek is de som van de lengtes van alle zijden.'],
['Wat is de oppervlakte van een rechthoek van 6 m bij 1,75 m?',['7,75 m²','10,5 m²','12 m²','1,75 m²'],1,'oppervlakte rechthoek = lengte x breedte = 6 x 1,75 = 10,5 m².'],
['Hoe bereken je de oppervlakte van een driehoek?',['Lengte x breedte x hoogte','De rechthoek eromheen berekenen en delen door 2','De omtrek delen door 2','Lengte x breedte'],1,'Je berekent de oppervlakte van de rechthoek die precies om de driehoek past, en deelt die door 2.'],
['Een rechthoek van 4 cm bij 3 cm past precies om een driehoek. Wat is de oppervlakte van de driehoek?',['3 cm²','6 cm²','7 cm²','12 cm²'],1,'De rechthoek heeft een oppervlakte van 4 x 3 = 12 cm²; de driehoek is de helft daarvan: 6 cm².'],
['Hoeveel liter is 1 dm³?',['0,1 liter','1 liter','10 liter','1000 liter'],1,'1 dm³ is precies 1 liter.'],
['Wat is de formule voor de inhoud van een balk?',['lengte + breedte + hoogte','lengte x breedte','lengte x breedte x hoogte','lengte x hoogte'],2,'inhoud balk = lengte x breedte x hoogte.'],
['Een balk is 25 cm bij 10 cm bij 8 cm. Wat is de inhoud?',['430 cm³','2000 cm³','2500 cm³','43 cm³'],1,'inhoud balk = 25 x 10 x 8 = 2000 cm³.'],
['Wat is een andere naam voor m³?',['Cc','Kuub','Are','Hectare'],1,'Een kubieke meter (m³) wordt ook wel een kuub genoemd.'],
['Wat zijn de twee belangrijkste eenheden van snelheid?',['Meter en centimeter','Kilometer per uur en meter per seconde','Liter en milliliter','Uur en seconde'],1,'De twee belangrijkste eenheden van snelheid zijn km/uur en m/s.'],
['Hoe reken je m/s om naar km/uur?',['Vermenigvuldigen met 3,6','Delen door 3,6','Vermenigvuldigen met 100','Delen door 1000'],0,'Om van m/s naar km/uur te gaan, vermenigvuldig je met 3,6.'],
['Loes loopt 2,9 m/s. Hoeveel km/uur is dat (afgerond op 1 decimaal)?',['2,9 km/uur','8,1 km/uur','10,4 km/uur','29 km/uur'],2,'2,9 x 3,6 = 10,44, afgerond op 1 decimaal is dat 10,4 km/uur.']
]
});
