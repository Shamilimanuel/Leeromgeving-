# TODO — Leeromgeving

Working backlog for this repository. Feature names stay Dutch where they are the
app's own terms (Agenda, Oefenspel, Instellingen); everything else is English,
per the language rule in `CLAUDE.md`.

Last reviewed: 2026-09-14. Reordered on 2026-09-07: what is open comes first,
what is settled sits at the back in section 8 and is kept only where it stops a
mistake being made twice. Section 9 was added on 2026-09-14.

Legend: `[ ]` open · `[~]` in progress · `[!]` blocked on someone or something
else · `[?]` needs a decision before it can be built.

For the snapshot -- what state the tree is in, what is uncommitted, what to do
next -- see `STATUS.md`. This file is the backlog behind it.

**The plan of record for the next six changes** (Settings, a style of its own,
the chapter screen, XP and the streak, first-load weight, and the Economie TL4
treatment across all summaries) is a tickable page:
<https://claude.ai/code/artifact/be17f155-e9d6-4c46-8d96-a1b61f22f819>. It
carries the measurement behind each one. The items here are the backlog it was
drawn from, not a second copy of it.

> **2.6.0 is live.** Everything was pushed to `origin/main` on 2026-09-04
> (`cd86b3a`), which fires `.github/workflows/deploy.yml`. No work is stranded
> on one disk any more, and Teamchat is gone for everyone who used it. The old
> warning in this file about 28 unpushed commits no longer applies.

---

## 1. Blocked on Shamil — nobody else can do these

Grouped by where you have to be, because that is what decides when it can
happen. The detail for each lives in the section named after it. A tickable
version of the 2026-09-03 list was published at
<https://claude.ai/code/artijusfact/6fdef97f-ce30-4d33-918c-b94024187d59> — it
predates this reordering and still carries the 2.6.0 question, which is now
answered.

**At the scanner**

- [ ] **Which method/edition does the school use at Arbeid and BK?** A question,
      not a scan, and it comes first: Arbeid and BK are **34 of the 41** empty
      book/year combinations — two whole levels, every subject, every year.
      Nothing can be scanned until this is answered. Largest content gap there is.
      *Half answered 2026-09-14:* the school runs **Arbeid, BBL, BK and TL**,
      with BK only in leerjaar 1 and 2, after which a student moves on to the
      level that fits them best. That is already what `SUBJECT_YEARS` in
      `src/content/structure.js` encodes (`bk: [1, 2]`), so no code follows from
      it. What is still missing is the half that unblocks scanning: **which
      textbook method and edition** Arbeid and BK use.
- [ ] **Engels TL Deel B**, four books (section 4). TL1 was scanned twice and both
      times turned out to be Deel A; TL2/TL3/TL4 have no usable scan. Check before
      scanning: open the booklet in the middle — a house/room, your own world &
      hobbies, or directions means Deel B (the right one); introductions, a
      timetable, or shopping/food means Deel A.
- [ ] **Maatschappijkunde TL3 and TL4** (section 4). No source book at all; both
      years are offered in the menu and both are empty.
- [ ] **The V8 PDF, uploaded again** (section 4). Steps 1–2 done, 3–7 lost.

**On a phone or in a browser — things Claude cannot see**

- [ ] **Look at the 53 figures** across 38 chapters (section 4). Never seen
      rendered by anyone. Worth most: the six solids in Wiskunde TL1 H1, the
      aanzichten in TL2 H8, the 3D assenstelsel in TL4 H3.
- [ ] **Play one verbind-oefening** → then `origin/matchspel` can go (section 2).
- [ ] **Register with a real invite code** (section 5). The success path of
      `registreren` v2 has never actually run.
- [ ] **Confirm the three 2.3.1 fixes** (section 5).
- [ ] **Safe-area insets in the installed app** (section 5).

**Needs an account or money**

- [!] **A paid API key for speech** (section 2, Fase 4). All three routes need a
      card. One key unlocks voorlezen *and* the AI tutor.
- [!] **A custom domain + Play developer account** (section 5) for the TWA.
- [ ] **Redeploy `admin-acties`** (section 5) — one inconsistent sentence.

