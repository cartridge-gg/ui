import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{F as ee}from"./fingerprint-W0HEPycf.js";import{c as h}from"./index-KnJS0CU8.js";import{r as se}from"./index-BlmOqGMO.js";import{W as ae,M as ne,a as re,D as oe}from"./mobile-NJzIH07A.js";import{R as te,P as ie,A as ce,G as le}from"./rabby-6qyj6UO8.js";import{W as de}from"./wallet-D5Lp36C6.js";import"./index-yBjzXJbu.js";import"./utils-GTnaulzv.js";import"./index-CRGxjvZy.js";const me={google:{icon:e.jsx(le,{size:"sm"})},discord:{icon:e.jsx(oe,{size:"sm"})},sms:{icon:e.jsx(re,{variant:"solid",size:"sm"}),label:"SMS"},passkey:{icon:e.jsx(ee,{size:"sm",variant:"solid"})},wallet:{icon:e.jsx(de,{variant:"solid",size:"sm"})},argent:{icon:e.jsx(ce,{size:"sm"})},phantom:{icon:e.jsx(ie,{size:"sm"})},metamask:{icon:e.jsx(ne,{size:"sm"})},rabby:{icon:e.jsx(te,{size:"sm"})},walletconnect:{icon:e.jsx(ae,{size:"sm"}),label:"WalletConnect"}};function s({className:X,kind:g,onClick:Y}){const[Z,k]=se.useState(!1),{icon:u,label:$}=me[g];return e.jsxs("div",{className:h("flex items-center","w-full h-[52px] p-3 gap-2","rounded","bg-background-200 hover:bg-background-300","cursor-pointer transition-colors ease-in-out",X),onClick:Y,onMouseEnter:()=>k(!0),onMouseLeave:()=>k(!1),children:[u&&e.jsx("div",{className:h("w-fit h-fit p-1","rounded-[16px]","bg-background-300",Z&&"bg-background-400"),children:u}),e.jsx("span",{className:"text-foreground-100 text-base",children:$||g.charAt(0).toUpperCase()+g.slice(1)})]})}s.__docgenInfo={description:"",methods:[],displayName:"SignerMethod",props:{className:{required:!1,tsType:{name:"string"},description:""},kind:{required:!0,tsType:{name:"union",raw:'SignerPendingCardKind | "wallet"',elements:[{name:"union",raw:`| "google"
| "sms"
| "passkey"
| "discord"
| "metamask"
| "argent"
| "rabby"
| "phantom"
| "walletconnect"`,elements:[{name:"literal",value:'"google"'},{name:"literal",value:'"sms"'},{name:"literal",value:'"passkey"'},{name:"literal",value:'"discord"'},{name:"literal",value:'"metamask"'},{name:"literal",value:'"argent"'},{name:"literal",value:'"rabby"'},{name:"literal",value:'"phantom"'},{name:"literal",value:'"walletconnect"'}]},{name:"literal",value:'"wallet"'}]},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Me={title:"Modules/SignerMethod",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{kind:{control:{type:"select"},options:["google","discord","sms","passkey","wallet"]}}},a={args:{kind:"google"}},n={args:{kind:"discord"}},r={args:{kind:"sms"}},o={args:{kind:"passkey"}},t={args:{kind:"wallet"}},i={args:{kind:"argent"}},c={args:{kind:"phantom"}},l={args:{kind:"metamask"}},d={args:{kind:"rabby"}},m={args:{kind:"walletconnect"}},p={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{kind:"google",onClick:()=>{}}),e.jsx(s,{kind:"discord",onClick:()=>{}}),e.jsx(s,{kind:"sms",onClick:()=>{}}),e.jsx(s,{kind:"passkey",onClick:()=>{}}),e.jsx(s,{kind:"wallet",onClick:()=>{}}),e.jsx(s,{kind:"argent",onClick:()=>{}}),e.jsx(s,{kind:"phantom",onClick:()=>{}}),e.jsx(s,{kind:"metamask",onClick:()=>{}}),e.jsx(s,{kind:"rabby",onClick:()=>{}}),e.jsx(s,{kind:"walletconnect",onClick:()=>{}})]})};var x,C,b;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    kind: "google"
  }
}`,...(b=(C=a.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var y,S,M;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    kind: "discord"
  }
}`,...(M=(S=n.parameters)==null?void 0:S.docs)==null?void 0:M.source}}};var j,v,w;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    kind: "sms"
  }
}`,...(w=(v=r.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var f,I,z;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    kind: "passkey"
  }
}`,...(z=(I=o.parameters)==null?void 0:I.docs)==null?void 0:z.source}}};var W,A,N;t.parameters={...t.parameters,docs:{...(W=t.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    kind: "wallet"
  }
}`,...(N=(A=t.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var P,R,D;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    kind: "argent"
  }
}`,...(D=(R=i.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var E,G,T;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    kind: "phantom"
  }
}`,...(T=(G=c.parameters)==null?void 0:G.docs)==null?void 0:T.source}}};var _,q,F;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    kind: "metamask"
  }
}`,...(F=(q=l.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var H,K,L;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    kind: "rabby"
  }
}`,...(L=(K=d.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};var O,U,B;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    kind: "walletconnect"
  }
}`,...(B=(U=m.parameters)==null?void 0:U.docs)==null?void 0:B.source}}};var J,Q,V;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <SignerMethod kind="google" onClick={() => {}} />
      <SignerMethod kind="discord" onClick={() => {}} />
      <SignerMethod kind="sms" onClick={() => {}} />
      <SignerMethod kind="passkey" onClick={() => {}} />
      <SignerMethod kind="wallet" onClick={() => {}} />
      <SignerMethod kind="argent" onClick={() => {}} />
      <SignerMethod kind="phantom" onClick={() => {}} />
      <SignerMethod kind="metamask" onClick={() => {}} />
      <SignerMethod kind="rabby" onClick={() => {}} />
      <SignerMethod kind="walletconnect" onClick={() => {}} />
    </div>
}`,...(V=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:V.source}}};const je=["Gmail","Discord","sms","Passkey","Wallet","Argent","Phantom","MetaMask","Rabby","WalletConnect","AllMethods"];export{p as AllMethods,i as Argent,n as Discord,a as Gmail,l as MetaMask,o as Passkey,c as Phantom,d as Rabby,t as Wallet,m as WalletConnect,je as __namedExportsOrder,Me as default,r as sms};
