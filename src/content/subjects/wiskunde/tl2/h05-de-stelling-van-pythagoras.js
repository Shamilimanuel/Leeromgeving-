import { registerChapter } from '../../../registry.js';

/* Rebuilt 2026-09-24 to the recipe of Economie TL4 H1 (change 6). Added
   from the book: calculating a rechthoekszijde (theorie G, the answer
   rhz = sqrt(55) = 7,4) and checking whether a triangle is right-angled
   (theorie H). The drawing is unchanged. Terms, cards and quiz unchanged. */
registerChapter('wiskunde|tl|2|5', {
title:'De stelling van Pythagoras',
summary:[
{heading:'5.1 Kwadraten en wortels',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>het <b>kwadraat</b> van een getal berekenen</li>
<li>de <b>wortel</b> van een getal berekenen</li></ul></div>`
+`<div class="box"><h4>Waar dit hoofdstuk over gaat</h4><p>Je rekent met <b>kwadraten</b>, <b>wortels</b> en <b>machten</b>. Daarna leer je de <b>stelling van Pythagoras</b>: daarmee bereken je in een <b>rechthoekige driehoek</b> de derde zijde als je er twee weet. Pythagoras heeft de stelling niet zelf bedacht, maar hij was wel de eerste die <b>bewees</b> dat hij altijd klopt.</p></div>`
+`<h5 class="sub">Kwadraat en wortel</h5>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Kwadraat</h4><p>Een getal <b>keer zichzelf</b>: 5&sup2; = 5 &times; 5 = <b>25</b>.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Wortel</h4><p>De <b>omgekeerde</b> bewerking: &radic;25 = <b>5</b>, want 5 &times; 5 = 25.</p></div></div>`
+`<div class="call waarom">Waarom heet het een <b>kwadraat</b>? Een <b>vierkant</b> met zijden van 4 cm heeft een oppervlakte van 4 &times; 4 = <b>16 cm&sup2;</b>. Andersom: is de oppervlakte 16 cm&sup2;, dan is de zijde <b>&radic;16 = 4 cm</b>.</div>`
+`<div class="voorbeeld"><h4>Voorbeeld: 7,9&sup2; en &radic;61</h4><p>Bereken met je rekenmachine.</p><div class="antwoord">7,9&sup2; = 7,9 &times; 7,9 = <b>62,41</b>. &radic;61 = 7,81&hellip;, dus ongeveer <b>7,81</b>.</div></div>`
+`<div class="call warn"><b>Rekenmachine:</b> gebruik de <b>kwadraattoets</b> en de <b>worteltoets</b>. Krijg je een wortel als antwoord (zoals &radic;2), maak er dan een <b>decimaal getal</b> van: &radic;2 = 1,414&hellip;</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Wat is &radic;100?</p><p class="check-a"><b>10</b>, want 10 &times; 10 = 100.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (5.1)</b><ul class="lst">
<li><b>Kwadraat</b>: getal keer zichzelf.</li>
<li><b>Wortel</b>: welk getal keer zichzelf geeft dit?</li>
<li>Kwadrateren en worteltrekken zijn elkaars <b>omgekeerde</b>.</li></ul></div>`},

{heading:'5.2 Machten',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>wat een <b>macht</b>, een <b>grondtal</b> en een <b>exponent</b> zijn</li>
<li>een macht uitrekenen met je <b>rekenmachine</b></li></ul></div>`
+`<h5 class="sub">Grondtal en exponent</h5>`
+`<div class="box"><h4>Wat is een macht?</h4><p>Bij een <b>macht</b> vermenigvuldig je een getal een aantal keer met <b>zichzelf</b>. In <b>2<sup>6</sup></b> is 2 het <b>grondtal</b> en 6 de <b>exponent</b>. Het betekent 2 &times; 2 &times; 2 &times; 2 &times; 2 &times; 2 = <b>64</b>. Je zegt: &ldquo;twee tot de zesde&rdquo;.</p></div>`
+`<div class="term"><b>Machtsverheffen</b><span>Een macht van een getal uitrekenen. Een kwadraat is een macht met exponent 2.</span></div>`
+`<div class="call reken"><b>Stappenplan: een macht op je rekenmachine</b><ol class="num">
<li>Tik het <b>grondtal</b> in.</li>
<li>Druk op de <b>machttoets</b>.</li>
<li>Tik de <b>exponent</b> in en druk op <b>=</b>.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: 15,8<sup>5</sup></h4><p>Bereken met je rekenmachine.</p><div class="antwoord">15.8, machttoets, 5: <b>984 658,0477</b>.</div></div>`
+`<div class="call warn"><b>Veelgemaakte fout:</b> 2<sup>6</sup> is <b>niet</b> 2 &times; 6 = 12. Het is 2 zes keer met <b>zichzelf</b> vermenigvuldigd: 64.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Wat is het grondtal in 3<sup>4</sup>?</p><p class="check-a"><b>3</b>. De exponent is 4.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (5.2)</b><ul class="lst">
<li><b>grondtal<sup>exponent</sup></b>: de exponent zegt hoe vaak je vermenigvuldigt.</li>
<li>Een <b>kwadraat</b> is een macht met exponent 2.</li>
<li>Gebruik de <b>machttoets</b>.</li></ul></div>`},

{heading:'5.3 Zijden benoemen',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>de <b>rechthoekszijden</b> en de <b>schuine zijde</b> aanwijzen</li></ul></div>`
+`<h5 class="sub">Drie zijden, twee namen</h5>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Rechthoekszijden (rhz)</h4><p>De <b>twee</b> zijden die <b>vastzitten</b> aan de rechte hoek.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Schuine zijde (sz)</h4><p>De zijde <b>tegenover</b> de rechte hoek. Altijd de <b>langste</b> zijde.</p></div></div>`
+`<figure class='fig'><svg viewBox="0 0 340 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Rechthoekige driehoek DEF met de rechte hoek bij F; DF en EF zijn de rechthoekszijden, DE is de schuine zijde"><path d="M95 175 L235 175 L95 65 Z" fill="var(--accent)" fill-opacity=".16" stroke="var(--accent)" stroke-width="2" stroke-linejoin="round"/><polyline points="108,175 108,162 95,162" fill="none" stroke="var(--accent)" stroke-width="1.7"/><g fill="var(--txt)" font-size="12" font-family="inherit"><text x="82" y="61">D</text><text x="241" y="182">E</text><text x="80" y="185">F</text></g><g fill="var(--mut)" font-size="9.5" font-family="inherit"><text x="86" y="116" text-anchor="end">rechthoeks-</text><text x="86" y="128" text-anchor="end">zijde</text><text x="165" y="192" text-anchor="middle">rechthoekszijde</text><text x="178" y="108">schuine zijde</text></g><path d="M172 112 L155 122" stroke="var(--mut)" stroke-width="1" fill="none" opacity=".7"/></svg><figcaption>De rechte hoek zit bij F. De twee zijden die eraan vastzitten (DF en EF) zijn de rechthoekszijden; DE ligt er tegenover en is de schuine zijde &mdash; altijd de langste.</figcaption></figure>`
+`<div class="call reken"><b>Stappenplan: de schuine zijde vinden</b><ol class="num">
<li>Zoek het <b>rechtehoekteken</b>.</li>
<li>De zijde die de rechte hoek <b>niet</b> raakt, is de <b>schuine zijde</b>.</li>
<li>De andere twee zijn de <b>rechthoekszijden</b>.</li></ol></div>`
+`<div class="call waarom">Waarom is de schuine zijde altijd de <b>langste</b>? Hij ligt tegenover de <b>grootste hoek</b> (90&deg;). In een driehoek ligt tegenover een grotere hoek altijd een <b>langere</b> zijde.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Welke zijde van een rechthoekige driehoek is altijd de langste?</p><p class="check-a">De <b>schuine zijde</b>, tegenover de rechte hoek.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (5.3)</b><ul class="lst">
<li><b>Rechthoekszijden</b> zitten vast aan de rechte hoek.</li>
<li>De <b>schuine zijde</b> ligt tegenover de rechte hoek en is de <b>langste</b>.</li></ul></div>`},

{heading:'5.4 De stelling van Pythagoras',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>de <b>schuine zijde</b> berekenen als je de twee <b>rechthoekszijden</b> weet</li>
<li>een <b>rechthoekszijde</b> berekenen als je de twee andere zijden weet</li></ul></div>`
+`<h5 class="sub">De stelling</h5>`
+`<div class="box"><h4>Voor elke rechthoekige driehoek</h4><p><b>rhz&sup2; + rhz&sup2; = sz&sup2;</b></p><p>In woorden: <b>ene rechthoekszijde&sup2; + andere rechthoekszijde&sup2; = schuine zijde&sup2;</b>. Je schrijft het op in het <b>werkschema van Pythagoras</b>.</p></div>`
+`<div class="call reken"><b>Stappenplan: het werkschema</b><ol class="num">
<li>Schrijf drie regels op: <b>rhz&sup2; =</b>, <b>rhz&sup2; =</b>, <b>sz&sup2; =</b>.</li>
<li>Vul de <b>kwadraten</b> in die je weet.</li>
<li>Reken het ontbrekende kwadraat uit: <b>optellen</b> voor de sz, <b>aftrekken</b> voor een rhz.</li>
<li>Trek de <b>wortel</b> en rond af.</li></ol></div>`
+`<h5 class="sub">Schuine zijde berekenen</h5>`
+`<div class="voorbeeld"><h4>Voorbeeld: AC = 5 cm, BC = 4 cm</h4><p>AC en BC zijn de rechthoekszijden. Bereken AB. Rond af op één decimaal.</p><div class="antwoord">rhz&sup2; = 5&sup2; = 25. rhz&sup2; = 4&sup2; = 16. sz&sup2; = 25 + 16 = <b>41</b>. sz = &radic;41 = 6,40&hellip;, dus <b>AB &asymp; 6,4 cm</b>.</div></div>`
+`<h5 class="sub">Rechthoekszijde berekenen</h5>`
+`<div class="voorbeeld"><h4>Voorbeeld: sz = 8 cm, rhz = 3 cm</h4><p>Bereken de andere rechthoekszijde QR. Rond af op één decimaal.</p><div class="antwoord">rhz&sup2; = 3&sup2; = 9. sz&sup2; = 8&sup2; = 64. De andere rhz&sup2; = 64 &minus; 9 = <b>55</b>. rhz = &radic;55 = 7,416&hellip;, dus <b>QR &asymp; 7,4 cm</b>.</div></div>`
+`<div class="call warn"><b>Veelgemaakte fout:</b> bij een <b>rechthoekszijde</b> toch optellen. Zoek je een rhz, dan <b>trek je af</b>: sz&sup2; &minus; rhz&sup2;. Controle: je antwoord moet <b>korter</b> zijn dan de schuine zijde.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Je zoekt een rechthoekszijde. Tel je de kwadraten op of trek je ze af?</p><p class="check-a">Je <b>trekt af</b>: sz&sup2; &minus; rhz&sup2;.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (5.4)</b><ul class="lst">
<li><b>rhz&sup2; + rhz&sup2; = sz&sup2;</b>, alleen in een <b>rechthoekige</b> driehoek.</li>
<li>Schuine zijde: <b>optellen</b>. Rechthoekszijde: <b>aftrekken</b>.</li>
<li>Vergeet de <b>wortel</b> niet.</li></ul></div>`},

{heading:'5.5 De stelling van Pythagoras toepassen',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>Pythagoras gebruiken in <b>situaties</b>, met <b>hulplijnen</b></li>
<li>met een berekening <b>onderzoeken</b> of een driehoek <b>rechthoekig</b> is</li></ul></div>`
+`<h5 class="sub">Zelf een rechthoekige driehoek maken</h5>`
+`<div class="box"><h4>Hulplijnen</h4><p>Staat er geen rechthoekige driehoek in de tekening, <b>teken</b> er dan zelf een met een <b>hulplijn</b>, bijvoorbeeld een <b>hoogtelijn</b>. Ook de <b>diagonaal</b> van een <b>balk</b> of <b>kubus</b> reken je zo uit, vaak met <b>twee keer</b> Pythagoras: eerst de diagonaal van een zijvlak, dan die door de balk.</p></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: een ladder tegen de muur</h4><p>De bovenkant is <b>4 m</b> hoog, de onderkant staat <b>1 m</b> van de muur. Hoe lang is de ladder? Rond af op twee decimalen.</p><div class="antwoord">De muur en de grond maken de <b>rechte hoek</b>; de ladder is de <b>schuine zijde</b>. rhz&sup2; = 16, rhz&sup2; = 1, sz&sup2; = <b>17</b>. sz = &radic;17 &asymp; <b>4,12 m</b>.</div></div>`
+`<h5 class="sub">Is de driehoek rechthoekig?</h5>`
+`<div class="call reken"><b>Stappenplan: rechthoekig of niet</b><ol class="num">
<li>De <b>langste</b> zijde zou de schuine zijde zijn.</li>
<li>Maak het werkschema en zet een <b>vraagteken</b> achter de plus.</li>
<li>Vul de <b>kwadraten</b> van de drie zijden in.</li>
<li><b>Klopt</b> de optelling? Dan is de driehoek rechthoekig.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: zijden 6, 8 en 10 cm</h4><p>Onderzoek of de driehoek rechthoekig is.</p><div class="antwoord">De langste zijde is 10. 6&sup2; + 8&sup2; = 36 + 64 = <b>100</b>, en 10&sup2; = <b>100</b>. Het klopt, dus de driehoek is <b>rechthoekig</b>.</div></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Welke zijde neem je als schuine zijde als je onderzoekt of een driehoek rechthoekig is?</p><p class="check-a">De <b>langste</b> zijde.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (5.5)</b><ul class="lst">
<li>Geen rechthoekige driehoek? Teken een <b>hulplijn</b>.</li>
<li>Diagonaal door een balk: <b>twee keer</b> Pythagoras.</li>
<li><b>Klopt</b> rhz&sup2; + rhz&sup2; = sz&sup2;, dan is de driehoek rechthoekig.</li></ul></div>`}
],
terms:[
['Kwadraat','De uitkomst van een getal vermenigvuldigd met zichzelf, bijvoorbeeld 5² = 25.',0],
['Wortel','De omgekeerde bewerking van kwadrateren; √25 = 5 want 5 × 5 = 25.',0],
['Macht','Een getal dat je krijgt door een grondtal een aantal keer (de exponent) met zichzelf te vermenigvuldigen.',1],
['Grondtal','Het getal dat bij een macht vermenigvuldigd wordt; in 2⁶ is 2 het grondtal.',1],
['Exponent','Het getal dat aangeeft hoe vaak het grondtal met zichzelf vermenigvuldigd wordt; in 2⁶ is 6 de exponent.',1],
['Machtsverheffen','Het berekenen van de macht van een getal.',1],
['Rechthoekszijde','Een van de twee zijden van een rechthoekige driehoek die vastzitten aan de rechte hoek.',2],
['Schuine zijde','De zijde van een rechthoekige driehoek die tegenover de rechte hoek ligt; de langste zijde.',2],
['Stelling van Pythagoras','De regel dat in een rechthoekige driehoek geldt: rechthoekszijde² + rechthoekszijde² = schuine zijde².',3],
['Werkschema van Pythagoras','Een schema waarin je de kwadraten van de rechthoekszijden optelt om het kwadraat van de schuine zijde te vinden.',3],
['Hulplijn','Een zelfgetekende lijn (zoals een hoogtelijn) die helpt om een rechthoekige driehoek te maken.',4],
['Diagonaal','Een lijnstuk dat twee hoekpunten van een figuur of ruimtefiguur verbindt die niet naast elkaar liggen.',4]
],
cards:[
['Hoe bereken je het kwadraat van een getal?','Je vermenigvuldigt het getal met zichzelf.',0],
['Wat is de wortel van 81?','9, want 9 × 9 = 81.',0],
['Wat is het grondtal in de macht 2⁶?','2.',1],
['Wat is de exponent in de macht 2⁶?','6.',1],
['Welke zijden van een rechthoekige driehoek noem je de rechthoekszijden?','De twee zijden die vastzitten aan de rechte hoek.',2],
['Welke zijde is de schuine zijde?','De zijde tegenover de rechte hoek; de langste zijde van de driehoek.',2],
['Wat zegt de stelling van Pythagoras?','rechthoekszijde² + rechthoekszijde² = schuine zijde².',3],
['In welk soort driehoek mag je de stelling van Pythagoras gebruiken?','Alleen in een rechthoekige driehoek.',3],
['Wat doe je nadat je sz² hebt uitgerekend?','Je trekt de wortel om de lengte van de schuine zijde te vinden.',3],
['Wat teken je als er geen rechthoekige driehoek in de figuur staat, maar je de stelling van Pythagoras toch nodig hebt?','Een hulplijn, bijvoorbeeld een hoogtelijn, om een rechthoekige driehoek te maken.',4],
['Hoeveel keer pas je de stelling van Pythagoras vaak toe bij het berekenen van de diagonaal van een balk?','Twee keer: eerst voor het zijvlak, daarna voor de ruimtediagonaal.',4],
['Hoe schrijf je \'de wortel van 25\' in wiskundige notatie?','√25.',0]
],
quiz:[
['Wat is 7²?',['14','49','77','72'],1,'7² = 7 × 7 = 49.'],
['Wat is √36?',['6','18','72','1296'],0,'√36 = 6, want 6 × 6 = 36.'],
['In de macht 5³, wat is de exponent?',['3','5','15','125'],0,'In 5³ is 5 het grondtal en 3 de exponent.'],
['Welke zijde van een rechthoekige driehoek is de schuine zijde?',['De kortste zijde','Een van de rechthoekszijden','De zijde tegenover de rechte hoek','Een willekeurige zijde'],2,'De schuine zijde ligt tegenover de rechte hoek en is de langste zijde.'],
['In een rechthoekige driehoek zijn de rechthoekszijden 3 cm en 4 cm. Wat is de schuine zijde?',['5 cm','7 cm','12 cm','25 cm'],0,'3² + 4² = 9 + 16 = 25, √25 = 5 cm.'],
['In een rechthoekige driehoek is de schuine zijde 13 cm en één rechthoekszijde 5 cm. Wat is de andere rechthoekszijde?',['8 cm','12 cm','18 cm','169 cm'],1,'13² − 5² = 169 − 25 = 144, √144 = 12 cm.'],
['Mag je de stelling van Pythagoras gebruiken in een driehoek zonder rechte hoek?',['Ja, altijd','Nee, alleen in een rechthoekige driehoek','Alleen als de driehoek gelijkbenig is','Alleen als je de oppervlakte al weet'],1,'De stelling van Pythagoras geldt alleen voor rechthoekige driehoeken.'],
['Een ladder staat met de onderkant 1 m van de muur en de bovenkant 4 m boven de grond. Hoe lang is de ladder? Rond af op twee decimalen.',['4,12 m','4,00 m','5,00 m','17,00 m'],0,'1² + 4² = 1 + 16 = 17, √17 = 4,12 m.'],
['Wat gebruik je als er geen rechthoekige driehoek getekend is, maar je die wel nodig hebt?',['Een gok','Een hulplijn','Een cirkeldiagram','Een schaallijn'],1,'Je tekent zelf een hulplijn, zoals een hoogtelijn, om een rechthoekige driehoek te maken.'],
['Een kubus heeft ribben van 4 cm. Wat is eerst nodig om de ruimtediagonaal te berekenen?',['De oppervlakte van een zijvlak','De diagonaal van een zijvlak','De omtrek van de kubus','De inhoud van de kubus'],1,'Je berekent eerst de diagonaal van een zijvlak met Pythagoras, en gebruikt die daarna om de ruimtediagonaal te berekenen.'],
['Wat is 6,5²?',['13','39','42,25','6,5'],2,'6,5² = 6,5 × 6,5 = 42,25.'],
['Welke uitspraak over Pythagoras klopt?',['Hij bedacht de stelling als eerste zonder bewijs','Hij was de eerste die bewees dat de stelling altijd klopt','Hij leefde in Nederland','Hij ontdekte de stelling pas na zijn dood'],1,'Pythagoras bedacht de stelling niet zelf, maar was de eerste die bewees dat hij altijd klopt.'],
['Een vlieger hangt aan een 30 m lang touw. Jack staat recht onder de vlieger, 24 m van Jos. Hoe hoog hangt de vlieger?',['6 m','18 m','24 m','54 m'],1,'30² − 24² = 900 − 576 = 324, √324 = 18 m.'],
['Wat is het werkschema van Pythagoras?',['Een schema om hoeken te tekenen','Een schema om de kwadraten van de rechthoekszijden op te tellen tot het kwadraat van de schuine zijde','Een schema om formules te maken','Een schema om grafieken te tekenen'],1,'In het werkschema tel je rhz² + rhz² op tot sz², en trek je daarna de wortel.'],
['Welke driehoek is rechthoekig? Driehoek A heeft zijden 6, 8 en 10. Driehoek B heeft zijden 5, 6 en 8.',['Alleen driehoek A','Alleen driehoek B','Beide driehoeken','Geen van beide'],0,'6² + 8² = 36 + 64 = 100 = 10², dus driehoek A is rechthoekig. Bij driehoek B klopt 5² + 6² = 61 ≠ 8² = 64 niet.']
]
});
