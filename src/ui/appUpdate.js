/* The "nieuwe versie klaar" bar.

   A new build reaches a phone as a new service worker that installs in the
   background and then *waits*: the page keeps running the old code until it is
   reloaded. Reloading on our own would throw a student out of a quiz, so the
   bar asks first. `src/ui/serviceWorker.js` decides when to show it. */
import { $ } from '../lib/dom.js';

/* If the new worker never takes over (an old browser, a worker that fails to
   activate) reload anyway rather than leaving a dead button. */
const RELOAD_FALLBACK_MS = 3000;

let waiting = null;
let reloading = false;

export function showUpdateBar(worker) {
  waiting = worker;
  const bar = $('updatebalk');
  if (bar) bar.classList.add('show');
}

export function dismissUpdate() {
  const bar = $('updatebalk');
  if (bar) bar.classList.remove('show');
  // The worker stays waiting: the update lands on the next visit anyway.
}

export function applyUpdate() {
  if (reloading) return;
  reloading = true;
  const bar = $('updatebalk');
  if (bar) bar.classList.remove('show');

  if (!waiting) {
    window.location.reload();
    return;
  }
  // The worker only calls skipWaiting() when we ask, so this is the moment it
  // takes over; `controllerchange` then tells us the new code is in place.
  navigator.serviceWorker.addEventListener('controllerchange', reloadOnce);
  setTimeout(reloadOnce, RELOAD_FALLBACK_MS);
  waiting.postMessage({ type: 'SKIP_WAITING' });
}

let reloaded = false;
function reloadOnce() {
  if (reloaded) return;
  reloaded = true;
  window.location.reload();
}
