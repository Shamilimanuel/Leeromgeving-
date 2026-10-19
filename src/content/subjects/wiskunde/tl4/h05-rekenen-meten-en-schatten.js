import { registerChapter } from '../../../registry.js';

/* Rebuilt 2026-09-24 to the recipe of Economie TL4 H1 (change 6), checked
   against the book scan (deel B, examentraining). Headings stay unnumbered,
   like the book's own exam part. Terms, cards and quiz unchanged. */
registerChapter('wiskunde|tl|4|5', {
title:'Rekenen, meten en schatten',
summary:[
{heading:'Procenten berekenen',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>een <b>percentage</b> van een aantal berekenen</li>
<li>rekenen met een procentuele <b>stijging</b> of <b>daling</b></li></ul></div>`
+`<div class="box"><h4>Waar dit hoofdstuk over gaat</h4><p>Je herhaalt de <b>rekenvaardigheden</b> voor je <b>examen</b>: <b>procenten</b>, <b>grote getallen</b>, <b>verhoudingen</b>, <b>eenheden omrekenen</b> en rekenen met <b>tijd en snelheid</b>.</p></div>`
+`<h5 class="sub">Hoeveel procent is het?</h5>`
+`<div class="box"><h4>Deel gedeeld door totaal</h4><p><b>percentage = deel / totaal &times; 100%</b>. Procenten rond je af op <b>één decimaal</b>.</p></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: voldoendes in de klas</h4><p>In een klas van <b>27</b> leerlingen hebben er <b>19</b> een voldoende.</p><div class="antwoord">19 / 27 &times; 100% = <b>70,4%</b>.</div></div>`
+`<h5 class="sub">Erbij of eraf</h5>`
+`<div class="call reken"><b>Stappenplan: nieuw bedrag na een stijging of daling</b><ol class="num">
<li>Bereken het <b>nieuwe percentage</b>: 100% + stijging, of 100% &minus; daling.</li>
<li>Maak er een <b>kommagetal</b> van: 110,1% wordt <b>1,101</b>.</li>
<li><b>Vermenigvuldig</b> het oude bedrag daarmee.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: het minimumloon</h4><p>Het minimumloon van <b>&euro;478,25</b> stijgt met <b>10,1%</b>.</p><div class="antwoord">100% + 10,1% = 110,1%, dus 1,101 &times; 478,25 = <b>&euro;526,55</b>.</div></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Hoe bereken je het nieuwe bedrag na een stijging van 10,1%?</p><p class="check-a">Vermenigvuldig het oude bedrag met <b>1,101</b> (want 100% + 10,1% = 110,1%).</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li><b>Percentage</b> = deel / totaal &times; 100%, afgerond op <b>één decimaal</b>.</li>
<li>Stijging: <b>&times; (100 + p) / 100</b>. Daling: <b>&times; (100 &minus; p) / 100</b>.</li></ul></div>`},

{heading:'Grote getallen',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li><b>grote getallen</b> schrijven met <b>miljoen</b> en <b>miljard</b>, en terug naar cijfers</li></ul></div>`
+`<h5 class="sub">Nullen tellen</h5>`
+`<div class="tblwrap"><table class="tbl"><tr><th>naam</th><th>getal</th><th>nullen</th></tr><tr><td><b>duizend</b></td><td>1000</td><td>3</td></tr><tr><td><b>miljoen</b></td><td>1 000 000</td><td>6</td></tr><tr><td><b>miljard</b></td><td>1 000 000 000</td><td>9</td></tr><tr><td><b>biljoen</b></td><td>1 000 000 000 000</td><td>12</td></tr></table></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: 19,6 miljoen in cijfers</h4><p>Schrijf eerst het <b>hele getal</b>: 19 miljoen = <b>19 000 000</b>.</p><div class="antwoord">Zet de <b>6</b> achter de komma op de plek van de <b>eerste nul</b>: <b>19 600 000</b>.</div></div>`
+`<div class="call waarom">Waarom omrekenen naar <b>miljoen</b> of <b>miljard</b> bij het rekenen? Met getallen vol nullen maak je snel een <b>fout</b>. In woorden blijft de uitkomst <b>overzichtelijk</b>.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Hoeveel nullen heeft een miljard?</p><p class="check-a"><b>9</b> nullen: 1 000 000 000.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li><b>Miljoen</b> 6 nullen, <b>miljard</b> 9, <b>biljoen</b> 12.</li>
<li>Een kommagetal in miljoenen: schrijf eerst het hele getal, zet dan de <b>cijfers achter de komma</b> op de plek van de nullen.</li></ul></div>`},

{heading:'Verhoudingen en vuistregels',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>rekenen met een <b>verhoudingstabel</b></li>
<li><b>schatten</b> met <b>vuistregels</b></li></ul></div>`
+`<h5 class="sub">Verhoudingstabel</h5>`
+`<div class="box"><h4>Vaste verhouding</h4><p>Met een <b>verhoudingstabel</b> reken je hoeveelheden uit die in een <b>vaste verhouding</b> staan. Zoek het getal waarmee je <b>alles vermenigvuldigt</b>.</p></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: limonade</h4><p>Je mengt <b>1 deel siroop</b> met <b>9 delen water</b>: samen <b>10 delen</b>. Je wilt <b>500 mL</b> limonade.</p><div class="antwoord">500 : 10 = <b>50</b>. Siroop 1 &times; 50 = <b>50 mL</b>, water 9 &times; 50 = <b>450 mL</b>.</div></div>`
+`<h5 class="sub">Vuistregels</h5>`
+`<div class="g2">`
+`<div class="box"><h4>Lengtes</h4><ul class="lst"><li>Een <b>volwassene</b> is ongeveer <b>1,80 m</b>.</li><li>Een <b>verdieping</b> is ongeveer <b>3 m</b> hoog.</li></ul></div>`
+`<div class="box"><h4>Onderweg</h4><ul class="lst"><li>Over de <b>weg</b> is ongeveer <b>1,2 keer</b> de afstand <b>hemelsbreed</b>.</li><li>Je <b>fietst</b> ongeveer <b>15 km</b> per uur, je <b>loopt</b> ongeveer <b>5 km</b> per uur.</li></ul></div></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: afstand op de kaart</h4><p>Op de kaart is de afstand hemelsbreed <b>8 cm</b>, en 1 cm is in het echt <b>5 km</b>.</p><div class="antwoord">Hemelsbreed: 5 &times; 8 = <b>40 km</b>. Over de weg ongeveer 1,2 &times; 40 = <b>48 km</b>.</div></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Hoeveel km fiets je ongeveer in een uur?</p><p class="check-a">Ongeveer <b>15 km</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li>In een <b>verhoudingstabel</b> vermenigvuldig je alles met <b>hetzelfde getal</b>.</li>
<li>Vuistregels: volwassene <b>1,80 m</b>, verdieping <b>3 m</b>, weg = <b>1,2 &times;</b> hemelsbreed, fietsen <b>15 km/uur</b>, lopen <b>5 km/uur</b>.</li></ul></div>`},

{heading:'Eenheden omrekenen',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>eenheden van <b>lengte</b> en <b>oppervlakte</b> omrekenen</li>
<li>andere eenheden omrekenen met een <b>schema</b></li></ul></div>`
+`<h5 class="sub">Lengte en oppervlakte</h5>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Lengte</h4><p>Stappen van <b>&times; 10</b> of <b>: 10</b>.</p><p>km &ndash; hm &ndash; dam &ndash; m &ndash; dm &ndash; cm &ndash; mm</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Oppervlakte</h4><p>Stappen van <b>&times; 100</b> of <b>: 100</b>.</p><p>km&sup2; &ndash; hm&sup2; (<b>ha</b>) &ndash; dam&sup2; (<b>are</b>) &ndash; m&sup2; (<b>ca</b>) &ndash; dm&sup2; &ndash; cm&sup2; &ndash; mm&sup2;</p></div></div>`
+`<div class="call waarom">Waarom <b>&times; 100</b> bij oppervlakte? Een vierkant van 1 m bij 1 m is <b>10 dm bij 10 dm</b>. Daar passen 10 &times; 10 = <b>100</b> vierkantjes van 1 dm&sup2; in.</div>`
+`<div class="voorbeeld"><h4>Voorbeeld: drie keer omrekenen</h4><p>Tel de <b>stappen</b> en let op de <b>richting</b>: naar een kleinere eenheid vermenigvuldig je, naar een grotere deel je.</p><div class="antwoord">265 mm = 265 : 10 : 10 = <b>2,65 dm</b>. &nbsp;5,3 km = 5,3 &times; 10 &times; 10 &times; 10 = <b>5300 m</b>. &nbsp;5 ha = 5 &times; 100 &times; 100 = <b>50 000 m&sup2;</b>.</div></div>`
+`<h5 class="sub">Andere eenheden</h5>`
+`<div class="box"><h4>Met een schema</h4><p>Ook eenheden als <b>megabyte</b> en <b>kilobyte</b>, of <b>euro</b> en <b>dollar</b>, reken je om met een schema. <b>1 MB = 1000 kB</b>: van MB naar kB doe je <b>&times; 1000</b>, andersom <b>: 1000</b>.</p></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Reken 5,3 km om naar meter.</p><p class="check-a"><b>5300 m</b> (drie stappen &times; 10).</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li><b>Lengte</b>: stappen van 10. <b>Oppervlakte</b>: stappen van 100.</li>
<li>1 <b>ha</b> = 1 hm&sup2;, 1 <b>are</b> = 1 dam&sup2;, 1 <b>ca</b> = 1 m&sup2;.</li>
<li>Andere eenheden: maak een <b>schema</b>.</li></ul></div>`},

{heading:'Tijd en snelheid',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>rekenen met <b>km/uur</b> en <b>m/s</b></li>
<li>een <b>kommagetal</b> van tijd omrekenen naar uren en minuten</li></ul></div>`
+`<h5 class="sub">Snelheid</h5>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>m/s naar km/uur</h4><p><b>&times; 3,6</b></p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>km/uur naar m/s</h4><p><b>: 3,6</b></p></div></div>`
+`<div class="call waarom">Waarom <b>3,6</b>? In een uur zitten <b>3600</b> seconden en in een km <b>1000</b> meter. 1 m/s is dus 3600 m per uur = <b>3,6 km/uur</b>.</div>`
+`<div class="voorbeeld"><h4>Voorbeeld: een marathon</h4><p>Jos loopt <b>39,5 km</b> in <b>2 uur, 14 minuten en 50 seconden</b>.</p><div class="antwoord">Afstand: <b>39 500 m</b>. Tijd: 7200 + 840 + 50 = <b>8090 s</b>. Snelheid: 39 500 : 8090 &asymp; <b>4,88 m/s</b>. In km/uur: 4,88 &times; 3,6 &asymp; <b>17,6 km/uur</b>.</div></div>`
+`<h5 class="sub">Tijd omrekenen</h5>`
+`<div class="voorbeeld"><h4>Voorbeeld: 3,6 dagen</h4><p>Reken het deel <b>achter de komma</b> steeds om naar de kleinere eenheid.</p><div class="antwoord">0,6 dag = 0,6 &times; 24 = <b>14,4 uur</b>. 0,4 uur = 0,4 &times; 60 = <b>24 minuten</b>. Dus 3,6 dagen = <b>3 dagen, 14 uur en 24 minuten</b>.</div></div>`
+`<div class="term"><b>Halveringstijd</b><span>De tijd waarin een hoeveelheid steeds tot de helft afneemt. Na één halvering is de helft over, na twee een kwart, net als exponentiële afname met groeifactor 0,5.</span></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Hoe reken je van km/uur naar m/s?</p><p class="check-a"><b>Deel door 3,6</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li>m/s naar km/uur: <b>&times; 3,6</b>. km/uur naar m/s: <b>: 3,6</b>.</li>
<li>Snelheid in m/s = <b>meters / seconden</b>.</li>
<li>Kommagetal van tijd: het stuk achter de komma <b>&times; 24</b> (dag naar uur) of <b>&times; 60</b> (uur naar minuut).</li></ul></div>`}
],
terms:[
['procentuele stijging/daling','een verandering uitgedrukt in een percentage van het oorspronkelijke bedrag; nieuw percentage is 100% + stijging of 100% - daling',0],
['miljoen','1 000 000, een getal met 6 nullen',1],
['miljard','1 000 000 000, een getal met 9 nullen',1],
['verhoudingstabel','een tabel waarmee je hoeveelheden berekent die in een vaste verhouding tot elkaar staan',2],
['vuistregel','een handige, bij benadering geldende afspraak om snel te kunnen schatten, bijvoorbeeld dat een volwassene ongeveer 1,80 m lang is',2],
['hectare (ha)','een oppervlakte-eenheid gelijk aan een hectometer in het kwadraat (hm&sup2;), oftewel 10 000 m&sup2;',3],
['are (ca)','are is een oppervlakte-eenheid gelijk aan dam&sup2; (100 m&sup2;); centiare (ca) is gelijk aan 1 m&sup2;',3],
['m/s','meter per seconde, een eenheid van snelheid',4],
['km/uur','kilometer per uur, een eenheid van snelheid; 1 m/s = 3,6 km/uur',4],
['halveringstijd','de tijd waarin een hoeveelheid (bijvoorbeeld radioactieve straling) steeds tot de helft afneemt',4],
['verdubbelingstijd','de tijd waarin een hoeveelheid bij exponenti&euml;le groei steeds verdubbelt',4],
['wetenschappelijke notatie','een manier om zeer grote of zeer kleine getallen compact te schrijven, met een macht van 10',1],
['eenheden van lengte','km, hm, dam, m, dm, cm, mm; omrekenen gaat in stappen van &times;10 of :10',3],
['eenheden van oppervlakte','km&sup2;, hm&sup2;, dam&sup2;, m&sup2;, dm&sup2;, cm&sup2;, mm&sup2;; omrekenen gaat in stappen van &times;100 of :100',3],
['afronden van procenten','de afspraak dat je een percentage afrondt op &eacute;&eacute;n decimaal',0]
],
cards:[
['Op hoeveel decimalen rond je een percentage af?','Op &eacute;&eacute;n decimaal.',0],
['Hoe bereken je het nieuwe bedrag na een stijging van 10,1%?','Vermenigvuldig het oude bedrag met 1,101 (want 100% + 10,1% = 110,1%).',0],
['Hoeveel nullen heeft een miljoen?','6 nullen (1 000 000).',1],
['Hoeveel nullen heeft een miljard?','9 nullen (1 000 000 000).',1],
['Schrijf 19,6 miljoen met alleen cijfers.','19 600 000.',1],
['Hoe bereken je met een verhoudingstabel het benodigde getal om te vermenigvuldigen?','Je deelt het gegeven totaal door het bijbehorende getal in de tabel (de twee getallen naast elkaar).',2],
['Hoeveel km fiets je ongeveer in een uur (vuistregel)?','Ongeveer 15 km.',2],
['In welke stappen reken je lengte-eenheden om?','In stappen van &times;10 of :10 (km-hm-dam-m-dm-cm-mm).',3],
['In welke stappen reken je oppervlakte-eenheden om?','In stappen van &times;100 of :100.',3],
['Reken 5,3 km om naar meter.','5300 m.',3],
['Hoe reken je van m/s naar km/uur?','Vermenigvuldig met 3,6.',4],
['Hoe reken je van km/uur naar m/s?','Deel door 3,6.',4],
['Wat is halveringstijd?','De tijd waarin een hoeveelheid steeds tot de helft afneemt.',4],
['Hoeveel is er nog over van de oorspronkelijke hoeveelheid na 3 halveringen?','1/8 deel (1/2 &times; 1/2 &times; 1/2).',4],
['Wat is de formule om snelheid te berekenen uit afstand en tijd?','snelheid = afstand (in meters) gedeeld door tijd (in seconden), voor de snelheid in m/s.',4]
],
quiz:[
['In een klas van 27 leerlingen hebben 19 een voldoende. Hoeveel procent is dat (afgerond op &eacute;&eacute;n decimaal)?',['19,0%','70,4%','70,0%','27,0%'],1,'19/27 &times; 100% = 70,370...% → afgerond 70,4%.'],
['Een bedrag van &euro;478,25 stijgt met 10,1%. Wat is het nieuwe bedrag?',['&euro;488,35','&euro;526,55','&euro;478,25','&euro;430,03'],1,'1,101 &times; 478,25 = 526,55.'],
['Schrijf 52 650 000 000 in miljarden.',['52,65 miljard','5,265 miljard','526,5 miljard','52 650 miljard'],0,'52 650 000 000 = 52,65 miljard.'],
['Hoeveel nullen heeft het getal \'biljoen\'?',['6','9','12','15'],2,'Een biljoen is 1 000 000 000 000, met 12 nullen.'],
['Je maakt limonade met 1 deel siroop op 9 delen water. Hoeveel mL siroop heb je nodig voor 500 mL limonade?',['50 mL','45 mL','500 mL','9 mL'],0,'10 delen limonade = 500 mL, dus 1 deel = 50 mL siroop.'],
['Wat is ongeveer de vuistregel voor de hoogte van een verdieping?',['1 m','3 m','10 m','30 m'],1,'Een verdieping is ongeveer 3 m hoog.'],
['Reken 265 mm om naar decimeter.',['2,65 dm','26,5 dm','0,265 dm','265 dm'],0,'265 mm = 265 : 10 : 10 = 2,65 dm.'],
['Reken 5 hectare (ha) om naar m&sup2;.',['500 m&sup2;','5000 m&sup2;','50 000 m&sup2;','500 000 m&sup2;'],2,'5 ha = 5 &times; 100 &times; 100 = 50 000 m&sup2;.'],
['Reken 360 cm&sup2; om naar dm&sup2;.',['36 dm&sup2;','3,6 dm&sup2;','0,36 dm&sup2;','3600 dm&sup2;'],1,'360 cm&sup2; = 360 : 100 = 3,6 dm&sup2;.'],
['Een loper heeft een snelheid van 4,88 m/s. Wat is dat in km/uur (afgerond op &eacute;&eacute;n decimaal)?',['4,9 km/uur','17,6 km/uur','48,8 km/uur','1,4 km/uur'],1,'4,88 &times; 3,6 = 17,568 → afgerond 17,6 km/uur.'],
['Een radioactieve stof heeft een halveringstijd van 13 uur. Hoeveel procent van de oorspronkelijke straling is er over na twee halveringen?',['50%','25%','75%','12,5%'],1,'Na 1 halvering 50%, na 2 halveringen 25% (de helft van de helft).'],
['Jos loopt 39,5 km in 8090 seconden. Wat is zijn snelheid in m/s (afgerond op twee decimalen)?',['4,88 m/s','48,8 m/s','0,49 m/s','39,5 m/s'],0,'39 500 : 8090 = 4,88 m/s.'],
['1 MB = 1000 kB. Hoeveel kB is 2,8 MB?',['280 kB','2800 kB','28 kB','0,0028 kB'],1,'2,8 MB = 2,8 &times; 1000 = 2800 kB.'],
['Een prijs daalt met 1,4%. Met welk getal vermenigvuldig je het oude bedrag om het nieuwe bedrag te vinden?',['1,014','0,986','1,4','0,14'],1,'100% - 1,4% = 98,6%, dus je vermenigvuldigt met 0,986.'],
['Waarom kun je bij het rekenen met grote getallen beter eerst omrekenen naar \'miljoen\' of \'miljard\'?',['Omdat rekenmachines dat verplicht stellen','Om de uitkomst overzichtelijker en makkelijker te controleren te maken','Omdat dat de enige juiste schrijfwijze is','Om fouten met procenten te voorkomen'],1,'Werken met miljoen of miljard maakt grote getallen overzichtelijker.']
]
});
