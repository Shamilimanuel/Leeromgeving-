/* Registers the service worker (installable + offline) and watches for new
   builds.

   A deploy replaces public/sw.js, the browser notices the new bytes, installs
   the worker and parks it in `waiting`. That is the moment we tell the student
   an update is ready; `src/ui/appUpdate.js` owns the bar and the reload. */
import { showUpdateBar } from './appUpdate.js';
import { APP_VERSION } from '../content/changelog.js';

/* A tab left open all afternoon should still notice a deploy. */
const UPDATE_CHECK_INTERVAL_MS = 60 * 60 * 1000;
/* Coming back to the tab checks too, but not more often than this. */
const UPDATE_CHECK_THROTTLE_MS = 15 * 60 * 1000;
/* An old worker does not answer a VERSION question; do not wait on it. */
const VERSION_REPLY_TIMEOUT_MS = 700;

export function registerServiceWorker() {
  if (!('serviceWorker' in navigator)) return;

  window.addEventListener('load', async () => {
    let registration;
    try {
      registration = await navigator.serviceWorker.register(import.meta.env.BASE_URL + 'sw.js');
    } catch {
      return; /* offline support is optional */
    }
    watchForUpdate(registration);
    scheduleUpdateChecks(registration);
  });
}

function watchForUpdate(registration) {
  // `controller` is null on the very first install: that is a new visitor
  // getting the site, not an update to announce.
  if (registration.waiting && navigator.serviceWorker.controller) {
    offerUpdate(registration.waiting);
  }
  registration.addEventListener('updatefound', () => {
    const installing = registration.installing;
    if (!installing) return;
    installing.addEventListener('statechange', () => {
      if (installing.state === 'installed' && navigator.serviceWorker.controller) {
        offerUpdate(installing);
      }
    });
  });
}

/* Reloading is only worth asking about when this page is actually running the
   old code. Someone who just opened the site after a deploy already fetched
   the new build over the network, and only the worker is behind: let it take
   over quietly instead of offering a reload that would change nothing. */
async function offerUpdate(worker) {
  if (await workerVersion(worker) === APP_VERSION) {
    worker.postMessage({ type: 'SKIP_WAITING' });
    return;
  }
  showUpdateBar(worker);
}

function workerVersion(worker) {
  return new Promise((resolve) => {
    const channel = new MessageChannel();
    const done = setTimeout(() => resolve(null), VERSION_REPLY_TIMEOUT_MS);
    channel.port1.onmessage = (e) => {
      clearTimeout(done);
      resolve(e.data);
    };
    try {
      worker.postMessage({ type: 'VERSION' }, [channel.port2]);
    } catch {
      clearTimeout(done);
      resolve(null);   // treat an unreachable worker as "different"
    }
  });
}

function scheduleUpdateChecks(registration) {
  let lastCheck = Date.now();
  const check = () => {
    lastCheck = Date.now();
    registration.update().catch(() => { /* offline: try again later */ });
  };
  setInterval(check, UPDATE_CHECK_INTERVAL_MS);
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden && Date.now() - lastCheck > UPDATE_CHECK_THROTTLE_MS) check();
  });
}
