// Button.tsx (合并优化版)
import { computed, defineComponent, type ExtractPropTypes, type PropType } from 'vue'
import 'virtual:uno.css'

// 类型定义与老师的版本保持一致
export type ButtonSize = 'small' | 'medium' | 'large'
export type ButtonColor =
  | 'black' | 'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink'

// 采用老师版本更规范的 props 定义方式
// 这样做的好处是 props 的定义更集中，并且可以轻松地导出 props 类型
export const buttonProps = {
  size: {
    type: String as PropType<ButtonSize>,
    default: 'medium',
  },
  color: {
    type: String as PropType<ButtonColor>,
    default: 'blue',
  },
  round: {
    type: Boolean,
    default: false,
  },
  plain: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: '',
  },
} as const // 使用 'as const' 是一个很好的实践，可以帮助 TypeScript 推断出更精确的类型

// 使用 ExtractPropTypes 自动从 props 定义中提取类型
export type ButtonProps = ExtractPropTypes<typeof buttonProps>

export default defineComponent({
  // 保留你自己的组件名
  name: 'SButton',

  // 应用上面定义好的 props
  props: buttonProps,

  // setup 函数中的所有逻辑都完整保留你自己的版本，因为这部分是你的核心实现和优化
  setup(props, { slots }) {
    const colorClass = {
      black: 'bg-black-500 hover:bg-black-400 border-black-500 text-white',
      gray: 'bg-gray-500 hover:bg-gray-400 border-gray-500 text-white',
      red: 'bg-red-500 hover:bg-red-400 border-red-500 text-white',
      yellow: 'bg-yellow-500 hover:bg-yellow-400 border-yellow-500 text-white',
      green: 'bg-green-500 hover:bg-green-400 border-green-500 text-white',
      blue: 'bg-blue-500 hover:bg-blue-400 border-blue-500 text-white',
      indigo: 'bg-indigo-500 hover:bg-indigo-400 border-indigo-500 text-white',
      purple: 'bg-purple-500 hover:bg-purple-400 border-purple-500 text-white',
      pink: 'bg-pink-500 hover:bg-pink-400 border-pink-500 text-white',
    }
    const plainColorClass = {
      black: 'bg-black-100 border-black-500 text-black-500',
      gray: 'bg-gray-100 border-gray-500 text-gray-500',
      red: 'bg-red-100 border-red-500 text-red-500',
      yellow: 'bg-yellow-100 border-yellow-500 text-yellow-500',
      green: 'bg-green-100 border-green-500 text-green-500',
      blue: 'bg-blue-100 border-blue-500 text-blue-500',
      indigo: 'bg-indigo-100 border-indigo-500 text-indigo-500',
      purple: 'bg-purple-100 border-purple-500 text-purple-500',
      pink: 'bg-pink-100 border-pink-500 text-pink-500',
    }
    const sizeClass = {
      small: 'py-1 px-2 text-sm',
      medium: 'py-1.5 px-3 text-base',
      large: 'py-2 px-4 text-lg',
    }

    // 你使用的 computed 写法性能更好，逻辑更清晰，予以保留
    const classes = computed(() => [
      'mx-1',
      'hover:scale-105',
      'transition duration-300 ease-in-out transform',
      'cursor-pointer',
      'border-solid',
      'inline-flex items-center justify-center', // 保留你添加的布局优化
      props.round ? 'rounded-full' : 'rounded-lg',
      props.plain ? plainColorClass[props.color] : colorClass[props.color],
      sizeClass[props.size],
    ].join(' '))

    // return 的 JSX 模板也完全保留你的版本，特别是对 icon 的处理非常精细
    return () => (
      <button class={classes.value}>
        {/* 保留你对 icon 间距的优化处理 */}
        {props.icon ? <i class={`i-ic-baseline-${props.icon} ${slots.default ? 'mr-1' : ''}`}></i> : ''}
        {slots.default ? slots.default() : ''}
      </button>
    )
  },
})
