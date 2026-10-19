import { registerChapter } from '../../../registry.js';

/* Rebuilt 2026-09-24 to the recipe of Economie TL4 H1 (change 6). Checked
   against the book: the koershoekmeter and the passer (1.3), the kinds of
   trapezium (1.5) and "gebruik de eigenschappen" (1.6) were missing. The
   drawings are unchanged. Terms, cards and quiz unchanged. */
registerChapter('wiskunde|tl|2|1', {
title:'Vlakke figuren',
summary:[
{heading:'1.1 Namen van vlakke figuren',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>de namen van <b>vlakke figuren</b> kennen</li>
<li>de <b>tekens</b> in een tekening lezen: streepjes, pijltjes en het rechtehoekteken</li></ul></div>`
+`<div class="box"><h4>Waar dit hoofdstuk over gaat</h4><p>Je leert de namen van <b>driehoeken</b> en <b>vierhoeken</b>, je rekent <b>hoeken</b> uit en je tekent figuren op <b>ware grootte</b> met <b>koershoekmeter</b>, <b>geodriehoek</b> en <b>passer</b>.</p></div>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Vlakke figuur</h4><p>Ligt helemaal <b>plat</b>, zoals op papier.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Ruimtefiguur</h4><p>Heeft ook <b>diepte</b>, zoals een kubus of een bal.</p></div></div>`
+`<h5 class="sub">Figuren zonder hoeken</h5>`
+`<div class="box"><h4>Cirkel en ellips</h4><p>Een <b>cirkel</b> is rond: elk punt ligt even ver van het <b>middelpunt</b>. Hij heeft zoveel <b>symmetrieassen</b> dat je ze niet allemaal kunt tekenen. Een <b>ellips</b> is ovaal en heeft er maar <b>twee</b>.</p></div>`
+`<h5 class="sub">Driehoeken en vierhoeken</h5>`
+`<div class="g3">`
+`<div class="box"><h4>Driehoeken</h4><p><b>Gelijkzijdig</b>: drie gelijke zijden, drie hoeken van 60&deg;. <b>Gelijkbenig</b>: twee gelijke zijden. <b>Rechthoekig</b>: één hoek van 90&deg;.</p></div>`
+`<div class="box"><h4>Vierhoeken</h4><p><b>Vierkant</b>: vier gelijke zijden en vier rechte hoeken. <b>Rechthoek</b>: vier rechte hoeken. <b>Parallellogram</b>: twee paar evenwijdige zijden.</p></div>`
+`<div class="box"><h4>Meer vierhoeken</h4><p><b>Ruit</b>: vier gelijke zijden. <b>Vlieger</b>: twee paar gelijke zijden die naast elkaar liggen. <b>Trapezium</b>: één paar evenwijdige zijden.</p></div></div>`
+`<figure class='fig'><svg viewBox="0 0 330 235" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cirkel, ellips en de drie soorten driehoeken: gelijkzijdig, gelijkbenig en rechthoekig"><g fill="var(--accent)" fill-opacity=".16" stroke="var(--accent)" stroke-width="1.8" stroke-linejoin="round"><circle cx="55" cy="55" r="30"/><ellipse cx="165" cy="55" rx="36" ry="24"/><path d="M275 28 L249 78 L301 78 Z"/><path d="M110 136 L84 190 L136 190 Z"/><path d="M196 190 L256 190 L196 140 Z"/></g><g stroke="var(--txt)" stroke-width="1.6" opacity=".85" fill="none"><path d="M259 52 L266 56"/><path d="M291 52 L284 56"/><path d="M275 74 V82"/><path d="M101 166 L94 162"/><path d="M119 162 L126 166"/></g><polyline points="209,190 209,177 196,177" fill="none" stroke="var(--txt)" stroke-width="1.6" opacity=".85"/><g fill="var(--txt)" font-size="11" font-family="inherit" text-anchor="middle"><text x="55" y="104">cirkel</text><text x="165" y="104">ellips</text><text x="275" y="104">gelijkzijdig</text><text x="110" y="214">gelijkbenig</text><text x="226" y="214">rechthoekig</text></g><g fill="var(--mut)" font-size="9" font-family="inherit" text-anchor="middle"><text x="275" y="116">3 gelijke zijden</text><text x="110" y="226">2 gelijke zijden</text><text x="226" y="226">1 hoek van 90&deg;</text></g></svg><figcaption>Streepjes op een zijde betekenen: deze zijden zijn even lang.</figcaption></figure>`
+`<figure class='fig'><svg viewBox="0 0 330 235" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="De zes vierhoeken: vierkant, rechthoek, parallellogram, ruit, vlieger en trapezium"><g fill="var(--accent)" fill-opacity=".16" stroke="var(--accent)" stroke-width="1.8" stroke-linejoin="round"><rect x="30" y="30" width="52" height="52"/><rect x="130" y="37" width="72" height="38"/><path d="M249 80 L267 32 L307 32 L289 80 Z"/><path d="M55 132 L84 164 L55 196 L26 164 Z"/><path d="M165 130 L193 160 L165 198 L137 160 Z"/><path d="M247 190 L261 138 L297 138 L309 190 Z"/></g><g stroke="var(--txt)" stroke-width="1.6" opacity=".85" fill="none"><path d="M52 26 V34"/><path d="M60 26 V34"/><path d="M52 78 V86"/><path d="M60 78 V86"/><path d="M26 52 H34"/><path d="M26 60 H34"/><path d="M78 52 H86"/><path d="M78 60 H86"/><path d="M67 145 L73 151"/><path d="M67 183 L73 177"/><path d="M37 151 L43 145"/><path d="M37 177 L43 183"/><path d="M177 142 L183 148"/><path d="M147 148 L153 142"/><path d="M181 181 L175 187"/><path d="M149 181 L155 187"/></g><polyline points="43,30 43,43 30,43" fill="none" stroke="var(--txt)" stroke-width="1.6" opacity=".85"/><polyline points="143,37 143,50 130,50" fill="none" stroke="var(--txt)" stroke-width="1.6" opacity=".85"/><g stroke="var(--txt)" stroke-width="1.5" fill="none" opacity=".85"><path d="M283 51 L289 56 L283 61"/><path d="M273 51 L279 56 L273 61"/><path d="M262 56 L268 51"/><path d="M262 56 L268 61"/><path d="M279 138 L285 143"/><path d="M279 148 L285 143"/><path d="M275 190 L281 185"/><path d="M275 180 L281 185"/></g><g fill="var(--txt)" font-size="11" font-family="inherit" text-anchor="middle"><text x="55" y="104">vierkant</text><text x="165" y="104">rechthoek</text><text x="278" y="104">parallellogram</text><text x="55" y="216">ruit</text><text x="165" y="216">vlieger</text><text x="278" y="216">trapezium</text></g></svg><figcaption>Pijltjes betekenen: deze zijden lopen evenwijdig. Het hoekje in de hoek betekent 90&deg;. Zo lees je meteen af welke vierhoek je voor je hebt.</figcaption></figure>`
+`<h5 class="sub">De tekens in een tekening</h5>`
+`<div class="call reken"><b>Zo lees je een tekening</b><ol class="num">
<li><b>Streepjes</b> op zijden: die zijden zijn <b>even lang</b>.</li>
<li><b>Pijltjes</b> (&gt;&gt;) op zijden: die zijden zijn <b>evenwijdig</b>.</li>
<li>Een <b>hoekje</b> in de hoek: de hoek is <b>90&deg;</b>, een rechte hoek.</li></ol></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Hoe zie je in een tekening dat zijden evenwijdig zijn?</p><p class="check-a">Aan gelijke <b>pijltjes</b> (&gt;&gt;) op de zijden.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (1.1)</b><ul class="lst">
<li><b>Cirkel</b> en <b>ellips</b> hebben geen hoeken.</li>
<li>Ken de drie <b>driehoeken</b> en de zes <b>vierhoeken</b> uit je hoofd.</li>
<li><b>Streepjes</b> = even lang, <b>pijltjes</b> = evenwijdig, <b>hoekje</b> = 90&deg;.</li></ul></div>`},

{heading:'1.2 Hoeken berekenen in driehoeken',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>de <b>derde hoek</b> van een driehoek berekenen</li>
<li><b>symmetrie</b> gebruiken bij het berekenen van hoeken</li></ul></div>`
+`<h5 class="sub">De hoekensom</h5>`
+`<div class="box"><h4>Altijd 180&deg;</h4><p>In <b>elke driehoek</b> zijn de drie hoeken samen <b>180&deg;</b>. Dat heet de <b>hoekensom van een driehoek</b>. Weet je <b>twee hoeken</b>, dan kun je de <b>derde</b> berekenen.</p></div>`
+`<div class="call reken"><b>Stappenplan: de derde hoek</b><ol class="num">
<li>Tel de twee <b>bekende hoeken</b> op.</li>
<li>Trek de uitkomst af van <b>180&deg;</b>.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: derde hoek berekenen</h4><p>In driehoek ABC is <b>&ang;A = 52&deg;</b> en <b>&ang;B = 71&deg;</b>. Bereken &ang;C.</p><div class="antwoord">52&deg; + 71&deg; = 123&deg;. Dan &ang;C = 180&deg; &minus; 123&deg; = <b>57&deg;</b>.</div></div>`
+`<h5 class="sub">Symmetrie helpt</h5>`
+`<div class="box"><h4>Gelijke hoeken</h4><p>In een <b>gelijkbenige driehoek</b> zijn de twee <b>hoeken bij de basis</b> even groot. In een <b>gelijkzijdige driehoek</b> zijn alle hoeken <b>60&deg;</b>, want 180&deg; : 3 = 60&deg;.</p></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: een gelijkbenige driehoek</h4><p>De tophoek van een gelijkbenige driehoek is <b>40&deg;</b>. Hoe groot zijn de twee andere hoeken?</p><div class="antwoord">180&deg; &minus; 40&deg; = 140&deg;. De twee basishoeken zijn gelijk: 140&deg; : 2 = <b>70&deg;</b> elk.</div></div>`
+`<div class="call waarom">Waarom mag je delen door 2? Een gelijkbenige driehoek is <b>symmetrisch</b>: vouw je hem dubbel, dan vallen de twee basishoeken <b>precies op elkaar</b>.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Hoe bereken je de ontbrekende hoek in een driehoek als je de andere twee weet?</p><p class="check-a">Tel de twee bekende hoeken op en trek de uitkomst af van <b>180&deg;</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (1.2)</b><ul class="lst">
<li><b>&ang;A + &ang;B + &ang;C = 180&deg;</b> in elke driehoek.</li>
<li><b>Gelijkbenig</b>: de twee basishoeken zijn gelijk.</li>
<li><b>Gelijkzijdig</b>: alle hoeken 60&deg;.</li></ul></div>`},

{heading:'1.3 Driehoeken tekenen',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>een driehoek op <b>ware grootte</b> tekenen met een <b>koershoekmeter</b></li>
<li>een driehoek tekenen met een <b>passer</b> als je de <b>drie zijden</b> weet</li></ul></div>`
+`<h5 class="sub">Eerst een schets</h5>`
+`<div class="box"><h4>Ware grootte</h4><p>Op <b>ware grootte</b> betekent: met de <b>echte maten</b>. Begin altijd met een <b>schets</b> en zet alles wat je weet erbij. Daarna kies je in welke <b>volgorde</b> je de zijden en hoeken tekent.</p></div>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Eén zijde en twee hoeken</h4><p>Hoeken zet je af met de <b>koershoekmeter</b> (of je <b>geodriehoek</b>).</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Drie zijden</h4><p>Je gebruikt een <b>passer</b>: twee <b>cirkelbogen</b> geven het laatste hoekpunt.</p></div></div>`
+`<h5 class="sub">Met de koershoekmeter</h5>`
+`<div class="voorbeeld"><h4>Voorbeeld: AB = 4 cm, &ang;A = 51&deg;, &ang;B = 43&deg;</h4><p>Teken driehoek ABC op ware grootte.</p><div class="antwoord">Maak een <b>schets</b>. Teken <b>AB = 4 cm</b>. Zet in A een hoek van <b>51&deg;</b> af en in B een hoek van <b>43&deg;</b>. Waar de <b>benen</b> elkaar snijden, zet je de letter <b>C</b>.</div></div>`
+`<h5 class="sub">Met de passer</h5>`
+`<div class="call reken"><b>Stappenplan: drie zijden gegeven</b><ol class="num">
<li>Maak een <b>schets</b> met alle maten erbij.</li>
<li>Teken de <b>eerste zijde</b>, bijvoorbeeld AB.</li>
<li>Zet de passer op <b>A</b> met de lengte van <b>AC</b> en teken een stukje <b>cirkel</b>.</li>
<li>Zet de passer op <b>B</b> met de lengte van <b>BC</b> en teken weer een stukje cirkel.</li>
<li>Het <b>snijpunt</b> is C. Teken AC en BC.</li></ol></div>`
+`<div class="voorbeeld"><h4>Voorbeeld: AB = 1,5 cm, BC = 2 cm, AC = 3 cm</h4><p>Teken driehoek ABC op ware grootte.</p><div class="antwoord">Teken <b>AB = 1,5 cm</b>. Cirkelboog om <b>A</b> met straal <b>3 cm</b>, cirkelboog om <b>B</b> met straal <b>2 cm</b>. Het snijpunt is <b>C</b>.</div></div>`
+`<div class="call warn"><b>Werk nauwkeurig.</b> Een paar millimeter of een halve graad fout geeft al een scheve tekening. Teken alleen het <b>stukje cirkel</b> dat je nodig hebt.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Welk instrument gebruik je als je van een driehoek de drie zijden weet?</p><p class="check-a">Een <b>passer</b>: twee cirkelbogen snijden elkaar in het laatste hoekpunt.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (1.3)</b><ul class="lst">
<li>Begin altijd met een <b>schets</b>.</li>
<li>Hoeken afzetten: <b>koershoekmeter</b> of <b>geodriehoek</b>.</li>
<li>Drie zijden: <b>passer</b>, het snijpunt is het laatste hoekpunt.</li></ul></div>`},

{heading:'1.4 Parallellogram en ruit tekenen',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>de <b>eigenschappen</b> van een <b>parallellogram</b> en een <b>ruit</b></li>
<li>een parallellogram en een ruit <b>tekenen</b></li></ul></div>`
+`<h5 class="sub">Parallellogram</h5>`
+`<div class="box"><h4>Twee paar evenwijdige zijden</h4><p>In vierhoek ABCD is <b>AB // CD</b> en <b>AD // BC</b>. Het teken <b>//</b> betekent <b>evenwijdig</b>. Een ander woord daarvoor is <b>parallel</b>: daar komt de naam <b>parallellogram</b> vandaan.</p></div>`
+`<div class="call reken"><b>Eigenschappen van een parallellogram</b><ol class="num">
<li>De <b>overstaande zijden</b> zijn evenwijdig.</li>
<li>De overstaande zijden zijn <b>even lang</b>.</li>
<li>De <b>overstaande hoeken</b> zijn even groot.</li>
<li>De <b>diagonalen</b> delen elkaar <b>middendoor</b>.</li></ol></div>`
+`<figure class='fig'><svg viewBox="0 0 340 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Drie stappen om een parallellogram te tekenen: eerst een zijde, dan de hoek met de geodriehoek, dan de twee andere zijden evenwijdig"><g fill="var(--mut)" font-size="10" font-weight="600" font-family="inherit"><text x="14" y="26">1</text><text x="124" y="26">2</text><text x="232" y="26">3</text></g><g stroke="var(--txt)" stroke-width="2" fill="none" stroke-linecap="round" opacity=".85"><path d="M25 120 H95"/><path d="M135 120 H205"/><path d="M135 120 L165 76"/></g><path d="M152 120 A 17 17 0 0 0 148 106" fill="none" stroke="var(--accent)" stroke-width="1.5"/><text x="158" y="112" fill="var(--accent)" font-size="9" font-family="inherit">hoek</text><g stroke="var(--txt)" stroke-width="2" fill="none" stroke-linecap="round" opacity=".85"><path d="M238 120 H303"/><path d="M238 120 L268 76"/></g><g stroke="var(--accent)" stroke-width="2" fill="none" stroke-linecap="round" stroke-dasharray="5 4"><path d="M303 120 L333 76"/><path d="M268 76 H333"/></g><g stroke="var(--txt)" stroke-width="1.4" fill="none" opacity=".8"><path d="M268 122 L273 117"/><path d="M268 128 L273 123"/><path d="M298 74 L303 69"/><path d="M298 80 L303 75"/></g><g fill="var(--mut)" font-size="9" font-family="inherit" text-anchor="middle"><text x="60" y="146">zijde tekenen</text><text x="170" y="146">hoek afzetten</text><text x="285" y="146">evenwijdig sluiten</text></g></svg><figcaption>Een parallellogram: begin met &eacute;&eacute;n zijde, zet de hoek af met de geodriehoek, en maak de twee overstaande zijden evenwijdig en even lang.</figcaption></figure>`
+`<h5 class="sub">Ruit</h5>`
+`<div class="box"><h4>Een bijzonder parallellogram</h4><p>Een <b>ruit</b> is een parallellogram waarvan <b>alle vier de zijden</b> even lang zijn. Alles wat voor een parallellogram geldt, geldt dus <b>ook</b> voor een ruit. Daarbij komt: de <b>diagonalen</b> zijn de <b>symmetrieassen</b>, ze staan <b>loodrecht</b> op elkaar en ze delen de hoeken <b>middendoor</b>.</p></div>`
+`<figure class='fig'><svg viewBox="0 0 340 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Een ruit tekenen met de passer: alle vier de zijden krijgen dezelfde lengte"><g fill="var(--mut)" font-size="10" font-weight="600" font-family="inherit"><text x="14" y="26">1</text><text x="124" y="26">2</text><text x="234" y="26">3</text></g><g stroke="var(--txt)" stroke-width="2" fill="none" stroke-linecap="round" opacity=".85"><path d="M25 128 H83"/><path d="M135 128 H193"/><path d="M135 128 L164 78"/></g><path d="M188 82 A 58 58 0 0 0 158 71" fill="none" stroke="var(--accent)" stroke-width="1.4" stroke-dasharray="4 3"/><text x="196" y="70" fill="var(--accent)" font-size="9" font-family="inherit">passer</text><g stroke="var(--txt)" stroke-width="2" fill="none" stroke-linecap="round" opacity=".85"><path d="M245 128 H303"/><path d="M245 128 L274 78"/></g><g stroke="var(--accent)" stroke-width="2" fill="none" stroke-linecap="round"><path d="M303 128 L332 78"/><path d="M274 78 H332"/></g><g stroke="var(--txt)" stroke-width="1.4" fill="none" opacity=".8"><path d="M271 106 L277 102"/><path d="M300 102 L306 106"/><path d="M271 130 V136"/><path d="M300 74 V80"/></g><g fill="var(--mut)" font-size="9" font-family="inherit" text-anchor="middle"><text x="54" y="156">zijde tekenen</text><text x="164" y="156">zelfde afstand</text><text x="288" y="156">vier gelijke zijden</text></g></svg><figcaption>Bij een ruit zijn alle vier de zijden even lang, dus je houdt de passer steeds op dezelfde opening staan.</figcaption></figure>`
+`<div class="vergelijk"><div class="vergelijk-kant"><h4>Parallellogram</h4><p><b>Overstaande</b> zijden even lang.</p></div><div class="vergelijk-vs">vs</div><div class="vergelijk-kant"><h4>Ruit</h4><p><b>Alle vier</b> de zijden even lang.</p></div></div>`
+`<div class="call warn"><b>Let op:</b> de diagonalen van een ruit staan loodrecht op elkaar, maar ze zijn <b>niet</b> per se even lang.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Wat weet je van de diagonalen van een ruit?</p><p class="check-a">Ze staan <b>loodrecht</b> op elkaar en delen elkaar <b>middendoor</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (1.4)</b><ul class="lst">
<li><b>//</b> betekent evenwijdig (parallel).</li>
<li><b>Parallellogram</b>: overstaande zijden evenwijdig en even lang, overstaande hoeken gelijk.</li>
<li><b>Ruit</b>: vier gelijke zijden, diagonalen loodrecht en symmetrieassen.</li></ul></div>`},

{heading:'1.5 Vlieger en trapezium tekenen',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>de <b>eigenschappen</b> van een <b>vlieger</b> en een <b>trapezium</b></li>
<li>het verschil tussen een <b>rechthoekig</b> en een <b>gelijkbenig trapezium</b></li></ul></div>`
+`<h5 class="sub">Vlieger</h5>`
+`<div class="call reken"><b>Eigenschappen van een vlieger</b><ol class="num">
<li><b>Eén diagonaal</b> is de symmetrieas.</li>
<li>De diagonalen staan <b>loodrecht</b> op elkaar.</li>
<li><b>Twee paar</b> zijden die naast elkaar liggen zijn even lang.</li>
<li><b>Twee hoeken</b> zijn even groot; de symmetrieas deelt de twee andere hoeken middendoor.</li></ol></div>`
+`<div class="box"><h4>Vlieger tekenen</h4><p>Teken eerst de <b>symmetrieas</b>. Zet daarna aan <b>beide kanten</b> dezelfde lengtes en hoeken af.</p></div>`
+`<h5 class="sub">Trapezium</h5>`
+`<div class="g3">`
+`<div class="box"><h4>Trapezium</h4><p><b>Twee zijden</b> zijn evenwijdig.</p></div>`
+`<div class="box"><h4>Rechthoekig</h4><p>Twee zijden evenwijdig en <b>twee rechte hoeken</b>.</p></div>`
+`<div class="box"><h4>Gelijkbenig</h4><p>Twee zijden evenwijdig, de twee andere <b>even lang</b>. Eén <b>symmetrieas</b>; de hoeken zijn <b>twee aan twee</b> gelijk.</p></div></div>`
+`<div class="box"><h4>Trapezium tekenen</h4><p>Teken eerst de <b>langste evenwijdige zijde</b>. Zet de hoeken af en teken de andere evenwijdige zijde erboven, in <b>dezelfde richting</b>.</p></div>`
+`<div class="call warn"><b>Veelgemaakte fout:</b> bij een trapezium hoeft maar <b>één paar</b> zijden evenwijdig te zijn. Zijn het <b>twee paar</b>, dan heet de figuur een <b>parallellogram</b>.</div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Hoeveel paar evenwijdige zijden heeft een trapezium?</p><p class="check-a"><b>Eén paar</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (1.5)</b><ul class="lst">
<li><b>Vlieger</b>: één diagonaal is symmetrieas, diagonalen loodrecht.</li>
<li><b>Trapezium</b>: één paar evenwijdige zijden.</li>
<li><b>Rechthoekig</b> trapezium: twee rechte hoeken. <b>Gelijkbenig</b>: twee gelijke zijden en een symmetrieas.</li></ul></div>`},

{heading:'1.6 Hoeken berekenen in vierhoeken',html:
`<div class="leerdoelen"><b>Dit leer je</b><ul class="lst">
<li>de <b>vierde hoek</b> van een vierhoek berekenen</li>
<li>de <b>eigenschappen</b> van vierhoeken gebruiken bij het rekenen</li></ul></div>`
+`<h5 class="sub">De hoekensom</h5>`
+`<div class="box"><h4>Altijd 360&deg;</h4><p>In <b>elke vierhoek</b> zijn de vier hoeken samen <b>360&deg;</b>: de <b>hoekensom van een vierhoek</b>. Weet je <b>drie hoeken</b>, dan kun je de <b>vierde</b> berekenen.</p></div>`
+`<div class="call waarom">Waarom 360&deg;? Met één <b>diagonaal</b> verdeel je elke vierhoek in <b>twee driehoeken</b>. Elke driehoek is 180&deg;, samen <b>2 &times; 180&deg; = 360&deg;</b>.</div>`
+`<div class="voorbeeld"><h4>Voorbeeld: ontbrekende hoek</h4><p>Van vierhoek PQRS is <b>&ang;P = 80&deg;</b>, <b>&ang;Q = 95&deg;</b> en <b>&ang;R = 110&deg;</b>. Bereken &ang;S.</p><div class="antwoord">80&deg; + 95&deg; + 110&deg; = 285&deg;. Dan &ang;S = 360&deg; &minus; 285&deg; = <b>75&deg;</b>.</div></div>`
+`<h5 class="sub">Eigenschappen gebruiken</h5>`
+`<div class="voorbeeld"><h4>Voorbeeld: een parallellogram</h4><p>In parallellogram EFGH is <b>&ang;E = 70&deg;</b>. Bereken de andere hoeken.</p><div class="antwoord"><b>Overstaande hoeken</b> zijn gelijk, dus &ang;G = <b>70&deg;</b>. Voor &ang;F en &ang;H blijft over: 360&deg; &minus; 140&deg; = 220&deg;, dus elk 220&deg; : 2 = <b>110&deg;</b>.</div></div>`
+`<div class="check" onclick="toonCheck(this)"><p class="check-v">Hoeveel graden is de hoekensom van een vierhoek?</p><p class="check-a"><b>360&deg;</b>.</p><span class="check-hint">Tik voor het antwoord</span></div>`
+`<div class="call sum"><b>Om te onthouden (1.6)</b><ul class="lst">
<li>Hoekensom <b>driehoek: 180&deg;</b>, <b>vierhoek: 360&deg;</b>.</li>
<li>Gebruik de <b>eigenschappen</b>: overstaande hoeken, symmetrie, rechte hoeken.</li>
<li>In een <b>rechthoek</b> en een <b>vierkant</b> zijn alle hoeken 90&deg;.</li></ul></div>`}
],
terms:[
['Cirkel','Vlakke figuur waarvan elk punt dezelfde afstand tot het middelpunt heeft.',0],
['Ellips','Ovale vlakke figuur met twee symmetrieassen.',0],
['Gelijkzijdige driehoek','Driehoek met drie gelijke zijden en drie hoeken van 60°.',0],
['Gelijkbenige driehoek','Driehoek met twee gelijke zijden en twee gelijke hoeken.',0],
['Parallellogram','Vierhoek met twee paar evenwijdige, even lange zijden.',3],
['Ruit','Vierhoek met vier gelijke zijden en loodrechte diagonalen.',3],
['Vlieger','Vierhoek met twee paar gelijke, naast elkaar liggende zijden.',4],
['Trapezium','Vierhoek met precies één paar evenwijdige zijden.',4],
['Hoekensom','De som van alle hoeken in een figuur; 180° bij een driehoek, 360° bij een vierhoek.',5],
['Symmetrieas','Een lijn waarlangs je een figuur kunt vouwen zodat beide helften precies op elkaar passen.',0],
['Diagonaal','Een lijnstuk dat twee niet-naast-elkaar-liggende hoekpunten van een vierhoek verbindt.',5],
['Evenwijdig','Twee lijnen die dezelfde richting hebben en elkaar nooit snijden.',0],
['Geodriehoek','Tekeninstrument waarmee je hoeken kunt aftekenen en meten en rechte lijnen kunt tekenen.',2],
['Rechthoekige driehoek','Driehoek met één hoek van precies 90°.',0]
],
cards:[
['Hoeveel graden is de hoekensom van een driehoek?','180°.',1],
['Hoeveel graden is de hoekensom van een vierhoek?','360°.',5],
['Wat is het verschil tussen een parallellogram en een ruit?','Bij een parallellogram zijn overstaande zijden gelijk; bij een ruit zijn alle vier de zijden gelijk.',3],
['Hoeveel paar evenwijdige zijden heeft een trapezium?','Precies één paar.',4],
['Hoe herken je gelijke zijden in een tekening?','Aan gelijke streepjes op de zijden.',0],
['Hoe herken je evenwijdige zijden in een tekening?','Aan gelijke pijltjes (>>) op de zijden.',0],
['Hoeveel symmetrieassen heeft een gelijkzijdige driehoek?','Drie.',0],
['Welke hoek heeft een rechthoekige driehoek altijd?','Een hoek van 90°.',0],
['Wat is een diagonaal?','Een lijnstuk dat twee hoekpunten van een vierhoek verbindt die niet naast elkaar liggen.',5],
['Hoe bereken je de ontbrekende hoek in een driehoek als je de andere twee weet?','Tel de twee bekende hoeken op en trek de uitkomst af van 180°.',1],
['Waaraan zijn de twee diagonalen van een ruit gelijk?','Ze staan loodrecht op elkaar en delen elkaar middendoor.',3],
['Wat is bijzonder aan de hoeken bij de basis van een gelijkbenige driehoek?','Die twee hoeken zijn even groot.',1]
],
quiz:[
['Hoeveel graden is de hoekensom van een driehoek?',['90°','180°','270°','360°'],1,'De drie hoeken van elke driehoek samen zijn altijd 180°.'],
['Hoeveel graden is de hoekensom van een vierhoek?',['180°','270°','360°','450°'],2,'De vier hoeken van elke vierhoek samen zijn altijd 360°.'],
['In driehoek ABC is hoek A = 40° en hoek B = 65°. Hoe groot is hoek C?',['75°','85°','95°','105°'],0,'180° − 40° − 65° = 75°.'],
['Welke vierhoek heeft vier gelijke zijden, maar niet per se rechte hoeken?',['Rechthoek','Vierkant','Ruit','Trapezium'],2,'Een ruit heeft vier gelijke zijden; de hoeken hoeven geen 90° te zijn.'],
['Hoeveel paar evenwijdige zijden heeft een parallellogram?',['Geen','Eén paar','Twee paar','Drie paar'],2,'Een parallellogram heeft twee paar evenwijdige zijden.'],
['Hoeveel paar evenwijdige zijden heeft een trapezium?',['Geen','Eén paar','Twee paar','Vier paar'],1,'Een trapezium heeft precies één paar evenwijdige zijden.'],
['Wat is kenmerkend voor een vlieger?',['Vier gelijke zijden','Twee paar naast elkaar liggende gelijke zijden','Eén paar evenwijdige zijden','Alle hoeken zijn 90°'],1,'Een vlieger heeft twee paar gelijke zijden die naast elkaar liggen.'],
['Welk instrument gebruik je vooral om hoeken nauwkeurig af te tekenen?',['Liniaal','Geodriehoek','Rekenmachine','Passer'],1,'Met een geodriehoek zet je hoeken af en teken je rechte lijnen.'],
['Van vierhoek PQRS is hoek P = 90°, hoek Q = 90° en hoek R = 90°. Hoe groot is hoek S?',['45°','60°','90°','180°'],2,'360° − 90° − 90° − 90° = 90°.'],
['Een driehoek heeft twee gelijke zijden. Hoe heet zo\'n driehoek?',['Gelijkzijdig','Gelijkbenig','Rechthoekig','Stomphoekig'],1,'Een driehoek met twee gelijke zijden heet gelijkbenig.'],
['Hoeveel graden zijn de hoeken van een gelijkzijdige driehoek elk?',['45°','60°','90°','120°'],1,'Bij een gelijkzijdige driehoek zijn alle hoeken gelijk: 180° : 3 = 60°.'],
['Hoe herken je een rechte hoek in een tekening?',['Aan een pijltje','Aan een streepje','Aan een rechthoektekentje','Aan een rondje'],2,'Een rechte hoek van 90° wordt in tekeningen aangegeven met een klein vierkantje in de hoek.'],
['Wat kun je zeggen over de diagonalen van een ruit?',['Ze zijn altijd even lang','Ze staan loodrecht op elkaar','Ze zijn evenwijdig','Ze snijden elkaar niet'],1,'De diagonalen van een ruit staan loodrecht op elkaar en delen elkaar middendoor.'],
['Welke figuur heeft géén hoeken?',['Trapezium','Vlieger','Cirkel','Ruit'],2,'Een cirkel is een ronde figuur zonder hoeken.'],
['In driehoek KLM is hoek K = 90°. Hoek L en hoek M zijn even groot. Hoe groot is hoek L?',['30°','45°','60°','90°'],1,'180° − 90° = 90°, verdeeld over twee gelijke hoeken: 90° : 2 = 45°.'],
['Waarom is de hoekensom van een vierhoek 360°?',['Omdat een vierhoek altijd een vierkant is','Omdat je een vierhoek met een diagonaal in twee driehoeken van 180° kunt verdelen','Omdat alle hoeken van een vierhoek 90° zijn','Dat is gewoon een afspraak'],1,'Een diagonaal verdeelt de vierhoek in twee driehoeken van elk 180°, samen 360°.']
]
});
