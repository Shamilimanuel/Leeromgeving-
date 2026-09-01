/* Thin, fail-safe wrappers around localStorage.
   The key names are kept exactly as they were in earlier versions so that
   data students already saved (progress, notes, favourites) stays valid. */

export const STORAGE_KEYS = {
  progress: 'voortgang',
  mistakes: 'fouten',
  leitner: 'leitner',
  streak: 'streak',
  favorites: 'favorieten',
  examHistory: 'examenresultaten',
  sq3r: 'sq3r',
  cornell: 'cornell',
  dyslexia: 'dyslexieModus',
  lightMode: 'lichtModus',
  textSize: 'tekstgrootte',
  pomodoroDuration: 'pomodoroDuur',
  gameLevels: 'spellevels',
  lastSeenVersion: 'gezienVersie',
  rememberSession: 'blijfIngelogd',
  agenda: 'agenda',
};

export function readJson(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw == null || raw === '' ? fallback : JSON.parse(raw);
  } catch {
    return fallback;
  }
}

export function writeJson(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* storage unavailable (private mode, quota): the app keeps working without persistence */
  }
}

export function readString(key) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

export function writeString(key, value) {
  try {
    localStorage.setItem(key, String(value));
  } catch {
    /* see writeJson */
  }
}
