import { defineConfig } from 'vite'
import { createVuePlugin as vue } from "vite-plugin-vue2";
// @ts-ignore
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [vue({})],
  build: {
    lib: {
      entry: path.resolve(__dirname, './src/index.ts'),
      name: 'Test',
      fileName: (format) => `test.${format}.js`
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})