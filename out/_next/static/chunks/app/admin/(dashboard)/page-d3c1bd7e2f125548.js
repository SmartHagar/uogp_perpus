(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[145],{5031:function(e,t,a){Promise.resolve().then(a.bind(a,6085))},8811:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return dynamic}});let n=a(1024);a(2265);let l=n._(a(7075));function convertModule(e){return{default:(null==e?void 0:e.default)||e}}function dynamic(e,t){let a=l.default,n={loading:e=>{let{error:t,isLoading:a,pastDelay:n}=e;return null}};"function"==typeof e&&(n.loader=e),Object.assign(n,t);let r=n.loader;return a({...n,loader:()=>null!=r?r().then(convertModule):Promise.resolve(convertModule(()=>null))})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9167:function(e,t,a){"use strict";function NoSSR(e){let{children:t}=e;return t}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"NoSSR",{enumerable:!0,get:function(){return NoSSR}}),a(1283)},7075:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o}});let n=a(1024),l=n._(a(2265)),r=a(9167);function Loadable(e){let t=Object.assign({loader:null,loading:null,ssr:!0},e);function LoadableComponent(e){let a=t.loading,n=l.default.createElement(a,{isLoading:!0,pastDelay:!0,error:null}),o=t.ssr?l.default.Fragment:r.NoSSR,c=t.lazy;return l.default.createElement(l.default.Suspense,{fallback:n},l.default.createElement(o,null,l.default.createElement(c,e)))}return t.lazy=l.default.lazy(t.loader),LoadableComponent.displayName="LoadableComponent",LoadableComponent}let o=Loadable},6085:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return page}});var n=a(7437),l=a(2265),r=a(8811),o=a.n(r);let c=o()(()=>Promise.all([a.e(562),a.e(80)]).then(a.bind(a,2080)),{loadableGenerated:{webpack:()=>[2080]},ssr:!1});var grafik_PerKatalog=e=>{let{katalogData:t}=e,[a,r]=(0,l.useState)(),[o,u]=(0,l.useState)(),onData=()=>{let e=t&&t.reduce((e,t)=>{let a=t.jenis;return e[a]?e[a]++:e[a]=1,e},{});console.log(e);let a=e&&Object.entries(e).map(e=>{let[t,a]=e;return{name:t,data:a}}),n=a&&a.map(e=>e.name.toUpperCase());u(n),r([{name:"Jumlah",data:a&&a.map(e=>e.data)}])};return(0,l.useEffect)(()=>(onData(),()=>{}),[t]),a&&o&&(0,n.jsx)(c,{options:{chart:{id:"apexchart-example"},xaxis:{categories:o}},series:a,type:"bar",width:"100%",height:"100%"})},u=a(4970),page=()=>{let[e,t]=(0,l.useState)();return(0,l.useEffect)(()=>{window.scrollTo(0,0);let fetchData=async()=>{try{let e=await (0,u.W)({});t(e)}catch(e){console.error("Failed to fetch data:",e)}};fetchData()},[]),(0,n.jsx)("div",{className:"flex felx-col",children:(0,n.jsx)("div",{className:"h-80 w-full ",children:(0,n.jsx)(grafik_PerKatalog,{katalogData:e})})})}},4970:function(e,t,a){"use strict";a.d(t,{W:function(){return getKatalogAll},Z:function(){return getKatalog}});var n=a(8875);async function getKatalog(e){let{search:t="",jenis:a="",page:l=1,limit:r=12,orderBy:o,sort:c}=e,u=await fetch("".concat(n._n,"/api/katalog?jenis=").concat(a,"&search=").concat(t,"&page=").concat(l,"&limit=").concat(r,"&orderBy=").concat(o,"&sort=").concat(c),{next:{revalidate:1e3}});if(!u.ok)throw Error("Failed to fetch data");let{data:i}=await u.json();return i}async function getKatalogAll(e){let{search:t=""}=e,a=await fetch("".concat(n._n,"/api/katalog/all?search=").concat(t),{next:{revalidate:1e3}});if(!a.ok)throw Error("Failed to fetch data");let{data:l}=await a.json();return l}},8875:function(e,t,a){"use strict";a.d(t,{I8:function(){return r},Sj:function(){return o},_n:function(){return l},hi:function(){return c}});var n=a(2173);let l="https://perpus.thina.my.id",r=n.Z.create({baseURL:"".concat(l,"/auth")}),o=n.Z.create({baseURL:"".concat(l,"/crud")}),c=n.Z.create({baseURL:"".concat(l,"/api")});n.Z.create({baseURL:"".concat(l,"/storage")})}},function(e){e.O(0,[580,971,472,744],function(){return e(e.s=5031)}),_N_E=e.O()}]);