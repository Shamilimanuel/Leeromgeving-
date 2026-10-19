import { registerChapter } from '../../../registry.js';

/* Rebuilt 2026-09-25 to the recipe of Economie TL4 H1 (change 6). Fixed:
   "iemand de kop koud maken" is not a standard idiom and not in the book;
   the book's own examples (voor aap staan, van een mug een olifant maken,
   ik tril van woede) are used instead. Terms, cards and quiz unchanged. */
registerChapter('nederlands|tl|1|4', {
title:'Taal',
summary:[
{heading:'Moedertaal',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>wat je <b>moedertaal</b> en een <b>tweede taal</b> zijn</li></ul></div>`
+`<div class="box"><h4>Waar dit hoofdstuk over gaat</h4><p>Je ontdekt hoe bijzonder <b>taal</b> is: je <b>moedertaal</b>, <b>dialecten</b>, hoe taal <b>verandert</b>, de <b>bouwstenen</b> van taal, <b>formeel en informeel</b>, <b>letterlijk en figuurlijk</b>, <b>beeldtaal</b> en <b>dyslexie</b>.</p></div>`
+`<h5 class="sub">Je eerste taal</h5>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Moedertaal</h4><p>De taal die je als kind als <b>eerste</b> leerde, meestal van je <b>ouders</b>.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Tweede taal</h4><p>Een taal die je <b>later</b> leert en bijna net zo <b>goed</b> spreekt.</p></div></div>`
+`<div class="box"><h4>Niet voor iedereen hetzelfde</h4><p>Voor de meeste leerlingen in Nederland is de moedertaal <b>Nederlands</b>, maar voor sommigen is dat een <b>andere</b> taal. Dan is Nederlands vaak hun <b>tweede taal</b>.</p></div>`
+`<div class="call reken"><b>Vraag jezelf af</b><ol class="num">
<li>Welke taal leerde je als <b>eerste</b>? Dat is je moedertaal.</li>
<li>Welke taal leerde je <b>later</b> bijna net zo goed? Dat is een tweede taal.</li></ol></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Wat is je moedertaal?</p><p class="check-a">De taal die je als kind als <b>eerste</b> hebt geleerd.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li><b>Moedertaal</b>: als eerste geleerd.</li>
<li><b>Tweede taal</b>: later geleerd, bijna even goed.</li></ul></div>`},

{heading:'Taal uit de buurt',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>wat een <b>dialect</b> of <b>streektaal</b> is</li></ul></div>`
+`<h5 class="sub">Anders per regio</h5>`
+`<div class="box"><h4>Dialect</h4><p>Niet iedereen in Nederland spreekt precies <b>dezelfde</b> taal. Per plek worden woorden anders <b>uitgesproken</b>, of gebruikt men <b>andere woorden</b> voor hetzelfde. Zo'n taalvariant die typisch is voor een <b>regio</b>, heet een <b>dialect</b> of <b>streektaal</b>.</p></div>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Standaardtaal</h4><p>Het Nederlands dat je <b>overal</b> in het land begrijpt, zoals op het nieuws.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Dialect</h4><p>Taal van één <b>streek</b>, met eigen <b>klanken</b> en <b>woorden</b>.</p></div></div>`
+`<div class="call waarom">Waarom zijn dialecten bijzonder? Ze laten zien dat taal verbonden is met <b>waar je vandaan komt</b>: een dialect hoort bij de <b>identiteit</b> van een regio.</div>`
+`<div class="call reken"><b>Zo herken je een dialect</b><ol class="num">
<li>Klinken woorden <b>anders</b> dan je gewend bent?</li>
<li>Hoor je <b>woorden</b> die je niet kent voor gewone dingen?</li>
<li>Hoort het bij één <b>streek</b>? Dan is het een dialect.</li></ol></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Wat is een ander woord voor dialect?</p><p class="check-a"><b>Streektaal</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li><b>Dialect</b> = taal van een <b>regio</b>.</li>
<li>Het hoort bij de <b>identiteit</b> van een streek.</li></ul></div>`},

{heading:'Taalverandering',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>hoe en waarom <b>taal verandert</b></li></ul></div>`
+`<h5 class="sub">Taal staat niet stil</h5>`
+`<div class="term"><b>Taalverandering</b><span>Taal verandert in de loop van de tijd: er komen woorden bij en er verdwijnen woorden.</span></div>`
+`<div class="call reken"><b>Drie manieren waarop taal verandert</b><ol class="num">
<li>Er komen <b>nieuwe woorden</b> bij, bijvoorbeeld door nieuwe <b>technologie</b> of <b>trends</b>.</li>
<li><b>Oude woorden</b> verdwijnen, omdat niemand ze meer gebruikt.</li>
<li>De <b>betekenis</b> van een woord verandert.</li></ol></div>`
+`<div class="call waarom">Waarom verandert taal? Omdat de <b>maatschappij</b> verandert: nieuwe <b>uitvindingen</b>, nieuwe <b>gewoontes</b> en contact met <b>andere talen</b> zorgen voor nieuwe woorden.</div>`
+`<div class="voorbeeld"><h4>Voorbeeld: een nieuw woord</h4><p>Waar komt een woord als &lsquo;appen&rsquo; vandaan?</p><div class="antwoord">Van een nieuwe <b>technologie</b>: berichten sturen met een app. Het woord bestond vroeger niet.</div></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Noem een oorzaak van taalverandering.</p><p class="check-a">Bijvoorbeeld nieuwe <b>technologie</b>, nieuwe <b>gewoontes</b> of contact met <b>andere talen</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li>Woorden komen <b>bij</b>, verdwijnen, of krijgen een andere <b>betekenis</b>.</li>
<li>Taal verandert omdat de <b>maatschappij</b> verandert.</li></ul></div>`},

{heading:'Bouwstenen',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>de <b>bouwstenen</b> van taal: letters, lettergrepen, woorden, zinnen, tekst</li>
<li>wat het <b>alfabet</b>, <b>karakters</b> en de <b>schrijfrichting</b> zijn</li></ul></div>`
+`<h5 class="sub">Zoals legostukjes</h5>`
+`<div class="call reken"><b>Van klein naar groot</b><ol class="num">
<li><b>Letters</b>: de losse legostukjes.</li>
<li><b>Lettergrepen</b>: groepjes letters die samen één <b>klank</b> maken.</li>
<li><b>Woorden</b>: letters aan elkaar.</li>
<li><b>Zinnen</b>: woorden aan elkaar.</li>
<li><b>Tekst</b>: zinnen aan elkaar.</li></ol></div>`
+`<h5 class="sub">Letters of karakters</h5>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Alfabet</h4><p>Letters in een vaste <b>volgorde</b>. Ons alfabet heeft <b>26 letters</b>.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Karakters</h4><p>Tekens die een <b>klank</b> of <b>begrip</b> weergeven. Het Chinees heeft er <b>tienduizenden</b>.</p></div></div>`
+`<div class="term"><b>Schrijfrichting</b><span>De richting waarin je leest en schrijft. Meestal van links naar rechts; Arabisch van rechts naar links; Chinees van boven naar beneden.</span></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: lettergrepen</h4><p>In hoeveel lettergrepen verdeel je &lsquo;schoolboek&rsquo;?</p><div class="antwoord"><b>school-boek</b>: twee lettergrepen, twee klanken.</div></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Hoeveel letters heeft ons alfabet?</p><p class="check-a"><b>26</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li>Letters &rarr; lettergrepen &rarr; woorden &rarr; zinnen &rarr; <b>tekst</b>.</li>
<li><b>Alfabet</b>: 26 letters. <b>Karakters</b>: tekens voor klank of begrip.</li></ul></div>`},

{heading:'Formeel en informeel',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>kiezen tussen <b>formele</b> en <b>informele</b> taal</li></ul></div>`
+`<h5 class="sub">Je taal aanpassen</h5>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Informele taal</h4><p>Tegen <b>vrienden</b> en familie: makkelijke woorden, spreektaal, <b>je</b> of <b>jij</b>.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Formele taal</h4><p>Tegen een <b>docent</b>, een onbekende volwassene of in een officiële <b>brief</b>: nettere woorden, vaak <b>u</b>.</p></div></div>`
+`<div class="call reken"><b>Zo kies je</b><ol class="num">
<li>Wie is je <b>publiek</b>? Leeftijd, en hoe goed ken je iemand?</li>
<li>Hoe is de <b>situatie</b>: officieel of ontspannen?</li>
<li>Kies de <b>aanspreekvorm</b>: je/jij of u.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: twee berichten</h4><p>Hetzelfde vragen aan een vriend en aan de directeur.</p><div class="antwoord">Vriend: &lsquo;Hé, heb <b>jij</b> morgen tijd?&rsquo; Directeur: &lsquo;Geachte heer, heeft <b>u</b> morgen tijd voor een gesprek?&rsquo;</div></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Welke aanspreekvorm hoort bij formele taal?</p><p class="check-a"><b>u</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li><b>Informeel</b>: je/jij, spreektaal.</li>
<li><b>Formeel</b>: u, nette woorden.</li>
<li>Let op <b>publiek</b> en <b>situatie</b>.</li></ul></div>`},

{heading:'Letterlijk en figuurlijk',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>het verschil tussen <b>letterlijk</b> en <b>figuurlijk</b> taalgebruik herkennen</li></ul></div>`
+`<h5 class="sub">Echt zo, of anders bedoeld?</h5>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Letterlijk</h4><p>Je bedoelt <b>precies</b> wat er staat.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Figuurlijk</h4><p>Je bedoelt iets <b>anders</b> dan er letterlijk staat.</p></div></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: uit het gedicht in het boek</h4><p>&lsquo;Hij roept: <b>ik tril van woede</b>! &hellip; En ja hoor, hij trilt letterlijk. Want van een vieze kamer wordt m'n pa <b>figuurlijk wild</b>.&rsquo;</p><div class="antwoord">Hij <b>trilt echt</b>: letterlijk. Hij wordt geen <b>wild dier</b>: &lsquo;wild&rsquo; is figuurlijk, hij wordt heel boos.</div></div>`
+`<div class="box"><h4>Vaste uitdrukkingen</h4><p>Figuurlijk taalgebruik zit vaak in <b>vaste uitdrukkingen</b>: <b>voor aap staan</b> (je belachelijk voelen), <b>van een mug een olifant maken</b> (iets erger maken dan het is), <b>je een hoedje schrikken</b> (heel erg schrikken).</p></div>`
+`<div class="call reken"><b>Zo herken je figuurlijk taalgebruik</b><ol class="num">
<li>Stel je voor wat er <b>letterlijk</b> staat.</li>
<li>Kan dat <b>echt</b>? Zo niet, dan is het figuurlijk.</li>
<li>Bedenk wat er <b>eigenlijk</b> bedoeld wordt.</li></ol></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">&lsquo;Van een mug een olifant maken&rsquo;: letterlijk of figuurlijk?</p><p class="check-a"><b>Figuurlijk</b>: je maakt iets erger dan het is.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li><b>Letterlijk</b>: precies zoals het staat.</li>
<li><b>Figuurlijk</b>: iets anders bedoeld, vaak een <b>uitdrukking</b>.</li></ul></div>`},

{heading:'Beeldtaal',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>wat <b>beeldtaal</b> is: <b>verkeersborden</b>, <b>emoji</b> en <b>pictogrammen</b></li></ul></div>`
+`<h5 class="sub">Communiceren met beelden</h5>`
+`<div class="term"><b>Beeldtaal</b><span>Taal in beelden. Beelden geven snel informatie.</span></div>`
+`<div class="g3">`
+`<div class="box"><h4>Verkeersborden</h4><p>Tekens voor de <b>afspraken</b> in het verkeer. Zonder die afspraken zouden er <b>ongelukken</b> gebeuren.</p></div>`
+`<div class="box"><h4>Emoji</h4><p><b>e</b> = afbeelding, <b>moji</b> = teken. Ze komen uit <b>Japan</b> en worden nu <b>overal</b> gebruikt.</p></div>`
+`<div class="box"><h4>Pictogrammen</h4><p>Eenvoudige <b>symbolen</b> die tekst vervangen: een <b>wasvoorschrift</b> op een label, de <b>kijkwijzer</b> bij een film.</p></div></div>`
+`<div class="call waarom">Waarom beeldtaal? Een beeld zie je in één <b>oogopslag</b> en begrijp je ook als je de <b>taal</b> niet spreekt. Handig in het verkeer en op reis.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Waar komen emoji's oorspronkelijk vandaan?</p><p class="check-a">Uit <b>Japan</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li><b>Beeldtaal</b>: verkeersborden, emoji, pictogrammen.</li>
<li>Een <b>pictogram</b> vervangt tekst.</li></ul></div>`},

{heading:'Dyslexie',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>wat <b>dyslexie</b> is</li></ul></div>`
+`<h5 class="sub">Moeite met lezen en spellen</h5>`
+`<div class="term"><b>Dyslexie</b><span>Moeite met het goed en snel lezen en/of spellen van woorden, doordat de informatie niet goed wordt verwerkt in de hersenen.</span></div>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Wat het wel is</h4><p>Informatie over <b>letters</b> en <b>woorden</b> wordt anders verwerkt in de <b>hersenen</b>.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Wat het niet is</h4><p>Het heeft <b>niets</b> te maken met hoe <b>slim</b> iemand is.</p></div></div>`
+`<div class="call reken"><b>Wat helpt?</b><ol class="num">
<li>De juiste <b>hulp</b>, bijvoorbeeld van een docent of specialist.</li>
<li><b>Extra tijd</b> bij lezen en toetsen.</li></ol></div>`
+`<div class="call waarom">Met de juiste hulp en extra tijd kunnen mensen met dyslexie vaak <b>goed</b> leren lezen en schrijven.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Heeft dyslexie te maken met hoe slim je bent?</p><p class="check-a"><b>Nee</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li><b>Dyslexie</b>: moeite met lezen en/of spellen.</li>
<li>Niets te maken met <b>slimheid</b>; <b>hulp</b> en <b>extra tijd</b> helpen.</li></ul></div>`}
],
terms:[
['Moedertaal','De taal die je als kind als eerste hebt geleerd.',0],
['Tweede taal','Een taal die je later erbij leert en bijna net zo goed leert spreken als je moedertaal.',0],
['Dialect','Een taalvariant die typisch is voor een bepaalde regio of streek.',1],
['Taalverandering','Het proces waarbij taal in de loop van de tijd verandert: er komen woorden bij en woorden verdwijnen.',2],
['Alfabet','De verzameling letters van een taal.',3],
['Karakter','Een teken dat een klank of begrip weergeeft, zoals in het Chinees.',3],
['Lettergreep','Een groepje letters dat samen één klank maakt.',3],
['Schrijfrichting','De richting waarin je een taal leest en schrijft.',3],
['Formele taal','Taal voor serieuze, officiële situaties, vaak met \'u\' als aanspreekvorm.',4],
['Informele taal','Taal voor situaties met bijvoorbeeld vrienden en familie, vaak met \'je\' of \'jij\'.',4],
['Letterlijk taalgebruik','Taal waarmee je precies bedoelt wat er staat.',5],
['Figuurlijk taalgebruik','Taal waarmee je iets anders bedoelt dan wat er letterlijk staat.',5],
['Beeldtaal','Taal in beelden.',6],
['Pictogram','Een symbool of eenvoudig plaatje dat een tekst vervangt.',6],
['Emoji','Een plaatje dat je bijvoorbeeld in een appje gebruikt om iets duidelijk te maken.',6],
['Dyslexie','Het niet goed kunnen lezen en schrijven van letters, woorden en zinnen, doordat informatie niet goed verwerkt wordt in de hersenen.',7]
],
cards:[
['Wat is je moedertaal?','De taal die je als kind als eerste hebt geleerd.',0],
['Wat is een dialect?','Een taalvariant die typisch is voor een bepaalde regio of streek.',1],
['Wat gebeurt er bij taalverandering?','Er komen nieuwe woorden bij en oude woorden verdwijnen uit gebruik.',2],
['Wat is de kleinste bouwsteen van taal?','De letter.',3],
['Wat is een lettergreep?','Een groepje letters dat samen één klank maakt.',3],
['Wat gebruikt het Chinees in plaats van letters?','Karakters.',3],
['Welke aanspreekvorm hoort bij formele taal?','\'U\'.',4],
['Wanneer gebruik je informele taal?','Bijvoorbeeld tegen vrienden en familie.',4],
['Wat is letterlijk taalgebruik?','Taal waarmee je precies bedoelt wat er staat.',5],
['Wat betekent \'ik schrok me een hoedje\' figuurlijk?','Dat je erg schrok (niet dat er letterlijk een hoedje verscheen).',5],
['Wat is een pictogram?','Een symbool of eenvoudig plaatje dat een tekst vervangt.',6],
['Waar komt de emoji oorspronkelijk vandaan?','Uit Japan.',6],
['Wat is dyslexie?','Het niet goed kunnen lezen en schrijven doordat informatie niet goed verwerkt wordt in de hersenen.',7]
],
quiz:[
['Wat is je moedertaal?',['De taal die je op school leert','De taal die je als kind als eerste hebt geleerd','Een taal die je later erbij leert','De officiële taal van een land'],1,'Je moedertaal is de taal die je als kind als eerste hebt geleerd.'],
['Wat is een dialect?',['Een geheime taal','Een taalvariant die typisch is voor een bepaalde regio','Een oude, uitgestorven taal','Een taal met alleen karakters'],1,'Een dialect is een taalvariant die hoort bij een bepaalde streek.'],
['Wat is taalverandering?',['Een taal die nooit verandert','Het proces waarbij taal in de loop van de tijd verandert','Het leren van een tweede taal','Het spreken van een dialect'],1,'Taal verandert voortdurend: er komen woorden bij en woorden verdwijnen.'],
['Waaruit bestaat een woord volgens de theorie over bouwstenen?',['Uit zinnen','Uit letters','Uit teksten','Uit alinea\'s'],1,'Letters zijn de bouwstenen; meerdere letters samen vormen een woord.'],
['Wat is een lettergreep?',['Een heel woord','Een groepje letters dat samen één klank maakt','Een leesteken','Een zin'],1,'Een lettergreep is een groepje letters dat samen één klank vormt.'],
['Wat gebruikt het Chinese schrift?',['Alleen het Latijnse alfabet','Karakters','Alleen emoji\'s','Geen tekens'],1,'Het Chinees gebruikt karakters in plaats van een alfabet met letters.'],
['In welke richting lees en schrijf je Arabisch?',['Van links naar rechts','Van rechts naar links','Van boven naar beneden','Van onder naar boven'],1,'Arabisch wordt van rechts naar links gelezen en geschreven.'],
['Welke aanspreekvorm past bij formele taal?',['Je/jij','U','Hé','Doei'],1,'Bij formele taal gebruik je meestal de beleefdheidsvorm \'u\'.'],
['Wanneer gebruik je waarschijnlijk informele taal?',['In een sollicitatiebrief','In een appje aan een vriend','In een officiële e-mail aan de directeur','In een zakelijke brief'],1,'Tegen vrienden gebruik je meestal informele, spreektaalachtige taal.'],
['Wat is letterlijk taalgebruik?',['Taal met veel uitdrukkingen','Taal waarmee je precies bedoelt wat er staat','Taal die altijd rijmt','Taal in beelden'],1,'Bij letterlijk taalgebruik bedoel je precies wat er staat.'],
['Wat betekent figuurlijk taalgebruik?',['Je bedoelt precies wat er staat','Je bedoelt iets anders dan wat er letterlijk staat','Je gebruikt alleen cijfers','Je spreekt in een dialect'],1,'Bij figuurlijk taalgebruik bedoel je iets anders dan wat er letterlijk staat, zoals bij een uitdrukking.'],
['Wat is een pictogram?',['Een lang verhaal','Een symbool dat een tekst vervangt','Een soort dialect','Een lettergreep'],1,'Een pictogram is een eenvoudig symbool of plaatje dat de plaats van tekst inneemt.'],
['Waar komt het woord \'emoji\' vandaan?',['Uit het Engels','Uit het Japans','Uit het Frans','Uit het Arabisch'],1,'Emoji\'s komen oorspronkelijk uit Japan; \'e\' betekent afbeelding en \'moji\' karakter.'],
['Wat is dyslexie?',['Een taal die uitgestorven is','Een aandoening waarbij lezen en spellen moeilijk gaat door verwerking in de hersenen','Een dialect uit het zuiden','Een soort beeldtaal'],1,'Dyslexie is het niet goed kunnen lezen en schrijven doordat informatie niet goed verwerkt wordt in de hersenen.'],
['Zegt dyslexie iets over hoe slim iemand is?',['Ja, mensen met dyslexie zijn minder slim','Nee, dyslexie heeft niets te maken met intelligentie','Ja, altijd','Alleen bij volwassenen'],1,'Dyslexie heeft niets te maken met hoe slim iemand is.']
]
});
