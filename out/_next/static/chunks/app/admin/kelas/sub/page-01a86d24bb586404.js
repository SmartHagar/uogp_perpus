(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1227],{9757:function(a,e,t){Promise.resolve().then(t.bind(t,7295))},7295:function(a,e,t){"use strict";t.r(e),t.d(e,{default:function(){return page}});var s=t(7437),l=t(2265),r=t(3423),u=t(7310),d=t(4660),n=t(4810),i=t(8875),o=t(5967);let c=(0,d.Ue)((0,n.mW)((a,e)=>({dtClassSub:[],showClassSub:[],setClassSub:async e=>{let{page:t=1,limit:s=10,search:l}=e;try{let e=await o.Z.getState().setToken(),r=await (0,i.Sj)({method:"get",url:"/classSub",headers:{Authorization:"Bearer ".concat(e)},params:{limit:s,page:t,search:l}});return a(a=>({...a,dtClassSub:r.data.data})),{status:"berhasil",data:r.data}}catch(a){var r;return{status:"error",error:null===(r=a.response)||void 0===r?void 0:r.data}}},setShowClassSub:async e=>{try{let t=await o.Z.getState().setToken(),s=await (0,i.Sj)({method:"get",url:"/classSub/".concat(e),headers:{Authorization:"Bearer ".concat(t)}});return a(a=>({...a,showClassSub:s.data.data})),{status:"berhasil",data:s.data}}catch(a){var t;return{status:"error",error:null===(t=a.response)||void 0===t?void 0:t.data}}},addData:async e=>{try{let t=await o.Z.getState().setToken(),s=await (0,i.Sj)({method:"post",url:"/classSub",headers:{Authorization:"Bearer ".concat(t)},data:e});return a(a=>({dtClassSub:{last_page:a.dtClassSub.last_page,current_page:a.dtClassSub.current_page,data:[s.data.data,...a.dtClassSub.data]}})),{status:"berhasil tambah",data:s.data}}catch(a){return{status:"error",data:a.response.data}}},removeData:async e=>{try{let t=await o.Z.getState().setToken(),s=await (0,i.Sj)({method:"delete",url:"/classSub/".concat(e),headers:{Authorization:"Bearer ".concat(t)}});return a(a=>({dtClassSub:{last_page:a.dtClassSub.last_page,current_page:a.dtClassSub.current_page,data:a.dtClassSub.data.filter(a=>a.id!==e)}})),{status:"berhasil hapus",data:s.data}}catch(a){return{status:"error",data:a.response.data}}},updateData:async(e,t)=>{try{let s=await o.Z.getState().setToken(),l=await (0,i.Sj)({method:"PUT",url:"/classSub/".concat(e),headers:{Authorization:"Bearer ".concat(s)},data:t});return a(a=>({dtClassSub:{last_page:a.dtClassSub.last_page,current_page:a.dtClassSub.current_page,data:a.dtClassSub.data.map(a=>a.id===e?{...a,...l.data.data}:a)}})),{status:"berhasil update",data:l.data}}catch(a){return{status:"error",data:a.response.data}}}})));var m=t(5991),h=t(4033),sub_ShowData=a=>{let{setDelete:e,setEdit:t,search:d}=a,{setClassSub:n,dtClassSub:i}=c(),[o,b]=(0,l.useState)(1),[p,S]=(0,l.useState)(10),[f,g]=(0,l.useState)(!0),x=(0,h.useSearchParams)(),v=x&&x.get("jenis")||"",fetchDataClassSub=async()=>{await n({page:o,limit:p,search:d}),g(!1)};return(0,l.useEffect)(()=>(fetchDataClassSub(),()=>{}),[o,p,v]),(0,l.useEffect)(()=>{b(1),fetchDataClassSub()},[d]),(0,s.jsx)("div",{className:"flex-1 flex-col max-w-full h-full overflow-auto",children:f?(0,s.jsx)("div",{className:"w-full h-full flex items-center justify-center",children:(0,s.jsx)(m.Z,{})}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"",children:(0,s.jsx)(u.Z,{headTable:["No","Nama Class Umum","Nama Sub","Aksi"],tableBodies:["class_umum.nm_umum","nm_sub"],dataTable:i.data,page:o,limit:p,setEdit:t,setDelete:e,ubah:!0,hapus:!0})}),(null==i?void 0:i.last_page)>1&&(0,s.jsx)("div",{className:"mt-4",children:(0,s.jsx)(r.Z,{currentPage:null==i?void 0:i.current_page,totalPages:null==i?void 0:i.last_page,setPage:b})})]})})},b=t(5782),p=t(8963),S=t(311),f=t(1865),g=t(945);let x=(0,d.Ue)((0,n.mW)((a,e)=>({dtClassUmum:[],setClassUmum:async e=>{let{page:t=1,limit:s=10,search:l}=e;try{let e=await (0,i.hi)({method:"get",url:"/classUmum",params:{limit:s,page:t,search:l}});return a(a=>({...a,dtClassUmum:e.data})),{status:"berhasil",data:e.data}}catch(a){return{status:"error",error:a.response.data}}},setClassUmumAll:async e=>{let{search:t}=e;try{let e=await (0,i.hi)({method:"get",url:"/classUmum/all",params:{search:t}});return a(a=>({...a,dtClassUmum:e.data})),{status:"berhasil",data:e.data}}catch(a){return{status:"error",error:a.response.data}}}})));t(1240);var form_BodyForm=a=>{let{register:e,errors:t,control:r,dtEdit:u,watch:d,setValue:n,showModal:i}=a,{setClassUmumAll:o,dtClassUmum:c}=x(),fetchDataClassUmum=async a=>{let{search:e}=a;await o({search:e})};return(0,l.useEffect)(()=>{fetchDataClassUmum({})},[i]),(0,s.jsxs)(s.Fragment,{children:[(null==c?void 0:c.data)&&(0,s.jsx)(g.Z,{label:"Class Umum",placeholder:"Pilih Class Umum",name:"class_umum_id",dataDb:null==c?void 0:c.data,body:["id","nm_umum"],control:r,required:!0,errors:t.class_umum_id,addClass:"col-span-4 lg:col-span-2"}),(0,s.jsx)(b.Z,{label:"Nama Sub Class",name:"nm_sub",register:e,minLength:1,required:!0,errors:t.nm_sub,addClass:"col-span-4"})]})},v=t(8528),form_Form=a=>{let{showModal:e,setShowModal:t,dtEdit:r}=a,{addData:u,updateData:d}=c(),{register:n,handleSubmit:i,setValue:o,control:m,formState:{errors:h},watch:g}=(0,f.cI)(),resetForm=()=>{o("id",""),o("nm_sub","")};(0,l.useEffect)(()=>{r?(o("id",r.id),o("nm_sub",r.nm_sub),o("class_umum_id",r.class_umum_id)):resetForm()},[e,r]);let onSubmit=async a=>{if(console.log({row:a}),r){let{data:e}=await d(r.id,a);(0,S.Z)({event:e}),t(!1)}else{let{data:e}=await u(a);console.log({data:e}),(0,S.Z)({event:e}),(null==e?void 0:e.type)!=="success"||resetForm()}};return(0,s.jsx)(p.Z,{title:"Form ClassSub",showModal:e,setShowModal:t,children:(0,s.jsxs)("form",{onSubmit:i(onSubmit),children:[(0,s.jsx)(b.Z,{name:"id",register:n,type:"hidden"}),(0,s.jsx)("div",{className:"grid grid-cols-4 gap-2 mb-4",children:(0,s.jsx)(form_BodyForm,{register:n,errors:h,dtEdit:r,control:m,watch:g,setValue:o,showModal:e})}),(0,s.jsx)("div",{children:(0,s.jsx)(v.Z,{type:"submit",onClick:i(onSubmit),addClass:"btn-primary",children:"Simpan"})})]})})},C=t(3015),j=t(5925),_=t(8001),page=()=>{let{removeData:a}=c(),[e,t]=(0,l.useState)(!1),[r,u]=(0,l.useState)(!1),[d,n]=(0,l.useState)(),[i,o]=(0,l.useState)(),[m,h]=(0,l.useState)(""),setDelete=async e=>{let{id:t,isDelete:s}=e;if(n(t),s){let{data:e}=await a(d);(0,S.Z)({event:e}),u(!1)}else u(!0)};return(0,s.jsxs)("div",{className:"flex flex-col h-full",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)(j.x7,{}),(0,s.jsx)(form_Form,{dtEdit:i,showModal:e,setShowModal:t}),(0,s.jsx)(C.Z,{showDel:r,setShowDel:u,setDelete:setDelete}),(0,s.jsxs)("div",{className:"mb-4 flex justify-between",children:[(0,s.jsx)("p",{children:"Silahkan mengolah data classSub"}),(0,s.jsx)("div",{children:(0,s.jsx)(v.Z,{onClick:()=>{t(!0),o(null)},addClass:"btn-primary",children:"Tambah"})})]}),(0,s.jsx)(_.Z,{placeholder:"Cari ClassSub",onChange:a=>h(a)})]}),(0,s.jsx)(sub_ShowData,{setDelete:setDelete,setEdit:a=>{t(!0),o(a)},search:m})]})}},945:function(a,e,t){"use strict";var s=t(7437);t(2265);var l=t(8749),r=t(1865);e.Z=a=>{let{dataDb:e,body:t,control:u,required:d,name:n,errors:i,placeholder:o,addClass:c,label:m,defaultOptions:h=!0,menuPosition:b}=a,p={multiValue:(a,e)=>e.data.isFixed?{...a,backgroundColor:"gray"}:a,multiValueLabel:(a,e)=>e.data.isFixed?{...a,fontWeight:"bold",color:"white",paddingRight:6}:a,multiValueRemove:(a,e)=>e.data.isFixed?{...a,display:"none"}:a},getProperty=(a,e)=>{let t=a[e];if("id"===e)return{value:t,label:""};if(!e.includes("."))return{value:"",label:t};{let[t,...s]=e.split("."),l=a[t];return getProperty(l,s.join("."))}},myOptions=()=>{let a=e&&e.map((a,e)=>{let s=t.map(e=>getProperty(a,e)),l=s.map(a=>a.label).filter(a=>""!==a),r=l.join(l.length>1?" - ":"");return{value:s.find(a=>""!==a.value).value,label:r}});return a},filterData=a=>{var e;return null===(e=myOptions())||void 0===e?void 0:e.filter(e=>e.label.toLowerCase().includes(a.toLowerCase()))},loadOptions=(a,e)=>{setTimeout(()=>{e(filterData(a))},1e3)};return(0,s.jsxs)("div",{className:c,children:[m&&(0,s.jsx)("label",{className:"text-sm font-medium text-gray-700 tracking-wide",children:m}),d&&(0,s.jsx)("span",{className:"ml-1 text-red-600",children:"*"}),(0,s.jsx)(r.Qr,{name:n,control:u,rules:{required:d},render:a=>{var e;let{field:{onChange:t,value:r,ref:u}}=a;return(0,s.jsx)(l.Z,{cacheOptions:!0,defaultOptions:h,isClearable:!0,isSearchable:!0,loadOptions:loadOptions,placeholder:o,menuPlacement:"auto",menuPosition:b,styles:p,ref:u,value:(null===(e=myOptions())||void 0===e?void 0:e.find(a=>a.value===r))||null,onChange:a=>t(a?a.value:a)})}}),(null==i?void 0:i.type)==="required"&&(0,s.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[m," tidak boleh kosong"]})]})}}},function(a){a.O(0,[8447,6990,5580,4758,5166,4,1356,341,2209,589,2971,2472,1744],function(){return a(a.s=9757)}),_N_E=a.O()}]);