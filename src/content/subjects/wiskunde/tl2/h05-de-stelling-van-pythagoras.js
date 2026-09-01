import { registerChapter } from '../../../registry.js';

registerChapter('wiskunde|tl|2|5', {
title:'De stelling van Pythagoras',
summary:[
{heading:'5.1 Kwadraten en wortels',html:'<div class=\'box\'><h4>Waar gaat dit hoofdstuk over?</h4><p>In dit hoofdstuk leer je rekenen met kwadraten, wortels en machten. Daarna leer je de stelling van Pythagoras: een beroemde regel waarmee je in een rechthoekige driehoek een onbekende zijde kunt berekenen als je de andere twee zijden weet.</p></div><div class=\'call\'>Pythagoras heeft de stelling die zijn naam draagt niet zelf bedacht. Hij was wel de eerste die heeft bewezen dat de stelling altijd klopt, voor elke rechthoekige driehoek.</div><div class=\'box\'><h4>Kwadraat</h4><p>Het <b>kwadraat</b> van een getal bereken je door het getal met zichzelf te vermenigvuldigen. Het kwadraat van 5 is 5 × 5 = 25. Je schrijft dit als 5².</p></div><div class=\'box\'><h4>Wortel</h4><p>De <b>wortel</b> van een getal is de omgekeerde bewerking van het kwadrateren. De wortel van 25 is 5, want 5 × 5 = 25. Je schrijft dit als √25 = 5.</p></div><div class=\'voorbeeld\'><h4>Voorbeeld: rekenen met kwadraten en wortels</h4><p>Bereken 7,9² en √61.</p><ol class=\'num\'><li>7,9² = 7,9 × 7,9 = 62,41.</li><li>√61 = 7,81... (gebruik de wortelfunctie op je rekenmachine).</li></ol><div class=\'antwoord\'>Antwoord: 7,9² = 62,41 en √61 ≈ 7,81.</div></div><div class=\'call\'>Op je rekenmachine gebruik je de kwadraattoets voor het kwadrateren en de worteltoets voor het worteltrekken.</div>'},
{heading:'5.2 Machten',html:'<div class=\'box\'><h4>Wat is een macht?</h4><p>Bij een <b>macht</b> vermenigvuldig je een getal een aantal keer met zichzelf. In de macht 2⁶ is 2 het <b>grondtal</b> en 6 de <b>exponent</b>. 2⁶ betekent 2 × 2 × 2 × 2 × 2 × 2 en spreek je uit als \'twee tot de zesde macht\'.</p></div><div class=\'voorbeeld\'><h4>Voorbeeld: machtsverheffen</h4><p>Bereken 15,8⁵.</p><ol class=\'num\'><li>Gebruik de machttoets van je rekenmachine.</li><li>Tik 15.8 gevolgd door de machttoets en dan 5 in.</li></ol><div class=\'antwoord\'>Antwoord: 15,8⁵ = 984 658,0477.</div></div><div class=\'call\'>Het nemen van de macht van een getal heet ook wel <b>machtsverheffen</b>. Een kwadraat is eigenlijk een macht met exponent 2.</div>'},
{heading:'5.3 Zijden benoemen',html:'<div class=\'box\'><h4>Rechthoekszijden en schuine zijde</h4><p>In een rechthoekige driehoek heb je drie zijden met elk een eigen naam. De twee zijden die vastzitten aan de rechte hoek heten de <b>rechthoekszijden</b> (afgekort: rhz). De zijde tegenover de rechte hoek heet de <b>schuine zijde</b> (afgekort: sz). De schuine zijde is altijd de langste zijde van de driehoek.</p></div><div class=\'call sum\'><b>Om te onthouden</b><ul class=\'lst\'><li>De rechthoekszijden zitten vast aan de rechte hoek (90°).</li><li>De schuine zijde ligt tegenover de rechte hoek en is de langste zijde.</li></ul></div><div class=\'diagram-nodig\'>Een rechthoekige driehoek DEF met de rechte hoek bij F, waarbij DF en EF zijn aangegeven als rechthoekszijden en DE als schuine zijde.</div>'},
{heading:'5.4 De stelling van Pythagoras',html:'<div class=\'box\'><h4>De stelling</h4><p>Voor elke rechthoekige driehoek geldt: <b>ene rechthoekszijde² + andere rechthoekszijde² = schuine zijde²</b>. Dit noemen we de <b>stelling van Pythagoras</b>. Je gebruikt de stelling om in een rechthoekige driehoek een onbekende zijde te berekenen als je de andere twee zijden weet.</p></div><div class=\'box\'><h4>Werkschema van Pythagoras</h4><p>Bij het rekenen gebruik je het werkschema: rhz² = ..., rhz² = ..., samen opgeteld geeft sz² = ... Daarna trek je de wortel om de zijde zelf te vinden.</p></div><div class=\'voorbeeld\'><h4>Voorbeeld: schuine zijde berekenen</h4><p>Bereken de lengte van zijde AB in driehoek ABC. AC = 5 cm en BC = 4 cm zijn de rechthoekszijden. Rond af op één decimaal.</p><ol class=\'num\'><li>rhz² = 5² = 25.</li><li>rhz² = 4² = 16.</li><li>Samen: sz² = 25 + 16 = 41.</li><li>sz = √41 = 6,40...</li></ol><div class=\'antwoord\'>Antwoord: AB is 6,4 cm.</div></div><div class=\'call warn\'><b>Veelgemaakte fout:</b> je mag de stelling van Pythagoras alleen gebruiken in een rechthoekige driehoek.</div>'},
{heading:'5.5 De stelling van Pythagoras toepassen',html:'<div class=\'box\'><h4>Hulplijnen tekenen</h4><p>Soms moet je de stelling van Pythagoras gebruiken, maar is er geen rechthoekige driehoek getekend. Je tekent dan zelf één of meer hulplijnen om een rechthoekige driehoek te maken, bijvoorbeeld een hoogtelijn.</p></div><div class=\'box\'><h4>Diagonaal van een balk of kubus</h4><p>Ook de lengte van een diagonaal in een balk of kubus kun je berekenen met de stelling van Pythagoras. Vaak moet je dan twee keer de stelling toepassen: eerst voor de diagonaal van een zijvlak, daarna voor de diagonaal door de ruimtefiguur.</p></div><div class=\'voorbeeld\'><h4>Voorbeeld: ladder tegen een muur</h4><p>De bovenkant van een ladder is 4 m boven de grond. De onderkant staat 1 m van de muur. Bereken de lengte van de ladder. Rond af op twee decimalen.</p><ol class=\'num\'><li>rhz² = 4² = 16.</li><li>rhz² = 1² = 1.</li><li>sz² = 16 + 1 = 17.</li><li>sz = √17 = 4,12...</li></ol><div class=\'antwoord\'>Antwoord: de ladder is 4,12 m lang.</div></div>'}
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
