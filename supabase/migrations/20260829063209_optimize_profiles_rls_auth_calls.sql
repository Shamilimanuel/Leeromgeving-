-- Backfilled from the live database (applied directly, not via this repo).
-- Kleine performance-tip van Supabase's eigen check: auth.uid() in een
-- (select ...) wikkelen zodat het één keer per query wordt uitgerekend
-- i.p.v. per rij.

drop policy if exists "profiel lezen" on public.profiles;
create policy "profiel lezen" on public.profiles
  for select
  using ((select auth.uid()) = id or public.is_admin());

drop policy if exists "profiel bijwerken" on public.profiles;
create policy "profiel bijwerken" on public.profiles
  for update
  using ((select auth.uid()) = id or public.is_admin());
