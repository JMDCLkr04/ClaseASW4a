import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/ClaseASW4a/', // <- Muy importante para GitHub Pages
  plugins: [tailwindcss()],
})
