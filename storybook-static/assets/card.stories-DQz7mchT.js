import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{fn as w0}from"./index-BgJgh-x_.js";import{r as i}from"./index-BlmOqGMO.js";import"./context-C0ZuLyu1.js";import"./alert-HkMSTgu9.js";import"./badge-CF9VCaa2.js";import"./breadcrumb-BssIq4hO.js";import"./index-D5rlNKlk.js";import"./card-CHJmWtwN.js";import"./checkbox-B_0M2hZW.js";import"./drawer-xE2kwbAV.js";import"./dropdown-menu-CRT-B5yA.js";import"./radio-group-KQIGPIF9.js";import"./menubar-CHnEKWjv.js";import"./popover-BvzVgOqp.js";import"./progress-Dkom_LNH.js";import"./select-CgzdedN0.js";import"./separator-DLNkf967.js";import"./sheet-Bq6Tz9es.js";import"./skeleton-CV1PtUMd.js";import"./switch-ssHJkgb5.js";import"./table-2Lq_Rdjg.js";import"./tabs-Baec46jY.js";import"./specialized-toasts-B5CTLsw7.js";import"./toggle-group-C7AVasTd.js";import"./index-XwABQy1c.js";import"./tooltip-gQAcybeF.js";import{c as P0}from"./index-KnJS0CU8.js";import{c as z0}from"./index-CRGxjvZy.js";import{C as B0}from"./header-BR175N6w.js";import{C as F0}from"./preview-JyCKztZt.js";import{C as D0}from"./card-footer-DJWEcu6j.js";import"./index-yBjzXJbu.js";import"./index-Dkb_ZYRU.js";import"./index-yBYjIlgW.js";import"./index-C_Dn7qTj.js";import"./index-DKk_hhWv.js";import"./index-CVWIyhAF.js";import"./index-DuqhnXMO.js";import"./index-fNjTmf9T.js";import"./index-BigR8kad.js";import"./index-CQ2Y0WLn.js";import"./index-xprPBo3d.js";import"./wedge-W0rbne9I.js";import"./utils-CWphn_pW.js";import"./index-D31t_0wX.js";import"./index-Ms1lWa6I.js";import"./index-DZCApzUK.js";import"./index-C-QU4qAu.js";import"./index-BZkNnodj.js";import"./alert-BrNdBT3c.js";import"./times-ynKcNaj_.js";import"./times-circle-gyi9izsJ.js";import"./spinner-D3wGzOGj.js";import"./dots-COnCu59r.js";import"./external-DG4iuQXv.js";import"./index-DZ2oWOeb.js";import"./index-BWkk9jnE.js";import"./checkbox-DBv66za0.js";import"./index-Ck-mJuwY.js";import"./index-wyL_HbYX.js";import"./index-DfuoQG06.js";import"./check-Dqm4PBhQ.js";import"./circle-XVpHZr0H.js";import"./index-Bbf5mMoM.js";import"./circle-check-qG_ejMER.js";import"./award-gyvpM0Ag.js";import"./toast-9BxvrNCO.js";import"./sparkles-B7iQfMYn.js";import"./utils-CZiDjOgf.js";import"./thumbnail-BvzW9a79.js";import"./index-DTUS6EFt.js";import"./warning-CrJl94iH.js";import"./info-BhoZyVIU.js";import"./tag-DwevlwZ8.js";import"./stack-diamond-nJSktlxf.js";import"./tag-pg5LWMpO.js";const Q0=z0("group relative grow rounded overflow-hidden cursor-pointer border-transparent border-[2px] data-[selected=true]:border-foreground-100",{variants:{variant:{default:"",faded:""}},defaultVariants:{variant:"default"}});function s({title:c,images:r,icon:e,totalCount:t,listingCount:k0,price:y0,lastSale:N0,selectable:R0=!0,selected:y,onSelect:q0,variant:N,className:$0,onError:T0,...I0}){return a.jsxs("div",{"data-selected":y,className:P0(Q0({variant:N}),$0),...I0,children:[a.jsx(B0,{title:c,icon:e,selectable:!y&&R0,selected:y,onSelect:q0,variant:N}),a.jsx(F0,{images:r,size:"sm",totalCount:t,listingCount:k0,onError:T0}),a.jsx(D0,{price:y0,lastSale:N0,variant:N})]})}s.__docgenInfo={description:"",methods:[],displayName:"CollectibleCard",props:{title:{required:!0,tsType:{name:"string"},description:""},images:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},icon:{required:!1,tsType:{name:"string"},description:""},totalCount:{required:!1,tsType:{name:"number"},description:""},listingCount:{required:!1,tsType:{name:"number"},description:""},price:{required:!1,tsType:{name:"union",raw:"string | { value: string; image: string } | null",elements:[{name:"string"},{name:"signature",type:"object",raw:"{ value: string; image: string }",signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"image",value:{name:"string",required:!0}}]}},{name:"null"}]},description:""},lastSale:{required:!1,tsType:{name:"union",raw:"string | { value: string; image: string } | null",elements:[{name:"string"},{name:"signature",type:"object",raw:"{ value: string; image: string }",signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"image",value:{name:"string",required:!0}}]}},{name:"null"}]},description:""},selectable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},selected:{required:!1,tsType:{name:"boolean"},description:""},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}},composes:["VariantProps"]};const nt={title:"Modules/Collectibles/Card",component:s,tags:["autodocs"],parameters:{layout:"padded"},args:{images:["https://raw.githubusercontent.com/cartridge-gg/presets/refs/heads/main/configs/loot-survivor/cover.png"],title:"Beasts",selected:!1,onSelect:w0()}},n={render:function(r){const[e,t]=i.useState(!1);return a.jsx("div",{className:"flex gap-2",children:a.jsx(s,{...r,totalCount:1,selected:e,onSelect:()=>t(!e),onClick:e?()=>t(!e):void 0})})}},o={render:function(r){const[e,t]=i.useState(!1);return a.jsx("div",{className:"flex gap-2",children:a.jsx(s,{...r,totalCount:2,selected:e,onSelect:()=>t(!e),onClick:()=>t(!e),price:"$2"})})}},d={render:function(r){const[e,t]=i.useState(!1);return a.jsx("div",{className:"flex gap-2",children:a.jsx(s,{...r,images:["https://api.cartridge.gg/x/arcade-main/torii/static/0x0158160018d590d93528995b340260e65aedd76d28a686e9daa5c4e8fad0c5dd/0x0000000000000000000000000000000000000000000000000000000000000001/image","https://api.cartridge.gg/x/arcade-main/torii/static/0x158160018d590d93528995b340260e65aedd76d28a686e9daa5c4e8fad0c5dd/0x0000000000000000000000000000000000000000000000000000000000000001/image"],totalCount:1,selected:e,onSelect:()=>t(!e),onClick:e?()=>t(!e):void 0})})}},l={render:function(r){const[e,t]=i.useState(!1);return a.jsx("div",{className:"flex gap-2",children:a.jsx(s,{...r,images:["https://api.cartridge.gg/x/arcade-main/torii/static/0x07d8ea58612a5de25f29281199a4fc1f2ce42f0f207f93c3a35280605f3b8e68/0x0000000000000000000000000000000000000000000000000000000000000001/image","https://api.cartridge.gg/x/arcade-main/torii/static/0x7d8ea58612a5de25f29281199a4fc1f2ce42f0f207f93c3a35280605f3b8e68/0x0000000000000000000000000000000000000000000000000000000000000001/image"],totalCount:1,selected:e,onSelect:()=>t(!e),onClick:e?()=>t(!e):void 0})})}},p={render:function(r){const[e,t]=i.useState(!1);return a.jsx("div",{className:"flex gap-2",children:a.jsx(s,{...r,images:["https://api.cartridge.gg/x/arcade-main/torii/static/0x04f5e296c805126637552cf3930e857f380e7c078e8f00696de4fc8545356b1d/0x0000000000000000000000000000000000000000000000000000000000000001/image","https://api.cartridge.gg/x/arcade-main/torii/static/0x4f5e296c805126637552cf3930e857f380e7c078e8f00696de4fc8545356b1d/0x0000000000000000000000000000000000000000000000000000000000000001/image"],totalCount:1,selected:e,onSelect:()=>t(!e),onClick:e?()=>t(!e):void 0})})}},m={render:function(r){const[e,t]=i.useState(!1);return a.jsx("div",{className:"flex gap-2",children:a.jsx(s,{...r,images:["https://api.cartridge.gg/x/arcade-ponziland-nft/torii/static/0x0539f522b29ae9251dbf7443c7a950cf260372e69efab3710a11bf17a9599f1/0x0000000000000000000000000000000000000000000000000000000000000001/image","https://api.cartridge.gg/x/arcade-ponziland-nft/torii/static/0x539f522b29ae9251dbf7443c7a950cf260372e69efab3710a11bf17a9599f1/0x0000000000000000000000000000000000000000000000000000000000000001/image"],totalCount:1,selected:e,onSelect:()=>t(!e),onClick:e?()=>t(!e):void 0})})}},g={render:function(r){const[e,t]=i.useState(!1);return a.jsx("div",{className:"flex gap-2",children:a.jsx(s,{...r,images:["https://api.cartridge.gg/x/arcade-pistols/torii/static/0x2e9c711b1a7e2784570b1bda5082a92606044e836ba392d2b977d280fb74b3c/0x0000000000000000000000000000000000000000000000000000000000000001/image"],totalCount:1,selected:e,onSelect:()=>t(!e),onClick:e?()=>t(!e):void 0})})}},u={render:function(r){const[e,t]=i.useState(!1);return a.jsx("div",{className:"flex gap-2",children:a.jsx(s,{...r,images:["https://api.cartridge.gg/x/arcade-pistols/torii/static/0x07aaa9866750a0db82a54ba8674c38620fa2f967d2fbb31133def48e0527c87f/0x0000000000000000000000000000000000000000000000000000000000000577/image","https://api.cartridge.gg/x/arcade-pistols/torii/static/0x7aaa9866750a0db82a54ba8674c38620fa2f967d2fbb31133def48e0527c87f/0x0000000000000000000000000000000000000000000000000000000000000577/image"],totalCount:1,selected:e,onSelect:()=>t(!e),onClick:e?()=>t(!e):void 0})})}},f={args:{selectable:!1,totalCount:2,listingCount:1}},x={args:{variant:"faded",totalCount:2,listingCount:2,price:"$2",lastSale:"$2"}},S={args:{selected:!0}},b={args:{selected:!1}},C={args:{icon:"",selected:!1,price:"$2",lastSale:"$2",totalCount:2,listingCount:1}},v={args:{selected:!1,price:"$2",lastSale:""}},h={args:{selected:!1,price:"",lastSale:"$2"}},j={args:{selected:!1,price:{value:"100",image:"https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/a3bfe959-50c4-4f89-0aef-b19207d82a00/logo"},lastSale:{value:"90",image:"https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/a3bfe959-50c4-4f89-0aef-b19207d82a00/logo"}}},k={args:{selected:!1,price:null,lastSale:null}};var R,q,$;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: function Render(args) {
    const [selected, setSelected] = useState(false);
    return <div className="flex gap-2">
        <CollectibleCard {...args} totalCount={1} selected={selected} onSelect={() => setSelected(!selected)} onClick={selected ? () => setSelected(!selected) : undefined} />
      </div>;
  }
}`,...($=(q=n.parameters)==null?void 0:q.docs)==null?void 0:$.source}}};var T,I,w;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: function Render(args) {
    const [selected, setSelected] = useState(false);
    return <div className="flex gap-2">
        <CollectibleCard {...args} totalCount={2} selected={selected} onSelect={() => setSelected(!selected)} onClick={() => setSelected(!selected)} price="$2" />
      </div>;
  }
}`,...(w=(I=o.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var P,z,B;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: function Render(args) {
    const [selected, setSelected] = useState(false);
    return <div className="flex gap-2">
        <CollectibleCard {...args} images={["https://api.cartridge.gg/x/arcade-main/torii/static/0x0158160018d590d93528995b340260e65aedd76d28a686e9daa5c4e8fad0c5dd/0x0000000000000000000000000000000000000000000000000000000000000001/image", "https://api.cartridge.gg/x/arcade-main/torii/static/0x158160018d590d93528995b340260e65aedd76d28a686e9daa5c4e8fad0c5dd/0x0000000000000000000000000000000000000000000000000000000000000001/image"]} totalCount={1} selected={selected} onSelect={() => setSelected(!selected)} onClick={selected ? () => setSelected(!selected) : undefined} />
      </div>;
  }
}`,...(B=(z=d.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var F,D,Q;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: function Render(args) {
    const [selected, setSelected] = useState(false);
    return <div className="flex gap-2">
        <CollectibleCard {...args} images={["https://api.cartridge.gg/x/arcade-main/torii/static/0x07d8ea58612a5de25f29281199a4fc1f2ce42f0f207f93c3a35280605f3b8e68/0x0000000000000000000000000000000000000000000000000000000000000001/image", "https://api.cartridge.gg/x/arcade-main/torii/static/0x7d8ea58612a5de25f29281199a4fc1f2ce42f0f207f93c3a35280605f3b8e68/0x0000000000000000000000000000000000000000000000000000000000000001/image"]} totalCount={1} selected={selected} onSelect={() => setSelected(!selected)} onClick={selected ? () => setSelected(!selected) : undefined} />
      </div>;
  }
}`,...(Q=(D=l.parameters)==null?void 0:D.docs)==null?void 0:Q.source}}};var A,L,U;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: function Render(args) {
    const [selected, setSelected] = useState(false);
    return <div className="flex gap-2">
        <CollectibleCard {...args} images={["https://api.cartridge.gg/x/arcade-main/torii/static/0x04f5e296c805126637552cf3930e857f380e7c078e8f00696de4fc8545356b1d/0x0000000000000000000000000000000000000000000000000000000000000001/image", "https://api.cartridge.gg/x/arcade-main/torii/static/0x4f5e296c805126637552cf3930e857f380e7c078e8f00696de4fc8545356b1d/0x0000000000000000000000000000000000000000000000000000000000000001/image"]} totalCount={1} selected={selected} onSelect={() => setSelected(!selected)} onClick={selected ? () => setSelected(!selected) : undefined} />
      </div>;
  }
}`,...(U=(L=p.parameters)==null?void 0:L.docs)==null?void 0:U.source}}};var V,Y,_;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: function Render(args) {
    const [selected, setSelected] = useState(false);
    return <div className="flex gap-2">
        <CollectibleCard {...args} images={["https://api.cartridge.gg/x/arcade-ponziland-nft/torii/static/0x0539f522b29ae9251dbf7443c7a950cf260372e69efab3710a11bf17a9599f1/0x0000000000000000000000000000000000000000000000000000000000000001/image", "https://api.cartridge.gg/x/arcade-ponziland-nft/torii/static/0x539f522b29ae9251dbf7443c7a950cf260372e69efab3710a11bf17a9599f1/0x0000000000000000000000000000000000000000000000000000000000000001/image"]} totalCount={1} selected={selected} onSelect={() => setSelected(!selected)} onClick={selected ? () => setSelected(!selected) : undefined} />
      </div>;
  }
}`,...(_=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:_.source}}};var E,G,K;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: function Render(args) {
    const [selected, setSelected] = useState(false);
    return <div className="flex gap-2">
        <CollectibleCard {...args} images={["https://api.cartridge.gg/x/arcade-pistols/torii/static/0x2e9c711b1a7e2784570b1bda5082a92606044e836ba392d2b977d280fb74b3c/0x0000000000000000000000000000000000000000000000000000000000000001/image"]} totalCount={1} selected={selected} onSelect={() => setSelected(!selected)} onClick={selected ? () => setSelected(!selected) : undefined} />
      </div>;
  }
}`,...(K=(G=g.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var H,M,O;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: function Render(args) {
    const [selected, setSelected] = useState(false);
    return <div className="flex gap-2">
        <CollectibleCard {...args} images={["https://api.cartridge.gg/x/arcade-pistols/torii/static/0x07aaa9866750a0db82a54ba8674c38620fa2f967d2fbb31133def48e0527c87f/0x0000000000000000000000000000000000000000000000000000000000000577/image", "https://api.cartridge.gg/x/arcade-pistols/torii/static/0x7aaa9866750a0db82a54ba8674c38620fa2f967d2fbb31133def48e0527c87f/0x0000000000000000000000000000000000000000000000000000000000000577/image"]} totalCount={1} selected={selected} onSelect={() => setSelected(!selected)} onClick={selected ? () => setSelected(!selected) : undefined} />
      </div>;
  }
}`,...(O=(M=u.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var J,W,X;f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    selectable: false,
    totalCount: 2,
    listingCount: 1
  }
}`,...(X=(W=f.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Z,e0,t0;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    variant: "faded",
    totalCount: 2,
    listingCount: 2,
    price: "$2",
    lastSale: "$2"
  }
}`,...(t0=(e0=x.parameters)==null?void 0:e0.docs)==null?void 0:t0.source}}};var a0,r0,s0;S.parameters={...S.parameters,docs:{...(a0=S.parameters)==null?void 0:a0.docs,source:{originalSource:`{
  args: {
    selected: true
  }
}`,...(s0=(r0=S.parameters)==null?void 0:r0.docs)==null?void 0:s0.source}}};var c0,i0,n0;b.parameters={...b.parameters,docs:{...(c0=b.parameters)==null?void 0:c0.docs,source:{originalSource:`{
  args: {
    selected: false
  }
}`,...(n0=(i0=b.parameters)==null?void 0:i0.docs)==null?void 0:n0.source}}};var o0,d0,l0;C.parameters={...C.parameters,docs:{...(o0=C.parameters)==null?void 0:o0.docs,source:{originalSource:`{
  args: {
    icon: "",
    selected: false,
    price: "$2",
    lastSale: "$2",
    totalCount: 2,
    listingCount: 1
  }
}`,...(l0=(d0=C.parameters)==null?void 0:d0.docs)==null?void 0:l0.source}}};var p0,m0,g0;v.parameters={...v.parameters,docs:{...(p0=v.parameters)==null?void 0:p0.docs,source:{originalSource:`{
  args: {
    selected: false,
    price: "$2",
    lastSale: ""
  }
}`,...(g0=(m0=v.parameters)==null?void 0:m0.docs)==null?void 0:g0.source}}};var u0,f0,x0;h.parameters={...h.parameters,docs:{...(u0=h.parameters)==null?void 0:u0.docs,source:{originalSource:`{
  args: {
    selected: false,
    price: "",
    lastSale: "$2"
  }
}`,...(x0=(f0=h.parameters)==null?void 0:f0.docs)==null?void 0:x0.source}}};var S0,b0,C0;j.parameters={...j.parameters,docs:{...(S0=j.parameters)==null?void 0:S0.docs,source:{originalSource:`{
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
}`,...(C0=(b0=j.parameters)==null?void 0:b0.docs)==null?void 0:C0.source}}};var v0,h0,j0;k.parameters={...k.parameters,docs:{...(v0=k.parameters)==null?void 0:v0.docs,source:{originalSource:`{
  args: {
    selected: false,
    price: null,
    lastSale: null
  }
}`,...(j0=(h0=k.parameters)==null?void 0:h0.docs)==null?void 0:j0.source}}};const ot=["Default","Selectable","Beast","Karat","GoldenToken","Bloberts","Duelists","Fallback","Unselectable","Faded","Selected","Unselected","Icon","Price","LastSale","PriceLastSale","FooterForced"];export{d as Beast,m as Bloberts,n as Default,g as Duelists,x as Faded,u as Fallback,k as FooterForced,p as GoldenToken,C as Icon,l as Karat,h as LastSale,v as Price,j as PriceLastSale,o as Selectable,S as Selected,f as Unselectable,b as Unselected,ot as __namedExportsOrder,nt as default};
