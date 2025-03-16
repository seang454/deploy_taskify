// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   assetsInclude: ['**/*.JPG'],
//   plugins: [
//     react()],
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  assetsInclude: ['**/*.JPG'],
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['yup']
    }
  }
})