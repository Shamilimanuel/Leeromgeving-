/* Central configuration.
   Values can be overridden through a `.env` file (see `.env.example`); the
   defaults below point at the shared school project so a fresh clone works
   without any setup. The anon key is a *publishable* key and safe to ship:
   everything it can do is limited by row-level security on the database.

   NOTE: the Content-Security-Policy in index.html lists the Supabase host.
   When you point the site at another project, update that header too. */

export const SUPABASE_URL =
  import.meta.env.VITE_SUPABASE_URL || 'https://vgmhcsycjwyxofunlcly.supabase.co';

export const SUPABASE_ANON_KEY =
  import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_LN4j4bepJFA8Qy3PTLDGUA_xvfwUKTH';

/* Names of the deployed Supabase Edge Functions (see `supabase/functions/`).
   They are part of the deployed backend contract and therefore keep their
   original Dutch names. */
export const EDGE_FUNCTIONS = {
  adminActions: 'admin-acties',
  register: 'registreren',
};

/* Mandatory login. When true, the site is closed to guests: a student has to
   sign in before anything -- including the splash -- is shown.

   Kept OFF until every student actually has an account, because the site has
   no public sign-up: registering needs an invite code from an admin
   (`registreren`). Switching this on before the codes are handed out locks
   everyone out of their own study material. Flip it to `true` (or build with
   VITE_REQUIRE_LOGIN=1) once the accounts exist. */
export const REQUIRE_LOGIN =
  import.meta.env.VITE_REQUIRE_LOGIN === '1' || false;

/* Supabase Auth is e-mail based; usernames are mapped to a synthetic address
   on this domain. Students never see it. */
export const SYNTHETIC_EMAIL_DOMAIN = 'leerling.schoolproject.local';

/* Account rules. Mirrored server-side (database constraint + edge functions);
   the client checks them only to give quick feedback. */
export const USERNAME_PATTERN = /^[a-z0-9]{3,20}$/;
export const USERNAME_RULE_TEXT = '3 tot 20 kleine letters of cijfers, zonder spaties';
export const PASSWORD_MIN_LENGTH = 8;
export const INVITE_CODE_LENGTH = 8;         // characters, shown as XXXX-XXXX
export const MAX_INVITES_PER_BATCH = 20;

export const CHAT_MAX_LENGTH = 500;
export const CHAT_POLL_INTERVAL_MS = 8000;
export const CHAT_HISTORY_LIMIT = 80;
