import { registerChapter } from '../../../registry.js';

registerChapter('wiskunde|tl|4|7', {
title:'Verbanden',
summary:[
{heading:'Lineaire formules maken',html:'<div class=\'box\'>Dit hoofdstuk herhaalt alle soorten verbanden voor je examen: lineaire formules maken, exponenti&euml;le groei, periodieke verbanden en som- en verschilgrafieken.</div><div class=\'box\'>Bij een lineair verband heeft de formule de vorm <b>uitkomst = begingetal + richtingsco&euml;ffici&euml;nt &times; variabele</b>.</div><div class=\'voorbeeld\'><p><b>Voorbeeld</b><br>In 2009 kostte een kaartje &euro;19,50, in 2024 &euro;30, met een lineaire stijging. De prijsstijging is &euro;10,50 over 15 jaar, dus rc = 10,50 : 15 = 0,7. De formule wordt P = 19,50 + 0,7t.</p></div><div class=\'call\'>Bij een tabel met regelmaat vind je het <span class=\'term\'>begingetal</span> bij t = 0 en de <span class=\'term\'>richtingsco&euml;ffici&euml;nt</span> door de deling toename onder : toename boven te maken.</div><div class=\'voorbeeld\'><p><b>Voorbeeld</b><br>Bij tabel t: 2, 4, 7 en H: 20, 16, 10 bereken je eerst de rc met -4/2 = -2 en -6/3 = -2 (klopt, rc = -2). Bij t = 0 hoort dan H = 20 + 2 &times; 2 = 24. De formule is H = 24 - 2t.</p></div><div class=\'call\'>Hoort een formule bij een tabel? Vul de gegeven getallen uit de tabel in en controleer of de uitkomst klopt. Klopt een formule niet bij &eacute;&eacute;n van de getallen, dan hoort die formule niet bij de tabel.</div>'},
{heading:'Exponenti&euml;le verbanden',html:'<div class=\'box\'>Bij een tabel controleer je een <span class=\'term\'>exponenti&euml;el verband</span> door steeds de opeenvolgende getallen op elkaar te delen. Krijg je steeds dezelfde uitkomst, dan is er een exponentieel verband en is die uitkomst de <span class=\'term\'>groeifactor</span>.</div><div class=\'voorbeeld\'><p><b>Voorbeeld</b><br>Tabel: 5, 15, 45, 135. 15:5=3, 45:15=3, 135:45=3. Er is een exponentieel verband met groeifactor 3.</p></div><div class=\'call\'>Formule bij exponenti&euml;le groei: <b>aantal = begingetal &times; groeifactor<sup>tijd</sup></b>.</div><div class=\'voorbeeld\'><p><b>Voorbeeld</b><br>Een fiets kost &euro;1500 en daalt elk jaar met 17,5% in waarde. Groeifactor = 82,5 : 100 = 0,825. Op 1 januari 2028 (6 jaar later) is de waarde 1500 &times; 0,825&#8310; = &euro;472,95.</p></div>'},
{heading:'Periodieke verbanden',html:'<div class=\'box\'>Bij een <span class=\'term\'>periodiek verband</span> herhaalt de grafiek zich steeds na dezelfde tijd. Die tijd heet de <span class=\'term\'>periode</span>.</div><div class=\'tblwrap\'><table class=\'tbl\'><tr><th>begrip</th><th>uitleg</th></tr><tr><td>periode</td><td>de tijd waarna de grafiek zich herhaalt</td></tr><tr><td>evenwichtsstand</td><td>de waarde precies in het midden tussen de hoogste en laagste stand</td></tr><tr><td>amplitude</td><td>de halve afstand tussen de hoogste en laagste stand</td></tr><tr><td>frequentie</td><td>hoe vaak de periode zich herhaalt binnen een tijdseenheid (bijvoorbeeld per uur)</td></tr></table></div><div class=\'voorbeeld\'><p><b>Voorbeeld</b><br>Bij een reuzenrad komt een bakje 35 m hoog en 0 m laag, en de periode is 50 seconden. De evenwichtsstand is (35 + 0)/2 = 17,5 m, de amplitude is (35 - 0)/2 = 17,5 m. De frequentie per uur is 3600 : 50 = 72 keer per uur.</p></div>'},
{heading:'Som- en verschilgrafieken',html:'<div class=\'box\'>Een <span class=\'term\'>somgrafiek</span> geeft bij elk tijdstip de som van twee (of meer) grootheden. Een <span class=\'term\'>verschilgrafiek</span> geeft het verschil.</div><div class=\'voorbeeld\'><p><b>Voorbeeld</b><br>Camping Goud en Camping Zilver verhuren elk dag fietsen. Om de somgrafiek te tekenen, tel je bij elke dag het aantal fietsen van beide campings bij elkaar op en teken je die som.</p></div><div class=\'call\'>Bij een <span class=\'term\'>stippengrafiek</span> horen alleen losse punten (bijvoorbeeld bij hele aantallen), bij een <span class=\'term\'>trapgrafiek</span> horen horizontale treden die springen naar een andere waarde binnen een volgend interval.</div><div class=\'voorbeeld\'><p><b>Voorbeeld</b><br>Bij het huren van een OV-fiets kost 0 tot 24 uur &euro;4,55, van 24 tot 48 uur &euro;9,10, enzovoort: dit is een trapgrafiek.</p></div>'}
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
