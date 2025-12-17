import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import"./context-C0ZuLyu1.js";import"./alert-HkMSTgu9.js";import"./badge-CF9VCaa2.js";import"./breadcrumb-BssIq4hO.js";import"./index-D5rlNKlk.js";import"./card-CHJmWtwN.js";import"./checkbox-B_0M2hZW.js";import"./drawer-xE2kwbAV.js";import"./dropdown-menu-CRT-B5yA.js";import"./radio-group-KQIGPIF9.js";import"./menubar-CHnEKWjv.js";import"./popover-BvzVgOqp.js";import"./progress-Dkom_LNH.js";import{b as n,c as i,d as u}from"./select-CgzdedN0.js";import"./separator-DLNkf967.js";import"./sheet-Bq6Tz9es.js";import"./skeleton-CV1PtUMd.js";import"./switch-ssHJkgb5.js";import"./table-2Lq_Rdjg.js";import"./tabs-Baec46jY.js";import"./index-BlmOqGMO.js";import"./specialized-toasts-B5CTLsw7.js";import"./toggle-group-C7AVasTd.js";import"./index-XwABQy1c.js";import"./tooltip-gQAcybeF.js";import{C as m}from"./circle-check-qG_ejMER.js";import{c as s}from"./index-KnJS0CU8.js";import{T as d}from"./thumbnail-BvzW9a79.js";const o=a=>e.jsxs(n,{className:"h-10 w-fit rounded-full flex gap-2 items-center p-2",...a,children:[e.jsx(i,{placeholder:"Select Token"}),e.jsx(m,{variant:"down",size:"sm",className:"text-foreground-300"})]});o.__docgenInfo={description:"",methods:[],displayName:"TokenSelectHeader"};const l=({className:a,token:r,currentToken:t})=>e.jsx(u,{simplified:!0,value:r.metadata.address,"data-active":r.metadata.address===t.metadata.address,className:s("group hover:bg-background-300 hover:text-foreground-100 border-b border-border cursor-pointer data-[active=true]:bg-background-200 data-[active=true]:hover:bg-background-300 data-[active=true]:text-foreground-100 rounded-none",a),children:e.jsxs("div",{className:"flex items-center gap-2",children:[r.metadata.image?e.jsx(d,{icon:r.metadata.image,rounded:!0,size:"sm",variant:"light",className:"group-hover:bg-background-400"}):e.jsx("div",{className:"w-5 h-5 bg-gray-200 rounded-full flex-shrink-0"}),e.jsx("span",{className:"font-medium text-sm",children:r.metadata.symbol})]})});l.__docgenInfo={description:"",methods:[],displayName:"TokenSelectRow",props:{className:{required:!1,tsType:{name:"string"},description:""},token:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"symbol",value:{name:"string",required:!0}},{key:"decimals",value:{name:"number",required:!0}},{key:"address",value:{name:"string",required:!0}},{key:"image",value:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}],required:!0}}]},required:!0}}]}},description:""},currentToken:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"symbol",value:{name:"string",required:!0}},{key:"decimals",value:{name:"number",required:!0}},{key:"address",value:{name:"string",required:!0}},{key:"image",value:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}],required:!0}}]},required:!0}}]}},description:""}}};export{o as T,l as a};
