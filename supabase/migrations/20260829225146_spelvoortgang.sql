-- ═══ Oefenspel: level results per student ═══
--
-- The practice path is played offline-first: results are written to
-- localStorage and, when the student is signed in, mirrored here. That is what
-- lets a teacher see how a class is doing per paragraph and reset a level.
--
-- One row per (student, chapter, level). `hoofdstuk` is the chapter key the
-- frontend already uses everywhere ("biologie|bbl|1|2"); `level` is the index
-- of the level in that chapter's path.

create table if not exists public.spelvoortgang (
  gebruiker_id  uuid        not null references auth.users(id) on delete cascade,
  hoofdstuk     text        not null check (char_length(hoofdstuk) between 3 and 120),
  level         integer     not null check (level between 0 and 99),
  beste         integer     not null default 0 check (beste >= 0),
  totaal        integer     not null default 0 check (totaal between 0 and 50),
  xp            integer     not null default 0 check (xp between 0 and 5000),
  bijgewerkt_op timestamptz not null default now(),
  primary key (gebruiker_id, hoofdstuk, level),
  constraint spelvoortgang_score_binnen_totaal check (beste <= totaal)
);

create index if not exists spelvoortgang_hoofdstuk_idx
  on public.spelvoortgang (hoofdstuk);

alter table public.spelvoortgang enable row level security;

-- A student reads their own results; an admin reads everyone's, which is what
-- the results-per-paragraph screen in the admin panel is built on.
drop policy if exists "spelvoortgang lezen" on public.spelvoortgang;
create policy "spelvoortgang lezen" on public.spelvoortgang
  for select
  to authenticated
  using ((select auth.uid()) = gebruiker_id or public.is_admin());

-- Writing is always about your own row, and only while your account is active.
drop policy if exists "spelvoortgang toevoegen" on public.spelvoortgang;
create policy "spelvoortgang toevoegen" on public.spelvoortgang
  for insert
  to authenticated
  with check ((select auth.uid()) = gebruiker_id and public.is_actief());

drop policy if exists "spelvoortgang bijwerken" on public.spelvoortgang;
create policy "spelvoortgang bijwerken" on public.spelvoortgang
  for update
  to authenticated
  using ((select auth.uid()) = gebruiker_id and public.is_actief())
  with check ((select auth.uid()) = gebruiker_id);

-- Only your own rows: an admin wiping someone else's progress goes through the
-- `admin-acties` Edge Function, like every other privileged change.
drop policy if exists "spelvoortgang verwijderen" on public.spelvoortgang;
create policy "spelvoortgang verwijderen" on public.spelvoortgang
  for delete
  to authenticated
  using ((select auth.uid()) = gebruiker_id);

revoke all on table public.spelvoortgang from anon;
grant select, insert, update, delete on table public.spelvoortgang to authenticated;
