import { registerBook } from '../../registry.js';

/* Wiskunde: welke boeken en hoofdstukken er zijn */
registerBook('wiskunde','bbl',1,'Wiskunde BBL',[
  {part:'',ready:true,chapters:[
    ['1','Ruimtefiguren','Vlakken, ribben, hoekpunten en het tekenen van ruimtefiguren'],
    ['2','Getallen','Grote getallen, breuken, procenten en de rekenvolgorde'],
    ['3','Plaats bepalen','Coördinaten en het aflezen van plattegronden en kaarten'],
    ['4','Meten','Lengte, oppervlakte en inhoud berekenen'],
    ['5','Lijnen en hoeken','Soorten hoeken en lijnen herkennen en tekenen']]}]);

registerBook('wiskunde','bbl',2,'Wiskunde BBL',[
  {part:'',ready:true,chapters:[
    ['1','Vlakke figuren','Figuren herkennen, hoeken berekenen en ware grootte'],
    ['2','Formules en vergelijkingen','Formules gebruiken en vergelijkingen oplossen'],
    ['3','Oppervlakte','Oppervlakte berekenen van figuren'],
    ['4','Statistiek','Gegevens verzamelen, verwerken en weergeven']]}]);

/* Getal & Ruimte TL1, in twee delen uitgegeven: deel A is hoofdstuk 1 t/m 4,
   deel B is hoofdstuk 5 t/m 9, samen 52 theorieparagrafen. De titels komen uit
   de inhoudsopgave van beide scans; "Gemengde opgaven" staat er niet bij, dat
   zijn losse oefenopgaven zonder theorie (net als bij de andere wiskundeboeken).

   Dit boek wordt hoofdstuk voor hoofdstuk geschreven. Alleen hoofdstukken die
   er echt zijn staan hieronder: `tests/content.test.js` eist inhoud bij elk
   hoofdstuk in een `ready` deel, en dat is precies de reden dat er nergens op
   de site een leeg hoofdstuk staat. Vul de lijst dus aan zodra een
   hoofdstukbestand af is, niet eerder. Nog te schrijven, in boekvolgorde:
     2 Rekenen met negatieve getallen  ·  3 Assenstelsel  ·  4 Getallen
     5 Lijnen en hoeken  ·  6 Procenten  ·  7 Eenheden  ·  8 Formules
     9 Symmetrie */
registerBook('wiskunde','tl',1,'Wiskunde TL',[
  {part:'',ready:true,chapters:[
    ['1','Ruimtefiguren','Kubus, balk, cilinder, kegel, piramide en prisma herkennen, en hun uitslag tekenen']]}]);

registerBook('wiskunde','tl',2,'Wiskunde TL',[
  {part:'',ready:true,chapters:[
    ['1','Vlakke figuren','Driehoeken en vierhoeken herkennen, hoeken berekenen en nauwkeurig tekenen'],
    ['2','Oplossen en formules','Vergelijkingen oplossen met grafieken, inklemmen en de balansmethode'],
    ['3','Oppervlakte','Oppervlakte van rechthoeken, driehoeken, vierhoeken, cirkels en ruimtefiguren'],
    ['4','Statistiek','Procenten, diagrammen, gemiddelde, mediaan en modus'],
    ['5','De stelling van Pythagoras','Kwadraten, wortels, machten en de stelling van Pythagoras toepassen'],
    ['6','Vergroten en verkleinen','Vergrotingsfactor, gelijkvormige driehoeken en schaal'],
    ['7','Formules en grafieken','Formules met deelstrepen, haakjes, kwadraten en wortels; periodieke grafieken'],
    ['8','Ruimtemeetkunde','Ruimtelijk tekenen, aanzichten, doorsneden en inhoud berekenen']]}]);

registerBook('wiskunde','tl',3,'Wiskunde TL',[
  {part:'',ready:true,chapters:[
    ['1','Procenten','Procentuele toename en afname, terugrekenen naar 100%, promille en exponentiële formules'],
    ['2','Meetkunde','Schaal, koershoek, hoogtelijnen, doorsneden en aanzichten'],
    ['3','Formules en grafieken','Lineaire verbanden, tabellen, grafieken en de richtingscoëfficiënt'],
    ['4','Statistiek','Gemiddelde, modus, mediaan en samengestelde diagrammen lezen'],
    ['5','Goniometrie','Sinus, cosinus en tangens gebruiken om hoeken en zijden te berekenen'],
    ['6','Verschillende verbanden','Kwadratische, wortel-, macht- en periodieke verbanden'],
    ['7','Goniometrie','Pythagoras en goniometrie combineren, ook in ruimtefiguren'],
    ['8','Getallen','Grote getallen, wetenschappelijke notatie, eenheden en verhoudingen'],
    ['9','Omtrek, oppervlakte en inhoud','Oppervlakte en inhoud van vlakke figuren en ruimtefiguren berekenen en vergroten'],
    ['10','Grafieken en vergelijkingen','Bijzondere grafieken, som- en verschilgrafieken en vergelijkingen oplossen']]}]);

registerBook('wiskunde','tl',4,'Wiskunde TL',[
  {part:'',ready:true,chapters:[
    ['1','Statistiek en kans','Kansberekening, diagrammen, boxplot, grafen en telproblemen'],
    ['2','Verbanden','Lineaire, kwadratische, macht-, wortel- en exponentiële verbanden'],
    ['3','Drie dimensies, afstanden en hoeken','Perspectief tekenen, hoeken en zijden berekenen in de ruimte'],
    ['4','Formules en vergelijkingen','Omgekeerd evenredige verbanden, grafieken en vergelijkingen oplossen'],
    ['5','Rekenen, meten en schatten','Procenten, grote getallen, verhoudingen en eenheden omrekenen'],
    ['6','Meetkunde vlakke figuren','Oppervlakte, symmetrie, koershoek en gelijkvormigheid'],
    ['7','Verbanden','Lineaire, exponentiële en periodieke formules en grafieken maken'],
    ['8','Ruimtemeetkunde','Inhoud, diagonalen, doorsneden en coördinaten in de ruimte']]}]);
