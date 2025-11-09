import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      buffer: 'buffer/' // Polyfill para Buffer en el navegador
    }
  },
  define: {
    'global': 'globalThis', // Polyfill para global
  },
  assetsInclude: ['**/*.md'] // Permitir importar archivos .md
})
