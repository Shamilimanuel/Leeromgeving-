import { registerChapter } from '../../../registry.js';

/* Rebuilt 2026-09-25 to the recipe of Economie TL4 H1 (change 6). Fixed:
   7.5 rounded the angle to 50,2 degrees while angles go to whole degrees
   (50). Added from the book: "one acute angle known -> use 180 degrees"
   (7.4). Also fixed: 7.2 and a quiz question called KM aanliggend
   at angle L (it is opposite L; the example is now about angle K). The existing SOSCASTOA ezelsbruggetje and the "builds on H5" link
   stay. The three drawings are unchanged. Terms, cards and quiz unchanged. */
registerChapter('wiskunde|tl|3|7', {
title:'Goniometrie',
summary:[
{heading:'7.1 De stelling van Pythagoras',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>een <b>zijde</b> berekenen met de <b>stelling van Pythagoras</b>, als je twee zijden weet</li></ul></div>`
+`<div class="box"><h4>Waar dit hoofdstuk over gaat</h4><p>Je combineert de <b>stelling van Pythagoras</b> met <b>goniometrie</b>: zijden met Pythagoras, <b>hoeken</b> met sinus, cosinus en tangens, en soms <b>allebei</b> in één driehoek. Aan het eind reken je in <b>ruimtefiguren</b>.</p></div>`
+`<div class="call link"><b>Dit bouwt voort op:</b> Hoofdstuk 5, Goniometrie</div>`
+`<h5 class="sub">Het werkschema</h5>`
+`<div class="box"><h4>rhz&sup2; + rhz&sup2; = sz&sup2;</h4><p>Voor elke <b>rechthoekige driehoek</b> geldt: <b>ene rechthoekszijde&sup2; + andere rechthoekszijde&sup2; = schuine zijde&sup2;</b>. Weet je <b>twee</b> zijden, dan bereken je de <b>derde</b> met het <b>werkschema</b>: rhz&sup2; = &hellip;, rhz&sup2; = &hellip;, sz&sup2; = &hellip;</p></div>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Schuine zijde zoeken</h4><p>Kwadraten <b>optellen</b>.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Rechthoekszijde zoeken</h4><p>Kwadraten <b>aftrekken</b>: sz&sup2; &minus; rhz&sup2;.</p></div></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: QR in driehoek PQR</h4><p>PQ = <b>3,8 cm</b> (rechthoekszijde), PR = <b>4,3 cm</b> (schuine zijde). Bereken rechthoekszijde QR.</p><div class="antwoord">rhz&sup2; = 3,8&sup2; = 14,44. sz&sup2; = 4,3&sup2; = 18,49. QR&sup2; = 18,49 &minus; 14,44 = <b>4,05</b>. QR = &radic;4,05 = 2,01&hellip;, dus <b>2,0 cm</b>.</div></div>`
+`<div class="call warn"><b>Controle:</b> een <b>rechthoekszijde</b> is altijd korter dan de schuine zijde. Krijg je iets langers, dan heb je opgeteld in plaats van <b>afgetrokken</b>.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Je zoekt de schuine zijde. Tel je de kwadraten op of trek je ze af?</p><p class="check-a">Je telt ze <b>op</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (7.1)</b><ul class="lst">
<li><b>rhz&sup2; + rhz&sup2; = sz&sup2;</b>.</li>
<li>Schuine zijde: <b>optellen</b>. Rechthoekszijde: <b>aftrekken</b>.</li>
<li>Vergeet de <b>wortel</b> niet.</li></ul></div>`},

{heading:'7.2 Hoek berekenen met goniometrie',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>een <b>hoek</b> berekenen met <b>sinus</b>, <b>cosinus</b> of <b>tangens</b></li></ul></div>`
+`<h5 class="sub">De drie verhoudingen</h5>`
+`<div class="tblwrap"><table class="tbl"><tr><th>Verhouding</th><th>Formule</th><th>Kort</th></tr><tr><td><b>Sinus</b></td><td>overstaande : schuine</td><td>SOS</td></tr><tr><td><b>Cosinus</b></td><td>aanliggende : schuine</td><td>CAS</td></tr><tr><td><b>Tangens</b></td><td>overstaande : aanliggende</td><td>TOA</td></tr></table></div>`
+`<div class="call ezel"><b>SOSCASTOA</b>: het ezelsbruggetje SOSCASTOA helpt je onthouden welke verhouding bij welke twee bekende zijden hoort.</div>`
+`<div class="call reken"><b>Stappenplan: een hoek berekenen</b><ol class="num">
<li>Zet een <b>vraagteken</b> in de hoek en schrijf <b>O</b>, <b>A</b> of <b>S</b> bij de bekende zijden.</li>
<li>Kies <b>SOS</b>, <b>CAS</b> of <b>TOA</b>.</li>
<li>Reken uit met <b>sin<sup>&minus;1</sup></b>, <b>cos<sup>&minus;1</sup></b> of <b>tan<sup>&minus;1</sup></b>.</li>
<li>Rond af op <b>hele graden</b>.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: &ang;K in driehoek KLM</h4><p>De rechte hoek ligt bij M. KM = <b>8 cm</b> en KL = <b>15 cm</b> (schuine zijde).</p><div class="antwoord">KM ligt <b>aan</b> &ang;K: de <b>aanliggende</b> zijde. Met de schuine zijde is dat <b>CAS</b>: cos &ang;K = 8 : 15, &ang;K = 57,7&hellip;&deg; = <b>58&deg;</b>. (Vanuit &ang;L is KM juist <b>overstaand</b>: sin &ang;L = 8 : 15 geeft 32&deg;.)</div></div>`
+`<div class="call warn"><b>Afspraak:</b> hoeken rond je bij goniometrie af op <b>hele graden</b>.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Je weet de overstaande en de aanliggende zijde. Welke verhouding gebruik je?</p><p class="check-a">De <b>tangens</b> (TOA).</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (7.2)</b><ul class="lst">
<li><b>SOS</b>, <b>CAS</b>, <b>TOA</b>.</li>
<li>Hoek vinden met de <b>&minus;1-toets</b>.</li>
<li>Hoeken op <b>hele graden</b>.</li></ul></div>`},

{heading:'7.3 Zijden berekenen met goniometrie',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>een <b>zijde</b> berekenen met <b>sinus</b>, <b>cosinus</b> of <b>tangens</b> als je een hoek en een zijde weet</li></ul></div>`
+`<h5 class="sub">Hoek en zijde gegeven</h5>`
+`<div class="box"><h4>Omgekeerd rekenen</h4><p>Weet je <b>één scherpe hoek</b> en <b>één zijde</b>, dan bereken je een <b>andere zijde</b>. Kies de verhouding met de <b>bekende</b> én de <b>gevraagde</b> zijde erin.</p></div>`
+`<div class="call reken"><b>Stappenplan: een zijde berekenen</b><ol class="num">
<li>Maak een <b>schets</b> met de hoek, de bekende zijde en een vraagteken bij de gevraagde zijde.</li>
<li>Schrijf <b>O</b>, <b>A</b> en <b>S</b> erbij en kies SOS, CAS of TOA.</li>
<li>Vul in, bijvoorbeeld <b>tan 44&deg; = PQ : 2</b>.</li>
<li>Staat de onbekende <b>boven</b> de deelstreep: <b>vermenigvuldig</b>. Staat hij <b>onder</b>: <b>deel</b> de bekende zijde door sin, cos of tan.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: de onbekende boven</h4><p>De hoek is <b>44&deg;</b>, de aanliggende zijde <b>2 cm</b>. Bereken de overstaande zijde PQ.</p><div class="antwoord">TOA: tan 44&deg; = PQ : 2, dus PQ = 2 &times; tan 44&deg; = 2 &times; 0,9657&hellip; &asymp; <b>1,9 cm</b> (19 mm).</div></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: de onbekende onder</h4><p>De hoek is <b>30&deg;</b>, de overstaande zijde <b>3 cm</b>. Bereken de schuine zijde x.</p><div class="antwoord">SOS: sin 30&deg; = 3 : x, dus x = 3 : sin 30&deg; = 3 : 0,5 = <b>6 cm</b>.</div></div>`
+`<div class="call waarom">Bij een <b>helling</b> (een klim of een dak) is de <b>overstaande</b> zijde meestal de <b>hoogte</b> en de <b>aanliggende</b> de <b>horizontale afstand</b>. Daarom gebruik je daar vaak de <b>tangens</b>.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Wat weet je als je een zijde met goniometrie wilt berekenen?</p><p class="check-a">Eén <b>scherpe hoek</b> en één <b>zijde</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (7.3)</b><ul class="lst">
<li>Kies de verhouding met de <b>bekende</b> en de <b>gevraagde</b> zijde.</li>
<li>Onbekende boven: <b>&times;</b>. Onbekende onder: <b>:</b>.</li>
<li>Maak eerst een <b>schets</b>.</li></ul></div>`},

{heading:'7.4 Zijden en hoeken berekenen',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li><b>Pythagoras</b> en <b>goniometrie</b> combineren in één driehoek</li>
<li>kiezen welke methode je nodig hebt</li></ul></div>`
+`<h5 class="sub">Wat weet je?</h5>`
+`<div class="tblwrap"><table class="tbl"><tr><th>Je weet</th><th>Je zoekt</th><th>Gebruik</th></tr><tr><td><b>Twee zijden</b></td><td>de derde zijde</td><td><b>Pythagoras</b></td></tr><tr><td><b>Twee zijden</b></td><td>een hoek</td><td><b>sin, cos of tan</b></td></tr><tr><td><b>Een hoek en een zijde</b></td><td>een zijde</td><td><b>sin, cos of tan</b></td></tr><tr><td><b>Eén scherpe hoek</b></td><td>de andere hoek</td><td>hoeken samen <b>180&deg;</b></td></tr></table></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: driehoek PQR</h4><p><b>&ang;Q = 90&deg;</b>, PQ = <b>2,1 cm</b>, QR = <b>4 cm</b>. Bereken &ang;P en PR.</p><div class="antwoord">Vanuit P: QR is <b>overstaand</b>, PQ <b>aanliggend</b>, dus TOA. tan &ang;P = 4 : 2,1, &ang;P &asymp; <b>62&deg;</b>. PR met Pythagoras: 16 + 4,41 = 20,41, PR = &radic;20,41 &asymp; <b>4,5 cm</b>. En &ang;R = 180 &minus; 90 &minus; 62 = <b>28&deg;</b>.</div></div>`
+`<div class="call waarom">Waarom liever Pythagoras dan een tweede keer goniometrie? Met Pythagoras gebruik je alleen de <b>gegeven</b> zijden. Reken je met een <b>afgeronde hoek</b> verder, dan kan je antwoord net afwijken.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Je weet één scherpe hoek van een rechthoekige driehoek. Hoe vind je de andere?</p><p class="check-a">De hoeken zijn samen <b>180&deg;</b>: 180 &minus; 90 &minus; de bekende hoek.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (7.4)</b><ul class="lst">
<li>Eerst een <b>schets</b> met rechte hoek, letters en maten.</li>
<li>Twee zijden, derde zijde: <b>Pythagoras</b>.</li>
<li>Met een hoek erbij: <b>sin, cos of tan</b>.</li></ul></div>`},

{heading:'7.5 Goniometrie in ruimtefiguren',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li><b>hoeken</b> en <b>lijnstukken</b> berekenen in een <b>ruimtefiguur</b></li></ul></div>`
+`<h5 class="sub">Uit de ruimte, plat op papier</h5>`
+`<div class="box"><h4>Zoek het platte vlak</h4><p>In een <b>kubus</b>, <b>balk</b> of <b>piramide</b> zoek je een <b>rechthoekige driehoek</b> in een <b>zijvlak</b> of <b>diagonaalvlak</b>. Die teken je <b>plat</b>, met de maten erin. Daarna is het een gewone opgave met <b>Pythagoras</b> en <b>goniometrie</b>.</p></div>`
+`<figure class='fig'><svg viewBox="0 0 300 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Balk PQRSTUVW met daarin driehoek QVW; de rechte hoek ligt bij V"><g fill="none" stroke="var(--mut)" stroke-width="1.2" stroke-dasharray="4 3" opacity=".75"><path d="M45 205 L86 177"/><path d="M86 177 L236 177"/><path d="M86 177 L86 102"/></g><path d="M195 205 L236 102 L86 102 Z" fill="var(--accent)" fill-opacity=".18" stroke="var(--accent)" stroke-width="2" stroke-linejoin="round"/><g fill="none" stroke="var(--txt)" stroke-width="1.6" opacity=".8" stroke-linejoin="round"><path d="M45 205 L195 205 L236 177"/><path d="M45 130 L195 130 L236 102 L86 102 Z"/><path d="M45 205 L45 130"/><path d="M195 205 L195 130"/><path d="M236 177 L236 102"/></g><polyline points="224,102 220,113 232,113" fill="none" stroke="var(--accent)" stroke-width="1.6"/><g fill="var(--txt)" font-size="11" font-family="inherit"><text x="34" y="218">P</text><text x="190" y="221">Q</text><text x="243" y="189">R</text><text x="70" y="189">S</text><text x="33" y="127">T</text><text x="200" y="145">U</text><text x="243" y="98">V</text><text x="72" y="96">W</text></g><g fill="var(--accent)" font-size="10" font-weight="600" font-family="inherit"><text x="221" y="203">4 cm</text><text x="244" y="143">3 cm</text><text x="161" y="92" text-anchor="middle">6 cm</text></g></svg><figcaption>Driehoek QVW ligt in een diagonaalvlak van de balk. De rechte hoek zit bij V, want VW staat loodrecht op het zijvlak QRVU.</figcaption></figure>`
+`<div class="call reken"><b>Stappenplan: hoek in een ruimtefiguur</b><ol class="num">
<li><b>Zoek het vlak</b>: in welke driehoek ligt de hoek, en in welk vlak ligt die driehoek?</li>
<li><b>Teken dat vlak plat</b>, met letters en maten.</li>
<li><b>Ontbrekende zijde eerst</b>: met Pythagoras, vaak in een <b>ander</b> zijvlak.</li>
<li><b>Dan de hoek</b>: kies sin, cos of tan.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: &ang;Q in balk PQRS TUVW</h4><p><b>QR = 4 cm</b>, <b>RV = 3 cm</b> (hoogte), <b>VW = 6 cm</b>. Bereken &ang;Q in driehoek QVW.</p><div class="antwoord"><b>Stap 1.</b> Driehoek QVW heeft de rechte hoek bij <b>V</b>: VW staat loodrecht op zijvlak QRVU. Voor de tangens heb je <b>QV</b> nodig.</div></div>`
+`<figure class='fig'><svg viewBox="0 0 240 175" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Rechthoekige driehoek QRV met QR is 4 cm, RV is 3 cm en QV is 5 cm"><path d="M35 140 L165 140 L165 45 Z" fill="var(--accent)" fill-opacity=".14" stroke="var(--accent)" stroke-width="2" stroke-linejoin="round"/><polyline points="154,140 154,129 165,129" fill="none" stroke="var(--accent)" stroke-width="1.6"/><g fill="var(--txt)" font-size="11" font-family="inherit"><text x="25" y="153">Q</text><text x="170" y="153">R</text><text x="170" y="41">V</text></g><g fill="var(--accent)" font-size="10" font-weight="600" font-family="inherit"><text x="100" y="157" text-anchor="middle">4 cm</text><text x="174" y="97">3 cm</text><text x="88" y="86" text-anchor="middle">5 cm</text></g></svg><figcaption>Stap 2: het zijvlak plat getekend. QV<sup>2</sup> = 4<sup>2</sup> + 3<sup>2</sup> = 25, dus QV = 5 cm.</figcaption></figure>`
+`<div class="voorbeeld"><h4>Voorbeeld, vervolg</h4><p><b>Stap 2.</b> QV ligt in zijvlak QRVU, als schuine zijde van driehoek QRV.</p><div class="antwoord">QV&sup2; = 4&sup2; + 3&sup2; = 16 + 9 = 25, dus <b>QV = 5 cm</b>.</div></div>`
+`<figure class='fig'><svg viewBox="0 0 250 195" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Rechthoekige driehoek QVW met QV is 5 cm, VW is 6 cm en de gezochte hoek bij Q"><path d="M60 45 L210 45 L60 170 Z" fill="var(--accent)" fill-opacity=".14" stroke="var(--accent)" stroke-width="2" stroke-linejoin="round"/><polyline points="71,45 71,56 60,56" fill="none" stroke="var(--accent)" stroke-width="1.6"/><path d="M60 144 Q66 153 80 153" fill="none" stroke="var(--txt)" stroke-width="1.4" opacity=".85"/><g fill="var(--txt)" font-size="11" font-family="inherit"><text x="48" y="41">V</text><text x="216" y="41">W</text><text x="48" y="185">Q</text></g><g fill="var(--accent)" font-size="10" font-weight="600" font-family="inherit"><text x="52" y="112" text-anchor="end">5 cm</text><text x="135" y="38" text-anchor="middle">6 cm</text></g><text x="90" y="167" fill="var(--txt)" font-size="10" font-family="inherit">?</text></svg><figcaption>Stap 3: dezelfde driehoek plat. tan &ang;Q = 6 : 5.</figcaption></figure>`
+`<div class="voorbeeld"><h4>Voorbeeld, stap 3</h4><p>Teken driehoek QVW plat. Vanuit Q is VW <b>overstaand</b> en QV <b>aanliggend</b>.</p><div class="antwoord">tan &ang;Q = 6 : 5 = 1,2. &ang;Q = tan<sup>&minus;1</sup>(1,2) = 50,19&hellip;&deg;, dus <b>&ang;Q = 50&deg;</b>.</div></div>`
+`<div class="call warn"><b>Veelgemaakte fout:</b> de <b>lichaamsdiagonaal</b> nemen in plaats van de zijde die je nodig hebt. Gebruik alleen zijden die in <b>het platte vlak</b> liggen dat je tekende.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Wat doe je als je in de platte driehoek een zijde mist?</p><p class="check-a">Die zijde eerst berekenen met <b>Pythagoras</b>, vaak in een ander zijvlak.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (7.5)</b><ul class="lst">
<li>Zoek een <b>rechthoekige driehoek</b> in een zijvlak of diagonaalvlak.</li>
<li>Teken hem <b>plat</b> met de maten.</li>
<li>Eerst <b>Pythagoras</b>, dan <b>sin, cos of tan</b>; hoeken op hele graden.</li></ul></div>`}
],
terms:[
['Stelling van Pythagoras','Voor elke rechthoekige driehoek geldt: rechthoekszijde² + rechthoekszijde² = schuine zijde².',0],
['Werkschema van Pythagoras','Een vast schema om met Pythagoras een onbekende zijde te berekenen, met rhz², rhz² en sz².',0],
['Sinus','De verhouding overstaande rechthoekszijde : schuine zijde (SOS).',1],
['Cosinus','De verhouding aanliggende rechthoekszijde : schuine zijde (CAS).',1],
['Tangens','De verhouding overstaande rechthoekszijde : aanliggende rechthoekszijde (TOA).',1],
['SOSCASTOA','Ezelsbruggetje om te onthouden welke goniometrische verhouding je moet gebruiken.',1],
['sin⁻¹, cos⁻¹, tan⁻¹','Rekenmachinetoetsen om een hoek te vinden als je de sinus, cosinus of tangens van die hoek weet.',1],
['Hellingshoek','De hoek die een helling (bijvoorbeeld een weg, klim of dak) maakt met het horizontale vlak.',2],
['Schets','Een eenvoudige tekening van een driehoek met de letters, de rechte hoek en de bekende maten erin, als hulpmiddel bij het rekenen.',3],
['Zijvlak','Een van de platte vlakken aan de buitenkant van een ruimtefiguur.',4],
['Diagonaalvlak','Een plat vlak binnen een ruimtefiguur dat langs een diagonaal loopt.',4]
],
cards:[
['Wat is de stelling van Pythagoras?','rechthoekszijde² + rechthoekszijde² = schuine zijde².',0],
['Wat doe je om een rechthoekszijde te berekenen met Pythagoras?','Je trekt het kwadraat van de bekende rechthoekszijde af van het kwadraat van de schuine zijde, en trekt daarna de wortel.',0],
['Wat is de formule voor de sinus?','Sinus = overstaande rechthoekszijde : schuine zijde.',1],
['Wat is de formule voor de cosinus?','Cosinus = aanliggende rechthoekszijde : schuine zijde.',1],
['Wat is de formule voor de tangens?','Tangens = overstaande rechthoekszijde : aanliggende rechthoekszijde.',1],
['Welke rekenmachinetoets gebruik je om een hoek te vinden met de tangens?','tan⁻¹.',1],
['Op hoeveel rond je een hoek af bij goniometrie?','Op hele graden.',1],
['Je weet een hoek en de aanliggende zijde. Welke verhouding gebruik je om de overstaande zijde te berekenen?','De tangens (TOA).',2],
['Wat doe je als eerste stap voordat je een zijde of hoek in een driehoek berekent?','Je maakt een schets met de letters, de rechte hoek en de bekende maten.',3],
['Je weet twee zijden van een rechthoekige driehoek. Welke stelling gebruik je voor de derde zijde?','De stelling van Pythagoras.',3],
['Waar zoek je een rechthoekige driehoek om een hoek in een ruimtefiguur te berekenen?','In een zijvlak of een diagonaalvlak van de ruimtefiguur.',4]
],
quiz:[
['Wat is de stelling van Pythagoras?',['rhz + rhz = sz','rhz² + rhz² = sz²','rhz² × rhz² = sz²','rhz² − rhz² = sz²'],1,'De stelling van Pythagoras is: rechthoekszijde² + rechthoekszijde² = schuine zijde².'],
['Van een rechthoekige driehoek is een rechthoekszijde 3 cm en de schuine zijde 5 cm. Wat is de andere rechthoekszijde?',['2 cm','4 cm','8 cm','√34 cm'],1,'rhz² = 5² − 3² = 25 − 9 = 16, dus rhz = √16 = 4 cm.'],
['Wat is de formule voor de sinus van een hoek?',['overstaand : aanliggend','aanliggend : schuin','overstaand : schuin','schuin : overstaand'],2,'Sinus = overstaande rechthoekszijde : schuine zijde (SOS).'],
['In driehoek KLM (rechte hoek bij M) is KM = 8 cm (aanliggend bij ∠K) en KL = 15 cm (schuin). Wat is ∠K?',['32°','48°','58°','70°'],2,'cos ∠K = 8 : 15, dus ∠K = cos⁻¹(8/15) ≈ 58°.'],
['Bij een tangensberekening ken je de overstaande zijde (4 cm) en de hoek (44°). Hoe bereken je de aanliggende zijde?',['4 × tan 44°','4 : tan 44°','4 × sin 44°','4 : sin 44°'],1,'tan 44° = overstaand : aanliggend, dus aanliggend = overstaand : tan 44° = 4 : tan 44°.'],
['Op hoeveel rond je hoeken af bij goniometrie?',['Twee decimalen','Eén decimaal','Hele graden','Tientallen graden'],2,'Bij goniometrie rond je hoeken af op hele graden.'],
['Van driehoek PQR is ∠Q = 90°, PQ = 2,1 cm en QR = 4 cm. Wat is ∠P?',['27°','45°','62°','68°'],2,'tan ∠P = 4 : 2,1, dus ∠P = tan⁻¹(4/2,1) ≈ 62°.'],
['In dezelfde driehoek (PQ = 2,1 cm, QR = 4 cm, rechte hoek bij Q): wat is de lengte van PR?',['2,0 cm','3,3 cm','4,5 cm','6,1 cm'],2,'PR² = 2,1² + 4² = 4,41 + 16 = 20,41, dus PR = √20,41 ≈ 4,5 cm.'],
['Wat doe je als eerste stap bij het berekenen van een zijde of hoek in een driehoek?',['Direct de tangens toepassen','Een schets maken met de letters en bekende maten','De oppervlakte berekenen','De omtrek berekenen'],1,'Je maakt eerst een schets met de rechte hoek, de letters en de bekende maten erin.'],
['Je weet twee zijden van een rechthoekige driehoek en wilt de derde zijde. Welke stelling gebruik je?',['Sinus','Cosinus','Tangens','De stelling van Pythagoras'],3,'Ken je twee zijden, dan gebruik je de stelling van Pythagoras voor de derde zijde.'],
['Je weet een zijde en een scherpe hoek van een rechthoekige driehoek en wilt een andere zijde. Wat gebruik je?',['Alleen Pythagoras','Sinus, cosinus of tangens','De omtrekformule','De oppervlakteformule'],1,'Weet je een zijde en een hoek, dan gebruik je sinus, cosinus of tangens om een andere zijde te berekenen.'],
['Waar zoek je een rechthoekige driehoek om een hoek in een balk te berekenen?',['In een zijvlak of diagonaalvlak van de balk','Altijd in het grondvlak alleen','Nooit nodig bij een balk','Buiten de balk'],0,'Bij ruimtefiguren zoek je een rechthoekige driehoek in een zijvlak of een diagonaalvlak.'],
['In een piramide met vierkant grondvlak ligt de top meestal recht boven...',['Een hoekpunt van het grondvlak','Het midden van het grondvlak','Een zijde van het grondvlak','Buiten het grondvlak'],1,'Bij een rechte piramide ligt de top recht boven het midden van het grondvlak.'],
['Een hangmat hangt onder een hoek van 30° tussen huis en boom. Welke informatie heb je minimaal nodig om de lengte van (een helft van) de hangmat te berekenen?',['Alleen de hoek','De horizontale afstand of de hoogte van het ophangpunt','Alleen de kleur van de hangmat','Niets, dat kan niet berekend worden'],1,'Met de hoek en één bekende zijde (horizontale afstand of hoogte) kun je met goniometrie de lengte berekenen.'],
['Wat betekent SOSCASTOA?',['Een ezelsbruggetje voor sinus, cosinus en tangens','Een formule voor de omtrek','Een naam voor een driehoek','Een eenheid van hoek'],0,'SOSCASTOA is een ezelsbruggetje om te onthouden welke verhouding (sinus, cosinus of tangens) je moet gebruiken.']
]
});
