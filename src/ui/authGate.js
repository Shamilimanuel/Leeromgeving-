/* Mandatory login.

   When `REQUIRE_LOGIN` is on, the site is closed to guests: a student lands on
   the account screen and only reaches the splash -- the welcome -- after
   signing in. The gate hangs on `go()` (the single choke point every screen
   passes through) rather than being repeated in each screen.

   Two things it deliberately does NOT do:
   - It never bounces a student who is offline. `ensureProfile()` needs the
     network, so it fails on a train; a stored session is enough to pass.
   - It does not touch what is in localStorage. Work done as a guest stays on
     the device and is adopted by the first account that signs in, exactly as
     it was before the gate existed. */
import { REQUIRE_LOGIN } from '../config.js';
import * as auth from '../services/auth.js';
import { SCREENS, setNavigationGate, go } from './navigation.js';

/* The only screens a signed-out student may see. */
const PUBLIC_SCREENS = [SCREENS.account];

/* Which screen should actually be shown. Pure, so the rule can be tested
   without a browser, a session or a mocked config. */
export function screenFor(requested, { enabled, signedIn }) {
  if (!enabled || signedIn) return requested;
  return PUBLIC_SCREENS.indexOf(requested) > -1 ? requested : SCREENS.account;
}

export function isGateEnabled() {
  return REQUIRE_LOGIN;
}

/* A session is enough: the profile may be unreachable while offline. */
function signedIn() {
  return auth.isSignedIn() || auth.hasSession();
}

/* Installs the gate and decides the screen the app opens on. Returns the
   screen it settled on, which the tests assert against. */
export async function initAuthGate() {
  setNavigationGate((requested) => screenFor(requested, {
    enabled: REQUIRE_LOGIN,
    signedIn: signedIn(),
  }));

  if (!REQUIRE_LOGIN) return SCREENS.splash;

  /* Read the stored session before deciding, so a returning student is not
     shown a login screen they do not need. */
  await auth.restoreSession();
  if (signedIn()) return SCREENS.splash;

  go(SCREENS.account);
  return SCREENS.account;
}
