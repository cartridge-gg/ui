import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{T as N}from"./specialized-toasts-B5CTLsw7.js";import{T as y,e as h}from"./toast-9BxvrNCO.js";import"./index-BlmOqGMO.js";import"./index-yBjzXJbu.js";import"./index-CRGxjvZy.js";import"./index-KnJS0CU8.js";import"./award-gyvpM0Ag.js";import"./utils-CWphn_pW.js";import"./sparkles-B7iQfMYn.js";import"./spinner-D3wGzOGj.js";import"./check-Dqm4PBhQ.js";import"./times-ynKcNaj_.js";import"./alert-BrNdBT3c.js";import"./index-DuqhnXMO.js";import"./index-fNjTmf9T.js";import"./index-DKk_hhWv.js";import"./index-C_Dn7qTj.js";import"./index-yBYjIlgW.js";import"./index-Dkb_ZYRU.js";import"./index-Ms1lWa6I.js";import"./index-CVWIyhAF.js";import"./index-DZCApzUK.js";import"./index-BZkNnodj.js";import"./index-BigR8kad.js";import"./index-Bbf5mMoM.js";const sr={title:"Primitives/Toast/Transaction Notification",component:N,parameters:{layout:"centered",backgrounds:{default:"dark",values:[{name:"dark",value:"#353535"},{name:"light",value:"#ffffff"}]}},decorators:[v=>t.jsxs(y,{children:[t.jsx(v,{}),t.jsx(h,{})]})],argTypes:{status:{control:"select",options:["confirming","confirmed"]},isExpanded:{control:"boolean"},label:{control:"text"},progress:{control:{type:"range",min:0,max:100,step:1}}}},r={args:{status:"confirming",isExpanded:!0,label:"New Game",progress:66.7}},s={args:{status:"confirmed",isExpanded:!0,progress:100}},e={args:{status:"confirming",isExpanded:!1}},a={args:{status:"confirmed",isExpanded:!1}},o={args:{status:"confirming",isExpanded:!0,label:"Token Swap",progress:45}},n={args:{status:"confirmed",isExpanded:!0,label:"Transfer",progress:100}};var i,p,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    status: "confirming",
    isExpanded: true,
    label: "New Game",
    progress: 66.7
  }
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var d,c,l;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    status: "confirmed",
    isExpanded: true,
    progress: 100
  }
}`,...(l=(c=s.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var u,f,g;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    status: "confirming",
    isExpanded: false
  }
}`,...(g=(f=e.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var x,E,T;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    status: "confirmed",
    isExpanded: false
  }
}`,...(T=(E=a.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var C,S,b;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    status: "confirming",
    isExpanded: true,
    label: "Token Swap",
    progress: 45
  }
}`,...(b=(S=o.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var w,j,k;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    status: "confirmed",
    isExpanded: true,
    label: "Transfer",
    progress: 100
  }
}`,...(k=(j=n.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};const er=["ConfirmingExpanded","ConfirmedExpanded","ConfirmingCollapsed","ConfirmedCollapsed","SwapTransaction","TransferTransaction"];export{a as ConfirmedCollapsed,s as ConfirmedExpanded,e as ConfirmingCollapsed,r as ConfirmingExpanded,o as SwapTransaction,n as TransferTransaction,er as __namedExportsOrder,sr as default};
