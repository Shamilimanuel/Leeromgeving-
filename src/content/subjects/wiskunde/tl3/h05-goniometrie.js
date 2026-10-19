import { registerChapter } from '../../../registry.js';

/* Rebuilt 2026-09-25 to the recipe of Economie TL4 H1 (change 6). Fixed:
   the 5.6 example stopped without an answer; it now works out AH = sqrt(41)
   and angle AHB = 43 degrees (the measures 6, 4 and 5 cm are the old
   summary's; the scan's drawing is unreadable). The existing SOSCASTOA
   ezelsbruggetje stays. The drawing is unchanged. Terms, cards and quiz
   unchanged. */
registerChapter('wiskunde|tl|3|5', {
title:'Goniometrie',
summary:[
{heading:'5.1 Namen rechthoekszijden',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>de <b>schuine zijde</b> en de <b>rechthoekszijden</b> benoemen</li>
<li>de <b>overstaande</b> en <b>aanliggende</b> rechthoekszijde van een hoek aanwijzen</li></ul></div>`
+`<div class="box"><h4>Waar dit hoofdstuk over gaat</h4><p>Met <b>goniometrie</b> bereken je <b>hoeken</b> in een <b>rechthoekige driehoek</b>: met de <b>sinus</b>, de <b>cosinus</b> en de <b>tangens</b>. Zo reken je bijvoorbeeld uit of een dak de goede <b>hellingshoek</b> heeft voor zonnepanelen (tussen 34&deg; en 38&deg;).</p></div>`
+`<h5 class="sub">Drie zijden, vanuit een hoek bekeken</h5>`
+`<div class="box"><h4>Rechthoekszijden en schuine zijde</h4><p>De twee <b>rechthoekszijden</b> maken samen de <b>rechte hoek</b>. De <b>schuine zijde</b> ligt tegenover de rechte hoek en is de <b>langste</b>.</p></div>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Overstaande rechthoekszijde</h4><p>De rechthoekszijde <b>tegenover</b> de hoek.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Aanliggende rechthoekszijde</h4><p>De rechthoekszijde die <b>aan</b> de hoek ligt.</p></div></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: driehoek KLM</h4><p>De rechte hoek ligt bij <b>K</b>. Benoem de zijden vanuit &ang;L.</p><div class="antwoord">KL en KM zijn de <b>rechthoekszijden</b>, LM is de <b>schuine zijde</b>. Tegenover &ang;L ligt <b>KM</b>: de <b>overstaande</b>. Aan &ang;L ligt <b>KL</b>: de <b>aanliggende</b>.</div></div>`
+`<figure class='fig'><svg viewBox="0 0 340 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Rechthoekige driehoek met hoek A, waarbij de overstaande, aanliggende en schuine zijde zijn aangewezen"><path d="M60 165 L250 165 L250 60 Z" fill="var(--accent)" fill-opacity=".14" stroke="var(--accent)" stroke-width="2" stroke-linejoin="round"/><polyline points="237,165 237,152 250,152" fill="none" stroke="var(--accent)" stroke-width="1.7"/><path d="M88 165 A 28 28 0 0 0 84 150" fill="none" stroke="#e2564f" stroke-width="1.8"/><text x="94" y="158" fill="#e2564f" font-size="12" font-weight="600" font-family="inherit">A</text><g fill="var(--mut)" font-size="10" font-family="inherit"><text x="155" y="182" text-anchor="middle">aanliggende zijde</text><text x="258" y="115">overstaande</text><text x="258" y="128">zijde</text><text x="132" y="102">schuine zijde</text></g><path d="M148 106 L163 116" stroke="var(--mut)" stroke-width="1" fill="none" opacity=".7"/><g fill="var(--txt)" font-size="11" font-family="inherit"><text x="48" y="172">A</text><text x="256" y="178">C</text><text x="256" y="54">B</text></g></svg><figcaption>Overstaand en aanliggend hangen af van <b>welke hoek</b> je bekijkt; de schuine zijde ligt altijd tegenover de rechte hoek en verandert dus nooit. Kijk je vanuit hoek B, dan wisselen overstaand en aanliggend om.</figcaption></figure>`
+`<div class="call warn"><b>Let op:</b> welke zijde overstaand of aanliggend is, hangt af van <b>welke hoek</b> je bekijkt. Vanuit de andere scherpe hoek draaien ze <b>om</b>.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Welke zijde van een rechthoekige driehoek is altijd de langste?</p><p class="check-a">De <b>schuine zijde</b>, tegenover de rechte hoek.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (5.1)</b><ul class="lst">
<li><b>Schuine zijde</b>: tegenover de rechte hoek, de langste.</li>
<li><b>Overstaande</b>: tegenover de hoek. <b>Aanliggende</b>: aan de hoek.</li>
<li>Het hangt af van de <b>hoek</b> die je bekijkt.</li></ul></div>`},

{heading:'5.2 Hoek berekenen met sinus',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>een hoek berekenen met de <b>sinus</b></li></ul></div>`
+`<h5 class="sub">SOS</h5>`
+`<div class="box"><h4>Sinus = overstaande : schuine</h4><p>De <b>sinus</b> van een hoek is de verhouding <b>overstaande rechthoekszijde : schuine zijde</b>. Weet je die twee zijden, dan vind je de hoek met <b>sin<sup>&minus;1</sup></b> op je rekenmachine (boven de sin-toets, met <b>SHIFT</b> of <b>2nd</b>).</p></div>`
+`<div class="call reken"><b>Stappenplan: hoek met de sinus</b><ol class="num">
<li>Zoek de <b>overstaande</b> zijde en de <b>schuine</b> zijde van de hoek.</li>
<li>Schrijf op: <b>sin &ang; = O : S</b>.</li>
<li>Reken uit met <b>sin<sup>&minus;1</sup></b>.</li>
<li>Rond af op <b>hele graden</b>.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: &ang;K in driehoek KLM</h4><p>De rechte hoek ligt bij L. Overstaande van &ang;K: <b>4,4 cm</b>. Schuine zijde: <b>5,6 cm</b>.</p><div class="antwoord">sin &ang;K = 4,4 : 5,6. Met sin<sup>&minus;1</sup>: &ang;K = 51,8&hellip;&deg;, dus <b>52&deg;</b>.</div></div>`
+`<div class="call waarom">Waarom kan de sinus nooit groter dan 1 zijn? De <b>schuine zijde</b> is altijd de langste. Deel je een kortere zijde door de langste, dan kom je altijd <b>onder 1</b>.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Welke twee zijden heb je nodig voor de sinus?</p><p class="check-a">De <b>overstaande</b> rechthoekszijde en de <b>schuine</b> zijde.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (5.2)</b><ul class="lst">
<li><b>sin &ang; = overstaande : schuine</b> (SOS).</li>
<li>Hoek vinden met <b>sin<sup>&minus;1</sup></b>.</li>
<li>Hoeken op <b>hele graden</b>.</li></ul></div>`},

{heading:'5.3 Hoek berekenen met cosinus',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>een hoek berekenen met de <b>cosinus</b></li></ul></div>`
+`<h5 class="sub">CAS</h5>`
+`<div class="box"><h4>Cosinus = aanliggende : schuine</h4><p>De <b>cosinus</b> van een hoek is <b>aanliggende rechthoekszijde : schuine zijde</b>. De hoek vind je met <b>cos<sup>&minus;1</sup></b>. Na het haakje tik je de <b>deling</b> in; je mag de <b>breukentoets</b> gebruiken.</p></div>`
+`<div class="call reken"><b>Stappenplan: hoek met de cosinus</b><ol class="num">
<li>Zoek de <b>aanliggende</b> zijde en de <b>schuine</b> zijde.</li>
<li>Schrijf op: <b>cos &ang; = A : S</b>.</li>
<li>Reken uit met <b>cos<sup>&minus;1</sup></b> en rond af op hele graden.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: &ang;M in driehoek KLM</h4><p>De rechte hoek ligt bij L. Aanliggende van &ang;M: <b>6 cm</b>. Schuine zijde: <b>8 cm</b>.</p><div class="antwoord">cos &ang;M = 6 : 8. Met cos<sup>&minus;1</sup>: &ang;M = 41,4&hellip;&deg;, dus <b>41&deg;</b>.</div></div>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Sinus</h4><p><b>Overstaande</b> : schuine</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Cosinus</h4><p><b>Aanliggende</b> : schuine</p></div></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Waar staat cos<sup>&minus;1</sup> op je rekenmachine?</p><p class="check-a"><b>Boven de cos-toets</b>; je gebruikt SHIFT of 2nd.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (5.3)</b><ul class="lst">
<li><b>cos &ang; = aanliggende : schuine</b> (CAS).</li>
<li>Hoek vinden met <b>cos<sup>&minus;1</sup></b>.</li></ul></div>`},

{heading:'5.4 Hoek berekenen met tangens',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>een hoek berekenen met de <b>tangens</b></li></ul></div>`
+`<h5 class="sub">TOA</h5>`
+`<div class="box"><h4>Tangens = overstaande : aanliggende</h4><p>De <b>tangens</b> van een hoek is <b>overstaande rechthoekszijde : aanliggende rechthoekszijde</b>. De <b>schuine zijde</b> heb je hier <b>niet</b> nodig. De hoek vind je met <b>tan<sup>&minus;1</sup></b>.</p></div>`
+`<div class="call reken"><b>Stappenplan: hoek met de tangens</b><ol class="num">
<li>Zoek de <b>overstaande</b> en de <b>aanliggende</b> zijde.</li>
<li>Schrijf op: <b>tan &ang; = O : A</b>.</li>
<li>Reken uit met <b>tan<sup>&minus;1</sup></b> en rond af op hele graden.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: &ang;B</h4><p>De rechte hoek ligt bij A. Overstaande van &ang;B: <b>6 cm</b>. Aanliggende: <b>18 cm</b>.</p><div class="antwoord">tan &ang;B = 6 : 18. Met tan<sup>&minus;1</sup>: &ang;B = 18,4&hellip;&deg;, dus <b>18&deg;</b>.</div></div>`
+`<div class="call warn"><b>Veelgemaakte fout:</b> overstaande en aanliggende <b>omwisselen</b>. Met 18 : 6 krijg je 72&deg;: dat is de <b>andere</b> scherpe hoek.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Heb je de schuine zijde nodig voor de tangens?</p><p class="check-a"><b>Nee</b>: tangens = overstaande : aanliggende.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (5.4)</b><ul class="lst">
<li><b>tan &ang; = overstaande : aanliggende</b> (TOA).</li>
<li>De schuine zijde doet <b>niet</b> mee.</li></ul></div>`},

{heading:'5.5 Hoek berekenen met goniometrie',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>zelf <b>kiezen</b> tussen sinus, cosinus en tangens</li>
<li>hoeken noteren met <b>drie letters</b></li></ul></div>`
+`<h5 class="sub">Kiezen</h5>`
+`<div class="box"><h4>Welke twee zijden weet je?</h4><p>Weet je <b>twee zijden</b> van een rechthoekige driehoek, dan bereken je de <b>scherpe hoeken</b>. Welke verhouding je gebruikt, hangt af van <b>welke</b> twee zijden je weet.</p></div>`
+`<div class="call ezel"><b>SOSCASTOA</b>: SOS (sinus = overstaand/schuin), CAS (cosinus = aanliggend/schuin), TOA (tangens = overstaand/aanliggend).</div>`
+`<div class="call reken"><b>Stappenplan: de juiste verhouding kiezen</b><ol class="num">
<li>Zet een <b>vraagteken</b> in de hoek die je zoekt.</li>
<li>Schrijf bij de bekende zijden <b>O</b>, <b>A</b> of <b>S</b>.</li>
<li>Kies het woord met die twee letters: <b>SOS</b>, <b>CAS</b> of <b>TOA</b>.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: &ang;Q</h4><p>Van &ang;Q weet je de <b>overstaande</b> zijde en de <b>schuine</b> zijde.</p><div class="antwoord">O en S: dat is <b>SOS</b>. Je gebruikt de <b>sinus</b>: sin &ang;Q = O : S.</div></div>`
+`<h5 class="sub">Drie letters</h5>`
+`<div class="box"><h4>&ang;ADC</h4><p>Komen bij één punt meer hoeken samen, dan gebruik je <b>drie letters</b>. &ang;D<sub>1,2</sub> heet ook <b>&ang;ADC</b>: ga van A via D naar C. De <b>middelste letter</b> is het hoekpunt.</p></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Je weet de aanliggende en de schuine zijde. Welke gebruik je?</p><p class="check-a">De <b>cosinus</b> (CAS).</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (5.5)</b><ul class="lst">
<li><b>O en S</b>: sinus. <b>A en S</b>: cosinus. <b>O en A</b>: tangens.</li>
<li><b>Drieletternotatie</b>: de middelste letter is het hoekpunt.</li></ul></div>`},

{heading:'5.6 Hoeken berekenen in ruimtefiguren',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>een <b>hoek</b> berekenen in een <b>ruimtefiguur</b></li></ul></div>`
+`<h5 class="sub">Zoek de rechthoekige driehoek</h5>`
+`<div class="box"><h4>In een zijvlak of doorsnede</h4><p>Ook in een <b>balk</b>, <b>kubus</b> of <b>piramide</b> kun je hoeken berekenen. Zoek een <b>rechthoekige driehoek</b> in een <b>zijvlak</b> of in een <b>doorsnede</b>, en gebruik dan <b>sinus</b>, <b>cosinus</b> of <b>tangens</b>.</p></div>`
+`<div class="call reken"><b>Stappenplan: hoek in een ruimtefiguur</b><ol class="num">
<li>In welke <b>driehoek</b> ligt de hoek? En in welk <b>vlak</b> ligt die driehoek?</li>
<li>Maak een <b>schets</b> van dat vlak, met letters, maten en een <b>vraagteken</b> in de hoek.</li>
<li>Ontbreekt er een zijde? Bereken hem met <b>Pythagoras</b>.</li>
<li>Kies <b>SOS</b>, <b>CAS</b> of <b>TOA</b> en bereken de hoek.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: &ang;AHB in balk ABCD EFGH</h4><p><b>AB = 6 cm</b>, <b>AD = 4 cm</b>, <b>AE = 5 cm</b>. Rond af op hele graden.</p><div class="antwoord">&ang;AHB ligt in driehoek AHB, met de <b>rechte hoek bij A</b> (AB staat loodrecht op het zijvlak ADHE). Eerst AH in zijvlak ADHE: AH&sup2; = 4&sup2; + 5&sup2; = 41, AH = &radic;41 &asymp; 6,40. Vanuit H is AB <b>overstaand</b> en AH <b>aanliggend</b>: <b>TOA</b>. tan &ang;AHB = 6 : &radic;41, dus &ang;AHB &asymp; <b>43&deg;</b>.</div></div>`
+`<div class="call warn"><b>Rond tussendoor niet af.</b> Reken met &radic;41 op je rekenmachine, niet met 6,40. Rond pas de <b>hoek</b> af.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Waar zoek je een rechthoekige driehoek in een ruimtefiguur?</p><p class="check-a">In een <b>zijvlak</b> of in een <b>doorsnede</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (5.6)</b><ul class="lst">
<li>Zoek een <b>rechthoekige driehoek</b> in een zijvlak of doorsnede.</li>
<li>Maak een <b>schets</b> van dat vlak.</li>
<li>Eerst Pythagoras, dan <b>SOS, CAS of TOA</b>.</li></ul></div>`}
],
terms:[
['Rechthoekszijde','Een van de twee zijden van een rechthoekige driehoek die samen de rechte hoek vormen.',0],
['Schuine zijde','De langste zijde van een rechthoekige driehoek, tegenover de rechte hoek.',0],
['Overstaande rechthoekszijde','De rechthoekszijde die tegenover een bepaalde hoek ligt.',0],
['Aanliggende rechthoekszijde','De rechthoekszijde die aan een bepaalde hoek ligt (niet de schuine zijde).',0],
['Sinus','De verhouding overstaande rechthoekszijde : schuine zijde in een rechthoekige driehoek (SOS).',1],
['Cosinus','De verhouding aanliggende rechthoekszijde : schuine zijde in een rechthoekige driehoek (CAS).',2],
['Tangens','De verhouding overstaande rechthoekszijde : aanliggende rechthoekszijde in een rechthoekige driehoek (TOA).',3],
['Goniometrie','Het rekenen met hoeken met behulp van sinus, cosinus en tangens; gonio betekent hoek, metrie betekent meten.',4],
['SOSCASTOA','Ezelsbruggetje om te onthouden welke verhouding (sinus, cosinus of tangens) je moet gebruiken.',4],
['Drieletternotatie','Manier om een hoek te noteren met drie letters, waarbij de middelste letter het hoekpunt is.',4],
['Diagonaalvlak','Een plat vlak binnen een ruimtefiguur dat langs een diagonaal loopt, waarin je een rechthoekige driehoek kunt zoeken.',5]
],
cards:[
['Welke zijde is de schuine zijde van een rechthoekige driehoek?','De langste zijde, tegenover de rechte hoek.',0],
['Wat is de overstaande rechthoekszijde van een hoek?','De zijde die tegenover die hoek ligt.',0],
['Wat is de formule voor de sinus?','Sinus = overstaande rechthoekszijde : schuine zijde.',1],
['Welke toets gebruik je op de rekenmachine om een hoek te vinden met de sinus?','sin⁻¹.',1],
['Wat is de formule voor de cosinus?','Cosinus = aanliggende rechthoekszijde : schuine zijde.',2],
['Wat betekent de afkorting CAS?','Cosinus = Aanliggend : Schuin.',2],
['Wat is de formule voor de tangens?','Tangens = overstaande rechthoekszijde : aanliggende rechthoekszijde.',3],
['Welke zijde heb je niet nodig bij de tangens?','De schuine zijde.',3],
['Je weet de aanliggende en de overstaande rechthoekszijde van een hoek. Welke verhouding gebruik je?','De tangens (TOA).',4],
['Wat is de middelste letter bij de drieletternotatie van een hoek?','Het hoekpunt van de hoek.',4],
['Waar zoek je een rechthoekige driehoek om een hoek in een ruimtefiguur te berekenen?','In een zijvlak of een doorsnede van de ruimtefiguur.',5]
],
quiz:[
['Welke zijde is in een rechthoekige driehoek altijd de langste?',['Een van de rechthoekszijden','De schuine zijde','Beide even lang','Dat kun je niet weten'],1,'De schuine zijde ligt tegenover de rechte hoek en is altijd de langste zijde.'],
['In driehoek ABC (rechte hoek bij C) is welke zijde de overstaande rechthoekszijde van hoek A?',['AB','AC','BC','Geen van deze'],2,'De zijde tegenover hoek A is BC, dus dat is de overstaande rechthoekszijde van hoek A.'],
['Wat is de formule voor de sinus van een hoek?',['overstaand : aanliggend','aanliggend : schuin','overstaand : schuin','schuin : overstaand'],2,'Sinus = overstaande rechthoekszijde : schuine zijde (SOS).'],
['In een rechthoekige driehoek is de overstaande zijde van hoek K 4,4 cm en de schuine zijde 5,6 cm. Wat is ∠K?',['37°','44°','52°','79°'],2,'sin ∠K = 4,4 : 5,6, dus ∠K = sin⁻¹(4,4/5,6) ≈ 52°.'],
['Wat is de formule voor de cosinus van een hoek?',['overstaand : schuin','aanliggend : schuin','overstaand : aanliggend','schuin : aanliggend'],1,'Cosinus = aanliggende rechthoekszijde : schuine zijde (CAS).'],
['De aanliggende zijde van hoek M is 6 cm, de schuine zijde is 8 cm. Wat is ∠M?',['36°','41°','48°','53°'],1,'cos ∠M = 6 : 8, dus ∠M = cos⁻¹(6/8) ≈ 41°.'],
['Wat is de formule voor de tangens van een hoek?',['overstaand : schuin','aanliggend : schuin','overstaand : aanliggend','aanliggend : overstaand'],2,'Tangens = overstaande rechthoekszijde : aanliggende rechthoekszijde (TOA).'],
['Bij een tangensberekening ken je de overstaande zijde (6 cm) en de aanliggende zijde (18 cm). Wat is de hoek ongeveer?',['9°','18°','27°','72°'],1,'tan ∠ = 6 : 18 = 0,333, dus ∠ = tan⁻¹(0,333) ≈ 18°.'],
['Je weet de aanliggende en de schuine zijde van een hoek. Welke verhouding gebruik je?',['Sinus (SOS)','Cosinus (CAS)','Tangens (TOA)','Geen van deze'],1,'Ken je de aanliggende zijde (A) en de schuine zijde (S), dan gebruik je CAS: de cosinus.'],
['Wat betekent het woord \'goniometrie\'?',['Hoek meten','Zijde tellen','Driehoek tekenen','Getal berekenen'],0,'Gonio betekent hoek, metrie betekent meten: goniometrie is dus hoek meten.'],
['Wat is ∠D₁₂ in drieletternotatie als het driehoekspunt D het hoekpunt is met buurpunten A en C?',['∠DAC','∠ADC','∠CDA en ∠ADC zijn allebei fout','∠ACD'],1,'De middelste letter van de drieletternotatie is het hoekpunt, dus ∠ADC (of gelijkwaardig ∠CDA).'],
['Waar zoek je een rechthoekige driehoek als je een hoek in een balk moet berekenen?',['In een zijvlak of doorsnede van de balk','Altijd in het grondvlak','Nooit nodig bij een balk','Op de lichaamsdiagonaal alleen'],0,'Bij hoeken in ruimtefiguren zoek je een rechthoekige driehoek in een zijvlak of een doorsnede.'],
['Wat doe je als eerste stap om een hoek in een ruimtefiguur te berekenen?',['Direct de tangens toepassen','Een schets maken van het platte vlak met de hoek erin','De lichaamsdiagonaal berekenen','De oppervlakte berekenen'],1,'Je maakt eerst een schets van het vlak waarin de hoek ligt, met de bekende maten erin, voordat je gaat rekenen.'],
['Een hellingshoek voor zonnepanelen moet tussen 34° en 38° liggen. Welke verhouding gebruik je om de hellingshoek van een dak te berekenen als je de hoogte en de breedte van het dak weet?',['Sinus','Cosinus','Tangens','Geen van deze'],2,'Ken je de overstaande zijde (hoogte) en de aanliggende zijde (breedte), dan gebruik je de tangens (TOA).'],
['Hoeken bij goniometrie-berekeningen rond je af op...',['Twee decimalen','Eén decimaal','Hele graden','Tientallen graden'],2,'Bij goniometrie rond je hoeken af op hele graden.']
]
});
