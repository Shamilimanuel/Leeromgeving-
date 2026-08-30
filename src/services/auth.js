/* Account and admin system, backed by Supabase Auth + the `profiles` table.
   Passwords are never seen or stored by us: Supabase stores them hashed. We
   only work with: username, role (leerling/admin), status (actief/geblokkeerd)
   and whether the student is muted in the chat.

   Security model:
   - The browser only holds the publishable key; row-level security decides
     what it may read. It can never write to `profiles` or `uitnodigingen`.
   - Every privileged change (creating accounts, resetting passwords,
     blocking, muting, deleting, renaming) goes through the Edge Functions,
     which check the caller's role in the database.
   - Accounts are created with an invite code from an admin; public sign-up
     is disabled on the Supabase project.

   Column names of the `profiles` row (gebruikersnaam, rol, status, gemute,
   aangemaakt_op), the `uitnodigingen` row and the edge-function action names
   are part of the deployed backend contract, so they stay Dutch here. This
   module maps them to English objects; the UI never sees raw rows. */
import { supabase } from '../lib/supabase.js';
import {
  SUPABASE_URL, SUPABASE_ANON_KEY, EDGE_FUNCTIONS, SYNTHETIC_EMAIL_DOMAIN,
  USERNAME_PATTERN, USERNAME_RULE_TEXT, PASSWORD_MIN_LENGTH, INVITE_CODE_LENGTH,
} from '../config.js';

export const ROLE = { student: 'leerling', admin: 'admin' };
export const STATUS = { active: 'actief', blocked: 'geblokkeerd' };

const PROFILE_COLUMNS = 'id, gebruikersnaam, rol, status, gemute, aangemaakt_op';
const INVITE_COLUMNS = 'code, aangemaakt_op, verloopt_op, gebruikt_op, gebruikt_door_naam';

let session = null;   // Supabase auth session, or null
let profile = null;   // mapped `profiles` row of the signed-in user, or null

export function getSession() {
  return session;
}

export function getProfile() {
  return profile;
}

export function isAdmin() {
  return !!profile && profile.role === ROLE.admin;
}

export function isSignedIn() {
  return !!profile;
}

function toProfile(row) {
  if (!row) return null;
  return {
    id: row.id,
    username: row.gebruikersnaam,
    role: row.rol,
    status: row.status,
    muted: !!row.gemute,
    createdAt: row.aangemaakt_op,
  };
}

function toInvite(row) {
  return {
    code: row.code,
    createdAt: row.aangemaakt_op,
    expiresAt: row.verloopt_op,
    usedAt: row.gebruikt_op,
    usedBy: row.gebruikt_door_naam,
    open: !row.gebruikt_op && new Date(row.verloopt_op) > new Date(),
  };
}

/* ── Validation (mirrors the server rules) ───────────────────────────── */

export function normalizeUsername(value) {
  return String(value || '').trim().toLowerCase();
}

/* Returns an error message, or null when the username is acceptable. */
export function usernameProblem(value) {
  return USERNAME_PATTERN.test(normalizeUsername(value)) ? null : 'Gebruikersnaam: ' + USERNAME_RULE_TEXT + '.';
}

export function passwordProblem(value) {
  return String(value || '').length >= PASSWORD_MIN_LENGTH
    ? null
    : 'Wachtwoord moet minstens ' + PASSWORD_MIN_LENGTH + ' tekens zijn.';
}

/* "abcd-efgh", "ABCDEFGH", "abcd efgh" -> "ABCD-EFGH"; '' when malformed. */
export function normalizeInviteCode(value) {
  const raw = String(value || '').toUpperCase().replace(/[^A-Z0-9]/g, '');
  if (raw.length !== INVITE_CODE_LENGTH) return '';
  return raw.slice(0, 4) + '-' + raw.slice(4);
}

/* Supabase Auth works with e-mail addresses; a username is turned into a
   synthetic address. Students never see this. Kept identical to the original
   mapping so existing accounts keep working. */
export function usernameToEmail(username) {
  const clean = normalizeUsername(username).replace(/[^a-z0-9]/g, '');
  return clean + '@' + SYNTHETIC_EMAIL_DOMAIN;
}

