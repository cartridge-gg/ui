import{M as J}from"./specialized-toasts-B8ZJk_GV.js";import"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";import"./index-BlmOqGMO.js";import"./index-CRGxjvZy.js";import"./index-KnJS0CU8.js";import"./toast-mJ0Bx_GT.js";import"./index-ZHEgE2XS.js";import"./index-DuqhnXMO.js";import"./index-fNjTmf9T.js";import"./times-zfpenlOA.js";import"./utils-GTnaulzv.js";import"./index-D4r18U3z.js";import"./sparkles-CY9lzZpH.js";import"./sparkles-draft-sDjrI9Uu.js";import"./transaction-t4mJhGCb.js";import"./starknet-CX4nG1WJ.js";import"./spinner-BCFkRInS.js";import"./check-BknbCD27.js";import"./image-CYqnVwI0.js";import"./index-DTUS6EFt.js";import"./context-D8ftX2uM.js";import"./index-Dkb_ZYRU.js";import"./index-BYUKtP1h.js";import"./index-C_Dn7qTj.js";import"./index-BQxh6BgF.js";import"./index-CVWIyhAF.js";import"./index-BbW-7v3v.js";import"./index-DdDw_O67.js";import"./wedge-Ek6y42Ws.js";import"./index-B7ENhYdy.js";import"./index-BylD-epk.js";import"./index-DZCApzUK.js";import"./index-CJGASTBR.js";import"./index-CYmZMVXJ.js";import"./alert-HkMSTgu9.js";import"./badge-CF9VCaa2.js";import"./breadcrumb-V3TW3CaT.js";import"./dots-CqQy5XBj.js";import"./card-CHJmWtwN.js";import"./checkbox-BJGOHg_b.js";import"./index-DZ2oWOeb.js";import"./index-DaMGPy2X.js";import"./checkbox-BNhnVxLV.js";import"./drawer-CB1qWX_Q.js";import"./dropdown-menu-Bf3pfD8n.js";import"./index-BV9D_7a1.js";import"./index-z8P03atw.js";import"./index-DoUPdNCX.js";import"./circle-Ddb5-e2i.js";import"./alert-DG-IKYwr.js";import"./radio-group-WlSpQHWm.js";import"./menubar-eE93DyoQ.js";import"./popover-DNr9wWs8.js";import"./progress-Dkom_LNH.js";import"./select-COP56eT4.js";import"./index-COzOtNfS.js";import"./circle-check-B84UAr7O.js";import"./separator-DLNkf967.js";import"./sheet-BHnC42pu.js";import"./skeleton-CV1PtUMd.js";import"./switch-CWQaiJ0M.js";import"./table-2Lq_Rdjg.js";import"./tabs-pHV4z6kt.js";import"./toggle-group-Bz_GEFe3.js";import"./utils-CzDHQuSw.js";import"./index-Cd0zht5T.js";import"./tooltip-CEc4qSmp.js";import"./times-circle-BPxv1pFA.js";const F0={title:"Primitives/Toast/Marketplace Toast",component:J,parameters:{layout:"centered",backgrounds:{default:"dark",values:[{name:"dark",value:"#353535"},{name:"light",value:"#ffffff"}]}},argTypes:{title:{control:"text"},collectionName:{control:"text"},itemNames:{array:"text"},itemImages:{array:"text"},color:{control:"color"},progress:{control:{type:"range",min:0,max:100,step:1}}}},e={args:{title:"Purchased",collectionName:"Beasts",itemNames:["Beast #111"],itemImages:["https://api.cartridge.gg/x/arcade-main/torii/static/0x046da8955829adf2bda310099a0063451923f02e648cf25a1203aac6335cf0e4/0x00000000000000000000000000000000000000000000000000000000000105de/image"],preset:"loot-survivor"}},t={args:{title:"Purchased",collectionName:"Beasts",itemNames:["Beast #111","Beast #222","Beast #333"],itemImages:["https://api.cartridge.gg/x/arcade-main/torii/static/0x046da8955829adf2bda310099a0063451923f02e648cf25a1203aac6335cf0e4/0x00000000000000000000000000000000000000000000000000000000000105de/image"],preset:"loot-survivor"}},a={args:{title:"Sent",collectionName:"Beasts",itemNames:["Beast #111"],itemImages:["https://api.cartridge.gg/x/arcade-main/torii/static/0x046da8955829adf2bda310099a0063451923f02e648cf25a1203aac6335cf0e4/0x00000000000000000000000000000000000000000000000000000000000105de/image"],preset:"loot-survivor"}},r={args:{title:"Sent",collectionName:"Beasts",itemNames:["Beast #111","Beast #222","Beast #333"],itemImages:["https://api.cartridge.gg/x/arcade-main/torii/static/0x046da8955829adf2bda310099a0063451923f02e648cf25a1203aac6335cf0e4/0x00000000000000000000000000000000000000000000000000000000000105de/image"],preset:"loot-survivor"}},s={args:{title:"Sold",collectionName:"Jokers of Neon: Cards",itemNames:["Jack of Diamonds #222"],itemImages:["https://api.cartridge.gg/x/arcade-main/torii/static/0x04ddbbab7aa237c1b73c931b6f836ded6036f5e12d4898fccdcde81d494f7956/0x0000000000000000000000000000000000000000000000000000000000000953/image?width=300&height=300"],preset:"jokers-of-neon"}},o={args:{title:"Purchased",collectionName:"Eternum Season Pass",itemNames:["Eternum Season Pass"],itemImages:["https://static.cartridge.gg/presets/eternum/icon.svg"]}},i={args:{title:"Sent",collectionName:"LORDS",itemNames:["500 LORDS"],itemImages:["https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/a3bfe959-50c4-4f89-0aef-b19207d82a00/logo"]}};var m,c,n;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    title: "Purchased",
    collectionName: "Beasts",
    itemNames: ["Beast #111"],
    itemImages: ["https://api.cartridge.gg/x/arcade-main/torii/static/0x046da8955829adf2bda310099a0063451923f02e648cf25a1203aac6335cf0e4/0x00000000000000000000000000000000000000000000000000000000000105de/image"],
    preset: "loot-survivor"
  }
}`,...(n=(c=e.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};var p,d,g;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    title: "Purchased",
    collectionName: "Beasts",
    itemNames: ["Beast #111", "Beast #222", "Beast #333"],
    itemImages: ["https://api.cartridge.gg/x/arcade-main/torii/static/0x046da8955829adf2bda310099a0063451923f02e648cf25a1203aac6335cf0e4/0x00000000000000000000000000000000000000000000000000000000000105de/image"],
    preset: "loot-survivor"
  }
}`,...(g=(d=t.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var l,f,u;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    title: "Sent",
    collectionName: "Beasts",
    itemNames: ["Beast #111"],
    itemImages: ["https://api.cartridge.gg/x/arcade-main/torii/static/0x046da8955829adf2bda310099a0063451923f02e648cf25a1203aac6335cf0e4/0x00000000000000000000000000000000000000000000000000000000000105de/image"],
    preset: "loot-survivor"
  }
}`,...(u=(f=a.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};var x,h,B;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    title: "Sent",
    collectionName: "Beasts",
    itemNames: ["Beast #111", "Beast #222", "Beast #333"],
    itemImages: ["https://api.cartridge.gg/x/arcade-main/torii/static/0x046da8955829adf2bda310099a0063451923f02e648cf25a1203aac6335cf0e4/0x00000000000000000000000000000000000000000000000000000000000105de/image"],
    preset: "loot-survivor"
  }
}`,...(B=(h=r.parameters)==null?void 0:h.docs)==null?void 0:B.source}}};var N,S,v;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    title: "Sold",
    collectionName: "Jokers of Neon: Cards",
    itemNames: ["Jack of Diamonds #222"],
    itemImages: ["https://api.cartridge.gg/x/arcade-main/torii/static/0x04ddbbab7aa237c1b73c931b6f836ded6036f5e12d4898fccdcde81d494f7956/0x0000000000000000000000000000000000000000000000000000000000000953/image?width=300&height=300"],
    preset: "jokers-of-neon"
  }
}`,...(v=(S=s.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var b,P,I;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    title: "Purchased",
    collectionName: "Eternum Season Pass",
    itemNames: ["Eternum Season Pass"],
    itemImages: ["https://static.cartridge.gg/presets/eternum/icon.svg"]
  }
}`,...(I=(P=o.parameters)==null?void 0:P.docs)==null?void 0:I.source}}};var k,D,y;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    title: "Sent",
    collectionName: "LORDS",
    itemNames: ["500 LORDS"],
    itemImages: ["https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/a3bfe959-50c4-4f89-0aef-b19207d82a00/logo"]
  }
}`,...(y=(D=i.parameters)==null?void 0:D.docs)==null?void 0:y.source}}};const G0=["PurchasedBeast","PurchasedBeasts","SentBeast","SentBeasts","SoldJoker","PurchasedStarterPack","SentLords"];export{e as PurchasedBeast,t as PurchasedBeasts,o as PurchasedStarterPack,a as SentBeast,r as SentBeasts,i as SentLords,s as SoldJoker,G0 as __namedExportsOrder,F0 as default};
