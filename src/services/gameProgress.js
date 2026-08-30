/* Mirroring practice-path results to Supabase.

   The game is offline-first: localStorage stays the source of truth for what a
   student sees, and this module copies results up so a teacher can look at
   them and reset a level. Every call is best-effort — a student who is not
   signed in, or has no connection, keeps playing exactly as before. */
import { supabase } from '../lib/supabase.js';
import { getSession } from './auth.js';
import { allGameLevels, mergeServerLevels } from '../state/gameLevels.js';

const TABLE = 'spelvoortgang';

function signedInUserId() {
  const session = getSession();
  return session && session.user ? session.user.id : null;
}

/* Push one finished level. Failures are swallowed: the result is already
   safely in localStorage and will be sent again by syncAllLevels() later. */
export async function pushLevel(chapterKey, index, result) {
  const userId = signedInUserId();
  if (!userId) return false;
  try {
    const { error } = await supabase.from(TABLE).upsert({
      gebruiker_id: userId,
      hoofdstuk: chapterKey,
      level: index,
      beste: result.best,
      totaal: result.total,
      xp: result.xp,
      bijgewerkt_op: new Date().toISOString(),
    }, { onConflict: 'gebruiker_id,hoofdstuk,level' });
    return !error;
  } catch {
    return false;
  }
}

/* Send everything that is in localStorage. Used at sign-in, so results earned
   while signed out are not lost. */
export async function syncAllLevels() {
  const userId = signedInUserId();
  if (!userId) return 0;
  const all = allGameLevels();
  const rows = [];
  Object.keys(all).forEach((chapterKey) => {
    Object.keys(all[chapterKey]).forEach((index) => {
      const result = all[chapterKey][index];
      if (!result || !result.done) return;
      rows.push({
        gebruiker_id: userId,
        hoofdstuk: chapterKey,
        level: Number(index),
        beste: result.best || 0,
        totaal: result.total || 0,
        xp: result.xp || 0,
        bijgewerkt_op: new Date().toISOString(),
      });
    });
  });
  if (!rows.length) return 0;
  try {
    const { error } = await supabase.from(TABLE)
      .upsert(rows, { onConflict: 'gebruiker_id,hoofdstuk,level' });
    return error ? 0 : rows.length;
  } catch {
    return 0;
  }
}

/* Pull this student's results and fold them into localStorage, so a new device
   picks the path up where the old one left off. */
export async function pullMyLevels() {
  const userId = signedInUserId();
  if (!userId) return 0;
  try {
    const { data, error } = await supabase.from(TABLE)
      .select('hoofdstuk, level, beste, totaal, xp')
      .eq('gebruiker_id', userId);
    if (error || !data) return 0;
    return mergeServerLevels(data);
  } catch {
    return 0;
  }
}

/* Admin: every student's results for ONE chapter, for the class overview.

   Scoped to a chapter on purpose. Asking for the whole table would run into
   PostgREST's default 1000-row ceiling, and a silently truncated answer is
   worse than none here: a teacher would read "nobody did paragraph 5" off a
   page that simply stopped early. One chapter is students x levels, so a class
   stays far inside the limit. */
export async function classResultsForChapter(chapterKey) {
  const { data, error } = await supabase.from(TABLE)
    .select('gebruiker_id, level, beste, totaal, xp')
    .eq('hoofdstuk', chapterKey);
  if (error) throw new Error('De voortgang van de klas kon niet worden opgehaald.');
  return data || [];
}

/* Admin: every level result of one student, newest first.
   Allowed by the "spelvoortgang lezen" policy, which lets an admin read all. */
export async function levelsForStudent(studentId) {
  const { data, error } = await supabase.from(TABLE)
    .select('hoofdstuk, level, beste, totaal, xp, bijgewerkt_op')
    .eq('gebruiker_id', studentId)
    .order('hoofdstuk', { ascending: true })
    .order('level', { ascending: true });
  if (error) throw new Error('De voortgang kon niet worden opgehaald.');
  return data || [];
}
