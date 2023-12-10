import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsConfigPaths from 'vite-tsconfig-paths'
import autoprefixer from 'autoprefixer'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsConfigPaths()],
  server: {
    port: 3000,
  },
  preview: {
    port: 8080,
  },
  css: {
    postcss: {
      plugins: [autoprefixer({})],
    },
  },
})
