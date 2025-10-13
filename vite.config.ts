/// <reference types="vitest/config" />
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'

const rollupOptions = {
  external: ['vue', 'vue-router'],
  output: {
    globals: {
      vue: 'Vue',
    },
  },
}

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    UnoCSS(),
  ],

  // ✅ 这是根据作业文档要求更新的 build 配置
  build: {
    rollupOptions,
    minify: 'terser',
    sourcemap: true,
    reportCompressedSize: true,
    cssCodeSplit: true,
    lib: {
      entry: './src/entry.ts',
      name: 'SSYUI',
      fileName: 'ssy-ui',
      formats: ['es', 'umd', 'iife'],
    },
  },

  // ✅ 这是从您原来配置中恢复的 resolve.alias 配置
  resolve: {
    alias: {
      // 把 "vue" 指向包含编译器的版本
      vue: 'vue/dist/vue.esm-bundler.js',
    },
  },

  // ✅ 这是从您原来配置中保留的 test 配置
  test: {
    globals: true,
    environment: 'happy-dom',
  },
})
