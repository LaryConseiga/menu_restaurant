import { defineConfig } from 'vite'
//import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  server: {
    proxy: {
      // Même origine en dev → évite les soucis CORS / résolution localhost (IPv4/IPv6)
      "/api": {
        target: "http://127.0.0.1:8000",
        changeOrigin: true,
        timeout: 60_000,
      },
    },
  },
})