import { registerChapter } from '../../../registry.js';

/* Rebuilt 2026-09-25 to the recipe of Economie TL4 H1 (change 6). Added
   from the book: refer back to de-woorden with deze/die and to het-woorden
   with dit/dat, and newspaper headlines as incomplete sentences. Terms,
   cards and quiz unchanged; the "builds on" link stays. */
registerChapter('nederlands|tl|1|6', {
title:'Formuleren',
summary:[
{heading:'Volledige zinnen',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>controleren of een zin <b>volledig</b> is</li></ul></div>`
+`<div class="box"><h4>Waar dit hoofdstuk over gaat</h4><p>Je schrijft <b>duidelijke</b>, correcte zinnen: wanneer is een zin <b>volledig</b>, is een woord een <b>de-woord</b> of een <b>het-woord</b>, en hoe voorkom je herhaling met <b>verwijswoorden</b>.</p></div>`
+`<div class="call link"><b>Dit bouwt voort op:</b> Grammatica &sect; 2 Persoonsvorm en &sect; 4 Onderwerp</div>`
+`<h5 class="sub">Onderwerp en persoonsvorm</h5>`
+`<div class="box"><h4>Volledige zin</h4><p>Een <b>volledige zin</b> heeft altijd minstens een <b>onderwerp</b> en een <b>persoonsvorm</b>. Ontbreekt er een, dan klinkt de zin <b>vreemd</b> of onduidelijk. Hij begint met een <b>hoofdletter</b> en eindigt met een leesteken.</p></div>`
+`<div class="call reken"><b>Stappenplan: is de zin volledig?</b><ol class="num">
<li>Zoek de <b>persoonsvorm</b>. Geen vervoegd werkwoord? Niet volledig.</li>
<li>Zoek het <b>onderwerp</b>. Geen onderwerp? Niet volledig.</li></ol></div>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Onvolledig</h4><p>&lsquo;<b>Ben zo thuis!</b>&rsquo; (geen onderwerp). Ook <b>krantenkoppen</b> zijn vaak onvolledig.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Volledig</h4><p>&lsquo;<b>Ik ben</b> zo thuis!&rsquo;</p></div></div>`
+`<div class="call warn"><b>Let op:</b> in een appje mag &lsquo;Ben zo thuis!&rsquo;, maar in een <b>formele</b> of geschreven tekst schrijf je <b>volledige</b> zinnen.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Welke twee zinsdelen heeft een volledige zin altijd?</p><p class="check-a">Een <b>onderwerp</b> en een <b>persoonsvorm</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li>Volledige zin = <b>onderwerp</b> + <b>persoonsvorm</b>.</li>
<li>In formele teksten altijd <b>volledig</b>.</li></ul></div>`},

{heading:'De- en het-woorden',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li><b>vuistregels</b> voor de- en het-woorden</li></ul></div>`
+`<h5 class="sub">De of het?</h5>`
+`<div class="box"><h4>Geen vaste regel</h4><p>Bij een zelfstandig naamwoord hoort <b>de</b> of <b>het</b>. Er is geen regel die voor <b>elk</b> woord werkt, maar er zijn wel handige <b>vuistregels</b>.</p></div>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Altijd het</h4><p><b>Verkleinwoorden</b>: het huisje, het tafeltje.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Altijd de</h4><p><b>Meervoudsvormen</b>: de huizen, de tafels.</p></div></div>`
+`<div class="call reken"><b>Stappenplan: de of het?</b><ol class="num">
<li>Is het een <b>verkleinwoord</b>? Dan <b>het</b>.</li>
<li>Is het <b>meervoud</b>? Dan <b>de</b>.</li>
<li>Twijfel je nog? Kijk in een (online) <b>woordenboek</b>.</li></ol></div>`
+`<div class="call warn"><b>Instinker:</b> uit het meervoud leer je <b>niets</b> over het enkelvoud. Het is <b>de</b> huizen, maar <b>het</b> huis.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">De of het: ... boompje?</p><p class="check-a"><b>het</b> boompje: verkleinwoorden zijn het-woorden.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li><b>Verkleinwoord</b>: het. <b>Meervoud</b>: de.</li>
<li>Twijfel: <b>woordenboek</b>.</li></ul></div>`},

{heading:'Verwijswoorden',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li><b>verwijswoorden</b> gebruiken om herhaling te voorkomen</li>
<li>kiezen tussen <b>deze/die</b> en <b>dit/dat</b></li></ul></div>`
+`<h5 class="sub">Terugwijzen</h5>`
+`<div class="term"><b>Verwijswoord</b><span>Een woord dat verwijst naar iets wat eerder in de tekst is genoemd, zoals dit, dat, deze, die, hij, ze, het, hem, hun.</span></div>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>de-woord</h4><p>Verwijzen met <b>deze</b> en <b>die</b>: de jas &rarr; <b>die</b>.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>het-woord</h4><p>Verwijzen met <b>dit</b> en <b>dat</b>: het schema &rarr; <b>dat</b>.</p></div></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: die of dat?</h4><p>&lsquo;Lieke had een roze jas besteld. Ik zou <b>die/dat</b> nooit kopen.&rsquo; en &lsquo;Kun je me zo'n wedstrijdschema mailen? Ik heb <b>die/dat</b> niet.&rsquo;</p><div class="antwoord"><b>de</b> jas, dus <b>die</b>. <b>het</b> schema, dus <b>dat</b>.</div></div>`
+`<div class="call reken"><b>Zo gebruik je verwijswoorden goed</b><ol class="num">
<li>Zorg dat <b>duidelijk</b> is waar het woord naar verwijst.</li>
<li>Gebruik er niet <b>te veel</b> achter elkaar.</li>
<li>Kies <b>enkelvoud</b> of <b>meervoud</b>, passend bij het woord.</li></ol></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Welke verwijswoorden horen bij een het-woord?</p><p class="check-a"><b>dit</b> en <b>dat</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li><b>de</b>-woord: deze/die. <b>het</b>-woord: dit/dat.</li>
<li>De lezer mag nooit hoeven <b>raden</b> waar je naar verwijst.</li></ul></div>`}
],
terms:[
['Volledige zin','Een zin met minimaal een onderwerp en een persoonsvorm.',0],
['Zin','Een geheel van woorden dat een compleet idee uitdrukt, begint met een hoofdletter en eindigt met een leesteken.',0],
['Onderwerp (herhaling)','Het deel van de zin dat samen met de persoonsvorm bepaalt of een zin volledig is.',0],
['Persoonsvorm (herhaling)','Het vervoegde werkwoord dat samen met het onderwerp bepaalt of een zin volledig is.',0],
['De-woord','Een zelfstandig naamwoord met het lidwoord \'de\'.',1],
['Het-woord','Een zelfstandig naamwoord met het lidwoord \'het\'.',1],
['Enkelvoud','De vorm van een woord die naar één ding of persoon verwijst.',1],
['Meervoud','De vorm van een woord die naar meerdere dingen of personen verwijst; meervoudsvormen krijgen altijd \'de\'.',1],
['Verkleinwoord','Een verkleinde vorm van een zelfstandig naamwoord, bijvoorbeeld huisje; verkleinwoorden krijgen altijd \'het\'.',1],
['Verwijswoord','Een woord dat verwijst naar iets wat eerder in de tekst is genoemd, zoals dit, dat, hij of ze.',2]
],
cards:[
['Wat heeft een volledige zin minimaal nodig?','Een onderwerp en een persoonsvorm.',0],
['Wat gebeurt er als een zin geen persoonsvorm heeft?','De zin is niet volledig.',0],
['Waarmee begint en eindigt een geschreven zin?','Met een hoofdletter en met een leesteken.',0],
['Welk lidwoord krijgen verkleinwoorden altijd?','Het.',1],
['Welk lidwoord krijgen meervoudsvormen altijd?','De.',1],
['Wat kun je het beste doen als je twijfelt over de of het bij een woord in het enkelvoud?','Een (online) woordenboek raadplegen.',1],
['Wat is een verwijswoord?','Een woord dat verwijst naar iets wat eerder in de tekst is genoemd.',2],
['Noem drie voorbeelden van verwijswoorden.','Bijvoorbeeld: dit, dat en hij.',2],
['Waarom gebruik je verwijswoorden in een tekst?','Om herhaling van hetzelfde woord te voorkomen.',2],
['Waar moet je op letten bij het gebruiken van een verwijswoord?','Dat voor de lezer altijd duidelijk is waar het verwijswoord naar verwijst.',2]
],
quiz:[
['Wat heeft een volledige zin minimaal?',['Een lidwoord en een voorzetsel','Een onderwerp en een persoonsvorm','Een bijvoeglijk naamwoord','Een verwijswoord'],1,'Een volledige zin heeft altijd minimaal een onderwerp en een persoonsvorm.'],
['Is \'Ben zo thuis!\' een volledige zin?',['Ja, want er staat een werkwoord in','Nee, het onderwerp ontbreekt','Ja, altijd','Nee, er zit geen lidwoord in'],1,'Het onderwerp (\'ik\') ontbreekt in deze spreektalige zin, dus hij is niet volledig.'],
['Welk lidwoord hoort bij een verkleinwoord?',['De','Het','Een','Geen lidwoord'],1,'Verkleinwoorden zijn altijd het-woorden, bijvoorbeeld het huisje.'],
['Welk lidwoord hoort bij een meervoud?',['De','Het','Een','Geen lidwoord'],0,'Meervoudsvormen krijgen altijd het lidwoord \'de\'.'],
['Wat kun je het beste doen als je twijfelt tussen de of het?',['Altijd \'de\' gebruiken','Een (online) woordenboek raadplegen','Het woord weglaten','Altijd \'het\' gebruiken'],1,'Bij twijfel zoek je het woord op in een (online) woordenboek.'],
['Wat is een verwijswoord?',['Een woord dat een handeling aangeeft','Een woord dat verwijst naar iets wat eerder is genoemd','Een lidwoord','Een voorzetsel'],1,'Een verwijswoord verwijst naar iets dat eerder in de tekst is genoemd.'],
['Waarom gebruik je verwijswoorden?',['Om een tekst langer te maken','Om herhaling van hetzelfde woord te voorkomen','Om de zin onduidelijker te maken','Om altijd formeel te schrijven'],1,'Verwijswoorden voorkomen dat je steeds hetzelfde woord moet herhalen.'],
['Wat moet altijd duidelijk zijn bij een verwijswoord?',['De lengte van het woord','Waarnaar het verwijst','Het lidwoord','De uitspraak'],1,'De lezer moet altijd kunnen zien waarnaar een verwijswoord verwijst, anders is de tekst onduidelijk.'],
['Waarop bouwt Formuleren § 1 Volledige zinnen voort?',['Grammatica § 5 Bijvoeglijk naamwoord','Grammatica § 2 Persoonsvorm en § 4 Onderwerp','Spelling § 1 Hoofdletters','Taal § 4 Bouwstenen'],1,'Om te bepalen of een zin volledig is, gebruik je kennis van persoonsvorm en onderwerp uit de Grammatica.'],
['Welk van deze woorden is een verwijswoord?',['Lopen','Dit','Snel','Mooi'],1,'\'Dit\' is een verwijswoord dat kan verwijzen naar iets dat eerder genoemd is.']
]
});
