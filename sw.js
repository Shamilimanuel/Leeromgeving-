/* Service worker voor Samenvattingen.
   Strategie: network-first met runtime cache als offline-fallback.
   Er wordt hier BEWUST geen vaste lijst van hoofdstuk-bestanden bijgehouden —
   die lijst verandert elke keer als er een nieuw hoofdstuk bijkomt (via bouw.py).
   In plaats daarvan cachet deze worker gewoon alles wat succesvol opgehaald wordt,
   zodat de site na het eerste bezoek ook offline werkt, zonder dat sw.js
   steeds aangepast hoeft te worden. */

var CACHE_NAME = 'samenvattingen-v1';

self.addEventListener('install', function(e){
  self.skipWaiting();
});

self.addEventListener('activate', function(e){
  e.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.filter(function(k){ return k!==CACHE_NAME; }).map(function(k){ return caches.delete(k); }));
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', function(e){
  if(e.request.method !== 'GET') return;
  var url = new URL(e.request.url);
  if(url.origin !== self.location.origin) return;

  e.respondWith(
    fetch(e.request).then(function(res){
      if(res && res.status===200){
        var copy = res.clone();
        caches.open(CACHE_NAME).then(function(cache){ cache.put(e.request, copy); });
      }
      return res;
    }).catch(function(){
      return caches.match(e.request).then(function(cached){
        return cached || caches.match('./index.html');
      });
    })
  );
});
