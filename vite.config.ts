import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/WebGL-app/",
  plugins: [svelte()],
  resolve:{
    alias:{
      $canvas: path.resolve('./src/lib/canvas'),
      $item: path.resolve('./src/lib/item'),
      $light: path.resolve('./src/lib/light'),
      $model: path.resolve('./src/lib/model'),
      $shader: path.resolve('./src/lib/shader'),
      $scene: path.resolve('./src/lib/scene'),
      $utils: path.resolve('./src/lib/utils'),

      $asset: path.resolve('./src/asset'),
      $image: path.resolve('./src/asset/image'),
      $components: path.resolve('./src/asset/components'),
    }
  }
})
