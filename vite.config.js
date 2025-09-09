import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  
  // Performance optimizations
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    
    // Code splitting optimization
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks for better caching
          vendor: ['react', 'react-dom'],
          antd: ['antd', '@ant-design/icons'],
          utils: ['axios']
        }
      }
    },
    
    // Compression và minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log in production
        drop_debugger: true
      }
    },
    
    // Source maps for debugging (disable in production)
    sourcemap: false,
    
    // Target modern browsers
    target: 'es2015',
    
    // Optimize chunk size
    chunkSizeWarningLimit: 1000
  },
  
  // Development server optimization
  server: {
    port: 3000,
    open: true,
    cors: true
  },
  
  // Path resolution for better imports
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
      '@services': fileURLToPath(new URL('./src/services', import.meta.url)),
      '@data': fileURLToPath(new URL('./src/data', import.meta.url)),
      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url))
    }
  },
  
  // Preview configuration
  preview: {
    port: 4173,
    open: true
  },
  
  // CSS optimization
  css: {
    devSourcemap: true
  }
})
