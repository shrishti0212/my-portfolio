import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.png', 'logo192.png', 'logo512.png'],
      manifest: {
        name: "Shrishti's Portfolio",
        short_name: "Portfolio",
        description: "Shrishti Mishra's developer portfolio showcasing projects and skills.",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#6a0dad",
        icons: [
          {
            src: "logo192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "logo512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      }
    })
  ]
});
