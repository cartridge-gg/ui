import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import"./context-CDbX8kD3.js";import"./alert-HkMSTgu9.js";import"./badge-CF9VCaa2.js";import"./breadcrumb-V3TW3CaT.js";import"./index-CYmZMVXJ.js";import"./card-CHJmWtwN.js";import"./checkbox-BJGOHg_b.js";import"./drawer-CB1qWX_Q.js";import"./dropdown-menu-Bf3pfD8n.js";import"./radio-group-WlSpQHWm.js";import"./menubar-eE93DyoQ.js";import"./popover-DNr9wWs8.js";import"./progress-Dkom_LNH.js";import"./select-COP56eT4.js";import"./separator-DLNkf967.js";import"./sheet-BHnC42pu.js";import"./skeleton-CV1PtUMd.js";import"./switch-CWQaiJ0M.js";import"./table-2Lq_Rdjg.js";import"./tabs-pHV4z6kt.js";import"./toggle-group-Bz_GEFe3.js";import"./index-Cd0zht5T.js";import"./tooltip-CEc4qSmp.js";import{r as m}from"./index-BlmOqGMO.js";import{M as c}from"./search-engine-CYxqNYwd.js";import{M as p}from"./search-card-B5TNIvY9.js";import{O as l}from"./olmech-1Z8z4GR2.js";import"./index-yBjzXJbu.js";import"./index-KnJS0CU8.js";import"./index-Dkb_ZYRU.js";import"./index-BYUKtP1h.js";import"./index-C_Dn7qTj.js";import"./index-BQxh6BgF.js";import"./index-CVWIyhAF.js";import"./index-DuqhnXMO.js";import"./index-fNjTmf9T.js";import"./index-BbW-7v3v.js";import"./index-DdDw_O67.js";import"./wedge-Ek6y42Ws.js";import"./utils-GTnaulzv.js";import"./index-CRGxjvZy.js";import"./index-B7ENhYdy.js";import"./index-BylD-epk.js";import"./index-DZCApzUK.js";import"./index-CJGASTBR.js";import"./alert-DG-IKYwr.js";import"./times-zfpenlOA.js";import"./times-circle-BPxv1pFA.js";import"./spinner-BCFkRInS.js";import"./dots-CqQy5XBj.js";import"./index-DZ2oWOeb.js";import"./index-DaMGPy2X.js";import"./checkbox-BNhnVxLV.js";import"./index-BV9D_7a1.js";import"./index-z8P03atw.js";import"./index-DoUPdNCX.js";import"./check-BknbCD27.js";import"./circle-Ddb5-e2i.js";import"./index-COzOtNfS.js";import"./circle-check-B84UAr7O.js";import"./utils-CzDHQuSw.js";import"./search-FNLtSZib.js";const Dr={title:"Modules/Marketplace/Search Engine",component:c,tags:["autodocs"],parameters:{layout:"padded"},args:{search:"Loot"}},s={render:function(e){const[a,t]=m.useState(e.search||"");return r.jsx("div",{className:"flex gap-2",children:r.jsx(c,{variant:"darkest",search:a,setSearch:t})})}},o={render:function(e){const[a,t]=m.useState(e.search||"");return r.jsx("div",{className:"flex gap-2",children:r.jsx(c,{variant:"darker",search:a,setSearch:t})})}},i={render:function(e){const[a,t]=m.useState(e.search||"");return r.jsx("div",{className:"flex gap-2",children:r.jsx(c,{variant:"darkest",search:a,setSearch:t,cards:[r.jsx(p,{image:r.jsx(l,{variant:"one",className:"h-full w-full"}),label:"ashe"}),r.jsx(p,{image:r.jsx(l,{variant:"seven",className:"h-full w-full"}),label:"bal7hazar"})]})})}};var d,h,u;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: function Render(args) {
    const [search, setSearch] = useState<string>(args.search || "");
    return <div className="flex gap-2">
        <MarketplaceSearchEngine variant="darkest" search={search} setSearch={setSearch} />
      </div>;
  }
}`,...(u=(h=s.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var g,S,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: function Render(args) {
    const [search, setSearch] = useState<string>(args.search || "");
    return <div className="flex gap-2">
        <MarketplaceSearchEngine variant="darker" search={search} setSearch={setSearch} />
      </div>;
  }
}`,...(f=(S=o.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var v,x,k;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: function Render(args) {
    const [search, setSearch] = useState<string>(args.search || "");
    return <div className="flex gap-2">
        <MarketplaceSearchEngine variant="darkest" search={search} setSearch={setSearch} cards={[<MarketplaceSearchCard image={<OlmechIcon variant="one" className="h-full w-full" />} label="ashe" />, <MarketplaceSearchCard image={<OlmechIcon variant="seven" className="h-full w-full" />} label="bal7hazar" />]} />
      </div>;
  }
}`,...(k=(x=i.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};const Ir=["Darkest","Darker","Cards"];export{i as Cards,o as Darker,s as Darkest,Ir as __namedExportsOrder,Dr as default};
