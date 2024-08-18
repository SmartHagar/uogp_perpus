"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5166],{1853:function(e,n,o){/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s=o(2265);function h(e,n){return e===n&&(0!==e||1/e==1/n)||e!=e&&n!=n}var i="function"==typeof Object.is?Object.is:h,u=s.useState,l=s.useEffect,c=s.useLayoutEffect,d=s.useDebugValue;function q(e,n){var o=n(),s=u({inst:{value:o,getSnapshot:n}}),i=s[0].inst,f=s[1];return c(function(){i.value=o,i.getSnapshot=n,r(i)&&f({inst:i})},[e,o,n]),l(function(){return r(i)&&f({inst:i}),e(function(){r(i)&&f({inst:i})})},[e]),d(o),o}function r(e){var n=e.getSnapshot;e=e.value;try{var o=n();return!i(e,o)}catch(e){return!0}}function t(e,n){return n()}var f="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?t:q;n.useSyncExternalStore=void 0!==s.useSyncExternalStore?s.useSyncExternalStore:f},8704:function(e,n,o){/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s=o(2265),i=o(6272);function p(e,n){return e===n&&(0!==e||1/e==1/n)||e!=e&&n!=n}var u="function"==typeof Object.is?Object.is:p,l=i.useSyncExternalStore,c=s.useRef,d=s.useEffect,f=s.useMemo,S=s.useDebugValue;n.useSyncExternalStoreWithSelector=function(e,n,o,s,i){var v=c(null);if(null===v.current){var y={hasValue:!1,value:null};v.current=y}else y=v.current;var m=l(e,(v=f(function(){function a(n){if(!c){if(c=!0,e=n,n=s(n),void 0!==i&&y.hasValue){var o=y.value;if(i(o,n))return l=o}return l=n}if(o=l,u(e,n))return o;var d=s(n);return void 0!==i&&i(o,d)?o:(e=n,l=d)}var e,l,c=!1,d=void 0===o?null:o;return[function(){return a(n())},null===d?void 0:function(){return a(d())}]},[n,o,s,i]))[0],v[1]);return d(function(){y.hasValue=!0,y.value=m},[m]),S(m),m}},6272:function(e,n,o){e.exports=o(1853)},5401:function(e,n,o){e.exports=o(8704)},4660:function(e,n,o){o.d(n,{Ue:function(){return create}});let createStoreImpl=e=>{let n;let o=new Set,setState=(e,s)=>{let i="function"==typeof e?e(n):e;if(!Object.is(i,n)){let e=n;n=(null!=s?s:"object"!=typeof i)?i:Object.assign({},n,i),o.forEach(o=>o(n,e))}},getState=()=>n,s={setState,getState,subscribe:e=>(o.add(e),()=>o.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),o.clear()}};return n=e(setState,getState,s),s},createStore=e=>e?createStoreImpl(e):createStoreImpl;var s=o(2265),i=o(5401);let{useDebugValue:u}=s,{useSyncExternalStoreWithSelector:l}=i,c=!1;function useStore(e,n=e.getState,o){o&&!c&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),c=!0);let s=l(e.subscribe,e.getState,e.getServerState||e.getState,n,o);return u(s),s}let createImpl=e=>{"function"!=typeof e&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");let n="function"==typeof e?createStore(e):e,useBoundStore=(e,o)=>useStore(n,e,o);return Object.assign(useBoundStore,n),useBoundStore},create=e=>e?createImpl(e):createImpl},4810:function(e,n,o){o.d(n,{mW:function(){return devtools}});let s=new Map,getTrackedConnectionState=e=>{let n=s.get(e);return n?Object.fromEntries(Object.entries(n.stores).map(([e,n])=>[e,n.getState()])):{}},extractConnectionInformation=(e,n,o)=>{if(void 0===e)return{type:"untracked",connection:n.connect(o)};let i=s.get(o.name);if(i)return{type:"tracked",store:e,...i};let u={connection:n.connect(o),stores:{}};return s.set(o.name,u),{type:"tracked",store:e,...u}},devtools=(e,n={})=>(o,s,i)=>{let u;let{enabled:l,anonymousActionType:c,store:d,...f}=n;try{u=(null==l||l)&&window.__REDUX_DEVTOOLS_EXTENSION__}catch(e){}if(!u)return l&&console.warn("[zustand devtools middleware] Please install/enable Redux devtools extension"),e(o,s,i);let{connection:S,...v}=extractConnectionInformation(d,u,f),y=!0;i.setState=(e,n,u)=>{let l=o(e,n);if(!y)return l;let v=void 0===u?{type:c||"anonymous"}:"string"==typeof u?{type:u}:u;return void 0===d?null==S||S.send(v,s()):null==S||S.send({...v,type:`${d}/${v.type}`},{...getTrackedConnectionState(f.name),[d]:i.getState()}),l};let setStateFromDevtools=(...e)=>{let n=y;y=!1,o(...e),y=n},m=e(i.setState,s,i);if("untracked"===v.type?null==S||S.init(m):(v.stores[v.store]=i,null==S||S.init(Object.fromEntries(Object.entries(v.stores).map(([e,n])=>[e,e===v.store?m:n.getState()])))),i.dispatchFromDevtools&&"function"==typeof i.dispatch){let e=!1,n=i.dispatch;i.dispatch=(...o)=>{"__setState"!==o[0].type||e||(console.warn('[zustand devtools middleware] "__setState" action type is reserved to set state from the devtools. Avoid using it.'),e=!0),n(...o)}}return S.subscribe(e=>{var n;switch(e.type){case"ACTION":if("string"!=typeof e.payload){console.error("[zustand devtools middleware] Unsupported action format");return}return parseJsonThen(e.payload,e=>{if("__setState"===e.type){if(void 0===d){setStateFromDevtools(e.state);return}1!==Object.keys(e.state).length&&console.error(`
                    [zustand devtools middleware] Unsupported __setState action format. 
                    When using 'store' option in devtools(), the 'state' should have only one key, which is a value of 'store' that was passed in devtools(),
                    and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }
                    `);let n=e.state[d];if(null==n)return;JSON.stringify(i.getState())!==JSON.stringify(n)&&setStateFromDevtools(n);return}i.dispatchFromDevtools&&"function"==typeof i.dispatch&&i.dispatch(e)});case"DISPATCH":switch(e.payload.type){case"RESET":if(setStateFromDevtools(m),void 0===d)return null==S?void 0:S.init(i.getState());return null==S?void 0:S.init(getTrackedConnectionState(f.name));case"COMMIT":if(void 0===d){null==S||S.init(i.getState());break}return null==S?void 0:S.init(getTrackedConnectionState(f.name));case"ROLLBACK":return parseJsonThen(e.state,e=>{if(void 0===d){setStateFromDevtools(e),null==S||S.init(i.getState());return}setStateFromDevtools(e[d]),null==S||S.init(getTrackedConnectionState(f.name))});case"JUMP_TO_STATE":case"JUMP_TO_ACTION":return parseJsonThen(e.state,e=>{if(void 0===d){setStateFromDevtools(e);return}JSON.stringify(i.getState())!==JSON.stringify(e[d])&&setStateFromDevtools(e[d])});case"IMPORT_STATE":{let{nextLiftedState:o}=e.payload,s=null==(n=o.computedStates.slice(-1)[0])?void 0:n.state;if(!s)return;void 0===d?setStateFromDevtools(s):setStateFromDevtools(s[d]),null==S||S.send(null,o);break}case"PAUSE_RECORDING":return y=!y}return}}),m},parseJsonThen=(e,n)=>{let o;try{o=JSON.parse(e)}catch(e){console.error("[zustand devtools middleware] Could not parse the received json",e)}void 0!==o&&n(o)}}}]);