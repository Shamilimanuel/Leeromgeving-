# Leeromgeving — status and checklist

<!-- progress:start -->
**Progress: 59%** `████████████░░░░░░░░` 90 of 153 done · 6 in progress · 50 open · 2 blocked · 5 waiting on a decision

| Section | | Done |
|---|---|---|
| Done | `██████████` | 100% (29/29) |
| Next up | `██████░░░░` | 57% (43/76) |
| Blocked on Shamil | `░░░░░░░░░░` | 0% (0/16) |
| Recently done | `████████░░` | 80% (12/15) |
| Found 24 Sep, needs Shamil | `█████░░░░░` | 50% (1/2) |
| Found 18 Oct, from screenshots of every screen | `███░░░░░░░` | 33% (5/15) |

*Updated by `npm run tasks`. The 10 parked ideas do not count.*
<!-- progress:end -->

Working notes, kept so a new chat can pick up without re-deriving anything.
Last updated: **18 October 2026**, at **v2.7.0** (2.8.0 ready, not released).

This one file replaces the old `STATUS.md` and `TODO.md`. Both are still in
git history at `a10d622` if an old detail is ever needed.

**How we work this list:** items are worked top to bottom. Pick one, say the
name, and it gets built. When it is done it moves to *Recently done* and we go
to the next. New ideas go in *Ideas, parked* until they earn a place in *Next
up* — and anything marked **← recommended** is what I would do next if it were
my call.

### Picking this up again

**Where we stopped last (19 Oct, ~01:00, end of the night):**
- **How we work (Shamil, 19 Oct): the Waypoint way.** The makeover prototype
  <https://claude.ai/artifact/CnZZ69u1spMguT18Deo6VV> is the working app:
  every new feature goes INTO it; Shamil tries it and says what to change
  (review panel: Screens / Features). Ideas stay on the separate ideas page
  <https://claude.ai/artifact/GsdHs21hRqRRTNogLrdTxR>. No separate demo pages
  per feature, no merging pages together.
