/* Service worker for Samenvattingen.
   Strategy: network-first, with a runtime cache as the offline fallback.
   There is deliberately NO fixed list of files to pre-cache: the build emits
   hashed asset names that change on every deploy. Instead the worker caches
   everything that is fetched successfully, so the site keeps working offline
   after the first visit without this file ever needing an update.

   Updates: this worker does NOT call skipWaiting() on install. A new build
   installs in the background and then waits, so a student is never thrown out
   of a quiz by a reload they did not ask for. src/ui/serviceWorker.js spots
   the waiting worker and shows the "nieuwe versie klaar" bar; only when the
   student taps Vernieuwen does the page send SKIP_WAITING and reload. */

/* MUST match APP_VERSION in src/content/changelog.js and `version` in
   package.json; tests/changelog.test.js fails when they drift apart.

   This is not decoration. A browser only installs a new worker when sw.js
   differs byte-for-byte from the one it already has, so without a version in
   this file a deploy would go completely unnoticed and no student would ever
   be told about an update. It doubles as the cache generation, which drops the
   previous build's hashed bundles instead of piling them up forever. */
var APP_VERSION = '2.3.2';
var CACHE_NAME = 'samenvattingen-' + APP_VERSION;

/* No 'install' handler: there is nothing to pre-cache, and staying in `waiting`
   until the page sends SKIP_WAITING is exactly the behaviour we want. */
self.addEventListener('message', function (e) {
  if (!e.data) return;
  if (e.data.type === 'SKIP_WAITING') self.skipWaiting();
  /* The page asks a waiting worker which build it is, to tell "you are running
     old code, offer a reload" apart from "you already loaded the new code, the
     worker is just catching up". Answered over the port the page sent. */
  if (e.data.type === 'VERSION' && e.ports && e.ports[0]) e.ports[0].postMessage(APP_VERSION);
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k !== CACHE_NAME; }).map(function (k) { return caches.delete(k); }));
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', function (e) {
  if (e.request.method !== 'GET') return;
  var url = new URL(e.request.url);
  if (url.origin !== self.location.origin) return;

  e.respondWith(
    fetch(e.request).then(function (res) {
      if (res && res.status === 200) {
        var copy = res.clone();
        caches.open(CACHE_NAME).then(function (cache) { cache.put(e.request, copy); });
      }
      return res;
    }).catch(function () {
      return caches.match(e.request).then(function (cached) {
        return cached || caches.match('./index.html');
      });
    })
  );
});
