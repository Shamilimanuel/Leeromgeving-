/* The tools menu (Gereedschapskist): one button, bottom-left on wide screens
   and in the top bar on phones, opening a panel grouped into Leren, Focus and
   Weergave. The name is left over from the arc it replaced in 2.7. */
import { $ } from '../lib/dom.js';
import { onEnter, SCREENS } from './navigation.js';
import { isLockedOut } from './authGate.js';
import { getFavorites } from '../state/progress.js';

/* The count on the Favorieten tile, read fresh each time the menu opens. */
function drawFavoriteCount() {
  const badge = $('favBadge');
  if (!badge) return;
  const count = getFavorites().length;
  badge.hidden = count === 0;
  badge.textContent = String(count);
}

function setExpanded(open) {
  const trigger = $('radialtrigger');
  if (trigger) trigger.setAttribute('aria-expanded', open ? 'true' : 'false');
}

export function openRadialMenu() {
  const menu = $('radialmenu');
  if (!menu) return;
  drawFavoriteCount();
  menu.classList.add('open');
  setExpanded(true);
  // Keyboard users land in the panel instead of behind it.
  const first = menu.querySelector('.tools-tile');
  if (first) first.focus({ preventScroll: true });
}

export function closeRadialMenu() {
  const menu = $('radialmenu');
  if (!menu) return;
  const hadFocus = menu.contains(document.activeElement);
  menu.classList.remove('open');
  setExpanded(false);
  const trigger = $('radialtrigger');
  if (hadFocus && trigger && document.activeElement !== trigger) trigger.focus({ preventScroll: true });
}

export function toggleRadialMenu() {
  const menu = $('radialmenu');
  if (!menu) return;
  if (menu.classList.contains('open')) closeRadialMenu();
  else openRadialMenu();
}

export function initRadialMenu() {
  document.addEventListener('click', (e) => {
    const menu = $('radialmenu');
    if (menu && menu.classList.contains('open') && !menu.contains(e.target)) closeRadialMenu();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeRadialMenu();
  });
  /* Hidden on the splash, and hidden at the login screen: Zoeken, Oefentoets
     and the rest are no use to someone who has not signed in yet, and the
     menu was the one way past the gate into them. */
  onEnter((id) => {
    const menu = $('radialmenu');
    if (!menu) return;
    const hide = id === SCREENS.splash || isLockedOut();
    menu.classList.toggle('show', !hide);
    // Home is the only screen with the bell and account buttons, so the
    // trigger has to sit further left there (see src/styles/mobile.css).
    menu.classList.toggle('op-home', id === SCREENS.home);
    if (hide) closeRadialMenu();
  });
}
