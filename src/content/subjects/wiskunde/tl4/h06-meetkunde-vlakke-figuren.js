import { registerChapter } from '../../../registry.js';

registerChapter('wiskunde|tl|4|6', {
title:'Meetkunde vlakke figuren',
summary:[
{heading:'Oppervlakte en omtrek',html:'<div class=\'box\'>In dit hoofdstuk herhaal je alles over vlakke figuren: oppervlakte en omtrek, hoeken (kijkhoek en koershoek), goniometrie in vlakke figuren en gelijkvormigheid en vergroten.</div><div class=\'box\'>Op het examen krijg je de formules voor omtrek en oppervlakte van een cirkel: <b>omtrek cirkel = &pi; &times; diameter</b> en <b>oppervlakte cirkel = &pi; &times; straal&sup2;</b>.</div><div class=\'voorbeeld\'><p><b>Voorbeeld</b><br>Een ronde vijver heeft een diameter van 12 m. Straal = 6 m. Oppervlakte = &pi; &times; 6&sup2; = 113,1 m&sup2;. Omtrek = &pi; &times; 12 = 37,70 m.</p></div><div class=\'call\'>De oppervlakte van een <span class=\'term\'>samengestelde vlakke figuur</span> bereken je door de figuur te <b>verdelen</b> in bekende figuren (zoals een driehoek en een halve cirkel) en de oppervlaktes op te tellen, of door de figuur <b>in te lijsten</b> in een grotere bekende figuur en er stukken vanaf te trekken.</div><div class=\'call warn\'>Bij het verdelen van een samengestelde figuur rond je de tussenantwoorden niet af; je rondt pas de einduitkomst af.</div>'},
{heading:'Symmetrie',html:'<div class=\'box\'>Een figuur is <span class=\'term\'>lijnsymmetrisch</span> als je hem langs een symmetrieas in twee spiegelbeeldige helften kunt vouwen. Een figuur is <span class=\'term\'>draaisymmetrisch</span> als hij, gedraaid om zijn middelpunt over een bepaalde hoek, weer precies op zichzelf past.</div><div class=\'voorbeeld\'><p><b>Voorbeeld</b><br>Een ster met 10 punten die lijnsymmetrisch en draaisymmetrisch is: de kleinste draaihoek waarover de ster op zichzelf past, bereken je door 360&deg; te delen door het aantal punten (bij 10 punten: 360&deg; : 10 = 36&deg;).</p></div>'},
{heading:'Kijkhoek en koershoek',html:'<div class=\'box\'>De <span class=\'term\'>kijkhoek</span> is de hoek tussen twee kijklijnen vanuit &eacute;&eacute;n punt naar bijvoorbeeld twee zichtbare voorwerpen.</div><div class=\'voorbeeld\'><p><b>Voorbeeld</b><br>Vanuit een steeg kun je huizen zien tussen de twee hoeken van de steeg door: die hoek is de kijkhoek. Alles wat binnen die hoek ligt, kun je zien.</p></div><div class=\'call\'>De <span class=\'term\'>koershoek</span> geef je aan met een koershoekmeter: de telling begint in het noorden bij 0&deg; en loopt helemaal rond tot 360&deg;. Oost is 90&deg;, zuid is 180&deg;, west is 270&deg;.</div><div class=\'num\'><ol><li>Teken een lijn van je vertrekpunt naar je bestemming.</li><li>Leg de koershoekmeter met het midden op je vertrekpunt en de noordpijl naar het noorden.</li><li>Draai de rode lijn op de getekende lijn en lees de koershoek af.</li></ol></div>'},
{heading:'Goniometrie in vlakke figuren',html:'<div class=\'box\'>Ook in vlakke figuren gebruik je sinus, cosinus en tangens (SOS-CAS-TOA) om een zijde te berekenen als je een hoek en een andere zijde weet.</div><div class=\'voorbeeld\'><p><b>Voorbeeld</b><br>Bereken AB als &ang;B = 26&deg; en de aanliggende zijde BC = 35,5 cm, waarbij AB de schuine zijde is. Je gebruikt CAS: cos 26&deg; = 35,5/AB, dus AB = 35,5 : cos 26&deg; = 39,5 cm.</p></div><div class=\'call\'>Ezelsbruggetje: 3 = 6/2. Weet je 6 niet, dan doe je 6 : 3 om 2 te vinden, of 2 &times; 3 om 6 te vinden.</div>'},
{heading:'Gelijkvormigheid en vergroten',html:'<div class=\'box\'>Twee figuren zijn <span class=\'term\'>gelijkvormig</span> als de overeenkomstige hoeken even groot zijn. De <span class=\'term\'>vergrotingsfactor</span> bereken je met: <b>vergrotingsfactor = lengte beeld : lengte origineel</b>.</div><div class=\'voorbeeld\'><p><b>Voorbeeld</b><br>&#9651;PQR &#8767; &#9651;CAB. PQ = 15 cm en CA = 30 cm. Vergrotingsfactor = 30 : 15 = 2. Is PR = 25 cm, dan is CB = 25 &times; 2 = 50 cm.</p></div><div class=\'call\'>Voor <b>oppervlakte</b> geldt: <b>oppervlakte beeld = vergrotingsfactor&sup2; &times; oppervlakte origineel</b>, en omgekeerd <b>vergrotingsfactor = &radic;(oppervlakte vergroting : oppervlakte origineel)</b>.</div><div class=\'voorbeeld\'><p><b>Voorbeeld</b><br>Een foto van 10 &times; 15 cm wordt vergroot tot een muurschildering van 8,64 m&sup2; (= 86 400 cm&sup2;). De oppervlakte van het origineel is 150 cm&sup2;. Vergrotingsfactor = &radic;(86 400 : 150) = 24. De muurschildering is dan 24 &times; 15 = 360 cm bij 24 &times; 10 = 240 cm.</p></div>'}
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
