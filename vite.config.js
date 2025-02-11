import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/modulo-3-evaluacion-final-celia-r-revert/",
  plugins: [react()],
  server: {
    open: "/index.html",
    watch: {
      usePolling: true
    }
  },
})
