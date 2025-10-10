import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{A as c}from"./pin-icons-DUggnVq5.js";import"./index-yBjzXJbu.js";import"./index-CRGxjvZy.js";import"./pin-icon-Dyhds7ul.js";import"./index-KnJS0CU8.js";const A={title:"Modules/Achievements/Pin Icons",component:c,tags:["autodocs"],parameters:{layout:"padded"},args:{pins:[{id:"1",icon:"fa-seedling"},{id:"2",icon:"fa-swords"}]}},m=["darkest","darker","dark","default","light","lighter","lightest","ghost"],o=["xs","default","md"],t={render:r=>s.jsx("div",{className:"flex flex-col gap-3",children:m.map(e=>s.jsxs("div",{className:"grid grid-cols-4 items-center",children:[s.jsx("p",{className:"text-sm text-foreground-100 capitalize text-medium",children:e}),o.map(a=>s.jsx(c,{variant:e,size:a,...r},`${e}-${a}`))]},e))})},i={render:r=>s.jsx("div",{className:"flex flex-col gap-3",children:m.map(e=>s.jsxs("div",{className:"grid grid-cols-4 items-center",children:[s.jsx("p",{className:"text-sm text-foreground-100 capitalize text-medium",children:e}),o.map(a=>s.jsx(c,{variant:e,size:a,theme:!0,...r},`${e}-${a}`))]},e))})},n={render:r=>s.jsx("div",{className:"flex flex-col gap-3",children:m.map(e=>s.jsxs("div",{className:"grid grid-cols-4 items-center",children:[s.jsx("p",{className:"text-sm text-foreground-100 capitalize text-medium",children:e}),o.map(a=>s.jsx(c,{variant:e,size:a,color:"#ff00ff",...r},`${e}-${a}`))]},e))})};var d,l,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-3">
      {variants.map(variant => <div key={variant} className="grid grid-cols-4 items-center">
          <p className="text-sm text-foreground-100 capitalize text-medium">
            {variant}
          </p>
          {sizes.map(size => <AchievementPinIcons key={\`\${variant}-\${size}\`} variant={variant} size={size} {...args} />)}
        </div>)}
    </div>
}`,...(p=(l=t.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var x,g,v;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-3">
      {variants.map(variant => <div key={variant} className="grid grid-cols-4 items-center">
          <p className="text-sm text-foreground-100 capitalize text-medium">
            {variant}
          </p>
          {sizes.map(size => <AchievementPinIcons key={\`\${variant}-\${size}\`} variant={variant} size={size} theme {...args} />)}
        </div>)}
    </div>
}`,...(v=(g=i.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var f,u,h;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-3">
      {variants.map(variant => <div key={variant} className="grid grid-cols-4 items-center">
          <p className="text-sm text-foreground-100 capitalize text-medium">
            {variant}
          </p>
          {sizes.map(size => <AchievementPinIcons key={\`\${variant}-\${size}\`} variant={variant} size={size} color="#ff00ff" {...args} />)}
        </div>)}
    </div>
}`,...(h=(u=n.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};const I=["Default","Theme","Color"];export{n as Color,t as Default,i as Theme,I as __namedExportsOrder,A as default};
