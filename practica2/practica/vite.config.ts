import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/master/', // <- Muy importante para GitHub Pages
  plugins: [tailwindcss()],
})
