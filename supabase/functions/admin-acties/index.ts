/* Edge Function `admin-acties`
   Every privileged change to accounts goes through here with the service
   role. The caller's role/status is read from `public.profiles` (never from
   the JWT). Body: { actie: string, ...payload }.

   Actions for any active user (about their own account):
     gebruikersnaam_wijzigen  { nieuweGebruikersnaam }
     eigen_account_verwijderen { bevestiging }             bevestiging must be the username

   Actions for admins only:
     uitnodigingen_aanmaken   { aantal? }                  -> { codes: [] }
     uitnodiging_verwijderen  { code }
     codes_opruimen           {}                           -> { verwijderd }
     wachtwoord_resetten      { leerlingId }               -> { nieuwWachtwoord }
     status_wijzigen          { leerlingId, status }       status: 'actief' | 'geblokkeerd'
     verwijderen              { leerlingId }
     spelvoortgang_wissen     { leerlingId, hoofdstuk?, level? }  -> { verwijderd }
                              no hoofdstuk: the whole practice path
                              hoofdstuk only: every level of that chapter
                              hoofdstuk + level: that one paragraph level

   Admins cannot block, mute, delete or reset other admins, and cannot block
   or delete themselves. */

import {
  asString,
  emailForUsername,
  HttpError,
  json,
  newInviteCode,
  newTemporaryPassword,
  normalizeInviteCode,
  PASSWORD_MIN,
  readJsonBody,
  requireCaller,
  serve,
  serviceClient,
  USERNAME_RE,
  type Profile,
} from '../_shared/helpers.ts';

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
/* "biologie|bbl|1|2" — the chapter key the frontend uses throughout. */
const CHAPTER_KEY_RE = /^[a-z0-9-]{2,30}\|[a-z]{2,10}\|[0-9]{1,2}\|[a-z0-9.-]{1,10}$/i;

serve(async (req) => {
  const admin = serviceClient();
  const caller = await requireCaller(req, admin);
  const body = await readJsonBody(req);
  const actie = asString(body.actie);

  if (actie === 'gebruikersnaam_wijzigen') {
    return await changeOwnUsername(admin, caller, asString(body.nieuweGebruikersnaam));
  }

  if (actie === 'eigen_account_verwijderen') {
    return await deleteOwnAccount(admin, caller, asString(body.bevestiging));
  }

  if (caller.rol !== 'admin') throw new HttpError('Alleen voor beheerders.', 403);

  switch (actie) {
    case 'uitnodigingen_aanmaken':
      return await createInvites(admin, caller, body.aantal);
    case 'uitnodiging_verwijderen':
      return await deleteInvite(admin, asString(body.code));
    case 'codes_opruimen':
      return await cleanUpInvites(admin);
    case 'spelvoortgang_wissen':
      return await clearGameProgress(admin, asString(body.leerlingId), body.hoofdstuk, body.level);
    case 'wachtwoord_resetten':
      return await resetPassword(admin, caller, asString(body.leerlingId));
    case 'status_wijzigen':
      return await changeStatus(admin, caller, asString(body.leerlingId), asString(body.status));
    case 'verwijderen':
      return await deleteStudent(admin, caller, asString(body.leerlingId));
    default:
      throw new HttpError('Onbekende actie.', 400);
  }
});

/* ── helpers ─────────────────────────────────────────────────────────── */

async function loadTarget(admin: ReturnType<typeof serviceClient>, id: string): Promise<Profile> {
  if (!UUID_RE.test(id)) throw new HttpError('Ongeldig account.', 400);
  const { data, error } = await admin
    .from('profiles')
    .select('id, gebruikersnaam, rol, status, gemute')
    .eq('id', id)
    .single();
  if (error || !data) throw new HttpError('Account niet gevonden.', 404);
  return data as Profile;
}

/* Admins may only act on students; never on themselves or other admins. */
function assertStudentTarget(caller: Profile, target: Profile) {
  if (target.id === caller.id) throw new HttpError('Je kunt dit niet op je eigen account doen.', 400);
  if (target.rol === 'admin') throw new HttpError('Beheerders kun je hier niet aanpassen.', 403);
}

