import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{F as Be}from"./fingerprint-W0HEPycf.js";import{c as o}from"./index-KnJS0CU8.js";import{f as He}from"./account-tYrnUz6u.js";import{W as Je}from"./wallet-D5Lp36C6.js";import{W as Ke,M as Le,a as Qe,D as Ve}from"./mobile-NJzIH07A.js";import{P as W,R as Xe,A as Ye,G as Ze}from"./rabby-6qyj6UO8.js";import"./index-yBjzXJbu.js";import"./index-BlmOqGMO.js";import"./utils-GTnaulzv.js";import"./index-CRGxjvZy.js";import"./index-DVenkyLy.js";const $e={google:{icon:e.jsx(Ze,{size:"xl"}),primaryText:"Connecting to Google",secondaryText:"Continue in the other window"},discord:{icon:e.jsx(Ve,{size:"xl"}),primaryText:"Connecting to Discord",secondaryText:"Continue in the other window"},sms:{icon:e.jsx(Qe,{variant:"solid",size:"xl"}),primaryText:"",secondaryText:"",label:"SMS"},passkey:{icon:e.jsx(Be,{size:"xl",variant:"line"}),primaryText:"Waiting for Confirmation",secondaryText:"Continue in browser"},metamask:{icon:e.jsx(Le,{size:"xl"}),primaryText:"Waiting for Signature",secondaryText:"Don't see your wallet? Check your other browser windows"},argent:{icon:e.jsx(Ye,{size:"xl"}),primaryText:"Waiting for Signature",secondaryText:"Don't see your wallet? Check your other browser windows"},rabby:{icon:e.jsx(Xe,{size:"xl"}),primaryText:"Waiting for Signature",secondaryText:"Don't see your wallet? Check your other browser windows"},phantom:{icon:e.jsx(W,{size:"xl"}),primaryText:"Waiting for Signature",secondaryText:"Don't see your wallet? Check your other browser windows"},"phantom-evm":{icon:e.jsx(W,{size:"xl"}),primaryText:"Waiting for Signature",secondaryText:"Don't see your wallet? Check your other browser windows",label:"Phantom"},walletconnect:{icon:e.jsx(Ke,{size:"xl"}),primaryText:"Waiting for Signature",secondaryText:"Continue on your mobile device",label:"WalletConnect"},wallet:{icon:e.jsx(Je,{variant:"solid",size:"xl"}),primaryText:"",secondaryText:"",label:"Wallet"}};function r({className:_e,kind:n,inProgress:v,error:s,authedAddress:a}){const{icon:I,primaryText:Fe,secondaryText:Oe,label:Ue}=$e[n];return n==="sms"&&(v||s)?e.jsx(e.Fragment,{}):e.jsxs("div",{className:o("flex flex-col items-center justify-center","w-full h-fit p-10 gap-4","rounded","border border-background-200","bg-background-100",_e),children:[I&&e.jsx("div",{className:o("w-fit h-fit p-2","rounded-[32px]","border border-background-200",s&&"border-destructive-100"),children:I}),e.jsxs("div",{className:"flex flex-col gap-2 justify-center items-center",children:[e.jsx("span",{className:o("text-foreground-300 text-sm font-medium text-center",s&&"text-destructive-100",a&&"text-constructive-100"),children:s||(v?Fe:a?"This wallet is already authenticated":"Success!")}),e.jsx("span",{className:o("text-foreground-400 text-sm font-medium text-center"),children:s?"Please try connecting again":v?Oe:a?He(a,{size:"xs"}):(Ue||n.charAt(0).toUpperCase()+n.slice(1))+" connected"})]})]})}r.__docgenInfo={description:"",methods:[],displayName:"SignerPendingCard",props:{className:{required:!1,tsType:{name:"string"},description:""},kind:{required:!0,tsType:{name:"union",raw:`| "google"
| "sms"
| "passkey"
| "discord"
| "metamask"
| "argent"
| "rabby"
| "phantom"
| "phantom-evm"
| "walletconnect"
| "wallet"`,elements:[{name:"literal",value:'"google"'},{name:"literal",value:'"sms"'},{name:"literal",value:'"passkey"'},{name:"literal",value:'"discord"'},{name:"literal",value:'"metamask"'},{name:"literal",value:'"argent"'},{name:"literal",value:'"rabby"'},{name:"literal",value:'"phantom"'},{name:"literal",value:'"phantom-evm"'},{name:"literal",value:'"walletconnect"'},{name:"literal",value:'"wallet"'}]},description:""},inProgress:{required:!0,tsType:{name:"boolean"},description:""},error:{required:!1,tsType:{name:"string"},description:""},authedAddress:{required:!1,tsType:{name:"string"},description:""}}};const mr={title:"Modules/SignerPendingCard",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{kind:{control:{type:"select"},options:["google","discord","sms","passkey","metamask","argent","rabby","phantom","walletconnect","phantom-evm","wallet"]}}},t={args:{kind:"google"}},i={args:{kind:"discord"}},c={args:{kind:"sms"}},d={args:{kind:"passkey"}},l={args:{kind:"metamask"}},g={args:{kind:"argent"}},m={args:{kind:"rabby"}},p={args:{kind:"phantom"}},u={args:{kind:"walletconnect"}},k={args:{kind:"google",inProgress:!0}},x={args:{kind:"discord",inProgress:!0}},y={args:{kind:"sms",inProgress:!0}},P={args:{kind:"passkey",inProgress:!0}},S={args:{kind:"metamask",inProgress:!0}},f={args:{kind:"argent",inProgress:!0}},b={args:{kind:"rabby",inProgress:!0}},w={args:{kind:"walletconnect",inProgress:!0}},h={args:{kind:"google",error:"Error connecting to Google"}},C={args:{kind:"walletconnect",error:"Error connecting to WalletConnect"}},j={args:{kind:"metamask",authedAddress:"0x1234567890123456789012345678901234567890"}},T={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(r,{kind:"google",inProgress:!1}),e.jsx(r,{kind:"discord",inProgress:!1}),e.jsx(r,{kind:"sms",inProgress:!1}),e.jsx(r,{kind:"passkey",inProgress:!1}),e.jsx(r,{kind:"metamask",inProgress:!1}),e.jsx(r,{kind:"argent",inProgress:!1}),e.jsx(r,{kind:"rabby",inProgress:!1}),e.jsx(r,{kind:"phantom",inProgress:!1}),e.jsx(r,{kind:"walletconnect",inProgress:!1}),e.jsx(r,{kind:"wallet",inProgress:!1})]})};var M,A,z;t.parameters={...t.parameters,docs:{...(M=t.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    kind: "google"
  }
}`,...(z=(A=t.parameters)==null?void 0:A.docs)==null?void 0:z.source}}};var D,G,E;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    kind: "discord"
  }
}`,...(E=(G=i.parameters)==null?void 0:G.docs)==null?void 0:E.source}}};var N,R,q;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    kind: "sms"
  }
}`,...(q=(R=c.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var _,F,O;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    kind: "passkey"
  }
}`,...(O=(F=d.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var U,B,H;l.parameters={...l.parameters,docs:{...(U=l.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    kind: "metamask"
  }
}`,...(H=(B=l.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var J,K,L;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    kind: "argent"
  }
}`,...(L=(K=g.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};var Q,V,X;m.parameters={...m.parameters,docs:{...(Q=m.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    kind: "rabby"
  }
}`,...(X=(V=m.parameters)==null?void 0:V.docs)==null?void 0:X.source}}};var Y,Z,$;p.parameters={...p.parameters,docs:{...(Y=p.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    kind: "phantom"
  }
}`,...($=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,re,se;u.parameters={...u.parameters,docs:{...(ee=u.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    kind: "walletconnect"
  }
}`,...(se=(re=u.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ne,ae,oe;k.parameters={...k.parameters,docs:{...(ne=k.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    kind: "google",
    inProgress: true
  }
}`,...(oe=(ae=k.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var te,ie,ce;x.parameters={...x.parameters,docs:{...(te=x.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    kind: "discord",
    inProgress: true
  }
}`,...(ce=(ie=x.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var de,le,ge;y.parameters={...y.parameters,docs:{...(de=y.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    kind: "sms",
    inProgress: true
  }
}`,...(ge=(le=y.parameters)==null?void 0:le.docs)==null?void 0:ge.source}}};var me,pe,ue;P.parameters={...P.parameters,docs:{...(me=P.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    kind: "passkey",
    inProgress: true
  }
}`,...(ue=(pe=P.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var ke,xe,ye;S.parameters={...S.parameters,docs:{...(ke=S.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    kind: "metamask",
    inProgress: true
  }
}`,...(ye=(xe=S.parameters)==null?void 0:xe.docs)==null?void 0:ye.source}}};var Pe,Se,fe;f.parameters={...f.parameters,docs:{...(Pe=f.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  args: {
    kind: "argent",
    inProgress: true
  }
}`,...(fe=(Se=f.parameters)==null?void 0:Se.docs)==null?void 0:fe.source}}};var be,we,he;b.parameters={...b.parameters,docs:{...(be=b.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    kind: "rabby",
    inProgress: true
  }
}`,...(he=(we=b.parameters)==null?void 0:we.docs)==null?void 0:he.source}}};var Ce,je,Te;w.parameters={...w.parameters,docs:{...(Ce=w.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  args: {
    kind: "walletconnect",
    inProgress: true
  }
}`,...(Te=(je=w.parameters)==null?void 0:je.docs)==null?void 0:Te.source}}};var ve,Ie,We;h.parameters={...h.parameters,docs:{...(ve=h.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    kind: "google",
    error: "Error connecting to Google"
  }
}`,...(We=(Ie=h.parameters)==null?void 0:Ie.docs)==null?void 0:We.source}}};var Me,Ae,ze;C.parameters={...C.parameters,docs:{...(Me=C.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  args: {
    kind: "walletconnect",
    error: "Error connecting to WalletConnect"
  }
}`,...(ze=(Ae=C.parameters)==null?void 0:Ae.docs)==null?void 0:ze.source}}};var De,Ge,Ee;j.parameters={...j.parameters,docs:{...(De=j.parameters)==null?void 0:De.docs,source:{originalSource:`{
  args: {
    kind: "metamask",
    authedAddress: "0x1234567890123456789012345678901234567890"
  }
}`,...(Ee=(Ge=j.parameters)==null?void 0:Ge.docs)==null?void 0:Ee.source}}};var Ne,Re,qe;T.parameters={...T.parameters,docs:{...(Ne=T.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <SignerPendingCard kind="google" inProgress={false} />
      <SignerPendingCard kind="discord" inProgress={false} />
      <SignerPendingCard kind="sms" inProgress={false} />
      <SignerPendingCard kind="passkey" inProgress={false} />
      <SignerPendingCard kind="metamask" inProgress={false} />
      <SignerPendingCard kind="argent" inProgress={false} />
      <SignerPendingCard kind="rabby" inProgress={false} />
      <SignerPendingCard kind="phantom" inProgress={false} />
      <SignerPendingCard kind="walletconnect" inProgress={false} />
      <SignerPendingCard kind="wallet" inProgress={false} />
    </div>
}`,...(qe=(Re=T.parameters)==null?void 0:Re.docs)==null?void 0:qe.source}}};const pr=["GoogleSuccess","DiscordSuccess","SMSSuccess","PasskeySuccess","MetamaskSuccess","ArgentSuccess","RabbySuccess","PhantomSuccess","WalletConnectSuccess","GoogleInProgress","DiscordInProgress","SMSInProgress","PasskeyInProgress","MetamaskInProgress","ArgentInProgress","RabbyInProgress","WalletConnectInProgress","GoogleError","WalletConnectError","MetamaskAlreadyAuthenticated","AllMethods"];export{T as AllMethods,f as ArgentInProgress,g as ArgentSuccess,x as DiscordInProgress,i as DiscordSuccess,h as GoogleError,k as GoogleInProgress,t as GoogleSuccess,j as MetamaskAlreadyAuthenticated,S as MetamaskInProgress,l as MetamaskSuccess,P as PasskeyInProgress,d as PasskeySuccess,p as PhantomSuccess,b as RabbyInProgress,m as RabbySuccess,y as SMSInProgress,c as SMSSuccess,C as WalletConnectError,w as WalletConnectInProgress,u as WalletConnectSuccess,pr as __namedExportsOrder,mr as default};
