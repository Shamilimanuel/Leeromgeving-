/* Account screen (sign in / register with invite code / profile) and the
   avatar menu in the top bar. */
import { $, setHtml, escapeHtml, warningBox, infoBox } from '../lib/dom.js';
import * as auth from '../services/auth.js';
import { go, SCREENS } from './navigation.js';
import { syncAllLevels, pullMyLevels } from '../services/gameProgress.js';
import { showToast } from './toast.js';
import { isGateEnabled } from './authGate.js';
import { resetIntro } from './intro.js';
import { setRememberSession, isRememberingSession } from '../lib/supabase.js';

/* Where the session is stored is decided before signing in, because the
   sign-in itself is what writes it. See src/lib/supabase.js. */
function applyRememberChoice(checkboxId) {
  const box = $(checkboxId);
  setRememberSession(!!(box && box.checked));
}

function roleLabel(profile) {
  return profile.role === auth.ROLE.admin ? 'Beheerder' : 'Leerling';
}

/* ── Avatar button + dropdown (top right) ────────────────────────────── */

export function toggleProfileMenu(e) {
  if (e) e.stopPropagation();
  const drop = $('profileDrop');
  const btn = $('topAccountBtn');
  if (!drop) return;
  const open = drop.classList.toggle('open');
  if (btn) btn.setAttribute('aria-expanded', open ? 'true' : 'false');
}

export function closeProfileMenu() {
  const drop = $('profileDrop');
  const btn = $('topAccountBtn');
  if (drop) drop.classList.remove('open');
  if (btn) btn.setAttribute('aria-expanded', 'false');
}

export async function refreshAccountButton() {
  const btn = $('topAccountBtn');
  const avatar = $('avatarCircle');
  const drop = $('profileDrop');
  if (!btn) return;
  if (!auth.getSession() && !auth.getProfile()) await auth.ensureProfile();
  const profile = auth.getProfile();
  if (profile) {
    btn.classList.add('on');
    btn.classList.remove('gast');
    btn.title = profile.username;
    if (avatar) avatar.textContent = profile.username.charAt(0).toUpperCase();
    if (drop) drop.innerHTML =
      '<div class="naam"><b>' + escapeHtml(profile.username) + '</b><span>' + roleLabel(profile) + '</span></div>'
      + '<button onclick="closeProfileMenu();go(\'account\')">\u{1FAAA} Profiel</button>'
      + '<button onclick="closeProfileMenu();go(\'chat\')">\u{1F4AC} Teamchat</button>'
      + '<button onclick="closeProfileMenu();go(\'settings\')">\u{1F6E0}\u{FE0F} Instellingen</button>'
      + '<button onclick="closeProfileMenu();openWhatsNew()">\u{2728} Wat is er nieuw?</button>'
      + (auth.isAdmin() ? '<button onclick="closeProfileMenu();go(\'admin\')">\u{1F5DD}\u{FE0F} Adminpaneel</button>' : '')
      + '<button class="uitlog" onclick="closeProfileMenu();logout()">\u{1F6AA} Uitloggen</button>';
  } else {
    btn.classList.remove('on');
    btn.classList.add('gast');
    btn.title = 'Account';
    if (avatar) avatar.textContent = '\u{1F464}';
    if (drop) drop.innerHTML =
      '<div class="naam"><b>Niet ingelogd</b><span>Log in om mee te chatten</span></div>'
      + '<button onclick="closeProfileMenu();go(\'account\')">\u{1F4DC} Inloggen</button>'
      + '<button onclick="closeProfileMenu();openWhatsNew()">\u{2728} Wat is er nieuw?</button>';
  }
}

export async function logout() {
  await auth.logout();
  go(SCREENS.home);
  refreshAccountButton();
}

/* ── Account screen ───────────────────────────────────────────────────── */

/* Reconcile the practice path with the server after signing in: send what was
   earned while signed out, then take anything earned on another device. */
async function syncPathProgress() {
  try {
    await syncAllLevels();
    const pulled = await pullMyLevels();
    if (pulled) showToast('Je voortgang van een ander apparaat is opgehaald.');
  } catch { /* offline or not signed in: the path keeps working locally */ }
}

