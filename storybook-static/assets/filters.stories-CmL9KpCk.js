import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R as P,r as o}from"./index-BlmOqGMO.js";import"./context-Dp1RSL2M.js";import"./alert-HkMSTgu9.js";import"./badge-CF9VCaa2.js";import"./breadcrumb-V3TW3CaT.js";import"./index-CXU5yUf2.js";import"./card-CHJmWtwN.js";import"./checkbox-By4i5gAw.js";import"./drawer-xE2kwbAV.js";import"./dropdown-menu-C7nQ35UG.js";import"./radio-group-BQACWc2R.js";import"./menubar-Bg0fvWch.js";import"./popover-BvzVgOqp.js";import"./progress-Dkom_LNH.js";import"./select-DFnuJnNs.js";import"./separator-DLNkf967.js";import"./sheet-B_rs-mB8.js";import"./skeleton-CV1PtUMd.js";import"./switch-ssHJkgb5.js";import"./table-2Lq_Rdjg.js";import"./tabs-Baec46jY.js";import"./specialized-toasts-DEH3pG23.js";import"./toggle-group-C7AVasTd.js";import"./index-XwABQy1c.js";import"./tooltip-gQAcybeF.js";import{c as R}from"./index-KnJS0CU8.js";import{c as j}from"./index-CRGxjvZy.js";import{M as f}from"./header-CLqAPLiP.js";import{M as w}from"./header-reset-DvhaPoEh.js";import{M as C}from"./property-header-_xBj-k8o.js";import{M as E}from"./property-filter-drdu9QsF.js";import{M as $}from"./property-empty-CwjbN3SJ.js";import{M as k}from"./radial-item-BTa_DcYT.js";import{M as H}from"./search-engine-CwL-_yPW.js";import"./index-yBjzXJbu.js";import"./index-Dkb_ZYRU.js";import"./index-yBYjIlgW.js";import"./index-C_Dn7qTj.js";import"./index-DKk_hhWv.js";import"./index-CVWIyhAF.js";import"./index-DuqhnXMO.js";import"./index-fNjTmf9T.js";import"./index-BigR8kad.js";import"./index-CQ2Y0WLn.js";import"./index-xprPBo3d.js";import"./wedge-Ek6y42Ws.js";import"./utils-GTnaulzv.js";import"./index-D31t_0wX.js";import"./index-Ms1lWa6I.js";import"./index-DZCApzUK.js";import"./index-C-QU4qAu.js";import"./index-BZkNnodj.js";import"./alert-DG-IKYwr.js";import"./times-zfpenlOA.js";import"./times-circle-BPxv1pFA.js";import"./spinner-gN6xF-9l.js";import"./dots-CqQy5XBj.js";import"./external-CfODMYJ8.js";import"./index-DZ2oWOeb.js";import"./index-BWkk9jnE.js";import"./checkbox-BNhnVxLV.js";import"./index-Ck-mJuwY.js";import"./index-wyL_HbYX.js";import"./index-DfuoQG06.js";import"./check-BknbCD27.js";import"./circle-Ddb5-e2i.js";import"./index-Bbf5mMoM.js";import"./circle-check-B84UAr7O.js";import"./award-DeRbG8h3.js";import"./toast-BzlTG7tn.js";import"./sparkles-CY9lzZpH.js";import"./utils-CZiDjOgf.js";import"./header-label-Di4pshxh.js";import"./checkbox-unchecked-DWGljWZJ.js";import"./radial-toggle-pGsIMCBY.js";import"./search-FNLtSZib.js";const I=j("flex flex-col gap-2 p-4 bg-background-125 border border-background-200 rounded-xl w-full shadow-[0px_0px_8px_2px_#0F1410]",{variants:{variant:{default:""}},defaultVariants:{variant:"default"}}),n=P.forwardRef(({className:m,variant:i,...l},a)=>e.jsx("div",{ref:a,className:R(I({variant:i}),m),...l}));n.__docgenInfo={description:"",methods:[],displayName:"MarketplaceFilters",composes:["HTMLAttributes","VariantProps"]};const L=["Name","XP","Level","Health","Gold","Strength","Dexterity","Intelligence","Vitality","Wisdom"],v=[1,2,3,4,5],at={title:"Modules/Marketplace/Marketplace Filters",component:n,tags:["autodocs"],parameters:{layout:"padded"}},s={render:function(){const[i,l]=o.useState(0),[a,d]=o.useState({}),[p,u]=o.useState({}),S=o.useMemo(()=>Object.values(p).filter(t=>!!t).length>0,[p]),b=o.useCallback(()=>{u({}),d({})},[]);return e.jsxs(n,{children:[e.jsx(f,{label:"Status"}),e.jsxs("div",{className:"flex flex-col gap-2 w-fit",children:[e.jsx(k,{label:"Buy Now",active:i===0,onClick:()=>l(0)}),e.jsx(k,{label:"Show All",active:i===1,onClick:()=>l(1)})]}),e.jsx(f,{label:"Properties",children:S&&e.jsx(w,{onClick:b})}),L.map((t,y)=>e.jsxs(C,{label:t,count:17,children:[e.jsx(H,{variant:"darkest",search:a[t]||"",setSearch:r=>d(c=>({...c,[t]:r}))}),e.jsxs("div",{className:"flex flex-col gap-px",children:[v.filter(r=>`Property ${t} ${r}`.toLowerCase().includes((a[t]||"").toLowerCase())).map(r=>e.jsx(E,{label:`Property ${t} ${r}`,count:100,value:p[t+r]||!1,setValue:c=>u(g=>({...g,[t+r]:c}))},r)),v.filter(r=>`Property ${t} ${r}`.toLowerCase().includes((a[t]||"").toLowerCase())).length===0&&e.jsx($,{})]})]},y))]})}};var x,M,h;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: function Render() {
    const [active, setActive] = useState<number>(0);
    const [search, setSearch] = useState<{
      [key: string]: string;
    }>({});
    const [selected, setSelected] = useState<{
      [key: string]: boolean;
    }>({});
    const reset = useMemo(() => {
      return Object.values(selected).filter(value => !!value).length > 0;
    }, [selected]);
    const clear = useCallback(() => {
      setSelected({});
      setSearch({});
    }, []);
    return <MarketplaceFilters>
        <MarketplaceHeader label="Status" />
        <div className="flex flex-col gap-2 w-fit">
          <MarketplaceRadialItem label="Buy Now" active={active === 0} onClick={() => setActive(0)} />
          <MarketplaceRadialItem label="Show All" active={active === 1} onClick={() => setActive(1)} />
        </div>
        <MarketplaceHeader label="Properties">
          {reset && <MarketplaceHeaderReset onClick={clear} />}
        </MarketplaceHeader>
        {ATTRIBUTES.map((label, index) => <MarketplacePropertyHeader key={index} label={label} count={17}>
            <MarketplaceSearchEngine variant="darkest" search={search[label] || ""} setSearch={(value: string) => setSearch(prev => ({
          ...prev,
          [label]: value
        }))} />
            <div className="flex flex-col gap-px">
              {PROPERTIES.filter(i => \`Property \${label} \${i}\`.toLowerCase().includes((search[label] || "").toLowerCase())).map(i => <MarketplacePropertyFilter key={i} label={\`Property \${label} \${i}\`} count={100} value={selected[label + i] || false} setValue={(value: boolean) => setSelected(prev => ({
            ...prev,
            [label + i]: value
          }))} />)}
              {PROPERTIES.filter(i => \`Property \${label} \${i}\`.toLowerCase().includes((search[label] || "").toLowerCase())).length === 0 && <MarketplacePropertyEmpty />}
            </div>
          </MarketplacePropertyHeader>)}
      </MarketplaceFilters>;
  }
}`,...(h=(M=s.parameters)==null?void 0:M.docs)==null?void 0:h.source}}};const ot=["Default"];export{s as Default,ot as __namedExportsOrder,at as default};
