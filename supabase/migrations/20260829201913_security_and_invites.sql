-- ═══════════════════════════════════════════════════════════════════════
-- Security hardening: row-level security, invite codes and helper functions.
--
-- Run once in the Supabase SQL editor (or `supabase db push`). The script is
-- idempotent: existing policies are dropped and recreated, tables are only
-- created when missing, constraints are replaced.
--
-- Principles:
--   * The browser NEVER writes to `profiles` or `uitnodigingen` directly.
--     All writes go through the Edge Functions (service role).
--   * Whether someone is an admin, blocked or muted is ALWAYS read from
--     `public.profiles` — never from the JWT or user_metadata, which a user
--     can change themselves via `auth.updateUser()`.
--   * Chat display names come from the `chat_namen` view so students cannot
--     enumerate the full profile table (status, muted flag, creation date).
--
-- Table and column names stay Dutch: they are the deployed backend contract.
-- ═══════════════════════════════════════════════════════════════════════

-- ── 1. Tables (created only when missing) ──────────────────────────────

create table if not exists public.profiles (
  id             uuid primary key references auth.users (id) on delete cascade,
  gebruikersnaam text not null,
  rol            text not null default 'leerling',
  status         text not null default 'actief',
  gemute         boolean not null default false,
  aangemaakt_op  timestamptz not null default now()
);

alter table public.profiles add column if not exists gemute boolean not null default false;
alter table public.profiles add column if not exists aangemaakt_op timestamptz not null default now();

-- NOTE: `id` is uuid, matching the earlier teamchat_schema migration that
-- actually created this table. This block is a no-op on an existing database.
create table if not exists public.chatberichten (
  id            uuid primary key default gen_random_uuid(),
  gebruiker_id  uuid not null references auth.users (id) on delete cascade,
  tekst         text not null,
  aangemaakt_op timestamptz not null default now()
);

create table if not exists public.uitnodigingen (
  code                text primary key,
  aangemaakt_door     uuid references auth.users (id) on delete set null,
  aangemaakt_op       timestamptz not null default now(),
  verloopt_op         timestamptz not null default now() + interval '14 days',
  gebruikt_door       uuid references auth.users (id) on delete set null,
  gebruikt_door_naam  text,
  gebruikt_op         timestamptz
);

-- ── 2. Data rules ───────────────────────────────────────────────────────

alter table public.profiles drop constraint if exists profiles_rol_geldig;
alter table public.profiles add constraint profiles_rol_geldig
  check (rol in ('leerling', 'admin'));

alter table public.profiles drop constraint if exists profiles_status_geldig;
alter table public.profiles add constraint profiles_status_geldig
  check (status in ('actief', 'geblokkeerd'));

-- Username: 3-20 lowercase letters/digits. `not valid` keeps existing rows
-- that do not match, but every new or changed name must comply. This blocks
-- <script>-style names and Unicode look-alike names.
alter table public.profiles drop constraint if exists profiles_gebruikersnaam_geldig;
alter table public.profiles add constraint profiles_gebruikersnaam_geldig
  check (gebruikersnaam ~ '^[a-z0-9]{3,20}$') not valid;

-- Usernames are unique regardless of case.
create unique index if not exists profiles_gebruikersnaam_uniek
  on public.profiles (lower(gebruikersnaam));

-- Chat message: 1-500 characters.
alter table public.chatberichten drop constraint if exists chatberichten_tekst_lengte;
alter table public.chatberichten add constraint chatberichten_tekst_lengte
  check (char_length(btrim(tekst)) between 1 and 500) not valid;

-- ── 3. Helper functions (security definer: read profiles outside RLS) ───

create or replace function public.is_admin()
returns boolean
language sql stable security definer
set search_path = public
as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and rol = 'admin' and status = 'actief'
  );
$$;

create or replace function public.is_actief()
returns boolean
language sql stable security definer
set search_path = public
as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and status = 'actief'
  );
$$;

create or replace function public.mag_chatten()
returns boolean
language sql stable security definer
set search_path = public
as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and status = 'actief' and gemute = false
  );
$$;

revoke all on function public.is_admin()    from public;
revoke all on function public.is_actief()   from public;
revoke all on function public.mag_chatten() from public;
grant execute on function public.is_admin()    to authenticated;
grant execute on function public.is_actief()   to authenticated;
grant execute on function public.mag_chatten() to authenticated;

-- ── 4. Drop every existing policy on these tables and rebuild ───────────

do $$
declare p record;
begin
  for p in
    select schemaname, tablename, policyname
    from pg_policies
    where schemaname = 'public'
      and tablename in ('profiles', 'chatberichten', 'uitnodigingen')
  loop
    execute format('drop policy if exists %I on %I.%I', p.policyname, p.schemaname, p.tablename);
  end loop;
end $$;

alter table public.profiles      enable row level security;
alter table public.chatberichten enable row level security;
alter table public.uitnodigingen enable row level security;

-- profiles: read your own row, or every row as admin. Writes: never from the browser.
create policy "profiles: own row or admin reads"
  on public.profiles for select to authenticated
  using (id = auth.uid() or public.is_admin());

-- chatberichten: active users read; only your own messages, only when not
-- blocked or muted; only admins delete (moderation).
create policy "chat: active users read"
  on public.chatberichten for select to authenticated
  using (public.is_actief());

create policy "chat: post own message"
  on public.chatberichten for insert to authenticated
  with check (
    gebruiker_id = auth.uid()
    and public.mag_chatten()
    and char_length(btrim(tekst)) between 1 and 500
  );

create policy "chat: admin deletes"
  on public.chatberichten for delete to authenticated
  using (public.is_admin());

-- uitnodigingen: only admins see them; creating/using goes through Edge Functions.
create policy "invites: admin reads"
  on public.uitnodigingen for select to authenticated
  using (public.is_admin());

-- Belt and braces: no table-level write grants for the browser roles either.
revoke insert, update, delete on public.profiles      from anon, authenticated;
revoke update                 on public.chatberichten from anon, authenticated;
revoke insert, update, delete on public.uitnodigingen from anon, authenticated;
revoke all                    on public.profiles      from anon;
revoke all                    on public.chatberichten from anon;
revoke all                    on public.uitnodigingen from anon;

-- ── 5. Chat names: only id, name and role — not the rest of the profile ─

create or replace view public.chat_namen
with (security_invoker = false) as
  select id, gebruikersnaam, rol
  from public.profiles
  where public.is_actief();          -- blocked users see nothing

revoke all on public.chat_namen from anon, public;
grant select on public.chat_namen to authenticated;

-- ── 6. Realtime for the chat (no-op when already enabled) ───────────────

do $$
begin
  if not exists (
    select 1 from pg_publication_tables
    where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = 'chatberichten'
  ) then
    alter publication supabase_realtime add table public.chatberichten;
  end if;
exception when others then
  raise notice 'Realtime publication not changed: %', sqlerrm;
end $$;
