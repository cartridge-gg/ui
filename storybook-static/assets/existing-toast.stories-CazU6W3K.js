import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{B as t}from"./index-D5rlNKlk.js";import{u as x}from"./use-toast-CQ50YwM9.js";import{T as u}from"./toaster--BJS_fkC.js";import"./index-yBjzXJbu.js";import"./index-BlmOqGMO.js";import"./index-C_Dn7qTj.js";import"./index-KnJS0CU8.js";import"./spinner-D3wGzOGj.js";import"./utils-CWphn_pW.js";import"./index-CRGxjvZy.js";import"./external-DG4iuQXv.js";import"./toast-9BxvrNCO.js";import"./index-DuqhnXMO.js";import"./index-fNjTmf9T.js";import"./index-DKk_hhWv.js";import"./index-yBYjIlgW.js";import"./index-Dkb_ZYRU.js";import"./index-Ms1lWa6I.js";import"./index-CVWIyhAF.js";import"./index-DZCApzUK.js";import"./index-BZkNnodj.js";import"./index-BigR8kad.js";import"./index-Bbf5mMoM.js";import"./times-ynKcNaj_.js";const F={title:"Primitives/Toast/Existing Toast System",parameters:{layout:"centered",backgrounds:{default:"dark",values:[{name:"dark",value:"#353535"},{name:"light",value:"#ffffff"}]}}};function g(){const{toast:n}=x(),d=()=>{n({title:"Basic Toast",description:"This is a basic toast notification using the existing system."})},p=()=>{n({title:"Error Occurred",description:"Something went wrong with your request.",variant:"destructive"})},h=()=>{n({title:"Update Available",description:"A new version is available for download.",action:s.jsx(t,{variant:"outline",size:"default",children:"Update"})})};return s.jsxs("div",{className:"space-y-4",children:[s.jsx("div",{className:"text-white text-lg font-semibold mb-4",children:"Existing Toast System"}),s.jsxs("div",{className:"space-y-2",children:[s.jsx(t,{onClick:d,className:"w-full",children:"Show Basic Toast"}),s.jsx(t,{onClick:p,variant:"destructive",className:"w-full",children:"Show Error Toast"}),s.jsx(t,{onClick:h,variant:"outline",className:"w-full",children:"Show Toast with Action"})]}),s.jsx("div",{className:"text-xs text-gray-400 mt-4",children:"These are the existing toast notifications using the original Radix-based system"}),s.jsx(u,{})]})}const e={render:()=>s.jsx(g,{})},i={render:()=>s.jsxs("div",{className:"space-y-4 text-white",children:[s.jsx("h2",{className:"text-lg font-semibold",children:"Toast System Comparison"}),s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[s.jsxs("div",{className:"space-y-3",children:[s.jsx("h3",{className:"font-medium text-blue-400",children:"Existing Toast System"}),s.jsxs("div",{className:"text-sm space-y-2",children:[s.jsx("p",{children:"✅ Simple title + description format"}),s.jsx("p",{children:"✅ Basic styling variants (default, destructive)"}),s.jsx("p",{children:"✅ Action button support"}),s.jsx("p",{children:"✅ Auto-dismiss functionality"}),s.jsx("p",{children:"✅ Swipe to dismiss"})]}),s.jsx("pre",{className:"bg-gray-800 p-2 rounded text-xs",children:`toast({
  title: "Success",
  description: "Operation completed",
  variant: "default"
});`})]}),s.jsxs("div",{className:"space-y-3",children:[s.jsx("h3",{className:"font-medium text-green-400",children:"Specialized Toast Components"}),s.jsxs("div",{className:"text-sm space-y-2",children:[s.jsx("p",{children:"✅ Rich visual components with icons"}),s.jsx("p",{children:"✅ Animated progress bars"}),s.jsx("p",{children:"✅ XP rewards and game-specific data"}),s.jsx("p",{children:"✅ Network switching notifications"}),s.jsx("p",{children:"✅ Transaction status tracking"}),s.jsx("p",{children:"✅ Built on existing toast system"})]}),s.jsx("pre",{className:"bg-gray-800 p-2 rounded text-xs",children:`toast(showAchievementToast({
  title: "Quest Complete",
  xpAmount: 150,
  progress: 100
}));`})]})]}),s.jsxs("div",{className:"mt-6 p-4 bg-gray-800 rounded",children:[s.jsx("h4",{className:"font-medium text-yellow-400 mb-2",children:"Best Practices"}),s.jsxs("ul",{className:"text-sm space-y-1",children:[s.jsxs("li",{children:["• Use ",s.jsx("strong",{children:"existing toasts"})," for simple notifications and confirmations"]}),s.jsxs("li",{children:["• Use ",s.jsx("strong",{children:"specialized toasts"})," for game events, achievements, and rich interactions"]}),s.jsx("li",{children:"• Both systems work together seamlessly through the same useToast hook"}),s.jsx("li",{children:"• All toasts appear in the same viewport with consistent positioning"})]})]})]})};var a,o,r;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => <ExistingToastDemo />
}`,...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};var c,l,m;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 text-white">
      <h2 className="text-lg font-semibold">Toast System Comparison</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <h3 className="font-medium text-blue-400">Existing Toast System</h3>
          <div className="text-sm space-y-2">
            <p>✅ Simple title + description format</p>
            <p>✅ Basic styling variants (default, destructive)</p>
            <p>✅ Action button support</p>
            <p>✅ Auto-dismiss functionality</p>
            <p>✅ Swipe to dismiss</p>
          </div>
          <pre className="bg-gray-800 p-2 rounded text-xs">
            {\`toast({
  title: "Success",
  description: "Operation completed",
  variant: "default"
});\`}
          </pre>
        </div>

        <div className="space-y-3">
          <h3 className="font-medium text-green-400">
            Specialized Toast Components
          </h3>
          <div className="text-sm space-y-2">
            <p>✅ Rich visual components with icons</p>
            <p>✅ Animated progress bars</p>
            <p>✅ XP rewards and game-specific data</p>
            <p>✅ Network switching notifications</p>
            <p>✅ Transaction status tracking</p>
            <p>✅ Built on existing toast system</p>
          </div>
          <pre className="bg-gray-800 p-2 rounded text-xs">
            {\`toast(showAchievementToast({
  title: "Quest Complete",
  xpAmount: 150,
  progress: 100
}));\`}
          </pre>
        </div>
      </div>

      <div className="mt-6 p-4 bg-gray-800 rounded">
        <h4 className="font-medium text-yellow-400 mb-2">Best Practices</h4>
        <ul className="text-sm space-y-1">
          <li>
            • Use <strong>existing toasts</strong> for simple notifications and
            confirmations
          </li>
          <li>
            • Use <strong>specialized toasts</strong> for game events,
            achievements, and rich interactions
          </li>
          <li>
            • Both systems work together seamlessly through the same useToast
            hook
          </li>
          <li>
            • All toasts appear in the same viewport with consistent positioning
          </li>
        </ul>
      </div>
    </div>
}`,...(m=(l=i.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const G=["ExistingToasts","ComparisonDemo"];export{i as ComparisonDemo,e as ExistingToasts,G as __namedExportsOrder,F as default};
