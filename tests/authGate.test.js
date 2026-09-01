/* The mandatory-login rule. `screenFor` is pure, so the whole gate can be
   checked without a browser, a session or a mocked config module. */
import { describe, it, expect } from 'vitest';
import { screenFor } from '../src/ui/authGate.js';
import { SCREENS } from '../src/ui/navigation.js';

const OFF = { enabled: false, signedIn: false };
const LOCKED = { enabled: true, signedIn: false };
const OPEN = { enabled: true, signedIn: true };

describe('mandatory login: which screen is shown', () => {
  it('changes nothing while the gate is switched off', () => {
    /* The deployed default. Guests keep the run of the site. */
    Object.values(SCREENS).forEach((id) => {
      expect(screenFor(id, OFF)).toBe(id);
    });
  });

  it('sends a signed-out student to the account screen', () => {
    expect(screenFor(SCREENS.home, LOCKED)).toBe(SCREENS.account);
    expect(screenFor(SCREENS.chapter, LOCKED)).toBe(SCREENS.account);
    expect(screenFor(SCREENS.agenda, LOCKED)).toBe(SCREENS.account);
    expect(screenFor(SCREENS.admin, LOCKED)).toBe(SCREENS.account);
  });

  it('keeps the welcome behind the login, not in front of it', () => {
    /* The point of the feature: no splash until you are signed in. */
    expect(screenFor(SCREENS.splash, LOCKED)).toBe(SCREENS.account);
    expect(screenFor(SCREENS.splash, OPEN)).toBe(SCREENS.splash);
  });

  it('lets the account screen itself through, or nothing could be reached', () => {
    expect(screenFor(SCREENS.account, LOCKED)).toBe(SCREENS.account);
  });

  it('lets a signed-in student everywhere', () => {
    Object.values(SCREENS).forEach((id) => {
      expect(screenFor(id, OPEN)).toBe(id);
    });
  });
});
