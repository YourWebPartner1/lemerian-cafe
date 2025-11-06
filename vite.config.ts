import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/lemerian-cafe/', // 👈 important for GitHub Pages
})
