/* Mirroring the inputs of the streak/quiz/reading badges to Supabase (2.7.1),
   so a teacher sees those badges too. Table `leerstatus`, one row per
   student: best streak, whether any quiz was ever all right, and how many
   chapters were marked "Klaar met lezen". Nothing else leaves the device.

   Like gameProgress.js: best-effort. localStorage stays the source of truth
   for what the student sees; a failed or offline push changes nothing. The
   database keeps the highest value of each field (trigger in
   supabase/migrations/20260924192242_leerstatus.sql), so a second device with
   less history cannot lower a record set on the first. */
import { supabase } from '../lib/supabase.js';
import { getSession } from './auth.js';
import { allProgress, getStreak } from '../state/progress.js';

const TABLE = 'leerstatus';

function signedInUserId() {
  const session = getSession();
  return session && session.user ? session.user.id : null;
}

/* The three numbers, as this device knows them. */
export function localStudyStatus() {
  const progress = allProgress();
  let perfectQuiz = false;
  let chaptersRead = 0;
  for (const key of Object.keys(progress)) {
    const p = progress[key];
    if (!p) continue;
    if (p.read) chaptersRead++;
    if (p.quizCompleted && p.quizTotal && p.quizCorrect === p.quizTotal) perfectQuiz = true;
  }
  return { bestStreak: getStreak().best, perfectQuiz, chaptersRead };
}

/* A `leerstatus` row in the shape deviceBadges() takes. */
export function statusFromRow(row) {
  if (!row) return { bestStreak: 0, perfectQuiz: false, chaptersRead: 0 };
  return {
    bestStreak: row.beste_reeks || 0,
    perfectQuiz: !!row.quiz_foutloos,
    chaptersRead: row.hoofdstukken_gelezen || 0,
  };
}

/* The higher of two statuses, field by field: what this device knows combined
   with what other devices already sent. */
export function combineStatus(a, b) {
  return {
    bestStreak: Math.max(a.bestStreak || 0, b.bestStreak || 0),
    perfectQuiz: !!(a.perfectQuiz || b.perfectQuiz),
    chaptersRead: Math.max(a.chaptersRead || 0, b.chaptersRead || 0),
  };
}

/* Send this device's numbers. Called after a quiz, after "Klaar met lezen"
   and at sign-in. */
export async function pushStudyStatus() {
  const userId = signedInUserId();
  if (!userId) return false;
  const s = localStudyStatus();
  try {
    const { error } = await supabase.from(TABLE).upsert({
      gebruiker_id: userId,
      beste_reeks: s.bestStreak,
      quiz_foutloos: s.perfectQuiz,
      hoofdstukken_gelezen: s.chaptersRead,
    }, { onConflict: 'gebruiker_id' });
    return !error;
  } catch {
    return false;
  }
}

/* This student's row, or null (not signed in, offline, nothing sent yet). */
export async function myStudyStatus() {
  const userId = signedInUserId();
  if (!userId) return null;
  try {
    const { data, error } = await supabase.from(TABLE)
      .select('beste_reeks, quiz_foutloos, hoofdstukken_gelezen')
      .eq('gebruiker_id', userId)
      .maybeSingle();
    return error ? null : data;
  } catch {
    return null;
  }
}

/* Admin: one student's row. Allowed by the "leerstatus lezen" policy. */
export async function studyStatusForStudent(studentId) {
  const { data, error } = await supabase.from(TABLE)
    .select('beste_reeks, quiz_foutloos, hoofdstukken_gelezen')
    .eq('gebruiker_id', studentId)
    .maybeSingle();
  if (error) throw new Error('De badges konden niet worden opgehaald.');
  return data;
}
