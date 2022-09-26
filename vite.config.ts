import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  resolve:{
    alias:{
      $class: path.resolve('./src/lib/class'),
      $store: path.resolve('./src/lib/store'),
      $shader: path.resolve('./src/asset/shader'),
      $utils: path.resolve('./src/lib/utils'),
      $components: path.resolve('./src/asset/components'),
    }
  }
})
