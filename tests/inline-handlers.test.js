/* Every function called from an inline `on*="..."` attribute (in index.html or
   in the HTML templates the UI modules build) must be exported through
   src/ui/globals.js, otherwise the click silently does nothing in the browser. */
import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const JS_KEYWORDS = new Set(['if', 'else', 'for', 'while', 'return', 'function', 'switch', 'typeof']);

function listJsFiles(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== 'subjects') out.push(...listJsFiles(full));
    } else if (entry.name.endsWith('.js')) {
      out.push(full);
    }
  }
  return out;
}

function handlerCalls(source) {
  const names = new Set();
  for (const attr of source.matchAll(/\bon\w+="([^"]*)"/g)) {
    for (const call of attr[1].matchAll(/(?<![\w.])([A-Za-z_]\w*)\(/g)) {
      if (!JS_KEYWORDS.has(call[1])) names.add(call[1]);
    }
  }
  return names;
}

function exportedGlobals() {
  const source = fs.readFileSync(path.join(root, 'src', 'ui', 'globals.js'), 'utf8');
  const block = source.match(/export const globalHandlers = \{([\s\S]*?)\n\};/);
  expect(block, 'globalHandlers object literal').not.toBeNull();
  return new Set(block[1].split(/[\s,]+/).filter(Boolean));
}

describe('inline event handlers', () => {
  const globalsSet = exportedGlobals();
  const sources = [path.join(root, 'index.html'), ...listJsFiles(path.join(root, 'src'))];

  for (const file of sources) {
    it(path.relative(root, file).replace(/\\/g, '/') + ' only calls exported handlers', () => {
      const missing = [...handlerCalls(fs.readFileSync(file, 'utf8'))].filter((n) => !globalsSet.has(n));
      expect(missing).toEqual([]);
    });
  }
});
