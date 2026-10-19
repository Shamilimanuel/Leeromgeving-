import { registerChapter } from '../../../registry.js';

/* Rebuilt 2026-09-25 to the recipe of Economie TL4 H1 (change 6). Added
   from the book: what a doelgroep is and what goes into a persona (age,
   gender, home, work, hobbies; the sneakers example), and how a stop-motion
   film is made (photo, move a little, photo; keep the camera still). Terms,
   cards and quiz unchanged. */
registerChapter('nederlands|tl|2|2', {
title:'Media',
summary:[
{heading:'Waarom werkt online reclame?',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>de <b>onderdelen</b> van een goede reclame</li>
<li><b>technieken</b> die reclamemakers gebruiken om je te overtuigen</li></ul></div>`
+`<div class="box"><h4>Waar dit hoofdstuk over gaat</h4><p>Je leert hoe <b>reclame</b> werkt en met welke <b>technieken</b> reclamemakers je overtuigen. Je maakt een <b>persona</b> en een <b>storyboard</b>, presenteert je <b>reclameplan</b> en maakt een eigen <b>stop-motion-reclame</b>.</p></div>`
+`<h5 class="sub">Een goede reclame</h5>`
+`<div class="call reken"><b>De vier stappen van een goede reclame</b><ol class="num">
<li>Hij <b>trekt de aandacht</b>: hé, wat is dat? Bijvoorbeeld een felgekleurde poster.</li>
<li>Hij wekt <b>gedachten en emoties</b> op: handig, herkenbaar, mooi!</li>
<li>Je wilt iets <b>hebben, doen of zijn</b>: ik wil dat!</li>
<li>Hij vertelt <b>hoe</b> je dat bereikt: zo kan ik het krijgen.</li></ol></div>`
+`<h5 class="sub">Technieken om te overtuigen</h5>`
+`<div class="tblwrap"><table class="tbl"><tr><th>Techniek</th><th>Hoe werkt het?</th></tr><tr><td><b>Herhaling</b></td><td>Je ziet de reclame vaker; de <b>naam</b> komt steeds terug.</td></tr><tr><td><b>Humor</b></td><td>Wat je laat lachen, onthoud je beter.</td></tr><tr><td><b>Dromen-komen-uit-belofte</b></td><td>Koop het, en je wordt gelukkig, mooi of slim.</td></tr><tr><td><b>Gewone mensen</b></td><td>Mensen zoals jij prijzen het aan.</td></tr><tr><td><b>Autoriteit</b></td><td>Experts, wetenschappers of bekende mensen prijzen het aan.</td></tr><tr><td><b>Aanzetten tot actie</b></td><td>Koop het <b>nu</b>: de aanbieding duurt maar even.</td></tr></table></div>`
+`<div class="call warn"><b>Valkuil bij humor:</b> is de reclame <b>te grappig</b>, dan onthouden mensen alleen het filmpje en niet de <b>merknaam</b>.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Een tandarts prijst een tandpasta aan. Welke techniek is dat?</p><p class="check-a"><b>Inzet van autoriteit</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li>Aandacht, emotie, <b>ik wil dat</b>, zo bereik je het.</li>
<li>Technieken: <b>herhaling</b>, <b>humor</b>, <b>belofte</b>, <b>gewone mensen</b>, <b>autoriteit</b>, <b>actie</b>.</li></ul></div>`},

{heading:'Persona',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>wat een <b>doelgroep</b> is</li>
<li>een <b>persona</b> maken</li></ul></div>`
+`<h5 class="sub">Doelgroep</h5>`
+`<div class="box"><h4>Voor wie is het?</h4><p>De <b>doelgroep</b> zijn de mensen van wie reclamemakers verwachten dat ze het product gaan <b>kopen</b>. Doelgroepen <b>verschillen</b>: de doelgroep van een poppenhuis is een andere dan die van een smartphone.</p></div>`
+`<h5 class="sub">Persona</h5>`
+`<div class="box"><h4>De ideale klant</h4><p>Reclamemakers gaan uit van de <b>gemiddelde persoon</b> in de doelgroep: de <b>ideale klant</b>. Die persoon bestaat niet echt en heet een <b>persona</b>. Ze beschrijven hem zo <b>uitgebreid</b> mogelijk, zodat de reclame goed <b>aansluit</b>.</p></div>`
+`<div class="call reken"><b>Stappenplan: een persona maken</b><ol class="num">
<li>Bepaal de <b>doelgroep</b> van je product.</li>
<li>Geef je persona een <b>naam</b>, <b>leeftijd</b> en <b>geslacht</b>.</li>
<li>Beschrijf hoe hij <b>woont</b> en wat voor <b>werk</b> hij doet.</li>
<li>Noem zijn <b>hobby's</b> en <b>interesses</b>.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: drie persona's voor sneakers</h4><p>Bij één product horen soms meer doelgroepen.</p><div class="antwoord">Een <b>kind</b> van 6 jaar: kleurrijk, beweeglijk, schoolgaand. Een <b>twintiger</b> van 23: casual, sportief, druk leven. Voor elk maak je een <b>andere</b> reclame.</div></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Bestaat een persona echt?</p><p class="check-a"><b>Nee</b>: het is een verzonnen, gemiddelde persoon uit de doelgroep.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li><b>Doelgroep</b>: wie het product gaat kopen.</li>
<li><b>Persona</b>: een verzonnen ideale klant, zo precies mogelijk beschreven.</li></ul></div>`},

{heading:'Storyboard maken',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>een <b>storyboard</b> maken voor een reclame</li></ul></div>`
+`<h5 class="sub">Plaatje voor plaatje</h5>`
+`<div class="box"><h4>Wat is een storyboard?</h4><p>Eerst maak je een <b>persona</b>, dan een <b>storyboard</b>: per onderdeel een <b>schets</b> van wat er in de reclame gebeurt. Is het storyboard <b>goedgekeurd</b>, dan wordt de reclame gemaakt.</p></div>`
+`<div class="call reken"><b>Dit werk je per plaatje uit</b><ol class="num">
<li>Wat er te <b>zien</b> is.</li>
<li>Wat er te <b>horen</b> is: geluid, muziek, voice-over.</li>
<li>Welke <b>reclametechniek</b> je gebruikt, en hoe.</li></ol></div>`
+`<div class="call waarom">Waarom eerst een storyboard? Een schets is <b>snel</b> gemaakt en makkelijk te <b>veranderen</b>. Een reclame opnieuw filmen kost veel meer tijd.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Wat zet je naast het beeld nog meer in een storyboard?</p><p class="check-a">Wat er te <b>horen</b> is en welke <b>reclametechniek</b> je gebruikt.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li>Storyboard = <b>schetsen</b> per stap van de reclame.</li>
<li>Per plaatje: <b>beeld</b>, <b>geluid</b>, <b>techniek</b>.</li></ul></div>`},

{heading:'Reclameplan presenteren',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>een <b>reclameplan</b> presenteren met je <b>storyboard</b></li></ul></div>`
+`<h5 class="sub">Aan de opdrachtgever</h5>`
+`<div class="box"><h4>Feedback verwerken</h4><p>Reclamemakers presenteren hun <b>reclameplan</b> aan de <b>opdrachtgever</b>, vooral met het <b>storyboard</b>. De opdrachtgever geeft vaak <b>meerdere keren feedback</b>. Die verwerken de makers in het storyboard, en pas dan maken ze de reclame.</p></div>`
+`<div class="call reken"><b>Stappenplan: een reclameplan presenteren</b><ol class="num">
<li>Noem het <b>product</b> en de <b>persona</b> die erbij past.</li>
<li>Laat je <b>storyboard</b> duidelijk zien, bijvoorbeeld op een projectiescherm.</li>
<li><b>Wijs</b> de belangrijkste onderdelen aan.</li>
<li>Vertel wat er te <b>zien</b> en te <b>horen</b> is.</li>
<li>Vertel welke <b>technieken</b> je gebruikt en <b>waarom</b>.</li></ol></div>`
+`<div class="call warn"><b>Let op:</b> vertel niet alleen <b>wat</b> er gebeurt, maar ook <b>waarom</b> een techniek bij jouw <b>persona</b> past.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Wat noem je als eerste in je presentatie?</p><p class="check-a">Het <b>product</b> en de <b>persona</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li>Presenteer <b>met</b> je storyboard.</li>
<li>Product, persona, beeld, geluid, <b>techniek en waarom</b>.</li></ul></div>`},

{heading:'Een stop-motion-reclame',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>hoe een <b>stop-motion-filmpje</b> werkt</li>
<li>je storyboard uitwerken tot een <b>stop-motion-reclame</b></li></ul></div>`
+`<h5 class="sub">Foto na foto</h5>`
+`<div class="box"><h4>Zo werkt stop-motion</h4><p>Je maakt een <b>foto</b> van een voorwerp, <b>verplaatst</b> het een klein beetje, maakt weer een foto, enzovoort. Laat je de foto's <b>snel achter elkaar</b> zien, dan lijkt het voorwerp te <b>bewegen</b>.</p></div>`
+`<div class="call warn"><b>Belangrijk:</b> de <b>camera</b> moet stilstaan, anders wordt het filmpje <b>schokkerig</b>. Gebruik een <b>statief</b>, of leg een latje op twee stapels boeken om van <b>bovenaf</b> te fotograferen.</div>`
+`<div class="call reken"><b>Voorbeeld van de volgorde in de reclame</b><ol class="num">
<li>Eerst de belangrijkste <b>kenmerken</b> van het product.</li>
<li>Dan het <b>probleem</b>.</li>
<li>Vervolgens hoe het probleem wordt <b>opgelost</b>.</li>
<li>Ten slotte het <b>logo</b> en/of de <b>slogan</b> groot in beeld.</li></ol></div>`
+`<div class="call waarom">Waarom kleine stapjes? Hoe <b>kleiner</b> je het voorwerp per foto verplaatst, hoe <b>vloeiender</b> de beweging eruitziet.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Waarom gebruik je een statief bij stop-motion?</p><p class="check-a">Zodat de camera <b>stilstaat</b> en het filmpje niet schokt.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li>Foto, <b>klein beetje verplaatsen</b>, foto.</li>
<li>Camera <b>stil</b>: statief.</li>
<li>Eindig met <b>logo</b> of <b>slogan</b>.</li></ul></div>`}
],
terms:[
['reclame','boodschap die mensen probeert te overtuigen iets te kopen of te doen',0],
['overtuigen','mensen zover krijgen dat ze iets gaan geloven, kopen of doen',0],
['herhaling','reclametechniek waarbij de naam van het product meerdere keren genoemd wordt',0],
['dromen-komen-uit-belofte','reclametechniek waarbij beloofd wordt dat je krijgt wat je wilt als je het product koopt',0],
['aanzetten tot actie','reclametechniek die de kijker onder druk zet om snel te kopen, bijvoorbeeld door een tijdelijke aanbieding',0],
['doelgroep','de groep mensen voor wie een reclame bedoeld is',1],
['persona','een fictief personage dat de doelgroep vertegenwoordigt, met bijvoorbeeld naam, leeftijd en wensen',1],
['storyboard','een schetsmatig overzicht van wat er in elk plaatje van een reclame gebeurt',2],
['reclameplan','het plan waarin reclamemakers hun ideeën voor een reclame presenteren aan de opdrachtgever',3],
['opdrachtgever','de persoon of het bedrijf voor wie de reclame gemaakt wordt en die feedback geeft op het plan',3],
['stop-motion-reclame','een reclame gemaakt door losse foto\'s van bewegende voorwerpen achter elkaar af te spelen',4]
],
cards:[
['Noem twee onderdelen van een goed gemaakte reclame.','Bijvoorbeeld: de reclame trekt de aandacht en wekt gedachten/emoties op (andere goede antwoorden: zorgt dat je iets wilt hebben, vertelt hoe je dat bereikt).',0],
['Wat is het risico van humor als reclametechniek?','Mensen onthouden dan soms alleen het grappige filmpje, en niet de merknaam.',0],
['Wat houdt de \'dromen-komen-uit-belofte\' in?','De reclame belooft dat je krijgt wat je wilt (gelukkig, mooi, slim) als je het product koopt.',0],
['Wat is een persona?','Een fictief personage dat de doelgroep vertegenwoordigt, zodat reclamemakers zich beter kunnen inleven.',1],
['Wat is een storyboard?','Een schetsmatig overzicht per plaatje van wat er in de reclame te zien en te horen is.',2],
['Wat gebeurt er als een storyboard is goedgekeurd?','Dan wordt de reclame gemaakt.',2],
['Waarmee begin je bij het presenteren van een reclameplan?','Met het benoemen van het product en de persona die daarbij past.',3],
['Wie geeft feedback op een reclameplan?','De opdrachtgever, vaak meerdere keren.',3],
['Waarmee laat je tijdens een presentatie zien wat je bedoelt?','Met je storyboard, bijvoorbeeld via een projectiescherm of aparte slides.',3],
['Wat gebruik je als basis om een stop-motion-reclame te maken?','Je storyboard, dat je stap voor stap uitwerkt.',4]
],
quiz:[
['Wat is géén reclametechniek uit de theorie?',['Herhaling','Humor','Alinea-indeling','Aanzetten tot actie'],2,'Alinea-indeling hoort bij tekstopbouw, niet bij reclametechnieken.'],
['Wat is het risico van humor in een reclame?',['Mensen kopen het product te snel','Mensen onthouden alleen het filmpje, niet de merknaam','De reclame wordt verboden','De reclame duurt te lang'],1,'Als een reclame te grappig is, onthouden mensen soms alleen het filmpje en niet welk merk het was.'],
['Welke techniek zet de kijker onder druk om snel te kopen?',['Herhaling','Aanzetten tot actie','Inzet van gewone mensen','Humor'],1,'\'Aanzetten tot actie\' gebruikt bijvoorbeeld een tijdelijke aanbieding om je snel te laten kopen.'],
['Wat is een doelgroep?',['De maker van de reclame','De groep mensen voor wie de reclame bedoeld is','Het product zelf','Een reclametechniek'],1,'De doelgroep is de groep mensen die de reclamemakers willen bereiken.'],
['Waarvoor gebruiken reclamemakers een persona?',['Om zich beter in te leven in de doelgroep','Om de prijs van het product te bepalen','Om het storyboard te vervangen','Om de reclame te verbieden'],0,'Een persona is een fictief personage dat helpt om de doelgroep concreet voor ogen te houden.'],
['Wat is een storyboard?',['Een schetsmatig overzicht per plaatje van de reclame','Een lijst met klachten van klanten','Een soort persona','Een marketingbudget'],0,'Een storyboard laat per plaatje/stap zien wat er in de reclame gebeurt.'],
['Wat gebeurt er als een storyboard is goedgekeurd door de opdrachtgever?',['Het plan wordt afgekeurd','De reclame wordt gemaakt','De persona wordt aangepast','Er wordt een nieuwe doelgroep gezocht'],1,'Na goedkeuring van het storyboard gaan de reclamemakers de reclame daadwerkelijk maken.'],
['Waarmee begin je een presentatie van een reclameplan?',['Met het noemen van het product en de persona','Met een grap','Met de prijs van het product','Met het einde van de reclame'],0,'Je benoemt eerst het product en de persona die daarbij past.'],
['Wie geeft feedback op een reclameplan voordat de reclame gemaakt wordt?',['De concurrent','De opdrachtgever','Een willekeurige voorbijganger','Niemand'],1,'De opdrachtgever geeft vaak meerdere keren feedback, die verwerkt wordt in het storyboard.'],
['Waarop is een stop-motion-reclame gebaseerd?',['Een persona zonder storyboard','Het uitgewerkte storyboard','Alleen muziek','Een willekeurige tekening'],1,'Je werkt de afbeeldingen uit je storyboard stap voor stap uit tot een stop-motion-reclame.'],
['\'De reclame trekt de aandacht\' hoort bij welk onderdeel van een goede reclame?',['Aandacht trekken (Hé, wat is dat?)','Aanzetten tot actie','Herhaling','Persona'],0,'Dit is het eerste onderdeel van een goed gemaakte reclame uit de theorie.'],
['Reclamemakers die \'gewone mensen\' een product laten aanprijzen, gebruiken:',['Inzet van gewone mensen','Inzet van autoriteit','Humor','Herhaling'],0,'Bij deze techniek prijzen gewone mensen (geen experts) het product aan.'],
['Reclamemakers die een wetenschapper een product laten aanprijzen, gebruiken:',['Inzet van gewone mensen','Inzet van autoriteit','Aanzetten tot actie','Herhaling'],1,'Een expert of bekend persoon inzetten is de techniek \'inzet van autoriteit\'.'],
['Wat vertel je tijdens het presenteren van een reclameplan behalve wát er gebeurt?',['Alleen de prijs','Ook hoe de reclame gemaakt wordt en welke technieken gebruikt worden','Niets, alleen het storyboard laten zien is genoeg','Alleen de naam van de opdrachtgever'],1,'Je legt ook uit hoe de reclame gemaakt wordt, welke technieken gebruikt worden en waarom.']
]
});
