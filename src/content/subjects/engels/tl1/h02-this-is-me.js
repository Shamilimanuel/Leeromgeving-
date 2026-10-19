import { registerChapter } from '../../../registry.js';

/* Rebuilt 2026-09-25 to the recipe of Economie TL4 H1 (change 6). Added
   from the book: the exact /s/ sounds (after p, t, k, f and th). The rest is
   the same grammar, words and Stones, restructured. Terms, cards and quiz
   unchanged. */
registerChapter('engels|tl|1|2', {
title:'This is me',
summary:[
{heading:'Looks en Numbers',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>iemands <b>uiterlijk</b> beschrijven (looks)</li>
<li>de <b>getallen</b> tot en met honderd schrijven</li></ul></div>`
+`<div class="box"><h4>Waar dit hoofdstuk over gaat</h4><p>Je leert jezelf en anderen <b>voorstellen</b>: naam, leeftijd, uiterlijk en karakter. Je gebruikt de <b>present simple</b> voor feiten en gewoontes, en je stelt vragen met <b>vraagwoorden</b> zoals what, where en who.</p></div>`
+`<h5 class="sub">Looks</h5>`
+`<div class="box"><h4>Hoe ziet iemand eruit?</h4><p><b>bald</b> (kaal), <b>beard</b> (baard), <b>big</b> (groot), <b>braces</b> (beugel), <b>curly</b> (krullend), <b>glasses</b> (bril), <b>long hair</b> (lang haar), <b>ponytail</b> (paardenstaart), <b>short</b> (kort/klein), <b>small</b> (klein), <b>straight</b> (steil), <b>tall</b> (lang).</p></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: iemand beschrijven</h4><p>Beschrijf twee mensen in korte zinnen.</p><div class="antwoord">She <b>has</b> curly hair. She <b>is</b> short. José <b>is</b> thin and <b>has</b> dark hair. He looks great.</div></div>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>has</h4><p>Iets wat iemand <b>heeft</b>: has curly hair, has <b>braces</b>.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>is</h4><p>Hoe iemand <b>is</b>: is <b>tall</b>, is short.</p></div></div>`
+`<h5 class="sub">Numbers</h5>`
+`<div class="box"><h4>Tientallen</h4><p><b>thirty</b> (30), <b>forty</b> (40), <b>fifty</b> (50), <b>sixty</b> (60), <b>seventy</b> (70), <b>eighty</b> (80), <b>ninety</b> (90), <b>one hundred</b> (100).</p></div>`
+`<div class="call warn"><b>Streepje!</b> Getallen tussen de tientallen schrijf je met een <b>streepje</b>: thirty-two (32), fifty-four (54), ninety-eight (98). Boven de honderd komt er <b>and</b> bij: one hundred <b>and</b> one (101). Let op: <b>forty</b> zonder u.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Hoe schrijf je 76 in het Engels?</p><p class="check-a"><b>seventy-six</b>, met een streepje.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li>Uiterlijk: <b>has</b> + iets (braces), <b>is</b> + hoe (tall).</li>
<li>Getallen met een <b>streepje</b>: thirty-two.</li>
<li>101 = one hundred <b>and</b> one.</li></ul></div>`},

{heading:'Jezelf voorstellen',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>jezelf en anderen <b>voorstellen</b> (Stone 1)</li>
<li>vertellen en vragen naar <b>persoonlijke informatie</b> (Stone 2)</li></ul></div>`
+`<h5 class="sub">Stone 1: introducing yourself and other people</h5>`
+`<div class="tblwrap"><table class="tbl"><tr><th>Engels</th><th>Nederlands</th></tr><tr><td><b>Hello, my name is Max.</b></td><td>Hallo, mijn naam is Max.</td></tr><tr><td><b>Hi, I'm your neighbour.</b></td><td>Hoi, ik ben je buurman.</td></tr><tr><td><b>I have three sisters. I'm the youngest.</b></td><td>Ik heb drie zussen. Ik ben de jongste.</td></tr><tr><td><b>Who are they? They are my parents.</b></td><td>Wie zijn zij? Zij zijn mijn ouders.</td></tr><tr><td><b>That guy with glasses is Sam. He is my uncle.</b></td><td>Die jongen met een bril is Sam. Hij is mijn oom.</td></tr></table></div>`
+`<h5 class="sub">Stone 2: personal information</h5>`
+`<div class="tblwrap"><table class="tbl"><tr><th>Vraag</th><th>Antwoord</th></tr><tr><td><b>What is your first name?</b></td><td>My first name is Patrick.</td></tr><tr><td><b>How old are you?</b></td><td>I'm 13 years old.</td></tr><tr><td><b>When is your birthday?</b></td><td>My birthday is on the 18th of June.</td></tr><tr><td><b>Where are you from?</b></td><td>I'm from Amsterdam. I'm Dutch.</td></tr><tr><td><b>Where do you live?</b></td><td>I live in Scotland.</td></tr></table></div>`
+`<div class="call reken"><b>Zo stel je jezelf voor</b><ol class="num">
<li><b>Groet</b> en zeg je naam: Hello, my name is &hellip;</li>
<li>Vertel je <b>leeftijd</b> en waar je <b>woont</b>.</li>
<li>Vertel iets over je <b>familie</b>: I have &hellip;</li>
<li>Spel je naam als dat nodig is: <b>It's spelled P-A-T-R-I-C-K.</b></li></ol></div>`
+`<div class="call waarom">Waarom oefenen met <b>spellen</b>? Het Engelse alfabet heeft dezelfde <b>26 letters</b>, maar je <b>spreekt</b> ze anders uit. Een e klinkt als &ldquo;ie&rdquo;, een i als &ldquo;aai&rdquo;.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Hoe vraag je in het Engels hoe oud iemand is?</p><p class="check-a"><b>How old are you?</b></p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li><b>Stone 1</b>: jezelf en anderen voorstellen.</li>
<li><b>Stone 2</b>: vragen naar naam, leeftijd, verjaardag en woonplaats.</li>
<li>Leeftijd: I'm 13 <b>years old</b>.</li></ul></div>`},

{heading:'Present simple',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>de <b>present simple</b> gebruiken voor <b>feiten</b> en <b>gewoontes</b></li>
<li>de <b>-s</b> en <b>-es</b> goed schrijven en uitspreken</li></ul></div>`
+`<h5 class="sub">Grammar 1: walk, walks</h5>`
+`<div class="box"><h4>Feiten en gewoontes</h4><p>De <b>present simple</b> is de tegenwoordige tijd voor <b>feiten</b> en <b>gewoontes</b>. Woorden als <b>always</b>, <b>never</b>, <b>sometimes</b>, <b>often</b>, <b>usually</b> en <b>every day</b> passen er vaak bij; ze staan meestal <b>vóór</b> het werkwoord.</p></div>`
+`<div class="call reken"><b>Zo maak je de present simple</b><ol class="num">
<li>Bij <b>I, you, we, they</b>: het werkwoord zonder iets erachter. I <b>walk</b> to the bus stop.</li>
<li>Bij <b>he, she, it</b>: <b>-s</b> erachter. He <b>reads</b> a book.</li>
<li>Eindigt het werkwoord op <b>-s, -x, -z, -ch</b> of <b>-sh</b>, of is het <b>do</b> of <b>go</b>: <b>-es</b>. She <b>catches</b> the ball. He <b>does</b> his best.</li>
<li><b>Medeklinker + y</b>: y wordt <b>-ies</b>. He <b>tries</b>. Maar <b>klinker + y</b>: gewoon -s. She <b>buys</b>.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: he, she, it</h4><p>Maak de zin af met go, try en watch.</p><div class="antwoord">She <b>goes</b> to school. He <b>tries</b> to be relaxed. It <b>watches</b> the birds.</div></div>`
+`<h5 class="sub">Uitspraak van de s</h5>`
+`<div class="tblwrap"><table class="tbl"><tr><th>Klank</th><th>Wanneer</th><th>Voorbeelden</th></tr><tr><td><b>/s/</b></td><td>laatste klank is een <b>p, t, k, f</b> of <b>th</b></td><td>stops, hopes, looks</td></tr><tr><td><b>/z/</b></td><td>laatste klank is een <b>andere</b> klank</td><td>swims, seems, explains</td></tr><tr><td><b>/iz/</b></td><td>na een <b>s, z, sh</b> of <b>ch</b>-klank</td><td>kisses, dances, buzzes</td></tr></table></div>`
+`<div class="call waarom">Hoe hoor je het verschil tussen /s/ en /z/? Leg je hand op je <b>keel</b> en zeg het woord. <b>Trilt</b> het? Dan is het /z/. Voel je <b>niets</b>? Dan is het /s/.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Vul in: My sister (buy) her shirts online.</p><p class="check-a"><b>buys</b>: klinker + y, dus gewoon -s.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li>Present simple: <b>feiten</b> en <b>gewoontes</b>.</li>
<li><b>he/she/it</b>: -s of -es.</li>
<li>Medeklinker + y: <b>-ies</b>.</li></ul></div>`},

{heading:'Voornaamwoorden: I (me, he) him',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>het verschil tussen <b>I, he, they</b> en <b>me, him, them</b></li></ul></div>`
+`<h5 class="sub">Grammar 2: vóór en ná het werkwoord</h5>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Vóór het werkwoord</h4><p>Het <b>onderwerp</b>: <b>I, you, he, she, it, we, they</b>.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Ná het werkwoord</h4><p>Het <b>lijdend voorwerp</b>: <b>me, you, him, her, it, us, them</b>.</p></div></div>`
+`<div class="tblwrap"><table class="tbl"><tr><th>Vóór</th><th>Ná</th></tr><tr><td><b>I</b></td><td><b>me</b></td></tr><tr><td>you</td><td>you</td></tr><tr><td><b>he / she</b> / it</td><td><b>him / her</b> / it</td></tr><tr><td><b>we</b></td><td><b>us</b></td></tr><tr><td><b>they</b></td><td><b>them</b></td></tr></table></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: twee kanten van het werkwoord</h4><p>Wie doet het, en wie krijgt het?</p><div class="antwoord"><b>He</b> likes <b>me</b>. <b>I</b> like <b>him</b>. I am talking to <b>her</b>. It is looking at <b>them</b>.</div></div>`
+`<div class="call warn"><b>Ook bij namen -s:</b> alles wat je kunt vervangen door <b>he, she</b> of <b>it</b> krijgt in de present simple een -s. The bus (= it) <b>goes</b> to Sheffield.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Vul in: Daniel likes Jake, so sometimes he buys (he/him) flowers.</p><p class="check-a"><b>him</b>: het staat ná het werkwoord.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li>Vóór het werkwoord: <b>I, he, she, we, they</b>.</li>
<li>Ná het werkwoord: <b>me, him, her, us, them</b>.</li></ul></div>`},

{heading:'Mensen beschrijven',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>vragen stellen met <b>vraagwoorden</b> (Grammar 3)</li>
<li>mensen beschrijven: <b>familie</b> en <b>karakter</b> (Stone 3)</li></ul></div>`
+`<h5 class="sub">Grammar 3: vraagwoorden</h5>`
+`<div class="box"><h4>Wh-woorden</h4><p>Een <b>vraagwoord</b> zet je aan het <b>begin</b> van de zin. Ze beginnen met <b>wh</b> of <b>h</b>, daarom heten ze <b>wh-woorden</b>.</p></div>`
+`<div class="tblwrap"><table class="tbl"><tr><th>Vraagwoord</th><th>Voorbeeld</th></tr><tr><td><b>What</b></td><td>What is your name?</td></tr><tr><td><b>Where</b></td><td>Where are the toilets?</td></tr><tr><td><b>When</b></td><td>When is your birthday?</td></tr><tr><td><b>Why</b></td><td>Why are you so angry?</td></tr><tr><td><b>Who</b></td><td>Who is that girl?</td></tr><tr><td><b>Which</b></td><td>Which colour is your favourite, red or blue?</td></tr><tr><td><b>How</b></td><td>How are you?</td></tr></table></div>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>which</h4><p>Je <b>weet</b> uit welke opties je kiest: red or blue?</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>what</h4><p>Je weet de opties <b>niet</b>: What is your name?</p></div></div>`
+`<h5 class="sub">Stone 3: describing people</h5>`
+`<div class="voorbeeld"><h4>Voorbeeld: What does your friend look like?</h4><p>Beschrijf uiterlijk en karakter.</p><div class="antwoord">She has curly hair and a ponytail. She has braces. José is thin and tall, and has dark hair and blue eyes. Cleo and Sophie are <b>shy</b> but very <b>nice</b>.</div></div>`
+`<div class="g2">`
+`<div class="box"><h4>Family members</h4><p><b>cousin</b> (neef/nicht), <b>divorced</b> (gescheiden), <b>eldest</b> (oudste), <b>grandparents</b>, <b>half-brother</b>, <b>married</b> (getrouwd), <b>nephew</b> (neef, kind van broer of zus), <b>niece</b> (nicht, idem), <b>only child</b> (enig kind), <b>stepfather</b>, <b>twins</b> (tweeling), <b>youngest</b>.</p></div>`
+`<div class="box"><h4>Personality</h4><p><b>annoying</b> (irritant), <b>friendly</b>, <b>funny</b> (grappig), <b>happy</b>, <b>lazy</b> (lui), <b>mean</b> (gemeen), <b>nice</b> (aardig), <b>quiet</b> (rustig), <b>relaxed</b>, <b>serious</b>, <b>shy</b> (verlegen), <b>smart</b> (slim).</p></div></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Wat is het verschil tussen cousin en nephew?</p><p class="check-a"><b>cousin</b> is een kind van je oom of tante; <b>nephew</b> is een kind van je broer of zus.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li>Vraagwoord <b>vooraan</b>: what, where, when, why, who, which, how.</li>
<li><b>which</b> bij bekende opties, <b>what</b> bij onbekende.</li>
<li>Uiterlijk en <b>karakter</b> samen beschrijven iemand.</li></ul></div>`},

{heading:'Lezen en luisteren',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>korte teksten van <b>tieners</b> over zichzelf lezen</li>
<li>het verschil tussen een <b>comic</b> en een <b>novel</b></li></ul></div>`
+`<h5 class="sub">De teksten in dit hoofdstuk</h5>`
+`<div class="box"><h4>All about me</h4><p>Op een website stellen vier tieners zich voor voor een <b>zomerkamp</b>: <b>Marco</b> (12) uit Hongkong, <b>Georgia</b> (14) uit Bristol, <b>Mina</b> (13) uit Novi Sad in Servië en <b>Siyu</b> (12) uit Ontario in Canada. Ze vertellen over hun <b>familie</b>, <b>hobby's</b> en waar ze <b>wonen</b>.</p></div>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Comic</h4><p>Een <b>stripverhaal</b>, zoals <b>Archie &amp; Friends</b>. Meestal werken er meer mensen aan: een <b>schrijver</b> en een <b>tekenaar</b>.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Novel</h4><p>Een <b>roman</b>. Meestal werkt er maar <b>één schrijver</b> aan.</p></div></div>`
+`<div class="call reken"><b>Zo lees je een tekst als All about me</b><ol class="num">
<li>Kijk eerst wie er <b>schrijft</b> en waarom.</li>
<li>Zoek per persoon: <b>naam</b>, <b>leeftijd</b>, <b>woonplaats</b>.</li>
<li>Onderstreep wat ze vertellen over <b>familie</b> en <b>hobby's</b>.</li></ol></div>`
+`<div class="box"><h4>Songs</h4><p>Je luistert naar <b>Dance Monkey</b> (Tones and I) en <b>Nothing breaks like a heart</b> (Mark Ronson en Miley Cyrus), om de werkwoordsvormen uit Grammar 1 en 2 <b>in het echt</b> te horen.</p></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Waarom stellen de tieners zich voor op de website?</p><p class="check-a">Ze melden zich aan voor een <b>zomerkamp</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li>Zoek in een tekst eerst <b>wie</b>, <b>wat</b> en <b>waar</b>.</li>
<li><b>Comic</b>: meer makers. <b>Novel</b>: meestal één schrijver.</li></ul></div>`}
],
terms:[
['bald','kaal',0],
['curly','krullend (haar)',0],
['ponytail','paardenstaart',0],
['one hundred and one','101',0],
['present simple','de tegenwoordige tijd, gebruikt bij feiten en gewoontes',2],
['subject pronoun','voornaamwoord vóór het werkwoord: I, you, he, she, it, we, they',3],
['object pronoun','voornaamwoord ná het werkwoord: me, you, him, her, it, us, them',3],
['question word (vraagwoord)','woord waarmee je een vraag begint, zoals who, what, where',4],
['annoying','irritant',4],
['shy','verlegen',4],
['only child','enig kind',4],
['half-brother','halfbroer',4],
['comic','stripverhaal: een verhaal verteld in een reeks tekeningen',5],
['main character','hoofdpersoon van een verhaal',5]
],
cards:[
['Wat betekent \'tall\'?','lang (van lengte)',0],
['Wat is het Engelse woord voor \'bril\'?','glasses',0],
['Schrijf 76 voluit in het Engels.','seventy-six',0],
['Hoe vraag je iemands leeftijd in het Engels?','How old are you?',1],
['Hoe vraag je waar iemand vandaan komt?','Where are you from?',1],
['He ___ (catch, hij) the ball. Welke vorm?','catches',2],
['She ___ (try, zij) to be relaxed. Welke vorm?','tries',2],
['Welke klank hoor je aan het eind van \'loves\'?','/z/',2],
['I like Jim. Jim likes ___. (mij)','me',3],
['Welk voornaamwoord staat vóór het werkwoord: \'she\' of \'her\'?','she',3],
['Welk vraagwoord gebruik je als je weet uit welke opties gekozen wordt?','which',4],
['Wat betekent \'shy\'?','verlegen',4],
['Wat betekent \'twins\'?','tweeling',4],
['Waar wonen de vier tieners uit \'All about me\' o.a.?','Hongkong, Bristol (Engeland), Servië en Canada',5]
],
quiz:[
['Wat betekent \'straight\' (haar)?',['krullend','steil','kort','lang'],1,'\'Straight hair\' betekent steil haar.'],
['Hoe schrijf je 87 voluit in het Engels?',['seventy-eight','eighty-seven','eighty-seventy','seven-eighty'],1,'87 is eighty-seven.'],
['Welke zin gebruik je om jezelf voor te stellen?',['What is your name?','Hi, I\'m your neighbour.','Where do you live?','How old are you?'],1,'\'Hi, I\'m your neighbour\' is een manier om jezelf voor te stellen.'],
['My birthday ___ on the 18th of June. Welke vorm van \'be\'?',['am','is','are','be'],1,'Bij \'my birthday\' (it) gebruik je \'is\'.'],
['He ___ (do) his best. Welke vorm?',['do','dos','does','dose'],2,'Bij \'do\' na he/she/it wordt het \'does\'.'],
['She ___ (buy) her shirts online. Welke vorm?',['buys','buies','buyes','buy'],0,'\'Buy\' eindigt op klinker + y, dus gewoon -s: buys.'],
['Welke klank hoor je aan het eind van \'kisses\'?',['/s/','/z/','/iz/','/sh/'],2,'\'Kisses\' eindigt op \'s\' + \'es\', dat spreek je uit als /iz/.'],
['I am talking to ___. (haar)',['she','her','hers','he'],1,'Na het werkwoord gebruik je \'her\'.'],
['___ likes me. (hij)',['Him','His','He','He\'s'],2,'Vóór het werkwoord gebruik je \'he\'.'],
['___ is your favourite colour, red or blue?',['What','Which','Where','Who'],1,'Je weet hier welke opties er zijn (rood of blauw), dus gebruik je \'which\'.'],
['___ is that girl?',['What','Who','Which','How'],1,'Voor een persoon gebruik je \'who\'.'],
['Wat betekent \'grandparents\'?',['ouders','grootouders','neefjes','broertjes'],1,'\'Grandparents\' betekent grootouders.'],
['Wat betekent \'mean\' (persoonlijkheid)?',['aardig','gemeen','grappig','slim'],1,'\'Mean\' betekent gemeen.'],
['Wat is een \'comic\'?',['een gedicht','een stripverhaal','een roman','een lied'],1,'Een \'comic\' is een stripverhaal.'],
['In \'All about me\' melden de tieners zich aan voor...',['een schoolreis','een zomerkamp','een muziekfestival','een sportwedstrijd'],1,'De tieners melden zich aan voor een zomerkamp (summer camp).'],
['Hi Peter, my name ___ Lucas. Welke vorm van \'be\'?',['am','is','are','be'],1,'Bij \'my name\' (it) gebruik je \'is\'.']
]
});
