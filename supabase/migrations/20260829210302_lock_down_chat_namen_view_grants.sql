-- `chat_namen` is a simple view, so Postgres makes it auto-updatable, and it is
-- deliberately security_invoker=false so chat can resolve display names without
-- students being able to read all of `profiles`. Those two facts together mean a
-- write through the view executes as the view owner and bypasses RLS on
-- `profiles`. Supabase's default privileges had granted INSERT/UPDATE/DELETE on
-- it to `authenticated`, so any signed-in student could have set their own
-- `rol` to 'admin' (or edited anyone else's profile) with a single PATCH.
-- The view is only ever read, so leave nothing but SELECT.
revoke all on public.chat_namen from anon, authenticated, public;
grant select on public.chat_namen to authenticated;

-- Same clean-up on the tables: TRUNCATE is not subject to RLS, and REFERENCES
-- and TRIGGER are not needed by the browser either. PostgREST cannot reach
-- these today, but there is no reason for the browser roles to hold them.
revoke truncate, references, trigger on public.profiles      from anon, authenticated;
revoke truncate, references, trigger on public.chatberichten from anon, authenticated;
revoke truncate, references, trigger on public.uitnodigingen from anon, authenticated;

-- Re-assert exactly what the app needs and nothing more.
grant select                 on public.profiles      to authenticated;
grant select, insert, delete on public.chatberichten to authenticated;
grant select                 on public.uitnodigingen to authenticated;
