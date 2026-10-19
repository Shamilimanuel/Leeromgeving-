import { registerChapter } from '../../../registry.js';

/* Rebuilt 2026-09-25 to the recipe of Economie TL4 H1 (change 6). Fixed:
   the word-strategy overview listed strategies that are not the book's (the
   book: synoniem, omschrijving, voorbeeld), and the spelling schema turned
   the book's "voltooid deelwoord als bijvoeglijk naamwoord" into "voltooid
   deelwoord van een sterk werkwoord". One card with the same mistake is fixed;
   terms and quiz unchanged; the "builds on" links stay. */
registerChapter('nederlands|tl|1|8', {
title:'Handig!',
summary:[
{heading:'Feedback geven en ontvangen',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li><b>feedback</b> geven met <b>tops</b> en <b>tips</b></li>
<li>feedback goed <b>ontvangen</b></li></ul></div>`
+`<div class="box"><h4>Waar dit hoofdstuk over gaat</h4><p><b>Handig!</b> staat achter in het boek: <b>stappenplannen</b> en <b>schema's</b> die je steeds weer gebruikt, voor <b>feedback</b>, <b>lezen</b>, <b>schrijven</b>, <b>spreken</b>, <b>werkwoordspelling</b>, <b>woorden raden</b> en de <b>5w+h-vragen</b>.</p></div>`
+`<h5 class="sub">Tops en tips</h5>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Top</h4><p>Iets wat <b>goed</b> ging bij het werk van de ander.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Tip</h4><p>Een <b>concreet advies</b> om het werk te verbeteren.</p></div></div>`
+`<div class="call reken"><b>Zo geef je goede feedback</b><ol class="num">
<li>Begin met een <b>top</b>.</li>
<li>Geef een <b>concrete tip</b>: wat kan beter, en <b>hoe</b>?</li>
<li>Wees <b>eerlijk</b> én <b>vriendelijk</b>.</li></ol></div>`
+`<div class="call reken"><b>Zo ontvang je feedback</b><ol class="num">
<li><b>Luister</b> rustig, zonder meteen in de verdediging te gaan.</li>
<li><b>Vraag door</b> als iets niet duidelijk is.</li>
<li>Bedenk wat je ermee <b>gaat doen</b>.</li></ol></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Waarmee begin je als je feedback geeft?</p><p class="check-a">Met een <b>top</b>: iets wat goed ging.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li>Feedback = <b>top</b> + <b>tip</b>.</li>
<li>Ontvangen: <b>luisteren</b>, <b>doorvragen</b>, <b>gebruiken</b>.</li></ul></div>`},

{heading:'Stappenplan lezen',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>het <b>stappenplan lezen</b> gebruiken bij een tekst zonder vragen</li></ul></div>`
+`<div class="call link"><b>Dit bouwt voort op:</b> Meer dan lezen &sect; 1 t/m 6</div>`
+`<h5 class="sub">Vier stappen</h5>`
+`<div class="call reken"><b>Stappenplan lezen</b><ol class="num">
<li><b>Oriënterend lezen</b>: markeer titel en tussenkopjes, bekijk de afbeelding, noteer het <b>onderwerp</b> en maak een <b>woordweb</b>.</li>
<li><b>Globaal lezen</b>: zoek de <b>inleiding</b> en het <b>slot</b>; de rest is het middenstuk.</li>
<li><b>Precies lezen</b>: raad onbekende woorden, noteer <b>deelonderwerpen</b>, <b>tekstdoel</b> en <b>tekstsoort</b>.</li>
<li><b>Bijna klaar</b>: noteer de <b>hoofdgedachte</b>.</li></ol></div>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Oriënterend</h4><p>Snel <b>kijken</b> waar het over gaat.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Precies</h4><p><b>Grondig</b> lezen, zin voor zin.</p></div></div>`
+`<div class="call waarom">Waarom in stappen? Van <b>snel</b> naar <b>grondig</b>: zo weet je eerst waar het over gaat, en begrijp je de details daarna <b>beter</b>.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Bij welke stap noteer je de hoofdgedachte?</p><p class="check-a">Bij de laatste stap: <b>bijna klaar</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li><b>Oriënterend</b>, <b>globaal</b>, <b>precies</b>, <b>hoofdgedachte</b>.</li></ul></div>`},

{heading:'Stappenplan schrijven',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>een tekst schrijven met het <b>stappenplan schrijven</b></li></ul></div>`
+`<div class="call link"><b>Dit bouwt voort op:</b> Meer dan lezen &sect; 5 Inleiding, middenstuk en slot en &sect; 6 Deelonderwerpen</div>`
+`<h5 class="sub">Van plan naar tekst</h5>`
+`<div class="call reken"><b>Stappenplan schrijven</b><ol class="num">
<li>Bepaal het <b>onderwerp</b>, het <b>tekstdoel</b> en je <b>publiek</b>.</li>
<li>Verzamel informatie en bedenk <b>deelonderwerpen</b>, bijvoorbeeld met de 5w+h-vragen.</li>
<li>Maak een <b>bouwplan</b>: welk deelonderwerp in welke alinea?</li>
<li><b>Inleiding</b>: maak nieuwsgierig en noem het onderwerp.</li>
<li><b>Middenstuk</b>: één deelonderwerp per <b>alinea</b>.</li>
<li><b>Slot</b>: herhaal kort het belangrijkste.</li>
<li><b>Lees na</b> en verbeter spelling- en zinsfouten.</li></ol></div>`
+`<div class="term"><b>Bouwplan</b><span>Een plan waarin je vooraf opschrijft welk deelonderwerp in welke alinea komt.</span></div>`
+`<div class="call warn"><b>Veelgemaakte fout:</b> meteen gaan schrijven zonder <b>bouwplan</b>. Dan loop je vast of gaat je tekst alle kanten op.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Hoeveel deelonderwerpen zet je in één alinea?</p><p class="check-a"><b>Eén</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li>Eerst <b>plannen</b> (bouwplan), dan schrijven, dan <b>nalezen</b>.</li>
<li>Eén deelonderwerp per <b>alinea</b>.</li></ul></div>`},

{heading:'Stappenplan spreken (presentatie geven)',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>een presentatie <b>voorbereiden</b> met spreekkaartjes</li>
<li>een presentatie <b>geven</b></li></ul></div>`
+`<div class="call link"><b>Dit bouwt voort op:</b> Thema A &sect; 7 Stemgebruik en Thema B &sect; 4 Een presentatie geven</div>`
+`<h5 class="sub">Stap 1: voorbereiden</h5>`
+`<div class="call reken"><b>Voorbereiden</b><ol class="num">
<li>Schrijf het <b>onderwerp</b> op en bedenk het <b>middenstuk</b> met de 5w+h-vragen.</li>
<li>Maak per vraag een <b>spreekkaartje</b> met steekwoorden, in de goede volgorde.</li>
<li>Maak kaartjes voor de <b>inleiding</b> (waarom dit onderwerp?) en het <b>slot</b> (samenvatting of mening).</li>
<li>Zoek <b>afbeeldingen</b> of voorwerpen; zet niet te veel tekst op een dia.</li>
<li><b>Oefen</b>, bijvoorbeeld voor je ouders of een klasgenoot.</li></ol></div>`
+`<h5 class="sub">Stap 2: presenteren</h5>`
+`<div class="call reken"><b>Presentatie geven</b><ol class="num">
<li>Praat <b>rustig</b>, <b>duidelijk</b> en <b>hard genoeg</b>.</li>
<li>Kijk vooral naar je <b>publiek</b>, niet naar je kaartjes of dia's.</li>
<li>Gebruik je <b>lichaam</b>, <b>handen</b> en <b>gezicht</b>.</li>
<li>Laat afbeeldingen zien en vertel erover.</li>
<li>Vraag aan het eind of er <b>vragen</b> zijn.</li></ol></div>`
+`<div class="term"><b>Spreekkaartje</b><span>Een kaartje met steekwoorden dat je helpt onthouden wat je wilt zeggen.</span></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Wat zet je op een spreekkaartje?</p><p class="check-a">De belangrijkste informatie in <b>steekwoorden</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li>Voorbereiden met <b>spreekkaartjes</b> en <b>oefenen</b>.</li>
<li>Presenteren: <b>rustig</b>, <b>kijk</b> naar je publiek, vraag om <b>vragen</b>.</li></ul></div>`},

{heading:'Schema werkwoordspelling',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>met het <b>schema</b> bepalen hoe je een werkwoordsvorm spelt</li></ul></div>`
+`<div class="call link"><b>Dit bouwt voort op:</b> Spelling &sect; 8 t/m &sect; 12</div>`
+`<h5 class="sub">Eerste vraag: is het de persoonsvorm?</h5>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Ja: persoonsvorm</h4><p><b>tt</b>: ik-vorm, ik-vorm + t, of het hele werkwoord. <b>vt zwak</b>: ik-vorm + -te(n) of -de(n) ('t ex-fokschaap). <b>vt sterk</b>: de nieuwe klankvorm.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Nee: geen persoonsvorm</h4><p>Kies uit: (1) <b>voltooid deelwoord</b>, (2) voltooid deelwoord als <b>bijvoeglijk naamwoord</b>, of (3) <b>heel werkwoord</b>.</p></div></div>`
+`<div class="call reken"><b>Stappenplan: het schema doorlopen</b><ol class="num">
<li>Zoek de <b>persoonsvorm</b> (vraagproef of tijdproef).</li>
<li>Is jouw werkwoord de pv? Kies <b>tegenwoordige</b> of <b>verleden</b> tijd en volg de regel.</li>
<li>Geen pv en een voltooid deelwoord van een <b>zwak</b> werkwoord? <b>Maak het woord langer</b>: hoor je een d, schrijf dan -d; anders -t.</li>
<li>Het hele werkwoord? Dat eindigt op <b>-en</b>.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: gebeurd of gebeurt?</h4><p>&lsquo;Wat is er gebeur..?&rsquo;</p><div class="antwoord">De pv is <b>is</b>, dus gebeur.. is een <b>voltooid deelwoord</b>. Stam gebeur: r zit niet in 't ex-fokschaap, dus <b>-d</b>: <b>gebeurd</b>.</div></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Wat is de eerste vraag in het schema?</p><p class="check-a"><b>Is het werkwoord de persoonsvorm?</b></p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li>Eerst: <b>persoonsvorm</b> of niet?</li>
<li>pv: <b>tt</b> of <b>vt</b>. Geen pv: <b>voltooid deelwoord</b> of <b>heel werkwoord</b>.</li></ul></div>`},

{heading:'Overzicht woordraadstrategieën',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>de drie <b>woordraadstrategieën</b> op een rij</li></ul></div>`
+`<div class="call link"><b>Dit bouwt voort op:</b> Meer dan lezen &sect; 1 Onbekende woorden</div>`
+`<h5 class="sub">Drie strategieën</h5>`
+`<div class="tblwrap"><table class="tbl"><tr><th>Strategie</th><th>Wat je zoekt</th><th>Voorbeeld</th></tr><tr><td><b>Synoniem</b></td><td><b>één</b> woord met dezelfde betekenis</td><td>Amin <b>transpireert</b> &hellip; en <b>zweet</b> enorm.</td></tr><tr><td><b>Omschrijving</b></td><td>een <b>uitleg</b> in meer woorden, vaak tussen haakjes of komma's</td><td>de <b>akkerbouw</b>, een vorm van landbouw</td></tr><tr><td><b>Voorbeeld</b></td><td><b>voorbeelden</b>, vaak na bijvoorbeeld, een dubbele punt of tussen haakjes</td><td><b>tekengerei</b> (potloden, wasco en stiften)</td></tr></table></div>`
+`<div class="call reken"><b>Zo gebruik je ze</b><ol class="num">
<li>Zoek in <b>dezelfde zin</b>.</li>
<li>Lees ook de zin <b>ervóór</b> en <b>erna</b>.</li>
<li>Pas als het niet lukt: het <b>woordenboek</b>.</li></ol></div>`
+`<div class="call warn"><b>Let op:</b> een <b>synoniem</b> is één woord; een <b>omschrijving</b> gebruikt meer woorden.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Waar staan voorbeelden vaak in een zin?</p><p class="check-a">Na <b>bijvoorbeeld</b>, een <b>dubbele punt</b>, of tussen <b>haakjes</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li><b>Synoniem</b>, <b>omschrijving</b>, <b>voorbeeld</b>.</li>
<li>Kijk in de zin, ervóór en erna.</li></ul></div>`},

{heading:'5w+h-vragen',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>informatie ordenen met de <b>5w+h-vragen</b></li></ul></div>`
+`<div class="call link"><b>Dit bouwt voort op:</b> Thema B &sect; 3 De 5w+h-vragen</div>`
+`<h5 class="sub">Zes vragen</h5>`
+`<div class="tblwrap"><table class="tbl"><tr><th>Vraag</th><th>Geeft informatie over</th></tr><tr><td><b>Wie?</b></td><td>de personen die iets doen</td></tr><tr><td><b>Wat?</b></td><td>wat er gebeurt</td></tr><tr><td><b>Waar?</b></td><td>de plaats</td></tr><tr><td><b>Wanneer?</b></td><td>het moment of de tijd</td></tr><tr><td><b>Waarom?</b></td><td>de reden</td></tr><tr><td><b>Hoe?</b></td><td>de manier waarop</td></tr></table></div>`
+`<div class="call reken"><b>Zo vat je een tekst samen</b><ol class="num">
<li>Bedenk welke 5w+h-vragen je kunt <b>stellen</b>.</li>
<li>Schrijf kort de <b>antwoorden</b> op.</li>
<li>Meer <b>deelonderwerpen</b>? Doe het per deel.</li></ol></div>`
+`<div class="call warn"><b>Let op:</b> je kunt niet bij <b>elke</b> tekst alle zes vragen beantwoorden. Beantwoord de vragen die je <b>wel</b> in de tekst vindt.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Welke vraag gaat over de plaats?</p><p class="check-a"><b>Waar?</b></p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li><b>Wie, wat, waar, wanneer, waarom, hoe</b>.</li>
<li>Handig voor <b>samenvatten</b> en <b>hoofd- en bijzaken</b>.</li></ul></div>`}
],
terms:[
['Feedback','Wat je van iemands werk vindt: een combinatie van tops (wat goed ging) en tips (wat beter kan).',0],
['Top','Iets wat goed ging bij het werk van een ander.',0],
['Tip','Een concreet advies om het werk van een ander te verbeteren.',0],
['Stappenplan','Een vaste reeks stappen die je helpt om een taak (zoals lezen, schrijven of spreken) systematisch aan te pakken.',1],
['Bouwplan','Een schema waarin je noteert welk deelonderwerp in welke alinea van je tekst komt.',2],
['Spreekkaartje','Een kaartje met steekwoorden dat je gebruikt als geheugensteun tijdens een presentatie.',3],
['Voltooid deelwoord','De werkwoordsvorm die je gebruikt bij bijvoorbeeld \'heeft ... gedaan\'; bij zwakke werkwoorden eindigend op -d of -t.',4],
['Heel werkwoord (infinitief)','De onvervoegde vorm van een werkwoord, eindigend op -en, bijvoorbeeld lopen.',4],
['5w+h-vragen','Wie, wat, waar, wanneer, waarom en hoe: zes vragen om informatie te ordenen.',6],
['Woordraadstrategie (overzicht)','Een van de manieren om de betekenis van een onbekend woord te achterhalen zonder woordenboek.',5]
],
cards:[
['Waarmee begin je bij het geven van feedback?','Met iets positiefs: een top.',0],
['Wat is een tip bij feedback geven?','Een concreet advies om het werk te verbeteren.',0],
['Wat is de eerste stap van het stappenplan lezen?','Oriënterend lezen.',1],
['Wat schrijf je als eerste stap van het stappenplan schrijven?','Je bepaalt het onderwerp, het tekstdoel en je publiek.',2],
['Waarmee bereid je een presentatie voor volgens Handig?','Met spreekkaartjes per vraag/onderdeel, gebaseerd op de 5w+h-vragen.',3],
['Waar moet je op letten tijdens het geven van een presentatie?','Onder andere: rustig en duidelijk praten, naar je publiek kijken, je lichaam gebruiken.',3],
['Wat gebruik je bij twijfel over -d of -t in werkwoordspelling?','\'t ex-fokschaap.',4],
['Noem twee woordraadstrategieën uit het overzicht.','Bijvoorbeeld: een synoniem zoeken en een omschrijving zoeken (de derde is een voorbeeld zoeken).',5],
['Welke zes vragen horen bij de 5w+h-vragen?','Wie, wat, waar, wanneer, waarom en hoe.',6],
['Waarvoor gebruik je de 5w+h-vragen?','Om de belangrijkste informatie uit een tekst te halen of te ordenen voor je eigen tekst.',6]
],
quiz:[
['Wat is een top bij feedback geven?',['Iets wat beter kan','Iets wat goed ging','Een cijfer','Een vraag'],1,'Een top is iets wat goed ging bij het werk van een ander.'],
['Hoe reageer je het beste als je feedback ontvangt?',['Meteen boos worden','Rustig luisteren en eventueel doorvragen','De feedback negeren','Meteen tegenspreken'],1,'Je luistert rustig naar feedback en vraagt door als iets niet duidelijk is.'],
['Wat is de eerste stap van het stappenplan lezen?',['Precies lezen','Oriënterend lezen','De hoofdgedachte noteren','Globaal lezen'],1,'Je begint met oriënterend lezen om het onderwerp te vinden.'],
['Wat maak je bij het stappenplan schrijven om te bepalen welk deelonderwerp in welke alinea komt?',['Een woordweb','Een bouwplan','Een spreekkaartje','Een feedbackformulier'],1,'Met een bouwplan bepaal je de indeling van je tekst in alinea\'s.'],
['Wat gebruik je als geheugensteun tijdens een presentatie?',['Een spreekkaartje','Een woordenboek','Een bouwplan','Een feedbackformulier'],0,'Een spreekkaartje met steekwoorden helpt je tijdens het presenteren.'],
['Waar moet je bij het geven van een presentatie vooral naar kijken?',['Naar je spreekkaartjes','Naar de grond','Naar je publiek','Naar de deur'],2,'Je kijkt zoveel mogelijk naar je publiek en niet te veel op je spreekkaartjes.'],
['Wanneer gebruik je in het schema werkwoordspelling \'t ex-fokschaap?',['Bij lidwoorden','Bij twijfel tussen -d(e) en -t(e) bij zwakke werkwoorden','Bij hoofdletters','Bij verkleinwoorden'],1,'\'t ex-fokschaap helpt je bepalen of je -te(n) of -de(n) moet schrijven bij zwakke werkwoorden.'],
['Wat doe je als eerste woordraadstrategie bij een onbekend woord?',['Het woordenboek pakken','De zin nog een keer lezen','Het woord overslaan','Het opzoeken op internet'],1,'De eerste strategie is de zin (en de omliggende tekst) nog eens lezen.'],
['Welke vraag hoort niet bij de 5w+h-vragen?',['Wie?','Waarom?','Hoeveel?','Hoe?'],2,'De 5w+h-vragen zijn: wie, wat, waar, wanneer, waarom en hoe. \'Hoeveel\' hoort daar niet bij.'],
['Waarvoor zijn de 5w+h-vragen handig?',['Om een gedicht te maken','Om informatie samen te vatten en te ordenen','Om spelfouten te vinden','Om hoofdletters te herkennen'],1,'Met de 5w+h-vragen haal je snel de belangrijkste informatie uit een tekst of orden je je eigen tekst.'],
['Wat is een voltooid deelwoord?',['Het hele werkwoord (infinitief)','De werkwoordsvorm die je gebruikt bij bijvoorbeeld \'heeft ... gedaan\'','Alleen de ik-vorm','Een bijvoeglijk naamwoord'],1,'Het voltooid deelwoord gebruik je bijvoorbeeld na \'heeft\' of \'is\', zoals in \'heeft gedaan\'.']
]
});
