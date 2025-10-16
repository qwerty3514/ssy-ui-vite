// src/avatar/index.ts (最终版)

import type { App } from 'vue'
import _Avatar from './Avatar.vue' // ✨ 我们导入的是 .vue 文件本身

// 我们也从 avatar.ts 中导出 props 和 types，方便库的使用者
export { avatarProps } from './avatar'
export type { AvatarProps } from './avatar'

// 直接给导入的 .vue 组件对象添加 install 方法
_Avatar.install = (app: App) => {
  // 注册的组件名是 'SAvatar'，以匹配 demo
  app.component('SAvatar', _Avatar)
}

// 进行具名导出，供 src/plugins.ts 使用
export const Avatar = _Avatar

// 进行默认导出，供 demo 页面使用
export default _Avatar

// 类型声明
declare module 'vue' {
  export interface GlobalComponents {
    SAvatar: typeof _Avatar
  }
}
