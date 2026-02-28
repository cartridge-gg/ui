import{j as u}from"./jsx-runtime-Cf8x2fCZ.js";import{fn as m}from"./index-BgJgh-x_.js";import{I as ht}from"./context-CDbX8kD3.js";import"./alert-HkMSTgu9.js";import"./badge-CF9VCaa2.js";import"./breadcrumb-V3TW3CaT.js";import"./index-CYmZMVXJ.js";import"./card-CHJmWtwN.js";import"./checkbox-BJGOHg_b.js";import"./drawer-CB1qWX_Q.js";import"./dropdown-menu-Bf3pfD8n.js";import"./radio-group-WlSpQHWm.js";import"./menubar-eE93DyoQ.js";import{P as pt,c as vt,b as gt}from"./popover-DNr9wWs8.js";import"./progress-Dkom_LNH.js";import"./select-COP56eT4.js";import"./separator-DLNkf967.js";import"./sheet-BHnC42pu.js";import"./skeleton-CV1PtUMd.js";import"./switch-CWQaiJ0M.js";import"./table-2Lq_Rdjg.js";import"./tabs-pHV4z6kt.js";import"./toggle-group-Bz_GEFe3.js";import"./index-Cd0zht5T.js";import"./tooltip-CEc4qSmp.js";import{c as L}from"./index-KnJS0CU8.js";import{r as v,R as C}from"./index-BlmOqGMO.js";import{h as yt}from"./index-DuqhnXMO.js";import{A as bt}from"./account-search-result-MTYBMCfb.js";import{E as wt}from"./spinner-BCFkRInS.js";import{A as xt}from"./player-badge-B7pDkZH-.js";import{P as Rt}from"./plus-YZVDKPBW.js";import{A as St}from"./player-avatar-QlCq2E0v.js";import{S as Et}from"./seedling-Du3aBfjm.js";import{S as Ft}from"./sparkles-CY9lzZpH.js";import{T as Ct}from"./times-zfpenlOA.js";import"./index-yBjzXJbu.js";import"./index-Dkb_ZYRU.js";import"./index-BYUKtP1h.js";import"./index-C_Dn7qTj.js";import"./index-BQxh6BgF.js";import"./index-CVWIyhAF.js";import"./index-BbW-7v3v.js";import"./index-DdDw_O67.js";import"./wedge-Ek6y42Ws.js";import"./utils-GTnaulzv.js";import"./index-CRGxjvZy.js";import"./index-B7ENhYdy.js";import"./index-BylD-epk.js";import"./index-DZCApzUK.js";import"./index-CJGASTBR.js";import"./alert-DG-IKYwr.js";import"./times-circle-BPxv1pFA.js";import"./dots-CqQy5XBj.js";import"./index-DZ2oWOeb.js";import"./index-DaMGPy2X.js";import"./checkbox-BNhnVxLV.js";import"./index-BV9D_7a1.js";import"./index-z8P03atw.js";import"./index-DoUPdNCX.js";import"./check-BknbCD27.js";import"./circle-Ddb5-e2i.js";import"./index-COzOtNfS.js";import"./circle-check-B84UAr7O.js";import"./utils-CzDHQuSw.js";import"./index-fNjTmf9T.js";import"./empty-BoLAzEHX.js";import"./thumbnail-BYLXA86H.js";import"./index-DTUS6EFt.js";import"./warning-CVvTL8z7.js";import"./info-BgozbEzj.js";import"./olmech-1Z8z4GR2.js";function Ut(r,t){return async(n,a,i)=>{const s=await(await fetch(r,{method:"POST",credentials:(t==null?void 0:t.credentials)||"include",headers:{"Content-Type":"application/json",...t==null?void 0:t.headers},body:JSON.stringify({query:n,variables:a}),signal:i})).json();if(s.errors){const{message:o}=s.errors[0];throw new Error(o)}return s.data}}const Ot={url:""},Dt=v.createContext(Ot);function ee(r,t){return ee=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,a){return n.__proto__=a,n},ee(r,t)}function ut(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,ee(r,t)}var lt=function(){function r(){this.listeners=[]}var t=r.prototype;return t.subscribe=function(a){var i=this,e=a||function(){};return this.listeners.push(e),this.onSubscribe(),function(){i.listeners=i.listeners.filter(function(s){return s!==e}),i.onUnsubscribe()}},t.hasListeners=function(){return this.listeners.length>0},t.onSubscribe=function(){},t.onUnsubscribe=function(){},r}();function j(){return j=Object.assign?Object.assign.bind():function(r){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)({}).hasOwnProperty.call(n,a)&&(r[a]=n[a])}return r},j.apply(null,arguments)}var te=typeof window>"u";function kt(){}function ue(r){return typeof r=="number"&&r>=0&&r!==1/0}function Tt(r,t){return Math.max(r+(t||0)-Date.now(),0)}function Nt(r,t,n){return Lt(r)?typeof t=="function"?j({},n,{queryKey:r,queryFn:t}):j({},t,{queryKey:r}):r}function re(r,t){if(r===t)return r;var n=Array.isArray(r)&&Array.isArray(t);if(n||le(r)&&le(t)){for(var a=n?r.length:Object.keys(r).length,i=n?t:Object.keys(t),e=i.length,s=n?[]:{},o=0,c=0;c<e;c++){var l=n?c:i[c];s[l]=re(r[l],t[l]),s[l]===r[l]&&o++}return a===e&&o===a?r:s}return t}function jt(r,t){if(r&&!t||t&&!r)return!1;for(var n in r)if(r[n]!==t[n])return!1;return!0}function le(r){if(!ce(r))return!1;var t=r.constructor;if(typeof t>"u")return!0;var n=t.prototype;return!(!ce(n)||!n.hasOwnProperty("isPrototypeOf"))}function ce(r){return Object.prototype.toString.call(r)==="[object Object]"}function Lt(r){return typeof r=="string"||Array.isArray(r)}function de(r){Promise.resolve().then(r).catch(function(t){return setTimeout(function(){throw t})})}var At=function(r){ut(t,r);function t(){var a;return a=r.call(this)||this,a.setup=function(i){var e;if(!te&&((e=window)!=null&&e.addEventListener)){var s=function(){return i()};return window.addEventListener("visibilitychange",s,!1),window.addEventListener("focus",s,!1),function(){window.removeEventListener("visibilitychange",s),window.removeEventListener("focus",s)}}},a}var n=t.prototype;return n.onSubscribe=function(){this.cleanup||this.setEventListener(this.setup)},n.onUnsubscribe=function(){if(!this.hasListeners()){var i;(i=this.cleanup)==null||i.call(this),this.cleanup=void 0}},n.setEventListener=function(i){var e,s=this;this.setup=i,(e=this.cleanup)==null||e.call(this),this.cleanup=i(function(o){typeof o=="boolean"?s.setFocused(o):s.onFocus()})},n.setFocused=function(i){this.focused=i,i&&this.onFocus()},n.onFocus=function(){this.listeners.forEach(function(i){i()})},n.isFocused=function(){return typeof this.focused=="boolean"?this.focused:typeof document>"u"?!0:[void 0,"visible","prerender"].includes(document.visibilityState)},t}(lt),Qt=new At,It=function(t){this.revert=t==null?void 0:t.revert,this.silent=t==null?void 0:t.silent};function Pt(r){return r instanceof It}var qt=function(){function r(){this.queue=[],this.transactions=0,this.notifyFn=function(n){n()},this.batchNotifyFn=function(n){n()}}var t=r.prototype;return t.batch=function(a){var i;this.transactions++;try{i=a()}finally{this.transactions--,this.transactions||this.flush()}return i},t.schedule=function(a){var i=this;this.transactions?this.queue.push(a):de(function(){i.notifyFn(a)})},t.batchCalls=function(a){var i=this;return function(){for(var e=arguments.length,s=new Array(e),o=0;o<e;o++)s[o]=arguments[o];i.schedule(function(){a.apply(void 0,s)})}},t.flush=function(){var a=this,i=this.queue;this.queue=[],i.length&&de(function(){a.batchNotifyFn(function(){i.forEach(function(e){a.notifyFn(e)})})})},t.setNotifyFunction=function(a){this.notifyFn=a},t.setBatchNotifyFunction=function(a){this.batchNotifyFn=a},r}(),N=new qt,ct=console;function fe(){return ct}function _t(r){ct=r}var Vt=function(r){ut(t,r);function t(a,i){var e;return e=r.call(this)||this,e.client=a,e.options=i,e.trackedProps=[],e.selectError=null,e.bindMethods(),e.setOptions(i),e}var n=t.prototype;return n.bindMethods=function(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)},n.onSubscribe=function(){this.listeners.length===1&&(this.currentQuery.addObserver(this),me(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())},n.onUnsubscribe=function(){this.listeners.length||this.destroy()},n.shouldFetchOnReconnect=function(){return ne(this.currentQuery,this.options,this.options.refetchOnReconnect)},n.shouldFetchOnWindowFocus=function(){return ne(this.currentQuery,this.options,this.options.refetchOnWindowFocus)},n.destroy=function(){this.listeners=[],this.clearTimers(),this.currentQuery.removeObserver(this)},n.setOptions=function(i,e){var s=this.options,o=this.currentQuery;if(this.options=this.client.defaultQueryObserverOptions(i),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=s.queryKey),this.updateQuery();var c=this.hasListeners();c&&he(this.currentQuery,o,this.options,s)&&this.executeFetch(),this.updateResult(e),c&&(this.currentQuery!==o||this.options.enabled!==s.enabled||this.options.staleTime!==s.staleTime)&&this.updateStaleTimeout();var l=this.computeRefetchInterval();c&&(this.currentQuery!==o||this.options.enabled!==s.enabled||l!==this.currentRefetchInterval)&&this.updateRefetchInterval(l)},n.getOptimisticResult=function(i){var e=this.client.defaultQueryObserverOptions(i),s=this.client.getQueryCache().build(this.client,e);return this.createResult(s,e)},n.getCurrentResult=function(){return this.currentResult},n.trackResult=function(i,e){var s=this,o={},c=function(g){s.trackedProps.includes(g)||s.trackedProps.push(g)};return Object.keys(i).forEach(function(l){Object.defineProperty(o,l,{configurable:!1,enumerable:!0,get:function(){return c(l),i[l]}})}),(e.useErrorBoundary||e.suspense)&&c("error"),o},n.getNextResult=function(i){var e=this;return new Promise(function(s,o){var c=e.subscribe(function(l){l.isFetching||(c(),l.isError&&(i!=null&&i.throwOnError)?o(l.error):s(l))})})},n.getCurrentQuery=function(){return this.currentQuery},n.remove=function(){this.client.getQueryCache().remove(this.currentQuery)},n.refetch=function(i){return this.fetch(j({},i,{meta:{refetchPage:i==null?void 0:i.refetchPage}}))},n.fetchOptimistic=function(i){var e=this,s=this.client.defaultQueryObserverOptions(i),o=this.client.getQueryCache().build(this.client,s);return o.fetch().then(function(){return e.createResult(o,s)})},n.fetch=function(i){var e=this;return this.executeFetch(i).then(function(){return e.updateResult(),e.currentResult})},n.executeFetch=function(i){this.updateQuery();var e=this.currentQuery.fetch(this.options,i);return i!=null&&i.throwOnError||(e=e.catch(kt)),e},n.updateStaleTimeout=function(){var i=this;if(this.clearStaleTimeout(),!(te||this.currentResult.isStale||!ue(this.options.staleTime))){var e=Tt(this.currentResult.dataUpdatedAt,this.options.staleTime),s=e+1;this.staleTimeoutId=setTimeout(function(){i.currentResult.isStale||i.updateResult()},s)}},n.computeRefetchInterval=function(){var i;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(i=this.options.refetchInterval)!=null?i:!1},n.updateRefetchInterval=function(i){var e=this;this.clearRefetchInterval(),this.currentRefetchInterval=i,!(te||this.options.enabled===!1||!ue(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(function(){(e.options.refetchIntervalInBackground||Qt.isFocused())&&e.executeFetch()},this.currentRefetchInterval))},n.updateTimers=function(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())},n.clearTimers=function(){this.clearStaleTimeout(),this.clearRefetchInterval()},n.clearStaleTimeout=function(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)},n.clearRefetchInterval=function(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)},n.createResult=function(i,e){var s=this.currentQuery,o=this.options,c=this.currentResult,l=this.currentResultState,g=this.currentResultOptions,f=i!==s,y=f?i.state:this.currentQueryInitialState,h=f?this.currentResult:this.previousQueryResult,p=i.state,R=p.dataUpdatedAt,E=p.error,D=p.errorUpdatedAt,U=p.isFetching,d=p.status,b=!1,F=!1,x;if(e.optimisticResults){var O=this.hasListeners(),J=!O&&me(i,e),X=O&&he(i,s,e,o);(J||X)&&(U=!0,R||(d="loading"))}if(e.keepPreviousData&&!p.dataUpdateCount&&(h!=null&&h.isSuccess)&&d!=="error")x=h.data,R=h.dataUpdatedAt,d=h.status,b=!0;else if(e.select&&typeof p.data<"u")if(c&&p.data===(l==null?void 0:l.data)&&e.select===this.selectFn)x=this.selectResult;else try{this.selectFn=e.select,x=e.select(p.data),e.structuralSharing!==!1&&(x=re(c==null?void 0:c.data,x)),this.selectResult=x,this.selectError=null}catch(k){fe().error(k),this.selectError=k}else x=p.data;if(typeof e.placeholderData<"u"&&typeof x>"u"&&(d==="loading"||d==="idle")){var S;if(c!=null&&c.isPlaceholderData&&e.placeholderData===(g==null?void 0:g.placeholderData))S=c.data;else if(S=typeof e.placeholderData=="function"?e.placeholderData():e.placeholderData,e.select&&typeof S<"u")try{S=e.select(S),e.structuralSharing!==!1&&(S=re(c==null?void 0:c.data,S)),this.selectError=null}catch(k){fe().error(k),this.selectError=k}typeof S<"u"&&(d="success",x=S,F=!0)}this.selectError&&(E=this.selectError,x=this.selectResult,D=Date.now(),d="error");var H={status:d,isLoading:d==="loading",isSuccess:d==="success",isError:d==="error",isIdle:d==="idle",data:x,dataUpdatedAt:R,error:E,errorUpdatedAt:D,failureCount:p.fetchFailureCount,errorUpdateCount:p.errorUpdateCount,isFetched:p.dataUpdateCount>0||p.errorUpdateCount>0,isFetchedAfterMount:p.dataUpdateCount>y.dataUpdateCount||p.errorUpdateCount>y.errorUpdateCount,isFetching:U,isRefetching:U&&d!=="loading",isLoadingError:d==="error"&&p.dataUpdatedAt===0,isPlaceholderData:F,isPreviousData:b,isRefetchError:d==="error"&&p.dataUpdatedAt!==0,isStale:ie(i,e),refetch:this.refetch,remove:this.remove};return H},n.shouldNotifyListeners=function(i,e){if(!e)return!0;var s=this.options,o=s.notifyOnChangeProps,c=s.notifyOnChangePropsExclusions;if(!o&&!c||o==="tracked"&&!this.trackedProps.length)return!0;var l=o==="tracked"?this.trackedProps:o;return Object.keys(i).some(function(g){var f=g,y=i[f]!==e[f],h=l==null?void 0:l.some(function(R){return R===g}),p=c==null?void 0:c.some(function(R){return R===g});return y&&!p&&(!l||h)})},n.updateResult=function(i){var e=this.currentResult;if(this.currentResult=this.createResult(this.currentQuery,this.options),this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,!jt(this.currentResult,e)){var s={cache:!0};(i==null?void 0:i.listeners)!==!1&&this.shouldNotifyListeners(this.currentResult,e)&&(s.listeners=!0),this.notify(j({},s,i))}},n.updateQuery=function(){var i=this.client.getQueryCache().build(this.client,this.options);if(i!==this.currentQuery){var e=this.currentQuery;this.currentQuery=i,this.currentQueryInitialState=i.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(e==null||e.removeObserver(this),i.addObserver(this))}},n.onQueryUpdate=function(i){var e={};i.type==="success"?e.onSuccess=!0:i.type==="error"&&!Pt(i.error)&&(e.onError=!0),this.updateResult(e),this.hasListeners()&&this.updateTimers()},n.notify=function(i){var e=this;N.batch(function(){i.onSuccess?(e.options.onSuccess==null||e.options.onSuccess(e.currentResult.data),e.options.onSettled==null||e.options.onSettled(e.currentResult.data,null)):i.onError&&(e.options.onError==null||e.options.onError(e.currentResult.error),e.options.onSettled==null||e.options.onSettled(void 0,e.currentResult.error)),i.listeners&&e.listeners.forEach(function(s){s(e.currentResult)}),i.cache&&e.client.getQueryCache().notify({query:e.currentQuery,type:"observerResultsUpdated"})})},t}(lt);function Mt(r,t){return t.enabled!==!1&&!r.state.dataUpdatedAt&&!(r.state.status==="error"&&t.retryOnMount===!1)}function me(r,t){return Mt(r,t)||r.state.dataUpdatedAt>0&&ne(r,t,t.refetchOnMount)}function ne(r,t,n){if(t.enabled!==!1){var a=typeof n=="function"?n(r):n;return a==="always"||a!==!1&&ie(r,t)}return!1}function he(r,t,n,a){return n.enabled!==!1&&(r!==t||a.enabled===!1)&&(!n.suspense||r.state.status!=="error")&&ie(r,n)}function ie(r,t){return r.isStaleByTime(t.staleTime)}var Zt=yt.unstable_batchedUpdates;N.setBatchNotifyFunction(Zt);var Kt=console;_t(Kt);var pe=C.createContext(void 0),Wt=C.createContext(!1);function zt(r){return r&&typeof window<"u"?(window.ReactQueryClientContext||(window.ReactQueryClientContext=pe),window.ReactQueryClientContext):pe}var Bt=function(){var t=C.useContext(zt(C.useContext(Wt)));if(!t)throw new Error("No QueryClient set, use QueryClientProvider to set one");return t};function Gt(){var r=!1;return{clearReset:function(){r=!1},reset:function(){r=!0},isReset:function(){return r}}}var Yt=C.createContext(Gt()),$t=function(){return C.useContext(Yt)};function Jt(r,t,n){return typeof t=="function"?t.apply(void 0,n):typeof t=="boolean"?t:!!r}function Xt(r,t){var n=C.useRef(!1),a=C.useState(0),i=a[1],e=Bt(),s=$t(),o=e.defaultQueryObserverOptions(r);o.optimisticResults=!0,o.onError&&(o.onError=N.batchCalls(o.onError)),o.onSuccess&&(o.onSuccess=N.batchCalls(o.onSuccess)),o.onSettled&&(o.onSettled=N.batchCalls(o.onSettled)),o.suspense&&(typeof o.staleTime!="number"&&(o.staleTime=1e3),o.cacheTime===0&&(o.cacheTime=1)),(o.suspense||o.useErrorBoundary)&&(s.isReset()||(o.retryOnMount=!1));var c=C.useState(function(){return new t(e,o)}),l=c[0],g=l.getOptimisticResult(o);if(C.useEffect(function(){n.current=!0,s.clearReset();var f=l.subscribe(N.batchCalls(function(){n.current&&i(function(y){return y+1})}));return l.updateResult(),function(){n.current=!1,f()}},[s,l]),C.useEffect(function(){l.setOptions(o,{listeners:!1})},[o,l]),o.suspense&&g.isLoading)throw l.fetchOptimistic(o).then(function(f){var y=f.data;o.onSuccess==null||o.onSuccess(y),o.onSettled==null||o.onSettled(y,null)}).catch(function(f){s.clearReset(),o.onError==null||o.onError(f),o.onSettled==null||o.onSettled(void 0,f)});if(g.isError&&!s.isReset()&&!g.isFetching&&Jt(o.suspense,o.useErrorBoundary,[g.error,l.getCurrentQuery()]))throw g.error;return o.notifyOnChangeProps==="tracked"&&(g=l.trackResult(g,o)),g}function Ht(r,t,n){var a=Nt(r,t,n);return Xt(a,Vt)}function er(r,t){const{url:n,credentials:a,headers:i}=nr(),e=Ut(n,{credentials:a,headers:{...i,...t==null?void 0:t.headers}});return s=>e(r,s)}const tr=`
    query AccountSearch($query: String!, $limit: Int = 5) {
  searchAccounts(query: $query, limit: $limit) {
    username
    credits {
      amount
      decimals
    }
    updatedAt
  }
}
    `,rr=(r,t)=>Ht(["AccountSearch",r],er(tr).bind(null,r),t);function nr(){return v.useContext(Dt)}function sr(r,t){const[n,a]=v.useState(r);return v.useEffect(()=>{const i=setTimeout(()=>{a(r)},t);return()=>{clearTimeout(i)}},[r,t]),n}function ir(r,t={}){const{minLength:n=1,debounceMs:a=300,maxResults:i=5}=t,e=sr(r.trim().toLowerCase(),a),s=e.length>=n,{data:o,isLoading:c,error:l}=rr({query:e,limit:i},{enabled:s,staleTime:30*1e3,cacheTime:5*60*1e3});return{results:v.useMemo(()=>{if(!s)return[];const f=[];return o!=null&&o.searchAccounts&&f.push(...o.searchAccounts.map(h=>{const p=h.credits?Math.floor(Number(h.credits.amount)/Math.pow(10,h.credits.decimals)):void 0;return{id:`existing-${h.username}`,type:"existing",username:h.username,points:p,lastOnline:h.updatedAt?new Date(h.updatedAt):void 0}})),!(f==null?void 0:f.find(h=>h.username.toLowerCase()===e.toLowerCase()))&&e.length>=3&&f.unshift({id:`create-new-${e}`,type:"create-new",username:e}),f},[o,e,s]),isLoading:s&&c,error:l}}const ae=v.forwardRef(({query:r,isOpen:t,onOpenChange:n,onSelect:a,children:i,selectedIndex:e,onSelectedIndexChange:s,mockResults:o,mockIsLoading:c,mockError:l},g)=>{const f=o!==void 0?{results:[],isLoading:!1,error:void 0}:ir(r,{minLength:1,debounceMs:300,maxResults:5}),y=o??f.results,h=c??f.isLoading,p=l??f.error,R=y.length>0,E=v.useMemo(()=>!!(t&&r.length>0&&(R||h)),[t,R,h,r.length]),D=v.useCallback(d=>{a(d),n(!1),s==null||s(void 0)},[a,n,s]),U=v.useCallback(d=>{if(E)switch(d.key){case"ArrowDown":{d.preventDefault();const b=e===void 0?0:Math.min(e+1,y.length-1);s==null||s(b);break}case"ArrowUp":{d.preventDefault();const b=e===void 0?y.length-1:Math.max(e-1,0);s==null||s(b);break}case"Enter":{d.preventDefault(),e!==void 0&&y[e]&&D(y[e]);break}case"Escape":{d.preventDefault(),n(!1),s==null||s(void 0);break}}},[E,e,y,s,n,D]);return v.useEffect(()=>{const d=b=>{U(b)};if(E)return document.addEventListener("keydown",d),()=>{document.removeEventListener("keydown",d)}},[E,U]),u.jsxs(pt,{open:t,onOpenChange:n,children:[u.jsx(vt,{ref:g,children:i}),E&&u.jsxs(gt,{className:L("w-[--radix-popover-trigger-width] p-0 bg-spacer border-none -translate-y-7 divide-y divide-spacer","max-h-[300px] overflow-y-auto"),align:"start",sideOffset:4,onOpenAutoFocus:d=>d.preventDefault(),onCloseAutoFocus:d=>d.preventDefault(),children:[h&&u.jsx("div",{className:"px-3 py-2.5 text-sm text-foreground-400",children:"Searching..."}),p&&u.jsx("div",{className:"px-3 py-2.5 text-sm text-destructive-100",children:"Failed to search accounts"}),!h&&!p&&y.length===0&&r.length>0&&u.jsx("div",{className:"px-3 py-2.5 text-sm text-foreground-400",children:"No accounts found"}),!h&&!p&&y.map((d,b)=>u.jsx(bt,{result:d,isSelected:e===b,onClick:()=>D(d),onMouseEnter:()=>s==null?void 0:s(b),onMouseLeave:()=>s==null?void 0:s(void 0)},d.id))]})]})});ae.displayName="AccountSearchDropdown";ae.__docgenInfo={description:"",methods:[],displayName:"AccountSearchDropdown",props:{query:{required:!0,tsType:{name:"string"},description:""},isOpen:{required:!0,tsType:{name:"boolean"},description:""},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},onSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(result: AccountSearchResult) => void",signature:{arguments:[{type:{name:"AccountSearchResult"},name:"result"}],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},selectedIndex:{required:!1,tsType:{name:"number"},description:""},onSelectedIndexChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"number | undefined",elements:[{name:"number"},{name:"undefined"}]},name:"index"}],return:{name:"void"}}},description:""},mockResults:{required:!1,tsType:{name:"Array",elements:[{name:"AccountSearchResult"}],raw:"AccountSearchResult[]"},description:""},mockIsLoading:{required:!1,tsType:{name:"boolean"},description:""},mockError:{required:!1,tsType:{name:"Error"},description:""}}};function se({username:r,validation:t,error:n,className:a}){var c;const i=t.status==="invalid"||n,e=(c=n==null?void 0:n.message)==null?void 0:c.includes("The operation either timed out or was not allowed"),s=v.useMemo(()=>t.error?t.error.message:e?"Passkey signing timed out or was canceled. Please try again.":n==null?void 0:n.message,[t,n,e]),o=v.useMemo(()=>{var l;return i?s:r?t.status==="validating"?"Checking username...":t.status==="valid"?t.exists?"Welcome! Select Log In to play":"Welcome! Let's create a new Controller":((l=t.error)==null?void 0:l.message)||"Enter a Username":"Enter a Username"},[t,s,r,i]);return u.jsxs("div",{className:"flex flex-col bg-translucent-dark-100 gap-y-px",children:[u.jsx(dt,{className:a,error:!!i,children:o}),e&&u.jsx(ar,{})]})}function dt({children:r,error:t,className:n}){return u.jsx("div",{className:L("flex justify-between items-center text-xs px-3 py-2 w-full box-border min-w-0",t?"bg-destructive-100 text-destructive-foreground":"bg-background-300 text-primary-100",n),children:u.jsx("span",{className:"break-words min-w-0 flex-1",children:r})})}function ar(){return u.jsx(dt,{error:!0,children:u.jsxs("div",{className:"flex items-center justify-between w-full gap-2",children:[u.jsx("span",{className:"min-w-0 flex-shrink",children:"Having trouble signing up?"}),u.jsxs("a",{href:"https://docs.cartridge.gg/controller/passkey-support",target:"_blank",className:"flex items-center gap-1 hover:underline flex-shrink-0",children:[u.jsx("span",{children:"Controller Docs"}),u.jsx(wt,{size:"xs"})]})]})})}se.__docgenInfo={description:"",methods:[],displayName:"Status",props:{username:{required:!0,tsType:{name:"string"},description:""},validation:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  status: "idle" | "validating" | "valid" | "invalid";
  error?: Error;
  exists?: boolean;
}`,signature:{properties:[{key:"status",value:{name:"union",raw:'"idle" | "validating" | "valid" | "invalid"',elements:[{name:"literal",value:'"idle"'},{name:"literal",value:'"validating"'},{name:"literal",value:'"valid"'},{name:"literal",value:'"invalid"'}],required:!0}},{key:"error",value:{name:"Error",required:!1}},{key:"exists",value:{name:"boolean",required:!1}}]}},description:""},error:{required:!1,tsType:{name:"Error"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const $=v.forwardRef(({usernameField:r,validation:t,error:n,isLoading:a,autoFocus:i=!1,showAutocomplete:e=!1,selectedAccount:s,onUsernameChange:o,onUsernameFocus:c,onUsernameClear:l,onKeyDown:g,onAccountSelect:f,onSelectedUsernameRemove:y,mockResults:h,mockIsLoading:p,mockError:R,className:E},D)=>{const U=v.useMemo(()=>!!(h&&h.length>0),[h]),d=v.useRef(null),[b,F]=v.useState(()=>r.value===""?!1:!!(e&&r.value.length>0&&U)),[x,O]=v.useState(void 0);v.useImperativeHandle(D,()=>d.current),v.useEffect(()=>{i&&d.current&&d.current.focus()},[i]);const J=v.useCallback(()=>{if(c(),e){const w=r.value.length>0||U;F(w)}},[c,e,r.value,U]),X=v.useCallback(w=>{const T=w.relatedTarget;T&&T.closest("[data-radix-popover-content]")||setTimeout(()=>{F(!1),O(void 0)},150)},[]),S=v.useCallback(w=>{o(w.username),F(!1),O(void 0),f==null||f(w)},[o,f]),H=v.useCallback(w=>{if(e&&b&&w.key==="Escape"){w.preventDefault(),F(!1),O(void 0);return}e&&b&&(w.key==="ArrowDown"||w.key==="ArrowUp"||w.key==="Enter")||g(w)},[g,e,b]),k=v.useCallback(w=>{const T=w.target.value.toLowerCase();o(T),e&&v.startTransition(()=>{const mt=(h&&h.length>0,T.length>0);F(mt),O(void 0)})},[o,e,h]),oe=s?u.jsxs("div",{className:L("flex flex-col rounded-md bg-background-150",E),children:[u.jsxs("div",{className:"h-12 flex items-center justify-between gap-1 p-2 bg-background-200 rounded shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] z-10",children:[u.jsx(xt,{icon:(s==null?void 0:s.type)==="create-new"?u.jsx(Rt,{variant:"line",className:"text-foreground-100"}):u.jsx(St,{username:(s==null?void 0:s.username)||"",className:"!h-5 !w-5"}),rank:(s==null?void 0:s.type)==="create-new"?"empty":void 0,variant:"ghost",size:"lg",className:"!w-8 !h-8",badgeClassName:L((s==null?void 0:s.type)==="create-new"&&"text-foreground-400")}),u.jsxs("div",{className:"flex flex-row items-center justify-between gap-1 flex-1",children:[u.jsx("p",{className:"text-sm font-normal px-0.5 truncate",children:(s==null?void 0:s.username)||"N/A"}),u.jsxs("div",{className:"flex items-center gap-3",children:[(s==null?void 0:s.type)==="create-new"?u.jsxs("div",{className:"p-1 bg-background-300 rounded inline-flex justify-center items-center gap-0.5",children:[u.jsx("div",{className:"flex justify-start items-center gap-0.5",children:u.jsx(Et,{variant:"solid",className:"text-primary",size:"xs"})}),u.jsx("div",{className:"px-0.5 flex justify-center items-center gap-2.5",children:u.jsx("p",{className:"text-center justify-center text-primary text-xs font-normal leading-none",children:"Create New"})})]}):s!=null&&s.points?u.jsxs("div",{className:"flex items-center justify-center gap-0.5 p-1 bg-background-300 rounded text-foreground-100",children:[u.jsx(Ft,{variant:"solid",size:"xs",className:"text-foreground-100"}),u.jsx("div",{className:"flex items-center gap-1",children:u.jsx("p",{className:"text-xs font-medium text-foreground-100",children:s.points.toLocaleString()})})]}):null,u.jsx(Ct,{size:"sm",className:"text-foreground-400 hover:text-foreground-300 cursor-pointer",onClick:()=>{y==null||y(),e&&(F(!1),O(void 0))}})]})]})]}),u.jsx(se,{className:"bg-background-150 rounded-b-md",username:(s==null?void 0:s.username)||"",validation:t,error:n})]}):u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:L("flex flex-col border rounded-md border-background-300 bg-background-300",(t.status==="invalid"||n)&&"bg-destructive-100 border-destructive-100",E),children:[u.jsx(ht,{ref:d,variant:"username",size:"lg",value:r.value,spellCheck:!1,placeholder:"Username",className:"relative z-1 focus:bg-spacer",autoComplete:"off",autoCorrect:"off",autoCapitalize:"off","data-1p-ignore":"true","data-lpignore":"true","data-form-type":"other",onFocus:J,onBlur:X,onChange:k,onKeyDown:H,isLoading:t.status==="validating",disabled:a,onClear:()=>{l(),e&&(F(!1),O(void 0))}}),(!b||r.value==="")&&u.jsx(se,{username:r.value,validation:t,error:n})]}),b&&r.value!==""&&u.jsx("div",{className:"h-8 bg-background-150 border-none"})]}),ft=v.useMemo(()=>({query:r.value,isOpen:b,onOpenChange:w=>{w&&F(w)},onSelect:S,selectedIndex:x,onSelectedIndexChange:O,mockResults:h,mockIsLoading:p??!1,mockError:R}),[r.value,b,S,x,h,p,R]);return e?u.jsx(ae,{...ft,children:oe}):oe});$.displayName="CreateAccount";$.__docgenInfo={description:"",methods:[],displayName:"CreateAccount",props:{usernameField:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  value: string;
  error?: Error;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"error",value:{name:"Error",required:!1}}]}},description:""},validation:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  status: "idle" | "validating" | "valid" | "invalid";
  error?: Error;
  exists?: boolean;
}`,signature:{properties:[{key:"status",value:{name:"union",raw:'"idle" | "validating" | "valid" | "invalid"',elements:[{name:"literal",value:'"idle"'},{name:"literal",value:'"validating"'},{name:"literal",value:'"valid"'},{name:"literal",value:'"invalid"'}],required:!0}},{key:"error",value:{name:"Error",required:!1}},{key:"exists",value:{name:"boolean",required:!1}}]}},description:""},error:{required:!1,tsType:{name:"Error"},description:""},isLoading:{required:!0,tsType:{name:"boolean"},description:""},autoFocus:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showAutocomplete:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},selectedAccount:{required:!1,tsType:{name:"AccountSearchResult"},description:""},onUsernameChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onUsernameFocus:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onUsernameClear:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onKeyDown:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: React.KeyboardEvent) => void",signature:{arguments:[{type:{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent"},name:"e"}],return:{name:"void"}}},description:""},onAccountSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(result: AccountSearchResult) => void",signature:{arguments:[{type:{name:"AccountSearchResult"},name:"result"}],return:{name:"void"}}},description:""},onSelectedUsernameRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},mockResults:{required:!1,tsType:{name:"Array",elements:[{name:"AccountSearchResult"}],raw:"AccountSearchResult[]"},description:""},mockIsLoading:{required:!1,tsType:{name:"boolean"},description:""},mockError:{required:!1,tsType:{name:"Error"},description:""}}};const ve={title:"Modules/Create Account/CreateAccount",component:$,tags:["autodocs"],parameters:{layout:"centered"},args:{usernameField:{value:"",error:void 0},validation:{status:"idle",error:void 0,exists:void 0},className:"min-w-0 w-96",error:void 0,isLoading:!1,autoFocus:!1,onUsernameChange:m(),onUsernameFocus:m(),onUsernameClear:m(),onKeyDown:m()}};ve.args={...ve.args,selectedAccount:void 0,onSelectedUsernameRemove:m()};const A={},Q={args:{usernameField:{value:"shinobi"},validation:{status:"validating"}}},I={args:{usernameField:{value:"shinobi",error:void 0},validation:{status:"valid",error:void 0,exists:!0}}},P={args:{usernameField:{value:"shinobi5",error:void 0},validation:{status:"valid",error:void 0,exists:!1}}},q={args:{usernameField:{value:"sh",error:void 0},validation:{status:"invalid",error:{name:"Error",message:"Username must be at least 3 characters"},exists:!1},error:{name:"Error",message:"Username must be at least 3 characters"}}},_={args:{usernameField:{value:"shin_obi",error:void 0},validation:{status:"invalid",exists:!1},error:{name:"Error",message:"Username can only contain letters, numbers, and hyphens"}}},V={args:{usernameField:{value:"",error:void 0},validation:{status:"invalid",error:void 0,exists:!1},error:{name:"Error",message:"The operation either timed out or was not allowed"}}},M={args:{autoFocus:!0,usernameField:{value:"",error:void 0},validation:{status:"idle",error:void 0,exists:void 0},error:void 0,isLoading:!1,onUsernameChange:m(),onUsernameFocus:m(),onUsernameClear:m(),onKeyDown:m()}},Z={args:{showAutocomplete:!0,usernameField:{value:"",error:void 0},validation:{status:"idle",error:void 0,exists:void 0},error:void 0,isLoading:!1,autoFocus:!0,onUsernameChange:m(),onUsernameFocus:m(),onUsernameClear:m(),onKeyDown:m(),onAccountSelect:m(),mockResults:[],mockIsLoading:!1}},K={args:{showAutocomplete:!0,autoFocus:!0,usernameField:{value:"shin",error:void 0},validation:{status:"idle",error:void 0,exists:void 0},error:void 0,isLoading:!1,onUsernameChange:m(),onUsernameFocus:m(),onUsernameClear:m(),onKeyDown:m(),onAccountSelect:m(),mockResults:[{id:"create-new-shin",type:"create-new",username:"shin"},{id:"existing-shints",type:"existing",username:"shints",points:20800,lastOnline:new Date(Date.now()-2*24*60*60*1e3)},{id:"existing-shinobi",type:"existing",username:"shinobi",points:20800,lastOnline:new Date(Date.now()-2*24*60*60*1e3)}],mockIsLoading:!1}},W={args:{usernameField:{value:"",error:void 0},validation:{status:"invalid",error:void 0,exists:!1},error:{name:"ClientError",message:'rpc error: code = Internal desc = internal server error: {"response":{"errors":[{"message":"rpc error: code = Internal desc = internal server error","path":["finalizeRegistration"]}],"data":null,"status":200,"headers":{}},"request":{"query":"\\n mutation FinalizeRegistration($credentials: String!, $network: String!) {\\n finalizeRegistration(credentials: $credentials, network: $network) {\\n username\\n controllers {\\n edges {\\n node {\\n address\\n constructorCalldata\\n signers {\\n type\\n }\\n }\\n }\\n }\\n credentials {\\n webauthn {\\n id\\n publicKey\\n }\\n }\\n }\\n}\\n ","variables":{"network":"SN_MAIN","credentials":"{\\"id\\":\\"ctfWh3FE96w5AZ-6iVNAv16ccGqJeDROaJ8YUdnOzZ0\\",\\"rawId\\":\\"ctfWh3FE96w5AZ-6iVNAv16ccGqJeDROaJ8YUdnOzZ0\\",\\"type\\":\\"public-key\\",\\"response\\":{\\"attestationObject\\":\\"o2NmbXRkbm9uZWdhdHRTdG10oGhhdXRoRGF0YVikSZYN5YgOjGh0NBcPZHZgW4_krrmihjLHmVzzuoMdl2NFAAAAALU5dmZIhaprzr_lImKkOaIAIHLX1odxRPesOQGfuolTQL9enHBqiXg0TmifGFHZzs2dpQECAyYgASFYIPx2O3ufZDxJ_fuu43knH7H4wfxp61JCg_TZey2CLwzIIlggygpmiDxx0Da84LP2vRu6xDJQrI552vP7Fo9bkIXkXtA\\",\\"clientDataJSON\\":\\"eyJ0eXBlIjoid2ViYXV0aG4uY3JlYXRlIiwiY2hhbGxlbmdlIjoib2NZZ2Q5LUlTY3B4U2dGeTZwcEZfSE5rdm1hWVRkZGtyb'}}},z={render:function(){var g;const[t,n]=v.useState(""),[a,i]=v.useState(),[e,s]=v.useState({status:"idle",error:void 0,exists:void 0}),o=[{id:"create-new-"+t,type:"create-new",username:t},{id:"existing-shints",type:"existing",username:"shints",points:20800,lastOnline:new Date(Date.now()-2*24*60*60*1e3)},{id:"existing-shinobi",type:"existing",username:"shinobi",points:20800,lastOnline:new Date(Date.now()-2*24*60*60*1e3)},{id:"existing-shinto",type:"existing",username:"shinto",points:0,lastOnline:new Date(Date.now()-2*24*60*60*1e3)}].filter(f=>f.type==="create-new"?t.length>0:f.username.toLowerCase().includes(t.toLowerCase())),c=f=>{console.log("Selected:",f),i(f),n(""),s({status:"valid",error:void 0,exists:f.type==="existing"})},l=()=>{console.log("Removed pill:",a==null?void 0:a.username),i(void 0),n(""),s({status:"idle",error:void 0,exists:void 0})};return u.jsxs("div",{className:"w-96",children:[u.jsx($,{usernameField:{value:t,error:void 0},validation:e,error:void 0,isLoading:!1,autoFocus:!0,showAutocomplete:!0,selectedAccount:a,onUsernameChange:f=>{n(f),a||s({status:"idle",error:void 0,exists:void 0})},onUsernameFocus:()=>console.log("Focus"),onUsernameClear:()=>{n(""),s({status:"idle",error:void 0,exists:void 0})},onKeyDown:()=>{},onAccountSelect:c,onSelectedUsernameRemove:l,mockResults:o,mockIsLoading:!1}),u.jsxs("div",{className:"mt-4 p-4 bg-background-200 rounded text-sm",children:[u.jsx("h4",{className:"font-semibold mb-2",children:"Demo Instructions:"}),u.jsxs("ul",{className:"space-y-1 text-foreground-300",children:[u.jsx("li",{children:"• Type in the input to see autocomplete suggestions"}),u.jsx("li",{children:"• Click on any suggestion to create a pill"}),u.jsx("li",{children:"• Click the X button on the pill to remove it"}),u.jsx("li",{children:'• Try "shin" to see matching results'})]}),a&&u.jsxs("div",{className:"mt-2 p-2 bg-primary/10 rounded",children:[u.jsx("strong",{children:"Selected:"})," ",a.username," (",a.type==="create-new"?"New User":`${(g=a.points)==null?void 0:g.toLocaleString()} points`,")"]})]})]})},parameters:{docs:{description:{story:"An interactive demo showing how pills are created when selecting from autocomplete and how they can be removed."}}}},B={args:{selectedAccount:{id:"existing-shinobi",type:"existing",username:"shinobi",points:20800,lastOnline:new Date(Date.now()-2*24*60*60*1e3)},usernameField:{value:"",error:void 0},validation:{status:"valid",error:void 0,exists:!0},error:void 0,isLoading:!1,onUsernameChange:m(),onUsernameFocus:m(),onUsernameClear:m(),onKeyDown:m(),onSelectedUsernameRemove:m()}},G={args:{selectedAccount:{id:"existing-shinobi",type:"existing",username:"shinobi",points:0,lastOnline:new Date(Date.now()-2*24*60*60*1e3)},usernameField:{value:"",error:void 0},validation:{status:"valid",error:void 0,exists:!0},error:void 0,isLoading:!1,onUsernameChange:m(),onUsernameFocus:m(),onUsernameClear:m(),onKeyDown:m(),onSelectedUsernameRemove:m()}},Y={args:{selectedAccount:{id:"create-new-newbie",type:"create-new",username:"newbie"},usernameField:{value:"",error:void 0},validation:{status:"valid",error:void 0,exists:!1},error:void 0,isLoading:!1,onUsernameChange:m(),onUsernameFocus:m(),onUsernameClear:m(),onKeyDown:m(),onSelectedUsernameRemove:m()}};var ge,ye,be;A.parameters={...A.parameters,docs:{...(ge=A.parameters)==null?void 0:ge.docs,source:{originalSource:"{}",...(be=(ye=A.parameters)==null?void 0:ye.docs)==null?void 0:be.source}}};var we,xe,Re;Q.parameters={...Q.parameters,docs:{...(we=Q.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    usernameField: {
      value: "shinobi"
    },
    validation: {
      status: "validating"
    }
  }
}`,...(Re=(xe=Q.parameters)==null?void 0:xe.docs)==null?void 0:Re.source}}};var Se,Ee,Fe;I.parameters={...I.parameters,docs:{...(Se=I.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    usernameField: {
      value: "shinobi",
      error: undefined
    },
    validation: {
      status: "valid",
      error: undefined,
      exists: true
    }
  }
}`,...(Fe=(Ee=I.parameters)==null?void 0:Ee.docs)==null?void 0:Fe.source}}};var Ce,Ue,Oe;P.parameters={...P.parameters,docs:{...(Ce=P.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  args: {
    usernameField: {
      value: "shinobi5",
      error: undefined
    },
    validation: {
      status: "valid",
      error: undefined,
      exists: false
    }
  }
}`,...(Oe=(Ue=P.parameters)==null?void 0:Ue.docs)==null?void 0:Oe.source}}};var De,ke,Te;q.parameters={...q.parameters,docs:{...(De=q.parameters)==null?void 0:De.docs,source:{originalSource:`{
  args: {
    usernameField: {
      value: "sh",
      error: undefined
    },
    validation: {
      status: "invalid",
      error: {
        name: "Error",
        message: "Username must be at least 3 characters"
      },
      exists: false
    },
    error: {
      name: "Error",
      message: "Username must be at least 3 characters"
    }
  }
}`,...(Te=(ke=q.parameters)==null?void 0:ke.docs)==null?void 0:Te.source}}};var Ne,je,Le;_.parameters={..._.parameters,docs:{...(Ne=_.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  args: {
    usernameField: {
      value: "shin_obi",
      error: undefined
    },
    validation: {
      status: "invalid",
      exists: false
    },
    error: {
      name: "Error",
      message: "Username can only contain letters, numbers, and hyphens"
    }
  }
}`,...(Le=(je=_.parameters)==null?void 0:je.docs)==null?void 0:Le.source}}};var Ae,Qe,Ie;V.parameters={...V.parameters,docs:{...(Ae=V.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  args: {
    usernameField: {
      value: "",
      error: undefined
    },
    validation: {
      status: "invalid",
      error: undefined,
      exists: false
    },
    error: {
      name: "Error",
      message: "The operation either timed out or was not allowed"
    }
  }
}`,...(Ie=(Qe=V.parameters)==null?void 0:Qe.docs)==null?void 0:Ie.source}}};var Pe,qe,_e;M.parameters={...M.parameters,docs:{...(Pe=M.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  args: {
    autoFocus: true,
    usernameField: {
      value: "",
      error: undefined
    },
    validation: {
      status: "idle",
      error: undefined,
      exists: undefined
    },
    error: undefined,
    isLoading: false,
    onUsernameChange: fn(),
    onUsernameFocus: fn(),
    onUsernameClear: fn(),
    onKeyDown: fn()
  }
}`,...(_e=(qe=M.parameters)==null?void 0:qe.docs)==null?void 0:_e.source}}};var Ve,Me,Ze;Z.parameters={...Z.parameters,docs:{...(Ve=Z.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  args: {
    showAutocomplete: true,
    usernameField: {
      value: "",
      error: undefined
    },
    validation: {
      status: "idle",
      error: undefined,
      exists: undefined
    },
    error: undefined,
    isLoading: false,
    autoFocus: true,
    onUsernameChange: fn(),
    onUsernameFocus: fn(),
    onUsernameClear: fn(),
    onKeyDown: fn(),
    onAccountSelect: fn(),
    // Mock empty results
    mockResults: [],
    mockIsLoading: false
  }
}`,...(Ze=(Me=Z.parameters)==null?void 0:Me.docs)==null?void 0:Ze.source}}};var Ke,We,ze;K.parameters={...K.parameters,docs:{...(Ke=K.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  args: {
    showAutocomplete: true,
    autoFocus: true,
    // Enable auto focus to trigger dropdown
    usernameField: {
      value: "shin",
      error: undefined
    },
    validation: {
      status: "idle",
      error: undefined,
      exists: undefined
    },
    error: undefined,
    isLoading: false,
    onUsernameChange: fn(),
    onUsernameFocus: fn(),
    onUsernameClear: fn(),
    onKeyDown: fn(),
    onAccountSelect: fn(),
    // Mock search results
    mockResults: [{
      id: "create-new-shin",
      type: "create-new",
      username: "shin"
    }, {
      id: "existing-shints",
      type: "existing",
      username: "shints",
      points: 20800,
      lastOnline: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000) // 2 days ago
    }, {
      id: "existing-shinobi",
      type: "existing",
      username: "shinobi",
      points: 20800,
      lastOnline: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000) // 2 days ago
    }],
    mockIsLoading: false
  }
}`,...(ze=(We=K.parameters)==null?void 0:We.docs)==null?void 0:ze.source}}};var Be,Ge,Ye;W.parameters={...W.parameters,docs:{...(Be=W.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  args: {
    usernameField: {
      value: "",
      error: undefined
    },
    validation: {
      status: "invalid",
      error: undefined,
      exists: false
    },
    error: {
      name: "ClientError",
      message: 'rpc error: code = Internal desc = internal server error: {"response":{"errors":[{"message":"rpc error: code = Internal desc = internal server error","path":["finalizeRegistration"]}],"data":null,"status":200,"headers":{}},"request":{"query":"\\\\n mutation FinalizeRegistration($credentials: String!, $network: String!) {\\\\n finalizeRegistration(credentials: $credentials, network: $network) {\\\\n username\\\\n controllers {\\\\n edges {\\\\n node {\\\\n address\\\\n constructorCalldata\\\\n signers {\\\\n type\\\\n }\\\\n }\\\\n }\\\\n }\\\\n credentials {\\\\n webauthn {\\\\n id\\\\n publicKey\\\\n }\\\\n }\\\\n }\\\\n}\\\\n ","variables":{"network":"SN_MAIN","credentials":"{\\\\"id\\\\":\\\\"ctfWh3FE96w5AZ-6iVNAv16ccGqJeDROaJ8YUdnOzZ0\\\\",\\\\"rawId\\\\":\\\\"ctfWh3FE96w5AZ-6iVNAv16ccGqJeDROaJ8YUdnOzZ0\\\\",\\\\"type\\\\":\\\\"public-key\\\\",\\\\"response\\\\":{\\\\"attestationObject\\\\":\\\\"o2NmbXRkbm9uZWdhdHRTdG10oGhhdXRoRGF0YVikSZYN5YgOjGh0NBcPZHZgW4_krrmihjLHmVzzuoMdl2NFAAAAALU5dmZIhaprzr_lImKkOaIAIHLX1odxRPesOQGfuolTQL9enHBqiXg0TmifGFHZzs2dpQECAyYgASFYIPx2O3ufZDxJ_fuu43knH7H4wfxp61JCg_TZey2CLwzIIlggygpmiDxx0Da84LP2vRu6xDJQrI552vP7Fo9bkIXkXtA\\\\",\\\\"clientDataJSON\\\\":\\\\"eyJ0eXBlIjoid2ViYXV0aG4uY3JlYXRlIiwiY2hhbGxlbmdlIjoib2NZZ2Q5LUlTY3B4U2dGeTZwcEZfSE5rdm1hWVRkZGtyb'
    }
  }
}`,...(Ye=(Ge=W.parameters)==null?void 0:Ge.docs)==null?void 0:Ye.source}}};var $e,Je,Xe;z.parameters={...z.parameters,docs:{...($e=z.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  render: function InteractivePillDemoComponent() {
    const [usernameValue, setUsernameValue] = useState("");
    const [selectedAccount, setSelectedAccount] = useState<AccountSearchResult | undefined>();
    const [validation, setValidation] = useState<{
      status: "idle" | "validating" | "valid" | "invalid";
      error?: Error;
      exists?: boolean;
    }>({
      status: "idle",
      error: undefined,
      exists: undefined
    });
    const mockResults = [{
      id: "create-new-" + usernameValue,
      type: "create-new" as const,
      username: usernameValue
    }, {
      id: "existing-shints",
      type: "existing" as const,
      username: "shints",
      points: 20800,
      lastOnline: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000) // 2 days ago
    }, {
      id: "existing-shinobi",
      type: "existing" as const,
      username: "shinobi",
      points: 20800,
      lastOnline: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000) // 2 days ago
    }, {
      id: "existing-shinto",
      type: "existing" as const,
      username: "shinto",
      points: 0,
      lastOnline: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000) // 2 days ago
    }].filter(result => result.type === "create-new" ? usernameValue.length > 0 : result.username.toLowerCase().includes(usernameValue.toLowerCase()));
    const handleAccountSelect = (result: AccountSearchResult) => {
      console.log("Selected:", result);
      setSelectedAccount(result);
      setUsernameValue("");
      setValidation({
        status: "valid",
        error: undefined,
        exists: result.type === "existing"
      });
    };
    const handleRemovePill = () => {
      console.log("Removed pill:", selectedAccount?.username);
      setSelectedAccount(undefined);
      setUsernameValue("");
      setValidation({
        status: "idle",
        error: undefined,
        exists: undefined
      });
    };
    return <div className="w-96">
        <CreateAccount usernameField={{
        value: usernameValue,
        error: undefined
      }} validation={validation} error={undefined} isLoading={false} autoFocus={true} showAutocomplete={true} selectedAccount={selectedAccount} onUsernameChange={value => {
        setUsernameValue(value);
        if (!selectedAccount) {
          setValidation({
            status: "idle",
            error: undefined,
            exists: undefined
          });
        }
      }} onUsernameFocus={() => console.log("Focus")} onUsernameClear={() => {
        setUsernameValue("");
        setValidation({
          status: "idle",
          error: undefined,
          exists: undefined
        });
      }} onKeyDown={() => {}} onAccountSelect={handleAccountSelect} onSelectedUsernameRemove={handleRemovePill} mockResults={mockResults} mockIsLoading={false} />
        <div className="mt-4 p-4 bg-background-200 rounded text-sm">
          <h4 className="font-semibold mb-2">Demo Instructions:</h4>
          <ul className="space-y-1 text-foreground-300">
            <li>• Type in the input to see autocomplete suggestions</li>
            <li>• Click on any suggestion to create a pill</li>
            <li>• Click the X button on the pill to remove it</li>
            <li>• Try "shin" to see matching results</li>
          </ul>
          {selectedAccount && <div className="mt-2 p-2 bg-primary/10 rounded">
              <strong>Selected:</strong> {selectedAccount.username} (
              {selectedAccount.type === "create-new" ? "New User" : \`\${selectedAccount.points?.toLocaleString()} points\`}
              )
            </div>}
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "An interactive demo showing how pills are created when selecting from autocomplete and how they can be removed."
      }
    }
  }
}`,...(Xe=(Je=z.parameters)==null?void 0:Je.docs)==null?void 0:Xe.source}}};var He,et,tt;B.parameters={...B.parameters,docs:{...(He=B.parameters)==null?void 0:He.docs,source:{originalSource:`{
  args: {
    selectedAccount: {
      id: "existing-shinobi",
      type: "existing",
      username: "shinobi",
      points: 20800,
      lastOnline: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)
    },
    usernameField: {
      value: "",
      error: undefined
    },
    validation: {
      status: "valid",
      error: undefined,
      exists: true
    },
    error: undefined,
    isLoading: false,
    onUsernameChange: fn(),
    onUsernameFocus: fn(),
    onUsernameClear: fn(),
    onKeyDown: fn(),
    onSelectedUsernameRemove: fn()
  }
}`,...(tt=(et=B.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}};var rt,nt,st;G.parameters={...G.parameters,docs:{...(rt=G.parameters)==null?void 0:rt.docs,source:{originalSource:`{
  args: {
    selectedAccount: {
      id: "existing-shinobi",
      type: "existing",
      username: "shinobi",
      points: 0,
      lastOnline: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)
    },
    usernameField: {
      value: "",
      error: undefined
    },
    validation: {
      status: "valid",
      error: undefined,
      exists: true
    },
    error: undefined,
    isLoading: false,
    onUsernameChange: fn(),
    onUsernameFocus: fn(),
    onUsernameClear: fn(),
    onKeyDown: fn(),
    onSelectedUsernameRemove: fn()
  }
}`,...(st=(nt=G.parameters)==null?void 0:nt.docs)==null?void 0:st.source}}};var it,at,ot;Y.parameters={...Y.parameters,docs:{...(it=Y.parameters)==null?void 0:it.docs,source:{originalSource:`{
  args: {
    selectedAccount: {
      id: "create-new-newbie",
      type: "create-new",
      username: "newbie"
    },
    usernameField: {
      value: "",
      error: undefined
    },
    validation: {
      status: "valid",
      error: undefined,
      exists: false
    },
    error: undefined,
    isLoading: false,
    onUsernameChange: fn(),
    onUsernameFocus: fn(),
    onUsernameClear: fn(),
    onKeyDown: fn(),
    onSelectedUsernameRemove: fn()
  }
}`,...(ot=(at=Y.parameters)==null?void 0:at.docs)==null?void 0:ot.source}}};const Un=["Default","DefaultValidating","DefaultLogin","DefaultNew","ErrorTooShort","ErrorSpecialCharacter","ErrorTimeout","WithAutoFocus","WithAutocomplete","WithAutocompleteAndValue","LongError","InteractivePillDemo","PillWithExistingUser","PillWithExistingUserWithoutPoints","PillWithNewUser"];export{A as Default,I as DefaultLogin,P as DefaultNew,Q as DefaultValidating,_ as ErrorSpecialCharacter,V as ErrorTimeout,q as ErrorTooShort,z as InteractivePillDemo,W as LongError,B as PillWithExistingUser,G as PillWithExistingUserWithoutPoints,Y as PillWithNewUser,M as WithAutoFocus,Z as WithAutocomplete,K as WithAutocompleteAndValue,Un as __namedExportsOrder,ve as default};
