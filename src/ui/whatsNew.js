/* "Wat is er nieuw?": the release notes from src/content/changelog.js.

   Opens by itself once after an update, the way an app store shows what
   changed. A student who has never been here before does not get it: they get
   the help slides instead, so the two never stack. */
import { $, setHtml, escapeHtml } from '../lib/dom.js';
import { STORAGE_KEYS, readString, writeString } from '../lib/storage.js';
import { APP_VERSION, CHANGELOG, entriesSince } from '../content/changelog.js';
import { onEnter, SCREENS } from './navigation.js';
import { markHelpSeen } from './help.js';

const AUTO_OPEN_DELAY_MS = 1400;
const MONTHS = ['januari', 'februari', 'maart', 'april', 'mei', 'juni',
  'juli', 'augustus', 'september', 'oktober', 'november', 'december'];

/* Set at startup: the entries to highlight when the sheet opens by itself. */
let unseen = [];

export function lastSeenVersion() {
  return readString(STORAGE_KEYS.lastSeenVersion);
}

/* The dot on the bell in the top bar: on when there is a release the student
   has not read yet. Cheap enough to recompute rather than cache. */
export function refreshNoticeDot() {
  const dot = $('belStip');
  if (!dot) return;
  const seen = lastSeenVersion();
  dot.hidden = !seen || entriesSince(seen).length === 0;
}

function rememberVersion() {
  writeString(STORAGE_KEYS.lastSeenVersion, APP_VERSION);
}

/* "2026-08-30" -> "30 augustus 2026". An unexpected value is shown as-is. */
function dutchDate(iso) {
  const parts = String(iso).split('-');
  const month = MONTHS[Number(parts[1]) - 1];
  if (parts.length !== 3 || !month) return String(iso);
  return Number(parts[2]) + ' ' + month + ' ' + parts[0];
}

function entryHtml(entry, isNew) {
  return '<div class="nieuw-versie' + (isNew ? ' nu' : '') + '">'
    + '<div class="nieuw-kop">'
    + '<b>' + escapeHtml(entry.title) + '</b>'
    + (isNew ? '<span class="nieuw-vlag">Nieuw</span>' : '')
    + '</div>'
    + '<div class="nieuw-meta">Versie ' + escapeHtml(entry.version) + ' &middot; ' + escapeHtml(dutchDate(entry.date)) + '</div>'
    + '<ul class="nieuw-lijst">'
    + entry.changes.map((line) => '<li>' + escapeHtml(line) + '</li>').join('')
    + '</ul></div>';
}

/* `onlyUnseen` is what the automatic pop-up passes: show just what changed
   since the student's last visit. From the menu you get the full history. */
export function openWhatsNew(onlyUnseen) {
  const entries = onlyUnseen && unseen.length ? unseen : CHANGELOG;
  const newest = entries[0] ? entries[0].version : APP_VERSION;
  setHtml('nieuwBody', entries.map((entry) => entryHtml(entry, entry.version === newest && !!onlyUnseen)).join('')
    + '<p class="nieuw-voet">Je gebruikt versie ' + escapeHtml(APP_VERSION) + '.</p>');
  const wrap = $('nieuwwrap');
  if (wrap) wrap.classList.add('show');
  rememberVersion();
  refreshNoticeDot();
  unseen = [];
}

export function closeWhatsNew() {
  const wrap = $('nieuwwrap');
  if (wrap) wrap.classList.remove('show');
}

export function initWhatsNew() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeWhatsNew();
  });

  refreshNoticeDot();
  const seen = lastSeenVersion();
  if (!seen) {
    // First visit ever: the help slides do the welcoming, so only record where
    // this student came in.
    rememberVersion();
    return;
  }
  unseen = entriesSince(seen);
  if (!unseen.length) {
    rememberVersion();
    return;
  }

  // Decided here rather than in the listener below, so it does not depend on
  // whether initHelp() or initWhatsNew() registered its onEnter first.
  markHelpSeen();
  onEnter((id) => {
    if (id !== SCREENS.home || !unseen.length) return;
    setTimeout(() => openWhatsNew(true), AUTO_OPEN_DELAY_MS);
  });
}
