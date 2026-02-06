import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{b as d,c as l,d as m,e as p,f as D,a as t,C as y,g as H}from"./card-CHJmWtwN.js";import{r as P}from"./index-BlmOqGMO.js";import{P as S}from"./index-DTUS6EFt.js";import{E as O}from"./ethereum-CkXEu8_4.js";import"./index-yBjzXJbu.js";import"./index-KnJS0CU8.js";import"./utils-GTnaulzv.js";import"./index-CRGxjvZy.js";const Y={title:"Primitives/Card",component:R,tags:["autodocs"]},a={args:{title:"Card Title",description:"Card Description"}},n={args:{title:"Card Title"}},i={args:{title:"Card Title",icon:e.jsx(H,{})}},o={args:{variant:"list",title:"Card List Content"}};function R({variant:N="content",title:c,description:r,icon:s}){switch(P.useEffect(()=>{s&&document.documentElement.style.setProperty("--theme-icon-url",'url("https://static.cartridge.gg/presets/slot/icon.svg")')},[s]),N){case"content":return e.jsxs(d,{children:[e.jsxs(l,{icon:s,children:[e.jsx(m,{children:c}),r&&e.jsx(p,{children:r})]}),e.jsx(y,{children:e.jsx("p",{children:"Card Content"})})]});case"list":return e.jsxs(d,{children:[e.jsxs(l,{icon:s,children:[e.jsx(m,{children:c}),r&&e.jsx(p,{children:r})]}),e.jsxs(D,{children:[e.jsx(t,{children:"No icon item"}),e.jsx(t,{icon:S,children:"placeholder"}),e.jsxs(t,{icon:e.jsx(O,{}),children:[e.jsxs("div",{className:"flex items-center gap-2",children:["0.01 ",e.jsx("span",{className:"text-foreground-400",children:"ETH"})]}),e.jsx("div",{className:"text-foreground-400",children:"$3500.00"})]}),e.jsxs(t,{icon:"https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/1b126320-367c-48ed-cf5a-ba7580e49600/logo",children:[e.jsxs("div",{className:"flex items-center gap-2",children:["100 ",e.jsx("span",{className:"text-foreground-400",children:"STRK"})]}),e.jsx("div",{className:"text-foreground-400",children:"$50.00"})]})]})]})}}var x,u,C;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    title: "Card Title",
    description: "Card Description"
  }
}`,...(C=(u=a.parameters)==null?void 0:u.docs)==null?void 0:C.source}}};var h,g,j;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    title: "Card Title"
  }
}`,...(j=(g=n.parameters)==null?void 0:g.docs)==null?void 0:j.source}}};var f,T,E;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    title: "Card Title",
    icon: <CardIcon />
  }
}`,...(E=(T=i.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var v,I,L;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: "list",
    title: "Card List Content"
  }
}`,...(L=(I=o.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};const k=["Default","OnlyTitle","IconHeader","CardList"];export{o as CardList,a as Default,i as IconHeader,n as OnlyTitle,k as __namedExportsOrder,Y as default};
