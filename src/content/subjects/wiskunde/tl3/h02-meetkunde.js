import { registerChapter } from '../../../registry.js';

/* Rebuilt 2026-09-25 to the recipe of Economie TL4 H1 (change 6). Fixed:
   2.1 said cm to km is dividing by 10 six times (it is five; its own
   example showed five). Added from the book: the schaallijn of Venlo -
   Roermond (2.1), ZW = 225 degrees (2.2), the steps for a verticale
   doorsnede (2.3) and doorsnede PCGQ via Pythagoras (2.4). The vague
   "about 172 m" estimate is now a rule. The drawing is unchanged. Terms,
   cards and quiz unchanged. */
registerChapter('wiskunde|tl|3|2', {
title:'Meetkunde',
summary:[
{heading:'2.1 Schaal en schaallijn',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>rekenen met een <b>schaal</b> en een <b>schaallijn</b></li>
<li>de afstand <b>over de weg</b> en de <b>reistijd</b> schatten met een <b>vuistregel</b></li></ul></div>`
+`<div class="box"><h4>Waar dit hoofdstuk over gaat</h4><p>Je werkt met <b>kaarten</b> en <b>ruimtefiguren</b>: <b>schaal</b>, <b>koershoek</b>, <b>hoogtekaarten</b>, <b>doorsneden</b> en <b>lichaamsdiagonalen</b>, <b>aanzichten</b> en <b>hoeken</b>.</p></div>`
+`<h5 class="sub">Schaal</h5>`
+`<div class="box"><h4>1 : 500 000</h4><p>Schaal <b>1 : 500 000</b> betekent: 1 cm op de kaart is <b>500 000 cm</b> in het echt. Van cm naar km deel je <b>vijf keer door 10</b> (cm &rarr; dm &rarr; m &rarr; dam &rarr; hm &rarr; km): 500 000 cm = <b>5 km</b>.</p></div>`
+`<div class="box"><h4>Schaallijn</h4><p>Een <b>schaallijn</b> onder de kaart laat met streepjes zien hoeveel km bij een stuk kaart hoort. Venlo&ndash;Roermond is op de kaart <b>4,7 cm</b>; 1 cm is 5 km, dus in het echt <b>4,7 &times; 5 = 23,5 km</b> hemelsbreed.</p></div>`
+`<h5 class="sub">Vuistregels</h5>`
+`<div class="g3">`
+`<div class="box"><h4>Over de weg</h4><p>Ongeveer <b>1,2 &times;</b> de afstand hemelsbreed.</p></div>`
+`<div class="box"><h4>Fietsen</h4><p>Ongeveer <b>15 km</b> per uur.</p></div>`
+`<div class="box"><h4>Lopen</h4><p>Ongeveer <b>5 km</b> per uur.</p></div></div>`
+`<div class="call reken"><b>Stappenplan: reistijd schatten</b><ol class="num">
<li>Reken <b>1 cm</b> op de kaart om naar <b>km</b>.</li>
<li><b>Meet</b> de afstand hemelsbreed en reken om.</li>
<li>Afstand over de weg: <b>&times; 1,2</b>.</li>
<li>Reistijd: afstand <b>: 15</b> (fietsen) of <b>: 5</b> (lopen).</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: Carl fietst naar Apeldoorn</h4><p>Schaal <b>1 : 800 000</b>. Hemelsbreed is het <b>40 km</b>.</p><div class="antwoord">800 000 cm = <b>8 km</b>, dus 1 cm is 8 km. Over de weg: 1,2 &times; 40 = <b>48 km</b>. Fietsen: 48 : 15 = <b>3,2 uur</b>, ruim 3 uur.</div></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Hoeveel keer deel je door 10 om cm om te rekenen naar km?</p><p class="check-a"><b>Vijf keer</b>: dm, m, dam, hm, km.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (2.1)</b><ul class="lst">
<li><b>Schaal 1 : n</b>: 1 cm op de kaart is n cm in het echt.</li>
<li>Over de weg <b>&times; 1,2</b>; fietsen <b>15 km/u</b>, lopen <b>5 km/u</b>.</li>
<li><b>Hemelsbreed</b> = in een rechte lijn.</li></ul></div>`},

{heading:'2.2 Koershoek',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>werken met de <b>windroos</b> en <b>koershoeken</b> in graden</li>
<li>een koershoek <b>meten</b> met de <b>koershoekmeter</b></li></ul></div>`
+`<h5 class="sub">Van windrichting naar graden</h5>`
+`<div class="box"><h4>Rechtsom vanaf noord</h4><p>Een <b>windroos</b> heeft <b>16 windrichtingen</b>. Nauwkeuriger zijn <b>graden</b>: de telling begint in het <b>noorden bij 0&deg;</b> en gaat <b>rechtsom</b> tot 360&deg;.</p></div>`
+`<div class="tblwrap"><table class="tbl"><tr><th>Richting</th><th>Koershoek</th></tr><tr><td><b>Noord</b></td><td>0&deg; (of 360&deg;)</td></tr><tr><td><b>Oost</b></td><td>90&deg;</td></tr><tr><td><b>Zuid</b></td><td>180&deg;</td></tr><tr><td><b>Zuidwest</b></td><td>225&deg;</td></tr><tr><td><b>West</b></td><td>270&deg;</td></tr></table></div>`
+`<h5 class="sub">Meten</h5>`
+`<div class="call reken"><b>Stappenplan: een koershoek meten</b><ol class="num">
<li>Teken een lijn van het <b>vertrekpunt</b> naar het doel.</li>
<li>Leg het <b>midden</b> van de koershoekmeter op het <b>vertrekpunt</b>.</li>
<li>Laat de <b>noordpijl</b> naar het noorden wijzen.</li>
<li>Draai de <b>rode lijn</b> op je getekende lijn en lees de koershoek af.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: van Urk naar Den Oever</h4><p>Welke koershoek vaart een vissersboot?</p><div class="antwoord">De boot vertrekt uit <b>Urk</b>, dus daar ligt het midden van de koershoekmeter. Je leest af: <b>309&deg;</b>, iets ten westen van noordwest (315&deg;).</div></div>`
+`<div class="call warn"><b>Veelgemaakte fout:</b> de koershoekmeter op het <b>eindpunt</b> leggen. Dan meet je de weg <b>terug</b>, 180&deg; anders.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Welke koershoek hoort bij west?</p><p class="check-a"><b>270&deg;</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (2.2)</b><ul class="lst">
<li>Koershoek: vanaf <b>noord (0&deg;)</b>, <b>rechtsom</b>.</li>
<li>O = 90&deg;, Z = 180&deg;, W = 270&deg;.</li>
<li>Meten vanaf het <b>vertrekpunt</b>.</li></ul></div>`},

{heading:'2.3 Hoogtelijnen',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>een <b>hoogtekaart</b> met <b>hoogtelijnen</b> lezen</li>
<li>een <b>verticale doorsnede</b> van een landschap tekenen</li></ul></div>`
+`<h5 class="sub">Hoogtelijnen</h5>`
+`<div class="box"><h4>Op dezelfde hoogte</h4><p>Een <b>hoogtelijn</b> verbindt plekken die even hoog liggen, gemeten vanaf <b>NAP</b> (Normaal Amsterdams Peil). Loop je precies op zo'n lijn, dan ga je <b>niet omhoog of omlaag</b>. Liggen de lijnen <b>dicht bij elkaar</b>, dan is de helling <b>steil</b>.</p></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: een punt tussen twee lijnen</h4><p>Punt C ligt tussen de hoogtelijnen van <b>170 m</b> en <b>180 m</b>, dicht bij de lijn van 170 m.</p><div class="antwoord">C ligt <b>tussen 170 en 180 m</b>, en dichter bij <b>170 m</b> dan bij 180 m.</div></div>`
+`<figure class='fig'><svg viewBox="0 0 340 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Hoogtekaart met hoogtelijnen van 10, 20 en 30 meter en een lijn van A naar B, met daaronder de verticale doorsnede van die lijn"><g fill="none" stroke="var(--txt)" stroke-width="1.3" opacity=".55"><ellipse cx="170" cy="90" rx="125" ry="58"/><ellipse cx="170" cy="90" rx="82" ry="38"/><ellipse cx="170" cy="90" rx="40" ry="18"/></g><g fill="var(--mut)" font-size="9.5" font-family="inherit"><text x="50" y="122">10</text><text x="94" y="112">20</text><text x="137" y="100">30</text></g><path d="M50 140 L292 60" stroke="#e2564f" stroke-width="2" fill="none"/><g fill="#e2564f"><circle cx="50" cy="140" r="4"/><circle cx="292" cy="60" r="4"/></g><g fill="var(--txt)" font-size="12" font-family="inherit"><text x="38" y="154">A</text><text x="298" y="54">B</text></g><g stroke="var(--line)" stroke-width="1" stroke-dasharray="3 3" fill="none"><path d="M50 150 V196"/><path d="M292 70 V196"/></g><g stroke="var(--txt)" stroke-width="1.6" fill="none" opacity=".8"><path d="M45 292 H305"/><path d="M45 292 V200"/></g><g stroke="var(--line)" stroke-width="1" fill="none"><path d="M45 272 H305 M45 247 H305 M45 222 H305"/></g><g fill="var(--mut)" font-size="9.5" font-family="inherit" text-anchor="end"><text x="41" y="276">10</text><text x="41" y="251">20</text><text x="41" y="226">30</text></g><path d="M50 285 C 100 280, 122 226, 170 219 C 218 212, 250 262, 292 273" fill="none" stroke="#e2564f" stroke-width="2.2" stroke-linecap="round"/><g fill="var(--txt)" font-size="12" font-family="inherit" text-anchor="middle"><text x="50" y="308">A</text><text x="292" y="308">B</text></g><text x="60" y="212" fill="var(--mut)" font-size="9.5" font-family="inherit">hoogte in m</text></svg><figcaption>Boven de kaart met hoogtelijnen: hoe dichter de lijnen bij elkaar liggen, hoe steiler het is. Onder de doorsnede langs A&ndash;B: elke hoogtelijn die je kruist, is een punt op de kromme.</figcaption></figure>`
+`<h5 class="sub">Verticale doorsnede</h5>`
+`<div class="call reken"><b>Stappenplan: verticale doorsnede van A naar B</b><ol class="num">
<li>Draai de kaart zo dat <b>AB horizontaal</b> ligt.</li>
<li>Teken precies onder A een <b>verticale as</b> met de hoogtes.</li>
<li>Zet een <b>stip</b> waar AB een <b>hoogtelijn snijdt</b>, recht daaronder op de goede hoogte.</li>
<li>Verbind de stippen met een <b>vloeiende kromme</b>.</li></ol></div>`
+`<div class="call waarom">Waarom een vloeiende lijn en geen rechte stukjes? Een landschap heeft geen <b>knikken</b>: tussen twee hoogtelijnen loopt de grond <b>geleidelijk</b> op of af.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Wat betekent het als hoogtelijnen dicht bij elkaar liggen?</p><p class="check-a">Daar is de helling <b>steil</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (2.3)</b><ul class="lst">
<li><b>Hoogtelijn</b>: overal dezelfde hoogte boven NAP.</li>
<li><b>Dicht bij elkaar</b> = steil.</li>
<li><b>Verticale doorsnede</b>: het hoogteverloop langs een lijn.</li></ul></div>`},

{heading:'2.4 Doorsnede en lichaamsdiagonaal',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>een <b>doorsnede</b> van een kubus of balk op <b>ware grootte</b> tekenen</li>
<li>een <b>lichaamsdiagonaal</b> berekenen met de <b>verlengde stelling van Pythagoras</b></li></ul></div>`
+`<h5 class="sub">Doorsnede op ware grootte</h5>`
+`<div class="box"><h4>Een plat snijvlak</h4><p>Snijd je een ruimtefiguur door, dan krijg je een <b>doorsnede</b>. Op <b>ware grootte</b> teken je hem met de <b>echte maten</b> en de <b>rechte hoeken</b> waar ze horen. Een <b>diagonaalvlak</b> gaat door twee ribben die schuin tegenover elkaar liggen; een kubus heeft er <b>zes</b>.</p></div>`
+`<div class="call reken"><b>Stappenplan: doorsnede PCGQ tekenen</b><ol class="num">
<li>Welke zijden weet je al? Bijvoorbeeld <b>CG</b>.</li>
<li>Maak een <b>schets</b> van het vlak waarin een onbekende zijde ligt (bijvoorbeeld het bovenvlak) met letters en maten.</li>
<li>Bereken die zijde met de <b>stelling van Pythagoras</b>.</li>
<li>Teken de doorsnede met de <b>echte maten</b> en zet letters en maten erbij.</li></ol></div>`
+`<h5 class="sub">Lichaamsdiagonaal</h5>`
+`<div class="box"><h4>Dwars door de balk</h4><p>Een <b>lichaamsdiagonaal</b> loopt <b>dwars door</b> de figuur, van een hoekpunt naar het hoekpunt dat er het verst vandaan ligt. In de <b>verlengde stelling van Pythagoras</b> gebruik je altijd <b>drie ribben</b>.</p></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: CE in balk ABCD EFGH</h4><p><b>AB = 4 cm</b>, <b>BC = 6 cm</b>, <b>CG = 8 cm</b>. Rond af op één decimaal.</p><div class="antwoord">Route over drie ribben: CB, BA, AE. rhz&sup2; = 36, rhz&sup2; = 16, rhz&sup2; = 64. sz&sup2; = <b>116</b>. CE = &radic;116 &asymp; <b>10,8 cm</b>.</div></div>`
+`<div class="call warn"><b>Veelgemaakte fout:</b> maar <b>twee</b> ribben gebruiken. Dan bereken je de diagonaal van een <b>zijvlak</b>, niet die door de balk.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Hoeveel ribben gebruik je bij de verlengde stelling van Pythagoras?</p><p class="check-a"><b>Drie</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (2.4)</b><ul class="lst">
<li><b>Doorsnede</b> op ware grootte: onbekende zijden eerst met Pythagoras.</li>
<li><b>Lichaamsdiagonaal&sup2;</b> = ribbe&sup2; + ribbe&sup2; + ribbe&sup2;.</li></ul></div>`},

{heading:'2.5 Aanzichten',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>de <b>aanzichten</b> van een bouwwerk herkennen en tekenen</li>
<li>van een <b>bovenaanzicht met getallen</b> de andere aanzichten afleiden</li></ul></div>`
+`<h5 class="sub">Zes kanten</h5>`
+`<div class="box"><h4>Recht van één kant</h4><p>Van een voorwerp kun je <b>zes aanzichten</b> tekenen: <b>voor</b>, <b>achter</b>, <b>boven</b>, <b>onder</b>, <b>links</b> en <b>rechts</b>. De belangrijkste zijn het <b>vooraanzicht</b>, het <b>bovenaanzicht</b> en het <b>rechterzijaanzicht</b>.</p></div>`
+`<div class="g3">`
+`<div class="box"><h4>Vooraanzicht</h4><p>Recht van <b>voren</b>.</p></div>`
+`<div class="box"><h4>Bovenaanzicht</h4><p>Recht van <b>boven</b>.</p></div>`
+`<div class="box"><h4>Rechterzijaanzicht</h4><p>Recht van <b>rechts</b>.</p></div></div>`
+`<h5 class="sub">Rekenen met het bovenaanzicht</h5>`
+`<div class="call reken"><b>Stappenplan: van bovenaanzicht naar vooraanzicht</b><ol class="num">
<li>Schrijf in elk vakje van het bovenaanzicht hoeveel <b>kubussen</b> er op elkaar staan.</li>
<li>Kijk per <b>kolom</b> (van voren gezien) welk getal het <b>hoogst</b> is.</li>
<li>Teken in het vooraanzicht zo'n <b>hoge stapel</b>. Voor het zijaanzicht doe je hetzelfde per <b>rij</b>.</li></ol></div>`
+`<div class="call waarom">Waarom het <b>hoogste</b> getal? Van voren zie je alleen de <b>buitenkant</b>: een lage stapel achter een hoge valt <b>weg</b>.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Wat schrijf je in de vakjes van een bovenaanzicht van een blokkenbouwwerk?</p><p class="check-a">Hoeveel <b>kubussen</b> er op die plek <b>op elkaar</b> staan.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (2.5)</b><ul class="lst">
<li><b>Vooraanzicht</b>, <b>bovenaanzicht</b>, <b>rechterzijaanzicht</b>: recht van één kant.</li>
<li>Vooraanzicht uit het bovenaanzicht: het <b>hoogste</b> getal per kolom.</li></ul></div>`},

{heading:'2.6 Hoeken',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li><b>hoeken berekenen</b> in vlakke figuren met vaste regels</li>
<li>de <b>drieletternotatie</b> van een hoek gebruiken</li></ul></div>`
+`<h5 class="sub">De vaste regels</h5>`
+`<div class="tblwrap"><table class="tbl"><tr><th>Regel</th><th>Graden</th></tr><tr><td>Helemaal <b>rond</b></td><td>360&deg;</td></tr><tr><td><b>Gestrekte</b> hoek</td><td>180&deg;</td></tr><tr><td><b>Rechte</b> hoek</td><td>90&deg;</td></tr><tr><td>Hoekensom <b>driehoek</b></td><td>180&deg;</td></tr><tr><td>Hoekensom <b>vierhoek</b></td><td>360&deg;</td></tr></table></div>`
+`<div class="box"><h4>Symmetrie helpt</h4><p>Ook <b>lijnsymmetrie</b>, <b>draaisymmetrie</b> en <b>schuifsymmetrie</b> vertellen je welke hoeken <b>even groot</b> zijn.</p></div>`
+`<h5 class="sub">Drie letters</h5>`
+`<div class="box"><h4>&ang;ADC</h4><p>Komen bij één hoekpunt meer hoeken samen, dan gebruik je <b>drie letters</b>. &ang;D<sub>2</sub> heet ook <b>&ang;ADC</b>: ga met je vinger van A via D naar C. De <b>middelste letter</b> is het hoekpunt.</p></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: een hoek in stappen</h4><p>In driehoek ABC is <b>&ang;B = 44&deg;</b>, <b>&ang;C = 60&deg;</b> en <b>&ang;A<sub>1</sub> = &ang;A<sub>2</sub></b>. D ligt op BC. Bereken &ang;D<sub>2</sub> (in driehoek ADC).</p><div class="antwoord">&ang;A = 180 &minus; 44 &minus; 60 = <b>76&deg;</b>. &ang;A<sub>2</sub> = 76 : 2 = <b>38&deg;</b>. In driehoek ADC: &ang;D<sub>2</sub> = 180 &minus; 38 &minus; 60 = <b>82&deg;</b>.</div></div>`
+`<div class="call warn"><b>Werk in stappen</b> en schrijf bij elke stap in <b>welke driehoek</b> of welke regel je gebruikt.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Welke letter van &ang;ADC is het hoekpunt?</p><p class="check-a">De <b>middelste</b>: D.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (2.6)</b><ul class="lst">
<li><b>Driehoek</b> 180&deg;, <b>vierhoek</b> 360&deg;, <b>gestrekt</b> 180&deg;, <b>recht</b> 90&deg;.</li>
<li><b>Drieletternotatie</b>: de middelste letter is het hoekpunt.</li></ul></div>`}
],
terms:[
['Hemelsbreed','De afstand in een rechte lijn tussen twee punten, gemeten op de kaart.',0],
['Vuistregel (afstand over de weg)','De afstand over de weg is ongeveer 1,2 keer de afstand hemelsbreed.',0],
['Schaallijn','Een lijn onder een kaart, verdeeld in gelijke stukken met de bijbehorende afstand in werkelijkheid, waarmee je snel afstanden kunt opmeten.',0],
['Windroos','Een figuur met de 16 windrichtingen, van noord tot noordnoordwest.',1],
['Koershoek','De richting van een route in graden, gemeten vanaf het noorden (0°) rechtsom tot 360°.',1],
['Koershoekmeter','Hulpmiddel om een koershoek op een kaart te meten of uit te zetten.',1],
['Hoogtelijn','Een lijn op een hoogtekaart die punten met dezelfde hoogte verbindt.',2],
['NAP','Normaal Amsterdams Peil, de hoogte van het gemiddelde zeeniveau waarvandaan hoogtes op een kaart gemeten worden.',2],
['Verticale doorsnede','Een schets van het hoogteverloop van het landschap langs een lijn op een hoogtekaart.',2],
['Doorsnede','De platte figuur die ontstaat als je een ruimtefiguur met een vlak doorsnijdt.',3],
['Lichaamsdiagonaal','Een lijnstuk dat dwars door een ruimtefiguur loopt, van het ene hoekpunt naar het tegenoverliggende hoekpunt.',3],
['Verlengde stelling van Pythagoras','Methode om de lengte van een lichaamsdiagonaal te berekenen met behulp van drie ribben.',3],
['Vooraanzicht','De tekening van een bouwwerk zoals je het recht van voren ziet.',4],
['Bovenaanzicht','De tekening van een bouwwerk zoals je het recht van boven ziet.',4],
['Drieletternotatie','Manier om een hoek te noteren met drie letters, waarbij de middelste letter het hoekpunt is.',5]
],
cards:[
['Hoe reken je een afstand over de weg uit als je de afstand hemelsbreed weet?','Je vermenigvuldigt de afstand hemelsbreed met ongeveer 1,2.',0],
['Hoeveel kilometer fiets je ongeveer in een uur?','Ongeveer 15 km.',0],
['Wat betekent de schaal 1 : 500 000?','1 cm op de kaart is in werkelijkheid 500 000 cm (5 km).',0],
['Bij welke windrichting hoort een koershoek van 0°?','Noord.',1],
['Bij welke windrichting hoort een koershoek van 180°?','Zuid.',1],
['Op welk punt leg je het midden van de koershoekmeter?','Op het vertrekpunt.',1],
['Wat geeft een hoogtelijn aan?','Punten die allemaal op dezelfde hoogte liggen.',2],
['Wat zie je aan hoogtelijnen die dicht bij elkaar liggen?','Dat de helling daar steil is.',2],
['Hoeveel ribben gebruik je bij de verlengde stelling van Pythagoras?','Drie ribben.',3],
['Hoe teken je een doorsnede?','Op ware grootte, met de echte maten en letters erbij.',3],
['Wat zie je bij een vooraanzicht?','Het bouwwerk recht van voren gezien.',4],
['Hoeveel graden is de hoekensom van een driehoek?','180°.',5],
['Hoeveel graden is een gestrekte hoek?','180°.',5],
['Wat is de middelste letter bij de drieletternotatie van een hoek?','Het hoekpunt van de hoek.',5]
],
quiz:[
['Een schaal is 1 : 250 000. Hoeveel km is 1 cm op de kaart in werkelijkheid?',['0,25 km','2,5 km','25 km','250 km'],1,'250 000 cm = 2,5 km.'],
['De afstand hemelsbreed tussen twee dorpen is 20 km. Hoe groot is de afstand over de weg ongeveer?',['16 km','20 km','24 km','30 km'],2,'De afstand over de weg is ongeveer 1,2 keer de afstand hemelsbreed: 1,2 × 20 = 24 km.'],
['Hoeveel kilometer loop je ongeveer in een uur?',['1 km','5 km','10 km','15 km'],1,'Als vuistregel geldt: je loopt ongeveer 5 km in een uur.'],
['Welke koershoek hoort bij de windrichting oost?',['0°','90°','180°','270°'],1,'Oost ligt op 90° op de koershoekmeter.'],
['Waar leg je het midden van de koershoekmeter neer?',['Op het eindpunt','Op het vertrekpunt','Precies tussen begin- en eindpunt','Op het noorden'],1,'Je legt het midden van de koershoekmeter altijd op het vertrekpunt van de route.'],
['Wat betekent het als hoogtelijnen op een kaart dicht bij elkaar liggen?',['Het gebied is vlak','De helling is steil','Het gebied ligt onder NAP','De kaart heeft een grote schaal'],1,'Hoe dichter de hoogtelijnen bij elkaar liggen, hoe steiler de helling.'],
['Waarvandaan worden hoogtes op een Nederlandse hoogtekaart gemeten?',['Vanaf de evenaar','Vanaf NAP (gemiddeld zeeniveau)','Vanaf de hoogste berg','Vanaf het middelpunt van de aarde'],1,'NAP staat voor Normaal Amsterdams Peil, de hoogte van het gemiddelde zeeniveau.'],
['Wat staat er op de verticale as van een verticale doorsnede?',['De afstand langs de route','De hoogte','De koershoek','De schaal'],1,'Bij een verticale doorsnede staat de hoogte op de verticale as en de afstand langs de route op de horizontale as.'],
['Wat is een doorsnede van een ruimtefiguur?',['Een lichaamsdiagonaal','De platte figuur die ontstaat als je het lichaam doorsnijdt','Het bovenaanzicht','De inhoud van het lichaam'],1,'Een doorsnede is de platte figuur die ontstaat als je een ruimtefiguur met een vlak doorsnijdt.'],
['Hoeveel ribben gebruik je bij de verlengde stelling van Pythagoras?',['1','2','3','4'],2,'Bij de verlengde stelling van Pythagoras gebruik je altijd drie ribben.'],
['In een balk zijn de ribben 3 cm, 4 cm en 12 cm. Wat is de lichaamsdiagonaal?',['√19 cm','√169 = 13 cm','19 cm','144 cm'],1,'sz² = 3² + 4² + 12² = 9 + 16 + 144 = 169, dus sz = √169 = 13 cm.'],
['Hoe zie je een vooraanzicht van een bouwwerk?',['Recht van boven','Recht van voren','Recht van rechts','Van schuin bovenaf'],1,'Het vooraanzicht is de tekening van het bouwwerk recht van voren gezien.'],
['In een bovenaanzicht van een blokkenbouwwerk staat het getal 3 in een vakje. Wat betekent dat?',['Er staan 3 verschillende bouwwerken','Er staan 3 kubussen op elkaar','Het vakje is 3 cm breed','Er zijn 3 aanzichten mogelijk'],1,'De getallen in het bovenaanzicht geven aan hoeveel kubussen op elkaar gestapeld zijn.'],
['Hoeveel graden zijn de hoeken van een vierhoek samen?',['90°','180°','270°','360°'],3,'De hoeken van elke vierhoek zijn samen altijd 360°.'],
['In driehoek ABC is hoek A = 52° en hoek B = 71°. Wat is hoek C?',['19°','57°','119°','123°'],1,'180 − 52 − 71 = 57°.'],
['Wat is de middelste letter bij de drieletternotatie ∠ADC?',['A','D','C','Geen van deze'],1,'Bij de drieletternotatie is de middelste letter altijd het hoekpunt van de hoek, dus hier D.'],
['Hoeveel graden is een gestrekte hoek?',['90°','180°','270°','360°'],1,'Een gestrekte hoek is 180°, net als een rechte lijn.']
]
});
