import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{B as s}from"./index-CYmZMVXJ.js";import{u as x}from"./use-toast-hSLFOJAA.js";import"./index-yBjzXJbu.js";import"./index-BlmOqGMO.js";import"./index-C_Dn7qTj.js";import"./index-KnJS0CU8.js";import"./spinner-BCFkRInS.js";import"./utils-GTnaulzv.js";import"./index-CRGxjvZy.js";import"./index-ZHEgE2XS.js";import"./index-DuqhnXMO.js";import"./index-fNjTmf9T.js";import"./specialized-toasts-Ce1YqdlM.js";import"./toast-mJ0Bx_GT.js";import"./times-zfpenlOA.js";import"./presets-BSCTsi68.js";import"./sparkles-CY9lzZpH.js";import"./sparkles-draft-sDjrI9Uu.js";import"./transaction-t4mJhGCb.js";import"./starknet-CX4nG1WJ.js";import"./check-BknbCD27.js";import"./image-DVJtesZi.js";import"./index-DTUS6EFt.js";import"./context-CDbX8kD3.js";import"./index-Dkb_ZYRU.js";import"./index-BYUKtP1h.js";import"./index-BQxh6BgF.js";import"./index-CVWIyhAF.js";import"./index-BbW-7v3v.js";import"./index-DdDw_O67.js";import"./wedge-Ek6y42Ws.js";import"./index-B7ENhYdy.js";import"./index-BylD-epk.js";import"./index-DZCApzUK.js";import"./index-CJGASTBR.js";import"./alert-HkMSTgu9.js";import"./badge-CF9VCaa2.js";import"./breadcrumb-V3TW3CaT.js";import"./dots-CqQy5XBj.js";import"./card-CHJmWtwN.js";import"./checkbox-BJGOHg_b.js";import"./index-DZ2oWOeb.js";import"./index-DaMGPy2X.js";import"./checkbox-BNhnVxLV.js";import"./drawer-CB1qWX_Q.js";import"./dropdown-menu-Bf3pfD8n.js";import"./index-BV9D_7a1.js";import"./index-z8P03atw.js";import"./index-DoUPdNCX.js";import"./circle-Ddb5-e2i.js";import"./alert-DG-IKYwr.js";import"./radio-group-WlSpQHWm.js";import"./menubar-eE93DyoQ.js";import"./popover-DNr9wWs8.js";import"./progress-Dkom_LNH.js";import"./select-COP56eT4.js";import"./index-COzOtNfS.js";import"./circle-check-B84UAr7O.js";import"./separator-DLNkf967.js";import"./sheet-BHnC42pu.js";import"./skeleton-CV1PtUMd.js";import"./switch-CWQaiJ0M.js";import"./table-2Lq_Rdjg.js";import"./tabs-pHV4z6kt.js";import"./toggle-group-Bz_GEFe3.js";import"./utils-CzDHQuSw.js";import"./index-Cd0zht5T.js";import"./tooltip-CEc4qSmp.js";import"./times-circle-BPxv1pFA.js";const zt={title:"Primitives/Toast/Existing Toast System",parameters:{layout:"centered",backgrounds:{default:"dark",values:[{name:"dark",value:"#353535"},{name:"light",value:"#ffffff"}]}}};function u(){const{toast:o}=x(),l=()=>{o({title:"Basic Toast",description:"This is a basic toast notification using the existing system."})},d=()=>{o({title:"Error Occurred",description:"Something went wrong with your request.",variant:"destructive"})},h=()=>{o({title:"Update Available",description:"A new version is available for download.",element:t.jsx(s,{variant:"outline",size:"default",children:"Update"})})};return t.jsxs("div",{className:"space-y-4",children:[t.jsx("div",{className:"text-white text-lg font-semibold mb-4",children:"Existing Toast System"}),t.jsxs("div",{className:"space-y-2",children:[t.jsx(s,{onClick:l,className:"w-full",children:"Show Basic Toast"}),t.jsx(s,{onClick:d,variant:"destructive",className:"w-full",children:"Show Error Toast"}),t.jsx(s,{onClick:h,variant:"outline",className:"w-full",children:"Show Toast with Action"})]}),t.jsx("div",{className:"text-xs text-gray-400 mt-4",children:"These are the existing toast notifications using the original Radix-based system"})]})}const i={render:()=>t.jsx(u,{})},e={render:()=>t.jsxs("div",{className:"space-y-4 text-white",children:[t.jsx("h2",{className:"text-lg font-semibold",children:"Toast System Comparison"}),t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[t.jsxs("div",{className:"space-y-3",children:[t.jsx("h3",{className:"font-medium text-blue-400",children:"Existing Toast System"}),t.jsxs("div",{className:"text-sm space-y-2",children:[t.jsx("p",{children:"✅ Simple title + description format"}),t.jsx("p",{children:"✅ Basic styling variants (default, destructive)"}),t.jsx("p",{children:"✅ Action button support"}),t.jsx("p",{children:"✅ Auto-dismiss functionality"}),t.jsx("p",{children:"✅ Swipe to dismiss"})]}),t.jsx("pre",{className:"bg-gray-800 p-2 rounded text-xs",children:`toast({
  title: "Success",
  description: "Operation completed",
  variant: "default"
});`})]}),t.jsxs("div",{className:"space-y-3",children:[t.jsx("h3",{className:"font-medium text-green-400",children:"Specialized Toast Components"}),t.jsxs("div",{className:"text-sm space-y-2",children:[t.jsx("p",{children:"✅ Rich visual components with icons"}),t.jsx("p",{children:"✅ Animated progress bars"}),t.jsx("p",{children:"✅ XP rewards and game-specific data"}),t.jsx("p",{children:"✅ Network switching notifications"}),t.jsx("p",{children:"✅ Transaction status tracking"}),t.jsx("p",{children:"✅ Built on existing toast system"})]}),t.jsx("pre",{className:"bg-gray-800 p-2 rounded text-xs",children:`toast(showAchievementToast({
  title: "Quest Complete",
  xpAmount: 150,
  progress: 100
}));`})]})]}),t.jsxs("div",{className:"mt-6 p-4 bg-gray-800 rounded",children:[t.jsx("h4",{className:"font-medium text-yellow-400 mb-2",children:"Best Practices"}),t.jsxs("ul",{className:"text-sm space-y-1",children:[t.jsxs("li",{children:["• Use ",t.jsx("strong",{children:"existing toasts"})," for simple notifications and confirmations"]}),t.jsxs("li",{children:["• Use ",t.jsx("strong",{children:"specialized toasts"})," for game events, achievements, and rich interactions"]}),t.jsx("li",{children:"• Both systems work together seamlessly through the same useToast hook"}),t.jsx("li",{children:"• All toasts appear in the same viewport with consistent positioning"})]})]})]})};var n,a,r;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <ExistingToastDemo />
}`,...(r=(a=i.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};var m,p,c;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(c=(p=e.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const Dt=["ExistingToasts","ComparisonDemo"];export{e as ComparisonDemo,i as ExistingToasts,Dt as __namedExportsOrder,zt as default};
