import { registerChapter } from '../../../registry.js';

/* Rebuilt 2026-09-25 to the recipe of Economie TL4 H1 (change 6). Fixed:
   3.2 called 0,05 "the number after the = sign" (the book: the number in
   front of the variable, after the = sign), and 3.4 had the table formula
   the wrong way round (it is: bottom row = begingetal + rc x top row).
   Added from the book: choosing a formula by filling in (Jeroen, 3.4).
   The drawing is unchanged. Terms, cards and quiz unchanged. */
registerChapter('wiskunde|tl|3|3', {
title:'Formules en grafieken',
summary:[
{heading:'3.1 Lineair of niet',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>het verschil tussen een <b>lineaire grafiek</b> en een <b>vloeiende kromme</b></li></ul></div>`
+`<div class="box"><h4>Waar dit hoofdstuk over gaat</h4><p>Je werkt met <b>verbanden</b> tussen twee <b>variabelen</b>: <b>lineair</b> of niet, <b>formules met letters</b>, <b>regelmaat</b> in tabellen, en een <b>formule</b> maken bij een tabel of grafiek met de <b>richtingscoëfficiënt</b>.</p></div>`
+`<h5 class="sub">Recht of krom</h5>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Lineaire grafiek</h4><p>Een <b>rechte lijn</b>. Stijgt of daalt steeds <b>even snel</b>. Denk aan een taxirit: vast startbedrag plus een vast bedrag <b>per km</b>.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Vloeiende kromme</h4><p><b>Geen</b> rechte lijn. Stijgt of daalt steeds <b>sneller</b> of <b>langzamer</b>. Denk aan <b>rente</b> op een spaarrekening.</p></div></div>`
+`<div class="call reken"><b>Stappenplan: lineair of niet?</b><ol class="num">
<li>Bereken in de tabel de <b>toename</b> per stap.</li>
<li>Is de toename <b>steeds gelijk</b> (bij gelijke stappen)? Dan is het <b>lineair</b>.</li>
<li>Wordt de toename <b>groter</b> of <b>kleiner</b>? Dan is het een <b>vloeiende kromme</b>.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: kroos groeit</h4><p>t (dagen) = 0, 1, 2, 3 en oppervlakte O (m&sup2;) = <b>200, 300, 450, 675</b>.</p><div class="antwoord">Toenames: <b>100, 150, 225</b>. Ze worden steeds groter, dus de grafiek is een <b>vloeiende kromme</b>. Teken hem <b>vloeiend</b> door de punten, niet met rechte stukjes.</div></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Hoe ziet een lineaire grafiek eruit?</p><p class="check-a">Als een <b>rechte lijn</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (3.1)</b><ul class="lst">
<li><b>Lineair</b>: rechte lijn, steeds even snel.</li>
<li><b>Vloeiende kromme</b>: steeds sneller of langzamer.</li></ul></div>`},

{heading:'3.2 Lineaire grafiek bij een formule',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>van een <b>woordformule</b> een <b>formule met letters</b> maken</li>
<li>de <b>richtingscoëfficiënt</b> herkennen en een <b>lineaire grafiek</b> tekenen</li></ul></div>`
+`<h5 class="sub">Letters in plaats van woorden</h5>`
+`<div class="box"><h4>Variabelen</h4><p>Tussen inkomsten en tijd bestaat een <b>verband</b>: hoe langer je werkt, hoe meer je verdient. <b>inkomsten (&euro;) = 2,50 + 6 &times; tijd (uren)</b> schrijf je korter als <b>I = 2,50 + 6t</b>. Voor t kun je allerlei getallen invullen, en I verandert mee: het zijn allebei <b>variabelen</b>. Zet de <b>betekenis</b> en de <b>eenheden</b> eronder: &ldquo;Hierin is I de inkomsten in euro's en t de tijd in uren.&rdquo;</p></div>`
+`<h5 class="sub">De richtingscoëfficiënt</h5>`
+`<div class="box"><h4>Het getal vóór de letter</h4><p>In <b>K = 10 + 0,05t</b> is <b>10</b> het <b>begingetal</b> en <b>0,05</b> het <b>stijggetal</b>: het getal <b>vóór de variabele</b>. Vanaf nu heet het stijggetal de <b>richtingscoëfficiënt</b>, kort <b>rc</b>. In I = 35 &minus; 3t is de rc <b>&minus;3</b>. Een formule met een begingetal en een rc is een <b>lineaire formule</b>; de grafiek is een <b>rechte lijn</b>.</p></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: Karin werkt</h4><p>inkomsten (&euro;) = 4,50 + 3,43 &times; tijd (uren). Maak er een formule met letters van. Hoeveel verdient ze in <b>6 uur</b>?</p><div class="antwoord"><b>I = 4,50 + 3,43t</b>. Hierin is I de inkomsten in euro's en t de tijd in uren. 4,50 + 3,43 &times; 6 = <b>&euro;25,08</b>.</div></div>`
+`<div class="call warn"><b>Let op het minteken:</b> in I = 35 &minus; 3t hoort het minteken bij de 3. De rc is dus <b>&minus;3</b> en de grafiek <b>daalt</b>.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Wat is de rc in K = 10 + 0,05t?</p><p class="check-a"><b>0,05</b>, het getal vóór de t.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (3.2)</b><ul class="lst">
<li><b>Variabelen</b>: letters waar je verschillende getallen voor invult.</li>
<li><b>rc</b> = het getal vóór de variabele. <b>Begingetal</b> = het losse getal.</li>
<li>Zet altijd de <b>betekenis en eenheden</b> onder de formule.</li></ul></div>`},

{heading:'3.3 Regelmaat in tabellen',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>onderzoeken of er <b>regelmaat</b> in een tabel zit</li>
<li>de <b>rc</b> uit een tabel berekenen</li></ul></div>`
+`<h5 class="sub">Delen, niet alleen aftrekken</h5>`
+`<div class="box"><h4>Toename onder : toename boven</h4><p>In een tabel met <b>regelmaat</b> komt er per stap <b>boven</b> steeds evenveel <b>onder</b> bij. Die hoeveelheid per 1 stap is de <b>rc</b>: <b>toename onder : toename boven</b>.</p></div>`
+`<div class="call reken"><b>Stappenplan: regelmaat onderzoeken</b><ol class="num">
<li>Bereken tussen elke twee kolommen de toename <b>boven</b> en <b>onder</b>.</li>
<li>Maak steeds de deling <b>toename onder : toename boven</b>.</li>
<li>Komt er <b>steeds hetzelfde</b> uit? Dan is er regelmaat, en dat getal is de <b>rc</b>.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: een bak loopt vol</h4><p>t (minuten) = 0, 2, 3, 6 en I (m&sup3;) = <b>20, 40, 50, 80</b>.</p><div class="antwoord">20 : 2 = <b>10</b>, 10 : 1 = <b>10</b>, 30 : 3 = <b>10</b>. Steeds 10: er is <b>regelmaat</b> en de <b>rc is 10</b>.</div></div>`
+`<figure class='fig'><svg viewBox="0 0 380 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Tabel met de tijd in uren en het bedrag in euro, met pijlen die laten zien dat er per uur 1 bij de tijd komt en 3 bij het bedrag"><defs><marker id="wtl3h33arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--accent)"/></marker></defs><g stroke="var(--line)" stroke-width="1" fill="none"><path d="M85 58 H370 M85 96 H370 M85 134 H370"/><path d="M85 58 V134 M145 58 V134 M205 58 V134 M265 58 V134 M325 58 V134 M370 58 V134"/></g><g fill="var(--mut)" font-size="10" font-family="inherit"><text x="78" y="82" text-anchor="end">tijd (uur)</text><text x="78" y="120" text-anchor="end">bedrag (euro)</text></g><g fill="var(--txt)" font-size="12" font-family="inherit" text-anchor="middle"><text x="115" y="82">0</text><text x="175" y="82">1</text><text x="235" y="82">2</text><text x="295" y="82">3</text><text x="347" y="82">4</text><text x="115" y="120">5</text><text x="175" y="120">8</text><text x="235" y="120">11</text><text x="295" y="120">14</text><text x="347" y="120">17</text></g><g stroke="var(--accent)" stroke-width="1.5" fill="none" marker-end="url(#wtl3h33arrow)"><path d="M118 48 Q145 28 172 48"/><path d="M178 48 Q205 28 232 48"/><path d="M238 48 Q265 28 292 48"/><path d="M298 48 Q322 28 344 48"/><path d="M118 144 Q145 166 172 144"/><path d="M178 144 Q205 166 232 144"/><path d="M238 144 Q265 166 292 144"/><path d="M298 144 Q322 166 344 144"/></g><g fill="var(--accent)" font-size="10" font-weight="600" font-family="inherit" text-anchor="middle"><text x="145" y="26">+1</text><text x="205" y="26">+1</text><text x="265" y="26">+1</text><text x="321" y="26">+1</text><text x="145" y="184">+3</text><text x="205" y="184">+3</text><text x="265" y="184">+3</text><text x="321" y="184">+3</text></g></svg><figcaption>Elke stap van 1 uur hoort bij een stap van 3 euro. Die vaste toename is de regelmaat waar je de formule mee maakt.</figcaption></figure>`
+`<div class="call warn"><b>Veelgemaakte fout:</b> alleen naar de verschillen <b>onder</b> kijken (20, 10, 30) en zeggen dat er geen regelmaat is. De stappen <b>boven</b> zijn niet gelijk, dus je moet <b>delen</b>.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Met welke deling bereken je de rc uit een tabel?</p><p class="check-a"><b>toename onder : toename boven</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (3.3)</b><ul class="lst">
<li><b>rc = toename onder : toename boven</b>.</li>
<li>Steeds dezelfde uitkomst = <b>regelmaat</b>.</li></ul></div>`},

{heading:'3.4 Formule bij een tabel',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>een <b>lineaire formule</b> maken bij een tabel met regelmaat</li>
<li>controleren welke <b>formule</b> bij een tabel hoort</li></ul></div>`
+`<h5 class="sub">Van tabel naar formule</h5>`
+`<div class="box"><h4>De vorm</h4><p><b>variabele onder in de tabel = begingetal + rc &times; variabele boven in de tabel</b></p><p>Het <b>begingetal</b> hoort bij <b>t = 0</b>. Staat 0 niet in de tabel, dan reken je <b>terug</b>.</p></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: een kaars brandt af</h4><p>t (uren) = 2, 4, 7 en H (cm) = <b>20, 16, 10</b>.</p><div class="antwoord">Regelmaat: &minus;4 : 2 = &minus;2 en &minus;6 : 3 = &minus;2, dus <b>rc = &minus;2</b>. Elk uur wordt de kaars 2 cm korter, dus elk uur <b>terug</b> was hij 2 cm langer: bij t = 0 is H = 20 + 2 &times; 2 = <b>24</b>. Formule: <b>H = 24 &minus; 2t</b>. Hierin is H de hoogte in cm en t de tijd in uren.</div></div>`
+`<h5 class="sub">Welke formule klopt?</h5>`
+`<div class="call reken"><b>Stappenplan: een formule controleren</b><ol class="num">
<li>Vul het <b>eerste</b> getal uit de tabel in en reken uit.</li>
<li>Klopt het <b>niet</b>? Kies de volgende formule.</li>
<li>Klopt het wel? Vul het <b>volgende</b> getal in.</li>
<li>Pas als het bij <b>alle</b> getallen klopt, is het de juiste formule.</li></ol></div>`
+`<div class="call waarom">Waarom alle getallen? Een verkeerde formule kan bij <b>één</b> getal toevallig kloppen. Pas bij <b>allemaal</b> weet je het zeker.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Waar vind je het begingetal in een tabel?</p><p class="check-a">Bij <b>t = 0</b>. Staat dat er niet, dan reken je terug met de rc.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (3.4)</b><ul class="lst">
<li><b>onder = begingetal + rc &times; boven</b>.</li>
<li><b>Begingetal</b> bij t = 0, zo nodig terugrekenen.</li>
<li>Een formule klopt pas als <b>alle</b> getallen kloppen.</li></ul></div>`},

{heading:'3.5 Formule bij een grafiek',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>een <b>formule</b> maken bij een <b>lineaire grafiek</b></li></ul></div>`
+`<h5 class="sub">Aflezen</h5>`
+`<div class="box"><h4>De vorm</h4><p><b>variabele verticale as = begingetal + rc &times; variabele horizontale as</b></p></div>`
+`<div class="g2">`
+`<div class="box"><h4>Begingetal</h4><p>Waar de grafiek de <b>verticale as</b> snijdt, bij <b>t = 0</b>.</p></div>`
+`<div class="box"><h4>Richtingscoëfficiënt</h4><p>Hoeveel de grafiek <b>omhoog</b> of <b>omlaag</b> gaat bij <b>1 stap naar rechts</b>.</p></div></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: een boom groeit</h4><p>De grafiek van de hoogte H (m) begint bij <b>H = 1</b> en stijgt <b>0,5 per jaar</b>.</p><div class="antwoord"><b>H = 1 + 0,5t</b>. Hierin is H de hoogte in meters en t de tijd in jaren.</div></div>`
+`<div class="call warn"><b>Dalende grafiek?</b> Dan is de rc <b>negatief</b> en schrijf je een <b>minteken</b>: bijvoorbeeld I = 35 &minus; 3,5t.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Waar lees je het begingetal af in een grafiek?</p><p class="check-a">Waar de grafiek de <b>verticale as</b> snijdt (bij t = 0).</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (3.5)</b><ul class="lst">
<li><b>Begingetal</b>: de waarde bij t = 0.</li>
<li><b>rc</b>: toename of afname bij 1 stap naar rechts.</li>
<li>Dalend: <b>negatieve</b> rc.</li></ul></div>`},

{heading:'3.6 Richtingscoëfficiënt berekenen',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>de <b>rc</b> berekenen met <b>twee punten</b> op een grafiek</li></ul></div>`
+`<h5 class="sub">Twee punten</h5>`
+`<div class="box"><h4>Als aflezen niet precies lukt</h4><p><b>rc = toename verticaal : toename horizontaal</b></p></div>`
+`<div class="call reken"><b>Stappenplan: rc berekenen</b><ol class="num">
<li>Kies <b>twee punten</b> die je <b>precies</b> kunt aflezen.</li>
<li>Tel hoeveel stappen je <b>horizontaal</b> gaat.</li>
<li>Tel hoeveel stappen je <b>verticaal</b> gaat (omlaag is negatief).</li>
<li>Deel: <b>verticaal : horizontaal</b>.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: een zwembad loopt leeg</h4><p>De lijn gaat van <b>(0, 35)</b> naar <b>(10, 0)</b>.</p><div class="antwoord">10 naar rechts en 35 <b>omlaag</b>. rc = &minus;35 : 10 = <b>&minus;3,5</b>. Formule: <b>I = 35 &minus; 3,5t</b>.</div></div>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Zelfde rc</h4><p>De grafieken lopen <b>evenwijdig</b>.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Zelfde begingetal</h4><p>Ze beginnen in <b>hetzelfde punt</b> op de verticale as.</p></div></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Van A naar B ga je 4 stappen naar rechts en 3 omhoog. Wat is de rc?</p><p class="check-a">3 : 4 = <b>0,75</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (3.6)</b><ul class="lst">
<li><b>rc = verticaal : horizontaal</b>.</li>
<li>Kies punten die je <b>precies</b> kunt aflezen.</li>
<li>Zelfde rc = <b>evenwijdig</b>.</li></ul></div>`}
],
terms:[
['Lineaire grafiek','Een grafiek die een rechte lijn is en steeds even snel stijgt of daalt.',0],
['Vloeiende kromme','Een grafiek die geen rechte lijn is, maar steeds sneller of steeds langzamer stijgt of daalt.',0],
['Verband','Een relatie tussen twee grootheden, bijvoorbeeld tussen tijd en inkomsten.',1],
['Variabele','Een letter in een formule waarvoor je verschillende getallen kunt invullen.',1],
['Richtingscoëfficiënt (rc)','Het stijg- of daalgetal van een lineaire formule of grafiek; het getal waarmee de uitkomst per stap verandert.',1],
['Lineaire formule','Een formule met een begingetal en een richtingscoëfficiënt; de grafiek erbij is een rechte lijn.',1],
['Regelmaat','Als bij een gelijke toename van de ene variabele steeds dezelfde toename van de andere variabele hoort.',2],
['Begingetal','De waarde in een lineaire formule bij t = 0; het getal zonder variabele in de formule.',3],
['Evenwijdig','Twee lijnen die dezelfde richtingscoëfficiënt hebben en elkaar dus nooit snijden.',5],
['Toename verticaal','Het aantal eenheden dat een grafiek omhoog of omlaag gaat tussen twee punten.',5],
['Toename horizontaal','Het aantal eenheden dat een grafiek naar rechts gaat tussen twee punten.',5]
],
cards:[
['Wat is het verschil tussen een lineaire grafiek en een vloeiende kromme?','Een lineaire grafiek is een rechte lijn en stijgt/daalt steeds even snel; een vloeiende kromme stijgt of daalt steeds sneller of langzamer.',0],
['Wat voor grafiek hoort bij rente op een spaarrekening?','Een vloeiende kromme.',0],
['Wat is een variabele?','Een letter in een formule waarvoor je verschillende getallen kunt invullen.',1],
['Wat is de richtingscoëfficiënt in de formule K = 10 + 0,05t?','0,05.',1],
['Wat is een lineaire formule?','Een formule met een begingetal en een richtingscoëfficiënt; de grafiek is een rechte lijn.',1],
['Hoe bereken je de rc uit een tabel met regelmaat?','toename onder : toename boven.',2],
['Hoe herken je regelmaat in een tabel?','Bij een gelijke toename boven hoort steeds dezelfde toename onder.',2],
['Hoe vind je het begingetal bij een tabel met regelmaat?','Je berekent de waarde die bij t = 0 hoort.',3],
['Hoe controleer je of een formule bij een tabel hoort?','Je vult de getallen uit de tabel in de formule in en kijkt of de uitkomst klopt.',3],
['Waar lees je het begingetal af in een lineaire grafiek?','Bij het snijpunt van de grafiek met de verticale as (t = 0).',4],
['Hoe bereken je de rc met twee punten op een grafiek?','rc = toename verticaal : toename horizontaal.',5],
['Wat betekent het als twee grafieken dezelfde rc hebben?','Ze zijn evenwijdig.',5]
],
quiz:[
['Welke grafiek stijgt steeds even snel?',['Een vloeiende kromme','Een lineaire grafiek','Een cirkeldiagram','Een staafdiagram'],1,'Een lineaire grafiek is een rechte lijn en stijgt of daalt steeds met dezelfde snelheid.'],
['Bij een spaarrekening met samengestelde rente hoort welk soort grafiek?',['Een lineaire grafiek','Een vloeiende kromme','Een cirkel','Geen van deze'],1,'Bij rente-op-rente wordt de toename steeds groter, dat geeft een vloeiende kromme.'],
['Wat is de variabele in de formule I = 2,50 + 6t?',['Alleen I','Alleen t','I en t','2,50 en 6'],2,'Zowel I als t kunnen verschillende waarden aannemen, dus beide zijn variabelen.'],
['Wat is de richtingscoëfficiënt in de formule H = 24 − 2t?',['24','−2','2','t'],1,'De rc is het getal voor de variabele achter het =-teken, hier −2.'],
['Een formule heeft een begingetal en een richtingscoëfficiënt. Wat voor grafiek hoort hierbij?',['Een rechte lijn','Een vloeiende kromme','Een cirkel','Een boxplot'],0,'Een formule met begingetal en rc is een lineaire formule; de grafiek is een rechte lijn.'],
['In een tabel is de toename boven steeds 3 en de toename onder steeds 12. Wat is de rc?',['3','4','12','36'],1,'rc = toename onder : toename boven = 12 : 3 = 4.'],
['Bij t = 0, 2, 4 hoort B = 6, 10, 14. Is er regelmaat, en wat is de rc?',['Geen regelmaat','Regelmaat, rc = 2','Regelmaat, rc = 4','Regelmaat, rc = 6'],1,'Toename boven is steeds 2, toename onder steeds 4, dus rc = 4 : 2 = 2.'],
['In een tabel met regelmaat hoort bij t = 0 de waarde B = 8, en de rc is 3. Welke formule hoort hierbij?',['B = 3 + 8t','B = 8 + 3t','B = 8 − 3t','B = 8t'],1,'De formule is begingetal + rc × variabele: B = 8 + 3t.'],
['Hoe controleer je welke van twee mogelijke formules bij een tabel hoort?',['Je kijkt naar de kleur van de grafiek','Je vult waarden uit de tabel in en controleert de uitkomst','Je raadt het','Je telt de rijen van de tabel'],1,'Je vult voor de variabele telkens een getal uit de tabel in en controleert of de uitkomst bij alle waarden klopt.'],
['Een lineaire grafiek snijdt de verticale as bij 5 en stijgt met 2 per stap naar rechts. Welke formule hoort hierbij?',['B = 2 + 5t','B = 5 + 2t','B = 5 − 2t','B = 5t'],1,'Het begingetal is 5 (het snijpunt met de verticale as) en de rc is 2.'],
['Een grafiek gaat van punt (0, 12) naar punt (10, 0). Wat is de rc?',['1,2','−1,2','10','−10'],1,'rc = toename verticaal : toename horizontaal = −12 : 10 = −1,2.'],
['Twee grafieken hebben dezelfde richtingscoëfficiënt. Wat kun je hierover zeggen?',['Ze snijden elkaar altijd','Ze zijn evenwijdig','Ze hebben hetzelfde begingetal','Ze zijn allebei vloeiende krommen'],1,'Grafieken met dezelfde rc zijn evenwijdig en snijden elkaar dus nooit.'],
['Twee grafieken hebben hetzelfde begingetal. Wat betekent dat?',['Ze zijn evenwijdig','Ze hebben hetzelfde beginpunt op de verticale as','Ze zijn dezelfde lijn','Ze stijgen even snel'],1,'Hetzelfde begingetal betekent dat beide grafieken op hetzelfde punt de verticale as snijden.'],
['Wat is de rc van een dalende rechte lijn?',['Altijd 0','Altijd positief','Altijd negatief','Kan niet berekend worden'],2,'Bij een dalende lijn wordt de uitkomst kleiner als t toeneemt, dus is de rc negatief.'],
['Waar staat de letter t meestal voor in de formules van dit hoofdstuk?',['Temperatuur','Tijd','Toename','Totaal'],1,'In de meeste formules in dit hoofdstuk staat t voor de tijd.']
]
});
