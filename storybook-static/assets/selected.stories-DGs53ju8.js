import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as p}from"./index-BlmOqGMO.js";import{C as d}from"./selected-Jp0UjU_N.js";import"./context-DHheWSmn.js";import"./alert-HkMSTgu9.js";import"./badge-CF9VCaa2.js";import"./breadcrumb-V3TW3CaT.js";import"./index-CXU5yUf2.js";import"./card-CHJmWtwN.js";import"./checkbox-qMrJ6QPd.js";import"./drawer-xE2kwbAV.js";import"./dropdown-menu-C7nQ35UG.js";import"./radio-group-BQACWc2R.js";import"./menubar-Bg0fvWch.js";import"./popover-BvzVgOqp.js";import"./progress-Dkom_LNH.js";import"./select-DFnuJnNs.js";import"./separator-DLNkf967.js";import"./sheet-B_rs-mB8.js";import"./skeleton-CV1PtUMd.js";import"./switch-ssHJkgb5.js";import"./table-2Lq_Rdjg.js";import"./tabs-Baec46jY.js";import"./specialized-toasts-DEH3pG23.js";import"./toggle-group-C7AVasTd.js";import"./index-XwABQy1c.js";import"./tooltip-gQAcybeF.js";import{C as a}from"./checkbox-BNhnVxLV.js";import"./index-yBjzXJbu.js";import"./index-KnJS0CU8.js";import"./index-CRGxjvZy.js";import"./index-Dkb_ZYRU.js";import"./index-yBYjIlgW.js";import"./index-C_Dn7qTj.js";import"./index-DKk_hhWv.js";import"./index-CVWIyhAF.js";import"./index-DuqhnXMO.js";import"./index-fNjTmf9T.js";import"./index-BigR8kad.js";import"./index-CQ2Y0WLn.js";import"./index-xprPBo3d.js";import"./wedge-Ek6y42Ws.js";import"./utils-GTnaulzv.js";import"./index-D31t_0wX.js";import"./index-Ms1lWa6I.js";import"./index-DZCApzUK.js";import"./index-C-QU4qAu.js";import"./index-BZkNnodj.js";import"./alert-DG-IKYwr.js";import"./times-zfpenlOA.js";import"./times-circle-BPxv1pFA.js";import"./spinner-gN6xF-9l.js";import"./dots-CqQy5XBj.js";import"./external-CfODMYJ8.js";import"./index-DZ2oWOeb.js";import"./index-BWkk9jnE.js";import"./index-Ck-mJuwY.js";import"./index-wyL_HbYX.js";import"./index-DfuoQG06.js";import"./check-BknbCD27.js";import"./circle-Ddb5-e2i.js";import"./index-Bbf5mMoM.js";import"./circle-check-B84UAr7O.js";import"./award-DeRbG8h3.js";import"./toast-BzlTG7tn.js";import"./sparkles-CY9lzZpH.js";import"./utils-CZiDjOgf.js";const we={title:"Modules/Collectibles/Selected",component:d,tags:["autodocs"],parameters:{layout:"centered"},args:{size:"sm"}},o={render:function(r){const[s,i]=p.useState(!1);return e.jsx("div",{className:"flex gap-2",children:e.jsx(d,{...r,size:"xl",selected:s,onSelect:()=>i(!s)})})}},n={render:function(r){const[s,i]=p.useState(!1);return e.jsx("div",{className:"flex gap-2",children:e.jsx(d,{...r,size:"sm",selected:s,onSelect:()=>i(!s)})})}},c={render:function(r){const[s,i]=p.useState(!1);return e.jsx("div",{className:"flex gap-2",children:e.jsx(d,{...r,size:"sm",selected:s,onSelect:()=>i(!s),variant:"faded"})})}},l=["solid","line","minus-solid","minus-line","plus-solid","plus-line","unchecked-solid","unchecked-line","check"],m={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex justify-center items-end gap-4",children:["xs:",l.map(t=>e.jsx(a,{variant:t,size:"xs"},t))]}),e.jsxs("div",{className:"flex justify-center items-end gap-4",children:["sm:",l.map(t=>e.jsx(a,{variant:t,size:"sm"},t))]}),e.jsxs("div",{className:"flex justify-center items-end gap-4",children:["lg:",l.map(t=>e.jsx(a,{variant:t,size:"lg"},t))]}),e.jsxs("div",{className:"flex justify-center items-end gap-4",children:["xl:",l.map(t=>e.jsx(a,{variant:t,size:"xl"},t))]})]})};var x,u,f;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: function Render(args: CollectibleSelectedProps) {
    const [selected, setSelected] = useState(false);
    return <div className="flex gap-2">
        <CollectibleSelected {...args} size="xl" selected={selected} onSelect={() => setSelected(!selected)} />
      </div>;
  }
}`,...(f=(u=o.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var v,S,g;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: function Render(args: CollectibleSelectedProps) {
    const [selected, setSelected] = useState(false);
    return <div className="flex gap-2">
        <CollectibleSelected {...args} size="sm" selected={selected} onSelect={() => setSelected(!selected)} />
      </div>;
  }
}`,...(g=(S=n.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};var j,h,N;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: function Render(args: CollectibleSelectedProps) {
    const [selected, setSelected] = useState(false);
    return <div className="flex gap-2">
        <CollectibleSelected {...args} size="sm" selected={selected} onSelect={() => setSelected(!selected)} variant="faded" />
      </div>;
  }
}`,...(N=(h=c.parameters)==null?void 0:h.docs)==null?void 0:N.source}}};var z,C,b;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <div className="flex justify-center items-end gap-4">
        xs:
        {variants.map(variant => <CheckboxIcon key={variant} variant={variant} size="xs" />)}
      </div>
      <div className="flex justify-center items-end gap-4">
        sm:
        {variants.map(variant => <CheckboxIcon key={variant} variant={variant} size="sm" />)}
      </div>
      <div className="flex justify-center items-end gap-4">
        lg:
        {variants.map(variant => <CheckboxIcon key={variant} variant={variant} size="lg" />)}
      </div>
      <div className="flex justify-center items-end gap-4">
        xl:
        {variants.map(variant => <CheckboxIcon key={variant} variant={variant} size="xl" />)}
      </div>
    </div>
}`,...(b=(C=m.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};const Ae=["Default","NormalSize","Faded","CheckboxIconVariants"];export{m as CheckboxIconVariants,o as Default,c as Faded,n as NormalSize,Ae as __namedExportsOrder,we as default};
