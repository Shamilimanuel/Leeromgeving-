import { registerChapter } from '../../../registry.js';

/* Rebuilt 2026-09-25 to the recipe of Economie TL4 H1 (change 6), short
   sentences for BBL. Checked against the book: "haakse hoek" (5.1), the 360
   marks on the koershoekmeter (5.3) and "draw the kijklijnen from the middle
   of the head" (5.2) were missing; in 5.4 the marks go at 0 and at the
   angle, as in the book. The drawings are unchanged; the one of the lines
   moved to 5.1. Terms, cards and quiz unchanged. */
registerChapter('wiskunde|bbl|1|5', {
title:'Lijnen en hoeken',
summary:[
{heading:'5.1 Lijnen',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>wat <b>loodrechte</b> en <b>evenwijdige</b> lijnen zijn</li>
<li>ze tekenen en controleren met je <b>geodriehoek</b></li></ul></div>`
+`<div class="box"><h4>Waar dit hoofdstuk over gaat</h4><p>Je leert over <b>lijnen</b> en <b>hoeken</b>: hoe ze heten, hoe je ze <b>meet</b> en hoe je ze <b>tekent</b> met je geodriehoek en koershoekmeter.</p></div>`
+`<h5 class="sub">Twee soorten lijnen</h5>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Loodrecht</h4><p>De lijnen <b>snijden</b> elkaar en maken <b>rechte hoeken</b> (90&deg;). Een rechte hoek heet ook een <b>haakse hoek</b>.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Evenwijdig</h4><p>De lijnen snijden elkaar <b>nooit</b>, ook niet als je ze langer maakt. Ze blijven overal <b>even ver</b> van elkaar.</p></div></div>`
+`<figure class='fig'><svg viewBox="0 0 340 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Evenwijdige lijnen, snijdende lijnen en loodrechte lijnen"><g stroke="var(--txt)" stroke-width="2" fill="none" stroke-linecap="round" opacity=".85"><path d="M20 42 H100"/><path d="M20 72 H100"/><path d="M130 30 L210 78"/><path d="M130 74 L210 34"/><path d="M240 78 H320"/><path d="M280 24 V78"/></g><g stroke="var(--txt)" stroke-width="1.4" fill="none" opacity=".8"><path d="M56 38 L62 42 L56 46"/><path d="M56 68 L62 72 L56 76"/></g><circle cx="170" cy="54" r="3.5" fill="#e2564f"/><polyline points="292,78 292,66 280,66" fill="none" stroke="var(--accent)" stroke-width="1.7"/><g fill="var(--txt)" font-size="10.5" font-weight="600" font-family="inherit" text-anchor="middle"><text x="60" y="104">evenwijdig</text><text x="170" y="104">snijdend</text><text x="280" y="104">loodrecht</text></g><g fill="var(--mut)" font-size="9" font-family="inherit" text-anchor="middle"><text x="60" y="118">raken elkaar nooit</text><text x="170" y="118">snijpunt</text><text x="280" y="118">hoek van 90&deg;</text></g></svg><figcaption>Twee lijnen kunnen evenwijdig lopen, elkaar snijden, of loodrecht op elkaar staan &mdash; loodrecht is een bijzonder geval van snijden.</figcaption></figure>`
+`<div class="box"><h4>Het rechtehoekteken</h4><p>Bij het snijpunt van loodrechte lijnen zie je <b>vier rechte hoeken</b>. Het <b>rechtehoekteken</b> zet je maar in <b>één</b> daarvan.</p></div>`
+`<h5 class="sub">Met je geodriehoek</h5>`
+`<div class="call reken"><b>Zo gebruik je je geodriehoek</b><ol class="num">
<li><b>Loodrecht</b> tekenen: gebruik de <b>loodlijn</b> op je geodriehoek.</li>
<li><b>Evenwijdig</b> tekenen: gebruik de <b>evenwijdige lijnen</b> op je geodriehoek.</li>
<li>Op een bepaalde <b>afstand</b>? Gebruik ook de <b>millimeterverdeling</b>.</li></ol></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Hoeveel rechte hoeken zie je bij het snijpunt van twee loodrechte lijnen?</p><p class="check-a"><b>Vier</b>. Het rechtehoekteken zet je in één ervan.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (5.1)</b><ul class="lst">
<li><b>Loodrechte</b> lijnen maken rechte hoeken (90&deg;).</li>
<li><b>Evenwijdige</b> lijnen snijden elkaar nooit.</li>
<li>Teken en controleer ze met je <b>geodriehoek</b>.</li></ul></div>`},

{heading:'5.2 Hoeken',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>wat een <b>hoek</b> is en hoe je hem opschrijft</li>
<li>de <b>soorten hoeken</b> en wat een <b>kijkhoek</b> is</li></ul></div>`
+`<h5 class="sub">Wat is een hoek?</h5>`
+`<div class="box"><h4>Benen en hoekpunt</h4><p>Een hoek heeft twee <b>benen</b>. Die beginnen in het <b>hoekpunt</b>. Hoe <b>lang</b> je de benen tekent, maakt <b>niet uit</b>: de hoek blijft even groot. Hoek A schrijf je kort als <b>&ang;A</b>.</p></div>`
+`<h5 class="sub">Soorten hoeken</h5>`
+`<div class="tblwrap"><table class="tbl"><tr><th>Soort hoek</th><th>Grootte</th></tr><tr><td><b>scherpe</b> hoek</td><td>kleiner dan 90&deg;</td></tr><tr><td><b>rechte</b> hoek</td><td>90&deg;</td></tr><tr><td><b>stompe</b> hoek</td><td>tussen 90&deg; en 180&deg;</td></tr><tr><td><b>gestrekte</b> hoek</td><td>180&deg;</td></tr><tr><td><b>inspringende</b> hoek</td><td>groter dan 180&deg;</td></tr><tr><td><b>volle</b> hoek</td><td>360&deg;</td></tr></table></div>`
+`<figure class='fig'><svg viewBox="0 0 340 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="De vier soorten hoeken: scherp, recht, stomp en gestrekt"><g stroke="var(--txt)" stroke-width="2" fill="none" stroke-linecap="round" opacity=".85"><path d="M20 92 H80"/><path d="M20 92 L66 58"/><path d="M110 92 H170"/><path d="M110 92 V44"/><path d="M200 92 H260"/><path d="M200 92 L166 52"/><path d="M280 92 H340"/></g><g stroke="var(--accent)" stroke-width="1.8" fill="none"><path d="M40 92 A 20 20 0 0 0 34 78"/><path d="M130 92 A 20 20 0 0 0 110 72"/><path d="M220 92 A 20 20 0 0 0 206 78"/><path d="M300 92 A 20 20 0 0 0 280 92"/></g><circle cx="20" cy="92" r="3" fill="var(--txt)"/><circle cx="110" cy="92" r="3" fill="var(--txt)"/><circle cx="200" cy="92" r="3" fill="var(--txt)"/><circle cx="280" cy="92" r="3" fill="var(--txt)"/><g fill="var(--txt)" font-size="10.5" font-weight="600" font-family="inherit" text-anchor="middle"><text x="48" y="118">scherpe hoek</text><text x="138" y="118">rechte hoek</text><text x="222" y="118">stompe hoek</text><text x="308" y="118">gestrekte hoek</text></g><g fill="var(--accent)" font-size="9.5" font-family="inherit" text-anchor="middle"><text x="48" y="134">kleiner dan 90&deg;</text><text x="138" y="134">precies 90&deg;</text><text x="222" y="134">tussen 90&deg; en 180&deg;</text><text x="308" y="134">precies 180&deg;</text></g></svg><figcaption>Je herkent een hoek aan zijn grootte. Het punt waar de twee benen samenkomen is het hoekpunt.</figcaption></figure>`
+`<div class="voorbeeld"><h4>Voorbeeld: de klok</h4><p>Helemaal rond is <b>360&deg;</b>. Een klok is verdeeld in 12 gelijke stukken. Hoe groot is één stuk?</p><div class="antwoord">360 : 12 = <b>30&deg;</b>.</div></div>`
+`<h5 class="sub">Kijkhoek</h5>`
+`<div class="box"><h4>Wat kun je zien?</h4><p>Teken vanaf het <b>midden van het hoofd</b> twee lijnen langs de randen van wat je kunt zien. Dat zijn de <b>kijklijnen</b>. De hoek ertussen is de <b>kijkhoek</b>. Alles binnen de kijkhoek kun je zien.</p></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Een hoek is 120&deg;. Wat voor hoek is dat?</p><p class="check-a">Tussen 90&deg; en 180&deg;: een <b>stompe hoek</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (5.2)</b><ul class="lst">
<li>Een hoek heeft twee <b>benen</b> en een <b>hoekpunt</b>. De lengte van de benen telt niet.</li>
<li>Rond is <b>360&deg;</b>.</li>
<li>Scherp &lt; 90&deg;, recht = 90&deg;, stomp &lt; 180&deg;, gestrekt = 180&deg;, inspringend &gt; 180&deg;, vol = 360&deg;.</li>
<li>De hoek tussen de <b>kijklijnen</b> is de <b>kijkhoek</b>.</li></ul></div>`},

{heading:'5.3 Hoeken meten',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>een hoek meten in <b>graden</b></li>
<li>de <b>koershoekmeter</b> goed gebruiken</li></ul></div>`
+`<h5 class="sub">De koershoekmeter</h5>`
+`<div class="box"><h4>360 graden</h4><p>Een hoek meet je in <b>graden</b>. Op de rand van de <b>koershoekmeter</b> staan <b>360 streepjes</b>. De bovenste schijf kan <b>draaien</b>. Eén keer helemaal rond is <b>360&deg;</b>.</p></div>`
+`<h5 class="sub">Stap voor stap</h5>`
+`<div class="call reken"><b>Zo meet je een hoek</b><ol class="num">
<li>Zet de koershoekmeter in de <b>beginstand</b>.</li>
<li>Leg het <b>midden</b> op het <b>hoekpunt</b>.</li>
<li>Leg de <b>noordpijl</b> op één been.</li>
<li>Draai de bovenste schijf naar het andere been. Je meet de hoek met het <b>boogje</b>.</li>
<li><b>Lees af</b> hoeveel graden het is.</li></ol></div>`
+`<div class="call warn"><b>Let op:</b> draai altijd <b>rechtsom</b>. Begin je op het verkeerde been? Dan meet je <b>niet</b> de hoek met het boogje.</div>`
+`<div class="call waarom">Waarom eerst de <b>beginstand</b>? Anders begint de schijf niet bij <b>0</b>, en lees je een verkeerd getal af.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Waar leg je het midden van de koershoekmeter?</p><p class="check-a">Op het <b>hoekpunt</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (5.3)</b><ul class="lst">
<li>Een hoek meet je in <b>graden</b> met de <b>koershoekmeter</b>.</li>
<li>Beginstand, midden op het <b>hoekpunt</b>, <b>noordpijl</b> op een been.</li>
<li>Draai altijd <b>rechtsom</b> en meet de hoek met het boogje.</li></ul></div>`},

{heading:'5.4 Hoeken tekenen',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>een hoek van een gegeven grootte <b>tekenen</b></li>
<li>de hoek goed <b>afmaken</b> met boogje en letter</li></ul></div>`
+`<h5 class="sub">Stap voor stap</h5>`
+`<div class="call reken"><b>Zo teken je een hoek</b><ol class="num">
<li>Maak op je <b>koershoekmeter</b> de hoek die je wilt tekenen.</li>
<li>Leg de koershoekmeter op je papier.</li>
<li>Zet een <b>punt</b> in het midden. Zet een <b>streepje</b> bij de 0 en een streepje bij je hoek.</li>
<li>Haal de koershoekmeter weg. Teken met je <b>liniaal</b> twee lijnen vanuit de punt naar de streepjes.</li>
<li>Teken een <b>boogje</b> in de hoek.</li>
<li>Zet bij het hoekpunt de goede <b>hoofdletter</b>.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: &ang;A = 130&deg;</h4><p>Teken een hoek van 130&deg; met hoekpunt A.</p><div class="antwoord">Draai de koershoekmeter op <b>130&deg;</b>. Zet een punt in het midden en streepjes bij <b>0</b> en <b>130&deg;</b>. Trek de lijnen, teken het boogje en zet er een <b>A</b> bij.</div></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Wat zet je aan het eind bij het hoekpunt?</p><p class="check-a">Een <b>boogje</b> in de hoek en de goede <b>hoofdletter</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (5.4)</b><ul class="lst">
<li>Zet eerst een <b>punt</b> en twee <b>streepjes</b> met de koershoekmeter.</li>
<li>Teken daarna de lijnen met je <b>liniaal</b>.</li>
<li>Vergeet het <b>boogje</b> en de <b>hoofdletter</b> niet.</li></ul></div>`}
],
terms:[
['loodrecht','Twee lijnen die elkaar snijden en samen een rechte hoek (90°) maken.',0],
['rechte hoek','Een hoek van precies 90°.',0],
['rechtehoekteken','Het teken (vierkantje) waarmee je een rechte hoek aangeeft.',0],
['snijpunt','Het punt waar twee lijnen elkaar kruisen.',0],
['evenwijdig','Twee lijnen die elkaar nooit snijden en overal even ver van elkaar blijven.',0],
['hoek','De ruimte tussen twee benen die in hetzelfde hoekpunt beginnen.',1],
['been (van een hoek)','Een van de twee lijnstukken die samen een hoek vormen.',-1],
['hoekpunt','Het punt waar de twee benen van een hoek samenkomen.',1],
['kijklijn','Een van de twee randlijnen van wat je kunt zien.',1],
['kijkhoek','Het gebied tussen de twee kijklijnen.',1],
['graden','De eenheid waarin je een hoek meet; helemaal rond is 360 graden.',1],
['scherpe hoek','Een hoek die kleiner is dan 90°.',1],
['stompe hoek','Een hoek die groter is dan 90° en kleiner dan 180°.',1],
['gestrekte hoek','Een hoek van precies 180°.',1],
['inspringende hoek','Een hoek die groter is dan 180°.',1],
['volle hoek','Een hoek van 360°, helemaal rond.',1],
['koershoekmeter','Een meetinstrument waarmee je hoeken kunt meten en tekenen.',2],
['noordpijl','De pijl op de koershoekmeter die je op een been van de hoek legt om te meten.',2]
],
cards:[
['Wanneer staan twee lijnen loodrecht op elkaar?','Als ze elkaar snijden en samen rechte hoeken (90°) maken.',0],
['Hoeveel rechte hoeken zie je bij een loodrecht snijpunt?','Vier.',0],
['Wat geldt voor evenwijdige lijnen?','Ze snijden elkaar nooit en blijven overal even ver van elkaar.',0],
['Waaruit bestaat een hoek?','Uit twee benen die beginnen in het hoekpunt.',1],
['Maakt de lengte van de benen de hoek groter?','Nee, de grootte van de hoek blijft gelijk, ongeacht de lengte van de benen.',1],
['Hoe schrijf je ‘hoek A’ kort op?','∠A.',-1],
['Hoeveel graden is helemaal rond?','360°.',2],
['Een klok is verdeeld in 12 gelijke hoeken. Hoeveel graden is elke hoek?','360 : 12 = 30°.',1],
['Hoe groot is een scherpe hoek?','Kleiner dan 90°.',1],
['Hoe groot is een stompe hoek?','Groter dan 90° en kleiner dan 180°.',1],
['Hoe groot is een gestrekte hoek?','Precies 180°.',1],
['Hoe groot is een volle hoek?','360°.',1],
['Waarmee meet je een hoek?','Met een koershoekmeter.',2],
['Wat is de eerste stap bij het meten van een hoek?','Zet de koershoekmeter in de beginstand en leg het midden op het hoekpunt.',2],
['Wat leg je op een been van de hoek als je een hoek meet?','De noordpijl van de koershoekmeter.',2],
['Wat teken je in de hoek nadat je hem hebt getekend met de koershoekmeter?','Een boogje, en de juiste hoofdletter bij het hoekpunt.',3]
],
quiz:[
['Wanneer staan twee lijnen loodrecht op elkaar?',['Als ze elkaar nooit snijden','Als ze elkaar snijden en rechte hoeken maken','Als ze allebei even lang zijn','Als ze parallel lopen'],1,'Loodrechte lijnen snijden elkaar en maken daarbij rechte hoeken van 90°.'],
['Hoeveel rechte hoeken ontstaan er bij een loodrecht snijpunt?',['1','2','4','8'],2,'Bij een loodrecht snijpunt ontstaan er altijd vier rechte hoeken.'],
['Wat is waar over evenwijdige lijnen?',['Ze snijden elkaar altijd','Ze snijden elkaar nooit','Ze maken samen een rechte hoek','Ze zijn altijd even lang'],1,'Evenwijdige lijnen snijden elkaar nooit en blijven overal even ver van elkaar.'],
['Waaruit bestaat een hoek?',['Uit één been','Uit twee benen die in het hoekpunt beginnen','Uit drie benen','Uit een cirkel'],1,'Een hoek bestaat uit twee benen die allebei beginnen in hetzelfde hoekpunt.'],
['Wat gebeurt er met de grootte van een hoek als je de benen langer tekent?',['De hoek wordt groter','De hoek wordt kleiner','De hoek blijft gelijk','Dat hangt van de kleur af'],2,'De lengte van de benen maakt niet uit; de grootte van de hoek blijft hetzelfde.'],
['Hoeveel graden is helemaal rond?',['90°','180°','270°','360°'],3,'Helemaal rond is altijd 360 graden.'],
['Hoe groot is een scherpe hoek?',['Groter dan 90°','Precies 90°','Kleiner dan 90°','180°'],2,'Een scherpe hoek is kleiner dan 90°.'],
['Hoe groot is een stompe hoek?',['Kleiner dan 90°','Groter dan 90° en kleiner dan 180°','Precies 180°','Groter dan 360°'],1,'Een stompe hoek is groter dan 90° maar kleiner dan 180°.'],
['Hoe heet een hoek van precies 180°?',['Scherpe hoek','Stompe hoek','Gestrekte hoek','Volle hoek'],2,'Een hoek van precies 180° heet een gestrekte hoek.'],
['Een klok is verdeeld in 12 gelijke hoeken. Hoe groot is elke hoek?',['12°','30°','60°','90°'],1,'360° gedeeld door 12 is 30° per hoek.'],
['Waarmee meet je de grootte van een hoek?',['Met een liniaal','Met een koershoekmeter','Met een verhoudingstabel','Met een passer'],1,'Je meet een hoek met een koershoekmeter.'],
['Wat leg je op een been van de hoek als je gaat meten?',['De rode lijn','De noordpijl','Het rechtehoekteken','De loodlijn'],1,'Je legt de noordpijl van de koershoekmeter op één been van de hoek.'],
['Wat teken je in een hoek nadat je hem met de koershoekmeter hebt getekend?',['Een pijl','Een boogje','Een kruisje','Een stippellijn'],1,'Na het tekenen van de twee lijnen teken je een boogje in de hoek en zet je de juiste hoofdletter bij het hoekpunt.']
]
});
