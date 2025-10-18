/// <reference types="vitest/config" />
import type { BuildOptions } from 'vite'
import path, { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'

const rollupOptions: BuildOptions['rollupOptions'] = {
  external: ['vue', 'vue-router'],
  output: {
    globals: {
      'vue': 'Vue',
      'vue-router': 'VueRouter',
    },
    exports: 'named',
  },
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    UnoCSS(),
  ],
  server: { // 保留 server 授权，这依然是必须的
    fs: {
      allow: ['../../'],
    },
  },
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.esm-bundler',
      '@': path.resolve(__dirname, 'src'),
      '~': path.resolve(__dirname, 'dist'),
    },
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    coverage: {
      provider: 'istanbul', // or 'v8',
      reporter: ['text', 'json', 'html'],
      include: ['src/**/*.ts', 'src/**/*.tsx'], // 指定你要测试的文件路径
      exclude: ['src/*.ts', 'src/utils/**'], // 指定你要忽略的文件路径
    },
  },

  // build 部分恢复为最简单的全量打包模式
  build: {
    rollupOptions,
    minify: 'terser',
    sourcemap: false,
    reportCompressedSize: true,
    cssCodeSplit: true,
    lib: {
      entry: resolve(__dirname, 'src/entry.ts'),
      name: 'SSYUI',
      fileName: 'ssy-ui',
      formats: ['es', 'umd'],
    },
  },
})
