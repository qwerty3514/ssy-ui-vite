import { defineComponent as o, computed as c, createElementBlock as n, openBlock as l, Fragment as p, createCommentVNode as d, createElementVNode as u, normalizeStyle as m, normalizeClass as h, createTextVNode as f, renderSlot as g } from "vue";
const x = {
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
}, v = ["src"], r = /* @__PURE__ */ o({
  name: "SAvatar",
  __name: "Avatar",
  props: x,
  setup(t) {
    const e = t, s = c(() => {
      switch (e.size) {
        case "small":
          return { width: "32px", height: "32px", fontSize: "16px" };
        case "medium":
          return { width: "40px", height: "40px", fontSize: "20px" };
        case "large":
          return { width: "48px", height: "48px", fontSize: "24px" };
        default:
          return {
            width: e.size,
            height: e.size,
            fontSize: `calc(${e.size} / 2)`
          };
      }
    });
    return (i, a) => (l(), n(
      p,
      null,
      [
        d(" 使用一个 div 作为根元素 "),
        u(
          "div",
          {
            class: h(["s-avatar inline-flex flex-shrink-0 items-center justify-center overflow-hidden whitespace-nowrap bg-gray-300 text-white leading-none", {
              "rounded-full": e.shape === "circle",
              "rounded-lg": e.shape !== "circle"
            }]),
            style: m(s.value)
          },
          [
            a[0] || (a[0] = f(
              " > ",
              -1
              /* CACHED */
            )),
            e.src ? (l(), n("img", {
              key: 0,
              src: e.src,
              alt: "avatar",
              class: "h-full w-full object-cover"
            }, null, 8, v)) : g(i.$slots, "default", { key: 1 })
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
r.install = (t) => {
  t.component("SAvatar", r);
};
const S = r;
export {
  S as Avatar,
  x as avatarProps,
  r as default
};
