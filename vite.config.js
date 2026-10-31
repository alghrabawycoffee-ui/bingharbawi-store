import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚠️ غيّر "bingharbawi-store" لاسم الريبو بتاعك بالظبط
export default defineConfig({
  plugins: [react()],
  base: '/bingharbawi-store/',
})
