import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite config for production build and development
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',  // Ensure the build assets go to 'dist'
  },
  server: {
    proxy: {
      '/api': 'http://localhost:5000',  // Proxy to local backend during development
    },
  },
});
