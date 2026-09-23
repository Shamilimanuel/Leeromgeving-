# Leeromgeving — status and checklist

Working notes, kept so a new chat can pick up without re-deriving anything.
Last updated: **24 September 2026**, at **v2.7.0**.

This one file replaces the old `STATUS.md` and `TODO.md`. Both are still in
git history at `a10d622` if an old detail is ever needed.

**How we work this list:** items are worked top to bottom. Pick one, say the
name, and it gets built. When it is done it moves to *Recently done* and we go
to the next. New ideas go in *Ideas, parked* until they earn a place in *Next
up* — and anything marked **← recommended** is what I would do next if it were
my call.

### Picking this up again

**Right now:** 2.7.0 was pushed on 24 Sep: Goudklei on Settings and the tools
menu, the reading-font choice, per-book loading (change 4), and the tour fix.
**First thing next session: look at 2.7.0 on a real phone** — the checklist is
under *Blocked on Shamil → On a phone*. Then pick the next change: 3 (chapter
screen) is the natural one, since it is where students read.

Everything else that is open is either one of the five plan changes below it,
or something only Shamil can do (a scan, a phone, a decision) — those are
grouped under *Blocked on Shamil* so they can be done in one sitting.

---

## Where things stand

| | |
|---|---|
| Version | **2.7.0**, pushed 24 Sep (2.6.0 before it, 4 Sep) |
| Hosting | GitHub Pages, deployed by `.github/workflows/deploy.yml` on every push to `main` |
| Backend | Supabase: accounts, `spelvoortgang`, Edge Functions (`supabase/`) |
| Content | 10 subjects in the menu, 8 with content · 37 books · 267 chapters · ~1324 paragraphs |
| Source data | 36 book JSON files in `data/`; 185 chapters generated, 82 hand-written |
| Checks | `npm run check` green (lint + 202 tests + build) · `content:check` no errors |
| Bundle | main JS 376 kB (105 kB gzip); chapters load per book (was 4.42 MB, all books) |
| Branches | `main`; `matchspel` (local + remote) kept only until one verbind-oefening is played |
| Local vs remote | level with `origin/main` after the 2.7.0 push |

**Things not to change by accident:**

- **Persisted names are a deployed contract.** localStorage keys (`voortgang`,
  `leitner`, `favorieten`, `sq3r`, `cornell`, `examenresultaten`, …), database
  columns (`gebruikersnaam`, `rol`, `status`) and Edge Function action names.
  Map to English at the boundary, never rename.
- **Do not "fix" the `is_admin` / `is_actief` advisor warnings.** The RLS
  policies call those functions; revoking EXECUTE breaks every policy.
- **`npm run content:build --force` overwrites hand edits.** Without `--force`
  it only rewrites what it generated and reports drifted modules.
- **A function called from `onclick="..."` must be exported through
  `src/ui/globals.js`** — `tests/inline-handlers.test.js` enforces it.
- **A new icon needs the SVG in `public/icons/ui/` and a rule in
  `public/icons/icons.css`.** Missing either renders nothing, silently.
- **A new table in `public` inherits `grant all` for `authenticated`,
  TRUNCATE included — and TRUNCATE ignores RLS.** Check
  `information_schema.role_table_grants` after every new table.

### Releasing

Bump the version in three places — `APP_VERSION` in
`src/content/changelog.js`, `version` in `package.json`, `APP_VERSION` in
`public/sw.js` — and add a Dutch changelog entry at the top.
`tests/changelog.test.js` fails when they drift. Pushing to `main` deploys.

### Running the checks

```bash
npm run check           # lint + test + build — run before finishing a change
npm run content:check   # validate the book JSON and the modules
npm run content:build   # regenerate chapter modules from data/
```

---

## Done

**The site**
- [x] Browse subject → level → year → book → chapter
- [x] Per chapter: summary, flashcards (Leitner), practice quiz, glossary
- [x] Favourites, search, notes (Cornell and SQ3R), Pomodoro timer, practice exam
- [x] Light mode, dyslexia mode, adjustable text size
- [x] Installable PWA with a service worker, "Wat is er nieuw?" sheet
- [x] Phone layout rebuilt: the menu becomes a slide-in panel at ≤560px
- [x] Self-hosted fonts; no third-party request at runtime
- [x] Every UI symbol an icon (Lucide SVG masks), no emoji anywhere

