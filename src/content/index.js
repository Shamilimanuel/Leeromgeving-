/* Loads the book registries up front: `subjects/<subject>/<subject>.js`, the
   titles and chapter lists of every book, a few kB in total. Chapter modules
   are not loaded here; `loader.js` fetches them per book when a student opens
   one. Each module registers itself in the registry as a side effect of being
   imported, so adding a file under `subjects/` is still all that is needed to
   make it appear on the site. */
import.meta.glob('./subjects/*/*.js', { eager: true });

export * from './registry.js';
export * from './structure.js';
export * from './loader.js';
