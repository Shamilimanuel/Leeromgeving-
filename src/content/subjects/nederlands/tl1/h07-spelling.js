import { registerChapter } from '../../../registry.js';

/* Rebuilt 2026-09-25 to the recipe of Economie TL4 H1 (change 6). Fixed:
   the capital-letter warning said "nederlands" (the subject) sometimes gets
   no capital; the book's rule is that words derived from names do
   (Haarlemse, Europese), and the "U in a letter" line is not in the book.
   The plural rule "schip - schepen" is replaced by the book's four rules
   (f/v, s/z, verdubbelen, klinker weghalen). The paragraph numbers in the
   links (Spelling § 8-12) match the book. Terms, cards and quiz unchanged. */
registerChapter('nederlands|tl|1|7', {
title:'Spelling',
summary:[
{heading:'Hoofdletters',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li><b>hoofdletters</b> op de juiste manier gebruiken</li></ul></div>`
+`<div class="box"><h4>Waar dit hoofdstuk over gaat</h4><p>Belangrijke <b>spellingregels</b>: <b>hoofdletters</b>, <b>leestekens</b>, de laatste letter <b>-d of -t</b>, <b>meervouden</b> en <b>verkleinwoorden</b>. Daarna <b>werkwoordspelling</b>: de persoonsvorm in de <b>tegenwoordige</b> en <b>verleden tijd</b>, <b>sterke en zwakke</b> werkwoorden en de vijf <b>onregelmatige</b> werkwoorden.</p></div>`
+`<h5 class="sub">Drie plekken voor een hoofdletter</h5>`
+`<div class="call reken"><b>Zo gebruik je hoofdletters</b><ol class="num">
<li>Aan het <b>begin</b> van elke zin.</li>
<li>Bij <b>namen</b>: Bjorn, de Hoofdstraat, Tilburg, Lowlands.</li>
<li>Bij woorden die van <b>namen afgeleid</b> zijn: een <b>Haarlemse</b> boekhandel, de <b>Europese</b> landen.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: zet de hoofdletters goed</h4><p>&lsquo;in belgië zijn dat veerle en een vlaams meisje, valerie.&rsquo;</p><div class="antwoord">&lsquo;<b>I</b>n <b>B</b>elgië zijn dat <b>V</b>eerle en een <b>V</b>laams meisje, <b>V</b>alerie.&rsquo; Begin van de zin, namen, en <b>Vlaams</b> is afgeleid van een naam.</div></div>`
+`<div class="call warn"><b>Let op afgeleide woorden:</b> <b>Nederlands</b>, <b>Vlaams</b>, <b>Europese</b> krijgen een hoofdletter, omdat ze van een <b>naam</b> komen.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Hoofdletter of niet: haarlemse boekhandel?</p><p class="check-a"><b>Haarlemse</b> boekhandel: afgeleid van de naam Haarlem.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li>Begin van de <b>zin</b>, <b>namen</b>, en woorden <b>afgeleid</b> van namen.</li></ul></div>`},

{heading:'Leestekens: punt, uitroepteken, vraagteken',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>kiezen tussen <b>punt</b>, <b>vraagteken</b> en <b>uitroepteken</b></li></ul></div>`
+`<h5 class="sub">Hoe eindig je een zin?</h5>`
+`<div class="tblwrap"><table class="tbl"><tr><th>Leesteken</th><th>Gebruik je bij</th><th>Voorbeeld</th></tr><tr><td><b>Punt</b> (.)</td><td>een <b>mededelende</b> zin</td><td>Ik ga naar huis.</td></tr><tr><td><b>Vraagteken</b> (?)</td><td>een <b>vragende</b> zin</td><td>Ga jij ook naar huis?</td></tr><tr><td><b>Uitroepteken</b> (!)</td><td>een sterke <b>emotie</b>, <b>bevel</b> of <b>uitroep</b></td><td>Ga naar huis!</td></tr></table></div>`
+`<div class="call reken"><b>Zo kies je</b><ol class="num">
<li>Vertelt de zin iets? <b>Punt</b>.</li>
<li>Stelt de zin een vraag? <b>Vraagteken</b>.</li>
<li>Is het een bevel, uitroep of sterk gevoel? <b>Uitroepteken</b>.</li></ol></div>`
+`<div class="call warn"><b>Veelgemaakte fout:</b> te veel uitroeptekens (!!!) in een <b>formele</b> tekst. Eén is genoeg.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Welk leesteken hoort bij een bevel?</p><p class="check-a">Een <b>uitroepteken</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li><b>.</b> mededeling, <b>?</b> vraag, <b>!</b> emotie, bevel of uitroep.</li></ul></div>`},

{heading:'Laatste letter -d of -t',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>kiezen tussen <b>-d</b> en <b>-t</b> aan het eind van een woord</li></ul></div>`
+`<div class="call link"><b>Dit bouwt voort op:</b> Grammatica &sect; 2 Persoonsvorm en &sect; 4 Onderwerp</div>`
+`<h5 class="sub">Je hoort een t, je schrijft een d</h5>`
+`<div class="box"><h4>Het probleem</h4><p>Aan het eind van een woord hoor je vaak een <b>t-klank</b>, terwijl je soms een <b>d</b> schrijft. Dat gebeurt veel bij werkwoorden waarvan de <b>stam</b> al op <b>-d</b> eindigt.</p></div>`
+`<div class="call reken"><b>Stappenplan: -d of -t?</b><ol class="num">
<li>Werkwoord: maak de <b>ik-vorm</b>. Bij hij wordt is dat <b>ik word</b> (met d).</li>
<li>Bij hij/zij komt er <b>-t</b> achter de ik-vorm, ook na een d: word + t = <b>wordt</b>.</li>
<li>Zelfstandig naamwoord: maak het <b>langer</b> (meervoud). Antwoorden heeft een d, dus <b>antwoord</b>.</li></ol></div>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>ik</h4><p>ik <b>word</b>, ik <b>vind</b></p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>hij/zij</h4><p>hij <b>wordt</b>, zij <b>vindt</b></p></div></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Schrijf je het hond of het hont?</p><p class="check-a"><b>hond</b>: het meervoud is honden.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li>Werkwoord: <b>ik-vorm</b> + t bij hij/zij.</li>
<li>Zelfstandig naamwoord: maak het <b>langer</b>.</li></ul></div>`},

{heading:'Meervouden',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li><b>meervouden</b> goed spellen</li></ul></div>`
+`<h5 class="sub">-en of -s</h5>`
+`<div class="box"><h4>Enkelvoud en meervoud</h4><p>Is er van iets <b>één</b>, dan is het <b>enkelvoud</b>; zijn het er <b>meer</b>, dan is het <b>meervoud</b>. Meestal zet je <b>-en</b> of <b>-s</b> achter het woord: vriend &rarr; vrienden, wielrenner &rarr; wielrenners.</p></div>`
+`<div class="call reken"><b>Let op: soms verandert er meer</b><ol class="num">
<li><b>f wordt v</b>: brief &rarr; <b>brieven</b>.</li>
<li><b>s wordt z</b>: gans &rarr; <b>ganzen</b>, paleis &rarr; <b>paleizen</b>.</li>
<li><b>Medeklinker verdubbelen</b>: jas &rarr; <b>jassen</b>, pit &rarr; <b>pitten</b>.</li>
<li><b>Klinker weghalen</b>: muur &rarr; <b>muren</b>, heer &rarr; <b>heren</b>.</li></ol></div>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Meervoud op -en</h4><p>De <b>meeste</b> woorden: boek &rarr; boeken.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Meervoud op -s</h4><p>Vaak bij woorden op <b>-el, -em, -en, -er</b> of op een <b>klinker</b>: tafel &rarr; tafels, auto &rarr; <b>auto's</b>.</p></div></div>`
+`<div class="call warn"><b>Veelgemaakte fout:</b> de <b>apostrof</b> vergeten na a, o, u of y: <b>auto's</b>, <b>baby's</b>, niet autos.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Wat is het meervoud van brief?</p><p class="check-a"><b>brieven</b>: de f wordt een v.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li>Meestal <b>-en</b>, soms <b>-s</b>.</li>
<li><b>f/v</b>, <b>s/z</b>, <b>verdubbelen</b>, <b>klinker weg</b>.</li>
<li>Twijfel: <b>woordenboek</b>.</li></ul></div>`},

{heading:'Verkleinwoorden',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li><b>verkleinwoorden</b> maken met het goede achtervoegsel</li></ul></div>`
+`<div class="call link"><b>Dit bouwt voort op:</b> Formuleren &sect; 2 De- en het-woorden</div>`
+`<h5 class="sub">Kleiner maken</h5>`
+`<div class="tblwrap"><table class="tbl"><tr><th>Achtervoegsel</th><th>Voorbeeld</th></tr><tr><td><b>-je</b></td><td>huis &rarr; huisje</td></tr><tr><td><b>-tje</b></td><td>auto &rarr; autootje, deur &rarr; deurtje</td></tr><tr><td><b>-etje</b></td><td>bal &rarr; balletje (medeklinker verdubbeld)</td></tr><tr><td><b>-pje</b></td><td>boom &rarr; boompje</td></tr><tr><td><b>-kje</b></td><td>koning &rarr; koninkje</td></tr></table></div>`
+`<div class="call reken"><b>Zo kies je</b><ol class="num">
<li>Kijk naar de <b>laatste letters</b> van het woord.</li>
<li>Zeg het verkleinwoord hardop: wat <b>klinkt</b> goed?</li>
<li>Kies het achtervoegsel uit de tabel.</li></ol></div>`
+`<div class="call waarom">Handig om te weten: een verkleinwoord is <b>altijd</b> een <b>het</b>-woord: het huisje, het boompje.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Wat is het verkleinwoord van koning?</p><p class="check-a"><b>koninkje</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li><b>-je</b>, <b>-tje</b>, <b>-etje</b>, <b>-pje</b>, <b>-kje</b>.</li>
<li>Verkleinwoord = <b>het</b>-woord.</li></ul></div>`},

{heading:'Persoonsvorm tegenwoordige tijd',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>de <b>persoonsvorm</b> in de <b>tegenwoordige tijd</b> goed spellen</li></ul></div>`
+`<div class="call link"><b>Dit bouwt voort op:</b> Grammatica &sect; 2 Persoonsvorm</div>`
+`<h5 class="sub">Het onderwerp bepaalt het</h5>`
+`<div class="call reken"><b>Stappenplan: persoonsvorm tt</b><ol class="num">
<li>Onderwerp <b>ik</b>: de <b>ik-vorm</b>. Ik <b>loop</b>.</li>
<li><b>Jij/je ná</b> de persoonsvorm: ook de ik-vorm. <b>Loop</b> jij mee?</li>
<li>Andere <b>enkelvoud</b>: ik-vorm <b>+ t</b>. Jij <b>loopt</b>, hij <b>loopt</b>.</li>
<li><b>Meervoud</b>: het <b>hele werkwoord</b>. Wij <b>lopen</b>.</li></ol></div>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Jij vóór</h4><p>Jij <b>loopt</b> mee.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Jij ná</h4><p><b>Loop</b> jij mee?</p></div></div>`
+`<div class="call warn"><b>Let op:</b> de regel &lsquo;geen t&rsquo; geldt alleen voor <b>jij/je</b> ná de pv. Bij hij ná de pv blijft de t: <b>Loopt</b> hij mee?</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Vul in: ... jij morgen? (werken)</p><p class="check-a"><b>Werk</b> jij morgen?</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li><b>ik</b>: ik-vorm. Enkelvoud: ik-vorm + <b>t</b>.</li>
<li><b>jij ná</b> de pv: geen t. Meervoud: <b>hele werkwoord</b>.</li></ul></div>`},

{heading:'Sterke en zwakke werkwoorden',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>het verschil tussen <b>sterke</b> en <b>zwakke werkwoorden</b></li></ul></div>`
+`<div class="call link"><b>Dit bouwt voort op:</b> Grammatica &sect; 1 Werkwoord</div>`
+`<h5 class="sub">Verandert de klank?</h5>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Sterk</h4><p>In de verleden tijd verandert de <b>klank</b>: lopen &rarr; <b>liepen</b>, ruiken &rarr; <b>roken</b>, zoeken &rarr; <b>zochten</b>.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Zwak</h4><p>De klank blijft <b>hetzelfde</b>: hopen &rarr; <b>hoopten</b>, spelen &rarr; <b>speelden</b>, luisteren &rarr; <b>luisterden</b>.</p></div></div>`
+`<div class="call reken"><b>Zo test je het</b><ol class="num">
<li>Zet het werkwoord in de <b>verleden tijd</b>: gisteren &hellip;</li>
<li>Verandert de <b>klinker</b> (loop &rarr; liep)? Dan is het <b>sterk</b>.</li>
<li>Blijft de klank en komt er <b>-te</b> of <b>-de</b> bij? Dan is het <b>zwak</b>.</li></ol></div>`
+`<div class="call waarom">Waarom moet je dit weten? Alleen <b>zwakke</b> werkwoorden krijgen in de verleden tijd <b>-te(n)</b> of <b>-de(n)</b>. Voor sterke werkwoorden geldt een andere regel.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Is zingen sterk of zwak?</p><p class="check-a"><b>Sterk</b>: zingen &rarr; zong.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li><b>Sterk</b>: klank verandert. <b>Zwak</b>: klank blijft, -te/-de erbij.</li>
<li>Twijfel: <b>woordenboek</b>.</li></ul></div>`},

{heading:'Persoonsvorm verleden tijd van zwakke werkwoorden',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>kiezen tussen <b>-te(n)</b> en <b>-de(n)</b> bij zwakke werkwoorden</li></ul></div>`
+`<div class="call link"><b>Dit bouwt voort op:</b> Grammatica &sect; 2 Persoonsvorm en &sect; 4 Onderwerp, Spelling &sect; 8 Persoonsvorm tegenwoordige tijd en &sect; 9 Sterke en zwakke werkwoorden</div>`
+`<h5 class="sub">'t Ex-fokschaap</h5>`
+`<div class="call reken"><b>Stappenplan: -te(n) of -de(n)?</b><ol class="num">
<li>Neem het <b>hele werkwoord</b>: floppen, lachen, weven, plagen.</li>
<li>Haal er <b>-en</b> af: flopp, lach, wev, plag.</li>
<li>Is de laatste letter een <b>t, x, f, k, s, ch</b> of <b>p</b> (<b>'t ex-fokschaap</b>)? Dan <b>-te(n)</b>: flopte, lachte.</li>
<li>Anders <b>-de(n)</b>: plaagde, weefde.</li></ol></div>`
+`<div class="tblwrap"><table class="tbl"><tr><th></th><th>ik-vorm + de(n)</th><th>ik-vorm + te(n)</th></tr><tr><td><b>enkelvoud</b></td><td>rende, antwoordde</td><td>hoopte, vluchtte</td></tr><tr><td><b>meervoud</b></td><td>renden, antwoordden</td><td>hoopten, vluchtten</td></tr></table></div>`
+`<div class="call warn"><b>Let op:</b> kijk naar de letter <b>vóór -en</b> in het hele werkwoord. Weven heeft een <b>v</b>, dus weefde, ook al schrijf je in de ik-vorm een f.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Verleden tijd van fietsen: fietste of fietsde?</p><p class="check-a"><b>fietste</b>: de s zit in 't ex-fokschaap.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li>Letter vóór -en in <b>'t ex-fokschaap</b>: <b>-te(n)</b>.</li>
<li>Anders: <b>-de(n)</b>.</li></ul></div>`},

{heading:'Persoonsvorm verleden tijd van sterke werkwoorden',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>de <b>persoonsvorm verleden tijd</b> van een <b>sterk</b> werkwoord spellen</li></ul></div>`
+`<div class="call link"><b>Dit bouwt voort op:</b> Spelling &sect; 9 Sterke en zwakke werkwoorden</div>`
+`<h5 class="sub">Een nieuwe klank</h5>`
+`<div class="box"><h4>Geen -te of -de</h4><p>Sterke werkwoorden krijgen in de verleden tijd een <b>andere klank</b>, geen uitgang -te(n) of -de(n): lopen &rarr; <b>liep</b>, zingen &rarr; <b>zong</b>, drinken &rarr; <b>dronk</b>.</p></div>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Enkelvoud</h4><p>De nieuwe vorm, <b>zonder</b> uitgang: ik <b>liep</b>, hij <b>liep</b>.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Meervoud</h4><p>Met <b>-en</b>: wij <b>liepen</b>, zij <b>liepen</b>.</p></div></div>`
+`<div class="call reken"><b>Stappenplan</b><ol class="num">
<li>Weet je dat het werkwoord <b>sterk</b> is?</li>
<li>Zoek de <b>verleden-tijdsvorm</b>: liep, zong, dronk.</li>
<li>Meervoud? Zet er <b>-en</b> achter.</li></ol></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Vul in: Wij (drinken) gisteren limonade.</p><p class="check-a">Wij <b>dronken</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li>Sterk: nieuwe <b>klank</b>, geen -te/-de.</li>
<li>Meervoud: <b>+ en</b>.</li></ul></div>`},

{heading:'Onregelmatige werkwoorden',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>de vijf <b>onregelmatige werkwoorden</b>: zijn, hebben, willen, kunnen, zullen</li></ul></div>`
+`<h5 class="sub">Vijf bijzondere werkwoorden</h5>`
+`<div class="term"><b>Onregelmatig werkwoord</b><span>Een werkwoord met afwijkende vormen die niet volgens de standaardregels gaan.</span></div>`
+`<div class="tblwrap"><table class="tbl"><tr><th></th><th>zijn</th><th>hebben</th><th>willen</th><th>kunnen</th><th>zullen</th></tr><tr><td><b>ik (tt)</b></td><td>ben</td><td>heb</td><td>wil</td><td>kan</td><td>zal</td></tr><tr><td><b>jij/hij (tt)</b></td><td>bent/is</td><td>hebt/heeft</td><td>wilt/wil</td><td>kunt/kan</td><td>zult/zal</td></tr><tr><td><b>ik (vt)</b></td><td>was</td><td>had</td><td>wilde</td><td>kon</td><td>zou</td></tr></table></div>`
+`<div class="call reken"><b>Zo leer je ze</b><ol class="num">
<li>Leer de tabel <b>uit je hoofd</b>.</li>
<li>Zeg de rijtjes <b>hardop</b>: ik ben, jij bent, hij is.</li>
<li>Lees <b>veel</b>: dan leer je de vormen bijna vanzelf.</li></ol></div>`
+`<div class="call waarom">Waarom zijn juist deze lastig? Ze komen <b>heel vaak</b> voor, en hun vormen volgen de gewone <b>regels niet</b>: hij <b>is</b> in plaats van &lsquo;hij zijnt&rsquo;.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Wat is de verleden tijd van ik kan?</p><p class="check-a">ik <b>kon</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li><b>zijn</b>, <b>hebben</b>, <b>willen</b>, <b>kunnen</b>, <b>zullen</b>.</li>
<li>Leer ze <b>uit je hoofd</b>.</li></ul></div>`}
],
terms:[
['Hoofdletter','Gebruik je aan het begin van een zin en bij eigennamen.',0],
['Punt (.)','Leesteken aan het eind van een mededelende zin.',1],
['Vraagteken (?)','Leesteken aan het eind van een vragende zin.',1],
['Uitroepteken (!)','Leesteken bij een zin met een sterke emotie, bevel of uitroep.',1],
['Meervoud (spelling)','De meeste woorden krijgen -en, een deel krijgt -s, afhankelijk van de laatste letters.',3],
['Verkleinwoord (spelling)','Gemaakt met een achtervoegsel als -je, -tje, -etje, -pje of -kje; altijd een het-woord.',4],
['Tegenwoordige tijd (tt)','De tijdsvorm die aangeeft dat iets nu gebeurt; de persoonsvorm krijgt de ik-vorm of ik-vorm + t.',5],
['Sterk werkwoord','Een werkwoord dat in de verleden tijd van klank verandert, bijvoorbeeld lopen - liep.',6],
['Zwak werkwoord','Een werkwoord dat in de verleden tijd niet van klank verandert, bijvoorbeeld hopen - hoopte.',6],
['\'t ex-fokschaap','Ezelsbruggetje voor de medeklinkers t, x, f, k, s, ch en p: na deze letters schrijf je -te(n) in plaats van -de(n).',7],
['Onregelmatig werkwoord','Een werkwoord met afwijkende werkwoordsvormen; het Nederlands kent er vijf: zijn, hebben, willen, kunnen, zullen.',9]
],
cards:[
['Wanneer gebruik je een hoofdletter?','Aan het begin van een zin en bij eigennamen.',0],
['Welk leesteken gebruik je bij een vragende zin?','Een vraagteken.',1],
['Waarom schrijf je \'hij wordt\' met -dt?','De ik-vorm is \'word\' (met d); in de hij-vorm komt er een -t achter, ook al eindigt de stam al op -d.',2],
['Welk meervoudsuitgang krijgen de meeste Nederlandse zelfstandige naamwoorden?','-en.',3],
['Welk lidwoord hoort altijd bij een verkleinwoord?','Het.',4],
['Hoe spel je de persoonsvorm tegenwoordige tijd bij \'ik\'?','Met de ik-vorm (de kale stam), bijvoorbeeld: ik loop.',5],
['Hoe spel je de persoonsvorm tegenwoordige tijd in het meervoud?','Met het hele werkwoord: wij/jullie/zij lopen.',5],
['Wat is het verschil tussen een sterk en een zwak werkwoord?','Een sterk werkwoord verandert in de verleden tijd van klank, een zwak werkwoord niet.',6],
['Wanneer schrijf je -te(n) in plaats van -de(n) bij de verleden tijd van een zwak werkwoord?','Als de ik-vorm eindigt op t, x, f, k, s, ch of p (\'t ex-fokschaap).',7],
['Hoe spel je de verleden tijd van een sterk werkwoord in het meervoud?','De veranderde klankvorm + -en, bijvoorbeeld: wij liepen.',8],
['Welke vijf werkwoorden zijn onregelmatig?','Zijn, hebben, willen, kunnen en zullen.',9],
['Wat is de ik-vorm tegenwoordige tijd van \'zijn\'?','Ben.',9]
],
quiz:[
['Wanneer schrijf je een hoofdletter?',['Alleen bij lange woorden','Aan het begin van een zin en bij eigennamen','Alleen aan het eind van een zin','Nooit bij namen'],1,'Hoofdletters gebruik je aan het begin van een zin en bij eigennamen.'],
['Welk leesteken hoort bij een mededelende zin?',['Vraagteken','Uitroepteken','Punt','Komma'],2,'Een mededelende zin eindigt met een punt.'],
['Wanneer gebruik je een uitroepteken?',['Bij elke zin','Bij een zin met een sterke emotie of bevel','Alleen bij vragen','Nooit'],1,'Een uitroepteken gebruik je bij een zin met een sterke emotie, bevel of uitroep.'],
['Waarom schrijf je \'het antwoord\' met een -d, terwijl je een \'t\' hoort?',['Omdat het meervoud \'antwoorden\' is, met -d','Omdat het een werkwoord is','Omdat het een eigennaam is','Zomaar, zonder reden'],0,'Je controleert de spelling met het meervoud: antwoorden heeft een -d, dus ook het enkelvoud krijgt -d.'],
['Welke meervoudsuitgang krijgen de meeste zelfstandige naamwoorden?',['-s','-en','-\'s','-tjes'],1,'De meeste Nederlandse woorden krijgen in het meervoud -en.'],
['Welk lidwoord hoort bij het verkleinwoord \'huisje\'?',['De','Het','Een','Geen lidwoord nodig'],1,'Verkleinwoorden zijn altijd het-woorden.'],
['Hoe spel je de tt-persoonsvorm bij \'jij\' vóór het onderwerp?',['Ik-vorm zonder -t: loop jij?','Ik-vorm + t: loopt jij?','Het hele werkwoord: lopen jij?','Altijd met -de'],0,'Als je/jij ná de persoonsvorm staat, gebruik je de ik-vorm zonder -t.'],
['Wat gebeurt er bij een sterk werkwoord in de verleden tijd?',['Er komt een uitgang -te of -de bij','De klank van het werkwoord verandert','Er verandert niets','Het wordt een zelfstandig naamwoord'],1,'Sterke werkwoorden veranderen in de verleden tijd van klank, bijvoorbeeld lopen - liep.'],
['Wat betekent het ezelsbruggetje \'\'t ex-fokschaap\'?',['De lidwoorden van het Nederlands','De medeklinkers waarna je -te(n) schrijft bij zwakke werkwoorden in de verleden tijd','De vijf onregelmatige werkwoorden','Een lijst met verkleinwoorden'],1,'\'t ex-fokschaap staat voor de medeklinkers t, x, f, k, s, ch en p; daarna schrijf je -te(n).'],
['Hoe schrijf je de verleden tijd van \'lopen\' in het meervoud?',['liep','liepen','loopten','lopen'],1,'Bij sterke werkwoorden komt er in het meervoud -en achter de veranderde klankvorm: liepen.'],
['Welke werkwoorden zijn de vijf onregelmatige werkwoorden van het Nederlands?',['Lopen, fietsen, zwemmen, springen, rennen','Zijn, hebben, willen, kunnen, zullen','Praten, luisteren, lezen, schrijven, denken','Eten, drinken, slapen, wonen, werken'],1,'De vijf onregelmatige werkwoorden zijn zijn, hebben, willen, kunnen en zullen.'],
['Wat is de pvvt (ik-vorm) van \'hebben\'?',['heb','had','hebt','heeft'],1,'De verleden tijd (ik-vorm) van hebben is \'had\'.'],
['Waarop bouwt Spelling § 10 (pvvt zwakke werkwoorden) voort?',['Alleen op Hoofdletters','Op kennis van persoonsvorm, onderwerp en sterke/zwakke werkwoorden','Alleen op Leestekens','Op niets, het staat op zichzelf'],1,'Om de verleden tijd van zwakke werkwoorden te spellen heb je kennis nodig van persoonsvorm, onderwerp en het verschil tussen sterke en zwakke werkwoorden.'],
['Wat gebruik je als je twijfelt over de spelling van een meervoud of sterk werkwoord?',['Nooit iets, gewoon gokken','Een (online) woordenboek','Altijd -s toevoegen','Een verwijswoord'],1,'Bij twijfel raadpleeg je een (online) woordenboek.']
]
});
