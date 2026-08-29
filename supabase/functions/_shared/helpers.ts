/* Shared helpers for the Edge Functions.
   Runs on Deno (Supabase Edge Runtime). */

import { createClient, type SupabaseClient } from 'npm:@supabase/supabase-js@2';

export const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

/* Must match the database constraint `profiles_gebruikersnaam_geldig`. */
export const USERNAME_RE = /^[a-z0-9]{3,20}$/;
export const PASSWORD_MIN = 8;
export const PASSWORD_MAX = 72;

/* Students log in with a username; Supabase Auth works with e-mail addresses,
   so every username maps to a synthetic address. Must match the client. */
export const SYNTHETIC_EMAIL_DOMAIN = 'leerling.schoolproject.local';

export function emailForUsername(username: string): string {
  return `${username}@${SYNTHETIC_EMAIL_DOMAIN}`;
}

export function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
  });
}

export function fail(message: string, status = 400): Response {
  return json({ error: message }, status);
}

export class HttpError extends Error {
  status: number;
  constructor(message: string, status = 400) {
    super(message);
    this.status = status;
  }
}

/* Service-role client: bypasses RLS. Only ever used inside Edge Functions. */
export function serviceClient(): SupabaseClient {
  const url = Deno.env.get('SUPABASE_URL');
  const key = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
  if (!url || !key) throw new HttpError('Server is niet goed geconfigureerd.', 500);
  return createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false } });
}

export interface Profile {
  id: string;
  gebruikersnaam: string;
  rol: 'leerling' | 'admin';
  status: 'actief' | 'geblokkeerd';
  gemute: boolean;
}

/* Validates the caller's JWT and loads the matching profile row. The role and
   status come from the database, never from the token or user_metadata. */
export async function requireCaller(req: Request, admin: SupabaseClient): Promise<Profile> {
  const auth = req.headers.get('Authorization') || '';
  const token = auth.startsWith('Bearer ') ? auth.slice(7) : '';
  if (!token) throw new HttpError('Niet ingelogd.', 401);

  const { data: userData, error: userErr } = await admin.auth.getUser(token);
  if (userErr || !userData?.user) throw new HttpError('Niet ingelogd.', 401);

  const { data: profile, error: profErr } = await admin
    .from('profiles')
    .select('id, gebruikersnaam, rol, status, gemute')
    .eq('id', userData.user.id)
    .single();
  if (profErr || !profile) throw new HttpError('Geen profiel gevonden.', 403);
  if (profile.status !== 'actief') throw new HttpError('Dit account is geblokkeerd. Vraag je docent om hulp.', 403);
  return profile as Profile;
}

export async function readJsonBody(req: Request, maxBytes = 4096): Promise<Record<string, unknown>> {
  const raw = await req.text();
  if (raw.length > maxBytes) throw new HttpError('Verzoek is te groot.', 413);
  try {
    const parsed = raw ? JSON.parse(raw) : {};
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) throw new Error();
    return parsed as Record<string, unknown>;
  } catch {
    throw new HttpError('Ongeldig verzoek.', 400);
  }
}

export function asString(v: unknown): string {
  return typeof v === 'string' ? v : '';
}

/* Random string from an alphabet without look-alike characters (no 0/O, 1/I/l). */
const READABLE = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';

export function randomReadable(length: number): string {
  const bytes = new Uint8Array(length);
  crypto.getRandomValues(bytes);
  let out = '';
  for (const b of bytes) out += READABLE[b % READABLE.length];
  return out;
}

/* Invite code: 8 readable characters shown as XXXX-XXXX (≈40 bits of entropy). */
export function newInviteCode(): string {
  const raw = randomReadable(8);
  return raw.slice(0, 4) + '-' + raw.slice(4);
}

/* Accepts "abcd-efgh", "ABCDEFGH", "abcd efgh" etc. and returns "ABCD-EFGH". */
export function normalizeInviteCode(input: string): string {
  const raw = input.toUpperCase().replace(/[^A-Z0-9]/g, '');
  if (raw.length !== 8) return '';
  return raw.slice(0, 4) + '-' + raw.slice(4);
}

/* Temporary password handed out by an admin: readable, 12 characters. */
export function newTemporaryPassword(): string {
  const raw = randomReadable(12).toLowerCase();
  return raw.slice(0, 4) + '-' + raw.slice(4, 8) + '-' + raw.slice(8);
}

/* Wraps a handler so thrown HttpErrors become JSON responses and OPTIONS is answered. */
export function serve(handler: (req: Request) => Promise<Response>): void {
  Deno.serve(async (req: Request) => {
    if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS_HEADERS });
    if (req.method !== 'POST') return fail('Alleen POST.', 405);
    try {
      return await handler(req);
    } catch (e) {
      if (e instanceof HttpError) return fail(e.message, e.status);
      console.error(e);
      return fail('Er ging iets mis op de server.', 500);
    }
  });
}
