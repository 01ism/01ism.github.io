"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2060],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),a=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=a(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=a(r),h=o,f=d["".concat(c,".").concat(h)]||d[h]||p[h]||i;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,l[1]=u;for(var a=2;a<i;a++)l[a]=r[a];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2725:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>a});var n=r(7462),o=(r(7294),r(3905));const i={sidebar_position:1},l="\u6df1\u5165\u6d45\u51fa Rust",u={unversionedId:"guide/book/dive-inot-rust",id:"guide/book/dive-inot-rust",title:"\u6df1\u5165\u6d45\u51fa Rust",description:"- Rust \u4e66\u7c4d\u9605\u8bfb\u7b14\u8bb0.",source:"@site/docs/00-guide/06-book/02-dive-inot-rust.mdx",sourceDirName:"00-guide/06-book",slug:"/guide/book/dive-inot-rust",permalink:"/fr/docs/guide/book/dive-inot-rust",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/00-guide/06-book/02-dive-inot-rust.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"guide",previous:{title:"\u8bf4\u660e",permalink:"/fr/docs/guide/book/intro"},next:{title:"Rust \u8bed\u8a00\u7f16\u7a0b\u5b9e\u6218",permalink:"/fr/docs/guide/book/rust-programming-cookbook"}},c={},a=[{value:"ch09: \u5b8f",id:"ch09-\u5b8f",level:2},{value:"ch11: \u6240\u6709\u6743\u548c\u79fb\u52a8\u8bed\u4e49",id:"ch11-\u6240\u6709\u6743\u548c\u79fb\u52a8\u8bed\u4e49",level:2},{value:"ch12: \u501f\u7528\u548c\u751f\u547d\u5468\u671f",id:"ch12-\u501f\u7528\u548c\u751f\u547d\u5468\u671f",level:2},{value:"ch13: \u501f\u7528\u68c0\u67e5",id:"ch13-\u501f\u7528\u68c0\u67e5",level:2},{value:"ch16: \u89e3\u5f15\u7528",id:"ch16-\u89e3\u5f15\u7528",level:2},{value:"ch22: \u95ed\u5305",id:"ch22-\u95ed\u5305",level:2},{value:"ch29: \u72b6\u6001\u5171\u4eab",id:"ch29-\u72b6\u6001\u5171\u4eab",level:2},{value:"ch34: FFI",id:"ch34-ffi",level:2}],s={toc:a};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u6df1\u5165\u6d45\u51fa-rust"},"\u6df1\u5165\u6d45\u51fa Rust"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Rust \u4e66\u7c4d\u9605\u8bfb\u7b14\u8bb0.")),(0,o.kt)("h2",{id:"ch09-\u5b8f"},"ch09: \u5b8f"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"TODO")),(0,o.kt)("h2",{id:"ch11-\u6240\u6709\u6743\u548c\u79fb\u52a8\u8bed\u4e49"},"ch11: \u6240\u6709\u6743\u548c\u79fb\u52a8\u8bed\u4e49"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"TODO")),(0,o.kt)("h2",{id:"ch12-\u501f\u7528\u548c\u751f\u547d\u5468\u671f"},"ch12: \u501f\u7528\u548c\u751f\u547d\u5468\u671f"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"TODO")),(0,o.kt)("h2",{id:"ch13-\u501f\u7528\u68c0\u67e5"},"ch13: \u501f\u7528\u68c0\u67e5"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"TODO")),(0,o.kt)("h2",{id:"ch16-\u89e3\u5f15\u7528"},"ch16: \u89e3\u5f15\u7528"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"TODO")),(0,o.kt)("h2",{id:"ch22-\u95ed\u5305"},"ch22: \u95ed\u5305"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"TODO")),(0,o.kt)("h2",{id:"ch29-\u72b6\u6001\u5171\u4eab"},"ch29: \u72b6\u6001\u5171\u4eab"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"TODO")),(0,o.kt)("h2",{id:"ch34-ffi"},"ch34: FFI"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"TODO")))}p.isMDXComponent=!0}}]);