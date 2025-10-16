// src/plugins.ts (最终的、类型精确版本)

import type { App } from 'vue'

import Avatar from './avatar'
import Button from './button'
import Link from './link'

// 我们自己定义一个清晰的插件类型
// 它就是一个带有 install 方法的对象
export interface UIPlugin {
  install: (app: App) => void
}

// 我们导出的数组，是这个我们自己定义的类型
export default [
  Button,
  Link,
  Avatar,
] as unknown as UIPlugin[]
