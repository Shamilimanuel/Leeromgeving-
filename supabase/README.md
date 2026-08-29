# Backend (Supabase)

Everything the site needs on the server side lives here:

```
supabase/
├── config.toml                          which functions need a JWT
├── migrations/
│   └── 20260829120000_security_and_invites.sql   tables, RLS policies, invite codes
└── functions/
    ├── _shared/helpers.ts               CORS, validation, service-role client
    ├── admin-acties/index.ts            every privileged account change
    └── registreren/index.ts             account creation with an invite code
```

The browser only ever uses the **publishable** key. Everything that needs
more rights (creating accounts, resetting passwords, blocking, muting,
deleting) goes through the two Edge Functions, which check the caller's
role in `public.profiles` and then act with the service role.

## How accounts work

1. An admin opens **Adminpaneel → Uitnodigingscodes** and generates one or
   more codes (`ABCD-EFGH`). A code is valid for 14 days and can be used once.
2. The admin gives a code to a student (on paper, in class, ...).
3. The student opens **Account → Nieuw account**, fills in the code, a
   username (3–20 lowercase letters/digits) and a password (8+ characters).
4. The `registreren` function checks the code, creates the account and marks
   the code as used. The student is logged in straight away.

Public sign-up is **off** in Supabase Auth, so this is the only way in.

## Deploying (one time, ~10 minutes)

You need the [Supabase CLI](https://supabase.com/docs/guides/cli) and to be
logged in (`supabase login`).

```sh
# 1. link this folder to the project
supabase link --project-ref vgmhcsycjwyxofunlcly

# 2. apply the database changes
supabase db push
#    (or paste supabase/migrations/*.sql into the SQL editor in the dashboard)

# 3. deploy the functions
supabase functions deploy admin-acties
supabase functions deploy registreren --no-verify-jwt

# 4. remove the old read-aloud function and its secret (feature was removed)
supabase functions delete voorlezen
supabase secrets unset ELEVENLABS_API_KEY
```

Then in the **dashboard**:

- **Authentication → Sign In / Providers → Email**: turn **off**
  "Allow new users to sign up". (The `registreren` function uses the service
  role and is not affected.)
- **Authentication → Sign In / Providers → Email → Minimum password length**:
  set to **8**.
- **Authentication → Attack protection**: enable "Leaked password protection"
  if your plan offers it.
- **Database → Triggers**: if a trigger on `auth.users` still creates
  profiles from `raw_user_meta_data`, check that it never sets `rol` from
  that metadata. The migration's policies do not rely on it either way.

## First admin

New accounts are always students. Promote one account once, in the SQL
editor:

```sql
update public.profiles set rol = 'admin' where gebruikersnaam = 'jouwnaam';
```

## Secrets

The service-role key and any other secret only exist as Supabase function
secrets or in a local `.env` (git-ignored). Never put them in the frontend
or commit them.
