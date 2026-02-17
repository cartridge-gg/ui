import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{N}from"./specialized-toasts-Ce1YqdlM.js";import{S as h}from"./starknet-PF0GvedQ.js";import"./index-yBjzXJbu.js";import"./index-BlmOqGMO.js";import"./index-CRGxjvZy.js";import"./index-KnJS0CU8.js";import"./toast-mJ0Bx_GT.js";import"./index-ZHEgE2XS.js";import"./index-DuqhnXMO.js";import"./index-fNjTmf9T.js";import"./times-zfpenlOA.js";import"./utils-GTnaulzv.js";import"./presets-BSCTsi68.js";import"./sparkles-CY9lzZpH.js";import"./sparkles-draft-sDjrI9Uu.js";import"./transaction-t4mJhGCb.js";import"./starknet-CX4nG1WJ.js";import"./spinner-BCFkRInS.js";import"./check-BknbCD27.js";import"./image-DVJtesZi.js";import"./index-DTUS6EFt.js";import"./context-CDbX8kD3.js";import"./index-Dkb_ZYRU.js";import"./index-BYUKtP1h.js";import"./index-C_Dn7qTj.js";import"./index-BQxh6BgF.js";import"./index-CVWIyhAF.js";import"./index-BbW-7v3v.js";import"./index-DdDw_O67.js";import"./wedge-Ek6y42Ws.js";import"./index-B7ENhYdy.js";import"./index-BylD-epk.js";import"./index-DZCApzUK.js";import"./index-CJGASTBR.js";import"./index-CYmZMVXJ.js";import"./alert-HkMSTgu9.js";import"./badge-CF9VCaa2.js";import"./breadcrumb-V3TW3CaT.js";import"./dots-CqQy5XBj.js";import"./card-CHJmWtwN.js";import"./checkbox-BJGOHg_b.js";import"./index-DZ2oWOeb.js";import"./index-DaMGPy2X.js";import"./checkbox-BNhnVxLV.js";import"./drawer-CB1qWX_Q.js";import"./dropdown-menu-Bf3pfD8n.js";import"./index-BV9D_7a1.js";import"./index-z8P03atw.js";import"./index-DoUPdNCX.js";import"./circle-Ddb5-e2i.js";import"./alert-DG-IKYwr.js";import"./radio-group-WlSpQHWm.js";import"./menubar-eE93DyoQ.js";import"./popover-DNr9wWs8.js";import"./progress-Dkom_LNH.js";import"./select-COP56eT4.js";import"./index-COzOtNfS.js";import"./circle-check-B84UAr7O.js";import"./separator-DLNkf967.js";import"./sheet-BHnC42pu.js";import"./skeleton-CV1PtUMd.js";import"./switch-CWQaiJ0M.js";import"./table-2Lq_Rdjg.js";import"./tabs-pHV4z6kt.js";import"./toggle-group-Bz_GEFe3.js";import"./utils-CzDHQuSw.js";import"./index-Cd0zht5T.js";import"./tooltip-CEc4qSmp.js";import"./times-circle-BPxv1pFA.js";const qt={title:"Primitives/Toast/Network Switch Toast",component:N,parameters:{layout:"centered",backgrounds:{default:"dark",values:[{name:"dark",value:"#353535"},{name:"light",value:"#ffffff"}]}},decorators:[k=>t.jsx("div",{children:t.jsx(k,{})})],argTypes:{networkName:{control:"text"}}},r={args:{networkName:"Starknet Mainnet",networkIcon:t.jsx(h,{size:"default"})}},e={args:{networkName:"Nums Chain",networkIcon:t.jsx("div",{className:"w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold",children:"N"})}},o={args:{networkName:"Ethereum Mainnet",networkIcon:t.jsx("div",{className:"w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold",children:"E"})}},i={args:{networkName:"Custom Network",networkIcon:t.jsx("div",{className:"w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold",children:"C"})}};var m,n,s;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    networkName: "Starknet Mainnet",
    networkIcon: <StarknetIcon size="default" />
  }
}`,...(s=(n=r.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var a,p,c;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    networkName: "Nums Chain",
    networkIcon: <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
        N
      </div>
  }
}`,...(c=(p=e.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var u,d,l;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    networkName: "Ethereum Mainnet",
    networkIcon: <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
        E
      </div>
  }
}`,...(l=(d=o.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var f,w,x;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    networkName: "Custom Network",
    networkIcon: <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
        C
      </div>
  }
}`,...(x=(w=i.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};const At=["StarknetMainnet","NumsChain","EthereumMainnet","CustomNetwork"];export{i as CustomNetwork,o as EthereumMainnet,e as NumsChain,r as StarknetMainnet,At as __namedExportsOrder,qt as default};
