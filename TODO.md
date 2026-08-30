# TODO — Leeromgeving

Working backlog for this repository. Feature names stay Dutch where they are the
app's own terms (Teamchat, Matchspel, Instellingen); everything else is English,
per the language rule in `CLAUDE.md`.

Last reviewed: 2026-08-30.

Legend: `[ ]` open · `[~]` in progress · `[!]` blocked on someone or something
else · `[?]` needs a decision before it can be built.

---

## 1. Small and concrete

- [ ] **Set the minimum password length in Supabase.**
      [Auth → Providers → Email](https://supabase.com/dashboard/project/vgmhcsycjwyxofunlcly/auth/providers?provider=Email).
      Check your own password is already long enough *first*: existing users
      whose password is below the new minimum get an `AuthWeakPasswordError` on
      sign-in, and `src/services/auth.js` (`login`) throws on it, which reads as
      a failed login.
- [?] **If that minimum ends up above 8, align the code.** The number 8 is
      hardcoded in four places and would then be wrong:
      `src/config.js` (`PASSWORD_MIN_LENGTH`),
      `supabase/functions/_shared/helpers.ts` (`PASSWORD_MIN`),
      and twice in `index.html` (`minlength="8"` plus the Dutch text
      "min. 8 tekens").
- [ ] **Click through the new admin actions once.** `chat_legen`,
      `leerling_berichten_wissen` and `codes_opruimen` are deployed
      (`admin-acties` v9) and the function boots, but the authenticated paths
      have never actually run. "Chat leegmaken" deletes real rows.

## 2. Security

- [?] **`chat_namen` is flagged SECURITY DEFINER by the Supabase advisor.**
      This is deliberate and, as it stands, **not a vulnerability** — see
      section 6 for the reasoning and the options. Decide whether to keep it,
      narrow it, or accept the warning permanently.
- [ ] **Edge Functions send `Access-Control-Allow-Origin: *`.**
      (`supabase/functions/_shared/helpers.ts`, `CORS_HEADERS`.) Low risk,
      because auth travels in the `Authorization` header rather than cookies, so
      another site cannot borrow a student's session. Could still be narrowed to
      the Pages origin.
- [x] ~~Privilege escalation through the `chat_namen` view~~ — fixed
      2026-08-29: `authenticated` held INSERT/UPDATE/DELETE on an auto-updatable
      SECURITY DEFINER view, so any student could have set their own `rol` to
      `admin`. Now SELECT only.
- [—] **Leaked password protection** — Pro plan only. Cannot be enabled on the
      free plan; the advisor will keep flagging it. No action possible.

## 3. Lost in the "Revamped shit" restructure (`316a68c`)

Both features were finished and committed at the time, and the handoff document
still lists them as done — but they are not in the current code.

- [x] ~~**Matchspel**~~ — recovered 2026-08-29 from branch `matchspel`
      (`cc17b3e`) and folded into the Oefenspel as the verbind-oefening
      (`src/ui/game.js`). The branch is kept on `origin/matchspel` for
      reference and can be deleted once the game has been played in a browser.
- [!] **Voorlezen (text-to-speech)** — `uiterlijk/voorlezen.js` was deleted by
      the revamp, and the `voorlezen` Edge Function has since been removed from
      Supabase too. Also blocked independently (see section 5).

## 4. Teamproject phases

- [x] **Fase 1 — Teamchat + mute** — done and live.
- [~] **Fase 2 — the practice game.** One Duolingo-style game, not a menu of
      separate ones. The "Oefenspel" tab shows a **path of levels** per chapter
      (`src/ui/path.js`); tapping a level opens a **full-screen session**
      (`src/ui/game.js`) of eight mixed exercises. Finishing pays XP, turns the
      node green with a check and unlocks the next level. See section 5.
  - [x] Verbind — connect a question to its answer. Both columns live in one
        CSS grid, so a one-line question and a three-line answer share a row,
        and a matched pair is joined by a drawn SVG line.
  - [x] Typ — type the term that belongs to a description (section 7).
  - [x] Kies — pick the right term out of four; the three wrong ones are real
        terms from the same chapter, so they are plausible.
  - [x] Volgorde — rebuild a description by tapping its words in order.
  - [x] Vul het gat in — a sentence out of the summary with the term blanked
        out. Only sentences that really contain the term are used.
  - [x] Sorteer — put each term in the paragraph it belongs to. Needs a level
        spanning more than one paragraph, so it shows up on merged levels and
        on the Eindtoets.
  - [x] Quizvraag — the chapter's own quiz entries.
  - [x] Waar of niet waar — does this description belong to this term?
  - [x] Welke hoort er niet bij — three terms from this paragraph and one from
        another; the paragraph is named, otherwise it is a guess.
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

## 5. Duolingo-style path

Shamil's idea, and now the shape of the whole practice game. **The design
questions are settled and the chapter path is built** (2026-08-30):

- [x] **What is one level?** One summary paragraph. Terms and flashcards
      already carry the index of the paragraph they belong to, so the split
      costs no content work (`src/content/levels.js`). Paragraphs with under
      six items merge forward, and a chapter with more than one level ends on
      an **Eindtoets** drawn from everything. Over the 244 chapters that gives
      3-5 levels each and no level thinner than four items — roughly 950
      levels across the site.
- [x] **Where does it live?** On the Oefenspel tab of a chapter, so the chapter
      cards stay as they are.
- [x] **Is it locked in order?** Yes: level 1 is always open, the rest need the
      level before them (`src/state/gameLevels.js`).
- [x] **What is at the end?** The Eindtoets, then the whole path shows as
      finished. Levels can be replayed; XP is only paid for an improvement.

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

## 6. On the `chat_namen` advisor warning

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

## 7. On the typing exercise's answer check

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

## 8. Admin: results per paragraph

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

## 9. Content backlog

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

## 10. Smaller ideas, not started

- [ ] Badge "N kaarten wachten vandaag" on the book overview — the Leitner due
      count is only visible once you are already inside a chapter.
- [ ] Dyslexia pass: check the stylesheets and content for italics used as
      emphasis (bold reads better) and long all-caps labels.
- [ ] Mountain-silhouette hero on the splash screen — from the Claude Design
      mock-up, deliberately never built.
- [ ] Radial menu on very narrow screens (<360px) — tested at 375px and 420px,
      never on anything smaller. Largely superseded on phones: at <=560px the
      menu is no longer an arc in the corner but a panel that slides in from
      the right (section 11), so the arc geometry only has to hold up on
      tablets and desktops now.

## 11. Mobile, the installed app, and mandatory login

### Mandatory login

- [?] **Decide the scope first.** Shamil's call (2026-08-30) is that signing in
      becomes mandatory. Open question: everywhere, or only on phones? "Only on
      phones" is hard to defend — the same student on a laptop would keep the
      guest route, so the requirement would not actually hold. Assume
      *everywhere* unless decided otherwise, and treat the phone as the place it
      was noticed rather than the place it applies.
- [ ] **Gate the app behind an account.** `go()` in `src/ui/navigation.js` is the
      single choke point every screen passes through, so the gate belongs there
      rather than in each screen. Splash and the account screen stay reachable;
      everything else redirects to `account` when `auth.getProfile()` is null.
      The splash "Overslaan" and "Start" buttons currently go straight to `home`
      and would have to go to `account` instead.
- [ ] **Retire the four guest states**, which become unreachable or become the
      gate itself: `accountGast` (`src/ui/account.js`), `chatGast`
      (`src/ui/chat.js`), `settingsGast` (`src/ui/settings.js`), and the `.gast`
      avatar plus its "Niet ingelogd" dropdown (`src/ui/account.js`).
- [!] **Decide what happens to work done while signed out.** This is the part
      that can lose student data, so settle it before writing the gate. Only the
      practice path syncs today: `syncAllLevels()` in
      `src/services/gameProgress.js` pushes local levels up on sign-in. Everything
      else in `src/state/progress.js` is device-local and has no server side at
      all — `voortgang`, `leitner`, `favorieten`, `sq3r`, `cornell`,
      `examenresultaten`. Either migrate those into the account on first sign-in,
      or accept that a student who used the site as a guest loses them.
- [ ] **Do not lock out an offline student.** The app is offline-first and this
      gate must not undo that. `getSession()` reads the session Supabase keeps in
      localStorage and works offline, but `ensureProfile()` makes a network call;
      the gate has to treat "offline with a stored session" as signed in rather
      than bouncing the student to a login screen they cannot complete.
- [ ] **Registration needs an invite code** (`INVITE_CODE_LENGTH` in
      `src/config.js`, the `registreren` Edge Function). Mandatory login
      therefore means every student needs a code *before* they can open anything,
      so enough codes have to exist and be handed out first. A rollout question,
      not a code question, but the code change is worthless without it.
- [ ] **`tests/app.test.js` boots the app signed out** and walks subject → level
      → book → chapter. A hard gate breaks that walkthrough, so it needs either a
      signed-in fixture or a documented way for the gate to stand down in tests.

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

## 12. Done recently

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
