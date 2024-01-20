/// <reference types="vitest" />

import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

export default defineConfig({
  css: {
    postcss: './config/postcss.config.js',
  },
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['**/?(*.)test.ts?(x)'],
    setupFiles: ['./tests/setup.ts'],
  },
});
