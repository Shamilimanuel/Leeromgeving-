# TODO — Leeromgeving

Working backlog for this repository. Feature names stay Dutch where they are the
app's own terms (Teamchat, Matchspel, Instellingen); everything else is English,
per the language rule in `CLAUDE.md`.

Last reviewed: 2026-08-30.

Legend: `[ ]` open · `[~]` in progress · `[!]` blocked on someone or something
else · `[?]` needs a decision before it can be built.

---

## 1. Security

- [?] **`chat_namen` is flagged SECURITY DEFINER by the Supabase advisor.**
      This is deliberate and, as it stands, **not a vulnerability** — see
      section 5 for the reasoning and the options. Decide whether to keep it,
      narrow it, or accept the warning permanently.
- [ ] **Edge Functions send `Access-Control-Allow-Origin: *`.**
      (`supabase/functions/_shared/helpers.ts`, `CORS_HEADERS`.) Low risk,
      because auth travels in the `Authorization` header rather than cookies, so
      another site cannot borrow a student's session. Could still be narrowed to
      the Pages origin.
- [—] **Leaked password protection** — Pro plan only. Cannot be enabled on the
      free plan; the advisor will keep flagging it. No action possible.

## 2. Lost in the "Revamped shit" restructure (`316a68c`)

Both features were finished and committed at the time, and the handoff document
still lists them as done — but they are not in the current code.

- [ ] **Delete the `matchspel` branch.** Recovered into the Oefenspel as the
      verbind-oefening (`src/ui/game.js`). Kept around until that exercise had
      been played in a browser — `tests/app.test.js` walks level 1 to a green
      check, but that is an automated test, not the same as a human having
      played it. Confirm by hand, then delete `origin/matchspel`.
- [!] **Voorlezen (text-to-speech)** — `uiterlijk/voorlezen.js` was deleted by
      the revamp, and the `voorlezen` Edge Function has since been removed from
      Supabase too. Also blocked independently (see Fase 4 in section 3).

## 3. Teamproject phases

- **Fase 1 — Teamchat + mute** — done and live.
- [~] **Fase 2 — the practice game.** One Duolingo-style game, not a menu of
      separate ones. The "Oefenspel" tab shows a **path of levels** per chapter
      (`src/ui/path.js`); tapping a level opens a **full-screen session**
      (`src/ui/game.js`) of eight mixed exercises. Finishing pays XP, turns the
      node green with a check and unlocks the next level. See section 4. Nine
      exercise kinds are built — verbind, typ, kies, volgorde, vul het gat in,
      sorteer, quizvraag, waar of niet waar, welke hoort er niet bij — covered
      by `tests/exercises.test.js`.
  - [ ] Tijdrace (as many as you can in 45 seconds) — the only kind left from
        the shortlist. It needs a different session shape (a clock instead of a
        fixed number of exercises), which is why it is not in yet.
  - [!] Spraakspel (speak the answer) — needs speech, so it waits on Fase 4.
- [ ] **Fase 3 — competitions between students** — not started. Builds on
      Fase 2 and needs cloud progress to compare students. No design yet:
      1-versus-1 challenge or a timed group contest is still an open question.
- [!] **Fase 4 — AI tutor + voorlezen.**
  - [!] Voorlezen — paused by choice. ElevenLabs' free tier gives no API
        access, and OpenAI requires a credit card plus $5 prepaid. Google Cloud
        TTS also needs a card even inside its free quota.
  - [ ] AI tutor / correction chat — not started. Would explain *why* an answer
        was wrong instead of only marking it. Needs a paid API key too, possibly
        the same one.

## 4. Duolingo-style path

Shamil's idea, and now the shape of the whole practice game. **Built**
(2026-08-30): one level per summary paragraph, thin paragraphs merging forward
(`src/content/levels.js`), locked in order (`src/state/gameLevels.js`), ending
on an Eindtoets, replayable with XP only paid for an improvement — roughly 950
levels across the 244 chapters.

Still open, one level up:

- [ ] **A path of chapters on the book screen.** The chapter cards could become
      path nodes too, a chapter turning green once all its levels are done.
      This is the "beide lagen" option that was deliberately not built first.
