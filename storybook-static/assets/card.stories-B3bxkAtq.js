import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import"./context-C0ZuLyu1.js";import"./alert-HkMSTgu9.js";import"./badge-CF9VCaa2.js";import"./breadcrumb-BssIq4hO.js";import"./index-D5rlNKlk.js";import"./card-CHJmWtwN.js";import"./checkbox-B_0M2hZW.js";import"./drawer-xE2kwbAV.js";import"./dropdown-menu-CRT-B5yA.js";import"./radio-group-KQIGPIF9.js";import"./menubar-CHnEKWjv.js";import"./popover-BvzVgOqp.js";import"./progress-Dkom_LNH.js";import"./select-CgzdedN0.js";import"./separator-DLNkf967.js";import"./sheet-Bq6Tz9es.js";import"./skeleton-CV1PtUMd.js";import"./switch-ssHJkgb5.js";import"./table-2Lq_Rdjg.js";import"./tabs-Baec46jY.js";import"./index-BlmOqGMO.js";import"./specialized-toasts-B5CTLsw7.js";import"./toggle-group-C7AVasTd.js";import"./index-XwABQy1c.js";import"./tooltip-gQAcybeF.js";import{c as z}from"./index-KnJS0CU8.js";import{T as m}from"./thumbnail-BvzW9a79.js";import{C as M,a as O,S as B}from"./credit-card-CKFnB3TT.js";import{S as D}from"./starknet-BfEjoZhJ.js";import{G as F,P as H,A as J,R as K}from"./rabby-CBbt0dKN.js";import{S as L}from"./award-gyvpM0Ag.js";import{E as Q}from"./ethereum-CianIq4-.js";import"./index-yBjzXJbu.js";import"./index-Dkb_ZYRU.js";import"./index-yBYjIlgW.js";import"./index-C_Dn7qTj.js";import"./index-DKk_hhWv.js";import"./index-CVWIyhAF.js";import"./index-DuqhnXMO.js";import"./index-fNjTmf9T.js";import"./index-BigR8kad.js";import"./index-CQ2Y0WLn.js";import"./index-xprPBo3d.js";import"./wedge-W0rbne9I.js";import"./utils-CWphn_pW.js";import"./index-CRGxjvZy.js";import"./index-D31t_0wX.js";import"./index-Ms1lWa6I.js";import"./index-DZCApzUK.js";import"./index-C-QU4qAu.js";import"./index-BZkNnodj.js";import"./alert-BrNdBT3c.js";import"./times-ynKcNaj_.js";import"./times-circle-gyi9izsJ.js";import"./spinner-D3wGzOGj.js";import"./dots-COnCu59r.js";import"./external-DG4iuQXv.js";import"./index-DZ2oWOeb.js";import"./index-BWkk9jnE.js";import"./checkbox-DBv66za0.js";import"./index-Ck-mJuwY.js";import"./index-wyL_HbYX.js";import"./index-DfuoQG06.js";import"./check-Dqm4PBhQ.js";import"./circle-XVpHZr0H.js";import"./index-Bbf5mMoM.js";import"./circle-check-qG_ejMER.js";import"./toast-9BxvrNCO.js";import"./sparkles-B7iQfMYn.js";import"./utils-CZiDjOgf.js";import"./index-DTUS6EFt.js";import"./warning-CrJl94iH.js";import"./info-BhoZyVIU.js";const G=({text:T,icon:W,network:c,networkIcon:q,className:_,...A})=>r.jsxs("div",{className:z("group flex flex-row gap-2 bg-background-200 hover:bg-background-300 rounded-lg p-3 justify-between cursor-pointer",_),...A,children:[r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx(m,{icon:W,size:"md",className:"bg-background-300 group-hover:bg-background-400",rounded:!0}),r.jsx("span",{children:T})]}),c&&r.jsxs("div",{className:"flex items-center gap-1 text-foreground-200 text-sm border border-background-300 group-hover:border-background-400 rounded pl-1 pr-2",children:[r.jsx(m,{icon:q,size:"xs",className:"text-foreground-200 p-0 group-hover:bg-background-300",rounded:!0}),c]})]});G.__docgenInfo={description:"",methods:[],displayName:"PurchaseCard",props:{text:{required:!0,tsType:{name:"string"},description:""},icon:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},network:{required:!1,tsType:{name:"string"},description:""},networkIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const xo={title:"Modules/Purchase/Card",component:G,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{text:{description:"Payment method text",control:{type:"text"}},icon:{description:"Payment method icon",control:{type:"object"}},network:{description:"Network text",control:{type:"text"}},networkIcon:{description:"Network icon",control:{type:"object"}}}},o={args:{text:"Controller",icon:r.jsx(M,{})}},t={args:{text:"Credit Card",icon:r.jsx(O,{variant:"solid"})}},e={args:{text:"Starknet",icon:r.jsx(D,{})}},n={args:{text:"Google",icon:r.jsx(F,{})}},a={args:{text:"Phantom",icon:r.jsx(H,{}),network:"Solana",networkIcon:r.jsx(B,{})}},s={args:{text:"Ready",icon:r.jsx(J,{}),network:"Starknet",networkIcon:r.jsx(L,{})}},i={args:{text:"Rabby",icon:r.jsx(K,{}),network:"Ethereum",networkIcon:r.jsx(Q,{})}};var p,d,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    text: "Controller",
    icon: <ControllerColorIcon />
  }
}`,...(l=(d=o.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var u,g,x;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    text: "Credit Card",
    icon: <CreditCardIcon variant="solid" />
  }
}`,...(x=(g=t.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var k,C,b;e.parameters={...e.parameters,docs:{...(k=e.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    text: "Starknet",
    icon: <StarknetColorIcon />
  }
}`,...(b=(C=e.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var I,h,y;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    text: "Google",
    icon: <GoogleColorIcon />
  }
}`,...(y=(h=n.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var S,j,w;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    text: "Phantom",
    icon: <PhantomColorIcon />,
    network: "Solana",
    networkIcon: <SolanaIcon />
  }
}`,...(w=(j=a.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var R,f,N;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    text: "Ready",
    icon: <ArgentColorIcon />,
    network: "Starknet",
    networkIcon: <StarknetIcon />
  }
}`,...(N=(f=s.parameters)==null?void 0:f.docs)==null?void 0:N.source}}};var P,v,E;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    text: "Rabby",
    icon: <RabbyColorIcon />,
    network: "Ethereum",
    networkIcon: <EthereumIcon />
  }
}`,...(E=(v=i.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};const ko=["Controller","CreditCard","Starknet","Google","PhantomWallet","ReadyWallet","RabbyWallet"];export{o as Controller,t as CreditCard,n as Google,a as PhantomWallet,i as RabbyWallet,s as ReadyWallet,e as Starknet,ko as __namedExportsOrder,xo as default};
