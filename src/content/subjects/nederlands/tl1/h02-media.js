import { registerChapter } from '../../../registry.js';

/* Rebuilt 2026-09-25 to the recipe of Economie TL4 H1 (change 6). Same
   content and term boxes, restructured. Terms, cards and quiz unchanged. */
registerChapter('nederlands|tl|1|2', {
title:'Media',
summary:[
{heading:'Apps',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>hoe een <b>app</b> in elkaar zit: <b>startscherm</b> en <b>volgschermen</b></li></ul></div>`
+`<div class="box"><h4>Waar dit hoofdstuk over gaat</h4><p>Je leert <b>kritisch</b> met media omgaan: hoe een <b>app</b> werkt, of informatie <b>betrouwbaar</b> is, online <b>brainstormen</b>, een <b>prototype</b> van een app ontwerpen, <b>pitchen</b> en aan het eind <b>evalueren</b>.</p></div>`
+`<h5 class="sub">Schermen</h5>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Startscherm</h4><p>Het <b>eerste</b> scherm dat je ziet als je een app of site opent.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Volgscherm</h4><p>Een scherm dat pas komt als je op iets <b>klikt</b> in het startscherm.</p></div></div>`
+`<div class="call reken"><b>Zo beoordeel je een app</b><ol class="num">
<li>Bekijk het <b>startscherm</b>: is meteen duidelijk wat de app doet?</li>
<li>Zijn de <b>knoppen</b> duidelijk?</li>
<li>Kom je makkelijk bij de juiste <b>informatie</b> via de volgschermen?</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: een weer-app</h4><p>Je opent de app en ziet het weer van vandaag. Je tikt op &lsquo;morgen&rsquo;.</p><div class="antwoord">Het weer van vandaag is het <b>startscherm</b>. Het scherm met morgen is een <b>volgscherm</b>: het komt pas na een <b>klik</b>.</div></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Hoe kom je op een volgscherm?</p><p class="check-a">Door op iets in het <b>startscherm</b> te <b>klikken</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li><b>Startscherm</b>: het eerste scherm.</li>
<li><b>Volgscherm</b>: komt na een klik.</li>
<li>Goede app: duidelijke <b>knoppen</b>, makkelijk <b>navigeren</b>.</li></ul></div>`},

{heading:'Betrouwbaarheid',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>controleren of <b>online informatie</b> <b>betrouwbaar</b> is</li>
<li><b>nepnieuws</b> herkennen</li></ul></div>`
+`<h5 class="sub">Klopt het wel?</h5>`
+`<div class="term"><b>Nepnieuws</b><span>Nieuws dat opzettelijk verspreid wordt, vaak via sociale media, terwijl het niet klopt.</span></div>`
+`<div class="call reken"><b>Stappenplan: is het betrouwbaar?</b><ol class="num">
<li>Wie is de <b>afzender</b>? Een bekende, betrouwbare organisatie?</li>
<li>Zeggen <b>andere bronnen</b> hetzelfde?</li>
<li>Wil het bericht je vooral <b>overtuigen</b> of <b>choqueren</b>? Dan oppassen.</li>
<li>Is de informatie <b>recent</b>?</li></ol></div>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Betrouwbaar</h4><p>Bekende <b>afzender</b>, andere bronnen zeggen hetzelfde, <b>actueel</b>.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Verdacht</h4><p>Onbekende afzender, <b>schokkende</b> kop, nergens anders te vinden.</p></div></div>`
+`<div class="call waarom">Waarom eerst checken voordat je <b>deelt</b>? Als je nepnieuws deelt, help je het <b>verspreiden</b>, ook als je het niet zo bedoelt.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Wat is nepnieuws?</p><p class="check-a">Nieuws dat <b>opzettelijk</b> verspreid wordt terwijl het <b>niet klopt</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li>Check <b>afzender</b>, <b>andere bronnen</b>, <b>doel</b> en <b>datum</b>.</li>
<li>Eerst checken, dan pas <b>delen</b>.</li></ul></div>`},

{heading:'Online brainstormen',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>samen <b>online brainstormen</b></li></ul></div>`
+`<h5 class="sub">Zoveel mogelijk ideeën</h5>`
+`<div class="term"><b>Brainstormen</b><span>Ideeën uitwisselen met anderen om tot een goed plan of ontwerp te komen.</span></div>`
+`<div class="box"><h4>Online</h4><p>Brainstormen kan ook <b>online</b>, met een <b>gedeeld document</b> of een <b>digitaal bord</b>. Het doel: zoveel mogelijk <b>ideeën</b>, zonder ze meteen te <b>beoordelen</b>.</p></div>`
+`<div class="call reken"><b>Stappenplan: online brainstormen</b><ol class="num">
<li>Noteer eerst <b>zelf</b> een paar ideeën.</li>
<li>Zet ze in het <b>gezamenlijke</b> document of bord.</li>
<li><b>Reageer</b> op ideeën van anderen en bouw erop voort.</li>
<li>Kies aan het eind <b>samen</b> de beste ideeën.</li></ol></div>`
+`<div class="call waarom">Waarom niet meteen <b>beoordelen</b>? Als je elk idee meteen afkeurt, durven mensen minder te zeggen. Een raar idee kan juist een <b>goed</b> idee opleveren.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Wat doe je aan het eind van een brainstorm?</p><p class="check-a">Samen de <b>beste ideeën</b> kiezen.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li>Eerst <b>veel</b> ideeën, pas later <b>kiezen</b>.</li>
<li>Bouw voort op ideeën van <b>anderen</b>.</li></ul></div>`},

{heading:'Een prototype ontwerpen',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>wat een <b>prototype</b> en een <b>mock-up</b> zijn</li>
<li>een <b>projectsjabloon</b> gebruiken</li></ul></div>`
+`<h5 class="sub">Eerst een proefmodel</h5>`
+`<div class="term"><b>Prototype</b><span>Een proefmodel van een product, waarmee je je idee snel en goedkoop kunt testen.</span></div>`
+`<div class="box"><h4>Van alles mogelijk</h4><p>Een <b>prototype</b> kan een <b>tekening</b> zijn, iets van <b>karton</b> of <b>klei</b>, een stripverhaal of een toneelstukje. Alles mag, als het maar een <b>duidelijk beeld</b> geeft van het idee.</p></div>`
+`<div class="term"><b>Mock-up</b><span>Een prototype van een app: voorbeeldschermen die laten zien hoe de app eruitziet en wat hij kan.</span></div>`
+`<div class="term"><b>Projectsjabloon</b><span>Een soort invulvragenlijst die je steeds opnieuw kunt gebruiken bij projecten die op elkaar lijken.</span></div>`
+`<div class="call reken"><b>Stappenplan: een mock-up maken</b><ol class="num">
<li>Vul het <b>projectsjabloon</b> in, zodat je niets vergeet.</li>
<li>Teken het <b>startscherm</b>.</li>
<li>Teken de belangrijkste <b>volgschermen</b> en wat erop staat.</li>
<li><b>Test</b>: snapt iemand anders hoe de app werkt?</li></ol></div>`
+`<div class="call waarom">Waarom een prototype? Zo leer je <b>snel en goedkoop</b> wat werkt en wat niet, <b>voordat</b> je het echte product maakt.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Hoe heet een prototype van een app?</p><p class="check-a">Een <b>mock-up</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li><b>Prototype</b> = proefmodel; bij een app: <b>mock-up</b>.</li>
<li><b>Projectsjabloon</b> zodat je niets vergeet.</li></ul></div>`},

{heading:'Pitchen',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li><b>kort</b> en <b>overtuigend</b> presenteren: pitchen</li></ul></div>`
+`<h5 class="sub">In één minuut overtuigen</h5>`
+`<div class="term"><b>Pitchen</b><span>Heel kort presenteren (soms maximaal één minuut), waarbij je je publiek probeert te overtuigen van je idee of product.</span></div>`
+`<div class="call reken"><b>Stappenplan: een goede pitch</b><ol class="num">
<li>Vertel <b>meteen</b> wat je idee of product is.</li>
<li>Zeg wat het <b>bijzonder</b> maakt.</li>
<li>Wees <b>kort en bondig</b>.</li>
<li>Sluit af met een duidelijke <b>oproep</b>: waarom moet je publiek &lsquo;ja&rsquo; zeggen?</li></ol></div>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Presentatie</h4><p>Langer, met veel <b>uitleg</b>.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Pitch</h4><p><b>Heel kort</b>, gericht op <b>overtuigen</b>.</p></div></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Hoe sluit je een pitch af?</p><p class="check-a">Met een duidelijke <b>oproep</b>: waarom moet het publiek &lsquo;ja&rsquo; zeggen?</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li>Pitch = <b>kort</b> en <b>overtuigend</b>.</li>
<li>Wat is het, wat maakt het <b>bijzonder</b>, en een <b>oproep</b>.</li></ul></div>`},

{heading:'Evalueren en verslag doen',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>je <b>product</b> en je <b>aanpak</b> evalueren</li></ul></div>`
+`<h5 class="sub">Terugkijken</h5>`
+`<div class="box"><h4>Evalueren</h4><p><b>Evalueren</b> is kritisch <b>terugkijken</b> op wat je hebt gemaakt en hoe je te werk bent gegaan: wat ging <b>goed</b>, wat kan <b>beter</b>?</p></div>`
+`<div class="call reken"><b>Vragen bij het evalueren</b><ol class="num">
<li>Is het <b>product</b> geworden zoals je had bedacht?</li>
<li>Hoe ging de <b>samenwerking</b>?</li>
<li>Welke <b>feedback</b> kreeg je, en wat deed je ermee?</li>
<li>Wat zou je de volgende keer <b>anders</b> doen?</li></ol></div>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Product</h4><p><b>Wat</b> je hebt gemaakt.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Aanpak</h4><p><b>Hoe</b> je het hebt gemaakt: planning, samenwerking.</p></div></div>`
+`<div class="call waarom">Evalueren helpt je om van een project te <b>leren</b>, zodat je het de volgende keer nog <b>beter</b> aanpakt.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Wat is evalueren?</p><p class="check-a">Kritisch <b>terugkijken</b> op je product en je aanpak.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li>Evalueer je <b>product</b> én je <b>aanpak</b>.</li>
<li>Wat ging <b>goed</b>, wat kan <b>beter</b>?</li></ul></div>`}
],
terms:[
['Startscherm','Het eerste scherm dat je ziet als je een app of site opent.',0],
['Volgscherm','Een scherm dat na het startscherm komt; je komt er door op iets in het startscherm te klikken.',0],
['Nepnieuws','Nieuws dat opzettelijk verspreid wordt, vaak via sociale media, terwijl het niet klopt.',1],
['Betrouwbare bron','Een bron waarvan de informatie klopt en die je kunt vertrouwen, bijvoorbeeld omdat het een bekende organisatie is.',1],
['Brainstormen','Ideeën uitwisselen met anderen om tot een goed plan of ontwerp te komen.',2],
['Prototype','Een proefmodel van een product, waarmee je je idee snel en goedkoop kunt testen.',3],
['Mock-up','Een prototype van een app: een voorbeeldscherm dat laat zien hoe de app eruitziet en wat hij kan.',3],
['Projectsjabloon','Een soort invulvragenlijst die je steeds weer kunt gebruiken bij vergelijkbare projecten.',3],
['Pitchen','Heel kort presenteren, waarbij je probeert je publiek te overtuigen van jouw idee of product.',4],
['Evalueren','Kritisch terugkijken op je product en je aanpak: wat ging goed en wat kan beter.',5]
],
cards:[
['Wat is een startscherm?','Het eerste scherm dat je ziet als je een app of site opent.',0],
['Wat is een volgscherm?','Een scherm dat je te zien krijgt nadat je op iets in het startscherm hebt geklikt.',0],
['Wat is nepnieuws?','Nieuws dat opzettelijk verspreid wordt, vaak via sociale media, terwijl het niet klopt.',1],
['Noem één manier om te controleren of informatie betrouwbaar is.','Bijvoorbeeld: controleren of andere bronnen hetzelfde beweren.',1],
['Wat is het doel van brainstormen?','Zoveel mogelijk ideeën verzamelen, zonder ze meteen te beoordelen.',2],
['Wat is een prototype?','Een proefmodel van een product, waarmee je je idee snel en goedkoop kunt testen.',3],
['Hoe noem je een prototype van een app?','Een mock-up.',3],
['Waarom vul je een projectsjabloon in bij het maken van een mock-up?','Om zeker te weten dat je niets vergeet.',3],
['Wat is pitchen?','Heel kort presenteren om je publiek te overtuigen van je idee of product.',4],
['Waar let je op bij het evalueren van een project?','Onder andere op het eindresultaat, de samenwerking en wat je een volgende keer anders zou doen.',5]
],
quiz:[
['Wat is een startscherm?',['Het laatste scherm van een app','Het eerste scherm dat je ziet als je een app opent','Een scherm met alleen reclame','Een scherm dat je nooit ziet'],1,'Het startscherm is het eerste scherm dat je ziet als je een app of site opent.'],
['Wanneer zie je een volgscherm?',['Voordat je de app opent','Nadat je op iets in het startscherm hebt geklikt','Alleen als de app crasht','Nooit, dat bestaat niet'],1,'Een volgscherm komt na het startscherm; je komt erop door iets aan te klikken.'],
['Wat is nepnieuws?',['Nieuws dat altijd grappig is','Nieuws dat opzettelijk verspreid wordt terwijl het niet klopt','Nieuws dat alleen op tv komt','Nieuws dat door de overheid wordt gecontroleerd'],1,'Nepnieuws is nieuws dat opzettelijk verspreid wordt, vaak via sociale media, terwijl het niet waar is.'],
['Wat is een goede manier om betrouwbaarheid te checken?',['Alleen naar de titel kijken','Kijken of andere bronnen hetzelfde beweren','Het bericht meteen delen','Nooit iets controleren'],1,'Je controleert of andere (betrouwbare) bronnen dezelfde informatie geven.'],
['Wat is het doel van brainstormen?',['Meteen het beste idee kiezen','Zoveel mogelijk ideeën verzamelen','Een idee meteen afkeuren','Een tekst schrijven'],1,'Bij brainstormen verzamel je zoveel mogelijk ideeën, zonder ze meteen te beoordelen.'],
['Wat is een prototype?',['Het eindproduct','Een proefmodel van een product','Een reclametekst','Een soort presentatie'],1,'Een prototype is een proefmodel waarmee je je idee kunt testen.'],
['Hoe noem je een prototype van een app?',['Een pitch','Een mock-up','Een startscherm','Een sjabloon'],1,'Een prototype van een app noem je een mock-up.'],
['Waarvoor gebruik je een projectsjabloon?',['Om een pitch te geven','Om niets te vergeten bij het maken van een prototype','Om nepnieuws te herkennen','Om te brainstormen'],1,'Een projectsjabloon is een invulvragenlijst waarmee je zeker weet dat je niets vergeet.'],
['Wat is kenmerkend voor een pitch?',['Hij duurt heel lang','Hij is heel kort en overtuigend','Hij bevat geen mening','Hij wordt altijd schriftelijk gedaan'],1,'Een pitch is een korte, overtuigende presentatie, soms van maximaal één minuut.'],
['Wat doe je bij het evalueren van een project?',['Een nieuw project starten','Terugkijken op je product en je aanpak','Meteen een cijfer geven','Het product weggooien'],1,'Evalueren betekent kritisch terugkijken op wat je hebt gemaakt en hoe je te werk bent gegaan.'],
['Waarom is evalueren nuttig?',['Omdat het verplicht is door de wet','Omdat je ervan leert voor een volgend project','Omdat het niets oplevert','Omdat het sneller gaat dan werken'],1,'Door te evalueren leer je wat goed ging en wat je de volgende keer beter kunt doen.']
]
});
