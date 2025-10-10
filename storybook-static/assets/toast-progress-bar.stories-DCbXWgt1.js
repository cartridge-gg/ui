import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{d as e}from"./specialized-toasts-B5CTLsw7.js";import"./index-yBjzXJbu.js";import"./index-BlmOqGMO.js";import"./index-CRGxjvZy.js";import"./index-KnJS0CU8.js";import"./award-gyvpM0Ag.js";import"./utils-CWphn_pW.js";import"./toast-9BxvrNCO.js";import"./index-DuqhnXMO.js";import"./index-fNjTmf9T.js";import"./index-DKk_hhWv.js";import"./index-C_Dn7qTj.js";import"./index-yBYjIlgW.js";import"./index-Dkb_ZYRU.js";import"./index-Ms1lWa6I.js";import"./index-CVWIyhAF.js";import"./index-DZCApzUK.js";import"./index-BZkNnodj.js";import"./index-BigR8kad.js";import"./index-Bbf5mMoM.js";import"./times-ynKcNaj_.js";import"./sparkles-B7iQfMYn.js";import"./spinner-D3wGzOGj.js";import"./check-Dqm4PBhQ.js";import"./alert-BrNdBT3c.js";const W={title:"Primitives/Toast/Supporting/Toast Progress Bar",component:e,parameters:{layout:"centered",backgrounds:{default:"dark",values:[{name:"dark",value:"#353535"},{name:"light",value:"#ffffff"}]}},argTypes:{progress:{control:{type:"range",min:0,max:100,step:1}},variant:{control:"select",options:["achievement","error"]}},decorators:[f=>s.jsx("div",{className:"w-[360px]",children:s.jsx(f,{})})]},r={args:{progress:66.7,variant:"achievement"}},a={args:{progress:66.7,variant:"error"}},t={args:{progress:0,variant:"achievement"}},i={args:{progress:100,variant:"achievement"}},o={render:()=>s.jsxs("div",{className:"space-y-4",children:[s.jsxs("div",{children:[s.jsx("h3",{className:"text-white text-sm font-semibold mb-2",children:"Achievement Progress"}),s.jsxs("div",{className:"space-y-2",children:[s.jsxs("div",{className:"w-[360px]",children:[s.jsx(e,{progress:25,variant:"achievement"}),s.jsx("p",{className:"text-white text-xs mt-1",children:"25%"})]}),s.jsxs("div",{className:"w-[360px]",children:[s.jsx(e,{progress:50,variant:"achievement"}),s.jsx("p",{className:"text-white text-xs mt-1",children:"50%"})]}),s.jsxs("div",{className:"w-[360px]",children:[s.jsx(e,{progress:75,variant:"achievement"}),s.jsx("p",{className:"text-white text-xs mt-1",children:"75%"})]}),s.jsxs("div",{className:"w-[360px]",children:[s.jsx(e,{progress:100,variant:"achievement"}),s.jsx("p",{className:"text-white text-xs mt-1",children:"100%"})]})]})]}),s.jsxs("div",{children:[s.jsx("h3",{className:"text-white text-sm font-semibold mb-2",children:"Error Progress"}),s.jsxs("div",{className:"space-y-2",children:[s.jsxs("div",{className:"w-[360px]",children:[s.jsx(e,{progress:25,variant:"error"}),s.jsx("p",{className:"text-white text-xs mt-1",children:"25%"})]}),s.jsxs("div",{className:"w-[360px]",children:[s.jsx(e,{progress:50,variant:"error"}),s.jsx("p",{className:"text-white text-xs mt-1",children:"50%"})]}),s.jsxs("div",{className:"w-[360px]",children:[s.jsx(e,{progress:75,variant:"error"}),s.jsx("p",{className:"text-white text-xs mt-1",children:"75%"})]})]})]})]})};var n,m,c;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    progress: 66.7,
    variant: "achievement"
  }
}`,...(c=(m=r.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var p,x,d;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    progress: 66.7,
    variant: "error"
  }
}`,...(d=(x=a.parameters)==null?void 0:x.docs)==null?void 0:d.source}}};var l,v,h;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    progress: 0,
    variant: "achievement"
  }
}`,...(h=(v=t.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var g,N,w;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    progress: 100,
    variant: "achievement"
  }
}`,...(w=(N=i.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var j,u,P;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div>
        <h3 className="text-white text-sm font-semibold mb-2">
          Achievement Progress
        </h3>
        <div className="space-y-2">
          <div className="w-[360px]">
            <ToastProgressBar progress={25} variant="achievement" />
            <p className="text-white text-xs mt-1">25%</p>
          </div>
          <div className="w-[360px]">
            <ToastProgressBar progress={50} variant="achievement" />
            <p className="text-white text-xs mt-1">50%</p>
          </div>
          <div className="w-[360px]">
            <ToastProgressBar progress={75} variant="achievement" />
            <p className="text-white text-xs mt-1">75%</p>
          </div>
          <div className="w-[360px]">
            <ToastProgressBar progress={100} variant="achievement" />
            <p className="text-white text-xs mt-1">100%</p>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-white text-sm font-semibold mb-2">
          Error Progress
        </h3>
        <div className="space-y-2">
          <div className="w-[360px]">
            <ToastProgressBar progress={25} variant="error" />
            <p className="text-white text-xs mt-1">25%</p>
          </div>
          <div className="w-[360px]">
            <ToastProgressBar progress={50} variant="error" />
            <p className="text-white text-xs mt-1">50%</p>
          </div>
          <div className="w-[360px]">
            <ToastProgressBar progress={75} variant="error" />
            <p className="text-white text-xs mt-1">75%</p>
          </div>
        </div>
      </div>
    </div>
}`,...(P=(u=o.parameters)==null?void 0:u.docs)==null?void 0:P.source}}};const X=["AchievementProgress","ErrorProgress","EmptyProgress","FullProgress","ProgressComparison"];export{r as AchievementProgress,t as EmptyProgress,a as ErrorProgress,i as FullProgress,o as ProgressComparison,X as __namedExportsOrder,W as default};
