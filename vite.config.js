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
      // All chapter content is bundled into the app (~4 MB, ~1 MB gzipped); that is intentional
      // so the site works offline after the first visit.
      chunkSizeWarningLimit: 6000,
    },
    test: {
      environment: 'node',
      include: ['tests/**/*.test.js'],
    },
  };
});
