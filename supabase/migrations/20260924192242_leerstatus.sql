-- ═══ Leerstatus: what the "device" badges need, per student (2.7.1) ═══
--
-- Until 2.7.1 the streak, quiz results and "Klaar met lezen" existed only in
-- the student's browser, so a teacher could not see the badges built on them.
-- This stores the three numbers those badges need, nothing more: no answers,
-- no dates, no chapter list.
--
-- Same trust as `spelvoortgang`: a student writes their own row, so these are
-- exactly as trustworthy as the XP the admin panel already shows.

create table if not exists public.leerstatus (
  gebruiker_id          uuid        primary key references auth.users(id) on delete cascade,
  beste_reeks           integer     not null default 0 check (beste_reeks between 0 and 3650),
  quiz_foutloos         boolean     not null default false,
  hoofdstukken_gelezen  integer     not null default 0 check (hoofdstukken_gelezen between 0 and 5000),
  bijgewerkt_op         timestamptz not null default now()
);

alter table public.leerstatus enable row level security;

-- A student reads their own row; an admin reads everyone's (the admin panel).
drop policy if exists "leerstatus lezen" on public.leerstatus;
create policy "leerstatus lezen" on public.leerstatus
  for select
  to authenticated
  using ((select auth.uid()) = gebruiker_id or public.is_admin());

-- Writing is only ever your own row, and only while your account is active.
drop policy if exists "leerstatus toevoegen" on public.leerstatus;
create policy "leerstatus toevoegen" on public.leerstatus
  for insert
  to authenticated
  with check ((select auth.uid()) = gebruiker_id and public.is_actief());

drop policy if exists "leerstatus bijwerken" on public.leerstatus;
create policy "leerstatus bijwerken" on public.leerstatus
  for update
  to authenticated
  using ((select auth.uid()) = gebruiker_id and public.is_actief())
  with check ((select auth.uid()) = gebruiker_id);

-- No delete policy: the row goes with the account (on delete cascade).

-- Keep the highest values. A student on two devices would otherwise have the
-- device with less history overwrite the other's record every sync.
create or replace function public.leerstatus_hoogste_houden()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.beste_reeks := greatest(old.beste_reeks, new.beste_reeks);
  new.quiz_foutloos := old.quiz_foutloos or new.quiz_foutloos;
  new.hoofdstukken_gelezen := greatest(old.hoofdstukken_gelezen, new.hoofdstukken_gelezen);
  new.bijgewerkt_op := now();
  return new;
end;
$$;

-- A trigger function is not for calling directly (same as
-- 20260828065950_fix_trigger_functie_niet_publiek_aanroepbaar).
revoke all on function public.leerstatus_hoogste_houden() from public, anon, authenticated;

drop trigger if exists leerstatus_hoogste_houden on public.leerstatus;
create trigger leerstatus_hoogste_houden
  before update on public.leerstatus
  for each row execute function public.leerstatus_hoogste_houden();

-- A new public table inherits `grant all` for authenticated, TRUNCATE
-- included, and TRUNCATE ignores RLS (see 20260829225221). Grant only what
-- the policies above are about.
revoke all on table public.leerstatus from anon, authenticated;
grant select, insert, update on table public.leerstatus to authenticated;