**Only Shamil can decide**

- [?] **Fase 3 competitions: 1-versus-1, or a timed group contest?** (section 2)
- [?] **Rewards: what form, and shown where?** (section 3) Mind the constraint
      recorded there: a student can write their own `spelvoortgang` rows, so a
      badge has to be derived server-side or written by an Edge Function.

## 2. The practice game (Fase 2 → 4)

- [~] **Fase 2 — the practice game.** One Duolingo-style game, not a menu of
      separate ones. The "Oefenspel" tab shows a **path of levels** per chapter
      (`src/ui/path.js`); tapping a level opens a **full-screen session**
      (`src/ui/game.js`) of eight mixed exercises. Finishing pays XP, turns the
      node green with a check and unlocks the next level. Nine exercise kinds are
      built — verbind, typ, kies, volgorde, vul het gat in, sorteer, quizvraag,
      waar of niet waar, welke hoort er niet bij — covered by
      `tests/exercises.test.js`.
  - [ ] Tijdrace (as many as you can in 45 seconds) — the only kind left from
        the shortlist. It needs a different session shape (a clock instead of a
        fixed number of exercises), which is why it is not in yet.
  - [!] Spraakspel (speak the answer) — needs speech, so it waits on Fase 4.
- [ ] **Delete the `matchspel` branch.** The exercise was recovered into the
      Oefenspel as the verbind-oefening (`src/ui/game.js`); the branch still
      exists both locally and as `origin/matchspel`. Kept until that exercise has
      been played in a browser — `tests/app.test.js` walks level 1 to a green
      check, but that is an automated test, not a human having played it. Confirm
      by hand, then delete both refs.
- [ ] **Fase 3 — competitions between students** — not started. Builds on
      Fase 2 and needs cloud progress to compare students. No design yet:
      1-versus-1 challenge or a timed group contest is still an open question.
- [!] **Fase 4 — AI tutor + voorlezen.**
  - [!] Voorlezen — paused by choice, and doubly blocked: `uiterlijk/voorlezen.js`
        was deleted by the `316a68c` revamp and the `voorlezen` Edge Function has
        since been removed from Supabase too, so this is a rebuild, not a
        restore. ElevenLabs' free tier gives no API access, OpenAI requires a
        credit card plus $5 prepaid, and Google Cloud TTS also needs a card even
        inside its free quota.
  - [ ] AI tutor / correction chat — not started. Would explain *why* an answer
        was wrong instead of only marking it. Needs a paid API key too, possibly
        the same one.

## 3. The path, one level up

Built 2026-08-30: one level per summary paragraph, thin paragraphs merging
forward (`src/content/levels.js`), locked in order (`src/state/gameLevels.js`),
ending on an Eindtoets, replayable with XP only paid for an improvement —
roughly 950 levels across the 244 chapters. What is still missing sits around it:

- [ ] **Rewards and unlockables.** XP is recorded per level, feeds the
      character-card statistics and is stored server-side. Nothing is unlocked
      with it yet. Shamil's idea: badges or a tag next to your name. With
      Teamchat gone there is no shared screen left to show it on, so this needs
      a new home — the account/profile screen is the obvious candidate. Design
      note for when it is built: the tag must be derived from `spelvoortgang` on
      the server, or written by an Edge Function. A student can write their own
      `spelvoortgang` rows (that is how the game saves), so a tag that simply
      trusts those numbers could be forged with a handful of REST calls. Only the
      *reading* of it needs to be trustworthy — showing a tag is not the same as
      granting a permission.
- [ ] **Streak / daily goal.** `src/state/progress.js` keeps a `streak` and
      `src/ui/character.js` shows it on the character card; the path itself does
      not use it at all.
- [ ] **A completion animation** when the last level of a chapter is cleared.

## 4. Content backlog

### Waiting on source material

- [!] **Engels TL — Deel B** — waiting on scans. TL1 was scanned twice and both
      times turned out to be Deel A; a third attempt is needed. TL2, TL3 and TL4
      have no usable scan yet.
      *Check before scanning:* open the booklet in the middle — a house/room,
      your own world/hobbies, or directions means Deel B (the right one);
      introductions, a timetable, or shopping/food means Deel A.
