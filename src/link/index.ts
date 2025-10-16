// src/link/index.ts (修正后，与 button 逻辑完全一致)

import type { App } from 'vue'
import _Link from './Link'

// 导出 props 和 types (保持不变)
export { linkProps } from './Link'
export type { LinkColor, LinkProps, LinkSize } from './Link'

// 1. ✨ 核心修正：直接给原始的 _Link 组件对象添加 install 方法
_Link.install = (app: App) => {
  // 告诉 Vue，当被 use 时，注册一个名为 'SLink' 的全局组件
  app.component('SLink', _Link)
}

// 2. ✨ 关键：进行具名导出，供 src/plugins.ts 使用
export const Link = _Link

// 3. ✨ 关键：进行默认导出，供未来的 demo/link.html 等文件使用
export default _Link

// 4. 类型声明部分
declare module 'vue' {
  export interface GlobalComponents {
    // 这里的 SLink 与 app.component('SLink', ...) 的名字完美匹配
    SLink: typeof _Link
  }
}
