"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5074],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var l=n.createContext({}),s=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},p=function(t){var e=s(t.components);return n.createElement(l.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,l=t.parentName,p=u(t,["components","mdxType","originalType","parentName"]),m=s(r),d=a,k=m["".concat(l,".").concat(d)]||m[d]||c[d]||i;return r?n.createElement(k,o(o({ref:e},p),{},{components:r})):n.createElement(k,o({ref:e},p))}));function d(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,o=new Array(i);o[0]=m;var u={};for(var l in e)hasOwnProperty.call(e,l)&&(u[l]=e[l]);u.originalType=t,u.mdxType="string"==typeof t?t:a,o[1]=u;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6249:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>u,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:4},o="\u56fe\u4e66\u63a8\u8350",u={unversionedId:"guide/intro/rust-book",id:"guide/intro/rust-book",title:"\u56fe\u4e66\u63a8\u8350",description:"\u5165\u95e8\u4e66\u5355",source:"@site/docs/00-guide/01-intro/04-rust-book.mdx",sourceDirName:"00-guide/01-intro",slug:"/guide/intro/rust-book",permalink:"/docs/guide/intro/rust-book",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/00-guide/01-intro/04-rust-book.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"guide",previous:{title:"\u642d\u5efa\u5f00\u53d1\u73af\u5883",permalink:"/docs/guide/intro/rust-setup"},next:{title:"\u793e\u533a/\u7fa4",permalink:"/docs/guide/intro/rust-forum"}},l={},s=[{value:"\u5165\u95e8\u4e66\u5355",id:"\u5165\u95e8\u4e66\u5355",level:2},{value:"Rust\u7f16\u7a0b\uff1a\u5165\u95e8\u3001\u5b9e\u6218\u4e0e\u8fdb\u9636",id:"rust\u7f16\u7a0b\u5165\u95e8\u5b9e\u6218\u4e0e\u8fdb\u9636",level:3},{value:"Rust\u7a0b\u5e8f\u8bbe\u8ba1",id:"rust\u7a0b\u5e8f\u8bbe\u8ba1",level:3},{value:"\u8fdb\u9636:",id:"\u8fdb\u9636",level:2},{value:"\u6df1\u5165\u6d45\u51faRust",id:"\u6df1\u5165\u6d45\u51farust",level:3},{value:"Rust\u8bed\u8a00\u7f16\u7a0b\u5b9e\u6218",id:"rust\u8bed\u8a00\u7f16\u7a0b\u5b9e\u6218",level:3}],p={toc:s};function c(t){let{components:e,...i}=t;return(0,a.kt)("wrapper",(0,n.Z)({},p,i,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u56fe\u4e66\u63a8\u8350"},"\u56fe\u4e66\u63a8\u8350"),(0,a.kt)("h2",{id:"\u5165\u95e8\u4e66\u5355"},"\u5165\u95e8\u4e66\u5355"),(0,a.kt)("h3",{id:"rust\u7f16\u7a0b\u5165\u95e8\u5b9e\u6218\u4e0e\u8fdb\u9636"},"Rust\u7f16\u7a0b\uff1a\u5165\u95e8\u3001\u5b9e\u6218\u4e0e\u8fdb\u9636"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u2b50\u2b50\u2b50"),(0,a.kt)("li",{parentName:"ul"},"\u6bd4\u8f83\u7b80\u6d01, \u5feb\u901f\u719f\u6089 rust \u8bed\u6cd5."))),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(2865).Z,width:"270",height:"270"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://book.douban.com/subject/35447165/"},"https://book.douban.com/subject/35447165/"))),(0,a.kt)("h3",{id:"rust\u7a0b\u5e8f\u8bbe\u8ba1"},"Rust\u7a0b\u5e8f\u8bbe\u8ba1"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u2b50\u2b50"),(0,a.kt)("li",{parentName:"ul"},"rust \u5b98\u65b9\u6559\u7a0b. \u6b64\u4e66\u5f88\u539a, \u662f\u624b\u518c\u578b."),(0,a.kt)("li",{parentName:"ul"},"\u867d\u7136\u5f88\u591a\u4eba\u90fd\u63a8\u8350, \u4f46\u662f, \u6211\u5e76\u4e0d\u63a8\u8350.(\u6211\u53ea\u7ed92\u661f)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5f88\u591a\u4eba, \u53cd\u590d\u5165\u95e8 rust(\u4e09\u8fc7\u5176\u95e8,\u800c\u4e0d\u5165). \u5927\u6982\u5f88\u5927\u7a0b\u5ea6\u90fd\u662f\u88ab\u6b64\u4e66\u529d\u9000."))),(0,a.kt)("li",{parentName:"ul"},"\u4e2a\u4eba\u5efa\u8bae:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u6211\u4e0d\u5efa\u8bae\u4f5c\u4e3a\u7b2c\u4e00\u672c, \u8fd9\u79cd\u624b\u518c, \u53ea\u9002\u5408\u7ffb\u67e5(\u7c7b\u4f3c\u5b57\u5178). \u4e0d\u9002\u5408\u901a\u8bfb.(\u53ef\u4ee5, \u4f46\u6ca1\u5fc5\u8981)"),(0,a.kt)("li",{parentName:"ul"},"\u5728\u5bf9 rust \u9ad8\u9636\u8bed\u6cd5\u7406\u89e3\u4e0d\u6e05\u695a\u7684\u5730\u65b9, \u67e5\u67e5\u5bf9\u5e94\u7ae0\u8282\u5373\u53ef. (\u8df3\u8bfb)"))))),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(9898).Z,width:"270",height:"352"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://book.douban.com/subject/35217097/"},"https://book.douban.com/subject/35217097/"))),(0,a.kt)("h2",{id:"\u8fdb\u9636"},"\u8fdb\u9636:"),(0,a.kt)("h3",{id:"\u6df1\u5165\u6d45\u51farust"},"\u6df1\u5165\u6d45\u51faRust"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u2b50\u2b50\u2b50\u2b50\u2b50"),(0,a.kt)("li",{parentName:"ul"},"\u5fc5\u8bfb."),(0,a.kt)("li",{parentName:"ul"},"\u5bf9 Rust \u590d\u6742\u8bed\u6cd5\u70b9\u89e3\u91ca\u975e\u5e38\u5230\u4f4d, \u5927\u91cf\u548c C++ \u5bf9\u6bd4, \u4f53\u4f1a Rust \u7684\u6539\u8fdb\u70b9."))),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(4460).Z,width:"220",height:"328"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://book.douban.com/subject/30312231/"},"https://book.douban.com/subject/30312231/"))),(0,a.kt)("h3",{id:"rust\u8bed\u8a00\u7f16\u7a0b\u5b9e\u6218"},"Rust\u8bed\u8a00\u7f16\u7a0b\u5b9e\u6218"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u2b50\u2b50\u2b50\u2b50\u2b50"),(0,a.kt)("li",{parentName:"ul"},"\u5fc5\u8bfb."),(0,a.kt)("li",{parentName:"ul"},"\u5927\u91cf\u793a\u4f8b, \u5b66\u4e60 rust \u7f16\u7a0b\u6280\u5de7."))),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(4557).Z,width:"270",height:"270"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://book.douban.com/subject/35317257/"},"Rust\u8bed\u8a00\u7f16\u7a0b\u5b9e\u6218 - Douban")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://item.jd.com/10027041615889.html"},"Rust\u8bed\u8a00\u7f16\u7a0b\u5b9e\u6218 - JD"))))}c.isMDXComponent=!0},2865:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/img-2cbbd997be339a016daa33b0df29cebe.png"},9898:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/img_1-12ff5ee19ee87a5b3af65acffeee9fd9.png"},4460:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/img_2-0fe28997d7cc0c411e5c3c84d6ab0e49.png"},4557:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/img_3-cfc77f24c8e9188644b3c7fd9ccce434.png"}}]);