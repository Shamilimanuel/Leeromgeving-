import { registerChapter } from '../../../registry.js';

/* Rebuilt 2026-09-25 to the recipe of Economie TL4 H1 (change 6). Same
   rules and tables, restructured; 6.4 got a worked example of an unclear
   reference. Terms, cards and quiz unchanged. */
registerChapter('nederlands|tl|2|6', {
title:'Formuleren',
summary:[
{heading:'Verwijzen naar personen en dingen',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li><b>verwijswoorden</b> gebruiken zodat je niet steeds hetzelfde woord herhaalt</li>
<li>het <b>juiste</b> verwijswoord kiezen</li></ul></div>`
+`<div class="box"><h4>Waar dit hoofdstuk over gaat</h4><p>Je maakt een tekst <b>prettiger</b> met <b>verwijswoorden</b>: naar <b>personen en dingen</b> en naar <b>bezit</b>. Ook oefen je met <b>samengestelde zinnen</b> schrijven.</p></div>`
+`<h5 class="sub">Niet steeds hetzelfde woord</h5>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Minder goed</h4><p><b>Meike</b> is blij. <b>Meike</b> heeft mooie sneakers gekocht.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Beter</h4><p>Meike is blij. <b>Zij</b> heeft mooie sneakers gekocht. Of: Meike is blij, want <b>zij</b> heeft &hellip;</p></div></div>`
+`<div class="tblwrap"><table class="tbl"><tr><th>Zelfstandig naamwoord</th><th>Verwijswoorden</th></tr><tr><td><b>het-woord</b> (onzijdig)</td><td>het, zijn, dat, dit</td></tr><tr><td><b>de-woord</b> (mannelijk)</td><td>hij, hem, zijn, die, deze</td></tr><tr><td><b>de-woord</b> (vrouwelijk)</td><td>zij/ze, haar, die, deze</td></tr><tr><td><b>meervoud</b></td><td>zij/ze, hun, die, deze</td></tr></table></div>`
+`<div class="call reken"><b>Stappenplan: het juiste verwijswoord</b><ol class="num">
<li>Naar welk <b>woord</b> verwijs je?</li>
<li>Is het een <b>het-woord</b>, een <b>de-woord</b> of <b>meervoud</b>?</li>
<li>Bij een de-woord: <b>mannelijk</b> of <b>vrouwelijk</b>? Twijfel je, kijk in het <b>woordenboek</b>.</li>
<li>Kies het woord uit de tabel.</li></ol></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Welk verwijswoord hoort bij &lsquo;het boek&rsquo;: die of dat?</p><p class="check-a"><b>dat</b>: boek is een het-woord.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li><b>het-woord</b>: het, dat, dit. <b>de-woord</b>: die, deze.</li>
<li>Mannelijk <b>hij</b>, vrouwelijk <b>zij</b>, meervoud <b>zij/hun</b>.</li></ul></div>`},

{heading:'Verwijzen naar bezit',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>met een <b>bezittelijk voornaamwoord</b> naar <b>bezit</b> verwijzen</li></ul></div>`
+`<h5 class="sub">Van wie is het?</h5>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Niet prettig</h4><p>Giliam speelt met <b>Giliams</b> voetbal.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Beter</h4><p>Giliam speelt met <b>zijn</b> voetbal.</p></div></div>`
+`<div class="box"><h4>Bezittelijke voornaamwoorden</h4><p>Een <b>bezittelijk voornaamwoord</b> staat altijd <b>vóór</b> het bezit: <b>haar</b> moeder, <b>onze</b> vrienden, <b>mijn</b> vulpen. Het past meestal bij het <b>onderwerp</b> van de zin.</p></div>`
+`<div class="tblwrap"><table class="tbl"><tr><th>Onderwerp</th><th>Verwijswoord</th></tr><tr><td>ik</td><td><b>mijn</b></td></tr><tr><td>hij</td><td><b>zijn</b></td></tr><tr><td>zij</td><td><b>haar</b></td></tr><tr><td>het</td><td><b>zijn</b></td></tr><tr><td>wij</td><td><b>onze</b></td></tr><tr><td>jullie</td><td><b>jullie</b></td></tr><tr><td>zij (meervoud)</td><td><b>hun</b></td></tr></table></div>`
+`<div class="call warn"><b>Instinker:</b> bij <b>het</b> hoort <b>zijn</b>, niet haar: het meisje en <b>zijn</b> fiets (in formele taal).</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Vul in: De kinderen pakken ... tassen.</p><p class="check-a"><b>hun</b> tassen.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li>Bezit: <b>mijn, zijn, haar, onze, hun</b>.</li>
<li>Staat altijd <b>vóór</b> het bezit.</li></ul></div>`},

{heading:'Meer oefenen met verwijzen',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>het verschil tussen <b>mij</b> en <b>mijn</b>, en <b>jou</b> en <b>jouw</b></li></ul></div>`
+`<h5 class="sub">Mij of mijn?</h5>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>mij / jou</h4><p>Verwijst naar de <b>persoon</b> zelf: na een <b>voorzetsel</b> of als <b>lijdend voorwerp</b>. Hij belt <b>mij</b>. Dit is voor <b>jou</b>.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>mijn / jouw</h4><p>Geeft <b>bezit</b> aan: er volgt direct iets <b>van</b> die persoon. <b>mijn</b> tas, <b>jouw</b> idee.</p></div></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: allebei in één zin</h4><p>&lsquo;Kun je <b>mij</b> helpen met <b>mijn</b> huiswerk?&rsquo;</p><div class="antwoord"><b>mij</b> verwijst naar de persoon zelf (lijdend voorwerp). <b>mijn</b> geeft bezit aan: het huiswerk <b>van mij</b>.</div></div>`
+`<div class="call reken"><b>Zo kies je</b><ol class="num">
<li>Volgt er <b>direct</b> een ding dat van iemand is? Kies <b>mijn</b> of <b>jouw</b>.</li>
<li>Zo niet? Kies <b>mij</b> of <b>jou</b>.</li></ol></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Vul in: Mag ik ... fiets lenen? (jou/jouw)</p><p class="check-a"><b>jouw</b> fiets: er volgt bezit.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li><b>mij/jou</b>: de persoon zelf.</li>
<li><b>mijn/jouw</b>: er volgt <b>bezit</b>.</li></ul></div>`},

{heading:'Samengestelde zinnen schrijven',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li><b>duidelijk</b> verwijzen in een <b>samengestelde zin</b></li></ul></div>`
+`<h5 class="sub">Duidelijk blijven</h5>`
+`<div class="box"><h4>Meer verwijswoorden in één zin</h4><p>In een <b>samengestelde zin</b> kan elke losse zin een eigen <b>verwijswoord</b> hebben. Verwijs <b>consequent</b> en <b>correct</b>, zodat de lezer weet waar elk woord <b>naar verwijst</b>.</p></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: wie nam er niet op?</h4><p>&lsquo;Tom belde Bas, maar <b>hij</b> nam niet op.&rsquo;</p><div class="antwoord"><b>Hij</b> kan Tom of Bas zijn: <b>onduidelijk</b>. Beter: &lsquo;Tom belde Bas, maar <b>Bas</b> nam niet op.&rsquo;</div></div>`
+`<div class="call reken"><b>Controleer je verwijswoorden</b><ol class="num">
<li>Onderstreep elk <b>verwijswoord</b>.</li>
<li>Trek een pijl naar het woord waar het <b>naar verwijst</b>.</li>
<li>Kan het naar <b>twee</b> woorden wijzen? Herhaal dan het <b>woord zelf</b> of herschrijf de zin.</li></ol></div>`
+`<div class="call warn"><b>Veelgemaakte fout:</b> een verwijswoord gebruiken terwijl <b>niet duidelijk</b> is naar welk woord het verwijst.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Wat doe je als een verwijswoord naar twee personen kan wijzen?</p><p class="check-a"><b>Herhaal de naam</b> of herschrijf de zin.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li>Elk verwijswoord moet <b>duidelijk</b> naar één woord wijzen.</li>
<li>Twijfel? Herhaal het <b>woord zelf</b>.</li></ul></div>`}
],
terms:[
['verwijswoord','een woord dat verwijst naar een eerder genoemd persoon, ding of bezit, om herhaling te voorkomen',0],
['het-woord (onzijdig)','een zelfstandig naamwoord met het lidwoord \'het\', waarnaar je verwijst met het, zijn, dat, dit',0],
['de-woord mannelijk','een zelfstandig naamwoord met lidwoord \'de\' dat mannelijk is, waarnaar je verwijst met hij, hem, zijn',0],
['de-woord vrouwelijk','een zelfstandig naamwoord met lidwoord \'de\' dat vrouwelijk is, waarnaar je verwijst met zij/ze, haar',0],
['bezittelijk voornaamwoord','een verwijswoord dat bezit aangeeft en altijd vóór het bezit staat, zoals mijn, jouw, zijn, haar, onze, hun',1],
['bezit','iets dat van iemand of iets is; in een zin aangegeven met een bezittelijk voornaamwoord',1],
['mij/mijn','mij gebruik je als lijdend voorwerp of na een voorzetsel, mijn gebruik je bij bezit',2],
['de-woord','een zelfstandig naamwoord met het lidwoord \'de\'',0],
['voegwoord','een woord waarmee je twee zinnen verbindt tot een samengestelde zin',3],
['onderwerp','het zinsdeel waar het bezittelijk voornaamwoord meestal bij aansluit',1]
],
cards:[
['Waarom gebruik je verwijswoorden in een tekst?','Omdat een tekst saai wordt als je steeds hetzelfde woord herhaalt.',0],
['Welk verwijswoord past bij een het-woord?','Het, zijn, dat, dit.',0],
['Waar staat een bezittelijk voornaamwoord altijd?','Vóór het bezit waar het bij hoort.',1],
['Welk bezittelijk voornaamwoord hoort bij \'wij\'?','Onze (of ons).',1],
['Wat is het verschil tussen mij en mijn?','Mij gebruik je als lijdend voorwerp of na een voorzetsel, mijn gebruik je als er bezit is.',2],
['Waar moet je op letten als je verwijswoorden gebruikt in een samengestelde zin?','Dat voor de lezer duidelijk blijft naar welk woord het verwijswoord verwijst.',3],
['Herschrijf: \'Giliam speelt met Giliams voetbal.\' zonder herhaling.','Giliam speelt met zijn voetbal.',1],
['Wat is een de-woord?','Een zelfstandig naamwoord met het lidwoord \'de\'.',0],
['Waarmee verbind je twee zinnen tot een samengestelde zin?','Met een voegwoord.',3],
['Waarom moet je consequent blijven verwijzen in een tekst?','Zodat voor de lezer duidelijk blijft naar welk woord een verwijswoord verwijst.',3]
],
quiz:[
['Waarom gebruik je verwijswoorden?',['Om een tekst prettiger te maken en herhaling te voorkomen','Om zinnen langer te maken','Om fouten te maken','Om moeilijke woorden te vermijden'],0,'Verwijswoorden voorkomen saaie herhaling van hetzelfde woord.'],
['\'De bibliotheek is verhuisd. Ze zit nu aan de Oeverlaan.\' Welk type woord is \'ze\' hier?',['Een de-woord mannelijk verwijswoord','Een de-woord vrouwelijk verwijswoord','Een het-woord verwijswoord','Een voegwoord'],1,'\'De bibliotheek\' is een de-woord vrouwelijk, dus je verwijst ernaar met zij/ze.'],
['Waar staat een bezittelijk voornaamwoord in een zin?',['Altijd aan het einde van de zin','Altijd vóór het bezit waar het bij hoort','Altijd na de persoonsvorm','Nergens vast'],1,'Een bezittelijk voornaamwoord staat altijd direct vóór het bezit.'],
['\'Giliam speelt met Giliams voetbal.\' Hoe verbeter je deze zin?',['Giliam speelt met zijn voetbal.','Giliam speelt met hun voetbal.','Giliam speelt met haar voetbal.','De zin is al goed'],0,'Omdat het onderwerp \'Giliam\' mannelijk enkelvoud is, gebruik je het verwijswoord \'zijn\'.'],
['Welk bezittelijk voornaamwoord hoort bij \'jullie\'?',['Onze','Hun','Jullie','Mijn'],2,'Bij het onderwerp \'jullie\' hoort het bezittelijk voornaamwoord \'jullie\'.'],
['Wanneer gebruik je \'mij\' in plaats van \'mijn\'?',['Als er direct een bezit achter volgt','Als het woord als lijdend voorwerp of na een voorzetsel wordt gebruikt','Nooit','Altijd bij het begin van een zin'],1,'\'Mij\' gebruik je als lijdend voorwerp of na een voorzetsel, zonder dat er bezit bedoeld wordt.'],
['\'Kun je ___ helpen met ___ huiswerk?\' Vul in de juiste volgorde in.',['mij / mijn','mijn / mij','mij / mij','mijn / mijn'],0,'Eerst \'mij\' (lijdend voorwerp, geen bezit), dan \'mijn\' (het huiswerk is van mij: bezit).'],
['Wat kun je het beste doen als niet duidelijk is naar welk woord een verwijswoord verwijst?',['Het verwijswoord toch laten staan','Het woord zelf herhalen of de zin herschrijven','De zin verwijderen','Een ander verwijswoord kiezen zonder na te denken'],1,'Bij onduidelijkheid is het beter het woord te herhalen of de zin te herschrijven.'],
['Welk verwijswoord past bij een meervoud, zoals \'de kittens\'?',['Hij, hem','Zij/ze, hun','Het, zijn','Jij, jouw'],1,'Bij een meervoud gebruik je zij/ze of hun als verwijswoord.'],
['\'De arts zette haar arm verkeerd.\' Waarnaar verwijst \'haar\' hier het meest logisch?',['Naar de arts','Naar de persoon die geholpen wordt','Naar niets','Naar een voegwoord'],0,'In deze context verwijst \'haar\' naar de vrouwelijke persoon die eerder genoemd is.']
]
});
