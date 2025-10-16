import type { InlineConfig } from 'vite'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import fs from 'fs-extra'
import UnoCSS from 'unocss/vite'
import { build } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// 全量打包 + 按需打包
const buildAll = async () => {
  console.log('Building full bundle...')
  // 1. 先执行一次完整的全量打包，这会生成全量的 JS 和一个包含所有样式的 style.css
  await build({
    // 我们在这里直接定义配置，不再依赖 vite.config.js 来避免混淆
    configFile: false, // 禁用默认配置文件
    build: {
      lib: {
        entry: path.resolve(__dirname, '../src/entry.ts'),
        name: 'SSYUI',
        fileName: 'ssy-ui',
        formats: ['es', 'umd'],
      },
      rollupOptions: {
        external: ['vue', 'vue-router'],
        output: {
          globals: {
            'vue': 'Vue',
            'vue-router': 'VueRouter',
          },
          interop: 'auto',
          exports: 'named',
        },
      },
      outDir: 'dist',
    },
    plugins: [vue(), vueJsx(), UnoCSS()],
  })
  console.log('Full bundle built.')

  console.log('Building individual components...')
  // 2. 循环遍历所有组件，为它们单独打包
  const srcDir = path.resolve(__dirname, '../src/')
  const componentDirs = fs.readdirSync(srcDir).filter((name) => {
    const componentDir = path.resolve(srcDir, name)
    const isDir = fs.lstatSync(componentDir).isDirectory()
    return isDir && fs.readdirSync(componentDir).includes('index.ts')
  })

  for (const name of componentDirs) {
    const outDir = path.resolve('./dist', name)
    const entry = path.resolve(srcDir, name, 'index.ts')

    console.log(`Building component: ${name}`)

    // ✨ 关键修正：为每个组件的打包都传入包含 vue 和 unocss 的插件配置 ✨
    await build({
      configFile: false, // 禁用默认配置文件
      publicDir: false,
      plugins: [vue(), vueJsx(), UnoCSS()], // ✨ 必须在这里也加入插件 ✨
      build: {
        lib: {
          entry,
          name, // 导出模块名
          fileName: format => `index.umd.${format === 'umd' ? 'cjs' : 'js'}`,
          formats: [`es`, `umd`], // 保留 umd 以匹配 demo
        },
        rollupOptions: {
          external: ['vue'], // 按需包只需排除 vue
          output: {
            globals: {
              vue: 'Vue',
            },
            // ✨ 关键修正：确保每个组件的 CSS 都输出到自己的目录 ✨
            assetFileNames: `index.[ext]`,
          },
        },
        outDir,
      },
    } as InlineConfig)
    console.log(`Component ${name} built.`)
  }
  console.log('Individual components built.')
}

buildAll()
