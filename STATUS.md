# STATUS — where this project stands

Written for a session that starts cold: a new Claude session, a new machine, or
Shamil after a few weeks away. It answers "what is this, what works, what is
half-finished, what do I do next" without reading the whole repo.

**Last updated: 2026-09-14, end of evening session.** Update the date whenever
you change this file.

The four documents do different jobs; keep them that way:

| File | Answers |
|---|---|
| `README.md` | How the thing is built and how to work on it. Reference. |
| `CLAUDE.md` | The rules a change has to obey. Short, enforced. |
| `TODO.md` | What is open, blocked, or decided-and-not-to-be-undone. The backlog. |
| `STATUS.md` (this) | Where the project is *right now*. A snapshot, not a backlog. |

---

## 1. In one paragraph

A study site for Dutch VMBO students: per-chapter summaries, flashcards, a
practice quiz, a glossary, and a Duolingo-style practice path. Vanilla JS ES
modules and CSS, built with Vite; Supabase for accounts and cloud progress; a
Python pipeline that turns scanned book JSON into chapter modules. It is
deployed to GitHub Pages and students need an account to get in. Code and docs
are English, every string a student reads is Dutch.

## 2. State of the tree

- **Version 2.6.0 is live.** Pushed 2026-09-04 (`cd86b3a`), which fires
  `.github/workflows/deploy.yml` and publishes `dist/` to GitHub Pages. Local
  `main` and `origin/main` are level.
- **Size:** 10 subjects in the menu, 8 of which have content. 37 books, 267
  chapter modules, ~1324 paragraphs. 36 raw book JSON files in `data/`; 185 of
  the 267 chapters are generated from those, the other 82 are hand-written.
- **Checks, run at the end of this session:** `npm run check` green (lint + 171
  tests in 16 files + build). `npm run content:check` reports no errors.
- **Branches:** `main`, plus `matchspel` (local and remote) — dead weight kept
  for one reason only, see `TODO.md` section 2.

### Uncommitted work sitting in the tree — READ THIS FIRST

**38 modified files and 41 untracked**, none of it committed, because
`CLAUDE.md` says not to commit unless asked and nobody asked. Everything below
passes `npm run check`. Nothing is half-finished or broken.

1. **The emoji-to-icon pass** — section 3. Includes 40 new SVGs under
   `public/icons/ui/`, which is most of the 41 untracked files.
2. **Two icon/colour bug fixes** — section 3. Both were found by looking at the
   running site, not by a test.
3. **Nine Dutch code comments translated** in
   `src/content/subjects/<subject>/<subject>.js`, the book registry files. They
   broke the project's own language rule. Chapter titles and blurbs stay Dutch —
   those are student-facing.
4. **`scripts/check_content.py` prints `FAIL`** where it printed a cross mark,
   with `README.md` updated to match. A terminal cannot draw an icon.
5. **This file**, `README.md`'s new "Icons" section, and the pointers to
   `STATUS.md` added to `README.md`, `CLAUDE.md` and `TODO.md`.

It is one coherent change, so one commit would do it.

## 3. What changed this session (2026-09-14)

### Emoji are gone; everything is an icon

