/* ═══════ VOORLEZEN (tekst-naar-spraak via ElevenLabs) ═══════
   Elke koptekst in de samenvatting krijgt een 🔊-knopje. Klikken stuurt de
   platte tekst van die paragraaf naar de beveiligde Edge Function
   `voorlezen` (nooit rechtstreeks naar ElevenLabs vanuit de browser — de
   API-sleutel blijft geheim op de server). Die geeft een audiofragment
   terug dat hier wordt afgespeeld. Alleen voor ingelogde gebruikers, want
   elke aanroep kost echt geld. */

var voorleesAudioEl = null;
var voorleesActieveKnop = null;
var voorleesCache = {}; // tekst-hash -> object-URL, voorkomt dubbele aanroepen binnen dezelfde sessie

function voorleesHash(s){
  var h = 0;
  for(var i=0;i<s.length;i++){ h = (h*31 + s.charCodeAt(i)) | 0; }
  return String(h);
}

/* Zet de HTML van een samenvatting-paragraaf om naar leesbare platte tekst.
   Gebruikt de browser zelf om tags te strippen en entities te decoderen
   (betrouwbaarder dan zelf regex'en), met wat punten erbij zodat zinnen niet
   aan elkaar plakken. */
function voorleesStripHtml(html){
  var tmp = String(html||'')
    .replace(/<\/(p|div|li|h[1-6])>/gi, '. ')
    .replace(/<br\s*\/?>/gi, '. ');
  var el = document.createElement('div');
  el.innerHTML = tmp;
  var tekst = el.textContent || el.innerText || '';
  return tekst.replace(/\s+/g, ' ').replace(/\.(\s*\.)+/g, '.').trim();
}

async function voorleesSectie(knopEl, idx){
  var s = stof();
  if(!s || !s.samenvatting || !s.samenvatting[idx]) return;
  var p = s.samenvatting[idx];
  var tekst = p.kop + '. ' + voorleesStripHtml(p.html);
  await voorleesSpeel(tekst, knopEl);
}

async function voorleesSpeel(tekst, knopEl){
  // Zelfde knopje nog eens aangeklikt terwijl het speelt → stoppen.
  if(voorleesActieveKnop === knopEl && voorleesAudioEl && !voorleesAudioEl.paused){
    voorleesStop();
    return;
  }
  voorleesStop(); // ander fragment aan het spelen? eerst dat stoppen

  if(!huidigProfiel){
    try{ await accountProfielLaden(); }catch(e){ /* genegeerd */ }
  }
  if(!huidigProfiel){
    toon('Log in om tekst te laten voorlezen.');
    return;
  }

  voorleesActieveKnop = knopEl;
  knopEl.disabled = true;
  knopEl.innerHTML = '\u23F3';

  try{
    var sleutel = voorleesHash(tekst);
    var url = voorleesCache[sleutel];
    if(!url){
      var sessieRes = await sb.auth.getSession();
      var session = sessieRes.data && sessieRes.data.session;
      if(!session) throw new Error('Niet ingelogd.');
      var res = await fetch(SUPABASE_URL + '/functions/v1/voorlezen', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + session.access_token },
        body: JSON.stringify({ tekst: tekst })
      });
      if(!res.ok){
        var foutTekst = 'Voorlezen mislukt.';
        try{ var j = await res.json(); if(j && j.error) foutTekst = j.error; }catch(e){}
        throw new Error(foutTekst);
      }
      var blob = await res.blob();
      url = URL.createObjectURL(blob);
      voorleesCache[sleutel] = url;
    }
    var audio = new Audio(url);
    voorleesAudioEl = audio;
    audio.onended = voorleesReset;
    audio.onerror = function(){ toon('Afspelen mislukt.'); voorleesReset(); };
    await audio.play();
    if(voorleesActieveKnop === knopEl){
      knopEl.disabled = false;
      knopEl.innerHTML = '\u23F9';
    }
  }catch(err){
    toon('Voorlezen mislukt: ' + ((err && err.message) || err));
    voorleesReset();
  }
}

function voorleesReset(){
  if(voorleesActieveKnop){ voorleesActieveKnop.disabled = false; voorleesActieveKnop.innerHTML = '\u{1F50A}'; }
  voorleesActieveKnop = null;
  voorleesAudioEl = null;
}
function voorleesStop(){
  if(voorleesAudioEl){ try{ voorleesAudioEl.pause(); }catch(e){} }
  voorleesReset();
}