**The practice path (Oefenspel)**
- [x] One level per summary paragraph, ~950 levels, locked in order, ending on an Eindtoets
- [x] Full-screen sessions of eight mixed exercises, XP only paid for an improvement
- [x] Nine exercise kinds: verbind, typ, kies, volgorde, vul het gat in, sorteer,
      quizvraag, waar of niet waar, welke hoort er niet bij
- [x] Typing check that forgives typos only when no other term fits as well
      (0 wrong-concept pairs across 5605 terms)
- [x] Offline-first: localStorage first, mirrored to `spelvoortgang`

**Accounts and admin**
- [x] Mandatory login (2.5.0); reopen with `VITE_REQUIRE_LOGIN=0`, no code change
- [x] "Blijf ingelogd op dit apparaat" (2.4.0)
- [x] Invite codes: 20 per batch, 14 days, deleted once used
- [x] Admin panel: codes, class overview per chapter, per-student path progress
- [x] Deleting someone's progress goes through `admin-acties`, never the browser
- [x] Teamchat removed on purpose; replaced by the local Agenda with study plans

**Content**
- [x] 37 books, 267 chapters, structure clean everywhere (0 tag errors, every
      quiz question 4 distinct options with an explanation)
- [x] Wiskunde TL1 complete (nine chapters)
- [x] 53 inline-SVG figures across 38 chapters; no `.diagram-nodig` placeholder left
- [x] Paragraph numbering in the wiskunde chapters
- [x] Empty years grey instead of clickable

**Fixed along the way**
- [x] `content:build` silently replaced chapters (key collision) and clobbered
      hand edits — both fixed, guarded by `tests/chapterKeys.test.js`
- [x] Self-check blocks did not open
- [x] Two rekenen questions showing the right answer twice
- [x] Summary boxes overflowing on phones; three stuck-`:hover` layout bugs
- [x] Near-black `.snel-ico` icons; dark-on-dark snelbalk tiles in light mode

---

## Next up

The plan of record: six changes, in build order. A tickable page with the
measurements behind each one:
<https://claude.ai/code/artifact/be17f155-e9d6-4c46-8d96-a1b61f22f819>

- [~] **1. A style of your own** ← recommended, in progress
  Shamil: the UI "feels empty except for what you actually need". Measured,
  that is three things: empty states with no icon and no next action, the block
  vocabulary already built barely used (`vergelijk` 9%, `ezel` 3%, `tijdlijn`
  once), and no identity beyond gold-on-dark.
  - [x] Preview three directions (claymorphism variants) before touching `src/`
        — A Speelklei, B Goudklei, C Rustklei, six screens each:
        <https://claude.ai/artifact/HGX53PgXDcoSgiuSrDQsUg>
  - [x] **Decided 23 Sep: B, Goudklei.** Today's gold-on-night look in clay:
        same subject colours, same Cinzel + DM Sans, no new fonts. Surfaces
        get the four-shadow clay recipe plus a thin gold rim; the main button
        is gold glaze. Needs a light-mode partner palette (not designed yet).
  - [x] **Settings pilot built** *(23 Sep, uncommitted)*. Screenshots:
        <https://claude.ai/artifact/D5E3KsdNuC4cRjRxobqfH2>
        Goudklei tokens + parchment light mode in `src/styles/clay.css`; the
        Settings rules in it are scoped to `#settings`. Five categories as a
        rail (tap-into list at ≤560px), real switches, direct A / A+ / A++.
        Also does most of change 2 below.
  - [x] **Reading font choice in dyslexia mode**: Lexend, Atkinson
        Hyperlegible, Andika (self-hosted in `public/fonts/`). OpenDyslexic
        left out on purpose: controlled studies found no benefit. Plus an
        **Extra letterafstand** switch (Zorzi et al. 2012). Asked for by
        Shamil from a dyslexic student who is slow to recognise words.
        New localStorage keys: `dyslexieLettertype`, `letterafstand`.
  - [ ] See the pilot on a real phone, and run the signed-in save flows
        (username, password, delete) against the live database once
  - [ ] Roll Goudklei out beyond Settings, screen by screen
  - [ ] Pick one, apply it to Settings as the pilot screen
  - [ ] Give each of the 7 empty states an icon and a next action
  - [ ] Put `vergelijk`, `ezel`, `tijdlijn` to work
  - [ ] Dyslexia pass: italics as emphasis become bold, no long all-caps labels
  - [ ] Hold the line on motion — ~53 animation declarations already, add none

