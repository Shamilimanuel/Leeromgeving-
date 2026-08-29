# Leeromgeving: Samenvattingen

Study site for Dutch VMBO students. Vanilla JS ES modules + CSS built with
Vite, Supabase backend, Python content pipeline. Full documentation: `README.md`.

**Language rule:** code, comments, file names and docs are English; every
string a student sees (UI text, summaries, error messages) stays Dutch.

## Layout

```
index.html              static shell with all screens (Dutch UI text)
src/main.js             entry point
src/config.js           Supabase URL/key, edge-function names, limits
src/lib/                DOM, localStorage and Supabase-client helpers
src/content/            registry, structure, queries + subjects/<subject>/<level><year>/hNN-*.js
src/state/              selection, progress (localStorage), notes, stats
src/services/           auth, chat: the only modules that call Supabase
src/ui/                 one module per screen/feature; globals.js = window bridge for inline handlers
src/styles/             CSS split by concern; main.css imports them in order
data/<subject>/*.json   raw book JSON (input)
scripts/                build_content.py, check_content.py, content_formatter.py
supabase/               migrations, Edge Functions, deploy notes
tests/                  Vitest
```

## Commands

- `npm run dev`: develop; `npm run build`: production build to `dist/`
- `npm run check`: lint + test + build; run this before finishing a change
- `npm run content:check` then `npm run content:build` when book JSON changes

## Rules for changes

- Chapter content: edit one module in `src/content/subjects/` at a time. Never
  regenerate everything for a small fix. Generated files are overwritten by
  `content:build`, hand-written ones are not.
- A function called from `onclick="..."` markup must be exported through
  `src/ui/globals.js` (the inline-handlers test enforces this).
- Keep persisted names: localStorage keys/fields (`voortgang`, `leitner`, …),
  database columns (`gebruikersnaam`, `rol`, `status`, `gemute`) and
  edge-function action names are a deployed contract. Map to English at the
  boundary (`src/state/progress.js`, `src/services/auth.js`), never rename them.
- Element ids and CSS class names in `index.html`/`src/styles/` are unchanged
  from the original site and may be Dutch; do not rename them casually:
  content modules reference the CSS classes.
- Summaries in our own words, never copied from the book. BBL level: short
  sentences, everyday words.
- No external runtime libraries besides `@supabase/supabase-js`; no third-party
  requests at runtime (fonts are self-hosted in `public/fonts/`).
- Security: escape every database value with `escapeHtml()` before rendering
  (element content and attributes); put only validated ids (`isUuid`,
  `isIntegerId`) into `onclick="..."` strings; privileged actions go through
  the Edge Functions in `supabase/functions/`, never through direct table
  writes. Keep the CSP host list in `index.html` in sync with `src/config.js`.
- Never hand-edit `dist/` or `dist-single/`.
- Do not commit unless asked.
