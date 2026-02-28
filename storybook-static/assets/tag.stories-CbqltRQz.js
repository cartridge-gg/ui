import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{F as i}from"./tag-CI7-s27K.js";import"./index-yBjzXJbu.js";import"./index-CRGxjvZy.js";import"./index-KnJS0CU8.js";const x={title:"Modules/Followers/Tag",component:i,tags:["autodocs"],parameters:{layout:"centered"}},d=["darkest","darker","dark","default","light","lighter","lightest","ghost"],e={render:l=>a.jsx("div",{className:"flex flex-col gap-y-2",children:d.map(r=>a.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[a.jsx("p",{className:"text-xs font-medium capitalize",children:r}),a.jsx(i,{...l,variant:r})]},r))})};var s,t,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-y-2">
      {variants.map(variant => <div key={variant} className="grid grid-cols-2 gap-2">
          <p className="text-xs font-medium capitalize">{variant}</p>
          <FollowerTag {...args} variant={variant} />
        </div>)}
    </div>
}`,...(o=(t=e.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const u=["Default"];export{e as Default,u as __namedExportsOrder,x as default};
