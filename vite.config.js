import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { PiX } from 'react-icons/pi'

// https://vite.dev/config/
export default defineConfig({
  theme: {
    screens: {
     // esm: "320px",
      xsm: "480px",
      sm:"640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl":"1536px"
    
    },
    extend: {},
  },
  plugins: [react(), tailwindcss()],
})
