import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{B as n}from"./index-CYmZMVXJ.js";import{u as M}from"./use-toast-hSLFOJAA.js";import{s as c,a as p,b as P,c as h,d}from"./specialized-toasts-Ce1YqdlM.js";import{S as Q}from"./starknet-PF0GvedQ.js";import{r as u}from"./index-BlmOqGMO.js";import"./index-yBjzXJbu.js";import"./index-C_Dn7qTj.js";import"./index-KnJS0CU8.js";import"./spinner-BCFkRInS.js";import"./utils-GTnaulzv.js";import"./index-CRGxjvZy.js";import"./index-ZHEgE2XS.js";import"./index-DuqhnXMO.js";import"./index-fNjTmf9T.js";import"./toast-mJ0Bx_GT.js";import"./times-zfpenlOA.js";import"./presets-BSCTsi68.js";import"./sparkles-CY9lzZpH.js";import"./sparkles-draft-sDjrI9Uu.js";import"./transaction-t4mJhGCb.js";import"./starknet-CX4nG1WJ.js";import"./check-BknbCD27.js";import"./image-DVJtesZi.js";import"./index-DTUS6EFt.js";import"./context-CDbX8kD3.js";import"./index-Dkb_ZYRU.js";import"./index-BYUKtP1h.js";import"./index-BQxh6BgF.js";import"./index-CVWIyhAF.js";import"./index-BbW-7v3v.js";import"./index-DdDw_O67.js";import"./wedge-Ek6y42Ws.js";import"./index-B7ENhYdy.js";import"./index-BylD-epk.js";import"./index-DZCApzUK.js";import"./index-CJGASTBR.js";import"./alert-HkMSTgu9.js";import"./badge-CF9VCaa2.js";import"./breadcrumb-V3TW3CaT.js";import"./dots-CqQy5XBj.js";import"./card-CHJmWtwN.js";import"./checkbox-BJGOHg_b.js";import"./index-DZ2oWOeb.js";import"./index-DaMGPy2X.js";import"./checkbox-BNhnVxLV.js";import"./drawer-CB1qWX_Q.js";import"./dropdown-menu-Bf3pfD8n.js";import"./index-BV9D_7a1.js";import"./index-z8P03atw.js";import"./index-DoUPdNCX.js";import"./circle-Ddb5-e2i.js";import"./alert-DG-IKYwr.js";import"./radio-group-WlSpQHWm.js";import"./menubar-eE93DyoQ.js";import"./popover-DNr9wWs8.js";import"./progress-Dkom_LNH.js";import"./select-COP56eT4.js";import"./index-COzOtNfS.js";import"./circle-check-B84UAr7O.js";import"./separator-DLNkf967.js";import"./sheet-BHnC42pu.js";import"./skeleton-CV1PtUMd.js";import"./switch-CWQaiJ0M.js";import"./table-2Lq_Rdjg.js";import"./tabs-pHV4z6kt.js";import"./toggle-group-Bz_GEFe3.js";import"./utils-CzDHQuSw.js";import"./index-Cd0zht5T.js";import"./tooltip-CEc4qSmp.js";import"./times-circle-BPxv1pFA.js";const te={title:"Primitives/Toast/Integration Examples",parameters:{layout:"centered",backgrounds:{default:"dark",values:[{name:"dark",value:"#353535"},{name:"light",value:"#ffffff"}]}}};function B(){const{toast:s}=M(),[e,l]=u.useState({}),o=u.useCallback((i,L)=>{e[i]||(l(m=>({...m,[i]:!0})),L(),setTimeout(()=>{l(m=>({...m,[i]:!1}))},1e3))},[e]),v=()=>{o("achievement",()=>{s(c({title:"Pacifist Path",subtitle:"Earned!",xpAmount:100,progress:66.7,isDraft:!1,duration:4e3}))})},k=()=>{o("draft",()=>{s(c({title:"Diamonds",subtitle:"Earned!",xpAmount:100,progress:16.7,isDraft:!0,duration:6e3}))})},j=()=>{o("purchase",()=>{s(p({title:"Purchased",collectionName:"Beasts",itemNames:["Beast #111"],itemImages:["https://api.cartridge.gg/x/arcade-main/torii/static/0x046da8955829adf2bda310099a0063451923f02e648cf25a1203aac6335cf0e4/0x00000000000000000000000000000000000000000000000000000000000105de/image"],preset:"loot-survivor"}))})},S=()=>{o("sentToken",()=>{s(p({title:"Sent",collectionName:"LORDS",itemNames:["500 LORDS"],itemImages:["https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/a3bfe959-50c4-4f89-0aef-b19207d82a00/logo"]}))})},b=()=>{o("network",()=>{s(P({networkName:"Starknet Mainnet",networkIcon:t.jsx(Q,{size:"default"}),duration:3e3}))})},E=()=>{o("error",()=>{s(h({message:"Execution Error",progress:66.7,duration:5e3}))})},y=()=>{o("transaction",()=>{s(d({status:"confirming",isExpanded:!0,label:"New Game",progress:66.7,duration:8e3}))})},D=()=>{o("confirmed",()=>{s(d({status:"confirmed",isExpanded:!0,label:"Token Swap",progress:100,duration:3e3}))})},C=()=>{o("collapsed",()=>{s(d({status:"confirming",isExpanded:!1,duration:4e3}))})},I=()=>{o("quick",()=>{s(c({title:"Quick Toast",subtitle:"Fast!",xpAmount:50,progress:100,isDraft:!1,duration:2e3}))})},A=()=>{o("long",()=>{s(h({message:"Long Duration Error",progress:33.3,duration:1e4}))})};return t.jsxs("div",{className:"space-y-4",children:[t.jsx("div",{className:"text-white text-lg font-semibold mb-4",children:"Toast Integration with useToast Hook"}),t.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[t.jsxs("div",{className:"space-y-2",children:[t.jsx("h3",{className:"text-white text-sm font-medium",children:"Achievement Toasts"}),t.jsx(n,{onClick:v,className:"w-full",disabled:e.achievement,children:e.achievement?"Loading...":"Show Achievement (4s)"}),t.jsx(n,{onClick:k,className:"w-full",disabled:e.draft,children:e.draft?"Loading...":"Show Draft Achievement (6s)"})]}),t.jsxs("div",{className:"space-y-2",children:[t.jsx("h3",{className:"text-white text-sm font-medium",children:"Marketplace Toasts"}),t.jsx(n,{onClick:j,className:"w-full",disabled:e.purchase,children:e.purchase?"Loading...":"Marketplace Purchase"}),t.jsx(n,{onClick:S,className:"w-full",disabled:e.sentToken,children:e.sentToken?"Loading...":"Marketplace Sent Token"})]}),t.jsxs("div",{className:"space-y-2",children:[t.jsx("h3",{className:"text-white text-sm font-medium",children:"Network & Error"}),t.jsx(n,{onClick:b,className:"w-full",disabled:e.network,children:e.network?"Loading...":"Show Network Switch (3s)"}),t.jsx(n,{onClick:E,className:"w-full",disabled:e.error,children:e.error?"Loading...":"Show Error (5s)"})]}),t.jsxs("div",{className:"space-y-2",children:[t.jsx("h3",{className:"text-white text-sm font-medium",children:"Transaction Status"}),t.jsx(n,{onClick:y,className:"w-full",disabled:e.transaction,children:e.transaction?"Loading...":"Show Confirming (8s)"}),t.jsx(n,{onClick:D,className:"w-full",disabled:e.confirmed,children:e.confirmed?"Loading...":"Show Confirmed (3s)"})]}),t.jsxs("div",{className:"space-y-2",children:[t.jsx("h3",{className:"text-white text-sm font-medium",children:"Duration Examples"}),t.jsx(n,{onClick:I,className:"w-full",disabled:e.quick,children:e.quick?"Loading...":"Quick Toast (2s)"}),t.jsx(n,{onClick:A,className:"w-full",disabled:e.long,children:e.long?"Loading...":"Long Toast (10s)"})]}),t.jsxs("div",{className:"space-y-2",children:[t.jsx("h3",{className:"text-white text-sm font-medium",children:"Collapsed View"}),t.jsx(n,{onClick:C,className:"w-full max-w-48",disabled:e.collapsed,children:e.collapsed?"Loading...":"Show Collapsed (4s)"})]})]}),t.jsx("div",{className:"text-xs text-gray-400 mt-4",children:"Click buttons to trigger specialized toasts with different durations. Buttons are debounced to prevent multiple toasts."})]})}const a={render:()=>t.jsx(B,{})},r={render:()=>t.jsxs("div",{className:"space-y-4 text-white",children:[t.jsx("h2",{className:"text-lg font-semibold",children:"How to Use Specialized Toasts"}),t.jsxs("div",{className:"space-y-3 text-sm",children:[t.jsxs("div",{children:[t.jsx("h3",{className:"font-medium text-green-400",children:"1. Import the convenience functions:"}),t.jsx("pre",{className:"bg-gray-800 p-2 rounded mt-1 text-xs",children:`import { 
  showAchievementToast, 
  showNetworkSwitchToast,
  showErrorToast,
  showTransactionToast 
} from "@/components/primitives/toast";`})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"font-medium text-green-400",children:"2. Use with the existing useToast hook:"}),t.jsx("pre",{className:"bg-gray-800 p-2 rounded mt-1 text-xs",children:`const { toast } = useToast();

// Show achievement toast with custom duration
toast(showAchievementToast({
  title: "Quest Complete",
  subtitle: "Earned!",
  xpAmount: 150,
  progress: 100,
  isDraft: false,
  duration: 4000 // 4 seconds
}));

// Show network switch with default duration (5s)
toast(showNetworkSwitchToast({
  networkName: "Ethereum Mainnet",
  networkIcon: <EthereumIcon />
}));

// Show error with long duration
toast(showErrorToast({
  message: "Transaction failed",
  progress: 25,
  duration: 8000 // 8 seconds
}));

// Show transaction notification
toast(showTransactionToast({
  status: "confirming",
  isExpanded: true,
  label: "Token Swap",
  progress: 45,
  duration: 6000
}));`})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"font-medium text-green-400",children:"3. Duration Options:"}),t.jsx("pre",{className:"bg-gray-800 p-2 rounded mt-1 text-xs",children:`// Default duration: 5000ms (5 seconds)
// Quick notifications: 2000-3000ms
// Standard: 4000-6000ms  
// Important/Error: 6000-10000ms
// Persistent: omit duration (manual dismiss only)`})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"font-medium text-green-400",children:"4. Add Toaster to your app:"}),t.jsx("pre",{className:"bg-gray-800 p-2 rounded mt-1 text-xs",children:`import { SonnerToaster } from "@/components/primitives/sonner";

function App() {
  return (
    <div>
      {/* Your app content */}
      <SonnerToaster />
    </div>
  );
}`})]})]})]})};var x,w,f;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <ToastIntegrationDemo />
}`,...(f=(w=a.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var g,T,N;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 text-white">
      <h2 className="text-lg font-semibold">How to Use Specialized Toasts</h2>

      <div className="space-y-3 text-sm">
        <div>
          <h3 className="font-medium text-green-400">
            1. Import the convenience functions:
          </h3>
          <pre className="bg-gray-800 p-2 rounded mt-1 text-xs">
            {\`import { 
  showAchievementToast, 
  showNetworkSwitchToast,
  showErrorToast,
  showTransactionToast 
} from "@/components/primitives/toast";\`}
          </pre>
        </div>

        <div>
          <h3 className="font-medium text-green-400">
            2. Use with the existing useToast hook:
          </h3>
          <pre className="bg-gray-800 p-2 rounded mt-1 text-xs">
            {\`const { toast } = useToast();

// Show achievement toast with custom duration
toast(showAchievementToast({
  title: "Quest Complete",
  subtitle: "Earned!",
  xpAmount: 150,
  progress: 100,
  isDraft: false,
  duration: 4000 // 4 seconds
}));

// Show network switch with default duration (5s)
toast(showNetworkSwitchToast({
  networkName: "Ethereum Mainnet",
  networkIcon: <EthereumIcon />
}));

// Show error with long duration
toast(showErrorToast({
  message: "Transaction failed",
  progress: 25,
  duration: 8000 // 8 seconds
}));

// Show transaction notification
toast(showTransactionToast({
  status: "confirming",
  isExpanded: true,
  label: "Token Swap",
  progress: 45,
  duration: 6000
}));\`}
          </pre>
        </div>

        <div>
          <h3 className="font-medium text-green-400">3. Duration Options:</h3>
          <pre className="bg-gray-800 p-2 rounded mt-1 text-xs">
            {\`// Default duration: 5000ms (5 seconds)
// Quick notifications: 2000-3000ms
// Standard: 4000-6000ms  
// Important/Error: 6000-10000ms
// Persistent: omit duration (manual dismiss only)\`}
          </pre>
        </div>

        <div>
          <h3 className="font-medium text-green-400">
            4. Add Toaster to your app:
          </h3>
          <pre className="bg-gray-800 p-2 rounded mt-1 text-xs">
            {\`import { SonnerToaster } from "@/components/primitives/sonner";

function App() {
  return (
    <div>
      {/* Your app content */}
      <SonnerToaster />
    </div>
  );
}\`}
          </pre>
        </div>
      </div>
    </div>
}`,...(N=(T=r.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};const ee=["IntegrationDemo","UsageExample"];export{a as IntegrationDemo,r as UsageExample,ee as __namedExportsOrder,te as default};
