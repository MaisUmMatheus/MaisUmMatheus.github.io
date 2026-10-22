import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Repositório MaisUmMatheus.github.io: o site fica na raiz do domínio, então base = '/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
});
