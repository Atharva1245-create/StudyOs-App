import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'StudyOs Productivity App',
        short_name: 'StudyOs',
        description: 'Frontend Student Productivity Tool',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'https://cdn-icons-png.flaticon.com/512/3596/3596080.png', // Temporary App Icon
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'https://cdn-icons-png.flaticon.com/512/3596/3596080.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
})