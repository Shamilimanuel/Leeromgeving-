import { registerChapter } from '../../../registry.js';

/* Rebuilt 2026-09-25 to the recipe of Economie TL4 H1 (change 6). Fixed:
   the ordinals note said every number ending in 1, 2 or 3 is irregular,
   which would give "11st"; 11, 12 and 13 end in -th (the old table already
   had 12th = twelfth). Otherwise the same grammar, Stones and words,
   restructured. The "builds on" link stays. Terms, cards and quiz
   unchanged. */
registerChapter('engels|tl|1|3', {
title:'Time for school',
summary:[
{heading:'School en ordinals',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>woorden over <b>school</b></li>
<li><b>rangtelwoorden</b> (ordinals): first, second, third</li></ul></div>`
+`<div class="box"><h4>Waar dit hoofdstuk over gaat</h4><p>Je praat over <b>school</b>: vakken, <b>roosters</b>, de <b>klok</b> en wat je wel of niet <b>leuk</b> vindt. Je maakt <b>ja/nee-vragen</b> en <b>ontkenningen</b>, en je leert de <b>woordvolgorde</b> van een Engelse zin.</p></div>`
+`<div class="call link"><b>Dit bouwt voort op:</b> Bridging the Gap Primary &ndash; My timetable (dagen en maanden) en Chapter 1 &ndash; This is me (present simple, vraagwoorden)</div>`
+`<h5 class="sub">At school</h5>`
+`<div class="box"><h4>Woorden</h4><p><b>caretaker</b> (conciërge), <b>classroom</b> (klaslokaal), <b>desk</b> (bureau), <b>diary</b> (agenda), <b>(to) fail</b> (onvoldoende halen), <b>homework</b>, <b>locker</b> (kluisje), <b>mark</b> (cijfer), <b>notebook</b> (schrift), <b>(to) pass</b> (voldoende halen), <b>(to) study for</b> (leren voor), <b>timetable</b> (lesrooster).</p></div>`
+`<h5 class="sub">Ordinals</h5>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Telwoord</h4><p><b>Hoeveel</b>: one, two, three.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Rangtelwoord</h4><p><b>Op welke plek</b>: first, second, third.</p></div></div>`
+`<div class="tblwrap"><table class="tbl"><tr><th>Telwoord</th><th>Rangtelwoord</th><th>Nederlands</th></tr><tr><td>one</td><td><b>1st, first</b></td><td>eerste</td></tr><tr><td>two</td><td><b>2nd, second</b></td><td>tweede</td></tr><tr><td>three</td><td><b>3rd, third</b></td><td>derde</td></tr><tr><td>four</td><td><b>4th, fourth</b></td><td>vierde</td></tr><tr><td>five</td><td><b>5th, fifth</b></td><td>vijfde</td></tr><tr><td>twelve</td><td><b>12th, twelfth</b></td><td>twaalfde</td></tr><tr><td>twenty</td><td><b>20th, twentieth</b></td><td>twintigste</td></tr><tr><td>twenty-one</td><td><b>21st, twenty-first</b></td><td>eenentwintigste</td></tr></table></div>`
+`<div class="call warn"><b>Let op:</b> de meeste rangtelwoorden eindigen op <b>-th</b>. Alleen <b>first</b>, <b>second</b> en <b>third</b> zijn anders, ook in 21st, 22nd, 23rd. Maar <b>11th, 12th en 13th</b> eindigen gewoon op -th.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Hoe schrijf je 22e in het Engels?</p><p class="check-a"><b>22nd</b>, twenty-second.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li><b>Rangtelwoord</b>: de plek. Meestal <b>-th</b>.</li>
<li><b>first, second, third</b> zijn onregelmatig.</li>
<li><b>pass</b> = voldoende, <b>fail</b> = onvoldoende.</li></ul></div>`},

{heading:'Vragen en ontkenningen',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li><b>ja/nee-vragen</b> maken (Grammar 4)</li>
<li><b>ontkenningen</b> maken met not en -n't (Grammar 5)</li></ul></div>`
+`<h5 class="sub">Grammar 4: ja/nee-vragen</h5>`
+`<div class="call reken"><b>Zo maak je een ja/nee-vraag</b><ol class="num">
<li>Staat er <b>am, are, is</b> of <b>can</b>? Zet dat woord <b>vooraan</b>. You are the teacher. &rarr; <b>Are</b> you the teacher?</li>
<li>Een <b>ander</b> werkwoord? Zet <b>do</b> (I, you, we, they) of <b>does</b> (he, she, it) vooraan en gebruik het <b>hele werkwoord</b>. He studies a lot. &rarr; <b>Does</b> he <b>study</b> a lot?</li>
<li>Antwoord <b>kort</b>: Yes, I am. / No, they can't.</li></ol></div>`
+`<div class="call warn"><b>Veelgemaakte fout:</b> na <b>does</b> toch -s schrijven. Niet &ldquo;Does he studies&rdquo;, maar <b>Does he study</b>: de -s zit al in does.</div>`
+`<h5 class="sub">Grammar 5: not en -n't</h5>`
+`<div class="tblwrap"><table class="tbl"><tr><th>Volledig (not)</th><th>Kort (-n't)</th></tr><tr><td>I am not in class today.</td><td><b>I'm not</b> in class today.</td></tr><tr><td>You are not at home.</td><td>You <b>aren't</b> at home.</td></tr><tr><td>She is not here.</td><td>She <b>isn't</b> here.</td></tr><tr><td>We cannot study tonight.</td><td>We <b>can't</b> study tonight.</td></tr><tr><td>I do not like maths.</td><td>I <b>don't</b> like maths.</td></tr><tr><td>He does not know the answers.</td><td>He <b>doesn't</b> know the answers.</td></tr></table></div>`
+`<div class="call waarom">Let op twee uitzonderingen: <b>cannot</b> schrijf je als <b>één woord</b>, en de korte vorm van I am not is altijd <b>I'm not</b> (niet &ldquo;I amn't&rdquo;).</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Maak een vraag: They work well together.</p><p class="check-a"><b>Do they work well together?</b></p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li><b>am/are/is/can</b> naar voren; anders <b>do/does</b> + heel werkwoord.</li>
<li>Ontkennen: <b>don't/doesn't</b> + heel werkwoord.</li>
<li><b>cannot</b> is één woord.</li></ul></div>`},

{heading:'Tijd en rooster',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>zeggen hoe laat het is (Stone 4)</li>
<li>praten over je <b>rooster</b> (Stone 5)</li></ul></div>`
+`<h5 class="sub">Stone 4: talking about the time</h5>`
+`<div class="tblwrap"><table class="tbl"><tr><th>Engels</th><th>Nederlands</th></tr><tr><td><b>What time is it?</b> / Can you tell me the time?</td><td>Hoe laat is het?</td></tr><tr><td>It's two <b>o'clock</b>.</td><td>twee uur</td></tr><tr><td>It's <b>half past two</b>.</td><td>half drie</td></tr><tr><td>It's a <b>quarter past</b> two.</td><td>kwart over twee</td></tr><tr><td>It's a <b>quarter to</b> three.</td><td>kwart voor drie</td></tr><tr><td>It's twenty minutes past two.</td><td>twintig over twee</td></tr><tr><td>It's ten to three.</td><td>tien voor drie</td></tr></table></div>`
+`<div class="call warn"><b>Instinker:</b> <b>half past two</b> is <b>half drie</b>, niet half twee. In het Engels tel je vanaf het <b>vorige</b> uur: een half uur <b>na</b> twee.</div>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>am</h4><p><b>Vóór</b> 12 uur 's middags.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>pm</h4><p><b>Na</b> 12 uur 's middags.</p></div></div>`
+`<h5 class="sub">Stone 5: talking about timetables</h5>`
+`<div class="voorbeeld"><h4>Voorbeeld: vragen over je rooster</h4><p>Vraag en vertel wanneer je welke les hebt.</p><div class="antwoord"><b>When is</b> the next English lesson? <b>Do we have</b> music before or after the lunch break? We have geography <b>in the afternoon</b>. My day <b>starts with</b> PE. The school week <b>ends with</b> history.</div></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Hoe zeg je kwart voor drie?</p><p class="check-a">It's a <b>quarter to three</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li><b>past</b> = over, <b>to</b> = voor.</li>
<li><b>half past two</b> = half drie.</li>
<li><b>am</b> vóór, <b>pm</b> na 12 uur 's middags.</li></ul></div>`},

{heading:'Woordvolgorde en likes/dislikes',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>de <b>woordvolgorde</b> van een Engelse zin (Grammar 6)</li>
<li>zeggen wat je wel en niet <b>leuk</b> vindt (Stone 6)</li></ul></div>`
+`<h5 class="sub">Grammar 6: who does what where when?</h5>`
+`<div class="call reken"><b>De vaste volgorde</b><ol class="num">
<li><b>Who</b>: wie (het onderwerp).</li>
<li><b>does</b>: het werkwoord.</li>
<li><b>what</b>: wat.</li>
<li><b>where</b>: waar.</li>
<li><b>when</b>: wanneer.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: in de goede volgorde</h4><p>Zet de delen op hun plek.</p><div class="antwoord"><b>We</b> (who) <b>have</b> (does) <b>a test</b> (what) <b>in class</b> (where) <b>on Tuesday</b> (when). I cycle to school every Monday.</div></div>`
+`<div class="call waarom">Anders dan in het Nederlands: je zegt <b>niet</b> &ldquo;On Tuesday have we a test&rdquo;. <b>When</b> mag wel vooraan, maar dan blijft de rest op zijn plek: <b>Today I have</b> English in classroom 14.</div>`
+`<h5 class="sub">Stone 6: likes and dislikes</h5>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Likes</h4><p>I <b>love</b> to make music. I <b>like</b> to read comics. My <b>favourite</b> subject is biology. I'm <b>crazy about</b> art.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Dislikes</h4><p>I <b>don't enjoy</b> German. I <b>hate</b> maths. I think it's a <b>difficult</b> subject. I'm <b>not good at</b> it.</p></div></div>`
+`<div class="box"><h4>Woorden</h4><p><b>boring</b> (saai), <b>difficult</b> (moeilijk), <b>(to) enjoy</b> (genieten van), <b>fine</b> (prima), <b>great</b> (geweldig), <b>horrible</b> (vreselijk), <b>interesting</b> (interessant).</p></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Wat is de Engelse woordvolgorde?</p><p class="check-a"><b>Who does what where when?</b></p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li><b>Who does what where when</b>.</li>
<li><b>When</b> mag vooraan; de rest blijft op zijn plek.</li>
<li>Likes: love, like, crazy about. Dislikes: hate, don't enjoy.</li></ul></div>`},

{heading:'Lezen en uitspraak',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>teksten lezen over <b>bijzondere scholen</b></li>
<li>de Engelse <b>/w/</b> goed uitspreken</li></ul></div>`
+`<h5 class="sub">De teksten</h5>`
+`<div class="g2">`
+`<div class="box"><h4>How to make maths fun</h4><p><b>Kurt Minnaar</b> is wiskundeleraar in <b>Kaapstad</b>. Hij maakt <b>raps van 60 seconden</b> over de tafels. Als kind vond hij wiskunde zelf <b>saai</b>. Sinds hij muziek gebruikt, zijn er <b>minder problemen</b> in de les en gaan de <b>cijfers omhoog</b>.</p></div>`
+`<div class="box"><h4>More unusual schools</h4><p>In <b>India</b> geeft <b>Inderjit Khurana</b> les op <b>treinstations</b>, aan kinderen die daar anders geld ophalen. In <b>China</b> klimmen sommige leerlingen over een <b>gevaarlijke bergweg</b> naar een school met één leraar, <b>Shen Qijun</b>.</p></div></div>`
+`<h5 class="sub">Uitspraak: /w/</h5>`
+`<div class="call reken"><b>Zo zeg je de Engelse /w/</b><ol class="num">
<li>Tuit je <b>lippen</b> alsof je iemand een kus geeft.</li>
<li>Maak een zachte <b>oe</b>-klank.</li>
<li>Raak je lippen <b>niet</b> aan met je tanden.</li>
<li>Oefen: <b>what</b>, <b>where</b>, <b>wish</b>, <b>wild</b>.</li></ol></div>`
+`<div class="call warn"><b>Stille w:</b> in <b>who</b>, <b>whose</b> en <b>whole</b> klinkt wh als een <b>h</b>. In woorden met <b>wr</b> hoor je alleen de r: <b>write</b>, <b>wrist</b>.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Hoe gebruikt Kurt Minnaar muziek in zijn lessen?</p><p class="check-a">Hij maakt <b>raps van 60 seconden</b> over de tafels.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li>Engelse <b>/w/</b>: lippen tuiten, geen tanden.</li>
<li><b>who, whose, whole</b>: klinkt als h. <b>wr</b>: klinkt als r.</li></ul></div>`}
],
terms:[
['classroom','klaslokaal',0],
['timetable','lesrooster',0],
['(to) pass / (to) fail','voldoende / onvoldoende halen',0],
['ordinal (rangtelwoord)','geeft de plek in een volgorde aan: first, second, third...',0],
['yes/no question','een vraag die je met yes of no kunt beantwoorden',1],
['negation (ontkenning)','een zin negatief maken met not of -n\'t',1],
['half past','half (uur), bijv. half past two = half drie',2],
['quarter to / quarter past','kwart voor / kwart over',2],
['word order (woordvolgorde)','de volgorde who-does-what-where-when in een Engelse zin',3],
['(to) be crazy about','gek zijn op iets',3],
['(to) enjoy','genieten van',3],
['hyperactive','hyperactief',4],
['multiplication tables','tafels van vermenigvuldiging',4]
],
cards:[
['Wat betekent \'homework\'?','huiswerk',0],
['Wat is het rangtelwoord van \'four\'?','fourth (4th)',0],
['Wat is het rangtelwoord van \'one\'?','first (1st)',0],
['Maak een ja/nee-vraag van: \'She has a diary.\'','Does she have a diary?',1],
['Wat is de korte vorm van \'cannot\'?','can\'t',1],
['Wat is de korte vorm van \'I am not\'?','I\'m not',1],
['Hoe zeg je \'kwart over twee\' in het Engels?','a quarter past two',2],
['Hoe zeg je \'tien voor drie\' in het Engels?','ten to three',2],
['Wat betekent \'am\' en \'pm\'?','am is vóór 12 uur \'s middags, pm is erna',2],
['Wat is de juiste volgorde in een Engelse zin?','Who does what where when',3],
['Wat betekent \'(to) hate\'?','haten',3],
['Waar werkt Kurt Minnaar en wat doet hij anders?','Hij is wiskundeleraar in Kaapstad en gebruikt hiphop/rap om lessen leuker te maken',4],
['Hoe tuit je je lippen bij de Engelse /w/?','Alsof je iemand een kus wilt geven, met een zachte /oe/-klank',4]
],
quiz:[
['Wat betekent \'locker\'?',['klaslokaal','kluisje','bureau','conciërge'],1,'\'Locker\' betekent kluisje.'],
['Wat is het rangtelwoord van \'twelve\'?',['twelveth','twelfth','twelfeth','twelvth'],1,'Het rangtelwoord van twelve is twelfth.'],
['Maak een ja/nee-vraag van \'They wake up early.\'',['They wake up early?','Do they wake up early?','Are they wake up early?','Does they wake up early?'],1,'Bij een gewoon werkwoord en \'they\' gebruik je \'Do\' aan het begin: Do they wake up early?'],
['Maak een ontkenning van \'We have a lot of homework.\'',['We have not a lot of homework.','We don\'t have a lot of homework.','We doesn\'t have a lot of homework.','We not have a lot of homework.'],1,'Bij \'we\' en een gewoon werkwoord gebruik je \'don\'t\': We don\'t have a lot of homework.'],
['Hoe laat is \'It\'s half past two\'?',['02:00','02:15','02:30','02:45'],2,'\'Half past two\' is half drie, oftewel 02:30.'],
['\'am\' gebruik je...',['ná 12 uur \'s middags','vóór 12 uur \'s middags','alleen \'s avonds','alleen \'s ochtends vroeg'],1,'\'am\' is vóór 12 uur \'s middags.'],
['Zet in de juiste volgorde: We / have / a test / on Tuesday.',['On Tuesday we a test have.','We have a test on Tuesday.','We a test have on Tuesday.','Have we a test on Tuesday.'],1,'De juiste volgorde is who-does-what-when: We have a test on Tuesday.'],
['Wat betekent \'(to) enjoy\'?',['haten','genieten van','vergeten','beginnen'],1,'\'(To) enjoy\' betekent genieten van.'],
['Wat betekent \'difficult\'?',['makkelijk','moeilijk','leuk','saai'],1,'\'Difficult\' betekent moeilijk.'],
['Waarom gebruikt Kurt Minnaar rapmuziek in de klas?',['Om stil te kunnen zitten','Om de wiskundelessen leuker en makkelijker te maken','Omdat het verplicht is op school','Om minder les te hoeven geven'],1,'Hij gebruikt muziek om wiskunde leuker en makkelijker te maken voor zijn leerlingen.'],
['Waarom geeft Inderjit Khurana les op treinstations in India?',['Omdat er geen scholen zijn','Omdat de kinderen daar normaal geld ophalen bij reizigers','Omdat de treinen te laat zijn','Omdat het goedkoper is'],1,'Kinderen op de treinstations halen normaal geld op bij reizigers in plaats van naar school te gaan; zij brengt de school naar hen toe.'],
['Hoe spreek je de Engelse \'w\' uit, zoals in \'what\'?',['Net als de Nederlandse w','Met je lippen getuit, een zachte /oe/-klank','Als een /f/-klank','Je spreekt de w nooit uit'],1,'Bij de Engelse /w/ tuit je je lippen en maak je een zachte /oe/-klank.'],
['In welk woord spreek je de \'w\' NIET uit?',['wild','wish','who','where'],2,'In \'who\' spreek je de w niet uit; je zegt /h/.'],
['Wat is 21 als rangtelwoord?',['twenty-oneth','twenty-first','twentyth-one','twenty-onest'],1,'21 als rangtelwoord is twenty-first (21st).'],
['Welke zin is een correcte ja/nee-vraag?',['Can you walk the dog?','You can walk the dog?','Walk you can the dog?','Do can you walk the dog?'],0,'Bij \'can\' zet je dit woord aan het begin van de zin: Can you walk the dog?']
]
});
