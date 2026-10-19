import { registerChapter } from '../../../registry.js';

/* Rebuilt 2026-09-24 to the recipe of Economie TL4 H1 (change 6). Added
   from the book: the grid-paper rule "2 hokjes naar rechts, 1 omhoog"
   (8.1), the diagonal BG of a 7 by 5 side face (8.3), and the calculator's
   last-answer memory (8.5). The drawing is unchanged. Terms, cards and quiz
   unchanged. */
registerChapter('wiskunde|tl|2|8', {
title:'Ruimtemeetkunde',
summary:[
{heading:'8.1 Ruimtelijk tekenen',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>een <b>kubus</b> en een <b>balk</b> tekenen op <b>roosterpapier</b></li>
<li>tekenen in <b>perspectief</b> met een <b>verdwijnpunt</b></li></ul></div>`
+`<div class="box"><h4>Waar dit hoofdstuk over gaat</h4><p>Je tekent <b>ruimtefiguren</b> op roosterpapier en in <b>perspectief</b>, je tekent <b>aanzichten</b> en <b>doorsneden</b>, en je berekent de <b>inhoud</b> van een prisma, cilinder, piramide en kegel.</p></div>`
+`<h5 class="sub">Op roosterpapier</h5>`
+`<div class="box"><h4>Ribben naar achteren zijn korter</h4><p>In een tekening van een ruimtefiguur kloppen de maten <b>niet</b> helemaal: ribben die <b>naar achteren</b> lopen teken je <b>korter</b>. Daarvoor zijn vaste <b>afspraken</b>.</p></div>`
+`<div class="call reken"><b>Stappenplan: een balk op roosterpapier</b><ol class="num">
<li>Maak een <b>schets</b> met de letters en maten.</li>
<li>Teken het <b>voorvlak</b> op <b>ware grootte</b>.</li>
<li>Tel vanuit elk hoekpunt <b>2 hokjes naar rechts</b> en <b>1 hokje omhoog</b> en zet daar een punt.</li>
<li>Teken de ribben naar die punten en maak de balk af. Ribben die je in het echt <b>niet ziet</b>, teken je <b>gestippeld</b>.</li>
<li>Zet de <b>letters</b> en <b>maten</b> erbij.</li></ol></div>`
+`<h5 class="sub">Perspectief</h5>`
+`<div class="box"><h4>Het verdwijnpunt</h4><p>Treinrails lopen in het echt <b>evenwijdig</b>, maar op een foto komen ze samen in één punt op de <b>horizon</b>: het <b>verdwijnpunt</b>. De horizon ligt op <b>ooghoogte</b>. <b>Verticale</b> lijnen blijven verticaal.</p></div>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Roosterpapier</h4><p>Ribben naar achteren blijven <b>evenwijdig</b>.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Perspectief</h4><p>Lijnen naar achteren gaan naar het <b>verdwijnpunt</b>. Het lijkt meer op <b>echt</b>.</p></div></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Hoeveel hokjes tel je op roosterpapier voor een ribbe naar achteren?</p><p class="check-a"><b>2 naar rechts</b> en <b>1 omhoog</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (8.1)</b><ul class="lst">
<li>Voorvlak op <b>ware grootte</b>, ribben naar achteren <b>korter</b>.</li>
<li>Onzichtbare ribben <b>gestippeld</b>.</li>
<li><b>Perspectief</b>: lijnen naar achteren gaan naar het <b>verdwijnpunt</b> op de horizon.</li></ul></div>`},

{heading:'8.2 Aanzichten',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li><b>aanzichten</b> tekenen van een bouwwerk</li>
<li>met een <b>bovenaanzicht</b> het aantal <b>kubussen</b> tellen</li></ul></div>`
+`<h5 class="sub">Recht van één kant</h5>`
+`<div class="box"><h4>Wat is een aanzicht?</h4><p>Een <b>aanzicht</b> is wat je ziet als je <b>recht</b> van één kant naar een bouwwerk kijkt. Het is een <b>vlakke figuur</b>. Meestal teken je er drie:</p></div>`
+`<div class="g3">`
+`<div class="box"><h4>Vooraanzicht</h4><p>Recht van <b>voren</b>.</p></div>`
+`<div class="box"><h4>Zijaanzicht</h4><p>Recht van <b>rechts</b> (of links).</p></div>`
+`<div class="box"><h4>Bovenaanzicht</h4><p>Recht van <b>boven</b>.</p></div></div>`
+`<figure class='fig'><svg viewBox="0 0 300 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Een figuur van blokken met daarnaast het vooraanzicht, bovenaanzicht en zijaanzicht"><g fill="var(--accent)" fill-opacity=".18" stroke="var(--txt)" stroke-width="1.4" stroke-linejoin="round" opacity=".9"><path d="M24 90 L64 90 L64 50 L24 50 Z"/><path d="M24 50 L40 34 L80 34 L64 50 Z"/><path d="M64 50 L80 34 L80 74 L64 90 Z"/><path d="M64 90 L104 90 L104 70 L64 70 Z"/><path d="M64 70 L80 54 L120 54 L104 70 Z"/><path d="M104 70 L120 54 L120 74 L104 90 Z"/></g><text x="72" y="110" fill="var(--mut)" font-size="9" font-family="inherit" text-anchor="middle">de figuur</text><g fill="var(--accent)" fill-opacity=".16" stroke="var(--accent)" stroke-width="1.7" stroke-linejoin="round"><path d="M20 150 L60 150 L60 170 L100 170 L100 190 L20 190 Z"/><rect x="130" y="170" width="80" height="20"/><rect x="230" y="150" width="20" height="40"/></g><path d="M170 170 V190" stroke="var(--accent)" stroke-width="1.1" stroke-dasharray="3 3" fill="none"/><g fill="var(--txt)" font-size="10" font-weight="600" font-family="inherit" text-anchor="middle"><text x="60" y="208">vooraanzicht</text><text x="170" y="208">bovenaanzicht</text><text x="240" y="208">zijaanzicht</text></g><g fill="var(--mut)" font-size="8.5" font-family="inherit" text-anchor="middle"><text x="60" y="222">van voren</text><text x="170" y="222">van boven</text><text x="240" y="222">van opzij</text></g></svg><figcaption>Een aanzicht is een <b>plat</b> plaatje: je tekent alleen de omtrek van wat je vanuit die richting ziet, zonder diepte.</figcaption></figure>`
+`<h5 class="sub">Kubussen tellen</h5>`
+`<div class="call reken"><b>Stappenplan: kubussen tellen met het bovenaanzicht</b><ol class="num">
<li>Teken het <b>bovenaanzicht</b>.</li>
<li>Schrijf in elk vakje hoeveel kubussen er <b>op elkaar</b> staan.</li>
<li>Tel alle <b>getallen</b> bij elkaar op.</li></ol></div>`
+`<div class="call warn"><b>Kijk recht, niet schuin.</b> Een aanzicht is <b>plat</b>: je tekent geen diepte en geen perspectief.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Hoe tel je met een bovenaanzicht hoeveel kubussen een bouwwerk heeft?</p><p class="check-a">Schrijf in elk vakje hoeveel kubussen er <b>op elkaar</b> staan en tel die getallen <b>op</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (8.2)</b><ul class="lst">
<li><b>Vooraanzicht</b>, <b>zijaanzicht</b>, <b>bovenaanzicht</b>: recht van één kant.</li>
<li>Een aanzicht is een <b>vlakke</b> figuur.</li>
<li>Getallen in het bovenaanzicht <b>optellen</b> = aantal kubussen.</li></ul></div>`},

{heading:'8.3 Doorsnede',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>wat een <b>doorsnede</b> is</li>
<li>een <b>diagonaal</b> op een balk berekenen en een doorsnede op <b>ware grootte</b> tekenen</li></ul></div>`
+`<h5 class="sub">Doorsnijden</h5>`
+`<div class="box"><h4>Een plat snijvlak</h4><p>Snijd je een <b>champignon</b> of een ander voorwerp door, dan krijg je een <b>plat snijvlak</b>: de <b>doorsnede</b>. Een doorsnede is altijd een <b>vlakke figuur</b>. Snijd je op een <b>andere manier</b>, dan ziet de doorsnede er <b>anders</b> uit, zoals bij een <b>lengtedoorsnede</b> van een paprika.</p></div>`
+`<h5 class="sub">Diagonalen op een balk</h5>`
+`<div class="box"><h4>Pythagoras in een zijvlak</h4><p>Een <b>diagonaal</b> van een zijvlak ligt in een <b>rechthoek</b>. Die rechthoek teken je apart als <b>schets</b>, en dan gebruik je de <b>stelling van Pythagoras</b>.</p></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: diagonaal BG</h4><p>BG ligt in zijvlak BCGF, een rechthoek van <b>7 cm</b> bij <b>5 cm</b>.</p><div class="antwoord">rhz&sup2; = 49, rhz&sup2; = 25, sz&sup2; = <b>74</b>. BG = &radic;74 &asymp; <b>8,6 cm</b>.</div></div>`
+`<div class="call reken"><b>Stappenplan: doorsnede op ware grootte</b><ol class="num">
<li>Welke vorm heeft de doorsnede? Vaak een <b>rechthoek</b>.</li>
<li>Bereken de zijden die je nog niet weet, met <b>Pythagoras</b> in een <b>schets</b>.</li>
<li>Teken de doorsnede met de <b>echte maten</b>.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: doorsnede DBFH</h4><p>Het grondvlak van de balk is ABCD met <b>AB = 2 cm</b> en <b>AD = 3 cm</b>. DBFH is een rechthoek.</p><div class="antwoord">Diagonaal BD: rhz&sup2; = 4, rhz&sup2; = 9, sz&sup2; = 13. BD = &radic;13 &asymp; <b>3,6 cm</b>. Met BD en de hoogte van de balk teken je DBFH op ware grootte.</div></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Is een doorsnede een vlakke figuur of een ruimtefiguur?</p><p class="check-a">Een <b>vlakke</b> figuur.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (8.3)</b><ul class="lst">
<li><b>Doorsnede</b> = het platte snijvlak.</li>
<li>Diagonaal van een vlak: <b>Pythagoras</b> in een schets.</li>
<li>Op <b>ware grootte</b> = met de echte maten.</li></ul></div>`},

{heading:'8.4 Inhoud prisma en cilinder',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>de <b>inhoud</b> van een <b>prisma</b> en een <b>cilinder</b> berekenen</li></ul></div>`
+`<h5 class="sub">Dezelfde formule</h5>`
+`<div class="box"><h4>Grondvlak keer hoogte</h4><p><b>inhoud = oppervlakte grondvlak &times; hoogte</b></p><p>Bij een <b>prisma</b> is het grondvlak vaak een <b>driehoek</b>, bij een <b>cilinder</b> een <b>cirkel</b>.</p></div>`
+`<div class="call reken"><b>Stappenplan: inhoud prisma of cilinder</b><ol class="num">
<li>Welke vorm heeft het <b>grondvlak</b>?</li>
<li>Bereken de <b>oppervlakte van het grondvlak</b>.</li>
<li>Vermenigvuldig met de <b>hoogte</b>.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: een driehoekig prisma</h4><p>Grondvlak: zijde <b>4 cm</b>, hoogte <b>3 cm</b>. Het prisma is <b>5 cm</b> hoog.</p><div class="antwoord">Grondvlak: 0,5 &times; 4 &times; 3 = <b>6 cm&sup2;</b>. Inhoud: 6 &times; 5 = <b>30 cm&sup3;</b>.</div></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: een cilinder</h4><p>Diameter <b>4 cm</b>, hoogte <b>5 cm</b>.</p><div class="antwoord">Straal: 4 : 2 = <b>2 cm</b>. Grondvlak: &pi; &times; 2&sup2; = 12,566&hellip; cm&sup2;. Inhoud: 12,566&hellip; &times; 5 &asymp; <b>62,8 cm&sup3;</b>.</div></div>`
+`<div class="call warn"><b>Twee keer hoogte?</b> Bij een driehoekig prisma heeft de <b>driehoek</b> een hoogte én het <b>prisma</b>. Gebruik de eerste voor het grondvlak en de tweede voor de inhoud.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Welke formule hoort bij de inhoud van een cilinder?</p><p class="check-a"><b>oppervlakte grondvlak &times; hoogte</b>; het grondvlak is een cirkel.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (8.4)</b><ul class="lst">
<li><b>Prisma</b> en <b>cilinder</b>: grondvlak &times; hoogte.</li>
<li>Cilinder: grondvlak = <b>&pi; &times; straal&sup2;</b>.</li>
<li>Inhoud in <b>cm&sup3;</b>.</li></ul></div>`},

{heading:'8.5 Inhoud piramide en kegel',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>de <b>inhoud</b> van een <b>piramide</b> en een <b>kegel</b> berekenen</li></ul></div>`
+`<h5 class="sub">Een derde</h5>`
+`<div class="box"><h4>&#8531; &times; grondvlak &times; hoogte</h4><p><b>inhoud = &#8531; &times; oppervlakte grondvlak &times; hoogte</b></p><p>Die formule geldt voor een <b>piramide</b> én een <b>kegel</b>. De <b>hoogte</b> is de afstand van de <b>top</b> tot het <b>grondvlak</b>.</p></div>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Prisma en cilinder</h4><p>grondvlak &times; hoogte</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Piramide en kegel</h4><p><b>&#8531;</b> &times; grondvlak &times; hoogte</p></div></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: een piramide</h4><p>Grondvlak <b>8 cm</b> bij <b>6 cm</b>, hoogte <b>7 cm</b>.</p><div class="antwoord">Grondvlak: 8 &times; 6 = <b>48 cm&sup2;</b>. Inhoud: &#8531; &times; 48 &times; 7 = <b>112 cm&sup3;</b>.</div></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: een kegelvormige kaars</h4><p>Diameter <b>12 cm</b>, hoogte <b>13 cm</b>. Rond af op hele cm&sup3;.</p><div class="antwoord">Straal: 12 : 2 = <b>6 cm</b>. Grondvlak: &pi; &times; 6&sup2; = 113,097&hellip; cm&sup2;. Inhoud: &#8531; &times; 113,097&hellip; &times; 13 = 490,088&hellip;, dus <b>490 cm&sup3;</b>.</div></div>`
+`<div class="call waarom">Waarom de puntjes (&hellip;)? Je <b>rekenmachine onthoudt</b> je laatste antwoord. Reken daarmee verder in plaats van het afgeronde getal over te typen; dan rond je pas <b>aan het eind</b> af.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Wat is de hoogte van een piramide?</p><p class="check-a">De afstand van de <b>top</b> tot het <b>grondvlak</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (8.5)</b><ul class="lst">
<li><b>Piramide</b> en <b>kegel</b>: &#8531; &times; grondvlak &times; hoogte.</li>
<li>De <b>hoogte</b>: van de top recht naar het grondvlak.</li>
<li>Rond pas <b>aan het eind</b> af.</li></ul></div>`}
],
terms:[
['Perspectief','Een manier van tekenen waarbij lijnen die van je af lopen samenkomen in een verdwijnpunt, zodat de tekening ruimtelijk oogt.',0],
['Verdwijnpunt','Het punt op de horizon waarin evenwijdige lijnen die van je af lopen in een perspectieftekening samenkomen.',0],
['Horizon','De lijn op ooghoogte waarop het verdwijnpunt van een perspectieftekening ligt.',0],
['Aanzicht','De vlakke figuur die je ziet als je recht van één kant naar een ruimtefiguur kijkt.',1],
['Vooraanzicht','Het aanzicht van een ruimtefiguur van de voorkant gezien.',1],
['Bovenaanzicht','Het aanzicht van een ruimtefiguur van bovenaf gezien.',1],
['Doorsnede','Het platte vlak dat ontstaat als je een ruimtefiguur doorsnijdt.',2],
['Ware grootte','De werkelijke, onvervormde afmetingen van een figuur, zoals je die op een aparte tekening precies kunt weergeven.',2],
['Prisma','Een ruimtefiguur met twee evenwijdige, even grote grondvlakken en rechthoekige zijvlakken.',3],
['Cilinder','Een ruimtefiguur met twee evenwijdige, even grote cirkelvormige grondvlakken.',3],
['Piramide','Een ruimtefiguur met een veelhoekig grondvlak en zijvlakken die samenkomen in één top.',4],
['Kegel','Een ruimtefiguur met een cirkelvormig grondvlak en een zijvlak dat samenkomt in één top.',4]
],
cards:[
['Waar komen evenwijdige lijnen samen in een perspectieftekening?','In het verdwijnpunt op de horizon.',0],
['Op welke hoogte ligt de horizon in een perspectieftekening?','Op ooghoogte.',0],
['Wat is een aanzicht van een ruimtefiguur?','De vlakke figuur die je ziet als je recht van één kant naar de ruimtefiguur kijkt.',1],
['Welke drie aanzichten teken je meestal van een bouwwerk?','Het vooraanzicht, het zijaanzicht en het bovenaanzicht.',1],
['Wat is een doorsnede?','Het platte vlak dat ontstaat als je een ruimtefiguur doorsnijdt.',2],
['Welke stelling gebruik je vaak om de zijden van een doorsnede te berekenen?','De stelling van Pythagoras.',2],
['Wat is de formule voor de inhoud van een prisma of cilinder?','inhoud = oppervlakte grondvlak × hoogte.',3],
['Wat is de formule voor de inhoud van een piramide of kegel?','inhoud = ⅓ × oppervlakte grondvlak × hoogte.',4],
['Wat is de hoogte van een piramide of kegel?','De afstand tussen de top en het grondvlak.',4],
['Wat is het grondvlak van een cilinder?','Een cirkel.',3],
['Hoe teken je de gestippelde ribben van een kubus of balk op roosterpapier?','Dat zijn de ribben die je in het echt niet zou zien, ze lopen naar achteren.',0],
['Hoe bereken je uit hoeveel kubussen een bouwwerk bestaat als je het bovenaanzicht met aantallen kent?','Je telt alle cijfers in het bovenaanzicht bij elkaar op.',1]
],
quiz:[
['Waar komen evenwijdige lijnen samen in een perspectieftekening?',['In het middelpunt','In het verdwijnpunt op de horizon','Nergens, ze blijven evenwijdig','Op de grond'],1,'Evenwijdige lijnen die van je af lopen, snijden elkaar in het verdwijnpunt op de horizon.'],
['Op welke hoogte ligt de horizon in een perspectieftekening?',['Op de grond','Op ooghoogte','Bovenaan de tekening','Dat maakt niet uit'],1,'De horizon ligt altijd op ooghoogte.'],
['Wat is een aanzicht van een ruimtefiguur?',['Een ruimtelijke tekening van de figuur','De vlakke figuur die je ziet als je recht van één kant kijkt','De inhoud van de figuur','De naam van de figuur'],1,'Een aanzicht is een vlakke figuur: wat je ziet als je recht van één kant naar het bouwwerk kijkt.'],
['Welke drie aanzichten worden meestal getekend van een bouwwerk van kubussen?',['Voor-, zij- en bovenaanzicht','Links, rechts en midden','Boven, onder en opzij','Alleen het vooraanzicht'],0,'Meestal teken je het vooraanzicht, het zijaanzicht en het bovenaanzicht.'],
['Wat is een doorsnede?',['De omtrek van een ruimtefiguur','Het platte vlak dat ontstaat als je een ruimtefiguur doorsnijdt','De oppervlakte van een ruimtefiguur','Een ander woord voor aanzicht'],1,'Een doorsnede is het platte (vlakke) vlak dat ontstaat als je een ruimtefiguur doorsnijdt.'],
['Welke stelling gebruik je vaak bij het berekenen van de zijden van een doorsnede?',['De stelling van Pythagoras','De hoekensomstelling','Er is geen speciale stelling nodig','De formule voor oppervlakte van een cirkel'],0,'Vaak bereken je met de stelling van Pythagoras eerst de diagonaal van het grondvlak.'],
['Wat is de inhoud van een prisma met grondvlak 6 cm² en hoogte 5 cm?',['11 cm³','30 cm³','60 cm³','1,2 cm³'],1,'inhoud prisma = oppervlakte grondvlak × hoogte = 6 × 5 = 30 cm³.'],
['Wat is de inhoud van een cilinder met straal 2 cm en hoogte 5 cm? Rond af op één decimaal.',['20,0 cm³','31,4 cm³','62,8 cm³','125,6 cm³'],2,'oppervlakte grondvlak = π × 2² ≈ 12,57 cm². inhoud = 12,57 × 5 ≈ 62,8 cm³.'],
['Wat is de formule voor de inhoud van een piramide?',['oppervlakte grondvlak × hoogte','⅓ × oppervlakte grondvlak × hoogte','0,5 × oppervlakte grondvlak × hoogte','π × straal² × hoogte'],1,'inhoud piramide = ⅓ × oppervlakte grondvlak × hoogte.'],
['Een piramide heeft grondvlak 8 × 6 = 48 cm² en hoogte 7 cm. Wat is de inhoud?',['48 cm³','56 cm³','112 cm³','336 cm³'],2,'inhoud piramide = ⅓ × 48 × 7 = 112 cm³.'],
['Wat is de hoogte van een kegel?',['De straal van het grondvlak','De afstand tussen de top en het grondvlak','De omtrek van het grondvlak','De schuine zijde van de kegel'],1,'De hoogte van een kegel (en een piramide) is de afstand van de top tot het grondvlak.'],
['Een kegel heeft grondvlak met straal 6 cm (oppervlakte ≈ 113,1 cm²) en hoogte 13 cm. Wat is de inhoud? Rond af op hele cm³.',['490 cm³','1470 cm³','1177 cm³','113 cm³'],0,'inhoud kegel = ⅓ × 113,1 × 13 ≈ 490 cm³.'],
['Welke ribben van een kubus teken je gestippeld op roosterpapier?',['Alle ribben','De ribben die je in het echt niet zou zien','Alleen de bovenste ribben','Geen enkele rib'],1,'De ribben die naar achteren lopen en die je in het echt niet zou zien, teken je gestippeld.'],
['In een bovenaanzicht met aantallen staat in elk hokje het aantal opgestapelde kubussen. Hoe bereken je het totale aantal kubussen van het bouwwerk?',['Je neemt het hoogste getal','Je telt alle getallen in het bovenaanzicht bij elkaar op','Je vermenigvuldigt alle getallen met elkaar','Dat kan niet uit het bovenaanzicht'],1,'Door alle cijfers in het bovenaanzicht op te tellen, weet je uit hoeveel kubussen het bouwwerk bestaat.'],
['Wat hebben een prisma en een cilinder gemeen wat betreft de inhoudsformule?',['Ze hebben allebei geen grondvlak','Ze gebruiken dezelfde formule: oppervlakte grondvlak × hoogte','Ze gebruiken allebei de formule voor een kegel','Er is geen overeenkomst'],1,'Zowel bij een prisma als bij een cilinder bereken je de inhoud met oppervlakte grondvlak × hoogte.']
]
});
