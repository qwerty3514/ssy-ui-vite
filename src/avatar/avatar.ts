// src/avatar/avatar.ts (最终的、最纯粹版本)

import type { ExtractPropTypes, PropType } from 'vue'

export const avatarProps = {
  shape: {
    type: String as PropType<'circle' | 'square'>,
    default: 'circle',
  },
  size: {
    type: String as PropType<'small' | 'medium' | 'large'>,
    default: 'medium',
  },
  src: {
    type: String,
    default: '',
  },
} as const

// ✨ 核心：我们只导出 props 的运行时定义和从它推断出的类型
export type AvatarProps = ExtractPropTypes<typeof avatarProps>