- [ ] **Rewards and unlockables.** XP is recorded per level, feeds the
      character-card statistics and is now also stored server-side. Nothing is
      unlocked with it yet. Shamil's idea: badges or a **tag next to your name
      in the Teamchat**. Design note for when it is built: the tag must be
      derived from `spelvoortgang` on the server, or written by an Edge
      Function. A student can write their own `spelvoortgang` rows (that is how
      the game saves), so a tag that simply trusts those numbers could be
      forged with a handful of REST calls. Only the *reading* of it needs to be
      trustworthy — showing a tag is not the same as granting a permission.
- [ ] **Streak / daily goal.** There is a `streak` in `src/state/progress.js`
      already; the path does not use it.
- [ ] **A completion animation** when the last level of a chapter is cleared.

Relevant current code (the handoff doc still points at the pre-revamp paths):

| Handoff doc says | Now lives in |
|---|---|
| `renderBook()` in `uiterlijk/app.js` | `src/ui/book.js` |
| `voortgangVoor(...)` | `src/state/progress.js` |
| `data/structuur.js`, `registreerBoek(...)` | `src/content/structure.js`, `src/content/registry.js` |
| `uiterlijk/style.css` | `src/styles/*.css` |
| `uiterlijk/auth.js` | `src/services/auth.js`, `src/lib/supabase.js` |

## 5. On the `chat_namen` advisor warning

Kept here so the reasoning is not lost.

**What the view is.** `select id, gebruikersnaam, rol from profiles where
is_actief()`, defined `security_invoker = false` and owned by `postgres`. Chat
needs author names, but students must not be able to read all of `profiles`
(which also holds `status`, `gemute` and `aangemaakt_op`). The view exposes
exactly three columns and nothing else.

**Why the advisor flags it.** A SECURITY DEFINER view runs with the *creator's*
permissions, so it bypasses RLS on `profiles`. That is precisely what makes it
work, and precisely why it deserves review.

**Why it is currently safe.** The real danger with such a view is writes, not
reads: Postgres makes a simple view auto-updatable, so a write would also have
bypassed RLS. That hole existed and is now closed — `authenticated` has
**SELECT only** and `anon` has no grants at all. `is_updatable` still reports
`YES`, but that describes the view's *shape*; with no INSERT/UPDATE/DELETE grant
nobody can act on it.

**What remains exposed.** Any signed-in, active student can read the id,
username and role of every active profile — the whole class roster, including
students who never posted. For a shared class chat that is arguably the point.

**Options, if you want the warning gone:**

- [?] **Keep it and accept the warning.** Simplest. The design is deliberate and
      documented here.
- [?] **Narrow the view to people who actually posted a message.** Cuts the
      roster exposure; `src/services/chat.js` already filters by id, so nothing
      in the app would change. Still SECURITY DEFINER, so the advisor keeps
      flagging it.
- [?] **Switch to `security_invoker = true`.** Would silence the advisor, but
      then students need an RLS policy to read other profiles — and RLS is
      row-level, not column-level, so they would get `status` and `gemute` too.
      **Worse than what we have.**

## 6. On the typing exercise's answer check

Kept here because the rule is easy to "simplify" back into a bug.

An answer is compared after normalising: HTML entities decoded
(`richtingsco&euml;ffici&euml;nt`), lower case, accents stripped, punctuation
dropped. Brackets are optional (`diameter (middellijn)` accepts *diameter*,
*middellijn* or both; `(to) admire` accepts either), and a slash **with spaces**
splits into alternatives while `km/uur` and `m/s` stay whole.

Small typos are forgiven — but **only when no other term of the chapter fits at
least as well**. Without that guard, 69 pairs across the 255 playable chapters
graded as "almost right" while being the wrong concept: producenten/reducenten,
bollelens/hollelens, kraakbeen/spaakbeen, zaadballen/zaadcellen,
in-/uitwendige prikkel, minimum-/maximumtemperatuur. Those are exactly the
pairs a test asks about, so forgiving them would confirm the mix-up. With the
guard: 0 such pairs, and all 5605 terms still accept their own spelling.

