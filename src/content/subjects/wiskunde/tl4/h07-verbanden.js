import { registerChapter } from '../../../registry.js';

/* Rebuilt 2026-09-24 to the recipe of Economie TL4 H1 (change 6). Deel B
   (examentraining): headings stay unnumbered. Terms, cards and quiz unchanged. */
registerChapter('wiskunde|tl|4|7', {
title:'Verbanden',
summary:[
{heading:'Lineaire formules maken',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>een <b>lineaire formule</b> maken bij een verhaal, een <b>tabel</b> of een <b>grafiek</b></li>
<li>controleren of een formule bij een tabel <b>hoort</b></li></ul></div>`
+`<div class="box"><h4>Waar dit hoofdstuk over gaat</h4><p>Je herhaalt alle soorten <b>verbanden</b> voor het examen: <b>lineaire formules</b>, <b>exponentiële groei</b>, <b>periodieke verbanden</b> en <b>som- en verschilgrafieken</b>.</p></div>`
+`<h5 class="sub">De formule</h5>`
+`<div class="box"><h4>Begingetal en richtingscoëfficiënt</h4><p><b>uitkomst = begingetal + richtingscoëfficiënt &times; variabele</b></p><p>Het <b>begingetal</b> hoort bij t = 0. De <b>rc</b> reken je uit met <b>toename onder : toename boven</b> in de tabel.</p></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: een tabel met regelmaat</h4><p>t: 2, 4, 7 en H: 20, 16, 10. Er staat <b>geen t = 0</b> in de tabel.</p><div class="antwoord">rc: &minus;4 / 2 = <b>&minus;2</b> en &minus;6 / 3 = <b>&minus;2</b>, dat klopt. Terug naar t = 0 is 2 stappen terug: H = 20 + 2 &times; 2 = <b>24</b>. Formule: <b>H = 24 &minus; 2t</b>.</div></div>`
+`<div class="call warn"><b>Staat t = 0 niet in de tabel?</b> Reken dan <b>terug</b> met de rc. Bij een negatieve rc tel je er bij teruggaan juist <b>bij op</b>.</div>`
+`<h5 class="sub">Hoort de formule bij de tabel?</h5>`
+`<div class="call reken"><b>Stappenplan: formule controleren</b><ol class="num">
<li>Vul de getallen uit de tabel <b>één voor één</b> in de formule in.</li>
<li>Kijk of de <b>uitkomst</b> steeds klopt met de tabel.</li>
<li>Klopt het bij <b>één</b> getal niet, dan hoort de formule <b>niet</b> bij de tabel.</li></ol></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Hoe bereken je de richtingscoëfficiënt uit een tabel?</p><p class="check-a">Met de deling <b>toename onder : toename boven</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li><b>uitkomst = begingetal + rc &times; variabele</b>.</li>
<li><b>rc</b> = toename onder : toename boven.</li>
<li>Een formule hoort bij een tabel als <b>alle</b> getallen kloppen.</li></ul></div>`},

{heading:'Exponenti&euml;le verbanden',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>een <b>exponentieel verband</b> herkennen in een <b>tabel</b></li>
<li>rekenen met de formule bij <b>exponentiële groei</b> en <b>afname</b></li></ul></div>`
+`<h5 class="sub">Herkennen in een tabel</h5>`
+`<div class="box"><h4>Delen</h4><p>Deel steeds een getal door het getal <b>ervoor</b>. Krijg je steeds <b>dezelfde uitkomst</b>, dan is er een <b>exponentieel verband</b>, en die uitkomst is de <b>groeifactor</b>.</p></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: 5, 15, 45, 135</h4><p>Maak de <b>delingen</b>.</p><div class="antwoord">15 : 5 = 3, 45 : 15 = 3, 135 : 45 = 3. Steeds <b>3</b>: exponentieel, met <b>groeifactor 3</b>.</div></div>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Lineair</h4><p>Het <b>verschil</b> is steeds gelijk: er komt steeds <b>hetzelfde getal bij</b>.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Exponentieel</h4><p>De <b>deling</b> is steeds gelijk: je vermenigvuldigt steeds met <b>hetzelfde getal</b>.</p></div></div>`
+`<h5 class="sub">De formule</h5>`
+`<div class="box"><h4>Groeifactor tot de macht tijd</h4><p><b>aantal = begingetal &times; groeifactor<sup>tijd</sup></b></p></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: een fiets wordt minder waard</h4><p>Een fiets kost <b>&euro;1500</b> en wordt elk jaar <b>17,5%</b> minder waard. Wat is hij na <b>6 jaar</b> waard?</p><div class="antwoord">Groeifactor (100 &minus; 17,5) : 100 = <b>0,825</b>. Waarde: 1500 &times; 0,825&#8310; &asymp; <b>&euro;472,95</b>.</div></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Hoe bereken je de groeifactor bij een afname van 17,5%?</p><p class="check-a">(100 &minus; 17,5) : 100 = <b>0,825</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li>Exponentieel: de <b>delingen</b> zijn steeds gelijk; lineair: de <b>verschillen</b>.</li>
<li><b>aantal = begingetal &times; groeifactor<sup>tijd</sup></b>.</li>
<li>Afname p%: groeifactor <b>(100 &minus; p) : 100</b>.</li></ul></div>`},

{heading:'Periodieke verbanden',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>de <b>periode</b>, <b>evenwichtsstand</b>, <b>amplitude</b> en <b>frequentie</b> bepalen</li></ul></div>`
+`<h5 class="sub">Een grafiek die zich herhaalt</h5>`
+`<div class="box"><h4>Periodiek verband</h4><p>Bij een <b>periodiek verband</b> herhaalt de grafiek zich steeds na <b>dezelfde tijd</b>. Denk aan een <b>reuzenrad</b>, <b>eb en vloed</b> of je <b>hartslag</b>.</p></div>`
+`<div class="term"><b>Periode</b><span>De tijd waarna de grafiek zich herhaalt.</span></div>`
+`<div class="term"><b>Evenwichtsstand</b><span>Precies in het midden: (hoogste + laagste stand) : 2.</span></div>`
+`<div class="term"><b>Amplitude</b><span>De halve afstand tussen hoogste en laagste stand: (hoogste &minus; laagste) : 2.</span></div>`
+`<div class="term" style="margin-bottom:0"><b>Frequentie</b><span>Hoe vaak de periode zich herhaalt in een tijdseenheid, bijvoorbeeld per uur.</span></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: een reuzenrad</h4><p>Een bakje komt <b>35 m</b> hoog en <b>0 m</b> laag. Eén rondje duurt <b>50 seconden</b>.</p><div class="antwoord">Evenwichtsstand (35 + 0) : 2 = <b>17,5 m</b>. Amplitude (35 &minus; 0) : 2 = <b>17,5 m</b>. Frequentie 3600 : 50 = <b>72 keer per uur</b>.</div></div>`
+`<div class="call waarom">Waarom <b>3600 : 50</b>? Een uur heeft <b>3600 seconden</b>. Als één rondje 50 seconden duurt, passen er 3600 : 50 rondjes in een uur.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Hoe bereken je de amplitude?</p><p class="check-a"><b>(hoogste stand &minus; laagste stand) : 2</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li><b>Periode</b>: na hoeveel tijd het zich herhaalt.</li>
<li><b>Evenwichtsstand</b> = (hoog + laag) : 2. <b>Amplitude</b> = (hoog &minus; laag) : 2.</li>
<li><b>Frequentie</b> = tijdseenheid : periode.</li></ul></div>`},

{heading:'Som- en verschilgrafieken',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>een <b>somgrafiek</b> en een <b>verschilgrafiek</b> tekenen en aflezen</li>
<li><b>stippengrafieken</b> en <b>trapgrafieken</b> herkennen</li></ul></div>`
+`<h5 class="sub">Optellen en aftrekken</h5>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Somgrafiek</h4><p>Bij elk tijdstip de <b>som</b> van twee of meer grootheden.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Verschilgrafiek</h4><p>Bij elk tijdstip het <b>verschil</b> tussen twee grootheden.</p></div></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: fietsen verhuren</h4><p>Camping <b>Goud</b> en Camping <b>Zilver</b> verhuren elke dag fietsen. Je wilt weten hoeveel het er <b>samen</b> zijn.</p><div class="antwoord">Tel per dag het aantal van beide campings <b>bij elkaar op</b> en zet die punten in de grafiek: dat is de <b>somgrafiek</b>.</div></div>`
+`<h5 class="sub">Stippen en treden</h5>`
+`<div class="g2">`
+`<div class="box"><h4>Stippengrafiek</h4><p>Alleen <b>losse punten</b>, bijvoorbeeld bij <b>hele aantallen</b>. Je trekt <b>geen lijn</b>.</p></div>`
+`<div class="box"><h4>Trapgrafiek</h4><p><b>Horizontale treden</b> die bij een volgend interval <b>verspringen</b>. Een OV-fiets kost <b>&euro;4,55</b> voor 0 tot 24 uur en <b>&euro;9,10</b> voor 24 tot 48 uur.</p></div></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Wat laat een verschilgrafiek zien?</p><p class="check-a">Bij elk tijdstip het <b>verschil</b> tussen twee grootheden.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li><b>Somgrafiek</b>: per tijdstip optellen. <b>Verschilgrafiek</b>: per tijdstip aftrekken.</li>
<li><b>Stippengrafiek</b>: losse punten. <b>Trapgrafiek</b>: treden die verspringen.</li></ul></div>`}
],
terms:[
['richtingsco&euml;ffici&euml;nt (rc)','het getal dat je vindt met toename onder : toename boven in een tabel; geeft de steilheid van een lineaire grafiek',0],
['begingetal','de waarde van de formule bij variabele gelijk aan 0',0],
['exponentieel verband','een verband waarbij opeenvolgende waarden in een tabel steeds met dezelfde factor (de groeifactor) vermenigvuldigd worden',1],
['groeifactor','het getal waarmee je bij exponenti&euml;le groei vermenigvuldigt per tijdseenheid',1],
['periode','de tijd waarna een periodieke grafiek zich herhaalt',2],
['evenwichtsstand','de waarde precies in het midden tussen de hoogste en de laagste stand van een periodieke grafiek',2],
['amplitude','de halve afstand tussen de hoogste en de laagste stand van een periodieke grafiek',2],
['frequentie','het aantal keren dat een periode zich herhaalt binnen een tijdseenheid, bijvoorbeeld per uur',2],
['somgrafiek','een grafiek die bij elk tijdstip de som van twee of meer grootheden weergeeft',3],
['verschilgrafiek','een grafiek die bij elk tijdstip het verschil tussen twee grootheden weergeeft',3],
['stippengrafiek','een grafiek met alleen losse punten, zonder verbindende lijn',3],
['trapgrafiek','een grafiek met horizontale treden die bij een volgend interval springen naar een andere waarde',3],
['periodiek verband','een verband waarbij de grafiek zich met een vaste periode herhaalt, zoals bij een reuzenrad',2],
['regelmaat in een tabel','een tabel waarbij de toename (of afname) steeds constant is, waardoor je er een lineaire formule bij kunt maken',0],
['hetzelfde verband controleren','controleren of een formule bij een tabel hoort door de gegeven getallen in te vullen en te kijken of de uitkomst klopt',0]
],
cards:[
['Wat is de formule voor een lineair verband?','uitkomst = begingetal + richtingsco&euml;ffici&euml;nt &times; variabele.',0],
['Hoe bereken je de richtingsco&euml;ffici&euml;nt uit een tabel?','Met de deling toename onder : toename boven.',0],
['Hoe controleer je of een formule bij een tabel hoort?','Je vult de gegeven getallen uit de tabel in de formule in en controleert of de uitkomst klopt.',0],
['Hoe herken je een exponentieel verband in een tabel?','Door opeenvolgende getallen op elkaar te delen; krijg je steeds dezelfde uitkomst, dan is er een exponentieel verband.',1],
['Wat is de formule bij exponenti&euml;le groei?','aantal = begingetal &times; groeifactor tot de macht tijd.',1],
['Hoe bereken je de groeifactor bij een afname van 17,5%?','(100 - 17,5) : 100 = 0,825.',1],
['Wat is de periode van een periodiek verband?','De tijd waarna de grafiek zich herhaalt.',2],
['Hoe bereken je de evenwichtsstand?','(hoogste stand + laagste stand) : 2.',2],
['Hoe bereken je de amplitude?','(hoogste stand - laagste stand) : 2.',2],
['Wat geeft de frequentie aan?','Hoe vaak de periode zich herhaalt binnen een tijdseenheid, bijvoorbeeld per uur.',2],
['Wat laat een somgrafiek zien?','Bij elk tijdstip de som van twee of meer grootheden.',3],
['Wat laat een verschilgrafiek zien?','Bij elk tijdstip het verschil tussen twee grootheden.',3],
['Wanneer teken je een stippengrafiek in plaats van een lijn?','Als alleen losse, hele waarden mogelijk zijn.',3],
['Wat kenmerkt een trapgrafiek?','Horizontale treden die bij een volgend interval springen naar een andere waarde.',3],
['Als je een tabel hebt met 50, 80, 128, 210 bij t = 0,1,2,3: hoe controleer je of dit exponentieel is?','Je deelt opeenvolgende getallen door elkaar (80:50, 128:80, 210:128) en kijkt of de uitkomst steeds gelijk is.',1]
],
quiz:[
['Bij een tabel is de rc berekend als -4/2 = -2 en -6/3 = -2. Bij t = 0 hoort H = 24. Wat is de formule?',['H = 24 + 2t','H = 24 - 2t','H = -2 + 24t','H = 2 - 24t'],1,'Begingetal 24, richtingsco&euml;ffici&euml;nt -2: H = 24 - 2t.'],
['In 2009 kostte een kaartje &euro;19,50, in 2024 &euro;30, met een lineaire stijging. Wat is de richtingsco&euml;ffici&euml;nt?',['0,7','10,50','1,3','15'],0,'rc = (30 - 19,50) / 15 = 0,7.'],
['Een tabel geeft 5, 15, 45, 135. Wat is de groeifactor?',['2','3','5','10'],1,'15:5=3, 45:15=3, 135:45=3, dus groeifactor 3.'],
['Een fiets van &euro;1500 daalt jaarlijks 17,5% in waarde. Wat is de groeifactor?',['1,175','0,825','0,175','82,5'],1,'100% - 17,5% = 82,5%, dus groeifactor 0,825.'],
['Wat is de waarde van de fiets (&euro;1500, groeifactor 0,825) na 6 jaar (afgerond op hele euro\'s)?',['&euro;225','&euro;473','&euro;1237','&euro;300'],1,'1500 &times; 0,825&#8310; = 472,95, afgerond &euro;473.'],
['Bij een reuzenrad is het bakje maximaal 35 m hoog en minimaal 0 m. Wat is de evenwichtsstand?',['0 m','17,5 m','35 m','70 m'],1,'Evenwichtsstand = (35 + 0) : 2 = 17,5 m.'],
['Bij dezelfde situatie: wat is de amplitude?',['0 m','17,5 m','35 m','70 m'],1,'Amplitude = (35 - 0) : 2 = 17,5 m.'],
['Het reuzenrad heeft een periode van 50 seconden. Wat is de frequentie per uur?',['50 keer per uur','72 keer per uur','3600 keer per uur','7,2 keer per uur'],1,'3600 seconden per uur : 50 seconden per periode = 72 keer per uur.'],
['Wat geeft een somgrafiek weer?',['Het verschil tussen twee grootheden','De som van twee of meer grootheden op elk tijdstip','Alleen de grootste waarde','Een periodiek verband'],1,'Een somgrafiek telt bij elk tijdstip de waarden van meerdere grootheden op.'],
['Camping Goud en Camping Zilver verhuren op maandag 5 en 8 fietsen. Wat is de waarde op de somgrafiek voor maandag?',['3','5','8','13'],3,'Som = 5 + 8 = 13.'],
['Wanneer gebruik je een trapgrafiek?',['Als de prijs binnen een interval steeds hetzelfde is en bij een volgend interval springt','Als alleen losse punten mogelijk zijn','Als het verband exponentieel is','Als je een hoek moet berekenen'],0,'Een trapgrafiek heeft horizontale treden die springen naar een andere waarde bij een volgend interval.'],
['Een OV-fiets kost 0-24 uur &euro;4,55 en 24-48 uur &euro;9,10. Iemand huurt hem 30 uur. Wat betaalt deze persoon?',['&euro;4,55','&euro;9,10','&euro;13,65','&euro;6,83'],1,'30 uur valt in de trede 24-48 uur, dus &euro;9,10.'],
['Waarom teken je bij chocoladerepen (alleen hele repen te koop) een stippengrafiek?',['Omdat het verband exponentieel is','Omdat tussenwaarden (halve repen) niet mogelijk zijn','Omdat de prijs periodiek is','Omdat er geen verband is'],1,'Alleen hele aantallen repen zijn mogelijk, dus zijn er geen lijnen tussen de punten getekend.'],
['Bij een periodiek verband herhaalt de grafiek zich elke 20 seconden. Wat is dit getal?',['De amplitude','De evenwichtsstand','De periode','De frequentie'],2,'De tijd waarna de grafiek zich herhaalt, is de periode.'],
['Hoe controleer je of een gegeven formule bij een tabel hoort?',['Je vult de getallen uit de tabel in de formule in en kijkt of de uitkomst klopt','Je tekent altijd een cirkeldiagram','Je berekent de vergrotingsfactor','Dat kan alleen met de grafische rekenmachine'],0,'Vul de bekende waarden in en controleer of de formule de juiste uitkomst geeft.']
]
});
