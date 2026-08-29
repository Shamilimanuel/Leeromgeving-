import { registerChapter } from '../../../registry.js';

registerChapter('wiskunde|tl|4|3', {
title:'Drie dimensies, afstanden en hoeken',
summary:[
{heading:'Tekenen in perspectief',html:'<div class=\'box\'>In dit hoofdstuk leer je tekenen in perspectief, hoeken berekenen in vlakke figuren en met goniometrie, zijden berekenen in een driehoek, en werken met co&ouml;rdinaten en berekeningen in de ruimte.</div><div class=\'box\'>Bij tekeningen in <span class=\'term\'>perspectief</span> wordt alles wat verder weg is kleiner getekend. Daardoor lijkt zo\'n tekening veel op de werkelijkheid.</div><div class=\'call\'>Regels bij perspectieftekeningen:<div class=\'num\'><ol><li>Evenwijdige lijnen die van je af lopen, snijden elkaar in het <span class=\'term\'>verdwijnpunt</span> V op de <span class=\'term\'>horizon</span>.</li><li>De horizon is op ooghoogte.</li><li>Verticale lijnen blijven verticaal.</li></ol></div></div><div class=\'voorbeeld\'><p><b>Voorbeeld</b><br>Om de rechterzijkant van een weg in perspectief te tekenen, trek je een lijn van een punt op de weg naar het verdwijnpunt V op de horizon.</p></div>'},
{heading:'Hoeken in vlakke figuren',html:'<div class=\'box\'>De hoeken van een driehoek zijn samen 180&deg;. De hoeken van een vierhoek zijn samen 360&deg;. Hoeken die samen een gestrekte hoek vormen, zijn samen 180&deg;.</div><div class=\'call\'>Bij een <span class=\'term\'>parallellogram</span> zijn overstaande hoeken even groot en zijn hoeken die naast elkaar liggen (bij een evenwijdig lijnenpaar) samen 180&deg;.</div><div class=\'voorbeeld\'><p><b>Voorbeeld</b><br>In een dakspant is &#9651;BCF een gelijkzijdige driehoek. Bij punt G zijn rechte hoeken. Het dak is symmetrisch en &ang;A = 29&deg;. Omdat het dak symmetrisch is, is &ang;D ook 29&deg;. Met de hoekensom van driehoeken en de gestrekte hoek kun je de overige hoeken (&ang;B&#8322;, &ang;F&#8323;, &ang;C&#8323;) stap voor stap berekenen.</p></div>'},
{heading:'Hoeken berekenen met goniometrie',html:'<div class=\'box\'>In een rechthoekige driehoek kun je een hoek berekenen als je twee zijden weet. Je gebruikt dan de sinus, cosinus of tangens en de inverse (<b>sin<sup>-1</sup></b>, <b>cos<sup>-1</sup></b> of <b>tan<sup>-1</sup></b>) op je rekenmachine.</div><div class=\'tblwrap\'><table class=\'tbl\'><tr><th>afkorting</th><th>betekenis</th></tr><tr><td>SOS</td><td>Sinus = Overstaande zijde / Schuine zijde</td></tr><tr><td>CAS</td><td>Cosinus = Aanliggende zijde / Schuine zijde</td></tr><tr><td>TOA</td><td>Tangens = Overstaande zijde / Aanliggende zijde</td></tr></table></div><div class=\'call\'>Hoeken in de ruimte kun je benoemen met drie hoofdletters, bijvoorbeeld &ang;D12: de middelste letter is dan het hoekpunt van de hoek.</div><div class=\'voorbeeld\'><p><b>Voorbeeld</b><br>Om &ang;C te berekenen in een rechthoekige driehoek waarbij je de overstaande en de aanliggende zijde van C weet, gebruik je TOA: tan C = overstaande / aanliggende, en dan &ang;C = tan<sup>-1</sup>(overstaande / aanliggende).</p></div>'},
{heading:'Zijden berekenen in een driehoek',html:'<div class=\'box\'>Weet je in een rechthoekige driehoek &eacute;&eacute;n scherpe hoek en &eacute;&eacute;n zijde, dan kun je een andere zijde berekenen met de sinus, cosinus of tangens.</div><div class=\'voorbeeld\'><p><b>Voorbeeld</b><br>Bereken zijde PQ als &ang;R = 48&deg; en de schuine zijde PR = 55 cm. Vanuit &ang;R is PQ de overstaande zijde en PR de schuine zijde: je gebruikt dus SOS (sinus). sin 48&deg; = PQ/55, dus PQ = 55 &times; sin 48&deg; = 40,9 cm.</p></div><div class=\'call ezel\'>Ezelsbruggetje: 3 = 6/2. Weet je 6 niet, dan doe je 6 : 3 om 2 te vinden of 2 &times; 3 om 6 te vinden.</div><div class=\'call\'>Bij een gelijkbenige driehoek deel je de driehoek in twee gelijke rechthoekige driehoeken via de symmetrieas, en gebruik je vervolgens goniometrie of de stelling van Pythagoras.</div>'},
{heading:'Co&ouml;rdinaten in de ruimte',html:'<div class=\'box\'>In een driedimensionaal assenstelsel geef je een punt aan met drie co&ouml;rdinaten: (x, y, z).</div><div class=\'voorbeeld\'><p><b>Voorbeeld</b><br>Op een hoogtekaart met een rooster staat punt A op een hoogte van 100 m. De coördinaten van A zijn dan (200, 600, 100): de eerste twee getallen zijn de plaats op het rooster (x en y), het derde getal is de hoogte (z).</p></div><div class=\'call\'>Bij een balk of kubus in een assenstelsel bepaal je de co&ouml;rdinaten van een hoekpunt door vanuit de oorsprong het aantal stappen in de x-, y- en z-richting te tellen.</div><div class=\'voorbeeld\'><p><b>Voorbeeld</b><br>Vanuit O naar punt C: 2 stappen in de x-richting, 1 stap in de y-richting, 3 stappen in de z-richting. De co&ouml;rdinaten van C zijn dan (2, 1, 3).</p></div>'},
{heading:'Berekeningen in de ruimte',html:'<div class=\'box\'>Met de <span class=\'term\'>verlengde stelling van Pythagoras</span> bereken je de lengte van een <span class=\'term\'>lichaamsdiagonaal</span> in een balk of kubus. Je gebruikt daarbij drie ribben.</div><div class=\'voorbeeld\'><p><b>Voorbeeld</b><br>Van balk ABCD EFGH is AB = 8 cm, BC = 5 cm en CG = 10 cm. Bereken de lengte van lichaamsdiagonaal BH.<br>rhz&sup2; = 8&sup2; + 5&sup2; = 64 + 25 = 89 (met de gewone stelling van Pythagoras in het grondvlak)<br>sz&sup2; = 89 + 10&sup2; = 89 + 100 = 189<br>BH = &radic;189 &asymp; 13,7 cm.</p></div><div class=\'call\'>Om een hoek in een ruimtefiguur te berekenen, zoek je eerst een rechthoekige driehoek in een zijvlak of diagonaalvlak van de figuur en gebruik je daarna goniometrie.</div>'}
],
terms:[
['perspectief','een tekenwijze waarbij dingen die verder weg zijn kleiner worden getekend, zodat de tekening op de werkelijkheid lijkt',0],
['verdwijnpunt','het punt op de horizon waar evenwijdige lijnen die van je af lopen elkaar in een perspectieftekening snijden',0],
['horizon','de horizontale lijn op ooghoogte in een perspectieftekening, waarop het verdwijnpunt ligt',0],
['gestrekte hoek','een hoek van 180 graden',1],
['parallellogram','een vierhoek met twee paar evenwijdige zijden, waarbij overstaande hoeken even groot zijn',1],
['SOS-CAS-TOA','ezelsbruggetje voor sinus (Overstaande/Schuine), cosinus (Aanliggende/Schuine) en tangens (Overstaande/Aanliggende)',2],
['sinus / cosinus / tangens','goniometrische verhoudingen waarmee je in een rechthoekige driehoek een hoek of een zijde kunt berekenen',2],
['drieletternotatie','het benoemen van een hoek met drie hoofdletters, waarbij de middelste letter het hoekpunt is (bijvoorbeeld &ang;ABC)',2],
['schuine zijde','de langste zijde van een rechthoekige driehoek, tegenover de rechte hoek',3],
['co&ouml;rdinaten in de ruimte','drie getallen (x, y, z) die de plaats van een punt in een driedimensionaal assenstelsel aangeven',4],
['oorsprong','het punt (0, 0, 0) in een assenstelsel, waar de assen elkaar snijden',4],
['lichaamsdiagonaal','een lijnstuk dat dwars door een ruimtefiguur loopt, van het ene hoekpunt naar het tegenoverliggende hoekpunt',5],
['verlengde stelling van Pythagoras','de stelling van Pythagoras toegepast met drie ribben achter elkaar, om een lichaamsdiagonaal te berekenen',5],
['diagonaalvlak','een plat vlak binnen een ruimtefiguur dat door een diagonaal van het grondvlak en de bijbehorende hoogte loopt',5],
['ribbe','een zijde (lijnstuk) van een ruimtefiguur, waar twee vlakken elkaar ontmoeten',4]
],
cards:[
['Waar snijden evenwijdige lijnen die van je af lopen elkaar in een perspectieftekening?','In het verdwijnpunt op de horizon.',0],
['Wat blijft verticaal in een perspectieftekening?','Verticale lijnen blijven verticaal.',0],
['Hoeveel graden zijn de hoeken van een driehoek samen?','180 graden.',1],
['Hoeveel graden zijn de hoeken van een vierhoek samen?','360 graden.',1],
['Wat geldt voor overstaande hoeken in een parallellogram?','Overstaande hoeken zijn even groot.',1],
['Waar staat de afkorting SOS voor?','Sinus = Overstaande zijde / Schuine zijde.',2],
['Waar staat de afkorting CAS voor?','Cosinus = Aanliggende zijde / Schuine zijde.',2],
['Waar staat de afkorting TOA voor?','Tangens = Overstaande zijde / Aanliggende zijde.',2],
['Welke rekenmachinefunctie gebruik je om een hoek te berekenen uit een sinusverhouding?','sin<sup>-1</sup> (de inverse sinus).',2],
['Bij drieletternotatie &ang;ABC: welke letter is het hoekpunt?','De middelste letter, in dit geval B.',2],
['Hoe bereken je een zijde als je een scherpe hoek en de schuine zijde weet, en je de overstaande zijde zoekt?','Met de sinus (SOS): overstaande zijde = schuine zijde &times; sin(hoek).',3],
['Uit hoeveel getallen bestaan co&ouml;rdinaten in de ruimte?','Uit drie getallen: (x, y, z).',4],
['Wat zijn de co&ouml;rdinaten van de oorsprong?','(0, 0, 0).',4],
['Wat bereken je met de verlengde stelling van Pythagoras?','De lengte van een lichaamsdiagonaal in een balk of kubus, met behulp van drie ribben.',5],
['Wat zoek je eerst om een hoek in een ruimtefiguur te berekenen?','Een rechthoekige driehoek in een zijvlak of diagonaalvlak van de figuur.',5]
],
quiz:[
['Waar liggen evenwijdige lijnen die van je af lopen in een perspectieftekening?',['Ze blijven evenwijdig op de tekening','Ze snijden elkaar in het verdwijnpunt op de horizon','Ze worden verticaal','Ze verdwijnen uit beeld'],1,'Bij perspectief snijden zulke lijnen elkaar in het verdwijnpunt op de horizon.'],
['Op welke hoogte ligt de horizon in een perspectieftekening?',['Op grondhoogte','Op ooghoogte','Op de hoogte van het hoogste object','Dat maakt niet uit'],1,'De horizon ligt op ooghoogte.'],
['Een driehoek heeft hoeken van 84&deg; en 60&deg;. Hoe groot is de derde hoek?',['36&deg;','96&deg;','180&deg;','144&deg;'],0,'180 - 84 - 60 = 36 graden.'],
['Een vierhoek heeft drie hoeken van 86&deg;, 85&deg; en 108&deg;. Hoe groot is de vierde hoek?',['81&deg;','91&deg;','279&deg;','360&deg;'],0,'360 - 86 - 85 - 108 = 81 graden.'],
['In een rechthoekige driehoek ken je de overstaande zijde en de schuine zijde van een hoek. Welke verhouding gebruik je om de hoek te berekenen?',['Sinus (SOS)','Cosinus (CAS)','Tangens (TOA)','Pythagoras'],0,'Overstaande en schuine zijde horen bij SOS: de sinus.'],
['In &#9651;PQR is &ang;R = 48&deg; en PR (schuine zijde) = 55 cm. Bereken zijde PQ (overstaande zijde van R).',['36,8 cm','40,9 cm','48,0 cm','55,0 cm'],1,'PQ = 55 &times; sin 48&deg; = 40,9 cm.'],
['Bij drieletternotatie &ang;D12 (of &ang;ADC): welke letter geeft het hoekpunt aan?',['De eerste letter','De middelste letter','De laatste letter','Dat maakt niet uit'],1,'Bij drieletternotatie is de middelste letter altijd het hoekpunt van de hoek.'],
['Wat is de vorm van de tekening als je een gelijkbenige driehoek in twee delen splitst via de symmetrieas?',['Twee gelijke rechthoekige driehoeken','Twee parallellogrammen','Een cirkel','Een parabool'],0,'De symmetrieas van een gelijkbenige driehoek splitst hem in twee gelijke rechthoekige driehoeken.'],
['Wat geven co&ouml;rdinaten in de ruimte (x, y, z) aan?',['De plaats van een punt in een driedimensionaal assenstelsel','Alleen de hoogte van een punt','De oppervlakte van een figuur','De hoek van een driehoek'],0,'In de ruimte geef je de plaats van een punt aan met drie co&ouml;rdinaten (x, y, z).'],
['Vanuit de oorsprong zet je 2 stappen in de x-richting, 1 stap in de y-richting en 3 stappen in de z-richting. Wat zijn de co&ouml;rdinaten van dat punt?',['(1, 2, 3)','(2, 1, 3)','(3, 2, 1)','(2, 3, 1)'],1,'De volgorde is (x, y, z), dus (2, 1, 3).'],
['Wat bereken je met de verlengde stelling van Pythagoras?',['De oppervlakte van een cirkel','De lengte van een lichaamsdiagonaal in een balk of kubus','Een percentage','De richtingsco&euml;ffici&euml;nt'],1,'De verlengde stelling van Pythagoras (met drie ribben) geeft de lichaamsdiagonaal.'],
['Een balk heeft AB = 8 cm, BC = 5 cm en CG = 10 cm. Wat is rhz&sup2; in het grondvlak (AB en BC)?',['13','89','40','169'],1,'rhz&sup2; = 8&sup2; + 5&sup2; = 64 + 25 = 89.'],
['Vervolg op de vorige vraag: hoe lang is de lichaamsdiagonaal (afgerond op &eacute;&eacute;n decimaal)?',['9,4 cm','13,7 cm','18,9 cm','23,0 cm'],1,'sz&sup2; = 89 + 10&sup2; = 189, dus lichaamsdiagonaal = &radic;189 &asymp; 13,7 cm.'],
['Wat zoek je eerst als je een hoek in een ruimtefiguur (zoals een balk) wilt berekenen?',['Een rechthoekige driehoek in een zijvlak of diagonaalvlak','De oppervlakte van het grondvlak','De omtrek van de figuur','Het volume van de figuur'],0,'Je zoekt eerst een rechthoekige driehoek in een zij- of diagonaalvlak en gebruikt daarna goniometrie.'],
['Wat geldt voor hoeken die samen een gestrekte hoek vormen?',['Ze zijn samen 90&deg;','Ze zijn samen 180&deg;','Ze zijn samen 360&deg;','Ze zijn altijd gelijk'],1,'Hoeken die samen een gestrekte hoek vormen, zijn samen 180 graden.']
]
});
