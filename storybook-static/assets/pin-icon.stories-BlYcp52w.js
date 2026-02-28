import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{A as i}from"./pin-icon-Dyhds7ul.js";import"./index-yBjzXJbu.js";import"./index-KnJS0CU8.js";import"./index-CRGxjvZy.js";const E={title:"Modules/Achievements/Pin Icon",component:i,tags:["autodocs"],parameters:{layout:"centered"},args:{icon:"fa-seedling"}},l=["darkest","darker","dark","default","light","lighter","lightest","ghost"],o=["xs","default","md"],n={render:s=>a.jsx("div",{className:"flex flex-col gap-3",children:o.map(e=>a.jsx("div",{className:"flex gap-3",children:l.map(r=>a.jsx(i,{variant:r,size:e,...s},`${r}-${e}`))},e))})},t={render:s=>a.jsx("div",{className:"flex flex-col gap-3",children:o.map(e=>a.jsx("div",{className:"flex gap-3",children:l.map(r=>a.jsx(i,{variant:r,size:e,theme:!0,...s},`${r}-${e}`))},e))})},c={render:s=>a.jsx("div",{className:"flex flex-col gap-3",children:o.map(e=>a.jsx("div",{className:"flex gap-3",children:l.map(r=>a.jsx(i,{variant:r,size:e,empty:!0,...s},`${r}-${e}`))},e))})},m={render:()=>a.jsx("div",{className:"flex flex-col gap-3",children:o.map(s=>a.jsx("div",{className:"flex gap-3",children:l.map(e=>a.jsx(i,{variant:e,size:s,icon:void 0},`${e}-${s}`))},s))})};var d,p,v;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-3">
      {sizes.map(size => <div key={size} className="flex gap-3">
          {variants.map(variant => <AchievementPinIcon key={\`\${variant}-\${size}\`} variant={variant} size={size} {...args} />)}
        </div>)}
    </div>
}`,...(v=(p=n.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};var x,g,f;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-3">
      {sizes.map(size => <div key={size} className="flex gap-3">
          {variants.map(variant => <AchievementPinIcon key={\`\${variant}-\${size}\`} variant={variant} size={size} theme {...args} />)}
        </div>)}
    </div>
}`,...(f=(g=t.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var u,h,z;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-3">
      {sizes.map(size => <div key={size} className="flex gap-3">
          {variants.map(variant => <AchievementPinIcon key={\`\${variant}-\${size}\`} variant={variant} size={size} empty {...args} />)}
        </div>)}
    </div>
}`,...(z=(h=c.parameters)==null?void 0:h.docs)==null?void 0:z.source}}};var N,$,j;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3">
      {sizes.map(size => <div key={size} className="flex gap-3">
          {variants.map(variant => <AchievementPinIcon key={\`\${variant}-\${size}\`} variant={variant} size={size} icon={undefined} />)}
        </div>)}
    </div>
}`,...(j=($=m.parameters)==null?void 0:$.docs)==null?void 0:j.source}}};const S=["Default","Theme","Empty","Missing"];export{n as Default,c as Empty,m as Missing,t as Theme,S as __namedExportsOrder,E as default};