export async function renderAccount() {
  const guest = $('accountGast');
  const signedIn = $('accountIngelogd');
  const eyebrow = $('acctEyebrow');
  const title = $('acctTitel');
  const lede = $('acctLede');
  const crumb = $('acctCrumb');
  setHtml('accountMelding', '');
  try {
    await auth.loadProfile();
  } catch (e) {
    setHtml('accountMelding', warningBox(auth.authErrorMessage(e)));
  }
  const profile = auth.getProfile();
  if (profile) {
    guest.style.display = 'none';
    signedIn.style.display = 'block';
    if (eyebrow) eyebrow.textContent = 'Mijn profiel';
    if (title) title.textContent = 'Welkom terug, ' + profile.username;
    if (lede) lede.style.display = 'none';
    if (crumb) crumb.textContent = 'Mijn profiel';
    signedIn.innerHTML =
      '<div class="box">'
      + '<div class="eyebrow">Ingelogd als</div>'
      + '<h3 style="margin:.2rem 0 1rem">' + escapeHtml(profile.username) + '</h3>'
      + '<p class="lede" style="margin:0 0 1.2rem">Rol: <b>' + roleLabel(profile) + '</b> &middot; Status: <b>' + escapeHtml(profile.status) + '</b></p>'
      + '<div class="bar">'
      + '<button class="bt gh" onclick="go(\'settings\')">Instellingen</button>'
      + (auth.isAdmin() ? '<button class="bt" onclick="go(\'admin\')">&#128477;&#65039; Adminpaneel</button>' : '')
      + '<button class="bt gh" onclick="logout()">Uitloggen</button>'
      + '</div></div>';
  } else {
    guest.style.display = 'block';
    signedIn.style.display = 'none';
    if (eyebrow) eyebrow.textContent = 'Mijn account';
    if (title) title.textContent = 'Inloggen';
    if (lede) lede.style.display = '';
    if (crumb) crumb.textContent = 'Inloggen';
    /* With mandatory login there is no way past this screen, so the copy must
       not keep promising that an account is optional. */
    if (isGateEnabled()) {
      if (title) title.textContent = 'Log in om te beginnen';
      if (lede) {
        lede.textContent = 'Je hebt een account nodig om de samenvattingen te '
          + 'gebruiken. Kreeg je een uitnodigingscode van je docent? Maak hieronder je account.';
      }
    }
  }
  toggleGuestExits();
  showRememberChoice();
  refreshAccountButton();
}

/* Start from the choice already stored, so a student whose remembered session
   expired does not silently get the opposite of what they picked last time.
   Signing out clears it, so a shared computer starts unticked. */
function showRememberChoice() {
  const on = isRememberingSession();
  ['inlogBlijf', 'regBlijf'].forEach((id) => {
    const box = $(id);
    if (box) box.checked = on;
  });
}

/* The account screen's top bar offers a way back to the subject overview.
   Behind the gate that goes nowhere -- `go()` sends a signed-out student
   straight back here -- so the buttons are hidden rather than left to fail. */
function toggleGuestExits() {
  const locked = isGateEnabled() && !auth.getProfile() && !auth.hasSession();
  document.querySelectorAll('#account .homebtn, #account .back').forEach((el) => {
    el.style.display = locked ? 'none' : '';
  });
}

export async function submitLogin(e) {
  e.preventDefault();
  const username = $('inlogNaam').value;
  const password = $('inlogWw').value;
  setHtml('accountMelding', infoBox('Bezig met inloggen…'));
  try {
    applyRememberChoice('inlogBlijf');
    await auth.login(username, password);
    setHtml('accountMelding', '');
    await renderAccount();
    syncPathProgress();
    enterAfterLogin();
  } catch (err) {
    setHtml('accountMelding', warningBox(auth.authErrorMessage(err)));
  }
}

/* Behind the gate the welcome is what a student sees first after signing in;
   without it they stay on their profile, as they always did. */
function enterAfterLogin() {
  if (!isGateEnabled()) return;
  resetIntro();
  go(SCREENS.splash);
}

/* Shows the registration form (hidden by default so the sign-in form stays
   the obvious first choice; most students already have an account). */
export function showRegistration() {
  const box = $('regBox');
  if (box) box.style.display = 'block';
  const link = $('regToggle');
  if (link) link.style.display = 'none';
  const code = $('regCode');
  if (code) code.focus();
}

export async function submitRegistration(e) {
  e.preventDefault();
  const code = $('regCode').value;
  const username = $('regNaam').value;
  const password = $('regWw').value;
  const problem = (auth.normalizeInviteCode(code) ? null : 'Vul de uitnodigingscode van je docent in (8 tekens).')
    || auth.usernameProblem(username)
    || auth.passwordProblem(password);
  if (problem) {
    setHtml('accountMelding', warningBox(problem));
    return;
  }
  setHtml('accountMelding', infoBox('Account wordt aangemaakt…'));
  try {
    applyRememberChoice('regBlijf');
    await auth.register(code, username, password);
    setHtml('accountMelding', '<div class="call reken">Account aangemaakt! Je bent nu ingelogd.</div>');
    await new Promise((resolve) => setTimeout(resolve, 400));
    await renderAccount();
    syncPathProgress();
    enterAfterLogin();
  } catch (err) {
    setHtml('accountMelding', warningBox(auth.authErrorMessage(err)));
  }
}

export function initAccountMenu() {
  document.addEventListener('click', (e) => {
    const wrap = $('profileWrap');
    if (wrap && !wrap.contains(e.target)) closeProfileMenu();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeProfileMenu();
  });
  // Check right away whether a session exists so the avatar is correct on load.
  refreshAccountButton();
}
