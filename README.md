# Leeromgeving: Samenvattingen

Study site for Dutch VMBO students: chapter summaries, flashcards with spaced
repetition, practice quizzes, glossaries, notes, a practice exam and a team
chat, for every subject, level (Arbeid / BBL / BK / TL) and school year.

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

## Deployment

`npm run build` produces a static site in `dist/` that can be hosted anywhere
(GitHub Pages, Netlify, a school server). Assets use relative paths, so a
sub-path works too. The service worker caches everything it has served, so the
site keeps working offline after the first visit.

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
