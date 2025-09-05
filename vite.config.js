import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001, // This will automatically increment if 3001 is in use
    strictPort: false, // Allow port to change if 3001 is in use
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // Changed to 5000 to match the new server port
        changeOrigin: true,
        secure: false,
      }
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  }
})