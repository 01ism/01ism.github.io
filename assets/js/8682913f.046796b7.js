"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7346],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,f=d["".concat(l,".").concat(m)]||d[m]||s[m]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5117:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>u,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:1},i="\u5bfc\u822a",u={unversionedId:"guide/pro/intro",id:"guide/pro/intro",title:"\u5bfc\u822a",description:"- Rust \u9ad8\u9636\u8bed\u6cd5\u4ecb\u7ecd",source:"@site/docs/00-guide/05-pro/01-intro.mdx",sourceDirName:"00-guide/05-pro",slug:"/guide/pro/intro",permalink:"/docs/guide/pro/intro",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/00-guide/05-pro/01-intro.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcd9 Rust \u8fdb\u9636\u8bed\u6cd5",permalink:"/docs/category/-rust-\u8fdb\u9636\u8bed\u6cd5"},next:{title:"Translate your site",permalink:"/docs/guide/pro/translate-your-site"}},l={},p=[{value:"\u8bed\u6cd5\u76ee\u5f55",id:"\u8bed\u6cd5\u76ee\u5f55",level:2}],c={toc:p};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5bfc\u822a"},"\u5bfc\u822a"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Rust \u9ad8\u9636\u8bed\u6cd5\u4ecb\u7ecd"),(0,o.kt)("li",{parentName:"ul"},"\u672c\u90e8\u5206, \u9700\u8981\u6709\u4e00\u5b9a Rust \u57fa\u7840."),(0,o.kt)("li",{parentName:"ul"},"\u5982\u65e0\u57fa\u7840, \u8bf7\u5148\u9605\u8bfb ",(0,o.kt)("inlineCode",{parentName:"li"},"Rust \u57fa\u7840\u8bed\u6cd5")," \u6559\u7a0b\u90e8\u5206."))),(0,o.kt)("h2",{id:"\u8bed\u6cd5\u76ee\u5f55"},"\u8bed\u6cd5\u76ee\u5f55"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5b8f"),(0,o.kt)("li",{parentName:"ul"},"trait"),(0,o.kt)("li",{parentName:"ul"},"\u6240\u6709\u6743"),(0,o.kt)("li",{parentName:"ul"},"\u751f\u547d\u5468\u671f\u6807\u6ce8"),(0,o.kt)("li",{parentName:"ul"},"unsafe"),(0,o.kt)("li",{parentName:"ul"},"\u5e76\u53d1\u7f16\u7a0b"),(0,o.kt)("li",{parentName:"ul"},"C FFI"),(0,o.kt)("li",{parentName:"ul"},"WASM")))}s.isMDXComponent=!0}}]);