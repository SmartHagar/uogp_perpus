(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7743],{6878:function(e,n,r){Promise.resolve().then(r.bind(r,9587))},9587:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return navbar_Navbar}});var t=r(7437),s=r(6691),l=r.n(s),a=r(2265),i=r(4033),c=r(1396),o=r.n(c),u=r(4606);let d=[{name:"Beranda",href:"/",icon:(0,t.jsx)(u.ufG,{})},{name:"Keanggotaan",href:"/keanggotaan",icon:(0,t.jsx)(u.ufG,{})},{name:"Katalog",href:"#",slug:"katalog",icon:(0,t.jsx)(u.fFq,{}),subMenus:[{name:"Buku",href:"/katalog?jenis=buku"},{name:"Jurnal",href:"/katalog?jenis=jurnal"},{name:"Tugas Akhir",href:"/katalog?jenis=tugas akhir"}]}];var navbar_Mobile=()=>(0,t.jsx)("ul",{className:"menu bg-base-200 w-full rounded-box",children:d&&d.map((e,n)=>(e.href,e.subMenus?(0,t.jsx)("li",{children:(0,t.jsxs)("details",{open:!0,children:[(0,t.jsx)("summary",{children:"Parent"}),(0,t.jsx)("ul",{children:e.subMenus.map((e,n)=>(0,t.jsx)("li",{children:(0,t.jsx)(o(),{href:e.href,children:e.name})},n))})]})},n):(0,t.jsx)(o(),{className:"whitespace-nowrap ml-4 my-2",href:e.href,children:(0,t.jsx)("li",{children:e.name})},n)))}),navbar_SubMenu=(e,n,r,s,l)=>{let[i,c]=(0,a.useState)(!1),u=(0,a.useRef)(null),d=(0,a.useRef)(null);function toggleDropdown(){c(!i)}return(0,a.useEffect)(()=>{function handleClickOutside(e){u.current&&d.current&&!u.current.contains(e.target)&&!d.current.contains(e.target)&&c(!1)}return window.addEventListener("click",handleClickOutside),()=>{window.removeEventListener("click",handleClickOutside)}},[]),(0,a.useEffect)(()=>{i?d.current.classList.remove("hidden"):d.current.classList.add("hidden")},[i]),(0,a.useEffect)(()=>{c(!1)},[l,s]),(0,t.jsxs)("li",{className:"relative inline-block -mx-4",children:[(0,t.jsxs)("span",{ref:u,className:"inline-flex w-full",onClick:toggleDropdown,children:[n,(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 ml-2 -mr-1",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:(0,t.jsx)("path",{fillRule:"evenodd",d:"M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",clipRule:"evenodd"})})]}),(0,t.jsx)("ul",{ref:d,className:"origin-top absolute right-0 left-4 mt-2 bg-base-100 w-fit hidden",children:e&&e.map((e,n)=>{let{href:r}=e;return(0,t.jsx)("li",{children:(0,t.jsx)(o(),{className:"".concat(l===r?"border-b border-accent":""," whitespace-nowrap"),href:e.href,children:e.name})},n)})})]},r)},button_BtnOutline=e=>{let{onClick:n,addClass:r,children:s}=e;return(0,t.jsx)("button",{onClick:n,className:"btn btn-outline ".concat(r),children:s})},navbar_Navbar=e=>{let n=(0,a.useRef)(null),[r,s]=(0,a.useState)(!1),c=(0,i.usePathname)(),u=(0,i.useRouter)();return(0,a.useEffect)(()=>(s(!1),()=>{}),[c]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"navbar justify-between flex-row-reverse bg-base-100 lg:px-20 lg:flex-row",children:[(0,t.jsxs)("div",{className:"flex-row-reverse justify-between  lg:justify-normal lg:flex-row",children:[(0,t.jsx)("div",{className:"lg:hidden",children:(0,t.jsxs)("label",{className:"swap swap-rotate",children:[(0,t.jsx)("input",{type:"checkbox",ref:n,onClick:()=>{var e;(null===(e=n.current)||void 0===e?void 0:e.checked)?s(!0):s(!1)}}),(0,t.jsx)("svg",{className:"swap-off fill-current",xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 512 512",children:(0,t.jsx)("path",{d:"M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"})}),(0,t.jsx)("svg",{className:"swap-on fill-current",xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 512 512",children:(0,t.jsx)("polygon",{points:"400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"})})]})}),(0,t.jsx)("div",{className:"flex gap-4",children:(0,t.jsx)("div",{className:"relative",children:(0,t.jsx)("div",{className:"w-12 h-12 lg:w-16 lg:h-16",children:(0,t.jsx)(l(),{src:"/img/uogp.png",alt:"logo",fill:!0})})})})]}),(0,t.jsx)("div",{className:"hidden lg:flex justify-center w-full",children:(0,t.jsx)("ul",{className:"menu menu-horizontal px-1 text-[16px] gap-x-4",children:d&&d.map((e,n)=>{let r=e.href;return e.subMenus?navbar_SubMenu(null==e?void 0:e.subMenus,e.name,n,e.slug,c):(0,t.jsxs)(o(),{className:"whitespace-nowrap flex flex-col justify-center items-center",href:e.href,children:[(0,t.jsx)("li",{children:e.name}),r===c&&(0,t.jsx)("div",{className:"border-b w-[70%] mx-auto"})]},n)})})}),(0,t.jsx)("div",{children:(0,t.jsx)(button_BtnOutline,{onClick:()=>{console.log({pathname:c}),u.push("/login")},addClass:"btn-primary",children:"Login"})})]}),(0,t.jsx)("div",{className:"absolute left-0 right-0 md:hidden ".concat(r?"block":"hidden"),children:(0,t.jsx)(navbar_Mobile,{})})]})}},622:function(e,n,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t=r(2265),s=Symbol.for("react.element"),l=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function q(e,n,r){var t,l={},o=null,u=null;for(t in void 0!==r&&(o=""+r),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(u=n.ref),n)a.call(n,t)&&!c.hasOwnProperty(t)&&(l[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===l[t]&&(l[t]=n[t]);return{$$typeof:s,type:e,key:o,ref:u,props:l,_owner:i.current}}n.Fragment=l,n.jsx=q,n.jsxs=q},7437:function(e,n,r){"use strict";e.exports=r(622)},1172:function(e,n,r){"use strict";r.d(n,{w_:function(){return GenIcon}});var t=r(2265),s={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=t.createContext&&t.createContext(s),__assign=function(){return(__assign=Object.assign||function(e){for(var n,r=1,t=arguments.length;r<t;r++)for(var s in n=arguments[r])Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s]);return e}).apply(this,arguments)},__rest=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&0>n.indexOf(t)&&(r[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)0>n.indexOf(t[s])&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};function Tree2Element(e){return e&&e.map(function(e,n){return t.createElement(e.tag,__assign({key:n},e.attr),Tree2Element(e.child))})}function GenIcon(e){return function(n){return t.createElement(IconBase,__assign({attr:__assign({},e.attr)},n),Tree2Element(e.child))}}function IconBase(e){var elem=function(n){var r,s=e.attr,l=e.size,a=e.title,i=__rest(e,["attr","size","title"]),c=l||n.size||"1em";return n.className&&(r=n.className),e.className&&(r=(r?r+" ":"")+e.className),t.createElement("svg",__assign({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,s,i,{className:r,style:__assign(__assign({color:e.color||n.color},n.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),a&&t.createElement("title",null,a),e.children)};return void 0!==l?t.createElement(l.Consumer,null,function(e){return elem(e)}):elem(s)}}},function(e){e.O(0,[8447,4758,1396,2971,2472,1744],function(){return e(e.s=6878)}),_N_E=e.O()}]);