import { registerChapter } from '../../../registry.js';

/* Rebuilt 2026-09-24 to the recipe of Economie TL4 H1 (change 6), from the
   book scan (Getal & Ruimte TL4 deel A). Also corrects "wegendiagram": in the
   book it counts possibilities; arrows between teams are drawn in a graaf. */
registerChapter('wiskunde|tl|4|1', {
title:'Statistiek en kans',
summary:[
{heading:'1.1 Kans',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>een <b>kans</b> uitdrukken als <b>breuk</b> en als <b>percentage</b></li>
<li>de <b>verwachting</b> berekenen bij een groot aantal pogingen</li></ul></div>`
+`<div class="box"><h4>Waar dit hoofdstuk over gaat</h4><p>Je werkt met <b>kansen</b> en met manieren om gegevens overzichtelijk te maken: <b>diagrammen</b>, een <b>steelbladdiagram</b>, een <b>boxplot</b>, <b>grafen</b> en <b>telproblemen</b>.</p></div>`
+`<h5 class="sub">Wat is een kans?</h5>`
+`<div class="g2">`
+`<div class="box"><h4>Kans in het dagelijks leven</h4><p>Je weet niet zeker wat er gebeurt, maar sommige dingen hebben een <b>grotere kans</b> dan andere. Is de kans op regen <b>90%</b>? Dan neem je een paraplu mee.</p></div>`
+`<div class="box"><h4>Kans berekenen</h4><p>Bij één dobbelsteen zijn er <b>6 mogelijkheden</b>. De kans op een 6 is dus <b>1 op 6</b>.</p><p><b>kans = aantal gunstige uitkomsten / totaal aantal mogelijke uitkomsten</b></p></div></div>`
+`<div class="call warn">Een kans kun je schrijven als <b>breuk</b> (1/6), als <b>kommagetal</b> (0,17) of als <b>percentage</b> (16,7%). Procenten rond je af op <b>één decimaal</b>.</div>`
+`<h5 class="sub">Twee dobbelstenen</h5>`
+`<div class="voorbeeld"><h4>Voorbeeld: de som van twee dobbelstenen</h4><p>Maak een <b>schema</b> met alle combinaties: 6 &times; 6 = <b>36</b> mogelijkheden. Tel dan hoe vaak de som voorkomt die je zoekt.</p><div class="antwoord">Een som van 8 kan op <b>5</b> manieren (2+6, 3+5, 4+4, 5+3, 6+2). De kans op 8 is <b>5/36 = 13,9%</b>.</div></div>`
+`<h5 class="sub">Verwachting</h5>`
+`<div class="call waarom">Hoe vaak verwacht je een uitkomst als je het <b>heel vaak</b> probeert? Vermenigvuldig de <b>kans</b> met het <b>aantal pogingen</b>. Gooi je 120 keer met één dobbelsteen, dan verwacht je 1/6 &times; 120 = <b>20</b> keer een 6. Het is een verwachting: in het echt kan het een paar keer meer of minder zijn.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Je gooit met één dobbelsteen. Hoe groot is de kans op een 6?</p><p class="check-a">Eén gunstige uitkomst op zes mogelijke: <b>1/6</b>, dat is ongeveer <b>16,7%</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (1.1)</b><ul class="lst">
<li><b>Kans</b> = aantal gunstige uitkomsten / totaal aantal mogelijke uitkomsten.</li>
<li>Een kans schrijf je als <b>breuk</b>, <b>kommagetal</b> of <b>percentage</b>.</li>
<li>Bij twee dobbelstenen zijn er <b>36</b> mogelijkheden.</li>
<li><b>Verwachting</b> = kans &times; aantal pogingen.</li></ul></div>`},

{heading:'1.2 Staafdiagram, lijndiagram en cirkeldiagram',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>een <b>staafdiagram</b> en een <b>lijndiagram</b> tekenen</li>
<li>een <b>cirkeldiagram</b> tekenen met <b>percentages</b> en <b>sectorhoeken</b></li></ul></div>`
+`<h5 class="sub">Staafdiagram en lijndiagram</h5>`
+`<div class="g2">`
+`<div class="box"><h4>Staafdiagram</h4><p>Bij een <b>staafdiagram</b> teken je de staven <b>los van elkaar</b>. Boven elke staaf zet je het <b>aantal</b>. Soms maak je eerst zelf een <b>verdeling</b> op de verticale as.</p></div>`
+`<div class="box"><h4>Lijndiagram</h4><p>Bij een <b>lijndiagram</b> verbind je de punten met <b>rechte lijnstukken</b>. Zo zie je hoe iets <b>verandert in de tijd</b>, zoals de temperatuur per dag.</p></div></div>`
+`<div class="term"><b>Kreukellijn</b><span>Een zigzaglijntje op de verticale as. Het laat zien dat je een stuk van de as <b>weglaat</b>, bijvoorbeeld als alle temperaturen boven de 15 graden liggen.</span></div>`
+`<h5 class="sub">Cirkeldiagram</h5>`
+`<div class="box"><h4>Taartpunten</h4><p>Bij een <b>cirkeldiagram</b> is de cirkel verdeeld in taartpunten. Zo'n taartpunt heet een <b>sector</b>. Hoe groter het <b>percentage</b>, hoe groter de sector.</p></div>`
+`<div class="call reken"><b>Stappenplan: cirkeldiagram tekenen</b><ol class="num">
<li>Bereken het <b>totaal</b> en zet het in de tabel.</li>
<li>Bereken per groep het <b>percentage</b>: aantal / totaal &times; 100%. Rond af op <b>één decimaal</b>.</li>
<li>Bereken de <b>sectorhoek</b>: percentage &times; <b>3,6</b>. Rond af op <b>hele graden</b>.</li>
<li>Teken de sectoren, schrijf de percentages erbij, maak een <b>legenda</b> en zet de <b>titel</b> en het totaal erboven.</li></ol></div>`
+`<div class="call waarom">Waarom <b>&times; 3,6</b>? De hele cirkel is <b>360&deg;</b> en dat hoort bij <b>100%</b>. Eén procent is dus 360 / 100 = <b>3,6&deg;</b>.</div>`
+`<div class="call warn">Tel je de afgeronde percentages op, dan krijg je soms <b>99,9%</b> of <b>100,1%</b>. Dat komt door het <b>afronden</b> en is geen fout.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Bij een groep hoort 25%. Hoe groot is de sectorhoek?</p><p class="check-a">25 &times; 3,6 = <b>90&deg;</b>, een kwart van de cirkel.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (1.2)</b><ul class="lst">
<li><b>Staafdiagram</b>: losse staven met het aantal erboven.</li>
<li><b>Lijndiagram</b>: punten verbonden met rechte lijnstukken; een <b>kreukellijn</b> laat een stuk van de as weg.</li>
<li><b>Cirkeldiagram</b>: sectorhoek = percentage &times; <b>3,6</b>.</li></ul></div>`},

{heading:'1.3 Steelbladdiagram',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>een <b>steelbladdiagram</b> maken en aflezen</li></ul></div>`
+`<h5 class="sub">Steel en blad</h5>`
+`<div class="g2">`
+`<div class="box"><h4>Wat is het?</h4><p>Met een <b>steelbladdiagram</b> zet je een lange rij getallen <b>overzichtelijk</b> neer. Elk getal splits je in een <b>steel</b> (de <b>tientallen</b>) en een <b>blad</b> (de <b>eenheden</b>).</p></div>`
+`<div class="box"><h4>Voorbeeld</h4><p>Bij de leeftijd <b>25</b> komt achter steel <b>2</b> het blad <b>5</b>. Bij <b>53</b> komt achter steel <b>5</b> het blad <b>3</b>.</p></div></div>`
+`<div class="call reken"><b>Stappenplan: steelbladdiagram maken</b><ol class="num">
<li>Maak twee kolommen: <b>tientallen</b> en <b>eenheden</b>. Zet de tientallen van klein naar groot onder elkaar.</li>
<li>Zet elk <b>blad</b> achter zijn steel, in de volgorde van de gegevens. Dit is je <b>kladversie</b>.</li>
<li>Maak het <b>in het net</b>: zet de bladen achter elke steel van <b>klein naar groot</b>.</li>
<li>Zet er een <b>titel</b> boven.</li></ol></div>`
+`<div class="call waarom">Waarom een steelbladdiagram? Je ziet de <b>precieze getallen</b>, net als in een tabel, en tegelijk de <b>spreiding</b>, net als in een staafdiagram.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Bij steel 1 staat het blad 7. Welk getal is dat?</p><p class="check-a">Steel 1 is het tiental, blad 7 de eenheid: <b>17</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (1.3)</b><ul class="lst">
<li><b>Steel</b> = tientallen, <b>blad</b> = eenheden.</li>
<li>Eerst een <b>kladversie</b>, daarna <b>in het net</b> met de bladen van klein naar groot.</li>
<li>Je ziet de <b>precieze waarden</b> én de <b>spreiding</b>.</li></ul></div>`},

{heading:'1.4 Boxplot',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>de <b>mediaan</b> en de <b>kwartielen</b> bepalen</li>
<li>een <b>boxplot</b> maken en aflezen</li></ul></div>`
+`<h5 class="sub">Vijf getallen</h5>`
+`<div class="box"><h4>Wat is een boxplot?</h4><p>Bij een <b>boxplot</b> deel je een groep getallen in <b>vier stukken van 25%</b>. Je hebt vijf getallen nodig: het <b>minimum</b>, <b>Q1</b>, de <b>mediaan</b>, <b>Q3</b> en het <b>maximum</b>.</p></div>`
+`<div class="tblwrap"><table class="tbl"><tr><th>getal</th><th>betekenis</th></tr><tr><td><b>minimum</b></td><td>de kleinste waarde</td></tr><tr><td><b>Q1</b> (eerste kwartiel)</td><td>de mediaan van de eerste helft: 25% zit eronder</td></tr><tr><td><b>mediaan</b></td><td>het middelste getal: 50% zit eronder</td></tr><tr><td><b>Q3</b> (derde kwartiel)</td><td>de mediaan van de tweede helft: 75% zit eronder</td></tr><tr><td><b>maximum</b></td><td>de grootste waarde</td></tr></table></div>`
+`<h5 class="sub">Een boxplot maken</h5>`
+`<div class="call reken"><b>Stappenplan: boxplot maken</b><ol class="num">
<li>Zet de getallen van <b>klein naar groot</b>. Nu weet je het <b>minimum</b> en het <b>maximum</b>.</li>
<li>Bepaal de <b>mediaan</b>.</li>
<li>Splits de getallen in <b>twee helften</b> en bepaal van elke helft de mediaan: dat zijn <b>Q1</b> en <b>Q3</b>.</li>
<li>Teken een <b>getallenlijn</b>, zet streepjes bij de vijf getallen en teken de <b>box</b> van Q1 tot Q3. Zet er een <b>titel</b> boven.</li></ol></div>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Oneven aantal getallen</h4><p>De mediaan is het <b>middelste getal</b>.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Even aantal getallen</h4><p>De mediaan is het <b>gemiddelde van de middelste twee</b> getallen.</p></div></div>`
+`<div class="call waarom">De <b>box</b> bevat de <b>middelste 50%</b> van de getallen. Hoe <b>breder</b> de box en de snorharen, hoe groter de <b>spreiding</b>. Zo vergelijk je snel twee groepen.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Wat is de mediaan van 3, 7, 9, 12, 20?</p><p class="check-a">Vijf getallen, dus het middelste getal: <b>9</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (1.4)</b><ul class="lst">
<li>Een <b>boxplot</b> gebruikt vijf getallen: <b>minimum, Q1, mediaan, Q3, maximum</b>.</li>
<li><b>Q1</b> en <b>Q3</b> zijn de medianen van de eerste en de tweede helft.</li>
<li>De <b>box</b> is de middelste 50%.</li></ul></div>`},

{heading:'1.5 Grafen',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>een <b>graaf</b> lezen en er een <b>afstandstabel</b> bij invullen</li>
<li>weten wat een <b>pijl</b> in een graaf betekent</li></ul></div>`
+`<h5 class="sub">Punten en verbindingen</h5>`
+`<div class="g2">`
+`<div class="box"><h4>Wat is een graaf?</h4><p>Een <b>graaf</b> is een schema van <b>punten</b> die met <b>lijnen</b> of <b>pijlen</b> verbonden zijn. De punten zijn bijvoorbeeld <b>steden</b>, <b>stations</b> of <b>teams</b>.</p></div>`
+`<div class="box"><h4>Waar je grafen ziet</h4><p>Op een bord op het <b>station</b> zie je via welke stations een trein rijdt. Op een kaart met <b>buslijnen</b> zie je waar je kunt overstappen. Ook een <b>stamboom</b> is een graaf.</p></div></div>`
+`<h5 class="sub">Afstandstabel</h5>`
+`<div class="box"><h4>Afstanden aflezen</h4><p>Bij de lijnen staan vaak de <b>afstanden</b>. In een <b>afstandstabel</b> zet je de afstand tussen elk paar punten. Neem steeds de <b>kortste route</b>.</p></div>`
+`<div class="call warn"><b>Let op de pijlen.</b> In een graaf van wegen betekent een pijl <b>eenrichtingsverkeer</b>. Van Abdam naar Cordo is 10 km, maar terug moet je <b>omrijden</b> via Dors en Emde: 8 + 12 + 9 = <b>29 km</b>.</div>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Pijl bij wegen</h4><p>Je mag alleen <b>in de richting van de pijl</b> rijden.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Pijl bij een competitie</h4><p>Een pijl van A naar C betekent: <b>A speelt thuis tegen C</b>.</p></div></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Waarvoor gebruik je een graaf bij treinen of bussen?</p><p class="check-a">Om te zien welke <b>stations of haltes</b> met elkaar verbonden zijn en via welke <b>route</b> je kunt reizen.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (1.5)</b><ul class="lst">
<li>Een <b>graaf</b> bestaat uit <b>punten</b> met <b>lijnen of pijlen</b> ertussen.</li>
<li>In een <b>afstandstabel</b> neem je steeds de <b>kortste route</b>.</li>
<li>Een <b>pijl</b> betekent bij wegen <b>eenrichtingsverkeer</b>, en bij een competitie <b>wie thuis speelt</b>.</li></ul></div>`},

{heading:'1.6 Telproblemen',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>een <b>boomdiagram</b> en een <b>wegendiagram</b> maken</li>
<li>het aantal <b>wedstrijden</b> in een competitie berekenen</li></ul></div>`
+`<h5 class="sub">Mogelijkheden tellen</h5>`
+`<div class="g2">`
+`<div class="box"><h4>Boomdiagram</h4><p>Met een <b>boomdiagram</b> schrijf je alle mogelijkheden uit. Bij elke keuze teken je nieuwe <b>takken</b>; je mag <b>afkortingen</b> gebruiken. Je ziet <b>wélke</b> mogelijkheden er zijn.</p></div>`
+`<div class="box"><h4>Wegendiagram</h4><p>Met een <b>wegendiagram</b> reken je snel uit <b>hoevéél</b> mogelijkheden er zijn: je <b>vermenigvuldigt</b> de aantallen per keuze. Milkshakes in 3 formaten en 4 smaken: 3 &times; 4 = <b>12</b>.</p></div></div>`
+`<div class="call warn"><b>Welk diagram?</b> Wil je weten <b>wélke</b> mogelijkheden er zijn, gebruik dan een <b>boomdiagram</b>. Wil je weten <b>hoevéél</b>, gebruik dan een <b>wegendiagram</b>.</div>`
+`<div class="voorbeeld"><h4>Voorbeeld: een pincode</h4><p>Een pincode heeft <b>4 cijfers</b>. Elk cijfer kan 0 tot en met 9 zijn: <b>10</b> mogelijkheden per plek.</p><div class="antwoord">10 &times; 10 &times; 10 &times; 10 = <b>10 000</b> pincodes.</div></div>`
+`<h5 class="sub">Wedstrijden tellen</h5>`
+`<div class="term"><b>Afvalsysteem</b><span>Wie verliest ligt eruit, de winnaar speelt door naar de volgende ronde. Ook wel knock-outsysteem genoemd. Bij 8 spelers zijn er 4 + 2 + 1 = 7 wedstrijden.</span></div>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Halve competitie</h4><p>Elk team speelt <b>één keer</b> tegen elk ander team.</p><p><b>0,5 &times; aantal teams &times; aantal tegenstanders</b></p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Hele competitie</h4><p>Elk team speelt <b>twee keer</b> tegen elk ander team: thuis en uit.</p><p><b>aantal teams &times; aantal tegenstanders</b></p></div></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: een hele competitie met 4 teams</h4><p>Elk team heeft <b>3 tegenstanders</b> en speelt tegen elk team één keer <b>thuis</b> en één keer <b>uit</b>.</p><div class="antwoord">Totaal: 4 &times; 3 = <b>12</b> wedstrijden. Elk team speelt 3 &times; 2 = <b>6</b> wedstrijden.</div></div>`
+`<div class="call waarom">Waarom <b>&times; 0,5</b> bij een halve competitie? Team A tegen B is <b>dezelfde wedstrijd</b> als B tegen A. Zonder &times; 0,5 tel je elke wedstrijd <b>twee keer</b>.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">8 teams spelen een halve competitie. Hoeveel wedstrijden zijn dat?</p><p class="check-a">Elk team heeft 7 tegenstanders: 0,5 &times; 8 &times; 7 = <b>28</b> wedstrijden.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (1.6)</b><ul class="lst">
<li><b>Boomdiagram</b>: wélke mogelijkheden. <b>Wegendiagram</b>: hoevéél, door te <b>vermenigvuldigen</b>.</li>
<li><b>Afvalsysteem</b>: wie verliest ligt eruit.</li>
<li><b>Halve competitie</b>: 0,5 &times; teams &times; tegenstanders. <b>Hele competitie</b>: teams &times; tegenstanders.</li></ul></div>`}
],
terms:[
['kans','het aantal gunstige uitkomsten gedeeld door het totaal aantal mogelijke uitkomsten',0],
['cirkeldiagram','een diagram waarbij een cirkel verdeeld is in sectoren (taartpunten) die percentages voorstellen',1],
['sector','een taartpunt van een cirkeldiagram',1],
['sectorhoek','de hoek van een sector in een cirkeldiagram; percentage &times; 3,6',1],
['lijndiagram','een diagram waarbij punten met lijnstukken verbonden worden, vaak om een ontwikkeling in de tijd te laten zien',1],
['steelbladdiagram','een diagram waarbij elk getal wordt gesplitst in een steel (bijvoorbeeld de tientallen) en een blad (de eenheid)',2],
['boxplot','een diagram dat de spreiding van gegevens laat zien met minimum, Q1, mediaan, Q3 en maximum',3],
['mediaan','de middelste waarde van een van klein naar groot geordende reeks getallen',3],
['kwartiel','een grens die de geordende gegevens verdeelt in vier gelijke delen (Q1, mediaan en Q3)',3],
['graaf','een schema van knooppunten die met lijnen of pijlen zijn verbonden, bijvoorbeeld om een buslijnennet weer te geven',4],
['wegendiagram','een diagram waarmee je snel berekent hoeveel mogelijkheden er zijn, door de aantallen per keuze te vermenigvuldigen',5],
['boomdiagram','een schema met vertakkingen waarmee je alle mogelijkheden van achtereenvolgende keuzes overzichtelijk maakt',5],
['afvalsysteem','een toernooisysteem waarbij de verliezer afvalt en de winnaar doorspeelt',5],
['halve competitie','een toernooivorm waarbij elk team &eacute;&eacute;n keer tegen elk ander team speelt',5],
['hele competitie','een toernooivorm waarbij elk team twee keer tegen elk ander team speelt (thuis en uit)',5]
],
cards:[
['Hoe bereken je een kans?','Kans = aantal gunstige uitkomsten gedeeld door totaal aantal mogelijke uitkomsten.',0],
['Hoeveel mogelijke uitkomsten zijn er als je met twee dobbelstenen gooit?','36 mogelijkheden (6 &times; 6).',0],
['Hoe reken je een percentage om naar een sectorhoek in een cirkeldiagram?','Vermenigvuldig het percentage met 3,6 (want 100% hoort bij 360&deg;).',1],
['Wat zet je altijd boven een cirkeldiagram?','De titel en het totaal aantal (bijvoorbeeld het totaal aantal personen).',1],
['Uit welke twee delen bestaat een getal in een steelbladdiagram?','Uit een steel (bijvoorbeeld de tientallen) en een blad (de eenheid).',2],
['In welke volgorde zet je de bladen achter een steel?','Op volgorde van klein naar groot.',2],
['Welke vijf kengetallen staan in een boxplot?','Minimum, Q1 (eerste kwartiel), mediaan, Q3 (derde kwartiel) en maximum.',3],
['Wat geeft de mediaan aan?','De middelste waarde van een van klein naar groot geordende reeks getallen.',3],
['Welk deel van de gegevens zit tussen Q1 en Q3?','De middelste 50% van de gegevens.',3],
['Wat is een graaf?','Een schema van knooppunten die met lijnen of pijlen verbonden zijn.',4],
['Waarvoor gebruik je een graaf bij treinen of bussen?','Om te laten zien welke stations of haltes met elkaar verbonden zijn en via welke route je kunt reizen.',4],
['Hoe bereken je het aantal mogelijkheden bij achtereenvolgende keuzes?','Door de aantallen mogelijkheden bij elke keuze met elkaar te vermenigvuldigen.',5],
['Wat is het verschil tussen een halve en een hele competitie?','Bij een halve competitie speelt elk team &eacute;&eacute;n keer tegen elk ander team, bij een hele competitie twee keer (thuis en uit).',5],
['Wat gebeurt er bij het afvalsysteem?','De verliezer van een wedstrijd ligt eruit, de winnaar speelt door naar de volgende ronde.',5],
['Geef de formule voor het totaal aantal wedstrijden bij een halve competitie.','totaal aantal wedstrijden = 0,5 &times; aantal teams &times; aantal tegenstanders',5]
],
quiz:[
['Je gooit met &eacute;&eacute;n dobbelsteen. Hoe groot is de kans op een 6?',['1/6','1/3','1/2','6/6'],0,'Er is &eacute;&eacute;n gunstige uitkomst (6) op zes mogelijke uitkomsten, dus de kans is 1/6.'],
['Je gooit met twee dobbelstenen en telt de ogen op. Hoeveel mogelijke uitkomsten zijn er in totaal?',['12','6','36','66'],2,'Elke dobbelsteen heeft 6 mogelijke uitkomsten, dus samen 6 &times; 6 = 36.'],
['Een groep bestaat uit 63 personen. 44 vinden iets \'goed\'. Wat is het percentage \'goed\' (afgerond op &eacute;&eacute;n decimaal)?',['44,0%','69,8%','63,0%','6,3%'],1,'44/63 &times; 100% = 69,8%.'],
['Bij een cirkeldiagram hoort een percentage van 25%. Hoe groot is de bijbehorende sectorhoek?',['25 graden','90 graden','250 graden','36 graden'],1,'25% &times; 3,6 = 90 graden.'],
['In een steelbladdiagram staat bij steel 1 het blad 7. Welk getal stelt dit voor?',['1','7','17','71'],2,'De steel (1) staat voor de tientallen en het blad (7) voor de eenheid: samen 17.'],
['Waarom orden je de bladen in een steelbladdiagram van klein naar groot?',['Om het diagram overzichtelijker te maken','Dat is verplicht bij een boxplot','Om de kans te berekenen','Om de sectorhoek te vinden'],0,'Bladen op volgorde zetten maakt het steelbladdiagram overzichtelijk en makkelijk afleesbaar.'],
['Wat laat de box in een boxplot zien?',['Alleen het minimum en maximum','De middelste 50% van de gegevens (van Q1 tot Q3)','Alleen de mediaan','Alle losse waarnemingen'],1,'De box loopt van Q1 tot Q3 en bevat de middelste 50% van de gegevens.'],
['Wat is de mediaan van de reeks 3, 7, 9, 12, 20?',['7','9','12','10,2'],1,'Bij vijf geordende getallen is de mediaan het middelste getal: 9.'],
['Wat stelt een knooppunt in een graaf meestal voor?',['Een station, halte of team','Een percentage','Een sectorhoek','Een steel'],0,'In een graaf staan knooppunten voor bijvoorbeeld stations, haltes of teams die met elkaar verbonden zijn.'],
['In een graaf van een hele competitie wijst de pijl van team A naar team C. Wat betekent dat?',['A speelt thuis tegen C','C speelt thuis tegen A','A en C spelen niet tegen elkaar','A heeft van C gewonnen'],0,'Een pijl van A naar C betekent dat A thuis speelt tegen C.'],
['Bij een keuzemenu kies je uit 3 soepen, 2 hoofdgerechten en 2 nagerechten. Hoeveel verschillende menu\'s zijn er?',['7','12','18','3'],1,'Vermenigvuldig de keuzes: 3 &times; 2 &times; 2 = 12.'],
['8 teams spelen een halve competitie. Hoeveel tegenstanders heeft elk team?',['6','7','8','16'],1,'Bij 8 teams speelt elk team tegen alle andere 7 teams.'],
['8 teams spelen een halve competitie. Hoeveel wedstrijden worden er in totaal gespeeld?',['28','56','16','64'],0,'totaal = 0,5 &times; 8 &times; 7 = 28 wedstrijden.'],
['Wat is het verschil tussen een afvalsysteem en een halve competitie?',['Bij een afvalsysteem ligt de verliezer eruit, bij een halve competitie speelt iedereen tegen iedereen','Er is geen verschil','Een afvalsysteem heeft meer wedstrijden','Een halve competitie kent geen winnaar'],0,'Bij een afvalsysteem valt de verliezer af, bij een halve competitie speelt elk team precies &eacute;&eacute;n keer tegen elk ander team.'],
['In een schema met de som van twee dobbelstenen komt de som 7 het vaakst voor: 6 keer op 36. Hoe groot is de kans op 7 ogen, als percentage?',['6%','16,7%','36%','60%'],1,'6/36 = 1/6 = 16,7%.'],
['Een lijndiagram is vooral geschikt om te laten zien...',['hoe iets zich ontwikkelt in de tijd','hoeveel procent iets is van een totaal','de spreiding van gegevens met kwartielen','de mogelijkheden bij een keuzemenu'],0,'Een lijndiagram laat met verbonden punten een ontwikkeling in de tijd zien, bijvoorbeeld het aantal werknemers per jaar.']
]
});
