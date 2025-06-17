import { defineConfig } from 'vite'
import plugin from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [plugin()],
  css: {
        preprocessorOptions: {
          scss: {
            api: 'modern-compiler',
          },
        },
      },
})
