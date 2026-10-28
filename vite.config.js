import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        food: resolve(__dirname, 'pages/food.html'),
        foodDetail: resolve(__dirname, 'pages/food-detail.html'),
        travel: resolve(__dirname, 'pages/travel.html'),
        travelDetail: resolve(__dirname, 'pages/travel-detail.html'),
        contact: resolve(__dirname, 'pages/contact.html'),
        mienbac: resolve(__dirname, 'pages/mienbac.html'),
        mientrung: resolve(__dirname, 'pages/mientrung.html'),
        miennam: resolve(__dirname, 'pages/miennam.html'),
        bvnb: resolve(__dirname, 'pages/BVNB.html')
      }
    }
  }
});
