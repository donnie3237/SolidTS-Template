/// <reference types="vitest" />
/// <reference types="vite/client" />
// 👆 do not forget to add the references above 
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3001,
  },
  build: {
    target: 'esnext',
  },
  test:{
    environment: 'jsdom',
    globals: true,
    transformMode: { web: [/\.[jt]sx?$/] },
  }
});