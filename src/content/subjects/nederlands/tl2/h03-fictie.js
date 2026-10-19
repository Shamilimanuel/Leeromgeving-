import { registerChapter } from '../../../registry.js';

/* Rebuilt 2026-09-25 to the recipe of Economie TL4 H1 (change 6). Fixed:
   "alsof een schilder zijn kwast schoonspoelt" was given as personificatie;
   with "alsof" it is a vergelijking. The book's personificatie example ("De
   storm huilde om het huis") and its Simon-and-the-bear comparisons are
   used instead; the quiz question with the same mistake is fixed too.
   Terms and cards unchanged. */
registerChapter('nederlands|tl|2|3', {
title:'Fictie',
summary:[
{heading:'Setting en sfeer',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>de <b>setting</b> en de <b>sfeer</b> van een verhaal beschrijven</li></ul></div>`
+`<div class="box"><h4>Waar dit hoofdstuk over gaat</h4><p>Je leert hoe schrijvers een verhaal <b>spannend</b>, <b>sfeervol</b> en overtuigend maken: met <b>setting en sfeer</b>, <b>perspectief</b>, <b>tijdsprongen</b>, <b>spanning</b> en <b>beeldspraak</b> in gedichten.</p></div>`
+`<h5 class="sub">Waar, wanneer en welk gevoel?</h5>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Setting</h4><p>De <b>plaats</b> en <b>tijd</b> van het verhaal: <b>waar</b> en <b>wanneer</b> gebeurt het?</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Sfeer</h4><p>Het <b>gevoel</b> dat je als lezer krijgt: <b>dreigend</b>, <b>gezellig</b>, <b>somber</b>.</p></div></div>`
+`<div class="call reken"><b>Stappenplan: setting en sfeer beschrijven</b><ol class="num">
<li>Zoek <b>waar</b> het verhaal speelt.</li>
<li>Zoek <b>wanneer</b>: welk seizoen, welke tijd van de dag, welke tijd in de geschiedenis?</li>
<li>Welk <b>gevoel</b> krijg je? Zoek de <b>woorden</b> die dat gevoel geven.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: een donker steegje</h4><p>Een verhaal begint in een <b>verlaten</b>, <b>donker</b> steegje, 's nachts.</p><div class="antwoord">Setting: een steegje, <b>'s nachts</b>. Sfeer: <b>dreigend</b>, al voordat er iets spannends gebeurt.</div></div>`
+`<div class="call waarom">Waarom doet een schrijver dat? De <b>setting</b> kan de <b>sfeer</b> bepalen. Zo voel je al aan dat er iets gaat gebeuren.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Wat is de setting van een verhaal?</p><p class="check-a">De <b>plaats</b> en <b>tijd</b> waarin het zich afspeelt.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li><b>Setting</b> = waar en wanneer.</li>
<li><b>Sfeer</b> = het gevoel bij het verhaal.</li>
<li>De setting kan de sfeer <b>bepalen</b>.</li></ul></div>`},

{heading:'Perspectief',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>verschillende soorten <b>perspectief</b> herkennen</li>
<li>het verschil tussen <b>inleven</b> en <b>meeleven</b></li></ul></div>`
+`<h5 class="sub">In wiens hoofd zit je?</h5>`
+`<div class="box"><h4>Perspectief</h4><p>Van de <b>hoofdpersoon</b> weet je wat hij denkt en voelt: je zit als het ware <b>in zijn hoofd</b>. Het <b>perspectief</b> ligt dan bij hem.</p></div>`
+`<div class="g3">`
+`<div class="box"><h4>Ik-perspectief</h4><p>Het verhaal is in de <b>ik-vorm</b> geschreven.</p></div>`
+`<div class="box"><h4>Hij/zij-perspectief</h4><p>Het verhaal is in de <b>hij- of zij-vorm</b> geschreven.</p></div>`
+`<div class="box"><h4>Wisselend perspectief</h4><p>Het verhaal is vanuit <b>meer personages</b> geschreven.</p></div></div>`
+`<div class="call warn"><b>Wisselend perspectief?</b> Soms zie je aan de <b>titel van een hoofdstuk</b> bij wie het perspectief ligt. Ontbreekt die aanwijzing, lees dan het <b>begin</b> van elk hoofdstuk extra goed.</div>`
+`<h5 class="sub">Inleven en meeleven</h5>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Inleven</h4><p>Je kunt je <b>voorstellen</b> hoe het is om dat personage te zijn.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Meeleven</h4><p>Je <b>wilt</b> dat het goed gaat met het personage: dat hij beter wordt of niet meer gepest wordt.</p></div></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Een verhaal is steeds vanuit een ander personage geschreven. Welk perspectief is dat?</p><p class="check-a"><b>Wisselend perspectief</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li><b>Ik</b>, <b>hij/zij</b> of <b>wisselend</b> perspectief.</li>
<li>Het perspectief bepaalt vaak in wie je je <b>inleeft</b>.</li></ul></div>`},

{heading:'Tijd',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li><b>tijdsprongen</b> herkennen</li>
<li>wat <b>chronologisch</b> vertellen is</li></ul></div>`
+`<h5 class="sub">Tijd in een verhaal</h5>`
+`<div class="box"><h4>Sneller, trager, stil</h4><p>In een verhaal gaat de tijd niet zoals in het echt. Een schrijver kan de tijd <b>versnellen</b>, <b>vertragen</b> of <b>stilzetten</b>, en een <b>tijdsprong</b> maken.</p></div>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Tijdsprong achteruit</h4><p>Terug in de tijd, bijvoorbeeld een <b>flashback</b>.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Tijdsprong vooruit</h4><p><b>Vooruit</b> in de tijd.</p></div></div>`
+`<div class="box"><h4>Chronologisch</h4><p>Wordt alles in de <b>juiste volgorde</b> verteld, zonder tijdsprongen, dan is het verhaal <b>chronologisch</b>. Het &lsquo;nu&rsquo; van het verhaal heet het <b>vertelheden</b>.</p></div>`
+`<div class="call reken"><b>Zo herken je een tijdsprong</b><ol class="num">
<li>Zoek het <b>vertelheden</b>: wanneer speelt het verhaal nu?</li>
<li>Let op <b>tijdwoorden</b> en jaartallen: vroeger, jaren later, toen hij klein was.</li>
<li>Gaat een stuk <b>eerder</b> of <b>later</b> dan het vertelheden? Dan is het een tijdsprong.</li></ol></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Wat is een flashback?</p><p class="check-a">Een tijdsprong <b>achteruit</b>, terug in de tijd.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li><b>Flashback</b> = tijdsprong achteruit.</li>
<li><b>Chronologisch</b> = in de juiste volgorde.</li>
<li><b>Vertelheden</b> = het nu van het verhaal.</li></ul></div>`},

{heading:'Spanning',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>het verschil tussen <b>actiespanning</b> en <b>psychologische spanning</b></li></ul></div>`
+`<h5 class="sub">Twee soorten spanning</h5>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Actiespanning</h4><p>Er gebeurt iets <b>gevaarlijks</b> of <b>onverwachts</b>: een ontvoering, achtervolging of schietpartij. Veel in <b>actiefilms</b>.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Psychologische spanning</h4><p>Spanning in je <b>hoofd</b>: door <b>betrokkenheid</b> bij een personage, of door <b>vragen</b> die het verhaal oproept.</p></div></div>`
+`<div class="call reken"><b>Zo ontstaat psychologische spanning</b><ol class="num">
<li>Je <b>leeft mee</b> met een personage en wilt dat iets lukt (of je hebt een <b>hekel</b> aan hem en hoopt dat het slecht afloopt).</li>
<li>Het verhaal roept <b>vragen</b> op: wat is er aan de hand, wie heeft het gedaan, waarom doet iemand zo geheimzinnig?</li>
<li>Je krijgt <b>niet meteen</b> antwoord, dus je wilt <b>doorlezen</b>.</li></ol></div>`
+`<div class="call waarom">Waarom lees je door? Omdat je het <b>antwoord</b> wilt weten. Een schrijver houdt dat antwoord daarom zo lang mogelijk <b>achter</b>.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Je wilt weten wie de moord heeft gepleegd. Welke spanning is dat?</p><p class="check-a"><b>Psychologische spanning</b>: het verhaal roept een vraag op.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li><b>Actiespanning</b>: gevaarlijke of onverwachte gebeurtenissen.</li>
<li><b>Psychologische spanning</b>: meeleven en open vragen.</li></ul></div>`},

{heading:'Over gedichten',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li><b>beeldspraak</b> herkennen en uitleggen: <b>vergelijking</b> en <b>personificatie</b></li></ul></div>`
+`<h5 class="sub">Beeldspraak</h5>`
+`<div class="box"><h4>Niet letterlijk bedoeld</h4><p><b>Beeldspraak</b> is het gebruik van woorden in <b>figuurlijke</b> betekenis: er wordt iets <b>anders</b> bedoeld dan er letterlijk staat. Ook veel <b>uitdrukkingen</b> zijn beeldspraak: <b>lachen als een boer met kiespijn</b>, <b>ervandoor gaan als een haas</b>.</p></div>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Vergelijking</h4><p>Iets wordt <b>vergeleken</b> met iets anders, vaak met <b>als</b>, <b>(net) zoals</b> of <b>alsof</b>. Simon is zo sterk <b>als een beer</b>.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Personificatie</h4><p>Iets wat <b>niet menselijk</b> is, krijgt een <b>menselijke</b> eigenschap. <b>De storm huilde</b> om het huis.</p></div></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: welke beeldspraak?</h4><p>&lsquo;De kleuren vloeien samen, <b>alsof een schilder zijn kwast schoonspoelt</b> in een glazen pot.&rsquo;</p><div class="antwoord">Door <b>alsof</b> is dit een <b>vergelijking</b>: de lucht bij zonsondergang wordt vergeleken met een kwast in water.</div></div>`
+`<div class="call warn"><b>Let op:</b> een vergelijking kan ook <b>zonder</b> als: &lsquo;Simon is een beer van een vent&rsquo; en &lsquo;Simon is een beer&rsquo; vergelijken hem ook met een beer.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">De wind fluisterde door de bomen. Welke beeldspraak is dat?</p><p class="check-a"><b>Personificatie</b>: fluisteren is iets wat mensen doen.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li><b>Beeldspraak</b> = figuurlijk taalgebruik.</li>
<li><b>Vergelijking</b>: vaak met als, zoals, alsof.</li>
<li><b>Personificatie</b>: iets niet-menselijks doet iets menselijks.</li></ul></div>`}
],
terms:[
['setting','de plaats en tijd waarin een verhaal zich afspeelt',0],
['sfeer','het gevoel dat de lezer bij een verhaal krijgt, bijvoorbeeld dreigend of gezellig',0],
['perspectief','het standpunt van waaruit een verhaal verteld wordt: bij wie \'in het hoofd\' je als lezer zit',1],
['ik-perspectief','het verhaal is in de ik-vorm geschreven',1],
['hij/zij-perspectief','het verhaal is in de hij- of zij-vorm geschreven',1],
['wisselend perspectief','het verhaal is vanuit meerdere personages verteld',1],
['inleven','je kunnen voorstellen hoe het is om een personage te zijn of mee te maken wat hij meemaakt',1],
['meeleven','graag willen dat het goed gaat met een personage',1],
['tijdsprong','een sprong in de tijd in een verhaal, achteruit (terug) of vooruit',2],
['chronologisch','verteld in de juiste tijdsvolgorde, zonder tijdsprongen',2],
['actiespanning','spanning die ontstaat doordat er iets spannends, gevaarlijks of onverwachts gebeurt',3],
['psychologische spanning','spanning die ontstaat door betrokkenheid bij een personage of door vragen die het verhaal oproept',3],
['beeldspraak','taal die niet letterlijk bedoeld is, maar een beeld oproept',4],
['vergelijking','beeldspraak waarbij twee dingen met elkaar vergeleken worden, vaak met als of zoals',4],
['personificatie','beeldspraak waarbij een ding of dier menselijke eigenschappen krijgt',4]
],
cards:[
['Wat is de setting van een verhaal?','De plaats en tijd waarin het verhaal zich afspeelt.',0],
['Wat is sfeer?','Het gevoel dat de lezer bij het verhaal krijgt, bijvoorbeeld dreigend of gezellig.',0],
['Wat is ik-perspectief?','Het verhaal is in de ik-vorm geschreven.',1],
['Wat is het verschil tussen inleven en meeleven?','Inleven is je voorstellen hoe het is om het personage te zijn; meeleven is graag willen dat het goed gaat met het personage.',1],
['Wat is een tijdsprong achteruit?','Een sprong terug in de tijd in het verhaal, bijvoorbeeld een flashback.',2],
['Wat betekent \'chronologisch verteld\'?','Het verhaal wordt in de juiste tijdsvolgorde verteld, zonder tijdsprongen.',2],
['Wat is actiespanning?','Spanning die ontstaat doordat er iets spannends, gevaarlijks of onverwachts gebeurt, zoals in actiefilms.',3],
['Waardoor ontstaat psychologische spanning?','Door betrokkenheid bij een personage, of doordat het verhaal vragen oproept waar je nog geen antwoord op hebt.',3],
['Wat is beeldspraak?','Taal die niet letterlijk bedoeld is, maar een beeld oproept.',4],
['Wat is een vergelijking?','Een vorm van beeldspraak waarbij twee dingen met elkaar vergeleken worden, vaak met als of zoals.',4],
['Wat is personificatie?','Een vorm van beeldspraak waarbij een ding of dier menselijke eigenschappen krijgt.',4]
],
quiz:[
['Wat is de setting van een verhaal?',['De hoofdpersoon','De plaats en tijd waarin het verhaal zich afspeelt','Het perspectief','De titel'],1,'De setting is waar en wanneer het verhaal zich afspeelt.'],
['Wat is sfeer?',['Het gevoel dat de lezer bij het verhaal krijgt','De volgorde van gebeurtenissen','Een soort beeldspraak','De hoofdpersoon van het verhaal'],0,'Sfeer is het gevoel (bijvoorbeeld dreigend of gezellig) dat een verhaal oproept.'],
['Een verhaal geschreven in de ik-vorm heeft:',['Hij/zij-perspectief','Ik-perspectief','Geen perspectief','Wisselend perspectief'],1,'Als het verhaal in de ik-vorm geschreven is, spreek je van ik-perspectief.'],
['Bij wisselend perspectief geldt:',['Het verhaal is vanuit meerdere personages verteld','Er is geen hoofdpersoon','Het verhaal heeft geen setting','Het verhaal is altijd chronologisch'],0,'Bij wisselend perspectief verschuift het perspectief tussen meerdere personages.'],
['Wat is het verschil tussen inleven en meeleven?',['Er is geen verschil','Inleven is je voorstellen hoe het is om het personage te zijn, meeleven is hopen dat het goed met hem gaat','Inleven kan alleen bij ik-perspectief','Meeleven kan alleen bij gedichten'],1,'Inleven gaat over voorstellen, meeleven over hopen/wensen voor het personage.'],
['Een flashback in een verhaal is een voorbeeld van:',['Een tijdsprong achteruit','Een tijdsprong vooruit','Chronologisch vertellen','Actiespanning'],0,'Een flashback springt terug in de tijd: een tijdsprong achteruit.'],
['Een verhaal dat zonder tijdsprongen in de juiste volgorde verteld wordt, is:',['Chronologisch','Psychologisch spannend','Een personificatie','Wisselend perspectief'],0,'Chronologisch betekent: verteld in de juiste tijdsvolgorde.'],
['Spanning die ontstaat door een achtervolging of schietpartij, noem je:',['Psychologische spanning','Actiespanning','Perspectiefspanning','Chronologische spanning'],1,'Dit soort spanning door gevaarlijke, onverwachte gebeurtenissen heet actiespanning.'],
['Waardoor kan psychologische spanning ontstaan?',['Alleen door achtervolgingen','Door betrokkenheid bij een personage of onbeantwoorde vragen in het verhaal','Door de lengte van het boek','Door de titel van het boek'],1,'Psychologische spanning ontstaat door meeleven met een personage of doordat je een antwoord op een vraag wilt.'],
['Wat is beeldspraak?',['Een letterlijke beschrijving','Taal die niet letterlijk bedoeld is, maar een beeld oproept','Een tijdsprong','Een tekstverband'],1,'Beeldspraak roept een beeld op zonder letterlijk bedoeld te zijn.'],
['\'Zoals brede rivieren met een kleine bron\' is een voorbeeld van:',['Personificatie','Vergelijking','Tijdsprong','Chronologie'],1,'Met \'zoals\' worden twee dingen vergeleken: dit is een vergelijking.'],
['\'Alsof een schilder zijn kwast schoonspoelt\' (over de lucht) is een voorbeeld van:',['Vergelijking','Personificatie','Actiespanning','Setting'],0,'Door \'alsof\' wordt de lucht vergeleken met een kwast die wordt schoongespoeld: een vergelijking.'],
['Bij wie het perspectief in een verhaal ligt, kun je soms zien aan:',['De kleur van de kaft','De titel van een hoofdstuk','Het aantal bladzijden','De uitgever'],1,'Soms staat de naam van het personage bij wie het perspectief ligt, in de titel van het hoofdstuk.'],
['Een verhaal in de hij/zij-vorm heeft:',['Ik-perspectief','Hij/zij-perspectief','Geen perspectief','Alleen actiespanning'],1,'Als de verteller over \'hij\' of \'zij\' spreekt in plaats van \'ik\', is er sprake van hij/zij-perspectief.']
]
});
