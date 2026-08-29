/* ═══════ MATCHSPEL (Fase 2, teamproject) ═══════
   Duolingo-achtig matchspelletje: tik de vraag links bij het bijpassende
   antwoord rechts. Gebruikt dezelfde flashcards als het Flashcards-tabblad
   (s.cards), maar is een apart tabblad — dus geen enkele overlap met de
   Oefenquiz en raakt de Leitner-spaced-repetition-data niet aan (dat blijft
   puur het domein van de Flashcards-knoppen Ken ik/Twijfelde/Nog niet). */

var MATCHSPEL_MIN = 3;    // minder dan dit aantal flashcards → geen matchspel mogelijk
var MATCHSPEL_RONDE = 6;  // paren per ronde (willekeurige subset als een hoofdstuk er meer heeft)

var matchspelStaat = null;
var matchspelSelectie = null;
var matchspelFoutTimer = null;

function toonMatchspel(s){
  if(!s.cards || s.cards.length < MATCHSPEL_MIN){
    document.getElementById('chBody').innerHTML =
      '<div class="empty"><h3>Nog te weinig flashcards</h3>'
      +'<p>Er zijn minstens '+MATCHSPEL_MIN+' flashcards nodig voor een matchspel bij dit hoofdstuk. '
      +'Kijk bij de flashcards of de samenvatting.</p></div>';
    return;
  }
  if(!matchspelStaat) matchspelNieuweRonde(s);
  matchspelTekenen();
}

function matchspelSchudden(arr){
  for(var i=arr.length-1;i>0;i--){
    var j=Math.floor(Math.random()*(i+1));
    var t=arr[i]; arr[i]=arr[j]; arr[j]=t;
  }
  return arr;
}

function matchspelNieuweRonde(s){
  s = s || stof();
  clearTimeout(matchspelFoutTimer);
  var indices = s.cards.map(function(c,i){ return i; });
  matchspelSchudden(indices);
  var gekozen = indices.slice(0, Math.min(MATCHSPEL_RONDE, indices.length));
  var paren = gekozen.map(function(i){ return { id:i, vraag:s.cards[i][0], antwoord:s.cards[i][1] }; });
  var links = matchspelSchudden(gekozen.slice());
  var rechts = matchspelSchudden(gekozen.slice());
  matchspelStaat = { paren:paren, links:links, rechts:rechts, opgelost:[], fouten:0, begin:Date.now(), klaar:false, laatsteTijd:null };
  matchspelSelectie = null;
}

function matchspelParVoor(id){
  return matchspelStaat.paren.find(function(p){ return p.id===id; });
}

function matchspelTegelHtml(id, kant){
  var p = matchspelParVoor(id);
  var opgelost = matchspelStaat.opgelost.indexOf(id) > -1;
  var geselecteerd = !!(matchspelSelectie && matchspelSelectie.kant===kant && matchspelSelectie.id===id);
  var tekst = kant==='links' ? p.vraag : p.antwoord;
  var klasse = 'match-tegel'+(opgelost?' opgelost':'')+(geselecteerd?' geselecteerd':'');
  return '<button type="button" class="'+klasse+'" data-id="'+id+'" data-kant="'+kant+'"'
    +(opgelost ? ' disabled' : ' onclick="matchspelKlik('+id+',\''+kant+'\')"')
    +'>'+escHtml(tekst)+(opgelost?' \u2713':'')+'</button>';
}

function matchspelTekenen(){
  var doel = document.getElementById('chBody');
  if(!doel || !matchspelStaat) return;
  var st = matchspelStaat;

  if(st.klaar){
    var duur = Math.max(0, Math.round((st.laatsteTijd - st.begin)/1000));
    doel.innerHTML = '<div class="empty"><h3>\u{1F389} Ronde voltooid!</h3>'
      +'<p>'+st.paren.length+' paren gematcht in '+duur+' seconden, met '
      +st.fouten+' fout'+(st.fouten===1?'':'e')+' po'+(st.fouten===1?'ging':'gingen')+'.</p>'
      +'<button class="bt" onclick="matchspelNieuweRonde();matchspelTekenen()">\u21BA Nog een keer</button></div>';
    return;
  }

  doel.innerHTML = '<p class="dim">Tik een vraag links en het bijpassende antwoord rechts. Goed = groen, fout = kort rood.</p>'
    +'<div class="match-status">'+st.opgelost.length+' van '+st.paren.length+' gematcht &middot; '
    +st.fouten+' fout'+(st.fouten===1?'':'en')+'</div>'
    +'<div class="match-grid">'
    +'<div class="match-col">'+st.links.map(function(id){ return matchspelTegelHtml(id,'links'); }).join('')+'</div>'
    +'<div class="match-col">'+st.rechts.map(function(id){ return matchspelTegelHtml(id,'rechts'); }).join('')+'</div>'
    +'</div>';
}

function matchspelKlik(id, kant){
  if(!matchspelSelectie || matchspelSelectie.kant === kant){
    matchspelSelectie = { kant:kant, id:id };
    matchspelTekenen();
    return;
  }

  var goed = matchspelSelectie.id === id;
  if(goed){
    matchspelStaat.opgelost.push(id);
    matchspelSelectie = null;
    if(matchspelStaat.opgelost.length === matchspelStaat.paren.length){
      matchspelStaat.klaar = true;
      matchspelStaat.laatsteTijd = Date.now();
    }
    matchspelTekenen();
    return;
  }

  matchspelStaat.fouten++;
  var linksId = kant==='links' ? id : matchspelSelectie.id;
  var rechtsId = kant==='rechts' ? id : matchspelSelectie.id;
  matchspelSelectie = null;
  matchspelTekenen();

  var linksEl = document.querySelector('.match-tegel[data-kant="links"][data-id="'+linksId+'"]');
  var rechtsEl = document.querySelector('.match-tegel[data-kant="rechts"][data-id="'+rechtsId+'"]');
  if(linksEl) linksEl.classList.add('fout');
  if(rechtsEl) rechtsEl.classList.add('fout');
  clearTimeout(matchspelFoutTimer);
  matchspelFoutTimer = setTimeout(function(){
    if(linksEl) linksEl.classList.remove('fout');
    if(rechtsEl) rechtsEl.classList.remove('fout');
  }, 500);
}

function matchspelOpRuimen(){
  clearTimeout(matchspelFoutTimer);
}
