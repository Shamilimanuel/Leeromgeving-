var VAKKEN=[
  {id:'wiskunde',    naam:'Wiskunde',         ico:'\u{1F4D0}', kleur:'wiskunde',     kleurnaam:'Groen'},
  {id:'rekenen',     naam:'Rekenen',          ico:'\u{1F522}', kleur:'rekenen',      kleurnaam:'Rood'},
  {id:'biologie',    naam:'Biologie',         ico:'\u{1F33F}', kleur:'biologie',     kleurnaam:'Groen'},
  {id:'nederlands',  naam:'Nederlands',       ico:'\u{270D}',  kleur:'nederlands',   kleurnaam:'Geel'},
  {id:'engels',      naam:'Engels',           ico:'\u{1F30D}', kleur:'engels',       kleurnaam:'Oranje'},
  {id:'burgerschap', naam:'Burgerschap',      ico:'\u{1F91D}', kleur:'burgerschap',  kleurnaam:'Lila', todo:true,
   samengevoegdMet:'Mens & Maatschappij'},
  {id:'economie',    naam:'Economie',         ico:'\u{1F4CA}', kleur:'economie',     kleurnaam:'Donkerblauw'},
  {id:'maatschleer', naam:'Maatschappijleer', ico:'\u{2696}',  kleur:'maatschleer',  kleurnaam:'Lila'},
  {id:'maatschkunde',naam:'Maatschappijkunde',ico:'\u{1F3DB}', kleur:'maatschkunde', kleurnaam:'Lila'},
  {id:'mensmaatschappij',naam:'Mens & Maatschappij',ico:'\u{1F9ED}', kleur:'mensmaatschappij', kleurnaam:'Teal'}
];
var NIVEAUS=[
  {id:'arbeid', naam:'Arbeid', uitleg:'Praktijkgericht, geen wiskunde', jaren:[1,2,3,4], ico:'\u{2692}', kleur:'niv-arbeid'},
  {id:'bbl',    naam:'BBL',    uitleg:'Basisberoepsgerichte leerweg',   jaren:[1,2,3,4], ico:'\u{26A1}', kleur:'niv-bbl'},
  {id:'bk',     naam:'BK',     uitleg:'Basis/kader \u2014 alleen leerjaar 1 en 2', jaren:[1,2], ico:'\u{1F3AF}', kleur:'niv-bk'},
  {id:'tl',     naam:'TL',     uitleg:'Theoretische leerweg',           jaren:[1,2,3,4], ico:'\u{1F989}', kleur:'niv-tl'}
];
/* Welke leerjaren bestaan er per vak, per niveau. null = vak bestaat daar niet. */
var VAK_JAREN={
  wiskunde:    {arbeid:null,      bbl:[1,2],     bk:[1,2], tl:[1,2,3,4]},
  biologie:    {arbeid:[1,2],     bbl:[1,2],     bk:[1,2], tl:[1,2,3,4]},
  rekenen:     {arbeid:[1,2,3,4], bbl:[1,2,3,4], bk:[1,2], tl:null},
  nederlands:  {arbeid:[1,2,3,4], bbl:[1,2,3,4], bk:[1,2], tl:[1,2,3,4]},
  engels:      {arbeid:[1,2,3,4], bbl:[1,2,3,4], bk:[1,2], tl:[1,2,3,4]},
  burgerschap: {arbeid:[1,2,3,4], bbl:[1,2,3,4], bk:[1,2], tl:null},
  maatschleer: {arbeid:null,      bbl:null,      bk:null,  tl:[3]},
  maatschkunde:{arbeid:null,      bbl:null,      bk:null,  tl:[3,4]},
  economie:    {arbeid:null,      bbl:null,      bk:null,  tl:[3,4]},
  mensmaatschappij: {arbeid:[1,2],bbl:[1,2],     bk:[1,2], tl:null}
};

/* ═══════ AANMELDEN ═══════
   Elk vak- en hoofdstukbestand meldt zichzelf hier aan.
   Zo hoef je nergens een centrale lijst bij te werken. */
var BOEKEN={}, STOF={};

function registreerBoek(vak, niveau, jaar, methode, delen){
  BOEKEN[vak+'|'+niveau+'|'+jaar]={methode:methode, delen:delen};
}
function registreerStof(sleutel, inhoud){
  STOF[sleutel]=inhoud;
}

