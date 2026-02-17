import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{S as y,a as f}from"./select-COP56eT4.js";import{r as v}from"./index-BlmOqGMO.js";import{T as k,a as h}from"./row-fLUJmEpi.js";import{c as q}from"./index-KnJS0CU8.js";import"./index-yBjzXJbu.js";import"./index-DuqhnXMO.js";import"./index-fNjTmf9T.js";import"./index-BQxh6BgF.js";import"./index-BYUKtP1h.js";import"./index-Dkb_ZYRU.js";import"./index-C_Dn7qTj.js";import"./index-BylD-epk.js";import"./index-CVWIyhAF.js";import"./index-DZCApzUK.js";import"./index-CJGASTBR.js";import"./index-DdDw_O67.js";import"./index-z8P03atw.js";import"./index-DaMGPy2X.js";import"./index-DZ2oWOeb.js";import"./index-COzOtNfS.js";import"./circle-check-B84UAr7O.js";import"./utils-GTnaulzv.js";import"./index-CRGxjvZy.js";import"./wedge-Ek6y42Ws.js";import"./context-CDbX8kD3.js";import"./index-BbW-7v3v.js";import"./index-B7ENhYdy.js";import"./index-CYmZMVXJ.js";import"./spinner-BCFkRInS.js";import"./alert-HkMSTgu9.js";import"./badge-CF9VCaa2.js";import"./breadcrumb-V3TW3CaT.js";import"./dots-CqQy5XBj.js";import"./card-CHJmWtwN.js";import"./checkbox-BJGOHg_b.js";import"./checkbox-BNhnVxLV.js";import"./drawer-CB1qWX_Q.js";import"./dropdown-menu-Bf3pfD8n.js";import"./index-BV9D_7a1.js";import"./index-DoUPdNCX.js";import"./check-BknbCD27.js";import"./circle-Ddb5-e2i.js";import"./alert-DG-IKYwr.js";import"./radio-group-WlSpQHWm.js";import"./menubar-eE93DyoQ.js";import"./popover-DNr9wWs8.js";import"./progress-Dkom_LNH.js";import"./separator-DLNkf967.js";import"./sheet-BHnC42pu.js";import"./times-zfpenlOA.js";import"./skeleton-CV1PtUMd.js";import"./switch-CWQaiJ0M.js";import"./table-2Lq_Rdjg.js";import"./tabs-pHV4z6kt.js";import"./toggle-group-Bz_GEFe3.js";import"./utils-CzDHQuSw.js";import"./index-Cd0zht5T.js";import"./tooltip-CEc4qSmp.js";import"./times-circle-BPxv1pFA.js";import"./thumbnail-BYLXA86H.js";import"./index-DTUS6EFt.js";import"./warning-CVvTL8z7.js";import"./info-BgozbEzj.js";const o=({tokens:a,defaultToken:d,onSelect:l,...p})=>{const[m,c]=v.useState(d||a[0]),g=r=>{const e=a.find(b=>b.metadata.address===r);e&&(l(e),c(e))};return t.jsxs(y,{...p,value:m.metadata.address,onValueChange:g,defaultValue:m.metadata.address,children:[t.jsx(k,{}),t.jsx(f,{viewPortClassName:"gap-0",children:a.map((r,e)=>t.jsx(h,{token:r,currentToken:m,className:q(e===a.length-1&&"border-b-0")},r.metadata.address))})]})};o.__docgenInfo={description:"",methods:[],displayName:"TokenSelect",props:{tokens:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  balance: Balance;
  metadata: ERC20Metadata;
}`,signature:{properties:[{key:"balance",value:{name:"signature",type:"object",raw:`{
  amount: number;
  value: number;
  change: number;
}`,signature:{properties:[{key:"amount",value:{name:"number",required:!0}},{key:"value",value:{name:"number",required:!0}},{key:"change",value:{name:"number",required:!0}}]},required:!0}},{key:"metadata",value:{name:"signature",type:"object",raw:`{
  name: string;
  symbol: string;
  decimals: number;
  address: string;
  image: string | undefined;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"symbol",value:{name:"string",required:!0}},{key:"decimals",value:{name:"number",required:!0}},{key:"address",value:{name:"string",required:!0}},{key:"image",value:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}],required:!0}}]},required:!0}}]}}],raw:"Token[]"},description:""},defaultToken:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  balance: Balance;
  metadata: ERC20Metadata;
}`,signature:{properties:[{key:"balance",value:{name:"signature",type:"object",raw:`{
  amount: number;
  value: number;
  change: number;
}`,signature:{properties:[{key:"amount",value:{name:"number",required:!0}},{key:"value",value:{name:"number",required:!0}},{key:"change",value:{name:"number",required:!0}}]},required:!0}},{key:"metadata",value:{name:"signature",type:"object",raw:`{
  name: string;
  symbol: string;
  decimals: number;
  address: string;
  image: string | undefined;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"symbol",value:{name:"string",required:!0}},{key:"decimals",value:{name:"number",required:!0}},{key:"address",value:{name:"string",required:!0}},{key:"image",value:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}],required:!0}}]},required:!0}}]}},description:""},onSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(token: Token) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  balance: Balance;
  metadata: ERC20Metadata;
}`,signature:{properties:[{key:"balance",value:{name:"signature",type:"object",raw:`{
  amount: number;
  value: number;
  change: number;
}`,signature:{properties:[{key:"amount",value:{name:"number",required:!0}},{key:"value",value:{name:"number",required:!0}},{key:"change",value:{name:"number",required:!0}}]},required:!0}},{key:"metadata",value:{name:"signature",type:"object",raw:`{
  name: string;
  symbol: string;
  decimals: number;
  address: string;
  image: string | undefined;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"symbol",value:{name:"string",required:!0}},{key:"decimals",value:{name:"number",required:!0}},{key:"address",value:{name:"string",required:!0}},{key:"image",value:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}],required:!0}}]},required:!0}}]}},name:"token"}],return:{name:"void"}}},description:""}}};const D=[{balance:{amount:71521921165994e-18,value:.12851233577956853,change:-.0003482251426370486},metadata:{name:"Ether",symbol:"ETH",decimals:18,address:"0x049D36570D4e46f48e99674bd3fcc84644DdD6c96F7C741B1562B82f9e004dC7",image:"https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/e07829b7-0382-4e03-7ecd-a478c5aa9f00/logo"}},{balance:{amount:53.123192130319154,value:8.13288294077193,change:-.09488246890479779},metadata:{name:"Starknet Token",symbol:"STRK",decimals:18,address:"0x04718f5a0Fc34cC1AF16A1cdee98fFB20C31f5dD61D6Ab07201858f4287c938D",image:"https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/1b126320-367c-48ed-cf5a-ba7580e49600/logo"}},{balance:{amount:.1,value:1e-13,change:0},metadata:{name:"USD Coin",symbol:"USDC",decimals:6,address:"0x053C91253BC9682c04929cA02ED00b3E423f6720D2ee7e0D5EBB06F3eCF368A8",image:"https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/e5aaa970-a998-47e8-bd43-4a3b56b87200/logo"}},{balance:{amount:0,value:0,change:0},metadata:{name:"Dai Stablecoin",symbol:"DAI",decimals:18,address:"0x00dA114221cb83fa859DBdb4C44bEeaa0BB37C8537ad5ae66Fe5e0efD20E6eB3",image:"https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/919e761b-56f7-4f53-32aa-5e066f7f6200/logo"}},{balance:{amount:0,value:0,change:0},metadata:{name:"Lords",symbol:"LORDS",decimals:18,address:"0x0124aeb495b947201f5fac96fd1138e326ad86295b98df6dec9009158a533b49",image:"https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/a3bfe959-50c4-4f89-0aef-b19207d82a00/logo"}},{balance:{amount:0,value:0,change:0},metadata:{name:"Nums",symbol:"NUMS",decimals:18,address:"0x00e5f10eddc01699dc899a30dbc3c9858148fa5aa0a47c0ffd85f887ffc4653e",image:"https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/90868d05-cb75-4c42-278c-5a540db2cf00/logo"}},{balance:{amount:1275,value:0,change:0},metadata:{name:"Paper",symbol:"PAPER",decimals:18,address:"0x0410466536b5ae074f7fea81e5533b8134a9fa18b3dd077dd9db08f64997d113",image:"https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/811f019a-0461-4cff-6c1e-442102863f00/logo"}}],Ee={title:"Modules/ERC20/Token Select",component:o,tags:["autodocs"],parameters:{layout:"padded"},args:{tokens:D}},n={};var i,u,s;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(s=(u=n.parameters)==null?void 0:u.docs)==null?void 0:s.source}}};const Qe=["Default"];export{n as Default,Qe as __namedExportsOrder,Ee as default};
