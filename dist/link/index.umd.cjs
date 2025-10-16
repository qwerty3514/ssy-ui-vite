(function(e,t){typeof exports=="object"&&typeof module<"u"?t(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],t):(e=typeof globalThis<"u"?globalThis:e||self,t(e.link={},e.Vue))})(this,function(e,t){"use strict";const u={size:{type:String,default:"medium"},color:{type:String,default:"purple"}},i=t.defineComponent({name:"Link",props:u,setup(n,{slots:l}){const o={small:{x:"2",y:"1",text:"sm"},medium:{x:"3",y:"1.5",text:"base"},large:{x:"4",y:"2",text:"lg"}};return()=>t.createVNode("a",{class:` 
              hover:text-white
              cursor-pointer
              py-${o[n.size].y}
              px-${o[n.size].x}
              text-${`${n.color}-500`}
              text-${o[n.size].text}
              hover:bg-${n.color}-400
              `},[t.createVNode("span",null,[" ",l.default?l.default():"默认链接"," "])])}});i.install=n=>{n.component("SLink",i)};const s=i;e.Link=s,e.default=i,e.linkProps=u,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
