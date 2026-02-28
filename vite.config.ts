import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 3000,
  },
  plugins: [
    react(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@features": path.resolve(__dirname, "./src/features"),
      "@shared": path.resolve(__dirname, "./src/shared"),
      "@infrastructure": path.resolve(__dirname, "./src/infrastructure"),
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
