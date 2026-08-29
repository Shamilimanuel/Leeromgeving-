/* ═══════ TEAMCHAT ═══════
   Eén globale chatruimte voor alle ingelogde leerlingen (public.chatberichten).
   RLS regelt op de database wie mag lezen/schrijven/verwijderen — dit
   bestand doet alleen de weergave en roept sb rechtstreeks aan.
   Live updates via een Supabase realtime-kanaal, met een polling-noodgreep
   erbovenop (sommige schoolnetwerken blokkeren websockets). */

var chatKanaal = null;
var chatPollTimer = null;

function chatFoutTekst(err){
  var m = (err && err.message) || String(err||'');
  if(/row-level security|permission denied/i.test(m)) return 'Je bericht kon niet worden geplaatst — mogelijk ben je gedemd door een beheerder.';
  if(/networkerror|failed to fetch/i.test(m)) return 'Geen verbinding — controleer je internet.';
  return m || 'Er ging iets mis. Probeer het nog eens.';
}

async function renderChat(){
  var wrap = document.getElementById('chat');
  var gastMsg = document.getElementById('chatGast');
  var lijstBox = document.getElementById('chatLijstBox');
  if(!wrap) return;
  if(!huidigProfiel){
    try{ await accountProfielLaden(); }catch(e){ /* genegeerd — toont hieronder gewoon de gastmelding */ }
  }
  if(!huidigProfiel){
    if(gastMsg) gastMsg.style.display = 'block';
    if(lijstBox) lijstBox.style.display = 'none';
    return;
  }
  if(gastMsg) gastMsg.style.display = 'none';
  if(lijstBox) lijstBox.style.display = 'block';

  var meld = document.getElementById('chatMelding');
  if(meld) meld.innerHTML = '';
  var form = document.getElementById('chatForm');
  var gemuteMelding = document.getElementById('chatGemuteMelding');
  if(form) form.style.display = huidigProfiel.gemute ? 'none' : 'flex';
  if(gemuteMelding) gemuteMelding.style.display = huidigProfiel.gemute ? 'block' : 'none';

  var lijst = document.getElementById('chatLijst');
  if(lijst) lijst.innerHTML = '<p class="lede">Berichten laden&hellip;</p>';
  try{
    var berichten = await chatBerichtenLaden();
    chatVerversLijst(berichten);
  }catch(err){
    if(lijst) lijst.innerHTML = '<div class="call warn">'+chatFoutTekst(err)+'</div>';
  }
  chatRealtimeStarten();
  chatPollingStarten();
}

/* Twee losse query's i.p.v. PostgREST-embedding: chatberichten.gebruiker_id
   verwijst naar auth.users, niet rechtstreeks naar public.profiles, dus
   automatische joins werken hier niet. We koppelen dus zelf. */
async function chatBerichtenLaden(){
  var res = await sb.from('chatberichten').select('*').order('aangemaakt_op', { ascending: true }).limit(80);
  if(res.error) throw res.error;
  var berichten = res.data || [];
  if(!berichten.length) return [];
  var idsUniek = {};
  berichten.forEach(function(b){ idsUniek[b.gebruiker_id] = true; });
  var ids = Object.keys(idsUniek);
  var profRes = await sb.from('profiles').select('id,gebruikersnaam,rol').in('id', ids);
  var profMap = {};
  (profRes.data || []).forEach(function(p){ profMap[p.id] = p; });
  return berichten.map(function(b){
    var p = profMap[b.gebruiker_id];
    return {
      id: b.id,
      tekst: b.tekst,
      aangemaakt_op: b.aangemaakt_op,
      gebruiker_id: b.gebruiker_id,
      gebruikersnaam: p ? p.gebruikersnaam : 'Onbekend',
      rol: p ? p.rol : 'leerling'
    };
  });
}

