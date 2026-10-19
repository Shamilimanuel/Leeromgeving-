import { registerChapter } from '../../../registry.js';

/* Rebuilt 2026-09-25 to the recipe of Economie TL4 H1 (change 6). Fixed:
   the summary and a flashcard said days and months get a capital letter;
   the book says they do not (nor seasons and compass directions). Added from
   the book: words made from names (Turkse) and the 's-rule. Also fixed:
   "tafel -> tafels" was listed as an -en plural. Terms and quiz unchanged;
   one card fixed. */
registerChapter('nederlands|tl|2|7', {
title:'Spelling',
summary:[
{heading:'Hoofdletters',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>wanneer je wel en <b>niet</b> een <b>hoofdletter</b> gebruikt</li></ul></div>`
+`<div class="box"><h4>Waar dit hoofdstuk over gaat</h4><p>Je oefent <b>spellingregels</b>: <b>hoofdletters</b>, <b>leestekens</b> (komma, dubbele punt, aanhalingstekens), <b>bijvoeglijke naamwoorden</b>, <b>meervouden</b>, <b>verkleinwoorden</b> en <b>werkwoordspelling</b>.</p></div>`
+`<h5 class="sub">Wel en niet</h5>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Wel een hoofdletter</h4><p>Aan het <b>begin van een zin</b>. Bij <b>namen</b>: Jan Klaassen, Leeuwarden, NEC, Mercedes, <b>Pasen</b>. Bij woorden die van <b>namen</b> zijn gemaakt: <b>Turkse</b>, Noord-Franse. Bij afkortingen als <b>NOS</b>.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Geen hoofdletter</h4><p><b>Dagen</b> (woensdag), <b>maanden</b> (augustus), <b>seizoenen</b> (winter) en <b>windstreken</b> (westen).</p></div></div>`
+`<div class="box"><h4>Begint de zin met 's?</h4><p>Dan komt er een <b>spatie</b> en krijgt het <b>volgende</b> woord de hoofdletter: <b>'s Morgens</b> ben ik vrolijk.</p></div>`
+`<div class="call warn"><b>Veelgemaakte fout:</b> een hoofdletter bij <b>maandag</b> of <b>de zomer</b>. Feestdagen wel (<b>Koningsdag</b>), gewone dagen niet.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Hoofdletter of niet: &lsquo;in de winter gaan we naar het westen van turkije&rsquo;?</p><p class="check-a">Alleen <b>Turkije</b>: winter en westen krijgen geen hoofdletter.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li><b>Wel</b>: begin van de zin, namen, feestdagen, woorden van namen.</li>
<li><b>Niet</b>: dagen, maanden, seizoenen, windstreken.</li>
<li><b>'s Morgens</b>: hoofdletter bij het tweede woord.</li></ul></div>`},

{heading:'Leestekens: komma',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>waar je een <b>komma</b> zet</li></ul></div>`
+`<h5 class="sub">Vier plekken voor een komma</h5>`
+`<div class="call reken"><b>Hier zet je een komma</b><ol class="num">
<li>Tussen de delen van een <b>opsomming</b>: bloem, boter, suiker en een ei.</li>
<li>Vóór <b>maar</b>, <b>want</b> en <b>dus</b> in een samengestelde zin: Ik wilde blijven, <b>maar</b> ik moest naar huis.</li>
<li>Om een <b>bijzin middenin</b> de zin: Mijn broer, <b>die in Utrecht woont</b>, komt op bezoek.</li>
<li><b>Na een bijzin vooraan</b>: Toen het begon te regenen, gingen we naar binnen.</li></ol></div>`
+`<div class="call warn"><b>Let op:</b> in een opsomming komt <b>geen komma</b> vóór het laatste <b>en</b>: bloem, boter, suiker <b>en</b> een ei.</div>`
+`<div class="voorbeeld"><h4>Voorbeeld: waar moet de komma?</h4><p>&lsquo;Omdat de trein vertraging had kwam ik te laat.&rsquo;</p><div class="antwoord">De bijzin staat <b>vooraan</b>, dus erna een komma: &lsquo;Omdat de trein vertraging had<b>,</b> kwam ik te laat.&rsquo;</div></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Zet je een komma vóór want?</p><p class="check-a"><b>Ja</b>: Ik blijf thuis, want ik ben ziek.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li>Komma bij een <b>opsomming</b> (niet vóór het laatste en).</li>
<li>Vóór <b>maar, want, dus</b>.</li>
<li>Om en na een <b>bijzin</b>.</li></ul></div>`},

{heading:'Leestekens: dubbele punt en aanhalingstekens',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>de <b>dubbele punt</b> en <b>aanhalingstekens</b> goed gebruiken</li></ul></div>`
+`<h5 class="sub">Aankondigen en citeren</h5>`
+`<div class="g2">`
+`<div class="box"><h4>Dubbele punt</h4><p>Vóór een <b>opsomming</b>: neem mee: een jas en laarzen. Vóór een <b>citaat</b>. Vóór een <b>uitleg</b> of <b>conclusie</b>.</p></div>`
+`<div class="box"><h4>Aanhalingstekens</h4><p>Om een <b>letterlijke uitspraak</b> (citaat): wat iemand <b>precies</b> zei.</p></div></div>`
+`<div class="call reken"><b>Stappenplan: een citaat schrijven</b><ol class="num">
<li>Kondig het citaat aan met een <b>dubbele punt</b>.</li>
<li>Zet de gezegde woorden tussen <b>aanhalingstekens</b>.</li>
<li>Het citaat begint met een <b>hoofdletter</b>.</li>
<li>Het leesteken van de uitspraak (punt, vraagteken) komt <b>binnen</b> de aanhalingstekens.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: Jasper</h4><p>Schrijf goed: jasper zei overmorgen ben ik jarig</p><div class="antwoord">Jasper zei<b>:</b> <b>&lsquo;O</b>vermorgen ben ik jarig<b>!&rsquo;</b></div></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Komt het vraagteken binnen of buiten de aanhalingstekens?</p><p class="check-a"><b>Binnen</b>, als het bij de uitspraak hoort.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li><b>Dubbele punt</b> vóór opsomming, citaat of uitleg.</li>
<li>Citaat: tussen <b>aanhalingstekens</b>, met hoofdletter, leesteken <b>binnen</b>.</li></ul></div>`},

{heading:'Bijvoeglijk naamwoord',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>de <b>lange vorm</b> van een bijvoeglijk naamwoord goed spellen</li></ul></div>`
+`<h5 class="sub">Kort en lang</h5>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Korte vorm</h4><p>Zonder -e: een <b>lekker</b> dessert, een <b>saai</b> verhaal.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Lange vorm</h4><p>Met -e: het <b>lekkere</b> dessert, het <b>saaie</b> verhaal.</p></div></div>`
+`<div class="call reken"><b>Zo maak je de lange vorm</b><ol class="num">
<li>Zet er een <b>-e</b> achter: klein &rarr; kleine, nieuw &rarr; nieuwe.</li>
<li><b>f wordt v</b>: lief &rarr; lieve, naïef &rarr; naïeve.</li>
<li><b>s wordt z</b>: grijs &rarr; grijze, serieus &rarr; serieuze.</li>
<li><b>Medeklinker verdubbelen</b> na een korte klank: fris &rarr; frisse, glad &rarr; gladde.</li>
<li><b>Klinker weghalen</b> na een lange klank: traag &rarr; trage, zuur &rarr; zure.</li></ol></div>`
+`<div class="call waarom">Waarom verdubbelen of weghalen? Zo blijft de <b>klank</b> hetzelfde. Met één s zou &lsquo;frise&rsquo; klinken als &lsquo;frieze&rsquo;; met twee a's zou &lsquo;traage&rsquo; er vreemd uitzien, want na een open lettergreep is één a al lang.</div>`
+`<div class="box"><h4>Stoffelijk bijvoeglijk naamwoord</h4><p>Zegt waar iets <b>van gemaakt</b> is en eindigt meestal op <b>-en</b>: <b>houten</b>, <b>papieren</b>, <b>wollen</b>. Niet altijd: een <b>polyester</b> T-shirt.</p></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Wat is de lange vorm van grijs?</p><p class="check-a"><b>grijze</b>: s wordt z.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li>Lange vorm: <b>+ e</b>.</li>
<li><b>f &rarr; v</b>, <b>s &rarr; z</b>, <b>verdubbelen</b> of <b>klinker weg</b>.</li>
<li>Stoffelijk: meestal <b>-en</b>.</li></ul></div>`},

{heading:'Meervouden op -s en -en',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>kiezen tussen een <b>meervoud</b> op <b>-en</b> en op <b>-s</b></li></ul></div>`
+`<h5 class="sub">-en of -s?</h5>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Meervoud op -en</h4><p>De <b>meeste</b> woorden: boek &rarr; <b>boeken</b>. Let op klankregels: dag &rarr; <b>dagen</b>, glas &rarr; <b>glazen</b>.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Meervoud op -s</h4><p>Woorden op een <b>onbeklemtoonde</b> -el, -em, -en, -er of -aar, en woorden op een <b>klinker</b>: tafel &rarr; <b>tafels</b>, foto &rarr; <b>foto's</b>.</p></div></div>`
+`<div class="call reken"><b>Zo kies je</b><ol class="num">
<li>Eindigt het woord op een onbeklemtoonde <b>-el, -em, -en, -er</b> of <b>-aar</b>? Meestal <b>-s</b>.</li>
<li>Eindigt het op een <b>klinker</b>? <b>-s</b>, en bij a, i, o, u of y met een <b>apostrof</b>: auto's.</li>
<li>Anders meestal <b>-en</b>.</li></ol></div>`
+`<div class="call waarom">Waarom een apostrof bij <b>auto's</b>? Zonder apostrof zou je &lsquo;autos&rsquo; lezen met een <b>korte</b> o. De apostrof houdt de <b>lange klank</b>.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Wat is het meervoud van tafel?</p><p class="check-a"><b>tafels</b>: het eindigt op een onbeklemtoonde -el.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li>Meestal <b>-en</b>.</li>
<li><b>-el, -em, -en, -er, -aar</b> en klinkers: <b>-s</b>.</li>
<li>Na a, i, o, u, y: <b>'s</b>.</li></ul></div>`},

{heading:'Verkleinwoorden',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>de goede uitgang kiezen voor een <b>verkleinwoord</b></li></ul></div>`
+`<h5 class="sub">-je, -tje, -pje, -kje, -etje</h5>`
+`<div class="tblwrap"><table class="tbl"><tr><th>Uitgang</th><th>Wanneer</th><th>Voorbeeld</th></tr><tr><td><b>-je</b></td><td>meestal</td><td>boek &rarr; boekje</td></tr><tr><td><b>-tje</b></td><td>na een <b>klinker</b> of na <b>l, n, r</b></td><td>auto &rarr; autootje, stoel &rarr; stoeltje</td></tr><tr><td><b>-pje</b></td><td>na <b>m</b></td><td>boom &rarr; boompje</td></tr><tr><td><b>-kje</b></td><td>na <b>-ing</b> (de g valt weg)</td><td>koning &rarr; koninkje</td></tr><tr><td><b>-etje</b></td><td><b>korte klinker</b> + m, ng, l, n, r</td><td>bal &rarr; balletje</td></tr></table></div>`
+`<div class="call reken"><b>Zo kies je</b><ol class="num">
<li>Kijk naar de <b>laatste letters</b> van het woord.</li>
<li>Staat er een <b>korte klank</b> vlak voor m, ng, l, n of r? Dan <b>-etje</b>, met verdubbeling.</li>
<li>Anders kies je uit de tabel.</li></ol></div>`
+`<div class="call warn"><b>Instinker:</b> <b>bal</b> en <b>stoel</b> eindigen allebei op l. Bij bal is de klank <b>kort</b>: balletje. Bij stoel is hij <b>lang</b>: stoeltje.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Wat is het verkleinwoord van boom?</p><p class="check-a"><b>boompje</b>: na m komt -pje.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li><b>-je</b>, <b>-tje</b>, <b>-pje</b>, <b>-kje</b>, <b>-etje</b>.</li>
<li>Korte klank + l/n/r/m/ng: <b>-etje</b>.</li></ul></div>`},

{heading:'Voltooid deelwoord',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>kiezen tussen <b>-t</b> en <b>-d</b> aan het eind van een <b>voltooid deelwoord</b></li></ul></div>`
+`<h5 class="sub">'t Kofschip</h5>`
+`<div class="box"><h4>Voltooid deelwoord</h4><p>Het <b>voltooid deelwoord</b> gebruik je in de voltooide tijd, met <b>hebben</b> of <b>zijn</b>: Ik heb <b>gewerkt</b>. Zij is <b>vertrokken</b>.</p></div>`
+`<div class="call reken"><b>Stappenplan: -t of -d</b><ol class="num">
<li>Zoek de <b>stam</b>: haal -en van het hele werkwoord af (werk-en &rarr; <b>werk</b>).</li>
<li>Eindigt de stam op een letter uit <b>'t kofschip</b> (t, k, f, s, ch, p)? Dan <b>-t</b>: <b>gewerkt</b>.</li>
<li>Anders <b>-d</b>: speel-en &rarr; <b>gespeeld</b>.</li></ol></div>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>-t</h4><p>werk &rarr; gewerk<b>t</b>, fiets &rarr; gefiets<b>t</b>.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>-d</h4><p>speel &rarr; gespeel<b>d</b>, woon &rarr; gewoon<b>d</b>.</p></div></div>`
+`<div class="call waarom">Waarom het rijtje? Je <b>hoort</b> het verschil niet: gewerkt en gespeeld klinken allebei met een t aan het eind. Het rijtje <b>'t kofschip</b> (of <b>'t fokschaap</b>) vertelt je welke letter je <b>schrijft</b>.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Voltooid deelwoord van fietsen?</p><p class="check-a"><b>gefietst</b>: de stam fiets eindigt op s.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li>Stam op <b>t, k, f, s, ch, p</b>: <b>-t</b>.</li>
<li>Anders: <b>-d</b>.</li></ul></div>`},

{heading:'Werkwoordalarm',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>de lastige gevallen van de <b>persoonsvorm</b> in de tegenwoordige tijd</li></ul></div>`
+`<h5 class="sub">Stam of stam + t?</h5>`
+`<div class="call reken"><b>Zo spel je de persoonsvorm (tegenwoordige tijd)</b><ol class="num">
<li>Bij <b>ik</b>: alleen de <b>stam</b>. Ik <b>werk</b>.</li>
<li>Bij <b>jij, u, hij, zij</b>: stam <b>+ t</b>. Jij <b>werkt</b>.</li>
<li>Staat <b>jij/je</b> ná de persoonsvorm? Dan <b>geen t</b>: <b>Werk</b> jij?</li>
<li>Eindigt de stam al op <b>t</b>? Geen extra t: hij <b>zit</b>.</li></ol></div>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Jij vóór</h4><p>Jij <b>werkt</b> hard.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Jij ná</h4><p><b>Werk</b> jij hard?</p></div></div>`
+`<div class="call warn"><b>Twijfel je?</b> Vervang het werkwoord door <b>lopen</b>: hij <b>loopt</b> (t), <b>loop</b> jij (geen t). Dezelfde vorm geldt voor je werkwoord.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Vul in: ... jij morgen ook? (wachten)</p><p class="check-a"><b>Wacht</b> jij: jij staat ná de persoonsvorm; de stam eindigt al op t.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li><b>ik</b>: stam. <b>hij/zij/jij</b>: stam + t.</li>
<li><b>jij ná</b> de pv: geen t.</li>
<li>Stam op t: geen extra t.</li></ul></div>`}
],
terms:[
['hoofdletter','wordt gebruikt aan het begin van een zin, bij eigennamen en bij afkortingen van hoofdletters',0],
['komma','leesteken dat onder andere gebruikt wordt bij een opsomming en voor een samengestelde zin met maar/want/dus',1],
['dubbele punt','leesteken dat gebruikt wordt vóór een opsomming, citaat of uitleg',2],
['aanhalingstekens','leestekens die een letterlijke uitspraak (citaat) van iemand aangeven',2],
['bijvoeglijk naamwoord','een woord dat een zelfstandig naamwoord beschrijft en een korte en lange vorm heeft',3],
['stoffelijk bijvoeglijk naamwoord','een bijvoeglijk naamwoord dat aangeeft waar iets van gemaakt is, meestal eindigend op -en',3],
['meervoud op -en','de meest voorkomende meervoudsvorm van zelfstandige naamwoorden',4],
['meervoud op -s','meervoudsvorm bij woorden die eindigen op -el, -em, -en, -er, -aar of op een klinker',4],
['verkleinwoord','een woord dat iets kleiner of schattiger maakt, gevormd met -je, -tje, -pje, -kje of -etje',5],
['voltooid deelwoord','de werkwoordsvorm die je gebruikt in de voltooide tijd, samen met hebben of zijn',6],
['\'t kofschip','ezelsbruggetje (t, k, f, s, ch, p) om te bepalen of een voltooid deelwoord op -t of -d eindigt',6],
['stam','de ik-vorm van een werkwoord, de basis waarop je persoonsvormen en het voltooid deelwoord vormt',7]
],
cards:[
['Wanneer gebruik je een hoofdletter?','Aan het begin van een zin, bij namen (ook van feestdagen, zoals Pasen), bij woorden die van namen zijn gemaakt en bij afkortingen van hoofdletters. Niet bij dagen, maanden, seizoenen en windstreken.',0],
['Wanneer gebruik je een komma voor een samengestelde zin?','Bij voegwoorden als maar, want en dus.',1],
['Wanneer gebruik je een dubbele punt?','Vóór een opsomming, een citaat of een uitleg/conclusie.',2],
['Waarvoor gebruik je aanhalingstekens?','Om een letterlijke uitspraak (citaat) van iemand weer te geven.',2],
['Hoe maak je de lange vorm van een bijvoeglijk naamwoord?','Door een -e achter het woord te zetten, met eventueel de f/v-regel, s/z-regel, verdubbeling of klinkerweglating.',3],
['Waarop eindigen stoffelijke bijvoeglijke naamwoorden meestal?','Op -en, bijvoorbeeld houten, wollen, papieren.',3],
['Welke woorden krijgen meestal een meervoud op -s?','Woorden die eindigen op -el, -em, -en, -er, -aar of op een klinker.',4],
['Hoe maak je van \'boom\' een verkleinwoord?','Boompje (met -pje na een m).',5],
['Wanneer krijgt een voltooid deelwoord een -t?','Als de stam van het werkwoord eindigt op een letter uit \'t kofschip (t, k, f, s, ch, p).',6],
['Wat is de stam van een werkwoord?','De ik-vorm, de basisvorm waarmee je andere werkwoordsvormen maakt.',7],
['Wanneer krijgt de persoonsvorm bij jij/hij/zij geen extra -t?','Als de stam van het werkwoord al op -t eindigt, bijvoorbeeld bij \'hij zit\'.',7]
],
quiz:[
['Wanneer gebruik je een hoofdletter?',['Alleen bij het laatste woord van een zin','Aan het begin van een zin en bij eigennamen','Alleen bij werkwoorden','Nooit bij afkortingen'],1,'Een hoofdletter gebruik je onder andere aan het begin van een zin en bij eigennamen.'],
['In welke zin staat de komma op de juiste plaats?',['Ik wilde nog blijven maar, ik moest naar huis.','Ik wilde nog blijven, maar ik moest naar huis.','Ik, wilde nog blijven maar ik moest naar huis.','Ik wilde, nog blijven maar ik moest naar huis.'],1,'De komma komt vóór het voegwoord \'maar\' te staan.'],
['Waarvoor gebruik je een dubbele punt?',['Vóór een opsomming of citaat','Aan het einde van elke zin','Alleen bij vragen','Nooit in combinatie met een opsomming'],0,'De dubbele punt kondigt een opsomming, citaat of uitleg aan.'],
['Waarvoor gebruik je aanhalingstekens?',['Om een getal aan te geven','Om een letterlijke uitspraak weer te geven','Om een opsomming te maken','Om een hoofdletter te vervangen'],1,'Aanhalingstekens gebruik je bij een citaat, een letterlijke uitspraak.'],
['Wat is de lange vorm van het bijvoeglijk naamwoord \'lief\'?',['Liefe','Lieve','Lievve','Lief'],1,'Door de f/v-regel wordt lief → lieve.'],
['Wat is de lange vorm van \'fris\'?',['Frise','Frisse','Frize','Fris'],1,'De laatste medeklinker wordt verdubbeld: fris → frisse.'],
['Waarop eindigen stoffelijke bijvoeglijke naamwoorden meestal?',['Op -en','Op -ig','Op -s','Op -t'],0,'Denk aan houten, wollen, papieren.'],
['Welk meervoud krijgt het woord \'tafel\'?',['Tafelen','Tafels','Tafel\'s','Tafeltjes'],1,'Woorden die eindigen op -el krijgen meestal een meervoud op -s.'],
['Wat is het verkleinwoord van \'stoel\'?',['Stoeltje','Stoelpje','Stoelkje','Stoeletje'],0,'Na een l gebruik je -tje: stoeltje.'],
['Wat betekent \'t kofschip in de spelling?',['Een naam voor een boot','Een ezelsbruggetje voor -t of -d bij het voltooid deelwoord','Een soort bijvoeglijk naamwoord','Een leesteken'],1,'\'t Kofschip (t, k, f, s, ch, p) helpt je te bepalen of het voltooid deelwoord op -t of -d eindigt.'],
['Wat is het voltooid deelwoord van \'werken\'?',['Gewerkd','Gewerkt','Werkte','Werkt'],1,'De stam \'werk\' eindigt op een \'t kofschip\'-letter (k), dus -t: gewerkt.'],
['Wat is het voltooid deelwoord van \'spelen\'?',['Gespeelt','Gespeeld','Speelde','Speelt'],1,'De stam \'speel\' eindigt niet op een \'t kofschip\'-letter, dus -d: gespeeld.'],
['Wat is de stam van het werkwoord \'lopen\'?',['Loopt','Loop','Liep','Gelopen'],1,'De stam is de ik-vorm: ik loop.'],
['Waarom schrijf je \'hij zit\' zonder extra -t?',['Omdat de stam al op -t eindigt','Omdat het een voltooid deelwoord is','Omdat \'zit\' een zelfstandig naamwoord is','Toeval'],0,'De stam \'zit\' eindigt al op -t, dus komt er bij hij/zij geen extra -t bij.']
]
});