- [ ] **2. Settings, rebuilt as five categories**
  Account · Weergave · Mijn gegevens · Gevaarlijk · Over. Today it is seven
  flat boxes where "Account definitief verwijderen" weighs the same as
  "Tekstgrootte".
  - [x] Category rail on desktop; a tap-into list at ≤560px *(pilot, 23 Sep)*
  - [x] `Voortgang wissen` and `Overal uitloggen` into Mijn gegevens
  - [x] Quarantine `Account verwijderen` in a distinct danger zone
  - [ ] Retire the dead guest states: `settingsGast` (`src/ui/settings.js`) and
        the `.gast` avatar dropdown (`src/ui/account.js`). `accountGast` is the
        gate itself and stays.

- [ ] **3. The chapter screen: six tabs, one route**
  Six equal choices at the moment a student should be reading.
  - [ ] Replace the flat row with read → practise → test
  - [ ] Demote Begrippenlijst and Notities to secondary; keep the per-tab counts
  - [ ] `tests/app.test.js` tab walk still passes

- [x] **4. Cut the first-load weight** *(23 Sep, uncommitted, for 2.7)*
  - [x] **Decided (Shamil): a book you opened works offline.** Written into
        README "Deployment" and `src/content/loader.js`.
  - [x] Chapter bodies load per book (`src/content/loader.js`); book
        registries stay eager. Lists, titles, stats, agenda read the file
        index + registries and never need a book.
  - [x] Opened books remembered (`geopendeBoeken`) and re-fetched after an
        update (`warmOpenedBooks`), because an update empties the SW cache.
  - [x] Search and the exam load every book, and say so when offline.
  - [x] Measured: main JS **4,423 kB → 374 kB** (1,134 → 105 kB gzip).
        Browser walk: 0 chapter files at home, 8 on the Economie TL4 book
        screen, all only when searching.
  - [ ] **Not yet verified:** real airplane-mode test on a phone, and the
        after-an-update re-fetch on a real deploy. Both need the live site.

- [ ] **5. Make XP and the streak pay off**
  ~950 levels pay XP into nothing — the one broken loop in the project.
  *Constraint:* a student can write their own `spelvoortgang` rows, so any
  badge or tag is derived server-side or written by an Edge Function.
  - [?] Decide the reward form — badge, tag, unlockable (Shamil)
  - [ ] Give it a home on the account screen
  - [ ] Make the path use the streak (`src/state/progress.js` already tracks it)
  - [ ] Completion animation when a chapter's last level clears
  - [ ] Tijdrace — as many as you can in 45 s; needs a clock-shaped session

- [ ] **6. The Economie TL4 treatment, everywhere** *(runs alongside the rest)*
  Model: `economie|tl|4|1` scores 4.81 sectioning markers per paragraph
  (`h5.sub + g2/g3 + call.sum + check`). Worst first:
  - [ ] Wiskunde TL4 (0.00 — eight chapters with none), TL2 (0.23), TL3 (0.46)
  - [ ] Engels TL1 (0.29), TL2 (0.39), TL3 (0.44)
  - [ ] Nederlands TL2 (0.70), TL1 (0.75)
  - [ ] Self-check blocks: 25 of 37 books have none
  - [ ] Loose text outside containers: Maatschappijleer TL3 17%, Nederlands TL1 9%
  - [ ] Under the 10-item minimum: Nederlands BBL1 H9/H10/H11, BBL2 H10/H11
  - [ ] Paragraph numbering: Rekenen BBL1 (63 `N.N` in the book), Nederlands
        BBL3/BBL4 and TL1–TL4 (numbered `1..N` per cursus). Engels probably
        not numbered at all — one check. Wiskunde TL4 deel B correctly left alone.

