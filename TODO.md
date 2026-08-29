# TODO — Leeromgeving

Working backlog for this repository. Feature names stay Dutch where they are the
app's own terms (Teamchat, Matchspel, Instellingen); everything else is English,
per the language rule in `CLAUDE.md`.

Last reviewed: 2026-08-29.

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
- [ ] **Remove the typo remote.** `git remote remove orgin` — it sits next to
      the real `origin` and points at the same URL.
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

- [!] **Matchspel** — lives on the local branch `matchspel` (commit `cc17b3e`,
      `uiterlijk/matchspel.js`, 124 lines) and was **never merged into `main`**.
      Written against the old structure, so it needs porting to `src/ui/` and
      registering as a chapter tab. Nothing is lost; it just has to be moved.
- [!] **Voorlezen (text-to-speech)** — `uiterlijk/voorlezen.js` was deleted by
      the revamp, and the `voorlezen` Edge Function has since been removed from
      Supabase too. Also blocked independently (see section 5).

## 4. Teamproject phases

- [x] **Fase 1 — Teamchat + mute** — done and live.
- [~] **Fase 2 — practice games.**
  - [!] Matchspel — built but stranded on a branch, see section 3.
  - [ ] Typspel (type the answer yourself) — not started. Logical next step,
        needs no API and no cost.
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

## 5. Duolingo-style path screen

Shamil's idea: a winding path of level nodes per book/chapter, with a clear
start and something at the end. **Design first, then build** — these questions
were never settled:

- [?] What is one "level"? One node per chapter (a new way to render the
      current chapter list), or finer-grained — Samenvatting → Flashcards →
      Matchspel → Oefenquiz as four separate nodes, closer to how Duolingo
      actually works but a much bigger change.
- [?] Does the path replace the chapter cards or sit next to them?
- [?] What happens at the end — a completion animation, a final test, or a
      hand-off to the next book?
- [?] Is the path locked in order? Locking is currently per `deel` only, not
      per chapter.

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

## 7. Content backlog

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

## 8. Smaller ideas, not started

- [ ] Badge "N kaarten wachten vandaag" on the book overview — the Leitner due
      count is only visible once you are already inside a chapter.
- [ ] Dyslexia pass: check the stylesheets and content for italics used as
      emphasis (bold reads better) and long all-caps labels.
- [ ] Mountain-silhouette hero on the splash screen — from the Claude Design
      mock-up, deliberately never built.
- [ ] Radial menu on very narrow screens (<360px) — tested at 375px and 420px,
      never on anything smaller.

## 9. Done recently (2026-08-29)

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
