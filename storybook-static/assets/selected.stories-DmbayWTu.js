import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as p}from"./index-BlmOqGMO.js";import{C as d}from"./selected-fKHo6o3V.js";import"./context-CDbX8kD3.js";import"./alert-HkMSTgu9.js";import"./badge-CF9VCaa2.js";import"./breadcrumb-V3TW3CaT.js";import"./index-CYmZMVXJ.js";import"./card-CHJmWtwN.js";import"./checkbox-BJGOHg_b.js";import"./drawer-CB1qWX_Q.js";import"./dropdown-menu-Bf3pfD8n.js";import"./radio-group-WlSpQHWm.js";import"./menubar-eE93DyoQ.js";import"./popover-DNr9wWs8.js";import"./progress-Dkom_LNH.js";import"./select-COP56eT4.js";import"./separator-DLNkf967.js";import"./sheet-BHnC42pu.js";import"./skeleton-CV1PtUMd.js";import"./switch-CWQaiJ0M.js";import"./table-2Lq_Rdjg.js";import"./tabs-pHV4z6kt.js";import"./toggle-group-Bz_GEFe3.js";import"./index-Cd0zht5T.js";import"./tooltip-CEc4qSmp.js";import{C as a}from"./checkbox-BNhnVxLV.js";import"./index-yBjzXJbu.js";import"./index-KnJS0CU8.js";import"./index-CRGxjvZy.js";import"./index-Dkb_ZYRU.js";import"./index-BYUKtP1h.js";import"./index-C_Dn7qTj.js";import"./index-BQxh6BgF.js";import"./index-CVWIyhAF.js";import"./index-DuqhnXMO.js";import"./index-fNjTmf9T.js";import"./index-BbW-7v3v.js";import"./index-DdDw_O67.js";import"./wedge-Ek6y42Ws.js";import"./utils-GTnaulzv.js";import"./index-B7ENhYdy.js";import"./index-BylD-epk.js";import"./index-DZCApzUK.js";import"./index-CJGASTBR.js";import"./alert-DG-IKYwr.js";import"./times-zfpenlOA.js";import"./times-circle-BPxv1pFA.js";import"./spinner-BCFkRInS.js";import"./dots-CqQy5XBj.js";import"./index-DZ2oWOeb.js";import"./index-DaMGPy2X.js";import"./index-BV9D_7a1.js";import"./index-z8P03atw.js";import"./index-DoUPdNCX.js";import"./check-BknbCD27.js";import"./circle-Ddb5-e2i.js";import"./index-COzOtNfS.js";import"./circle-check-B84UAr7O.js";import"./utils-CzDHQuSw.js";const De={title:"Modules/Collectibles/Selected",component:d,tags:["autodocs"],parameters:{layout:"centered"},args:{size:"sm"}},n={render:function(r){const[s,i]=p.useState(!1);return e.jsx("div",{className:"flex gap-2",children:e.jsx(d,{...r,size:"xl",selected:s,onSelect:()=>i(!s)})})}},o={render:function(r){const[s,i]=p.useState(!1);return e.jsx("div",{className:"flex gap-2",children:e.jsx(d,{...r,size:"sm",selected:s,onSelect:()=>i(!s)})})}},c={render:function(r){const[s,i]=p.useState(!1);return e.jsx("div",{className:"flex gap-2",children:e.jsx(d,{...r,size:"sm",selected:s,onSelect:()=>i(!s),variant:"faded"})})}},l=["solid","line","minus-solid","minus-line","plus-solid","plus-line","unchecked-solid","unchecked-line","check"],m={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex justify-center items-end gap-4",children:["xs:",l.map(t=>e.jsx(a,{variant:t,size:"xs"},t))]}),e.jsxs("div",{className:"flex justify-center items-end gap-4",children:["sm:",l.map(t=>e.jsx(a,{variant:t,size:"sm"},t))]}),e.jsxs("div",{className:"flex justify-center items-end gap-4",children:["lg:",l.map(t=>e.jsx(a,{variant:t,size:"lg"},t))]}),e.jsxs("div",{className:"flex justify-center items-end gap-4",children:["xl:",l.map(t=>e.jsx(a,{variant:t,size:"xl"},t))]})]})};var x,u,f;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: function Render(args: CollectibleSelectedProps) {
    const [selected, setSelected] = useState(false);
    return <div className="flex gap-2">
        <CollectibleSelected {...args} size="xl" selected={selected} onSelect={() => setSelected(!selected)} />
      </div>;
  }
}`,...(f=(u=n.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var v,S,g;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: function Render(args: CollectibleSelectedProps) {
    const [selected, setSelected] = useState(false);
    return <div className="flex gap-2">
        <CollectibleSelected {...args} size="sm" selected={selected} onSelect={() => setSelected(!selected)} />
      </div>;
  }
}`,...(g=(S=o.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};var j,h,N;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(b=(C=m.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};const Fe=["Default","NormalSize","Faded","CheckboxIconVariants"];export{m as CheckboxIconVariants,n as Default,c as Faded,o as NormalSize,Fe as __namedExportsOrder,De as default};
