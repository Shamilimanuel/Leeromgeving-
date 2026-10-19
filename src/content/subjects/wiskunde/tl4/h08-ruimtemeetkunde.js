import { registerChapter } from '../../../registry.js';

/* Rebuilt 2026-09-24 to the recipe of Economie TL4 H1 (change 6). Deel B
   (examentraining): headings stay unnumbered. Both drawings are unchanged;
   the coordinate drawing's caption said "y naar achteren" while the drawing
   says "naar voren", so the caption now matches. Terms, cards and quiz
   unchanged. */
registerChapter('wiskunde|tl|4|8', {
title:'Ruimtemeetkunde',
summary:[
{heading:'Ruimtefiguren en inhoud',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>de <b>inhoud</b> van <b>ruimtefiguren</b> berekenen met de examenformules</li>
<li>rekenen met de <b>vergrotingsfactor</b> bij <b>inhoud</b></li></ul></div>`
+`<div class="box"><h4>Waar dit hoofdstuk over gaat</h4><p>Je herhaalt <b>ruimtefiguren</b> en hun <b>inhoud</b>, <b>diagonalen</b> en <b>doorsneden</b>, <b>goniometrie in de ruimte</b>, <b>hoogtekaarten</b> en <b>coördinaten in de ruimte</b>.</p></div>`
+`<h5 class="sub">De inhoudsformules</h5>`
+`<div class="tblwrap"><table class="tbl"><tr><th>figuur</th><th>inhoud</th></tr><tr><td><b>prisma</b>, <b>cilinder</b></td><td>oppervlakte grondvlak &times; hoogte</td></tr><tr><td><b>piramide</b>, <b>kegel</b></td><td><b>1/3</b> &times; oppervlakte grondvlak &times; hoogte</td></tr><tr><td><b>bol</b></td><td>4/3 &times; &pi; &times; straal&sup3;</td></tr></table></div>`
+`<div class="call warn"><b>Je krijgt deze formules op het examen.</b> Wat je wel zelf moet weten: welke figuur het is, en wat het <b>grondvlak</b> en de <b>hoogte</b> zijn.</div>`
+`<figure class='fig'><svg viewBox="0 0 340 265" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="De zes ruimtefiguren: kubus, balk, prisma, piramide, cilinder en kegel"><g fill="var(--accent)" fill-opacity=".16" stroke="var(--txt)" stroke-width="1.5" stroke-linejoin="round" opacity=".9"><path d="M20 100 L64 100 L64 56 L20 56 Z"/><path d="M20 56 L34 42 L78 42 L64 56 Z"/><path d="M64 56 L78 42 L78 86 L64 100 Z"/><path d="M132 100 L188 100 L188 66 L132 66 Z"/><path d="M132 66 L146 52 L202 52 L188 66 Z"/><path d="M188 66 L202 52 L202 86 L188 100 Z"/><path d="M248 100 L292 100 L270 62 Z"/><path d="M248 100 L262 86 L306 86 L292 100 Z"/><path d="M292 100 L306 86 L284 48 L270 62 Z"/><path d="M26 222 L74 222 L57 168 Z"/><path d="M74 222 L88 208 L57 168 Z"/></g><g fill="none" stroke="var(--mut)" stroke-width="1.1" stroke-dasharray="4 3" opacity=".8"><path d="M26 222 L40 208"/><path d="M40 208 L88 208"/><path d="M40 208 L57 168"/></g><g fill="var(--accent)" fill-opacity=".16" stroke="var(--txt)" stroke-width="1.5" opacity=".9"><path d="M142 182 L142 222 A 24 9 0 0 0 190 222 L190 182 Z"/><ellipse cx="166" cy="182" rx="24" ry="9"/><path d="M254 222 L278 168 L302 222 Z"/><ellipse cx="278" cy="222" rx="24" ry="9"/></g><g fill="var(--txt)" font-size="10.5" font-family="inherit" text-anchor="middle"><text x="49" y="124">kubus</text><text x="167" y="124">balk</text><text x="277" y="124">prisma</text><text x="57" y="246">piramide</text><text x="166" y="246">cilinder</text><text x="278" y="246">kegel</text></g><g fill="var(--mut)" font-size="8.5" font-family="inherit" text-anchor="middle"><text x="49" y="136">6 vierkanten</text><text x="167" y="136">6 rechthoeken</text><text x="277" y="136">2 grondvlakken</text><text x="57" y="258">1 top</text><text x="166" y="258">2 cirkels</text><text x="278" y="258">1 cirkel + top</text></g></svg><figcaption>Zes ruimtefiguren die je uit je hoofd moet kunnen herkennen. Alleen de cilinder en de kegel hebben een gebogen zijvlak &mdash; daarom rollen die wel en de andere niet.</figcaption></figure>`
+`<h5 class="sub">Inhoud vergroten</h5>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Oppervlakte</h4><p>&times; <b>vergrotingsfactor&sup2;</b></p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Inhoud</h4><p>&times; <b>vergrotingsfactor&sup3;</b></p></div></div>`
+`<div class="call waarom">Waarom <b>tot de derde</b>? Een inhoud is <b>lengte &times; breedte &times; hoogte</b>, en alle <b>drie</b> worden ze met de vergrotingsfactor vermenigvuldigd. Terugrekenen doe je dus met de <b>derdemachtswortel</b> &#8731;.</div>`
+`<div class="voorbeeld"><h4>Voorbeeld: twee kuipen</h4><p>De kleine kuip heeft <b>6,2 liter</b> inhoud en een diameter van <b>20 cm</b>. De grote, gelijkvormige kuip heeft <b>21 liter</b>.</p><div class="antwoord">Vergrotingsfactor = &#8731;(21 : 6,2) &asymp; <b>1,50</b>. De grote kuip heeft een diameter van 1,50 &times; 20 &asymp; <b>30 cm</b>.</div></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Wat is de formule voor de inhoud van een piramide?</p><p class="check-a"><b>1/3 &times; oppervlakte grondvlak &times; hoogte</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li><b>Prisma</b> en <b>cilinder</b>: grondvlak &times; hoogte. <b>Piramide</b> en <b>kegel</b>: 1/3 daarvan.</li>
<li>Inhoud beeld = <b>vergrotingsfactor&sup3;</b> &times; inhoud origineel.</li>
<li>Terugrekenen met de <b>derdemachtswortel</b>.</li></ul></div>`},

{heading:'Diagonalen en doorsneden',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>een <b>lichaamsdiagonaal</b> berekenen</li>
<li>een <b>doorsnede</b> op <b>ware grootte</b> tekenen</li></ul></div>`
+`<h5 class="sub">Lichaamsdiagonaal</h5>`
+`<div class="box"><h4>Over drie ribben</h4><p>Een <b>lichaamsdiagonaal</b> loopt dwars door de figuur. Je berekent hem met de <b>verlengde stelling van Pythagoras</b>: <b>diagonaal&sup2; = ribbe&sup2; + ribbe&sup2; + ribbe&sup2;</b>.</p></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: lichaamsdiagonaal CE</h4><p>Balk ABCD EFGH: AB = <b>4 cm</b>, BC = <b>6 cm</b>, CG = <b>8 cm</b>.</p><div class="antwoord">CE&sup2; = 4&sup2; + 6&sup2; + 8&sup2; = 16 + 36 + 64 = 116, dus CE = &radic;116 &asymp; <b>10,8 cm</b>.</div></div>`
+`<h5 class="sub">Doorsneden</h5>`
+`<div class="term"><b>Diagonaalvlak</b><span>Een plat vlak dat schuin door een balk of kubus loopt, langs een diagonaal van het grondvlak.</span></div>`
+`<div class="call reken"><b>Stappenplan: een doorsnede op ware grootte</b><ol class="num">
<li>Bereken eerst de <b>onbekende zijden</b>, bijvoorbeeld met Pythagoras in een zijvlak.</li>
<li>Teken de doorsnede op <b>ware grootte</b>: de echte lengtes, niet zoals in de schuine tekening.</li>
<li>Zet alle <b>maten</b> en <b>letters</b> erbij.</li></ol></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Hoe bereken je een lichaamsdiagonaal?</p><p class="check-a">Met de <b>verlengde stelling van Pythagoras</b>, met drie ribben.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li><b>Lichaamsdiagonaal&sup2;</b> = ribbe&sup2; + ribbe&sup2; + ribbe&sup2;.</li>
<li>Een <b>doorsnede</b>: eerst de zijden berekenen, dan op <b>ware grootte</b> tekenen.</li></ul></div>`},

{heading:'Goniometrie in de ruimte',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>een <b>hoek</b> in een <b>ruimtefiguur</b> berekenen</li></ul></div>`
+`<h5 class="sub">Zoek de rechthoekige driehoek</h5>`
+`<div class="call reken"><b>Stappenplan: een hoek in de ruimte</b><ol class="num">
<li>Zoek een <b>rechthoekige driehoek</b> in een <b>zijvlak</b> of <b>diagonaalvlak</b> waar de hoek in zit.</li>
<li>Bereken de zijden die je nog mist, vaak met <b>Pythagoras</b> in het grondvlak.</li>
<li>Kies <b>SOS, CAS of TOA</b> en gebruik de <b>inverse</b> op je rekenmachine.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: &ang;CAG in een balk</h4><p>Balk ABCD EFGH: AB = <b>8 cm</b>, BC = <b>5 cm</b>, CG = <b>10 cm</b>. In driehoek ACG is de rechte hoek bij <b>C</b>.</p><div class="antwoord">Eerst AC in het grondvlak: &radic;(8&sup2; + 5&sup2;) = &radic;89 &asymp; <b>9,43 cm</b>. CG is <b>overstaand</b>, AC <b>aanliggend</b>: <b>TOA</b>. &ang;CAG = tan<sup>-1</sup>(10 / 9,43) &asymp; <b>47&deg;</b>.</div></div>`
+`<div class="call warn"><b>Rond tussendoor niet af.</b> Gebruik voor AC het getal op je rekenmachine, niet 9,43. Rond pas de hoek af, op <b>hele graden</b>.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Wat zoek je eerst om een hoek in een ruimtefiguur te berekenen?</p><p class="check-a">Een <b>rechthoekige driehoek</b> in een zijvlak of diagonaalvlak.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li>Zoek een <b>rechthoekige driehoek</b> met de hoek erin.</li>
<li>Ontbrekende zijden eerst met <b>Pythagoras</b>.</li>
<li>Dan <b>SOS, CAS of TOA</b>; rond pas aan het eind af.</li></ul></div>`},

{heading:'Hoogtekaarten en doorsneden',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>een <b>hoogtekaart</b> lezen</li>
<li>een <b>verticale doorsnede</b> van een route tekenen</li></ul></div>`
+`<h5 class="sub">Hoogtelijnen</h5>`
+`<div class="box"><h4>Wat zie je op de kaart?</h4><p>Op een <b>hoogtekaart</b> verbinden <b>hoogtelijnen</b> punten die op <b>dezelfde hoogte</b> liggen. Liggen de hoogtelijnen <b>dicht bij elkaar</b>, dan is het daar <b>steil</b>.</p></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: tussen twee hoogtelijnen</h4><p>De hoogtelijnen gaan van <b>300 m</b> tot <b>400 m</b> in stappen van <b>25 m</b>.</p><div class="antwoord">Een punt tussen de lijnen van 325 m en 350 m ligt op een hoogte <b>tussen 325 m en 350 m</b>.</div></div>`
+`<h5 class="sub">Verticale doorsnede</h5>`
+`<div class="box"><h4>Wat is het?</h4><p>Een <b>verticale doorsnede</b> is een schets van hoe de <b>hoogte</b> verandert langs een route, bijvoorbeeld een weg van <b>A</b> naar <b>B</b>.</p></div>`
+`<div class="call reken"><b>Stappenplan: een verticale doorsnede tekenen</b><ol class="num">
<li>Draai de kaart zo dat de route <b>horizontaal</b> ligt.</li>
<li>Teken onder het beginpunt een <b>verticale as</b> met dezelfde hoogtes als de kaart.</li>
<li>Zet een <b>stip</b> waar de route een hoogtelijn <b>snijdt</b>.</li>
<li>Trek vanuit elke stip een stippellijn <b>naar beneden</b> tot de juiste hoogte.</li>
<li>Verbind de punten met een <b>vloeiende kromme</b>.</li></ol></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Wat betekent het als hoogtelijnen dicht bij elkaar liggen?</p><p class="check-a">Dat het landschap daar <b>steil</b> is.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li><b>Hoogtelijnen</b> verbinden punten op dezelfde hoogte.</li>
<li><b>Dicht bij elkaar</b> = steil.</li>
<li>Een <b>verticale doorsnede</b> laat de hoogte langs een route zien.</li></ul></div>`},

{heading:'Co&ouml;rdinaten in de ruimte',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>de <b>coördinaten</b> van een punt in de ruimte opschrijven</li>
<li>het <b>midden van een ribbe</b> berekenen</li></ul></div>`
+`<h5 class="sub">Drie getallen</h5>`
+`<div class="box"><h4>Een punt in de ruimte</h4><p>In een <b>driedimensionaal assenstelsel</b> geef je een punt aan met <b>drie coördinaten</b>: <b>(x, y, z)</b>. De <b>oorsprong</b> is <b>(0, 0, 0)</b>. Tel vanuit de oorsprong de stappen in de <b>x-</b>, <b>y-</b> en <b>z-richting</b>.</p></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: een punt op een hoogtekaart</h4><p>Punt A ligt op de plek <b>(200, 600)</b> van het rooster, op een hoogte van <b>100 m</b>.</p><div class="antwoord">De coördinaten zijn <b>(200, 600, 100)</b>: de hoogte is de <b>z</b>.</div></div>`
+`<div class="call reken"><b>Het midden van een ribbe</b><ol class="num">
<li>Schrijf de coördinaten van de <b>twee eindpunten</b> op.</li>
<li>Neem per coördinaat het <b>gemiddelde</b>: (eerste + tweede) : 2.</li></ol></div>`
+`<figure class='fig'><svg viewBox="0 0 340 270" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Een assenstelsel in de ruimte met een x-as, y-as en z-as, en het punt P(4, 3, 2)"><g stroke="var(--txt)" stroke-width="1.8" fill="var(--txt)" opacity=".85"><path d="M150 190 H293"/><polygon points="293,186 303,190 293,194"/><path d="M150 190 V73"/><polygon points="146,73 150,63 154,73"/><path d="M150 190 L70 242"/><polygon points="73,246 61,248 68,238"/></g><g stroke="#e2564f" stroke-width="1.6" stroke-dasharray="5 4" fill="none"><path d="M150 190 H254"/><path d="M254 190 L194 229"/><path d="M194 229 V149"/></g><circle cx="194" cy="149" r="5" fill="#e2564f"/><g fill="var(--txt)" font-size="12" font-family="inherit"><text x="307" y="195">x</text><text x="52" y="252">y</text><text x="144" y="60">z</text><text x="202" y="145">P(4, 3, 2)</text><text x="136" y="204">O</text></g><g fill="var(--mut)" font-size="9" font-family="inherit"><text x="232" y="184" text-anchor="middle">4 naar rechts</text><text x="234" y="220">3 naar voren</text><text x="201" y="168">2 omhoog</text></g></svg><figcaption>In de ruimte heb je drie getallen nodig in plaats van twee: <b>x</b> naar rechts, <b>y</b> schuin naar voren en <b>z</b> omhoog. De stippellijnen laten zien hoe je bij P komt.</figcaption></figure>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Uit hoeveel getallen bestaan coördinaten in de ruimte?</p><p class="check-a">Uit <b>drie</b>: (x, y, z).</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li>Een punt in de ruimte: <b>(x, y, z)</b>, vanuit de <b>oorsprong</b> (0, 0, 0).</li>
<li>De <b>z</b> is de hoogte.</li>
<li>Midden van een ribbe: het <b>gemiddelde</b> van de coördinaten.</li></ul></div>`}
],
terms:[
['inhoud prisma / cilinder','inhoud = oppervlakte grondvlak &times; hoogte',0],
['inhoud kegel / piramide','inhoud = 1/3 &times; oppervlakte grondvlak &times; hoogte',0],
['inhoud bol','inhoud = 4/3 &times; &pi; &times; straal&sup3;',0],
['vergrotingsfactor (inhoud)','bij gelijkvormige ruimtefiguren: vergrotingsfactor = derdemachtswortel van (inhoud vergroting : inhoud origineel)',0],
['diagonaalvlak','een plat vlak dat schuin door een balk of kubus loopt, langs een diagonaal van het grondvlak',1],
['lichaamsdiagonaal','een lijnstuk dat van het ene hoekpunt van een ruimtefiguur dwars naar het tegenoverliggende hoekpunt loopt',1],
['verlengde stelling van Pythagoras','de stelling van Pythagoras toegepast met drie ribben, om een lichaamsdiagonaal te berekenen',1],
['doorsnede','het platte vlak dat ontstaat als je een ruimtefiguur (denkbeeldig) doorsnijdt',1],
['ware grootte','een tekening van een vlak of doorsnede met de werkelijke (juiste) afmetingen, niet vertekend',1],
['hoogtekaart','een kaart met hoogtelijnen die punten van gelijke hoogte met elkaar verbinden',3],
['hoogtelijn','een lijn op een hoogtekaart die punten van dezelfde hoogte verbindt',3],
['verticale doorsnede','een schets van het hoogteverloop van een route (bijvoorbeeld een weg) over een landschap',3],
['co&ouml;rdinaten in de ruimte','drie getallen (x, y, z) die de plaats van een punt in een driedimensionaal assenstelsel aangeven',4],
['oorsprong','het punt (0, 0, 0) waar de drie assen elkaar snijden',4],
['SOS-CAS-TOA in de ruimte','de goniometrische verhoudingen sinus, cosinus en tangens, toegepast op een rechthoekige driehoek in een zijvlak of diagonaalvlak van een ruimtefiguur',2]
],
cards:[
['Wat is de formule voor de inhoud van een prisma?','inhoud prisma = oppervlakte grondvlak &times; hoogte.',0],
['Wat is de formule voor de inhoud van een piramide?','inhoud piramide = 1/3 &times; oppervlakte grondvlak &times; hoogte.',0],
['Wat is de formule voor de inhoud van een bol?','inhoud bol = 4/3 &times; &pi; &times; straal&sup3;.',0],
['Hoe bereken je de vergrotingsfactor als je de inhoud van origineel en vergroting weet?','vergrotingsfactor = derdemachtswortel van (inhoud vergroting : inhoud origineel).',0],
['Wat is een diagonaalvlak?','Een plat vlak dat schuin door een balk of kubus loopt, langs een diagonaal van het grondvlak.',1],
['Hoe bereken je een lichaamsdiagonaal?','Met de verlengde stelling van Pythagoras, met behulp van drie ribben.',1],
['Wat teken je bij een doorsnede die géén diagonaalvlak is, nadat je de onbekende zijden hebt berekend?','De doorsnede op ware grootte, met alle maten en letters erbij.',1],
['Wat zoek je eerst om een hoek in een ruimtefiguur te berekenen?','Een rechthoekige driehoek in een zijvlak of diagonaalvlak van de figuur.',2],
['Wat geven hoogtelijnen op een hoogtekaart aan?','Punten die op dezelfde hoogte liggen.',3],
['Wat betekent het als hoogtelijnen dicht bij elkaar liggen?','Dat het landschap daar steil is.',3],
['Wat is een verticale doorsnede van een landschap?','Een schets van het hoogteverloop van een route (bijvoorbeeld een weg) van punt A naar punt B.',3],
['Uit hoeveel getallen bestaan co&ouml;rdinaten in de ruimte?','Uit drie getallen (x, y, z).',4],
['Wat zijn de co&ouml;rdinaten van de oorsprong?','(0, 0, 0).',4],
['Twee kuipen zijn gelijkvormig met inhoud 6,2 L en 21 L. Wat is de vergrotingsfactor?','&#8731;(21 : 6,2) &asymp; 1,50.',0],
['Wat is de formule voor de inhoud van een kegel?','inhoud kegel = 1/3 &times; oppervlakte grondvlak &times; hoogte.',0]
],
quiz:[
['Wat is de formule voor de inhoud van een cilinder?',['oppervlakte grondvlak &times; hoogte','1/3 &times; oppervlakte grondvlak &times; hoogte','4/3 &times; &pi; &times; straal&sup3;','&pi; &times; straal&sup2;'],0,'inhoud cilinder = oppervlakte grondvlak &times; hoogte.'],
['Wat is de formule voor de inhoud van een bol?',['4/3 &times; &pi; &times; straal&sup2;','4/3 &times; &pi; &times; straal&sup3;','1/3 &times; &pi; &times; straal&sup3;','&pi; &times; straal&sup3;'],1,'inhoud bol = 4/3 &times; &pi; &times; straal&sup3;.'],
['Twee gelijkvormige kuipen hebben een inhoud van 6,2 L en 21 L. Wat is de vergrotingsfactor (afgerond op twee decimalen)?',['1,50','3,39','1,17','14,80'],0,'vergrotingsfactor = &#8731;(21 : 6,2) = &#8731;3,387 &asymp; 1,50.'],
['De kleine kuip heeft een diameter van 20 cm en de vergrotingsfactor is 1,50. Wat is de diameter van de grote kuip (afgerond op hele centimeters)?',['21 cm','30 cm','13 cm','45 cm'],1,'1,50 &times; 20 = 30 cm.'],
['Balk ABCD EFGH heeft AB = 4 cm, BC = 6 cm en CG = 8 cm. Wat is rhz&sup2; in het grondvlak (AB en BC)?',['10','52','100','24'],1,'rhz&sup2; = 4&sup2; + 6&sup2; = 16 + 36 = 52.'],
['Vervolg: hoe lang is de lichaamsdiagonaal CE (afgerond op &eacute;&eacute;n decimaal)?',['7,2 cm','10,8 cm','13,4 cm','116,0 cm'],1,'sz&sup2; = 52 + 8&sup2; = 116, dus CE = &radic;116 &asymp; 10,8 cm.'],
['Wat is een diagonaalvlak?',['Een cirkelvormig vlak','Een plat vlak dat schuin door een balk of kubus loopt, langs een diagonaal van het grondvlak','Het bovenvlak van een balk','Een vlak loodrecht op het grondvlak door het midden'],1,'Een diagonaalvlak loopt schuin door de figuur, langs een diagonaal van het grondvlak.'],
['Wat zoek je eerst om een hoek in een balk te berekenen, zoals &ang;CAG?',['De oppervlakte van het grondvlak','Een rechthoekige driehoek in een zijvlak of diagonaalvlak','De inhoud van de balk','Het aantal ribben'],1,'Om een hoek in een ruimtefiguur te berekenen, zoek je eerst een rechthoekige driehoek in een zij- of diagonaalvlak.'],
['Wat geven hoogtelijnen op een hoogtekaart aan?',['De grens tussen land en water','Punten die op dezelfde hoogte liggen','De route van een weg','De symmetrieas van het landschap'],1,'Hoogtelijnen verbinden punten die op dezelfde hoogte liggen.'],
['Wat betekent het als hoogtelijnen ver uit elkaar liggen?',['Het landschap is daar steil','Het landschap is daar vlak(ker)','Er is daar water','De kaart is daar fout'],1,'Hoe verder de hoogtelijnen uit elkaar liggen, hoe vlakker (minder steil) het landschap is.'],
['Wat teken je bij een verticale doorsnede van een landschap?',['Een bovenaanzicht van de route','Een schets van het hoogteverloop van de route','Een cirkeldiagram van de hoogtes','Een boxplot van de hoogtes'],1,'Een verticale doorsnede laat het verloop van de hoogte langs een route zien.'],
['Wat zijn de co&ouml;rdinaten van de oorsprong in een driedimensionaal assenstelsel?',['(1, 1, 1)','(0, 0, 0)','(0, 0)','Er is geen vaste oorsprong'],1,'De oorsprong heeft altijd co&ouml;rdinaten (0, 0, 0).'],
['Een punt op een hoogtekaart ligt op positie (200, 600) op het rooster en op een hoogte van 100 m. Wat zijn de 3D-co&ouml;rdinaten van dit punt?',['(100, 200, 600)','(200, 600, 100)','(600, 200, 100)','(200, 100, 600)'],1,'De eerste twee getallen zijn de plaats op het rooster (x, y), het derde getal is de hoogte (z): (200, 600, 100).'],
['Waarmee bereken je de lengte van een lichaamsdiagonaal in een balk?',['De gewone stelling van Pythagoras met &eacute;&eacute;n zijvlak','De verlengde stelling van Pythagoras met drie ribben','De sinusregel','De vergrotingsfactor'],1,'Voor een lichaamsdiagonaal gebruik je de verlengde stelling van Pythagoras (met drie ribben achter elkaar).'],
['Een kegel heeft een grondvlak met oppervlakte 20 cm&sup2; en een hoogte van 9 cm. Wat is de inhoud?',['60 cm&sup3;','180 cm&sup3;','20 cm&sup3;','9 cm&sup3;'],0,'inhoud kegel = 1/3 &times; 20 &times; 9 = 60 cm&sup3;.']
]
});
