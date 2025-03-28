import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {usePolling: true},
    proxy: {
      '/api': {
        target: 'http://localhost:6000/',
        changeOrigin: true
      }
    }
  }
})
