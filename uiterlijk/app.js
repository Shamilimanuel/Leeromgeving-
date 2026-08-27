/* Logica van de leeromgeving */
var keuze={vak:null,niveau:null,jaar:null,hoofdstuk:null};
var tab='samenvatting';


/* ═══════ NAVIGATIE ═══════ */
function go(id){
  if(id==='level')   renderLevel();
  if(id==='book')    renderBook();
  if(id==='chapter') renderChapter();
  var cur=document.querySelector('.screen.on');
  if(cur){ cur.classList.add('leaving'); cur.classList.remove('on');
    setTimeout(function(){cur.classList.remove('leaving')},500); }
  var nxt=document.getElementById(id);
  nxt.scrollTop=0; nxt.classList.add('on');
  ['helpbtn','dyslexiebtn','lichtbtn','zoekbtn','favbtn','pomodorobtn','examenbtn','fantasybtn'].forEach(function(bid){
    var el=document.getElementById(bid); if(el) el.classList.toggle('show', id!=='splash');
  });
  if(id==='home' && !helpGezien){ helpGezien=true; setTimeout(function(){openHelp(0)},2000); }
}
/* ═══════ DYSLEXIE-MODUS ═══════ */
var dyslexieAan = localStorage.getItem('dyslexieModus')==='1';
function pasDyslexieToe(){
  document.body.classList.toggle('dyslexie-modus', dyslexieAan);
  var btn=document.getElementById('dyslexiebtn');
  if(btn) btn.classList.toggle('on', dyslexieAan);
}
function toggleDyslexie(){
  dyslexieAan=!dyslexieAan;
  localStorage.setItem('dyslexieModus', dyslexieAan?'1':'0');
  pasDyslexieToe();
  pasLeesliniaalToe();
  toon(dyslexieAan?'Dyslexie-modus aan':'Dyslexie-modus uit');
}
pasDyslexieToe();
/* ═══════ LEESLINIAAL (volgt de muis, alleen bij dyslexie-modus) ═══════ */
var leesliniaalEl=null;
function pasLeesliniaalToe(){
  if(dyslexieAan){
    if(!leesliniaalEl){
      leesliniaalEl=document.createElement('div');
      leesliniaalEl.className='leesliniaal';
      document.body.appendChild(leesliniaalEl);
      document.addEventListener('mousemove', verplaatsLeesliniaal);
    }
    leesliniaalEl.style.display='block';
  } else if(leesliniaalEl){
    leesliniaalEl.style.display='none';
  }
}
function verplaatsLeesliniaal(e){ if(leesliniaalEl) leesliniaalEl.style.top=(e.clientY-19)+'px'; }
pasLeesliniaalToe();
/* ═══════ LICHTE MODUS ═══════ */
var lichtAan = localStorage.getItem('lichtModus')==='1';
function pasLichtToe(){
  document.body.classList.toggle('licht-modus', lichtAan);
  var btn=document.getElementById('lichtbtn');
  if(btn) btn.classList.toggle('on', lichtAan);
}
function toggleLicht(){
  lichtAan=!lichtAan;
  localStorage.setItem('lichtModus', lichtAan?'1':'0');
  pasLichtToe();
  toon(lichtAan?'Lichte modus aan':'Lichte modus uit');
}
pasLichtToe();
/* ═══════ FANTASY MODUS ("Stealth Genshin"-stijl) ═══════ */
var fantasyAan = localStorage.getItem('fantasyModus')==='1';
function pasFantasyToe(){
  document.body.classList.toggle('fantasy-modus', fantasyAan);
  var btn=document.getElementById('fantasybtn');
  if(btn) btn.classList.toggle('on', fantasyAan);
}
function toggleFantasy(){
  fantasyAan=!fantasyAan;
  localStorage.setItem('fantasyModus', fantasyAan?'1':'0');
  pasFantasyToe();
  toon(fantasyAan?'✨ Fantasy Mode aan':'Terug naar Standaard Mode');
  if(document.getElementById('chapter') && document.getElementById('chapter').classList.contains('on')) renderChapter();
  if(document.getElementById('book') && document.getElementById('book').classList.contains('on') && keuze.vak) renderBook();
}
pasFantasyToe();
function questLabel(tekst){
  if(!fantasyAan) return tekst;
  return tekst.replace(/hoofdstuk/gi, function(m){ return m===m.toUpperCase() ? 'MISSIE' : 'Missie'; });
}
/* ═══════ POMODORO FOCUS-TIMER ═══════ */
var pomodoroInterval=null, pomodoroResterend=25*60, pomodoroFase='werk', pomodoroAan=false;
function pomodoroToggle(){
  if(pomodoroAan){ pomodoroStoppen(); return; }
  pomodoroAan=true; pomodoroFase='werk'; pomodoroResterend=25*60;
  document.body.classList.add('pomodoro-focus');
  tekenPomodoro();
  pomodoroInterval=setInterval(pomodoroTik,1000);
  toon('Pomodoro gestart: 25 minuten focus.');
}
function pomodoroStoppen(){
  pomodoroAan=false;
  clearInterval(pomodoroInterval); pomodoroInterval=null;
  document.body.classList.remove('pomodoro-focus');
  tekenPomodoro();
}
function pomodoroTik(){
  pomodoroResterend--;
  if(pomodoroResterend<=0){
    if(pomodoroFase==='werk'){ pomodoroFase='pauze'; pomodoroResterend=5*60; toon('Tijd voor een pauze — 5 minuten!'); }
    else { pomodoroFase='werk'; pomodoroResterend=25*60; toon('Pauze voorbij — weer 25 minuten focus.'); }
  }
  tekenPomodoro();
}
function tekenPomodoro(){
  var btn=document.getElementById('pomodorobtn'); if(!btn) return;
  if(!pomodoroAan){ btn.textContent='⏱'; btn.classList.remove('on'); btn.title='Pomodoro-timer starten (25 min werk / 5 min pauze)'; return; }
  var m=Math.floor(pomodoroResterend/60), sec=pomodoroResterend%60;
  btn.textContent=(pomodoroFase==='werk'?'🎯 ':'☕ ')+m+':'+(sec<10?'0':'')+sec;
  btn.classList.add('on');
  btn.title=(pomodoroFase==='werk'?'Focus':'Pauze')+' — klik om te stoppen';
}
tekenPomodoro();
/* ═══════ EXAMEN- & ZELFTESTDASHBOARD ═══════ */
function alleQuizVragen(){
  var lijst=[];
  Object.keys(STOF).forEach(function(sleutel){
    var s=STOF[sleutel], delen=sleutel.split('|'), vakId=delen[0];
    var vak=VAKKEN.find(function(v){return v.id===vakId});
    if(!vak||!s.quiz||!s.quiz.length) return;
    s.quiz.forEach(function(q,i){ lijst.push({sleutel:sleutel,vak:vak,titel:s.titel,q:q,qi:i}); });
  });
  return lijst;
}
function schud(arr){
  var a=arr.slice();
  for(var i=a.length-1;i>0;i--){ var j=Math.floor(Math.random()*(i+1)); var t=a[i]; a[i]=a[j]; a[j]=t; }
  return a;
}
var examenVragen=[], examenAntwoorden=[];
function openExamen(){ document.getElementById('examenwrap').classList.add('show'); tekenExamenStart(); }
function closeExamen(){ document.getElementById('examenwrap').classList.remove('show'); }
function haalExamenGeschiedenis(){ try{return JSON.parse(localStorage.getItem('examenresultaten')||'[]')}catch(e){return []} }
function bewaarExamenPoging(goed,totaal){
  var g=haalExamenGeschiedenis();
  g.push({goed:goed,totaal:totaal,datum:new Date().toLocaleDateString('nl-NL')});
  if(g.length>50) g=g.slice(g.length-50);
  localStorage.setItem('examenresultaten', JSON.stringify(g));
}
function tekenExamenStart(){
  var alle=alleQuizVragen(), geschiedenis=haalExamenGeschiedenis();
  document.getElementById('examenBody').innerHTML=
    '<p class="dim">Er staan in totaal '+alle.length+' oefenvragen klaar, uit alle vakken samen.</p>'
    +'<div class="bar"><button class="bt" onclick="startExamen(10)">Start oefentoets (10 vragen)</button>'
    +'<button class="bt gh" onclick="startExamen(20)">Start oefentoets (20 vragen)</button></div>'
    +(geschiedenis.length? '<h4 class="parkop">Eerdere pogingen</h4>'+geschiedenis.slice().reverse().slice(0,8).map(function(g){
        return '<div class="examen-hist"><b>'+g.goed+'/'+g.totaal+'</b> ('+Math.round(g.goed/g.totaal*100)+'%) <span class="dim">'+g.datum+'</span></div>';
      }).join('') : '<p class="dim">Nog geen eerdere pogingen.</p>');
}
function startExamen(n){
  var alle=schud(alleQuizVragen());
  if(!alle.length){ alert('Er staan nog geen oefenvragen in de site.'); return; }
  examenVragen=alle.slice(0,Math.min(n,alle.length));
  examenAntwoorden=new Array(examenVragen.length).fill(null);
  tekenExamen();
}
function tekenExamen(){
  var klaar=examenAntwoorden.filter(function(a){return a!==null}).length;
  document.getElementById('examenBody').innerHTML=
    '<div class="scorebar"><b>'+klaar+' van '+examenVragen.length+' beantwoord</b>'
    +'<div class="prog"><i style="width:'+(klaar/examenVragen.length*100)+'%"></i></div></div>'
    +'<div id="examenlijst"></div><div id="examenres"></div>';
  document.getElementById('examenlijst').innerHTML=examenVragen.map(function(item,i){
    var q=item.q;
    return '<div class="qq"><div class="qn">VRAAG '+(i+1)+' VAN '+examenVragen.length+' · <span style="color:var(--'+item.vak.kleur+')">'+item.vak.naam+'</span> · '+item.titel+'</div>'
      +'<h4>'+q[0]+'</h4>'
      +q[1].map(function(o,j){return '<button class="opt" id="eo'+i+'-'+j+'" onclick="examenAntwoord('+i+','+j+')">'+o+'</button>'}).join('')
      +'<div class="fb" id="efb'+i+'"></div></div>';
  }).join('');
  examenAntwoorden.forEach(function(a,i){ if(a!==null) toonExamenAntwoord(i,a) });
  checkExamenKlaar();
}
function examenAntwoord(i,j){
  if(examenAntwoorden[i]!==null) return;
  examenAntwoorden[i]=j;
  toonExamenAntwoord(i,j);
  var klaar=examenAntwoorden.filter(function(a){return a!==null}).length;
  document.querySelector('#examenBody .scorebar b').textContent=klaar+' van '+examenVragen.length+' beantwoord';
  document.querySelector('#examenBody .prog i').style.width=(klaar/examenVragen.length*100)+'%';
  checkExamenKlaar();
}
function toonExamenAntwoord(i,j){
  var goed=examenVragen[i].q[2];
  examenVragen[i].q[1].forEach(function(_,k){
    var el=document.getElementById('eo'+i+'-'+k); if(!el) return;
    el.disabled=true;
    if(k===goed) el.classList.add('good'); else if(k===j) el.classList.add('bad');
  });
  var fb=document.getElementById('efb'+i);
  if(fb){ fb.textContent=(j===goed?'✓ Goed. ':'✗ Niet goed. ')+examenVragen[i].q[3]; fb.classList.add('on') }
}
function checkExamenKlaar(){
  var klaar=examenAntwoorden.filter(function(a){return a!==null}).length;
  if(klaar<examenVragen.length) return;
  var goed=examenAntwoorden.filter(function(a,i){return a===examenVragen[i].q[2]}).length;
  var perVak={};
  examenVragen.forEach(function(item,i){
    var naam=item.vak.naam;
    perVak[naam]=perVak[naam]||{goed:0,totaal:0};
    perVak[naam].totaal++;
    if(examenAntwoorden[i]===item.q[2]) perVak[naam].goed++;
  });
  bewaarExamenPoging(goed, examenVragen.length);
  var pct=Math.round(goed/examenVragen.length*100);
  var resEl=document.getElementById('examenres'); if(!resEl) return;
  var examenTitel=fantasyAan?('\u{1F3C6} Questreeks voltooid! +'+(goed*10)+' XP — '+goed+'/'+examenVragen.length+' ('+pct+'%)'):('Eindscore: '+goed+'/'+examenVragen.length+' ('+pct+'%)');
  resEl.innerHTML='<div class="call sum'+(fantasyAan?' quest-voltooid':'')+'"><b>'+examenTitel+'</b><br>'
    +Object.keys(perVak).map(function(naam){var v=perVak[naam]; return naam+': '+v.goed+'/'+v.totaal;}).join(' · ')
    +'</div><div class="bar"><button class="bt gh" onclick="tekenExamenStart()">← Terug naar overzicht</button></div>';
}
/* ═══════ SERVICE WORKER (installeerbaar + offline) ═══════ */
if('serviceWorker' in navigator){
  window.addEventListener('load', function(){
    navigator.serviceWorker.register('sw.js').catch(function(){});
  });
}
/* ═══════ INTRO ═══════ */
var introStap=0, introTimer=null;
var INTRO=['stage-scene','stage-mission','stage-credit'];
var INTRO_TIJD=[4200,6500];
function introVerder(){
  if(introStap>=INTRO.length-1) return;
  clearTimeout(introTimer);
  document.getElementById(INTRO[introStap]).classList.add('hide');
  introStap++;
  document.getElementById(INTRO[introStap]).classList.remove('hide');
  var v=document.getElementById('introVerder');
  if(introStap>=INTRO.length-1){ if(v) v.style.display='none' }
  else introTimer=setTimeout(introVerder, INTRO_TIJD[introStap]);
}
introTimer=setTimeout(introVerder, INTRO_TIJD[0]);

