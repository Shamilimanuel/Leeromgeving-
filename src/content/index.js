/* Loads every subject and chapter module. Each module registers itself in the
   registry as a side effect of being imported, so adding a chapter file under
   `subjects/` is all that is needed to make it appear on the site. */
import.meta.glob('./subjects/**/*.js', { eager: true });

export * from './registry.js';
export * from './structure.js';
