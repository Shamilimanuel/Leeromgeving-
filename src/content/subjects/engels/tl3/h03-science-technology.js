import { registerChapter } from '../../../registry.js';

/* Rebuilt 2026-09-25 to the recipe of Economie TL4 H1 (change 6). Same
   grammar, Stones and Theme words, restructured. The drawing is unchanged.
   Terms, cards and quiz unchanged. */
registerChapter('engels|tl|3|3', {
title:'Science & technology',
summary:[
{heading:'Voorzetsels van tijd en plaats',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>kiezen tussen <b>on</b>, <b>in</b> en <b>at</b> bij <b>tijd</b></li>
<li>kiezen tussen <b>on</b>, <b>in</b> en <b>at</b> bij <b>plaats</b></li></ul></div>`
+`<div class="box"><h4>Waar dit hoofdstuk over gaat</h4><p>Dit hoofdstuk gaat over <b>wetenschap en technologie</b>: deepfakes, hologram-concerten, ruimtevaart en <b>uitvindingen</b>. Je doet <b>voorspellingen</b> en beschrijft <b>apparaten</b>. Grammatica: <b>on/in/at</b>, de <b>toekomst</b> (will, going to, present continuous, future continuous), <b>adjectives en adverbs</b> en <b>bijwoorden van frequentie</b>.</p></div>`
+`<h5 class="sub">On, in of at?</h5>`
+`<div class="tblwrap"><table class="tbl"><tr><th></th><th>Tijd</th><th>Plaats</th></tr><tr><td><b>on</b></td><td><b>dagen</b>, <b>datums</b>: on Monday</td><td><b>openbaar vervoer</b>, <b>bovenop</b>: on the table</td></tr><tr><td><b>in</b></td><td><b>maanden</b>, <b>jaren</b>, <b>seizoenen</b>, dagdelen: in 2010</td><td><b>natuur</b>, <b>landen</b>, <b>binnenin</b>: in France</td></tr><tr><td><b>at</b></td><td><b>kloktijden</b>, <b>feestdagen</b>: at 9am</td><td><b>specifieke plek</b>, huisnummer, gebouw: at the station</td></tr></table></div>`
+`<figure class='fig'><svg viewBox="0 0 340 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Klaslokaal met een boek op de tafel, een boek in de la en iemand bij de deur, om on, in en at te laten zien"><rect x="20" y="24" width="300" height="176" rx="6" fill="none" stroke="var(--line)" stroke-width="1.5"/><g stroke="var(--txt)" stroke-width="1.8" fill="none" opacity=".75"><path d="M60 150 H170"/><path d="M70 150 V196"/><path d="M160 150 V196"/><rect x="196" y="120" width="86" height="76" rx="3"/><path d="M196 150 H282"/></g><rect x="96" y="136" width="38" height="12" rx="2" fill="var(--accent)" fill-opacity=".55" stroke="var(--accent)" stroke-width="1.4"/><rect x="214" y="162" width="34" height="11" rx="2" fill="var(--accent)" fill-opacity=".55" stroke="var(--accent)" stroke-width="1.4"/><path d="M240 160 H262" stroke="var(--txt)" stroke-width="1.4" opacity=".6"/><g stroke="var(--txt)" stroke-width="1.8" fill="none" opacity=".75"><path d="M24 60 V196"/><path d="M24 60 H52"/><path d="M52 60 V196"/></g><circle cx="38" cy="86" r="8" fill="none" stroke="var(--txt)" stroke-width="1.6" opacity=".75"/><g stroke="#e2564f" stroke-width="1.4" fill="none"><path d="M115 130 V104"/><path d="M231 158 V104"/><path d="M38 74 V56"/></g><g fill="#e2564f" font-size="11" font-weight="600" font-family="inherit" text-anchor="middle"><text x="115" y="98">on the table</text><text x="231" y="98">in the drawer</text><text x="38" y="50">at the door</text></g><g fill="var(--mut)" font-size="9.5" font-family="inherit" text-anchor="middle"><text x="115" y="222">erop</text><text x="231" y="222">erin</text><text x="38" y="222">erbij</text></g></svg><figcaption><b>on</b> = op een oppervlak &middot; <b>in</b> = binnenin iets &middot; <b>at</b> = bij een plek of punt.</figcaption></figure>`
+`<div class="call reken"><b>Zo kies je het voorzetsel</b><ol class="num">
<li>Gaat het over <b>tijd</b> of <b>plaats</b>?</li>
<li>Tijd: een <b>klok</b>tijd (at), een <b>dag</b> (on) of <b>langer</b> (in)?</li>
<li>Plaats: een <b>punt</b> (at), <b>bovenop</b> (on) of <b>binnenin</b> (in)?</li></ol></div>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>at school</h4><p>De <b>plek</b> in het algemeen: I am at school.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>in the classroom</h4><p>Echt <b>binnenin</b> het gebouw of lokaal.</p></div></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Vul in: I was born ... 2010.</p><p class="check-a"><b>in</b> 2010: bij een jaar.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li>Tijd: <b>at</b> 9am, <b>on</b> Monday, <b>in</b> May.</li>
<li>Plaats: <b>at</b> de plek, <b>on</b> bovenop, <b>in</b> binnenin.</li></ul></div>`},

{heading:'Toekomstige tijden',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>kiezen tussen vijf manieren om over de <b>toekomst</b> te praten</li></ul></div>`
+`<h5 class="sub">Welke toekomst?</h5>`
+`<div class="tblwrap"><table class="tbl"><tr><th>Vorm</th><th>Gebruik</th><th>Voorbeeld</th></tr><tr><td><b>present simple</b></td><td>volgens een <b>schema</b></td><td>The show <b>starts</b> at 8 o'clock.</td></tr><tr><td><b>will</b> + infinitief</td><td><b>belofte</b>, <b>aanbod</b>, <b>voorspelling</b></td><td>We <b>will help</b> you.</td></tr><tr><td><b>going to</b> + infinitief</td><td><b>plan</b>, nog niet geregeld</td><td>I'm <b>going to give</b> a presentation.</td></tr><tr><td><b>present continuous</b></td><td>plan, al <b>afgesproken</b></td><td>They're <b>working</b> on a project tonight.</td></tr><tr><td><b>future continuous</b></td><td><b>bezig</b> op een moment in de toekomst</td><td>I <b>will be watching</b> TV at 8 o'clock.</td></tr></table></div>`
+`<div class="call reken"><b>Zo kies je</b><ol class="num">
<li>Staat het in een <b>schema</b> of dienstregeling? <b>Present simple</b>.</li>
<li>Is het al <b>afgesproken</b>? <b>Present continuous</b>.</li>
<li>Is het een <b>plan</b>, nog niet geregeld? <b>Going to</b>.</li>
<li>Besluit je het <b>nu</b>, beloof je iets of voorspel je iets? <b>Will</b>.</li></ol></div>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>will</h4><p><b>Spontaan</b> besluit of voorspelling: I'<b>ll</b> get it!</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>going to</h4><p>Er is al een <b>plan</b>: I'm <b>going to</b> study biology.</p></div></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Welke vorm: iets is bezig om 8 uur morgen?</p><p class="check-a">De <b>future continuous</b>: I will be watching TV.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li><b>Schema</b>: present simple. <b>Afgesproken</b>: present continuous.</li>
<li><b>Plan</b>: going to. <b>Spontaan, belofte, voorspelling</b>: will.</li>
<li>Bezig in de toekomst: <b>will be + -ing</b>.</li></ul></div>`},

{heading:'Bijvoeglijke naamwoorden en bijwoorden',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>het verschil tussen een <b>adjective</b> en een <b>adverb</b></li>
<li>een <b>bijwoord</b> maken</li></ul></div>`
+`<h5 class="sub">Adjective of adverb?</h5>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Adjective</h4><p>Zegt iets over een <b>zelfstandig naamwoord</b>: She gave a <b>perfect</b> presentation.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Adverb</h4><p>Zegt iets over een <b>werkwoord</b>: The presentation went <b>perfectly</b>.</p></div></div>`
+`<h5 class="sub">Een bijwoord maken</h5>`
+`<div class="call reken"><b>Zo maak je een adverb</b><ol class="num">
<li>Meestal <b>-ly</b> erachter: safe &rarr; <b>safely</b>, nervous &rarr; <b>nervously</b>.</li>
<li>Eindigt op <b>-y</b>: wordt <b>-ily</b>. happy &rarr; <b>happily</b>, easy &rarr; <b>easily</b>.</li>
<li>Eindigt op <b>-ic</b>: <b>-ally</b>. dramatic &rarr; <b>dramatically</b>.</li>
<li>Eindigt op <b>-le</b>: e wordt <b>y</b>. terrible &rarr; <b>terribly</b>.</li></ol></div>`
+`<div class="tblwrap"><table class="tbl"><tr><th>Adjective</th><th>Adverb</th><th>Let op</th></tr><tr><td>good</td><td><b>well</b></td><td>onregelmatig!</td></tr><tr><td>fast</td><td><b>fast</b></td><td>blijft hetzelfde</td></tr><tr><td>long</td><td><b>long</b></td><td>blijft hetzelfde</td></tr><tr><td>low</td><td><b>low</b></td><td>blijft hetzelfde</td></tr></table></div>`
+`<div class="call warn"><b>Veelgemaakte fout:</b> &ldquo;goodly&rdquo; of &ldquo;He did good&rdquo;. Het bijwoord van good is <b>well</b>: He did <b>well</b> on the test.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Wat is het adverb van scientific?</p><p class="check-a"><b>scientifically</b>: -ic wordt -ally.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li><b>Adjective</b> bij een ding, <b>adverb</b> bij een werkwoord.</li>
<li>Meestal <b>-ly</b>; good wordt <b>well</b>.</li></ul></div>`},

{heading:'Bijwoorden van frequentie',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>zeggen <b>hoe vaak</b> iets gebeurt</li>
<li>waar een <b>bijwoord van frequentie</b> in de zin staat</li></ul></div>`
+`<h5 class="sub">Van altijd naar nooit</h5>`
+`<div class="tblwrap"><table class="tbl"><tr><th>Engels</th><th>Nederlands</th></tr><tr><td><b>always</b></td><td>altijd</td></tr><tr><td><b>usually</b></td><td>meestal</td></tr><tr><td><b>often</b></td><td>vaak</td></tr><tr><td><b>sometimes</b></td><td>soms</td></tr><tr><td><b>hardly ever</b></td><td>bijna nooit</td></tr><tr><td><b>never</b></td><td>nooit</td></tr></table></div>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Meestal</h4><p><b>Vóór</b> het hoofdwerkwoord: We <b>sometimes walk</b> to school.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Bij to be</h4><p><b>Na</b> am/are/is: She <b>is always</b> nice.</p></div></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: op de goede plek</h4><p>Vier zinnen.</p><div class="antwoord">I <b>never charge</b> my phone in time. She <b>is always</b> nice. We <b>sometimes walk</b> to school. They <b>are hardly ever</b> late.</div></div>`
+`<div class="call waarom">Combineer voor een <b>rijke</b> zin: Our robot <b>usually</b> works <b>perfectly</b>, but it <b>occasionally</b> makes a <b>strange</b> noise.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Zet op de goede plek: He is late (never).</p><p class="check-a">He <b>is never</b> late: na to be.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li>Vóór het <b>hoofdwerkwoord</b>.</li>
<li>Maar <b>na</b> am/are/is.</li></ul></div>`},

{heading:'Praten over de toekomst en uitvindingen',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li><b>voorspellingen</b> doen over de toekomst</li>
<li>uitleggen hoe een <b>uitvinding</b> of apparaat werkt</li></ul></div>`
+`<h5 class="sub">Stones</h5>`
+`<div class="g2">`
+`<div class="box"><h4>Talking about the future</h4><p><b>It's possible that</b> &hellip; <b>It's very likely that</b> &hellip; <b>I expect that we will invent</b> &hellip; <b>I doubt that</b> they &hellip; <b>It's unlikely that there will be</b> &hellip;</p></div>`
+`<div class="box"><h4>Talking about inventions</h4><p><b>Could you tell me how</b> &hellip; <b>works?</b> <b>Can you explain how</b> &hellip; <b>is used?</b> <b>With this device, you can</b> &hellip; &hellip; <b>will be compatible with</b> &hellip;</p></div></div>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Zeker</h4><p><b>It's very likely</b> that &hellip; <b>I expect</b> that &hellip;</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Twijfel</h4><p><b>I doubt</b> that &hellip; <b>It's unlikely</b> that &hellip;</p></div></div>`
+`<div class="call reken"><b>Zo beschrijf je een apparaat</b><ol class="num">
<li>Zeg <b>wat</b> het is en wat je ermee <b>kunt</b>: With this device, you can &hellip;</li>
<li>Beschrijf het met <b>adjectives</b>: compact, fast.</li>
<li>Zeg <b>hoe</b> het werkt met een <b>adverb</b>: it works wirelessly.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: een tablet</h4><p>Een korte beschrijving.</p><div class="antwoord">This tablet is <b>compact</b> as well as <b>fast</b>, and it works <b>wirelessly</b>.</div></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Hoe zeg je: het is onwaarschijnlijk dat &hellip;?</p><p class="check-a"><b>It's unlikely that</b> &hellip;</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li>Voorspellen: <b>likely</b>, <b>possible</b>, <b>unlikely</b>, <b>I doubt</b>.</li>
<li>Apparaat: <b>With this device, you can</b> &hellip;</li></ul></div>`},

{heading:'Wetenschap en technologie',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>woorden over <b>onderzoek</b>, <b>apparaten</b> en <b>ruimtevaart</b></li>
<li>een <b>deepfake</b> herkennen</li></ul></div>`
+`<h5 class="sub">Theme words</h5>`
+`<div class="g2">`
+`<div class="box"><h4>Technologie en ontwikkeling</h4><p><b>advanced</b> (geavanceerd), <b>average</b> (gemiddeld), <b>engineer</b> (ingenieur), <b>gravity</b> (zwaartekracht), <b>lab(oratory)</b>, <b>pressure</b> (druk), <b>radiation</b> (straling), <b>to develop</b>, <b>to measure</b> (meten), <b>to melt</b> (smelten).</p></div>`
+`<div class="box"><h4>Apparaten en uitvindingen</h4><p><b>brand new</b> (gloednieuw), <b>device</b> (apparaat), <b>fancy</b> (chic), <b>futuristic</b>, <b>portable</b> (draagbaar), <b>practical</b>, <b>wireless</b> (draadloos), <b>boiling point</b> (kookpunt), <b>chemical</b> (chemische stof), <b>flammable</b> (brandbaar), <b>result</b>.</p></div></div>`
+`<div class="box"><h4>Ruimtevaart</h4><p><b>astronaut</b>, <b>oddity</b> (eigenaardigheid), <b>commencing</b> (beginnend), <b>ignition</b> (ontsteking), <b>peculiar</b> (vreemd), <b>reappearing</b> (opnieuw verschijnend), <b>seamless</b> (naadloos), <b>catch on</b> (aanslaan).</p></div>`
+`<h5 class="sub">Deepfakes en hologrammen</h5>`
+`<div class="box"><h4>Nep dat echt lijkt</h4><p>Een <b>deepfake</b> is een <b>nepvideo</b> of nepafbeelding die heel echt lijkt. Met <b>AI</b> (Artificial Intelligence, kunstmatige intelligentie) laat je mensen dingen zeggen of doen die ze <b>nooit</b> deden. Ook overleden artiesten kunnen als <b>hologram</b> weer optreden: oude beelden, een <b>impersonator</b> (imitator) die de bewegingen nadoet, en gezichtsuitdrukkingen die er met camera's overheen worden geplakt.</p></div>`
+`<div class="call reken"><b>Zo herken je een deepfake</b><ol class="num">
<li>Beweegt de <b>mond</b> onnatuurlijk?</li>
<li>Zie je <b>wazige pixels</b>?</li>
<li>Past het <b>lichaam</b> bij het <b>hoofd</b>?</li>
<li>Wie heeft de video gemaakt: wat is de <b>bron</b>?</li></ol></div>`
+`<div class="call waarom">Is een deepfake altijd fout? <b>Nee</b>: de techniek wordt ook gebruikt in <b>films</b> en <b>muziekvideo's</b>. Het wordt een probleem als je er mensen mee <b>misleidt</b>. Hologramconcerten zijn <b>juridisch</b> lastig: er is veel geld mee te verdienen, maar niet altijd duidelijk <b>wie</b> daar recht op heeft.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Wat is een deepfake?</p><p class="check-a">Een <b>nepvideo</b> of nepafbeelding, gemaakt met AI, die heel echt lijkt.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li><b>device</b>, <b>portable</b>, <b>wireless</b>, <b>flammable</b>.</li>
<li>Deepfake: check <b>mond</b>, <b>pixels</b>, <b>lichaam</b> en <b>bron</b>.</li></ul></div>`}
],
terms:[
['on (voorzetsel van tijd)','gebruikt bij dagen en datums',0],
['at (voorzetsel van plaats)','gebruikt bij specifieke locaties en gebouwen',0],
['going to + infinitief','voor plannen/intenties waar nog geen afspraak voor gemaakt is',1],
['future continuous','will + be + werkwoord + -ing; iets is bezig op een moment in de toekomst',1],
['adjective','bijvoeglijk naamwoord; zegt iets over een zelfstandig naamwoord',2],
['adverb','bijwoord; zegt iets over een werkwoord, eindigt meestal op -ly',2],
['well','het onregelmatige bijwoord van \'good\'',2],
['hardly ever','bijna nooit',3],
['usually','meestal',3],
['It\'s very likely that...','vaste zin: het is zeer waarschijnlijk dat...',4],
['compatible with','compatibel met',4],
['device','apparaat',5],
['wireless','draadloos',5],
['deepfake','een realistisch ogende nepvideo of nepafbeelding, vaak gemaakt met AI',5],
['impersonator','imitator',5],
['engineer','ingenieur',5],
['flammable','brandbaar',5],
['astronaut','ruimtevaarder',5]
],
cards:[
['Welk voorzetsel gebruik je bij kloktijden?','at (bijv. at 9am)',0],
['Welk voorzetsel gebruik je bij maanden en jaren?','in (bijv. in April, in 2024)',0],
['Wanneer gebruik je \'will + infinitief\'?','Om iets te beloven, aan te bieden of te voorspellen',1],
['Wanneer gebruik je \'going to\' in plaats van \'will\'?','Voor plannen/intenties waar nog geen concrete afspraak voor is',1],
['Wat is het verschil tussen een adjective en een adverb?','Een adjective zegt iets over een zelfstandig naamwoord, een adverb over een werkwoord',2],
['Wat is het bijwoord van \'good\'?','well (onregelmatig)',2],
['Waar plaats je een bijwoord van frequentie bij het werkwoord \'to be\'?','Na het werkwoord (bijv. She is always nice)',3],
['Noem drie bijwoorden van frequentie op volgorde van vaak naar nooit.','Bijvoorbeeld: always, usually, sometimes, hardly ever, never',3],
['Hoe zeg je in het Engels \'Het is zeer waarschijnlijk dat...\'?','It\'s very likely that...',4],
['Hoe vraag je in het Engels hoe een apparaat werkt?','Could you tell me how... works?',4],
['Wat is een deepfake?','Een realistisch ogende nepvideo of nepafbeelding, vaak gemaakt met kunstmatige intelligentie',5],
['Wat betekent \'flammable\'?','brandbaar',5]
],
quiz:[
['Welk voorzetsel past: \'I have class ___ Monday.\'',['in','on','at','by'],1,'Bij dagen gebruik je \'on\': \'I have class on Monday.\''],
['Welk voorzetsel past: \'School starts ___ 9am.\'',['in','on','at','for'],2,'Bij kloktijden gebruik je \'at\': \'School starts at 9am.\''],
['Welk voorzetsel past: \'My phone is ___ the table.\'',['in','on','at','to'],1,'Als iets \'bovenop\' iets ligt, gebruik je \'on\': \'on the table.\''],
['Welke zin gebruikt \'going to\' correct voor een nog ongepland voornemen?',['I\'m going to give a presentation.','I give a presentation.','I will presentation.','I am presentation going.'],0,'\'going to\' gebruik je voor een plan/intentie: \'I\'m going to give a presentation.\''],
['Welke vorm gebruik je voor een spontane belofte: \'Don\'t worry, ___ help you.\'',['we going to','we are helping','we will','we help'],2,'Voor een spontane belofte gebruik je \'will\': \'we will help you.\''],
['Welke zin staat in de future continuous?',['I will watch TV.','I am going to watch TV.','I will be watching TV at 8 o\'clock.','I watch TV at 8 o\'clock.'],2,'De future continuous is will + be + werkwoord + -ing: \'I will be watching TV at 8 o\'clock.\''],
['Kies het juiste woord: \'She gave a ___ presentation.\' (bijvoeglijk naamwoord bij \'presentation\')',['perfectly','perfect','perfection','perfecting'],1,'Bij een zelfstandig naamwoord gebruik je het adjective: \'a perfect presentation.\''],
['Kies het juiste woord: \'The presentation went ___.\' (bijwoord bij \'went\')',['perfect','perfectly','perfection','perfectness'],1,'Bij een werkwoord gebruik je het adverb: \'went perfectly.\''],
['Wat is het bijwoord van \'happy\'?',['happyly','happily','happyy','happness'],1,'Eindigt het adjective op -y, dan wordt dit -ily: happy -> happily.'],
['Wat is het bijwoord van \'good\'?',['goodly','good','well','goodily'],2,'\'good\' is onregelmatig: het bijwoord is \'well\', niet \'goodly\'.'],
['Waar plaats je \'always\' in: \'He ___ works hard.\'',['He always works hard.','He works always hard.','He works hard always.','Always he works hard.'],0,'Een bijwoord van frequentie plaats je meestal vóór het hoofdwerkwoord: \'He always works hard.\''],
['Waar plaats je \'never\' bij het werkwoord \'to be\': \'She ___ late.\'',['She never is late.','She is never late.','Never she is late.','She is late never.'],1,'Bij een vorm van \'to be\' plaats je het bijwoord van frequentie na het werkwoord: \'She is never late.\''],
['Welke zin past bij het doen van een voorspelling over de toekomst?',['Could you tell me how it works?','It\'s very likely that robots will help us.','With this device, you can call anyone.','This tablet is compact.'],1,'\'It\'s very likely that...\' is een vaste zin om een voorspelling te doen.'],
['Wat is een deepfake?',['een kapot apparaat','een realistisch ogende nepvideo of nepafbeelding','een soort robot','een ouderwetse hologram-truc'],1,'Een deepfake is een realistisch ogende nepvideo of nepafbeelding, vaak gemaakt met AI.'],
['Wat betekent \'wireless\'?',['draadloos','draagbaar','gloednieuw','compact'],0,'\'Wireless\' betekent draadloos.'],
['Wat betekent \'engineer\'?',['wetenschapper','ingenieur','technicus zonder diploma','uitvinder'],1,'\'Engineer\' betekent ingenieur.'],
['Wat betekent \'flammable\'?',['waterdicht','onbreekbaar','brandbaar','doorzichtig'],2,'\'Flammable\' betekent brandbaar.'],
['Wie is Major Tom in het lied \'Space Oddity\' van David Bowie?',['een politieagent','een astronaut','een uitvinder','een ingenieur'],1,'Major Tom is een astronaut in het lied \'Space Oddity\'.']
]
});
