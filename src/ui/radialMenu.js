/* The fold-out menu in the bottom-left corner that bundles all the loose tool buttons. */
import { $ } from '../lib/dom.js';
import { onEnter, SCREENS } from './navigation.js';

function setExpanded(open) {
  const trigger = $('radialtrigger');
  if (trigger) trigger.setAttribute('aria-expanded', open ? 'true' : 'false');
}

export function openRadialMenu() {
  const menu = $('radialmenu');
  if (!menu) return;
  menu.classList.add('open');
  setExpanded(true);
}

export function closeRadialMenu() {
  const menu = $('radialmenu');
  if (!menu) return;
  menu.classList.remove('open');
  setExpanded(false);
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
  // The menu is hidden on the splash screen and shown everywhere else.
  onEnter((id) => {
    const menu = $('radialmenu');
    if (!menu) return;
    menu.classList.toggle('show', id !== SCREENS.splash);
    // Home is the only screen with the bell and account buttons, so the
    // trigger has to sit further left there (see src/styles/mobile.css).
    menu.classList.toggle('op-home', id === SCREENS.home);
    if (id === SCREENS.splash) closeRadialMenu();
  });
}
