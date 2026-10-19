import { registerChapter } from '../../../registry.js';

/* Rebuilt 2026-09-25 to the recipe of Economie TL4 H1 (change 6). Fixed:
   4.2 broke off mid-sentence ("met klassen (zoals 160 -"). Added from the
   book: the ages of klas B3C (267 : 18 = 14,8), the klassenmidden
   (150 + 160) : 2, and the median from a bar chart (13th and 14th of 26).
   Terms, cards and quiz unchanged. */
registerChapter('wiskunde|tl|3|4', {
title:'Statistiek',
summary:[
{heading:'4.1 Informatie',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>het verschil tussen een <b>telling</b> en een <b>steekproef</b></li>
<li>wanneer een steekproef <b>representatief</b> is</li></ul></div>`
+`<div class="box"><h4>Waar dit hoofdstuk over gaat</h4><p>Je werkt met <b>onderzoek</b> en <b>gegevens</b>: telling en steekproef, het (gewogen) <b>gemiddelde</b>, <b>modus</b> en <b>mediaan</b>, <b>boxplots</b> en <b>samengestelde diagrammen</b>. Veel gegevens komen van het <b>CBS</b>, het Centraal Bureau voor de Statistiek.</p></div>`
+`<h5 class="sub">Gegevens verzamelen</h5>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Telling</h4><p>Je telt <b>iedereen</b>, bijvoorbeeld het aantal inwoners van een stad.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Steekproef</h4><p>Je vraagt een <b>deel</b> van de groep, en de uitkomst geldt voor <b>de hele groep</b>.</p></div></div>`
+`<div class="box"><h4>Representatief</h4><p>Een steekproef is <b>representatief</b> als alle groepen er in de <b>juiste verhouding</b> in zitten. Alleen dan mag je een <b>conclusie</b> trekken voor iedereen.</p></div>`
+`<div class="call warn"><b>Een vertekend beeld:</b> vraag je alleen <b>rokers</b> of ze tegen een rookverbod zijn, dan zegt de uitkomst niets over de hele bevolking.</div>`
+`<div class="call waarom">Waarom kritisch blijven? Soms wordt met opzet een steekproef gekozen die <b>niet</b> representatief is, omdat de opdrachtgever een <b>gunstige uitkomst</b> wil. Kijk altijd <b>hoe</b> een onderzoek is gedaan.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Wanneer is een steekproef representatief?</p><p class="check-a">Als alle groepen er in de <b>juiste verhouding</b> in zitten.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (4.1)</b><ul class="lst">
<li><b>Telling</b>: iedereen. <b>Steekproef</b>: een deel.</li>
<li><b>Representatief</b>: alle groepen in de juiste verhouding.</li>
<li>Geen representatieve steekproef = <b>vertekend</b> beeld.</li></ul></div>`},

{heading:'4.2 Gemiddelde',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>het <b>gemiddelde</b> en het <b>gewogen gemiddelde</b> berekenen</li>
<li>het gemiddelde uit een <b>frequentietabel</b>, ook <b>met klassen</b></li></ul></div>`
+`<h5 class="sub">Gewogen gemiddelde</h5>`
+`<div class="box"><h4>Punten : gewichten</h4><p><b>Gemiddelde</b> = alle getallen opgeteld <b>: aantal getallen</b>. Tellen cijfers niet even zwaar mee, dan tel je elk cijfer <b>keer zijn gewicht</b> op en deel je door het <b>totaal van de gewichten</b>.</p></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: Anja voor aardrijkskunde</h4><p>6,4 (2&times;), 7,6 (3&times;), 5,8 (1&times;), 4,7 (1&times;). Rond af op één decimaal.</p><div class="antwoord">Punten: 12,8 + 22,8 + 5,8 + 4,7 = <b>46,1</b>. Gewichten: 2 + 3 + 1 + 1 = <b>7</b>. 46,1 : 7 = 6,585&hellip;, dus <b>6,6</b>.</div></div>`
+`<h5 class="sub">Uit een frequentietabel</h5>`
+`<div class="call reken"><b>Stappenplan: gemiddelde uit een frequentietabel</b><ol class="num">
<li>Vermenigvuldig elke waarde met zijn <b>frequentie</b> en tel op.</li>
<li>Tel alle <b>frequenties</b> op.</li>
<li>Deel en rond af: zijn de gegevens <b>hele getallen</b>, dan op <b>één decimaal</b>.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: leeftijden in klas B3C</h4><p>14 jaar: <b>8</b> leerlingen, 15: <b>6</b>, 16: <b>3</b>, 17: <b>1</b>.</p><div class="antwoord">14 &times; 8 + 15 &times; 6 + 16 &times; 3 + 17 &times; 1 = <b>267</b>. Leerlingen: 8 + 6 + 3 + 1 = <b>18</b>. 267 : 18 = 14,83&hellip;, dus <b>14,8 jaar</b>.</div></div>`
+`<div class="box"><h4>Met klassen</h4><p>Staan de waarden in <b>klassen</b> (zoals 150&ndash;160 cm), dan weet je de precieze getallen niet. Je rekent dan met het <b>klassenmidden</b>: (ondergrens + bovengrens) : 2, hier (150 + 160) : 2 = <b>155</b>. De uitkomst is een <b>schatting</b>.</p></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Hoe bereken je een klassenmidden?</p><p class="check-a"><b>(ondergrens + bovengrens) : 2</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (4.2)</b><ul class="lst">
<li><b>Gewogen</b>: punten : totaal van de gewichten.</li>
<li>Frequentietabel: waarde &times; frequentie, dan <b>: totaal</b>.</li>
<li><b>Klassenmidden</b> = (onder + boven) : 2.</li></ul></div>`},

{heading:'4.3 Modus en mediaan',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>de <b>modus</b> en de <b>mediaan</b> bepalen, ook uit een <b>staafdiagram</b> of <b>tabel</b></li></ul></div>`
+`<h5 class="sub">Centrummaten</h5>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Modus</h4><p>Het getal dat het <b>vaakst</b> voorkomt. In een tabel of staafdiagram: de <b>hoogste frequentie</b>.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Mediaan</h4><p>Het <b>middelste</b> getal, als alles <b>op volgorde</b> staat.</p></div></div>`
+`<div class="box"><h4>Centrummaten</h4><p>Het <b>gemiddelde</b>, de <b>modus</b> en de <b>mediaan</b> samen heten <b>centrummaten</b>.</p></div>`
+`<div class="call reken"><b>Stappenplan: de mediaan</b><ol class="num">
<li>Zet de getallen <b>op volgorde</b>, van klein naar groot.</li>
<li><b>Oneven</b> aantal: de mediaan is het <b>((aantal + 1) : 2)e</b> getal.</li>
<li><b>Even</b> aantal: het <b>gemiddelde</b> van de twee middelste.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: 9 6 4 1 8 2 7 3 7</h4><p>Bepaal mediaan en modus.</p><div class="antwoord">Op volgorde: 1 2 3 4 <b>6</b> 7 7 8 9. Negen getallen: het (9 + 1) : 2 = <b>5e</b> getal, dus mediaan <b>6</b>. De <b>7</b> komt twee keer voor: de modus.</div></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: uit een staafdiagram</h4><p>26 leerlingen maakten een toets. Wat is de mediaan van het aantal fouten?</p><div class="antwoord">Maak eerst een <b>frequentietabel</b>. Bij 26 (even) zijn de middelste de <b>13e</b> en <b>14e</b> leerling. Tel met de frequenties op tot je bij hen bent; de mediaan is het <b>gemiddelde</b> van hun aantal fouten.</div></div>`
+`<div class="call warn"><b>Veelgemaakte fout:</b> het middelste getal nemen <b>zonder</b> eerst op volgorde te zetten.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Een rij heeft 15 getallen. Het hoeveelste getal is de mediaan?</p><p class="check-a">(15 + 1) : 2 = het <b>8e</b> getal.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (4.3)</b><ul class="lst">
<li><b>Modus</b>: komt het vaakst voor.</li>
<li><b>Mediaan</b>: eerst op volgorde, dan het middelste.</li>
<li>Even aantal: gemiddelde van de <b>twee middelste</b>.</li></ul></div>`},

{heading:'4.4 Diagrammen lezen',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>een <b>boxplot</b> lezen</li>
<li>informatie halen uit andere <b>diagrammen</b></li></ul></div>`
+`<h5 class="sub">Boxplot</h5>`
+`<div class="box"><h4>Vier stukken van 25%</h4><p>Een <b>boxplot</b> verdeelt een groep in <b>vier stukken van elk 25%</b>. Je ziet het <b>minimum</b> (laagste), het <b>maximum</b> (hoogste) en de <b>mediaan</b> (de streep in de box). Een <b>kwart</b> zit vóór de box, de <b>helft</b> in de box en een <b>kwart</b> erna.</p></div>`
+`<div class="call reken"><b>Stappenplan: hoeveel zitten boven een grens?</b><ol class="num">
<li>Kijk bij welke streep van de boxplot de grens ligt.</li>
<li>Tel hoeveel stukken van <b>25%</b> erboven liggen.</li>
<li>Reken dat percentage uit van de <b>hele groep</b>.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: zakgeld van 120 leerlingen</h4><p>Het eerste kwart eindigt bij <b>&euro;14</b>. Hoeveel leerlingen krijgen meer?</p><div class="antwoord">Drie van de vier stukken liggen erboven: <b>75%</b>. 0,75 &times; 120 = <b>90 leerlingen</b>.</div></div>`
+`<div class="call waarom">Waarom is de ene helft van de box soms <b>breder</b>? In elk stuk zit evenveel mensen (25%). Een <b>breed</b> stuk betekent dat die mensen <b>ver uit elkaar</b> liggen; een smal stuk dat ze dicht bij elkaar zitten.</div>`
+`<div class="call warn"><b>Andere diagrammen:</b> lees altijd eerst de <b>titel</b>, de <b>assen</b> en de <b>legenda</b>.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Welk deel van de groep zit in de box van een boxplot?</p><p class="check-a">De <b>helft</b> (50%).</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (4.4)</b><ul class="lst">
<li>Boxplot: <b>vier stukken van 25%</b>.</li>
<li>Je ziet <b>minimum</b>, <b>mediaan</b> en <b>maximum</b>.</li>
<li>In de box zit de <b>helft</b> van de groep.</li></ul></div>`},

{heading:'4.5 Samengestelde diagrammen',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>een <b>gestapeld staafdiagram</b> lezen met de <b>legenda</b></li></ul></div>`
+`<h5 class="sub">Gestapeld</h5>`
+`<div class="box"><h4>Meer gegevens in één staaf</h4><p>In een <b>gestapeld staafdiagram</b> staan in één staaf <b>meerdere gegevens</b> boven (of naast) elkaar. De <b>legenda</b> vertelt welke <b>kleur</b> bij welk gegeven hoort.</p></div>`
+`<div class="call reken"><b>Stappenplan: één stuk van een gestapelde staaf</b><ol class="num">
<li>Zoek in de <b>legenda</b> de kleur op.</li>
<li>Lees de <b>bovengrens</b> van dat stuk af.</li>
<li>Lees de <b>ondergrens</b> af.</li>
<li>Het stuk is <b>bovengrens &minus; ondergrens</b>.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: zakgeld van een 18-jarige</h4><p>Mobiel loopt tot <b>&euro;12,50</b>, sparen tot <b>&euro;17,50</b>, overig tot <b>&euro;45</b>.</p><div class="antwoord">Sparen: 17,50 &minus; 12,50 = <b>&euro;5</b> per maand.</div></div>`
+`<div class="call warn"><b>Veelgemaakte fout:</b> de <b>bovengrens</b> aflezen als antwoord (&euro;17,50). Het stuk begint niet bij 0, dus trek de <b>ondergrens</b> eraf.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Wat lees je eerst bij een gestapeld staafdiagram?</p><p class="check-a">De <b>legenda</b>: welke kleur bij welk gegeven hoort.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (4.5)</b><ul class="lst">
<li>Eerst de <b>legenda</b>.</li>
<li>Een stuk = <b>bovengrens &minus; ondergrens</b>.</li>
<li>Bij <b>horizontale</b> staven werkt het net zo.</li></ul></div>`}
],
terms:[
['Telling','Het precies natellen van alle gegevens, bijvoorbeeld alle inwoners van een stad.',0],
['Steekproef','Onderzoek onder een deel van een groep, waarvan de uitkomst voor de hele groep geldt.',0],
['Representatief','Een steekproef waarbij alle groepen in de juiste verhouding aanwezig zijn.',0],
['Gemiddelde','Het totaal van alle waarden gedeeld door het aantal waarden.',1],
['Gewogen gemiddelde','Een gemiddelde waarbij niet alle waarden even zwaar meetellen; je deelt het totaal aantal punten door het totaal van de gewichten.',1],
['Klassenmidden','Het gemiddelde van de onder- en bovengrens van een klasse, gebruikt om het gemiddelde uit een klassenindeling te berekenen.',1],
['Modus','Het getal dat het meest voorkomt in een rij getallen.',2],
['Mediaan','Het middelste getal als alle getallen op volgorde van klein naar groot staan.',2],
['Centrummaten','Het gemiddelde, de modus en de mediaan samen.',2],
['Boxplot','Diagram waarbij een groep wordt opgedeeld in vier stukken van elk 25%, met het minimum, de mediaan en het maximum.',3],
['Minimum','Het laagste getal in een verzameling gegevens.',3],
['Maximum','Het hoogste getal in een verzameling gegevens.',3],
['Gestapeld staafdiagram','Een staafdiagram waarbij meerdere gegevens boven of naast elkaar in één staaf gestapeld zijn.',4],
['Legenda','De verklaring bij een diagram die vertelt welke kleur of symbool bij welk gegeven hoort.',4]
],
cards:[
['Wat is het verschil tussen een telling en een steekproef?','Bij een telling tel je alle gegevens, bij een steekproef onderzoek je een representatieve deelgroep.',0],
['Wanneer is een steekproef representatief?','Als alle groepen in de juiste verhouding aanwezig zijn.',0],
['Hoe bereken je het gemiddelde?','Alle getallen optellen en delen door het aantal getallen.',1],
['Hoe bereken je een gewogen gemiddelde?','Totaal aantal punten (waarde × gewicht) delen door het totaal van de gewichten.',1],
['Hoe bereken je een klassenmidden?','(ondergrens + bovengrens) : 2.',1],
['Wat is de modus?','Het getal dat het meest voorkomt.',2],
['Wat is de mediaan?','Het middelste getal als alle getallen op volgorde staan.',2],
['Hoe bereken je de mediaan bij een even aantal getallen?','Het gemiddelde van de twee middelste getallen.',2],
['In hoeveel gelijke stukken verdeelt een boxplot een groep?','Vier stukken van elk 25%.',3],
['Wat laat een boxplot in elk geval zien?','Het minimum, de mediaan en het maximum.',3],
['Wat is een gestapeld staafdiagram?','Een staafdiagram waarbij meerdere gegevens in één staaf boven of naast elkaar staan.',4],
['Wat vertelt de legenda van een diagram?','Welke kleur of welk symbool bij welk gegeven hoort.',4]
],
quiz:[
['Je wilt weten hoeveel leerlingen op een school een brommer hebben. Wat gebruik je hiervoor het beste?',['Een telling van de hele school','Een representatieve steekproef','Alleen de brugklassen vragen','Gokken'],1,'Voor de mening of situatie van een grote groep gebruik je meestal een representatieve steekproef.'],
['Wanneer is een steekproef representatief?',['Als hij groot genoeg is','Als alle groepen in de juiste verhouding aanwezig zijn','Als hij willekeurig gehouden is op straat','Als de opdrachtgever het resultaat goedkeurt'],1,'Een steekproef is representatief als alle groepen in de juiste verhouding vertegenwoordigd zijn.'],
['Marieke haalt 7,2 en 5,4 voor geschiedenis, allebei even zwaar. Wat is haar gemiddelde?',['6,0','6,3','6,6','12,6'],1,'(7,2 + 5,4) : 2 = 6,3.'],
['Coen haalt 7,2 (1×) en 5,4 (2×). Wat is zijn gemiddelde?',['6,0','6,3','6,6','18'],0,'(1×7,2 + 2×5,4) : (1+2) = 18 : 3 = 6,0.'],
['Wat is het klassenmidden van de klasse 160 − < 170?',['160','165','170','330'],1,'Klassenmidden = (160 + 170) : 2 = 165.'],
['Bekijk de rij 1 3 6 7 8 12 15 19 19 21 22. Wat is de modus?',['8','12','19','22'],2,'19 komt twee keer voor, vaker dan alle andere getallen.'],
['Bekijk de rij (op volgorde) 4 4 5 6 6 7 8 9 10. Hoeveel getallen zijn het, en wat is de mediaan?',['9 getallen, mediaan is het 5e getal: 6','9 getallen, mediaan is het gemiddelde van 6 en 6','8 getallen, mediaan is 6,5','10 getallen, mediaan is 7'],0,'Er zijn 9 getallen (oneven), dus de mediaan is het (9+1):2 = 5e getal: 6.'],
['Een rij heeft 16 getallen op volgorde. Welke twee getallen gebruik je voor de mediaan?',['Het 7e en 8e getal','Het 8e en 9e getal','Het 16e getal','Het 1e en 16e getal'],1,'Bij 16 getallen (even) zijn het 8e en 9e getal de middelste twee.'],
['Wat laat een boxplot in vier gelijke stukken zien?',['Vier keer 10%','Vier keer 25%','Vier keer 20%','Vier keer de mediaan'],1,'Een boxplot verdeelt de groep in vier stukken van elk 25%.'],
['In een boxplot van 200 leerlingen zit 25% van de leerlingen vóór de eerste grens. Hoeveel leerlingen zijn dat?',['25','50','100','150'],1,'25% van 200 = 0,25 × 200 = 50.'],
['Wat toont een boxplot in ieder geval?',['Alleen het gemiddelde','Minimum, mediaan en maximum','Alleen de modus','Het aantal metingen'],1,'Een boxplot toont het minimum, de mediaan en het maximum (en de kwartgrenzen).'],
['Wat is een gestapeld staafdiagram?',['Een staafdiagram met maar één kleur','Een staafdiagram waarin meerdere gegevens in één staaf gestapeld staan','Een cirkeldiagram','Een boxplot'],1,'Bij een gestapeld staafdiagram staan meerdere gegevens boven of naast elkaar binnen één staaf.'],
['Wat moet je eerst bekijken bij het lezen van een gestapeld staafdiagram?',['De titel van de y-as','De legenda','Het aantal staven','De kleur van de achtergrond'],1,'De legenda vertelt welke kleur bij welk gegeven hoort, dat heb je nodig om het diagram goed te lezen.'],
['In een gestapeld staafdiagram besteedt een 18-jarige €17,50 aan mobiel + sparen samen, waarvan €12,50 aan mobiel. Hoeveel is dat aan sparen?',['€5','€12,50','€17,50','€30'],0,'17,50 − 12,50 = €5 aan sparen.'],
['Waarom is het belangrijk dat een steekproef representatief is?',['Zodat de uitkomst ook geldt voor de hele groep','Zodat het onderzoek sneller gaat','Zodat je minder mensen hoeft te vragen','Dat is niet belangrijk'],0,'Alleen bij een representatieve steekproef mag je de uitkomst gebruiken als conclusie voor de hele groep.']
]
});
