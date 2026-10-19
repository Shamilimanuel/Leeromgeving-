import { registerChapter } from '../../../registry.js';

/* Rebuilt 2026-09-25 to the recipe of Economie TL4 H1 (change 6). Fixed:
   the character words were split into positive / negative / neutral with
   "stubborn" and "hostile" as neutral; the book only lists the words, so
   they are now a plain list with meanings (hostile = vijandig is the
   book's). The existing gerund/infinitive ezelsbruggetje stays. Terms,
   cards and quiz unchanged. */
registerChapter('engels|tl|3|1', {
title:'The world around you',
summary:[
{heading:'Present tenses',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>kiezen tussen de <b>present simple</b> en de <b>present continuous</b></li>
<li>de present continuous gebruiken voor <b>irritatie</b></li></ul></div>`
+`<div class="box"><h4>Waar dit hoofdstuk over gaat</h4><p>Alles draait om <b>jou en de mensen om je heen</b>: iemands <b>karakter</b> beschrijven, een <b>gesprek</b> beginnen en gaande houden, en zeggen of je het ergens <b>mee eens</b> bent. Grammatica: <b>present tenses</b>, <b>tag questions</b>, <b>gerunds en infinitives</b>, en woorden als <b>somebody</b>, <b>anywhere</b> en <b>nothing</b>.</p></div>`
+`<h5 class="sub">Simple of continuous?</h5>`
+`<div class="tblwrap"><table class="tbl"><tr><th></th><th>present simple</th><th>present continuous</th></tr><tr><td><b>Gebruik</b></td><td>feiten, gewoontes, wat <b>regelmatig</b> gebeurt</td><td>wat <b>nu</b> gebeurt, of <b>irritatie</b></td></tr><tr><td><b>Vorm</b></td><td>werkwoord (+ -s bij he/she/it)</td><td><b>am/are/is</b> + werkwoord<b>-ing</b></td></tr><tr><td><b>Signaalwoorden</b></td><td>every day, usually, always, often, never</td><td>now, at the moment, right now</td></tr><tr><td><b>Voorbeeld</b></td><td>I <b>eat</b> cereal every day.</td><td>I <b>am eating</b> cereal right now.</td></tr></table></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: feit, nu of irritatie?</h4><p>Welke tijd en waarom?</p><div class="antwoord">The earth <b>is</b> round: een <b>feit</b>, simple. <b>Are</b> you <b>writing</b> that email now? Iets van <b>nu</b>, continuous. He <b>is always biting</b> his nails! <b>Irritatie</b>, continuous.</div></div>`
+`<div class="call waarom">Waarom staat &ldquo;He is always biting his nails&rdquo; in de continuous, terwijl het vaker gebeurt? Het beschrijft geen gewone gewoonte, maar laat <b>irritatie</b> horen over iets wat <b>steeds weer</b> gebeurt.</div>`
+`<div class="call warn"><b>Veelgemaakte fouten:</b> de <b>-s</b> vergeten bij he/she/it (<b>she works</b>, niet she work) en de vorm van <b>to be</b> vergeten (<b>she is working</b>, niet she working).</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Vul in: Look! It (rain).</p><p class="check-a">It <b>is raining</b>: het gebeurt nu.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li><b>Simple</b>: feiten en gewoontes.</li>
<li><b>Continuous</b>: nu, of irritatie (always + -ing).</li>
<li>Continuous = <b>am/are/is</b> + -ing.</li></ul></div>`},

{heading:'Tag questions',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>een <b>tag question</b> achter een zin plakken</li></ul></div>`
+`<h5 class="sub">Wat is een tag question?</h5>`
+`<div class="box"><h4>Het Engelse &lsquo;toch?&rsquo;</h4><p>Een <b>tag question</b> is een kort vraagje achter een zin, als je <b>bevestiging</b> zoekt. Het lijkt op het Nederlandse <b>&lsquo;toch?&rsquo;</b>. You have seen this film before, <b>haven't you?</b></p></div>`
+`<div class="call reken"><b>Zo maak je een tag question</b><ol class="num">
<li><b>Positieve</b> zin: <b>negatieve</b> tag. <b>Negatieve</b> zin: <b>positieve</b> tag.</li>
<li>Staat er <b>to be</b> of een modaal werkwoord (can)? <b>Herhaal</b> dat.</li>
<li>Present perfect? Herhaal <b>have/has</b>.</li>
<li>Een ander werkwoord? Gebruik <b>do/does/did</b>.</li>
<li>Houd dezelfde <b>tijd</b> aan als de hoofdzin.</li></ol></div>`
+`<div class="tblwrap"><table class="tbl"><tr><th>Hoofdzin</th><th>Tag</th><th>Voorbeeld</th></tr><tr><td>positief</td><td>negatief</td><td>You <b>can</b> speak English, <b>can't you?</b></td></tr><tr><td>negatief</td><td>positief</td><td>He <b>wasn't</b> late, <b>was he?</b></td></tr><tr><td>positief, ander werkwoord</td><td>negatief met do</td><td>You <b>called</b> him, <b>didn't you?</b></td></tr><tr><td>negatief, ander werkwoord</td><td>positief met do</td><td>They <b>don't sing</b> well, <b>do they?</b></td></tr></table></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: in een gesprek</h4><p>Twee tag questions in een dialoog.</p><div class="antwoord">&lsquo;You haven't seen Yannick around, <b>have you?</b>&rsquo; &mdash; &lsquo;No, I don't think I have. He is the guy with those awesome sneakers, <b>isn't he?</b>&rsquo;</div></div>`
+`<div class="call warn"><b>Twee instinkers:</b> bij <b>I am</b> wordt de tag <b>aren't I?</b> (I am late, aren't I?). En houd de <b>tijd</b> gelijk: He didn't go, <b>did he?</b>, niet does he?</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Maak af: Alisha's dad is a police officer, ...?</p><p class="check-a"><b>isn't he?</b></p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li>Positief wordt <b>negatief</b>, negatief wordt <b>positief</b>.</li>
<li>Herhaal <b>be/can/have</b>, anders <b>do</b>.</li>
<li>Zelfde <b>tijd</b>; I am &rarr; <b>aren't I?</b></li></ul></div>`},

{heading:'Gerunds and infinitives',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>kiezen tussen een <b>gerund</b> (-ing) en <b>to + infinitief</b></li></ul></div>`
+`<h5 class="sub">-ing of to?</h5>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Gerund (-ing)</h4><p>Na <b>love</b>, <b>like</b>, <b>hate</b>. I love <b>going</b> to festivals.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>to + infinitief</h4><p>Na <b>want</b>, <b>hope</b>, <b>ask</b>, <b>expect</b>, <b>promise</b>, <b>decide</b>, <b>plan</b>, <b>refuse</b>. I want <b>to volunteer</b>.</p></div></div>`
+`<div class="box"><h4>Wat is een gerund?</h4><p>Een <b>gerund</b> is een werkwoord met <b>-ing</b> dat werkt als een <b>zelfstandig naamwoord</b>: <b>Swimming</b> is fun.</p></div>`
+`<div class="call ezel"><b>Ezelsbruggetje:</b> bij <b>gevoel</b> (love, like, hate) meestal de gerund; bij een <b>plan of verwachting</b> (want, hope, expect, plan, decide) to + infinitief.</div>`
+`<div class="voorbeeld"><h4>Voorbeeld: allebei</h4><p>Welke vorm na welk werkwoord?</p><div class="antwoord">We don't like <b>writing</b> assignments. Do you hate <b>watching</b> films? They expect <b>to get</b> enough money. We plan <b>to start</b> at two o'clock.</div></div>`
+`<div class="call warn"><b>Veelgemaakte fout:</b> &ldquo;I hope to seeing you&rdquo;. Na <b>hope</b> komt to + infinitief: I hope <b>to see</b> you.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Vul in: They decided (move) to Leeds.</p><p class="check-a">They decided <b>to move</b>: decide is een plan.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li><b>love/like/hate</b> + -ing.</li>
<li><b>want/hope/plan/decide</b> + to + infinitief.</li></ul></div>`},

{heading:'Some-, any-, every- en no-',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>woorden maken met <b>some-</b>, <b>any-</b>, <b>every-</b> en <b>no-</b></li></ul></div>`
+`<h5 class="sub">Vier beginstukken, drie eindstukken</h5>`
+`<div class="box"><h4>Wat betekent het begin?</h4><p><b>some-</b>: een <b>beperkt</b> aantal. <b>any-</b>: een <b>onbeperkt</b> aantal. <b>every-</b>: <b>alles</b> of <b>iedereen</b>. <b>no-</b>: <b>niets</b> of <b>niemand</b>.</p></div>`
+`<div class="tblwrap"><table class="tbl"><tr><th></th><th>-thing (dingen)</th><th>-body / -one (mensen)</th><th>-where (plaatsen)</th></tr><tr><td><b>some-</b></td><td>something</td><td>somebody / someone</td><td>somewhere</td></tr><tr><td><b>any-</b></td><td>anything</td><td>anybody / anyone</td><td>anywhere</td></tr><tr><td><b>every-</b></td><td>everything</td><td>everybody / everyone</td><td>everywhere</td></tr><tr><td><b>no-</b></td><td>nothing</td><td>nobody / <b>no one</b></td><td>nowhere</td></tr></table></div>`
+`<div class="call reken"><b>Zo bouw je het woord</b><ol class="num">
<li>Kies het <b>begin</b>: hoeveel bedoel je?</li>
<li>Kies het <b>eind</b>: een ding, een mens of een plaats?</li>
<li>Plak ze aan elkaar: some + where = <b>somewhere</b>.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: in zinnen</h4><p>Vier zinnen, vier beginstukken.</p><div class="antwoord">I found <b>something</b>. Can <b>anyone</b> help us? <b>Everyone</b> here is really nice. There's <b>nowhere</b> I'd rather be.</div></div>`
+`<div class="call warn"><b>Spelling:</b> <b>no one</b> schrijf je als <b>twee woorden</b>, niet &ldquo;noone&rdquo;.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Hoe zeg je &lsquo;overal&rsquo;?</p><p class="check-a"><b>everywhere</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li><b>some-</b> beperkt, <b>any-</b> onbeperkt, <b>every-</b> alles, <b>no-</b> niets.</li>
<li><b>-thing</b> dingen, <b>-body/-one</b> mensen, <b>-where</b> plaatsen.</li></ul></div>`},

{heading:'Een gesprek starten en je mening geven',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>een <b>gesprek</b> beginnen en gaande houden</li>
<li>zeggen of je het ergens <b>(on)eens</b> mee bent</li></ul></div>`
+`<h5 class="sub">Stones</h5>`
+`<div class="g2">`
+`<div class="box"><h4>Gesprek starten en houden</h4><p><b>Are you enjoying</b> &hellip;? You often spend time &hellip;, <b>don't you?</b> <b>That sounds interesting.</b> <b>What do you like best</b> about it? <b>Guess what?</b> <b>Anyway</b>, I have to go now.</p></div>`
+`<div class="box"><h4>(On)eens zijn</h4><p><b>I think / feel that</b> &hellip; <b>Absolutely.</b> <b>Would you agree that</b> &hellip;? <b>As a matter of fact, I disagree.</b> <b>Well, I'm not so sure.</b> <b>It depends on</b> how you look at it.</p></div></div>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>I disagree</h4><p><b>Direct</b> oneens.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>I'm not so sure</h4><p><b>Voorzichtiger</b>: er is ruimte voor twijfel.</p></div></div>`
+`<h5 class="sub">Theme words</h5>`
+`<div class="tblwrap"><table class="tbl"><tr><th>Levendig houden</th><th>Nederlands</th></tr><tr><td><b>actually</b></td><td>eigenlijk</td></tr><tr><td><b>by the way</b></td><td>trouwens</td></tr><tr><td><b>Are you serious?</b></td><td>meen je dat?</td></tr><tr><td><b>No way!</b></td><td>geen sprake van!</td></tr><tr><td><b>speaking of</b> &hellip;</td><td>over &hellip; gesproken</td></tr><tr><td><b>that reminds me</b></td><td>dat doet me denken aan</td></tr><tr><td><b>to be honest</b></td><td>eerlijk gezegd</td></tr></table></div>`
+`<div class="tblwrap"><table class="tbl"><tr><th>(On)eens zijn</th><th>Nederlands</th></tr><tr><td><b>definitely</b> / <b>for sure</b></td><td>beslist / zeker weten</td></tr><tr><td><b>exactly</b> / <b>that's right</b></td><td>precies / dat klopt</td></tr><tr><td><b>fair enough</b> / <b>good point</b></td><td>dat is redelijk / goed punt</td></tr><tr><td><b>me neither</b></td><td>ik ook niet</td></tr><tr><td><b>out of the question</b></td><td>geen sprake van</td></tr><tr><td><b>to argue</b> / <b>to doubt</b></td><td>beweren, ruziën / twijfelen</td></tr></table></div>`
+`<div class="call waarom">Waarom niet steeds <b>I think</b>? Wissel af met <b>I feel that</b>, <b>In my opinion</b> of <b>As a matter of fact</b>. Dat klinkt <b>natuurlijker</b>.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Hoe zeg je voorzichtig dat je het niet eens bent?</p><p class="check-a"><b>Well, I'm not so sure.</b></p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li>Gesprek gaande houden: <b>That sounds interesting.</b> <b>What do you like best?</b></li>
<li>Oneens: <b>I disagree</b> (direct) of <b>I'm not so sure</b> (voorzichtig).</li></ul></div>`},

{heading:'Mensen beschrijven en relaties',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>iemands <b>karakter</b> beschrijven</li>
<li>woorden voor <b>vriendschap</b> en <b>relaties</b></li></ul></div>`
+`<h5 class="sub">Karakter</h5>`
+`<div class="tblwrap"><table class="tbl"><tr><th>Engels</th><th>Nederlands</th></tr><tr><td><b>bossy</b></td><td>bazig</td></tr><tr><td><b>childish</b></td><td>kinderachtig</td></tr><tr><td><b>direct</b></td><td>direct</td></tr><tr><td><b>furious</b></td><td>woedend</td></tr><tr><td><b>harsh</b></td><td>hard, streng</td></tr><tr><td><b>hostile</b></td><td>vijandig</td></tr><tr><td><b>kind</b></td><td>aardig</td></tr><tr><td><b>open-minded</b></td><td>ruimdenkend</td></tr><tr><td><b>optimistic</b></td><td>optimistisch</td></tr><tr><td><b>pleasant</b></td><td>aangenaam</td></tr><tr><td><b>polite</b></td><td>beleefd</td></tr><tr><td><b>sensitive</b></td><td>gevoelig</td></tr><tr><td><b>stubborn</b></td><td>koppig</td></tr><tr><td><b>upset</b></td><td>van streek</td></tr></table></div>`
+`<h5 class="sub">Relaties</h5>`
+`<div class="tblwrap"><table class="tbl"><tr><th>Engels</th><th>Nederlands</th></tr><tr><td><b>colleague</b></td><td>collega</td></tr><tr><td><b>easy-going</b></td><td>makkelijk in de omgang</td></tr><tr><td><b>loyal</b></td><td>loyaal</td></tr><tr><td><b>mutual friend</b></td><td>gemeenschappelijke vriend</td></tr><tr><td><b>peer</b></td><td>leeftijdsgenoot</td></tr><tr><td><b>(in)formal</b></td><td>(in)formeel</td></tr><tr><td><b>to break up</b></td><td>het uitmaken</td></tr><tr><td><b>to depend on</b></td><td>afhankelijk zijn van</td></tr><tr><td><b>to have in common</b></td><td>gemeenschappelijk hebben</td></tr><tr><td><b>to help each other out</b></td><td>elkaar helpen</td></tr><tr><td><b>to lose touch with</b></td><td>het contact verliezen met</td></tr><tr><td><b>to make friends</b></td><td>vrienden maken</td></tr></table></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: een levendige beschrijving</h4><p>Combineer een karakterwoord met een situatie.</p><div class="antwoord">My boss is really <b>bossy</b>: she always tells everyone exactly what to do.</div></div>`
+`<div class="call warn"><b>Instinker:</b> <b>sensitive</b> is <b>gevoelig</b>, niet &ldquo;sensitief&rdquo; in de zin van verstandig. Verstandig is <b>sensible</b>.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Wat betekent to lose touch with?</p><p class="check-a"><b>Het contact verliezen met</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li>Karakter: <b>open-minded</b>, <b>stubborn</b>, <b>bossy</b>, <b>polite</b>.</li>
<li>Relaties: <b>make friends</b>, <b>break up</b>, <b>lose touch with</b>.</li>
<li>Geef bij een karakterwoord een <b>voorbeeld</b>.</li></ul></div>`}
],
terms:[
['present continuous','am/are/is + werkwoord + -ing; iets dat nu gebeurt, of irritatie',0],
['tag question','kort vraagje achter een zin om bevestiging te vragen, zoals \'toch?\'',1],
['gerund','werkwoord + -ing dat als zelfstandig naamwoord wordt gebruikt',2],
['to + infinitief','de vorm \'to\' + hele werkwoord, bijvoorbeeld \'to see\'',2],
['somebody / someone','iemand (beperkt aantal)',3],
['anywhere','waar dan ook (onbeperkt aantal plekken)',3],
['everything','alles',3],
['nobody / no one','niemand',3],
['to be honest','eerlijk gezegd',4],
['by the way','trouwens',4],
['for sure','zeker weten',4],
['to doubt','twijfelen',4],
['out of the question','geen sprake van',4],
['bossy','bazig',5],
['easy-going','makkelijk in de omgang',5],
['mutual friend','gemeenschappelijke vriend(in)',5],
['to lose touch with','het contact verliezen met',5],
['to make friends','vrienden maken',5]
],
cards:[
['Wanneer gebruik je de present simple?','Voor feiten, gewoontes en dingen die regelmatig gebeuren',0],
['Waarvoor gebruik je de present continuous naast \'nu bezig zijn\'?','Om irritatie uit te drukken, bijv. \'He is always biting his nails!\'',0],
['Is de hoofdzin positief, hoe is dan de tag question?','Negatief',1],
['Welke tag question hoort bij \'He wasn\'t late,...\'?','...was he?',1],
['Welke vorm volgt er na \'to love\', \'to like\' en \'to hate\'?','De gerund (werkwoord + -ing)',2],
['Welke vorm volgt er na \'to want\' en \'to hope\'?','to + infinitief',2],
['Hoe schrijf je \'no one\' correct?','Als twee losse woorden: no one',3],
['Wat betekent \'everywhere\'?','overal',3],
['Wat betekent \'Guess what?\' in een gesprek?','Raad eens?',4],
['Hoe zeg je in het Engels dat je het ergens niet mee eens bent?','\'As a matter of fact, I disagree.\' of \'I\'m not so sure.\'',4],
['Wat betekent \'harsh\' als karaktereigenschap?','hard / bot',5],
['Wat betekent \'to depend on\'?','afhankelijk zijn van',5]
],
quiz:[
['Welke zin is correct?',['She work every day.','She working every day.','She works every day.','She is work every day.'],2,'Bij de present simple krijgt de he/she/it-vorm een -s: \'She works every day.\''],
['Waarom gebruik je in \'He is always biting his nails!\' de present continuous?',['Omdat het een feit is','Om irritatie uit te drukken','Omdat het in de toekomst gebeurt','Omdat het een gewoonte zonder irritatie is'],1,'De present continuous met \'always\' drukt hier irritatie uit over herhaald gedrag.'],
['Kies de juiste tag question: \'You can speak English, ___?\'',['do you','can\'t you','aren\'t you','didn\'t you'],1,'De hoofdzin is positief met het modale werkwoord \'can\', dus de tag question wordt negatief met hetzelfde werkwoord: \'can\'t you?\''],
['Kies de juiste tag question: \'They don\'t sing well, ___?\'',['do they','don\'t they','are they','aren\'t they'],0,'De hoofdzin is negatief, dus de tag question wordt positief met \'to do\': \'do they?\''],
['Welke zin is grammaticaal correct?',['I love to going to festivals.','I love going to festivals.','I love go to festivals.','I loves going to festivals.'],1,'Na \'to love\' gebruik je de gerund: \'I love going to festivals.\''],
['Welke zin is grammaticaal correct?',['They expect getting enough money.','They expect to get enough money.','They expect get enough money.','They expect to getting enough money.'],1,'Na \'to expect\' gebruik je to + infinitief: \'They expect to get enough money.\''],
['Welk woord past: \'Can ___ help us?\'',['anyone','anywhere','anything','no one'],0,'Voor mensen in een vraag/onbepaalde context gebruik je \'anyone\': \'Can anyone help us?\''],
['Hoe schrijf je \'niemand\' correct in het Engels?',['noone','no-one','no one','not one'],2,'\'No one\' schrijf je altijd als twee losse woorden.'],
['Wat betekent \'by the way\'?',['op de manier van','trouwens','op de weg','in feite'],1,'\'By the way\' betekent \'trouwens\', gebruikt om een nieuw onderwerp aan te snijden.'],
['Welke uitdrukking gebruik je om aan te geven dat je het ergens niet mee eens bent?',['Absolutely!','Fair enough.','As a matter of fact, I disagree.','That\'s right.'],2,'\'As a matter of fact, I disagree\' geeft duidelijk aan dat je het ergens niet mee eens bent.'],
['Welk woord betekent \'bazig\'?',['easy-going','bossy','loyal','polite'],1,'\'Bossy\' betekent bazig: iemand die anderen graag vertelt wat te doen.'],
['Wat betekent \'to lose touch with someone\'?',['iemand leren kennen','het contact met iemand verliezen','iemand aanraken','iemand helpen'],1,'\'To lose touch with someone\' betekent dat je het contact met iemand kwijtraakt.'],
['Kies de juiste zin: \'My phone ___ (to work) right now.\'',['doesn\'t work','isn\'t working','don\'t work','isn\'t work'],1,'Iets dat nu bezig is (niet werken) druk je uit met de present continuous: \'isn\'t working\'.'],
['Welke zin gebruikt de gerund correct?',['We don\'t like writing assignments.','We don\'t like write assignments.','We don\'t like to writing assignments.','We don\'t likes writing assignments.'],0,'Na \'to like\' (in ontkennende vorm) gebruik je de gerund: \'We don\'t like writing assignments.\''],
['Welke betekenis past bij \'mutual friend\'?',['oude vriend','gemeenschappelijke vriend','beste vriend','online vriend'],1,'Een \'mutual friend\' is een vriend die twee mensen gemeenschappelijk hebben.'],
['Wat is het juiste antwoord op: \'Would you agree that homework is useful?\' als je het ermee eens bent?',['Out of the question.','Absolutely, I agree.','I doubt it.','Well, I\'m not so sure.'],1,'\'Absolutely, I agree\' laat duidelijk zien dat je het ermee eens bent.']
]
});
