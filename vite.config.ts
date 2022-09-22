import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  resolve:{
    alias:{
      $type: path.resolve('./src/lib/type'),
      $class: path.resolve('./src/lib/class'),
      $store: path.resolve('./src/lib/store'),
    }
  }
})
