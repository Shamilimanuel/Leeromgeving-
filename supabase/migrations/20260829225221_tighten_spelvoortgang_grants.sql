-- New tables in `public` inherit a blanket `grant all` for `authenticated`,
-- which hands out TRUNCATE, REFERENCES and TRIGGER as well. TRUNCATE is the
-- dangerous one: it ignores row-level security, so one call would wipe every
-- student's results regardless of the policies on the table. Cut it back to
-- exactly the four verbs the app uses, the way `chatberichten` already is.

revoke all on table public.spelvoortgang from authenticated;
grant select, insert, update, delete on table public.spelvoortgang to authenticated;

revoke all on table public.spelvoortgang from anon;
