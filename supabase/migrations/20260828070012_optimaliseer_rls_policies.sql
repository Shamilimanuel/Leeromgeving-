-- Backfilled from the live database (applied directly, not via this repo).
drop policy "eigen profiel lezen" on public.profiles;
drop policy "admin leest alle profielen" on public.profiles;
drop policy "eigen profiel bijwerken" on public.profiles;
drop policy "admin werkt profielen bij" on public.profiles;
drop policy "admin verwijdert profielen" on public.profiles;

create policy "profiel lezen" on public.profiles
  for select using (
    (select auth.uid()) = id
    or exists (select 1 from public.profiles p where p.id = (select auth.uid()) and p.rol = 'admin')
  );

create policy "profiel bijwerken" on public.profiles
  for update using (
    (select auth.uid()) = id
    or exists (select 1 from public.profiles p where p.id = (select auth.uid()) and p.rol = 'admin')
  );

create policy "admin verwijdert profielen" on public.profiles
  for delete using (
    exists (select 1 from public.profiles p where p.id = (select auth.uid()) and p.rol = 'admin')
  );
