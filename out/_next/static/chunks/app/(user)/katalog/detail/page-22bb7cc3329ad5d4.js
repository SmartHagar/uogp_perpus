(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[970],{1724:function(a,t,e){Promise.resolve().then(e.bind(e,8788))},8788:function(a,t,e){"use strict";e.r(t);var s=e(7437),r=e(8875),n=e(6446),l=e(6691),c=e.n(l),i=e(4033),d=e(2265);t.default=a=>{let t=(0,i.useSearchParams)(),e=t.get("katalog_id")||"",{setKatalogDetail:l,dtKatalog:o}=(0,n.Z)();return(0,d.useEffect)(()=>{l(e)},[e]),console.log({dtKatalog:o}),(0,s.jsx)("div",{className:"flex flex-col gap-y-6 min-h-screen",children:(0,s.jsxs)("div",{className:"card lg:card-side bg-base-100 shadow-xl",children:[(0,s.jsx)("figure",{className:"h-full lg:max-w-lg",children:(0,s.jsx)(c(),{src:"".concat(r._n,"/").concat(o.cover),alt:"Katalog",width:100,height:100,className:"w-full"})}),(0,s.jsxs)("div",{className:"card-body text-white",children:[(0,s.jsx)("h2",{className:"card-title",children:o.judul}),(0,s.jsxs)("div",{className:"flex flex-col gap-2 mt-2",children:[(0,s.jsxs)("p",{children:[(0,s.jsx)("span",{children:"Penulis :"}),(0,s.jsxs)("span",{children:[" ",o.penulis]})]}),(0,s.jsxs)("p",{children:[(0,s.jsx)("span",{children:"Penerbit :"}),(0,s.jsxs)("span",{children:[" ",o.penerbit]})]}),(0,s.jsxs)("p",{children:[(0,s.jsx)("span",{children:"Tahun :"}),(0,s.jsxs)("span",{children:[" ",o.tahun]})]}),(0,s.jsxs)("p",{children:[(0,s.jsx)("span",{children:"Stok :"}),(0,s.jsxs)("span",{children:[" ",o.stok]})]})]})]})]})})}},8875:function(a,t,e){"use strict";e.d(t,{I8:function(){return n},Sj:function(){return l},_n:function(){return r},hi:function(){return c}});var s=e(2173);let r="https://perpus.thina.my.id",n=s.Z.create({baseURL:"".concat(r,"/auth")}),l=s.Z.create({baseURL:"".concat(r,"/crud")}),c=s.Z.create({baseURL:"".concat(r,"/api")});s.Z.create({baseURL:"".concat(r,"/storage")})},6446:function(a,t,e){"use strict";var s=e(4660),r=e(4810),n=e(8875);let l=(0,s.Ue)((0,r.mW)((a,t)=>({dtKatalog:[],setKatalog:async t=>{let{page:e=1,limit:s=10,orderBy:r,sort:l,search:c}=t;try{let t=await (0,n.hi)({method:"get",url:"/katalog",params:{limit:s,page:e,orderBy:r,sort:l,search:c}});return a(a=>({...a,dtKatalog:t.data})),{status:"berhasil",data:t.data}}catch(a){return{status:"error",error:a.response.data}}},setKatalogAll:async t=>{let{search:e}=t;try{let t=await (0,n.hi)({method:"get",url:"/katalog/all",params:{search:e}});return a(a=>({...a,dtKatalog:t.data})),{status:"berhasil",data:t.data}}catch(a){return{status:"error",error:a.response.data}}},setKatalogReady:async t=>{let{search:e,jenis:s}=t;try{let t=await (0,n.hi)({method:"get",url:"/katalog/ready",params:{search:e,jenis:s}});return a(a=>({...a,dtKatalog:t.data})),{status:"berhasil",data:t.data}}catch(a){return{status:"error",error:a.response.data}}},setKatalogDetail:async t=>{try{let e=await (0,n.hi)({method:"get",url:"/katalog/detail/".concat(t)});return a(a=>{var t;return{...a,dtKatalog:null===(t=e.data)||void 0===t?void 0:t.data}}),{status:"berhasil",data:e.data}}catch(a){return{status:"error",error:a.response.data}}}})));t.Z=l}},function(a){a.O(0,[580,758,166,971,472,744],function(){return a(a.s=1724)}),_N_E=a.O()}]);