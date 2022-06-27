import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://jhhg04.github.io/React-Fazt-RickAndMorty/',
  plugins: [react()],
});
