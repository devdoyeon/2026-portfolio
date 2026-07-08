import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcPath = path.resolve(__dirname, 'src');

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.otf'],
  resolve: {
    dedupe: ['react', 'react-dom'],
    alias: {
      components: path.resolve(srcPath, 'components'),
      pages: path.resolve(srcPath, 'pages'),
      data: path.resolve(srcPath, 'data'),
      hooks: path.resolve(srcPath, 'hooks'),
    },
  },
});
