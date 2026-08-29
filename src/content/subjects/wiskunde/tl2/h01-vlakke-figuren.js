import { registerChapter } from '../../../registry.js';

registerChapter('wiskunde|tl|2|1', {
title:'Vlakke figuren',
summary:[
{heading:'Namen van vlakke figuren',html:'<div class=\'box\'><h4>Waar gaat dit hoofdstuk over?</h4><p>In dit hoofdstuk herhaal en verdiep je wat je weet over vlakke figuren: platte figuren zoals driehoeken, vierhoeken en cirkels. Je leert hoeken in driehoeken en vierhoeken berekenen, en je leert verschillende soorten driehoeken en vierhoeken nauwkeurig tekenen met geodriehoek en passer.</p></div><div class=\'call\'>Een vlakke figuur ligt helemaal plat, zoals op papier. Een ruimtefiguur (zoals een kubus of een bal) heeft ook diepte.</div><div class=\'box\'><h4>Figuren zonder hoeken</h4><p>Een <b>cirkel</b> is rond en heeft overal dezelfde afstand tot het middelpunt. Een cirkel heeft oneindig veel symmetrieassen. Een <b>ellips</b> is een ovale figuur; die heeft er maar twee.</p></div><div class=\'g3\'><div class=\'box\'><h4>Driehoeken</h4><p>Een <b>gelijkzijdige driehoek</b> heeft drie gelijke zijden en drie hoeken van 60°. Een <b>gelijkbenige driehoek</b> heeft twee gelijke zijden. Een <b>rechthoekige driehoek</b> heeft één hoek van 90°.</p></div><div class=\'box\'><h4>Vierhoeken</h4><p>Een <b>vierkant</b> heeft vier gelijke, rechte hoeken en vier gelijke zijden. Een <b>rechthoek</b> heeft vier rechte hoeken. Een <b>parallellogram</b> heeft twee paar evenwijdige zijden.</p></div><div class=\'box\'><h4>Meer vierhoeken</h4><p>Een <b>ruit</b> heeft vier gelijke zijden, maar niet per se rechte hoeken. Een <b>vlieger</b> heeft twee paar aan elkaar grenzende gelijke zijden. Een <b>trapezium</b> heeft precies één paar evenwijdige zijden.</p></div></div><div class=\'call\'>Je herkent evenwijdige zijden aan de pijltjes (>>) en gelijke zijden aan de streepjes op de zijden. Rechte hoeken teken je met een rechthoektekentje.</div><div class=\'diagram-nodig\'>Overzicht van vlakke figuren: cirkel, ellips, de vijf soorten driehoeken en de belangrijkste vierhoeken (vierkant, rechthoek, parallellogram, ruit, vlieger, trapezium), elk met naam eronder.</div>'},
{heading:'Hoeken berekenen in driehoeken',html:'<div class=\'box\'><h4>Hoekensom van een driehoek</h4><p>De drie hoeken van elke driehoek samen zijn altijd <b>180°</b>. Ken je twee hoeken van een driehoek, dan kun je de derde hoek uitrekenen: je telt de twee bekende hoeken op en trekt de uitkomst af van 180°.</p></div><div class=\'voorbeeld\'><h4>Voorbeeld: derde hoek berekenen</h4><p>In driehoek ABC is hoek A = 52° en hoek B = 71°. Bereken hoek C.</p><ol class=\'num\'><li>Tel hoek A en hoek B op: 52° + 71° = 123°.</li><li>Trek dit af van 180°: 180° − 123° = 57°.</li></ol><div class=\'antwoord\'>Antwoord: hoek C is 57°.</div></div><div class=\'call sum\'><b>Om te onthouden</b><ul class=\'lst\'><li>hoek A + hoek B + hoek C = 180° in elke driehoek.</li><li>In een gelijkbenige driehoek zijn de twee hoeken bij de basis gelijk.</li><li>In een gelijkzijdige driehoek zijn alle hoeken 60°.</li></ul></div>'},
{heading:'Driehoeken tekenen',html:'<div class=\'box\'><h4>Een driehoek nauwkeurig tekenen</h4><p>Je kunt een driehoek op ware grootte tekenen als je genoeg gegevens hebt, bijvoorbeeld twee zijden en de ingesloten hoek, of één zijde en twee hoeken. Je gebruikt hiervoor een geodriehoek (voor hoeken en rechte lijnen) en soms een passer (voor gelijke afstanden).</p></div><div class=\'box\'><h4>Werkwijze</h4><ol class=\'num\'><li>Teken eerst de zijde waarvan je de lengte weet.</li><li>Zet met de geodriehoek de gegeven hoek(en) af.</li><li>Teken de andere zijden door tot ze elkaar snijden; dat snijpunt is het laatste hoekpunt.</li></ol></div><div class=\'call\'>Werk altijd nauwkeurig: een fout van een paar millimeter of een halve graad zorgt al voor een scheve tekening.</div>'},
{heading:'Parallellogram en ruit tekenen',html:'<div class=\'term\'><b>Parallellogram</b><span>Een vierhoek met twee paar evenwijdige zijden. Overstaande zijden zijn ook even lang.</span></div><div class=\'term\'><b>Ruit</b><span>Een vierhoek met vier gelijke zijden. De diagonalen van een ruit staan loodrecht op elkaar en delen elkaar middendoor.</span></div><div class=\'box\'><h4>Parallellogram tekenen</h4><p>Teken eerst één zijde. Zet daarna met de geodriehoek de hoek af en teken de tweede zijde. De twee andere zijden teken je evenwijdig aan en even lang als de eerste twee, zodat de figuur sluit.</p></div><div class=\'box\'><h4>Ruit tekenen</h4><p>Een ruit kun je tekenen met een passer: alle vier de zijden zijn even lang, dus je zet steeds dezelfde afstand af vanaf de vorige hoekpunten.</p></div><div class=\'diagram-nodig\'>Stappenplan met tekening van het construeren van een parallellogram en een ruit met geodriehoek en passer.</div>'},
{heading:'Vlieger en trapezium tekenen',html:'<div class=\'term\'><b>Vlieger</b><span>Een vierhoek met twee paar gelijke zijden die naast elkaar liggen. Eén diagonaal is een symmetrieas.</span></div><div class=\'term\'><b>Trapezium</b><span>Een vierhoek met precies één paar evenwijdige zijden.</span></div><div class=\'box\'><h4>Vlieger tekenen</h4><p>Een vlieger is symmetrisch rond één diagonaal. Teken eerst die symmetrieas en zet daarna aan beide kanten dezelfde lengtes en hoeken af.</p></div><div class=\'box\'><h4>Trapezium tekenen</h4><p>Teken eerst de langste evenwijdige zijde. Zet de hoeken af en teken de andere evenwijdige zijde ergens boven de eerste, zodat beide zijden dezelfde richting hebben.</p></div><div class=\'call warn\'><b>Veelgemaakte fout:</b> bij een trapezium denken leerlingen soms dat beide paren zijden evenwijdig moeten zijn. Bij een trapezium is dat maar één paar; is het twee paar, dan heet de figuur een parallellogram.</div>'},
{heading:'Hoeken berekenen in vierhoeken',html:'<div class=\'box\'><h4>Hoekensom van een vierhoek</h4><p>De vier hoeken van elke vierhoek samen zijn altijd <b>360°</b>. Dat volgt uit de hoekensom van een driehoek: je kunt elke vierhoek met één diagonaal verdelen in twee driehoeken van elk 180°, samen 360°.</p></div><div class=\'voorbeeld\'><h4>Voorbeeld: ontbrekende hoek in een vierhoek</h4><p>Van vierhoek PQRS is hoek P = 80°, hoek Q = 95° en hoek R = 110°. Bereken hoek S.</p><ol class=\'num\'><li>Tel de drie bekende hoeken op: 80° + 95° + 110° = 285°.</li><li>Trek dit af van 360°: 360° − 285° = 75°.</li></ol><div class=\'antwoord\'>Antwoord: hoek S is 75°.</div></div><div class=\'call sum\'><b>Om te onthouden</b><ul class=\'lst\'><li>Hoekensom driehoek: 180°.</li><li>Hoekensom vierhoek: 360°.</li><li>In een rechthoek en een vierkant zijn alle hoeken 90°.</li></ul></div>'}
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
