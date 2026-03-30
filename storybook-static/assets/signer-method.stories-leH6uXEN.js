import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{F as Z}from"./fingerprint-W0HEPycf.js";import{c as u}from"./index-KnJS0CU8.js";import{W as $,M as ee,a as se,D as re}from"./mobile-NJzIH07A.js";import{R as ae,P as ne,A as oe,G as te}from"./rabby-6qyj6UO8.js";import{W as ie}from"./wallet-D5Lp36C6.js";import{C as ce}from"./controller-stack-CUq8UEUL.js";import"./index-yBjzXJbu.js";import"./index-BlmOqGMO.js";import"./utils-GTnaulzv.js";import"./index-CRGxjvZy.js";const le={google:{icon:e.jsx(te,{size:"sm"})},discord:{icon:e.jsx(re,{size:"sm"})},sms:{icon:e.jsx(se,{variant:"solid",size:"sm"}),label:"SMS"},passkey:{icon:e.jsx(Z,{size:"sm",variant:"solid"})},wallet:{icon:e.jsx(ie,{variant:"solid",size:"sm"})},argent:{icon:e.jsx(oe,{size:"sm"})},phantom:{icon:e.jsx(ne,{size:"sm"})},metamask:{icon:e.jsx(ee,{size:"sm"})},rabby:{icon:e.jsx(ae,{size:"sm"})},walletconnect:{icon:e.jsx($,{size:"sm"}),label:"WalletConnect"}};function s({className:V,kind:g,onClick:X}){const{icon:k,label:Y}=le[g];return e.jsxs("div",{className:u("flex items-center","w-full h-[40px] p-2.5 gap-2","rounded","bg-background-200 hover:bg-background-300","text-foreground-100 font-ld text-sm text-normal uppercase tracking-[2.1px]","cursor-pointer transition-colors ease-in-out",V),onClick:X,children:[k&&e.jsx("div",{className:u("w-fit h-fit"),children:k}),Y||g.charAt(0).toUpperCase()+g.slice(1)]})}s.__docgenInfo={description:"",methods:[],displayName:"SignerMethod",props:{className:{required:!1,tsType:{name:"string"},description:""},kind:{required:!0,tsType:{name:"union",raw:'SignerPendingCardKind | "wallet"',elements:[{name:"union",raw:`| "google"
| "sms"
| "passkey"
| "discord"
| "metamask"
| "argent"
| "rabby"
| "phantom"
| "walletconnect"`,elements:[{name:"literal",value:'"google"'},{name:"literal",value:'"sms"'},{name:"literal",value:'"passkey"'},{name:"literal",value:'"discord"'},{name:"literal",value:'"metamask"'},{name:"literal",value:'"argent"'},{name:"literal",value:'"rabby"'},{name:"literal",value:'"phantom"'},{name:"literal",value:'"walletconnect"'}]},{name:"literal",value:'"wallet"'}]},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const ye={title:"Modules/SignerMethod",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{kind:{control:{type:"select"},options:["google","discord","sms","passkey","wallet"]}}},r={render:()=>e.jsxs(ce,{children:[e.jsx(s,{kind:"google",onClick:()=>{}}),e.jsx(s,{kind:"discord",onClick:()=>{}}),e.jsx(s,{kind:"sms",onClick:()=>{}}),e.jsx(s,{kind:"passkey",onClick:()=>{}}),e.jsx(s,{kind:"wallet",onClick:()=>{}}),e.jsx(s,{kind:"argent",onClick:()=>{}}),e.jsx(s,{kind:"phantom",onClick:()=>{}}),e.jsx(s,{kind:"metamask",onClick:()=>{}}),e.jsx(s,{kind:"rabby",onClick:()=>{}}),e.jsx(s,{kind:"walletconnect",onClick:()=>{}})]})},a={args:{kind:"google"}},n={args:{kind:"discord"}},o={args:{kind:"sms"}},t={args:{kind:"passkey"}},i={args:{kind:"wallet"}},c={args:{kind:"argent"}},l={args:{kind:"phantom"}},d={args:{kind:"metamask"}},m={args:{kind:"rabby"}},p={args:{kind:"walletconnect"}};var C,x,h;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(h=(x=r.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var S,b,y;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    kind: "google"
  }
}`,...(y=(b=a.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var j,M,f;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    kind: "discord"
  }
}`,...(f=(M=n.parameters)==null?void 0:M.docs)==null?void 0:f.source}}};var w,v,I;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    kind: "sms"
  }
}`,...(I=(v=o.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var z,W,P;t.parameters={...t.parameters,docs:{...(z=t.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    kind: "passkey"
  }
}`,...(P=(W=t.parameters)==null?void 0:W.docs)==null?void 0:P.source}}};var D,A,R;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    kind: "wallet"
  }
}`,...(R=(A=i.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var G,N,T;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    kind: "argent"
  }
}`,...(T=(N=c.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var _,q,E;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    kind: "phantom"
  }
}`,...(E=(q=l.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};var F,K,O;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    kind: "metamask"
  }
}`,...(O=(K=d.parameters)==null?void 0:K.docs)==null?void 0:O.source}}};var U,B,H;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    kind: "rabby"
  }
}`,...(H=(B=m.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var J,L,Q;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    kind: "walletconnect"
  }
}`,...(Q=(L=p.parameters)==null?void 0:L.docs)==null?void 0:Q.source}}};const je=["Default","Gmail","Discord","sms","Passkey","Wallet","Argent","Phantom","MetaMask","Rabby","WalletConnect"];export{c as Argent,r as Default,n as Discord,a as Gmail,d as MetaMask,t as Passkey,l as Phantom,m as Rabby,i as Wallet,p as WalletConnect,je as __namedExportsOrder,ye as default,o as sms};
