import { registerChapter } from '../../../registry.js';

/* Rebuilt 2026-09-25 to the recipe of Economie TL4 H1 (change 6). Same
   rules, examples and "builds on" links, restructured. Terms, cards and
   quiz unchanged. */
registerChapter('nederlands|tl|1|5', {
title:'Grammatica',
summary:[
{heading:'Werkwoord',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>een <b>werkwoord</b> herkennen</li></ul></div>`
+`<div class="box"><h4>Waar dit hoofdstuk over gaat</h4><p>De basis van de grammatica: <b>woordsoorten</b> (werkwoord, lidwoord, zelfstandig naamwoord, bijvoeglijk naamwoord, voorzetsel) en <b>zinsdelen</b> (persoonsvorm, onderwerp, werkwoordelijk gezegde). Die heb je steeds nodig bij <b>spelling</b>.</p></div>`
+`<h5 class="sub">Handeling of toestand</h5>`
+`<div class="box"><h4>Werkwoord (ww)</h4><p>In &lsquo;De agent <b>glimlacht</b>.&rsquo; is glimlacht een <b>werkwoord</b>. Een werkwoord geeft een <b>handeling</b> aan (lopen, praten) of een <b>toestand</b> (zijn, lijken).</p></div>`
+`<div class="call reken"><b>Zo herken je een werkwoord</b><ol class="num">
<li>Je kunt het <b>vervoegen</b>: ik glimlach, jij glimlacht, wij glimlachen.</li>
<li>Het <b>hele werkwoord</b> (infinitief) eindigt meestal op <b>-en</b>: glimlachen, lopen.</li>
<li>Het staat vaak (niet altijd) <b>achter</b> het onderwerp.</li></ol></div>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Handeling</h4><p>Iemand <b>doet</b> iets: lopen, praten, glimlachen.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Toestand</h4><p>Iets <b>is</b> zo: zijn, lijken, blijven.</p></div></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Hoe test je of een woord een werkwoord is?</p><p class="check-a">Probeer het te <b>vervoegen</b>: ik &hellip;, jij &hellip;, wij &hellip;</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li>Werkwoord = <b>handeling</b> of <b>toestand</b>.</li>
<li>Je kunt het <b>vervoegen</b>; het hele werkwoord eindigt meestal op <b>-en</b>.</li></ul></div>`},

{heading:'Persoonsvorm',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>de <b>persoonsvorm</b> vinden met de <b>vraagproef</b> en de <b>tijdproef</b></li></ul></div>`
+`<div class="call link"><b>Dit bouwt voort op:</b> Grammatica &sect; 1 Werkwoord</div>`
+`<h5 class="sub">Eén werkwoord is de baas</h5>`
+`<div class="box"><h4>Persoonsvorm (pv)</h4><p>In elke zin staan één of meer <b>werkwoorden</b>. Eén daarvan is de <b>persoonsvorm</b>.</p></div>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Vraagproef</h4><p>Maak een <b>vraag</b> van de zin. Het werkwoord dat <b>vooraan</b> komt, is de pv. <b>Voetballen</b> Chantal en Kirsten in hetzelfde team?</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Tijdproef</h4><p>Zet de zin in een <b>andere tijd</b>. Het werkwoord dat <b>verandert</b>, is de pv. Chantal en Kirsten <b>voetbalden</b> &hellip;</p></div></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: beide proeven</h4><p>&lsquo;Chantal en Kirsten voetballen in hetzelfde team.&rsquo;</p><div class="antwoord">Vraag: <b>Voetballen</b> Chantal en Kirsten &hellip;? Andere tijd: <b>voetbalden</b>. Allebei wijzen ze <b>voetballen</b> aan als pv.</div></div>`
+`<div class="call warn"><b>Let op:</b> bij de vraagproef gebruik je <b>precies dezelfde woorden</b>. Voeg niets toe.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Wat doe je bij de tijdproef?</p><p class="check-a">Je zet de zin in een <b>andere tijd</b>; het werkwoord dat verandert is de pv.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li><b>Vraagproef</b>: het werkwoord vooraan.</li>
<li><b>Tijdproef</b>: het werkwoord dat verandert.</li></ul></div>`},

{heading:'Lidwoord en zelfstandig naamwoord',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li><b>lidwoorden</b> en <b>zelfstandige naamwoorden</b> herkennen</li></ul></div>`
+`<div class="call link"><b>Dit bouwt voort op:</b> Grammatica &sect; 1 Werkwoord</div>`
+`<h5 class="sub">De, het, een</h5>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Lidwoord (lw)</h4><p>Er zijn er drie: <b>de</b>, <b>het</b> en <b>een</b>. Het hoort altijd bij een zelfstandig naamwoord.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Zelfstandig naamwoord (zn)</h4><p>Een woord voor een <b>mens</b>, <b>dier</b>, <b>plant</b> of <b>ding</b>: buurvrouw, schildpad, gras. Ook <b>namen</b>: Tim, Nijmegen.</p></div></div>`
+`<div class="call reken"><b>Zo herken je een zelfstandig naamwoord</b><ol class="num">
<li>Het heeft meestal een <b>enkelvoud</b> en <b>meervoud</b>: vriend, vrienden.</li>
<li>Je kunt er vaak een <b>verkleinwoord</b> van maken: vriendje.</li>
<li>Je kunt er meestal een <b>lidwoord</b> voor zetten: de vriend.</li></ol></div>`
+`<div class="call warn"><b>Let op:</b> soms staat er een woord <b>tussen</b> het lidwoord en het zelfstandig naamwoord: <b>de</b> lage <b>prijs</b>.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Welke drie lidwoorden zijn er?</p><p class="check-a"><b>de</b>, <b>het</b> en <b>een</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li>Lidwoorden: <b>de, het, een</b>.</li>
<li>Zelfstandig naamwoord: mens, dier, plant, ding of <b>naam</b>.</li></ul></div>`},

{heading:'Onderwerp',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>het <b>onderwerp</b> van een zin vinden</li></ul></div>`
+`<div class="call link"><b>Dit bouwt voort op:</b> Grammatica &sect; 2 Persoonsvorm</div>`
+`<h5 class="sub">Wie doet het?</h5>`
+`<div class="box"><h4>Onderwerp (ow)</h4><p>Het <b>onderwerp</b> is vaak een <b>persoon</b> die iets doet, maar het kan ook een <b>dier</b> of <b>ding</b> zijn, en uit <b>meer woorden</b> bestaan. Onderwerp en persoonsvorm horen bij elkaar: <b>allebei</b> enkelvoud of <b>allebei</b> meervoud.</p></div>`
+`<div class="call reken"><b>Stappenplan: het onderwerp vinden</b><ol class="num">
<li>Zoek de <b>persoonsvorm</b>.</li>
<li>Vraag: <b>wie</b> (of wat) + persoonsvorm?</li>
<li>Het antwoord is het <b>onderwerp</b>.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: het wokrestaurant</h4><p>&lsquo;Mijn buurmeisje loopt naar het wokrestaurant.&rsquo;</p><div class="antwoord">pv = <b>loopt</b>. Wie loopt? <b>Mijn buurmeisje</b>: dat is het onderwerp, twee woorden.</div></div>`
+`<div class="call waarom">Waarom horen ow en pv bij elkaar? Is het onderwerp <b>meervoud</b> (de meisjes), dan is de pv dat ook (<b>lopen</b>). Zo check je je <b>spelling</b>.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Welke vraag stel je om het onderwerp te vinden?</p><p class="check-a"><b>Wie (wat) + persoonsvorm?</b></p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li>Eerst de <b>pv</b>, dan: wie of wat + pv?</li>
<li>Onderwerp en pv: allebei <b>enkelvoud</b> of allebei <b>meervoud</b>.</li></ul></div>`},

{heading:'Bijvoeglijk naamwoord',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>een <b>bijvoeglijk naamwoord</b> herkennen</li></ul></div>`
+`<div class="call link"><b>Dit bouwt voort op:</b> Grammatica &sect; 1 Werkwoord en &sect; 3 Lidwoord en zelfstandig naamwoord</div>`
+`<h5 class="sub">Extra informatie</h5>`
+`<div class="box"><h4>Bijvoeglijk naamwoord (bn)</h4><p>In &lsquo;Dat is een <b>spannende</b> film!&rsquo; geeft spannende <b>extra informatie</b> over het zelfstandig naamwoord <b>film</b>.</p></div>`
+`<div class="call reken"><b>Zo herken je een bijvoeglijk naamwoord</b><ol class="num">
<li>Het staat <b>vóór</b> of <b>achter</b> het zelfstandig naamwoord: een spannende film / de film is spannend.</li>
<li>Het heeft een <b>korte</b> en een <b>lange</b> vorm: spannend / spannende.</li>
<li>Je kunt het meestal <b>trappen</b>: spannend, spannender, spannendst.</li></ol></div>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Korte vorm</h4><p>een <b>spannend</b> boek</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Lange vorm</h4><p>een <b>spannende</b> film</p></div></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Wat zijn de trappen van vergelijking van groot?</p><p class="check-a"><b>groot</b>, <b>groter</b>, <b>grootst</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li>Bijvoeglijk naamwoord: <b>extra informatie</b> over een zelfstandig naamwoord.</li>
<li><b>Kort</b> en <b>lang</b>; meestal te <b>trappen</b>.</li></ul></div>`},

{heading:'Werkwoordelijk gezegde',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>het <b>werkwoordelijk gezegde</b> vinden</li></ul></div>`
+`<div class="call link"><b>Dit bouwt voort op:</b> Grammatica &sect; 2 Persoonsvorm</div>`
+`<h5 class="sub">Alle werkwoorden samen</h5>`
+`<div class="box"><h4>Werkwoordelijk gezegde (wg)</h4><p>Alle <b>werkwoorden</b> in een zin samen vormen het <b>werkwoordelijk gezegde</b>. De persoonsvorm hoort er <b>ook</b> bij.</p></div>`
+`<div class="call reken"><b>Stappenplan: het werkwoordelijk gezegde</b><ol class="num">
<li>Zoek de <b>persoonsvorm</b>.</li>
<li>Zoek <b>alle andere</b> werkwoorden.</li>
<li>Samen zijn ze het <b>wg</b>.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: de taart</h4><p>&lsquo;Silvan heeft de hele taart opgegeten.&rsquo;</p><div class="antwoord">pv = <b>heeft</b>. Ander werkwoord: <b>opgegeten</b>. wg = <b>heeft opgegeten</b>.</div></div>`
+`<div class="call warn"><b>Veelgemaakte fout:</b> de persoonsvorm <b>vergeten</b>. Die hoort ook bij het werkwoordelijk gezegde.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Hoort de persoonsvorm bij het werkwoordelijk gezegde?</p><p class="check-a"><b>Ja</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li>wg = <b>alle werkwoorden</b> in de zin.</li>
<li>Inclusief de <b>persoonsvorm</b>.</li></ul></div>`},

{heading:'Voorzetsel',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>een <b>voorzetsel</b> herkennen</li></ul></div>`
+`<h5 class="sub">Plaats, tijd of richting</h5>`
+`<div class="box"><h4>Voorzetsel (vz)</h4><p>In &lsquo;De kat springt <b>op</b> de tafel.&rsquo; is <b>op</b> een voorzetsel. Een voorzetsel geeft vaak een <b>plaats</b>, <b>tijd</b> of <b>richting</b> aan en staat <b>vóór</b> een zelfstandig naamwoord of woordgroep.</p></div>`
+`<div class="box"><h4>Veelgebruikte voorzetsels</h4><p><b>op</b>, <b>in</b>, <b>onder</b>, <b>boven</b>, <b>naast</b>, <b>achter</b>, <b>voor</b>, <b>met</b>, <b>zonder</b>, <b>tijdens</b>, <b>door</b>, <b>na</b>, <b>tot</b>, <b>langs</b>.</p></div>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Plaats</h4><p>De kat ligt <b>onder</b> de tafel.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Tijd</h4><p>We eten <b>na</b> de training.</p></div></div>`
+`<div class="call waarom">Waarom zijn voorzetsels belangrijk? Het zijn kleine woorden, maar <b>zonder</b> voorzetsel klinkt een zin al snel vreemd of <b>onduidelijk</b>.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Wat is het voorzetsel in: We fietsen langs het kanaal?</p><p class="check-a"><b>langs</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li>Voorzetsel: <b>plaats</b>, <b>tijd</b> of <b>richting</b>.</li>
<li>Staat <b>vóór</b> een zelfstandig naamwoord.</li></ul></div>`}
],
terms:[
['Werkwoord (ww)','Een woord dat een handeling of toestand aangeeft, bijvoorbeeld glimlachen of zijn.',0],
['Persoonsvorm (pv)','Het vervoegde werkwoord van een zin; je vindt het met de vraagproef of de tijdproef.',1],
['Vraagproef','Van de zin een vraag maken met precies dezelfde woorden; het werkwoord dat vooraan komt, is de persoonsvorm.',1],
['Tijdproef','De zin in een andere tijd zetten; het werkwoord dat verandert, is de persoonsvorm.',1],
['Lidwoord (lw)','De, het of een; hoort altijd bij een zelfstandig naamwoord.',2],
['Zelfstandig naamwoord (zn)','Een woord voor een mens, dier, plant of ding.',2],
['Onderwerp (ow)','Het deel van de zin dat antwoord geeft op de vraag \'wie/wat + persoonsvorm?\'.',3],
['Bijvoeglijk naamwoord (bn)','Een woord dat extra informatie geeft over een zelfstandig naamwoord, bijvoorbeeld spannend.',4],
['Trappen van vergelijking','De drie vormen van een bijvoeglijk naamwoord: spannend - spannender - spannendst.',4],
['Werkwoordelijk gezegde (wg)','Alle werkwoorden in een zin samen, dus de persoonsvorm plus eventuele andere werkwoorden.',5],
['Voorzetsel (vz)','Een woord dat plaats, tijd of richting aangeeft en voor een zelfstandig naamwoord staat, zoals op, in of naast.',6]
],
cards:[
['Wat geeft een werkwoord aan?','Een handeling of een toestand.',0],
['Wat is de persoonsvorm van een zin?','Het vervoegde werkwoord dat je vindt met de vraagproef of de tijdproef.',1],
['Hoe werkt de vraagproef?','Je maakt van de zin een vraag; het werkwoord dat vooraan komt te staan, is de persoonsvorm.',1],
['Hoe werkt de tijdproef?','Je zet de zin in een andere tijd; het werkwoord dat verandert, is de persoonsvorm.',1],
['Welke drie lidwoorden kent het Nederlands?','De, het en een.',2],
['Wat is een zelfstandig naamwoord?','Een woord voor een mens, dier, plant of ding.',2],
['Met welke vraag vind je het onderwerp van een zin?','Wie (wat) + persoonsvorm?',3],
['Wat is een bijvoeglijk naamwoord?','Een woord dat extra informatie geeft over een zelfstandig naamwoord, bijvoorbeeld spannend.',4],
['Wat zijn de trappen van vergelijking van \'spannend\'?','Spannend - spannender - spannendst.',4],
['Wat is het werkwoordelijk gezegde?','Alle werkwoorden in een zin samen.',5],
['Noem drie voorbeelden van voorzetsels.','Bijvoorbeeld: op, in en naast.',6]
],
quiz:[
['Wat is een werkwoord?',['Een woord voor een mens, dier of ding','Een woord dat een handeling of toestand aangeeft','Een lidwoord','Een voorzetsel'],1,'Een werkwoord geeft een handeling (bijvoorbeeld lopen) of een toestand (bijvoorbeeld zijn) aan.'],
['Wat is de persoonsvorm van de zin \'Chantal en Kirsten voetballen\'?',['Chantal','Kirsten','voetballen','en'],2,'Het vervoegde werkwoord \'voetballen\' is de persoonsvorm.'],
['Hoe vind je de persoonsvorm met de vraagproef?',['Je maakt de zin langer','Je maakt van de zin een vraag; het werkwoord dat vooraan komt, is de pv','Je telt de woorden in de zin','Je zoekt het langste woord'],1,'Bij de vraagproef zet je het vervoegde werkwoord vooraan door er een vraag van te maken.'],
['Welke drie woorden zijn lidwoorden in het Nederlands?',['ik, jij, hij','de, het, een','en, of, maar','op, in, naast'],1,'De drie lidwoorden zijn de, het en een.'],
['Wat is een zelfstandig naamwoord?',['Een woord dat een handeling aangeeft','Een woord voor een mens, dier, plant of ding','Een woord dat plaats aangeeft','Een vervoegd werkwoord'],1,'Een zelfstandig naamwoord is een woord voor een mens, dier, plant of ding.'],
['Met welke vraag vind je het onderwerp?',['Waar + persoonsvorm?','Wie (wat) + persoonsvorm?','Wanneer + persoonsvorm?','Waarom + persoonsvorm?'],1,'Je vindt het onderwerp door te vragen: wie (wat) + persoonsvorm?'],
['Wat is het onderwerp in \'Mijn buurmeisje loopt naar het wokrestaurant\'?',['loopt','het wokrestaurant','Mijn buurmeisje','naar'],2,'Wie loopt? Mijn buurmeisje: dat is het onderwerp.'],
['Waar geeft een bijvoeglijk naamwoord extra informatie over?',['Een werkwoord','Een zelfstandig naamwoord','Een voorzetsel','Een lidwoord'],1,'Een bijvoeglijk naamwoord geeft extra informatie over een zelfstandig naamwoord.'],
['Wat zijn de trappen van vergelijking van \'mooi\'?',['mooi - mooier - mooist','mooi - mooiste - mooier','mooier - mooi - mooist','mooi - meer mooi - meest mooi'],0,'De trappen van vergelijking zijn: mooi - mooier - mooist.'],
['Wat is het werkwoordelijk gezegde in \'Silvan heeft de taart opgegeten\'?',['Silvan','de taart','heeft opgegeten','opgegeten de taart'],2,'Alle werkwoorden samen (heeft + opgegeten) vormen het werkwoordelijk gezegde.'],
['Wat geeft een voorzetsel meestal aan?',['Een handeling','Plaats, tijd of richting','Een gevoel','Een vraag'],1,'Een voorzetsel geeft vaak plaats, tijd of richting aan, zoals op, in of tijdens.'],
['Welk woord is een voorzetsel in \'De kat springt op de tafel\'?',['kat','springt','op','tafel'],2,'\'Op\' geeft de plaats aan en is hier het voorzetsel.'],
['Waarop bouwt Grammatica § 4 Onderwerp voort?',['§ 1 Werkwoord','§ 2 Persoonsvorm','§ 3 Lidwoord en zelfstandig naamwoord','§ 5 Bijvoeglijk naamwoord'],1,'Je hebt de persoonsvorm nodig (§2) om het onderwerp te kunnen vinden.'],
['Wat controleer je met de tijdproef?',['Welk woord het onderwerp is','Welk werkwoord de persoonsvorm is','Welk woord een lidwoord is','Welk woord een voorzetsel is'],1,'Bij de tijdproef zet je de zin in een andere tijd; het werkwoord dat verandert, is de persoonsvorm.']
]
});
