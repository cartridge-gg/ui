import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{c as A}from"./index-CRGxjvZy.js";import{A as g}from"./pin-icon-Dyhds7ul.js";import"./index-yBjzXJbu.js";import"./index-KnJS0CU8.js";const P=A("flex items-center gap-1.5",{variants:{variant:{darkest:"",darker:"",dark:"",default:"",light:"",lighter:"",lightest:"",ghost:""},size:{xs:"",default:"",md:""}},defaultVariants:{variant:"default",size:"default"}}),t=({pins:r,theme:e,variant:a,size:o,className:p,color:k})=>s.jsxs("div",{className:P({variant:a,size:o}),children:[r.map(d=>s.jsx(g,{icon:d.icon,variant:a,size:o,theme:e,className:p,color:k},d.id)),Array.from({length:3-r.length}).map((d,$)=>s.jsx(g,{empty:!0,variant:a,size:o,theme:!1,className:p},$))]});t.__docgenInfo={description:"",methods:[],displayName:"AchievementPinIcons",props:{pins:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ id: string; icon: string }",signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"icon",value:{name:"string",required:!0}}]}}],raw:"{ id: string; icon: string }[]"},description:""},theme:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"string"},description:""}},composes:["VariantProps"]};const S={title:"Modules/Achievements/Pin Icons",component:t,tags:["autodocs"],parameters:{layout:"padded"},args:{pins:[{id:"1",icon:"fa-seedling"},{id:"2",icon:"fa-swords"}]}},m=["darkest","darker","dark","default","light","lighter","lightest","ghost"],l=["xs","default","md"],i={render:r=>s.jsx("div",{className:"flex flex-col gap-3",children:m.map(e=>s.jsxs("div",{className:"grid grid-cols-4 items-center",children:[s.jsx("p",{className:"text-sm text-foreground-100 capitalize text-medium",children:e}),l.map(a=>s.jsx(t,{variant:e,size:a,...r},`${e}-${a}`))]},e))})},n={render:r=>s.jsx("div",{className:"flex flex-col gap-3",children:m.map(e=>s.jsxs("div",{className:"grid grid-cols-4 items-center",children:[s.jsx("p",{className:"text-sm text-foreground-100 capitalize text-medium",children:e}),l.map(a=>s.jsx(t,{variant:e,size:a,theme:!0,...r},`${e}-${a}`))]},e))})},c={render:r=>s.jsx("div",{className:"flex flex-col gap-3",children:m.map(e=>s.jsxs("div",{className:"grid grid-cols-4 items-center",children:[s.jsx("p",{className:"text-sm text-foreground-100 capitalize text-medium",children:e}),l.map(a=>s.jsx(t,{variant:e,size:a,color:"#ff00ff",...r},`${e}-${a}`))]},e))})};var x,u,f;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-3">
      {variants.map(variant => <div key={variant} className="grid grid-cols-4 items-center">
          <p className="text-sm text-foreground-100 capitalize text-medium">
            {variant}
          </p>
          {sizes.map(size => <AchievementPinIcons key={\`\${variant}-\${size}\`} variant={variant} size={size} {...args} />)}
        </div>)}
    </div>
}`,...(f=(u=i.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var v,h,N;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-3">
      {variants.map(variant => <div key={variant} className="grid grid-cols-4 items-center">
          <p className="text-sm text-foreground-100 capitalize text-medium">
            {variant}
          </p>
          {sizes.map(size => <AchievementPinIcons key={\`\${variant}-\${size}\`} variant={variant} size={size} theme {...args} />)}
        </div>)}
    </div>
}`,...(N=(h=n.parameters)==null?void 0:h.docs)==null?void 0:N.source}}};var z,j,y;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-3">
      {variants.map(variant => <div key={variant} className="grid grid-cols-4 items-center">
          <p className="text-sm text-foreground-100 capitalize text-medium">
            {variant}
          </p>
          {sizes.map(size => <AchievementPinIcons key={\`\${variant}-\${size}\`} variant={variant} size={size} color="#ff00ff" {...args} />)}
        </div>)}
    </div>
}`,...(y=(j=c.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};const V=["Default","Theme","Color"];export{c as Color,i as Default,n as Theme,V as __namedExportsOrder,S as default};
