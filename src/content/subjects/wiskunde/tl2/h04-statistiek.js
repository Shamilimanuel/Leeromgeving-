import { registerChapter } from '../../../registry.js';

/* Rebuilt 2026-09-24 to the recipe of Economie TL4 H1 (change 6). Examples
   from the book: the swimming-pool ticket (4.1), class 2M's pie chart (4.3),
   Marco's dice (4.4), Michael's weighted grade and the median of an even
   row (4.5). Terms, cards and quiz unchanged. */
registerChapter('wiskunde|tl|2|4', {
title:'Statistiek',
summary:[
{heading:'4.1 Toename en afname in procenten',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>uitrekenen <b>hoeveel procent</b> een deel is van het geheel</li>
<li>de <b>procentuele toename</b> en <b>afname</b> berekenen</li></ul></div>`
+`<div class="box"><h4>Waar dit hoofdstuk over gaat</h4><p><b>Statistiek</b> gaat over <b>gegevens</b> verzamelen, ordenen en samenvatten. Je rekent met <b>procenten</b>, tekent en leest <b>diagrammen</b>, en bepaalt het <b>gemiddelde</b>, de <b>mediaan</b> en de <b>modus</b>.</p></div>`
+`<h5 class="sub">Hoeveel procent?</h5>`
+`<div class="box"><h4>Deel : geheel &times; 100%</h4><p>In een aquarium met <b>229</b> vissen zwemmen <b>53</b> goudvissen. 53 : 229 &times; 100% = 23,144&hellip;%, dus <b>23,1%</b> is een goudvis. Procenten rond je af op <b>één decimaal</b>.</p></div>`
+`<h5 class="sub">Toename en afname</h5>`
+`<div class="call reken"><b>Stappenplan: procentuele toename of afname</b><ol class="num">
<li>Bereken de toename of afname <b>in euro's</b>: nieuw &minus; oud.</li>
<li>Deel door de <b>oude prijs</b>.</li>
<li>Doe <b>&times; 100%</b> en rond af op één decimaal.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: een zwembadkaartje</h4><p>De prijs gaat van <b>&euro;4,30</b> naar <b>&euro;5,20</b>. Bereken de procentuele toename.</p><div class="antwoord">Toename: 5,20 &minus; 4,30 = <b>&euro;0,90</b>. 0,90 : 4,30 &times; 100% &asymp; <b>20,9%</b>.</div></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: een broek in de uitverkoop</h4><p>De prijs gaat van <b>&euro;79</b> naar <b>&euro;55</b>. Bereken de procentuele afname.</p><div class="antwoord">Afname: 79 &minus; 55 = <b>&euro;24</b>. 24 : 79 &times; 100% &asymp; <b>30,4%</b>.</div></div>`
+`<div class="call waarom">Waarom delen door de <b>oude</b> prijs? Je wilt weten hoeveel het is veranderd <b>ten opzichte van</b> hoe het was. De oude prijs is je <b>100%</b>.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Door welke prijs deel je bij een procentuele toename?</p><p class="check-a">Door de <b>oude</b> prijs (de beginprijs).</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (4.1)</b><ul class="lst">
<li>Percentage = <b>deel : geheel &times; 100%</b>.</li>
<li>Procentuele verandering = <b>verschil : oud &times; 100%</b>.</li>
<li>Rond procenten af op <b>één decimaal</b>.</li></ul></div>`},

{heading:'4.2 Beelddiagram en staafdiagram',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>een <b>beelddiagram</b> aflezen</li>
<li>een <b>staafdiagram</b> tekenen</li></ul></div>`
+`<h5 class="sub">Twee diagrammen</h5>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Beelddiagram</h4><p>Aantallen als <b>plaatjes</b>. Bij het diagram staat wat <b>één plaatje</b> betekent, bijvoorbeeld 1 filmrolletje = <b>100 bezoekers</b>.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Staafdiagram</h4><p>Aantallen als <b>staven</b>. De <b>hoogte</b> is het aantal; de staven staan <b>los</b> van elkaar.</p></div></div>`
+`<h5 class="sub">Een staafdiagram tekenen</h5>`
+`<div class="call reken"><b>Stappenplan: staafdiagram</b><ol class="num">
<li>Kijk wat het <b>grootste aantal</b> is en kies een handige <b>schaal</b> voor de verticale as.</li>
<li>Teken de staven even <b>breed</b> en <b>los</b> van elkaar.</li>
<li>Zet bij elke staaf <b>wat</b> hij voorstelt, en geef het diagram een <b>titel</b>.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: hobby's van tweedeklassers</h4><p>Gamen <b>14</b>, lezen <b>30</b>, sporten <b>33</b>.</p><div class="antwoord">Het grootste aantal is 33. Neem bijvoorbeeld <b>1 cm = 5 leerlingen</b>: de as loopt tot 35. Sporten wordt dan 33 : 5 = <b>6,6 cm</b> hoog.</div></div>`
+`<div class="call warn"><b>Niet verwarren:</b> bij een <b>staafdiagram</b> staan de staven <b>los</b>, bij een <b>histogram</b> staan ze <b>tegen elkaar</b> aan (4.4).</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Wat moet altijd bij een beelddiagram staan?</p><p class="check-a">Hoeveel <b>één plaatje</b> voorstelt.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (4.2)</b><ul class="lst">
<li><b>Beelddiagram</b>: plaatjes, met wat één plaatje betekent.</li>
<li><b>Staafdiagram</b>: staven los van elkaar.</li>
<li>Kies een <b>schaal</b> die past bij het grootste aantal.</li></ul></div>`},

{heading:'4.3 Lijndiagram en cirkeldiagram',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>een <b>lijndiagram</b> tekenen en aflezen</li>
<li>een <b>cirkeldiagram</b> tekenen met <b>percentages</b> en <b>hoeken</b></li></ul></div>`
+`<h5 class="sub">Lijndiagram</h5>`
+`<div class="box"><h4>Een verandering</h4><p>Een <b>lijndiagram</b> laat zien hoe iets <b>verandert</b>, bijvoorbeeld de <b>temperatuur</b> in een week. Op de horizontale as staat meestal de <b>tijd</b>. Met een <b>kreukellijn</b> laat je zien dat je een stuk van de as hebt <b>weggelaten</b>.</p></div>`
+`<h5 class="sub">Cirkeldiagram</h5>`
+`<div class="box"><h4>Een geheel in stukken</h4><p>Een <b>cirkeldiagram</b> laat zien hoe een <b>geheel</b> verdeeld is in <b>sectoren</b>. De hele cirkel is <b>100%</b> en ook <b>360&deg;</b>. Daarom is <b>1% = 3,6&deg;</b>.</p></div>`
+`<div class="call reken"><b>Stappenplan: cirkeldiagram tekenen</b><ol class="num">
<li>Bereken per groep het <b>percentage</b>.</li>
<li>Bereken de <b>hoek</b>: percentage &times; <b>3,6</b>.</li>
<li>Teken de hoeken met je <b>geodriehoek</b> en zet bij elke sector wat hij betekent.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: naar je zin op school?</h4><p>Klas 2M (<b>26</b> leerlingen): slecht 2, matig 3, goed 16, heel goed 5.</p><div class="antwoord">Matig: 3 : 26 &times; 100% &asymp; <b>11,5%</b>. Hoek: 11,5 &times; 3,6 &asymp; <b>41&deg;</b>. Zo reken je elke sector uit; samen zijn ze 100% en 360&deg;.</div></div>`
+`<div class="call waarom">Waarom <b>&times; 3,6</b>? 100% hoort bij 360&deg;, dus 1% hoort bij 360 : 100 = <b>3,6&deg;</b>.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Hoe bereken je de hoek bij een percentage in een cirkeldiagram?</p><p class="check-a"><b>percentage &times; 3,6</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (4.3)</b><ul class="lst">
<li><b>Lijndiagram</b>: een verandering in de tijd.</li>
<li><b>Cirkeldiagram</b>: een geheel in sectoren.</li>
<li><b>Hoek = percentage &times; 3,6</b>.</li></ul></div>`},

{heading:'4.4 Histogram en steelbladdiagram',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>een <b>frequentietabel</b> maken met <b>turven</b></li>
<li>een <b>histogram</b> en een <b>steelbladdiagram</b> maken</li></ul></div>`
+`<h5 class="sub">Frequentietabel</h5>`
+`<div class="call reken"><b>Stappenplan: frequentietabel</b><ol class="num">
<li>Zet in de eerste kolom alle <b>mogelijke waarden</b>, bijvoorbeeld 1 tot en met 6 ogen.</li>
<li><b>Turf</b> in de tweede kolom elke keer dat een waarde voorkomt.</li>
<li>Tel de turven: dat is de <b>frequentie</b>.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: Marco gooit een dobbelsteen</h4><p>Marco gooit <b>20 keer</b>.</p><div class="antwoord">Per aantal ogen (1 tot en met 6) turf je hoe vaak hij het gooide. Alle <b>frequenties</b> samen moeten weer <b>20</b> zijn: zo controleer je je tabel.</div></div>`
+`<h5 class="sub">Histogram en steelbladdiagram</h5>`
+`<div class="g2">`
+`<div class="box"><h4>Histogram</h4><p>Een diagram bij een frequentietabel waarbij de staven <b>tegen elkaar aan</b> staan.</p></div>`
+`<div class="box"><h4>Steelbladdiagram</h4><p>Je splitst elk getal in een <b>steel</b> (de tientallen) en een <b>blad</b> (de eenheden). Zo zie je snel hoe de getallen <b>verdeeld</b> zijn.</p></div></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Wat is de frequentie?</p><p class="check-a">Hoe <b>vaak</b> een waarde voorkomt.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (4.4)</b><ul class="lst">
<li><b>Frequentie</b> = hoe vaak iets voorkomt.</li>
<li><b>Histogram</b>: staven tegen elkaar aan. <b>Staafdiagram</b>: los.</li>
<li><b>Steelblad</b>: tientallen links, eenheden rechts.</li></ul></div>`},

{heading:'4.5 Gemiddelde, mediaan en modus',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>het <b>gemiddelde</b> en het <b>gewogen gemiddelde</b> berekenen</li>
<li>de <b>mediaan</b> en de <b>modus</b> bepalen</li></ul></div>`
+`<h5 class="sub">Gemiddelde</h5>`
+`<div class="box"><h4>Optellen en delen</h4><p>Het <b>gemiddelde</b>: tel alle getallen <b>op</b> en deel door het <b>aantal</b> getallen.</p></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: minimumtemperaturen</h4><p>2,9 / &minus;0,8 / &minus;1,3 / 1,6 / 2,4 / &minus;0,2 / 1,9 &deg;C.</p><div class="antwoord">Samen <b>6,5</b>. Er zijn <b>7</b> getallen: 6,5 : 7 &asymp; <b>0,9 &deg;C</b>.</div></div>`
+`<div class="box"><h4>Gewogen gemiddelde</h4><p>Tellen niet alle cijfers even zwaar, dan bereken je een <b>gewogen gemiddelde</b>. Hoe vaak een cijfer meetelt, heet het <b>gewicht</b>. Je deelt door de som van de <b>gewichten</b>.</p></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: het rapportcijfer van Michael</h4><p>6,4, 5,4 en 6,6 tellen <b>één keer</b>; 7,3 en 6,8 tellen <b>dubbel</b>.</p><div class="antwoord">6,4 + 5,4 + 6,6 + 2 &times; 7,3 + 2 &times; 6,8 = 46,6. Gewichten: 1 + 1 + 1 + 2 + 2 = <b>7</b>. 46,6 : 7 &asymp; <b>6,7</b>.</div></div>`
+`<div class="call warn"><b>Veelgemaakte fout:</b> bij een gewogen gemiddelde delen door het aantal <b>cijfers</b> (5). Je deelt door de som van de <b>gewichten</b> (7).</div>`
+`<h5 class="sub">Mediaan en modus</h5>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Mediaan</h4><p>Het <b>middelste</b> getal, als de getallen <b>op volgorde</b> staan. Bij een <b>even</b> aantal: het gemiddelde van de <b>twee middelste</b>.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Modus</h4><p>Het getal dat het <b>vaakst</b> voorkomt. Komt geen getal het vaakst voor, dan is er <b>geen modus</b>.</p></div></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: 9 6 8 7 4 8 6 5</h4><p>Bepaal de mediaan.</p><div class="antwoord">Op volgorde: 4 5 6 <b>6 7</b> 8 8 9. Het zijn er <b>8</b>, dus twee middelste: (6 + 7) : 2 = <b>6,5</b>.</div></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Wat moet je eerst doen voordat je de mediaan bepaalt?</p><p class="check-a">De getallen <b>op volgorde</b> zetten, van klein naar groot.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (4.5)</b><ul class="lst">
<li><b>Gemiddelde</b> = som : aantal. <b>Gewogen</b>: som : som van de gewichten.</li>
<li><b>Mediaan</b>: het middelste getal, eerst op volgorde.</li>
<li><b>Modus</b>: komt het vaakst voor.</li></ul></div>`}
],
terms:[
['Procentuele toename','Het percentage waarmee een waarde is toegenomen, berekend ten opzichte van de oude waarde.',0],
['Procentuele afname','Het percentage waarmee een waarde is afgenomen, berekend ten opzichte van de oude waarde.',0],
['Beelddiagram','Een diagram waarin aantallen worden weergegeven met plaatjes.',1],
['Staafdiagram','Een diagram met staven die los van elkaar staan; de hoogte laat het aantal zien.',1],
['Lijndiagram','Een diagram dat een verandering laat zien met een lijn, meestal over de tijd.',2],
['Cirkeldiagram','Een diagram dat een geheel verdeelt in stukken (sectoren) op basis van percentages.',2],
['Kreukellijn','Een teken in een as van een diagram dat aangeeft dat een stuk van de as is weggelaten.',2],
['Frequentie','Het aantal keer dat een waarde voorkomt in een groep gegevens.',3],
['Histogram','Een staafdiagram waarbij de staven tegen elkaar aan staan.',3],
['Gemiddelde','De som van alle getallen gedeeld door het aantal getallen.',4],
['Mediaan','De middelste waarde als je alle getallen op volgorde zet.',4],
['Modus','De waarde die het vaakst voorkomt in een groep gegevens.',4],
['Gewogen gemiddelde','Een gemiddelde waarbij niet alle waarden even zwaar meetellen.',4]
],
cards:[
['Hoe bereken je een procentuele afname?','Je berekent de afname in euro\'s en deelt die door de oude prijs, keer 100%.',0],
['Welke prijs gebruik je bij het berekenen van een procentuele toename of afname?','De oude (begin)prijs.',0],
['Wat is het verschil tussen een staafdiagram en een histogram?','Bij een staafdiagram staan de staven los van elkaar, bij een histogram staan ze tegen elkaar aan.',3],
['Waarvoor gebruik je een lijndiagram?','Om een verandering te laten zien, meestal over de tijd.',2],
['Hoeveel graden hoort bij 100% in een cirkeldiagram?','360°.',2],
['Hoe bereken je de hoek van een sector als je het percentage weet?','Je vermenigvuldigt het percentage met 3,6.',2],
['Wat betekent frequentie?','Hoe vaak een waarde voorkomt.',3],
['Hoe bereken je het gemiddelde van een rij getallen?','Tel alle getallen bij elkaar op en deel door het aantal getallen.',4],
['Wat is de mediaan?','De middelste waarde als je alle getallen op volgorde zet.',4],
['Wat is de modus?','De waarde die het vaakst voorkomt.',4],
['Wanneer gebruik je een gewogen gemiddelde?','Als niet alle waarden even zwaar meetellen.',4],
['Waarvoor gebruik je een kreukellijn?','Om aan te geven dat een stuk van een as is weggelaten.',2]
],
quiz:[
['Een prijs gaat van €50 naar €65. Bereken de toename in euro\'s.',['€15','€65','€50','€115'],0,'65 − 50 = €15.'],
['Een prijs gaat van €50 naar €65. Bereken de procentuele toename.',['15%','23,1%','30%','76,9%'],2,'15 / 50 × 100% = 30%.'],
['Bij welk soort diagram staan de staven los van elkaar?',['Histogram','Staafdiagram','Lijndiagram','Cirkeldiagram'],1,'Bij een staafdiagram staan de staven los van elkaar; bij een histogram staan ze tegen elkaar aan.'],
['Waarvoor gebruik je een cirkeldiagram?',['Om een verandering over de tijd te laten zien','Om een geheel te verdelen in stukken (percentages)','Om frequenties te turven','Om het gemiddelde te berekenen'],1,'Een cirkeldiagram laat zien hoe een geheel verdeeld is in stukken op basis van percentages.'],
['In een groep van 26 leerlingen kiezen er 5 voor fitness. Wat is het percentage? Rond af op één decimaal.',['5%','19,2%','26%','52%'],1,'5 / 26 × 100% = 19,2% (afgerond).'],
['Bij het percentage 19,2% uit de vorige vraag, wat is de bijbehorende hoek? Rond af op hele graden.',['19°','52°','69°','192°'],2,'19,2 × 3,6 = 69,12°, afgerond 69°.'],
['Wat geeft een kreukellijn in een lijndiagram aan?',['Dat er een fout is gemaakt','Dat een stuk van de as is weggelaten','Dat de grafiek daalt','Dat de eenheid verandert'],1,'Een kreukellijn geeft aan dat een stuk van de as is weggelaten.'],
['Bereken het gemiddelde van 5, 8, 9, −3, −6, 8, 12 en −15.',['2,25','9','18','26'],0,'Som = 5+8+9-3-6+8+12-15 = 18. 18 : 8 = 2,25.'],
['Van de getallen 4, 8, 5, 9, 6, 6 en 4 is de mediaan...',['4','5','6','9'],2,'Op volgorde: 4, 4, 5, 6, 6, 8, 9. De middelste (4e) waarde is 6.'],
['Van de getallen 4, 8, 5, 9, 6, 6 en 6 is de modus...',['4','5','6','9'],2,'6 komt drie keer voor, vaker dan de andere getallen. De modus is dus 6.'],
['Wat is een frequentietabel?',['Een tabel met percentages','Een tabel die laat zien hoe vaak elke waarde voorkomt','Een tabel met gemiddeldes','Een tabel met alleen hoge getallen'],1,'Een frequentietabel laat per waarde zien hoe vaak (de frequentie) die voorkomt.'],
['Sharon haalt voor Engels de cijfers 6,5 / 7 / 6,4. Wat is haar gemiddelde? Rond af op één decimaal.',['6,3','6,6','6,5','7,0'],1,'(6,5 + 7 + 6,4) : 3 = 19,9 : 3 = 6,6 (afgerond).'],
['Bij een gewogen gemiddelde telt een cijfer met gewicht 3 hoe vaak mee?',['1 keer','2 keer','3 keer','Helemaal niet'],2,'Het gewicht geeft aan hoe vaak een cijfer meetelt; gewicht 3 betekent 3 keer meetellen.'],
['Een horloge van €54,95 kost in de opruiming €34,95. Wat is de afname in euro\'s?',['€20','€34,95','€54,95','€89,90'],0,'54,95 − 34,95 = €20.'],
['Welk soort diagram gebruik je om te laten zien hoe vaak elk aantal ogen bij het gooien van een dobbelsteen voorkwam, met staven tegen elkaar aan?',['Cirkeldiagram','Lijndiagram','Histogram','Beelddiagram'],2,'Een histogram is een staafdiagram met de staven tegen elkaar aan, geschikt voor frequenties.'],
['In een steelbladdiagram staat de steel meestal voor...',['De eenheden','De tientallen','Het gemiddelde','De frequentie'],1,'De steel staat meestal voor de tientallen, het blad voor de eenheden.']
]
});
