import { defineComponent as d, computed as g, createVNode as o } from "vue";
const a = {
  size: {
    type: String,
    default: "medium"
  },
  color: {
    type: String,
    default: "blue"
  },
  round: {
    type: Boolean,
    default: !1
  },
  plain: {
    type: Boolean,
    default: !1
  },
  icon: {
    type: String,
    default: ""
  }
}, t = /* @__PURE__ */ d({
  // 保留你自己的组件名
  name: "SButton",
  // 应用上面定义好的 props
  props: a,
  // setup 函数中的所有逻辑都完整保留你自己的版本，因为这部分是你的核心实现和优化
  setup(e, {
    slots: r
  }) {
    const l = {
      black: "bg-black-500 hover:bg-black-400 border-black-500 text-white",
      gray: "bg-gray-500 hover:bg-gray-400 border-gray-500 text-white",
      red: "bg-red-500 hover:bg-red-400 border-red-500 text-white",
      yellow: "bg-yellow-500 hover:bg-yellow-400 border-yellow-500 text-white",
      green: "bg-green-500 hover:bg-green-400 border-green-500 text-white",
      blue: "bg-blue-500 hover:bg-blue-400 border-blue-500 text-white",
      indigo: "bg-indigo-500 hover:bg-indigo-400 border-indigo-500 text-white",
      purple: "bg-purple-500 hover:bg-purple-400 border-purple-500 text-white",
      pink: "bg-pink-500 hover:bg-pink-400 border-pink-500 text-white"
    }, n = {
      black: "bg-black-100 border-black-500 text-black-500",
      gray: "bg-gray-100 border-gray-500 text-gray-500",
      red: "bg-red-100 border-red-500 text-red-500",
      yellow: "bg-yellow-100 border-yellow-500 text-yellow-500",
      green: "bg-green-100 border-green-500 text-green-500",
      blue: "bg-blue-100 border-blue-500 text-blue-500",
      indigo: "bg-indigo-100 border-indigo-500 text-indigo-500",
      purple: "bg-purple-100 border-purple-500 text-purple-500",
      pink: "bg-pink-100 border-pink-500 text-pink-500"
    }, b = {
      small: "py-1 px-2 text-sm",
      medium: "py-1.5 px-3 text-base",
      large: "py-2 px-4 text-lg"
    }, i = g(() => [
      "mx-1",
      "hover:scale-105",
      "transition duration-300 ease-in-out transform",
      "cursor-pointer",
      "border-solid",
      "inline-flex items-center justify-center",
      // 保留你添加的布局优化
      e.round ? "rounded-full" : "rounded-lg",
      e.plain ? n[e.color] : l[e.color],
      b[e.size]
    ].join(" "));
    return () => o("button", {
      class: i.value
    }, [e.icon ? o("i", {
      class: `i-ic-baseline-${e.icon} ${r.default ? "mr-1" : ""}`
    }, null) : "", r.default ? r.default() : ""]);
  }
});
t.install = (e) => {
  e.component("SButton", t);
};
const p = t;
export {
  p as Button,
  a as buttonProps,
  t as default
};