- [!] **Maatschappijkunde TL3 and TL4** — no source book available, so there is
      nothing to work from. Parked, and both years are offered in the menu.
- [!] **V8 plan, steps 3 to 7** (Rekenen, Nederlands, Wiskunde, Biologie,
      Maatschappijleer & Geschiedenis) — waiting on the V8 PDF being uploaded
      again. The subject-specific ideas were lost when that session was
      summarised, and steps 1 and 2 are already done.

### Enrichment gaps (audited 2026-09-01, re-counted 2026-09-07)

The audit loads every module and reads the registry, so the numbers are what the
site actually serves: **37 books, 267 chapters, 1324 paragraphs**. Structure is
clean everywhere — all 1324 paragraphs use the `.box` / `.call` / `.voorbeeld`
containers, HTML tag balance has 0 errors, and every quiz question has 4 distinct
options with a valid answer index and an explanation. So the "contentstijl-audit"
in the older handoff document is already done; what is missing is enrichment, not
structure.

- [ ] **Self-check blocks — 102 in total, spread thin.** A self-check block is
      the `<div class="check" onclick="toonCheck(this)">` question a student
      answers before revealing the answer. Re-counted 2026-09-07: 102 blocks
      across 12 books, Wiskunde TL1 holding the largest share; **25 of the 37
      books have none at all.** This is the real gap behind "clear and visual".
- [ ] **Paragraph numbering — 61% of 1324.** Most of the remaining 515
      paragraphs are not a task at all; the table below says which are.
- [ ] **Loose text outside the hokjes.** Overall only 3% of the text sits outside
      a container, but it is concentrated: Maatschappijleer TL3 **17%**,
      Nederlands TL1 9%, Engels TL4 6%, Wiskunde TL4 5%. Everything else is at or
      under 4%.
- [ ] **Chapters under the 10-item minimum.** Nederlands BBL1 H9 (7 begrippen),
      H10 (9), H11 (6) · Nederlands BBL2 H10 (5 begrippen, 8 kaarten, 8
      quizvragen), H11 (9/9/9).

#### Which paragraphs actually need numbering

Numbering lets a student lay the summary next to the book. Measured against the
books themselves rather than assumed:

| Book | Numbers in the book itself | Verdict |
|---|---|---|
| Rekenen BBL1 | 63 `N.N` hits; BBL2/3/4 already done | **real work**, and unambiguous |
| Nederlands BBL3/BBL4, TL1–TL4 | no `N.N`; numbered `1..N` per cursus | real work, same convention BBL1/BBL2 already use |
| Engels, all 8 books | 0 hits across all 9 scans | needs one check; probably not numbered at all |
| Wiskunde TL4 deel B | 17 vs 96 in deel A | correctly left alone — exam bundle |

Nederlands BBL1/BBL2 look invented at first glance (`1.1 Onbekende woorden` in a
book with no `N.N` anywhere) but are **correct**: the book numbers paragraphs
`1..7` inside each cursus, and the site renders that as chapter.paragraph.

