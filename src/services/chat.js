/* Team chat data access: one global room for all signed-in students, stored in
   `public.chatberichten`. Row-level security on the database decides who may
   read, write and delete: this module only talks to Supabase.

   Display names come from the `chat_namen` view (id, username, role only), so
   a student can never read the rest of the profile table.

   Column names (gebruiker_id, tekst, aangemaakt_op) are part of the deployed
   schema and stay Dutch here; rows are mapped to English objects. */
import { supabase } from '../lib/supabase.js';
import { CHAT_HISTORY_LIMIT } from '../config.js';
import { ROLE } from './auth.js';

/* Callers must still escape the result before putting it in HTML. */
export function chatErrorMessage(err) {
  const m = (err && err.message) || String(err || '');
  if (/row-level security|permission denied|violates/i.test(m)) return 'Je bericht kon niet worden geplaatst, mogelijk ben je gedemd door een beheerder.';
  if (/networkerror|failed to fetch/i.test(m)) return 'Geen verbinding: controleer je internet.';
  return m || 'Er ging iets mis. Probeer het nog eens.';
}

/* Two separate queries instead of a PostgREST embed: chatberichten.gebruiker_id
   references auth.users, not public.profiles, so automatic joins do not work.
   The names are attached here. */
export async function loadMessages() {
  const res = await supabase
    .from('chatberichten')
    .select('id, gebruiker_id, tekst, aangemaakt_op')
    .order('aangemaakt_op', { ascending: true })
    .limit(CHAT_HISTORY_LIMIT);
  if (res.error) throw res.error;
  const rows = res.data || [];
  if (!rows.length) return [];

  const ids = Array.from(new Set(rows.map((r) => r.gebruiker_id)));
  const namesRes = await supabase.from('chat_namen').select('id, gebruikersnaam, rol').in('id', ids);
  const byId = {};
  (namesRes.data || []).forEach((p) => { byId[p.id] = p; });

  return rows.map((r) => {
    const p = byId[r.gebruiker_id];
    return {
      id: r.id,
      text: r.tekst,
      createdAt: r.aangemaakt_op,
      userId: r.gebruiker_id,
      username: p ? p.gebruikersnaam : 'Onbekend',
      role: p ? p.rol : ROLE.student,
    };
  });
}

export async function sendMessage(userId, text) {
  const res = await supabase.from('chatberichten').insert({ gebruiker_id: userId, tekst: text });
  if (res.error) throw res.error;
}

/* Moderation: RLS only lets admins delete. */
export async function deleteMessage(messageId) {
  const res = await supabase.from('chatberichten').delete().eq('id', messageId);
  if (res.error) throw res.error;
}

/* Subscribe to live changes. Returns an unsubscribe function. Realtime may be
   unavailable (some school networks block websockets); callers should also poll. */
export function subscribeToMessages(onChange) {
  let channel = null;
  try {
    channel = supabase
      .channel('chatberichten-live')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'chatberichten' }, onChange)
      .subscribe();
  } catch {
    /* realtime not available: polling covers it */
  }
  return () => {
    if (channel) {
      try { supabase.removeChannel(channel); } catch { /* ignore */ }
      channel = null;
    }
  };
}

/* Deletes every message the signed-in student posted. RLS ("chat: delete own
   message") is what limits this to their own rows. Returns the count. */
export async function deleteOwnMessages(userId) {
  const res = await supabase.from('chatberichten').delete().eq('gebruiker_id', userId).select('id');
  if (res.error) throw res.error;
  return (res.data || []).length;
}

/* Totals for the admin overview. Counted server-side, no rows transferred. */
export async function countMessages() {
  const res = await supabase.from('chatberichten').select('id', { count: 'exact', head: true });
  if (res.error) throw res.error;
  return res.count || 0;
}
