import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import"./context-BEXklgMK.js";import"./alert-HkMSTgu9.js";import"./badge-CF9VCaa2.js";import"./breadcrumb-BssIq4hO.js";import"./index-D5rlNKlk.js";import"./card-BS90Wzb6.js";import"./checkbox-B_0M2hZW.js";import"./drawer-CvIs6rk0.js";import"./dropdown-menu-CRT-B5yA.js";import"./radio-group-KQIGPIF9.js";import"./menubar-CHnEKWjv.js";import"./popover-BvzVgOqp.js";import"./progress-Dkom_LNH.js";import{S as ce,b as me}from"./select-B65IA31l.js";import"./separator-DLNkf967.js";import"./sheet-Bq6Tz9es.js";import"./skeleton-CV1PtUMd.js";import"./switch-ssHJkgb5.js";import"./table-2Lq_Rdjg.js";import{T as ue,a as de,c as d}from"./tabs-Baec46jY.js";import{r as p,R as c}from"./index-BlmOqGMO.js";import"./specialized-toasts-B5CTLsw7.js";import"./toggle-group-C7AVasTd.js";import"./index-XwABQy1c.js";import"./tooltip-gQAcybeF.js";import{c as P}from"./index-KnJS0CU8.js";import{c as pe}from"./index-CRGxjvZy.js";import{A as ve}from"./menu-button-Cz20jX5t.js";import{A as m}from"./menu-item-DCrS3FAl.js";import{L as M,S as E,M as W}from"./scroll-2B3DS8jD.js";import{A as u}from"./tab-C-aK00v-.js";import{U as k}from"./users-DfHzAEmA.js";import{S as G}from"./shopping-cart-f0nnqm-b.js";import{L as H}from"./list-BRCrNv7g.js";import{P as O}from"./pulse-CCjhczj9.js";import{S as _}from"./swords-B-qRL-2Z.js";import{L as q}from"./leaderboard-LaFrlQOG.js";import{C as D}from"./chest-CK8JJwAV.js";import{T as U}from"./trophy-D6X4ZW9u.js";import{fn as fe}from"./index-BgJgh-x_.js";import"./index-yBjzXJbu.js";import"./index-Dkb_ZYRU.js";import"./index-yBYjIlgW.js";import"./index-C_Dn7qTj.js";import"./index-DKk_hhWv.js";import"./index-CVWIyhAF.js";import"./index-DuqhnXMO.js";import"./index-fNjTmf9T.js";import"./index-BigR8kad.js";import"./index-CQ2Y0WLn.js";import"./index-xprPBo3d.js";import"./wedge-W0rbne9I.js";import"./utils-CWphn_pW.js";import"./index-D31t_0wX.js";import"./index-Ms1lWa6I.js";import"./index-DZCApzUK.js";import"./index-C-QU4qAu.js";import"./index-BZkNnodj.js";import"./alert-BrNdBT3c.js";import"./times-ynKcNaj_.js";import"./times-circle-gyi9izsJ.js";import"./spinner-D3wGzOGj.js";import"./dots-COnCu59r.js";import"./external-DG4iuQXv.js";import"./index-DZ2oWOeb.js";import"./index-BWkk9jnE.js";import"./checkbox-DBv66za0.js";import"./index-Ck-mJuwY.js";import"./index-wyL_HbYX.js";import"./index-DfuoQG06.js";import"./check-Dqm4PBhQ.js";import"./circle-XVpHZr0H.js";import"./index-Bbf5mMoM.js";import"./circle-check-qG_ejMER.js";import"./award-gyvpM0Ag.js";import"./toast-9BxvrNCO.js";import"./sparkles-B7iQfMYn.js";import"./utils-CZiDjOgf.js";const xe=pe("flex justify-start items-end w-full p-0 px-4 border-b rounded-none",{variants:{variant:{default:"bg-background-100 border-background-200"},size:{default:"gap-3 h-10"}},defaultVariants:{variant:"default",size:"default"}}),C=({defaultValue:r="activity",order:a=["activity","leaderboard","predict","about","metrics","marketplace","inventory","achievements","positions","guilds","items","holders"],onTabClick:n,variant:s,size:i,className:t,children:o})=>{const[f,ne]=p.useState(r),[S,se]=p.useState(a),[v,oe]=p.useState([]),x=p.useRef(null),y=p.useRef(null),g=p.useRef(new Map);p.useEffect(()=>{if(!y.current)return;const l=new Map;y.current.childNodes.forEach(I=>{var b;const V=I,j=(b=V.textContent)==null?void 0:b.toLowerCase();if(j){const h=a.includes(j);l.set(j,{width:V.offsetWidth,visible:h})}}),g.current=l},[g,y,a]),p.useEffect(()=>{const l=new ResizeObserver(()=>{if(!x.current)return;const I=12,j=x.current.offsetWidth-32-I;let b=32;const h=[],T=[];a.forEach(B=>{const{width:L,visible:le}=g.current.get(B)||{width:0,visible:!1};le&&(b+L<=j&&T.length===0?(h.push(B),b+=L+I):T.push(B))}),S.join(",")!==h.join(",")&&se(h),v.join(",")!==T.join(",")&&oe(T)});return l.observe(x.current),()=>l.disconnect()},[a,x.current,S,v,g]);const ie=p.useMemo(()=>v.includes(f),[v,f]);return e.jsxs(ue,{defaultValue:r,onValueChange:l=>ne(l),className:"h-full flex flex-col overflow-hidden",children:[e.jsxs(de,{ref:x,className:P(xe({variant:s,size:i}),t),children:[e.jsx("div",{ref:y,className:"flex gap-2 absolute invisible",children:a.map(l=>e.jsx(z,{tab:l,value:f,size:i},l))}),S.map(l=>e.jsx(z,{tab:l,value:f,size:i,onTabClick:()=>n==null?void 0:n(l)},l)),e.jsxs(ce,{children:[e.jsx("div",{className:"grow flex justify-end items-center self-center",children:e.jsx(ve,{active:ie,className:P(v.length===0&&"hidden")})}),e.jsx(me,{className:"bg-background-100",children:v.map(l=>e.jsx(z,{tab:l,value:f,size:i,onTabClick:()=>n==null?void 0:n(l),item:!0},l))})]})]}),o]})},z=({tab:r,value:a,size:n,onTabClick:s,item:i})=>{const t={key:r,value:r,active:a===r,size:n,onClick:s,item:i};switch(r){case"inventory":return e.jsx(je,{...t});case"achievements":return e.jsx(be,{...t});case"leaderboard":return e.jsx(he,{...t});case"guilds":return e.jsx(ye,{...t});case"activity":return e.jsx(ge,{...t});case"metrics":return e.jsx(Ie,{...t});case"about":return e.jsx(Te,{...t});case"marketplace":return e.jsx(we,{...t});case"items":return e.jsx(Ae,{...t});case"holders":return e.jsx(Re,{...t});case"predict":return e.jsx(Ne,{...t});case"positions":return e.jsx(Me,{...t});default:return null}},je=c.forwardRef(({value:r,active:a,size:n,onClick:s,item:i,label:t="Inventory"},o)=>i?e.jsx(m,{ref:o,value:r,Icon:e.jsx(D,{variant:"solid",size:"sm"}),label:t,active:a,size:n,onClick:s}):e.jsx(u,{ref:o,value:r,Icon:e.jsx(D,{variant:"solid",size:"sm"}),label:t,active:a,size:n,onClick:s})),be=c.forwardRef(({value:r,active:a,size:n,onClick:s,item:i,label:t="Achievements"},o)=>i?e.jsx(m,{ref:o,value:r,Icon:e.jsx(U,{variant:"solid",size:"sm"}),label:t,active:a,size:n,onClick:s}):e.jsx(u,{ref:o,value:r,Icon:e.jsx(U,{variant:"solid",size:"sm"}),label:t,active:a,size:n,onClick:s})),he=c.forwardRef(({value:r,active:a,size:n,onClick:s,item:i,label:t="Leaderboard"},o)=>i?e.jsx(m,{ref:o,value:r,Icon:e.jsx(q,{variant:"solid",size:"sm"}),label:t,active:a,size:n,onClick:s}):e.jsx(u,{ref:o,value:r,Icon:e.jsx(q,{variant:"solid",size:"sm"}),label:t,active:a,size:n,onClick:s})),ye=c.forwardRef(({value:r,active:a,size:n,onClick:s,item:i,label:t="Guilds"},o)=>i?e.jsx(m,{ref:o,value:r,Icon:e.jsx(_,{variant:"solid",size:"sm"}),label:t,active:a,size:n,onClick:s}):e.jsx(u,{ref:o,value:r,Icon:e.jsx(_,{variant:"solid",size:"sm"}),label:t,active:a,size:n,onClick:s})),ge=c.forwardRef(({value:r,active:a,size:n,onClick:s,item:i,label:t="Activity"},o)=>i?e.jsx(m,{ref:o,value:r,Icon:e.jsx(O,{variant:"solid",size:"sm"}),label:t,active:a,size:n,onClick:s}):e.jsx(u,{ref:o,value:r,Icon:e.jsx(O,{variant:"solid",size:"sm"}),label:t,active:a,size:n,onClick:s})),Ie=c.forwardRef(({value:r,active:a,size:n,onClick:s,item:i,label:t="Metrics"},o)=>i?e.jsx(m,{ref:o,value:r,Icon:e.jsx(W,{variant:"solid",size:"sm"}),label:t,active:a,size:n,onClick:s}):e.jsx(u,{ref:o,value:r,Icon:e.jsx(W,{variant:"solid",size:"sm"}),label:t,active:a,size:n,onClick:s})),Te=c.forwardRef(({value:r,active:a,size:n,onClick:s,item:i,label:t="About"},o)=>i?e.jsx(m,{ref:o,value:r,Icon:e.jsx(H,{variant:"solid",size:"sm"}),label:t,active:a,size:n,onClick:s}):e.jsx(u,{ref:o,value:r,Icon:e.jsx(H,{variant:"solid",size:"sm"}),label:t,active:a,size:n,onClick:s})),we=c.forwardRef(({value:r,active:a,size:n,onClick:s,item:i,label:t="Shop"},o)=>i?e.jsx(m,{ref:o,value:r,Icon:e.jsx(G,{variant:"solid",size:"sm"}),label:t,active:a,size:n,onClick:s}):e.jsx(u,{ref:o,value:r,Icon:e.jsx(G,{variant:"solid",size:"sm"}),label:t,active:a,size:n,onClick:s})),Ae=c.forwardRef(({value:r,active:a,size:n,onClick:s,item:i,label:t="Items"},o)=>i?e.jsx(m,{ref:o,value:r,Icon:e.jsx(E,{variant:"solid",size:"sm"}),label:t,active:a,size:n,onClick:s}):e.jsx(u,{ref:o,value:r,Icon:e.jsx(E,{variant:"solid",size:"sm"}),label:t,active:a,size:n,onClick:s})),Re=c.forwardRef(({value:r,active:a,size:n,onClick:s,item:i,label:t="Holders"},o)=>i?e.jsx(m,{ref:o,value:r,Icon:e.jsx(k,{variant:"solid",size:"sm"}),label:t,active:a,size:n,onClick:s}):e.jsx(u,{ref:o,value:r,Icon:e.jsx(k,{variant:"solid",size:"sm"}),label:t,active:a,size:n,onClick:s})),Ne=c.forwardRef(({value:r,active:a,size:n,onClick:s,item:i,label:t="Predict"},o)=>i?e.jsx(m,{ref:o,value:r,Icon:e.jsx(M,{variant:"solid",size:"sm"}),label:t,active:a,size:n,onClick:s}):e.jsx(u,{ref:o,value:r,Icon:e.jsx(M,{variant:"solid",size:"sm"}),label:t,active:a,size:n,onClick:s})),Me=c.forwardRef(({value:r,active:a,size:n,onClick:s,item:i,label:t="Positions"},o)=>i?e.jsx(m,{ref:o,value:r,Icon:e.jsx(M,{variant:"solid",size:"sm"}),label:t,active:a,size:n,onClick:s}):e.jsx(u,{ref:o,value:r,Icon:e.jsx(M,{variant:"solid",size:"sm"}),label:t,active:a,size:n,onClick:s}));C.__docgenInfo={description:"",methods:[],displayName:"ArcadeTabs",props:{defaultValue:{required:!1,tsType:{name:"union",raw:`| "inventory"
| "achievements"
| "leaderboard"
| "guilds"
| "activity"
| "metrics"
| "about"
| "marketplace"
| "items"
| "holders"
| "predict"
| "positions"`,elements:[{name:"literal",value:'"inventory"'},{name:"literal",value:'"achievements"'},{name:"literal",value:'"leaderboard"'},{name:"literal",value:'"guilds"'},{name:"literal",value:'"activity"'},{name:"literal",value:'"metrics"'},{name:"literal",value:'"about"'},{name:"literal",value:'"marketplace"'},{name:"literal",value:'"items"'},{name:"literal",value:'"holders"'},{name:"literal",value:'"predict"'},{name:"literal",value:'"positions"'}]},description:"",defaultValue:{value:'"activity"',computed:!1}},order:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:`| "inventory"
| "achievements"
| "leaderboard"
| "guilds"
| "activity"
| "metrics"
| "about"
| "marketplace"
| "items"
| "holders"
| "predict"
| "positions"`,elements:[{name:"literal",value:'"inventory"'},{name:"literal",value:'"achievements"'},{name:"literal",value:'"leaderboard"'},{name:"literal",value:'"guilds"'},{name:"literal",value:'"activity"'},{name:"literal",value:'"metrics"'},{name:"literal",value:'"about"'},{name:"literal",value:'"marketplace"'},{name:"literal",value:'"items"'},{name:"literal",value:'"holders"'},{name:"literal",value:'"predict"'},{name:"literal",value:'"positions"'}]}],raw:"TabValue[]"},description:"",defaultValue:{value:`[
  "activity",
  "leaderboard",
  "predict",
  "about",
  "metrics",
  "marketplace",
  "inventory",
  "achievements",
  "positions",
  "guilds",
  "items",
  "holders",
]`,computed:!1}},onTabClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(tab: TabValue) => void",signature:{arguments:[{type:{name:"union",raw:`| "inventory"
| "achievements"
| "leaderboard"
| "guilds"
| "activity"
| "metrics"
| "about"
| "marketplace"
| "items"
| "holders"
| "predict"
| "positions"`,elements:[{name:"literal",value:'"inventory"'},{name:"literal",value:'"achievements"'},{name:"literal",value:'"leaderboard"'},{name:"literal",value:'"guilds"'},{name:"literal",value:'"activity"'},{name:"literal",value:'"metrics"'},{name:"literal",value:'"about"'},{name:"literal",value:'"marketplace"'},{name:"literal",value:'"items"'},{name:"literal",value:'"holders"'},{name:"literal",value:'"predict"'},{name:"literal",value:'"positions"'}]},name:"tab"}],return:{name:"void"}}},description:""}},composes:["VariantProps"]};const er={title:"Modules/Arcade/Tabs",component:C,tags:["autodocs"],parameters:{layout:"padded"},args:{onTabClick:fe()}},w={render:r=>e.jsxs(C,{...r,children:[e.jsx(d,{value:"inventory",children:"Inventory content"}),e.jsx(d,{value:"achievements",children:"Achievements content"}),e.jsx(d,{value:"leaderboard",children:"Leaderboard content"}),e.jsx(d,{value:"guilds",children:"Guilds content"}),e.jsx(d,{value:"activity",children:"Activity content"}),e.jsx(d,{value:"metrics",children:"Metrics content"}),e.jsx(d,{value:"about",children:"About content"}),e.jsx(d,{value:"marketplace",children:"Marketplace content"}),e.jsx(d,{value:"items",children:"Items content"}),e.jsx(d,{value:"holders",children:"Holders content"})]})},A={args:{defaultValue:"activity",order:["activity","leaderboard","marketplace","guilds","about"]}},R={args:{defaultValue:"activity",order:["activity","items","holders"]}},N={args:{defaultValue:"inventory",order:["inventory","achievements","activity"]}};var F,J,K;w.parameters={...w.parameters,docs:{...(F=w.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => <ArcadeTabs {...args}>
      <TabsContent value="inventory">Inventory content</TabsContent>
      <TabsContent value="achievements">Achievements content</TabsContent>
      <TabsContent value="leaderboard">Leaderboard content</TabsContent>
      <TabsContent value="guilds">Guilds content</TabsContent>
      <TabsContent value="activity">Activity content</TabsContent>
      <TabsContent value="metrics">Metrics content</TabsContent>
      <TabsContent value="about">About content</TabsContent>
      <TabsContent value="marketplace">Marketplace content</TabsContent>
      <TabsContent value="items">Items content</TabsContent>
      <TabsContent value="holders">Holders content</TabsContent>
    </ArcadeTabs>
}`,...(K=(J=w.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;A.parameters={...A.parameters,docs:{...(Q=A.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    defaultValue: "activity",
    order: ["activity", "leaderboard", "marketplace", "guilds", "about"]
  }
}`,...(Y=(X=A.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;R.parameters={...R.parameters,docs:{...(Z=R.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    defaultValue: "activity",
    order: ["activity", "items", "holders"]
  }
}`,...(ee=($=R.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var te,re,ae;N.parameters={...N.parameters,docs:{...(te=N.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    defaultValue: "inventory",
    order: ["inventory", "achievements", "activity"]
  }
}`,...(ae=(re=N.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};const tr=["Default","Game","Marketplace","Player"];export{w as Default,A as Game,R as Marketplace,N as Player,tr as __namedExportsOrder,er as default};
