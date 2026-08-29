import { registerChapter } from '../../../registry.js';

registerChapter('rekenen|bbl|3|4', {
title:'Verbanden',
summary:[
{heading:'4.1 Tabellen',html:'<div class="box"><h4>Een tabel aflezen</h4><p>Een tabel is verdeeld in <b>rijen</b> (horizontaal) en <b>kolommen</b> (verticaal). Je leest een gegeven af door de juiste rij met de juiste kolom te combineren.</p><div class="call">Bijvoorbeeld bij een testtabel van smartphones: kijk in de kolom "testoordeel" en de rij van het toestel dat je zoekt, om het cijfer van dat toestel te vinden.</div></div><div class="call sum"><b>Om te onthouden</b><ul class="lst"><li>Een tabel bestaat uit rijen en kolommen.</li><li>Combineer de juiste rij en kolom om een gegeven af te lezen.</li></ul></div>'},
{heading:'4.2 Staafdiagram',html:'<div class="box"><h4>Een staafdiagram met de procententabel combineren</h4><p>Uit een staafdiagram kun je aflezen hoeveel procent bij een categorie hoort. Met een procententabel bereken je daarna hoeveel personen of stuks dat zijn.</p></div><div class="call"><b>Voorbeeld:</b> Nederland heeft ongeveer 17,5 miljoen inwoners. Uit het staafdiagram blijkt dat 24% wil afvallen.<br>17,5 miljoen &times; 24 : 100 = <b>ongeveer 4,2 miljoen Nederlanders</b>.</div><div class="call sum"><b>Om te onthouden</b><ul class="lst"><li>Lees eerst het percentage af uit het staafdiagram.</li><li>Gebruik daarna een procententabel om het aantal te berekenen.</li></ul></div>'},
{heading:'4.3 Lijndiagram',html:'<div class="box"><h4>Verschil en stijging aflezen</h4><p>In een lijndiagram zie je hoe een waarde verandert over de tijd. Op de horizontale as (x-as) staat meestal de tijd, op de verticale as (y-as) de waarde.</p></div><div class="call"><b>Voorbeeld:</b> het eigen risico van een zorgverzekering was in 2012 €220. In 2013 was het €130 meer.<br>Stijging in procenten: 130 : 220 &times; 100 = <b>ongeveer 59,1%</b> (afgerond op één decimaal).</div><div class="call sum"><b>Om te onthouden</b><ul class="lst"><li>Lees eerst de twee waarden af uit het lijndiagram.</li><li>Bereken het verschil, en gebruik een procententabel voor het percentage.</li></ul></div>'},
{heading:'4.4 Cirkeldiagram',html:'<div class="box"><h4>Sectoren aflezen</h4><p>Een cirkeldiagram is verdeeld in stukken die <b>sectoren</b> heten. In elke sector staat hoeveel procent daarbij hoort. Boven het cirkeldiagram staat het aantal dat bij 100% hoort. In de <b>legenda</b> staat wat elke sector betekent.</p></div><div class="call"><b>Voorbeeld:</b> een pizzeria had op een avond 460 gasten (=100%). "Patat met" hoort bij de rode sector: 45%.<br>Gebruik een procententabel: 460 &times; 45 : 100 = <b>207 klanten</b> bestelden patat met.</div><div class="call sum"><b>Om te onthouden</b><ul class="lst"><li>Boven het cirkeldiagram staat het getal dat bij 100% hoort.</li><li>Gebruik de legenda om te zien wat elke sector betekent.</li><li>Bereken met een procententabel hoeveel een sector precies voorstelt.</li></ul></div>'},
{heading:'4.5 Periodieke grafiek',html:'<div class="box"><h4>Een grafiek die zich herhaalt</h4><p>Een <b>periodieke grafiek</b> herhaalt zichzelf steeds na dezelfde tijd. Denk aan eb en vloed, of het groeien en maaien van gras.</p></div><div class="call"><b>Voorbeeld:</b> het gras in de tuin van Remco wordt elke 7 dagen gemaaid. In een week groeit het gras van 6 naar 11 cm.<br>Groei per week: 11 &minus; 6 = <b>5 cm</b>.<br>Remco maait altijd op zaterdag. Op dinsdag (de 3e dag na zaterdag) is het gras ongeveer <b>8 cm</b>.</div><div class="call sum"><b>Om te onthouden</b><ul class="lst"><li>Kijk na hoeveel tijd de grafiek zich herhaalt.</li><li>Het verschil tussen maximum en minimum is de groei of daling binnen één periode.</li></ul></div>'},
{heading:'4.6 Beelddiagram',html:'<div class="box"><h4>Plaatjes die een aantal voorstellen</h4><p>In een beelddiagram stelt één plaatje een vast aantal voor. Een half plaatje stelt de helft van dat aantal voor. Tel het aantal plaatjes en vermenigvuldig dat met het aantal per plaatje.</p></div><div class="call"><b>Voorbeeld:</b> in een beelddiagram over auto&#39;s in 2016 stelt één plaatje 5000 auto&#39;s voor.<br>Er staan 9 hele plaatjes bij Volkswagen: 9 &times; 5000 = <b>45000 Volkswagens</b>.<br>Bij Peugeot staan 5 plaatjes en een klein deeltje van ongeveer 4000: 5 &times; 5000 + 4000 = <b>ongeveer 29000 Peugeots</b>.</div><div class="call sum"><b>Om te onthouden</b><ul class="lst"><li>Kijk eerst hoeveel één plaatje voorstelt.</li><li>Tel de plaatjes (ook halve of gedeeltelijke) en vermenigvuldig met dat aantal.</li></ul></div>'}
],
terms:[
['Tabel','Een overzicht van gegevens, verdeeld in rijen en kolommen.',0],
['Rij','Een horizontale lijn van gegevens in een tabel.',0],
['Kolom','Een verticale lijn van gegevens in een tabel.',0],
['Staafdiagram','Een diagram met staven waarvan de hoogte of lengte een aantal of percentage laat zien.',1],
['Lijndiagram','Een diagram met een lijn die laat zien hoe een waarde verandert over de tijd.',2],
['Cirkeldiagram','Een diagram in de vorm van een cirkel, verdeeld in sectoren die samen 100% vormen.',3],
['Sector','Eén stuk van een cirkeldiagram.',3],
['Legenda','De uitleg bij een diagram die vertelt wat kleuren of symbolen betekenen.',3],
['Periodieke grafiek','Een grafiek die zich na een vaste tijd steeds herhaalt.',4],
['Beelddiagram','Een diagram waarin plaatjes of symbolen een aantal voorstellen.',5]
],
cards:[
['Waaruit bestaat een tabel?','Uit rijen (horizontaal) en kolommen (verticaal).',0],
['Wat doe je met een percentage uit een staafdiagram om een aantal personen te berekenen?','Je gebruikt een procententabel.',1],
['Nederland heeft 17,5 miljoen inwoners, 24% wil afvallen. Hoeveel Nederlanders is dat ongeveer?','Ongeveer 4,2 miljoen',1],
['Wat staat er meestal op de x-as van een lijndiagram over de tijd?','De tijd (bijvoorbeeld het jaar).',2],
['Wat is een sector in een cirkeldiagram?','Eén stuk van de cirkel, dat een percentage van het geheel voorstelt.',3],
['Waar staat het getal dat bij 100% hoort in een cirkeldiagram?','Boven het cirkeldiagram.',3],
['Wat is bijzonder aan een periodieke grafiek?','Hij herhaalt zich steeds na dezelfde tijd.',4],
['Het gras van Remco groeit 5 cm per week en wordt elke 7 dagen gemaaid. Hoeveel cm groeit het per week?','5 cm',4],
['Wat stelt één plaatje voor in een beelddiagram?','Een vast aantal, bijvoorbeeld 5000 auto&#39;s.',5],
['Hoeveel stelt een half plaatje voor in een beelddiagram, als één plaatje 5000 voorstelt?','2500',5]
],
quiz:[
['Waaruit bestaat een tabel?',['Alleen uit rijen','Alleen uit kolommen','Rijen en kolommen','Sectoren'],2,'Een tabel bestaat uit rijen (horizontaal) en kolommen (verticaal).'],
['Nederland heeft ongeveer 17,5 miljoen inwoners. Uit een staafdiagram blijkt dat 24% wil afvallen. Hoeveel Nederlanders is dat ongeveer?',['3,2 miljoen','4,2 miljoen','5,2 miljoen','2,2 miljoen'],1,'17,5 miljoen x 24 : 100 = ongeveer 4,2 miljoen.'],
['Wat gebruik je om van een percentage uit een staafdiagram een aantal te berekenen?',['Een staartdeling','Een procententabel','Een cirkeldiagram','Een legenda'],1,'Je gebruikt een procententabel om het percentage om te rekenen naar een aantal.'],
['Wat staat er meestal op de horizontale as van een lijndiagram over een aantal jaren?',['Het aantal','Het percentage','De tijd (jaartallen)','De naam van het diagram'],2,'Op de horizontale as van zo&#39;n lijndiagram staat meestal de tijd.'],
['Het eigen risico was in 2012 €220 en in 2013 €130 hoger. Met hoeveel procent is het gestegen, afgerond op één decimaal?',['49,1%','59,1%','69,1%','39,1%'],1,'130 : 220 x 100 = 59,1%.'],
['Wat is een sector in een cirkeldiagram?',['De rand van de cirkel','Eén stuk van de cirkel dat een percentage voorstelt','De legenda van het diagram','Het middelpunt van de cirkel'],1,'Een sector is één stuk van het cirkeldiagram, met een bijbehorend percentage.'],
['Waar staat in een cirkeldiagram het getal dat bij 100% hoort?',['Onder het diagram','In de legenda','Boven het diagram','In het middelpunt'],2,'Boven het cirkeldiagram staat het aantal dat bij 100% hoort.'],
['Een pizzeria had op een avond 460 gasten (100%). "Patat met" hoort bij de rode sector van 45%. Hoeveel klanten bestelden patat met?',['197','207','217','227'],1,'460 x 45 : 100 = 207 klanten.'],
['Wat is bijzonder aan een periodieke grafiek?',['Hij loopt steeds omhoog','Hij herhaalt zich na een vaste tijd','Hij heeft geen x-as','Hij bestaat uit staven'],1,'Een periodieke grafiek herhaalt zichzelf steeds na dezelfde tijd.'],
['Het gras van Remco groeit van 6 naar 11 cm in één week. Hoeveel cm groeit het gras per week?',['4 cm','5 cm','6 cm','7 cm'],1,'11 - 6 = 5 cm per week.'],
['Remco maait het gras altijd op zaterdag. Hoeveel cm is het gras ongeveer op dinsdag (3 dagen later), als het net gemaaid is op 6 cm en 5 cm per week groeit?',['6 cm','7 cm','8 cm','9 cm'],2,'In 3 van de 7 dagen groeit het gras ongeveer 3/7 x 5 ≈ 2 cm erbij: 6 + 2 = ongeveer 8 cm.'],
['In een beelddiagram stelt één plaatje 5000 auto&#39;s voor. Bij Volkswagen staan 9 plaatjes. Hoeveel Volkswagens zijn dat?',['35000','40000','45000','50000'],2,'9 x 5000 = 45000 auto&#39;s.'],
['Hoeveel stelt een half plaatje voor, als één plaatje 5000 auto&#39;s voorstelt?',['1000','2000','2500','5000'],2,'Een half plaatje is de helft van 5000, dus 2500.'],
['Bij Peugeot staan 5 hele plaatjes en een deeltje van ongeveer 4000 auto&#39;s. Hoeveel Peugeots zijn er ongeveer verkocht?',['24000','25000','29000','34000'],2,'5 x 5000 + 4000 = 29000 auto&#39;s.'],
['Waarmee combineer je een percentage uit een diagram, om een echt aantal te berekenen?',['Een staartdeling','Een procententabel','Een breuk zonder berekening','Een schatting zonder rekenen'],1,'Je combineert het afgelezen percentage met een procententabel om het aantal te berekenen.']
]
});
