import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{r as i}from"./index-BlmOqGMO.js";import{t as I}from"./index-ZHEgE2XS.js";import{fn as I0}from"./index-BgJgh-x_.js";import"./context-CDbX8kD3.js";import"./alert-HkMSTgu9.js";import"./badge-CF9VCaa2.js";import"./breadcrumb-V3TW3CaT.js";import"./index-CYmZMVXJ.js";import"./card-CHJmWtwN.js";import"./checkbox-BJGOHg_b.js";import"./drawer-CB1qWX_Q.js";import"./dropdown-menu-Bf3pfD8n.js";import"./radio-group-WlSpQHWm.js";import"./menubar-eE93DyoQ.js";import"./popover-DNr9wWs8.js";import"./progress-Dkom_LNH.js";import"./select-COP56eT4.js";import"./separator-DLNkf967.js";import"./sheet-BHnC42pu.js";import"./skeleton-CV1PtUMd.js";import"./switch-CWQaiJ0M.js";import"./table-2Lq_Rdjg.js";import"./tabs-pHV4z6kt.js";import"./toggle-group-Bz_GEFe3.js";import"./index-Cd0zht5T.js";import"./tooltip-CEc4qSmp.js";import{C as h0}from"./card-De28-22X.js";import"./index-yBjzXJbu.js";import"./index-DuqhnXMO.js";import"./index-fNjTmf9T.js";import"./index-KnJS0CU8.js";import"./index-Dkb_ZYRU.js";import"./index-BYUKtP1h.js";import"./index-C_Dn7qTj.js";import"./index-BQxh6BgF.js";import"./index-CVWIyhAF.js";import"./index-BbW-7v3v.js";import"./index-DdDw_O67.js";import"./wedge-Ek6y42Ws.js";import"./utils-GTnaulzv.js";import"./index-CRGxjvZy.js";import"./index-B7ENhYdy.js";import"./index-BylD-epk.js";import"./index-DZCApzUK.js";import"./index-CJGASTBR.js";import"./alert-DG-IKYwr.js";import"./times-zfpenlOA.js";import"./times-circle-BPxv1pFA.js";import"./spinner-BCFkRInS.js";import"./dots-CqQy5XBj.js";import"./index-DZ2oWOeb.js";import"./index-DaMGPy2X.js";import"./checkbox-BNhnVxLV.js";import"./index-BV9D_7a1.js";import"./index-z8P03atw.js";import"./index-DoUPdNCX.js";import"./check-BknbCD27.js";import"./circle-Ddb5-e2i.js";import"./index-COzOtNfS.js";import"./circle-check-B84UAr7O.js";import"./utils-CzDHQuSw.js";import"./header-ChArpP8G.js";import"./selected-fKHo6o3V.js";import"./preview-C581CniI.js";import"./image-DVJtesZi.js";import"./index-DTUS6EFt.js";import"./footer-CiBOwSAd.js";import"./tag-ChT-u-LP.js";import"./thumbnail-BYLXA86H.js";import"./warning-CVvTL8z7.js";import"./info-BgozbEzj.js";import"./tag-X-37K2tT.js";import"./card-footer-QS5jwhVU.js";function s({title:c,images:a,backgroundColor:e,totalCount:t,listingCount:g0,selectable:u0=!0,selected:b0,onSelect:x0,variant:C0,className:S0,onError:v0,...k0}){return r.jsx(h0,{title:c,images:a,icon:void 0,backgroundColor:e,totalCount:t&&t>1?t:void 0,listingCount:g0,price:void 0,lastSale:void 0,selected:b0,selectable:u0,onSelect:x0,variant:C0,className:S0,onError:v0,...k0})}s.__docgenInfo={description:"",methods:[],displayName:"InventoryItemCard",props:{title:{required:!0,tsType:{name:"string"},description:""},images:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},backgroundColor:{required:!1,tsType:{name:"string"},description:""},totalCount:{required:!1,tsType:{name:"number"},description:""},listingCount:{required:!1,tsType:{name:"number"},description:""},selectable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},selected:{required:!1,tsType:{name:"boolean"},description:""},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}},composes:["VariantProps"]};const Qe={title:"Modules/Collectibles/Inventory Item Card",component:s,tags:["autodocs"],parameters:{layout:"padded"},args:{images:["https://api.cartridge.gg/x/arcade-main/torii/static/0x046da8955829adf2bda310099a0063451923f02e648cf25a1203aac6335cf0e4/0x00000000000000000000000000000000000000000000000000000000000105de/image"],title:'"Grim Sun" Hippogriff',listingCount:1,onSelect:I0(),onClick:void 0}},o={render:function(a){const[e,t]=i.useState(!1);return r.jsx("div",{className:"flex gap-2",children:r.jsx(s,{...a,selectable:!0,selected:e,onSelect:()=>t(!e),onClick:e?()=>t(!e):()=>I.success("Clicked")})})}},n={render:function(a){const[e,t]=i.useState(!1);return r.jsx("div",{className:"flex gap-2",children:r.jsx(s,{...a,images:["https://api.cartridge.gg/x/arcade-main/torii/static/0x04f5e296c805126637552cf3930e857f380e7c078e8f00696de4fc8545356b1d/0x0000000000000000000000000000000000000000000000000000000000000001/image","https://api.cartridge.gg/x/arcade-main/torii/static/0x4f5e296c805126637552cf3930e857f380e7c078e8f00696de4fc8545356b1d/0x0000000000000000000000000000000000000000000000000000000000000001/image"],title:"Golden Token #77",selectable:!0,selected:e,onSelect:()=>t(!e),onClick:e?()=>t(!e):void 0})})}},d={render:function(a){const[e,t]=i.useState(!1);return r.jsx("div",{className:"flex gap-2",children:r.jsx(s,{...a,images:["https://api.cartridge.gg/x/arcade-main/torii/static/0x07d8ea58612a5de25f29281199a4fc1f2ce42f0f207f93c3a35280605f3b8e68/0x0000000000000000000000000000000000000000000000000000000000000001/image","https://api.cartridge.gg/x/arcade-main/torii/static/0x7d8ea58612a5de25f29281199a4fc1f2ce42f0f207f93c3a35280605f3b8e68/0x0000000000000000000000000000000000000000000000000000000000000001/image"],title:"Karat #123",selectable:!0,selected:e,onSelect:()=>t(!e),onClick:e?()=>t(!e):void 0})})}},l={render:function(a){const[e,t]=i.useState(!1);return r.jsx("div",{className:"flex gap-2",children:r.jsx(s,{...a,images:["https://api.cartridge.gg/x/arcade-main/torii/static/0x00539f522b29ae9251dbf7443c7a950cf260372e69efab3710a11bf17a9599f1/0x0000000000000000000000000000000000000000000000000000000000000001/image","https://api.cartridge.gg/x/arcade-main/torii/static/0x539f522b29ae9251dbf7443c7a950cf260372e69efab3710a11bf17a9599f1/0x0000000000000000000000000000000000000000000000000000000000000001/image"],title:"Blobert #123",selectable:!0,selected:e,onSelect:()=>t(!e),onClick:e?()=>t(!e):void 0,backgroundColor:"#C67927"})})}},m={render:function(a){const[e,t]=i.useState(!1);return r.jsx("div",{className:"flex gap-2",children:r.jsx(s,{...a,images:["https://api.cartridge.gg/x/arcade-pistols/torii/static/0x07aaa9866750a0db82a54ba8674c38620fa2f967d2fbb31133def48e0527c87f/0x0000000000000000000000000000000000000000000000000000000000000577/image","https://api.cartridge.gg/x/arcade-pistols/torii/static/0x7aaa9866750a0db82a54ba8674c38620fa2f967d2fbb31133def48e0527c87f/0x0000000000000000000000000000000000000000000000000000000000000577/image"],title:"Pistols at Dawn Duelist #1399",selectable:!0,selected:e,onSelect:()=>t(!e),onClick:e?()=>t(!e):void 0,backgroundColor:"#57493e"})})}},p={render:function(a){const[e,t]=i.useState(!1);return r.jsx("div",{className:"flex gap-2",children:r.jsx(s,{...a,images:["https://api.cartridge.gg/x/arcade-main/torii/static/0x07ae27a31bb6526e3de9cf02f081f6ce0615ac12a6d7b85ee58b8ad7947a2809/0x0000000000000000000000000000000000000000000000000000000000001f40/image","https://api.cartridge.gg/x/arcade-main/torii/static/0x7ae27a31bb6526e3de9cf02f081f6ce0615ac12a6d7b85ee58b8ad7947a2809/0x0000000000000000000000000000000000000000000000000000000000001f40/image"],title:"Shmasmessel",selectable:!0,selected:e,onSelect:()=>t(!e),onClick:e?()=>t(!e):void 0,backgroundColor:"#ffffff"})})}},f={render:function(a){return r.jsx("div",{className:"flex gap-2",children:r.jsx(s,{...a,images:["https://raw2.seadn.io/optimism/0x0e55e1913c50e015e0f60386ff56a4bfb00d7110/448cb89b7c9c6673de179a7d5bef21/b8448cb89b7c9c6673de179a7d5bef21.svg"],title:"Rolls Royce from Mob Town",selectable:!1,selected:!1,onSelect:void 0,onClick:()=>I.success("Clicked"),backgroundColor:"#97ADCC",totalCount:1})})}},g={render:function(a){return r.jsx("div",{className:"flex gap-2",children:r.jsx(s,{...a,images:["https://raw2.seadn.io/optimism/0x0e55e1913c50e015e0f60386ff56a4bfb00d7110/448cb89b7c9c6673de179a7d5bef21/b8448cb89b7c9c6673de179a7d5bef21.svg"],title:"Rolls Royce from Mob Town",selectable:!1,selected:!1,onSelect:void 0,onClick:()=>I.success("Clicked"),backgroundColor:"#97ADCC",totalCount:3})})}},u={render:function(a){return r.jsx("div",{className:"flex gap-2",children:r.jsx(s,{...a,listingCount:0,selectable:!1,selected:!1,onSelect:void 0,onClick:()=>I.success("Clicked")})})}},b={args:{selectable:!0,selected:!0,listingCount:0}},x={render:function(a){const[e,t]=i.useState(!1);return r.jsx("div",{className:"flex gap-2",children:r.jsx(s,{...a,listingCount:0,selectable:!0,selected:e,onSelect:()=>t(!e),onClick:e?()=>t(!e):void 0})})}},C={args:{selectable:!1,selected:!1,listingCount:0}},S={args:{images:["/this_image_does_not_exist.png"],selectable:!1}},v={args:{images:["/this_image_does_not_exist.png","https://static.cartridge.gg/presets/loot-survivor/icon.png"],selectable:!1}},k={args:{images:["https://ipfs.io/ipfs/QmWqqT4awbuzaHM7e5EBf9GGzNDQRz4WauUDSctVe9ZeBW"]}};var h,y,R;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: function Render(args: InventoryItemCardProps) {
    const [selected, setSelected] = useState(false);
    return <div className="flex gap-2">
        <InventoryItemCard {...args} selectable={true} selected={selected} onSelect={() => setSelected(!selected)} onClick={selected ? () => setSelected(!selected) : () => toast.success("Clicked")} />
      </div>;
  }
}`,...(R=(y=o.parameters)==null?void 0:y.docs)==null?void 0:R.source}}};var j,N,_;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: function Render(args: InventoryItemCardProps) {
    const [selected, setSelected] = useState(false);
    return <div className="flex gap-2">
        <InventoryItemCard {...args} images={["https://api.cartridge.gg/x/arcade-main/torii/static/0x04f5e296c805126637552cf3930e857f380e7c078e8f00696de4fc8545356b1d/0x0000000000000000000000000000000000000000000000000000000000000001/image", "https://api.cartridge.gg/x/arcade-main/torii/static/0x4f5e296c805126637552cf3930e857f380e7c078e8f00696de4fc8545356b1d/0x0000000000000000000000000000000000000000000000000000000000000001/image"]} title="Golden Token #77" selectable={true} selected={selected} onSelect={() => setSelected(!selected)} onClick={selected ? () => setSelected(!selected) : undefined} />
      </div>;
  }
}`,...(_=(N=n.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var T,D,w;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: function Render(args: InventoryItemCardProps) {
    const [selected, setSelected] = useState(false);
    return <div className="flex gap-2">
        <InventoryItemCard {...args} images={["https://api.cartridge.gg/x/arcade-main/torii/static/0x07d8ea58612a5de25f29281199a4fc1f2ce42f0f207f93c3a35280605f3b8e68/0x0000000000000000000000000000000000000000000000000000000000000001/image", "https://api.cartridge.gg/x/arcade-main/torii/static/0x7d8ea58612a5de25f29281199a4fc1f2ce42f0f207f93c3a35280605f3b8e68/0x0000000000000000000000000000000000000000000000000000000000000001/image"]} title="Karat #123" selectable={true} selected={selected} onSelect={() => setSelected(!selected)} onClick={selected ? () => setSelected(!selected) : undefined} />
      </div>;
  }
}`,...(w=(D=d.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var B,q,G;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: function Render(args: InventoryItemCardProps) {
    const [selected, setSelected] = useState(false);
    return <div className="flex gap-2">
        <InventoryItemCard {...args} images={["https://api.cartridge.gg/x/arcade-main/torii/static/0x00539f522b29ae9251dbf7443c7a950cf260372e69efab3710a11bf17a9599f1/0x0000000000000000000000000000000000000000000000000000000000000001/image", "https://api.cartridge.gg/x/arcade-main/torii/static/0x539f522b29ae9251dbf7443c7a950cf260372e69efab3710a11bf17a9599f1/0x0000000000000000000000000000000000000000000000000000000000000001/image"]} title="Blobert #123" selectable={true} selected={selected} onSelect={() => setSelected(!selected)} onClick={selected ? () => setSelected(!selected) : undefined} backgroundColor="#C67927" />
      </div>;
  }
}`,...(G=(q=l.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var P,W,U;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: function Render(args: InventoryItemCardProps) {
    const [selected, setSelected] = useState(false);
    return <div className="flex gap-2">
        <InventoryItemCard {...args} images={["https://api.cartridge.gg/x/arcade-pistols/torii/static/0x07aaa9866750a0db82a54ba8674c38620fa2f967d2fbb31133def48e0527c87f/0x0000000000000000000000000000000000000000000000000000000000000577/image", "https://api.cartridge.gg/x/arcade-pistols/torii/static/0x7aaa9866750a0db82a54ba8674c38620fa2f967d2fbb31133def48e0527c87f/0x0000000000000000000000000000000000000000000000000000000000000577/image"]} title="Pistols at Dawn Duelist #1399" selectable={true} selected={selected} onSelect={() => setSelected(!selected)} onClick={selected ? () => setSelected(!selected) : undefined} backgroundColor="#57493e" />
      </div>;
  }
}`,...(U=(W=m.parameters)==null?void 0:W.docs)==null?void 0:U.source}}};var M,z,A;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: function Render(args: InventoryItemCardProps) {
    const [selected, setSelected] = useState(false);
    return <div className="flex gap-2">
        <InventoryItemCard {...args} images={["https://api.cartridge.gg/x/arcade-main/torii/static/0x07ae27a31bb6526e3de9cf02f081f6ce0615ac12a6d7b85ee58b8ad7947a2809/0x0000000000000000000000000000000000000000000000000000000000001f40/image", "https://api.cartridge.gg/x/arcade-main/torii/static/0x7ae27a31bb6526e3de9cf02f081f6ce0615ac12a6d7b85ee58b8ad7947a2809/0x0000000000000000000000000000000000000000000000000000000000001f40/image"]} title="Shmasmessel" selectable={true} selected={selected} onSelect={() => setSelected(!selected)} onClick={selected ? () => setSelected(!selected) : undefined} backgroundColor="#ffffff" />
      </div>;
  }
}`,...(A=(z=p.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var E,F,K;f.parameters={...f.parameters,docs:{...(E=f.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: function Render(args: InventoryItemCardProps) {
    return <div className="flex gap-2">
        <InventoryItemCard {...args} images={["https://raw2.seadn.io/optimism/0x0e55e1913c50e015e0f60386ff56a4bfb00d7110/448cb89b7c9c6673de179a7d5bef21/b8448cb89b7c9c6673de179a7d5bef21.svg"]} title="Rolls Royce from Mob Town" selectable={false} selected={false} onSelect={undefined} onClick={() => toast.success("Clicked")} backgroundColor="#97ADCC" totalCount={1} />
      </div>;
  }
}`,...(K=(F=f.parameters)==null?void 0:F.docs)==null?void 0:K.source}}};var Q,V,H;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: function Render(args: InventoryItemCardProps) {
    return <div className="flex gap-2">
        <InventoryItemCard {...args} images={["https://raw2.seadn.io/optimism/0x0e55e1913c50e015e0f60386ff56a4bfb00d7110/448cb89b7c9c6673de179a7d5bef21/b8448cb89b7c9c6673de179a7d5bef21.svg"]} title="Rolls Royce from Mob Town" selectable={false} selected={false} onSelect={undefined} onClick={() => toast.success("Clicked")} backgroundColor="#97ADCC" totalCount={3} />
      </div>;
  }
}`,...(H=(V=g.parameters)==null?void 0:V.docs)==null?void 0:H.source}}};var Z,O,J;u.parameters={...u.parameters,docs:{...(Z=u.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: function Render(args: InventoryItemCardProps) {
    return <div className="flex gap-2">
        <InventoryItemCard {...args} listingCount={0} selectable={false} selected={false} onSelect={undefined} onClick={() => toast.success("Clicked")} />
      </div>;
  }
}`,...(J=(O=u.parameters)==null?void 0:O.docs)==null?void 0:J.source}}};var L,X,Y;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    selectable: true,
    selected: true,
    listingCount: 0
  }
}`,...(Y=(X=b.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var $,e0,t0;x.parameters={...x.parameters,docs:{...($=x.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: function Render(args: InventoryItemCardProps) {
    const [selected, setSelected] = useState(false);
    return <div className="flex gap-2">
        <InventoryItemCard {...args} listingCount={0} selectable={true} selected={selected} onSelect={() => setSelected(!selected)} onClick={selected ? () => setSelected(!selected) : undefined} />
      </div>;
  }
}`,...(t0=(e0=x.parameters)==null?void 0:e0.docs)==null?void 0:t0.source}}};var a0,r0,s0;C.parameters={...C.parameters,docs:{...(a0=C.parameters)==null?void 0:a0.docs,source:{originalSource:`{
  args: {
    selectable: false,
    selected: false,
    listingCount: 0
  }
}`,...(s0=(r0=C.parameters)==null?void 0:r0.docs)==null?void 0:s0.source}}};var c0,i0,o0;S.parameters={...S.parameters,docs:{...(c0=S.parameters)==null?void 0:c0.docs,source:{originalSource:`{
  args: {
    images: ["/this_image_does_not_exist.png"],
    selectable: false
  }
}`,...(o0=(i0=S.parameters)==null?void 0:i0.docs)==null?void 0:o0.source}}};var n0,d0,l0;v.parameters={...v.parameters,docs:{...(n0=v.parameters)==null?void 0:n0.docs,source:{originalSource:`{
  args: {
    images: ["/this_image_does_not_exist.png", "https://static.cartridge.gg/presets/loot-survivor/icon.png"],
    selectable: false
  }
}`,...(l0=(d0=v.parameters)==null?void 0:d0.docs)==null?void 0:l0.source}}};var m0,p0,f0;k.parameters={...k.parameters,docs:{...(m0=k.parameters)==null?void 0:m0.docs,source:{originalSource:`{
  args: {
    images: ["https://ipfs.io/ipfs/QmWqqT4awbuzaHM7e5EBf9GGzNDQRz4WauUDSctVe9ZeBW"]
  }
}`,...(f0=(p0=k.parameters)==null?void 0:p0.docs)==null?void 0:f0.source}}};const Ve=["Beast","GoldenToken","Karat","Blobert","Duelist","Realm","DopeWarsGearSingle","DopeWarsGearMultiple","Clickable","Selected","Selectable","Unselectable","BadUrl","BadUrlWithFallback","IpfsUnpinnedFile"];export{S as BadUrl,v as BadUrlWithFallback,o as Beast,l as Blobert,u as Clickable,g as DopeWarsGearMultiple,f as DopeWarsGearSingle,m as Duelist,n as GoldenToken,k as IpfsUnpinnedFile,d as Karat,p as Realm,x as Selectable,b as Selected,C as Unselectable,Ve as __namedExportsOrder,Qe as default};