/* Turn a Supabase/network error into a message a student understands.
   Callers must still escape the result before putting it in HTML. */
export function authErrorMessage(err) {
  const m = (err && err.message) || String(err || '');
  if (/already registered|already exists|duplicate/i.test(m)) return 'Deze gebruikersnaam bestaat al. Kies een andere.';
  if (/invalid login credentials/i.test(m)) return 'Gebruikersnaam of wachtwoord klopt niet.';
  if (/password should be at least/i.test(m)) return 'Wachtwoord moet minstens ' + PASSWORD_MIN_LENGTH + ' tekens zijn.';
  if (/user is banned|banned/i.test(m)) return 'Dit account is geblokkeerd. Vraag je docent om hulp.';
  if (/geblokkeerd/i.test(m)) return m;
  if (/networkerror|failed to fetch/i.test(m)) return 'Geen verbinding: controleer je internet.';
  return m || 'Er ging iets mis. Probeer het nog eens.';
}

/* ── Edge Function calls ─────────────────────────────────────────────── */

async function callEdgeFunction(name, body, accessToken) {
  const res = await fetch(SUPABASE_URL + '/functions/v1/' + name, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      apikey: SUPABASE_ANON_KEY,
      Authorization: 'Bearer ' + (accessToken || SUPABASE_ANON_KEY),
    },
    body: JSON.stringify(body),
  });
  let json = null;
  try { json = await res.json(); } catch { /* non-JSON reply (gateway error) */ }
  if (!res.ok || !json || json.error) {
    throw new Error((json && json.error) || 'Actie mislukt (' + res.status + ').');
  }
  return json;
}

/* Privileged actions: always via the edge function, never directly. */
async function callAdminFunction(action, payload) {
  const { data: { session: current } } = await supabase.auth.getSession();
  if (!current) throw new Error('Niet ingelogd.');
  return callEdgeFunction(EDGE_FUNCTIONS.adminActions, Object.assign({ actie: action }, payload), current.access_token);
}

/* ── Register / sign in / sign out ───────────────────────────────────── */

/* Creates the account through the `registreren` function (invite code
   required), then signs in with the new credentials. */
export async function register(inviteCode, username, password) {
  const code = normalizeInviteCode(inviteCode);
  if (!code) throw new Error('Vul een geldige uitnodigingscode in (8 tekens).');
  const problem = usernameProblem(username) || passwordProblem(password);
  if (problem) throw new Error(problem);
  const name = normalizeUsername(username);
  await callEdgeFunction(EDGE_FUNCTIONS.register, { code, gebruikersnaam: name, wachtwoord: password });
  return login(name, password);
}

export async function login(username, password) {
  const res = await supabase.auth.signInWithPassword({
    email: usernameToEmail(username),
    password,
  });
  if (res.error) throw res.error;
  return res.data;
}

export async function logout() {
  await supabase.auth.signOut();
  session = null;
  profile = null;
}

/* ── Own profile ─────────────────────────────────────────────────────── */

/* Loads the session and profile of the signed-in user (or clears them).
   Throws when the account is blocked; the user is signed out in that case.
   (The database refuses blocked users as well; this only gives a clear
   message instead of empty screens.) */
export async function loadProfile() {
  const { data: { session: current } } = await supabase.auth.getSession();
  session = current;
  if (!current) {
    profile = null;
    return null;
  }
  const { data, error } = await supabase.from('profiles').select(PROFILE_COLUMNS).eq('id', current.user.id).single();
  if (error) {
    profile = null;
    return null;
  }
  if (data.status === STATUS.blocked) {
    await supabase.auth.signOut();
    session = null;
    profile = null;
    throw new Error('Dit account is geblokkeerd. Vraag je docent om hulp.');
  }
  profile = toProfile(data);
  return profile;
}

/* Make sure the profile is loaded; errors are swallowed (caller shows guest state). */
export async function ensureProfile() {
  if (profile) return profile;
  try {
    return await loadProfile();
  } catch {
    return null;
  }
}

/* ── Own account settings ────────────────────────────────────────────── */

