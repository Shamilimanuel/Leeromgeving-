import { registerChapter } from '../../../registry.js';

/* Rebuilt 2026-09-25 to the recipe of Economie TL4 H1 (change 6). Same
   grammar, Stones and Theme words, restructured. The drawing is unchanged.
   Terms, cards and quiz unchanged. */
registerChapter('engels|tl|3|2', {
title:'Crime',
summary:[
{heading:'Present perfect',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>wanneer je de <b>present perfect</b> gebruikt</li>
<li>het verschil met de <b>past simple</b></li></ul></div>`
+`<div class="box"><h4>Waar dit hoofdstuk over gaat</h4><p>Dit hoofdstuk gaat over <b>misdaad</b>: een misdaad <b>melden</b> bij de politie, mensen <b>waarschuwen</b> in noodsituaties, en hoe een <b>rechtszaak</b> werkt. Grammatica: de <b>present perfect</b>, <b>onregelmatige werkwoorden</b> en <b>modale werkwoorden</b> zoals can, could en to be able to.</p></div>`
+`<h5 class="sub">Have/has + past participle</h5>`
+`<div class="call reken"><b>Wanneer de present perfect?</b><ol class="num">
<li>Iets is gebeurd en is <b>nu nog belangrijk</b>: A man <b>has just escaped</b> from the correctional facility.</li>
<li>Iets is begonnen en <b>gaat nog door</b>.</li>
<li><b>Ervaringen</b> tot nu toe: I <b>have</b> never <b>been</b> there.</li></ol></div>`
+`<div class="box"><h4>Signaalwoorden</h4><p><b>just</b>, <b>recently</b>, <b>already</b>, <b>yet</b>, <b>ever</b>, <b>never</b>.</p></div>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Past simple</h4><p><b>Afgesloten</b>, vaak met een tijd: I <b>talked</b> to her this morning.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Present perfect</h4><p><b>Gevolgen voor nu</b>: I <b>have just reported</b> the theft.</p></div></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: vier zinnen</h4><p>Ervaring, herhaling, net gebeurd.</p><div class="antwoord">He <b>has never met</b> me. I <b>have never been</b> there. We <b>have travelled</b> there often. A man <b>has just escaped</b>.</div></div>`
+`<div class="call warn"><b>Let op:</b> bij een <b>regelmatig</b> werkwoord is de past participle gelijk aan de past simple: report &rarr; reported &rarr; <b>reported</b>. <b>Onregelmatige</b> werkwoorden hebben een eigen vorm (zie hierna).</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Present perfect of past simple: I (see) him yesterday.</p><p class="check-a">I <b>saw</b> him yesterday: <b>yesterday</b> is afgesloten.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li><b>have/has</b> + past participle.</li>
<li>Link met <b>nu</b>, nog bezig, of een <b>ervaring</b>.</li>
<li>Afgesloten tijd: <b>past simple</b>.</li></ul></div>`},

{heading:'Onregelmatige werkwoorden',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>de drie vormen van <b>onregelmatige werkwoorden</b></li></ul></div>`
+`<h5 class="sub">Drie vormen</h5>`
+`<div class="box"><h4>Irregular verbs</h4><p>Een onregelmatig werkwoord heeft drie vormen: de <b>infinitief</b>, de <b>past simple</b> en de <b>past participle</b>. Ze volgen <b>geen vaste regel</b>, dus je leert ze <b>uit je hoofd</b>.</p></div>`
+`<div class="tblwrap"><table class="tbl"><tr><th>infinitief</th><th>past simple</th><th>past participle</th></tr><tr><td>to go</td><td><b>went</b></td><td><b>gone</b></td></tr><tr><td>to think</td><td><b>thought</b></td><td><b>thought</b></td></tr><tr><td>to drive</td><td><b>drove</b></td><td><b>driven</b></td></tr><tr><td>to steal</td><td><b>stole</b></td><td><b>stolen</b></td></tr><tr><td>to catch</td><td><b>caught</b></td><td><b>caught</b></td></tr><tr><td>to see</td><td><b>saw</b></td><td><b>seen</b></td></tr></table></div>`
+`<div class="call reken"><b>Zo leer je ze</b><ol class="num">
<li>Zeg ze <b>in rijtjes</b> hardop: go, went, gone.</li>
<li>Leer er <b>per week een paar</b>; het complete overzicht staat achter in het boek (<b>Grammar Survey</b>).</li>
<li>Maak er <b>zinnen</b> mee: Someone <b>has stolen</b> my bike.</li></ol></div>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Past simple</h4><p>Zonder have: The thief <b>stole</b> my bike.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Past participle</h4><p>Met have/has: Someone <b>has stolen</b> my bike.</p></div></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Wat is de past participle van to steal?</p><p class="check-a"><b>stolen</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li>Drie vormen: <b>infinitief</b>, <b>past simple</b>, <b>past participle</b>.</li>
<li>Na have/has de <b>past participle</b>.</li></ul></div>`},

{heading:'Modale werkwoorden',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li><b>can</b>, <b>could</b> en <b>to be able to</b> gebruiken</li>
<li><b>modale werkwoorden</b> ontkennen</li></ul></div>`
+`<h5 class="sub">Can, could, to be able to</h5>`
+`<div class="box"><h4>Zonder to erachter</h4><p><b>Modale werkwoorden</b> (can, could, should, must, to have to) worden gevolgd door een <b>infinitief zonder to</b>: I <b>can swim</b>.</p></div>`
+`<div class="g3">`
+`<div class="box"><h4>can</h4><p><b>Verzoeken</b>, <b>toestemming</b>, <b>mogelijkheden</b> en <b>vaardigheden</b>.</p></div>`
+`<div class="box"><h4>to be able to</h4><p><b>Alleen</b> voor mogelijkheden en vaardigheden. I wasn't <b>able to</b> come.</p></div>`
+`<div class="box"><h4>could</h4><p><b>Verleden tijd</b> van can, een <b>beleefde</b> vraag, of een mogelijkheid. <b>Could</b> you lend me your phone?</p></div></div>`
+`<h5 class="sub">Ontkenningen</h5>`
+`<div class="tblwrap"><table class="tbl"><tr><th>Bevestigend</th><th>Ontkennend</th><th>Betekenis</th></tr><tr><td>can</td><td><b>cannot / can't</b></td><td>vaardigheid, mogelijkheid</td></tr><tr><td>could</td><td><b>couldn't</b></td><td>beleefd, verleden van can</td></tr><tr><td>should</td><td><b>shouldn't</b></td><td>advies</td></tr><tr><td>must</td><td><b>mustn't</b></td><td>verplichting van de spreker</td></tr><tr><td>to be able to</td><td><b>isn't / wasn't able to</b></td><td>vaardigheid, mogelijkheid</td></tr><tr><td>to have to</td><td><b>don't / doesn't / didn't have to</b></td><td>verplichting van iemand anders</td></tr></table></div>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>must not</h4><p>Het <b>mag niet</b>: verboden. You <b>mustn't</b> park here.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>don't have to</h4><p>Het <b>hoeft niet</b>, maar het mag wel. You <b>don't have to</b> come.</p></div></div>`
+`<div class="call warn"><b>Uitzondering:</b> <b>to have to</b> ontken je met <b>do</b>: don't / doesn't / didn't have to. De andere krijgen gewoon <b>not</b> of <b>-n't</b>.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Wat is het verschil tussen mustn't en don't have to?</p><p class="check-a"><b>mustn't</b>: het mag niet. <b>don't have to</b>: het hoeft niet.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li>Modaal werkwoord + <b>infinitief zonder to</b>.</li>
<li><b>mustn't</b> = verboden, <b>don't have to</b> = niet nodig.</li>
<li><b>have to</b> ontken je met do.</li></ul></div>`},

{heading:'Een misdaad melden',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>een misdaad <b>melden</b> bij de politie</li>
<li>woorden over <b>delicten</b> en <b>rechtspraak</b></li></ul></div>`
+`<h5 class="sub">Stone: reporting a crime</h5>`
+`<div class="tblwrap"><table class="tbl"><tr><th>Engels</th><th>Nederlands</th></tr><tr><td><b>I'd like to report</b> &hellip;</td><td>Ik wil graag &hellip; aangeven.</td></tr><tr><td><b>Someone has taken</b> &hellip;</td><td>Iemand heeft &hellip; meegenomen.</td></tr><tr><td><b>Can you tell me what happened?</b></td><td>Kun je vertellen wat er gebeurd is?</td></tr><tr><td><b>Could you describe what he looked like?</b></td><td>Kun je beschrijven hoe hij eruitzag?</td></tr><tr><td><b>Has the thief escaped?</b></td><td>Is de dief ontsnapt?</td></tr><tr><td><b>Someone harassed me online.</b></td><td>Iemand viel me online lastig.</td></tr></table></div>`
+`<div class="call reken"><b>Zo doe je aangifte</b><ol class="num">
<li>Zeg <b>wat</b> je wilt melden: I'd like to report a theft.</li>
<li>Vertel <b>wat er gebeurd is</b>, met de present perfect: Someone has stolen my bike.</li>
<li><b>Beschrijf</b> de dader.</li></ol></div>`
+`<h5 class="sub">Theme words</h5>`
+`<div class="g2">`
+`<div class="box"><h4>Delicten</h4><p><b>burglary</b> (inbraak), <b>crime scene</b> (plaats delict), <b>handcuffs</b> (handboeien), <b>intruder</b> (indringer), <b>robbery</b> (overval), <b>vandalism</b>, <b>to break in</b>, <b>to chase</b> (achtervolgen), <b>to escape</b>, <b>to investigate</b> (onderzoeken), <b>to pickpocket</b>, <b>to shoplift</b>.</p></div>`
+`<div class="box"><h4>Recht en rechtspraak</h4><p><b>illegal</b>, <b>judge</b> (rechter), <b>lawyer</b> (advocaat), <b>proof</b> (bewijs), <b>punishment</b> (straf), <b>sentence</b> (vonnis), <b>trial</b> (rechtszaak), <b>verdict</b> (uitspraak), <b>to be charged with</b> (beschuldigd worden van), <b>to be released</b>, <b>to fine</b> (beboeten), <b>to testify</b> (getuigen).</p></div></div>`
+`<div class="call warn"><b>Instinker:</b> <b>burglary</b> is een <b>inbraak</b> (in een huis), <b>robbery</b> is een <b>overval</b> (met geweld of dreiging).</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Wat is een lawyer?</p><p class="check-a">Een <b>advocaat</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li>Aangifte: <b>I'd like to report</b> &hellip;</li>
<li><b>judge</b> = rechter, <b>lawyer</b> = advocaat, <b>verdict</b> = uitspraak.</li></ul></div>`},

{heading:'Mensen waarschuwen',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>mensen <b>waarschuwen</b> in een noodsituatie</li>
<li>woorden over <b>noodsituaties</b> en <b>veiligheid</b></li></ul></div>`
+`<h5 class="sub">Stone: warning people</h5>`
+`<div class="tblwrap"><table class="tbl"><tr><th>Engels</th><th>Nederlands</th></tr><tr><td><b>If there is</b> &hellip;, <b>don't panic.</b></td><td>Als er &hellip; is, raak niet in paniek.</td></tr><tr><td><b>You have to notify the police.</b></td><td>Je moet de politie inlichten.</td></tr><tr><td><b>Always clear the way for</b> &hellip;</td><td>Maak altijd ruimte voor &hellip;</td></tr><tr><td><b>Watch out for</b> &hellip; / <b>Beware of</b> &hellip;</td><td>Kijk uit voor &hellip; / Pas op voor &hellip;</td></tr><tr><td><b>You must change your password.</b></td><td>Je moet je wachtwoord veranderen.</td></tr><tr><td><b>Make sure to update your software.</b></td><td>Zorg dat je je software updatet.</td></tr><tr><td><b>You'd better not park</b> &hellip;</td><td>Je kunt beter niet parkeren &hellip;</td></tr><tr><td>&hellip;, <b>but I could be wrong.</b></td><td>&hellip;, maar ik kan het mis hebben.</td></tr></table></div>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Sterk</h4><p><b>You must</b> &hellip;, <b>You have to</b> &hellip;, <b>Beware of</b> &hellip;</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Voorzichtig</h4><p><b>You'd better not</b> &hellip;, &hellip; <b>but I could be wrong</b>, <b>you never know</b>.</p></div></div>`
+`<h5 class="sub">Theme words</h5>`
+`<div class="box"><h4>Noodsituaties en veiligheid</h4><p><b>emergency services</b> (hulpdiensten), <b>mugger</b> (straatrover), <b>onlooker</b> (omstander), <b>paramedics</b> (ambulancepersoneel), <b>premises</b> (terrein, pand), <b>restricted</b> (verboden toegang), <b>to alert</b> (waarschuwen), <b>to evacuate</b>, <b>to notify</b> (in kennis stellen), <b>to protect</b>, <b>to secure</b> (beveiligen), <b>to threaten</b> (bedreigen).</p></div>`
+`<figure class='fig'><svg viewBox="0 0 320 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Stroomschema met vier stappen bij een noodgeval: blijf kalm, bel de hulpdiensten, maak ruimte, volg instructies op"><defs><marker id="entl3h02arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--accent)"/></marker></defs><g fill="var(--accent)" fill-opacity=".14" stroke="var(--accent)" stroke-width="1.8"><rect x="30" y="16" width="260" height="52" rx="12"/><rect x="30" y="94" width="260" height="52" rx="12"/><rect x="30" y="172" width="260" height="52" rx="12"/><rect x="30" y="250" width="260" height="42" rx="12"/></g><g stroke="var(--accent)" stroke-width="1.8" fill="none" marker-end="url(#entl3h02arrow)"><path d="M160 68 V88"/><path d="M160 146 V166"/><path d="M160 224 V244"/></g><g fill="var(--txt)" font-size="12" font-family="inherit"><text x="46" y="38">1. Stay calm.</text><text x="46" y="116">2. Call the emergency services.</text><text x="46" y="194">3. Make room for the paramedics.</text><text x="46" y="276">4. Follow their instructions.</text></g><g fill="var(--mut)" font-size="10" font-family="inherit"><text x="46" y="56">Blijf kalm.</text><text x="46" y="134">Bel de hulpdiensten.</text><text x="46" y="212">Maak ruimte voor de hulpverleners.</text></g></svg><figcaption>De vaste volgorde bij een noodgeval, met de Engelse zin die je in elke stap gebruikt.</figcaption></figure>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Hoe zeg je: pas op voor zakkenrollers?</p><p class="check-a"><b>Beware of</b> pickpockets.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li>Waarschuwen: <b>watch out for</b>, <b>beware of</b>, <b>don't panic</b>.</li>
<li><b>emergency services</b>, <b>paramedics</b>, <b>to evacuate</b>.</li></ul></div>`},

{heading:'Misdadigers en gedrag beschrijven',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>een <b>verdachte</b> en zijn <b>gedrag</b> beschrijven</li></ul></div>`
+`<h5 class="sub">Theme words: gedrag</h5>`
+`<div class="tblwrap"><table class="tbl"><tr><th>Engels</th><th>Nederlands</th></tr><tr><td><b>aggressive</b></td><td>agressief</td></tr><tr><td><b>armed</b></td><td>gewapend</td></tr><tr><td><b>birthmark</b></td><td>moedervlek</td></tr><tr><td><b>confused</b></td><td>verward</td></tr><tr><td><b>deliberately</b> / <b>on purpose</b></td><td>opzettelijk / expres</td></tr><tr><td><b>shabby</b></td><td>sjofel</td></tr><tr><td><b>suspicious</b></td><td>verdacht</td></tr><tr><td><b>to damage</b></td><td>beschadigen</td></tr><tr><td><b>to harass</b></td><td>lastigvallen</td></tr><tr><td><b>to scam</b></td><td>oplichten</td></tr><tr><td><b>to steal</b></td><td>stelen</td></tr></table></div>`
+`<div class="call reken"><b>Zo beschrijf je een verdachte</b><ol class="num">
<li><b>Uiterlijk</b>: kleding, bijzonderheden (a <b>birthmark</b>, <b>shabby</b> clothes).</li>
<li><b>Gedrag</b>: hoe kwam hij over? (<b>suspicious</b>, <b>aggressive</b>)</li>
<li><b>Wat</b> heeft hij gedaan? Met de <b>present perfect</b>: he has damaged a car.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: een melding</h4><p>Vertel wat je hebt gezien.</p><div class="antwoord">I <b>have noticed</b> a <b>suspicious</b> man. He was <b>armed</b> and he <b>has damaged</b> a car.</div></div>`
+`<div class="call warn"><b>Niet verwarren:</b> <b>on purpose</b> en <b>deliberately</b> gaan over <b>opzet</b>. <b>suspicious</b> gaat over hoe iemand <b>overkomt</b>.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Wat betekent armed?</p><p class="check-a"><b>Gewapend</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li>Beschrijf <b>uiterlijk</b>, <b>gedrag</b> en <b>wat hij deed</b>.</li>
<li><b>on purpose</b> = expres, <b>suspicious</b> = verdacht.</li></ul></div>`}
],
terms:[
['present perfect','have/has + past participle; iets uit het verleden dat relevant is voor nu',0],
['just / already / yet','signaalwoorden die vaak samen met de present perfect gebruikt worden',0],
['past participle','het voltooid deelwoord, gebruikt in de present perfect (bijv. gone, stolen)',1],
['to steal - stole - stolen','onregelmatig werkwoord: stelen',1],
['to be able to','in staat zijn om iets te doen',2],
['mustn\'t','iets is verboden (mag niet)',2],
['don\'t have to','iets is niet verplicht (maar mag wel)',2],
['burglary','inbraak',3],
['to shoplift','winkeldiefstal plegen',3],
['verdict','uitspraak van de rechter',3],
['lawyer','advocaat',3],
['to notify','in kennis stellen / waarschuwen',4],
['emergency services','hulpdiensten',4],
['to evacuate','evacueren',4],
['restricted','verboden toegang / beperkt',4],
['suspicious','verdacht',5],
['armed','gewapend',5],
['deliberately','opzettelijk',5],
['to harass','lastigvallen',5]
],
cards:[
['Wanneer gebruik je de present perfect?','Als iets in het verleden is gebeurd maar nog relevant is voor nu, of nog doorgaat',0],
['Hoe vorm je de present perfect?','have/has + past participle',0],
['Wat is de past simple van \'to go\'?','went',1],
['Wat is de past participle van \'to drive\'?','driven',1],
['Waarvoor gebruik je \'to be able to\' in tegenstelling tot \'can\'?','Alleen om te praten over iemands mogelijkheden of vaardigheden',2],
['Wat is het verschil tussen \'mustn\'t\' en \'don\'t have to\'?','\'mustn\'t\' = verboden, \'don\'t have to\' = niet verplicht (maar mag wel)',2],
['Hoe zeg je in het Engels \'Ik wil graag ... aangeven\'?','I\'d like to report...',3],
['Wat betekent \'to pickpocket\'?','zakkenrollen',3],
['Wat betekent \'verdict\'?','uitspraak van de rechter',3],
['Hoe zeg je \'Je moet de politie inlichten\' in het Engels?','You have to notify the police.',4],
['Wat betekent \'paramedics\'?','ambulancepersoneel',4],
['Wat betekent \'shabby\'?','sjofel',5]
],
quiz:[
['Welke zin staat in de present perfect?',['I talked to her this morning.','I have just reported the theft.','I am reporting the theft.','I will report the theft.'],1,'\'I have just reported the theft\' gebruikt have + past participle: de present perfect.'],
['Welk signaalwoord hoort vaak bij de present perfect?',['yesterday','last week','already','ago'],2,'\'already\' is een typisch signaalwoord voor de present perfect.'],
['Wat is de past participle van \'to steal\'?',['stealed','stole','stolen','stealt'],2,'\'to steal\' is onregelmatig: steal - stole - stolen.'],
['Wat is de past simple van \'to catch\'?',['catched','caught','catch','caughted'],1,'\'to catch\' is onregelmatig: catch - caught - caught.'],
['Welke zin gebruikt \'to be able to\' correct?',['I wasn\'t able to come to the party.','I not able to come to the party.','I couldn\'t able to come.','I am able came to the party.'],0,'\'to be able to\' vervoeg je met een vorm van \'to be\': \'I wasn\'t able to come to the party.\''],
['Wat betekent \'mustn\'t\' in \'You mustn\'t park here\'?',['het is niet verplicht','het is verboden','het is aan te raden','het is mogelijk'],1,'\'mustn\'t\' betekent dat iets verboden is.'],
['Wat betekent \'don\'t have to\' in \'You don\'t have to come\'?',['het is verboden','het is niet verplicht, maar mag wel','het is onmogelijk','het is aan te raden'],1,'\'don\'t have to\' geeft aan dat iets niet verplicht is, maar wel mag.'],
['Welke zin gebruik je om aangifte te doen van diefstal?',['Watch out for pickpockets.','I\'d like to report a theft.','You have to notify the police.','Beware of the dog.'],1,'\'I\'d like to report a theft\' is de juiste zin om aangifte te doen.'],
['Wat betekent \'burglary\'?',['overval','inbraak','vandalisme','zakkenrollerij'],1,'\'Burglary\' betekent inbraak.'],
['Wie spreekt in een rechtszaak het vonnis uit?',['the lawyer','the witness','the judge','the suspect'],2,'\'The judge\' (de rechter) spreekt het vonnis (sentence/verdict) uit.'],
['Welke zin gebruik je om mensen te waarschuwen in een noodsituatie?',['I\'d like to report a crime.','If there is a fire, don\'t panic.','Has the suspect escaped?','Someone has taken my bag.'],1,'\'If there is a fire, don\'t panic\' is een waarschuwing voor een noodsituatie.'],
['Wat betekent \'to evacuate\'?',['evacueren','arresteren','beschermen','onderzoeken'],0,'\'To evacuate\' betekent evacueren, dus mensen ergens vandaan halen wegens gevaar.'],
['Wat betekent \'restricted\' zoals in \'restricted area\'?',['besmet gebied','verboden toegang / beperkt gebied','beveiligd met camera\'s','verlaten gebied'],1,'\'Restricted\' betekent \'beperkt\' of \'verboden toegang\'.'],
['Welk woord past bij: \'The man looked ___ , so we called the police.\'',['suspicious','polite','loyal','optimistic'],0,'\'Suspicious\' (verdacht) past hier het beste.'],
['Wat betekent \'deliberately\'?',['per ongeluk','opzettelijk','voorzichtig','snel'],1,'\'Deliberately\' betekent opzettelijk / met opzet.'],
['Wat betekent \'to harass someone\'?',['iemand helpen','iemand lastigvallen','iemand arresteren','iemand ondervragen'],1,'\'To harass someone\' betekent iemand lastigvallen.'],
['Kies de correcte zin met een onregelmatig werkwoord: \'Someone has ___ my bike.\'',['steal','stealed','stole','stolen'],3,'Na \'has\' (present perfect) volgt de past participle: \'stolen\'.']
]
});