**No inhoudsopgave is needed from Shamil.** All 50 scans in
`Documents\ShareX\Screenshots\Project\` (OneDrive-redirected) carry an OCR text
layer, so `pdftotext` reads each book's contents directly. Use the Poppler binary
on PATH — `/mingw64/bin/pdftotext` is a broken stub that exits silently with no
output, which is where the old "the scans are image-only" claim came from.

## 5. Mobile, the installed app, and login

- [ ] **Redeploy `admin-acties`.** It still runs the version of
      `_shared/helpers.ts` that says "Vraag je docent om hulp" when a blocked
      account calls it; the repo and `registreren` v2 both say "Vraag Shamil".
      Nothing is broken, the two deployed functions just disagree on one
      sentence. Deploy it the next time that function changes anyway, or on its
      own if the wording matters sooner.
- [ ] **See a code actually disappear.** `registreren` v2 (2026-08-30) deletes
      an invite code once it has been used, so the admin list only holds codes
      that still work. The function was smoke-tested live — it boots, validates
      and runs its database query — but the *success* path has never run,
      because that needs a real code and a real registration. Do it with the
      first code you hand out: register, then check the code is gone from the
      admin panel and the account exists.
      Handing out accounts: invite codes last 14 days
      (`20260829201913_security_and_invites.sql`) and come **20 at a time**
      (`MAX_INVITES_PER_BATCH`), so a whole class is several batches.
- [ ] **Retire the guest states** now that mandatory login is permanently on:
      `settingsGast` (`src/ui/settings.js`) and the `.gast` avatar with its
      "Niet ingelogd" dropdown (`src/ui/account.js`). Both are still in the code.
      They are unreachable behind the gate but still correct while it is off, so
      they stay for now. `accountGast` becomes the gate itself and must stay.
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
- [!] **Play Store listing via a Trusted Web Activity** (see README). Blocked on
      a custom domain and a Play developer account, not on code — a
      `user.github.io/repo` sub-path cannot host the `assetlinks.json` that
      proves ownership.

## 6. Security

- [ ] **Edge Functions send `Access-Control-Allow-Origin: *`.**
      (`supabase/functions/_shared/helpers.ts`, `CORS_HEADERS`.) Low risk,
      because auth travels in the `Authorization` header rather than cookies, so
      another site cannot borrow a student's session. Could still be narrowed to
      the Pages origin.
- [ ] **Leave the `is_admin` / `is_actief` advisor warnings alone.** They are by
      design — the RLS policies call those functions — but they are worth a note
      so nobody "fixes" them by revoking EXECUTE and breaking every policy.
- [—] **Leaked password protection** — Pro plan only. Cannot be enabled on the
      free plan; the advisor will keep flagging it. No action possible.

## 7. Smaller ideas, not started

- [ ] Badge "N kaarten wachten vandaag" on the book overview — the Leitner due
      count is only visible once you are already inside a chapter.
- [ ] Dyslexia pass: check the stylesheets and content for italics used as
      emphasis (bold reads better) and long all-caps labels.
- [ ] Mountain-silhouette hero on the splash screen — from the Claude Design
      mock-up, deliberately never built.
- [ ] Radial menu on very narrow screens (<360px) — tested at 375px and 420px,
      never on anything smaller. Largely superseded on phones: at <=560px the
      menu is no longer an arc in the corner but a panel that slides in from
      the right, so the arc geometry only has to hold up on tablets and
      desktops now.

## 8. Settled — do not undo these

Finished work is not listed here; `git log` has it. What is kept is the handful
of decisions and traps that are easy to "simplify" back into a bug.

**A path of chapters on the book screen was built, looked at, and rejected.**
The "beide lagen" idea: the chapter cards becoming path nodes too, a chapter
turning green once all its levels are done. Built 2026-09-02 (`05670d4`),
reverted 2026-09-03 (`1bbebbe`) because Shamil looked at the result and preferred
the flat card grid. That is a taste decision, not a bug — **do not build it
again.** The winding path stays one layer down, per chapter, in `src/ui/path.js`.
The commits are in the history if the idea ever comes back.

**Teamchat was removed on purpose** (2026-08-31,
`20260831201758_remove_teamchat.sql`) — UI, `src/services/chat.js`, the
`chatberichten` table, the `chat_namen` view, `mag_chatten()` and the `gemute`
column on `profiles`. A shared, live channel between students was a
bullying/harassment risk the school did not want to carry. The Agenda
(`src/state/agenda.js`, `src/ui/agenda.js`) replaced it: a student logs a test
with a date, optionally linked to a chapter, and gets a generic spaced study plan
back (`buildStudyPlan()`, `tests/agenda.test.js`). Local-only, like Progress and
Notes — no server side to it.

**The site is closed to anyone without an account, and that is the intention**
(Shamil, 2026-08-30). Mandatory login shipped in 2.5.0; the gate is
`src/ui/authGate.js`, hung on `go()` through `setNavigationGate()` so
`src/ui/navigation.js` still knows nothing about accounts. A signed-out student
only ever reaches the account screen, the splash included — signing in comes
*before* the welcome. Accounts are handed out deliberately; there is no public
sign-up. To open it back up, build with `VITE_REQUIRE_LOGIN=0` — no code change
needed. Three things settled along with it:

- **Guest work stays on the device.** Signing in does not clear localStorage, so
  `voortgang`, `leitner`, `favorieten`, `sq3r`, `cornell` and `examenresultaten`
  remain and are adopted by the first account that signs in. Nothing is migrated
  and nothing is lost. The catch, on a shared school computer: the first student
  to sign in inherits whatever the previous guest left behind.
- **Offline students are not locked out.** The gate accepts a stored session on
  its own (`auth.hasSession()`), because `ensureProfile()` needs the network.
- **The session no longer dies with the tab** (2.4.0). `src/lib/supabase.js`
  routes it to localStorage or sessionStorage depending on a "Blijf ingelogd op
  dit apparaat" checkbox, unticked by default and cleared on sign-out. Reads fall
  back to the other store and writes keep one copy, so no session is left behind
  in the store no longer in use; `tests/rememberSession.test.js` covers exactly
  that. Also: `tests/app.test.js` clears the gate after boot, so flipping
  `REQUIRE_LOGIN` cannot fail the suite — a failing test blocks the deploy, and
  the switch would not have been flippable.

**The typing exercise's answer check.** An answer is compared after normalising:
HTML entities decoded (`richtingsco&euml;ffici&euml;nt`), lower case, accents
stripped, punctuation dropped. Brackets are optional (`diameter (middellijn)`
accepts *diameter*, *middellijn* or both; `(to) admire` accepts either), and a
slash **with spaces** splits into alternatives while `km/uur` and `m/s` stay
whole. Small typos are forgiven — but **only when no other term of the chapter
fits at least as well**. Without that guard, 69 pairs across the 255 playable
chapters graded as "almost right" while being the wrong concept:
producenten/reducenten, bollelens/hollelens, kraakbeen/spaakbeen,
zaadballen/zaadcellen, in-/uitwendige prikkel, minimum-/maximumtemperatuur.
Those are exactly the pairs a test asks about, so forgiving them would confirm
the mix-up. With the guard: 0 such pairs, and all 5605 terms still accept their
own spelling.

**A new table in `public` inherits a blanket `grant all` for `authenticated`,
which includes TRUNCATE — and TRUNCATE ignores RLS.** `spelvoortgang` got that
by default and it was revoked in `20260829225221`. Check
`information_schema.role_table_grants` after every new table.

**Deleting somebody else's progress goes through `admin-acties`**
(`spelvoortgang_wissen`), never from the browser, like every other privileged
action. The action takes a chapter and a level so it can wipe one paragraph, one
chapter or everything. `public.spelvoortgang` holds one row per (student,
chapter, level); RLS lets you read your own rows and an admin read everyone's,
and you may only write your own. The game stays offline-first: results are
written to localStorage first and mirrored up (`src/services/gameProgress.js`),
signing in pushes what was earned while signed out and pulls anything from
another device. Only the chapter key and level number are stored — the paragraph
names in the admin screen come from the content in the browser, so the database
holds no copy of the study material.

**The class overview shows one chapter at a time on purpose**
(`src/ui/adminClass.js`). The whole `spelvoortgang` table would hit PostgREST's
1000-row ceiling, and a silently truncated answer would read as "nobody did
paragraph 5". The arithmetic is a pure function (`summariseClass`) with
`tests/adminClass.test.js` on it, because a wrong count here is worse than no
count. Admins are left out of the class, so an admin playing a level does not
show up as a pupil who is behind.

**`npm run content:build` was unsafe and is fixed** (2026-09-02, `2a0a2f1`). It
used to rewrite 159 modules and add 27 whose `registerChapter` key was already
taken, so a chapter was silently replaced by a different one — Biologie TL1
"Onderzoeken en ontdekken" became "Gedrag", with no error anywhere, because the
registry keeps whichever module imported last. Two causes, both fixed: chapter
numbers were counted per file rather than per book (six books are transcribed
across several files, so the second file started at 1 again and took the first
file's keys — those files now carry `"eerste_hoofdstuk"`), and the build
clobbered the 146 modules improved in place since they were generated. The build
now leaves a drifted module alone and reports it; `--force` overwrites. Guarded
by `check_content.py` (refuses two files claiming one key) and
`tests/chapterKeys.test.js` (no two modules share a key; each key matches its
folder and file number), both verified by deliberately breaking them. `data/`
covers 185 of the 267 chapters; the other 82 are hand-written and have no JSON at
all, which is fine — the build only touches what it generates.

**Careful with the little tag-balance script**: it only understands the
hand-written single-string module format and silently skips the generated
multi-line ones (it sees 1208 of 1324 paragraphs). The audit that loads the
modules and reads the registry covers all 1324 — use that one. Same for the
figure-ranking script, which scores every chapter on how much of its text is
about shape, position or graph and lists the ones with no `<svg>`; it returns
zero now, so rerun it after adding content in bulk. Neither script is in the repo.

**Figures are inline SVG, on purpose.** 38 of 267 chapters carry at least one,
up from 4 — no library, no third-party request, themed with `var(--txt)` /
`var(--mut)` / `var(--line)` / `var(--accent)` so they follow light mode and the
subject accent, sized by the existing `.fig svg` rule. All ten `.diagram-nodig`
placeholders are gone; that class is `display:none`, so a student saw nothing at
all where an author had merely described a drawing. A drawing is reused wherever
the same idea is taught, so a BBL student and a TL student meet the same picture.

**Where the pre-revamp paths went**, since the old handoff document still points
at them:

| Handoff doc says | Now lives in |
|---|---|
| `renderBook()` in `uiterlijk/app.js` | `src/ui/book.js` |
| `voortgangVoor(...)` | `src/state/progress.js` |
| `data/structuur.js`, `registreerBoek(...)` | `src/content/structure.js`, `src/content/registry.js` |
| `uiterlijk/style.css` | `src/styles/*.css` |
| `uiterlijk/auth.js` | `src/services/auth.js`, `src/lib/supabase.js` |

## 9. File organisation — surveyed, nothing moved

Surveyed 2026-09-14. **No files were moved, renamed or deleted**; all three
questions below are waiting on a decision from Shamil. The survey itself is
worth keeping so nobody repeats it.

**The repository is clean.** 267 chapter modules against 267 chapters promised
by the book registries — zero orphans, zero gaps, no duplicate keys, consistent
`hNN-slug.js` naming, no stray backup or copy files, `.gitignore` complete. The
only thing out of line was nine Dutch code comments in the subject registry
files, now translated.

- [?] **The nested folder.** The project lives at
      `...\Leeromgeving\Leeromgeving\`; the outer folder holds nothing but a
      `desktop.ini`. Cosmetic — git, OneDrive and the VS Code workspace all work
      as-is. Flattening means closing the editor, and OneDrive re-indexes.
- [?] **The scans folder** (`Documents\ShareX\Screenshots\Project`, 1.3 GB,
      63 files). Real inconsistency: an `add/` staging folder holding **5
      unfiled Engels PDFs (351 MB)** that were never moved into the subject
      tree; `(1)`, `New` and `-gecomprimeerd` suffixes; `Engels BBl` vs `BBL`;
      some subjects nested into BBL/TL subfolders and others flat. No exact
      duplicates anywhere — nothing is silently wasting a gigabyte.
      *Note on `add/`:* the file names (`Engels_TL1_BNew.pdf`, `Engels_BBL1_B`,
      `Engels_BBL3_B`) suggest these are the Deel B scans section 4 is waiting
      on, but **the text layer does not settle which deel they are** — keyword
      scoring was too noisy to trust and there is no printed "deel A/B" marker
      in the OCR. That still needs the eyeball check described in section 4.
- [?] **13 stale intermediates in the scans folder** (~1 MB). Every one is
      superseded: three `.json` are byte-identical to files in `data/`, four
      differ by a handful of bytes and the **repo side is the corrected one**
      (the scan copy of `Rekenen_BBL1.json` still has the duplicate-answer bug
      that `5670e4c` fixed), and the five `.js` files call `registreerStof()` /
      `STOF_*`, an API that no longer exists anywhere in the repo — dead since
      the `316a68c` revamp. One is still wrapped in `<script>`. They are a trap
      for a future session that mistakes them for live content.
