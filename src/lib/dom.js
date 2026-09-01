/* Small DOM helpers shared by the UI modules. */

export function $(id) {
  return document.getElementById(id);
}

/* Escape text so it can be placed inside HTML, as element content *and*
   inside a quoted attribute value. Quotes are escaped too, so a value can
   never break out of an attribute. */
export function escapeHtml(value) {
  return String(value == null ? '' : value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/* Markup for a warning box with escaped text (error messages may echo user
   input or come from the server, so they are never inserted raw). */
export function warningBox(text) {
  return '<div class="call warn">' + escapeHtml(text) + '</div>';
}

/* Markup for a neutral status box ("Bezig…") with escaped text. */
export function infoBox(text) {
  return '<div class="call">' + escapeHtml(text) + '</div>';
}

/* Set innerHTML on an element by id, ignoring missing elements. */
export function setHtml(id, html) {
  const el = $(id);
  if (el) el.innerHTML = html;
}

/* Only values matching these shapes are ever interpolated into inline
   `onclick="..."` handlers. Anything else (names, free text) is looked up by
   id at click time instead of being written into markup. */
const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const INT_RE = /^\d{1,18}$/;

export function isUuid(value) {
  return UUID_RE.test(String(value));
}

export function isIntegerId(value) {
  return INT_RE.test(String(value));
}
