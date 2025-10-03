import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{fn as Re}from"./index-BgJgh-x_.js";import{r as o}from"./index-BlmOqGMO.js";import"./context-BEXklgMK.js";import"./alert-HkMSTgu9.js";import"./badge-CF9VCaa2.js";import"./breadcrumb-BssIq4hO.js";import"./index-D5rlNKlk.js";import"./card-BS90Wzb6.js";import"./checkbox-B_0M2hZW.js";import"./drawer-CvIs6rk0.js";import"./dropdown-menu-CRT-B5yA.js";import"./radio-group-KQIGPIF9.js";import"./menubar-CHnEKWjv.js";import"./popover-BvzVgOqp.js";import"./progress-Dkom_LNH.js";import"./select-B65IA31l.js";import"./separator-DLNkf967.js";import"./sheet-Bq6Tz9es.js";import"./skeleton-CV1PtUMd.js";import"./switch-ssHJkgb5.js";import"./table-2Lq_Rdjg.js";import"./tabs-Baec46jY.js";import"./specialized-toasts-B5CTLsw7.js";import"./toggle-group-C7AVasTd.js";import"./index-XwABQy1c.js";import"./tooltip-gQAcybeF.js";import{c as qe}from"./index-KnJS0CU8.js";import{c as $e}from"./index-CRGxjvZy.js";import{C as Te}from"./header-CcVcJze1.js";import{C as Ie}from"./preview-BfhrGd8E.js";import{C as Pe}from"./card-footer-DfpXRPTt.js";import"./index-yBjzXJbu.js";import"./index-Dkb_ZYRU.js";import"./index-yBYjIlgW.js";import"./index-C_Dn7qTj.js";import"./index-DKk_hhWv.js";import"./index-CVWIyhAF.js";import"./index-DuqhnXMO.js";import"./index-fNjTmf9T.js";import"./index-BigR8kad.js";import"./index-CQ2Y0WLn.js";import"./index-xprPBo3d.js";import"./wedge-W0rbne9I.js";import"./utils-CWphn_pW.js";import"./index-D31t_0wX.js";import"./index-Ms1lWa6I.js";import"./index-DZCApzUK.js";import"./index-C-QU4qAu.js";import"./index-BZkNnodj.js";import"./alert-BrNdBT3c.js";import"./times-ynKcNaj_.js";import"./times-circle-gyi9izsJ.js";import"./spinner-D3wGzOGj.js";import"./dots-COnCu59r.js";import"./external-DG4iuQXv.js";import"./index-DZ2oWOeb.js";import"./index-BWkk9jnE.js";import"./checkbox-DBv66za0.js";import"./index-Ck-mJuwY.js";import"./index-wyL_HbYX.js";import"./index-DfuoQG06.js";import"./check-Dqm4PBhQ.js";import"./circle-XVpHZr0H.js";import"./index-Bbf5mMoM.js";import"./circle-check-qG_ejMER.js";import"./award-gyvpM0Ag.js";import"./toast-9BxvrNCO.js";import"./sparkles-B7iQfMYn.js";import"./utils-CZiDjOgf.js";import"./thumbnail-LE0aC-EQ.js";import"./index-DTUS6EFt.js";import"./warning-CrJl94iH.js";import"./info-BhoZyVIU.js";import"./tag-DwevlwZ8.js";import"./stack-diamond-nJSktlxf.js";import"./tag-pg5LWMpO.js";const we=$e("group relative grow rounded overflow-hidden cursor-pointer border-transparent border-[2px] data-[selected=true]:border-foreground-100",{variants:{variant:{default:"",faded:""}},defaultVariants:{variant:"default"}});function s({title:n,image:a,icon:e,totalCount:t,listingCount:Ce,price:ve,lastSale:he,selectable:ye=!0,selected:j,onSelect:je,variant:k,className:ke,...Ne}){return r.jsxs("div",{"data-selected":j,className:qe(we({variant:k}),ke),...Ne,children:[r.jsx(Te,{title:n,icon:e,selectable:!j&&ye,selected:j,onSelect:je,variant:k}),r.jsx(Ie,{image:a,size:"sm",totalCount:t,listingCount:Ce}),r.jsx(Pe,{price:ve,lastSale:he,variant:k})]})}s.__docgenInfo={description:"",methods:[],displayName:"CollectibleCard",props:{title:{required:!0,tsType:{name:"string"},description:""},image:{required:!0,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"string"},description:""},totalCount:{required:!1,tsType:{name:"number"},description:""},listingCount:{required:!1,tsType:{name:"number"},description:""},price:{required:!1,tsType:{name:"union",raw:"string | { value: string; image: string } | null",elements:[{name:"string"},{name:"signature",type:"object",raw:"{ value: string; image: string }",signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"image",value:{name:"string",required:!0}}]}},{name:"null"}]},description:""},lastSale:{required:!1,tsType:{name:"union",raw:"string | { value: string; image: string } | null",elements:[{name:"string"},{name:"signature",type:"object",raw:"{ value: string; image: string }",signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"image",value:{name:"string",required:!0}}]}},{name:"null"}]},description:""},selectable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},selected:{required:!1,tsType:{name:"boolean"},description:""},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}},composes:["VariantProps"]};const rt={title:"Modules/Collectibles/Card",component:s,tags:["autodocs"],parameters:{layout:"padded"},args:{image:"https://raw.githubusercontent.com/cartridge-gg/presets/refs/heads/main/configs/loot-survivor/cover.png",title:"Beasts",selected:!1,onSelect:Re()}},c={render:function(a){const[e,t]=o.useState(!1);return r.jsx("div",{className:"flex gap-2",children:r.jsx(s,{...a,totalCount:1,selected:e,onSelect:()=>t(!e),onClick:e?()=>t(!e):void 0})})}},i={render:function(a){const[e,t]=o.useState(!1);return r.jsx("div",{className:"flex gap-2",children:r.jsx(s,{...a,totalCount:2,selected:e,onSelect:()=>t(!e),onClick:()=>t(!e),price:"$2"})})}},l={render:function(a){const[e,t]=o.useState(!1);return r.jsx("div",{className:"flex gap-2",children:r.jsx(s,{...a,image:"https://api.cartridge.gg/x/c7e-mainnet-collections-2/torii/static/0x158160018d590d93528995b340260e65aedd76d28a686e9daa5c4e8fad0c5dd/0x0000000000000000000000000000000000000000000000000000000000000001/image",totalCount:1,selected:e,onSelect:()=>t(!e),onClick:e?()=>t(!e):void 0})})}},d={render:function(a){const[e,t]=o.useState(!1);return r.jsx("div",{className:"flex gap-2",children:r.jsx(s,{...a,image:"https://api.cartridge.gg/x/c7e-mainnet-collections-2/torii/static/0x7d8ea58612a5de25f29281199a4fc1f2ce42f0f207f93c3a35280605f3b8e68/0x0000000000000000000000000000000000000000000000000000000000000001/image",totalCount:1,selected:e,onSelect:()=>t(!e),onClick:e?()=>t(!e):void 0})})}},p={render:function(a){const[e,t]=o.useState(!1);return r.jsx("div",{className:"flex gap-2",children:r.jsx(s,{...a,image:"https://api.cartridge.gg/x/c7e-mainnet-collections-2/torii/static/0x4f5e296c805126637552cf3930e857f380e7c078e8f00696de4fc8545356b1d/0x0000000000000000000000000000000000000000000000000000000000000001/image",totalCount:1,selected:e,onSelect:()=>t(!e),onClick:e?()=>t(!e):void 0})})}},m={render:function(a){const[e,t]=o.useState(!1);return r.jsx("div",{className:"flex gap-2",children:r.jsx(s,{...a,image:"https://api.cartridge.gg/x/arcade-ponziland-nft/torii/static/0x539f522b29ae9251dbf7443c7a950cf260372e69efab3710a11bf17a9599f1/0x0000000000000000000000000000000000000000000000000000000000000001/image",totalCount:1,selected:e,onSelect:()=>t(!e),onClick:e?()=>t(!e):void 0})})}},u={render:function(a){const[e,t]=o.useState(!1);return r.jsx("div",{className:"flex gap-2",children:r.jsx(s,{...a,image:"https://api.cartridge.gg/x/arcade-pistols/torii/static/0x2e9c711b1a7e2784570b1bda5082a92606044e836ba392d2b977d280fb74b3c/0x0000000000000000000000000000000000000000000000000000000000000001/image",totalCount:1,selected:e,onSelect:()=>t(!e),onClick:e?()=>t(!e):void 0})})}},g={args:{selectable:!1,totalCount:2,listingCount:1}},f={args:{variant:"faded",totalCount:2,listingCount:2,price:"$2",lastSale:"$2"}},S={args:{selected:!0}},x={args:{selected:!1}},b={args:{icon:"",selected:!1,price:"$2",lastSale:"$2",totalCount:2,listingCount:1}},C={args:{selected:!1,price:"$2",lastSale:""}},v={args:{selected:!1,price:"",lastSale:"$2"}},h={args:{selected:!1,price:{value:"100",image:"https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/a3bfe959-50c4-4f89-0aef-b19207d82a00/logo"},lastSale:{value:"90",image:"https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/a3bfe959-50c4-4f89-0aef-b19207d82a00/logo"}}},y={args:{selected:!1,price:null,lastSale:null}};var N,R,q;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: function Render(args) {
    const [selected, setSelected] = useState(false);
    return <div className="flex gap-2">
        <CollectibleCard {...args} totalCount={1} selected={selected} onSelect={() => setSelected(!selected)} onClick={selected ? () => setSelected(!selected) : undefined} />
      </div>;
  }
}`,...(q=(R=c.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var $,T,I;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: function Render(args) {
    const [selected, setSelected] = useState(false);
    return <div className="flex gap-2">
        <CollectibleCard {...args} totalCount={2} selected={selected} onSelect={() => setSelected(!selected)} onClick={() => setSelected(!selected)} price="$2" />
      </div>;
  }
}`,...(I=(T=i.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var P,w,B;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: function Render(args) {
    const [selected, setSelected] = useState(false);
    return <div className="flex gap-2">
        <CollectibleCard {...args} image="https://api.cartridge.gg/x/c7e-mainnet-collections-2/torii/static/0x158160018d590d93528995b340260e65aedd76d28a686e9daa5c4e8fad0c5dd/0x0000000000000000000000000000000000000000000000000000000000000001/image" totalCount={1} selected={selected} onSelect={() => setSelected(!selected)} onClick={selected ? () => setSelected(!selected) : undefined} />
      </div>;
  }
}`,...(B=(w=l.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var D,Q,z;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: function Render(args) {
    const [selected, setSelected] = useState(false);
    return <div className="flex gap-2">
        <CollectibleCard {...args} image="https://api.cartridge.gg/x/c7e-mainnet-collections-2/torii/static/0x7d8ea58612a5de25f29281199a4fc1f2ce42f0f207f93c3a35280605f3b8e68/0x0000000000000000000000000000000000000000000000000000000000000001/image" totalCount={1} selected={selected} onSelect={() => setSelected(!selected)} onClick={selected ? () => setSelected(!selected) : undefined} />
      </div>;
  }
}`,...(z=(Q=d.parameters)==null?void 0:Q.docs)==null?void 0:z.source}}};var F,A,L;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: function Render(args) {
    const [selected, setSelected] = useState(false);
    return <div className="flex gap-2">
        <CollectibleCard {...args} image="https://api.cartridge.gg/x/c7e-mainnet-collections-2/torii/static/0x4f5e296c805126637552cf3930e857f380e7c078e8f00696de4fc8545356b1d/0x0000000000000000000000000000000000000000000000000000000000000001/image" totalCount={1} selected={selected} onSelect={() => setSelected(!selected)} onClick={selected ? () => setSelected(!selected) : undefined} />
      </div>;
  }
}`,...(L=(A=p.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var U,V,Y;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: function Render(args) {
    const [selected, setSelected] = useState(false);
    return <div className="flex gap-2">
        <CollectibleCard {...args} image="https://api.cartridge.gg/x/arcade-ponziland-nft/torii/static/0x539f522b29ae9251dbf7443c7a950cf260372e69efab3710a11bf17a9599f1/0x0000000000000000000000000000000000000000000000000000000000000001/image" totalCount={1} selected={selected} onSelect={() => setSelected(!selected)} onClick={selected ? () => setSelected(!selected) : undefined} />
      </div>;
  }
}`,...(Y=(V=m.parameters)==null?void 0:V.docs)==null?void 0:Y.source}}};var _,E,G;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: function Render(args) {
    const [selected, setSelected] = useState(false);
    return <div className="flex gap-2">
        <CollectibleCard {...args} image="https://api.cartridge.gg/x/arcade-pistols/torii/static/0x2e9c711b1a7e2784570b1bda5082a92606044e836ba392d2b977d280fb74b3c/0x0000000000000000000000000000000000000000000000000000000000000001/image" totalCount={1} selected={selected} onSelect={() => setSelected(!selected)} onClick={selected ? () => setSelected(!selected) : undefined} />
      </div>;
  }
}`,...(G=(E=u.parameters)==null?void 0:E.docs)==null?void 0:G.source}}};var K,H,M;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    selectable: false,
    totalCount: 2,
    listingCount: 1
  }
}`,...(M=(H=g.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var O,J,W;f.parameters={...f.parameters,docs:{...(O=f.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    variant: "faded",
    totalCount: 2,
    listingCount: 2,
    price: "$2",
    lastSale: "$2"
  }
}`,...(W=(J=f.parameters)==null?void 0:J.docs)==null?void 0:W.source}}};var X,Z,ee;S.parameters={...S.parameters,docs:{...(X=S.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    selected: true
  }
}`,...(ee=(Z=S.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,re,ae;x.parameters={...x.parameters,docs:{...(te=x.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    selected: false
  }
}`,...(ae=(re=x.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var se,ne,oe;b.parameters={...b.parameters,docs:{...(se=b.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    icon: "",
    selected: false,
    price: "$2",
    lastSale: "$2",
    totalCount: 2,
    listingCount: 1
  }
}`,...(oe=(ne=b.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var ce,ie,le;C.parameters={...C.parameters,docs:{...(ce=C.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    selected: false,
    price: "$2",
    lastSale: ""
  }
}`,...(le=(ie=C.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var de,pe,me;v.parameters={...v.parameters,docs:{...(de=v.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    selected: false,
    price: "",
    lastSale: "$2"
  }
}`,...(me=(pe=v.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var ue,ge,fe;h.parameters={...h.parameters,docs:{...(ue=h.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    selected: false,
    price: {
      value: "100",
      image: "https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/a3bfe959-50c4-4f89-0aef-b19207d82a00/logo"
    },
    lastSale: {
      value: "90",
      image: "https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/a3bfe959-50c4-4f89-0aef-b19207d82a00/logo"
    }
  }
}`,...(fe=(ge=h.parameters)==null?void 0:ge.docs)==null?void 0:fe.source}}};var Se,xe,be;y.parameters={...y.parameters,docs:{...(Se=y.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    selected: false,
    price: null,
    lastSale: null
  }
}`,...(be=(xe=y.parameters)==null?void 0:xe.docs)==null?void 0:be.source}}};const at=["Default","Selectable","Beast","Karat","GoldenToken","Bloberts","Duelists","Unselectable","Faded","Selected","Unselected","Icon","Price","LastSale","PriceLastSale","FooterForced"];export{l as Beast,m as Bloberts,c as Default,u as Duelists,f as Faded,y as FooterForced,p as GoldenToken,b as Icon,d as Karat,v as LastSale,C as Price,h as PriceLastSale,i as Selectable,S as Selected,g as Unselectable,x as Unselected,at as __namedExportsOrder,rt as default};
