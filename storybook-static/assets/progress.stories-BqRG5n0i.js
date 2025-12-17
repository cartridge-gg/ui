import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import"./context-C0ZuLyu1.js";import"./alert-HkMSTgu9.js";import"./badge-CF9VCaa2.js";import"./breadcrumb-BssIq4hO.js";import"./index-D5rlNKlk.js";import"./card-CHJmWtwN.js";import"./checkbox-B_0M2hZW.js";import"./drawer-xE2kwbAV.js";import"./dropdown-menu-CRT-B5yA.js";import"./radio-group-KQIGPIF9.js";import"./menubar-CHnEKWjv.js";import"./popover-BvzVgOqp.js";import"./progress-Dkom_LNH.js";import"./select-CgzdedN0.js";import"./separator-DLNkf967.js";import"./sheet-Bq6Tz9es.js";import"./skeleton-CV1PtUMd.js";import"./switch-ssHJkgb5.js";import"./table-2Lq_Rdjg.js";import"./tabs-Baec46jY.js";import"./index-BlmOqGMO.js";import"./specialized-toasts-B5CTLsw7.js";import"./toggle-group-C7AVasTd.js";import"./index-XwABQy1c.js";import"./tooltip-gQAcybeF.js";import{c as z}from"./index-KnJS0CU8.js";import{c as A}from"./index-CRGxjvZy.js";import{T as E}from"./trophy-D6X4ZW9u.js";import{P as _}from"./progress-bar-zN57Oe5H.js";import{S as I}from"./sparkles-B7iQfMYn.js";import"./index-yBjzXJbu.js";import"./index-Dkb_ZYRU.js";import"./index-yBYjIlgW.js";import"./index-C_Dn7qTj.js";import"./index-DKk_hhWv.js";import"./index-CVWIyhAF.js";import"./index-DuqhnXMO.js";import"./index-fNjTmf9T.js";import"./index-BigR8kad.js";import"./index-CQ2Y0WLn.js";import"./index-xprPBo3d.js";import"./wedge-W0rbne9I.js";import"./utils-CWphn_pW.js";import"./index-D31t_0wX.js";import"./index-Ms1lWa6I.js";import"./index-DZCApzUK.js";import"./index-C-QU4qAu.js";import"./index-BZkNnodj.js";import"./alert-BrNdBT3c.js";import"./times-ynKcNaj_.js";import"./times-circle-gyi9izsJ.js";import"./spinner-D3wGzOGj.js";import"./dots-COnCu59r.js";import"./external-DG4iuQXv.js";import"./index-DZ2oWOeb.js";import"./index-BWkk9jnE.js";import"./checkbox-DBv66za0.js";import"./index-Ck-mJuwY.js";import"./index-wyL_HbYX.js";import"./index-DfuoQG06.js";import"./check-Dqm4PBhQ.js";import"./circle-XVpHZr0H.js";import"./index-Bbf5mMoM.js";import"./circle-check-qG_ejMER.js";import"./award-gyvpM0Ag.js";import"./toast-9BxvrNCO.js";import"./utils-CZiDjOgf.js";const L=A("p-3 flex items-center gap-x-3",{variants:{variant:{darkest:"bg-background-100",darker:"bg-background-100",dark:"bg-background-100",default:"bg-background-200",light:"bg-background-200",lighter:"bg-background-200",lightest:"bg-background-200",ghost:"bg-transparent"}},defaultVariants:{variant:"default"}});function n({count:e,total:t,points:P,completed:T,variant:q,className:p,color:V}){return r.jsxs("div",{className:z(L({variant:q}),p),children:[r.jsxs("div",{className:"flex gap-x-1",children:[r.jsx(E,{variant:"solid",size:"xs",className:"text-foreground-300"}),r.jsxs("p",{className:"text-foreground-300 text-xs font-medium",children:[e.toLocaleString()," of ",t.toLocaleString()]})]}),r.jsx(_,{count:e,total:t,completed:!!T,className:p,color:V}),r.jsxs("div",{className:"flex gap-x-1",children:[r.jsx(I,{variant:"solid",size:"xs",className:"text-foreground-300"}),r.jsx("p",{className:"text-foreground-300 text-xs font-medium",children:P.toLocaleString()})]})]})}n.__docgenInfo={description:"",methods:[],displayName:"AchievementProgress",props:{count:{required:!0,tsType:{name:"number"},description:""},total:{required:!0,tsType:{name:"number"},description:""},points:{required:!0,tsType:{name:"number"},description:""},completed:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"string"},description:""}},composes:["VariantProps"]};const Xr={title:"Modules/Achievements/Progress",component:n,tags:["autodocs"],parameters:{layout:"padded"},args:{count:4,total:9,points:690}},C=["darkest","darker","dark","default","light","lighter","lightest","ghost"],o={render:e=>r.jsx("div",{className:"flex flex-col gap-4",children:C.map(t=>r.jsxs("div",{className:"grid grid-cols-4 items-center",children:[r.jsx("p",{className:"text-sm text-foreground-100 capitalize text-medium",children:t}),r.jsx("div",{className:"col-span-3",children:r.jsx(n,{...e,variant:t},t)})]},t))})},s={args:{count:0,points:0}},a={args:{count:9,total:9,points:690,completed:!0}},i={args:{count:400,total:9e3,points:1234567890}},m={args:{variant:"ghost"}};var c,d,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-4">
      {variants.map(variant => <div key={variant} className="grid grid-cols-4 items-center">
          <p className="text-sm text-foreground-100 capitalize text-medium">
            {variant}
          </p>
          <div className="col-span-3">
            <AchievementProgress key={variant} {...args} variant={variant} />
          </div>
        </div>)}
    </div>
}`,...(l=(d=o.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var g,u,x;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    count: 0,
    points: 0
  }
}`,...(x=(u=s.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var f,v,h;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    count: 9,
    total: 9,
    points: 690,
    completed: true
  }
}`,...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var b,k,N;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    count: 400,
    total: 9000,
    points: 1234567890
  }
}`,...(N=(k=i.parameters)==null?void 0:k.docs)==null?void 0:N.source}}};var j,y,S;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    variant: "ghost"
  }
}`,...(S=(y=m.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};const Yr=["Default","Empty","Complete","Verbose","Ghost"];export{a as Complete,o as Default,s as Empty,m as Ghost,i as Verbose,Yr as __namedExportsOrder,Xr as default};
