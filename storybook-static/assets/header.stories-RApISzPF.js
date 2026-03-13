import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import"./context-CDbX8kD3.js";import"./alert-HkMSTgu9.js";import"./badge-CF9VCaa2.js";import"./breadcrumb-V3TW3CaT.js";import"./index-CYmZMVXJ.js";import"./card-CHJmWtwN.js";import"./checkbox-BJGOHg_b.js";import"./drawer-CB1qWX_Q.js";import"./dropdown-menu-Bf3pfD8n.js";import"./radio-group-WlSpQHWm.js";import"./menubar-eE93DyoQ.js";import"./popover-DNr9wWs8.js";import"./progress-Dkom_LNH.js";import{S as k,a as u}from"./select-COP56eT4.js";import"./separator-DLNkf967.js";import"./sheet-BHnC42pu.js";import"./skeleton-CV1PtUMd.js";import"./switch-CWQaiJ0M.js";import"./table-2Lq_Rdjg.js";import"./tabs-pHV4z6kt.js";import"./toggle-group-Bz_GEFe3.js";import"./index-Cd0zht5T.js";import"./tooltip-CEc4qSmp.js";import{T as n,a as T}from"./row-fLUJmEpi.js";import"./index-yBjzXJbu.js";import"./index-BlmOqGMO.js";import"./index-KnJS0CU8.js";import"./index-Dkb_ZYRU.js";import"./index-BYUKtP1h.js";import"./index-C_Dn7qTj.js";import"./index-BQxh6BgF.js";import"./index-CVWIyhAF.js";import"./index-DuqhnXMO.js";import"./index-fNjTmf9T.js";import"./index-BbW-7v3v.js";import"./index-DdDw_O67.js";import"./wedge-Ek6y42Ws.js";import"./utils-GTnaulzv.js";import"./index-CRGxjvZy.js";import"./index-B7ENhYdy.js";import"./index-BylD-epk.js";import"./index-DZCApzUK.js";import"./index-CJGASTBR.js";import"./alert-DG-IKYwr.js";import"./times-zfpenlOA.js";import"./times-circle-BPxv1pFA.js";import"./spinner-BCFkRInS.js";import"./dots-CqQy5XBj.js";import"./index-DZ2oWOeb.js";import"./index-DaMGPy2X.js";import"./checkbox-BNhnVxLV.js";import"./index-BV9D_7a1.js";import"./index-z8P03atw.js";import"./index-DoUPdNCX.js";import"./check-BknbCD27.js";import"./circle-Ddb5-e2i.js";import"./index-COzOtNfS.js";import"./circle-check-B84UAr7O.js";import"./utils-CzDHQuSw.js";import"./thumbnail-BYLXA86H.js";import"./index-DTUS6EFt.js";import"./warning-CVvTL8z7.js";import"./info-BgozbEzj.js";const t={balance:{amount:71521921165994e-18,value:.12851233577956853,change:-.0003482251426370486},metadata:{name:"Ether",symbol:"ETH",decimals:18,address:"0x049D36570D4e46f48e99674bd3fcc84644DdD6c96F7C741B1562B82f9e004dC7",image:"https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/e07829b7-0382-4e03-7ecd-a478c5aa9f00/logo"}},Re={title:"Modules/ERC20/Token Select/Header",component:n,parameters:{layout:"centered"},args:{}},o={render:()=>{const m=t;return e.jsxs(k,{defaultValue:t.metadata.address,value:t.metadata.address,children:[e.jsx(n,{onClick:()=>{}}),e.jsx(u,{className:"invisible",children:[t].map(r=>e.jsx(T,{token:r,currentToken:m},r.metadata.address))})]})}},a={render:()=>{const m=t;return e.jsxs(k,{defaultValue:t.metadata.address,value:t.metadata.address,children:[e.jsx(n,{disabled:!0}),e.jsx(u,{className:"invisible",children:[t].map(r=>e.jsx(T,{token:r,currentToken:m},r.metadata.address))})]})}};var i,s,p;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const currentToken = mockToken;
    return <Select defaultValue={mockToken.metadata.address} value={mockToken.metadata.address}>
        <TokenSelectHeader onClick={() => {}} />
        <SelectContent className="invisible">
          {[mockToken].map(token => <TokenSelectRow key={token.metadata.address} token={token} currentToken={currentToken} />)}
        </SelectContent>
      </Select>;
  }
}`,...(p=(s=o.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};var d,c,l;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    const currentToken = mockToken;
    return <Select defaultValue={mockToken.metadata.address} value={mockToken.metadata.address}>
        <TokenSelectHeader disabled={true} />
        <SelectContent className="invisible">
          {[mockToken].map(token => <TokenSelectRow key={token.metadata.address} token={token} currentToken={currentToken} />)}
        </SelectContent>
      </Select>;
  }
}`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const ye=["Default","Disabled"];export{o as Default,a as Disabled,ye as __namedExportsOrder,Re as default};
