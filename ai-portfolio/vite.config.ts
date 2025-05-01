import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor bundles for better caching
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-motion': ['framer-motion'],
          'vendor-icons': ['react-icons'],
          'vendor-email': ['@emailjs/browser']
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    // Generate source map for better debugging
    sourcemap: true,
  },
  // Resolve aliases for cleaner imports
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  // Optimize for page load speed
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom']
  },
  // Set base path
  base: '/'
})
