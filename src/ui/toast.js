/* Small status message at the bottom of the screen. */
import { $ } from '../lib/dom.js';

const TOAST_DURATION_MS = 2600;
let timer = null;

export function showToast(text) {
  let el = $('toast');
  if (!el) {
    el = document.createElement('div');
    el.id = 'toast';
    el.className = 'toast';
    document.body.appendChild(el);
  }
  el.textContent = text;
  el.classList.add('show');
  clearTimeout(timer);
  timer = setTimeout(() => el.classList.remove('show'), TOAST_DURATION_MS);
}
