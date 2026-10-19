import { registerChapter } from '../../../registry.js';

/* Rebuilt 2026-09-24 to the recipe of Economie TL4 H1 (change 6). Examples
   from the book: the e-bikes of Koen and Leah (2.1), Imke and Dave (2.2),
   the foal (2.4) and the weight table (2.5). The old 2.1 tip about reading
   "far apart" graphs at the intersection made no sense and is gone. The
   drawing is unchanged. Terms, cards and quiz unchanged. */
registerChapter('wiskunde|tl|2|2', {
title:'Oplossen en formules',
summary:[
{heading:'2.1 Oplossen met grafieken',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>een <b>vergelijking</b> oplossen met <b>twee grafieken</b></li>
<li>het <b>snijpunt</b> aflezen en uitleggen wat het betekent</li></ul></div>`
+`<div class="box"><h4>Waar dit hoofdstuk over gaat</h4><p>Je lost <b>vergelijkingen</b> op met <b>grafieken</b>, met <b>inklemmen</b> en met de <b>balansmethode</b>. Daarna maak je zelf een <b>formule</b> bij een grafiek en bij een tabel.</p></div>`
+`<h5 class="sub">Twee formules, twee grafieken</h5>`
+`<div class="box"><h4>Wanneer zijn ze gelijk?</h4><p>Vaak horen bij een situatie <b>twee formules</b>, bijvoorbeeld de huurprijs bij twee <b>verhuurbedrijven</b>. Teken je beide grafieken in <b>hetzelfde assenstelsel</b>, dan zie je bij het <b>snijpunt</b> wanneer ze <b>hetzelfde</b> opleveren.</p></div>`
+`<div class="call reken"><b>Stappenplan: oplossen met grafieken</b><ol class="num">
<li>Maak bij elke formule een <b>tabel</b>.</li>
<li>Teken beide grafieken in <b>één assenstelsel</b>.</li>
<li>Zoek het <b>snijpunt</b>.</li>
<li>Lees af welke <b>t</b> en welk <b>bedrag</b> erbij horen.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: twee e-bikes</h4><p>Koen: <b>huurprijs (&euro;) = 10 + 20t</b>. Leah: <b>huurprijs (&euro;) = 40 + 10t</b>. Hierin is t de tijd in dagen. Wanneer betalen ze evenveel?</p><div class="antwoord">Tabel: bij t = 3 betaalt Koen 10 + 60 = 70 en Leah 40 + 30 = 70. De grafieken <b>snijden</b> elkaar bij <b>t = 3</b>: na 3 dagen betalen ze allebei <b>&euro;70</b>.</div></div>`
+`<div class="call waarom">Waarom is het snijpunt de oplossing? Het is het <b>enige punt</b> dat op <b>beide grafieken</b> ligt. Alleen daar geven de twee formules <b>dezelfde uitkomst</b>.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Wat is het snijpunt van twee grafieken?</p><p class="check-a">Het punt waar de grafieken elkaar <b>kruisen</b>; daar zijn beide formules <b>gelijk</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (2.1)</b><ul class="lst">
<li>Teken beide grafieken in <b>één assenstelsel</b>.</li>
<li>Bij het <b>snijpunt</b> zijn de formules gelijk.</li>
<li>Teken <b>netjes</b>, anders lees je het snijpunt verkeerd af.</li></ul></div>`},

{heading:'2.2 Oplossen met inklemmen',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>van een <b>formule</b> een <b>vergelijking</b> maken</li>
<li>een vergelijking oplossen met <b>inklemmen</b></li></ul></div>`
+`<h5 class="sub">Van formule naar vergelijking</h5>`
+`<div class="box"><h4>Wat is een vergelijking?</h4><p>Imke verdient <b>inkomsten (&euro;) = 5 + 3,40t</b>, met t in uren. Weet je dat ze <b>&euro;28,80</b> verdiende, dan vul je dat in: <b>5 + 3,40t = 28,80</b>. Dat is een <b>vergelijking</b>. De <b>oplossing</b> is het getal voor t waarbij hij <b>klopt</b>: hier <b>t = 7</b>.</p></div>`
+`<h5 class="sub">Inklemmen</h5>`
+`<div class="call reken"><b>Stappenplan: inklemmen</b><ol class="num">
<li>Vul een getal in voor de letter.</li>
<li>Is de uitkomst <b>te weinig</b>? Probeer een <b>groter</b> getal.</li>
<li>Is de uitkomst <b>te veel</b>? Probeer een <b>kleiner</b> getal.</li>
<li>Ga door tot de uitkomst <b>precies klopt</b>.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: 15 + 4,35t = 115,05</h4><p>Los op met inklemmen.</p><div class="antwoord">t = 20 geeft 102: <b>te weinig</b>. t = 25 geeft 123,75: <b>te veel</b>. De oplossing ligt dus <b>tussen 20 en 25</b>. t = 23 geeft 15 + 100,05 = 115,05: dat <b>klopt</b>. De oplossing is <b>t = 23</b>.</div></div>`
+`<div class="call waarom">Waarom heet het <b>inklemmen</b>? Je zet de oplossing steeds vast tussen een getal dat <b>te weinig</b> geeft en een getal dat <b>te veel</b> geeft, en je maakt die ruimte steeds <b>kleiner</b>.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Wat doe je als de uitkomst bij inklemmen te veel is?</p><p class="check-a">Je probeert een <b>kleiner</b> getal.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (2.2)</b><ul class="lst">
<li>Vul de uitkomst in de formule in: dan heb je een <b>vergelijking</b>.</li>
<li><b>Te weinig</b>: groter getal. <b>Te veel</b>: kleiner getal.</li>
<li>Klopt het precies, dan heb je de <b>oplossing</b>.</li></ul></div>`},

{heading:'2.3 Oplossen met de balansmethode',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>een vergelijking oplossen met de <b>balansmethode</b></li></ul></div>`
+`<h5 class="sub">Een vergelijking als balans</h5>`
+`<div class="box"><h4>In evenwicht</h4><p>Een <b>balans</b> is in evenwicht als op beide schalen <b>hetzelfde gewicht</b> ligt. Haal je van <b>beide</b> schalen evenveel af, dan blijft hij in evenwicht. Zo werk je ook met een vergelijking: je mag aan <b>beide kanten</b> van het <b>=</b> teken evenveel <b>optellen</b> of <b>aftrekken</b>, en beide kanten door <b>hetzelfde getal delen</b>.</p></div>`
+`<figure class='fig'><svg viewBox="0 0 340 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="De balansmethode: aan beide kanten hetzelfde doen houdt de vergelijking in evenwicht"><g stroke="var(--txt)" stroke-width="2" fill="none" opacity=".8"><path d="M40 60 H300"/><path d="M170 60 V96"/><path d="M150 96 H190"/><path d="M156 108 L184 108"/></g><g fill="var(--accent)" fill-opacity=".18" stroke="var(--accent)" stroke-width="1.6"><rect x="60" y="28" width="90" height="26" rx="5"/><rect x="190" y="28" width="90" height="26" rx="5"/></g><g fill="var(--txt)" font-size="12" font-family="inherit" text-anchor="middle"><text x="105" y="46">3x + 5</text><text x="235" y="46">20</text><text x="170" y="132">=</text></g><g fill="var(--accent)" fill-opacity=".18" stroke="var(--accent)" stroke-width="1.6"><rect x="60" y="146" width="90" height="26" rx="5"/><rect x="190" y="146" width="90" height="26" rx="5"/></g><g fill="var(--txt)" font-size="12" font-family="inherit" text-anchor="middle"><text x="105" y="164">3x</text><text x="235" y="164">15</text></g><g fill="#e2564f" font-size="10" font-weight="600" font-family="inherit" text-anchor="middle"><text x="105" y="122">&minus; 5</text><text x="235" y="122">&minus; 5</text></g><g stroke="#e2564f" stroke-width="1.5" fill="none" stroke-dasharray="4 3"><path d="M105 96 V112"/><path d="M235 96 V112"/></g></svg><figcaption>Wat je links doet, doe je ook rechts &mdash; anders slaat de balans door. Trek je links 5 af, dan moet dat rechts ook, en 3x = 15 geeft x = 5.</figcaption></figure>`
+`<div class="call reken"><b>Stappenplan: balansmethode</b><ol class="num">
<li>Haal het <b>losse getal</b> weg: aan beide kanten aftrekken (of optellen).</li>
<li>Deel beide kanten door het getal <b>vóór de letter</b>.</li>
<li><b>Controleer</b>: vul je antwoord in de vergelijking in.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: 2b + 14 = 36</h4><p>Los op met de balansmethode.</p><div class="antwoord">Het losse getal is 14, dus aan beide kanten <b>&minus;14</b>: 2b = 22. Voor b staat 2, dus beide kanten <b>: 2</b>: <b>b = 11</b>. Controle: 2 &times; 11 + 14 = 36. Klopt.</div></div>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Inklemmen</h4><p><b>Proberen</b> tot het klopt. Werkt altijd, maar kost tijd.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Balansmethode</h4><p><b>Terugrekenen</b> in een paar stappen. Snel en precies.</p></div></div>`
+`<div class="call warn"><b>Veelgemaakte fout:</b> je doet de bewerking maar aan <b>één kant</b>. Dan raakt de balans uit evenwicht en klopt je antwoord niet meer.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Los op met de balansmethode: 3n + 35 = 38.</p><p class="check-a">3n = 3, dus <b>n = 1</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (2.3)</b><ul class="lst">
<li>Wat je aan de ene kant doet, doe je ook aan de <b>andere kant</b>.</li>
<li>Eerst het <b>losse getal</b> weg, dan <b>delen</b> door het getal voor de letter.</li>
<li><b>Controleer</b> door in te vullen.</li></ul></div>`},

{heading:'2.4 Formule maken bij een grafiek',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>een <b>formule</b> maken bij een <b>rechte grafiek</b></li>
<li>het <b>stijggetal</b> of <b>daalgetal</b> berekenen</li></ul></div>`
+`<h5 class="sub">Begingetal en stijggetal</h5>`
+`<div class="box"><h4>De vorm van de formule</h4><p>Bij een <b>rechte lijn</b> hoort een formule als <b>y = begingetal + stijggetal &times; t</b>. Het <b>begingetal</b> is de waarde bij <b>t = 0</b>, waar de grafiek de verticale as snijdt. Het <b>stijggetal</b> is wat er <b>per stap</b> bijkomt. Daalt de grafiek, dan gebruik je een <b>daalgetal</b> met een <b>minteken</b>.</p></div>`
+`<div class="call reken"><b>Stappenplan: het stijggetal berekenen</b><ol class="num">
<li>Zoek <b>twee punten</b> die je goed kunt aflezen.</li>
<li>Bereken hoeveel het <b>omhoog</b> gaat en hoeveel <b>stappen</b> dat kost.</li>
<li>Deel: <b>toename : aantal stappen</b>.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: een veulen groeit</h4><p>De grafiek gaat door <b>(0, 40)</b> en <b>(20, 180)</b>. Hierin is t de tijd in weken.</p><div class="antwoord">In 20 weken komt er 180 &minus; 40 = <b>140 kg</b> bij. In 1 week: 140 : 20 = <b>7 kg</b>. Het begingetal is <b>40</b>. Formule: <b>gewicht (kg) = 40 + 7t</b>. Hierin is t de tijd in weken.</div></div>`
+`<div class="call warn"><b>Vergeet niet</b> onder de formule te zetten wat de <b>letter</b> betekent, met de <b>eenheid</b>: &ldquo;Hierin is t de tijd in weken.&rdquo;</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Wat gebruik je in de formule als een grafiek daalt?</p><p class="check-a">Een <b>daalgetal</b> met een <b>minteken</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (2.4)</b><ul class="lst">
<li><b>y = begingetal + stijggetal &times; t</b>.</li>
<li><b>Begingetal</b>: de waarde bij t = 0.</li>
<li><b>Stijggetal</b> = toename : aantal stappen.</li></ul></div>`},

{heading:'2.5 Formule maken bij een tabel',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>een <b>formule</b> maken bij een <b>tabel met regelmaat</b></li></ul></div>`
+`<h5 class="sub">Van tabel naar formule</h5>`
+`<div class="call reken"><b>Stappenplan: formule bij een tabel</b><ol class="num">
<li>Wat <b>onder</b> in de tabel staat, zet je vooraan, met een <b>=</b> erachter.</li>
<li>Het <b>begingetal</b> staat in de tabel <b>onder de 0</b>.</li>
<li>Bereken het <b>stijggetal</b> of <b>daalgetal</b>: wat er <b>per 1 stap</b> bij komt of af gaat.</li>
<li>De letter <b>boven</b> in de tabel komt achter het stijggetal.</li>
<li>Schrijf eronder wat de <b>letter</b> betekent.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: minder gewicht</h4><p>Bij <b>t = 0</b> is het gewicht <b>93 kg</b>, bij <b>t = 3</b> is het <b>87 kg</b>. Hierin is t de tijd in maanden.</p><div class="antwoord">Het begingetal is <b>93</b>. In 3 maanden gaat er 6 kg af, dus per maand 6 : 3 = <b>2</b>: het daalgetal. Formule: <b>gewicht (kg) = 93 &minus; 2t</b>. Hierin is t de tijd in maanden.</div></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: een afstand</h4><p>Bij <b>t = 0</b> hoort <b>450</b> m, bij <b>t = 5</b> hoort <b>1250</b> m. Hierin is t de tijd in minuten.</p><div class="antwoord">In 5 minuten komt er 1250 &minus; 450 = 800 bij, per minuut 800 : 5 = <b>160</b>. Formule: <b>afstand (m) = 450 + 160t</b>.</div></div>`
+`<div class="call warn"><b>Let op:</b> deel altijd door het <b>aantal stappen</b> tussen de twee getallen. Van t = 0 naar t = 5 zijn het <b>5 stappen</b>, niet 1.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Waar staat het begingetal in een tabel?</p><p class="check-a"><b>Onder de 0</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (2.5)</b><ul class="lst">
<li><b>Begingetal</b>: onder de 0 in de tabel.</li>
<li><b>Stijggetal</b> of <b>daalgetal</b>: wat er per 1 stap bij komt of af gaat.</li>
<li>Schrijf altijd op wat de <b>letter</b> betekent.</li></ul></div>`}
],
terms:[
['Vergelijking','Een wiskundige zin met een is-gelijk-teken waarin een onbekende letter voorkomt.',2],
['Snijpunt','Het punt waar twee grafieken elkaar kruisen; daar zijn de twee formules gelijk.',0],
['Inklemmen','Een oplossing zoeken door steeds een getal te proberen en te kijken of het te veel of te weinig is.',1],
['Balansmethode','Een vergelijking oplossen door aan beide kanten van het is-teken dezelfde bewerking te doen.',2],
['Begingetal','De waarde van een grafiek of tabel bij t = 0.',3],
['Stijggetal','Het getal waarmee een grafiek of tabel per stap toeneemt.',3],
['Daalgetal','Het getal waarmee een grafiek of tabel per stap afneemt.',3],
['Formule','Een wiskundig recept waarmee je bij een gegeven waarde een uitkomst kunt berekenen.',4],
['Grafiek','Een tekening in een assenstelsel die laat zien hoe twee grootheden van elkaar afhangen.',0],
['Tabel','Een overzicht van bij elkaar horende waarden, bijvoorbeeld tijd en bedrag.',4],
['Losse getal','Het getal in een vergelijking dat niet bij de onbekende letter hoort.',2]
],
cards:[
['Wat is het snijpunt van twee grafieken?','Het punt waar de twee grafieken elkaar kruisen; daar zijn beide formules gelijk.',0],
['Wat doe je als de uitkomst bij inklemmen te veel is?','Je probeert een kleiner getal.',1],
['Wat doe je als de uitkomst bij inklemmen te weinig is?','Je probeert een groter getal.',1],
['Los op met de balansmethode: 3n + 35 = 38.','n = 1.',2],
['Wat moet je bij de balansmethode altijd doen aan beide kanten van het is-teken?','Dezelfde bewerking uitvoeren.',2],
['Wat is het begingetal van een grafiek of tabel?','De waarde bij t = 0.',3],
['Hoe bereken je het stijggetal als je twee punten van een grafiek weet?','Je bepaalt hoeveel de grafiek toeneemt en deelt dat door het aantal stappen op de horizontale as.',3],
['Wat is de algemene vorm van een formule bij een rechte, stijgende grafiek?','y = begingetal + stijggetal × t.',3],
['Wat gebruik je in de formule als een grafiek daalt?','Een daalgetal met een minteken.',3],
['Waar staat het begingetal in een tabel?','Onder de 0.',4],
['In een tabel hoort bij t = 0 de waarde 5 en bij t = 2 de waarde 37,50. Wat is het stijggetal?','(37,50 − 5) : 2 = 16,25.',4],
['Wat is een vergelijking?','Een wiskundige zin met een is-gelijk-teken waarin een onbekende letter voorkomt.',2]
],
quiz:[
['Wat is het snijpunt van twee grafieken?',['Het beginpunt van de grafiek','Het punt waar de grafieken elkaar kruisen','Het hoogste punt van de grafiek','Het punt op de horizontale as'],1,'Het snijpunt is het punt waar twee grafieken elkaar kruisen; daar zijn de formules gelijk.'],
['Je lost 92 + 8,6m = 307 op met inklemmen en bij m = 20 is de uitkomst te weinig. Wat probeer je daarna?',['Een kleiner getal dan 20','Een groter getal dan 20','Precies 20 nog een keer','Het getal 0'],1,'Bij een te lage uitkomst probeer je een groter getal.'],
['Los op met de balansmethode: h − 93 = 93.',['h = 0','h = 93','h = 186','h = 1'],2,'Tel aan beide kanten 93 op: h = 93 + 93 = 186.'],
['Los op met de balansmethode: 6s + 14 = 62.',['s = 4','s = 8','s = 12','s = 48'],1,'6s = 62 − 14 = 48, dus s = 48 : 6 = 8.'],
['Een grafiek begint bij 100 en stijgt met 50 per uur. Welke formule hoort hierbij?',['bedrag (€) = 50 + 100t','bedrag (€) = 100 + 50t','bedrag (€) = 100 − 50t','bedrag (€) = 150t'],1,'Het begingetal 100 staat vooraan, het stijggetal 50 staat bij t.'],
['Een grafiek begint bij 4000 en daalt naar 0 in 4 uur. Wat is het daalgetal?',['400','1000','4000','0'],1,'4000 : 4 = 1000, dus het daalgetal is 1000 per uur.'],
['In een tabel hoort bij t = 0 de waarde 450 en bij t = 5 de waarde 1250. Wat is het stijggetal?',['80','160','800','1250'],1,'(1250 − 450) : 5 = 800 : 5 = 160.'],
['Wat is het begingetal in de vorige vraag?',['0','5','160','450'],3,'Het begingetal is de waarde bij t = 0, dat is 450.'],
['Welke methode gebruik je als je een vergelijking oplost door steeds te proberen of een getal te veel of te weinig oplevert?',['De balansmethode','Inklemmen','Oplossen met grafieken','Formule maken bij een tabel'],1,'Bij inklemmen probeer je getallen en kijk je steeds of het antwoord te veel of te weinig is.'],
['Bij de balansmethode: 8b − 1 = 111. Wat is b?',['12','14','13,75','112'],1,'8b = 111 + 1 = 112, dus b = 112 : 8 = 14.'],
['Waarom moet je bij de balansmethode aan beide kanten dezelfde bewerking doen?',['Om het sneller te maken','Om de balans in evenwicht te houden','Dat hoeft niet altijd','Om de letter te laten verdwijnen'],1,'Alleen als je beide kanten hetzelfde verandert, blijft de vergelijking waar.'],
['Waarvoor gebruik je een snijpunt van twee grafieken?',['Om te zien welke grafiek het hoogst is','Om de oplossing van een vergelijking af te lezen','Om het begingetal te vinden','Om de eenheid van de as te bepalen'],1,'Bij het snijpunt zijn beide formules gelijk; dat is de oplossing van de vergelijking.'],
['Een tabel met tijd (in uren) en inkomsten stijgt regelmatig. Hoe noem je de toename per uur?',['Het begingetal','Het stijggetal','Het snijpunt','De balans'],1,'De toename per stap noem je het stijggetal.'],
['Bij welke situatie gebruik je een daalgetal in de formule?',['Als de grafiek stijgt','Als de grafiek horizontaal loopt','Als de grafiek daalt','Als de grafiek bij 0 begint'],2,'Een dalende grafiek krijgt een daalgetal met een minteken in de formule.'],
['Los op met inklemmen: bij t = 20 is een uitkomst te weinig en bij t = 25 te veel. Tussen welke waarden ligt de oplossing?',['Tussen 0 en 20','Tussen 20 en 25','Tussen 25 en 30','Precies bij 22,5'],1,'De oplossing ligt tussen de grens die te weinig geeft en de grens die te veel geeft.'],
['Wat betekent het als bij inklemmen de uitkomst precies klopt?',['Je moet nog een keer proberen','Je hebt de oplossing gevonden','De vergelijking heeft geen oplossing','Je moet de balansmethode gebruiken'],1,'Klopt de uitkomst precies, dan heb je de juiste waarde voor de onbekende gevonden.']
]
});
