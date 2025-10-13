// Button.tsx (最终精修版)
import { computed, defineComponent, type PropType } from 'vue'
import 'virtual:uno.css'

export type ButtonSize = 'small' | 'medium' | 'large'
export type ButtonColor =
  | 'black' | 'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink'

export default defineComponent({
  name: 'SButton',
  props: {
    size: {
      type: String as PropType<ButtonSize>,
      default: 'medium',
    },
    color: {
      type: String as PropType<ButtonColor>,
      default: 'blue',
    },
    round: Boolean,
    plain: Boolean,
    icon: {
      type: String,
      default: '',
    },
  },
  setup(props, { slots }) {
    const colorClass = {
      // ... 颜色定义部分保持不变 ...
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
      // ... plain 颜色定义部分保持不变 ...
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

    const classes = computed(() => [
      'mx-1',
      'hover:scale-105',
      'transition duration-300 ease-in-out transform',
      'cursor-pointer',
      'border-solid',
      'inline-flex items-center justify-center', // ✅ 新增：让内部元素垂直居中
      props.round ? 'rounded-full' : 'rounded-lg',
      props.plain ? plainColorClass[props.color] : colorClass[props.color],
      sizeClass[props.size],
    ].join(' '))

    return () => (
      <button class={classes.value}>
        {/* ✅ 核心修复：移除了图标上的 p-3，并添加了与文字的间距 */}
        {props.icon ? <i class={`i-ic-baseline-${props.icon} ${slots.default ? 'mr-1' : ''}`}></i> : ''}
        {slots.default ? slots.default() : ''}
      </button>
    )
  },
})