## 7. Admin: results per paragraph

Built 2026-08-30. In the admin panel each student row has a **Voortgang**
button that opens their practice path: every chapter they played, every level
inside it, the best score and the XP, with **Wissen** per level, **Hoofdstuk
wissen** per chapter and **Alles wissen** for the whole path.

How the pieces fit:

- `public.spelvoortgang` — one row per (student, chapter, level). RLS: you read
  your own rows, an admin reads everyone's; you may only write your own.
- Deleting somebody else's rows goes through `admin-acties`
  (`spelvoortgang_wissen`), never from the browser, like every other privileged
  action. The action takes a chapter and a level so it can wipe one paragraph,
  one chapter or everything.
- The game stays offline-first: results are written to localStorage first and
  mirrored up (`src/services/gameProgress.js`). Signing in pushes what was
  earned while signed out and pulls anything from another device.
- Only the chapter key and level number are stored. The paragraph names in the
  admin screen come from the content in the browser, so the database holds no
  copy of the study material.

Watch out when adding tables: a new table in `public` inherits a blanket
`grant all` for `authenticated`, which includes **TRUNCATE — and TRUNCATE
ignores RLS**. `spelvoortgang` got that by default and it was revoked in
`20260829225221`. Check `information_schema.role_table_grants` after every new
table.

Still open here:

- [ ] A class overview: results per paragraph across *all* students at once,
      rather than one student at a time. That is the view a teacher actually
      wants before a test.
- [ ] The three `is_admin` / `is_actief` / `mag_chatten` advisor warnings are
      by design — the RLS policies call them — but they are worth a note so
      nobody "fixes" them by revoking EXECUTE and breaking every policy.

## 8. Content backlog

- [!] **Engels TL — Deel B** — waiting on scans. TL1 was scanned twice and both
      times turned out to be Deel A; a third attempt is needed. TL2, TL3 and TL4
      have no usable scan yet.
      *Check before scanning:* open the booklet in the middle — a house/room,
      your own world/hobbies, or directions means Deel B (the right one);
      introductions, a timetable, or shopping/food means Deel A.
- [!] **Maatschappijkunde TL4** — no source book available, so there is nothing
      to work from. Parked.
- [!] **V8 plan, steps 3 to 7** (Rekenen, Nederlands, Wiskunde, Biologie,
      Maatschappijleer & Geschiedenis) — waiting on the V8 PDF being uploaded
      again. The subject-specific ideas were lost when that session was
      summarised, and steps 1 and 2 are already done.

## 9. Smaller ideas, not started

- [ ] Badge "N kaarten wachten vandaag" on the book overview — the Leitner due
      count is only visible once you are already inside a chapter.
- [ ] Dyslexia pass: check the stylesheets and content for italics used as
      emphasis (bold reads better) and long all-caps labels.
- [ ] Mountain-silhouette hero on the splash screen — from the Claude Design
      mock-up, deliberately never built.
- [ ] Radial menu on very narrow screens (<360px) — tested at 375px and 420px,
      never on anything smaller. Largely superseded on phones: at <=560px the
      menu is no longer an arc in the corner but a panel that slides in from
      the right (section 10), so the arc geometry only has to hold up on
      tablets and desktops now.

## 10. Mobile, the installed app, and mandatory login

### Mandatory login

**Built and switched ON 2026-08-30 (2.5.0).** The gate lives in
`src/ui/authGate.js` and hangs on `go()` through `setNavigationGate()`, so
`src/ui/navigation.js` still knows nothing about accounts. A signed-out student
only ever reaches the account screen, the splash included — signing in comes
*before* the welcome, which is Shamil's call. Scope is everywhere, not phones
only. `screenFor()` is a pure function, covered by `tests/authGate.test.js`.

> **The site is closed to anyone without an account, and that is the intention**
> (Shamil, 2026-08-30). Accounts are handed out deliberately rather than the
> site being open to all; a student without one cannot get in at all, because
> there is no public sign-up. To open it back up, build with
> `VITE_REQUIRE_LOGIN=0` — no code change needed.

Settled while building it:

