/* Settings screen: your own username, password, display preferences and the
   destructive actions on your own data, in five panels (see index.html). */
import { $, setHtml, escapeHtml, warningBox, infoBox } from '../lib/dom.js';
import * as auth from '../services/auth.js';
import { refreshAccountButton } from './account.js';
import {
  setTextSize, toggleDyslexia, isDyslexiaOn, currentTextSizeLabel,
  toggleLightMode, isLightModeOn, setDyslexiaFont, currentDyslexiaFont,
  toggleLetterSpacing, isLetterSpacingOn,
} from './preferences.js';
import { clearLearningData } from '../state/progress.js';
import { go } from './navigation.js';
import { APP_VERSION } from '../content/changelog.js';

/* ── Panels ──────────────────────────────────────────────────────────── */

const PANELS = ['account', 'weergave', 'gegevens', 'gevaarlijk', 'over'];
const GUEST_PANELS = ['weergave', 'over'];
/* Same breakpoint as the phone layer in src/styles/mobile.css. */
const PHONE = '(max-width: 560px)';

function isPhone() {
  return typeof window.matchMedia === 'function' && window.matchMedia(PHONE).matches;
}

/* '' is the phone's list of categories. On a wide screen the rail is always
   visible, so there is no list view: fall back to the first panel. */
export function showSettingsPanel(name) {
  const layout = $('settingsLayout');
  if (!layout) return;
  const guest = layout.classList.contains('is-guest');
  const allowed = guest ? GUEST_PANELS : PANELS;
  let panel = allowed.includes(name) ? name : '';
  if (!panel && !isPhone()) panel = allowed[0];
  layout.dataset.panel = panel;
  for (const tab of layout.querySelectorAll('.set-tab')) {
    if (tab.dataset.panel === panel) tab.setAttribute('aria-current', 'true');
    else tab.removeAttribute('aria-current');
  }
  if (isPhone()) window.scrollTo(0, 0);
}

export async function renderSettings() {
  const version = $('setVersie');
  if (version) version.textContent = APP_VERSION;   // shown to guests too
  const guest = $('settingsGast');
  const layout = $('settingsLayout');
  if (!guest || !layout) return;
  setHtml('settingsMelding', '');
  refreshPreferenceLabels();                        // display settings work without an account
  const profile = await auth.ensureProfile();
  if (profile) {
    guest.style.display = 'none';
    layout.classList.remove('is-guest');
    const nameField = $('setNaam');
    if (nameField) nameField.value = profile.username;
    setHtml('setNaamMelding', '');
    setHtml('setWwMelding', '');
    setHtml('setVoortgangMelding', '');
    setHtml('setUitlogMelding', '');
    setHtml('setVerwijderMelding', '');
    const confirmField = $('setVerwijderBevestig');
    if (confirmField) confirmField.value = '';
  } else {
    guest.style.display = 'block';
    layout.classList.add('is-guest');
  }
  showSettingsPanel(isPhone() ? '' : (profile ? 'account' : 'weergave'));
}

export async function submitUsernameChange(e) {
  e.preventDefault();
  const next = auth.normalizeUsername($('setNaam').value);
  const profile = auth.getProfile();
  if (!profile) return;
  if (next === profile.username) {
    setHtml('setNaamMelding', '');
    return;
  }
  const problem = auth.usernameProblem(next);
  if (problem) {
    setHtml('setNaamMelding', warningBox(problem));
    return;
  }
  setHtml('setNaamMelding', infoBox('Bezig…'));
  try {
    const username = await auth.changeUsername(next);
    setHtml('setNaamMelding', '<div class="call reken">Gebruikersnaam bijgewerkt naar <b>' + escapeHtml(username) + '</b>. Gebruik deze vanaf nu om in te loggen.</div>');
    refreshAccountButton();
  } catch (err) {
    setHtml('setNaamMelding', warningBox(auth.authErrorMessage(err)));
  }
}

