import { registerChapter } from '../../../registry.js';

/* Rebuilt 2026-09-24 to the recipe of Economie TL4 H1 (change 6). Deel B
   (examentraining): headings stay unnumbered. The height drawing is
   unchanged. Terms, cards and quiz unchanged. */
registerChapter('wiskunde|tl|4|6', {
title:'Meetkunde vlakke figuren',
summary:[
{heading:'Oppervlakte en omtrek',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>de <b>omtrek</b> en <b>oppervlakte</b> van een <b>cirkel</b> berekenen</li>
<li>de oppervlakte van een <b>samengestelde figuur</b> berekenen</li></ul></div>`
+`<div class="box"><h4>Waar dit hoofdstuk over gaat</h4><p>Je herhaalt alles over <b>vlakke figuren</b>: <b>oppervlakte</b> en <b>omtrek</b>, <b>symmetrie</b>, <b>kijkhoek</b> en <b>koershoek</b>, <b>goniometrie</b> en <b>gelijkvormigheid</b>.</p></div>`
+`<h5 class="sub">De cirkel</h5>`
+`<div class="g2">`
+`<div class="box"><h4>Omtrek</h4><p><b>omtrek = &pi; &times; diameter</b></p><p>Deze formule krijg je op het <b>examen</b>.</p></div>`
+`<div class="box"><h4>Oppervlakte</h4><p><b>oppervlakte = &pi; &times; straal&sup2;</b></p><p>De <b>straal</b> is de <b>helft</b> van de diameter.</p></div></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: een ronde vijver</h4><p>De vijver heeft een <b>diameter van 12 m</b>, dus een straal van <b>6 m</b>.</p><div class="antwoord">Oppervlakte: &pi; &times; 6&sup2; &asymp; <b>113,1 m&sup2;</b>. Omtrek: &pi; &times; 12 &asymp; <b>37,70 m</b>.</div></div>`
+`<h5 class="sub">Samengestelde figuren</h5>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Verdelen</h4><p>Splits de figuur in <b>bekende figuren</b>, zoals een driehoek en een halve cirkel, en <b>tel</b> de oppervlaktes op.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Inlijsten</h4><p>Zet de figuur in een <b>grotere bekende figuur</b> en <b>trek</b> de stukken eraf.</p></div></div>`
+`<div class="call warn"><b>Rond tussendoor niet af.</b> Rond pas de <b>einduitkomst</b> af, anders telt het afronden op.</div>`
+`<figure class='fig'><svg viewBox="0 0 340 175" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Rechthoek, driehoek en parallellogram met de basis en de hoogte aangegeven"><g fill="var(--accent)" fill-opacity=".16" stroke="var(--accent)" stroke-width="1.8" stroke-linejoin="round"><rect x="22" y="42" width="80" height="56"/><path d="M132 98 L212 98 L182 42 Z"/><path d="M242 98 L312 98 L332 42 L262 42 Z"/></g><g stroke="var(--txt)" stroke-width="1.5" stroke-dasharray="5 4" fill="none" opacity=".9"><path d="M182 42 V98"/><path d="M262 42 V98"/></g><polyline points="35,98 35,85 22,85" fill="none" stroke="var(--txt)" stroke-width="1.5" opacity=".8"/><polyline points="182,98 195,98 195,85" fill="none" stroke="var(--txt)" stroke-width="1.5" opacity=".8"/><polyline points="262,98 275,98 275,85" fill="none" stroke="var(--txt)" stroke-width="1.5" opacity=".8"/><g fill="var(--mut)" font-size="9.5" font-family="inherit" text-anchor="middle"><text x="62" y="112">lengte</text><text x="172" y="112">basis</text><text x="277" y="112">basis</text></g><g fill="var(--mut)" font-size="9.5" font-family="inherit"><text x="16" y="74" text-anchor="end">breedte</text><text x="188" y="74">hoogte</text><text x="268" y="74">hoogte</text></g><g fill="var(--txt)" font-size="10.5" font-weight="600" font-family="inherit" text-anchor="middle"><text x="62" y="140">rechthoek</text><text x="172" y="140">driehoek</text><text x="277" y="140">parallellogram</text></g><g fill="var(--accent)" font-size="10" font-family="inherit" text-anchor="middle"><text x="62" y="158">l &times; b</text><text x="172" y="158">&frac12; &times; b &times; h</text><text x="277" y="158">b &times; h</text></g></svg><figcaption>De <b>hoogte</b> staat altijd loodrecht op de basis &mdash; ook als hij buiten de figuur valt. Dat is bijna altijd waar het misgaat, niet in de formule zelf.</figcaption></figure>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Wat is de straal van een cirkel met een diameter van 12 m?</p><p class="check-a"><b>6 m</b>: de straal is de helft van de diameter.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li>Cirkel: omtrek = <b>&pi; &times; diameter</b>, oppervlakte = <b>&pi; &times; straal&sup2;</b>.</li>
<li>Samengestelde figuur: <b>verdelen</b> of <b>inlijsten</b>; pas aan het eind afronden.</li>
<li>De <b>hoogte</b> staat altijd <b>loodrecht</b> op de basis.</li></ul></div>`},

{heading:'Symmetrie',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li><b>lijnsymmetrie</b> en <b>draaisymmetrie</b> herkennen</li>
<li>de kleinste <b>draaihoek</b> berekenen</li></ul></div>`
+`<h5 class="sub">Twee soorten symmetrie</h5>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Lijnsymmetrisch</h4><p>Je kunt de figuur langs een <b>symmetrieas</b> vouwen tot twee <b>spiegelbeeldige</b> helften.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Draaisymmetrisch</h4><p>Gedraaid om het <b>middelpunt</b> over een bepaalde hoek past de figuur weer <b>precies op zichzelf</b>.</p></div></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: een ster met 10 punten</h4><p>Hoe ver moet je de ster draaien tot hij weer <b>op zichzelf</b> past?</p><div class="antwoord">Een hele draai is <b>360&deg;</b>. Deel door het aantal punten: 360&deg; : 10 = <b>36&deg;</b>.</div></div>`
+`<div class="call waarom">Waarom <b>360&deg; delen</b>? Bij een ster met 10 gelijke punten past de figuur <b>10 keer</b> op zichzelf in één hele draai. Elke stap is dus een tiende van 360&deg;.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Wanneer is een figuur draaisymmetrisch?</p><p class="check-a">Als hij na een <b>draai om zijn middelpunt</b> weer precies op zichzelf past.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li><b>Lijnsymmetrie</b>: vouwen langs een symmetrieas.</li>
<li><b>Draaisymmetrie</b>: draaien om het middelpunt.</li>
<li>Kleinste <b>draaihoek</b> = 360&deg; : aantal gelijke delen.</li></ul></div>`},

{heading:'Kijkhoek en koershoek',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>een <b>kijkhoek</b> tekenen en gebruiken</li>
<li>een <b>koershoek</b> meten met een <b>koershoekmeter</b></li></ul></div>`
+`<h5 class="sub">Kijkhoek</h5>`
+`<div class="box"><h4>Wat zie je?</h4><p>De <b>kijkhoek</b> is de hoek tussen <b>twee kijklijnen</b> vanuit één punt. Alles wat <b>binnen</b> die hoek ligt, kun je zien. Vanuit een <b>steeg</b> zie je bijvoorbeeld alleen de huizen tussen de twee hoeken van de steeg.</p></div>`
+`<h5 class="sub">Koershoek</h5>`
+`<div class="box"><h4>Rond vanaf het noorden</h4><p>Een <b>koershoek</b> telt vanaf het <b>noorden (0&deg;)</b> met de klok mee tot <b>360&deg;</b>: <b>oost 90&deg;</b>, <b>zuid 180&deg;</b>, <b>west 270&deg;</b>.</p></div>`
+`<div class="call reken"><b>Stappenplan: een koershoek meten</b><ol class="num">
<li>Teken een lijn van je <b>vertrekpunt</b> naar je <b>bestemming</b>.</li>
<li>Leg het <b>midden</b> van de koershoekmeter op het vertrekpunt, met de <b>noordpijl naar het noorden</b>.</li>
<li>Draai de <b>rode lijn</b> op de getekende lijn en lees de koershoek af.</li></ol></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Welke koershoek hoort bij oost?</p><p class="check-a"><b>90&deg;</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li><b>Kijkhoek</b>: tussen twee kijklijnen; binnen de hoek kun je zien.</li>
<li><b>Koershoek</b>: vanaf het noorden met de klok mee, <b>0&deg; tot 360&deg;</b>.</li>
<li>Oost <b>90&deg;</b>, zuid <b>180&deg;</b>, west <b>270&deg;</b>.</li></ul></div>`},

{heading:'Goniometrie in vlakke figuren',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>een <b>zijde</b> berekenen in een vlakke figuur met <b>SOS, CAS of TOA</b></li></ul></div>`
+`<h5 class="sub">Een hoek en een zijde bekend</h5>`
+`<div class="box"><h4>Hetzelfde als in de driehoek</h4><p>Ook in <b>vlakke figuren</b> gebruik je <b>sinus</b>, <b>cosinus</b> en <b>tangens</b>. Zoek eerst een <b>rechthoekige driehoek</b> in de figuur, en kijk welke zijden je weet.</p></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: zijde AB</h4><p>&ang;B = <b>26&deg;</b>, de <b>aanliggende</b> zijde BC = <b>35,5 cm</b>, en AB is de <b>schuine</b> zijde.</p><div class="antwoord">Aanliggend en schuin: <b>CAS</b>. cos 26&deg; = 35,5 / AB, dus AB = 35,5 : cos 26&deg; &asymp; <b>39,5 cm</b>.</div></div>`
+`<div class="call ezel"><b>3 = 6 / 2.</b> Weet je 6 niet, dan doe je 2 &times; 3. Weet je 2 niet, dan doe je 6 : 3. Zo zet je cos 26&deg; = 35,5 / AB om naar AB = 35,5 : cos 26&deg;.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Hoe bereken je de schuine zijde met de cosinus?</p><p class="check-a"><b>schuine zijde = aanliggende zijde : cos(hoek)</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li>Zoek een <b>rechthoekige driehoek</b> in de figuur.</li>
<li>Kies <b>SOS, CAS of TOA</b> bij de zijden die je weet en zoekt.</li>
<li>Omzetten met <b>3 = 6 / 2</b>.</li></ul></div>`},

{heading:'Gelijkvormigheid en vergroten',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>met de <b>vergrotingsfactor</b> lengtes berekenen</li>
<li>de vergrotingsfactor berekenen uit <b>oppervlaktes</b></li></ul></div>`
+`<h5 class="sub">Lengtes vergroten</h5>`
+`<div class="box"><h4>Gelijkvormig</h4><p>Twee figuren zijn <b>gelijkvormig</b> als de overeenkomstige <b>hoeken even groot</b> zijn. Alle lengtes worden dan met <b>hetzelfde getal</b> vermenigvuldigd: de <b>vergrotingsfactor</b>.</p><p><b>vergrotingsfactor = lengte beeld : lengte origineel</b></p></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: twee driehoeken</h4><p>&#9651;PQR is gelijkvormig met &#9651;CAB. PQ = <b>15 cm</b>, CA = <b>30 cm</b>, PR = <b>25 cm</b>.</p><div class="antwoord">Vergrotingsfactor = 30 : 15 = <b>2</b>. Dan is CB = 25 &times; 2 = <b>50 cm</b>.</div></div>`
+`<h5 class="sub">Oppervlakte vergroten</h5>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Lengte</h4><p>&times; <b>vergrotingsfactor</b></p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Oppervlakte</h4><p>&times; <b>vergrotingsfactor&sup2;</b></p></div></div>`
+`<div class="call waarom">Waarom <b>in het kwadraat</b>? Een oppervlakte is <b>lengte &times; breedte</b>, en <b>allebei</b> worden ze met de vergrotingsfactor vermenigvuldigd.</div>`
+`<div class="voorbeeld"><h4>Voorbeeld: een foto als muurschildering</h4><p>Een foto van <b>10 &times; 15 cm</b> (150 cm&sup2;) wordt een muurschildering van <b>8,64 m&sup2;</b> = 86 400 cm&sup2;.</p><div class="antwoord">Vergrotingsfactor = &radic;(86 400 : 150) = &radic;576 = <b>24</b>. De muurschildering is 24 &times; 15 = <b>360 cm</b> bij 24 &times; 10 = <b>240 cm</b>.</div></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Hoe bereken je de vergrotingsfactor als je de twee oppervlaktes weet?</p><p class="check-a">vergrotingsfactor = <b>&radic;(oppervlakte vergroting : oppervlakte origineel)</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li><b>Gelijkvormig</b>: dezelfde hoeken, alle lengtes &times; dezelfde <b>vergrotingsfactor</b>.</li>
<li>Oppervlakte beeld = <b>vergrotingsfactor&sup2;</b> &times; oppervlakte origineel.</li>
<li>Terugrekenen: <b>&radic;</b> van de verhouding van de oppervlaktes.</li></ul></div>`}
],
terms:[
['samengestelde vlakke figuur','een figuur die bestaat uit meerdere bekende basisfiguren, zoals een driehoek en een halve cirkel',0],
['verdelen','een methode om de oppervlakte van een samengestelde figuur te vinden door hem op te splitsen in bekende figuren',0],
['inlijsten','een methode om de oppervlakte van een samengestelde figuur te vinden door hem in een grotere bekende figuur te passen en delen af te trekken',0],
['lijnsymmetrisch','een figuur die je langs een symmetrieas in twee spiegelbeeldige helften kunt vouwen',1],
['draaisymmetrisch','een figuur die na draaiing om zijn middelpunt over een bepaalde hoek weer precies op zichzelf past',1],
['kijkhoek','de hoek tussen twee kijklijnen vanaf &eacute;&eacute;n punt naar twee andere punten',2],
['koershoek','de richting die je aflegt, gemeten vanaf het noorden (0&deg;) met de klok mee tot 360&deg;',2],
['koershoekmeter','een hulpmiddel om een koershoek te tekenen of af te lezen op een kaart',2],
['gelijkvormig','twee figuren met gelijke vorm, waarbij overeenkomstige hoeken even groot zijn',4],
['vergrotingsfactor','het getal waarmee je lengtes van het origineel vermenigvuldigt om de lengtes van het beeld te krijgen',4],
['origineel en beeld','het origineel is de oorspronkelijke figuur, het beeld is de vergrote of verkleinde figuur',4],
['SOS-CAS-TOA','ezelsbruggetje voor sinus, cosinus en tangens om hoeken of zijden in een rechthoekige driehoek te berekenen',3],
['diameter en straal','de diameter is de doorsnede van een cirkel, de straal is de helft van de diameter',0],
['symmetrieas','de lijn waarlangs je een lijnsymmetrische figuur kunt vouwen tot twee spiegelbeeldige helften',1],
['schaal','de verhouding tussen een tekening of kaart en de werkelijkheid',4]
],
cards:[
['Wat is de formule voor de oppervlakte van een cirkel?','oppervlakte cirkel = &pi; &times; straal&sup2;',0],
['Wat is de formule voor de omtrek van een cirkel?','omtrek cirkel = &pi; &times; diameter',0],
['Noem twee manieren om de oppervlakte van een samengestelde vlakke figuur te berekenen.','Verdelen (opsplitsen in bekende figuren) en inlijsten (in een grotere figuur passen en delen aftrekken).',0],
['Wanneer is een figuur lijnsymmetrisch?','Als je hem langs een symmetrieas kunt vouwen tot twee spiegelbeeldige helften.',1],
['Wanneer is een figuur draaisymmetrisch?','Als hij na draaiing om zijn middelpunt over een bepaalde hoek weer precies op zichzelf past.',1],
['Wat is de kijkhoek?','De hoek tussen twee kijklijnen vanaf &eacute;&eacute;n punt naar twee andere punten.',2],
['Waar begint de telling bij een koershoek en hoeveel graden is een volledige rondgang?','De telling begint in het noorden bij 0&deg; en loopt helemaal rond tot 360&deg;.',2],
['Welke koershoek hoort bij oost?','90&deg;.',2],
['Hoe bereken je een zijde met de cosinus (CAS)?','cosinus = aanliggende zijde / schuine zijde, dus schuine zijde = aanliggende zijde : cos(hoek).',3],
['Wanneer zijn twee figuren gelijkvormig?','Als de overeenkomstige hoeken even groot zijn.',4],
['Hoe bereken je de vergrotingsfactor uit twee overeenkomstige lengtes?','vergrotingsfactor = lengte beeld : lengte origineel.',4],
['Hoe hangt de oppervlakte van het beeld samen met de vergrotingsfactor?','oppervlakte beeld = vergrotingsfactor&sup2; &times; oppervlakte origineel.',4],
['Hoe bereken je de vergrotingsfactor als je de oppervlaktes van origineel en beeld weet?','vergrotingsfactor = &radic;(oppervlakte vergroting : oppervlakte origineel).',4],
['Rond je tussenantwoorden af bij het verdelen van een samengestelde figuur?','Nee, je rondt pas de einduitkomst af.',0],
['Wat is de straal van een cirkel met een diameter van 12 m?','6 m (de straal is de helft van de diameter).',0]
],
quiz:[
['Een cirkel heeft een straal van 6 m. Wat is de oppervlakte (afgerond op &eacute;&eacute;n decimaal)?',['37,7 m&sup2;','113,1 m&sup2;','18,8 m&sup2;','36,0 m&sup2;'],1,'oppervlakte = &pi; &times; 6&sup2; = 113,1 m&sup2;.'],
['Dezelfde cirkel (straal 6 m): wat is de omtrek (afgerond op twee decimalen)?',['18,85 m','37,70 m','113,10 m','12,00 m'],1,'omtrek = &pi; &times; diameter = &pi; &times; 12 = 37,70 m.'],
['Welke twee methoden gebruik je om de oppervlakte van een samengestelde figuur te berekenen?',['Optellen en aftrekken van hoeken','Verdelen en inlijsten','Inklemmen en balansmethode','Sinus en cosinus'],1,'Je kunt de figuur verdelen in bekende figuren of inlijsten in een grotere figuur.'],
['Een ster met 10 punten is draaisymmetrisch. Wat is de kleinste draaihoek waarover de ster op zichzelf past?',['10 graden','36 graden','100 graden','360 graden'],1,'360&deg; : 10 = 36&deg;.'],
['Wat is de kijkhoek?',['De hoek tussen twee kijklijnen vanaf &eacute;&eacute;n punt','De hoek tussen noord en oost','De hoek van een driehoek','De hoek van een parallellogram'],0,'De kijkhoek is de hoek tussen twee kijklijnen vanaf een punt naar twee andere punten.'],
['Welke koershoek hoort bij het zuidwesten (ZW)?',['45 graden','135 graden','225 graden','315 graden'],2,'ZW ligt op 225 graden (tussen zuid 180&deg; en west 270&deg;).'],
['Een schip vaart een koershoek van 309&deg;. Ongeveer welke richting is dit?',['Noordoost','Zuidoost','Noordwest','Zuidwest'],2,'309&deg; ligt tussen west (270&deg;) en noord (360&deg;), dus in het noordwesten.'],
['In een rechthoekige driehoek is &ang;B = 26&deg; en de aanliggende zijde BC = 35,5 cm. Welke goniometrische verhouding gebruik je om de schuine zijde AB te berekenen?',['Sinus (SOS)','Cosinus (CAS)','Tangens (TOA)','Pythagoras'],1,'Aanliggende en schuine zijde horen bij CAS: de cosinus.'],
['Bereken AB uit de vorige vraag (afgerond op &eacute;&eacute;n decimaal).',['31,9 cm','39,5 cm','15,6 cm','35,5 cm'],1,'AB = 35,5 : cos 26&deg; = 39,5 cm.'],
['Twee driehoeken zijn gelijkvormig. Zijde PQ = 15 cm hoort overeen met zijde CA = 30 cm. Wat is de vergrotingsfactor?',['0,5','2','15','45'],1,'vergrotingsfactor = 30 : 15 = 2.'],
['Bij dezelfde gelijkvormige driehoeken is PR = 25 cm. Wat is de lengte van de overeenkomstige zijde CB?',['12,5 cm','25 cm','50 cm','27 cm'],2,'CB = 25 &times; vergrotingsfactor 2 = 50 cm.'],
['Een foto van 150 cm&sup2; wordt vergroot tot een oppervlakte van 86 400 cm&sup2;. Wat is de vergrotingsfactor?',['2','12','24','576'],2,'vergrotingsfactor = &radic;(86 400 : 150) = &radic;576 = 24.'],
['Hoe hangt de oppervlakte van een vergroting samen met de vergrotingsfactor?',['oppervlakte beeld = vergrotingsfactor &times; oppervlakte origineel','oppervlakte beeld = vergrotingsfactor&sup2; &times; oppervlakte origineel','oppervlakte beeld = vergrotingsfactor&sup3; &times; oppervlakte origineel','oppervlakte beeld = oppervlakte origineel : vergrotingsfactor'],1,'De oppervlakte schaalt met het kwadraat van de vergrotingsfactor.'],
['Een cirkel is verdeeld in taartpunten met een middelpuntshoek van 90&deg;. Hoeveel van zulke taartpunten passen er in de hele cirkel?',['2','4','6','9'],1,'360&deg; : 90&deg; = 4 taartpunten.'],
['Bij het inlijsten van een samengestelde figuur...',['splits je de figuur in kleinere bekende delen','pas je de figuur in een grotere bekende figuur en trek je de extra delen eraf','gebruik je alleen de stelling van Pythagoras','bereken je eerst de vergrotingsfactor'],1,'Bij inlijsten omsluit je de figuur met een grotere bekende figuur en trek je de niet-benodigde delen af.']
]
});
