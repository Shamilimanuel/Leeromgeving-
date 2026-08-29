-- The previous migration did `revoke all ... from public`, but Supabase grants
-- EXECUTE to `anon` directly, so that revoke did not reach it. Every policy on
-- these tables is scoped `to authenticated`, so no anonymous path ever needs
-- these functions: take the grant away explicitly.
revoke execute on function public.is_admin()    from anon;
revoke execute on function public.is_actief()   from anon;
revoke execute on function public.mag_chatten() from anon;

-- Keep the intended grant for signed-in users.
grant execute on function public.is_admin()    to authenticated;
grant execute on function public.is_actief()   to authenticated;
grant execute on function public.mag_chatten() to authenticated;
