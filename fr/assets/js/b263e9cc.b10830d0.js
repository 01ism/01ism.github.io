"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3678],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),a=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=a(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=a(r),m=o,k=d["".concat(u,".").concat(m)]||d[m]||p[m]||c;return r?n.createElement(k,i(i({ref:t},s),{},{components:r})):n.createElement(k,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,i=new Array(c);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var a=2;a<c;a++)i[a]=r[a];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8354:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>l,toc:()=>a});var n=r(7462),o=(r(7294),r(3905));const c={sidebar_position:1},i="Rust \u8bed\u8a00\u7f16\u7a0b\u5b9e\u6218",l={unversionedId:"guide/book/rust-programming-cookbook",id:"guide/book/rust-programming-cookbook",title:"Rust \u8bed\u8a00\u7f16\u7a0b\u5b9e\u6218",description:"ch02: \u9ad8\u7ea7 rust \u8fdb\u9636",source:"@site/docs/00-guide/06-book/03-rust-programming-cookbook.mdx",sourceDirName:"00-guide/06-book",slug:"/guide/book/rust-programming-cookbook",permalink:"/fr/docs/guide/book/rust-programming-cookbook",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/00-guide/06-book/03-rust-programming-cookbook.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"guide",previous:{title:"\u6df1\u5165\u6d45\u51fa Rust",permalink:"/fr/docs/guide/book/dive-inot-rust"},next:{title:"\u53c2\u8003\u8d44\u6599",permalink:"/fr/docs/category/\u53c2\u8003\u8d44\u6599-1"}},u={},a=[{value:"ch02: \u9ad8\u7ea7 rust \u8fdb\u9636",id:"ch02-\u9ad8\u7ea7-rust-\u8fdb\u9636",level:2},{value:"sec2.7: \u5171\u4eab\u6240\u6709\u6743",id:"sec27-\u5171\u4eab\u6240\u6709\u6743",level:3},{value:"sec2.8:",id:"sec28",level:3},{value:"sec2.9",id:"sec29",level:3},{value:"ch04: \u65e0\u754f\u5e76\u53d1",id:"ch04-\u65e0\u754f\u5e76\u53d1",level:2},{value:"sec4.3",id:"sec43",level:3},{value:"sec4.4",id:"sec44",level:3},{value:"sec4.8",id:"sec48",level:3}],s={toc:a};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"rust-\u8bed\u8a00\u7f16\u7a0b\u5b9e\u6218"},"Rust \u8bed\u8a00\u7f16\u7a0b\u5b9e\u6218"),(0,o.kt)("h2",{id:"ch02-\u9ad8\u7ea7-rust-\u8fdb\u9636"},"ch02: \u9ad8\u7ea7 rust \u8fdb\u9636"),(0,o.kt)("h3",{id:"sec27-\u5171\u4eab\u6240\u6709\u6743"},"sec2.7: \u5171\u4eab\u6240\u6709\u6743"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"TODO")),(0,o.kt)("h3",{id:"sec28"},"sec2.8:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"TODO")),(0,o.kt)("h3",{id:"sec29"},"sec2.9"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"TODO")),(0,o.kt)("h2",{id:"ch04-\u65e0\u754f\u5e76\u53d1"},"ch04: \u65e0\u754f\u5e76\u53d1"),(0,o.kt)("h3",{id:"sec43"},"sec4.3"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"TODO")),(0,o.kt)("h3",{id:"sec44"},"sec4.4"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"TODO")),(0,o.kt)("h3",{id:"sec48"},"sec4.8"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"TODO")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Rust \u4e66\u7c4d\u9605\u8bfb\u7b14\u8bb0.")))}p.isMDXComponent=!0}}]);