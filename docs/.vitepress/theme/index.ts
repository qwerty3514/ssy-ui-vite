import type { EnhanceAppContext } from 'vitepress' // 1. 从 'vitepress' 导入 EnhanceAppContext 类型
// 插件的组件，主要是demo组件
import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue'

import Theme from 'vitepress/theme'
import SSYUI from '../../../src/entry'
// 主题样式
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'

export default {
  ...Theme,
  // 2. 为 enhanceApp 的参数添加类型注解
  enhanceApp({ app }: EnhanceAppContext) {
    app.use(SSYUI)
    app.component('Demo', Demo)
    app.component('DemoBlock', DemoBlock)
  },
}
