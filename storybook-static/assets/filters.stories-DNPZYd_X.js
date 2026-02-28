import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R as P,r as o}from"./index-BlmOqGMO.js";import"./context-CDbX8kD3.js";import"./alert-HkMSTgu9.js";import"./badge-CF9VCaa2.js";import"./breadcrumb-V3TW3CaT.js";import"./index-CYmZMVXJ.js";import"./card-CHJmWtwN.js";import"./checkbox-BJGOHg_b.js";import"./drawer-CB1qWX_Q.js";import"./dropdown-menu-Bf3pfD8n.js";import"./radio-group-WlSpQHWm.js";import"./menubar-eE93DyoQ.js";import"./popover-DNr9wWs8.js";import"./progress-Dkom_LNH.js";import"./select-COP56eT4.js";import"./separator-DLNkf967.js";import"./sheet-BHnC42pu.js";import"./skeleton-CV1PtUMd.js";import"./switch-CWQaiJ0M.js";import"./table-2Lq_Rdjg.js";import"./tabs-pHV4z6kt.js";import"./toggle-group-Bz_GEFe3.js";import"./index-Cd0zht5T.js";import"./tooltip-CEc4qSmp.js";import{c as R}from"./index-KnJS0CU8.js";import{c as j}from"./index-CRGxjvZy.js";import{M as f}from"./header-BPXv-noD.js";import{M as w}from"./header-reset-BEeaIAtY.js";import{M as C}from"./property-header-DS_rfHwG.js";import{M as E}from"./property-filter-CoQi_XnL.js";import{M as $}from"./property-empty-CwjbN3SJ.js";import{M as k}from"./radial-item-DCzmqNIP.js";import{M as H}from"./search-engine-CYxqNYwd.js";import"./index-yBjzXJbu.js";import"./index-Dkb_ZYRU.js";import"./index-BYUKtP1h.js";import"./index-C_Dn7qTj.js";import"./index-BQxh6BgF.js";import"./index-CVWIyhAF.js";import"./index-DuqhnXMO.js";import"./index-fNjTmf9T.js";import"./index-BbW-7v3v.js";import"./index-DdDw_O67.js";import"./wedge-Ek6y42Ws.js";import"./utils-GTnaulzv.js";import"./index-B7ENhYdy.js";import"./index-BylD-epk.js";import"./index-DZCApzUK.js";import"./index-CJGASTBR.js";import"./alert-DG-IKYwr.js";import"./times-zfpenlOA.js";import"./times-circle-BPxv1pFA.js";import"./spinner-BCFkRInS.js";import"./dots-CqQy5XBj.js";import"./index-DZ2oWOeb.js";import"./index-DaMGPy2X.js";import"./checkbox-BNhnVxLV.js";import"./index-BV9D_7a1.js";import"./index-z8P03atw.js";import"./index-DoUPdNCX.js";import"./check-BknbCD27.js";import"./circle-Ddb5-e2i.js";import"./index-COzOtNfS.js";import"./circle-check-B84UAr7O.js";import"./utils-CzDHQuSw.js";import"./header-label-Di4pshxh.js";import"./checkbox-unchecked-DWGljWZJ.js";import"./radial-toggle-pGsIMCBY.js";import"./search-FNLtSZib.js";const I=j("flex flex-col gap-2 p-4 bg-background-125 border border-background-200 rounded-xl w-full shadow-[0px_0px_8px_2px_#0F1410]",{variants:{variant:{default:""}},defaultVariants:{variant:"default"}}),n=P.forwardRef(({className:m,variant:l,...i},a)=>e.jsx("div",{ref:a,className:R(I({variant:l}),m),...i}));n.__docgenInfo={description:"",methods:[],displayName:"MarketplaceFilters",composes:["HTMLAttributes","VariantProps"]};const L=["Name","XP","Level","Health","Gold","Strength","Dexterity","Intelligence","Vitality","Wisdom"],v=[1,2,3,4,5],Ke={title:"Modules/Marketplace/Marketplace Filters",component:n,tags:["autodocs"],parameters:{layout:"padded"}},s={render:function(){const[l,i]=o.useState(0),[a,d]=o.useState({}),[p,u]=o.useState({}),S=o.useMemo(()=>Object.values(p).filter(t=>!!t).length>0,[p]),b=o.useCallback(()=>{u({}),d({})},[]);return e.jsxs(n,{children:[e.jsx(f,{label:"Status"}),e.jsxs("div",{className:"flex flex-col gap-2 w-fit",children:[e.jsx(k,{label:"Buy Now",active:l===0,onClick:()=>i(0)}),e.jsx(k,{label:"Show All",active:l===1,onClick:()=>i(1)})]}),e.jsx(f,{label:"Properties",children:S&&e.jsx(w,{onClick:b})}),L.map((t,y)=>e.jsxs(C,{label:t,count:17,children:[e.jsx(H,{variant:"darkest",search:a[t]||"",setSearch:r=>d(c=>({...c,[t]:r}))}),e.jsxs("div",{className:"flex flex-col gap-px",children:[v.filter(r=>`Property ${t} ${r}`.toLowerCase().includes((a[t]||"").toLowerCase())).map(r=>e.jsx(E,{label:`Property ${t} ${r}`,count:100,value:p[t+r]||!1,setValue:c=>u(g=>({...g,[t+r]:c}))},r)),v.filter(r=>`Property ${t} ${r}`.toLowerCase().includes((a[t]||"").toLowerCase())).length===0&&e.jsx($,{})]})]},y))]})}};var x,M,h;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(h=(M=s.parameters)==null?void 0:M.docs)==null?void 0:h.source}}};const Qe=["Default"];export{s as Default,Qe as __namedExportsOrder,Ke as default};
