import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{X as e}from"./specialized-toasts-Ce1YqdlM.js";import"./index-yBjzXJbu.js";import"./index-BlmOqGMO.js";import"./index-CRGxjvZy.js";import"./index-KnJS0CU8.js";import"./toast-mJ0Bx_GT.js";import"./index-ZHEgE2XS.js";import"./index-DuqhnXMO.js";import"./index-fNjTmf9T.js";import"./times-zfpenlOA.js";import"./utils-GTnaulzv.js";import"./presets-BSCTsi68.js";import"./sparkles-CY9lzZpH.js";import"./sparkles-draft-sDjrI9Uu.js";import"./transaction-t4mJhGCb.js";import"./starknet-CX4nG1WJ.js";import"./spinner-BCFkRInS.js";import"./check-BknbCD27.js";import"./image-DVJtesZi.js";import"./index-DTUS6EFt.js";import"./context-CDbX8kD3.js";import"./index-Dkb_ZYRU.js";import"./index-BYUKtP1h.js";import"./index-C_Dn7qTj.js";import"./index-BQxh6BgF.js";import"./index-CVWIyhAF.js";import"./index-BbW-7v3v.js";import"./index-DdDw_O67.js";import"./wedge-Ek6y42Ws.js";import"./index-B7ENhYdy.js";import"./index-BylD-epk.js";import"./index-DZCApzUK.js";import"./index-CJGASTBR.js";import"./index-CYmZMVXJ.js";import"./alert-HkMSTgu9.js";import"./badge-CF9VCaa2.js";import"./breadcrumb-V3TW3CaT.js";import"./dots-CqQy5XBj.js";import"./card-CHJmWtwN.js";import"./checkbox-BJGOHg_b.js";import"./index-DZ2oWOeb.js";import"./index-DaMGPy2X.js";import"./checkbox-BNhnVxLV.js";import"./drawer-CB1qWX_Q.js";import"./dropdown-menu-Bf3pfD8n.js";import"./index-BV9D_7a1.js";import"./index-z8P03atw.js";import"./index-DoUPdNCX.js";import"./circle-Ddb5-e2i.js";import"./alert-DG-IKYwr.js";import"./radio-group-WlSpQHWm.js";import"./menubar-eE93DyoQ.js";import"./popover-DNr9wWs8.js";import"./progress-Dkom_LNH.js";import"./select-COP56eT4.js";import"./index-COzOtNfS.js";import"./circle-check-B84UAr7O.js";import"./separator-DLNkf967.js";import"./sheet-BHnC42pu.js";import"./skeleton-CV1PtUMd.js";import"./switch-CWQaiJ0M.js";import"./table-2Lq_Rdjg.js";import"./tabs-pHV4z6kt.js";import"./toggle-group-Bz_GEFe3.js";import"./utils-CzDHQuSw.js";import"./index-Cd0zht5T.js";import"./tooltip-CEc4qSmp.js";import"./times-circle-BPxv1pFA.js";const Rt={title:"Primitives/Toast/Supporting/XP Tag",component:e,parameters:{layout:"centered",backgrounds:{default:"dark",values:[{name:"dark",value:"#353535"},{name:"light",value:"#ffffff"}]}},argTypes:{amount:{control:"number"},isMainnet:{control:"boolean"}}},r={args:{amount:100,isMainnet:!0}},n={args:{amount:100,isMainnet:!1}},s={args:{amount:1500,isMainnet:!0}},i={args:{amount:25,isMainnet:!1}},a={render:()=>t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsxs("div",{children:[t.jsx("h3",{className:"text-white text-sm font-semibold mb-2",children:"Mainnet vs Testnet"}),t.jsxs("div",{className:"flex gap-4 items-center",children:[t.jsxs("div",{className:"text-center",children:[t.jsx(e,{amount:100,isMainnet:!0}),t.jsx("p",{className:"text-white text-xs mt-1",children:"Mainnet"})]}),t.jsxs("div",{className:"text-center",children:[t.jsx(e,{amount:100,isMainnet:!1}),t.jsx("p",{className:"text-white text-xs mt-1",children:"Testnet"})]})]})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-white text-sm font-semibold mb-2",children:"Different Amounts"}),t.jsxs("div",{className:"flex gap-4 items-center",children:[t.jsx(e,{amount:25,isMainnet:!0}),t.jsx(e,{amount:100,isMainnet:!0}),t.jsx(e,{amount:250,isMainnet:!0}),t.jsx(e,{amount:1e3,isMainnet:!0})]})]})]})};var m,o,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    amount: 100,
    isMainnet: true
  }
}`,...(p=(o=r.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};var c,l,u;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    amount: 100,
    isMainnet: false
  }
}`,...(u=(l=n.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,x,g;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    amount: 1500,
    isMainnet: true
  }
}`,...(g=(x=s.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var f,v,M;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    amount: 25,
    isMainnet: false
  }
}`,...(M=(v=i.parameters)==null?void 0:v.docs)==null?void 0:M.source}}};var h,j,N;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <div>
        <h3 className="text-white text-sm font-semibold mb-2">
          Mainnet vs Testnet
        </h3>
        <div className="flex gap-4 items-center">
          <div className="text-center">
            <XPTag amount={100} isMainnet={true} />
            <p className="text-white text-xs mt-1">Mainnet</p>
          </div>
          <div className="text-center">
            <XPTag amount={100} isMainnet={false} />
            <p className="text-white text-xs mt-1">Testnet</p>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-white text-sm font-semibold mb-2">
          Different Amounts
        </h3>
        <div className="flex gap-4 items-center">
          <XPTag amount={25} isMainnet={true} />
          <XPTag amount={100} isMainnet={true} />
          <XPTag amount={250} isMainnet={true} />
          <XPTag amount={1000} isMainnet={true} />
        </div>
      </div>
    </div>
}`,...(N=(j=a.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};const qt=["MainnetXP","TestnetXP","LargeAmount","SmallAmount","Comparison"];export{a as Comparison,s as LargeAmount,r as MainnetXP,i as SmallAmount,n as TestnetXP,qt as __namedExportsOrder,Rt as default};
