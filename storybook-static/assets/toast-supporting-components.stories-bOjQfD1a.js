import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{C as s}from"./specialized-toasts-B5CTLsw7.js";import"./index-yBjzXJbu.js";import"./index-BlmOqGMO.js";import"./index-CRGxjvZy.js";import"./index-KnJS0CU8.js";import"./award-gyvpM0Ag.js";import"./utils-CWphn_pW.js";import"./toast-9BxvrNCO.js";import"./index-DuqhnXMO.js";import"./index-fNjTmf9T.js";import"./index-DKk_hhWv.js";import"./index-C_Dn7qTj.js";import"./index-yBYjIlgW.js";import"./index-Dkb_ZYRU.js";import"./index-Ms1lWa6I.js";import"./index-CVWIyhAF.js";import"./index-DZCApzUK.js";import"./index-BZkNnodj.js";import"./index-BigR8kad.js";import"./index-Bbf5mMoM.js";import"./times-ynKcNaj_.js";import"./sparkles-B7iQfMYn.js";import"./spinner-D3wGzOGj.js";import"./check-Dqm4PBhQ.js";import"./alert-BrNdBT3c.js";const z={title:"Primitives/Toast/Supporting/Close Button",component:s,parameters:{layout:"centered",backgrounds:{default:"dark",values:[{name:"dark",value:"#353535"},{name:"light",value:"#ffffff"}]}},argTypes:{variant:{control:"select",options:["default","translucent"]},onClick:{action:"clicked"}}},e={args:{variant:"default"}},a={args:{variant:"translucent"}},r={render:()=>t.jsxs("div",{className:"flex gap-4 items-center",children:[t.jsxs("div",{className:"text-center",children:[t.jsx(s,{variant:"default"}),t.jsx("p",{className:"text-white text-xs mt-1",children:"Default"})]}),t.jsxs("div",{className:"text-center bg-[#E66666] p-2 rounded",children:[t.jsx(s,{variant:"translucent"}),t.jsx("p",{className:"text-black text-xs mt-1",children:"Translucent"})]}),t.jsxs("div",{className:"text-center",children:[t.jsx("p",{className:"text-gray-400 text-xs mb-2",children:"Hover states are applied via CSS"}),t.jsx("p",{className:"text-gray-400 text-xs",children:"on actual interaction"})]})]})};var n,o,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    variant: "default"
  }
}`,...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var c,l,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: "translucent"
  }
}`,...(m=(l=a.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var p,d,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4 items-center">
      <div className="text-center">
        <CloseButton variant="default" />
        <p className="text-white text-xs mt-1">Default</p>
      </div>
      <div className="text-center bg-[#E66666] p-2 rounded">
        <CloseButton variant="translucent" />
        <p className="text-black text-xs mt-1">Translucent</p>
      </div>
      <div className="text-center">
        <p className="text-gray-400 text-xs mb-2">
          Hover states are applied via CSS
        </p>
        <p className="text-gray-400 text-xs">on actual interaction</p>
      </div>
    </div>
}`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const F=["DefaultCloseButton","TranslucentCloseButton","AllCloseButtonVariants"];export{r as AllCloseButtonVariants,e as DefaultCloseButton,a as TranslucentCloseButton,F as __namedExportsOrder,z as default};