async function usernameTaken(admin: ReturnType<typeof serviceClient>, username: string, exceptId?: string) {
  let q = admin.from('profiles').select('id').ilike('gebruikersnaam', username).limit(1);
  if (exceptId) q = q.neq('id', exceptId);
  const { data } = await q;
  return !!(data && data.length);
}

/* ── actions ─────────────────────────────────────────────────────────── */

async function changeOwnUsername(admin: ReturnType<typeof serviceClient>, caller: Profile, raw: string) {
  const username = raw.trim().toLowerCase();
  if (!USERNAME_RE.test(username)) {
    throw new HttpError('Gebruikersnaam: 3 tot 20 kleine letters of cijfers, zonder spaties.', 400);
  }
  if (username === caller.gebruikersnaam) return json({ gebruikersnaam: username });
  if (await usernameTaken(admin, username, caller.id)) {
    throw new HttpError('Deze gebruikersnaam bestaat al. Kies een andere.', 409);
  }
  const { error: authErr } = await admin.auth.admin.updateUserById(caller.id, {
    email: emailForUsername(username),
    email_confirm: true,
    user_metadata: { gebruikersnaam: username },
  });
  if (authErr) throw new HttpError('Gebruikersnaam kon niet worden gewijzigd.', 500);
  const { error } = await admin.from('profiles').update({ gebruikersnaam: username }).eq('id', caller.id);
  if (error) throw new HttpError('Gebruikersnaam kon niet worden opgeslagen.', 500);
  return json({ gebruikersnaam: username });
}

async function createInvites(admin: ReturnType<typeof serviceClient>, caller: Profile, aantalRaw: unknown) {
  const aantal = Math.min(20, Math.max(1, Number.isInteger(aantalRaw) ? (aantalRaw as number) : 1));
  const codes: string[] = [];
  while (codes.length < aantal) codes.push(newInviteCode());
  const rows = codes.map((code) => ({ code, aangemaakt_door: caller.id }));
  const { error } = await admin.from('uitnodigingen').insert(rows);
  if (error) throw new HttpError('Codes konden niet worden aangemaakt.', 500);
  return json({ codes });
}

async function deleteInvite(admin: ReturnType<typeof serviceClient>, raw: string) {
  const code = normalizeInviteCode(raw);
  if (!code) throw new HttpError('Ongeldige code.', 400);
  const { error } = await admin.from('uitnodigingen').delete().eq('code', code);
  if (error) throw new HttpError('Code kon niet worden verwijderd.', 500);
  return json({ ok: true });
}

async function resetPassword(admin: ReturnType<typeof serviceClient>, caller: Profile, id: string) {
  const target = await loadTarget(admin, id);
  if (target.id !== caller.id && target.rol === 'admin') {
    throw new HttpError('Beheerders kun je hier niet aanpassen.', 403);
  }
  const nieuwWachtwoord = newTemporaryPassword();
  if (nieuwWachtwoord.length < PASSWORD_MIN) throw new HttpError('Wachtwoord te kort.', 500);
  const { error } = await admin.auth.admin.updateUserById(target.id, { password: nieuwWachtwoord });
  if (error) throw new HttpError('Wachtwoord kon niet worden gereset.', 500);
  return json({ nieuwWachtwoord });
}

async function changeStatus(admin: ReturnType<typeof serviceClient>, caller: Profile, id: string, status: string) {
  if (status !== 'actief' && status !== 'geblokkeerd') throw new HttpError('Ongeldige status.', 400);
  const target = await loadTarget(admin, id);
  assertStudentTarget(caller, target);
  const { error } = await admin.from('profiles').update({ status }).eq('id', target.id);
  if (error) throw new HttpError('Status kon niet worden gewijzigd.', 500);
  // Blocking also bans the auth user so existing sessions cannot be refreshed
  // (RLS already refuses blocked users; this closes the remaining window).
  await admin.auth.admin.updateUserById(target.id, {
    ban_duration: status === 'geblokkeerd' ? '876000h' : 'none',
  });
  return json({ ok: true, status });
}

