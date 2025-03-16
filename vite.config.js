import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.jpg', '**/*.JPG', '**/lyzhia.JPG'],

  build: {
    rollupOptions: {
      external: [/\.JPG$/] // Treat JPG files as external resources
    },
    // Ensure proper bundling
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    // Make sure Yup is included in the bundle
  },
  optimizeDeps: {
    include: ['yup'] // Force Vite to pre-bundle yup
  }
})