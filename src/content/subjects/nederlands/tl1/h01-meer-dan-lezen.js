import { registerChapter } from '../../../registry.js';

/* Rebuilt 2026-09-25 to the recipe of Economie TL4 H1 (change 6). Fixed:
   1.1 listed general word strategies (knip het woord, sla het over) that
   are not the book's; the book teaches three: synoniem, omschrijving and
   voorbeeld zoeken, with its own examples. A flashcard with the same
   mistake is fixed. Terms and quiz unchanged; the "builds on" link stays. */
registerChapter('nederlands|tl|1|1', {
title:'Meer dan lezen',
summary:[
{heading:'Onbekende woorden',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>de betekenis van <b>onbekende woorden</b> ontdekken</li>
<li>drie <b>woordraadstrategieën</b>: <b>synoniem</b>, <b>omschrijving</b> en <b>voorbeeld</b> zoeken</li></ul></div>`
+`<div class="box"><h4>Waar dit hoofdstuk over gaat</h4><p>Je leert een tekst goed en slim <b>lezen</b>: <b>onbekende woorden</b> raden, het <b>onderwerp</b> en de <b>hoofdgedachte</b> vinden, <b>tekstdoelen</b> en <b>tekstsoorten</b> herkennen, de <b>opbouw</b> zien en <b>deelonderwerpen</b> kiezen. Aan het eind zet je alles in een <b>stappenplan lezen</b>.</p></div>`
+`<h5 class="sub">Drie woordraadstrategieën</h5>`
+`<div class="g3">`
+`<div class="box"><h4>Synoniem zoeken</h4><p>Een <b>ander woord</b> met ongeveer <b>dezelfde betekenis</b>, zoals trottoir en <b>stoep</b>. Het gaat om <b>één</b> woord.</p></div>`
+`<div class="box"><h4>Omschrijving zoeken</h4><p>Een <b>uitleg</b> van het woord, met <b>meer woorden</b>. Vaak tussen <b>haakjes</b> of <b>komma's</b>.</p></div>`
+`<div class="box"><h4>Voorbeeld zoeken</h4><p>De tekst noemt <b>voorbeelden</b>, vaak na <b>bijvoorbeeld</b>, een <b>dubbele punt</b> of tussen haakjes.</p></div></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: drie keer raden</h4><p>Welke strategie helpt?</p><div class="antwoord">&lsquo;Amin <b>transpireert</b> in de zon. Hij rent over het veld en <b>zweet</b> enorm.&rsquo; <b>Synoniem</b>: transpireren = zweten. &lsquo;Hidde werkt in de <b>akkerbouw</b>, <b>een vorm van landbouw</b> waar hij mais kweekt.&rsquo; <b>Omschrijving</b>. &lsquo;Yoesra verzamelt haar <b>tekengerei</b> (<b>potloden, wasco en stiften</b>).&rsquo; <b>Voorbeeld</b>.</div></div>`
+`<div class="call reken"><b>Stappenplan: een onbekend woord</b><ol class="num">
<li>Kijk of er in <b>dezelfde zin</b> een synoniem, omschrijving of voorbeeld staat.</li>
<li>Zo niet: lees ook de zin <b>ervóór</b> en de zin <b>erna</b>.</li>
<li>Lukt het niet? Gebruik een <b>woordenboek</b>.</li></ol></div>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Synoniem</h4><p><b>Eén</b> woord met dezelfde betekenis.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Omschrijving</h4><p>Een uitleg in <b>meer</b> woorden.</p></div></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">&lsquo;In het ziekenhuis werken specialisten, bijvoorbeeld een oogarts en een chirurg.&rsquo; Welke strategie helpt bij specialisten?</p><p class="check-a"><b>Voorbeeld zoeken</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li><b>Synoniem</b>, <b>omschrijving</b>, <b>voorbeeld</b>.</li>
<li>Kijk in de zin zelf, de zin <b>ervóór</b> en de zin <b>erna</b>.</li></ul></div>`},

{heading:'Onderwerp',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>het <b>onderwerp</b> van een tekst vinden door <b>oriënterend</b> te lezen</li></ul></div>`
+`<h5 class="sub">Waar gaat het over?</h5>`
+`<div class="box"><h4>Onderwerp</h4><p>Het <b>onderwerp</b> is <b>waar de tekst over gaat</b>, in een paar woorden. Je vindt het door <b>oriënterend</b> te lezen: snel kijken, nog niet alles lezen.</p></div>`
+`<div class="call reken"><b>Stappenplan: het onderwerp vinden</b><ol class="num">
<li>Lees de <b>titel</b> en de <b>tussenkopjes</b>.</li>
<li>Bekijk de <b>afbeeldingen</b>.</li>
<li>Lees de <b>eerste alinea</b>; daar wordt het onderwerp vaak genoemd.</li>
<li>Zeg in <b>een paar woorden</b> waar de hele tekst over gaat.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: een oude snackbar</h4><p>Een tekst vertelt dat in Italië een snackbar is gevonden die na een uitbarsting van de <b>Vesuvius</b> onder de as lag.</p><div class="antwoord">Onderwerp in een paar woorden: <b>een oude snackbar gevonden</b>.</div></div>`
+`<div class="call warn"><b>Let op:</b> het onderwerp is <b>kort</b>: een paar woorden, geen hele zin. De hele boodschap is de <b>hoofdgedachte</b> (zie hierna).</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Wat bekijk je bij oriënterend lezen?</p><p class="check-a"><b>Titel</b>, <b>tussenkopjes</b>, <b>afbeeldingen</b> en de eerste alinea.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li><b>Onderwerp</b> = waar de tekst over gaat, in een paar woorden.</li>
<li>Vind het met <b>oriënterend lezen</b>.</li></ul></div>`},

{heading:'Hoofdgedachte',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>de <b>hoofdgedachte</b> van een tekst vinden</li></ul></div>`
+`<h5 class="sub">De kern van de boodschap</h5>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Onderwerp</h4><p><b>Waar</b> gaat het over? In een paar <b>woorden</b>.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Hoofdgedachte</h4><p><b>Wat</b> wil de schrijver erover zeggen? In <b>één zin</b>.</p></div></div>`
+`<div class="call reken"><b>Stappenplan: de hoofdgedachte vinden</b><ol class="num">
<li>Bepaal eerst het <b>onderwerp</b>.</li>
<li>Lees de tekst <b>precies</b>, helemaal.</li>
<li>Vraag je af: wat is het <b>belangrijkste</b> dat de schrijver over dit onderwerp wil zeggen?</li>
<li>Vat dat samen in <b>één zin</b>.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: onderwerp en hoofdgedachte</h4><p>Een tekst over schermtijd waarin de schrijver steeds laat zien dat je door te veel schermtijd slechter slaapt.</p><div class="antwoord">Onderwerp: <b>schermtijd</b>. Hoofdgedachte: <b>Te veel schermtijd zorgt ervoor dat je slechter slaapt.</b></div></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">In hoeveel zinnen schrijf je de hoofdgedachte op?</p><p class="check-a">In <b>één zin</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li><b>Hoofdgedachte</b> = het belangrijkste wat de schrijver zegt.</li>
<li>Eerst onderwerp, dan precies lezen, dan <b>één zin</b>.</li></ul></div>`},

{heading:'Tekstdoelen en tekstsoorten',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>drie <b>tekstdoelen</b>: informeren, instrueren en overtuigen</li>
<li>bij elk tekstdoel passende <b>tekstsoorten</b></li></ul></div>`
+`<h5 class="sub">Wat wil de schrijver bereiken?</h5>`
+`<div class="box"><h4>Tekstdoel</h4><p>Een schrijver wil met een tekst altijd iets <b>bereiken</b>: het <b>tekstdoel</b>. Er zijn <b>vijf</b> tekstdoelen; hier leer je er <b>drie</b>.</p></div>`
+`<div class="tblwrap"><table class="tbl"><tr><th>Tekstdoel</th><th>De schrijver wil &hellip;</th><th>Tekstsoorten</th></tr><tr><td><b>Informeren</b></td><td>dat je iets te <b>weten</b> komt</td><td>nieuwsbericht, schoolboek, verslag</td></tr><tr><td><b>Instrueren</b></td><td>dat je leert hoe je iets <b>moet doen</b></td><td>gebruiksaanwijzing, spelregels</td></tr><tr><td><b>Overtuigen</b></td><td>dat je zijn <b>mening</b> overneemt</td><td>bespreking van een boek of film</td></tr></table></div>`
+`<div class="call reken"><b>Stappenplan: het tekstdoel vinden</b><ol class="num">
<li>Bedenk wat de schrijver vooral wil <b>bereiken</b>.</li>
<li>Kijk welke <b>tekstsoort</b> het is: een nieuwsbericht, een gebruiksaanwijzing?</li>
<li>Kies het tekstdoel dat erbij past.</li></ol></div>`
+`<div class="call warn"><b>Instinker:</b> een filmbespreking vertelt ook waar de film over gaat, maar het <b>belangrijkste</b> is dat je de mening overneemt: <b>overtuigen</b>.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Welk tekstdoel hoort bij spelregels?</p><p class="check-a"><b>Instrueren</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li><b>Informeren</b>, <b>instrueren</b>, <b>overtuigen</b>.</li>
<li>De <b>tekstsoort</b> helpt je het doel te vinden.</li></ul></div>`},

{heading:'Inleiding, middenstuk en slot',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>de <b>opbouw</b> van een tekst: <b>inleiding</b>, <b>middenstuk</b> en <b>slot</b></li></ul></div>`
+`<h5 class="sub">Drie delen</h5>`
+`<div class="g3">`
+`<div class="box"><h4>Inleiding</h4><p>Het <b>eerste</b> deel. Je maakt kennis met het <b>onderwerp</b>, vaak met een <b>voorbeeld</b> of een grappig verhaaltje.</p></div>`
+`<div class="box"><h4>Middenstuk</h4><p>Het <b>grootste</b> deel, met de meeste <b>informatie</b>, verdeeld over <b>alinea's</b>.</p></div>`
+`<div class="box"><h4>Slot</h4><p>Het <b>laatste</b> stukje. Vaak wordt het <b>belangrijkste</b> kort herhaald.</p></div></div>`
+`<div class="call reken"><b>Zo vind je de drie delen</b><ol class="num">
<li>De <b>eerste alinea</b> is meestal de inleiding.</li>
<li>De <b>laatste alinea</b> is meestal het slot.</li>
<li>Alles <b>ertussen</b> is het middenstuk.</li></ol></div>`
+`<div class="call warn"><b>Let op:</b> <b>nieuwsberichten</b> hebben vaak <b>geen slot</b>. Kijk- en luisterfragmenten hebben meestal wel alle drie de delen.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Welk deel van een tekst is het grootst?</p><p class="check-a">Het <b>middenstuk</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li><b>Inleiding</b>: kennismaken met het onderwerp.</li>
<li><b>Middenstuk</b>: de meeste informatie. <b>Slot</b>: herhaling van het belangrijkste.</li></ul></div>`},

{heading:'Deelonderwerpen',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>goede <b>deelonderwerpen</b> kiezen bij een onderwerp</li></ul></div>`
+`<h5 class="sub">Kleinere onderdelen</h5>`
+`<div class="box"><h4>Deelonderwerpen</h4><p>Bij een onderwerp schieten er vaak veel <b>ideeën</b> door je hoofd. Dat zijn mogelijke <b>deelonderwerpen</b>: <b>kleinere onderdelen</b> van het grote onderwerp. Kies er niet <b>te veel</b> (dan wordt je tekst te lang) en niet <b>te weinig</b> (dan heb je weinig te vertellen).</p></div>`
+`<div class="call reken"><b>Stappenplan: deelonderwerpen kiezen</b><ol class="num">
<li>Maak een <b>woordweb</b> bij je onderwerp.</li>
<li>Omcirkel de deelonderwerpen waarover je het <b>meest</b> kunt vertellen.</li>
<li>Gebruik <b>hulpbronnen</b>, zoals internet, om te checken of er genoeg over te vinden is.</li>
<li>Weinig te vertellen? Laat het <b>weg</b> of <b>combineer</b> het met een ander deelonderwerp.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: onderwerp &lsquo;honden&rsquo;</h4><p>In je woordweb staan: rassen, verzorging, training, kleur van de riem.</p><div class="antwoord">Goede deelonderwerpen: <b>rassen</b>, <b>verzorging</b> en <b>training</b>. Over &lsquo;kleur van de riem&rsquo; valt weinig te vertellen: <b>weglaten</b>.</div></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Wat is een deelonderwerp?</p><p class="check-a">Een <b>kleiner onderdeel</b> van het grote onderwerp.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li>Deelonderwerpen vind je met een <b>woordweb</b>.</li>
<li>Niet <b>te veel</b>, niet <b>te weinig</b>.</li></ul></div>`},

{heading:'Stappenplan lezen',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>een tekst <b>zelfstandig</b> lezen en begrijpen met het <b>stappenplan lezen</b></li></ul></div>`
+`<h5 class="sub">Lezen zonder vragen</h5>`
+`<div class="box"><h4>Waarom een stappenplan?</h4><p>Bij andere vakken of in de krant staan meestal <b>geen vragen</b> bij een tekst. Toch moet je hem <b>begrijpen</b>. Met dit stappenplan lukt dat.</p></div>`
+`<div class="call reken"><b>Stappenplan lezen</b><ol class="num">
<li><b>Oriënterend lezen</b>: markeer titel en tussenkopjes, bekijk de afbeelding en noteer het <b>onderwerp</b>.</li>
<li><b>Globaal lezen</b>: welke alinea is de <b>inleiding</b>, welke het <b>slot</b>? De rest is het middenstuk.</li>
<li><b>Precies lezen</b>: raad onbekende woorden, noteer de <b>deelonderwerpen</b>, het <b>tekstdoel</b> en de <b>tekstsoort</b>.</li>
<li><b>Bijna klaar</b>: noteer de <b>hoofdgedachte</b>.</li></ol></div>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Oriënterend / globaal</h4><p><b>Snel</b>: een eerste beeld en de opbouw.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Precies</h4><p><b>Grondig</b>: elke zin, alle details.</p></div></div>`
+`<div class="call link"><b>Dit bouwt voort op:</b> Meer dan lezen &sect; 1 t/m 6, alle vaardigheden uit dit hoofdstuk komen hier samen.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Wat noteer je als laatste stap?</p><p class="check-a">De <b>hoofdgedachte</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li><b>Oriënterend</b>, <b>globaal</b>, <b>precies</b> lezen.</li>
<li>Eindig met de <b>hoofdgedachte</b>.</li></ul></div>`}
],
terms:[
['Onbekend woord','Een woord waarvan je de betekenis niet kent; je kunt de betekenis vaak raden met een woordraadstrategie.',0],
['Woordraadstrategie','Een manier om de betekenis van een onbekend woord te achterhalen zonder een woordenboek te gebruiken.',0],
['Onderwerp','Waar een tekst over gaat; je vindt het onderwerp door de tekst oriënterend te lezen.',1],
['Oriënterend lezen','Een tekst globaal bekijken (titel, tussenkopjes, afbeeldingen, eerste en laatste alinea) om het onderwerp te vinden.',1],
['Hoofdgedachte','De belangrijkste gedachte van een tekst: wat de schrijver precies over het onderwerp wil vertellen.',2],
['Tekstdoel','Wat een schrijver met een tekst wil bereiken, bijvoorbeeld informeren, instrueren of overtuigen.',3],
['Informeren','Een tekstdoel: de schrijver wil dat je iets te weten komt, bijvoorbeeld in een nieuwsbericht.',3],
['Instrueren','Een tekstdoel: de schrijver wil dat je leert hoe je iets moet doen, bijvoorbeeld in een gebruiksaanwijzing.',3],
['Overtuigen','Een tekstdoel: de schrijver wil dat je zijn mening overneemt.',3],
['Tekstsoort','Het soort tekst dat je leest, zoals een nieuwsbericht, gebruiksaanwijzing of recensie.',3],
['Inleiding','Het eerste deel van een tekst, waarin je kennismaakt met het onderwerp.',4],
['Middenstuk','Het grootste deel van een tekst, met de meeste informatie, verdeeld over meerdere alinea\'s.',4],
['Slot','Het laatste deel van een tekst, waarin het belangrijkste kort wordt herhaald.',4],
['Deelonderwerp','Een kleiner onderdeel van het hoofdonderwerp van een tekst of filmpje.',5],
['Globaal lezen','Een tekst op hoofdlijnen lezen om de opbouw (inleiding, middenstuk, slot) te bepalen.',6],
['Precies lezen','Een tekst zorgvuldig lezen om onbekende woorden, deelonderwerpen en de hoofdgedachte te vinden.',6]
],
cards:[
['Wat doe je als eerste met een onbekend woord?','De zin (en de zinnen eromheen) nog een keer lezen; vaak geeft de tekst al een aanwijzing.',0],
['Noem twee woordraadstrategieën.','Bijvoorbeeld: een synoniem zoeken, een omschrijving zoeken of een voorbeeld zoeken.',0],
['Hoe vind je het onderwerp van een tekst?','Door de tekst oriënterend te lezen: titel, tussenkopjes, afbeeldingen en de eerste alinea bekijken.',1],
['Wat is het verschil tussen onderwerp en hoofdgedachte?','Het onderwerp is waar de tekst over gaat; de hoofdgedachte is wat de schrijver daar precies over wil zeggen.',2],
['Welke drie tekstdoelen leer je in dit hoofdstuk?','Informeren, instrueren en overtuigen.',3],
['Bij welk tekstdoel hoort een gebruiksaanwijzing?','Instrueren.',3],
['Bij welk tekstdoel hoort een nieuwsbericht?','Informeren.',3],
['Uit welke drie delen bestaat een tekst meestal?','Inleiding, middenstuk en slot.',4],
['Welk tekstsoort heeft vaak geen slot?','Een nieuwsbericht.',4],
['Wat is een deelonderwerp?','Een kleiner onderdeel van het hoofdonderwerp van een tekst.',5],
['Waarmee maak je makkelijk deelonderwerpen bij een onderwerp?','Met een woordweb.',5],
['Wat noteer je bij stap 4 (bijna klaar) van het stappenplan lezen?','De hoofdgedachte van de tekst.',6]
],
quiz:[
['Wat doe je het beste eerst als je een woord niet kent?',['Meteen het woordenboek pakken','De zin nog een keer lezen','Het hele stuk overslaan','Aan de docent vragen'],1,'De eerste woordraadstrategie is de zin (en de omliggende zinnen) nog eens goed lezen; vaak geeft de tekst al een aanwijzing over de betekenis.'],
['Wat is het onderwerp van een tekst?',['De titel van de tekst','Waar de tekst over gaat','De mening van de schrijver','Het laatste woord van de tekst'],1,'Het onderwerp is waar een tekst over gaat.'],
['Hoe lees je een tekst om het onderwerp te vinden?',['Precies','Globaal','Oriënterend','Kritisch'],2,'Je leest de tekst oriënterend: je bekijkt titel, tussenkopjes, afbeeldingen en de eerste alinea.'],
['Wat is de hoofdgedachte van een tekst?',['Het onderwerp van de tekst','De belangrijkste gedachte die de schrijver over het onderwerp wil overbrengen','De laatste zin van de tekst','De titel van de tekst'],1,'De hoofdgedachte is meer dan het onderwerp: het is wat de schrijver precies wil zeggen over dat onderwerp.'],
['Welk tekstdoel hoort bij een gebruiksaanwijzing?',['Informeren','Instrueren','Overtuigen','Amuseren'],1,'Een gebruiksaanwijzing legt uit hoe je iets moet doen: dat is instrueren.'],
['Welk tekstdoel hoort bij een recensie van een film?',['Informeren','Instrueren','Overtuigen','Instrueren en informeren'],2,'Bij een bespreking van een boek of film wil de schrijver dat je zijn mening overneemt: dat is overtuigen.'],
['Wat is het doel van een schrijver die een nieuwsbericht schrijft?',['Overtuigen','Instrueren','Informeren','Amuseren'],2,'Een nieuwsbericht wil dat je iets te weten komt: dat is informeren.'],
['Wat staat er meestal in de inleiding van een tekst?',['De meeste informatie','Een korte samenvatting van het slot','Een kennismaking met het onderwerp, vaak met een voorbeeld','Een lijst met bronnen'],2,'De inleiding is het eerste deel van een tekst, waarin je kennismaakt met het onderwerp.'],
['Waaruit bestaat het middenstuk van een tekst meestal?',['Uit één lange zin','Uit meerdere alinea\'s met de meeste informatie','Alleen uit een titel','Uit een samenvatting'],1,'Het middenstuk is het grootste deel van de tekst en bevat de meeste informatie, verdeeld over alinea\'s.'],
['Welke tekstsoort heeft vaak geen slot?',['Een verslag','Een nieuwsbericht','Een gebruiksaanwijzing','Een gedicht'],1,'Nieuwsberichten hebben vaak geen apart slot.'],
['Wat is een deelonderwerp?',['Een synoniem van het onderwerp','Een kleiner onderdeel van het hoofdonderwerp','De hoofdgedachte van een tekst','Het tekstdoel'],1,'Een deelonderwerp is een kleiner onderdeel van het grotere hoofdonderwerp.'],
['Waarom moet je niet te veel deelonderwerpen kiezen?',['Omdat de tekst dan te lang wordt','Omdat het dan te weinig informatie geeft','Omdat het verplicht is er maar één te kiezen','Omdat het dan geen inleiding meer heeft'],0,'Te veel deelonderwerpen maakt je tekst of filmpje te lang.'],
['Wat is de eerste stap van het stappenplan lezen?',['Precies lezen','Globaal lezen','Oriënterend lezen','De hoofdgedachte noteren'],2,'Je begint met oriënterend lezen: titel, tussenkopjes en afbeelding bekijken en het onderwerp noteren.'],
['Wat doe je bij de stap \'globaal lezen\' uit het stappenplan?',['Onbekende woorden opzoeken','Bepalen welke alinea inleiding, middenstuk en slot zijn','De hoofdgedachte noteren','Het woordenboek raadplegen'],1,'Bij globaal lezen bepaal je de opbouw van de tekst: inleiding, middenstuk en slot.'],
['Wat noteer je als laatste stap van het stappenplan lezen?',['Het onderwerp','De tekstsoort','De hoofdgedachte','De deelonderwerpen'],2,'Bij de laatste stap (\'bijna klaar\') noteer je de hoofdgedachte van de tekst.']
]
});