### Blocked on Shamil

Grouped by where you have to be.

**At the scanner / with the school**
- [ ] **Which textbook method and edition do Arbeid and BK use?** 34 of the 41
      empty book/year slots. The level structure is known (BK only years 1–2,
      matches `SUBJECT_YEARS`); the book is not.
- [ ] **Engels TL Deel B**, four books. TL1 was scanned twice, both Deel A.
      *Check:* open the booklet in the middle — house/room, own world & hobbies,
      or directions = Deel B; introductions, timetable, shopping/food = Deel A.
      The 5 PDFs in `ShareX\Screenshots\Project\add\` may be these; needs eyes.
- [ ] **Maatschappijkunde TL3 and TL4** — no source book at all.
- [ ] **Upload the V8 PDF again** — steps 3–7 of that plan were lost.

**On a phone or in a browser**
- [ ] **2.7.0 on a real phone:** open Instellingen (the rail becomes a list,
      the font choice appears with Dyslexie-modus on); open the "…" menu (a
      bottom sheet; start a Pomodoro and see the time on the button); open a
      book, then switch to airplane mode and reopen a chapter of it (must
      work), and one of a book never opened (must show the Dutch message).
- [ ] Look at the 53 figures (worth most: Wiskunde TL1 H1 solids, TL2 H8
      aanzichten, TL4 H3 3D assenstelsel) and the new icons on coloured discs
- [ ] Play one verbind-oefening → then delete `matchspel` locally and on origin
- [ ] Register once with a real invite code; check the code vanishes from admin
- [ ] Confirm the three 2.3.1 fixes: menu trigger drift, splash "Verder" jump,
      sheet close button scrolling away
- [ ] Safe-area insets in the installed app (notch, home indicator)

**Needs an account or money**
- [!] Paid API key for speech — unlocks voorlezen *and* the AI tutor
- [!] Custom domain + Play developer account for the TWA listing

**Decisions**
- [?] Fase 3 competitions: 1-versus-1 or a timed group contest?
- [?] Flatten the nested `Leeromgeving\Leeromgeving\` folder? Cosmetic.
- [?] Tidy the scans folder (`add/` staging, `(1)`/`New` suffixes, `BBl` vs `BBL`)
- [?] Delete the 13 stale intermediates in the scans folder — the `.js` ones
      call `registreerStof()`, an API that no longer exists; a trap for a future
      session

---

## Recently done

Newest first.

- [x] **2.7.0 released** *(24 Sep)*. Changelog in `src/content/changelog.js`.
- [x] **The "…" tools menu, route A: Gereedschapskist** *(24 Sep)*
  Grouped into Leren / Focus / Weergave; Pomodoro duration chosen directly
  and the running time shown on the button; dyslexia and light mode as real
  switches. Phone: trigger stays in the top bar, panel is a bottom sheet
  (the preview showed it bottom-left; kept in the bar on purpose, see
  `clay.css`). Previews: <https://claude.ai/artifact/2vgDZoumB7CqhoiqFqyCvY>
- [x] **Uitleg tour fixed** *(24 Sep)*: remembered in `uitlegGezien`, so it
  opens once per device, not every visit; the slide promising a
  non-existent "Vraag het de AI" button and the one naming four of six tabs
  are corrected.
- [x] **Change 4, per-book loading** *(23 Sep)* — see *Next up* for detail.
- [x] **Settings in Goudklei + reading-font choice** *(23 Sep)* — see change 1.

- [x] **This file** *(23 Sep)*
  `STATUS.md` and `TODO.md` merged into one checklist in the layout Reveille
  uses: done, next up in order, blocked, parked.

- [x] **Emoji replaced by icons everywhere** *(14 Sep, committed 23 Sep as `a10d622`)*
  Every symbol is a self-hosted Lucide SVG drawn as a CSS mask, sized by
  `font-size`, coloured by `color`. Most emoji were invisible to grep because
  they were `\u{...}` escapes and `&#NNNNN;` entities — grep for those forms.
  Two contrast bugs found by looking at the site, not by a test.

