import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{R as m}from"./index-BlmOqGMO.js";import{c as Z}from"./index-KnJS0CU8.js";import{C as $}from"./controller-stack-CUq8UEUL.js";import{C as _,a as z,S as D}from"./credit-card-nAAZ4pDa.js";import{S as M}from"./starknet-CX4nG1WJ.js";import{G as O,P as B,A as F,R as H}from"./rabby-6qyj6UO8.js";import{S as J}from"./starknet-PF0GvedQ.js";import{E as K}from"./ethereum-CkXEu8_4.js";import"./index-yBjzXJbu.js";import"./utils-GTnaulzv.js";import"./index-CRGxjvZy.js";const e=({text:L,icon:Q,network:d,networkIcon:U,className:V,onClick:X,...Y})=>o.jsxs("div",{className:Z("group flex flex-row p-2.5 gap-2 justify-between","w-full h-[40px]","rounded","bg-background-200 hover:bg-background-300","text-foreground-100 text-normal uppercase tracking-[2.1px]","cursor-pointer transition-colors ease-in-out",V),onClick:X,...Y,children:[o.jsxs("div",{className:"flex items-center gap-2",children:[m.cloneElement(Q,{size:"sm"}),o.jsx("span",{className:"font-ld text-sm",children:L})]}),d&&o.jsxs("div",{className:"flex items-center gap-1 text-foreground-200 text-sm border border-background-300 group-hover:border-background-400 rounded pl-1 pr-2",children:[m.cloneElement(U,{size:"xs"}),o.jsx("span",{className:"font-ld text-xs",children:d})]})]});e.__docgenInfo={description:"",methods:[],displayName:"PurchaseCard",props:{text:{required:!0,tsType:{name:"string"},description:""},icon:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},network:{required:!1,tsType:{name:"string"},description:""},networkIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const xo={title:"Modules/Purchase/Card",component:e,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{text:{description:"Payment method text",control:{type:"text"}},icon:{description:"Payment method icon",control:{type:"object"}},network:{description:"Network text",control:{type:"text"}},networkIcon:{description:"Network icon",control:{type:"object"}}}},r={render:()=>o.jsxs($,{children:[o.jsx(e,{text:"Controller",icon:o.jsx(_,{}),onClick:()=>{}}),o.jsx(e,{text:"Credit Card",icon:o.jsx(z,{variant:"solid"}),onClick:()=>{}}),o.jsx(e,{text:"Starknet",icon:o.jsx(M,{}),onClick:()=>{}}),o.jsx(e,{text:"Google",icon:o.jsx(O,{}),onClick:()=>{}}),o.jsx(e,{text:"Phantom",icon:o.jsx(B,{}),network:"Solana",networkIcon:o.jsx(D,{}),onClick:()=>{}}),o.jsx(e,{text:"Argent",icon:o.jsx(F,{}),network:"Starknet",networkIcon:o.jsx(J,{}),onClick:()=>{}}),o.jsx(e,{text:"Rabby",icon:o.jsx(H,{}),network:"Ethereum",networkIcon:o.jsx(K,{}),onClick:()=>{}})]})},t={args:{text:"Controller",icon:o.jsx(_,{})}},n={args:{text:"Credit Card",icon:o.jsx(z,{variant:"solid"})}},a={args:{text:"Starknet",icon:o.jsx(M,{})}},s={args:{text:"Google",icon:o.jsx(O,{})}},c={args:{text:"Phantom",icon:o.jsx(B,{}),network:"Solana",networkIcon:o.jsx(D,{})}},i={args:{text:"Ready",icon:o.jsx(F,{}),network:"Starknet",networkIcon:o.jsx(J,{})}},l={args:{text:"Rabby",icon:o.jsx(H,{}),network:"Ethereum",networkIcon:o.jsx(K,{})}};var p,x,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <ControllerStack>
      <PurchaseCard text="Controller" icon={<ControllerColorIcon />} onClick={() => {}} />
      <PurchaseCard text="Credit Card" icon={<CreditCardIcon variant="solid" />} onClick={() => {}} />
      <PurchaseCard text="Starknet" icon={<StarknetColorIcon />} onClick={() => {}} />
      <PurchaseCard text="Google" icon={<GoogleColorIcon />} onClick={() => {}} />
      <PurchaseCard text="Phantom" icon={<PhantomColorIcon />} network="Solana" networkIcon={<SolanaIcon />} onClick={() => {}} />
      <PurchaseCard text="Argent" icon={<ArgentColorIcon />} network="Starknet" networkIcon={<StarknetIcon />} onClick={() => {}} />
      <PurchaseCard text="Rabby" icon={<RabbyColorIcon />} network="Ethereum" networkIcon={<EthereumIcon />} onClick={() => {}} />
    </ControllerStack>
}`,...(u=(x=r.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};var C,k,g;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    text: "Controller",
    icon: <ControllerColorIcon />
  }
}`,...(g=(k=t.parameters)==null?void 0:k.docs)==null?void 0:g.source}}};var I,h,j;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    text: "Credit Card",
    icon: <CreditCardIcon variant="solid" />
  }
}`,...(j=(h=n.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};var S,w,b;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    text: "Starknet",
    icon: <StarknetColorIcon />
  }
}`,...(b=(w=a.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var y,f,R;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    text: "Google",
    icon: <GoogleColorIcon />
  }
}`,...(R=(f=s.parameters)==null?void 0:f.docs)==null?void 0:R.source}}};var P,E,N;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    text: "Phantom",
    icon: <PhantomColorIcon />,
    network: "Solana",
    networkIcon: <SolanaIcon />
  }
}`,...(N=(E=c.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var v,G,A;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    text: "Ready",
    icon: <ArgentColorIcon />,
    network: "Starknet",
    networkIcon: <StarknetIcon />
  }
}`,...(A=(G=i.parameters)==null?void 0:G.docs)==null?void 0:A.source}}};var T,W,q;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    text: "Rabby",
    icon: <RabbyColorIcon />,
    network: "Ethereum",
    networkIcon: <EthereumIcon />
  }
}`,...(q=(W=l.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};const uo=["Default","Controller","CreditCard","Starknet","Google","PhantomWallet","ReadyWallet","RabbyWallet"];export{t as Controller,n as CreditCard,r as Default,s as Google,c as PhantomWallet,l as RabbyWallet,i as ReadyWallet,a as Starknet,uo as __namedExportsOrder,xo as default};
