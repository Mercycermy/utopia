import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', // keep this as '/' for Render!
  plugins: [react()],
  server: {
    host: true,
  },
})
