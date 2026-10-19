import { registerChapter } from '../../../registry.js';

/* Rebuilt 2026-09-25 to the recipe of Economie TL4 H1 (change 6), short
   sentences for BBL. Checked against the book: the uitslag/bouwplaat
   difference (1.2) and the letters of a balk (1.3, A-D below, E-H above)
   were missing. The drawing is unchanged. Terms, cards and quiz unchanged. */
registerChapter('wiskunde|bbl|1|1', {
title:'Ruimtefiguren',
summary:[
{heading:'1.1 Vlakken, ribben en hoekpunten',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>de <b>vlakken</b>, <b>ribben</b> en <b>hoekpunten</b> van een ruimtefiguur aanwijzen</li>
<li>ze <b>tellen</b>, ook als je ze niet allemaal ziet</li></ul></div>`
+`<div class="box"><h4>Waar dit hoofdstuk over gaat</h4><p>Je leert de namen van <b>ruimtefiguren</b>: kubus, balk, cilinder, prisma en piramide. En van de <b>vlakke figuren</b> die erbij horen: vierkant, rechthoek, cirkel en driehoek.</p></div>`
+`<h5 class="sub">Waar bestaat een ruimtefiguur uit?</h5>`
+`<div class="g3">`
+`<div class="term"><b>Vlak</b><p>De buitenkant van een ruimtefiguur. Een vlak is <b>plat</b> of <b>gebogen</b>.</p></div>`
+`<div class="term"><b>Ribbe</b><p>De <b>rand</b> tussen twee platte vlakken.</p></div>`
+`<div class="term"><b>Hoekpunt</b><p>De punt waar <b>ribben</b> bij elkaar komen.</p></div></div>`
+`<div class="box"><h4>Stippellijnen</h4><p>Een ruimtefiguur wordt vaak <b>doorzichtig</b> getekend. Ribben die je eigenlijk niet ziet, teken je dan <b>gestippeld</b>. Zo kun je alle ribben en hoekpunten tellen.</p></div>`
+`<h5 class="sub">Tellen</h5>`
+`<div class="tblwrap"><table class="tbl"><tr><th>Ruimtefiguur</th><th>Platte vlakken</th><th>Gebogen vlakken</th><th>Ribben</th><th>Hoekpunten</th></tr><tr><td>Balk</td><td>6</td><td>0</td><td>12</td><td>8</td></tr><tr><td>Cilinder</td><td>2</td><td>1</td><td>0</td><td>0</td></tr></table></div>`
+`<div class="call waarom">Waarom heeft een cilinder <b>geen ribben</b>? Een ribbe is de rand tussen <b>twee platte vlakken</b>. Bij een cilinder komt een plat vlak alleen tegen het <b>gebogen vlak</b> aan. Daarom zijn er ook <b>geen hoekpunten</b>.</div>`
+`<figure class='fig'><svg viewBox="0 0 340 265" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="De zes ruimtefiguren: kubus, balk, prisma, piramide, cilinder en kegel"><g fill="var(--accent)" fill-opacity=".16" stroke="var(--txt)" stroke-width="1.5" stroke-linejoin="round" opacity=".9"><path d="M20 100 L64 100 L64 56 L20 56 Z"/><path d="M20 56 L34 42 L78 42 L64 56 Z"/><path d="M64 56 L78 42 L78 86 L64 100 Z"/><path d="M132 100 L188 100 L188 66 L132 66 Z"/><path d="M132 66 L146 52 L202 52 L188 66 Z"/><path d="M188 66 L202 52 L202 86 L188 100 Z"/><path d="M248 100 L292 100 L270 62 Z"/><path d="M248 100 L262 86 L306 86 L292 100 Z"/><path d="M292 100 L306 86 L284 48 L270 62 Z"/><path d="M26 222 L74 222 L57 168 Z"/><path d="M74 222 L88 208 L57 168 Z"/></g><g fill="none" stroke="var(--mut)" stroke-width="1.1" stroke-dasharray="4 3" opacity=".8"><path d="M26 222 L40 208"/><path d="M40 208 L88 208"/><path d="M40 208 L57 168"/></g><g fill="var(--accent)" fill-opacity=".16" stroke="var(--txt)" stroke-width="1.5" opacity=".9"><path d="M142 182 L142 222 A 24 9 0 0 0 190 222 L190 182 Z"/><ellipse cx="166" cy="182" rx="24" ry="9"/><path d="M254 222 L278 168 L302 222 Z"/><ellipse cx="278" cy="222" rx="24" ry="9"/></g><g fill="var(--txt)" font-size="10.5" font-family="inherit" text-anchor="middle"><text x="49" y="124">kubus</text><text x="167" y="124">balk</text><text x="277" y="124">prisma</text><text x="57" y="246">piramide</text><text x="166" y="246">cilinder</text><text x="278" y="246">kegel</text></g><g fill="var(--mut)" font-size="8.5" font-family="inherit" text-anchor="middle"><text x="49" y="136">6 vierkanten</text><text x="167" y="136">6 rechthoeken</text><text x="277" y="136">2 grondvlakken</text><text x="57" y="258">1 top</text><text x="166" y="258">2 cirkels</text><text x="278" y="258">1 cirkel + top</text></g></svg><figcaption>Zes ruimtefiguren die je uit je hoofd moet kunnen herkennen. Alleen de cilinder en de kegel hebben een gebogen zijvlak &mdash; daarom rollen die wel en de andere niet.</figcaption></figure>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Hoeveel ribben en hoekpunten heeft een balk?</p><p class="check-a"><b>12 ribben</b> en <b>8 hoekpunten</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (1.1)</b><ul class="lst">
<li>De buitenkant bestaat uit <b>platte</b> of <b>gebogen</b> vlakken.</li>
<li>De rand tussen twee platte vlakken is een <b>ribbe</b>. Ribben komen samen in een <b>hoekpunt</b>.</li>
<li>Een <b>balk</b>: 6 vlakken, 12 ribben, 8 hoekpunten. Een <b>cilinder</b>: 2 platte vlakken, 1 gebogen vlak, geen ribben.</li></ul></div>`},

{heading:'1.2 Kubus en vierkant',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>wat een <b>kubus</b> en een <b>vierkant</b> zijn</li>
<li>wat een <b>uitslag</b> en een <b>bouwplaat</b> zijn</li></ul></div>`
+`<h5 class="sub">De kubus</h5>`
+`<div class="box"><h4>Kubus</h4><p>Een <b>kubus</b> heeft <b>6 vlakken</b>. Elk vlak is een <b>vierkant</b>. Een kubus heeft <b>12 ribben</b> en <b>8 hoekpunten</b>. Bij de hoekpunten kun je letters zetten.</p></div>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Uitslag</h4><p>Alle vlakken van de kubus <b>plat</b> naast elkaar. Bij een kubus zijn dat <b>zes vierkanten</b> die aan elkaar vast zitten. Dat kan op verschillende manieren.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Bouwplaat</h4><p>Een uitslag <b>met plakrandjes</b>. Die kun je knippen, vouwen en plakken tot een kubus.</p></div></div>`
+`<h5 class="sub">Het vierkant</h5>`
+`<div class="g2">`
+`<div class="box"><h4>Vierkant</h4><p>Een <b>vlakke figuur</b> met <b>4 even lange zijden</b>. Alle hoeken zijn <b>recht</b> (90&deg;). Dat controleer je met je <b>geodriehoek</b>.</p></div>`
+`<div class="term"><b>Dimensie</b><p>Een richting waarin je meet. Een vierkant heeft er <b>twee</b>: lengte en breedte.</p></div></div>`
+`<div class="call reken"><b>Zo zet je letters bij een vierkant</b><ol class="num">
<li>Begin <b>linksonder</b> met de A.</li>
<li>Ga <b>rechtsom</b> verder met B, C en D.</li></ol></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Wat is het verschil tussen een uitslag en een bouwplaat?</p><p class="check-a">Een bouwplaat heeft <b>plakrandjes</b>, een uitslag niet.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (1.2)</b><ul class="lst">
<li>Een <b>kubus</b>: 6 vierkante vlakken, 12 ribben, 8 hoekpunten.</li>
<li>De <b>uitslag</b> van een kubus is zes vierkanten aan elkaar. Met plakrandjes heet het een <b>bouwplaat</b>.</li>
<li>Een <b>vierkant</b>: 4 even lange zijden, 4 rechte hoeken, 2 dimensies.</li></ul></div>`},

{heading:'1.3 Balk en rechthoek',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>wat een <b>balk</b> en een <b>rechthoek</b> zijn</li>
<li>letters bij de <b>hoekpunten</b> van een balk zetten</li></ul></div>`
+`<h5 class="sub">De balk</h5>`
+`<div class="box"><h4>Balk</h4><p>Een <b>balk</b> heeft <b>drie dimensies</b>: lengte, breedte en hoogte. Net als een kubus heeft hij <b>6 vlakken</b>, <b>12 ribben</b> en <b>8 hoekpunten</b>. De vlakken zijn <b>rechthoeken</b>. Soms zijn twee vlakken een vierkant.</p></div>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Kubus</h4><p>Alle vlakken zijn <b>vierkanten</b>. Alle ribben zijn even lang.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Balk</h4><p>De vlakken zijn <b>rechthoeken</b>. Vlakken die <b>tegenover elkaar</b> liggen, zijn even groot.</p></div></div>`
+`<div class="call reken"><b>Zo zet je letters bij een balk</b><ol class="num">
<li>Begin in het <b>ondervlak</b>. Zet <b>linksonder</b> de A.</li>
<li>Ga <b>rechtsom</b>: B, C en D.</li>
<li>Ga naar het <b>bovenvlak</b>. Zet de E <b>boven de A</b>.</li>
<li>Ga weer rechtsom: F, G en H.</li></ol></div>`
+`<h5 class="sub">Uitslag en rechthoek</h5>`
+`<div class="g2">`
+`<div class="box"><h4>Uitslag van een balk</h4><p>Zes <b>rechthoeken</b> aan elkaar. Met plakranden erbij is het een <b>bouwplaat</b>.</p></div>`
+`<div class="box"><h4>Rechthoek</h4><p><b>4 rechte hoeken</b>. De zijden <b>tegenover elkaar</b> zijn even lang. Zijde PQ is dus even lang als zijde RS.</p></div></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Bij welke letter zet je de E in een balk ABCD EFGH?</p><p class="check-a"><b>Boven de A</b>, in het bovenvlak.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (1.3)</b><ul class="lst">
<li>Een <b>balk</b> heeft 3 dimensies, 6 vlakken, 12 ribben en 8 hoekpunten.</li>
<li>Letters: ondervlak <b>A-D</b>, bovenvlak <b>E-H</b>, steeds rechtsom.</li>
<li>Bij een <b>rechthoek</b> zijn de zijden tegenover elkaar even lang.</li></ul></div>`},

{heading:'1.4 Cilinder en cirkel',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>wat een <b>cilinder</b> is</li>
<li>het verschil tussen <b>straal</b> en <b>diameter</b> van een cirkel</li></ul></div>`
+`<h5 class="sub">De cilinder</h5>`
+`<div class="box"><h4>Cilinder</h4><p>Een <b>cilinder</b> heeft <b>1 gebogen vlak</b> en <b>2 platte vlakken</b>. De platte vlakken zijn <b>cirkels</b>. Een cilinder heeft geen ribben en geen hoekpunten. Daarom kan hij <b>rollen</b>.</p></div>`
+`<h5 class="sub">De cirkel</h5>`
+`<div class="box"><h4>Cirkel</h4><p>Een cirkel teken je met een <b>passer</b>. Waar de passerpunt stond, ligt het <b>middelpunt</b>.</p></div>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Straal</h4><p>Van het <b>middelpunt</b> naar de <b>rand</b>.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Diameter</h4><p>Van <b>rand tot rand</b>, dwars door het middelpunt. Ook wel <b>middellijn</b>.</p></div></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: straal 3 cm</h4><p>Hoe lang is de diameter?</p><div class="antwoord">De straal past <b>twee keer</b> in de diameter. Diameter = 2 &times; 3 = <b>6 cm</b>.</div></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">De diameter van een cirkel is 10 cm. Hoe lang is de straal?</p><p class="check-a">10 : 2 = <b>5 cm</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (1.4)</b><ul class="lst">
<li>Een <b>cilinder</b>: 2 platte vlakken (cirkels), 1 gebogen vlak, geen ribben.</li>
<li>Het <b>middelpunt</b> is waar de passerpunt stond.</li>
<li>De <b>diameter</b> is twee keer zo lang als de <b>straal</b>.</li></ul></div>`},

{heading:'1.5 Piramide, prisma en driehoek',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>het verschil tussen een <b>prisma</b> en een <b>piramide</b></li>
<li>een ruimtefiguur een <b>naam</b> geven met letters</li></ul></div>`
+`<h5 class="sub">Prisma en piramide</h5>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Prisma</h4><p>Een <b>grondvlak</b> en een gelijk vlak erboven. Die kunnen een driehoek, vierhoek, vijfhoek of zeshoek zijn. De andere vlakken zijn <b>rechthoeken</b>.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Piramide</h4><p>Een <b>grondvlak</b>. De andere vlakken zijn <b>driehoeken</b>. Die komen samen in de <b>top</b> (letter T).</p></div></div>`
+`<div class="call warn"><b>Let op:</b> een prisma staat <b>niet altijd</b> op zijn grondvlak. Zoek de twee vlakken die <b>geen rechthoek</b> zijn.</div>`
+`<h5 class="sub">Een naam geven</h5>`
+`<div class="call reken"><b>Zo geef je een ruimtefiguur een naam</b><ol class="num">
<li>Noem de letters van het <b>grondvlak</b>.</li>
<li>Prisma: noem daarna de letters van het <b>bovenvlak</b>. Piramide: zet de <b>T</b> vooraan.</li></ol></div>`
+`<div class="g2">`
+`<div class="voorbeeld"><h4>Voorbeeld: prisma</h4><p>Grondvlak ABCDE, bovenvlak FGHIJ.</p><div class="antwoord">Het heet <b>prisma ABCDE FGHIJ</b>.</div></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: piramide</h4><p>Grondvlak ABCD, top T.</p><div class="antwoord">Het heet <b>piramide TABCD</b>.</div></div></div>`
+`<div class="box"><h4>Driehoek</h4><p>Een <b>driehoek</b> heeft <b>3 zijden</b> en <b>3 hoekpunten</b>. Een prisma met een driehoek als grondvlak heeft 5 vlakken: 2 driehoeken en 3 rechthoeken.</p></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Een figuur heeft een vierkant grondvlak en vier driehoeken die in één punt samenkomen. Wat is het?</p><p class="check-a">Een <b>piramide</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (1.5)</b><ul class="lst">
<li><b>Prisma</b>: grondvlak, gelijk bovenvlak, de rest rechthoeken.</li>
<li><b>Piramide</b>: grondvlak, de rest driehoeken die samenkomen in de <b>top T</b>.</li>
<li>Naam geven: <b>prisma ABCDE FGHIJ</b>, <b>piramide TABCD</b>.</li></ul></div>`}
],
terms:[
['ruimtefiguur','Figuur met drie dimensies (lengte, breedte en hoogte), waarvan de buitenkant uit vlakken bestaat.',2],
['vlak','Een plat of gebogen deel van de buitenkant van een ruimtefiguur.',0],
['ribbe','De rand van een plat vlak.',0],
['hoekpunt','Het punt waar ribben bij elkaar komen.',0],
['balk','Ruimtefiguur met 6 platte (rechthoekige) vlakken, 12 ribben en 8 hoekpunten.',0],
['kubus','Ruimtefiguur met 6 vlakken die allemaal de vorm van een vierkant hebben, 12 ribben en 8 hoekpunten.',2],
['cilinder','Ruimtefiguur met 2 platte, cirkelvormige vlakken en 1 gebogen vlak, zonder ribben of hoekpunten.',0],
['cirkel','Een ronde vlakke figuur.',1],
['straal','Het lijnstuk van het middelpunt van een cirkel naar de rand.',3],
['diameter (middellijn)','Het lijnstuk dwars door het middelpunt van een cirkel; twee keer zo lang als de straal.',3],
['middelpunt','Het punt in het midden van een cirkel, waar de passerpunt stond bij het tekenen.',3],
['prisma','Ruimtefiguur met een grondvlak en een gelijk vlak erboven; de andere vlakken zijn rechthoeken.',4],
['piramide','Ruimtefiguur met een grondvlak en driehoekige zijvlakken die samenkomen in de top.',4],
['grondvlak','Het vlak van een prisma of piramide dat tegenover de top ligt, of waar de figuur op staat.',4],
['top','Het punt waarin bij een piramide alle driehoekige zijvlakken samenkomen (letter T).',4],
['vierkant','Vlakke figuur met vier even lange zijden en vier rechte hoeken.',1],
['rechthoek','Vlakke figuur met vier zijden, waarbij de zijden tegenover elkaar even lang zijn en alle hoeken recht zijn.',1],
['uitslag','De platte figuur die ontstaat als je alle vlakken van een ruimtefiguur openvouwt.',0],
['bouwplaat','Een uitslag met plakranden, waarmee je een ruimtefiguur in elkaar kunt zetten.',2],
['plakrand','Een strookje aan een uitslag waarmee je de vlakken aan elkaar plakt.',2],
['dimensie','Een richting waarin je iets kunt meten, zoals lengte, breedte of hoogte.',1],
['geodriehoek','Meetinstrument waarmee je hoeken kunt meten en rechte hoeken kunt controleren.',1]
],
cards:[
['Wat is een ruimtefiguur?','Een figuur met drie dimensies (lengte, breedte, hoogte); de buitenkant bestaat uit vlakken.',2],
['Hoe heet de rand van een plat vlak?','Een ribbe.',0],
['Hoe heet het punt waar ribben samenkomen?','Een hoekpunt.',0],
['Hoeveel vlakken, ribben en hoekpunten heeft een balk?','6 vlakken, 12 ribben, 8 hoekpunten.',0],
['Hoeveel vlakken, ribben en hoekpunten heeft een kubus?','6 vlakken (allemaal vierkant), 12 ribben, 8 hoekpunten.',1],
['Hoeveel platte vlakken, gebogen vlakken, ribben en hoekpunten heeft een cilinder?','2 platte vlakken, 1 gebogen vlak, geen ribben, geen hoekpunten.',0],
['Welke vorm hebben de platte vlakken van een cilinder?','De vorm van een cirkel.',3],
['Wat is de straal van een cirkel?','Het lijnstuk van het middelpunt naar de rand van de cirkel.',3],
['Wat is de diameter (middellijn) van een cirkel?','Het lijnstuk dwars door het middelpunt; twee keer zo lang als de straal.',3],
['Waar ligt het middelpunt van een cirkel die je met een passer hebt getekend?','Op de plek waar de passerpunt stond.',3],
['Wat is het verschil tussen een prisma en een piramide?','Bij een prisma zijn bijna alle vlakken rechthoeken; bij een piramide zijn alle vlakken (behalve het grondvlak) driehoeken die samenkomen in de top.',4],
['Wat is het grondvlak van een piramide?','Het vlak tegenover de top.',4],
['Hoe noem je het punt waarin de zijvlakken van een piramide samenkomen?','De top (letter T).',4],
['Hoeveel dimensies heeft een vierkant, en welke?','Twee: lengte en breedte.',1],
['Hoeveel dimensies heeft een balk, en welke?','Drie: lengte, breedte en hoogte.',2],
['Hoeveel graden zijn de hoeken van een vierkant of rechthoek?','Altijd 90°; dat controleer je met een geodriehoek.',2],
['Wat is een uitslag?','De platte figuur die ontstaat als je alle vlakken van een ruimtefiguur openvouwt.',0],
['Wat is een bouwplaat?','Een uitslag met plakranden, waarmee je de ruimtefiguur weer in elkaar kunt zetten.',2]
],
quiz:[
['Waaruit bestaat de buitenkant van een ruimtefiguur?',['Alleen uit ribben','Alleen uit hoekpunten','Uit vlakken','Uit dimensies'],2,'De buitenkant van een ruimtefiguur bestaat uit platte of gebogen vlakken.'],
['Hoe heet de rand van een plat vlak?',['Een hoekpunt','Een ribbe','Een grondvlak','Een dimensie'],1,'De rand van een plat vlak heet een ribbe.'],
['Hoeveel ribben heeft een balk?',['6','8','10','12'],3,'Een balk heeft 12 ribben, net als een kubus.'],
['Welke ruimtefiguur heeft geen ribben en geen hoekpunten?',['Balk','Kubus','Cilinder','Prisma'],2,'Een cilinder heeft geen ribben en geen hoekpunten, omdat er geen scherpe rand is waar vlakken samenkomen.'],
['Welke vorm hebben alle vlakken van een kubus?',['Rechthoek','Vierkant','Cirkel','Driehoek'],1,'Bij een kubus hebben alle 6 vlakken de vorm van een vierkant.'],
['Wat is het verschil tussen een balk en een kubus?',['Een balk heeft meer ribben dan een kubus','Een balk heeft rechthoekige vlakken, een kubus heeft alleen vierkante vlakken','Een kubus heeft geen hoekpunten','Een balk heeft geen platte vlakken'],1,'Beide hebben 12 ribben en 8 hoekpunten, maar een kubus heeft alleen vierkante vlakken en een balk (meestal) rechthoekige vlakken.'],
['Wat is de straal van een cirkel?',['De lijn dwars door het middelpunt','Het lijnstuk van het middelpunt naar de rand','De rand van de cirkel zelf','Het gebogen vlak van een cilinder'],1,'De straal is het lijnstuk van het middelpunt van de cirkel naar de rand.'],
['Hoe verhoudt de diameter zich tot de straal?',['De diameter is de helft van de straal','De diameter is even lang als de straal','De diameter is twee keer zo lang als de straal','De diameter en de straal hebben niets met elkaar te maken'],2,'De straal past twee keer in de diameter; de diameter is dus twee keer zo lang als de straal.'],
['Waar ligt het middelpunt van een cirkel die je met een passer tekent?',['Op de rand van de cirkel','Op de plek waar de passerpunt stond','Altijd linksboven de cirkel','Op het gebogen vlak'],1,'Het middelpunt is de plek waar de passerpunt stond toen je de cirkel tekende.'],
['Wat geldt voor de zijden van een rechthoek?',['Alle vier de zijden zijn even lang','Alleen de zijden tegenover elkaar zijn even lang','Geen van de zijden is even lang','Een rechthoek heeft maar drie zijden'],1,'Bij een rechthoek zijn de zijden die tegenover elkaar liggen even lang; bij een vierkant zijn alle vier de zijden even lang.'],
['Wat is het grondvlak van een piramide?',['Het vlak dat tegenover de top ligt','De top zelf','Een van de driehoekige zijvlakken','Het gebogen vlak'],0,'Het grondvlak van een piramide is het vlak dat tegenover de top ligt.'],
['Welke vorm hebben de meeste vlakken van een prisma (behalve het grondvlak en het vlak erboven)?',['Cirkels','Rechthoeken','Vijfhoeken','Gebogen vlakken'],1,'Bijna alle vlakken van een prisma zijn rechthoeken; alleen het grondvlak en het vlak erboven hebben een andere vorm.'],
['Waarin komen bij een piramide alle driehoekige zijvlakken samen?',['In het grondvlak','In een ribbe','In de top','In het middelpunt'],2,'Alle driehoekige zijvlakken van een piramide komen samen in de top, meestal aangeduid met de letter T.'],
['Hoeveel platte vlakken heeft een prisma met een driehoekig grondvlak?',['3','4','5','6'],2,'Zo’n prisma heeft 5 platte vlakken: twee driehoeken (grondvlak en het vlak erboven) en drie rechthoeken.'],
['Wat is een uitslag van een ruimtefiguur?',['Een tekening van de figuur in 3D','De platte figuur die ontstaat als je alle vlakken openvouwt','Een ander woord voor grondvlak','Het aantal ribben van de figuur'],1,'De uitslag is de platte figuur die ontstaat als je alle vlakken van een ruimtefiguur openvouwt.'],
['Wat is een bouwplaat?',['Een uitslag zonder plakranden','Een uitslag met plakranden','Een ander woord voor ribbe','Een soort driehoek'],1,'Een bouwplaat is een uitslag met plakranden erbij, waarmee je de ruimtefiguur in elkaar kunt zetten.']
]
});
