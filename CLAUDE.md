# Leeromgeving: Samenvattingen

Study site for Dutch VMBO students. Vanilla JS ES modules + CSS built with
Vite, Supabase backend, Python content pipeline. Full documentation: `README.md`.

**Starting cold? Read `TASK.md` first** — where the project stands today,
what is done, and the ordered checklist of what comes next. When an item is
finished, tick it, move it to *Recently done*, update the date at the top, and
run `npm run tasks` to refresh the progress bar (a test fails if you forget).

**Language rule:** code, comments, file names and docs are English; every
string a student sees (UI text, summaries, error messages) stays Dutch.

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
  database columns (`gebruikersnaam`, `rol`, `status`) and edge-function
  action names are a deployed contract. Map to English at the boundary
  (`src/state/progress.js`, `src/services/auth.js`), never rename them.
- Element ids and CSS class names in `index.html`/`src/styles/` are unchanged
  from the original site and may be Dutch; do not rename them casually:
  content modules reference the CSS classes.
- Summaries in our own words, never copied from the book. BBL level: short
  sentences, everyday words.
- No external runtime libraries besides `@supabase/supabase-js`; no third-party
  requests at runtime (fonts are self-hosted in `public/fonts/`).
- No emoji anywhere a student can see, and none in the developer scripts
  either. Symbols are icons: `icon('star')` from `src/lib/dom.js`, or
  `<span class="icon icon-star" aria-hidden="true">` in `index.html`, or a
  masked `::before` in CSS. The set is self-hosted Lucide SVG in
  `public/icons/ui/` with a rule per icon in `public/icons/icons.css`; a new
  icon needs both the file and the rule. See "Icons" in `README.md`.
- Security: escape every database value with `escapeHtml()` before rendering
  (element content and attributes); put only validated ids (`isUuid`,
  `isIntegerId`) into `onclick="..."` strings; privileged actions go through
  the Edge Functions in `supabase/functions/`, never through direct table
  writes. Keep the CSP host list in `index.html` in sync with `src/config.js`.
- Chapter bodies load per book on demand (`src/content/loader.js`). Anything
  that reads `CONTENT` must `await loadChapter(key)` first; lists and titles
  use `chapterKeysForSubject` / `chapterTitle` from `queries.js`, which need
  no loading.
- Never hand-edit `dist/` or `dist-single/`.
- Do not commit unless asked.
