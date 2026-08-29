/* Admin panel: invite codes + list of all students with reset / block /
   mute / delete actions.

   Only validated ids are ever written into inline handlers; names and other
   free text are looked up from the last rendered lists at click time. */
import { $, setHtml, escapeHtml, warningBox, infoBox, isUuid } from '../lib/dom.js';
import { MAX_INVITES_PER_BATCH } from '../config.js';
import * as auth from '../services/auth.js';
import { showToast } from './toast.js';

let studentsById = {};
let lastCreatedCodes = [];

function formatDate(value) {
  try {
    return new Date(value).toLocaleDateString('nl-NL', { day: 'numeric', month: 'short' });
  } catch {
    return '';
  }
}

export async function renderAdmin() {
  const wrap = $('adminBody');
  if (!auth.getProfile()) await auth.ensureProfile();
  if (!auth.isAdmin()) {
    wrap.innerHTML = '<div class="call warn">Alleen voor beheerders. <a href="#" onclick="go(\'account\');return false">Naar inloggen</a></div>';
    return;
  }
  wrap.innerHTML = '<p class="lede">Bezig met laden…</p>';
  try {
    const [invites, students] = await Promise.all([auth.listInviteCodes(), auth.listStudents()]);
    wrap.innerHTML = invitesHtml(invites) + studentsHtml(students);
  } catch (err) {
    wrap.innerHTML = warningBox(auth.authErrorMessage(err));
  }
}

/* ── Invite codes ─────────────────────────────────────────────────────── */

function invitesHtml(invites) {
  const open = invites.filter((i) => i.open);
  const used = invites.filter((i) => !i.open);
  let html = '<div class="box admin-blok" id="admin-uitnodigingen">'
    + '<h3 style="margin-top:0">Uitnodigingscodes</h3>'
    + '<p class="dim">Een leerling maakt een account met zo’n code. Elke code werkt één keer en 14 dagen.</p>'
    + '<div class="bar invite-maak">'
    + '<label for="inviteAantal" class="dim">Aantal</label>'
    + '<input class="veld invite-aantal" id="inviteAantal" type="number" min="1" max="' + MAX_INVITES_PER_BATCH + '" value="1">'
    + '<button class="bt" onclick="adminCreateInvites()">Codes maken</button>'
    + '</div>'
    + '<div id="inviteNieuw">' + newCodesHtml() + '</div>';

  if (open.length) {
    html += '<h4 class="invite-kop">Open codes (' + open.length + ')</h4><ul class="invite-lijst">'
      + open.map((i) => {
        const code = escapeHtml(i.code);
        return '<li><code class="invite-code">' + code + '</code>'
          + '<span class="dim">geldig tot ' + escapeHtml(formatDate(i.expiresAt)) + '</span>'
          + '<button class="bt gh klein" onclick="adminCopyInvite(\'' + code + '\')" title="Kopiëren">\u{1F4CB}</button>'
          + '<button class="bt gh klein" onclick="adminDeleteInvite(\'' + code + '\')" title="Verwijderen">✕</button></li>';
      }).join('') + '</ul>';
  } else {
    html += '<p class="dim">Geen open codes. Maak er hierboven een aan.</p>';
  }

  if (used.length) {
    html += '<details class="invite-gebruikt"><summary class="dim">Gebruikte of verlopen codes (' + used.length + ')</summary><ul class="invite-lijst">'
      + used.map((i) => {
        const code = escapeHtml(i.code);
        return '<li><code class="invite-code">' + code + '</code>'
          + '<span class="dim">' + (i.usedAt
            ? 'gebruikt door ' + escapeHtml(i.usedBy || '?') + ' op ' + escapeHtml(formatDate(i.usedAt))
            : 'verlopen') + '</span>'
          + '<button class="bt gh klein" onclick="adminDeleteInvite(\'' + code + '\')" title="Opruimen">✕</button></li>';
      }).join('') + '</ul></details>';
  }
  return html + '</div>';
}

function newCodesHtml() {
  if (!lastCreatedCodes.length) return '';
  const all = escapeHtml(lastCreatedCodes.join(' '));
  return '<div class="call sum invite-nieuw"><b>Nieuwe codes</b>: geef ze aan je leerlingen:'
    + '<div class="invite-nieuw-lijst">'
    + lastCreatedCodes.map((c) => '<code class="invite-code groot">' + escapeHtml(c) + '</code>').join('')
    + '</div>'
    + '<button class="bt gh klein" onclick="adminCopyInvite(\'' + all + '\')">Alles kopiëren</button>'
    + '</div>';
}

export async function adminCreateInvites() {
  const field = $('inviteAantal');
  const count = Math.min(MAX_INVITES_PER_BATCH, Math.max(1, parseInt(field && field.value, 10) || 1));
  setHtml('inviteNieuw', infoBox('Bezig…'));
  try {
    lastCreatedCodes = await auth.createInviteCodes(count);
    await renderAdmin();
    const box = $('inviteNieuw');
    if (box) box.scrollIntoView({ block: 'nearest' });
  } catch (err) {
    setHtml('inviteNieuw', warningBox(auth.authErrorMessage(err)));
  }
}

