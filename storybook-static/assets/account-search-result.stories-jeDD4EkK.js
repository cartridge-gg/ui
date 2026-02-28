import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import"./context-CDbX8kD3.js";import"./alert-HkMSTgu9.js";import"./badge-CF9VCaa2.js";import"./breadcrumb-V3TW3CaT.js";import"./index-CYmZMVXJ.js";import"./card-CHJmWtwN.js";import"./checkbox-BJGOHg_b.js";import"./drawer-CB1qWX_Q.js";import"./dropdown-menu-Bf3pfD8n.js";import"./radio-group-WlSpQHWm.js";import"./menubar-eE93DyoQ.js";import"./popover-DNr9wWs8.js";import"./progress-Dkom_LNH.js";import"./select-COP56eT4.js";import"./separator-DLNkf967.js";import"./sheet-BHnC42pu.js";import"./skeleton-CV1PtUMd.js";import"./switch-CWQaiJ0M.js";import"./table-2Lq_Rdjg.js";import"./tabs-pHV4z6kt.js";import"./toggle-group-Bz_GEFe3.js";import"./index-Cd0zht5T.js";import"./tooltip-CEc4qSmp.js";import{A as S}from"./account-search-result-MTYBMCfb.js";import"./index-yBjzXJbu.js";import"./index-BlmOqGMO.js";import"./index-KnJS0CU8.js";import"./index-Dkb_ZYRU.js";import"./index-BYUKtP1h.js";import"./index-C_Dn7qTj.js";import"./index-BQxh6BgF.js";import"./index-CVWIyhAF.js";import"./index-DuqhnXMO.js";import"./index-fNjTmf9T.js";import"./index-BbW-7v3v.js";import"./index-DdDw_O67.js";import"./wedge-Ek6y42Ws.js";import"./utils-GTnaulzv.js";import"./index-CRGxjvZy.js";import"./index-B7ENhYdy.js";import"./index-BylD-epk.js";import"./index-DZCApzUK.js";import"./index-CJGASTBR.js";import"./alert-DG-IKYwr.js";import"./times-zfpenlOA.js";import"./times-circle-BPxv1pFA.js";import"./spinner-BCFkRInS.js";import"./dots-CqQy5XBj.js";import"./index-DZ2oWOeb.js";import"./index-DaMGPy2X.js";import"./checkbox-BNhnVxLV.js";import"./index-BV9D_7a1.js";import"./index-z8P03atw.js";import"./index-DoUPdNCX.js";import"./check-BknbCD27.js";import"./circle-Ddb5-e2i.js";import"./index-COzOtNfS.js";import"./circle-check-B84UAr7O.js";import"./utils-CzDHQuSw.js";import"./player-badge-B7pDkZH-.js";import"./empty-BoLAzEHX.js";import"./player-avatar-QlCq2E0v.js";import"./olmech-1Z8z4GR2.js";import"./thumbnail-BYLXA86H.js";import"./index-DTUS6EFt.js";import"./warning-CVvTL8z7.js";import"./info-BgozbEzj.js";import"./plus-YZVDKPBW.js";import"./seedling-Du3aBfjm.js";import"./sparkles-CY9lzZpH.js";const Ge={title:"Modules/Create Account/Account Search Result Item",component:S,tags:["autodocs"],parameters:{layout:"centered"},args:{result:{id:"create-new-shin",type:"create-new",username:"shin"},className:"min-w-0 w-96"}},e={},t={args:{result:{id:"existing-shinobi",type:"existing",username:"shinobi",points:20800,lastOnline:new Date(Date.now()-2*24*60*60*1e3)}}},i={args:{result:{id:"existing-shinobi",type:"existing",username:"shinobi",points:0,lastOnline:new Date(Date.now()-2*24*60*60*1e3)}}},r={args:{result:{id:"create-new-shin",type:"create-new",username:"shin"}}},s={render:function(){const f=[{id:"create-new-shin",type:"create-new",username:"shin"},{id:"existing-shinto",type:"existing",username:"shinto",points:0},{id:"existing-shints",type:"existing",username:"shints",points:20800},{id:"existing-shinobi",type:"existing",username:"shinobi",points:20800}];return o.jsx("div",{className:"min-w-0 w-96 divide-y divide-spacer-100",children:f.map(n=>o.jsx(S,{result:n},n.id))})}};var p,m,a;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(a=(m=e.parameters)==null?void 0:m.docs)==null?void 0:a.source}}};var c,u,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    result: {
      id: "existing-shinobi",
      type: "existing",
      username: "shinobi",
      points: 20800,
      lastOnline: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000) // 2 days ago
    }
  }
}`,...(d=(u=t.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var l,g,h;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    result: {
      id: "existing-shinobi",
      type: "existing",
      username: "shinobi",
      points: 0,
      lastOnline: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000) // 2 days ago
    }
  }
}`,...(h=(g=i.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var x,w,y;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    result: {
      id: "create-new-shin",
      type: "create-new",
      username: "shin"
    }
  }
}`,...(y=(w=r.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var b,R,D;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: function MultipleResult() {
    const mockResults = [{
      id: "create-new-shin",
      type: "create-new",
      username: "shin"
    }, {
      id: "existing-shinto",
      type: "existing",
      username: "shinto",
      points: 0
    }, {
      id: "existing-shints",
      type: "existing",
      username: "shints",
      points: 20800
    }, {
      id: "existing-shinobi",
      type: "existing",
      username: "shinobi",
      points: 20800
    }] satisfies Array<AccountSearchResult>;
    return <div className="min-w-0 w-96 divide-y divide-spacer-100">
        {mockResults.map(result => <AccountSearchResultItem key={result.id} result={result} />)}
      </div>;
  }
}`,...(D=(R=s.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};const He=["Default","ExistingUser","ExistingUserWithNoPoints","NewUser","MultipleResult"];export{e as Default,t as ExistingUser,i as ExistingUserWithNoPoints,s as MultipleResult,r as NewUser,He as __namedExportsOrder,Ge as default};
