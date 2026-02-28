import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{C as r}from"./toast-mJ0Bx_GT.js";import"./index-yBjzXJbu.js";import"./index-BlmOqGMO.js";import"./index-CRGxjvZy.js";import"./index-KnJS0CU8.js";import"./index-ZHEgE2XS.js";import"./index-DuqhnXMO.js";import"./index-fNjTmf9T.js";import"./times-zfpenlOA.js";import"./utils-GTnaulzv.js";const y={title:"Primitives/Toast/Supporting/Close Button",component:r,parameters:{layout:"centered",backgrounds:{default:"dark",values:[{name:"dark",value:"#353535"},{name:"light",value:"#ffffff"}]}},argTypes:{variant:{control:"select",options:["default","translucent"]}}},e={args:{variant:"default"}},a={args:{variant:"translucent"}},s={render:()=>t.jsxs("div",{className:"flex gap-4 items-center",children:[t.jsxs("div",{className:"text-center",children:[t.jsx(r,{variant:"default"}),t.jsx("p",{className:"text-white text-xs mt-1",children:"Default"})]}),t.jsxs("div",{className:"text-center bg-[#E66666] p-2 rounded",children:[t.jsx(r,{variant:"translucent"}),t.jsx("p",{className:"text-black text-xs mt-1",children:"Translucent"})]}),t.jsxs("div",{className:"text-center",children:[t.jsx("p",{className:"text-gray-400 text-xs mb-2",children:"Hover states are applied via CSS"}),t.jsx("p",{className:"text-gray-400 text-xs",children:"on actual interaction"})]})]})};var n,o,l;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    variant: "default"
  }
}`,...(l=(o=e.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};var c,i,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: "translucent"
  }
}`,...(m=(i=a.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var p,u,d;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(d=(u=s.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const T=["DefaultCloseButton","TranslucentCloseButton","AllCloseButtonVariants"];export{s as AllCloseButtonVariants,e as DefaultCloseButton,a as TranslucentCloseButton,T as __namedExportsOrder,y as default};