The interface used to carry emoji as its icon set. Every symbol is now an icon
from [Lucide](https://lucide.dev) (ISC), self-hosted as SVG in
`public/icons/ui/` and drawn as a CSS mask, so it takes its size from
`font-size` and its colour from `color`.

Why: an emoji is a different drawing on every device — Windows, Android and iOS
each redraw theirs — and a colour cartoon inside a button reads as informal.

Most of them were invisible to a plain grep, because they were written as
`\u{...}` escapes in JS and `&#NNNNN;` entities in HTML rather than as literal
glyphs. That is why earlier passes missed them; grep for the escape forms, not
the characters. Touched:
`src/content/structure.js` (subject and level icons), `index.html`, eighteen
`src/ui/` modules, three callout markers in `src/styles/content.css`, and
`scripts/check_content.py`.

How to place one — the full rule is in `README.md` under "Icons":

- from JavaScript: `icon('star')`, exported by `src/lib/dom.js`;
- in `index.html`: `<span class="icon icon-star" aria-hidden="true"></span>`;
- from CSS, for a `::before` marker: `content:''` plus `mask` and
  `background-color` (see `.call.ezel` in `src/styles/content.css`).

A new icon needs **two** things: the SVG in `public/icons/ui/` **and** a
matching `.icon-<name>` rule in `public/icons/icons.css`. Missing either one
renders nothing at all, silently.

### Two bugs the test suite could not see

Worth keeping as a lesson: both were only found by opening the site.

**The `.snel-ico .core` icons came out near-black on a near-black card.** Three
icon holders look alike but are not. `.subj .core` and `.niv-card .ico` fill
themselves with a bright `--c` gradient, so a dark icon is correct there.
`.snel-ico .core` is a **bare glyph inside a glowing ring with no disc behind
it**. All three were given `--op-kleur` and the third one vanished. Fixed in
`src/styles/base.css`; the comment there now names which holders are
deliberately *not* in that list.

**The snelbalk tiles were dark-on-dark in light mode** — pre-existing, not
caused by the icon work. `.snel` keeps its dark gradient in light mode (`--cd`
and the `#070a14` end stop are never re-tokenised) but takes `color:var(--txt)`,
which light mode flips to `#20242b`. Fixed in `src/styles/theme.css` the same
way `.fc-b` already handled it: the tile stays dark, so its text stays light.

**Still unseen by a human:** the subject-card badges and the level chips, where
a flat monochrome icon now sits on a bright coloured disc that used to hold a
full-colour emoji. `--op-kleur` in `src/styles/base.css` is the knob if the
contrast is wrong.

### A plan of record for the next six changes

Published as a tickable page:
<https://claude.ai/code/artifact/be17f155-e9d6-4c46-8d96-a1b61f22f819>

Ticking a step republishes the page, so the state follows you between devices,
and every open view reloads to the newest tick. The six, in Shamil's numbering,
with the suggested build order in brackets:

1. **Settings, rebuilt as five categories** *(build 2nd)* — Account · Weergave ·
   Mijn gegevens · Gevaarlijk · Over. Today it is seven flat boxes in which
   "Account definitief verwijderen" carries the same visual weight as
   "Tekstgrootte".
2. **A style of your own** *(build 1st)* — Shamil: the UI "feels empty except
   for what you actually need". Measured, that is mostly that the block
   vocabulary already built is barely deployed — `vergelijk` 9%, `ezel` 3%,
   `tijdlijn` once — plus empty states with no icon and no next action.
3. **The chapter screen: six tabs, one route** *(build 3rd)* — six equal
   choices at the exact moment a student should be reading.
4. **Make XP and the streak pay off** *(build 5th)* — `TODO.md` section 3
   already records that nothing is unlocked with XP and that the path ignores
   the streak entirely.
5. **Cut the first-load weight** *(build 4th)* — section 5 below.
6. **The Economie TL4 treatment everywhere** *(runs continuously)* — section 4
   below.

Two trade-offs are recorded on that page rather than buried: change 5 changes
the offline promise, and change 4 cannot trust `spelvoortgang` rows because
students write their own.

## 4. What the content measurement says

Measured 2026-09-14 across all 267 chapters. The model chapter,
`economie|tl|4|1`, carries **6 `h5.sub` + 8 `g2`/`g3` + 21 `box` + 4 `call.sum`
across 4 paragraphs** — the highest-scoring chapter in the project.

| Marker | Chapters with any |
|---|---|
| `box` | 267 (100%) |
| `lst` | 256 (96%) |
| `call.sum` | 250 (94%) |
| `g2`/`g3` | 172 (64%) |
| `tbl` | 158 (59%) |
| `voorbeeld` | 66 (25%) |
| **`h5.sub`** | **60 (22%)** |
| `svg` figures | 38 (14%) |
| **`check`** | **33 (12%)** |
| `vergelijk` | 23 (9%) |
| `ezel` | 7 (3%) |
| `tijdlijn` | 1 |

Shamil's instinct to start at TL was right. Sectioning score per paragraph
(`h5.sub + g2/g3 + call.sum + check`), worst first: **`wiskunde TL4` 0.00**
(eight chapters with none at all), `wiskunde TL2` 0.23, `engels TL1` 0.29,
`engels TL2` 0.39, `engels TL3` 0.44, `wiskunde TL3` 0.46, `nederlands TL2`
0.70, `nederlands TL1` 0.75 — against the model at **4.81**, `biologie BBL1`
4.75, `economie TL3` 3.84. The books already touched sit at the top; the
untouched TL books sit at the bottom. The full ranked table of all 37 is on the
plan page.

## 5. The performance number nobody had measured

The production bundle is **4.42 MB, of which 4.18 MB (95%) is chapter content**.
App code is 223 kB. About 1.1 MB gzipped. Every student downloads all 37 books —
every BBL year, every Arbeid year, every subject — before the home screen
paints, however few they will ever open.

`vite.config.js` says the bundling is deliberate so the site works offline after
the first visit. That trade is real and it is Shamil's to re-make: splitting
content per book changes the promise from *"everything works offline after one
visit"* to *"what you have opened works offline."*

## 6. What actually works today

- Browse subject → level → year → book → chapter.
- Per chapter: summary, flashcards (Leitner, spaced repetition), practice quiz,
  glossary. Favourites, search, notes (Cornell and SQ3R), a Pomodoro timer, a
  practice exam, light mode, dyslexia mode, adjustable text size.
- **The practice path** (`src/ui/path.js` + `src/ui/game.js`): one level per
  summary paragraph, roughly 950 levels, locked in order, ending on an
  Eindtoets. Nine kinds of exercise. Offline-first: results go to localStorage
  and are mirrored to Supabase.
- **Accounts.** Mandatory login (2.5.0). No public sign-up: invite codes, 20 per
  batch, valid 14 days. An admin panel lists codes, class progress and
  per-student path progress.
- **Agenda.** Log a test with a date, get a spaced study plan back. Local to the
  device, like notes and progress.
- Installable as a PWA, with a service worker and a "Wat is er nieuw?" sheet
  driven by `src/content/changelog.js`.

## 7. Next time you sit down

**The three things only Shamil can do** — detail in `TODO.md` section 1:

1. **Which method/edition does the school use at Arbeid and BK?** Answered in
   part on 2026-09-14: the school runs **Arbeid, BBL, BK and TL**, with BK only
   in years 1 and 2, after which a student moves to the level that fits them
   best. That already matches `SUBJECT_YEARS` in `src/content/structure.js`, so
   no code change follows from it. **Still open, and it is the half that blocks
   scanning: which textbook method and edition** those levels use. Arbeid and BK
   are 34 of the 41 empty book/year combinations.
2. **Look at the site on a phone and in a browser.** The 53 figures across 38
   chapters, the new icons, the three 2.3.1 mobile fixes, the safe-area insets,
   and one verbind-oefening — the last being all that stands between the
   `matchspel` branch and deletion.
3. **Register once with a real invite code.** The success path of `registreren`
   v2 has never run.

**If you would rather build than check:** start change 2, scoped to Settings as
the pilot screen. It is self-contained, you already want it changed, and nobody
is mid-quiz when it breaks.

**Still undecided, nothing touched:** the three file-organisation questions in
`TODO.md` section 9.

## 8. Traps that have already bitten someone

Long versions in `TODO.md` section 8. The short list, because these are the ones
a fresh session breaks:

- **Do not rebuild the path-of-chapters on the book screen.** Built (`05670d4`),
  looked at, reverted (`1bbebbe`). Taste decision, not a bug.
- **Do not rename a persisted name.** localStorage keys (`voortgang`,
  `leitner`, …), database columns (`gebruikersnaam`, `rol`, `status`) and edge
  function action names are a deployed contract.
- **Do not "fix" the `is_admin` / `is_actief` advisor warnings.** The RLS
  policies call those functions; revoking EXECUTE breaks every policy.
- **`npm run content:build` only rewrites what it generated.** Fixed in
  `2a0a2f1`. `--force` overwrites hand edits — think before using it.
- **Teamchat was removed on purpose**, as a bullying risk the school did not
  want to carry. Do not bring back a shared channel.
- **A function called from `onclick="..."` must be exported through
  `src/ui/globals.js`** — `tests/inline-handlers.test.js` enforces it.
- **A new icon needs both the SVG file and the CSS rule.** Missing either one
  fails silently and renders nothing.

## 9. Commands

```
npm run dev              develop
npm run check            lint + test + build — run before finishing a change
npm run content:check    validate the book JSON and the modules
npm run content:build    regenerate chapter modules from data/
```

Releasing: bump the version in three places — `APP_VERSION` in
`src/content/changelog.js`, `version` in `package.json`, and `APP_VERSION` in
`public/sw.js` — and add a Dutch changelog entry at the top.
`tests/changelog.test.js` fails when they drift apart. Pushing to `main`
deploys.