function chatBerichtHtml(m){
  var eigen = huidigeSessie && huidigeSessie.user && m.gebruiker_id === huidigeSessie.user.id;
  var isAdminBericht = m.rol === 'admin';
  var tijd = '';
  try{ tijd = new Date(m.aangemaakt_op).toLocaleTimeString('nl-NL', { hour:'2-digit', minute:'2-digit' }); }catch(e){}
  var muteKnop = '';
  if(huidigProfiel && huidigProfiel.rol === 'admin' && !eigen && !isAdminBericht){
    muteKnop = '<button type="button" class="chat-mute" title="Dempen / ontdempen" onclick="chatAdminMute(\''+m.gebruiker_id+'\',\''+String(m.gebruikersnaam).replace(/'/g,"\\'")+'\')">\u{1F507}</button>';
  }
  return '<div class="chat-msg'+(eigen?' eigen':'')+(isAdminBericht?' vanadmin':'')+'" data-id="'+m.id+'">'+
    '<div class="chat-msg-head"><b>'+escHtml(m.gebruikersnaam)+'</b>'+
    (isAdminBericht?' <span class="chat-badge">Beheerder</span>':'')+
    '<span class="chat-tijd">'+tijd+'</span>'+muteKnop+'</div>'+
    '<div class="chat-msg-tekst">'+escHtml(m.tekst)+'</div>'+
    '</div>';
}

function chatVerversLijst(berichten){
  var lijst = document.getElementById('chatLijst');
  if(!lijst) return;
  if(!berichten.length){
    lijst.innerHTML = '<p class="lede">Nog geen berichten — wees de eerste!</p>';
    return;
  }
  var wasOnderaan = (lijst.scrollTop + lijst.clientHeight) >= (lijst.scrollHeight - 40);
  lijst.innerHTML = berichten.map(chatBerichtHtml).join('');
  if(wasOnderaan) lijst.scrollTop = lijst.scrollHeight;
}

async function chatVerstuurPoging(e){
  e.preventDefault();
  var veld = document.getElementById('chatInvoer');
  var meld = document.getElementById('chatMelding');
  if(!veld) return;
  var tekst = veld.value.trim();
  if(!tekst) return;
  if(tekst.length > 500){ meld.innerHTML = '<div class="call warn">Bericht is te lang (max 500 tekens).</div>'; return; }
  if(!huidigeSessie){ meld.innerHTML = '<div class="call warn">Je bent niet ingelogd.</div>'; return; }
  veld.disabled = true;
  try{
    var res = await sb.from('chatberichten').insert({ gebruiker_id: huidigeSessie.user.id, tekst: tekst });
    if(res.error) throw res.error;
    veld.value = '';
    meld.innerHTML = '';
    var berichten = await chatBerichtenLaden();
    chatVerversLijst(berichten);
    var lijst = document.getElementById('chatLijst');
    if(lijst) lijst.scrollTop = lijst.scrollHeight;
  }catch(err){
    meld.innerHTML = '<div class="call warn">'+chatFoutTekst(err)+'</div>';
  }finally{
    veld.disabled = false;
    veld.focus();
  }
}

/* ── Live updates: realtime-kanaal + polling-noodgreep ── */

function chatRealtimeStarten(){
  chatRealtimeStoppen();
  try{
    chatKanaal = sb.channel('chatberichten-live')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'chatberichten' }, function(){
        chatBerichtenLaden().then(chatVerversLijst).catch(function(){ /* genegeerd, polling vangt dit op */ });
      })
      .subscribe();
  }catch(e){ /* realtime niet beschikbaar — polling vangt dit op */ }
}
function chatRealtimeStoppen(){
  if(chatKanaal){ try{ sb.removeChannel(chatKanaal); }catch(e){} chatKanaal = null; }
}
function chatPollingStarten(){
  chatPollingStoppen();
  chatPollTimer = setInterval(function(){
    var scherm = document.getElementById('chat');
    if(!scherm || !scherm.classList.contains('on')) return;
    chatBerichtenLaden().then(chatVerversLijst).catch(function(){ /* genegeerd */ });
  }, 8000);
}
function chatPollingStoppen(){
  if(chatPollTimer){ clearInterval(chatPollTimer); chatPollTimer = null; }
}
function chatOpRuimen(){
  chatRealtimeStoppen();
  chatPollingStoppen();
}

/* ── Adminmoderatie: snel dempen/ontdempen vanuit de chat zelf ── */

async function chatAdminMute(gebruikerId, naam){
  if(!huidigProfiel || huidigProfiel.rol !== 'admin') return;
  if(!window.confirm('"'+naam+'" dempen of ontdempen in de teamchat?')) return;
  try{
    var huidigeRes = await sb.from('profiles').select('gemute').eq('id', gebruikerId).single();
    if(huidigeRes.error) throw huidigeRes.error;
    var nieuw = !(huidigeRes.data && huidigeRes.data.gemute);
    var res = await sb.from('profiles').update({ gemute: nieuw }).eq('id', gebruikerId);
    if(res.error) throw res.error;
    toon(nieuw ? naam+' is gedemd.' : naam+' is ontdemd.');
  }catch(err){
    toon('Kon niet wijzigen: '+chatFoutTekst(err));
  }
}
