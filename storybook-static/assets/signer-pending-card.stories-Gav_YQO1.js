import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{F as Ke}from"./fingerprint-W0HEPycf.js";import{c as o}from"./index-KnJS0CU8.js";import{f as Le}from"./account-tYrnUz6u.js";import{W as Qe,M as Ve,a as Xe,D as Ye}from"./mobile-NJzIH07A.js";import{P as Ze,R as $e,A as er,G as rr}from"./rabby-6qyj6UO8.js";import"./index-yBjzXJbu.js";import"./index-BlmOqGMO.js";import"./utils-GTnaulzv.js";import"./index-CRGxjvZy.js";import"./index-DVenkyLy.js";const sr={google:{icon:e.jsx(rr,{size:"xl"}),primaryText:"Connecting to Google",secondaryText:"Continue in the other window"},discord:{icon:e.jsx(Ye,{size:"xl"}),primaryText:"Connecting to Discord",secondaryText:"Continue in the other window"},sms:{icon:e.jsx(Xe,{variant:"solid",size:"xl"}),primaryText:"",secondaryText:"",label:"SMS"},passkey:{icon:e.jsx(Ke,{size:"xl",variant:"line"}),primaryText:"Waiting for Confirmation",secondaryText:"Continue in browser"},metamask:{icon:e.jsx(Ve,{size:"xl"}),primaryText:"Waiting for Signature",secondaryText:"Don't see your wallet? Check your other browser windows"},argent:{icon:e.jsx(er,{size:"xl"}),primaryText:"Waiting for Signature",secondaryText:"Don't see your wallet? Check your other browser windows"},rabby:{icon:e.jsx($e,{size:"xl"}),primaryText:"Waiting for Signature",secondaryText:"Don't see your wallet? Check your other browser windows"},phantom:{icon:e.jsx(Ze,{size:"xl"}),primaryText:"Waiting for Signature",secondaryText:"Don't see your wallet? Check your other browser windows"},walletconnect:{icon:e.jsx(Qe,{size:"xl"}),primaryText:"Waiting for Signature",secondaryText:"Continue on your mobile device",label:"WalletConnect"}};function r({className:Ue,kind:n,inProgress:v,error:s,authedAddress:a}){const{icon:M,primaryText:Be,secondaryText:He,label:Je}=sr[n];return n==="sms"&&(v||s)?e.jsx(e.Fragment,{}):e.jsxs("div",{className:o("flex flex-col items-center justify-center","w-full h-fit p-10 gap-4","rounded","border border-background-200","bg-background-100",Ue),children:[M&&e.jsx("div",{className:o("w-fit h-fit p-2","rounded-[32px]","border border-background-200",s&&"border-destructive-100"),children:M}),e.jsxs("div",{className:"flex flex-col gap-2 justify-center items-center",children:[e.jsx("span",{className:o("text-foreground-300 text-sm font-medium text-center",s&&"text-destructive-100",a&&"text-constructive-100"),children:s||(v?Be:a?"This wallet is already authenticated":"Success!")}),e.jsx("span",{className:o("text-foreground-400 text-sm font-medium text-center"),children:s?"Please try connecting again":v?He:a?Le(a,{size:"xs"}):(Je||n.charAt(0).toUpperCase()+n.slice(1))+" connected"})]})]})}r.__docgenInfo={description:"",methods:[],displayName:"SignerPendingCard",props:{className:{required:!1,tsType:{name:"string"},description:""},kind:{required:!0,tsType:{name:"union",raw:`| "google"
| "sms"
| "passkey"
| "discord"
| "metamask"
| "argent"
| "rabby"
| "phantom"
| "walletconnect"`,elements:[{name:"literal",value:'"google"'},{name:"literal",value:'"sms"'},{name:"literal",value:'"passkey"'},{name:"literal",value:'"discord"'},{name:"literal",value:'"metamask"'},{name:"literal",value:'"argent"'},{name:"literal",value:'"rabby"'},{name:"literal",value:'"phantom"'},{name:"literal",value:'"walletconnect"'}]},description:""},inProgress:{required:!0,tsType:{name:"boolean"},description:""},error:{required:!1,tsType:{name:"string"},description:""},authedAddress:{required:!1,tsType:{name:"string"},description:""}}};const pr={title:"Modules/SignerPendingCard",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{kind:{control:{type:"select"},options:["google","discord","sms","passkey","metamask","argent","rabby","phantom","walletconnect"]}}},t={args:{kind:"google"}},c={args:{kind:"discord"}},i={args:{kind:"sms"}},d={args:{kind:"passkey"}},g={args:{kind:"metamask"}},m={args:{kind:"argent"}},l={args:{kind:"rabby"}},u={args:{kind:"phantom"}},p={args:{kind:"walletconnect"}},k={args:{kind:"google",inProgress:!0}},P={args:{kind:"discord",inProgress:!0}},y={args:{kind:"sms",inProgress:!0}},x={args:{kind:"passkey",inProgress:!0}},S={args:{kind:"metamask",inProgress:!0}},f={args:{kind:"argent",inProgress:!0}},b={args:{kind:"rabby",inProgress:!0}},h={args:{kind:"phantom",inProgress:!0}},C={args:{kind:"walletconnect",inProgress:!0}},w={args:{kind:"google",error:"Error connecting to Google"}},j={args:{kind:"walletconnect",error:"Error connecting to WalletConnect"}},I={args:{kind:"metamask",authedAddress:"0x1234567890123456789012345678901234567890"}},T={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(r,{kind:"google",inProgress:!1}),e.jsx(r,{kind:"discord",inProgress:!1}),e.jsx(r,{kind:"sms",inProgress:!1}),e.jsx(r,{kind:"passkey",inProgress:!1}),e.jsx(r,{kind:"metamask",inProgress:!1}),e.jsx(r,{kind:"argent",inProgress:!1}),e.jsx(r,{kind:"rabby",inProgress:!1}),e.jsx(r,{kind:"phantom",inProgress:!1}),e.jsx(r,{kind:"walletconnect",inProgress:!1})]})};var W,A,D;t.parameters={...t.parameters,docs:{...(W=t.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    kind: "google"
  }
}`,...(D=(A=t.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var G,z,E;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    kind: "discord"
  }
}`,...(E=(z=c.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var N,R,q;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    kind: "sms"
  }
}`,...(q=(R=i.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var _,F,O;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    kind: "passkey"
  }
}`,...(O=(F=d.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var U,B,H;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    kind: "metamask"
  }
}`,...(H=(B=g.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var J,K,L;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    kind: "argent"
  }
}`,...(L=(K=m.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};var Q,V,X;l.parameters={...l.parameters,docs:{...(Q=l.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    kind: "rabby"
  }
}`,...(X=(V=l.parameters)==null?void 0:V.docs)==null?void 0:X.source}}};var Y,Z,$;u.parameters={...u.parameters,docs:{...(Y=u.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    kind: "phantom"
  }
}`,...($=(Z=u.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,re,se;p.parameters={...p.parameters,docs:{...(ee=p.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    kind: "walletconnect"
  }
}`,...(se=(re=p.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ne,ae,oe;k.parameters={...k.parameters,docs:{...(ne=k.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    kind: "google",
    inProgress: true
  }
}`,...(oe=(ae=k.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var te,ce,ie;P.parameters={...P.parameters,docs:{...(te=P.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    kind: "discord",
    inProgress: true
  }
}`,...(ie=(ce=P.parameters)==null?void 0:ce.docs)==null?void 0:ie.source}}};var de,ge,me;y.parameters={...y.parameters,docs:{...(de=y.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    kind: "sms",
    inProgress: true
  }
}`,...(me=(ge=y.parameters)==null?void 0:ge.docs)==null?void 0:me.source}}};var le,ue,pe;x.parameters={...x.parameters,docs:{...(le=x.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    kind: "passkey",
    inProgress: true
  }
}`,...(pe=(ue=x.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var ke,Pe,ye;S.parameters={...S.parameters,docs:{...(ke=S.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    kind: "metamask",
    inProgress: true
  }
}`,...(ye=(Pe=S.parameters)==null?void 0:Pe.docs)==null?void 0:ye.source}}};var xe,Se,fe;f.parameters={...f.parameters,docs:{...(xe=f.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    kind: "argent",
    inProgress: true
  }
}`,...(fe=(Se=f.parameters)==null?void 0:Se.docs)==null?void 0:fe.source}}};var be,he,Ce;b.parameters={...b.parameters,docs:{...(be=b.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    kind: "rabby",
    inProgress: true
  }
}`,...(Ce=(he=b.parameters)==null?void 0:he.docs)==null?void 0:Ce.source}}};var we,je,Ie;h.parameters={...h.parameters,docs:{...(we=h.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    kind: "phantom",
    inProgress: true
  }
}`,...(Ie=(je=h.parameters)==null?void 0:je.docs)==null?void 0:Ie.source}}};var Te,ve,Me;C.parameters={...C.parameters,docs:{...(Te=C.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  args: {
    kind: "walletconnect",
    inProgress: true
  }
}`,...(Me=(ve=C.parameters)==null?void 0:ve.docs)==null?void 0:Me.source}}};var We,Ae,De;w.parameters={...w.parameters,docs:{...(We=w.parameters)==null?void 0:We.docs,source:{originalSource:`{
  args: {
    kind: "google",
    error: "Error connecting to Google"
  }
}`,...(De=(Ae=w.parameters)==null?void 0:Ae.docs)==null?void 0:De.source}}};var Ge,ze,Ee;j.parameters={...j.parameters,docs:{...(Ge=j.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  args: {
    kind: "walletconnect",
    error: "Error connecting to WalletConnect"
  }
}`,...(Ee=(ze=j.parameters)==null?void 0:ze.docs)==null?void 0:Ee.source}}};var Ne,Re,qe;I.parameters={...I.parameters,docs:{...(Ne=I.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  args: {
    kind: "metamask",
    authedAddress: "0x1234567890123456789012345678901234567890"
  }
}`,...(qe=(Re=I.parameters)==null?void 0:Re.docs)==null?void 0:qe.source}}};var _e,Fe,Oe;T.parameters={...T.parameters,docs:{...(_e=T.parameters)==null?void 0:_e.docs,source:{originalSource:`{
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
    </div>
}`,...(Oe=(Fe=T.parameters)==null?void 0:Fe.docs)==null?void 0:Oe.source}}};const kr=["GoogleSuccess","DiscordSuccess","SMSSuccess","PasskeySuccess","MetamaskSuccess","ArgentSuccess","RabbySuccess","PhantomSuccess","WalletConnectSuccess","GoogleInProgress","DiscordInProgress","SMSInProgress","PasskeyInProgress","MetamaskInProgress","ArgentInProgress","RabbyInProgress","PhantomInProgress","WalletConnectInProgress","GoogleError","WalletConnectError","MetamaskAlreadyAuthenticated","AllMethods"];export{T as AllMethods,f as ArgentInProgress,m as ArgentSuccess,P as DiscordInProgress,c as DiscordSuccess,w as GoogleError,k as GoogleInProgress,t as GoogleSuccess,I as MetamaskAlreadyAuthenticated,S as MetamaskInProgress,g as MetamaskSuccess,x as PasskeyInProgress,d as PasskeySuccess,h as PhantomInProgress,u as PhantomSuccess,b as RabbyInProgress,l as RabbySuccess,y as SMSInProgress,i as SMSSuccess,j as WalletConnectError,C as WalletConnectInProgress,p as WalletConnectSuccess,kr as __namedExportsOrder,pr as default};
