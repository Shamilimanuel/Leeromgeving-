/* Edge Function `registreren`
   Creates a student account from an invite code. This replaces open
   sign-up: public sign-ups are disabled in Supabase Auth, so the only way to
   get an account is a code handed out by an admin.

   No JWT required (config.toml: verify_jwt = false).
   Body: { code, gebruikersnaam, wachtwoord }
   Reply: { ok: true, gebruikersnaam } — the client then signs in normally. */

import {
  asString,
  emailForUsername,
  HttpError,
  json,
  normalizeInviteCode,
  PASSWORD_MAX,
  PASSWORD_MIN,
  readJsonBody,
  serve,
  serviceClient,
  USERNAME_RE,
} from '../_shared/helpers.ts';

serve(async (req) => {
  const body = await readJsonBody(req);
  const code = normalizeInviteCode(asString(body.code));
  const username = asString(body.gebruikersnaam).trim().toLowerCase();
  const password = asString(body.wachtwoord);

  if (!code) throw new HttpError('Vul een geldige uitnodigingscode in (8 tekens).', 400);
  if (!USERNAME_RE.test(username)) {
    throw new HttpError('Gebruikersnaam: 3 tot 20 kleine letters of cijfers, zonder spaties.', 400);
  }
  if (password.length < PASSWORD_MIN) throw new HttpError(`Wachtwoord moet minstens ${PASSWORD_MIN} tekens zijn.`, 400);
  if (password.length > PASSWORD_MAX) throw new HttpError('Wachtwoord is te lang.', 400);

  const admin = serviceClient();

  // Claim the code first (single atomic UPDATE), so two people cannot use the
  // same code at the same time. It is released again if anything below fails.
  const { data: claimed, error: claimErr } = await admin
    .from('uitnodigingen')
    .update({ gebruikt_op: new Date().toISOString(), gebruikt_door_naam: username })
    .eq('code', code)
    .is('gebruikt_op', null)
    .gt('verloopt_op', new Date().toISOString())
    .select('code');
  if (claimErr) throw new HttpError('Er ging iets mis. Probeer het nog eens.', 500);
  if (!claimed || !claimed.length) {
    throw new HttpError('Deze uitnodigingscode is ongeldig, verlopen of al gebruikt.', 400);
  }

  const release = async () => {
    await admin
      .from('uitnodigingen')
      .update({ gebruikt_op: null, gebruikt_door_naam: null, gebruikt_door: null })
      .eq('code', code);
  };

  const { data: existing } = await admin
    .from('profiles')
    .select('id')
    .ilike('gebruikersnaam', username)
    .limit(1);
  if (existing && existing.length) {
    await release();
    throw new HttpError('Deze gebruikersnaam bestaat al. Kies een andere.', 409);
  }

  const { data: created, error: createErr } = await admin.auth.admin.createUser({
    email: emailForUsername(username),
    password,
    email_confirm: true,
    user_metadata: { gebruikersnaam: username },
  });
  if (createErr || !created?.user) {
    await release();
    const msg = createErr?.message || '';
    if (/already|exists|registered/i.test(msg)) {
      throw new HttpError('Deze gebruikersnaam bestaat al. Kies een andere.', 409);
    }
    if (/password/i.test(msg)) throw new HttpError('Dit wachtwoord is te zwak. Kies een ander.', 400);
    throw new HttpError('Account kon niet worden aangemaakt.', 500);
  }
  const userId = created.user.id;

  // Upsert: works whether or not a database trigger already created the row.
  const { error: profErr } = await admin.from('profiles').upsert(
    { id: userId, gebruikersnaam: username, rol: 'leerling', status: 'actief', gemute: false },
    { onConflict: 'id' },
  );
  if (profErr) {
    await admin.auth.admin.deleteUser(userId);
    await release();
    throw new HttpError('Profiel kon niet worden aangemaakt.', 500);
  }

  await admin.from('uitnodigingen').update({ gebruikt_door: userId }).eq('code', code);

  return json({ ok: true, gebruikersnaam: username });
});