- [x] **Measured the content and the bundle** *(14 Sep)*
  Sectioning score for all 37 books, and the 4.42 MB bundle breakdown. Both
  feed the plan above.

- [x] **2.6.0: Wiskunde TL1, figures, the Agenda** *(3–4 Sep)*

- [x] **Book-screen chapter path — built, looked at, reverted** *(2–3 Sep)*
  See *Considered and deliberately not doing*.

---

## Ideas, parked

- [ ] **"N kaarten wachten vandaag" badge** on the book overview — the Leitner
      due count is only visible inside a chapter.
- [ ] **The bell on every top bar**, not only home — or accept release notes
      are found from home only.
- [ ] **Narrow CORS on the Edge Functions** from `*` to the Pages origin. Low
      risk: auth travels in the `Authorization` header, not cookies.
- [ ] **Redeploy `admin-acties`** — still says "Vraag je docent om hulp" where
      the repo says "Vraag Shamil". Do it the next time it changes anyway.
- [ ] **AI tutor / correction chat** — explain *why* an answer was wrong.
      Waits on the paid key.
- [ ] **Voorlezen** — a rebuild, not a restore; both the UI module and the
      Edge Function are gone. Waits on the paid key.
- [ ] **Spraakspel** exercise — waits on speech.
- [ ] **Mountain-silhouette hero** on the splash, from the Claude Design mock-up.
- [ ] **Radial menu below 360px** — untested; mostly superseded by the phone panel.

### Considered and deliberately not doing

- **A path of chapters on the book screen.** Built (`05670d4`), looked at,
  reverted (`1bbebbe`): Shamil preferred the flat card grid. Taste, not a bug —
  the winding path stays one layer down, per chapter.
- **Teamchat, or any shared live channel between students.** Removed
  (`20260831201758_remove_teamchat.sql`) as a bullying risk the school did not
  want to carry.
- **Public sign-up.** Accounts are handed out deliberately via invite codes.
- **Figures from a library.** They are inline SVG themed with `var(--txt)`,
  `var(--accent)` etc., so they follow light mode with no third-party request.
- **Leaked password protection.** Supabase Pro only; the advisor will keep
  flagging it.

---

## Known caveats

- **Nobody has seen most of the recent UI on a real phone.** The figures, the
  icons on coloured discs (`--op-kleur` in `src/styles/base.css` is the knob),
  the 2.3.1 fixes. Tests prove behaviour, not looks — two contrast bugs this
  month were only found by opening the site.
- **The success path of `registreren` v2 has never run.**
- **Guest work stays on the device.** Signing in adopts whatever the previous
  guest left in localStorage — on a shared school computer, the first student
  to sign in inherits it.
- **The class overview shows one chapter at a time on purpose** — the full
  `spelvoortgang` table would hit PostgREST's 1000-row ceiling and truncate
  silently.
- **`/mingw64/bin/pdftotext` is a broken stub** that exits with no output. Use
  the Poppler binary on PATH; all 50 scans do carry an OCR text layer.

## Where the important pieces live

| | |
|---|---|
| Entry point | `src/main.js` |
| Screens | `src/ui/` — one module per screen; `globals.js` bridges inline handlers |
| Styles | `src/styles/` — `main.css` imports them in order; tokens in `base.css`, light mode in `theme.css` |
| Icons | `public/icons/ui/*.svg` + `public/icons/icons.css`; `icon()` in `src/lib/dom.js` |
| Content registry | `src/content/structure.js`, `src/content/registry.js` |
| Chapter modules | `src/content/subjects/<subject>/<level><year>/hNN-*.js` |
| Path levels | `src/content/levels.js`, `src/state/gameLevels.js`, `src/ui/path.js`, `src/ui/game.js` |
| Login gate | `src/ui/authGate.js`, `src/lib/supabase.js`, `src/services/auth.js` |
| Changelog | `src/content/changelog.js` |
| Content pipeline | `scripts/build_content.py`, `scripts/check_content.py` |
| Backend | `supabase/` (its README covers deploying functions and migrations) |
