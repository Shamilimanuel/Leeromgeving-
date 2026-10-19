import { registerChapter } from '../../../registry.js';

/* Rebuilt 2026-09-25 to the recipe of Economie TL4 H1 (change 6), short
   sentences for BBL. Checked against the book: the seven Roman letters (2.1)
   and "zet een vraagteken bij wat je zoekt" in the verhoudingstabel (2.5)
   were missing. Terms, cards and quiz unchanged. */
registerChapter('wiskunde|bbl|1|2', {
title:'Getallen',
summary:[
{heading:'2.1 Getallen',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>de <b>waarde</b> van een cijfer in een getal</li>
<li>grote getallen, <b>delers</b>, <b>veelvouden</b> en <b>decimale</b> getallen</li></ul></div>`
+`<div class="box"><h4>Waar dit hoofdstuk over gaat</h4><p>Je leert hoe getallen in elkaar zitten, hoe je <b>afrondt</b>, hoe je getallen <b>vergelijkt</b> en hoe je rekent met een <b>verhoudingstabel</b>.</p></div>`
+`<h5 class="sub">Cijfers en hun waarde</h5>`
+`<div class="box"><h4>Cijfer of getal?</h4><p>Met de <b>cijfers</b> 0 tot en met 9 maak je <b>getallen</b>. De <b>plek</b> van een cijfer bepaalt hoeveel het waard is.</p></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: het getal 2305</h4><p>Wat is elk cijfer waard?</p><div class="antwoord">De 2 is 2 &times; 1000 = <b>2000</b>. De 3 is 3 &times; 100 = <b>300</b>. De 0 is <b>0</b>. De 5 is 5 &times; 1 = <b>5</b>.</div></div>`
+`<div class="tblwrap"><table class="tbl"><tr><th>Woord</th><th>Getal</th><th>Nullen</th></tr><tr><td>duizend</td><td>1.000</td><td>3</td></tr><tr><td>miljoen</td><td>1.000.000</td><td>6</td></tr><tr><td>miljard</td><td>1.000.000.000</td><td>9</td></tr></table></div>`
+`<p>17,1 miljoen schrijf je in cijfers als <b>17.100.000</b>.</p>`
+`<h5 class="sub">Delers, veelvouden, even en oneven</h5>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Deler</h4><p>24 : 6 = 4, een <b>heel getal</b>. Dus 6 is een <b>deler</b> van 24. De delers van 24 zijn 1, 2, 3, 4, 6, 8, 12 en 24.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Veelvoud</h4><p>45 : 5 = 9, een heel getal. Dus 45 is een <b>veelvoud</b> van 5. Andere veelvouden van 5: 5, 10, 15, 20, ...</p></div></div>`
+`<div class="g2">`
+`<div class="box"><h4>Even en oneven</h4><p><b>Even</b> getallen eindigen op 0, 2, 4, 6 of 8. <b>Oneven</b> getallen eindigen op 1, 3, 5, 7 of 9.</p></div>`
+`<div class="box"><h4>Decimaal of heel</h4><p>8,95 heeft cijfers achter de komma: een <b>decimaal getal</b>. 72 heeft geen komma: een <b>heel getal</b>. Op de getallenlijn is <b>rechts</b> altijd groter.</p></div></div>`
+`<h5 class="sub">Extra: Romeinse cijfers</h5>`
+`<div class="box"><h4>Zeven letters</h4><p>Romeinse cijfers zijn <b>7 letters</b>: I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000.</p></div>`
+`<div class="call reken"><b>Zo lees je een Romeins getal</b><ol class="num">
<li>Nooit meer dan <b>3 dezelfde</b> letters achter elkaar. V, L en D komen maar <b>één keer</b> voor.</li>
<li>Je schrijft van <b>hoog naar laag</b> en telt de waarden <b>op</b>.</li>
<li>Staat een lagere letter <b>vóór</b> een hogere? Dan trek je hem <b>af</b>: IX = 10 &minus; 1 = 9, CM = 1000 &minus; 100 = 900.</li></ol></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Is 10 een deler van 24?</p><p class="check-a"><b>Nee</b>: 24 : 10 = 2,4. Dat is geen heel getal.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (2.1)</b><ul class="lst">
<li>De <b>plek</b> van een cijfer bepaalt zijn waarde.</li>
<li>Duizend: 3 nullen. Miljoen: 6 nullen. Miljard: 9 nullen.</li>
<li>Een <b>deler</b> geeft een heel getal als uitkomst. Een <b>veelvoud</b> is deelbaar door dat getal.</li>
<li>Een <b>decimaal getal</b> heeft cijfers achter de komma.</li></ul></div>`},

{heading:'2.2 Afronden',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li><b>afronden</b> op decimalen en op hele getallen</li>
<li>afronden op <b>ronde getallen</b></li></ul></div>`
+`<h5 class="sub">De afrondregel</h5>`
+`<div class="call reken"><b>Zo rond je af</b><ol class="num">
<li>Kijk naar het <b>eerste cijfer</b> dat je weglaat.</li>
<li>Is dat <b>5 of hoger</b>? Maak het cijfer ervoor <b>1 hoger</b>. Dat is <b>naar boven</b> afronden.</li>
<li>Is dat <b>4 of lager</b>? Het cijfer ervoor blijft <b>gelijk</b>. Dat is <b>naar beneden</b> afronden.</li></ol></div>`
+`<div class="g2">`
+`<div class="voorbeeld"><h4>Voorbeeld: op twee decimalen</h4><p>Rond 21,4678 af op twee decimalen.</p><div class="antwoord">Je laat de <b>7</b> weg: 5 of hoger. Dus <b>21,47</b>.</div></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: op een heel getal</h4><p>Rond 21,4678 af op een heel getal.</p><div class="antwoord">Je laat de <b>4</b> weg: 4 of lager. Dus <b>21</b>.</div></div></div>`
+`<h5 class="sub">Afronden op ronde getallen</h5>`
+`<div class="box"><h4>Welk rond getal ligt het dichtst bij?</h4><p>Kies het <b>ronde getal</b> dat het dichtst bij ligt. Ligt het getal <b>precies in het midden</b>? Dan rond je <b>naar boven</b> af.</p></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: op tienduizendtallen</h4><p>Rond 56.289 af op tienduizendtallen.</p><div class="antwoord">56.289 ligt tussen 50.000 en 60.000, dichter bij <b>60.000</b>.</div></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Rond 3,45 af op één decimaal.</p><p class="check-a">Je laat de <b>5</b> weg: 5 of hoger. Dus <b>3,5</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (2.2)</b><ul class="lst">
<li>Kijk naar het <b>eerste cijfer</b> dat je weglaat.</li>
<li><b>5 of hoger</b>: naar boven. <b>4 of lager</b>: naar beneden.</li>
<li>Rond getal: kies het <b>dichtstbijzijnde</b>. Precies in het midden: naar boven.</li></ul></div>`},

{heading:'2.3 Afronden in de praktijk',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>afronden als er <b>niet staat hoe</b></li>
<li>afronden bij <b>geld</b> en bij <b>contant betalen</b></li></ul></div>`
+`<h5 class="sub">Kijk naar de situatie</h5>`
+`<div class="box"><h4>Twee vaste regels</h4><p><b>Geldbedragen</b> rond je af op <b>twee decimalen</b>. Bij <b>contant betalen</b> rond je af op een <b>veelvoud van 5 cent</b>.</p></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: ijsjes voor de klas</h4><p>Chantal trakteert 18 leerlingen en de docent: <b>19 ijsjes</b>. In een doos zitten 6 ijsjes. Hoeveel dozen koopt ze?</p><div class="antwoord">19 : 6 = 3,166... Met 3 dozen heeft ze te weinig. Ze koopt <b>4 dozen</b>.</div></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: contant betalen</h4><p>Job moet &euro; 7,43 contant betalen.</p><div class="antwoord">Afronden op 5 cent: <b>&euro; 7,45</b>.</div></div>`
+`<div class="call waarom">Waarom rond je bij de ijsjes <b>naar boven</b> af, terwijl de regel zegt naar beneden? Omdat je <b>genoeg</b> ijsjes nodig hebt. De <b>situatie</b> is belangrijker dan de regel.</div>`
+`<div class="call warn"><b>Let op:</b> reken eerst het <b>precieze antwoord</b> uit. Rond pas <b>aan het eind</b> af.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Je betaalt contant &euro; 3,98. Wat betaal je echt?</p><p class="check-a">Afronden op 5 cent: <b>&euro; 4,00</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (2.3)</b><ul class="lst">
<li>Staat er niet hoe je afrondt? Kijk naar de <b>situatie</b>.</li>
<li><b>Geld</b>: twee decimalen. <b>Contant</b>: op 5 cent.</li>
<li>Rond af <b>aan het eind</b> van je berekening.</li></ul></div>`},

{heading:'2.4 Groter, kleiner of gelijk',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>de tekens <b>&lt;</b>, <b>&gt;</b> en <b>=</b> gebruiken</li>
<li>twee getallen of sommen <b>vergelijken</b></li></ul></div>`
+`<h5 class="sub">De tekens</h5>`
+`<div class="tblwrap"><table class="tbl"><tr><th>Teken</th><th>Betekenis</th><th>Voorbeeld</th></tr><tr><td><b>&lt;</b></td><td>is kleiner dan</td><td>4 &lt; 7</td></tr><tr><td><b>&gt;</b></td><td>is groter dan</td><td>18 &gt; 17</td></tr><tr><td><b>=</b></td><td>is gelijk aan</td><td>2 + 4 = 6</td></tr></table></div>`
+`<div class="call warn"><b>Tip:</b> de <b>punt</b> van &lt; en &gt; wijst altijd naar het <b>kleinste</b> getal.</div>`
+`<h5 class="sub">Vergelijken</h5>`
+`<div class="call reken"><b>Zo vergelijk je</b><ol class="num">
<li>Decimale getallen? Maak ze <b>even lang</b> achter de komma.</li>
<li>Sommen? Reken ze eerst <b>uit</b>.</li>
<li>Zet het goede <b>teken</b> ertussen.</li></ol></div>`
+`<div class="g2">`
+`<div class="voorbeeld"><h4>Voorbeeld: 0,8 en 0,008</h4><p>Welk getal is groter?</p><div class="antwoord">0,8 = <b>0,800</b>. 800 duizendsten is meer dan 8. Dus <b>0,8 &gt; 0,008</b>.</div></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: 12 : 4 en 30 : 10</h4><p>Welk teken hoort ertussen?</p><div class="antwoord">12 : 4 = 3 en 30 : 10 = 3. Dus <b>12 : 4 = 30 : 10</b>.</div></div></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Welk teken hoort tussen 2,5 en 2,48?</p><p class="check-a">2,50 en 2,48: <b>2,5 &gt; 2,48</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (2.4)</b><ul class="lst">
<li><b>&lt;</b> is kleiner dan, <b>&gt;</b> is groter dan, <b>=</b> is gelijk aan.</li>
<li>Maak decimale getallen eerst <b>even lang</b>.</li>
<li>Reken <b>sommen</b> eerst uit, vergelijk daarna.</li></ul></div>`},

{heading:'2.5 Verhoudingstabellen',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>rekenen met een <b>verhoudingstabel</b></li>
<li>een <b>prijs</b> uitrekenen via de prijs van <b>1 stuk</b></li></ul></div>`
+`<h5 class="sub">Wat mag in een verhoudingstabel?</h5>`
+`<div class="box"><h4>Boven en onder hetzelfde</h4><p>Je mag boven en onder met <b>hetzelfde getal</b> <b>vermenigvuldigen</b>. Of boven en onder door hetzelfde getal <b>delen</b>.</p></div>`
+`<h5 class="sub">Een prijs uitrekenen</h5>`
+`<div class="call reken"><b>Stappenplan</b><ol class="num">
<li>Maak een <b>verhoudingstabel</b>.</li>
<li>Zet een <b>vraagteken</b> bij wat je zoekt.</li>
<li>Reken <b>terug naar 1</b> stuk.</li>
<li>Vermenigvuldig met het <b>aantal</b> dat je zoekt.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: mandarijnen</h4><p>40 mandarijnen kosten &euro; 6. Wat kosten 15 mandarijnen?</p><div class="tblwrap"><table class="tbl"><tr><th>aantal</th><td>40</td><td>1</td><td>15</td></tr><tr><th>prijs in &euro;</th><td>6</td><td>0,15</td><td>?</td></tr></table></div><div class="antwoord">1 mandarijn: 6 : 40 = <b>&euro; 0,15</b>. 15 mandarijnen: 0,15 &times; 15 = <b>&euro; 2,25</b>.</div></div>`
+`<div class="call waarom">Waarom eerst terug naar <b>1</b>? Vanaf 1 kom je met <b>één keer vermenigvuldigen</b> bij elk ander aantal.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">4 pakken sap kosten &euro; 6. Wat kosten 10 pakken?</p><p class="check-a">1 pak: 6 : 4 = &euro; 1,50. 10 pakken: 1,50 &times; 10 = <b>&euro; 15</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (2.5)</b><ul class="lst">
<li>Boven en onder altijd met <b>hetzelfde getal</b> vermenigvuldigen of delen.</li>
<li>Zet een <b>vraagteken</b> bij wat je zoekt.</li>
<li>Reken eerst <b>terug naar 1</b>, dan naar het aantal dat je zoekt.</li></ul></div>`}
],
terms:[
['cijfer','Een van de tekens 0 tot en met 9 waarmee je getallen schrijft.',0],
['getal','Een waarde die is opgebouwd uit een of meer cijfers.',0],
['waarde van een cijfer','Wat een cijfer betekent, afhankelijk van de plek waar het in het getal staat.',0],
['decimaal getal','Een getal met cijfers achter de komma, zoals 8,95.',0],
['heel getal','Een getal zonder cijfers achter de komma, zoals 72.',0],
['getallenlijn','Een lijn waarop getallen van klein naar groot staan; hoe verder naar rechts, hoe groter het getal.',0],
['miljoen','Het getal 1.000.000 (6 nullen).',0],
['miljard','Het getal 1.000.000.000 (9 nullen).',0],
['deler','Een getal waar je een ander getal precies (zonder rest) door kunt delen.',0],
['veelvoud','Een getal dat precies deelbaar is door een ander getal.',0],
['even getal','Een getal dat eindigt op 0, 2, 4, 6 of 8.',0],
['oneven getal','Een getal dat eindigt op 1, 3, 5, 7 of 9.',0],
['romeinse cijfers','Letters uit het Latijnse alfabet waarmee je getallen kunt schrijven, zoals IX voor 9.',0],
['afronden','Een getal vervangen door een rond getal of een getal met minder decimalen, dat er dicht bij ligt.',1],
['ronde getallen','Getallen zoals 10, 100, 1000 of 10.000, zonder rare cijfers erachter.',0],
['groter dan (>)','Het teken waarmee je aangeeft dat het linker getal meer is dan het rechter getal.',3],
['kleiner dan (<)','Het teken waarmee je aangeeft dat het linker getal minder is dan het rechter getal.',3],
['gelijk aan (=)','Het teken waarmee je aangeeft dat twee getallen (of berekeningen) dezelfde waarde hebben.',3],
['verhoudingstabel','Een tabel waarmee je waarden in dezelfde verhouding kunt vermenigvuldigen of delen.',4]
],
cards:[
['Waaruit bestaat een getal?','Uit een of meer cijfers; elk cijfer heeft een eigen waarde, afhankelijk van zijn plek.',0],
['Hoeveel nullen heeft een miljoen? En een miljard?','Miljoen: 6 nullen. Miljard: 9 nullen.',0],
['Is 6 een deler van 24?','Ja, want 24 : 6 = 4, een heel getal.',0],
['Is 10 een deler van 24?','Nee, want 24 : 10 = 2,4, geen heel getal.',0],
['Wanneer eindigt een getal op een even cijfer?','Als het eindigt op 0, 2, 4, 6 of 8.',0],
['Wat is het verschil tussen een decimaal getal en een heel getal?','Een decimaal getal heeft cijfers achter de komma; een heel getal niet.',0],
['Wat is de afrondregel?','Kijk naar het eerste cijfer dat je weglaat: 5 of hoger → naar boven, 4 of lager → naar beneden.',1],
['Rond 21,4678 af op twee decimalen.','21,47.',0],
['Hoe rond je af als er niet staat hoe je moet afronden?','Kijk naar de situatie: geldbedragen op 2 decimalen, contant betalen op een veelvoud van 5 cent.',2],
['Job moet € 7,43 contant betalen. Welk bedrag betaalt hij echt?','€ 7,45 (afgerond op een veelvoud van 5 cent).',2],
['Wat betekent het teken <?','Is kleiner dan.',3],
['Wat betekent het teken >?','Is groter dan.',3],
['Hoe vergelijk je 0,8 en 0,008?','Zorg voor evenveel decimalen: 0,8 = 0,800, dus 0,8 > 0,008.',3],
['Wat mag je in een verhoudingstabel doen?','Boven en onder met hetzelfde getal vermenigvuldigen of delen.',4],
['40 mandarijnen kosten € 6. Wat kosten 15 mandarijnen?','Eerst terug naar 1 mandarijn (€ 0,15), dan x 15 = € 2,25.',4],
['Schrijf IX als gewoon getal.','9 (10 min 1).',0]
],
quiz:[
['In het getal 2305, welke waarde heeft het cijfer 3?',['3','30','300','3000'],2,'Het cijfer 3 staat op de honderdtallen-plek: 3 x 100 = 300.'],
['Hoeveel nullen heeft een miljard?',['3','6','9','12'],2,'Miljard is 1.000.000.000, met 9 nullen.'],
['Is 10 een deler van 24?',['Ja, want 24 : 10 is een heel getal','Nee, want 24 : 10 = 2,4, geen heel getal','Ja, want 10 is kleiner dan 24','Dat kun je niet zien'],1,'24 : 10 = 2,4; dat is geen heel getal, dus 10 is geen deler van 24.'],
['Welk getal is een veelvoud van 5?',['22','32','45','53'],2,'45 : 5 = 9, een heel getal, dus 45 is een veelvoud van 5.'],
['Welk getal is even?',['57','68','71','83'],1,'Een even getal eindigt op 0, 2, 4, 6 of 8; 68 eindigt op 8.'],
['Wat is een decimaal getal?',['Een getal zonder komma','Een getal met cijfers achter de komma','Een getal groter dan 1000','Een negatief getal'],1,'Een decimaal getal heeft cijfers achter de komma, zoals 8,95.'],
['Rond 21,4678 af op twee decimalen.',['21,46','21,47','21,5','22'],1,'De derde decimaal is 7 (5 of hoger), dus de tweede decimaal (6) wordt 1 hoger: 21,47.'],
['56.289 rond je af op tienduizendtallen. Wat is de uitkomst?',['50.000','55.000','56.000','60.000'],3,'56.289 ligt tussen 50.000 en 60.000, maar dichter bij 60.000, dus dat is het afgeronde antwoord.'],
['Waarop rond je een geldbedrag meestal af?',['Op hele euro’s','Op twee decimalen','Op een veelvoud van 10 cent','Op vier decimalen'],1,'Geldbedragen rond je normaal af op twee decimalen.'],
['Bij contant betalen rond je af op...',['een veelvoud van 5 cent','een veelvoud van 10 cent','hele euro’s','je rondt nooit af'],0,'Bij contante betaling rond je het bedrag af op een veelvoud van vijf cent.'],
['Chantal heeft 19 ijsjes nodig en er zitten 6 in een doos. Hoeveel dozen moet ze kopen?',['3','3,17','4','6'],2,'19 : 6 = 3,1666… dozen; om genoeg ijsjes te hebben, moet ze naar boven afronden naar 4 dozen.'],
['Wat betekent het teken >?',['Is kleiner dan','Is gelijk aan','Is groter dan','Is een deler van'],2,'Het teken > betekent ‘is groter dan’.'],
['Wat geldt er voor 0,8 en 0,008?',['0,8 < 0,008','0,8 = 0,008','0,8 > 0,008','Dat kun je niet vergelijken'],2,'Met evenveel decimalen is 0,8 = 0,800, en dat is groter dan 0,008.'],
['Wat mag je in een verhoudingstabel doen?',['Alleen boven optellen','Boven en onder met hetzelfde getal vermenigvuldigen of delen','Onder een ander getal invullen dan boven','Willekeurige getallen invullen'],1,'In een verhoudingstabel vermenigvuldig of deel je boven en onder altijd met hetzelfde getal.'],
['40 mandarijnen kosten € 6. Wat kosten 15 mandarijnen?',['€ 1,50','€ 2,25','€ 3,00','€ 6,00'],1,'1 mandarijn kost € 6 : 40 = € 0,15; 15 mandarijnen kosten dus € 0,15 x 15 = € 2,25.'],
['Wat is de waarde van IX in Romeinse cijfers?',['9','11','14','19'],0,'Bij IX staat de kleinere waarde (I = 1) vóór de grotere (X = 10): 10 - 1 = 9.']
]
});
