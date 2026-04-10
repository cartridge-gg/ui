import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{F as oe}from"./fingerprint-W0HEPycf.js";import{c as x}from"./index-KnJS0CU8.js";import{W as te,M as ie,a as ce,D as le}from"./mobile-NJzIH07A.js";import{R as me,P as h,A as de,G as pe}from"./rabby-6qyj6UO8.js";import{W as ke}from"./wallet-D5Lp36C6.js";import{W as ge}from"./warning-CVvTL8z7.js";import{C as ue}from"./controller-stack-CUq8UEUL.js";import"./index-yBjzXJbu.js";import"./index-BlmOqGMO.js";import"./utils-GTnaulzv.js";import"./index-CRGxjvZy.js";const b={google:{icon:e.jsx(pe,{size:"sm"})},discord:{icon:e.jsx(le,{size:"sm"})},sms:{icon:e.jsx(ce,{variant:"solid",size:"sm"}),label:"SMS"},passkey:{icon:e.jsx(oe,{size:"sm",variant:"solid"})},wallet:{icon:e.jsx(ke,{variant:"solid",size:"sm"})},argent:{icon:e.jsx(de,{size:"sm"})},phantom:{icon:e.jsx(h,{size:"sm"})},"phantom-evm":{icon:e.jsx(h,{size:"sm"}),label:"Phantom"},metamask:{icon:e.jsx(ie,{size:"sm"})},rabby:{icon:e.jsx(me,{size:"sm"})},walletconnect:{icon:e.jsx(te,{size:"sm"}),label:"WalletConnect"}};function n({className:se,kind:s,onClick:ae}){const u=s in b,{icon:C,label:re}=u?b[s]:{icon:e.jsx(ge,{size:"sm"}),label:"Unknown"};return e.jsxs("div",{className:x("flex items-center","w-full h-[40px] p-2.5 gap-2","rounded","bg-background-200 hover:bg-background-300","text-foreground-100 font-ld text-sm text-normal uppercase tracking-[2.1px]","cursor-pointer transition-colors ease-in-out",se),onClick:u?ae:void 0,children:[C&&e.jsx("div",{className:x("w-fit h-fit"),children:C}),re||s.charAt(0).toUpperCase()+s.slice(1)]})}n.__docgenInfo={description:"",methods:[],displayName:"SignerMethod",props:{className:{required:!1,tsType:{name:"string"},description:""},kind:{required:!0,tsType:{name:"union",raw:`| "google"
| "sms"
| "passkey"
| "discord"
| "metamask"
| "argent"
| "rabby"
| "phantom"
| "phantom-evm"
| "walletconnect"
| "wallet"`,elements:[{name:"literal",value:'"google"'},{name:"literal",value:'"sms"'},{name:"literal",value:'"passkey"'},{name:"literal",value:'"discord"'},{name:"literal",value:'"metamask"'},{name:"literal",value:'"argent"'},{name:"literal",value:'"rabby"'},{name:"literal",value:'"phantom"'},{name:"literal",value:'"phantom-evm"'},{name:"literal",value:'"walletconnect"'},{name:"literal",value:'"wallet"'}]},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Ie={title:"Modules/SignerMethod",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{kind:{control:{type:"select"},options:["google","discord","sms","passkey","wallet"]}}},a={render:()=>e.jsxs(ue,{children:[e.jsx(n,{kind:"google",onClick:()=>{}}),e.jsx(n,{kind:"discord",onClick:()=>{}}),e.jsx(n,{kind:"sms",onClick:()=>{}}),e.jsx(n,{kind:"passkey",onClick:()=>{}}),e.jsx(n,{kind:"wallet",onClick:()=>{}}),e.jsx(n,{kind:"argent",onClick:()=>{}}),e.jsx(n,{kind:"phantom",onClick:()=>{}}),e.jsx(n,{kind:"metamask",onClick:()=>{}}),e.jsx(n,{kind:"rabby",onClick:()=>{}}),e.jsx(n,{kind:"walletconnect",onClick:()=>{}})]})},r={args:{kind:"google"}},o={args:{kind:"discord"}},t={args:{kind:"sms"}},i={args:{kind:"passkey"}},c={args:{kind:"wallet"}},l={args:{kind:"argent"}},m={args:{kind:"phantom"}},d={args:{kind:"metamask"}},p={args:{kind:"rabby"}},k={args:{kind:"walletconnect"}},g={args:{kind:"unknown"}};var S,y,j;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <ControllerStack>
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
    </ControllerStack>
}`,...(j=(y=a.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var w,v,M;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    kind: "google"
  }
}`,...(M=(v=r.parameters)==null?void 0:v.docs)==null?void 0:M.source}}};var f,z,I;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    kind: "discord"
  }
}`,...(I=(z=o.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var W,P,D;t.parameters={...t.parameters,docs:{...(W=t.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    kind: "sms"
  }
}`,...(D=(P=t.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};var A,R,G;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    kind: "passkey"
  }
}`,...(G=(R=i.parameters)==null?void 0:R.docs)==null?void 0:G.source}}};var N,T,U;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    kind: "wallet"
  }
}`,...(U=(T=c.parameters)==null?void 0:T.docs)==null?void 0:U.source}}};var _,q,E;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    kind: "argent"
  }
}`,...(E=(q=l.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};var F,O,B;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    kind: "phantom"
  }
}`,...(B=(O=m.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};var H,J,K;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    kind: "metamask"
  }
}`,...(K=(J=d.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var L,Q,V;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    kind: "rabby"
  }
}`,...(V=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:V.source}}};var X,Y,Z;k.parameters={...k.parameters,docs:{...(X=k.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    kind: "walletconnect"
  }
}`,...(Z=(Y=k.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,ne;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    kind: "unknown"
  }
}`,...(ne=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};const We=["Default","Gmail","Discord","sms","Passkey","Wallet","Argent","Phantom","MetaMask","Rabby","WalletConnect","Unknown"];export{l as Argent,a as Default,o as Discord,r as Gmail,d as MetaMask,i as Passkey,m as Phantom,p as Rabby,g as Unknown,c as Wallet,k as WalletConnect,We as __namedExportsOrder,Ie as default,t as sms};