export async function adminDeleteInvite(code) {
  const clean = auth.normalizeInviteCode(code);
  if (!clean) return;
  try {
    await auth.deleteInviteCode(clean);
    lastCreatedCodes = lastCreatedCodes.filter((c) => c !== clean);
    renderAdmin();
  } catch (err) {
    showToast('Kon code niet verwijderen: ' + auth.authErrorMessage(err));
  }
}

export async function adminCopyInvite(text) {
  try {
    await navigator.clipboard.writeText(String(text));
    showToast('Gekopieerd.');
  } catch {
    showToast('Kopiëren lukt niet in deze browser, schrijf de code over.');
  }
}

/* ── Students ─────────────────────────────────────────────────────────── */

function studentsHtml(students) {
  studentsById = {};
  students.forEach((s) => { studentsById[s.id] = s; });
  let html = '<h3 class="admin-kop">Leerlingen (' + students.length + ')</h3>';
  if (!students.length) return html + '<p class="lede">Nog geen leerlingen. Maak een uitnodigingscode en geef die aan een leerling.</p>';
  return html + students.filter((s) => isUuid(s.id)).map((s) => {
    const active = s.status === auth.STATUS.active;
    const isAdmin = s.role === auth.ROLE.admin;
    const self = auth.getProfile() && s.id === auth.getProfile().id;
    return '<div class="box" style="margin-bottom:.9rem" id="admrij-' + s.id + '">'
      + '<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:.6rem">'
      + '<div><b>' + escapeHtml(s.username) + '</b> &middot; ' + (isAdmin ? 'Beheerder' : 'Leerling')
      + ' &middot; <span style="color:' + (active ? '#5fbf7a' : '#e0707a') + '">' + escapeHtml(s.status) + '</span>'
      + (s.muted ? ' &middot; <span style="color:#e0707a">\u{1F507} gedemd</span>' : '')
      + ' <span class="dim">&middot; sinds ' + escapeHtml(formatDate(s.createdAt)) + '</span></div>'
      + '<div class="bar" style="margin:0">'
      + (!isAdmin || self ? '<button class="bt gh" onclick="adminResetPassword(\'' + s.id + '\')">Wachtwoord resetten</button>' : '')
      + (!isAdmin ? '<button class="bt gh" onclick="adminToggleStatus(\'' + s.id + '\')">' + (active ? 'Blokkeren' : 'Deblokkeren') + '</button>' : '')
      + (!isAdmin ? '<button class="bt gh" onclick="adminToggleMute(\'' + s.id + '\')">' + (s.muted ? 'Ontdempen (chat)' : 'Dempen (chat)') + '</button>' : '')
      + (!isAdmin ? '<button class="bt gh" onclick="adminDeleteUser(\'' + s.id + '\')">Verwijderen</button>' : '')
      + '</div></div>'
      + '<div id="admres-' + s.id + '"></div>'
      + '</div>';
  }).join('');
}

function student(id) {
  return isUuid(id) ? studentsById[id] : undefined;
}

function showBusy(id) {
  setHtml('admres-' + id, infoBox('Bezig…'));
}

function showError(id, err) {
  setHtml('admres-' + id, warningBox(auth.authErrorMessage(err)));
}

export async function adminResetPassword(id) {
  const s = student(id);
  if (!s) return;
  showBusy(id);
  try {
    const password = await auth.resetStudentPassword(id);
    setHtml('admres-' + id, '<div class="call sum">Nieuw wachtwoord voor <b>' + escapeHtml(s.username) + '</b>: '
      + '<b style="font-size:1.1em;letter-spacing:.02em">' + escapeHtml(password) + '</b><br>'
      + '<span class="lede" style="margin:.3rem 0 0">Geef dit door aan de leerling. Dit wordt niet nog een keer getoond.</span></div>');
  } catch (err) {
    showError(id, err);
  }
}

export async function adminToggleStatus(id) {
  const s = student(id);
  if (!s) return;
  const next = s.status === auth.STATUS.active ? auth.STATUS.blocked : auth.STATUS.active;
  showBusy(id);
  try {
    await auth.setStudentStatus(id, next);
    renderAdmin();
  } catch (err) {
    showError(id, err);
  }
}

export async function adminToggleMute(id) {
  const s = student(id);
  if (!s) return;
  showBusy(id);
  try {
    await auth.setStudentMuted(id, !s.muted);
    renderAdmin();
  } catch (err) {
    showError(id, err);
  }
}

export async function adminDeleteUser(id) {
  const s = student(id);
  if (!s) return;
  if (!window.confirm('Weet je zeker dat je "' + s.username + '" wilt verwijderen? Dit kan niet ongedaan gemaakt worden.')) return;
  showBusy(id);
  try {
    await auth.deleteStudent(id);
    renderAdmin();
  } catch (err) {
    showError(id, err);
  }
}
