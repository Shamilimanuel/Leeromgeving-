import { registerChapter } from '../../../registry.js';

/* Rebuilt 2026-09-25 to the recipe of Economie TL4 H1 (change 6). Added
   from the book: the full table of persoonlijke and bezittelijke
   voornaamwoorden (the paragraph only had a verwijswoorden table), and that
   a bezittelijk voornaamwoord always stands before its noun. Terms, cards
   and quiz unchanged. */
registerChapter('nederlands|tl|2|5', {
title:'Grammatica',
summary:[
{heading:'Voegwoord herkennen',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>een <b>voegwoord</b> herkennen</li></ul></div>`
+`<div class="box"><h4>Waar dit hoofdstuk over gaat</h4><p>Je leert meer <b>woordsoorten</b>: het <b>voegwoord</b> en het <b>persoonlijk</b> en <b>bezittelijk voornaamwoord</b>. En twee <b>zinsdelen</b>-onderwerpen: de <b>samengestelde zin</b> en het <b>lijdend voorwerp</b>.</p></div>`
+`<h5 class="sub">Zinnen aan elkaar plakken</h5>`
+`<div class="box"><h4>Voegwoord</h4><p>Met een <b>voegwoord</b> plak je twee zinnen aan elkaar. Voorbeelden: <b>en</b>, <b>terwijl</b>, <b>omdat</b>, <b>zodat</b>, <b>nadat</b>, <b>als</b>, <b>toen</b>, <b>want</b>, <b>maar</b>, <b>of</b>, <b>dus</b>.</p></div>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Tussen de zinnen</h4><p>Ik blijf thuis, <b>want</b> ik ben ziek.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Vooraan</h4><p><b>Omdat</b> het regent, is de wedstrijd afgelast.</p></div></div>`
+`<div class="call reken"><b>Zo vind je het voegwoord</b><ol class="num">
<li>Zoek de <b>twee zinnen</b> in de lange zin.</li>
<li>Kijk welk woord ze <b>verbindt</b>.</li>
<li>Staat dat woord in het rijtje? Dan is het het <b>voegwoord</b>.</li></ol></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Wat is het voegwoord: Ik fiets naar school, terwijl mijn broer de bus neemt.</p><p class="check-a"><b>terwijl</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li><b>Voegwoord</b> = plakt twee zinnen aan elkaar.</li>
<li>Staat <b>tussen</b> de zinnen of <b>vooraan</b>.</li></ul></div>`},

{heading:'Samengestelde zinnen',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li><b>samengestelde zinnen</b> herkennen</li></ul></div>`
+`<h5 class="sub">Twee zinnen in één</h5>`
+`<div class="box"><h4>Twee persoonsvormen</h4><p>Een <b>samengestelde zin</b> bestaat uit twee losse zinnen die met een <b>voegwoord</b> aan elkaar zijn geplakt. Daarom heeft hij <b>twee persoonsvormen</b>.</p></div>`
+`<div class="tblwrap"><table class="tbl"><tr><th>Losse zinnen</th><th>Samengestelde zin</th></tr><tr><td>Annelies bestelt een tosti. Bernd wil een broodje gezond.</td><td>Annelies bestelt een tosti <b>en</b> Bernd wil een broodje gezond.</td></tr><tr><td>Ik leg mijn mobiel in de woonkamer. Ik word niet afgeleid.</td><td>Ik leg mijn mobiel in de woonkamer, <b>zodat</b> ik niet word afgeleid.</td></tr><tr><td>Het regent. De wedstrijd is afgelast.</td><td><b>Omdat</b> het regent, is de wedstrijd afgelast.</td></tr></table></div>`
+`<div class="call reken"><b>Is het een samengestelde zin?</b><ol class="num">
<li>Zoek de <b>persoonsvormen</b>.</li>
<li><b>Twee</b> persoonsvormen? Dan is het een samengestelde zin.</li>
<li>Zoek het <b>voegwoord</b> ertussen of vooraan.</li></ol></div>`
+`<div class="call warn"><b>Let op:</b> in de tweede zin verandert soms de <b>woordvolgorde</b>: &lsquo;ik word niet afgeleid&rsquo; wordt &lsquo;zodat ik niet <b>word</b> afgeleid&rsquo;.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Hoeveel persoonsvormen heeft een samengestelde zin?</p><p class="check-a"><b>Twee</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li>Samengestelde zin = <b>twee zinnen</b> + een <b>voegwoord</b>.</li>
<li>Herkennen aan <b>twee persoonsvormen</b>.</li></ul></div>`},

{heading:'Persoonlijk en bezittelijk voornaamwoord',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li><b>persoonlijke</b> en <b>bezittelijke voornaamwoorden</b> herkennen en gebruiken</li></ul></div>`
+`<h5 class="sub">Verwijzen naar wie of wat, en van wie</h5>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Persoonlijk</h4><p>Verwijst naar een <b>persoon</b>, <b>dier</b> of <b>ding</b>: <b>Ik</b> heb <b>het</b> ingepakt.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Bezittelijk</h4><p>Zegt <b>van wie</b> iets is. Staat altijd <b>vóór</b> het zelfstandig naamwoord: <b>jullie</b> huis, <b>onze</b> klas.</p></div></div>`
+`<div class="tblwrap"><table class="tbl"><tr><th>Persoonlijk (onderwerp)</th><th>Persoonlijk (ander zinsdeel)</th><th>Bezittelijk</th></tr><tr><td>ik</td><td>mij / me</td><td><b>mijn</b></td></tr><tr><td>jij / je</td><td>jou / je</td><td><b>jouw / je</b></td></tr><tr><td>u</td><td>u</td><td><b>uw</b></td></tr><tr><td>hij</td><td>hem</td><td><b>zijn</b></td></tr><tr><td>zij / ze</td><td>haar</td><td><b>haar</b></td></tr><tr><td>het</td><td>het</td><td><b>zijn</b></td></tr><tr><td>wij / we</td><td>ons</td><td><b>ons / onze</b></td></tr><tr><td>jullie</td><td>jullie</td><td><b>jullie</b></td></tr><tr><td>zij / ze</td><td>hun / hen</td><td><b>hun</b></td></tr></table></div>`
+`<div class="call waarom">Waarom verwijzen? Zo voorkom je dat je steeds <b>hetzelfde woord</b> herhaalt: dat leest prettiger. Een de-woord dat <b>mannelijk</b> is, krijgt hij/zijn; een <b>vrouwelijk</b> de-woord zij/haar; een <b>het-woord</b> het/zijn. Twijfel je? Kijk in het <b>woordenboek</b>.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Is &lsquo;onze&rsquo; in &lsquo;onze klas&rsquo; persoonlijk of bezittelijk?</p><p class="check-a"><b>Bezittelijk</b>: het zegt van wie de klas is.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li><b>Persoonlijk</b>: ik, jij, hij, wij &hellip; verwijst naar wie of wat.</li>
<li><b>Bezittelijk</b>: mijn, jouw, zijn, hun &hellip; van wie, <b>vóór</b> het zelfstandig naamwoord.</li></ul></div>`},

{heading:'Lijdend voorwerp',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>het <b>lijdend voorwerp</b> vinden</li></ul></div>`
+`<h5 class="sub">Wie of wat overkomt het?</h5>`
+`<div class="box"><h4>Lijdend voorwerp (lv)</h4><p>Bijna elke zin heeft een <b>onderwerp</b> en een <b>gezegde</b>. Een zin kan ook een <b>lijdend voorwerp</b> hebben: het geeft aan <b>wie</b> of <b>wat</b> iets overkomt.</p></div>`
+`<div class="call reken"><b>Stappenplan: het lijdend voorwerp vinden</b><ol class="num">
<li>Zoek de <b>persoonsvorm</b> (pv) met de vraagproef of tijdproef.</li>
<li>Zoek het <b>onderwerp</b> (ow): wie of wat + pv?</li>
<li>Zoek het <b>werkwoordelijk gezegde</b> (wg): alle werkwoorden.</li>
<li>Vraag: <b>wat</b> (of wie) + wg + ow? Het antwoord is het <b>lijdend voorwerp</b>.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: Sifan Hassan</h4><p>&lsquo;Sifan Hassan heeft een gouden medaille gewonnen.&rsquo;</p><div class="antwoord">pv = <b>heeft</b>. ow = <b>Sifan Hassan</b>. wg = <b>heeft gewonnen</b>. Wat heeft Sifan Hassan gewonnen? <b>Een gouden medaille</b>: dat is het lv.</div></div>`
+`<div class="call warn"><b>Let op:</b> in een <b>samengestelde zin</b> kan elke losse zin een eigen lijdend voorwerp hebben.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Welke vraag stel je om het lijdend voorwerp te vinden?</p><p class="check-a"><b>Wat</b> (of wie) + werkwoordelijk gezegde + onderwerp?</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li>Eerst <b>pv</b>, dan <b>ow</b>, dan <b>wg</b>, dan <b>lv</b>.</li>
<li>lv-vraag: <b>wat + wg + ow?</b></li></ul></div>`}
],
terms:[
['voegwoord','een woord waarmee je twee zinnen aan elkaar plakt tot een samengestelde zin, bijvoorbeeld en, omdat, terwijl',0],
['samengestelde zin','een zin die bestaat uit twee losse zinnen die aan elkaar geplakt zijn, met twee persoonsvormen',1],
['persoonsvorm','de werkwoordsvorm in een zin die verandert met het onderwerp (ik/jij/hij enz.)',1],
['verwijswoord','een woord dat verwijst naar een eerder genoemd woord, zoals hij, zij, haar, hun',2],
['persoonlijk voornaamwoord','een verwijswoord dat naar een persoon of ding verwijst, zoals hij, zij, het',2],
['bezittelijk voornaamwoord','een verwijswoord dat bezit aangeeft, zoals zijn, haar, hun',2],
['onderwerp','het zinsdeel waarover de zin iets zegt; te vinden met wie of wat + persoonsvorm',3],
['werkwoordelijk gezegde','alle werkwoorden in de zin samen',3],
['lijdend voorwerp','het zinsdeel dat aangeeft wie of wat iets overkomt; te vinden met wat/wie + werkwoordelijk gezegde + onderwerp',3],
['zinsdeel','een onderdeel van een zin, zoals het onderwerp, de persoonsvorm of het lijdend voorwerp',3]
],
cards:[
['Wat is een voegwoord?','Een woord waarmee je twee zinnen aan elkaar plakt tot een samengestelde zin, bijvoorbeeld en, omdat, terwijl.',0],
['Hoeveel persoonsvormen heeft een samengestelde zin?','Twee.',1],
['Waaruit bestaat een samengestelde zin?','Uit twee losse zinnen die met een voegwoord aan elkaar geplakt zijn.',1],
['Waarom gebruik je verwijswoorden in een tekst?','Om herhaling te voorkomen en de tekst prettiger te maken.',2],
['Welk verwijswoord past bij een de-woord mannelijk, zoals \'Hugo\'?','Hij, hem, zijn, die, deze.',2],
['Wat is een lijdend voorwerp?','Het zinsdeel dat aangeeft wie of wat iets overkomt.',3],
['Met welke vraag vind je het lijdend voorwerp?','Wat (soms wie) + werkwoordelijk gezegde + onderwerp?',3],
['Wat is de eerste stap om een lijdend voorwerp te vinden?','Zoek eerst de persoonsvorm met de vraagproef of tijdproef.',3],
['Wat is het werkwoordelijk gezegde?','Alle werkwoorden in de zin samen.',3],
['Noem drie voorbeelden van voegwoorden.','Bijvoorbeeld: en, terwijl, omdat, zodat, nadat, als, toen, want, maar, of, dus (drie hiervan).',0]
],
quiz:[
['Wat is een voegwoord?',['Een woord waarmee je twee zinnen aan elkaar plakt','Een verwijswoord','Het onderwerp van een zin','Een lijdend voorwerp'],0,'Een voegwoord verbindt twee zinnen tot een samengestelde zin.'],
['Hoeveel persoonsvormen heeft een samengestelde zin?',['Eén','Twee','Drie','Geen'],1,'Een samengestelde zin bestaat uit twee losse zinnen en heeft dus twee persoonsvormen.'],
['\'Ik leg mijn mobiel in de woonkamer, zodat ik niet word afgeleid.\' Welk woord is het voegwoord?',['Ik','Zodat','Mobiel','Woonkamer'],1,'\'Zodat\' plakt de twee losse zinnen aan elkaar.'],
['Waarom gebruik je verwijswoorden in een tekst?',['Om de tekst langer te maken','Om herhaling van hetzelfde woord te voorkomen','Om fouten te maken','Om een samengestelde zin te vermijden'],1,'Verwijswoorden maken een tekst prettiger door herhaling te voorkomen.'],
['Welk verwijswoord past bij \'de bibliotheek\' (de-woord vrouwelijk)?',['Hij','Het','Zij/ze, haar','Hun'],2,'De-woorden die vrouwelijk zijn, verwijs je aan met zij/ze of haar.'],
['Welk verwijswoord past bij een meervoud, zoals \'de bladeren\'?',['Hij','Zij/ze, hun','Het','Zijn'],1,'Bij een meervoud gebruik je zij/ze of hun.'],
['Wat is de eerste stap bij het vinden van een lijdend voorwerp?',['Het onderwerp zoeken','De persoonsvorm zoeken','Het voegwoord zoeken','De titel lezen'],1,'Je zoekt eerst de persoonsvorm met de vraag- of tijdproef.'],
['Met welke vraag vind je het onderwerp van een zin?',['Wat/wie + persoonsvorm?','Wanneer gebeurt het?','Waar gebeurt het?','Waarom gebeurt het?'],0,'Het onderwerp vind je met de vraag wie of wat + de persoonsvorm.'],
['In de zin \'Sifan Hassan heeft een gouden medaille gewonnen\' is het lijdend voorwerp:',['Sifan Hassan','Heeft gewonnen','Een gouden medaille','Heeft'],2,'Het antwoord op \'wat heeft Sifan Hassan gewonnen?\' is \'een gouden medaille\'.'],
['Wat is het werkwoordelijk gezegde in \'heeft gewonnen\'?',['Heeft gewonnen (alle werkwoorden samen)','Alleen \'heeft\'','Alleen \'gewonnen\'','Geen van beide'],0,'Het werkwoordelijk gezegde bestaat uit alle werkwoorden in de zin samen.'],
['Kan een samengestelde zin meer dan één lijdend voorwerp bevatten?',['Nee, nooit','Ja, bijvoorbeeld één per losse zin','Alleen bij vragen','Alleen bij gedichten'],1,'Omdat een samengestelde zin uit twee losse zinnen bestaat, kan elke losse zin een eigen lijdend voorwerp hebben.'],
['Welk woord is een bezittelijk voornaamwoord?',['Hij','Zijn','Dat','Deze'],1,'\'Zijn\' geeft bezit aan en is dus een bezittelijk voornaamwoord.']
]
});
