-- Backfilled from the live database (applied directly, not via this repo).
-- De 3 policies op profiles checkten "ben ik admin?" met een subquery die
-- ZELF weer de profiles-tabel las (en dus dezelfde policy opnieuw triggerde).
-- Dat gaf "infinite recursion detected in policy for relation profiles" (HTTP 500)
-- zodra iemand zijn eigen profiel probeerde te lezen (dus bij elke login).
--
-- Fix: een SECURITY DEFINER-functie die de admin-check ZONDER RLS uitvoert
-- (bypassed dus de recursie), en de policies laten die functie gebruiken
-- i.p.v. rechtstreeks een subquery op profiles.

create or replace function public.is_admin()
returns boolean
language sql
security definer
stable
set search_path = public
as $$
  select exists (
    select 1 from public.profiles where id = auth.uid() and rol = 'admin'
  );
$$;

revoke all on function public.is_admin() from public;
grant execute on function public.is_admin() to authenticated;

drop policy if exists "profiel lezen" on public.profiles;
create policy "profiel lezen" on public.profiles
  for select
  using (auth.uid() = id or public.is_admin());

drop policy if exists "profiel bijwerken" on public.profiles;
create policy "profiel bijwerken" on public.profiles
  for update
  using (auth.uid() = id or public.is_admin());

drop policy if exists "admin verwijdert profielen" on public.profiles;
create policy "admin verwijdert profielen" on public.profiles
  for delete
  using (public.is_admin());
