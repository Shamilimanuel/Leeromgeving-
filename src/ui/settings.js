/* Settings screen: change your own username or password. */
import { $, setHtml, escapeHtml, warningBox, infoBox } from '../lib/dom.js';
import * as auth from '../services/auth.js';
import { refreshAccountButton } from './account.js';

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
