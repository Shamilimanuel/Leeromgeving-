-- Backfilled from the live database (applied directly, not via this repo).
-- De trigger-functie mag alleen door de trigger zelf gebruikt worden,
-- niet rechtstreeks aan te roepen via de publieke API.
revoke execute on function public.nieuw_profiel_aanmaken() from anon, authenticated, public;
