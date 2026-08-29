/* Screen navigation. Every `<section class="screen">` in index.html is a
   screen; `go(id)` renders it (if a renderer is registered) and animates the
   transition. Features hook into navigation with `onLeave` / `onEnter` instead
   of `go` knowing about them. */
import { $ } from '../lib/dom.js';

const renderers = {};
const leaveListeners = [];
const enterListeners = [];

export const SCREENS = {
  splash: 'splash',
  home: 'home',
  character: 'personage',
  account: 'account',
  settings: 'settings',
  admin: 'admin',
  chat: 'chat',
  level: 'level',
  book: 'book',
  chapter: 'chapter',
};

/* Register the function that fills a screen right before it is shown. */
export function registerScreen(id, render) {
  renderers[id] = render;
}

/* Called with the target screen id before it is rendered (use for cleanup). */
export function onLeave(fn) {
  leaveListeners.push(fn);
}

/* Called with the screen id after it has been shown. */
export function onEnter(fn) {
  enterListeners.push(fn);
}

export function go(id) {
  leaveListeners.forEach((fn) => fn(id));
  if (renderers[id]) renderers[id]();

  const current = document.querySelector('.screen.on');
  if (current) {
    current.classList.add('leaving');
    current.classList.remove('on');
    setTimeout(() => current.classList.remove('leaving'), 500);
  }
  const next = $(id);
  next.scrollTop = 0;
  next.classList.add('on');

  enterListeners.forEach((fn) => fn(id));
}

export function isScreenActive(id) {
  const el = $(id);
  return !!el && el.classList.contains('on');
}

export function scrollScreenToTop(id) {
  const el = $(id);
  if (el) el.scrollTop = 0;
}
