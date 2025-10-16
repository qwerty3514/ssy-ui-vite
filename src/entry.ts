// import type { App } from 'vue'
// import SButton from './button/Button'
// import SFCButton from './SFCButton.vue'
// import TSXButton from './TSXButton'
// import 'uno.css'
// // 导出单独组件
// export { SButton, SFCButton, TSXButton }

// // 编写一个插件，实现一个 install 方法
// export default {
//   install(app: App): void {
//     app.component('SButton', SButton)
//     app.component('SFCButton', SFCButton)
//     app.component('TSXButton', TSXButton)
//   },
// }

// src/entry.ts (最终的、无 TypeScript 错误版本)

// src/entry.ts (最终的、使用自定义类型的版本)

import type { App } from 'vue'
import { version } from '../package.json'
// ✨ 关键修正：同时导入默认导出的数组和我们自己定义的类型
import plugins, { type UIPlugin } from './plugins'
import 'virtual:uno.css'

export * from './avatar'
export * from './button'
export * from './link'

export default {
  install(app: App) {
    // ✨ 关键修正：现在 c 的类型是我们自己定义的、清晰的 UIPlugin
    plugins.forEach((c: UIPlugin) => app.use(c))
  },
  version,
}
