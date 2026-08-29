/* Settings screen: your own username, password, display preferences and the
   destructive actions on your own data. */
import { $, setHtml, escapeHtml, warningBox, infoBox } from '../lib/dom.js';
import * as auth from '../services/auth.js';
import { deleteOwnMessages } from '../services/chat.js';
import { refreshAccountButton } from './account.js';
import { cycleTextSize, toggleDyslexia, isDyslexiaOn, currentTextSizeLabel } from './preferences.js';
import { clearLearningData } from '../state/progress.js';
import { go } from './navigation.js';

export async function renderSettings() {
  const guest = $('settingsGast');
  const signedIn = $('settingsIngelogd');
  if (!guest || !signedIn) return;
  setHtml('settingsMelding', '');
  const profile = await auth.ensureProfile();
  if (profile) {
    guest.style.display = 'none';
    signedIn.style.display = 'block';
    const nameField = $('setNaam');
    if (nameField) nameField.value = profile.username;
    setHtml('setNaamMelding', '');
    setHtml('setWwMelding', '');
    setHtml('setVoortgangMelding', '');
    setHtml('setBerichtenMelding', '');
    setHtml('setUitlogMelding', '');
    setHtml('setVerwijderMelding', '');
    const confirmField = $('setVerwijderBevestig');
    if (confirmField) confirmField.value = '';
    refreshPreferenceLabels();
  } else {
    guest.style.display = 'block';
    signedIn.style.display = 'none';
  }
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

const TEXT_SIZE_TEXT = { normaal: 'normaal', groot: 'groot', grootst: 'grootst' };

function refreshPreferenceLabels() {
  const size = $('setTekstgrootte');
  if (size) size.textContent = TEXT_SIZE_TEXT[currentTextSizeLabel()] || 'normaal';
  const dys = $('setDyslexie');
  if (dys) dys.textContent = isDyslexiaOn() ? 'aan' : 'uit';
}

export function settingsCycleTextSize() {
  cycleTextSize();
  refreshPreferenceLabels();
}

export function settingsToggleDyslexia() {
  toggleDyslexia();
  refreshPreferenceLabels();
}

/* ── Destructive actions on your own data ────────────────────────────── */

export function settingsResetProgress() {
  if (!window.confirm('Weet je het zeker? Je voortgang, flashcards, streak, favorieten en notities op dit apparaat worden gewist.')) return;
  clearLearningData();
  setHtml('setVoortgangMelding', '<div class="call reken">Voortgang gewist. Je begint weer met een schone lei.</div>');
}

export async function settingsClearOwnMessages() {
  const profile = auth.getProfile();
  if (!profile) return;
  if (!window.confirm('Al je eigen berichten in de Teamchat verwijderen?')) return;
  setHtml('setBerichtenMelding', infoBox('Bezig…'));
  try {
    const removed = await deleteOwnMessages(profile.id);
    setHtml('setBerichtenMelding', '<div class="call reken">' + removed + ' bericht(en) verwijderd.</div>');
  } catch (err) {
    setHtml('setBerichtenMelding', warningBox(auth.authErrorMessage(err)));
  }
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
