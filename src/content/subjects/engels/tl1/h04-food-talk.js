import { registerChapter } from '../../../registry.js';

/* Rebuilt 2026-09-25 to the recipe of Economie TL4 H1 (change 6). Same
   grammar, Stones and words, restructured; the "builds on" link stays.
   Terms, cards and quiz unchanged. */
registerChapter('engels|tl|1|4', {
title:'Food talk',
summary:[
{heading:'Boodschappen doen',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>woorden voor <b>boodschappen</b> en <b>hoeveelheden</b></li>
<li>iets <b>kopen</b> en ernaar vragen (Stone 7)</li></ul></div>`
+`<div class="box"><h4>Waar dit hoofdstuk over gaat</h4><p>Je praat over <b>boodschappen</b>, <b>eten</b> en <b>drinken</b>. Je leert <b>some</b> en <b>any</b>, het <b>meervoud</b> (plurals) en <b>this, that, these, those</b>.</p></div>`
+`<div class="call link"><b>Dit bouwt voort op:</b> Chapter 2 &ndash; Time for school (vragen en ontkenningen)</div>`
+`<h5 class="sub">Groceries</h5>`
+`<div class="box"><h4>Woorden</h4><p><b>cereal</b> (ontbijtgranen), <b>chips</b> (patat), <b>crisps</b> (chips), <b>fish</b>, <b>fruit</b>, <b>juice</b> (sap), <b>meat</b> (vlees), <b>milk</b>, <b>rice</b> (rijst), <b>salad</b>, <b>soup</b>, <b>vegetables</b> (groenten).</p></div>`
+`<div class="call warn"><b>Instinker:</b> Britse <b>chips</b> zijn <b>patat</b>. Wat wij chips noemen, heet in Engeland <b>crisps</b>.</div>`
+`<h5 class="sub">Hoeveelheden</h5>`
+`<div class="box"><h4>a ... of ...</h4><p><b>bag</b> (zak), <b>bottle</b> (fles), <b>box</b> (doos), <b>can</b> (blikje), <b>carton</b> (pak), <b>cup</b> (kopje), <b>grams</b>, <b>(half a) kilo</b>, <b>jar</b> (pot), <b>litre</b>, <b>piece</b> (stuk), <b>slice</b> (plak). Zo: a <b>can of</b> coke, a <b>carton of</b> juice, a <b>piece of</b> bread.</p></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: Stone 7, buying things</h4><p>Een gesprek in de winkel.</p><div class="antwoord"><b>Can I have</b> a bag of apples, please? &ndash; Yes, of course. <b>Do you have any</b> fresh vegetables? <b>How much is</b> half a kilo of strawberries? &ndash; It's one pound sixty. <b>Do you want anything else?</b> &ndash; That's it, thank you.</div></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Hoe vraag je wat iets kost?</p><p class="check-a"><b>How much is</b> &hellip;?</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li>Hoeveelheid: <b>a bag / bottle / carton of</b> &hellip;</li>
<li>Kopen: <b>Can I have</b> &hellip;, please? <b>How much is</b> &hellip;?</li>
<li><b>chips</b> = patat, <b>crisps</b> = chips.</li></ul></div>`},

{heading:'Some en any, meervoud',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>kiezen tussen <b>some</b> en <b>any</b> (Grammar 7)</li>
<li>het <b>meervoud</b> maken en uitspreken (Grammar 8)</li></ul></div>`
+`<h5 class="sub">Grammar 7: some en any</h5>`
+`<div class="tblwrap"><table class="tbl"><tr><th>Woord</th><th>Betekenis</th><th>Voorbeeld</th></tr><tr><td><b>some</b></td><td>&lsquo;enkele&rsquo; of &lsquo;wat&rsquo;, in <b>bevestigende</b> zinnen</td><td>I need some eggs.</td></tr><tr><td><b>any</b></td><td>&lsquo;geen enkele&rsquo;, in <b>ontkenningen</b></td><td>She doesn't have any crisps.</td></tr><tr><td><b>any</b></td><td>&lsquo;wat&rsquo;, in <b>vragen</b></td><td>Do you have any sugar?</td></tr></table></div>`
+`<div class="call warn"><b>Uitzondering:</b> weet je al dat het antwoord <b>ja</b> is, bijvoorbeeld als je iets aanbiedt of vraagt, dan gebruik je in een vraag toch <b>some</b>: Can I have <b>some</b> water, please?</div>`
+`<h5 class="sub">Grammar 8: meervoud</h5>`
+`<div class="call reken"><b>Zo maak je het meervoud</b><ol class="num">
<li>Meestal <b>-s</b>: chair &rarr; chairs, snack &rarr; snacks.</li>
<li>Eindigt op <b>-s, -x, -z, -ch</b> of <b>-sh</b>: <b>-es</b>. bus &rarr; buses, box &rarr; boxes.</li>
<li><b>Medeklinker + o</b>: meestal <b>-es</b>. tomato &rarr; tomatoes.</li>
<li><b>Medeklinker + y</b>: <b>-ies</b>. party &rarr; parties, baby &rarr; babies.</li></ol></div>`
+`<div class="tblwrap"><table class="tbl"><tr><th>Uitspraak</th><th>Wanneer</th><th>Voorbeeld</th></tr><tr><td><b>/s/</b></td><td>laatste klank p, t, k, f of th</td><td>cats</td></tr><tr><td><b>/z/</b></td><td>een andere klank</td><td>beds, apples, knees</td></tr><tr><td><b>/iz/</b></td><td>na s, x, z, ch of sh (-es)</td><td>buses, boxes</td></tr></table></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Vul in: She doesn't have ... crisps.</p><p class="check-a"><b>any</b>: het is een ontkenning.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li><b>some</b> in bevestigende zinnen, <b>any</b> in ontkenningen en vragen.</li>
<li>Meervoud: <b>-s</b>, <b>-es</b> of <b>-ies</b>.</li>
<li>Uitspraak: <b>/s/</b>, <b>/z/</b> of <b>/iz/</b>.</li></ul></div>`},

{heading:'Aan tafel',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>om dingen <b>vragen aan tafel</b> (Stone 9)</li>
<li>zeggen hoe eten <b>smaakt</b> (Stone 8)</li></ul></div>`
+`<h5 class="sub">At the table</h5>`
+`<div class="box"><h4>Woorden</h4><p><b>(to) be hungry</b> (honger hebben), <b>(to) be thirsty</b> (dorst hebben), <b>bowl</b> (kom), <b>dessert</b> (toetje), <b>dish</b> (gerecht), <b>fork</b>, <b>glass</b>, <b>knife</b> (mes), <b>mug</b> (mok), <b>plate</b> (bord), <b>(to) set the table</b> (tafel dekken), <b>spoon</b> (lepel).</p></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: Stone 9, asking for things</h4><p>Vragen en aanbieden aan tafel.</p><div class="antwoord">I'm really hungry. Let's have dinner! <b>Do you want anything to drink?</b> &ndash; I want a glass of orange juice, please. <b>Could you pass me</b> the salad? <b>Can I have</b> a mug, please?</div></div>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>can</h4><p>Gewoon: <b>Can</b> you pass me the salt?</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>could</h4><p><b>Beleefder</b>: <b>Could</b> you pass me the salt?</p></div></div>`
+`<h5 class="sub">Flavours</h5>`
+`<div class="box"><h4>Stone 8: talking about food</h4><p><b>awful</b>, <b>bitter</b>, <b>crunchy</b> (knapperig), <b>delicious</b> (heerlijk), <b>disgusting</b> (walgelijk), <b>dry</b>, <b>juicy</b> (sappig), <b>salty</b> (zout), <b>sour</b> (zuur), <b>spicy</b> (pittig), <b>sweet</b>, <b>tasty</b> (lekker). What does the food <b>taste like</b>? &ndash; It is too spicy.</p></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Wat is beleefder: can of could?</p><p class="check-a"><b>could</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li>Vragen aan tafel: <b>Could you pass me</b> &hellip;?</li>
<li><b>could</b> is beleefder dan can.</li>
<li>Smaak: <b>delicious</b> tegenover <b>disgusting</b>.</li></ul></div>`},

{heading:'This, that, these, those',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>kiezen tussen <b>this</b>, <b>that</b>, <b>these</b> en <b>those</b> (Grammar 9)</li></ul></div>`
+`<h5 class="sub">Grammar 9: dichtbij of ver weg, één of meer</h5>`
+`<div class="tblwrap"><table class="tbl"><tr><th></th><th>één</th><th>meer dan één</th></tr><tr><td><b>dichtbij</b> (over here)</td><td><b>this</b></td><td><b>these</b></td></tr><tr><td><b>ver weg</b> (over there)</td><td><b>that</b></td><td><b>those</b></td></tr></table></div>`
+`<div class="call reken"><b>Zo kies je het goede woord</b><ol class="num">
<li>Is het <b>dichtbij</b> of <b>ver weg</b>? Woorden als <b>here</b>, <b>next to me</b> of <b>there</b>, <b>across the room</b> helpen je.</li>
<li>Is het <b>één</b> ding of <b>meer</b>?</li>
<li>Kies in de tabel.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: in één zin</h4><p>Vergelijk iets dichtbij met iets ver weg.</p><div class="antwoord"><b>This</b> pear is yellow and <b>that</b> pear over there is green. <b>These</b> are your shoes and <b>those</b> shoes are my sister's.</div></div>`
+`<div class="call warn"><b>Veelgemaakte fout:</b> &ldquo;this shoes&rdquo;. Bij <b>meervoud</b> hoort <b>these</b> of <b>those</b>.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Welk woord: meer dan één, ver weg?</p><p class="check-a"><b>those</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li>Dichtbij: <b>this</b> (één), <b>these</b> (meer).</li>
<li>Ver weg: <b>that</b> (één), <b>those</b> (meer).</li></ul></div>`},

{heading:'Lezen',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>teksten lezen over <b>gezond eten</b> en <b>3D-geprint eten</b></li></ul></div>`
+`<h5 class="sub">De teksten</h5>`
+`<div class="box"><h4>The Healthy Breakfast Corner</h4><p>De 16-jarige <b>Jennica</b> staat elke schooldag om <b>5 uur</b> op om met klasgenoot <b>Anna</b> een <b>Healthy Breakfast Corner</b> in de kantine op te zetten, met <b>fruit</b> en <b>yoghurtparfaits</b>. Ze begon omdat het schooleten <b>ongezond</b> en <b>bevroren</b> was. Voor sommige leerlingen is het de <b>enige gezonde maaltijd</b> van de dag.</p></div>`
+`<div class="box"><h4>The digital bakery / Sugar Lab</h4><p>Met <b>3D-printers</b> maak je desserts in elke vorm, grootte en kleur. <b>Sugar Lab</b>, van <b>Kyle von Hasseln</b> en <b>Meagan Bozeman</b>, maakt <b>gepersonaliseerde</b> bonbons en truffels.</p></div>`
+`<div class="call reken"><b>Zo vind je de kern van een tekst</b><ol class="num">
<li>Lees de <b>titel</b> en de eerste alinea: waar gaat het over?</li>
<li>Zoek <b>wie</b>, <b>wat</b> en <b>waarom</b>.</li>
<li>Vat samen in <b>één zin</b>.</li></ol></div>`
+`<div class="call waarom">Waarom doet Jennica het? Voor sommige leerlingen heeft hun familie <b>geen geld</b> voor vers fruit en groente. Haar ontbijthoek helpt precies <b>die</b> leerlingen.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Waarom begon Jennica de Healthy Breakfast Corner?</p><p class="check-a">Het schooleten was <b>ongezond</b> en <b>bevroren</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li>Zoek in een tekst <b>wie</b>, <b>wat</b> en <b>waarom</b>.</li>
<li>Vat de kern samen in <b>één zin</b>.</li></ul></div>`}
],
terms:[
['groceries','boodschappen',0],
['a bag / a carton / a jar of...','hoeveelheidswoorden: een zak / een pak / een pot...',0],
['some','enkele/wat, gebruikt in bevestigende zinnen en beleefde vragen',1],
['any','geen enkele/wat, gebruikt in ontkenningen en vragen',1],
['plural (meervoud)','de vorm van een woord voor \'meer dan één\', meestal met -s of -es',1],
['dish','gerecht',2],
['(to) set the table','de tafel dekken',2],
['delicious','heerlijk',2],
['spicy','pittig',2],
['this / that / these / those','aanwijzende voornaamwoorden: dichtbij enkelvoud/meervoud, ver weg enkelvoud/meervoud',3],
['package','verpakking',4],
['customized','gepersonaliseerd',4]
],
cards:[
['Wat betekent \'crisps\'?','chips',0],
['Wat is het Engelse woord voor \'groenten\'?','vegetables',0],
['Do you have ___ fresh vegetables? (vraag)','any',1],
['I need ___ eggs. (bevestigende zin)','some',1],
['Wat is het meervoud van \'box\'?','boxes',1],
['Wat is het meervoud van \'baby\'?','babies',1],
['Welke klank hoor je aan het eind van \'apples\'?','/z/',1],
['Wat betekent \'(to) set the table\'?','de tafel dekken',2],
['Wat betekent \'sour\'?','zuur',2],
['Is \'can\' of \'could\' beleefder in een vraag?','could',2],
['___ pear is yellow (dichtbij, enkelvoud).','This',3],
['___ shoes are my sister\'s (ver weg, meervoud).','Those',3],
['Waarom begon Jennica de Healthy Breakfast Corner?','Omdat het ontbijt van school ongezond en bevroren was',4]
],
quiz:[
['Wat betekent \'a carton of juice\'?',['een fles sap','een pak sap','een blikje sap','een pot sap'],1,'\'A carton\' betekent een pak.'],
['Do you want ___ else? (aanbod)',['some','any','anything','something'],2,'In \'anything else\' gebruik je \'anything\', niet \'some\' of \'any\' los.'],
['We don\'t have ___ apples.',['some','any','a','the'],1,'In een ontkenning gebruik je \'any\': We don\'t have any apples.'],
['Can I have ___ water, please? (je weet dat het antwoord ja zal zijn)',['any','some','a','many'],1,'Bij een beleefd verzoek waarvan je het antwoord al weet, gebruik je \'some\'.'],
['Wat is het meervoud van \'tomato\'?',['tomatos','tomatoes','tomatoies','tomatoe'],1,'\'Tomato\' eindigt op medeklinker + o, dus wordt het meervoud tomatoes.'],
['Wat is het meervoud van \'party\'?',['partys','partyes','parties','partyies'],2,'\'Party\' eindigt op medeklinker + y, dus wordt de y een \'ies\': parties.'],
['Welke klank hoor je aan het eind van \'buses\'?',['/s/','/z/','/iz/','/sh/'],2,'\'Buses\' eindigt op \'s\' + \'es\', dat spreek je uit als /iz/.'],
['Wat betekent \'juicy\'?',['droog','sappig','bitter','zout'],1,'\'Juicy\' betekent sappig.'],
['Can you pass me the salad, please? Dit gebruik je om...',['iets te bestellen in een restaurant','iets te vragen aan tafel','de tafel te dekken','iemand te bedanken'],1,'Deze zin gebruik je om iets aan tafel te vragen.'],
['___ people over there are not listening (ver weg, meervoud).',['This','That','These','Those'],3,'Voor meervoud en ver weg gebruik je \'those\'.'],
['___ is my glass right here (dichtbij, enkelvoud).',['This','That','These','Those'],0,'Voor enkelvoud en dichtbij gebruik je \'this\'.'],
['Waarom is de 3D-printer uit \'The digital bakery\' handig?',['Hij is heel goedkoop','Hij maakt perfecte desserts in elke vorm, maat en kleur die je zelf kiest','Hij maakt alleen chocolade','Hij werkt zonder stroom'],1,'De 3D-printer kan perfecte desserts maken in de vorm, maat en kleur die je zelf kiest.'],
['Wat maakten Kyle von Hasseln en Meagan Bozeman met hun bedrijf Sugar Lab?',['3D-geprinte meubels','Gepersonaliseerde 3D-geprinte bonbons en truffels','Een kookboek','Een restaurant'],1,'Sugar Lab maakt gepersonaliseerde 3D-geprinte chocolade bonbons en truffels.'],
['Wat is een reden waarom de Healthy Breakfast Corner belangrijk is voor sommige leerlingen?',['Het is de enige gezonde maaltijd die ze krijgen','Ze krijgen er cadeautjes','Het is verplicht','Het kost niets extra\'s aan de school'],0,'Voor sommige leerlingen zijn lunch en ontbijt op school de enige maaltijden die ze krijgen.'],
['Wat betekent \'(to) be hungry\'?',['dorst hebben','honger hebben','moe zijn','boos zijn'],1,'\'(To) be hungry\' betekent honger hebben.']
]
});
