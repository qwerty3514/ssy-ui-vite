import { defineComponent as l, createVNode as o } from "vue";
const r = {
  size: {
    type: String,
    default: "medium"
  },
  color: {
    type: String,
    default: "purple"
  }
}, n = /* @__PURE__ */ l({
  name: "Link",
  props: r,
  setup(e, {
    slots: i
  }) {
    const t = {
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
    return () => o("a", {
      class: ` 
              hover:text-white
              cursor-pointer
              py-${t[e.size].y}
              px-${t[e.size].x}
              text-${`${e.color}-500`}
              text-${t[e.size].text}
              hover:bg-${e.color}-400
              `
    }, [o("span", null, [" ", i.default ? i.default() : "默认链接", " "])]);
  }
});
n.install = (e) => {
  e.component("SLink", n);
};
const s = n;
export {
  s as Link,
  n as default,
  r as linkProps
};
