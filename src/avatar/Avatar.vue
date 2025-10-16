<script lang="ts" setup>
import { computed } from 'vue' // ✨ 1. 首先，从 vue 导入 computed
import { avatarProps } from './avatar'

defineOptions({
  name: 'SAvatar',
})

const props = defineProps(avatarProps)

// ✨ 2. 关键：创建一个 computed 属性，用来“翻译”尺寸
const sizeStyle = computed(() => {
  // 如果 size prop 是 'small', 'medium', 'large' 之一
  // 我们就把它翻译成具体的像素值
  // 否则，我们就认为它本身就是一个合法的 CSS 值 (比如 '50px')
  switch (props.size) {
    case 'small':
      return { width: '32px', height: '32px', fontSize: '16px' }
    case 'medium':
      return { width: '40px', height: '40px', fontSize: '20px' }
    case 'large':
      return { width: '48px', height: '48px', fontSize: '24px' }
    default:
      return {
        width: props.size,
        height: props.size,
        fontSize: `calc(${props.size} / 2)`,
      }
  }
})
</script>

<template>
  <!-- 使用一个 div 作为根元素 -->
  <div
    class="s-avatar inline-flex flex-shrink-0 items-center justify-center overflow-hidden whitespace-nowrap bg-gray-300 text-white leading-none font-sans"
    :class="{
      'rounded-full': props.shape === 'circle',
      'rounded-lg': props.shape !== 'circle',
    }"
    :style="sizeStyle"
  >
    <img
      v-if="props.src"
      :src="props.src"
      alt="avatar"
      class="h-full w-full object-cover"
    >
    <span v-else class="scale-75 transform">
      <slot />
    </span>
  </div>
</template>
