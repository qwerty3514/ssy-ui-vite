// eslint.config.mjs
import antfu from '@antfu/eslint-config'

export default antfu({
  // 启用 UnoCSS 规则
  unocss: true,

  // 启用 Vue 规则
  vue: true,

  // 启用 TypeScript 规则
  typescript: true,

  // 在 Flat 配置中，' .eslintignore ' 不再生效，请在这里添加需要忽略的文件夹
  // 这里的意思是忽略所有名为 "test" 的文件夹
  ignores: [
    '**/test', // ✅ 已修正: 将双引号改为了单引号
  ],

  // 这个选项会关闭一些 Anthony Fu (作者) 个人偏好中比较固执的规则，让配置更通用
  lessOpinionated: true,

  // 启用对 CSS 和 HTML 文件的格式化功能
  formatters: {
    css: true,
    html: true,
  },
})
