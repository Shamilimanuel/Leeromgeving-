import { registerChapter } from '../../../registry.js';

/* Rebuilt 2026-09-25 to the recipe of Economie TL4 H1 (change 6), short
   sentences for BBL. Checked against the book: "the biggest coordinate sets
   how long an axis must be" (3.4) was missing; "eerst de breedtegraad, dan
   de lengtegraad" (3.2) is not in the book and was removed. Terms, cards and
   quiz unchanged. */
registerChapter('wiskunde|bbl|1|3', {
title:'Plaats bepalen',
summary:[
{heading:'3.1 Plaats op aarde',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>de acht <b>windrichtingen</b> van de windroos</li>
<li>een plek vinden op een <b>kaart met vakken</b></li></ul></div>`
+`<div class="box"><h4>Waar dit hoofdstuk over gaat</h4><p>Je leert hoe je een <b>plek</b> aangeeft: met windrichtingen, met <b>vakken</b> op een kaart, met <b>gps-coördinaten</b> en in een <b>assenstelsel</b>.</p></div>`
+`<h5 class="sub">De windroos</h5>`
+`<div class="g2">`
+`<div class="box"><h4>Hoofdwindrichtingen</h4><p><b>Noord</b>, <b>oost</b>, <b>zuid</b> en <b>west</b>.</p></div>`
+`<div class="box"><h4>Daartussen</h4><p><b>Noordoost</b>, <b>zuidoost</b>, <b>zuidwest</b> en <b>noordwest</b>.</p></div></div>`
+`<div class="call warn"><b>Let op:</b> in een <b>windroos</b> staan alleen de <b>beginletters</b>. NO is noordoost, ZW is zuidwest.</div>`
+`<h5 class="sub">Een kaart met vakken</h5>`
+`<div class="box"><h4>Letters en cijfers</h4><p>Een kaart is vaak verdeeld in <b>vakken</b>. Elk vak heeft een <b>letter</b> en een <b>cijfer</b>, bijvoorbeeld vak <b>F4</b>. Zo zeg je snel waar iets ligt. Je kunt ook een <b>route</b> beschrijven langs de vakken.</p></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: de kerk zoeken</h4><p>De kerk ligt in vak F4.</p><div class="antwoord">Zoek de kolom met de letter <b>F</b>. Zoek de rij met het cijfer <b>4</b>. Waar ze elkaar kruisen, ligt de kerk.</div></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Welke windrichting ligt tussen noord en west?</p><p class="check-a"><b>Noordwest</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (3.1)</b><ul class="lst">
<li>De <b>hoofdwindrichtingen</b> zijn noord, oost, zuid en west.</li>
<li>Daartussen: noordoost, zuidoost, zuidwest en noordwest.</li>
<li>Op een kaart met <b>vakken</b> wijs je een plek aan met een letter en een cijfer.</li></ul></div>`},

{heading:'3.2 Gps-coördinaten',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>wat <b>gps-coördinaten</b> zijn</li>
<li>hoe je er een <b>plek</b> mee terugvindt</li></ul></div>`
+`<h5 class="sub">Elk punt op aarde</h5>`
+`<div class="box"><h4>Gps-coördinaten</h4><p>Bij <b>elk punt op aarde</b> horen <b>gps-coördinaten</b>. Dat zijn <b>twee getallen</b> met een <b>komma</b> ertussen.</p></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: een stadion</h4><p>Het <b>Abe Lenstra Stadion</b> in Heerenveen heeft de coördinaten 52.958911, 5.936002.</p><div class="antwoord">Typ deze getallen in <b>Google Maps</b>. Dan zie je precies waar het stadion ligt.</div></div>`
+`<div class="call waarom">Waarom zijn coördinaten handig? Een <b>adres</b> heeft niet elke plek. Een punt in een bos of op zee heeft wel <b>gps-coördinaten</b>.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Uit hoeveel getallen bestaan gps-coördinaten?</p><p class="check-a">Uit <b>twee</b> getallen, met een komma ertussen.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (3.2)</b><ul class="lst">
<li>Elk punt op aarde heeft eigen <b>gps-coördinaten</b>.</li>
<li>Het zijn <b>twee getallen</b> met een komma ertussen.</li>
<li>Met de coördinaten vind je een plek terug, bijvoorbeeld in <b>Google Maps</b>.</li></ul></div>`},

{heading:'3.3 Assenstelsel',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>de delen van een <b>assenstelsel</b></li>
<li>de <b>coördinaten</b> van een punt aflezen</li></ul></div>`
+`<h5 class="sub">Onderdelen</h5>`
+`<div class="g3">`
+`<div class="term"><b>Horizontale as</b><p>De as die <b>van links naar rechts</b> loopt.</p></div>`
+`<div class="term"><b>Verticale as</b><p>De as die <b>van onder naar boven</b> loopt.</p></div>`
+`<div class="term"><b>Oorsprong</b><p>Het beginpunt <b>O</b>, waar de assen elkaar snijden. Het punt <b>(0, 0)</b>.</p></div></div>`
+`<h5 class="sub">Een punt aflezen</h5>`
+`<div class="call reken"><b>Stappenplan</b><ol class="num">
<li>Begin altijd in de <b>oorsprong</b>.</li>
<li>Tel eerst <b>naar rechts</b>: dat is de <b>horizontale coördinaat</b>.</li>
<li>Tel daarna <b>omhoog</b>: dat is de <b>verticale coördinaat</b>.</li>
<li>Schrijf ze op met een <b>komma</b> ertussen.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: punt A</h4><p>Vanuit O ga je 3 naar rechts en 2 omhoog.</p><div class="antwoord">Punt <b>A(3, 2)</b>. De 3 is de horizontale coördinaat, de 2 de verticale.</div></div>`
+`<div class="call warn"><b>Let op:</b> de <b>volgorde</b> telt. A(3, 2) is een ander punt dan (2, 3).</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Wat is de verticale coördinaat van C(1, 4)?</p><p class="check-a"><b>4</b>, het tweede getal.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (3.3)</b><ul class="lst">
<li>Een assenstelsel heeft een <b>horizontale as</b>, een <b>verticale as</b> en een <b>oorsprong</b> (0, 0).</li>
<li>Eerst de <b>horizontale</b> coördinaat, dan de <b>verticale</b>.</li></ul></div>`},

{heading:'3.4 Tekenen in een assenstelsel',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>zelf een <b>assenstelsel</b> tekenen</li>
<li>bepalen hoe lang de <b>assen</b> moeten worden</li></ul></div>`
+`<h5 class="sub">Stap voor stap</h5>`
+`<div class="call reken"><b>Zo teken je een assenstelsel</b><ol class="num">
<li>Kijk naar alle <b>verticale coördinaten</b>. Het <b>grootste</b> getal is de lengte van de verticale as.</li>
<li>Teken de <b>verticale as</b> en zet de getallen erbij. Zet onderaan de letter <b>O</b>.</li>
<li>Kijk naar alle <b>horizontale coördinaten</b>. Het grootste getal is de lengte van de horizontale as.</li>
<li>Teken vanaf O de <b>horizontale as</b> en zet de getallen erbij.</li>
<li>Schrijf <b>horizontale as</b> en <b>verticale as</b> bij de assen.</li>
<li>Teken nu de <b>punten</b>.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: vier punten</h4><p>A(2, 2), B(5, 3), C(4, 6) en D(1, 5). Hoe lang worden de assen?</p><div class="antwoord">Verticaal: 2, 3, 6 en 5. Het grootste is <b>6</b>, dus de verticale as wordt <b>6 cm</b>. Horizontaal: 2, 5, 4 en 1. Het grootste is <b>5</b>, dus de horizontale as wordt <b>5 cm</b>.</div></div>`
+`<div class="call waarom">Waarom kijk je eerst naar het <b>grootste getal</b>? Anders past een punt <b>niet</b> op je assen, en moet je opnieuw beginnen.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">De punten zijn (1, 7), (4, 2) en (3, 5). Hoe lang wordt de verticale as?</p><p class="check-a">Het grootste verticale getal is <b>7</b>, dus <b>7 cm</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (3.4)</b><ul class="lst">
<li>Het <b>grootste getal</b> bepaalt hoe lang een as wordt.</li>
<li>Teken eerst de <b>assen</b> met getallen, dan pas de <b>punten</b>.</li>
<li>Vergeet de letter <b>O</b> en de namen van de assen niet.</li></ul></div>`}
],
terms:[
['windroos','Een figuur met de acht windrichtingen erop.',0],
['hoofdwindrichting','Noord, oost, zuid of west.',0],
['windrichting','Een richting op het kompas, bijvoorbeeld noordoost of zuidwest.',0],
['rooster','Een indeling van een kaart in vakken met letters en cijfers.',0],
['gps-coördinaten','Twee getallen (breedtegraad en lengtegraad) waarmee je een punt op aarde precies kunt aanwijzen.',1],
['assenstelsel','Een tekening met een horizontale en een verticale as, waarin je punten met coördinaten kunt aangeven.',2],
['horizontale as','De liggende as (van links naar rechts) in een assenstelsel.',2],
['verticale as','De staande as (van onder naar boven) in een assenstelsel.',2],
['oorsprong','Het beginpunt van een assenstelsel, met coördinaten (0, 0).',2],
['coördinaat','Een getal dat de plaats van een punt op een as aangeeft.',0],
['horizontale coördinaat','Het eerste getal van een punt; hoever je vanaf de oorsprong naar rechts gaat.',2],
['verticale coördinaat','Het tweede getal van een punt; hoever je vanaf de oorsprong omhoog gaat.',2]
],
cards:[
['Wat zijn de vier hoofdwindrichtingen?','Noord, oost, zuid en west.',0],
['Welke windrichtingen liggen tussen de hoofdwindrichtingen in?','Noordoost, zuidoost, zuidwest en noordwest.',0],
['Waarmee is een kaart vaak verdeeld om plekken aan te wijzen?','Met een rooster van vakken met letters en cijfers.',0],
['Wat zijn gps-coördinaten?','Twee getallen waarmee je een punt op aarde precies kunt aanwijzen.',1],
['Uit welke onderdelen bestaat een assenstelsel?','Een horizontale as, een verticale as en een oorsprong.',2],
['Wat zijn de coördinaten van de oorsprong?','(0, 0).',2],
['Hoeveel coördinaten heeft elk punt in een assenstelsel?','Twee: een horizontale en een verticale coördinaat.',2],
['Je gaat van O 3 naar rechts en 2 omhoog. Wat is de coördinaat van dat punt?','(3, 2).',2],
['Wat is de horizontale coördinaat van het punt A(3, 2)?','3.',2],
['Wat is de verticale coördinaat van het punt A(3, 2)?','2.',2],
['Wat doe je als eerste stap als je zelf een assenstelsel tekent?','Uitzoeken hoe lang de verticale as moet worden.',2],
['Welke letter zet je onderaan de verticale as, bij de oorsprong?','De letter O.',3]
],
quiz:[
['Welke vier windrichtingen zijn de hoofdwindrichtingen?',['Noordoost, zuidoost, zuidwest, noordwest','Noord, oost, zuid, west','Links, rechts, boven, onder','Voor, achter, links, rechts'],1,'De hoofdwindrichtingen zijn noord, oost, zuid en west.'],
['Welke windrichting ligt tussen noord en oost in?',['Noordwest','Zuidoost','Noordoost','Zuidwest'],2,'Tussen noord en oost ligt noordoost.'],
['Waarmee wordt een kaart vaak ingedeeld om plekken makkelijk te vinden?',['Een windroos','Een rooster van vakken met letters en cijfers','Een verhoudingstabel','Een assenstelsel met graden'],1,'Kaarten worden vaak verdeeld in een rooster van vakken, aangeduid met letters en cijfers.'],
['Wat geven gps-coördinaten aan?',['De temperatuur op een plek','Een precies punt op aarde','De afstand tot Nederland','De windrichting'],1,'Gps-coördinaten geven een precies punt op aarde aan, met twee getallen.'],
['Uit welke drie onderdelen bestaat een assenstelsel?',['Twee horizontale assen en een oorsprong','Een horizontale as, een verticale as en een oorsprong','Alleen een verticale as','Een windroos en twee assen'],1,'Een assenstelsel heeft een horizontale as, een verticale as en een oorsprong.'],
['Wat zijn de coördinaten van de oorsprong?',['(1, 1)','(0, 0)','Er is geen vaste coördinaat','(10, 10)'],1,'De oorsprong is het beginpunt van het assenstelsel en heeft de coördinaten (0, 0).'],
['Je gaat vanuit de oorsprong 4 naar rechts en 1 omhoog. Wat is de coördinaat van dat punt?',['(1, 4)','(4, 1)','(0, 4)','(4, 0)'],1,'Eerst de horizontale stap (4 naar rechts), dan de verticale stap (1 omhoog): het punt is (4, 1).'],
['Wat is de horizontale coördinaat van het punt B(5, 2)?',['5','2','7','0'],0,'Het eerste getal van een coördinaat is altijd de horizontale coördinaat: 5.'],
['Wat is de verticale coördinaat van het punt B(5, 2)?',['5','2','7','0'],1,'Het tweede getal van een coördinaat is de verticale coördinaat: 2.'],
['Wat doe je als eerste stap bij het zelf tekenen van een assenstelsel?',['De oorsprong kleuren','Uitzoeken hoe lang de verticale as moet worden','Meteen de horizontale as tekenen','De naam van de kaart opschrijven'],1,'Je begint met uitzoeken hoe lang de verticale as moet worden, voordat je gaat tekenen.'],
['Welke letter hoort bij de oorsprong onderaan de verticale as?',['A','X','O','P'],2,'Bij de oorsprong, onderaan de verticale as, zet je de letter O.']
]
});
