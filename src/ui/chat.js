/* Team chat screen. Live updates come from a realtime subscription with a
   polling fallback on top (some school networks block websockets).

   Only validated ids are written into inline handlers; names are looked up
   from the last rendered message list at click time. */
import { $, setHtml, setVisible, escapeHtml, warningBox, isUuid, isIntegerId } from '../lib/dom.js';
import { CHAT_MAX_LENGTH, CHAT_POLL_INTERVAL_MS } from '../config.js';
import * as auth from '../services/auth.js';
import { loadMessages, sendMessage, deleteMessage, subscribeToMessages, chatErrorMessage } from '../services/chat.js';
import { onLeave, isScreenActive, SCREENS } from './navigation.js';
import { showToast } from './toast.js';

let unsubscribe = null;
let pollTimer = null;
let lastMessages = [];

export async function renderChat() {
  if (!$('chat')) return;
  const profile = await auth.ensureProfile();
  if (!profile) {
    setVisible('chatGast', true);
    setVisible('chatLijstBox', false);
    return;
  }
  setVisible('chatGast', false);
  setVisible('chatLijstBox', true);
  setHtml('chatMelding', '');
  setVisible('chatForm', !profile.muted, 'flex');
  setVisible('chatGemuteMelding', profile.muted);

  setHtml('chatLijst', '<p class="lede">Berichten laden…</p>');
  try {
    drawMessages(await loadMessages());
  } catch (err) {
    setHtml('chatLijst', warningBox(chatErrorMessage(err)));
  }
  startLiveUpdates();
}

function messageHtml(m) {
  const session = auth.getSession();
  const own = session && session.user && m.userId === session.user.id;
  const fromAdmin = m.role === auth.ROLE.admin;
  let time = '';
  try {
    time = new Date(m.createdAt).toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit' });
  } catch { /* invalid date */ }
  let tools = '';
  if (auth.isAdmin()) {
    if (!own && !fromAdmin && isUuid(m.userId)) {
      tools += '<button type="button" class="chat-mute" title="Dempen / ontdempen" onclick="chatToggleMute(\'' + m.userId + '\')">\u{1F507}</button>';
    }
    if (isIntegerId(m.id)) {
      tools += '<button type="button" class="chat-mute" title="Bericht verwijderen" onclick="chatDeleteMessage(\'' + m.id + '\')">\u{1F5D1}\u{FE0F}</button>';
    }
  }
  return '<div class="chat-msg' + (own ? ' eigen' : '') + (fromAdmin ? ' vanadmin' : '') + '" data-id="' + escapeHtml(m.id) + '">'
    + '<div class="chat-msg-head"><b>' + escapeHtml(m.username) + '</b>'
    + (fromAdmin ? ' <span class="chat-badge">Beheerder</span>' : '')
    + '<span class="chat-tijd">' + escapeHtml(time) + '</span>' + tools + '</div>'
    + '<div class="chat-msg-tekst">' + escapeHtml(m.text) + '</div>'
    + '</div>';
}

function drawMessages(messages) {
  const list = $('chatLijst');
  if (!list) return;
  lastMessages = messages;
  if (!messages.length) {
    list.innerHTML = '<p class="lede">Nog geen berichten: wees de eerste!</p>';
    return;
  }
  const wasAtBottom = (list.scrollTop + list.clientHeight) >= (list.scrollHeight - 40);
  list.innerHTML = messages.map(messageHtml).join('');
  if (wasAtBottom) list.scrollTop = list.scrollHeight;
}

async function refreshMessages() {
  try {
    drawMessages(await loadMessages());
  } catch { /* ignored: the next poll or realtime event retries */ }
}

export async function submitChatMessage(e) {
  e.preventDefault();
  const field = $('chatInvoer');
  if (!field) return;
  const text = field.value.trim();
  if (!text) return;
  if (text.length > CHAT_MAX_LENGTH) {
    setHtml('chatMelding', warningBox('Bericht is te lang (max ' + CHAT_MAX_LENGTH + ' tekens).'));
    return;
  }
  const session = auth.getSession();
  if (!session) {
    setHtml('chatMelding', warningBox('Je bent niet ingelogd.'));
    return;
  }
  field.disabled = true;
  try {
    await sendMessage(session.user.id, text);
    field.value = '';
    setHtml('chatMelding', '');
    drawMessages(await loadMessages());
    const list = $('chatLijst');
    if (list) list.scrollTop = list.scrollHeight;
  } catch (err) {
    setHtml('chatMelding', warningBox(chatErrorMessage(err)));
  } finally {
    field.disabled = false;
    field.focus();
  }
}

/* ── Live updates ─────────────────────────────────────────────────────── */

function startLiveUpdates() {
  stopLiveUpdates();
  unsubscribe = subscribeToMessages(refreshMessages);
  pollTimer = setInterval(() => {
    if (isScreenActive(SCREENS.chat)) refreshMessages();
  }, CHAT_POLL_INTERVAL_MS);
}

function stopLiveUpdates() {
  if (unsubscribe) {
    unsubscribe();
    unsubscribe = null;
  }
  if (pollTimer) {
    clearInterval(pollTimer);
    pollTimer = null;
  }
}

/* ── Moderation straight from the chat (admins only; RLS enforces it too) ─ */

function authorName(userId) {
  const m = lastMessages.find((x) => x.userId === userId);
  return m ? m.username : 'deze leerling';
}

export async function chatToggleMute(userId) {
  if (!auth.isAdmin() || !isUuid(userId)) return;
  const name = authorName(userId);
  if (!window.confirm('"' + name + '" dempen of ontdempen in de teamchat?')) return;
  try {
    const students = await auth.listStudents();
    const target = students.find((s) => s.id === userId);
    if (!target) throw new Error('Leerling niet gevonden.');
    await auth.setStudentMuted(userId, !target.muted);
    showToast(!target.muted ? name + ' is gedemd.' : name + ' is ontdemd.');
  } catch (err) {
    showToast('Kon niet wijzigen: ' + chatErrorMessage(err));
  }
}

export async function chatDeleteMessage(messageId) {
  if (!auth.isAdmin() || !isIntegerId(messageId)) return;
  if (!window.confirm('Dit bericht verwijderen?')) return;
  try {
    await deleteMessage(messageId);
    await refreshMessages();
  } catch (err) {
    showToast('Kon niet verwijderen: ' + chatErrorMessage(err));
  }
}

export function initChat() {
  onLeave((id) => { if (id !== SCREENS.chat) stopLiveUpdates(); });
}
