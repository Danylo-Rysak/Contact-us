import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: [
      {
        find: 'assets',
        replacement: fileURLToPath(new URL('./src/assets', import.meta.url)),
      },
      {
        find: 'components',
        replacement: fileURLToPath(new URL('./src/components', import.meta.url)),
      },
      {
        find: 'styles',
        replacement: fileURLToPath(new URL('./src/styles', import.meta.url)),
      },
      {
        find: 'utils',
        replacement: fileURLToPath(new URL('./src/utils', import.meta.url)),
      },
    ],
  },
});
