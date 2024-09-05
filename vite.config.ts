import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/o/train-tracker-web',
  build: {
    outDir: './vite-build',
  },
  plugins: [tsconfigPaths(),react()],
})