/* ═══════ VAKKEN ═══════ */
document.getElementById('subjectGrid').innerHTML=VAKKEN.map(function(v,i){
  return '<button class="subj'+(v.todo?' todo':'')+'" style="background:var(--'+v.kleur+');animation-delay:'+(i*55)+'ms" onclick="kiesVak(\''+v.id+'\')">'
    +'<span class="swatch">'+v.kleurnaam+'</span><span class="ico">'+v.ico+'</span>'
    +'<h3>'+v.naam+'</h3><small>Bekijk de samenvattingen</small></button>';
}).join('');

document.addEventListener('mousemove',function(e){
  var el=e.target.closest?e.target.closest('.subj,.chapter'):null;
  if(!el) return;
  var r=el.getBoundingClientRect();
  el.style.setProperty('--mx',(e.clientX-r.left)+'px');
  el.style.setProperty('--my',(e.clientY-r.top)+'px');
});

function vak(){ return VAKKEN.find(function(v){return v.id===keuze.vak}) }
function niv(){ return NIVEAUS.find(function(n){return n.id===keuze.niveau}) }
function boek(){ return BOEKEN[keuze.vak+'|'+keuze.niveau+'|'+keuze.jaar] }
function boekVoor(vakId,niveauId,jaar){ return BOEKEN[vakId+'|'+niveauId+'|'+jaar] }
function stof(h){ return STOF[keuze.vak+'|'+keuze.niveau+'|'+keuze.jaar+'|'+(h||keuze.hoofdstuk)] }
function chapterSleutel(){ return keuze.vak+'|'+keuze.niveau+'|'+keuze.jaar+'|'+keuze.hoofdstuk }
function escHtml(s){ return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;') }

/* ═══════ VOORTGANG (localStorage) ═══════ */
function haalVoortgang(){ try{return JSON.parse(localStorage.getItem('voortgang')||'{}')}catch(e){return {}} }
function bewaarVoortgang(v){ localStorage.setItem('voortgang', JSON.stringify(v)) }
function voortgangVoor(sleutel){ return haalVoortgang()[sleutel]||null }
function markBekeken(){
  var v=haalVoortgang(), sl=chapterSleutel();
  if(v[sl] && v[sl].bekeken) return;
  v[sl]=v[sl]||{}; v[sl].bekeken=true; bewaarVoortgang(v);
}
function markQuizAfgerond(goed,totaal){
  var v=haalVoortgang(), sl=chapterSleutel();
  v[sl]=v[sl]||{}; v[sl].quizGoed=goed; v[sl].quizTotaal=totaal; v[sl].quizAfgerond=true;
  bewaarVoortgang(v);
}

/* ═══════ FOUTENLOG (voor fout-herhaling) ═══════ */
function haalFouten(){ try{return JSON.parse(localStorage.getItem('fouten')||'{}')}catch(e){return {}} }
function bewaarFouten(f){ localStorage.setItem('fouten', JSON.stringify(f)) }
function foutenVoorHoofdstuk(){ return haalFouten()[chapterSleutel()]||[] }
function voegFoutToe(i){
  var f=haalFouten(), sl=chapterSleutel();
  f[sl]=f[sl]||[];
  if(f[sl].indexOf(i)===-1){ f[sl].push(i); bewaarFouten(f); }
}
function verwijderFout(i){
  var f=haalFouten(), sl=chapterSleutel();
  if(f[sl] && f[sl].indexOf(i)>-1){ f[sl]=f[sl].filter(function(x){return x!==i}); bewaarFouten(f); }
}

/* ═══════ LEITNER SPACED REPETITION (flashcards) ═══════ */
/* 5 niveaus (boxen). Hoe hoger de box, hoe langer je wacht tot de volgende herhaling. */
var LEITNER_DAGEN=[0,1,3,7,14,30];
function haalLeitner(){ try{return JSON.parse(localStorage.getItem('leitner')||'{}')}catch(e){return {}} }
function bewaarLeitner(l){ localStorage.setItem('leitner', JSON.stringify(l)) }
function vandaag(){ return Math.floor(Date.now()/86400000) }
function leitnerVoorKaart(id){
  var l=haalLeitner(), sl=chapterSleutel();
  return (l[sl] && l[sl][id]) || {box:1, volgende:0};
}
function leitnerBijwerken(id, gekend){
  var huidig=leitnerVoorKaart(id).box;
  var nieuw = gekend ? Math.min(huidig+1,5) : 1;
  var l=haalLeitner(), sl=chapterSleutel();
  l[sl]=l[sl]||{};
  l[sl][id]={box:nieuw, volgende:vandaag()+LEITNER_DAGEN[nieuw]};
  bewaarLeitner(l);
  return nieuw;
}
function kaartIsVandaagAanDeBeurt(id){ return leitnerVoorKaart(id).volgende<=vandaag() }
function leitnerDotsHtml(id){
  var box=leitnerVoorKaart(id).box, dots='';
  for(var i=1;i<=5;i++){ dots+='<i class="ld'+(i<=box?' on':'')+'"></i>' }
  return '<div class="leitner-dots" title="Herhaalniveau '+box+'/5">'+dots+'</div>';
}

/* ═══════ FAVORIETEN ═══════ */
function haalFavorieten(){ try{return JSON.parse(localStorage.getItem('favorieten')||'[]')}catch(e){return []} }
function bewaarFavorieten(f){ localStorage.setItem('favorieten', JSON.stringify(f)) }
function favId(type,sleutel,key){ return type+'|'+sleutel+'|'+key }
function isFavoriet(type,sleutel,key){ return haalFavorieten().some(function(f){return f.id===favId(type,sleutel,key)}) }
function toggleFavoriet(type,sleutel,key,tekst,detail){
  var f=haalFavorieten(), id=favId(type,sleutel,key);
  var idx=f.findIndex(function(x){return x.id===id});
  if(idx>-1){ f.splice(idx,1); bewaarFavorieten(f); return false; }
  f.push({id:id,type:type,sleutel:sleutel,key:key,tekst:tekst,detail:detail});
  bewaarFavorieten(f);
  return true;
}

function kiesVak(id){
  var v=VAKKEN.find(function(x){return x.id===id});
  if(v.samengevoegdMet){ toon('"'+v.naam+'" zit tegenwoordig bij "'+v.samengevoegdMet+'" \u2014 klik daarop.'); return; }
  keuze={vak:id,niveau:null,jaar:null,hoofdstuk:null};
  document.documentElement.style.setProperty('--accent','var(--'+v.kleur+')');
  document.documentElement.style.setProperty('--accent-d','var(--'+v.kleur+'-d)');
  var kl=getComputedStyle(document.documentElement).getPropertyValue('--'+v.kleur);
  Array.prototype.forEach.call(document.querySelectorAll('.aurora i'),function(n){n.style.background=kl});
  go('level');
}
var toastTimer=null;
function toon(tekst){
  var el=document.getElementById('toast');
  if(!el){
    el=document.createElement('div'); el.id='toast'; el.className='toast';
    document.body.appendChild(el);
  }
  el.textContent=tekst;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer=setTimeout(function(){ el.classList.remove('show') }, 2600);
}

/* ═══════ NIVEAU + JAAR ═══════ */
function jarenVoor(vakId, nivId){
  var t=VAK_JAREN[vakId];
  if(!t) return NIVEAUS.find(function(n){return n.id===nivId}).jaren;
  return t[nivId];
}
function renderLevel(){
  var v=vak();
  document.getElementById('lvlBrand').textContent=v.naam;
  document.getElementById('nivChips').innerHTML=
    NIVEAUS.map(function(n){
      var kan=jarenVoor(v.id,n.id);
      if(!kan||!kan.length){
        return '<button class="chip" disabled style="opacity:.32;cursor:not-allowed" title="Niet beschikbaar bij dit vak">'+n.naam+'</button>';
      }
      return '<button class="chip'+(keuze.niveau===n.id?' sel':'')+'" onclick="kiesNiveau(\''+n.id+'\')">'+n.naam+'</button>';
    }).join('')+'<span class="hint">'+(keuze.niveau?niv().uitleg:'Grijze niveaus hebben dit vak niet')+'</span>';
  var row=document.getElementById('jaarRow');
  if(!keuze.niveau){row.style.display='none';return}
  row.style.display='';
  var jaren=jarenVoor(v.id,keuze.niveau);
  if(!jaren||!jaren.length){
    document.getElementById('jaarChips').innerHTML='<span class="hint">Dit vak wordt op dit niveau niet gegeven.</span>';
    return;
  }
  document.getElementById('jaarChips').innerHTML=jaren.map(function(j,i){
    return '<button class="chip" style="animation-delay:'+(i*70)+'ms" onclick="kiesJaar('+j+')">Leerjaar '+j+'</button>';
  }).join('');
}
function kiesNiveau(id){keuze.niveau=id;keuze.jaar=null;renderLevel()}

function kiesJaar(j){keuze.jaar=j;go('book')}
function label(){return vak().naam+' \u00b7 '+niv().naam+' \u00b7 leerjaar '+keuze.jaar}

/* ═══════ BOEK ═══════ */
function renderBook(){
  var v=vak(), b=boek();
  document.getElementById('bkBrand').textContent=v.naam;
  document.getElementById('bkCrumb').textContent=label();
  document.getElementById('bkPill').textContent=label();
  document.getElementById('bkTitle').textContent=v.naam+' \u2014 '+niv().naam+' leerjaar '+keuze.jaar;
  if(!b){
    document.getElementById('bkTag').textContent='';
    var melding = v.id==='burgerschap'
      ? '<div class="empty"><h3>Burgerschap zit bij Mens &amp; Maatschappij</h3>'
        +'<p>Voor dit lesprogramma wordt burgerschap gegeven via het vak <b>Mens &amp; Maatschappij</b>. '
        +'Ga terug en kies dat vak in plaats van Burgerschap.</p></div>'
      : '<div class="empty"><h3>Dit boek staat er nog niet in</h3><p>Kies een ander leerjaar of niveau.</p></div>';
    document.getElementById('bookBody').innerHTML=melding;
    return;
  }
  var tot=b.delen.reduce(function(n,d){return n+d.hoofdstukken.length},0);
  var klaar=0, afgerond=0;
  b.delen.forEach(function(d){ d.hoofdstukken.forEach(function(c){
    if(stof(c[0])) klaar++;
    var vg=voortgangVoor(v.id+'|'+keuze.niveau+'|'+keuze.jaar+'|'+c[0]);
    if(vg && vg.quizAfgerond) afgerond++;
  }) });
  document.getElementById('bkTag').textContent=
    b.methode+' \u00b7 '+tot+' hoofdstukken, waarvan '+klaar+' met een volledige samenvatting.'
    +(afgerond?' \u00b7 '+afgerond+' van '+tot+' hoofdstukken afgerond.':'')
    +(b.delen.length>1?' Het boek is uitgegeven in twee delen; hieronder staat alles bij elkaar.':'');

  document.getElementById('bookBody').innerHTML=b.delen.map(function(d){
    var h=d.hoofdstukken;
    return '<div class="deel">'+(d.deel?('<div class="deel-head"><h2>Deel '+d.deel+'</h2>'
      +'<span class="rng">hoofdstuk '+h[0][0]+' t/m '+h[h.length-1][0]+'</span>'
      +'<span class="status">'+(d.klaar?'beschikbaar':'nog niet')+'</span></div>'):'')+'<div class="chapters">'
      +h.map(function(c,i){
        var heeft=!!stof(c[0]);
        var cls='chapter'+(d.klaar?(heeft?'':' leeg'):' locked');
        var act=d.klaar?' onclick="openHoofdstuk(\''+c[0]+'\')"':' disabled';
        var vg=voortgangVoor(v.id+'|'+keuze.niveau+'|'+keuze.jaar+'|'+c[0]);
        var vgBadge = vg && vg.quizAfgerond ? '<span class="rdy vg-quiz">\u2713 '+vg.quizGoed+'/'+vg.quizTotaal+'</span>'
          : vg && vg.bekeken ? '<span class="rdy vg-bekeken">gelezen</span>' : (heeft?'<span class="rdy">klaar</span>':'');
        return '<button class="'+cls+'" style="animation-delay:'+(i*70)+'ms"'+act+'>'
          +vgBadge
          +'<div class="n">'+questLabel('HOOFDSTUK '+c[0])+'</div><h4>'+c[1]+'</h4><p>'+(c[2]||'&nbsp;')+'</p></button>';
      }).join('')+'</div></div>';
  }).join('')
  +'<div class="notice"><strong>Hoofdstuk 2 is helemaal af</strong> \u2014 met samenvatting, 42 flashcards, 20 quizvragen en 44 begrippen. '
  +'De andere hoofdstukken vullen we op dezelfde manier aan.</div>';
}

/* ═══════ HOOFDSTUK ═══════ */
function openHoofdstuk(n){ keuze.hoofdstuk=n; tab='samenvatting'; kaartStaat=null; quizStaat=null; quizFoutModus=false; sq3rAan=false; sq3rStap=0; go('chapter'); }

function hoofdstukInfo(n){
  var b=boek(), r=null;
  b.delen.forEach(function(d){ d.hoofdstukken.forEach(function(c){ if(c[0]===n) r={c:c,deel:d.deel} }) });
  return r;
}

var TABS=[['samenvatting','Samenvatting'],['flashcards','Flashcards'],['quiz','Oefenquiz'],['begrippen','Begrippenlijst'],['notities','Notities']];

function renderChapter(){
  var v=vak(), info=hoofdstukInfo(keuze.hoofdstuk), s=stof();
  document.getElementById('chBrand').textContent=v.naam;
  document.getElementById('chCrumb').textContent=label()+' \u00b7 deel '+info.deel;
  document.getElementById('chPill').textContent=questLabel('Hoofdstuk '+info.c[0])+' \u00b7 deel '+info.deel;
  document.getElementById('chTitle').textContent=info.c[1];
  document.getElementById('chTag').textContent=info.c[2]||'';
  document.getElementById('chTabs').innerHTML=TABS.map(function(t){
    var s=stof(), n=(!s?0:t[0]==='flashcards'?s.cards.length:t[0]==='quiz'?s.quiz.length:t[0]==='begrippen'?s.begrippen.length:1);
    var geenTel=(t[0]==='samenvatting'||t[0]==='notities');
    return '<button class="tab'+(tab===t[0]?' on':'')+(n?'':' leegtab')+'" onclick="zetTab(\''+t[0]+'\')">'+t[1]+(n&&!geenTel?' <span class="tel">'+n+'</span>':'')+'</button>';
  }).join('');
  if(!s){
    document.getElementById('chBody').innerHTML=
      '<div class="empty"><h3>Dit hoofdstuk is nog niet ingevuld</h3>'
      +'<p>De samenvatting, flashcards en quiz van dit hoofdstuk komen er nog aan.<br>'
      +'Hoofdstuk 2 (Bewegen) is al wel helemaal af \u2014 bekijk die om te zien hoe het eruitziet.</p></div>';
    return;
  }
  if(tab==='samenvatting') toonSamenvatting(s);
  if(tab==='flashcards')   toonKaarten(s);
  if(tab==='quiz')         toonQuiz(s);
  if(tab==='begrippen')    toonBegrippen(s);
  if(tab==='notities')     toonNotities(s);
}
function zetTab(t){ tab=t; renderChapter(); document.getElementById('chapter').scrollTop=0; }

function toonSamenvatting(s){
  var knop='<div class="bar sq3r-toggle"><button class="bt'+(sq3rAan?'':' gh')+'" onclick="sq3rToggle()">\u{1F9ED} '
    +(sq3rAan?'Stop begeleide leeswijzer':'Begeleide leeswijzer (SQ3R)')+'</button></div>';
  if(!sq3rAan){
    document.getElementById('chBody').innerHTML=knop+s.samenvatting.map(function(p,i){
      return '<div class="sect" style="animation-delay:'+(i*60)+'ms"><h3>'+p.kop+'</h3>'+p.html+'</div>';
    }).join('');
    markBekeken();
    return;
  }
  document.getElementById('chBody').innerHTML=knop+sq3rHtml(s);
  markBekeken();
}

/* ═══════ SQ3R BEGELEIDE LEESWIJZER (Survey-Question-Read-Recite-Review) ═══════ */
var sq3rAan=false, sq3rStap=0;
var SQ3R_STAPPEN=['Survey','Question','Read','Recite','Review'];
function sq3rToggle(){ sq3rAan=!sq3rAan; sq3rStap=0; toonSamenvatting(stof()); }
function sq3rVolgende(){ sq3rStap=Math.min(sq3rStap+1,4); toonSamenvatting(stof()); document.getElementById('chapter').scrollTop=0; }
function sq3rVorige(){ sq3rStap=Math.max(sq3rStap-1,0); toonSamenvatting(stof()); document.getElementById('chapter').scrollTop=0; }
function haalSq3r(){ try{return JSON.parse(localStorage.getItem('sq3r')||'{}')}catch(e){return {}} }
function bewaarSq3r(d){ localStorage.setItem('sq3r', JSON.stringify(d)) }
function sq3rVraagOpslaan(i,waarde){
  var d=haalSq3r(), sl=chapterSleutel();
  d[sl]=d[sl]||{}; d[sl].vragen=d[sl].vragen||{};
  d[sl].vragen[i]=waarde; bewaarSq3r(d);
}
function sq3rVraagVoor(i){
  var d=haalSq3r(), sl=chapterSleutel();
  return (d[sl] && d[sl].vragen && d[sl].vragen[i]) || '';
}
function sq3rNavertelOpslaan(waarde){
  var d=haalSq3r(), sl=chapterSleutel();
  d[sl]=d[sl]||{}; d[sl].navertellen=waarde; bewaarSq3r(d);
}
function sq3rNavertelVoor(){
  var d=haalSq3r(), sl=chapterSleutel();
  return (d[sl] && d[sl].navertellen) || '';
}
function sq3rHtml(s){
  var stap=sq3rStap;
  var html='<div class="sq3r"><div class="sq3r-stappen">'+SQ3R_STAPPEN.map(function(t,i){
    return '<span class="sq3r-stap'+(i===stap?' on':'')+(i<stap?' klaar':'')+'">'+(i+1)+'. '+t+'</span>';
  }).join('')+'</div>';
  if(stap===0){
    html+='<div class="sect"><h3>Stap 1 — Survey: verken het hoofdstuk</h3>'
      +'<p class="dim">Lees eerst alleen de koppen hieronder, zonder de tekst te lezen. Waar denk je dat dit hoofdstuk over gaat?</p>'
      +'<ul class="lst">'+s.samenvatting.map(function(p){return '<li>'+p.kop+'</li>'}).join('')+'</ul></div>';
  } else if(stap===1){
    html+='<div class="sect"><h3>Stap 2 — Question: bedenk vragen</h3>'
      +'<p class="dim">Maak van elke kop een vraag voor jezelf. Wat wil je straks kunnen beantwoorden?</p>'
      +s.samenvatting.map(function(p,i){
        return '<div class="sq3r-vraagrij"><b>'+p.kop+'</b>'
          +'<textarea class="groot-veld" placeholder="Jouw vraag hierbij…" oninput="sq3rVraagOpslaan('+i+',this.value)">'
          +escHtml(sq3rVraagVoor(i))+'</textarea></div>';
      }).join('')+'</div>';
  } else if(stap===2){
    html+=s.samenvatting.map(function(p,i){
      return '<div class="sect" style="animation-delay:'+(i*60)+'ms"><h3>'+p.kop+'</h3>'+p.html+'</div>';
    }).join('');
  } else if(stap===3){
    html+='<div class="sect"><h3>Stap 4 — Recite: vertel het na</h3>'
      +'<p class="dim">Kijk niet meer naar de tekst. Vertel in je eigen woorden wat dit hoofdstuk inhield.</p>'
      +'<textarea class="groot-veld" placeholder="Vertel hier in eigen woorden wat dit hoofdstuk ging…" oninput="sq3rNavertelOpslaan(this.value)">'
      +escHtml(sq3rNavertelVoor())+'</textarea></div>';
  } else if(stap===4){
    html+='<div class="sect"><h3>Stap 5 — Review: test jezelf</h3>'
      +'<p>Goed gedaan! Ga nu naar <b>Flashcards</b> of de <b>Oefenquiz</b> hierboven om te testen wat je hebt onthouden.</p></div>';
  }
  html+='<div class="bar sq3r-nav">'
    +'<button class="bt gh" onclick="sq3rVorige()"'+(stap===0?' disabled':'')+'>← Vorige</button>'
    +'<button class="bt" onclick="sq3rVolgende()"'+(stap===4?' disabled':'')+'>Volgende →</button></div></div>';
  return html;
}


/* Bij welke paragraaf hoort een begrip of kaart? Zoekt in de samenvatting. */
function paragraafVanTerm(s, term){
  var t=term.toLowerCase();
  for(var i=0;i<s.samenvatting.length;i++){
    if(s.samenvatting[i].html.toLowerCase().indexOf('<b>'+t)>-1) return i;
  }
  for(var i=0;i<s.samenvatting.length;i++){
    if(s.samenvatting[i].html.toLowerCase().indexOf(t)>-1) return i;
  }
  return -1;
}
function paragraafVanKaart(s, kaart){
  var woorden=(kaart[0]+' '+kaart[1]).toLowerCase().replace(/[^a-zàèéêëïöü ]/g,' ').split(/\s+/)
    .filter(function(w){return w.length>=6});
  var beste=-1, top=0;
  for(var i=0;i<s.samenvatting.length;i++){
    var h=s.samenvatting[i].html.toLowerCase(), score=0;
    woorden.forEach(function(w){ if(h.indexOf(w)>-1) score++ });
    if(score>top){ top=score; beste=i }
  }
  return beste;
}
function kopVan(s,i){ return i>-1 ? s.samenvatting[i].kop : 'Overig' }

/* ── flashcards ── */
var kaartStaat=null, kaartView=null, kaartGroep=true;
function toonKaarten(s){
  if(!s.cards.length){
    document.getElementById('chBody').innerHTML=
      '<div class="empty"><h3>Nog geen flashcards</h3><p>Bij dit hoofdstuk staan nog geen kaarten. Kijk bij de samenvatting of de begrippenlijst.</p></div>';
    return;
  }
  if(!kaartStaat){
    kaartStaat=s.cards.map(function(c,i){
      return {q:c[0],a:c[1],id:i,ken:false,par:(c[2]!==undefined?c[2]:paragraafVanKaart(s,c))};
    });
    kaartView=kaartStaat.slice();
  }
  var vandaagTeller=kaartStaat.filter(function(c){return kaartIsVandaagAanDeBeurt(c.id)}).length;
  document.getElementById('chBody').innerHTML=
    '<div class="bar"><button class="bt'+(kaartGroep?'':' gh')+'" onclick="wisselGroep()">'
    +(kaartGroep?'\u{1F4D1} Op boekvolgorde':'\u{1F500} Door elkaar')+'</button>'
    +'<button class="bt gh" onclick="resetKaarten()">\u21BA Opnieuw</button>'
    +'<button class="bt gh" onclick="alleenOnbekend()">Alleen wat ik nog niet ken</button>'
    +'<button class="bt gh" onclick="alleenVandaag()">\u{1F4C5} Vandaag te herhalen ('+vandaagTeller+')</button>'
    +'<span class="cnt" id="kcnt"></span></div>'
    +'<p class="dim">Klik \u2713 Ken ik of \u21BB Nog niet \u2014 een kaart komt dan vanzelf op het juiste moment terug (spaced repetition, 5 niveaus).</p>'
    +'<div id="cgrid"></div>';
  tekenKaarten();
}
function kaartHtml(c,i){
  var fav=isFavoriet('kaart',chapterSleutel(),c.id);
  return '<div class="fc'+(c.ken?' known':'')+'" data-id="'+c.id+'" tabindex="0" role="button" style="animation-delay:'+(i*25)+'ms"'
    +' onclick="draai(this,event)" onkeydown="if(event.key===\'Enter\'||event.key===\' \'){event.preventDefault();draai(this,event)}">'
    +leitnerDotsHtml(c.id)
    +'<button class="star'+(fav?' on':'')+'" onclick="klikFavorietKaart(event,'+c.id+')" aria-label="Favoriet">\u2605</button>'
    +'<div class="fc-in"><div class="fc-f"><small>VRAAG</small>'+c.q+'<div class="h">\u21BA klik om te draaien</div></div>'
    +'<div class="fc-b"><strong>Antwoord</strong><span>'+c.a+'</span>'
    +'<div class="mk"><button class="y" onclick="merk(event,'+c.id+',true)">\u2713 Ken ik</button>'
    +'<button class="n" onclick="merk(event,'+c.id+',false)">\u21BB Nog niet</button></div></div></div></div>';
}
function klikFavorietKaart(e,id){
  e.stopPropagation();
  var s=stof(), c=s.cards[id], sl=chapterSleutel();
  var nu=toggleFavoriet('kaart',sl,id,c[0],c[1]);
  var btn=e.target.closest('button');
  if(btn) btn.classList.toggle('on',nu);
}
function tekenKaarten(){
  var s=stof(), doel=document.getElementById('cgrid');
  if(!kaartGroep){
    doel.className='cgrid';
    doel.innerHTML=kaartView.map(kaartHtml).join('');
  } else {
    doel.className='';
    var html='';
    for(var p=-1;p<s.samenvatting.length;p++){
      var groep=kaartView.filter(function(c){return c.par===p});
      if(!groep.length) continue;
      html+='<div class="parblok"><h4 class="parkop">'+kopVan(s,p)+' <span>'+groep.length+' kaarten</span></h4>'
        +'<div class="cgrid">'+groep.map(kaartHtml).join('')+'</div></div>';
    }
    doel.innerHTML=html;
  }
  telKaarten();
}
function wisselGroep(){ kaartGroep=!kaartGroep; toonKaarten(stof()); }
function draai(el,e){ if(e.target.tagName==='BUTTON')return; el.classList.toggle('flip') }
function toonCheck(el){ el.classList.toggle('toon') }
function merk(e,id,ken){
  e.stopPropagation();
  var a=kaartStaat.find(function(x){return x.id===id}); if(a)a.ken=ken;
  var b=kaartView.find(function(x){return x.id===id}); if(b)b.ken=ken;
  leitnerBijwerken(id,ken);
  var el=document.querySelector('.fc[data-id="'+id+'"]');
  if(el){
    el.classList.toggle('known',ken);el.classList.remove('flip');
    var dotsEl=el.querySelector('.leitner-dots'); if(dotsEl) dotsEl.outerHTML=leitnerDotsHtml(id);
  }
  telKaarten();
}
function telKaarten(){
  var k=kaartStaat.filter(function(c){return c.ken}).length;
  var el=document.getElementById('kcnt');
  if(el) el.textContent=k+' van '+kaartStaat.length+' gemarkeerd als gekend';
}
function resetKaarten(){ kaartStaat.forEach(function(c){c.ken=false}); kaartView=kaartStaat.slice(); tekenKaarten() }
function alleenOnbekend(){
  var rest=kaartStaat.filter(function(c){return !c.ken});
  kaartView=rest.length?rest:kaartStaat.slice();
  tekenKaarten();
  if(!rest.length) alert('Je hebt alle kaarten gemarkeerd als gekend. Alles wordt weer getoond.');
}
function alleenVandaag(){
  var rest=kaartStaat.filter(function(c){return kaartIsVandaagAanDeBeurt(c.id)});
  kaartView=rest.length?rest:kaartStaat.slice();
  tekenKaarten();
  if(!rest.length) alert('Niks te herhalen vandaag! Kom morgen terug, of oefen gewoon verder — dan komt de planning vanzelf weer bij.');
}

/* ── quiz ── */
var quizStaat=null, quizFoutModus=false;
function quizIndices(s){
  if(quizFoutModus){
    var f=foutenVoorHoofdstuk();
    if(f.length) return f;
    quizFoutModus=false;
  }
  return s.quiz.map(function(_,i){return i});
}
function wisselFoutModus(){ quizFoutModus=!quizFoutModus; toonQuiz(stof()); }
function toonQuiz(s){
  if(!s.quiz.length){
    document.getElementById('chBody').innerHTML=
      '<div class="empty"><h3>Nog geen oefenvragen</h3>'
      +'<p>Bij dit hoofdstuk staan nog geen quizvragen. Gebruik zolang de flashcards en de begrippenlijst om te oefenen.</p></div>';
    return;
  }
  if(!quizStaat) quizStaat=new Array(s.quiz.length).fill(null);
  var fCount=foutenVoorHoofdstuk().length;
  document.getElementById('chBody').innerHTML=
    '<div class="scorebar"><b id="scoreTxt">0 van '+s.quiz.length+' beantwoord</b>'
    +'<div class="prog"><i id="progBar"></i></div>'
    +(fCount?'<button class="bt'+(quizFoutModus?'':' gh')+'" onclick="wisselFoutModus()">\u{1F501} '+(quizFoutModus?'Alle vragen':'Oefen foute vragen ('+fCount+')')+'</button>':'')
    +'<button class="bt gh" onclick="resetQuiz()">\u21BA Opnieuw</button></div>'
    +'<div id="qlist"></div><div id="qres"></div>';
  tekenQuiz(s);
}
function tekenQuiz(s){
  var idx=quizIndices(s);
  document.getElementById('qlist').innerHTML=idx.map(function(i,pos){
    var q=s.quiz[i];
    return '<div class="qq" style="animation-delay:'+(pos*35)+'ms"><div class="qn">VRAAG '+(i+1)+' VAN '+s.quiz.length+'</div>'
      +'<h4>'+q[0]+'</h4>'
      +q[1].map(function(o,j){return '<button class="opt" id="o'+i+'-'+j+'" onclick="antwoord('+i+','+j+')">'+o+'</button>'}).join('')
      +'<div class="fb" id="fb'+i+'"></div></div>';
  }).join('');
  idx.forEach(function(i){ if(quizStaat[i]!==null) toonAntwoord(s,i,quizStaat[i]) });
  telQuiz(s);
}
function antwoord(i,j){
  var s=stof(); if(quizStaat[i]!==null)return;
  quizStaat[i]=j;
  if(j===s.quiz[i][2]) verwijderFout(i); else voegFoutToe(i);
  toonAntwoord(s,i,j); telQuiz(s);
}
function toonAntwoord(s,i,j){
  var goed=s.quiz[i][2];
  s.quiz[i][1].forEach(function(_,k){
    var el=document.getElementById('o'+i+'-'+k); if(!el)return;
    el.disabled=true;
    if(k===goed) el.classList.add('good'); else if(k===j) el.classList.add('bad');
  });
  var fb=document.getElementById('fb'+i);
  if(fb){ fb.textContent=(j===goed?'\u2713 Goed. ':'\u2717 Niet goed. ')+s.quiz[i][3]; fb.classList.add('on') }
}
function telQuiz(s){
  var idx=quizIndices(s);
  var klaar=idx.filter(function(i){return quizStaat[i]!==null}).length;
  var goed=idx.filter(function(i){return quizStaat[i]===s.quiz[i][2]}).length;
  document.getElementById('scoreTxt').textContent=klaar+' van '+idx.length+' beantwoord \u2014 '+goed+' goed'+(quizFoutModus?' (foutenoefening)':'');
  document.getElementById('progBar').style.width=(klaar/idx.length*100)+'%';
  var res=document.getElementById('qres');
  if(klaar===idx.length){
    var pct=Math.round(goed/idx.length*100), tip;
    if(pct>=85) tip='Sterk. Je kent dit hoofdstuk. Herhaal over drie dagen nog een keer de flashcards.';
    else if(pct>=60) tip='Op de goede weg. Lees de paragrafen terug van de vragen die fout gingen.';
    else tip='Nog niet genoeg. Lees de samenvatting rustig door en doe daarna de flashcards.';
    var titel=fantasyAan?('\u{1F3C6} Missie voltooid! +'+(goed*10)+' XP — score '+goed+'/'+idx.length+' ('+pct+'%)'):('Je score: '+goed+'/'+idx.length+' ('+pct+'%)');
    res.innerHTML='<div class="call sum'+(fantasyAan?' quest-voltooid':'')+'"><b>'+titel+'</b><br>'+tip+'</div>';
    if(!quizFoutModus) markQuizAfgerond(goed, s.quiz.length);
  } else res.innerHTML='';
}
function resetQuiz(){ var s=stof(); quizStaat=new Array(s.quiz.length).fill(null); quizFoutModus=false; toonQuiz(s); document.getElementById('chapter').scrollTop=0 }

/* ── begrippen ── */
var begrGroep=true;
function toonBegrippen(s){
  if(!s.begrippen.length){
    document.getElementById('chBody').innerHTML=
      '<div class="empty"><h3>Nog geen begrippenlijst</h3><p>Bij dit hoofdstuk staan nog geen begrippen. Kijk bij de samenvatting.</p></div>';
    return;
  }
  document.getElementById('chBody').innerHTML=
    '<div class="bar"><button class="bt'+(begrGroep?'':' gh')+'" onclick="wisselBegrGroep()">'
    +(begrGroep?'\u{1F4D1} Op boekvolgorde':'\u{1F524} Op alfabet')+'</button>'
    +'<input class="zoek" id="zoek" type="search" placeholder="Zoek een begrip\u2026" aria-label="Zoek een begrip" style="flex:1;min-width:180px;margin:0"></div>'
    +'<div id="blist"></div>';
  document.getElementById('zoek').addEventListener('input',function(){ tekenBegrippen(s,this.value) });
  tekenBegrippen(s,'');
}
function wisselBegrGroep(){ begrGroep=!begrGroep; toonBegrippen(stof()); }
function termHtml(b,i){
  var fav=isFavoriet('term',chapterSleutel(),i);
  return '<div class="term"><button class="star'+(fav?' on':'')+'" onclick="klikFavorietTerm(event,'+i+')" aria-label="Favoriet">\u2605</button><b>'+b[0]+'</b><span>'+b[1]+'</span></div>'
}
function klikFavorietTerm(e,i){
  e.stopPropagation();
  var s=stof(), sl=chapterSleutel(), b=s.begrippen[i];
  var nu=toggleFavoriet('term',sl,i,b[0],b[1]);
  var btn=e.target.closest('button');
  if(btn) btn.classList.toggle('on',nu);
}
function tekenBegrippen(s,f){
  var q=(f||'').toLowerCase();
  var alles=s.begrippen.map(function(b,i){return {b:b,i:i}});
  var lijst=alles.filter(function(x){return x.b[0].indexOf(q)>-1||x.b[1].toLowerCase().indexOf(q)>-1});
  if(!lijst.length){ document.getElementById('blist').innerHTML='<p class="dim">Geen begrip gevonden. Probeer een ander woord.</p>'; return }
  if(!begrGroep || q){
    document.getElementById('blist').innerHTML=lijst.map(function(x){return termHtml(x.b,x.i)}).join('');
    return;
  }
  var html='';
  for(var p=-1;p<s.samenvatting.length;p++){
    var groep=lijst.filter(function(x){
      var i=(x.b[2]!==undefined?x.b[2]:paragraafVanTerm(s,x.b[0]));
      return i===p;
    });
    if(!groep.length) continue;
    html+='<div class="parblok"><h4 class="parkop">'+kopVan(s,p)+' <span>'+groep.length+' begrippen</span></h4>'
      +groep.map(function(x){return termHtml(x.b,x.i)}).join('')+'</div>';
  }
  document.getElementById('blist').innerHTML=html;
}

/* ── Cornell-notities ── */
function haalCornell(){ try{return JSON.parse(localStorage.getItem('cornell')||'{}')}catch(e){return {}} }
function bewaarCornell(c){ localStorage.setItem('cornell', JSON.stringify(c)) }
function cornellVoorHoofdstuk(){
  var c=haalCornell(), sl=chapterSleutel();
  return c[sl] || {rijen:[{cue:'',notes:''}], samenvatting:''};
}
function bewaarCornellVoorHoofdstuk(data){
  var c=haalCornell(), sl=chapterSleutel();
  c[sl]=data; bewaarCornell(c);
}
function toonNotities(s){
  var data=cornellVoorHoofdstuk();
  document.getElementById('chBody').innerHTML=
    '<p class="dim">Cornell-notities: schrijf rechts je aantekeningen, en zet er links een kernwoord of vraag bij. '
    +'Vat onderaan in eigen woorden samen. Wordt automatisch bewaard op dit toestel.</p>'
    +'<div class="cornell-wrap" id="cornellWrap"></div>'
    +'<button class="bt gh" onclick="cornellRijToevoegen()">+ Rij toevoegen</button>'
    +'<div class="cornell-sam"><label>Samenvatting in eigen woorden</label>'
    +'<textarea class="groot-veld" id="cornellSam" oninput="cornellSamOpslaan(this.value)" placeholder="Vat dit hoofdstuk in een paar zinnen samen…">'
    +escHtml(data.samenvatting)+'</textarea></div>'
    +'<div class="bar"><button class="bt" onclick="window.print()">🖨 Print / exporteer als PDF</button>'
    +'<button class="bt gh" onclick="cornellWissen()">Wis mijn notities voor dit hoofdstuk</button></div>';
  tekenCornellRijen(data.rijen);
}
function tekenCornellRijen(rijen){
  var doel=document.getElementById('cornellWrap');
  doel.innerHTML=rijen.map(function(r,i){
    return '<div class="cornell-row">'
      +'<textarea class="cornell-cue" oninput="cornellVeldWijzig('+i+',\'cue\',this.value)" placeholder="Kernwoord / vraag">'+escHtml(r.cue)+'</textarea>'
      +'<textarea class="cornell-note" oninput="cornellVeldWijzig('+i+',\'notes\',this.value)" placeholder="Aantekening">'+escHtml(r.notes)+'</textarea>'
      +(rijen.length>1?'<button class="cornell-del" onclick="cornellRijVerwijderen('+i+')" aria-label="Rij verwijderen">✕</button>':'<span></span>')
      +'</div>';
  }).join('');
}
function cornellVeldWijzig(i,veld,waarde){
  var data=cornellVoorHoofdstuk();
  data.rijen[i][veld]=waarde;
  bewaarCornellVoorHoofdstuk(data);
}
function cornellRijToevoegen(){
  var data=cornellVoorHoofdstuk();
  data.rijen.push({cue:'',notes:''});
  bewaarCornellVoorHoofdstuk(data);
  tekenCornellRijen(data.rijen);
}
function cornellRijVerwijderen(i){
  var data=cornellVoorHoofdstuk();
  data.rijen.splice(i,1);
  if(!data.rijen.length) data.rijen=[{cue:'',notes:''}];
  bewaarCornellVoorHoofdstuk(data);
  tekenCornellRijen(data.rijen);
}
function cornellSamOpslaan(v){
  var data=cornellVoorHoofdstuk();
  data.samenvatting=v;
  bewaarCornellVoorHoofdstuk(data);
}
function cornellWissen(){
  if(!confirm('Weet je zeker dat je je notities voor dit hoofdstuk wilt wissen?')) return;
  var c=haalCornell(), sl=chapterSleutel();
  delete c[sl];
  bewaarCornell(c);
  toonNotities(stof());
}

/* ── globale zoekfunctie ── */
function globaalZoeken(q){
  q=(q||'').trim().toLowerCase();
  if(q.length<2) return [];
  var res=[];
  Object.keys(STOF).forEach(function(sleutel){
    var s=STOF[sleutel], delen=sleutel.split('|'), vakId=delen[0], niveauId=delen[1], jaar=delen[2];
    var vak=VAKKEN.find(function(v){return v.id===vakId});
    if(!vak) return;
    s.begrippen.forEach(function(b){
      if(b[0].toLowerCase().indexOf(q)>-1 || b[1].toLowerCase().indexOf(q)>-1){
        res.push({type:'begrip',sleutel:sleutel,vak:vak,niveau:niveauId,jaar:jaar,titel:s.titel,tekst:b[0],detail:b[1]});
      }
    });
    s.cards.forEach(function(c){
      if(c[0].toLowerCase().indexOf(q)>-1 || c[1].toLowerCase().indexOf(q)>-1){
        res.push({type:'kaart',sleutel:sleutel,vak:vak,niveau:niveauId,jaar:jaar,titel:s.titel,tekst:c[0],detail:c[1]});
      }
    });
  });
  return res.slice(0,40);
}
var zoekResultaten=[];
function openZoeken(){
  document.getElementById('zoekwrap').classList.add('show');
  var inp=document.getElementById('globZoek');
  if(inp){ inp.value=''; setTimeout(function(){ inp.focus(); },80); }
  tekenZoekresultaten([]);
}
function closeZoeken(){ document.getElementById('zoekwrap').classList.remove('show'); }
function opZoekInput(v){ tekenZoekresultaten(globaalZoeken(v)); }
function tekenZoekresultaten(res){
  zoekResultaten=res;
  var doel=document.getElementById('zoekres'); if(!doel) return;
  if(!res.length){ doel.innerHTML='<p class="dim">Typ minstens 2 letters om te zoeken in alle vakken.</p>'; return; }
  doel.innerHTML=res.map(function(r,i){
    var niv=NIVEAUS.find(function(n){return n.id===r.niveau});
    return '<div class="zres" onclick="gaNaarZoekresultaat('+i+')"><span class="zvak" style="color:var(--'+r.vak.kleur+')">'+r.vak.naam+'</span>'
      +'<b>'+r.tekst+'</b><span class="zdetail">'+r.detail+'</span>'
      +'<span class="zpad">'+r.titel+' \u00b7 '+(niv?niv.naam:r.niveau)+' '+r.jaar+'</span></div>';
  }).join('');
}
function gaNaarZoekresultaat(i){
  var r=zoekResultaten[i]; if(!r) return;
  var delen=r.sleutel.split('|');
  keuze.vak=delen[0]; keuze.niveau=delen[1]; keuze.jaar=delen[2]; keuze.hoofdstuk=Number(delen[3]);
  tab=(r.type==='kaart')?'flashcards':'begrippen';
  kaartStaat=null; quizStaat=null; quizFoutModus=false;
  closeZoeken();
  go('chapter');
}

/* ── favorieten overlay ── */
function openFavorieten(){
  document.getElementById('favwrap').classList.add('show');
  tekenFavorieten();
}
function closeFavorieten(){ document.getElementById('favwrap').classList.remove('show'); }
function tekenFavorieten(){
  var lijst=haalFavorieten();
  var doel=document.getElementById('favlist'); if(!doel) return;
  if(!lijst.length){ doel.innerHTML='<p class="dim">Nog geen favorieten. Klik op het sterretje bij een begrip of flashcard om het hier te bewaren.</p>'; return; }
  doel.innerHTML=lijst.map(function(f,i){
    var delen=f.sleutel.split('|');
    var vak=VAKKEN.find(function(v){return v.id===delen[0]});
    var niv=NIVEAUS.find(function(n){return n.id===delen[1]});
    return '<div class="favitem"><div class="favgo" onclick="gaNaarFavoriet('+i+')">'
      +'<span class="zvak" style="color:var(--'+(vak?vak.kleur:'accent')+')">'+(vak?vak.naam:delen[0])+' \u00b7 '+(niv?niv.naam:delen[1])+' '+delen[2]+'</span>'
      +'<b>'+f.tekst+'</b><span class="zdetail">'+f.detail+'</span></div>'
      +'<button class="favdel" onclick="verwijderFavoriet('+i+')" aria-label="Verwijder favoriet">\u2715</button></div>';
  }).join('');
}
function gaNaarFavoriet(i){
  var f=haalFavorieten()[i]; if(!f) return;
  var delen=f.sleutel.split('|');
  keuze.vak=delen[0]; keuze.niveau=delen[1]; keuze.jaar=delen[2]; keuze.hoofdstuk=Number(delen[3]);
  tab=(f.type==='kaart')?'flashcards':'begrippen';
  kaartStaat=null; quizStaat=null; quizFoutModus=false;
  closeFavorieten();
  go('chapter');
}
function verwijderFavoriet(i){
  var f=haalFavorieten();
  f.splice(i,1);
  bewaarFavorieten(f);
  tekenFavorieten();
}

/* ═══════ HELP-SLIDES ═══════ */
var SLIDES=[
 ['Welkom bij Samenvattingen','Deze site helpt je stap voor stap naar de juiste samenvatting. Los overhoren, quizzen maken en flashcards oefenen.','\u{1F44B}'],
 ['Kies eerst je vak','Elk vak heeft een eigen kleur, gekozen door de docenten zelf. Klik op een gekleurde kaart om verder te gaan.','\u{1F3A8}'],
 ['Niveau en leerjaar','Kies daarna je niveau (Arbeid, BBL, BK of TL) en je leerjaar. Je gaat dan meteen naar het complete boek.','\u{1F4DA}'],
 ['Open een hoofdstuk','Klik op een hoofdstuk voor de samenvatting. Bovenaan wissel je tussen Samenvatting, Flashcards, Oefenquiz en Begrippenlijst.','\u{1F4D6}'],
 ['Oefenen en hulp','Bij Begrippenlijst kun je zoeken. Bij Flashcards klik je een kaart om te draaien. Kom je er niet uit? Klik rechtsonder op \u2018Vraag het de AI\u2019 voor stap-voor-stap uitleg.','\u{1F4A1}']
];
var slide=0, helpGezien=false;

function openHelp(n){
  slide = n||0;
  document.getElementById('helpwrap').classList.add('open');
  tekenSlide();
}
function closeHelp(){ document.getElementById('helpwrap').classList.remove('open'); helpGezien=true; }
function naarSlide(n){
  if(n<0||n>=SLIDES.length) return;
  slide=n; tekenSlide();
}
function tekenSlide(){
  var s=SLIDES[slide], laatste=(slide===SLIDES.length-1);
  document.getElementById('helpBody').innerHTML=
    '<div class="hslide"><div class="hico">'+s[2]+'</div><h3>'+s[0]+'</h3><p>'+s[1]+'</p></div>';
  document.getElementById('helpDots').innerHTML=SLIDES.map(function(_,i){
    return '<button class="dot'+(i===slide?' on':'')+'" onclick="naarSlide('+i+')" aria-label="Slide '+(i+1)+'"></button>';
  }).join('');
  document.getElementById('helpPrev').style.visibility = slide===0 ? 'hidden' : 'visible';
  document.getElementById('helpNext').textContent = laatste ? 'Klaar' : 'Volgende';
}
function volgendeSlide(){
  if(slide===SLIDES.length-1) closeHelp(); else naarSlide(slide+1);
}
document.addEventListener('keydown',function(e){
  if(!document.getElementById('helpwrap').classList.contains('open')) return;
  if(e.key==='ArrowRight') volgendeSlide();
  if(e.key==='ArrowLeft')  naarSlide(slide-1);
});
document.addEventListener('keydown',function(e){
  if(e.key!=='Escape') return;
  var zw=document.getElementById('zoekwrap'), fw=document.getElementById('favwrap');
  if(zw && zw.classList.contains('show')) closeZoeken();
  if(fw && fw.classList.contains('show')) closeFavorieten();
});
