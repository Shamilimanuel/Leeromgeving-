-- Students can clear their own chat messages from Instellingen. Moderation by
-- admins stays a separate policy; permissive policies are OR'd, so an admin
-- keeps being able to delete anything and a student only reaches their own.
drop policy if exists "chat: delete own message" on public.chatberichten;
create policy "chat: delete own message"
  on public.chatberichten for delete to authenticated
  using (gebruiker_id = (select auth.uid()));
