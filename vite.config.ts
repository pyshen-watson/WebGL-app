import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  resolve:{
    alias:{
      $repo: path.resolve('./src/lib/repo'),
      $class: path.resolve('./src/lib/class'),
      $utils: path.resolve('./src/lib/utils'),
      $shader: path.resolve('./src/asset/shader'),
      $components: path.resolve('./src/asset/components'),
    }
  }
})
