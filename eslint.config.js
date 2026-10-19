import js from '@eslint/js';
import globals from 'globals';

export default [
  {
    // Reference/ holds the textbook scans and stale working copies (gitignored).
    ignores: ['dist/**', 'dist-single/**', 'node_modules/**', 'supabase/**', 'Reference/**'],
  },
  js.configs.recommended,
  {
    files: ['src/**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: { ...globals.browser },
    },
  },
  {
    files: ['public/sw.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'script',
      globals: { ...globals.serviceworker },
    },
  },
  {
    // Node scripts run from npm (npm run tasks).
    files: ['scripts/**/*.mjs'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: { ...globals.node },
    },
  },
  {
    files: ['tests/**/*.js', '*.config.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      // tests/app.test.js runs in jsdom, hence the browser globals as well
      globals: { ...globals.node, ...globals.browser },
    },
  },
];
