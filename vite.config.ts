import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Separar React y ReactDOM
          'react-vendor': ['react', 'react-dom'],
          // Separar Radix UI components
          'radix-vendor': [
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-tooltip',
            '@radix-ui/react-toast',
            '@radix-ui/react-dialog',
            '@radix-ui/react-slot'
          ],
          // Separar librerías de animación
          'animation-vendor': ['motion'],
          // Separar React Query
          'query-vendor': ['@tanstack/react-query'],
          // Separar router
          'router-vendor': ['react-router-dom'],
          // Separar utilidades
          'utils-vendor': ['clsx', 'tailwind-merge', 'class-variance-authority']
        }
      }
    },
    // Aumentar el límite de advertencia (opcional)
    chunkSizeWarningLimit: 1000
  }
}));
