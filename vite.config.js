import { defineConfig } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';

/* `npm run build`        -> dist/         (static site, hashed assets)
   `npm run build:single` -> dist-single/  (one self-contained index.html to share by mail) */
export default defineConfig(({ mode }) => {
  const single = mode === 'single';
  return {
    // Relative asset URLs so the build works from any sub-path (GitHub Pages) or a local folder.
    base: './',
    plugins: single ? [viteSingleFile()] : [],
    build: {
      outDir: single ? 'dist-single' : 'dist',
      emptyOutDir: true,
      // Chapter content is split per chapter and fetched per book when a student opens it
      // (src/content/loader.js), so no chunk should come near this. If one does, content
      // has leaked back into the main bundle.
      chunkSizeWarningLimit: 500,
    },
    test: {
      environment: 'node',
      include: ['tests/**/*.test.js'],
    },
  };
});
