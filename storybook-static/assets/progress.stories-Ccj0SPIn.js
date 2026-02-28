import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import"./context-CDbX8kD3.js";import"./alert-HkMSTgu9.js";import"./badge-CF9VCaa2.js";import"./breadcrumb-V3TW3CaT.js";import"./index-CYmZMVXJ.js";import"./card-CHJmWtwN.js";import"./checkbox-BJGOHg_b.js";import"./drawer-CB1qWX_Q.js";import"./dropdown-menu-Bf3pfD8n.js";import"./radio-group-WlSpQHWm.js";import"./menubar-eE93DyoQ.js";import"./popover-DNr9wWs8.js";import"./progress-Dkom_LNH.js";import"./select-COP56eT4.js";import"./separator-DLNkf967.js";import"./sheet-BHnC42pu.js";import"./skeleton-CV1PtUMd.js";import"./switch-CWQaiJ0M.js";import"./table-2Lq_Rdjg.js";import"./tabs-pHV4z6kt.js";import"./toggle-group-Bz_GEFe3.js";import"./index-Cd0zht5T.js";import"./tooltip-CEc4qSmp.js";import{c as z}from"./index-KnJS0CU8.js";import{c as A}from"./index-CRGxjvZy.js";import{T as E}from"./trophy-9soKpOKE.js";import{P as _}from"./progress-bar-Bh2F6sR0.js";import{S as I}from"./sparkles-CY9lzZpH.js";import"./index-yBjzXJbu.js";import"./index-BlmOqGMO.js";import"./index-Dkb_ZYRU.js";import"./index-BYUKtP1h.js";import"./index-C_Dn7qTj.js";import"./index-BQxh6BgF.js";import"./index-CVWIyhAF.js";import"./index-DuqhnXMO.js";import"./index-fNjTmf9T.js";import"./index-BbW-7v3v.js";import"./index-DdDw_O67.js";import"./wedge-Ek6y42Ws.js";import"./utils-GTnaulzv.js";import"./index-B7ENhYdy.js";import"./index-BylD-epk.js";import"./index-DZCApzUK.js";import"./index-CJGASTBR.js";import"./alert-DG-IKYwr.js";import"./times-zfpenlOA.js";import"./times-circle-BPxv1pFA.js";import"./spinner-BCFkRInS.js";import"./dots-CqQy5XBj.js";import"./index-DZ2oWOeb.js";import"./index-DaMGPy2X.js";import"./checkbox-BNhnVxLV.js";import"./index-BV9D_7a1.js";import"./index-z8P03atw.js";import"./index-DoUPdNCX.js";import"./check-BknbCD27.js";import"./circle-Ddb5-e2i.js";import"./index-COzOtNfS.js";import"./circle-check-B84UAr7O.js";import"./utils-CzDHQuSw.js";const L=A("p-3 flex items-center gap-x-3",{variants:{variant:{darkest:"bg-background-100",darker:"bg-background-100",dark:"bg-background-100",default:"bg-background-200",light:"bg-background-200",lighter:"bg-background-200",lightest:"bg-background-200",ghost:"bg-transparent"}},defaultVariants:{variant:"default"}});function m({count:t,total:e,points:P,completed:T,variant:q,className:p,color:V}){return r.jsxs("div",{className:z(L({variant:q}),p),children:[r.jsxs("div",{className:"flex gap-x-1",children:[r.jsx(E,{variant:"solid",size:"xs",className:"text-foreground-300"}),r.jsxs("p",{className:"text-foreground-300 text-xs font-medium",children:[t.toLocaleString()," of ",e.toLocaleString()]})]}),r.jsx(_,{count:t,total:e,completed:!!T,className:p,color:V}),r.jsxs("div",{className:"flex gap-x-1",children:[r.jsx(I,{variant:"solid",size:"xs",className:"text-foreground-300"}),r.jsx("p",{className:"text-foreground-300 text-xs font-medium",children:P.toLocaleString()})]})]})}m.__docgenInfo={description:"",methods:[],displayName:"AchievementProgress",props:{count:{required:!0,tsType:{name:"number"},description:""},total:{required:!0,tsType:{name:"number"},description:""},points:{required:!0,tsType:{name:"number"},description:""},completed:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"string"},description:""}},composes:["VariantProps"]};const Hr={title:"Modules/Achievements/Progress",component:m,tags:["autodocs"],parameters:{layout:"padded"},args:{count:4,total:9,points:690}},C=["darkest","darker","dark","default","light","lighter","lightest","ghost"],o={render:t=>r.jsx("div",{className:"flex flex-col gap-4",children:C.map(e=>r.jsxs("div",{className:"grid grid-cols-4 items-center",children:[r.jsx("p",{className:"text-sm text-foreground-100 capitalize text-medium",children:e}),r.jsx("div",{className:"col-span-3",children:r.jsx(m,{...t,variant:e},e)})]},e))})},s={args:{count:0,points:0}},a={args:{count:9,total:9,points:690,completed:!0}},i={args:{count:400,total:9e3,points:1234567890}},n={args:{variant:"ghost"}};var c,d,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(N=(k=i.parameters)==null?void 0:k.docs)==null?void 0:N.source}}};var j,y,S;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    variant: "ghost"
  }
}`,...(S=(y=n.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};const Jr=["Default","Empty","Complete","Verbose","Ghost"];export{a as Complete,o as Default,s as Empty,n as Ghost,i as Verbose,Jr as __namedExportsOrder,Hr as default};
