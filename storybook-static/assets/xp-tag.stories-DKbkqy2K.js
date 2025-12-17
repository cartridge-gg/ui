import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{X as t}from"./specialized-toasts-B5CTLsw7.js";import"./index-yBjzXJbu.js";import"./index-BlmOqGMO.js";import"./index-CRGxjvZy.js";import"./index-KnJS0CU8.js";import"./award-gyvpM0Ag.js";import"./utils-CWphn_pW.js";import"./toast-9BxvrNCO.js";import"./index-DuqhnXMO.js";import"./index-fNjTmf9T.js";import"./index-DKk_hhWv.js";import"./index-C_Dn7qTj.js";import"./index-yBYjIlgW.js";import"./index-Dkb_ZYRU.js";import"./index-Ms1lWa6I.js";import"./index-CVWIyhAF.js";import"./index-DZCApzUK.js";import"./index-BZkNnodj.js";import"./index-BigR8kad.js";import"./index-Bbf5mMoM.js";import"./times-ynKcNaj_.js";import"./sparkles-B7iQfMYn.js";import"./spinner-D3wGzOGj.js";import"./check-Dqm4PBhQ.js";import"./alert-BrNdBT3c.js";const U={title:"Primitives/Toast/Supporting/XP Tag",component:t,parameters:{layout:"centered",backgrounds:{default:"dark",values:[{name:"dark",value:"#353535"},{name:"light",value:"#ffffff"}]}},argTypes:{amount:{control:"number"},isMainnet:{control:"boolean"}}},n={args:{amount:100,isMainnet:!0}},s={args:{amount:100,isMainnet:!1}},a={args:{amount:1500,isMainnet:!0}},r={args:{amount:25,isMainnet:!1}},i={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-sm font-semibold mb-2",children:"Mainnet vs Testnet"}),e.jsxs("div",{className:"flex gap-4 items-center",children:[e.jsxs("div",{className:"text-center",children:[e.jsx(t,{amount:100,isMainnet:!0}),e.jsx("p",{className:"text-white text-xs mt-1",children:"Mainnet"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(t,{amount:100,isMainnet:!1}),e.jsx("p",{className:"text-white text-xs mt-1",children:"Testnet"})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-sm font-semibold mb-2",children:"Different Amounts"}),e.jsxs("div",{className:"flex gap-4 items-center",children:[e.jsx(t,{amount:25,isMainnet:!0}),e.jsx(t,{amount:100,isMainnet:!0}),e.jsx(t,{amount:250,isMainnet:!0}),e.jsx(t,{amount:1e3,isMainnet:!0})]})]})]})};var m,o,c;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    amount: 100,
    isMainnet: true
  }
}`,...(c=(o=n.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var l,p,u;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    amount: 100,
    isMainnet: false
  }
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var d,x,g;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    amount: 1500,
    isMainnet: true
  }
}`,...(g=(x=a.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var f,v,M;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    amount: 25,
    isMainnet: false
  }
}`,...(M=(v=r.parameters)==null?void 0:v.docs)==null?void 0:M.source}}};var h,j,N;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(N=(j=i.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};const V=["MainnetXP","TestnetXP","LargeAmount","SmallAmount","Comparison"];export{i as Comparison,a as LargeAmount,n as MainnetXP,r as SmallAmount,s as TestnetXP,V as __namedExportsOrder,U as default};