export async function submitPasswordChange(e) {
  e.preventDefault();
  const current = $('setWwHuidig').value;
  const next = $('setWwNieuw').value;
  const repeat = $('setWwHerhaal').value;
  if (!auth.getProfile()) return;
  const problem = auth.passwordProblem(next);
  if (problem) {
    setHtml('setWwMelding', warningBox(problem));
    return;
  }
  if (next !== repeat) {
    setHtml('setWwMelding', warningBox('De twee nieuwe wachtwoorden komen niet overeen.'));
    return;
  }
  setHtml('setWwMelding', infoBox('Bezig…'));
  try {
    await auth.changePassword(current, next);
    setHtml('setWwMelding', '<div class="call reken">Wachtwoord gewijzigd.</div>');
    $('setWwHuidig').value = '';
    $('setWwNieuw').value = '';
    $('setWwHerhaal').value = '';
  } catch (err) {
    setHtml('setWwMelding', warningBox(auth.authErrorMessage(err)));
  }
}

/* ── Display preferences ─────────────────────────────────────────────── */

function setSwitch(id, on) {
  const el = $(id);
  if (el) el.setAttribute('aria-checked', on ? 'true' : 'false');
}

/* The controls show the stored state; they never hold state of their own. */
function refreshPreferenceLabels() {
  const size = currentTextSizeLabel();
  const group = $('setTekstgrootte');
  if (group) {
    for (const btn of group.querySelectorAll('button')) {
      btn.setAttribute('aria-pressed', btn.dataset.size === size ? 'true' : 'false');
    }
  }
  setSwitch('setLicht', isLightModeOn());
  setSwitch('setDyslexie', isDyslexiaOn());
  setSwitch('setLetterafstand', isLetterSpacingOn());
  // The font only applies in dyslexia mode, so the choice only shows then.
  const fonts = $('setLettertypes');
  if (fonts) {
    fonts.hidden = !isDyslexiaOn();
    const font = currentDyslexiaFont();
    for (const radio of fonts.querySelectorAll('input[type=radio]')) radio.checked = radio.value === font;
  }
}

document.addEventListener('preferences-changed', refreshPreferenceLabels);

/* Thin wrappers so the inline handlers have settings-owned names; the
   'preferences-changed' event above redraws the controls afterwards. */
export function settingsSetTextSize(size) { setTextSize(size); }
export function settingsToggleDyslexia() { toggleDyslexia(); }
export function settingsToggleLightMode() { toggleLightMode(); }
export function settingsSetDyslexiaFont(id) { setDyslexiaFont(id); }
export function settingsToggleLetterSpacing() { toggleLetterSpacing(); }

/* ── Destructive actions on your own data ────────────────────────────── */

export function settingsResetProgress() {
  if (!window.confirm('Weet je het zeker? Je voortgang, flashcards, streak, favorieten en notities op dit apparaat worden gewist.')) return;
  clearLearningData();
  setHtml('setVoortgangMelding', '<div class="call reken">Voortgang gewist. Je begint weer met een schone lei.</div>');
}

export async function settingsLogoutEverywhere() {
  if (!window.confirm('Op alle apparaten uitloggen? Je moet daarna overal opnieuw inloggen.')) return;
  setHtml('setUitlogMelding', infoBox('Bezig…'));
  try {
    await auth.logoutEverywhere();
    go('account');
  } catch (err) {
    setHtml('setUitlogMelding', warningBox(auth.authErrorMessage(err)));
  }
}

export async function submitAccountDeletion(e) {
  e.preventDefault();
  const profile = auth.getProfile();
  if (!profile) return;
  const typed = ($('setVerwijderBevestig').value || '').trim();
  if (typed.toLowerCase() !== profile.username.toLowerCase()) {
    setHtml('setVerwijderMelding', warningBox('Typ je gebruikersnaam precies over om te bevestigen.'));
    return;
  }
  if (!window.confirm('Je account wordt definitief verwijderd. Dit kan niet ongedaan gemaakt worden. Doorgaan?')) return;
  setHtml('setVerwijderMelding', infoBox('Bezig…'));
  try {
    await auth.deleteOwnAccount(typed);
    go('home');
  } catch (err) {
    setHtml('setVerwijderMelding', warningBox(auth.authErrorMessage(err)));
  }
}
