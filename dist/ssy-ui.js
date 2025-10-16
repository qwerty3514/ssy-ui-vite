import { defineComponent as d, computed as g, createElementBlock as u, openBlock as c, Fragment as p, createCommentVNode as x, createElementVNode as h, normalizeStyle as y, normalizeClass as m, createTextVNode as f, renderSlot as w, createVNode as n } from "vue";
const k = "1.0.2", v = {
  shape: {
    type: String,
    default: "circle"
  },
  size: {
    type: String,
    default: "medium"
  },
  src: {
    type: String,
    default: ""
  }
}, z = ["src"], o = /* @__PURE__ */ d({
  name: "SAvatar",
  __name: "Avatar",
  props: v,
  setup(e) {
    const t = e, r = g(() => {
      switch (t.size) {
        case "small":
          return { width: "32px", height: "32px", fontSize: "16px" };
        case "medium":
          return { width: "40px", height: "40px", fontSize: "20px" };
        case "large":
          return { width: "48px", height: "48px", fontSize: "24px" };
        default:
          return {
            width: t.size,
            height: t.size,
            fontSize: `calc(${t.size} / 2)`
          };
      }
    });
    return (s, l) => (c(), u(
      p,
      null,
      [
        x(" 使用一个 div 作为根元素 "),
        h(
          "div",
          {
            class: m(["s-avatar inline-flex flex-shrink-0 items-center justify-center overflow-hidden whitespace-nowrap bg-gray-300 text-white leading-none", {
              "rounded-full": t.shape === "circle",
              "rounded-lg": t.shape !== "circle"
            }]),
            style: y(r.value)
          },
          [
            l[0] || (l[0] = f(
              " > ",
              -1
              /* CACHED */
            )),
            t.src ? (c(), u("img", {
              key: 0,
              src: t.src,
              alt: "avatar",
              class: "h-full w-full object-cover"
            }, null, 8, z)) : w(s.$slots, "default", { key: 1 })
          ],
          6
          /* CLASS, STYLE */
        )
      ],
      2112
      /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
    ));
  }
});
o.install = (e) => {
  e.component("SAvatar", o);
};
const _ = o, S = {
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
}, i = /* @__PURE__ */ d({
  // 保留你自己的组件名
  name: "SButton",
  // 应用上面定义好的 props
  props: S,
  // setup 函数中的所有逻辑都完整保留你自己的版本，因为这部分是你的核心实现和优化
  setup(e, {
    slots: t
  }) {
    const r = {
      black: "bg-black-500 hover:bg-black-400 border-black-500 text-white",
      gray: "bg-gray-500 hover:bg-gray-400 border-gray-500 text-white",
      red: "bg-red-500 hover:bg-red-400 border-red-500 text-white",
      yellow: "bg-yellow-500 hover:bg-yellow-400 border-yellow-500 text-white",
      green: "bg-green-500 hover:bg-green-400 border-green-500 text-white",
      blue: "bg-blue-500 hover:bg-blue-400 border-blue-500 text-white",
      indigo: "bg-indigo-500 hover:bg-indigo-400 border-indigo-500 text-white",
      purple: "bg-purple-500 hover:bg-purple-400 border-purple-500 text-white",
      pink: "bg-pink-500 hover:bg-pink-400 border-pink-500 text-white"
    }, s = {
      black: "bg-black-100 border-black-500 text-black-500",
      gray: "bg-gray-100 border-gray-500 text-gray-500",
      red: "bg-red-100 border-red-500 text-red-500",
      yellow: "bg-yellow-100 border-yellow-500 text-yellow-500",
      green: "bg-green-100 border-green-500 text-green-500",
      blue: "bg-blue-100 border-blue-500 text-blue-500",
      indigo: "bg-indigo-100 border-indigo-500 text-indigo-500",
      purple: "bg-purple-100 border-purple-500 text-purple-500",
      pink: "bg-pink-100 border-pink-500 text-pink-500"
    }, l = {
      small: "py-1 px-2 text-sm",
      medium: "py-1.5 px-3 text-base",
      large: "py-2 px-4 text-lg"
    }, b = g(() => [
      "mx-1",
      "hover:scale-105",
      "transition duration-300 ease-in-out transform",
      "cursor-pointer",
      "border-solid",
      "inline-flex items-center justify-center",
      // 保留你添加的布局优化
      e.round ? "rounded-full" : "rounded-lg",
      e.plain ? s[e.color] : r[e.color],
      l[e.size]
    ].join(" "));
    return () => n("button", {
      class: b.value
    }, [e.icon ? n("i", {
      class: `i-ic-baseline-${e.icon} ${t.default ? "mr-1" : ""}`
    }, null) : "", t.default ? t.default() : ""]);
  }
});
i.install = (e) => {
  e.component("SButton", i);
};
const j = i, $ = {
  size: {
    type: String,
    default: "medium"
  },
  color: {
    type: String,
    default: "purple"
  }
}, a = /* @__PURE__ */ d({
  name: "Link",
  props: $,
  setup(e, {
    slots: t
  }) {
    const r = {
      small: {
        x: "2",
        y: "1",
        text: "sm"
      },
      medium: {
        x: "3",
        y: "1.5",
        text: "base"
      },
      large: {
        x: "4",
        y: "2",
        text: "lg"
      }
    };
    return () => n("a", {
      class: ` 
              hover:text-white
              cursor-pointer
              py-${r[e.size].y}
              px-${r[e.size].x}
              text-${`${e.color}-500`}
              text-${r[e.size].text}
              hover:bg-${e.color}-400
              `
    }, [n("span", null, [" ", t.default ? t.default() : "默认链接", " "])]);
  }
});
a.install = (e) => {
  e.component("SLink", a);
};
const A = a, B = [
  i,
  a,
  o
], L = {
  install(e) {
    B.forEach((t) => e.use(t));
  },
  version: k
};
export {
  _ as Avatar,
  j as Button,
  A as Link,
  v as avatarProps,
  S as buttonProps,
  L as default,
  $ as linkProps
};
