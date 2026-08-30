/* Notes tab: Cornell notes (cue column, notes column, summary). */
import { setHtml, escapeHtml } from '../lib/dom.js';
import { cornellNotes, updateCornellField, addCornellRow, removeCornellRow, saveCornellSummary, clearCornellNotes } from '../state/notes.js';

export function renderNotes() {
  const notes = cornellNotes();
  setHtml('chBody',
    '<p class="dim">Cornell-notities: schrijf rechts je aantekeningen, en zet er links een kernwoord of vraag bij. '
    + 'Vat onderaan in eigen woorden samen. Wordt automatisch bewaard op dit toestel.</p>'
    + '<div class="cornell-wrap" id="cornellWrap"></div>'
    + '<button class="bt gh" onclick="addNoteRow()">+ Rij toevoegen</button>'
    + '<div class="cornell-sam"><label>Samenvatting in eigen woorden</label>'
    + '<textarea class="groot-veld" id="cornellSam" oninput="saveNoteSummary(this.value)" placeholder="Vat dit hoofdstuk in een paar zinnen samen…">'
    + escapeHtml(notes.summary) + '</textarea></div>'
    + '<div class="bar"><button class="bt" onclick="window.print()"><span class="icon icon-printer" aria-hidden="true"></span> Print / exporteer als PDF</button>'
    + '<button class="bt gh" onclick="clearNotes()">Wis mijn notities voor dit hoofdstuk</button></div>');
  drawNoteRows(notes.rows);
}

function drawNoteRows(rows) {
  setHtml('cornellWrap', rows.map((row, i) =>
    '<div class="cornell-row">'
    + '<textarea class="cornell-cue" oninput="updateNoteField(' + i + ',\'cue\',this.value)" placeholder="Kernwoord / vraag">' + escapeHtml(row.cue) + '</textarea>'
    + '<textarea class="cornell-note" oninput="updateNoteField(' + i + ',\'notes\',this.value)" placeholder="Aantekening">' + escapeHtml(row.notes) + '</textarea>'
    + (rows.length > 1 ? '<button class="cornell-del" onclick="removeNoteRow(' + i + ')" aria-label="Rij verwijderen">✕</button>' : '<span></span>')
    + '</div>',
  ).join(''));
}

export function updateNoteField(rowIndex, field, value) {
  updateCornellField(rowIndex, field, value);
}

export function addNoteRow() {
  drawNoteRows(addCornellRow());
}

export function removeNoteRow(rowIndex) {
  drawNoteRows(removeCornellRow(rowIndex));
}

export function saveNoteSummary(value) {
  saveCornellSummary(value);
}

export function clearNotes() {
  if (!confirm('Weet je zeker dat je je notities voor dit hoofdstuk wilt wissen?')) return;
  clearCornellNotes();
  renderNotes();
}
