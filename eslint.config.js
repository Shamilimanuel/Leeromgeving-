import js from '@eslint/js';
import globals from 'globals';

export default [
  {
    ignores: ['dist/**', 'dist-single/**', 'node_modules/**', 'supabase/**'],
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
    files: ['tests/**/*.js', '*.config.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      // tests/app.test.js runs in jsdom, hence the browser globals as well
      globals: { ...globals.node, ...globals.browser },
    },
  },
];
