// src/button/index.ts (同时支持具名导出和默认导出的最终版)

import type { App } from 'vue'
import _Button from './Button'

export { buttonProps } from './Button'
export type { ButtonColor, ButtonProps, ButtonSize } from './Button'

_Button.install = (app: App) => {
  app.component('SButton', _Button)
}

// ✨ 关键修正 1: 添加这一行，进行具名导出，给 plugins.ts 使用
export const Button = _Button

// ✨ 关键修正 2: 默认导出的也是同一个对象，给 demo 页面使用
export default _Button

declare module 'vue' {
  export interface GlobalComponents {
    SButton: typeof _Button
  }
}
