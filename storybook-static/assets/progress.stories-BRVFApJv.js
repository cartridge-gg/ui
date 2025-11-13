import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{A as y}from"./progress-DYM7xIEp.js";import"./index-yBjzXJbu.js";import"./context-BEXklgMK.js";import"./index-BlmOqGMO.js";import"./index-KnJS0CU8.js";import"./index-Dkb_ZYRU.js";import"./index-yBYjIlgW.js";import"./index-C_Dn7qTj.js";import"./index-DKk_hhWv.js";import"./index-CVWIyhAF.js";import"./index-DuqhnXMO.js";import"./index-fNjTmf9T.js";import"./index-BigR8kad.js";import"./index-CQ2Y0WLn.js";import"./index-xprPBo3d.js";import"./wedge-W0rbne9I.js";import"./utils-CWphn_pW.js";import"./index-CRGxjvZy.js";import"./index-D31t_0wX.js";import"./index-Ms1lWa6I.js";import"./index-DZCApzUK.js";import"./index-C-QU4qAu.js";import"./index-BZkNnodj.js";import"./index-D5rlNKlk.js";import"./spinner-D3wGzOGj.js";import"./external-DG4iuQXv.js";import"./alert-HkMSTgu9.js";import"./badge-CF9VCaa2.js";import"./breadcrumb-BssIq4hO.js";import"./dots-COnCu59r.js";import"./card-BS90Wzb6.js";import"./checkbox-B_0M2hZW.js";import"./index-DZ2oWOeb.js";import"./index-BWkk9jnE.js";import"./checkbox-DBv66za0.js";import"./drawer-CvIs6rk0.js";import"./dropdown-menu-CRT-B5yA.js";import"./index-Ck-mJuwY.js";import"./index-wyL_HbYX.js";import"./index-DfuoQG06.js";import"./check-Dqm4PBhQ.js";import"./circle-XVpHZr0H.js";import"./alert-BrNdBT3c.js";import"./radio-group-KQIGPIF9.js";import"./menubar-CHnEKWjv.js";import"./popover-BvzVgOqp.js";import"./progress-Dkom_LNH.js";import"./select-B65IA31l.js";import"./index-Bbf5mMoM.js";import"./circle-check-qG_ejMER.js";import"./separator-DLNkf967.js";import"./sheet-Bq6Tz9es.js";import"./times-ynKcNaj_.js";import"./skeleton-CV1PtUMd.js";import"./switch-ssHJkgb5.js";import"./table-2Lq_Rdjg.js";import"./tabs-Baec46jY.js";import"./specialized-toasts-B5CTLsw7.js";import"./award-gyvpM0Ag.js";import"./toast-9BxvrNCO.js";import"./sparkles-B7iQfMYn.js";import"./toggle-group-C7AVasTd.js";import"./utils-CZiDjOgf.js";import"./index-XwABQy1c.js";import"./tooltip-gQAcybeF.js";import"./times-circle-gyi9izsJ.js";import"./trophy-D6X4ZW9u.js";import"./progress-bar-CpcZDzFR.js";const Fr={title:"Modules/Achievements/Progress",component:y,tags:["autodocs"],parameters:{layout:"padded"},args:{count:4,total:9,points:690}},A=["darkest","darker","dark","default","light","lighter","lightest","ghost"],o={render:S=>r.jsx("div",{className:"flex flex-col gap-4",children:A.map(t=>r.jsxs("div",{className:"grid grid-cols-4 items-center",children:[r.jsx("p",{className:"text-sm text-foreground-100 capitalize text-medium",children:t}),r.jsx("div",{className:"col-span-3",children:r.jsx(y,{...S,variant:t},t)})]},t))})},e={args:{count:0,points:0}},s={args:{count:9,total:9,points:690,completed:!0}},i={args:{count:400,total:9e3,points:1234567890}},m={args:{variant:"ghost"}};var a,p,n;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(n=(p=o.parameters)==null?void 0:p.docs)==null?void 0:n.source}}};var c,d,l;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    count: 0,
    points: 0
  }
}`,...(l=(d=e.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var u,g,v;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    count: 9,
    total: 9,
    points: 690,
    completed: true
  }
}`,...(v=(g=s.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var x,h,f;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    count: 400,
    total: 9000,
    points: 1234567890
  }
}`,...(f=(h=i.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var N,j,k;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    variant: "ghost"
  }
}`,...(k=(j=m.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};const Hr=["Default","Empty","Complete","Verbose","Ghost"];export{s as Complete,o as Default,e as Empty,m as Ghost,i as Verbose,Hr as __namedExportsOrder,Fr as default};