- **Guest work stays on the device.** Signing in does not clear localStorage, so
  `voortgang`, `leitner`, `favorieten`, `sq3r`, `cornell` and `examenresultaten`
  simply remain and are adopted by the first account that signs in — the
  practice path already syncs that way (`syncAllLevels()`). Nothing is migrated
  and nothing is lost. The catch, on a shared school computer: the first
  student to sign in inherits whatever the previous guest left behind.
- **Offline students are not locked out.** The gate accepts a stored session on
  its own (`auth.hasSession()`), because `ensureProfile()` needs the network.
- **The session no longer dies with the tab** (2.4.0). It used to live in
  `sessionStorage` only — deliberate, for shared school computers — which with
  mandatory login would have meant signing in *every single time* the app was
  opened. `src/lib/supabase.js` now routes it to localStorage or sessionStorage
  depending on a "Blijf ingelogd op dit apparaat" checkbox, unticked by default
  and cleared on sign-out. Reads fall back to the other store and writes keep
  one copy, so no session is left behind in the store no longer in use;
  `tests/rememberSession.test.js` covers exactly that. (An earlier version of
  this document claimed the session was already in localStorage. It never was.)
- **`tests/app.test.js` no longer depends on the switch.** It clears the gate
  after boot, since that walkthrough is about content, not accounts. Without
  that, flipping `REQUIRE_LOGIN` would fail the suite and a failing test blocks
  the deploy — the switch would not have been flippable.

- [ ] **See a code actually disappear.** `registreren` v2 (2026-08-30) deletes
      an invite code once it has been used, so the admin list only holds codes
      that still work. The function was smoke-tested live — it boots, validates
      and runs its database query — but the *success* path has never run,
      because that needs a real code and a real registration. Do it with the
      first code you hand out: register, then check the code is gone from the
      admin panel and the account exists.

Handing out accounts: invite codes last 14 days
(`20260829201913_security_and_invites.sql`) and come **20 at a time**
(`MAX_INVITES_PER_BATCH`), so a whole class is several batches through the
admin panel.

- [ ] **Retire the guest states** once the switch is permanently on: `chatGast`
      (`src/ui/chat.js`), `settingsGast` (`src/ui/settings.js`) and the `.gast`
      avatar with its "Niet ingelogd" dropdown (`src/ui/account.js`). They are
      unreachable behind the gate but still correct while it is off, so they
      stay for now. `accountGast` becomes the gate itself and must stay.

### Phone follow-ups

- [ ] **Confirm the 2.3.1 fixes on the phone.** Three bugs were reported and
      fixed on 2026-08-30 but deployed without being seen working: the menu
      trigger drifting down after closing, the splash "Verder" button jumping
      onto "Overslaan", and the close button scrolling away inside a sheet.
- [ ] **Safe-area insets in the installed app** (notch and home indicator) are
      still unverified. They cannot be checked in DevTools and only apply in
      standalone mode, so this needs the installed app on a real phone.
- [ ] **The bell is only on the home screen**, because home is the only screen
      whose top bar carries the account button. Add it to the other eight top
      bars, or accept that release notes are found from home only.
- [ ] **Play Store listing via a Trusted Web Activity** (see README). Blocked on
      a custom domain and a Play developer account, not on code — a
      `user.github.io/repo` sub-path cannot host the `assetlinks.json` that
      proves ownership.

## 11. Done recently

- Node installed; the site runs and is deployed to GitHub Pages via
  `.github/workflows/deploy.yml` (a failing test blocks the deploy).
- Backend repaired: `registreren` deployed (registration was impossible),
  `admin-acties` brought up to date, migration applied.
- Repo and production reconciled — 10 migrations, six of which previously
  existed only in the database.
- Chat moderation bug fixed: message ids are uuids, but the code validated them
  as integers, so admin delete silently did nothing.
- Home shortcuts restyled to match the subject cards; Instellingen extended;
  admin overview and moderation actions added.
- Matchspel recovered from the branch it was stranded on, ported to the module
  structure, and merged with the typing exercise into one Oefenspel session.
