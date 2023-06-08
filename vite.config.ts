import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import {VitePWA} from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [solidPlugin(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions:{
        enabled:true
      },
      manifest: {
        name:'SolidJS',
        short_name: 'SolidJS',
        theme_color: '#000',
        start_url: '/',
        display: 'standalone',
        background_color: '#000',
        icons: [
          {
            src: '/image/solid.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/image/solid.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    })
    ],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});
