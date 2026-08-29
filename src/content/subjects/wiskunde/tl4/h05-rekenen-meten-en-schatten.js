import { registerChapter } from '../../../registry.js';

registerChapter('wiskunde|tl|4|5', {
title:'Rekenen, meten en schatten',
summary:[
{heading:'Procenten berekenen',html:'<div class=\'box\'>In dit hoofdstuk herhaal je rekenvaardigheden die je nodig hebt voor je examen: procenten, grote getallen, verhoudingen, eenheden omrekenen en rekenen met tijd en snelheid.</div><div class=\'box\'>Om een percentage van een aantal te berekenen, deel je het deel door het totaal en vermenigvuldig je met 100%.</div><div class=\'voorbeeld\'><p><b>Voorbeeld</b><br>In een klas van 27 leerlingen hebben 19 leerlingen een voldoende. Het percentage is 19/27 &times; 100% = 70,4%. <b>Procenten rond je af op &eacute;&eacute;n decimaal.</b></p></div><div class=\'call\'>Bij een <span class=\'term\'>procentuele stijging</span> of <span class=\'term\'>daling</span> bereken je eerst het nieuwe percentage (100% + stijging of 100% &minus; daling) en daarna het nieuwe bedrag.</div><div class=\'voorbeeld\'><p><b>Voorbeeld</b><br>Het minimumloon stijgt met 10,1%: het nieuwe percentage is 110,1%. Was het loon &euro;478,25, dan is het nieuwe loon 1,101 &times; 478,25 = &euro;526,55.</p></div>'},
{heading:'Grote getallen',html:'<div class=\'box\'>Grote getallen worden vaak geschreven met de woorden <b>miljoen</b> of <b>miljard</b>.</div><div class=\'tblwrap\'><table class=\'tbl\'><tr><th>naam</th><th>getal</th><th>aantal nullen</th></tr><tr><td>duizend</td><td>1000</td><td>3</td></tr><tr><td>miljoen</td><td>1 000 000</td><td>6</td></tr><tr><td>miljard</td><td>1 000 000 000</td><td>9</td></tr><tr><td>biljoen</td><td>1 000 000 000 000</td><td>12</td></tr></table></div><div class=\'voorbeeld\'><p><b>Voorbeeld</b><br>Schrijf 19,6 miljoen met alleen cijfers: 19 miljoen = 19 000 000. Achter de 6 in 19,6 verander je de eerste nul in een 6: 19 600 000.</p></div><div class=\'call\'>Bij het rekenen met grote getallen (bijvoorbeeld vermenigvuldigen) is het handig om eerst om te rekenen naar het woord miljoen of miljard, zodat de uitkomst overzichtelijk blijft.</div>'},
{heading:'Verhoudingen en vuistregels',html:'<div class=\'box\'>Met een <span class=\'term\'>verhoudingstabel</span> bereken je hoeveelheden die in een vaste verhouding staan.</div><div class=\'voorbeeld\'><p><b>Voorbeeld</b><br>Je mengt 1 deel siroop met 9 delen water (10 delen limonade). Voor 500 mL limonade: 500 : 10 = 50, dus je vermenigvuldigt elk deel met 50. Siroop: 1 &times; 50 = 50 mL, water: 9 &times; 50 = 450 mL.</p></div><div class=\'call\'>Handige vuistregels: een volwassene is ongeveer 1,80 m lang, een verdieping is ongeveer 3 m hoog, de afstand over de weg is ongeveer 1,2 keer de afstand hemelsbreed, je fietst ongeveer 15 km per uur en je loopt ongeveer 5 km per uur.</div>'},
{heading:'Eenheden omrekenen',html:'<div class=\'box\'>Bij <span class=\'term\'>eenheden van lengte</span> reken je om met stappen van &times;10 of :10 (km-hm-dam-m-dm-cm-mm). Bij <span class=\'term\'>eenheden van oppervlakte</span> reken je om met stappen van &times;100 of :100 (km&sup2;-hm&sup2;(ha)-dam&sup2;(are)-m&sup2;(ca)-dm&sup2;-cm&sup2;-mm&sup2;).</div><div class=\'voorbeeld\'><p><b>Voorbeeld</b><br>265 mm = 265 : 10 : 10 = 2,65 dm. 5,3 km = 5,3 &times; 10 &times; 10 &times; 10 = 5300 m. 5 ha = 5 &times; 100 &times; 100 = 50 000 m&sup2;.</p></div><div class=\'call\'>Ook andere eenheden (zoals megabyte-kilobyte, of euro-dollar) kun je omrekenen met een schema: 1 MB = 1000 kB, dus van MB naar kB doe je &times;1000 en andersom :1000.</div>'},
{heading:'Tijd en snelheid',html:'<div class=\'box\'>De twee belangrijkste eenheden van snelheid zijn kilometer per uur (km/uur) en meter per seconde (m/s).</div><div class=\'call\'>Om van m/s naar km/uur te gaan: &times;3,6. Om van km/uur naar m/s te gaan: :3,6.</div><div class=\'voorbeeld\'><p><b>Voorbeeld</b><br>Jos loopt een marathon: 39,5 km in 2 uur, 14 minuten en 50 seconden. Reken de afstand om naar meter (39 500 m) en de tijd naar seconden (7200 + 840 + 50 = 8090 s). Snelheid = 39 500 : 8090 = 4,88 m/s. In km/uur: 4,88 &times; 3,6 = 17,6 km/uur.</p></div><div class=\'call\'>Bij <span class=\'term\'>halveringstijd</span> is de tijd waarin de helft van een hoeveelheid verdwijnt of afneemt steeds hetzelfde. Na &eacute;&eacute;n halvering blijft de helft over, na twee halveringen een kwart, enzovoort (net als bij exponenti&euml;le afname met groeifactor 0,5).</div>'}
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
