import { registerChapter } from '../../../registry.js';

registerChapter('wiskunde|bbl|1|5', {
title:'Lijnen en hoeken',
summary:[
{heading:'5.1 Lijnen',html:'<div class="g2"><div class="box"><h4>Loodrechte lijnen</h4><p>Twee lijnen die elkaar snijden en <b>loodrecht</b> op elkaar staan, maken <b>rechte hoeken</b> (90°). Dat controleer je met je geodriehoek. Bij het snijpunt zie je vier rechte hoeken; het <b>rechtehoekteken</b> zet je in één daarvan.</p></div><div class="box"><h4>Evenwijdige lijnen</h4><p><b>Evenwijdige lijnen</b> snijden elkaar nooit; ze blijven overal even ver van elkaar af. Met de evenwijdige lijnen op je geodriehoek kun je zelf evenwijdige lijnen tekenen.</p></div></div><div class="call">Met de loodlijn op je geodriehoek teken je lijnen die loodrecht op elkaar staan.</div><div class="call sum"><b>Om te onthouden (5.1)</b><ul class="lst"><li>Loodrechte lijnen snijden elkaar en maken rechte hoeken (90°).</li><li>Evenwijdige lijnen snijden elkaar nooit.</li><li>Gebruik je geodriehoek om loodrechte of evenwijdige lijnen te tekenen of te controleren.</li></ul></div>'},
{heading:'5.2 Hoeken',html:'<div class="box"><h4>Wat is een hoek?</h4><p>Een hoek heeft twee <b>benen</b> die beginnen in het <b>hoekpunt</b>. Hoe lang je de benen tekent maakt niet uit: de hoek blijft even groot. Je schrijft ‘hoek A’ kort als ‘∠A’.</p></div><div class="box"><h4>Kijkhoek</h4><p>De twee randlijnen van wat je kunt zien heten <b>kijklijnen</b>. Het gebied ertussen is je <b>kijkhoek</b>.</p></div><div class="box"><h4>Soorten hoeken</h4><p>Helemaal rond is 360° (een klok is bijvoorbeeld verdeeld in 12 gelijke hoeken van 360 : 12 = 30° elk).</p><div class="tblwrap" style="margin-top:.6rem"><table class="tbl"><tr><th>Soort hoek</th><th>Grootte</th></tr><tr><td>scherpe hoek</td><td>kleiner dan 90°</td></tr><tr><td>rechte hoek</td><td>90°</td></tr><tr><td>stompe hoek</td><td>groter dan 90°, kleiner dan 180°</td></tr><tr><td>gestrekte hoek</td><td>180°</td></tr><tr><td>inspringende hoek</td><td>groter dan 180°</td></tr><tr><td>volle hoek</td><td>360°</td></tr></table></div></div><div class="call sum"><b>Om te onthouden (5.2)</b><ul class="lst"><li>Een hoek heeft twee benen die in het hoekpunt beginnen; de lengte van de benen maakt niet uit.</li><li>Rond is 360°.</li><li>Soorten hoeken: scherp (&lt; 90°), recht (90°), stomp (&gt; 90°), gestrekt (180°), inspringend (&gt; 180°), vol (360°).</li></ul></div><figure class=\'fig\'><svg viewBox="0 0 340 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="De vier soorten hoeken: scherp, recht, stomp en gestrekt"><g stroke="var(--txt)" stroke-width="2" fill="none" stroke-linecap="round" opacity=".85"><path d="M20 92 H80"/><path d="M20 92 L66 58"/><path d="M110 92 H170"/><path d="M110 92 V44"/><path d="M200 92 H260"/><path d="M200 92 L166 52"/><path d="M280 92 H340"/></g><g stroke="var(--accent)" stroke-width="1.8" fill="none"><path d="M40 92 A 20 20 0 0 0 34 78"/><path d="M130 92 A 20 20 0 0 0 110 72"/><path d="M220 92 A 20 20 0 0 0 206 78"/><path d="M300 92 A 20 20 0 0 0 280 92"/></g><circle cx="20" cy="92" r="3" fill="var(--txt)"/><circle cx="110" cy="92" r="3" fill="var(--txt)"/><circle cx="200" cy="92" r="3" fill="var(--txt)"/><circle cx="280" cy="92" r="3" fill="var(--txt)"/><g fill="var(--txt)" font-size="10.5" font-weight="600" font-family="inherit" text-anchor="middle"><text x="48" y="118">scherpe hoek</text><text x="138" y="118">rechte hoek</text><text x="222" y="118">stompe hoek</text><text x="308" y="118">gestrekte hoek</text></g><g fill="var(--accent)" font-size="9.5" font-family="inherit" text-anchor="middle"><text x="48" y="134">kleiner dan 90&deg;</text><text x="138" y="134">precies 90&deg;</text><text x="222" y="134">tussen 90&deg; en 180&deg;</text><text x="308" y="134">precies 180&deg;</text></g></svg><figcaption>Je herkent een hoek aan zijn grootte. Het punt waar de twee benen samenkomen is het hoekpunt.</figcaption></figure><figure class=\'fig\'><svg viewBox="0 0 340 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Evenwijdige lijnen, snijdende lijnen en loodrechte lijnen"><g stroke="var(--txt)" stroke-width="2" fill="none" stroke-linecap="round" opacity=".85"><path d="M20 42 H100"/><path d="M20 72 H100"/><path d="M130 30 L210 78"/><path d="M130 74 L210 34"/><path d="M240 78 H320"/><path d="M280 24 V78"/></g><g stroke="var(--txt)" stroke-width="1.4" fill="none" opacity=".8"><path d="M56 38 L62 42 L56 46"/><path d="M56 68 L62 72 L56 76"/></g><circle cx="170" cy="54" r="3.5" fill="#e2564f"/><polyline points="292,78 292,66 280,66" fill="none" stroke="var(--accent)" stroke-width="1.7"/><g fill="var(--txt)" font-size="10.5" font-weight="600" font-family="inherit" text-anchor="middle"><text x="60" y="104">evenwijdig</text><text x="170" y="104">snijdend</text><text x="280" y="104">loodrecht</text></g><g fill="var(--mut)" font-size="9" font-family="inherit" text-anchor="middle"><text x="60" y="118">raken elkaar nooit</text><text x="170" y="118">snijpunt</text><text x="280" y="118">hoek van 90&deg;</text></g></svg><figcaption>Twee lijnen kunnen evenwijdig lopen, elkaar snijden, of loodrecht op elkaar staan &mdash; loodrecht is een bijzonder geval van snijden.</figcaption></figure>'},
{heading:'5.3 Hoeken meten',html:'<div class="box"><h4>Een hoek meten met de koershoekmeter</h4><ol class="num"><li>Zet je koershoekmeter in de beginstand.</li><li>Leg het midden van de koershoekmeter op het hoekpunt.</li><li>Leg de noordpijl op één been van de hoek.</li><li>Draai de bovenste schijf naar het andere been (je meet de hoek met het boogje).</li><li>Lees af hoeveel graden de hoek is.</li></ol></div><div class="call warn"><b>Let op:</b> draai altijd dezelfde kant op (rechtsom) en lees pas af als de noordpijl precies op het eerste been ligt, anders klopt de gemeten hoek niet.</div><div class="call sum"><b>Om te onthouden (5.3)</b><ul class="lst"><li>Je meet een hoek met de koershoekmeter: midden op het hoekpunt, noordpijl op een been, aflezen bij het andere been.</li></ul></div>'},
{heading:'5.4 Hoeken tekenen',html:'<div class="box"><h4>Een hoek tekenen met de koershoekmeter</h4><ol class="num"><li>Maak op de koershoekmeter de hoek die je wilt tekenen.</li><li>Leg de koershoekmeter op je papier.</li><li>Zet een punt in het midden, en een streepje bij de zwarte lijn en bij de rode lijn.</li><li>Teken met je liniaal twee lijnen vanuit de punt naar de streepjes.</li><li>Teken een boogje in de getekende hoek.</li><li>Zet bij het hoekpunt de juiste hoofdletter.</li></ol></div><div class="call sum"><b>Om te onthouden (5.4)</b><ul class="lst"><li>Zet eerst een punt en twee streepjes met de koershoekmeter, teken daarna pas de lijnen met je liniaal.</li><li>Vergeet het boogje en de hoofdletter bij het hoekpunt niet.</li></ul></div>'}
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
