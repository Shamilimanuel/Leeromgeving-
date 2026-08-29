-- Backfilled from the live database (applied directly, not via this repo).
-- ═══ Fase 1 teamproject: globale chat + mute-systeem ═══

-- Gemute leerlingen mogen wel de site gebruiken, maar niet chatten
-- (aparte, mildere maatregel dan volledig blokkeren via status).
alter table public.profiles
  add column if not exists gemute boolean not null default false;

create table if not exists public.chatberichten (
  id uuid primary key default gen_random_uuid(),
  gebruiker_id uuid not null references auth.users(id) on delete cascade,
  tekst text not null check (char_length(tekst) between 1 and 500),
  aangemaakt_op timestamptz not null default now()
);

create index if not exists chatberichten_aangemaakt_op_idx on public.chatberichten (aangemaakt_op);

alter table public.chatberichten enable row level security;

-- Iedere ingelogde gebruiker leest het hele globale kanaal.
drop policy if exists "chat lezen" on public.chatberichten;
create policy "chat lezen" on public.chatberichten
  for select
  to authenticated
  using (true);

-- Alleen je eigen bericht plaatsen, en niet als je gemute of geblokkeerd bent.
drop policy if exists "chat plaatsen" on public.chatberichten;
create policy "chat plaatsen" on public.chatberichten
  for insert
  to authenticated
  with check (
    (select auth.uid()) = gebruiker_id
    and not exists (
      select 1 from public.profiles
      where id = (select auth.uid())
        and (status = 'geblokkeerd' or gemute = true)
    )
  );

-- Eigen bericht verwijderen, of admin verwijdert alles (moderatie).
drop policy if exists "chat verwijderen" on public.chatberichten;
create policy "chat verwijderen" on public.chatberichten
  for delete
  to authenticated
  using ((select auth.uid()) = gebruiker_id or public.is_admin());

-- Real-time updates aanzetten voor dit kanaal.
alter publication supabase_realtime add table public.chatberichten;