/* Changes the signed-in user's own username; returns the new name. */
export async function changeUsername(newUsername) {
  const problem = usernameProblem(newUsername);
  if (problem) throw new Error(problem);
  const res = await callAdminFunction('gebruikersnaam_wijzigen', { nieuweGebruikersnaam: normalizeUsername(newUsername) });
  if (profile) profile.username = res.gebruikersnaam;
  return res.gebruikersnaam;
}

/* Re-authenticates with the current password before setting the new one. */
export async function changePassword(currentPassword, newPassword) {
  if (!profile) throw new Error('Niet ingelogd.');
  const problem = passwordProblem(newPassword);
  if (problem) throw new Error(problem);
  await login(profile.username, currentPassword);
  const res = await supabase.auth.updateUser({ password: newPassword });
  if (res.error) throw res.error;
}

/* ── Admin: students ─────────────────────────────────────────────────── */

/* RLS only returns every row for admins; students only see themselves. */
export async function listStudents() {
  const { data, error } = await supabase.from('profiles').select(PROFILE_COLUMNS).order('aangemaakt_op', { ascending: false });
  if (error) throw error;
  return data.map(toProfile);
}

/* Generates a temporary password for a student; returns it (shown once). */
export async function resetStudentPassword(studentId) {
  const res = await callAdminFunction('wachtwoord_resetten', { leerlingId: studentId });
  return res.nieuwWachtwoord;
}

export async function setStudentStatus(studentId, status) {
  await callAdminFunction('status_wijzigen', { leerlingId: studentId, status });
}

export async function setStudentMuted(studentId, muted) {
  await callAdminFunction('gemute_wijzigen', { leerlingId: studentId, gemute: !!muted });
}

export async function deleteStudent(studentId) {
  await callAdminFunction('verwijderen', { leerlingId: studentId });
}

/* ── Admin: invite codes ─────────────────────────────────────────────── */

export async function listInviteCodes() {
  const { data, error } = await supabase.from('uitnodigingen').select(INVITE_COLUMNS).order('aangemaakt_op', { ascending: false });
  if (error) throw error;
  return (data || []).map(toInvite);
}

/* Creates `count` single-use codes (server caps the batch); returns them. */
export async function createInviteCodes(count) {
  const res = await callAdminFunction('uitnodigingen_aanmaken', { aantal: count });
  return res.codes || [];
}

export async function deleteInviteCode(code) {
  await callAdminFunction('uitnodiging_verwijderen', { code });
}

/* Removes used and expired codes in one go; returns how many were deleted. */
export async function cleanUpInviteCodes() {
  const res = await callAdminFunction('codes_opruimen', {});
  return res.verwijderd || 0;
}

/* ── Moderation ──────────────────────────────────────────────────────── */

/* Empties the whole chat channel (rows are deleted, not hidden). */
export async function clearChat() {
  const res = await callAdminFunction('chat_legen', {});
  return res.verwijderd || 0;
}

/* Deletes everything one student posted, leaving the account intact. */
/* Wipes practice-path results of one student: everything, one chapter, or one
   level of one chapter. */
export async function clearStudentGameProgress(studentId, chapterKey, level) {
  const payload = { leerlingId: studentId };
  if (chapterKey) payload.hoofdstuk = chapterKey;
  if (chapterKey && level !== undefined && level !== null) payload.level = level;
  const res = await callAdminFunction('spelvoortgang_wissen', payload);
  return res.verwijderd || 0;
}

export async function clearStudentMessages(studentId) {
  const res = await callAdminFunction('leerling_berichten_wissen', { leerlingId: studentId });
  return res.verwijderd || 0;
}

/* ── Own account ─────────────────────────────────────────────────────── */

/* Deletes the signed-in account for good. `confirmation` must repeat the
   username; the server checks it again and refuses the last admin. */
export async function deleteOwnAccount(confirmation) {
  await callAdminFunction('eigen_account_verwijderen', { bevestiging: confirmation });
  await logout();
}

/* Signs out every session of this account, not just this tab. Useful on the
   shared school computers this site is mostly used on. */
export async function logoutEverywhere() {
  const res = await supabase.auth.signOut({ scope: 'global' });
  session = null;
  profile = null;
  if (res && res.error) throw res.error;
}
