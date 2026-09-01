-- Teamchat is removed entirely: the school could use a shared, unmoderated-
-- in-the-moment channel between students as a vector for bullying/harassment,
-- so there is no chat feature left to secure. This reverses
-- `20260829070038_teamchat_schema.sql` and the chat-related parts of
-- `20260829201913_security_and_invites.sql`,
-- `20260829203119_revoke_anon_execute_on_helpers.sql`,
-- `20260829210302_lock_down_chat_namen_view_grants.sql` and
-- `20260829211935_allow_own_chat_message_delete.sql`.
--
-- `is_admin()` and `is_actief()` stay: they gate `spelvoortgang` and
-- `profiles` RLS far beyond chat. Only `mag_chatten()` was chat-only.

do $$
begin
  if exists (
    select 1 from pg_publication_tables
    where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = 'chatberichten'
  ) then
    alter publication supabase_realtime drop table public.chatberichten;
  end if;
exception when others then
  raise notice 'Realtime publication not changed: %', sqlerrm;
end $$;

drop view if exists public.chat_namen;
drop table if exists public.chatberichten;
drop function if exists public.mag_chatten();

-- Muting was only ever a chat moderation tool; nothing else read this column.
alter table public.profiles drop column if exists gemute;
