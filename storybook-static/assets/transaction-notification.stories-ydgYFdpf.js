import{j as i}from"./jsx-runtime-Cf8x2fCZ.js";import{T as y}from"./specialized-toasts-Ce1YqdlM.js";import"./index-yBjzXJbu.js";import"./index-BlmOqGMO.js";import"./index-CRGxjvZy.js";import"./index-KnJS0CU8.js";import"./toast-mJ0Bx_GT.js";import"./index-ZHEgE2XS.js";import"./index-DuqhnXMO.js";import"./index-fNjTmf9T.js";import"./times-zfpenlOA.js";import"./utils-GTnaulzv.js";import"./presets-BSCTsi68.js";import"./sparkles-CY9lzZpH.js";import"./sparkles-draft-sDjrI9Uu.js";import"./transaction-t4mJhGCb.js";import"./starknet-CX4nG1WJ.js";import"./spinner-BCFkRInS.js";import"./check-BknbCD27.js";import"./image-DVJtesZi.js";import"./index-DTUS6EFt.js";import"./context-CDbX8kD3.js";import"./index-Dkb_ZYRU.js";import"./index-BYUKtP1h.js";import"./index-C_Dn7qTj.js";import"./index-BQxh6BgF.js";import"./index-CVWIyhAF.js";import"./index-BbW-7v3v.js";import"./index-DdDw_O67.js";import"./wedge-Ek6y42Ws.js";import"./index-B7ENhYdy.js";import"./index-BylD-epk.js";import"./index-DZCApzUK.js";import"./index-CJGASTBR.js";import"./index-CYmZMVXJ.js";import"./alert-HkMSTgu9.js";import"./badge-CF9VCaa2.js";import"./breadcrumb-V3TW3CaT.js";import"./dots-CqQy5XBj.js";import"./card-CHJmWtwN.js";import"./checkbox-BJGOHg_b.js";import"./index-DZ2oWOeb.js";import"./index-DaMGPy2X.js";import"./checkbox-BNhnVxLV.js";import"./drawer-CB1qWX_Q.js";import"./dropdown-menu-Bf3pfD8n.js";import"./index-BV9D_7a1.js";import"./index-z8P03atw.js";import"./index-DoUPdNCX.js";import"./circle-Ddb5-e2i.js";import"./alert-DG-IKYwr.js";import"./radio-group-WlSpQHWm.js";import"./menubar-eE93DyoQ.js";import"./popover-DNr9wWs8.js";import"./progress-Dkom_LNH.js";import"./select-COP56eT4.js";import"./index-COzOtNfS.js";import"./circle-check-B84UAr7O.js";import"./separator-DLNkf967.js";import"./sheet-BHnC42pu.js";import"./skeleton-CV1PtUMd.js";import"./switch-CWQaiJ0M.js";import"./table-2Lq_Rdjg.js";import"./tabs-pHV4z6kt.js";import"./toggle-group-Bz_GEFe3.js";import"./utils-CzDHQuSw.js";import"./index-Cd0zht5T.js";import"./tooltip-CEc4qSmp.js";import"./times-circle-BPxv1pFA.js";const Jr={title:"Primitives/Toast/Transaction Notification",component:y,parameters:{layout:"centered",backgrounds:{default:"dark",values:[{name:"dark",value:"#353535"},{name:"light",value:"#ffffff"}]}},decorators:[j=>i.jsx("div",{children:i.jsx(j,{})})],argTypes:{status:{control:"select",options:["confirming","confirmed"]},isExpanded:{control:"boolean"},label:{control:"text"},progress:{control:{type:"range",min:0,max:100,step:1}}}},r={args:{status:"confirming",isExpanded:!0,label:"New Game",progress:66.7}},o={args:{status:"confirmed",isExpanded:!0,progress:100}},t={args:{status:"confirming",isExpanded:!1}},s={args:{status:"confirmed",isExpanded:!1}},e={args:{status:"confirming",isExpanded:!0,label:"Token Swap",progress:45}},a={args:{status:"confirmed",isExpanded:!0,label:"Transfer",progress:100}};var n,p,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    status: "confirming",
    isExpanded: true,
    label: "New Game",
    progress: 66.7
  }
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var d,c,l;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    status: "confirmed",
    isExpanded: true,
    progress: 100
  }
}`,...(l=(c=o.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var u,g,f;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    status: "confirming",
    isExpanded: false
  }
}`,...(f=(g=t.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var x,E,T;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    status: "confirmed",
    isExpanded: false
  }
}`,...(T=(E=s.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var C,S,b;e.parameters={...e.parameters,docs:{...(C=e.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    status: "confirming",
    isExpanded: true,
    label: "Token Swap",
    progress: 45
  }
}`,...(b=(S=e.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var w,k,v;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    status: "confirmed",
    isExpanded: true,
    label: "Transfer",
    progress: 100
  }
}`,...(v=(k=a.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};const Kr=["ConfirmingExpanded","ConfirmedExpanded","ConfirmingCollapsed","ConfirmedCollapsed","SwapTransaction","TransferTransaction"];export{s as ConfirmedCollapsed,o as ConfirmedExpanded,t as ConfirmingCollapsed,r as ConfirmingExpanded,e as SwapTransaction,a as TransferTransaction,Kr as __namedExportsOrder,Jr as default};
