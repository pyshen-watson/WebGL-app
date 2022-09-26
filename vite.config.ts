import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  resolve:{
    alias:{
      $utils: path.resolve('./src/lib/utils'),
      $store: path.resolve('./src/lib/store'),
      $shader: path.resolve('./src/asset/shader'),
      $components: path.resolve('./src/asset/components'),
    }
  }
})