- **19 Oct, later: old-vs-new dive done** (`..\makeover-draft\_test\compare\`,
  52 side-by-side images). Shamil: fix all of it. A helper is fixing: (1) one
  "Vandaag" card on home so the subjects are back on the first screen, (2)
  "review your cards" once, (3) stars that agree with progress, (4) daily goal
  shown fully once, (5) a clear wrong-answer state, (6) compact practice cards
  (no scrolling), (7) score bar fills before "Level 8", (8) nothing cut off
  (flashcard chips, Meer sheet), plus sky stars off text, gold badge rings,
  title card on computer; (9, Shamil's own) the title picker closes after a
  choice, marks the current title and has "Geen titel tonen" to remove it.
  **DONE + PUBLISHED as version 3** (same link). Every suite green except one
  parked item (Shamil: "put that aside"): contrast check t9 flags 1 low-contrast
  text at the bottom of the terms screen on computer, in the 4 non-dyslexia
  themes. Helper stopped before writing its compare2 report.
- **19 Oct evening: Shamil's review of version 3.** 10 features Good, "Level
  omhoog" not reviewed yet. Changes being built: crescent moon at night,
  stronger living sky, agenda-test steps in the home "Vandaag" list (PUBLISHED
  v4). Then dark reading mode "Leesscherm" (Licht / Donker / Volg je apparaat
  in Meer > Weergave; default Licht; `data-paper` + `--pk-*` tokens; feature
  `donker-lezen`, test `_test\t19_dark.py`) PUBLISHED v5. Home/book cards and
  the tab bar stay light on purpose: a separate pass if Shamil wants them dark. Ideas page v2 gained "Somtoday koppelen" (research first:
  no open API, AVG; look for an iCal link) and "Echte donkere modus".
- **19 Oct afternoon: makeover + 14 features PUBLISHED** to the same link
  (version 2). All remaining suites run and green: features t10 118/118
  (phone + pc), t11 113/113 and 109/109 with reduce motion, stars t12 38/38,
  reduce motion t14 110/110, sky t17 6/6, contrast t9 0 problems in all 4
  looks + dyslexia, widths t5 14/14 OK (its "0 pass" was only its summary
  format), panel + final no errors. One fix: the test-countdown plan step
  no longer claims a fixed "ongeveer 5 min". `features/*` storage checked
  live. **Waiting on Shamil's feature-by-feature review** (read `features`
  and `screens` with ArtifactData when he says "done").
- (Older note) **Makeover + 14 picked features:** built and rebuilt with the last fixes
  (`makeover.html` 01:03, 19 Oct); a second helper's final run got this far
  before Shamil stopped it for the night (`_test\out_final_summary.txt`):
  walk in 5 setups 92/92 each, storage t4 75/75, new `features/*` storage
  t13 77/77, misc t6 40/40, all 0 fail; t5_widths printed "0 pass, 0 fail"
  (suspicious: check it really ran). **Not yet run:** the feature suites
  t8-t12 and t14 (stars, reduce motion ...), t2/t3/t7. Next session: run
  those, fix, look at `_test\shots\s_pc_*`, then publish to the same link
  and send it. Not published yet (the live link shows the older version).
- **Contents check of every book: done**, see change 8 and
  `..\book-redo\_audit\SUMMARY.md`. Shamil sends the English deel-B
  screenshots (BBL4, TL1-4) and the two Mens & Maatschappij books, and
  answers the Wiskunde BBL deel 2 question.
- **Biologie BBL1 redo:** paused (deel B page map done; deel A next).
- **Waiting on Shamil:** the 2.8.0 check page (no answers yet), the makeover
  review, then shipping 2.8.0 (app only, books later).
- **Ask Shamil:** may the temporary page images a helper left in
  `C:\Users\shami\AppData\Local\Temp\audit_ec` be deleted?

**Before that (18 Oct, ~16:40; Shamil had to go, "we'll continue another time"):**
- **Waiting on Shamil:** the 2.8.0 check page
  (<https://claude.ai/artifact/7KU5NnFNj9QntP5pCDqNzC>): 60 chapters +
  the phone test. When he says "done", read it back (item 2 below), fix,
  then ship 2.8.0 (his OK to commit + push first).
- **Makeover page: done 18 Oct evening, waiting on Shamil's review** (link under change 7). Was paused mid-build: (change 7,
  his pick "A's cards with B's sky"). A helper agent was stopped halfway; its
  **untested draft** is saved outside the repo in
  `Visual Studio Code\Leeromgeving\makeover-draft\makeover.html` (with the
  Economie TL4 data, the extract scripts and a copy of the check page).
  Next: finish or rebuild it from the brief in change 7, test headless,
  publish as an interactive artifact (NOT a Design canvas: he dislikes
  those), check its `db`, send him the link.
- **Done today, all uncommitted:** `.gitignore` (`Reference/`), ESLint
  ignore, DB restored + Teamchat removed (safe route), `matchspel` deleted,
  5 bugs fixed (see *Found 18 Oct*), migration files renamed to their live
  versions, `TASK.md` brought up to date. `npm run check` was green before
  the bug fixes; after them only the 6 affected test files ran (124 tests
  green) -- run the full `npm run check` once before shipping (ask Shamil
  first, it is heavy on his RAM).
- **Not started on purpose:** the remaining content rebuilds, until 2.8.0
  is committed (they would ship unchecked).

**Earlier the same day (18 Oct).** Shamil's order for this stretch:
(1) .gitignore + DB cleanup, (2) ship 2.8.0, (3) delete `matchspel`,
(4) real-world test, (5) the remaining content rebuilds and the visual pass.
Where each one stands:

1. **.gitignore: done.** `Reference/` (63 scans and working copies, 1.27 GB,
   copyrighted) is ignored and was never committed; also in the ESLint
   ignores (lint had been failing on its stale scripts). **DB: done.**
   The Supabase project was *paused* (free plan pauses after ~7 days without
   traffic), so the live login was down; restored 18 Oct, `ACTIVE_HEALTHY`.
   **Teamchat cleanup applied 18 Oct** (Shamil's OK, "chat now, gemute
   later"): chat table (2 messages), `chat_namen` view and `mag_chatten()`
   gone; `profiles.gemute` kept because the deployed Edge Functions use it
   (see *Found 24 Sep*). Advisor ERROR on `chat_namen` is gone. Repo files
   renamed to the versions the database recorded:
   `20261018134436_remove_teamchat.sql`, and `leerstatus` from `…120000` to
   `20260924192242_leerstatus.sql` (it had been applied under that version).
2. **2.8.0 check page (18 Oct):** <https://claude.ai/artifact/7KU5NnFNj9QntP5pCDqNzC>
   **19 Oct: now 94 chapters** (added Biologie BBL1-2, Economie TL3-4,
   Wiskunde BBL1, also heavily changed in 2.8.0). Version bumped to 2.8.0 +
   changelog written, full check green (418 tests), phone test OK; Shamil
   wants to check the books before the push. Builder now in this session's
   scratchpad `checkpage\` (extract.mjs + books.json).
   Originally 60 rebuilt chapters (Wiskunde TL2-4, Engels TL1-3, Nederlands TL1-2)
   with their real summary, flashcards and quiz; Good / Change / Skip + a
   note per chapter; plus the phone-test checklist (dev server on the LAN:
   `npm run dev -- --host`). **When Shamil says "done":** read `verdicts`
   (doc id = chapter key with `|` → `~`; body `{key, book, chapter,
   verdict, note, updatedAt}`) and `phone/checklist` (`{items: {id: {done,
   result, note}}, general}`) with ArtifactData, turn every Change /
   Problem into a fix, then ship. Data was extracted from the working tree
   on 18 Oct; if a book changes, re-extract (script lived in that
   session's scratchpad: it imports `src/content/registry.js` and the
   chapter modules in Node and dumps `CONTENT`).
   **Do not start other content work before 2.8.0 is committed**: it would
   land in the same uncommitted pile and ship unchecked.
3. **2.8.0: ready, waiting on Shamil.** 204 files uncommitted (192 changed,
   12 new). `npm run check` green on 18 Oct: 23 test files, **414 tests**,
   build OK. No secrets in the diff. He ships after he has checked the
   rebuilt books (change 6) and tried it on his phone. **Do not commit until
   he asks.** Release steps: *Releasing* below. Note: commits here use his
   real email and pushes to this repo have worked; no noreply change needed.
4. **`matchspel`: done** (deleted local + remote, was `cc17b3e`).
5. **Real-world test: not started.** The list is under *Blocked on Shamil →
   On a phone or in a browser*. The DB must be awake first (see 1).
6. **Content rebuilds + visual pass: not started this session**, but the
   visual pass grew into a full UI makeover, see **7. UI makeover** under
   *Next up*. A prototype with three directions is waiting on his pick.

Also 18 Oct, by mistake: the makeover was first started for Waypoint and
Leyline instead of Leeromgeving (Shamil meant "use them as the style"). Only
reading and headless screenshots happened there; nothing in those folders was
changed (checked by file times: their last edits, 13:26-14:45, came from
another chat working on Disk map).

**Earlier (24 Sep, end of day):** changes 1, 3, 4 and 5 of the plan are
built. 2.7.0 is live; everything after it is **uncommitted and unreleased**
(the phone fixes, the chapter route, "Hoofdstuk" instead of "Missie", badges,
Tijdrace, change 6 so far) -- see *Recently done*. The `leerstatus` table is
already live in the database. Change 6: the weakest books (Wiskunde TL2-4, Engels TL1-3,
Nederlands TL1-2) are rebuilt and wait for Shamil's check; the rest follow.
Release as 2.8.0 when Shamil says so.

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
| Checks | `npm run check` green on 18 Oct (lint + 414 tests in 23 files + build) · `content:check` no errors (24 Sep) |
| Bundle | main JS 376 kB (105 kB gzip); chapters load per book (was 4.42 MB, all books) |
| Branches | `main` only. `matchspel` deleted 18 Oct (local + remote); its one commit was `cc17b3e`, old pre-Vite code |
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

- [x] **3. The chapter screen: six tabs, one route** *(24 Sep, route A, uncommitted)*
  Six equal choices at the moment a student should be reading.
  - [x] Previews (A Route, B Lezen eerst, C Overzicht), waiting on Shamil's
        pick: <https://claude.ai/artifact/33ZbXiTWNnUzMT3W6UukJA>
  - [x] Shamil picked **A, Route**. Lezen → Oefenen → Toetsen with a status
        each; Oefenen holds Oefenspel + Flashcards behind a small switch;
        Begrippen and Notities are quiet links beside the steps. Fits 390px.
  - [x] Step 1 turns green on **"Klaar met lezen"** at the end of the summary
        (new `gelezen` field in `voortgang`), not on opening: opening sets
        `bekeken`, which happens on every chapter open. The preview had this
        wrong.
  - [x] The route is not sticky (the old tab row was): reading keeps the
        screen, and the quiz score bar now sticks under the top bar.
  - [x] Fixed "Missie 1 · deel" with nothing after it -- on every chapter of
        the **24 books** with an unnamed part -- and removed the dead
        "Hoofdstuk 2 (Bewegen)" message.
  - [x] Tests: route, "Klaar met lezen", both part cases; the "deel" test
        proven by breaking the fix. 204 tests.
  - [ ] See it on a real phone

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

- [x] **5. Make XP and the streak pay off** *(24 Sep, uncommitted; DB part live)*
  - [x] **Decided (Shamil): badges, visible to the student and the teacher.**
  - [x] 8 Oefenspel badges (first level, Foutloos, chapter complete, 10
        levels, 3 chapters, whole book, 500 and 2000 XP). Same pure rules in
        `src/state/badges.js` for the student's page and the admin panel.
  - [x] 4 badges for streak, quiz and reading (3 and 7 days in a row, a
        perfect quiz, 5 chapters read). **The teacher sees these too since
        24 Sep** (Shamil's OK): table `leerstatus`, three numbers per
        student, migration `20260924192242_leerstatus.sql`, **applied to the
        live database** and verified: grants only SELECT/INSERT/UPDATE (no
        TRUNCATE), writing another student's row refused by RLS, a second
        device cannot lower a record (trigger keeps the highest). Tests ran
        in a rolled-back transaction; the table was left empty.
  - [x] Streak now keeps its best run (`beste` in `streak`); "hoofdstukken
        gelezen" on the progress cards counts "Klaar met lezen", not opening
        (XP still follows opening, so no student's level drops).
  - [x] Honest limit, written into `badges.js`: students write their own
        `spelvoortgang` rows, so a badge is exactly as trustworthy as the XP
        the admin panel already shows. Fake-proof would need server grading.
  - [x] The path shows the daily goal and the streak. Playing a level now
        counts for the streak (it did not; opening a summary did, and still
        does, so no existing streak breaks).
  - [x] "Hoofdstuk af!" on the score screen the first time a chapter's
        last level clears. **Not seen in a browser**: reaching it means
        playing every level; the logic is small but untested end to end.
  - [x] **Tijdrace** (`src/ui/timeRace.js`): 45 s of quick questions from
        every term in the chapter, a record per chapter (`tijdrace`), **no
        XP** on purpose (speed and guessing would inflate the XP a teacher
        sees). Played with real clicks in Chrome.

- [ ] **6. The Economie TL4 treatment, everywhere** *(runs alongside the rest)*
  Model: `economie|tl|4|1` scores 4.81 sectioning markers per paragraph
  (`h5.sub + g2/g3 + call.sum + check`). Worst first:
  Recipe (Shamil, 24 Sep): Dit leer je, Stappenplan, Voorbeeld met uitwerking,
  Vergelijk, Waarom?, Check jezelf, Om te onthouden; more bold. No new
  ezelsbruggetjes. Book by book: Shamil checks each one before the next.
  `tests/recipe.test.js` enforces it for every book in
  `tests/fixtures/recipe-headings.json` (headings frozen, since practice
  levels hang on them).
  - [x] Wiskunde TL4 built, all eight chapters *(24 Sep)*. Fixed on the way:
        wegendiagram vs graaf (1.5), 2.5 was about the wrong verband, 74 inline
        term spans, the 3D-coordinate drawing (P sat on the x-axis) in H3 and H8
  - [ ] Wiskunde TL4 **checked by Shamil**
  - [x] Wiskunde TL2 built, all eight chapters *(25 Sep)*. Fixed on the way:
        7.1 said 347 : 2 = 171,5; 2.1 had a tip that made no sense. Added what
        the book has and the summary missed: rechthoekszijde berekenen and
        "is de driehoek rechthoekig?" (H5), the stomphoekige driehoek (H3),
        the trapezium kinds (H1), gewogen gemiddelde with the book's example (H4)
  - [ ] Wiskunde TL2 **checked by Shamil**
  - [x] Wiskunde TL3 built, all ten chapters *(25 Sep)*. Fixed on the way:
        1.2 said 5 : 425 = 1,8% (1,2%); 1.6 announced a formula it never gave;
        2.1 "divide by 10 six times" (five); 3.2 misread the rc sentence; 3.4
        had the table formula backwards; 4.2 broke off mid-sentence; 5.6 had
        no answer; 7.2 and a quiz question called KM aanliggend at angle L
        (it is opposite; now about angle K); 7.5 rounded to 50,2 degrees;
        8.2 said the zero before the comma doesn't count (it does)
  - [ ] Wiskunde TL3 **checked by Shamil**
  - [ ] Check the quiz and flashcards of the rebuilt books the way the
        summaries were checked: only the summaries were compared with the
        book, and TL3 H7 showed a quiz can repeat a summary's mistake
  - [x] Engels TL1, TL2, TL3 built, ten chapters *(25 Sep)*. The book's pages
        here are mostly exercises, so these are restructured rather than
        extended. Fixed: the ordinals note implied "11st" (TL1 H3); TL3 H1
        sorted hostile and stubborn as "neutral" (the book has no such split)
  - [ ] Engels TL1-3 **checked by Shamil**
  - [x] Nederlands TL2 and TL1 built, 24 chapters *(25 Sep)*. Fixed on the way:
        capitals for days/months (TL2 H7, also a card); a vergelijking called
        personificatie (TL2 H3, also a quiz question); TL1's word strategies
        were not the book's (synoniem, omschrijving, voorbeeld; two cards
        fixed); the spelling schema's "sterk werkwoord" (TL1 H8); "nederlands"
        without capital (TL1 H7); a made-up idiom (TL1 H4)
  - [ ] Nederlands TL1-2 **checked by Shamil**
  - [x] Books that were already close (Economie TL3-4, Biologie BBL1-2 and
        TL1-4, M&M BBL1-2) *(25 Sep)*: a script added "Dit leer je", a
        "Check jezelf" (from that paragraph's own flashcard) and bold on its
        glossary terms; a verifier proved the text, headings, terms, cards
        and quiz unchanged in all 358 paragraphs
  - [x] Wiskunde TL1 and Maatschappijleer TL3 *(25 Sep)*: same script and
        verifier (52 + 44 paragraphs unchanged); TL1 H9 got one correction
        (the symmetry axis lies parallel to the lines, in the middle).
        Maatschappijleer TL3 H6-H9 checked against the scan: no errors found
  - [ ] The rest, full rebuild like the weakest books: Engels BBL1-4 and TL4,
        Nederlands BBL1-4 and TL3-4, Rekenen BBL1-4, Wiskunde BBL1-2
  - [ ] Self-check blocks: 25 of 37 books have none
  - [ ] Loose text outside containers: Maatschappijleer TL3 17%, Nederlands TL1 9%
  - [ ] Under the 10-item minimum: Nederlands BBL1 H9/H10/H11, BBL2 H10/H11
  - [ ] Paragraph numbering: Rekenen BBL1 (63 `N.N` in the book), Nederlands
        BBL3/BBL4 and TL1–TL4 (numbered `1..N` per cursus). Engels probably
        not numbered at all — one check. Wiskunde TL4 deel B correctly left alone.

- [~] **7. UI makeover: Genshin style, like Waypoint and Leyline** *(18 Oct, prototype)*
  Shamil asked for a makeover of Leeromgeving's UI in the style of his two
  Genshin-themed apps (Waypoint, a file manager; Leyline, a Task Manager;
  both in `Visual Studio Code\Widgets\`). **This may replace or reshape the
  Goudklei decision of 23 Sep** (change 1); only Settings is built in
  Goudklei so far (`src/styles/clay.css`, uncommitted, part of 2.8.0).
  - [x] Prototype canvas, three directions on the same four screens:
        <https://claude.ai/artifact/6Rqve7SNBS3YNzrpceTsDe>
        Rows: **A Perkament** (the real game's menus: cream paper to read on,
        dark ink, Genshin item cards; doubles as light mode),
        **B Nacht & Goud** (Goudklei grown up: night sky, clay surfaces with a
        gold rim, Cinzel + DM Sans, Oefenspel as a constellation),
        **C Hemelglas** (frosted glass over a bright sky, Marcellus + Nunito,
        Oefenspel as floating islands; long text on a solid light sheet
        because glass is tiring to read on).
        Columns: Thuis (phone 390x844), Hoofdstuk with the Lezen → Oefenen →
        Toetsen route (phone), Oefenspel path (phone), Thuis (computer
        1280x800). Real data: Economie TL4 H3 "Ben jij ondernemend?" (4
        paragraphs) and the real book/chapter counts (37 / 267). Taps work:
        subject cards, route steps, "Klaar".
        The source lives only in the artifact (Artifact `read`), not in git.
  - [x] **Shamil picks a direction, or a mix** *(18 Oct: leaning to "A's
        cards with B's sky")*. Also 18 Oct: he does **not** like static
        design canvases; prototypes must be a real clickable page.
  - [x] **The mix as a clickable prototype page** *(18 Oct evening)*:
        <https://claude.ai/artifact/CnZZ69u1spMguT18Deo6VV>
        Source `..\makeover-draft\src\` + `build.py` -> `makeover.html` (outside
        the repo); tests and screenshots in `..\makeover-draft\_test\`.
        Walked in 5 setups (phone, computer, Day, Dyslexia, both), storage
        contract checked, contrast audited in Night/Day/Dyslexia.
  - [x] **Playground & Ideas page published** *(18 Oct evening)*:
        <https://claude.ai/artifact/GsdHs21hRqRRTNogLrdTxR>
        Source parts in `..\makeover-draft\_test\ideas\src\` + `build.py`
        -> `..\makeover-draft\ideas\ideas.html`; 5 headless suites green
        (behaviour, contrast in every look, storage, a11y, smoke). The
        Hemelglas panels went from .38 to .68 opacity to pass contrast.
  - [x] **Shamil picked 14 ideas** *(18 Oct, doc `ideas/picks` v14)*, in
        order: tijd-thema, thema-kiezer, levende-lucht, ster-licht-op,
        badge-wish, level-up, goed-fout, pagina-open, herhaal-vandaag,
        toetsweek, weekoverzicht, markeren, titels, opdrachten. Not picked:
        seizoenen, eindbaas, focus-modus, voorlezen, gids.
  - [~] **Building the 14 into the makeover prototype**, **stopped by
        Shamil at ~00:55 on 19 Oct in its last step.** All 14 + the 4 design
        rules are built (src last changed 00:43; new parts `a-head-2.css`,
        `a-end.html`, `c-js6.js`..`c-js8.js`); its last round was "rebuild
        with pending fixes and run part 2 of the feature walk on the phone".
        **Next session:** `python -I build.py` in `..\makeover-draft\`, run
        the tests in `_test\` (t8..t14, `run_batch2.sh`; t1..t7 are the
        older walk/contrast/storage suites), fix what fails, look at the
        `_test\shots\s_pc_*` screenshots, then publish `makeover.html` to the
        SAME link (<https://claude.ai/artifact/CnZZ69u1spMguT18Deo6VV>,
        keep `capabilities {db: {}}`), probe `features/*`, send Shamil the
        link for his feature-by-feature review. Not yet published: the live
        link still shows the version without the 14.
        What was asked of it *(18 Oct night, a helper agent)*: wired into the real flow; theme choice and other UI
        prefs in localStorage `lomakeover-ui`; new review tab "Features":
        db `features/<idea id>` = `{feature, verdict: good|change, note,
        updatedAt}`; new screen id `notities`. Then publish to the same
        link and Shamil reviews feature by feature.
        Four design rules added the same night (Shamil's pick):
        (1) the 3 daily tasks ARE the daily goal, one task a day keeps the
        streak; (2) stars per chapter: 1 read all, 2 practice levels done, 3
        quiz >=70%, 4 flashcards >=80% known, 5 final test passed; book =
        lowest chapter, subject = lowest book; a title = a whole book at 5
        stars; (3) "Review today" shows minutes (~15 s per card) and finishing
        it ticks a daily task; (4) a highlight can become a cloze flashcard
        ("Mijn kaarten"). Discussed, not picked yet: a wrong quiz answer links
        to its paragraph; a reading ruler for dyslexic students; the teacher
        sets class test dates; the teacher sees who is stuck; and the open
        decision on a minimum score to clear a level.
  - Background of the ideas page *(18 Oct evening)*: Shamil
        loves all three looks (A/B/C) and suggested the theme follow the real
        time of day (dawn Hemelglas, day Perkament, dusk mix, night Nacht &
        Goud; reading stays cream; a manual choice in Weergave), plus live
        effects, animations and more features. 19 ideas with live previews
        (themes by time, seasons, living sky, star lights up, badge as Wish,
        level up, right/wrong feel, daily commissions, "Herhaal vandaag",
        test-week countdown, Eindbaas, weekly recap, titles, highlighting,
        focus mode, voorlezen (blocked: paid key), a guide character). Source
        `..\makeover-draft\ideas\ideas.html`; picks in db doc `ideas/picks` =
        `{picks:[ids in order], notes:{id:text}, custom:[{id,title,text}],
        general, updatedAt}`, local fallback key `loideas`. Motion rule from
        change 1 still applies: every effect purposeful, short, and off with
        reduce motion / a setting.
  - [ ] **Shamil's review of it.** When he says "done": read `screens`
        (doc id = screen id) and `general/notes` with ArtifactData; every
        "change" becomes a fix, then build it into `src/styles/`.
        The brief it was built from:
        - B night & gold (night sky, clay surfaces with a gold rim, gold
          glaze buttons) for home, level/year pick, book, Oefenspel path,
          game session, Voortgang, Agenda, menus, tab bar.
        - A's item cards (subject-colour art with the big bottom-right
          corner, gold mastery stars, cream name strip) for subject and
          chapter tiles, on the night sky like the game's inventory.
        - A's cream paper for everything read: summary, flashcards, quiz,
          Begrippen.
        - DM Sans for reading; Cinzel only for 1-3 word titles.
        - Real content: Economie TL4 (8 titles) and H3 in full.
        - Screens (ids): thuis, niveau, boek, hoofdstuk, flashcards, quiz,
          begrippen, oefenspel, sessie (4 playable exercises), score
          (`scoreVerdict` wording), voortgang (earned / "Bijna" / rest
          collapsed), agenda (from this month), meer (Gereedschapskist).
        - Global switches: Night/Day (Day = light mode, A's day sky + cream
          surfaces), Dyslexia (Lexend), Phone/Computer (container queries).
        - Review per screen into `db`: `screens/<id>` = `{screen, verdict:
          good|change, note, updatedAt}` and `general/notes` = `{text,
          updatedAt}`; local-only fallback key `lomakeover`.
        - It also fixes today's measured problems on purpose: compact
          chapter header (first paragraph in the first phone view),
          flashcard visible without scrolling, a session that feels like a
          game, disabled levels that look disabled and come last, a short
          badges page.
  - [ ] Then: the other screens in the chosen look (book screen, level/year
        pick, flashcards, quiz, Begrippen, Voortgang/badges, Agenda, the "…"
        menu, Settings, login) and its light-mode or dark-mode partner.
  - [ ] Then build it in `src/styles/`, screen by screen like the Goudklei
        pilot; restyle, keep ids/classes (tests use them).
  - Same in all three directions (proposals, his call): a **bottom tab bar
    on phones** (Vakken, Voortgang, Agenda, Meer: replaces the snelbalk and
    the "…" button), a **"Verder waar je was"** card on Thuis, **Dagdoel and
    reeks** cards like the game's daily commissions, subjects as Genshin
    item cards with **mastery stars**, and a greeting with Level + XP bar.
  - Rules kept: **subject colours stay** (the home page says the teachers
    chose them); plain school words ("Hoofdstuk", not "Missie"); no long
    all-caps labels (dyslexia); no emoji; fonts must be self-hosted; ≤560px
    phone layout first.
  - Lessons from Waypoint/Leyline's own screenshots (18 Oct, headless):
    cream panels next to dark glass clash; 8-12 different button styles;
    up to 250 px of bars before the content; light text over bright
    scenery fails contrast; a fixed companion sprite covers content. Each
    direction avoids these on purpose.
  - [ ] **Decision for Shamil:** the home brand line shows his full name
        ("Samenvattingen / [his name]"); keep it on the live site or not.
        Left out of the prototype.

- [~] **8. Every book again, from the scan, with an independent check** *(started 18 Oct)*
  Shamil, 18 Oct: "do it over again, start at the very beginning with the
  books so there are no mistakes". Decided: all 37 books, one by one; per
  chapter a writer reads the scan pages as images and writes, a separate
  checker verifies every fact, number, card and quiz answer against the scan,
  then Shamil spot-checks. 2.8.0 ships with the app changes only; the redone
  books come in later releases. This replaces change 6 and the 2.8.0 check
  page's book part.
  - Work happens OUTSIDE the repo in `Visual Studio Code\Leeromgeving\book-redo\`
    until a book is reviewed and 2.8.0 is committed: `_spec\WRITER.md` and
    `_spec\CHECKER.md` (the rules every helper follows), `_spec\validate.mjs`
    (the site's own test rules plus extra guards: paragraph index on every
    term/card, quiz answer position spread, sentence length, italics, tag
    balance), `_spec\format-example.js`; per book `scan\pages-*\` (per-PDF-page
    text, a search aid only) and `out\` (modules + `.sources.md` + `.check.json`).
  - Scans: Poppler `pdftotext` (WinGet path, not `/mingw64`); the PDFs are
    teacher editions, two book pages per PDF page; some are out of order
    (Biologie BBL1 deel B: contents on PDF p.41) and need a page map first.
  - Frozen paragraph headings (`tests/fixtures/recipe-headings.json`) are kept
    even where the book spells them slightly differently ("4.4 Samen leven",
    "6.3 ...?"), so Oefenspel progress does not move.
  - [x] **Contents check done (18-19 Oct night)**, six helpers in parallel:
        `book-redo\_audit\SUMMARY.md` (+ one file per subject). Every
        existing scan is complete but shuffled. **Shamil to send:** Engels
        deel B of BBL4, TL1, TL2, TL3, TL4; Mens & Maatschappij BBL1 + BBL2
        (whole books); and answer whether Wiskunde BBL deel 2 is used. Big
        site gaps found: Nederlands (TL4 about a third of the book), Biologie
        BBL2 ch.11-12, wrong method names (Economie = Pincode 7.1, Rekenen
        BBL1 = Getal & Ruimte). Keep the 3 real deel-B PDFs in
        `Reference\add\` (Engels BBL1-3); the other 2 there are repeats.
  - [x] **First: check every book's contents page ("inhoudsopgave")** against
        the site and the scans: which chapters/paragraphs the site lacks,
        which scans are missing or incomplete. Shamil sends a screenshot for
        anything missing. (Shamil's ask, 18 Oct: to do as part of this plan.)
        Known already: **Mens & Maatschappij BBL1 and BBL2 have no scan** (22
        chapters on the site); Engels TL Deel B missing (see *Blocked*); 5 PDFs
        sit in `Reference\add\`.
  - [ ] **Biologie BBL1** (the first book, Shamil's pick). **Paused 18 Oct
        by Shamil ("we'll do that another time")**; the H1-H3 writers were
        stopped before writing anything. Ready for the restart:
        - Deel B page map done: `book-redo\biologie-bbl1\scan\pagemap-B.json`
          (every book page 6-163 present, no duplicates; H4 = PDF 21, 38, 61,
          4, ...; contents on PDF p.41; begrippenlijst PDF 75, 89, 14).
        - **Deel A is shuffled too** (the writers found the "PDF n = book
          2n-16" formula wrong): make `pagemap-A.json` the same way first
          (one helper, all 78 pages as images).
        - Then per chapter: writer (WRITER.md) -> checker (CHECKER.md) ->
          fixes -> `validate.mjs` OK -> a review page for Shamil -> into the
          repo after 2.8.0 is committed.
  - [ ] The other 36 books, in order.

## Blocked on Shamil

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
- [ ] Play one verbind-oefening (the `matchspel` branch it was gating is
      already deleted, 18 Oct: it was pre-Vite code that could not be merged)
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

- [x] **Housekeeping before 2.8.0** *(18 Oct)*
  - `Reference/` (63 scans and working copies, 1.27 GB, copyrighted) added to
    `.gitignore` and to the ESLint ignores. It was never committed; `npm run
    lint` had been failing on its stale `registreerStof()` scripts.
  - The Supabase project was **paused** (free plan: ~7 days without traffic),
    so the live login was down. Restored. It will pause again whenever the
    site goes a week unused -- check this before any school test.
  - `matchspel` branch deleted, local and remote (was `cc17b3e`).
  - `npm run check` green: 23 files, 414 tests, build.

- [~] **Unreleased, for the next version** *(24 Sep, uncommitted)*: the two
  phone fixes below, the chapter route (change 3), "Hoofdstuk" instead of
  "Missie"/"Questreeks" everywhere, and the badges (change 5).
- [~] **Two phone fixes, ready but not released** *(24 Sep, uncommitted)*.
  Found by Shamil on his phone the morning after 2.7.0. Ship with the next
  change, not as their own version (decided 24 Sep).
  - Tekstgrootte at A++: the single word ran under the A/A+/A++ buttons.
    The buttons now always get their own line on phones (`.set-row-stack`).
  - The "…" button on home sat on top of "Samenvattingen": home pushed it
    three slots left (old `.op-home` code, removed). It now always sits in
    the far-right slot, drawn as a thin ring like the bell and avatar.
- [x] **Uitleg once per account** *(24 Sep, asked by Shamil)*: the "seen" flag
  now also lives in the Supabase Auth user metadata (`uitleg_gezien`), so a
  signed-in student doesn't get the tour again on a new phone or after
  clearing the browser. Tested with a stubbed account
  (`tests/whatsNew.test.js`).
  - [ ] Check with a real login: tour once, then log in on a second browser, no tour
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

## Found 24 Sep, needs Shamil

- [x] **The Teamchat removal was never applied to the live database.**
      *Applied 18 Oct without the `gemute` drop, see below; file now
      `20261018134436_remove_teamchat.sql`.* Was: the file was in the repo, but `chatberichten`
      (2 messages, 30-31 Aug), the `chat_namen` view and `mag_chatten()` are
      still live. The advisor flags `chat_namen` as an ERROR (security
      definer view). Applying it deletes those 2 messages for good -- ask
      first. **18 Oct: Shamil said "apply it"; not run yet, he will say
      when.** Check dependencies first (see *Picking this up again*, 1).
      **Dependency check done 18 Oct: DO NOT apply the migration as written.**
      Its last line drops `profiles.gemute`, but the *deployed* Edge
      Functions still use it: `registreren` writes `gemute: false` for every
      new student, and `_shared/helpers.ts` `requireCaller()` selects it, which
      every `admin-acties` call goes through. Dropping it breaks registration
      and the whole admin panel. Everything else is safe (no view, function or
      policy depends on `chatberichten`, `chat_namen` or `mag_chatten()`; the
      table is still in the realtime publication, which the migration
      handles). Safe route: remove the chat objects now and keep `gemute`;
      drop it only after both functions are redeployed without it.
- [ ] **Only one account exists: the admin.** No student has registered
      yet, so badges, the class overview and `leerstatus` have only ever been
      tested with test data.

## Found 18 Oct, from screenshots of every screen

A headless walk of 2.8.0 as it is today (dev server with
`VITE_REQUIRE_LOGIN=0`, all non-localhost requests blocked, so no login and
no database): 56 phone + 54 desktop screenshots. Those files were in that
session's scratchpad and are not kept; the findings are here.

**Bugs: all five fixed 18 Oct, uncommitted, part of 2.8.0** (mention them in
the 2.8.0 changelog). Tests: agenda, levels, app, loginScreen, badges,
inline-handlers (6 files, 124 tests) green, lint clean; looked at on a phone
(headless, 390 px).
- [x] **Agenda opens on January in October.** New pure `calendarMonths()` in
      `src/state/agenda.js` (tested): starts at the current month and rolls
      into next year; months in the next year show it ("jan 2027"), the
      header reads "2026–2027".
- [x] **Agenda day dialog broken on phones:** `.agendawrap` / `.agendacard`
      added to the bottom-sheet rules in `mobile.css`; the list + form are
      wrapped in a new `.agenda-body` (ids unchanged) that scrolls, so the
      close button stays put like the other sheets.
- [x] **"Level gehaald!" at 3/8.** New pure `scoreVerdict()` in
      `src/state/gameLevels.js` (tested): Perfect! (all) · Goed gedaan!
      (≥75%) · Level gehaald! (≥50%) · under half "Level klaar" with a gold
      replay arrow (`.spel-vinkje.opnieuw`) and a nudge to replay. Only the
      wording changed: any finished level still counts as done and unlocks
      the next one.
  - [?] **Decision for Shamil:** should a level need a minimum score (say
        half) before the next one unlocks? A game change: touches unlocks,
        badges and what the teacher sees.
- [x] **"Een account is optioneel" (mostly a false alarm).** `renderAccount()`
      already showed the mandatory text when login is on; the screenshots ran
      with `VITE_REQUIRE_LOGIN=0`, where "optioneel" is right. Real leftover:
      the old text sat in `index.html` and could flash while `loadProfile()`
      was waiting. Now `index.html` carries the mandatory text and only a
      build with login off swaps in the optional one.
- [x] **"Maatschappijkund-e" broke mid-word** on the phone home card: a soft
      hyphen in `home.js` `cardName()` now breaks it as "Maatschappij- / kunde".

**Look (input for change 7, the makeover)**
- [ ] **Cinzel is used for text students must read** (quiz questions, term
      names, flashcard fronts, summary sub-headings): a capitals-only display
      font, so it all becomes small caps. Keep it for short titles at most.
      (Direction B of the prototype uses Cinzel for headings; if B is picked,
      only for short titles.) Fraunces is self-hosted but never used.
- [ ] On the phone the chapter header + route take ~55% of the first view; on
      Flashcards the first card starts at the bottom edge.
- [ ] Light mode broken in spots: home shortcut tiles stay dark, "Bekijk de
      samenvattingen" stays gold and unreadable, the chapter tagline is nearly
      invisible, "Level 2" and its START chip are washed out and the chip
      sticks out past the right edge.
- [ ] Goudklei and the old glass look sit side by side on the chapter, path and
      badges screens: reads as half-finished.
- [ ] The exercise session and Tijdrace are a flat black page of plain boxes,
      bottom half empty: no game feel.
- [ ] The "winding" path is basically a list; on desktop a narrow column with
      the START chip far from its level.
- [ ] Home: 10 equally loud animated cards, no "Verder waar je was"; the colour
      labels are noise (three say LILA).
- [ ] Economie's level picker shows 3 big disabled cards before the usable one;
      disabled looks almost as strong as enabled.
- [ ] The badges page is ~3,400 px of scrolling: mostly locked tiles, then 8
      identical "Lv. 1, 0/400" subject cards.
- Not reached (need a login): Settings' Account / Mijn gegevens / Gevaarlijk,
  the signed-in profile menu, admin; also "Hoofdstuk af!" and saving Notities.
- Tokens worth knowing: `--accent` is repainted per subject, which puts a
  second highlight colour next to the gold; ~20 different corner radii.
- Must survive a restyle (tests and content modules use them):
  `.route-step[aria-current]`, `.pad-knop`, `.pad-stap`, `.spel-*`,
  `#radialmenu`, `.set-tab` / `.set-panel`, the summary block classes
  (`.call.*`, `.box`, `.sect`, `.check`, `.vergelijk`, `.tijdlijn`, …) and
  every `onclick` handler in `globals.js`. Keep `--top-h 52px`, `--gut 1rem`,
  safe-area insets, 38–44 px touch targets, 16 px inputs, `(hover:none)` and
  reduced-motion handling.

## Ideas, parked

- [ ] **"N kaarten wachten vandaag" badge** on the book overview — the Leitner
      due count is only visible inside a chapter.
- [ ] **The bell on every top bar**, not only home — or accept release notes
      are found from home only.
- [ ] **Narrow CORS on the Edge Functions** from `*` to the Pages origin. Low
      risk: auth travels in the `Authorization` header, not cookies.
- [ ] **Retire `profiles.gemute`**: remove it from `registreren`,
      `_shared/helpers.ts` (`Profile`, `requireCaller`) and `admin-acties`,
      redeploy both functions, then a migration drops the column. Do it
      together with the redeploy below.
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
  (`20261018134436_remove_teamchat.sql`) as a bullying risk the school did not
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