async function deleteStudent(admin: ReturnType<typeof serviceClient>, caller: Profile, id: string) {
  const target = await loadTarget(admin, id);
  assertStudentTarget(caller, target);
  // Explicit clean-up in case the foreign keys were created without ON DELETE CASCADE.
  await admin.from('spelvoortgang').delete().eq('gebruiker_id', target.id);
  await admin.from('profiles').delete().eq('id', target.id);
  const { error } = await admin.auth.admin.deleteUser(target.id);
  if (error) throw new HttpError('Account kon niet worden verwijderd.', 500);
  return json({ ok: true });
}

/* Self-service: delete your own account. `bevestiging` must repeat the caller's
   own username, so a stray click cannot wipe an account. The last admin is kept:
   without one nobody could ever hand out invite codes again. */
async function deleteOwnAccount(admin: ReturnType<typeof serviceClient>, caller: Profile, confirmation: string) {
  if (confirmation.trim().toLowerCase() !== caller.gebruikersnaam.toLowerCase()) {
    throw new HttpError('Typ je gebruikersnaam precies over om te bevestigen.', 400);
  }
  if (caller.rol === 'admin') {
    const { count, error } = await admin
      .from('profiles')
      .select('id', { count: 'exact', head: true })
      .eq('rol', 'admin')
      .eq('status', 'actief');
    if (error) throw new HttpError('Kon niet controleren of je de laatste beheerder bent.', 500);
    if ((count ?? 0) <= 1) {
      throw new HttpError('Je bent de laatste beheerder. Maak eerst iemand anders beheerder.', 400);
    }
  }
  await admin.from('spelvoortgang').delete().eq('gebruiker_id', caller.id);
  await admin.from('profiles').delete().eq('id', caller.id);
  const { error } = await admin.auth.admin.deleteUser(caller.id);
  if (error) throw new HttpError('Account kon niet worden verwijderd.', 500);
  return json({ ok: true });
}

/* Wipe practice-path results: everything, one chapter, or one level of one
   chapter. Kept here rather than as an RLS delete policy because it is a
   change to somebody else's data, like every other action in this file. */
async function clearGameProgress(
  admin: ReturnType<typeof serviceClient>,
  id: string,
  hoofdstuk: unknown,
  level: unknown,
) {
  const target = await loadTarget(admin, id);

  let query = admin.from('spelvoortgang').delete().eq('gebruiker_id', target.id);

  if (hoofdstuk !== undefined && hoofdstuk !== null) {
    const key = asString(hoofdstuk);
    if (!CHAPTER_KEY_RE.test(key)) throw new HttpError('Ongeldig hoofdstuk.', 400);
    query = query.eq('hoofdstuk', key);

    if (level !== undefined && level !== null) {
      if (typeof level !== 'number' || !Number.isInteger(level) || level < 0 || level > 99) {
        throw new HttpError('Ongeldig level.', 400);
      }
      query = query.eq('level', level);
    }
  } else if (level !== undefined && level !== null) {
    // A level number without a chapter would wipe that level in every chapter.
    throw new HttpError('Geef ook een hoofdstuk op.', 400);
  }

  const { data, error } = await query.select('level');
  if (error) throw new HttpError('Voortgang kon niet worden gewist.', 500);
  return json({ ok: true, verwijderd: (data || []).length });
}

/* Housekeeping: drop invite codes that are used or past their expiry date.
   Open, still-valid codes are left alone. */
async function cleanUpInvites(admin: ReturnType<typeof serviceClient>) {
  const now = new Date().toISOString();
  const { data, error } = await admin
    .from('uitnodigingen')
    .delete()
    .or(`gebruikt_op.not.is.null,verloopt_op.lt.${now}`)
    .select('code');
  if (error) throw new HttpError('Codes konden niet worden opgeruimd.', 500);
  return json({ ok: true, verwijderd: (data || []).length });
}
