/* The escaping helpers are the only thing standing between database values
   (usernames, chat messages, error texts) and innerHTML. They must neutralise
   every character that can end an element or an attribute. */
import { describe, it, expect } from 'vitest';
import { escapeHtml, warningBox, isUuid, isIntegerId } from '../src/lib/dom.js';
import { normalizeInviteCode, normalizeUsername, usernameProblem, passwordProblem } from '../src/services/auth.js';

describe('escapeHtml', () => {
  it('escapes element and attribute delimiters', () => {
    expect(escapeHtml('<img src=x onerror="alert(1)">')).toBe('&lt;img src=x onerror=&quot;alert(1)&quot;&gt;');
    expect(escapeHtml("x' onmouseover='alert(1)")).toBe('x&#39; onmouseover=&#39;alert(1)');
    expect(escapeHtml('a & b')).toBe('a &amp; b');
  });

  it('turns null/undefined into an empty string', () => {
    expect(escapeHtml(null)).toBe('');
    expect(escapeHtml(undefined)).toBe('');
  });

  it('wraps error text safely', () => {
    expect(warningBox('<b>x</b>')).toBe('<div class="call warn">&lt;b&gt;x&lt;/b&gt;</div>');
  });
});

describe('ids allowed inside inline handlers', () => {
  it('accepts only real uuids and integers', () => {
    expect(isUuid('123e4567-e89b-12d3-a456-426614174000')).toBe(true);
    expect(isUuid("123e4567-e89b-12d3-a456-426614174000')alert(1)")).toBe(false);
    expect(isIntegerId('42')).toBe(true);
    expect(isIntegerId("42')")).toBe(false);
  });
});

describe('account input rules', () => {
  it('normalises invite codes', () => {
    expect(normalizeInviteCode('abcd-efgh')).toBe('ABCD-EFGH');
    expect(normalizeInviteCode(' ab cd ef gh ')).toBe('ABCDEFGH'.slice(0, 4) + '-' + 'ABCDEFGH'.slice(4));
    expect(normalizeInviteCode('short')).toBe('');
    expect(normalizeInviteCode('abcd-efgh-x')).toBe('');
  });

  it('rejects usernames that could be used for injection or look-alikes', () => {
    expect(usernameProblem('fin')).toBeNull();
    expect(usernameProblem('Fin123')).toBeNull();          // normalised to lowercase
    expect(usernameProblem('<script>')).not.toBeNull();
    expect(usernameProblem('Fіn')).not.toBeNull();         // Cyrillic і
    expect(usernameProblem('ab')).not.toBeNull();
    expect(normalizeUsername('  Fin ')).toBe('fin');
  });

  it('requires 8-character passwords', () => {
    expect(passwordProblem('1234567')).not.toBeNull();
    expect(passwordProblem('12345678')).toBeNull();
  });
});
