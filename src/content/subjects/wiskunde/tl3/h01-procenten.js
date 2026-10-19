import { registerChapter } from '../../../registry.js';

/* Rebuilt 2026-09-25 to the recipe of Economie TL4 H1 (change 6). Fixed:
   1.2 said 5 : 425 was 1,8% (it is 1,2%), and 1.6 announced the
   exponential formula without giving it. Added from the book: "het geheel
   berekenen" (255 is 12,5%, theorie D), the neerslag table (1.2) and the
   headphones excl. btw (1.4). Terms, cards and quiz unchanged. */
registerChapter('wiskunde|tl|3|1', {
title:'Procenten',
summary:[
{heading:'1.1 Percentage gegeven',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>de <b>nieuwe prijs</b> berekenen na een procentuele <b>stijging</b> of <b>daling</b></li>
<li>rekenen met de <b>vermenigvuldigingsfactor</b> en de <b>btw</b></li></ul></div>`
+`<div class="box"><h4>Waar dit hoofdstuk over gaat</h4><p>Je rekent met <b>procenten</b>: een nieuwe prijs na een stijging of daling, de <b>procentuele toename</b>, <b>terugrekenen</b> naar 100%, <b>promille</b> en de <b>exponentiële formule</b> voor groei over meerdere jaren.</p></div>`
+`<h5 class="sub">Het nieuwe percentage</h5>`
+`<div class="call reken"><b>Stappenplan: nieuwe prijs of nieuw aantal</b><ol class="num">
<li>Bereken het <b>nieuwe percentage</b>: bij een stijging <b>100% + p%</b>, bij een daling <b>100% &minus; p%</b>.</li>
<li>Maak er een <b>vermenigvuldigingsfactor</b> van: deel door 100.</li>
<li>Vermenigvuldig: <b>factor &times; oude waarde</b>.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: het minimumloon</h4><p>In januari 2018 was het minimumloon voor een 15-jarige <b>&euro;478,25</b> per maand. Het steeg in drie jaar met <b>10,1%</b>.</p><div class="antwoord">100% + 10,1% = <b>110,1%</b>, factor <b>1,101</b>. 1,101 &times; 478,25 = 526,553&hellip;, dus <b>&euro;526,55</b>.</div></div>`
+`<div class="tblwrap"><table class="tbl"><tr><th>Situatie</th><th>Nieuw percentage</th><th>Factor</th></tr><tr><td>Stijging van 20%</td><td>100% + 20% = 120%</td><td><b>1,2</b></td></tr><tr><td>Daling van 20%</td><td>100% &minus; 20% = 80%</td><td><b>0,8</b></td></tr></table></div>`
+`<h5 class="sub">Btw</h5>`
+`<div class="box"><h4>Belasting toegevoegde waarde</h4><p>Meestal is de <b>btw 21%</b>; voor veel levensmiddelen <b>9%</b>. <b>Exclusief</b> btw is zonder, <b>inclusief</b> btw is met de btw erbij.</p></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: een blik verf</h4><p>Exclusief btw kost het <b>&euro;38,60</b>. Wat is de prijs inclusief 21% btw?</p><div class="antwoord">100% + 21% = 121%, factor <b>1,21</b>. 1,21 &times; 38,60 = 46,706, dus <b>&euro;46,71</b>.</div></div>`
+`<div class="call warn"><b>Veelgemaakte fout:</b> bij een daling van 12,5% rekenen met <b>0,125</b>. Dan krijg je alleen de <b>korting</b>, niet de nieuwe prijs. Reken met 100% &minus; 12,5% = <b>87,5%</b>, factor 0,875.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Welke vermenigvuldigingsfactor hoort bij een daling van 20%?</p><p class="check-a">100% &minus; 20% = 80%, dus <b>0,8</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (1.1)</b><ul class="lst">
<li>Stijging: <b>100% + p%</b>. Daling: <b>100% &minus; p%</b>.</li>
<li><b>Factor</b> = nieuw percentage : 100.</li>
<li>Nieuwe waarde = <b>factor &times; oude waarde</b>.</li></ul></div>`},

{heading:'1.2 Procentuele toename en afname',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>het verschil tussen <b>absolute</b> en <b>procentuele toename</b></li>
<li>de procentuele <b>toename</b> en <b>afname</b> berekenen</li></ul></div>`
+`<h5 class="sub">Absoluut en procentueel</h5>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Absolute toename</h4><p>Het verschil in de <b>gewone eenheid</b>: mm, euro, personen.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Procentuele toename</h4><p>Het verschil <b>in procenten</b> van de oude waarde. Heet ook <b>relatieve toename</b>.</p></div></div>`
+`<div class="call reken"><b>Stappenplan: procentuele toename of afname</b><ol class="num">
<li>Bereken de toename: <b>nieuw &minus; oud</b>.</li>
<li>Deel door de <b>oude</b> waarde.</li>
<li>Doe <b>&times; 100%</b>. Rond af op <b>één decimaal</b>.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: neerslag in Nederland</h4><p>Gemiddeld per jaar: <b>733 mm</b> in 1930&ndash;1960 en <b>799 mm</b> in 1960&ndash;1990.</p><div class="antwoord">Absolute toename: 799 &minus; 733 = <b>66 mm</b>. Procentueel: 66 : 733 &times; 100% = 9,00&hellip;%, dus <b>9,0%</b>.</div></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: de huur</h4><p>De huur gaat van <b>&euro;425</b> naar <b>&euro;430</b>.</p><div class="antwoord">Toename: <b>&euro;5</b>. 5 : 425 &times; 100% = 1,176&hellip;%, dus <b>1,2%</b>.</div></div>`
+`<div class="call warn"><b>Veelgemaakte fout:</b> delen door de <b>nieuwe</b> waarde. Je vergelijkt altijd met hoe het <b>was</b>, dus met de <b>oude</b> waarde.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Hoe heet de procentuele toename nog meer?</p><p class="check-a">De <b>relatieve toename</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (1.2)</b><ul class="lst">
<li><b>Procentuele toename = toename : oude waarde &times; 100%</b>.</li>
<li>Procenten rond je af op <b>één decimaal</b>.</li>
<li><b>Absoluut</b> = in de eenheid, <b>relatief</b> = in procenten.</li></ul></div>`},

{heading:'1.3 Procenten en grote getallen',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>rekenen met <b>procenten</b> van <b>grote getallen</b></li>
<li>je antwoord geven in <b>woorden</b> of in <b>cijfers</b>, zoals gevraagd</li></ul></div>`
+`<h5 class="sub">Duizend, miljoen, miljard</h5>`
+`<div class="tblwrap"><table class="tbl"><tr><th>Woord</th><th>In cijfers</th></tr><tr><td><b>1 duizend</b></td><td>1000</td></tr><tr><td><b>1 miljoen</b></td><td>1 000 000</td></tr><tr><td><b>1 miljard</b></td><td>1 000 000 000</td></tr></table></div>`
+`<h5 class="sub">Wat vraagt de opgave?</h5>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>&ldquo;Hoeveel miljoen?&rdquo;</h4><p>Reken <b>met het woord</b> en geef het antwoord ook <b>in miljoen</b>.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>&ldquo;Schrijf in cijfers&rdquo;</h4><p>Schrijf het getal eerst <b>helemaal uit</b> en reken dan.</p></div></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: hoeveel miljoen volgen onderwijs?</h4><p>Nederland had in 2021 ongeveer <b>17,5 miljoen</b> inwoners; <b>24,1%</b> volgt onderwijs. Rond af op één decimaal.</p><div class="antwoord">0,241 &times; 17,5 miljoen = 4,2175 miljoen, dus <b>4,2 miljoen</b>.</div></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: Amsterdam, in cijfers</h4><p><b>5,1%</b> van de 17,5 miljoen woont in Amsterdam.</p><div class="antwoord">17,5 miljoen = <b>17 500 000</b>. 0,051 &times; 17 500 000 = <b>892 500</b> inwoners.</div></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Hoe schrijf je 4,5 miljoen in cijfers?</p><p class="check-a"><b>4 500 000</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (1.3)</b><ul class="lst">
<li><b>Miljoen</b> = 6 nullen, <b>miljard</b> = 9 nullen.</li>
<li>Geef je antwoord in de <b>vorm</b> die de vraag noemt.</li></ul></div>`},

{heading:'1.4 Terugrekenen naar 100%',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li><b>het geheel</b> (100%) berekenen als je een deel weet</li>
<li>de <b>oude prijs</b> berekenen na een stijging of daling</li></ul></div>`
+`<h5 class="sub">Het geheel berekenen</h5>`
+`<div class="box"><h4>Delen door de factor</h4><p>Op een school komen <b>255</b> leerlingen met het openbaar vervoer. Dat is <b>12,5%</b> van alle leerlingen. Bij 12,5% hoort factor <b>0,125</b>. Het geheel: 255 : 0,125 = <b>2040</b> leerlingen.</p></div>`
+`<h5 class="sub">De oude prijs</h5>`
+`<div class="call reken"><b>Stappenplan: terugrekenen naar de oude prijs</b><ol class="num">
<li>Welk <b>percentage</b> is de nieuwe prijs? Bij een stijging 100% + p%, bij een daling 100% &minus; p%.</li>
<li>Maak er een <b>vermenigvuldigingsfactor</b> van.</li>
<li><b>Deel</b> de nieuwe prijs door die factor.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: een tv in de opruiming</h4><p>De tv is <b>12,5%</b> goedkoper en kost nu <b>&euro;436</b>. Wat kostte hij eerst?</p><div class="antwoord">&euro;436 is 100% &minus; 12,5% = <b>87,5%</b>, factor 0,875. 436 : 0,875 = 498,285&hellip;, dus <b>&euro;498,29</b>.</div></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: exclusief btw</h4><p>Een hoofdtelefoon kost <b>&euro;84,95</b> inclusief 21% btw.</p><div class="antwoord">&euro;84,95 is <b>121%</b>, factor 1,21. 84,95 : 1,21 = 70,206&hellip;, dus <b>&euro;70,21</b> exclusief btw.</div></div>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Vooruit</h4><p>Oude prijs <b>&times;</b> factor = nieuwe prijs</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Terug</h4><p>Nieuwe prijs <b>:</b> factor = oude prijs</p></div></div>`
+`<div class="call waarom">Waarom niet gewoon 21% eraf halen? 21% van <b>&euro;84,95</b> is meer dan de btw, want de btw is 21% van de prijs <b>zonder</b> btw. Daarom <b>deel</b> je door 1,21.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">23 leden is 16,5% van een club. Hoe bereken je het totaal?</p><p class="check-a">23 <b>: 0,165</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (1.4)</b><ul class="lst">
<li>Terug naar 100%: <b>delen</b> door de factor.</li>
<li>Exclusief btw: prijs <b>: 1,21</b>.</li>
<li>Nooit het percentage er gewoon <b>afhalen</b>.</li></ul></div>`},

{heading:'1.5 Promille',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>wat <b>promille</b> is</li>
<li>het <b>promillage</b> berekenen en rekenen met promille</li></ul></div>`
+`<h5 class="sub">Per duizend</h5>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Procent %</h4><p><b>Per honderd</b>. 1% = 1/100, factor <b>0,01</b>.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Promille &permil;</h4><p><b>Per duizend</b>. 1&permil; = 1/1000, factor <b>0,001</b>.</p></div></div>`
+`<div class="call waarom">Waarom promille? Bij een <b>heel kleine</b> toename krijg je in procenten iets als 0,2%. In promille wordt dat <b>2&permil;</b>: dat leest makkelijker.</div>`
+`<div class="call reken"><b>Stappenplan: promillage berekenen</b><ol class="num">
<li>Bereken de <b>toename</b>.</li>
<li>Deel door de <b>oude</b> waarde.</li>
<li>Doe <b>&times; 1000&permil;</b> en rond af op <b>één decimaal</b>.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: inwoners van Assen</h4><p>Van <b>68 836</b> (2021) naar <b>68 979</b> (2022).</p><div class="antwoord">Toename: <b>143</b>. 143 : 68 836 &times; 1000&permil; = 2,077&hellip;&permil;, dus <b>2,1&permil;</b>.</div></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: 1,5&permil; van 126 600</h4><p>Bereken.</p><div class="antwoord">Factor: 1,5 : 1000 = <b>0,0015</b>. 0,0015 &times; 126 600 = 189,9, dus <b>190</b> inwoners (alleen hele mensen).</div></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Welke vermenigvuldigingsfactor hoort bij 1&permil;?</p><p class="check-a">1 : 1000 = <b>0,001</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (1.5)</b><ul class="lst">
<li><b>Promille</b> = per duizend, teken <b>&permil;</b>.</li>
<li>Promillage = toename : oud <b>&times; 1000&permil;</b>.</li>
<li>&ldquo;Welk <b>promillage</b>&rdquo; betekent hetzelfde als &ldquo;hoeveel promille&rdquo;.</li></ul></div>`},

{heading:'1.6 Exponentiële formule',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li><b>exponentiële toename</b> en <b>afname</b> herkennen</li>
<li>rekenen met de <b>exponentiële formule</b></li></ul></div>`
+`<h5 class="sub">Elk jaar hetzelfde percentage</h5>`
+`<div class="box"><h4>Groeifactor</h4><p>Je zet <b>&euro;300</b> op een spaarrekening met <b>5%</b> rente. Na 1 jaar heb je 105%: 300 &times; <b>1,05</b>. Na 2 jaar weer &times; 1,05, enzovoort. Na 6 jaar: 300 &times; 1,05 &times; 1,05 &times; 1,05 &times; 1,05 &times; 1,05 &times; 1,05 = 300 &times; <b>1,05<sup>6</sup></b> &asymp; <b>&euro;402,03</b>. Het getal 1,05 heet hier de <b>groeifactor</b>; de 6 is de <b>exponent</b>.</p></div>`
+`<div class="box"><h4>De exponentiële formule</h4><p><b>uitkomst = begingetal &times; groeifactor<sup>tijd</sup></b></p></div>`
+`<div class="call reken"><b>Stappenplan: exponentiële formule</b><ol class="num">
<li>Het <b>begingetal</b>: waar je mee begint.</li>
<li>De <b>groeifactor</b>: toename (100 + p) : 100, afname (100 &minus; p) : 100.</li>
<li>De <b>exponent</b>: het aantal jaren (of andere tijdstappen).</li>
<li>Reken uit met de <b>machttoets</b>.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: Lisa spaart</h4><p>Lisa zet <b>&euro;175</b> op een rekening met <b>4,2%</b> rente per jaar. Hoeveel staat er na <b>10 jaar</b>?</p><div class="antwoord">Groeifactor: 104,2 : 100 = <b>1,042</b>. 175 &times; 1,042<sup>10</sup> = 264,067&hellip;, dus <b>&euro;264,07</b>.</div></div>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Toename</h4><p>Groeifactor <b>groter dan 1</b>, bijvoorbeeld 1,042.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Afname</h4><p>Groeifactor <b>kleiner dan 1</b>: bij 2,8% daling is het <b>0,972</b>.</p></div></div>`
+`<div class="call warn"><b>Veelgemaakte fout:</b> rekenen met het <b>percentage zelf</b> (0,028) als groeifactor. De groeifactor is wat er <b>overblijft</b>: 97,2%, dus 0,972.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Wat is de groeifactor bij een toename van 5% per jaar?</p><p class="check-a"><b>1,05</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (1.6)</b><ul class="lst">
<li><b>uitkomst = begingetal &times; groeifactor<sup>tijd</sup></b>.</li>
<li>Toename p%: <b>(100 + p) : 100</b>. Afname p%: <b>(100 &minus; p) : 100</b>.</li>
<li>Gebruik de <b>machttoets</b>.</li></ul></div>`}
],
terms:[
['Vermenigvuldigingsfactor','Het getal waarmee je een prijs of aantal vermenigvuldigt om de nieuwe prijs of het nieuwe aantal te berekenen; je krijgt het door het nieuwe percentage door 100 te delen.',0],
['Inclusief btw','De prijs mét btw erbij.',0],
['Exclusief btw','De prijs zonder btw.',0],
['Btw','Belasting toegevoegde waarde; belasting die een bedrijf moet betalen over verkochte goederen of diensten, meestal 21% of 9%.',0],
['Procentuele toename','De toename van een waarde uitgedrukt in procenten van de oude waarde; ook wel relatieve toename genoemd.',1],
['Relatieve toename','Andere naam voor de procentuele toename.',1],
['Miljoen','1 000 000.',2],
['Miljard','1 000 000 000.',2],
['Terugrekenen naar 100%','De oude prijs of het oude aantal berekenen door de nieuwe waarde te delen door de vermenigvuldigingsfactor.',3],
['Promille','Per duizend, geschreven als ‰; gebruik je bij heel kleine toenames of afnames.',4],
['Promillage','Het aantal promille dat bij een toename of afname hoort.',4],
['Exponentiële formule','Formule van de vorm uitkomst = begingetal × groeifactor tot de macht tijd, gebruikt bij een vaste procentuele groei per periode.',5],
['Groeifactor','Het getal waarmee je vermenigvuldigt bij een exponentiële toename of afname, hoort bij het nieuwe percentage.',5],
['Exponent','Het getal dat aangeeft hoe vaak je met de groeifactor vermenigvuldigt; meestal het aantal jaren of perioden.',5]
],
cards:[
['Hoe bereken je het nieuwe percentage bij een stijging van 8%?','100% + 8% = 108%.',0],
['Hoe bereken je het nieuwe percentage bij een daling van 15%?','100% − 15% = 85%.',0],
['Hoeveel btw betaal je meestal, en hoeveel voor veel levensmiddelen?','Meestal 21%, voor veel levensmiddelen 9%.',0],
['Hoe bereken je de procentuele toename?','(toename : oude waarde) × 100%.',1],
['Door welke waarde deel je bij het berekenen van de procentuele toename: de oude of de nieuwe?','De oude waarde.',1],
['Hoeveel is 1 miljard in cijfers?','1 000 000 000.',2],
['Wat doe je als er in de vraag \'hoeveel miljoen\' staat?','Je gebruikt in je antwoord ook het woord miljoen; je hoeft het getal niet in cijfers te schrijven.',2],
['Hoe bereken je de oude prijs als je de nieuwe prijs en het percentage weet?','Je deelt de nieuwe prijs door de vermenigvuldigingsfactor.',3],
['Wat betekent promille?','Per duizend.',4],
['Welke vermenigvuldigingsfactor hoort bij 1‰?','1 : 1000 = 0,001.',4],
['Wat is de exponentiële formule?','uitkomst = begingetal × groeifactor tot de macht tijd.',5],
['Welke groeifactor hoort bij een toename van 3,7%?','1,037.',5],
['Welke groeifactor hoort bij een afname van 2,8%?','0,972.',5]
],
quiz:[
['Een broek kost €60 en wordt 20% duurder. Wat is het nieuwe percentage?',['80%','100%','120%','20%'],2,'Bij een stijging van 20% tel je op bij 100%: 100% + 20% = 120%.'],
['Welke vermenigvuldigingsfactor hoort bij een daling van 30%?',['1,30','0,30','0,70','0,03'],2,'100% − 30% = 70%, en 70 : 100 = 0,70.'],
['Een tv kost €490 exclusief 21% btw. Wat is de prijs inclusief btw?',['€411,90','€569,10','€592,90','€500,00'],2,'1,21 × 490 = 592,90.'],
['Wat betekent \'exclusief btw\'?',['De prijs met btw erbij','De prijs zonder btw','De helft van de btw','De btw zelf'],1,'Exclusief btw betekent zonder btw; je moet de btw er nog bij optellen.'],
['De huurprijs stijgt van €800 naar €824. Wat is de procentuele toename?',['2,4%','3,0%','24%','0,3%'],1,'Toename is €24. (24 : 800) × 100% = 3,0%.'],
['Door welke waarde deel je bij het berekenen van een procentuele afname?',['De nieuwe waarde','De oude waarde','Het verschil','100'],1,'Je deelt de afname altijd door de oude waarde.'],
['Hoeveel is 4,5 miljoen in cijfers?',['45 000','450 000','4 500 000','45 000 000'],2,'4,5 miljoen = 4 500 000.'],
['In de vraag staat: \'Hoeveel miljard is dat?\' Hoe schrijf je je antwoord?',['Altijd in cijfers','Met het woord miljard','In promille','Als percentage'],1,'Staat het woord miljard in de vraag, dan gebruik je dat woord ook in je antwoord.'],
['Een jas is 15% afgeprijsd en kost nu €68. Hoe bereken je de oude prijs?',['68 × 0,85','68 : 0,85','68 × 1,15','68 : 1,15'],1,'Nieuw percentage is 100% − 15% = 85%, vermenigvuldigingsfactor 0,85. Oude prijs = nieuwe prijs : vermenigvuldigingsfactor.'],
['Een woning kost nu €250 000, dat was 4% meer dan vorig jaar. Hoe bereken je de oude prijs?',['250 000 × 1,04','250 000 : 1,04','250 000 × 0,96','250 000 : 0,96'],1,'Nieuw percentage is 104%, vermenigvuldigingsfactor 1,04. Je deelt de nieuwe prijs door de vermenigvuldigingsfactor om de oude prijs te vinden.'],
['Wat betekent promille?',['Per honderd','Per duizend','Per miljoen','Per tien'],1,'Promille betekent per duizend en schrijf je als ‰.'],
['Het inwonertal stijgt van 68 836 naar 68 979. Hoeveel promille is dat ongeveer?',['0,2‰','2,1‰','21‰','143‰'],1,'Toename is 143. (143 : 68 836) × 1000‰ = 2,1‰.'],
['Welke formule hoort bij exponentiële groei?',['uitkomst = begingetal + groeifactor × tijd','uitkomst = begingetal × groeifactor^tijd','uitkomst = begingetal × tijd','uitkomst = groeifactor^begingetal'],1,'De exponentiële formule is uitkomst = begingetal × groeifactor tot de macht tijd.'],
['Welke groeifactor hoort bij een jaarlijkse rente van 3,7%?',['0,037','0,37','1,037','3,7'],2,'100% + 3,7% = 103,7%, en dat geeft groeifactor 1,037.'],
['Je zet €300 op een spaarrekening met 5% rente per jaar. Hoeveel staat er na 6 jaar?',['300 × 1,05 × 6','300 × 1,05^6','300 + 1,05^6','300 × 6^1,05'],1,'Bij exponentiële groei gebruik je de formule begingetal × groeifactor tot de macht tijd: 300 × 1,05^6.'],
['Een dorp heeft 10 655 inwoners en het aantal daalt jaarlijks met 2,8%. Welke groeifactor hoort hierbij?',['1,028','0,28','0,972','0,028'],2,'100% − 2,8% = 97,2%, dat geeft groeifactor 0,972.'],
['Wat is het verschil tussen procent en promille?',['Geen verschil','Procent is per honderd, promille is per duizend','Procent is per duizend, promille is per honderd','Promille kun je alleen bij geld gebruiken'],1,'Procent betekent per honderd, promille betekent per duizend.']
]
});
