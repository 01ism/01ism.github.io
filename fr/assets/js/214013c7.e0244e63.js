"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8377],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>N});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=l.createContext({}),u=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=u(e.components);return l.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},s=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=u(n),N=a,c=s["".concat(p,".").concat(N)]||s[N]||k[N]||i;return n?l.createElement(c,r(r({ref:t},m),{},{components:n})):l.createElement(c,r({ref:t},m))}));function N(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var u=2;u<i;u++)r[u]=n[u];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3810:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>k,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var l=n(7462),a=(n(7294),n(3905));const i={sidebar_position:1},r="\u5bf9\u6bd4\u5176\u4ed6\u8bed\u8a00",o={unversionedId:"guide/tips/intro/diff-pl",id:"guide/tips/intro/diff-pl",title:"\u5bf9\u6bd4\u5176\u4ed6\u8bed\u8a00",description:"- Rust \u517c\u987e OOP(\u9762\u5411\u5bf9\u8c61) \u548c FP(\u51fd\u6570\u5f0f) \u7f16\u7a0b\u8303\u5f0f.",source:"@site/docs/00-guide/02-tips/00-intro/02-diff-pl.mdx",sourceDirName:"00-guide/02-tips/00-intro",slug:"/guide/tips/intro/diff-pl",permalink:"/fr/docs/guide/tips/intro/diff-pl",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/00-guide/02-tips/00-intro/02-diff-pl.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"guide",previous:{title:"\u9690\u5f0f\u7ea6\u5b9a",permalink:"/fr/docs/guide/tips/intro/rule"},next:{title:"\u2705 \u8bed\u6cd5\u76ee\u5f55",permalink:"/fr/docs/guide/tips/intro"}},p={},u=[{value:"\u4e0e OCaml \u5173\u7cfb",id:"\u4e0e-ocaml-\u5173\u7cfb",level:2},{value:"\u4e0e C/C++/Zig \u5173\u7cfb",id:"\u4e0e-cczig-\u5173\u7cfb",level:2},{value:"\u4e0e Go \u5173\u7cfb",id:"\u4e0e-go-\u5173\u7cfb",level:2},{value:"\u4e0e Python \u5173\u7cfb",id:"\u4e0e-python-\u5173\u7cfb",level:2}],m={toc:u};function k(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,l.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5bf9\u6bd4\u5176\u4ed6\u8bed\u8a00"},"\u5bf9\u6bd4\u5176\u4ed6\u8bed\u8a00"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Rust \u517c\u987e OOP(\u9762\u5411\u5bf9\u8c61) \u548c FP(\u51fd\u6570\u5f0f) \u7f16\u7a0b\u8303\u5f0f."),(0,a.kt)("li",{parentName:"ul"},"\u8bed\u6cd5\u4e0a, \u5927\u91cf\u501f\u9274\u5176\u4ed6\u8bed\u8a00\u4f18\u79c0\u7279\u6027."),(0,a.kt)("li",{parentName:"ul"},"\u9009\u53d6\u4e3b\u6d41\u5177\u6709",(0,a.kt)("inlineCode",{parentName:"li"},"\u4ee3\u8868\u6027"),"\u7684\u901a\u7528\u8bed\u8a00\u505a\u5bf9\u6bd4:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"go"),(0,a.kt)("li",{parentName:"ul"},"python(\u4ee3\u8868 ruby/js \u7b49\u540c\u4e00\u7c7b\u8bed\u8a00)"),(0,a.kt)("li",{parentName:"ul"},"c++"))))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"rust OOP(\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b) \u7279\u6027:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\u5bf9\u8c61\u3001\u5c01\u88c5\u3001\u7ee7\u627f\u548c\u591a\u6001"),", \u5bf9\u5e94 Rust \u7684\u4e00\u4e9b\u7279\u6027: ",(0,a.kt)("inlineCode",{parentName:"li"},"struct, impl, pub, trait")," \u7b49")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"rust FP(functional programming)\u51fd\u6570\u5f0f\u8bed\u8a00\u7279\u6027:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\u95ed\u5305\uff08Closures\uff09"),", \u4e00\u4e2a\u53ef\u4ee5\u50a8\u5b58\u5728\u53d8\u91cf\u91cc\u7684\u7c7b\u4f3c\u51fd\u6570\u7684\u7ed3\u6784"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\u8fed\u4ee3\u5668\uff08Iterators\uff09"),", \u4e00\u79cd\u5904\u7406\u5143\u7d20\u5e8f\u5217\u7684\u65b9\u5f0f"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\u94fe\u5f0f\u64cd\u4f5c"))),(0,a.kt)("h2",{id:"\u4e0e-ocaml-\u5173\u7cfb"},"\u4e0e OCaml \u5173\u7cfb"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Rust \u9996\u4e2a\u7f16\u8bd1\u5668, \u662f\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"li",href:"https://ocaml.org/"},"OCaml")," \u5b9e\u73b0."))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u2705 ",(0,a.kt)("a",{parentName:"li",href:"https://ocaml.org/"},"OCaml")," \u8bed\u8a00, \u662f\u51fd\u6570\u5f0f\u8bed\u8a00."),(0,a.kt)("li",{parentName:"ul"},"\u2705 Rust \u8bed\u8a00, \u5305\u542b\u5927\u91cf\u51fd\u6570\u5f0f\u7279\u6027."),(0,a.kt)("li",{parentName:"ul"},"\u2705 ",(0,a.kt)("a",{parentName:"li",href:"https://www.zhihu.com/question/62971835"},"OCaml\u5728\u5199\u7f16\u8bd1\u5668\u4e0a\u6bd4Haskell\u597d\u5728\u54ea\uff1f\u4e3a\u4f55Rust\u7b2c\u4e00\u4e2a\u7248\u672c\u91c7\u7528\u4e86OCaml\uff1f"))),(0,a.kt)("h2",{id:"\u4e0e-cczig-\u5173\u7cfb"},"\u4e0e C/C++/Zig \u5173\u7cfb"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Zig/Rust"),", \u662f ",(0,a.kt)("inlineCode",{parentName:"li"},"C/C++")," \u7684\u66ff\u4ee3\u54c1."),(0,a.kt)("li",{parentName:"ul"},"Rust: a better C++. \u548c C++ \u8bed\u6cd5\u540c\u6837\u590d\u6742"),(0,a.kt)("li",{parentName:"ul"},"Zig: a better C. \u8bed\u6cd5\u7b80\u5355 + \u529f\u80fd\u5f3a\u5927."))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4e0e C/C++ \u5173\u7cfb:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u2705 Rust \u6b63\u5728\u5927\u91cf\u91cd\u5199 C/C++ \u751f\u6001.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4e0e Zig \u5173\u7cfb:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u2705 Zig \u76ee\u524d\u6bd4\u8f83\u5c0f\u4f17, \u4e0d\u5355\u72ec\u8ba8\u8bba. \u6709\u5174\u8da3\u7684\u53ef\u4ee5\u81ea\u884c\u641c\u7d22."),(0,a.kt)("li",{parentName:"ul"},"\u2705 ",(0,a.kt)("a",{parentName:"li",href:"https://www.ziglang.org/#Zig-vs-Rust"},"Zig vs Rust")),(0,a.kt)("li",{parentName:"ul"},"\u2705 \u957f\u671f\u770b, Zig \u4e0e Rust \u4f1a\u6709\u7ade\u4e89\u5173\u7cfb, \u4e5f\u6709\u4e92\u8865\u5173\u7cfb. \u603b\u4f53\u662f \u4e92\u8865 > \u7ade\u4e89."),(0,a.kt)("li",{parentName:"ul"},"\u2705 \u534f\u540c\u6548\u5e94: \u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f.")),(0,a.kt)("h2",{id:"\u4e0e-go-\u5173\u7cfb"},"\u4e0e Go \u5173\u7cfb"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Rust \u5bf9 Go \u662f\u5168\u65b9\u4f4d\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"\u66ff\u4ee3"),"\u5173\u7cfb."),(0,a.kt)("li",{parentName:"ul"},"Go \u548c Rust \u76f8\u6bd4, \u9664\u4e86\u8bed\u6cd5\u7b80\u5355, \u51e0\u4e4e\u6ca1\u6709\u4f18\u52bf."),(0,a.kt)("li",{parentName:"ul"},"\u534f\u540c\u6548\u5e94: \u2b50\ufe0f\ufe0f",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u274c \u975e\u5e38\u4e0d\u63a8\u8350 ",(0,a.kt)("inlineCode",{parentName:"li"},"Rust + Go")," \u534f\u4f5c\u5f00\u53d1."),(0,a.kt)("li",{parentName:"ul"},"\u274c ",(0,a.kt)("inlineCode",{parentName:"li"},"Rust + Go")," \u534f\u540c\u6536\u76ca < ",(0,a.kt)("inlineCode",{parentName:"li"},"Rust + Python/Ruby/Nodejs/PHP"),"."))))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u76f8\u4f3c\u70b9:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"rust \u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"struct")," \u7c7b\u4f3c go \u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"struct"),".",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u57fa\u7840\u4f7f\u7528\u76f8\u8fd1."))),(0,a.kt)("li",{parentName:"ul"},"rust \u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"trait")," \u7c7b\u4f3c go \u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"interface"),".",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4e8c\u8005\u4f7f\u7528\u4e0a, \u4f18\u96c5\u7a0b\u5ea6\u4e0d\u76f8\u4e0a\u4e0b."),(0,a.kt)("li",{parentName:"ul"},"rust \u66f4\u7075\u6d3b."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rust workspace")," \u7c7b\u4f3c ",(0,a.kt)("inlineCode",{parentName:"li"},"go.work"),".",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4e8c\u8005\u90fd\u662f\u4e3a\u4e86\u89e3\u51b3 ",(0,a.kt)("inlineCode",{parentName:"li"},"\u591a\u9879\u76ee")," \u5f00\u53d1\u7684\u95ee\u9898."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rust cargo.toml")," \u7c7b\u4f3c ",(0,a.kt)("inlineCode",{parentName:"li"},"go.mod"),".",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4e8c\u8005\u90fd\u662f\u4e3a\u4e86\u89e3\u51b3 ",(0,a.kt)("inlineCode",{parentName:"li"},"\u4f9d\u8d56\u7ba1\u7406")," \u7684\u95ee\u9898."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rust cargo \u6307\u4ee4")," \u7c7b\u4f3c ",(0,a.kt)("inlineCode",{parentName:"li"},"go mod \u6307\u4ee4"),".",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u90fd\u662f\u5305\u7ba1\u7406\u5de5\u5177."),(0,a.kt)("li",{parentName:"ul"},"cargo \u66f4\u52a0\u5f3a\u5927")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4e0d\u540c\u70b9:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"rust ",(0,a.kt)("inlineCode",{parentName:"li"},"No GC"),"  vs go ",(0,a.kt)("inlineCode",{parentName:"li"},"GC"),"."),(0,a.kt)("li",{parentName:"ul"},"\u8bed\u6cd5\u4e0a\u7684\u5dee\u5f02, \u65e0\u9700\u8fc7\u591a\u8ba8\u8bba.")),(0,a.kt)("h2",{id:"\u4e0e-python-\u5173\u7cfb"},"\u4e0e Python \u5173\u7cfb"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u57fa\u4e8e ",(0,a.kt)("inlineCode",{parentName:"li"},"FFI")," \u4f7f\u7528 rust, \u4e3a Python \u7f16\u5199\u5e95\u5c42\u5e93."),(0,a.kt)("li",{parentName:"ul"},"\u534f\u540c\u6548\u5e94: \u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u517c\u987e\u5f00\u53d1\u6548\u7387\u548c\u6027\u80fd."),(0,a.kt)("li",{parentName:"ul"},"\u524d\u671f\u5f00\u53d1, \u7528 Python, \u540e\u671f\u6027\u80fd\u74f6\u9888, \u7528 Rust \u91cd\u6784/\u91cd\u5199."))))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u76f8\u4f3c\u70b9:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"rust ",(0,a.kt)("inlineCode",{parentName:"li"},"impl")," +  ",(0,a.kt)("inlineCode",{parentName:"li"},"struct")," \u7c7b\u4f3c python ",(0,a.kt)("inlineCode",{parentName:"li"},"class"),".",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"rust ",(0,a.kt)("inlineCode",{parentName:"li"},"self")," \u53c2\u6570 \u7c7b\u4f3c python \u7c7b ",(0,a.kt)("inlineCode",{parentName:"li"},"self")," \u53c2\u6570 ."))),(0,a.kt)("li",{parentName:"ul"},"rust ",(0,a.kt)("inlineCode",{parentName:"li"},"mod.rs")," \u7c7b\u4f3c python ",(0,a.kt)("inlineCode",{parentName:"li"},"__init__.py"),".",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u529f\u80fd\u548c\u4f5c\u7528\u57fa\u672c\u4e00\u81f4."))),(0,a.kt)("li",{parentName:"ul"},"rust ",(0,a.kt)("inlineCode",{parentName:"li"},"\u51fd\u6570\u5f0f"),"\u76f8\u5173\u7279\u6027, \u57fa\u672c\u548c python \u76f8\u5173\u7279\u6027\u7c7b\u4f3c.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4e0d\u540c\u70b9:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"rust ",(0,a.kt)("inlineCode",{parentName:"li"},"No GC"),"  vs python ",(0,a.kt)("inlineCode",{parentName:"li"},"GC"),"."),(0,a.kt)("li",{parentName:"ul"},"\u8bed\u6cd5\u4e0a\u7684\u5dee\u5f02, \u65e0\u9700\u8fc7\u591a\u8ba8\u8bba.")))}k.isMDXComponent=!0}}]);