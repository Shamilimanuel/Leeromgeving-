import { registerChapter } from '../../../registry.js';

/* Rebuilt 2026-09-25 to the recipe of Economie TL4 H1 (change 6). Added
   from the book: examples of overdrijving and opsomming in drieën (Stijl),
   and in Voor- en achtervoegsels: on- and her-, oer- (oersaai vs oersterk),
   -er and -ig changing the word class, words that do not exist (onhoog) and
   how "onwijs" changed meaning. Terms, cards and quiz unchanged. */
registerChapter('nederlands|tl|2|4', {
title:'Taal',
summary:[
{heading:'NT2/Tweedetaalverwerving',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>wat <b>NT2</b> en <b>tweedetaalverwerving</b> zijn</li></ul></div>`
+`<div class="box"><h4>Waar dit hoofdstuk over gaat</h4><p>Je ontdekt hoe taal <b>verschilt</b> en <b>verandert</b>: een <b>tweede taal</b> leren, je <b>stijl</b> aanpassen, <b>jongerentaal</b>, <b>voor- en achtervoegsels</b> en <b>thematische uitdrukkingen</b>.</p></div>`
+`<h5 class="sub">Een tweede taal</h5>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Moedertaal</h4><p>De taal die je <b>van huis uit</b> leert spreken.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Tweede taal</h4><p>Een <b>andere</b> taal, die gesproken wordt in het land waar je <b>woont</b>.</p></div></div>`
+`<div class="box"><h4>NT2</h4><p><b>NT2</b> betekent <b>Nederlands als tweede taal</b>: het Nederlands dat iemand leert als hij al een andere <b>moedertaal</b> spreekt. Het leren heet <b>tweedetaalverwerving</b>.</p></div>`
+`<div class="call reken"><b>Wat moet een NT2-leerder allemaal leren?</b><ol class="num">
<li>Nieuwe <b>klanken</b>.</li>
<li>De <b>woordvolgorde</b>.</li>
<li>De <b>lidwoorden</b>: de of het.</li></ol></div>`
+`<div class="call waarom">Waarom is dat lastig? Voor <b>moedertaalsprekers</b> gaat het vanzelf. Jij weet zonder nadenken dat het <b>het huis</b> is, maar daar zit geen <b>regel</b> achter die je kunt leren.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Waar staat NT2 voor?</p><p class="check-a"><b>Nederlands als tweede taal</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li><b>Moedertaal</b>: van huis uit. <b>Tweede taal</b>: later geleerd.</li>
<li><b>NT2</b> = Nederlands als tweede taal.</li></ul></div>`},

{heading:'Stijl',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>wat <b>stijl</b> is</li>
<li>twee stijlmiddelen: <b>overdrijving</b> en <b>opsomming in drieën</b></li></ul></div>`
+`<h5 class="sub">De manier van schrijven</h5>`
+`<div class="box"><h4>Stijl</h4><p><b>Stijl</b> is de <b>manier</b> waarop iemand iets schrijft of zegt: welke <b>woorden</b>, <b>zinnen</b> en <b>stijlmiddelen</b> iemand gebruikt. Twee stijlmiddelen maken een tekst <b>levendiger</b>.</p></div>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Overdrijving</h4><p>Iets <b>groter</b>, sterker of erger voorstellen dan het is, voor <b>nadruk</b>.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Opsomming in drieën</h4><p>Drie dingen <b>achter elkaar</b>: dat klinkt <b>ritmisch</b> en overtuigend.</p></div></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: herken het stijlmiddel</h4><p>Vier zinnen.</p><div class="antwoord">&lsquo;Ik ben zo moe, ik kan geen <b>pap</b> meer zeggen.&rsquo; en &lsquo;Ik heb een <b>eeuw</b> op je staan wachten!&rsquo;: <b>overdrijving</b>. &lsquo;Geloof, hoop en <b>liefde</b>&rsquo; en &lsquo;bloed, zweet en <b>tranen</b>&rsquo;: <b>opsomming in drieën</b>.</div></div>`
+`<div class="call warn"><b>Niet te veel:</b> gebruik je in elke zin een overdrijving, dan gelooft de lezer je <b>niet</b> meer. Zet stijlmiddelen in waar je echt <b>nadruk</b> wilt.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">&lsquo;Ik heb je al duizend keer gezegd&hellip;&rsquo; Welk stijlmiddel is dat?</p><p class="check-a"><b>Overdrijving</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li><b>Stijl</b> = hoe je iets schrijft of zegt.</li>
<li><b>Overdrijving</b>: groter maken voor nadruk.</li>
<li><b>Opsomming in drieën</b>: drie dingen, ritmisch.</li></ul></div>`},

{heading:'Jongerentaal en nieuwe taal',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>wat <b>jongerentaal</b> is en hoe <b>nieuwe woorden</b> ontstaan</li></ul></div>`
+`<h5 class="sub">Jongerentaal</h5>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Standaardtaal</h4><p>Het Nederlands dat als <b>correct</b> taalgebruik geldt.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Jongerentaal</h4><p>Taal van jongeren die <b>afwijkt</b> van de standaardtaal. Het laat zien dat je bij een <b>groep</b> hoort: het <b>wij-gevoel</b>.</p></div></div>`
+`<h5 class="sub">Zo ontstaan nieuwe woorden</h5>`
+`<div class="g3">`
+`<div class="box"><h4>Leenwoorden</h4><p>Overgenomen uit een <b>andere taal</b>: Engels, Arabisch, Turks, Papiaments.</p></div>`
+`<div class="box"><h4>Andere betekenis</h4><p>Bestaande woorden krijgen een <b>nieuwe</b> betekenis: <b>lauw</b>, <b>wreed</b>, <b>ziek</b>, <b>vet</b>.</p></div>`
+`<div class="box"><h4>Afkortingen</h4><p>Uit sociale media: <b>yolo</b>, <b>asap</b>, <b>lol</b>.</p></div></div>`
+`<div class="call waarom">Is jongerentaal slecht voor je Nederlands? <b>Nee</b>: jongeren die veel jongerentaal gebruiken, beheersen hun Nederlands juist <b>goed</b>. Pas als je weet hoe een taal <b>werkt</b>, kun je er <b>creatief</b> mee spelen.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">&lsquo;Die film was ziek!&rsquo; Hoe is dit nieuwe taal?</p><p class="check-a">Een bestaand woord met een <b>andere betekenis</b>: ziek betekent hier geweldig.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li><b>Jongerentaal</b> wijkt af van de standaardtaal; het geeft een <b>wij-gevoel</b>.</li>
<li>Nieuw: <b>leenwoorden</b>, <b>andere betekenis</b>, <b>afkortingen</b>.</li></ul></div>`},

{heading:'Voor- en achtervoegsels',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>hoe <b>voorvoegsels</b> de betekenis van een woord veranderen</li>
<li>hoe <b>achtervoegsels</b> de woordsoort veranderen</li></ul></div>`
+`<h5 class="sub">Voorvoegsels</h5>`
+`<div class="box"><h4>Vóór het woord</h4><p>Een <b>voorvoegsel</b> is geen los woord, maar het verandert de <b>betekenis</b>. Veel voorvoegsels hebben een <b>vaste betekenis</b>: <b>on-</b> = niet (onhandig, onbruikbaar), <b>her-</b> = opnieuw (herkansen, heropenen).</p></div>`
+`<div class="box"><h4>Versterken</h4><p>Met <b>super-</b>, <b>reuze-</b>, <b>mega-</b> of <b>oer-</b> maak je een woord <b>sterker</b>: megadruk is meer dan druk. Dat kan <b>positief</b> of <b>negatief</b> zijn: <b>oersterk</b> tegenover <b>oersaai</b>.</p></div>`
+`<h5 class="sub">Achtervoegsels</h5>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>-er</h4><p>Van een <b>werkwoord</b> een <b>zelfstandig naamwoord</b>: ondernemen &rarr; <b>ondernemer</b>, hardlopen &rarr; <b>hardloper</b>.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>-ig</h4><p>Van een <b>zelfstandig naamwoord</b> een <b>bijvoeglijk naamwoord</b>: glas &rarr; <b>glazig</b>, hoek &rarr; <b>hoekig</b>, baas &rarr; <b>bazig</b>.</p></div></div>`
+`<div class="call warn"><b>Niet zomaar plakken:</b> &lsquo;onhoog&rsquo; en &lsquo;ex-geel&rsquo; bestaan niet. En soms verandert de betekenis vreemd: <b>onwijs</b> betekent eigenlijk &lsquo;niet wijs&rsquo;, maar jongeren gebruikten het al veertig jaar geleden voor <b>heel erg</b>: onwijs gaaf!</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Welke woordsoort maak je met -ig van een zelfstandig naamwoord?</p><p class="check-a">Een <b>bijvoeglijk naamwoord</b>, zoals glas &rarr; glazig.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li><b>on-</b> = niet, <b>her-</b> = opnieuw, <b>mega-/oer-</b> = versterking.</li>
<li><b>-er</b>: werkwoord wordt zelfstandig naamwoord. <b>-ig</b>: zelfstandig naamwoord wordt bijvoeglijk.</li></ul></div>`},

{heading:'Thematische uitdrukkingen',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>wat een <b>uitdrukking</b> is</li>
<li><b>thematische uitdrukkingen</b> uit de scheepvaart begrijpen</li></ul></div>`
+`<h5 class="sub">Uit de scheepvaart</h5>`
+`<div class="box"><h4>Uitdrukking</h4><p>Een <b>uitdrukking</b> is een <b>vaste combinatie</b> van woorden, maar geen hele zin. Nederland heeft altijd met de <b>zee</b>, het <b>water</b> en de <b>scheepvaart</b> te maken gehad. Uitdrukkingen over één onderwerp heten <b>thematische uitdrukkingen</b>.</p></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: een oogje in het zeil houden</h4><p>Wat betekent het, en waar komt het vandaan?</p><div class="antwoord">Je houdt de boel goed <b>in de gaten</b>, zoals een schipper zijn <b>zeil</b> in de gaten houdt. Het komt uit de <b>scheepvaart</b>, maar je gebruikt het voor <b>goed opletten</b>.</div></div>`
+`<div class="tblwrap"><table class="tbl"><tr><th>Uitdrukking</th><th>Betekenis</th></tr><tr><td><b>Je schepen achter je verbranden</b></td><td>een nieuwe start maken, je kunt niet meer terug</td></tr><tr><td><b>Het roer omgooien</b></td><td>iets helemaal anders gaan doen</td></tr><tr><td><b>Het loopt de spuigaten uit</b></td><td>het wordt te veel of te gek</td></tr></table></div>`
+`<div class="call waarom">Waarom gebruiken we uitdrukkingen? Om een mededeling <b>mooier</b> of <b>minder hard</b> te laten klinken, en om je taal <b>minder saai</b> te maken.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Wat betekent &lsquo;het roer omgooien&rsquo;?</p><p class="check-a">Iets <b>helemaal anders</b> gaan doen.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li><b>Uitdrukking</b>: vaste woordcombinatie, geen hele zin.</li>
<li><b>Thematisch</b>: veel uitdrukkingen over één onderwerp, zoals de zee.</li></ul></div>`}
],
terms:[
['NT2','Nederlands als tweede taal: het Nederlands dat je leert naast je moedertaal',0],
['tweedetaalverwerving','het proces waarbij iemand een tweede taal leert nadat hij al een moedertaal spreekt',0],
['stijl','de manier waarop iemand iets schrijft of zegt: welke woorden, zinnen en stijlmiddelen iemand gebruikt',1],
['overdrijving','iets groter, sterker of erger voorstellen dan het in werkelijkheid is',1],
['opsomming in drieën','stijlmiddel waarbij drie dingen achter elkaar genoemd worden voor een ritmisch effect',1],
['jongerentaal','taalgebruik van jongeren dat afwijkt van de standaardtaal',2],
['standaardnederlands','het Nederlands dat als correct taalgebruik wordt gezien',2],
['leenwoord','een woord dat overgenomen is uit een andere taal',2],
['voorvoegsel','een woorddeel dat vóór een woord staat en de betekenis versterkt of verandert',3],
['achtervoegsel','een woorddeel dat achter een woord staat en de betekenis versterkt of verandert',3],
['uitdrukking','een vaste combinatie van woorden (maar niet een hele zin)',4],
['thematische uitdrukking','een uitdrukking die hoort bij een bepaald onderwerp, bijvoorbeeld uitdrukkingen uit de scheepvaart',4]
],
cards:[
['Waar staat NT2 voor?','Nederlands als tweede taal.',0],
['Wat is tweedetaalverwerving?','Het proces waarbij iemand een tweede taal leert, naast zijn moedertaal.',0],
['Wat is stijl?','De manier waarop iemand iets schrijft of zegt, met bepaalde woorden en stijlmiddelen.',1],
['Wat is overdrijving als stijlmiddel?','Iets groter, sterker of erger voorstellen dan het in werkelijkheid is.',1],
['Wat is jongerentaal?','Taalgebruik van jongeren dat afwijkt van de standaardtaal.',2],
['Wat is een leenwoord?','Een woord dat overgenomen is uit een andere taal, bijvoorbeeld het Engels of Arabisch.',2],
['Beheersen jongeren die veel jongerentaal gebruiken hun Nederlands slecht?','Nee, uit onderzoek blijkt dat ze hun Nederlands juist heel goed beheersen.',2],
['Wat doet het voorvoegsel mega- met een woord zoals \'leuk\'?','Het versterkt de betekenis: megaleuk betekent \'heel erg leuk\'.',3],
['Wat is een uitdrukking?','Een vaste combinatie van woorden, maar niet een hele zin.',4],
['Wat betekent \'een oogje in het zeil houden\'?','De boel goed in de gaten houden.',4],
['Waarom hebben we in het Nederlands veel uitdrukkingen over water en scheepvaart?','Omdat Nederland altijd veel met de zee, het water en de scheepvaart te maken heeft gehad.',4]
],
quiz:[
['Waar staat NT2 voor?',['Nederlands als tweede taal','Nieuwe taal 2','Nederlandse taalregels','Niveau twee'],0,'NT2 betekent Nederlands als tweede taal.'],
['Wat is tweedetaalverwerving?',['Het leren van een tweede taal naast je moedertaal','Het vergeten van je moedertaal','Het schrijven van gedichten','Een reclametechniek'],0,'Tweedetaalverwerving is het proces van het leren van een tweede taal.'],
['Wat is stijl in taal?',['De lettergrootte van een tekst','De manier waarop iemand iets schrijft of zegt','Een tekstverband','Een leesteken'],1,'Stijl gaat over de manier waarop je iets verwoordt: welke woorden en stijlmiddelen je gebruikt.'],
['\'Ik heb een miljoen keer gezegd dat je moet opruimen\' is een voorbeeld van:',['Overdrijving','Personificatie','Een leenwoord','Chronologie'],0,'Dit stelt iets sterker voor dan het werkelijk is: overdrijving.'],
['Wat is jongerentaal?',['Standaardnederlands','Taalgebruik van jongeren dat afwijkt van de standaardtaal','Een dialect uit Limburg','Een oud woord uit de scheepvaart'],1,'Jongerentaal wijkt af van het standaardnederlands en wordt vooral binnen een groep gebruikt.'],
['Waarom gebruiken jongeren soms hun eigen taal binnen een groep?',['Om te laten zien dat je bij de groep hoort (wij-gevoel)','Omdat ze geen Nederlands kunnen','Om leraren te helpen','Om ouder te lijken'],0,'Eigen woorden en uitdrukkingen laten zien dat je bij een groep hoort.'],
['Een woord dat is overgenomen uit een andere taal, zoals \'swa\' uit het Arabisch, noem je:',['Een leenwoord','Een voorvoegsel','Een uitdrukking','Een kernzin'],0,'Een woord dat overgenomen is uit een andere taal is een leenwoord.'],
['Klopt de bewering dat jongeren die jongerentaal gebruiken hun Nederlands slecht beheersen?',['Ja, altijd','Nee, uit onderzoek blijkt het tegendeel','Alleen bij afkortingen','Alleen op sociale media'],1,'Onderzoek toont aan dat deze jongeren hun Nederlands juist goed beheersen.'],
['Wat doet het voorvoegsel mega- met een bijvoeglijk naamwoord?',['Het versterkt de betekenis','Het maakt het woord ontkennend','Het maakt er een werkwoord van','Het heeft geen effect'],0,'Mega- versterkt de betekenis, zoals in megaleuk = heel erg leuk.'],
['Wat is een uitdrukking?',['Een hele zin met een persoonsvorm','Een vaste combinatie van woorden, maar geen hele zin','Een ander woord voor kernzin','Een leesteken'],1,'Een uitdrukking is een vaste combinatie van woorden die niet letterlijk bedoeld is.'],
['Wat betekent de uitdrukking \'een oogje in het zeil houden\'?',['Iets kapotmaken','De boel goed in de gaten houden','Naar zee gaan','Iets vergeten'],1,'De uitdrukking betekent dat je goed oplet, net als een schipper op zijn zeil let.'],
['Waarom heeft het Nederlands veel uitdrukkingen die met water en de zee te maken hebben?',['Omdat Nederland altijd veel met water en scheepvaart te maken heeft gehad','Omdat water een moeilijk woord is','Toeval','Omdat het een jong woord is'],0,'De vele uitdrukkingen komen door de lange geschiedenis van Nederland met water en scheepvaart.'],
['Wanneer ga je uitdrukkingen echt gebruiken, volgens onderzoek?',['Al als peuter','Pas op latere leeftijd, als je de wereld meer gaat ontdekken','Nooit','Alleen op school'],1,'Onderzoek toont dat je uitdrukkingen pas op latere leeftijd echt gaat gebruiken.']
]
});
