# Leeromgeving: Samenvattingen

Study site for Dutch VMBO students: chapter summaries, flashcards with spaced
repetition, a Duolingo-style practice game, practice quizzes, glossaries,
notes, a practice exam and a team chat, for every subject, level
(Arbeid / BBL / BK / TL) and school year.

The **user interface is in Dutch**; the **code, comments and documentation are
in English**.

- Frontend: vanilla JavaScript ES modules + CSS, bundled with [Vite](https://vite.dev)
- Backend: [Supabase](https://supabase.com) (Auth, Postgres with row-level security, Edge Functions)
- Content pipeline: Python scripts that turn the transcribed book JSON into chapter modules
- Installable as a PWA and works offline after the first visit

## Quick start

Requirements: Node.js 20+ (with npm) and, for the content pipeline only, Python 3.10+.

```sh
npm install
npm run dev        # http://localhost:5173 with hot reload
npm run build      # production build in dist/
npm run preview    # serve dist/ locally
```

The site talks to the shared school Supabase project by default. To use your
own project, copy `.env.example` to `.env` and fill in the URL and publishable key.

## Project layout

```
Leeromgeving/
├── index.html                 static shell: all screens and overlays (Dutch UI text)
├── package.json               npm scripts and dependencies
├── vite.config.js             build configuration (dist/ and single-file builds)
├── eslint.config.js           lint rules
├── .env.example               optional Supabase overrides
│
├── public/                    copied to the build as-is
│   ├── manifest.webmanifest   PWA manifest
│   ├── sw.js                  service worker (network-first, offline fallback)
│   └── icons/
│
├── src/                       the application (see "Architecture")
│   ├── main.js                entry point: wires screens and features together
│   ├── config.js              Supabase URL/key, edge-function names, limits
│   ├── lib/                   generic helpers: DOM, localStorage, Supabase client
│   ├── content/               registry + structure + the chapter modules
│   │   ├── registry.js        registerBook / registerChapter, BOOKS, CONTENT
│   │   ├── structure.js       SUBJECTS, LEVELS, SUBJECT_YEARS
│   │   ├── queries.js         search, quiz pool, per-subject lookups
│   │   ├── sections.js        which summary section a term/card belongs to
│   │   ├── index.js           loads every module under subjects/
│   │   └── subjects/<subject>/<subject>.js          books + chapter list
│   │       └── <level><year>/hNN-<slug>.js          one chapter each
│   ├── state/                 what the app remembers (selection, progress, notes, stats)
│   ├── services/              backend calls: auth (accounts, invite codes, admin), chat
│   ├── ui/                    one module per screen or feature
│   └── styles/                CSS split by concern, imported in order by main.css
│                              (mobile.css is imported last: the phone layer)
│
├── data/<subject>/*.json      raw book JSON (input of the content pipeline)
├── scripts/                   Python content pipeline
│   ├── build_content.py       JSON -> src/content/subjects/** modules
│   ├── check_content.py       validates the JSON and the generated modules
│   └── content_formatter.py   plain text -> formatted summary HTML
│
├── supabase/                  backend: migrations, Edge Functions, deploy notes
└── tests/                     Vitest suite
```

## Architecture

The code is split by responsibility; a module only imports from the layers below it.

| Layer | Folder | Responsibility | Talks to |
|---|---|---|---|
| Entry | `src/main.js` | Registers screens, installs handlers, runs `init*()` | everything |
| UI | `src/ui/` | Renders screens/overlays, handles user input | state, services, content |
| State | `src/state/` | Current selection; progress, Leitner boxes, streak, favourites, notes (localStorage) | lib |
| Services | `src/services/` | Supabase Auth/DB/Realtime and Edge Function calls | lib, config |
| Content | `src/content/` | Static study material and queries over it | - |
| Lib | `src/lib/` | DOM helpers, safe localStorage wrappers, Supabase client | config |

Two deliberate boundaries:

- **Inline handlers.** The markup uses `onclick="chooseSubject('biologie')"`-style
  attributes. Every function such an attribute may call is listed once in
  `src/ui/globals.js` and installed on `window` at startup;
  `tests/inline-handlers.test.js` fails if markup calls anything that is not in that list.
- **Persisted names stay as they were.** localStorage keys/fields, database
  columns (`gebruikersnaam`, `rol`, `gemute`, …) and edge-function action names
  are part of the deployed contract, so they keep their Dutch names. They are
  mapped to English objects at the boundary (`src/state/progress.js`,
  `src/services/auth.js`, …); the rest of the app never sees the stored shape.

### Screens and navigation

`index.html` contains one `<section class="screen">` per screen (splash, home,
level, book, chapter, character cards, account, settings, admin, chat).
`src/ui/navigation.js` exposes `go(id)`; screens register a render function
with `registerScreen`, and features hook `onLeave`/`onEnter` for cleanup
(stop chat polling, show/hide the radial menu, auto-open help).

### The practice game

Each chapter has a **path of levels** on its Oefenspel tab. One level covers one
summary paragraph: terms and flashcards already store the index of the paragraph
they belong to, so `src/content/levels.js` can split a chapter without any
content work. Paragraphs with fewer than six items merge into the next one, and
a chapter with more than one level ends on an *Eindtoets* drawn from the whole
chapter.

Tapping a level opens a full-screen session (`src/ui/game.js`) of eight mixed
exercises — connect, type, multiple choice, word order. Finishing it records the
level, pays XP and unlocks the next node.

| Module | Responsibility |
|---|---|
| `src/content/levels.js` | splits a chapter into levels (pure, no state) |
| `src/state/gameLevels.js` | which levels are done, locking, XP (localStorage `spellevels`) |
| `src/ui/path.js` | the path of nodes on the tab |
| `src/ui/game.js` | the session overlay and the exercises |
| `src/lib/answers.js` | judging a typed answer |
| `src/ui/exercises.js` | building the exercises of one session |
| `src/services/gameProgress.js` | mirroring results to Supabase |
| `src/ui/adminProgress.js` | the admin's results-per-paragraph screen |

There are nine kinds of exercise: connect, type, multiple choice, word order,
fill the gap, sort into paragraphs, a chapter quiz question, true/false and odd
one out. Which ones a level can offer depends on its content, so
`tests/exercises.test.js` checks that every level of every chapter can still
fill a session.

XP is only paid for an improvement, so replaying a level cannot be farmed, and
it is added to the per-subject totals in `src/state/stats.js`.

Results are kept in localStorage and, for a signed-in student, mirrored to the
`spelvoortgang` table. That is what lets a teacher open **Voortgang** on a
student in the admin panel and see the score per paragraph, or reset a level.
Resets go through the `admin-acties` Edge Function; the browser never deletes
another account's rows.

## Content

### How a chapter module looks

```js
import { registerChapter } from '../../../registry.js';

registerChapter('biologie|bbl|1|2', {
title:'Bewegen',
summary:[
  {heading:'2.1 Botten', html:'<div class="box"><h4>...</h4><p>...</p></div>'}
],
terms:[ ['skelet','Alle botten samen.',0] ],
cards:[ ['Wat is een gewricht?','Een beweegbare verbinding.',1] ],
quiz:[  ['Hoeveel botten heb je?',['106','206','306','406'],1,'Ongeveer 206.'] ]
});
```

The key is `subject|level|year|chapter`. The last value of a term or card is
the index of the summary section it belongs to (`0` = first, `-1` = none);
when omitted the UI guesses. A quiz entry is `[question, options, correctIndex, explanation]`.

The subject file (`src/content/subjects/<subject>/<subject>.js`) declares
which books and chapters exist:

```js
import { registerBook } from '../../registry.js';

registerBook('biologie','bbl',1,'Nectar 5e editie',[
  {part:'A',ready:true,chapters:[
    ['1','Onderzoeken en ontdekken','Onderzoek doen, de microscoop, cellen en organen'],
    ...
```

Chapters listed under a part with `ready:true` must have a registered module:
`npm test` checks this.

### Adding a subject from book JSON

1. Put the JSON in `data/<subject>/<subject>-<level><year>.json`
   (the level and year are read from the file name, e.g. `economie-tl3.json`).
   The JSON schema is documented at the top of `scripts/build_content.py`.
2. `npm run content:check`: fix every line marked `✗`.
3. `npm run content:build` (or `python scripts/build_content.py data/<subject>/<file>.json` for one book).
   Modules appear under `src/content/subjects/<subject>/<level><year>/`.
4. Create `src/content/subjects/<subject>/<subject>.js` with the `registerBook(...)`
   calls (copy `biologie.js`) and, if it is a new subject, add it to
   `src/content/structure.js` and give it a colour in `src/styles/base.css`.
5. `npm test` and `npm run dev`.

Adding a chapter by hand: drop a module in the right folder, nothing else to
register, `src/content/index.js` picks it up automatically.

### Formatting blocks for summaries

| Class | Use |
|---|---|
| `box` with `<h4>` | panel with a heading |
| `g2` / `g3` | two or three panels side by side |
| `call` | highlighted fact |
| `call warn` | warning or common mistake |
| `call sum` | "om te onthouden" at the end |
| `call ezel` / `call reken` / `call waarom` | mnemonic / worked calculation / why |
| `term` | term with explanation |
| `tblwrap` + `tbl` | table |
| `lst` / `num` | bullet list / numbered steps |
| `fig` | drawing with caption |
| `voorbeeld`, `vergelijk`, `tijdlijn`, `faq`, `check` | worked example, comparison, timeline, FAQ, self-check |

## Backend and accounts

Accounts, the admin panel, chat and moderation run on Supabase. Schema, RLS
policies, Edge Functions and deployment steps are in [`supabase/README.md`](supabase/README.md).

- **Accounts are invite-only.** An admin generates single-use invite codes in
  the admin panel and hands them out; a student registers with a code, a
  username (3-20 lowercase letters/digits) and a password (8+ characters).
  Public sign-up is disabled on the Supabase project.
- **The browser only holds the publishable key.** Row-level security decides
  what it may read; it can never write to `profiles` or `uitnodigingen`.
  Chat names come from the `chat_namen` view, so students cannot read other
  students' profile rows.
- **Everything privileged goes through Edge Functions** (`admin-acties`,
  `registreren`), which read the caller's role from the database, never from
  the token.
- **Client-side hardening:** every database value is HTML-escaped before it is
  rendered (also inside attributes); only validated ids are written into
  inline handlers; the auth session lives in `sessionStorage` so it ends when
  the tab closes (shared school computers); a Content-Security-Policy in
  `index.html` limits scripts, styles and network to this site and the
  Supabase project; fonts are self-hosted from `public/fonts/` so no request
  goes to Google.

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | dev server with hot reload |
| `npm run build` | production build in `dist/` |
| `npm run build:single` | one self-contained HTML file in `dist-single/` (to share by mail or drop anywhere) |
| `npm run preview` | serve the production build locally |
| `npm test` | Vitest: content registry consistency + inline-handler coverage |
| `npm run lint` | ESLint (`no-undef` catches broken references between modules) |
| `npm run check` | lint + test + build |
| `npm run content:check` | validate the book JSON and generated modules |
| `npm run content:build` | regenerate chapter modules from `data/` |

The `content:*` scripts call `python`; on systems where that is `python3`, run
the scripts directly (`python3 scripts/check_content.py`).

## Releasing a new version

The site tells students when a new build is ready and what changed in it, the
way an app store does. Three moving parts:

1. `src/content/changelog.js` holds `APP_VERSION` and the release notes. Add a
   new entry at the **top** and set `APP_VERSION` to the same number.
2. Set the same number in `version` in `package.json` **and** in `APP_VERSION`
   in `public/sw.js`. That third one is not decoration: a browser installs a new
   service worker only when `sw.js` differs byte-for-byte from the one it has,
   so a release that leaves it alone ships completely silently. It doubles as
   the cache generation, so the previous build's bundles are dropped instead of
   piling up. `tests/changelog.test.js` fails if the three drift apart, so a
   forgotten bump stops the deploy rather than shipping an invisible update.
3. Deploy as usual.

What a student then sees:

- **An update is ready.** A deploy replaces `public/sw.js`, the browser installs
  the new worker and parks it in `waiting`. The worker deliberately does *not*
  call `skipWaiting()` on install, because activating straight away would swap
  the code out from under someone in the middle of a quiz. `src/ui/serviceWorker.js`
  spots the waiting worker and shows the "nieuwe versie klaar" bar; only when
  the student taps **Vernieuwen** does `src/ui/appUpdate.js` send `SKIP_WAITING`
  and reload. Dismissing is fine too: the update lands on the next visit. A tab
  left open re-checks hourly and when it regains focus.
  Before offering the reload the page asks the waiting worker which build it
  is. Someone who opens the site fresh after a deploy has already fetched the
  new code over the network and only the worker is behind, so in that case it
  is let through quietly rather than being offered a reload that changes
  nothing.
- **What changed.** After the reload, the "Wat is er nieuw?" sheet
  (`src/ui/whatsNew.js`) opens once on the home screen with the entries newer
  than the last version that student saw (kept in localStorage as
  `gezienVersie`). Someone visiting for the first time gets the welcome slides
  instead, never both. It is also in the profile menu and under Instellingen ->
  Over deze app.

### Putting it in the Play Store

Not done, and not needed for students to install it: the PWA already installs
from the browser on Android and iOS. If you do want a Play listing, the route
is a Trusted Web Activity built with Google's Bubblewrap CLI, which needs a
Play developer account, a custom domain (a `user.github.io/repo` sub-path
cannot host the `/.well-known/assetlinks.json` that proves ownership) and a
`.nojekyll` file so Pages serves that dot-directory. Only the shell ships
through Play; the web content keeps updating through the flow above. iOS has no
equivalent, as Apple rejects thin web wrappers.

## Deployment

`npm run build` produces a static site in `dist/` that can be hosted anywhere
(GitHub Pages, Netlify, a school server). Assets use relative paths, so a
sub-path works too. The service worker caches everything it has served, so the
site keeps working offline after the first visit.

### GitHub Pages

`.github/workflows/deploy.yml` builds and publishes on every push to `main`.
It runs `npm run check` first, so a failing lint or test stops the deploy
instead of publishing a broken site. `dist/` stays git-ignored: the workflow
builds it fresh and uploads it as a Pages artifact.

Two things have to be set up once, outside this repository:

- **Settings -> Pages -> Source** must be **GitHub Actions**. With the older
  "Deploy from a branch" the workflow fails at `configure-pages`.
- The workflow pins **Node 24**. Node 20 is too old: `@supabase/realtime-js`
  looks up a global `WebSocket`, which Node only has from v22, so
  `createClient()` in `src/lib/supabase.js` throws during the tests.

Note that only the frontend is deployed this way. The Supabase backend
(database, RLS policies and Edge Functions) is deployed separately -- see
[`supabase/README.md`](supabase/README.md).

## Open work

The running backlog lives in [`TODO.md`](TODO.md): what is open, what is blocked
and on whom, and the reasoning behind decisions that are easy to forget (such as
why the `chat_namen` view is deliberately SECURITY DEFINER).

## Conventions

- Code, comments, file names and commit messages in English; everything a
  student sees in Dutch. BBL level: short sentences, everyday words.
- Summaries are written in our own words, never copied from the book.
- No external runtime libraries besides `@supabase/supabase-js`; no third-party
  requests at runtime (fonts are self-hosted in `public/fonts/`).
- Never put a database value into HTML without `escapeHtml()`, and never put
  anything but a validated id into an `onclick="..."` string.
- Edit one chapter module at a time; never hand-edit `dist/` or `dist-single/`.
- Keep the localStorage keys and database column names as they are: existing
  student data depends on them.