- Both games merged into one Oefenspel session (`src/ui/game.js`); the answer
  check moved to `src/lib/answers.js` with `tests/answers.test.js`.
- The Duolingo path built: levels per paragraph (`src/content/levels.js`),
  locking and XP (`src/state/gameLevels.js`), the path screen
  (`src/ui/path.js`) and a full-screen session overlay, plus two new exercise
  kinds (kies, volgorde). Covered by `tests/levels.test.js` and a walkthrough
  in `tests/app.test.js` that plays level 1 to a green check.
- Chapter tab underline now measures the active tab instead of assuming every
  tab is the same width — the old guess assumed equal widths.
- Typo remote `orgin` removed.

**2026-08-30**

- Five more exercise kinds: vul het gat in, sorteer, quizvraag, waar of niet
  waar, welke hoort er niet bij. Nine in total, and `tests/exercises.test.js`
  checks every level of every chapter can still fill a session.
- Practice results mirrored to Supabase (`spelvoortgang`), so progress follows a
  student between devices.
- Phone layout rebuilt in `src/styles/mobile.css` (imported last by `main.css`):
  tighter gutters, 44px tap targets, bottom sheets instead of centred dialogs,
  safe-area insets, no stuck hover states, and no iOS zoom on focus. The three
  scattered phone blocks it replaced (in `layout.css`, `widgets.css`, `chat.css`)
  were removed, so phone layout has one source of truth.
- Update flow: `public/sw.js` no longer calls `skipWaiting()` on install, so a
  new build waits and `src/ui/appUpdate.js` asks before reloading. Release notes
  in `src/content/changelog.js` are shown once after an update by
  `src/ui/whatsNew.js`. Covered by `tests/changelog.test.js` and
  `tests/whatsNew.test.js`.

- Admin panel: results per paragraph per student, with reset per level, per
  chapter or all at once (`admin-acties` v10).
- Update flow walked end to end in Chrome: served a 2.3.0 build, deployed 2.3.1
  over it, and the waiting worker was detected, the bar offered the reload, and
  the sheet showed only the 2.3.1 entry. The bug that made this necessary: with
  no version in `public/sw.js` the bytes never changed between deploys, so the
  browser installed nothing and no update was ever noticed.
- Tools menu moved out of the bottom-left corner on phones, where its fold-out
  arc opened straight over the subject cards. The trigger now sits in the top
  bar and the options slide in as a panel from the right.
- Notice bell in the top bar, with a dot while a release is unread; the
  Tekstgrootte tile is hidden on phones (it stays in Instellingen).
- Summaries no longer push content off the side. Two causes: 33 of the 101
  tables in the content modules are not wrapped in `.tblwrap`, and Dutch
  compounds like *Aansprakelijkheidsverzekering* are wider than a phone. Because
  `.screen` is `overflow-x:hidden` that content was clipped out of reach rather
  than scrollable. Fixed in CSS, since `content:build` regenerates the 244
  content modules.
- Three phone bugs from one mistake: the touch-device block blanked `transform`
  on `:hover`, but the menu trigger and the splash "Verder" button both use
  `transform` to centre themselves, so a hover that stuck after a tap moved
  them. Released as 2.3.1.
- Deployed to GitHub Pages (2.3.0, then 2.3.1). Installing from the live HTTPS
  address gives a real app; over plain HTTP Android only offers a snelkoppeling.
- Mandatory login built and switched on (2.5.0), with "blijf ingelogd op dit
  apparaat" (2.4.0) so the session can outlive the tab. See section 10.
- The admin actions were clicked through and work: `chat_legen`,
  `leerling_berichten_wissen` and `codes_opruimen` had been deployed but never
  actually run against a signed-in admin. They have now.
- Password minimum confirmed at 8, matching `PASSWORD_MIN_LENGTH`
  (`src/config.js`), `PASSWORD_MIN` (`supabase/functions/_shared/helpers.ts`)
  and the two places in `index.html`. Nothing to align, and no existing account
  is below it — raising it later would lock out anyone whose password is
  shorter, including the only admin.
- Invite codes and the account screen now name Shamil instead of "je docent":
  he maintains the site and hands out the codes himself.
