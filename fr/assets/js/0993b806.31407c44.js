"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3503],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,i=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=s(r),m=l,k=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(k,o(o({ref:t},c),{},{components:r})):n.createElement(k,o({ref:t},c))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=r.length,o=new Array(i);o[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:l,o[1]=a;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8830:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var n=r(7462),l=(r(7294),r(3905));const i={sidebar_position:1},o="Hello World",a={unversionedId:"guide/core/helloworld",id:"guide/core/helloworld",title:"Hello World",description:"Rust \u6700\u7b80\u5355\u7684\u793a\u4f8b:",source:"@site/docs/00-guide/04-core/02-helloworld.mdx",sourceDirName:"00-guide/04-core",slug:"/guide/core/helloworld",permalink:"/fr/docs/guide/core/helloworld",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/00-guide/04-core/02-helloworld.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"guide",previous:{title:"\u5bfc\u822a",permalink:"/fr/docs/guide/core/intro"},next:{title:"\ud83d\udcd9 Rust \u8fdb\u9636\u8bed\u6cd5",permalink:"/fr/docs/category/-rust-\u8fdb\u9636\u8bed\u6cd5-1"}},u={},s=[{value:"Rust \u6700\u7b80\u5355\u7684\u793a\u4f8b:",id:"rust-\u6700\u7b80\u5355\u7684\u793a\u4f8b",level:2},{value:"Rust \u5355\u5143\u6d4b\u8bd5:",id:"rust-\u5355\u5143\u6d4b\u8bd5",level:2}],c={toc:s};function p(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"hello-world"},"Hello World"),(0,l.kt)("h2",{id:"rust-\u6700\u7b80\u5355\u7684\u793a\u4f8b"},"Rust \u6700\u7b80\u5355\u7684\u793a\u4f8b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="demo/src/main.rs" showLineNumbers',title:'"demo/src/main.rs"',showLineNumbers:!0},'\n// \u51fd\u6570\u5b9a\u4e49:\nfn main() {\n    // highlight-next-line\n    println!("Hello, world!"); // println! \u662f\u5b8f, \u4e0d\u662f\u51fd\u6570\n}\n\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u89e3\u91ca:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u2705 ",(0,l.kt)("inlineCode",{parentName:"li"},"fn")," \u662f\u5b9a\u4e49\u51fd\u6570\u7684\u5173\u952e\u5b57. \u548c\u5176\u4ed6\u8bed\u8a00\u7c7b\u4f3c"),(0,l.kt)("li",{parentName:"ul"},"\u2705 ",(0,l.kt)("inlineCode",{parentName:"li"},"println!")," \u662f\u5b8f(C \u5b8f\u8fdb\u9636\u7248, AST\u6811\u63d2\u5165+\u66ff\u6362), \u7528\u4e8e\u6253\u5370\u8f93\u51fa."),(0,l.kt)("li",{parentName:"ul"},"\u2705 ",(0,l.kt)("inlineCode",{parentName:"li"},";")," \u8bed\u53e5\u884c\u7ed3\u675f, \u4e0d\u53ef\u7701."),(0,l.kt)("li",{parentName:"ul"},"\u2705 rust \u8bed\u53e5 \u542b\u6709 ",(0,l.kt)("inlineCode",{parentName:"li"},";")," \u548c \u4e0d\u542b\u6709 ",(0,l.kt)("inlineCode",{parentName:"li"},";"),", \u662f\u6709\u533a\u522b\u7684:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u542b\u6709 ",(0,l.kt)("inlineCode",{parentName:"li"},";")," \u65f6, \u662f\u8bed\u53e5"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u542b\u6709 ",(0,l.kt)("inlineCode",{parentName:"li"},";"),"\u65f6, \u662f\u8868\u8fbe\u5f0f(\u81ea\u5e26 return \u6548\u679c)")))),(0,l.kt)("h2",{id:"rust-\u5355\u5143\u6d4b\u8bd5"},"Rust \u5355\u5143\u6d4b\u8bd5:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5355\u5143\u6d4b\u8bd5")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="demo/src/lib.rs" showLineNumbers',title:'"demo/src/lib.rs"',showLineNumbers:!0},"\n#[cfg(test)]\nmod tests {\n\n    // highlight-next-line\n    #[test]\n    fn it_works() {\n        let result = 2 + 2;\n        assert_eq!(result, 4); // \u65ad\u8a00\n    }\n}\n\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u89e3\u91ca:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u2705 ",(0,l.kt)("inlineCode",{parentName:"li"},"mod"),", \u5b9a\u4e49",(0,l.kt)("inlineCode",{parentName:"li"},"\u6a21\u5757")," \u5173\u952e\u5b57. rust \u901a\u8fc7 mod \u7ec4\u7ec7\u6a21\u5757\u4ee3\u7801, \u7c7b\u4f3c C++ namespace."),(0,l.kt)("li",{parentName:"ul"},"\u2705 std \u6807\u51c6\u5e93\u9884\u5b9a\u4e49\u5b8f:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u2705 ",(0,l.kt)("inlineCode",{parentName:"li"},"#[cfg(test)]")," = ",(0,l.kt)("inlineCode",{parentName:"li"},"cfg!"),", std \u6807\u51c6\u5e93\u9884\u5b9a\u4e49\u5b8f, \u6807\u6ce8\u6d4b\u8bd5\u6a21\u5757"),(0,l.kt)("li",{parentName:"ul"},"\u2705 ",(0,l.kt)("inlineCode",{parentName:"li"},"#[test]")," std \u6807\u51c6\u5e93\u9884\u5b9a\u4e49\u5b8f, \u6807\u6ce8\u5355\u4e2a\u6d4b\u8bd5\u65b9\u6cd5"),(0,l.kt)("li",{parentName:"ul"},"\u2705 ",(0,l.kt)("inlineCode",{parentName:"li"},"assert_eq!")," std \u6807\u51c6\u5e93\u9884\u5b9a\u4e49\u5b8f, \u6d4b\u8bd5\u65ad\u8a00\u8bed\u53e5")))))}p.isMDXComponent=!0}}]);