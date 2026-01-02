import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  theme: {
    screens: {
      esm: "320px",
      sm: "480px",
     // esm: "320px",
      xsm: "480px",
      sm:"640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    
    },
    extend: {},
  },
  plugins: [react(), tailwindcss()],
})
