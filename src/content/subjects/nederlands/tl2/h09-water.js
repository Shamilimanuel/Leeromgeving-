import { registerChapter } from '../../../registry.js';

/* Rebuilt 2026-09-25 to the recipe of Economie TL4 H1 (change 6). The book
   has little extra theory here (mostly assignments), so the same skills are
   restructured; the "at least fifteen words" for a woordweb is the book's.
   Terms, cards and quiz unchanged. */
registerChapter('nederlands|tl|2|9', {
title:'Water',
summary:[
{heading:'Woordweb',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>een <b>woordweb</b> maken</li>
<li>de <b>betekenis</b> van woorden in een woordweb verduidelijken</li></ul></div>`
+`<div class="box"><h4>Waar dit hoofdstuk over gaat</h4><p>In dit thema leer je Nederland kennen als <b>waterland</b>. Je gebruikt een <b>woordweb</b>, <b>parafraseert</b> een tekst, maakt een <b>schema</b> en doet <b>mondeling verslag</b>. Met die vaardigheden maak je aan het eind een <b>lapbook</b>.</p></div>`
+`<h5 class="sub">Woorden die bij elkaar horen</h5>`
+`<div class="box"><h4>Veel woorden over water</h4><p>Water was altijd <b>belangrijk</b> voor Nederland. Daarom heeft het Nederlands <b>heel veel</b> woorden die ermee te maken hebben: de <b>woordenschat</b> over water is enorm.</p></div>`
+`<div class="call reken"><b>Stappenplan: een woordweb maken</b><ol class="num">
<li>Zet het <b>belangrijkste woord</b> in het midden.</li>
<li>Zet er woorden <b>omheen</b> die ermee te maken hebben; verbind ze met lijnen.</li>
<li>Maak het web groot genoeg: minimaal <b>vijftien woorden</b>.</li>
<li>Verduidelijk lastige woorden met een <b>synoniem</b>, een <b>tegenstelling</b> of een <b>zin</b>.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: een begin van een woordweb</h4><p>Middelpunt: <b>water</b>.</p><div class="antwoord">Eromheen bijvoorbeeld <b>dijk</b>, <b>rivier</b>, <b>overstroming</b>, <b>gemaal</b>. Bij dijk kun je een <b>zin</b> zetten: &lsquo;De dijk houdt het water tegen.&rsquo;</div></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Welk woord staat in het midden van een woordweb?</p><p class="check-a">Het <b>belangrijkste</b> woord, het onderwerp.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li>Het belangrijkste woord in het <b>midden</b>.</li>
<li>Eromheen woorden die ermee te maken hebben.</li>
<li>Verduidelijk met <b>synoniem</b>, <b>tegenstelling</b> of <b>zin</b>.</li></ul></div>`},

{heading:'Parafraseren',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>een tekst <b>parafraseren</b>: in je eigen woorden navertellen</li></ul></div>`
+`<h5 class="sub">In je eigen woorden</h5>`
+`<div class="box"><h4>Parafraseren</h4><p><b>Parafraseren</b> is de informatie uit een <b>brontekst</b> in je <b>eigen woorden</b> opschrijven. Zo laat je zien dat je de tekst <b>begrijpt</b>, en neem je niet zomaar <b>zinnen</b> over.</p></div>`
+`<div class="call reken"><b>Stappenplan: parafraseren</b><ol class="num">
<li>Lees de tekst goed en zoek op wat je <b>niet</b> begrijpt.</li>
<li>Noteer in <b>steekwoorden</b> waar de tekst over gaat.</li>
<li>Leg de brontekst <b>weg</b> en schrijf de informatie in je eigen woorden.</li>
<li>Controleer of je geen <b>belangrijke informatie</b> bent vergeten.</li></ol></div>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Overnemen</h4><p>Zinnen <b>letterlijk</b> kopiëren. Dan weet niemand of je het begrijpt.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Parafraseren</h4><p>Dezelfde <b>informatie</b>, maar in <b>jouw</b> woorden.</p></div></div>`
+`<div class="call waarom">Waarom de brontekst <b>weg</b> leggen? Anders ga je ongemerkt toch <b>zinnen overnemen</b>. Met alleen je steekwoorden moet je het wel in je eigen woorden zeggen.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Wat betekent parafraseren?</p><p class="check-a">Informatie uit een tekst in je <b>eigen woorden</b> opschrijven.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li>Parafraseren = <b>eigen woorden</b>, zelfde informatie.</li>
<li>Eerst <b>steekwoorden</b>, dan brontekst weg, dan schrijven.</li></ul></div>`},

{heading:'Schema\'s maken',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>feitelijke informatie in een <b>schema</b> zetten</li></ul></div>`
+`<h5 class="sub">Overzicht maken</h5>`
+`<div class="box"><h4>Informatie schematiseren</h4><p>Staat er in een tekst veel <b>feitelijke informatie</b> (getallen, namen, stappen)? Zet het dan in een <b>schema</b>. Zo vind je informatie snel <b>terug</b> en kun je dingen <b>vergelijken</b>.</p></div>`
+`<div class="call reken"><b>Stappenplan: een schema maken</b><ol class="num">
<li>Bepaal welke <b>categorieën</b> (kolommen) je nodig hebt.</li>
<li>Zoek per categorie de juiste informatie in de tekst.</li>
<li>Vul <b>kort</b> in, in <b>steekwoorden</b>.</li>
<li><b>Controleer</b> of het schema klopt met de tekst.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: drie rivieren</h4><p>Een tekst noemt van elke rivier de naam, waar hij Nederland binnenkomt en waar hij heen stroomt.</p><div class="antwoord">Kolommen: <b>rivier</b> | <b>komt binnen bij</b> | <b>stroomt naar</b>. Per rivier één <b>rij</b>, in steekwoorden.</div></div>`
+`<div class="call warn"><b>Let op:</b> een schema is <b>kort</b>. Schrijf geen hele zinnen in de vakjes.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Wat bepaal je als eerste bij een schema?</p><p class="check-a">Welke <b>categorieën</b> (kolommen) je nodig hebt.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li>Schema bij veel <b>feiten</b>: getallen, namen, stappen.</li>
<li>Eerst <b>kolommen</b>, dan invullen in <b>steekwoorden</b>.</li></ul></div>`},

{heading:'Mondeling verslag doen',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>een <b>mondeling verslag</b> geven in de juiste volgorde</li></ul></div>`
+`<h5 class="sub">Vertellen wat er gebeurde</h5>`
+`<div class="box"><h4>Mondeling verslag</h4><p>Bij een <b>mondeling verslag</b> vertel je (dus niet op papier) over iets wat je hebt <b>meegemaakt</b>, <b>gezien</b> of <b>onderzocht</b>. Je vertelt in <b>chronologische volgorde</b>: de volgorde in de tijd.</p></div>`
+`<div class="call reken"><b>Stappenplan: een mondeling verslag</b><ol class="num">
<li>Bedenk in <b>steekwoorden</b> wat in de <b>inleiding</b>, het <b>middenstuk</b> en het <b>slot</b> komt.</li>
<li>Vertel wat er <b>gebeurde</b> en wat je <b>dacht en voelde</b>.</li>
<li>Gebruik signaalwoorden voor <b>tijdsvolgorde</b>: eerst, daarna, ten slotte.</li>
<li><b>Oefen</b> je verslag voordat je het presenteert.</li></ol></div>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Schriftelijk verslag</h4><p>Op <b>papier</b>; de lezer kan teruglezen.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Mondeling verslag</h4><p><b>Hardop</b>; je luisteraar hoort het maar één keer, dus een duidelijke <b>volgorde</b> is extra belangrijk.</p></div></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">In welke volgorde vertel je een mondeling verslag?</p><p class="check-a">In <b>chronologische</b> volgorde: de volgorde in de tijd.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden</b><ul class="lst">
<li><b>Chronologisch</b> vertellen.</li>
<li>Inleiding, middenstuk, slot in <b>steekwoorden</b>.</li>
<li>Signaalwoorden: <b>eerst, daarna, ten slotte</b>.</li></ul></div>`}
],
terms:[
['woordweb','een schema waarmee je woorden die met elkaar te maken hebben rond een centraal woord groepeert',0],
['woordenschat','alle woorden die je kent of die er over een bepaald onderwerp bestaan',0],
['parafraseren','informatie uit een brontekst in je eigen woorden opschrijven',1],
['brontekst','de oorspronkelijke tekst waaruit je informatie haalt',1],
['schema','een overzichtelijke indeling van informatie, bijvoorbeeld in kolommen en rijen',2],
['schematiseren','informatie uit een tekst overzichtelijk in een schema zetten',2],
['mondeling verslag','een verslag dat je mondeling (sprekend) geeft over iets wat je hebt meegemaakt of onderzocht',3],
['chronologische volgorde','de volgorde waarin gebeurtenissen in de tijd plaatsvinden',3],
['deelonderwerp','een kleiner onderwerp binnen een groter onderwerp, bijvoorbeeld een van de takken in een woordweb',0],
['steekwoord','een kort woord waarmee je de kern van informatie noteert',2]
],
cards:[
['Wat is een woordweb?','Een schema waarmee je woorden die met elkaar te maken hebben rond een centraal woord groepeert.',0],
['Waar staat het belangrijkste woord in een woordweb?','In het midden.',0],
['Wat is parafraseren?','Informatie uit een brontekst in je eigen woorden opschrijven.',1],
['Waarom parafraseer je een tekst?','Om te laten zien dat je de tekst begrepen hebt en om te voorkomen dat je zinnen letterlijk overneemt.',1],
['Wat doe je bij schematiseren?','Informatie uit een tekst overzichtelijk in een schema zetten, bijvoorbeeld in kolommen.',2],
['Wanneer is schematiseren handig?','Als een tekst veel feitelijke informatie bevat, zoals getallen, namen of stappen.',2],
['Wat is een mondeling verslag?','Een verslag dat je mondeling geeft over iets wat je hebt meegemaakt, gezien of onderzocht.',3],
['In welke volgorde vertel je meestal een mondeling verslag?','In chronologische volgorde (de volgorde in de tijd).',3],
['Welke signaalwoorden gebruik je bij een mondeling verslag?','Signaalwoorden voor tijdsvolgorde, zoals eerst, daarna, ten slotte.',3],
['Wat is een steekwoord?','Een kort woord waarmee je de kern van informatie noteert, bijvoorbeeld in een schema of aantekeningen.',2]
],
quiz:[
['Wat is een woordweb?',['Een schema waarmee je woorden rond een centraal woord groepeert','Een soort gedicht','Een leesteken','Een reclametechniek'],0,'Een woordweb groepeert woorden die met elkaar te maken hebben rond een centraal woord.'],
['Waar staat in een woordweb het belangrijkste woord?',['Onderaan','In het midden','Bovenaan','Nergens vast'],1,'Het centrale, belangrijkste woord staat in het midden van het woordweb.'],
['Wat betekent parafraseren?',['Een tekst letterlijk overtypen','Informatie in je eigen woorden opschrijven','Een tekst vertalen naar een andere taal','Een tekst korter maken zonder inhoud te wijzigen'],1,'Parafraseren is informatie in je eigen woorden weergeven.'],
['Waarom is parafraseren belangrijk?',['Om te laten zien dat je de tekst begrepen hebt','Om de tekst langer te maken','Om fouten te maken','Om de bron te verbergen'],0,'Parafraseren laat zien dat je de informatie echt begrepen hebt.'],
['Wanneer is het handig om informatie te schematiseren?',['Als een tekst veel feitelijke informatie bevat','Als een tekst een gedicht is','Nooit','Alleen bij korte teksten'],0,'Bij veel feiten, getallen of stappen is een schema overzichtelijk.'],
['Wat is de eerste stap bij het maken van een schema?',['De categorieën (kolommen) bepalen','Het schema meteen inkleuren','De tekst weggooien','Een titel bedenken zonder tekst te lezen'],0,'Eerst bepaal je welke categorieën je nodig hebt, dan vul je de informatie in.'],
['Wat is een mondeling verslag?',['Een schriftelijk verslag','Een verslag dat je sprekend geeft','Een woordweb','Een gedicht'],1,'Bij een mondeling verslag vertel je (sprekend) over iets wat je hebt meegemaakt of onderzocht.'],
['In welke volgorde vertel je een mondeling verslag meestal?',['Willekeurige volgorde','Chronologische volgorde','Van moeilijk naar makkelijk','Alfabetische volgorde'],1,'Je vertelt meestal in de volgorde waarin de gebeurtenissen plaatsvonden.'],
['Welke signaalwoorden gebruik je bij een mondeling verslag om de volgorde duidelijk te maken?',['Bijvoorbeeld, zoals','Eerst, daarna, ten slotte','Maar, want, dus','On-, her-'],1,'Deze signaalwoorden geven de tijdsvolgorde van gebeurtenissen aan.'],
['Waarom heeft het Nederlands zo\'n grote woordenschat over water?',['Nederland heeft altijd veel met water te maken gehad','Water komt zelden voor in Nederland','Toeval','Het is een moeilijk onderwerp'],0,'Door de lange geschiedenis met water en scheepvaart heeft het Nederlands veel woorden over water.']
]
});
