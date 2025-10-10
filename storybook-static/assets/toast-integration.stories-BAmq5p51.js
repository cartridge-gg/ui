import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{B as n}from"./index-D5rlNKlk.js";import{u as D}from"./use-toast-CQ50YwM9.js";import{T as I}from"./toaster--BJS_fkC.js";import{s as m,a as L,b as h,c as d}from"./specialized-toasts-B5CTLsw7.js";import{S as Q}from"./award-gyvpM0Ag.js";import{r as u}from"./index-BlmOqGMO.js";import"./index-yBjzXJbu.js";import"./index-C_Dn7qTj.js";import"./index-KnJS0CU8.js";import"./spinner-D3wGzOGj.js";import"./utils-CWphn_pW.js";import"./index-CRGxjvZy.js";import"./external-DG4iuQXv.js";import"./toast-9BxvrNCO.js";import"./index-DuqhnXMO.js";import"./index-fNjTmf9T.js";import"./index-DKk_hhWv.js";import"./index-yBYjIlgW.js";import"./index-Dkb_ZYRU.js";import"./index-Ms1lWa6I.js";import"./index-CVWIyhAF.js";import"./index-DZCApzUK.js";import"./index-BZkNnodj.js";import"./index-BigR8kad.js";import"./index-Bbf5mMoM.js";import"./times-ynKcNaj_.js";import"./sparkles-B7iQfMYn.js";import"./check-Dqm4PBhQ.js";import"./alert-BrNdBT3c.js";const lt={title:"Primitives/Toast/Integration Examples",parameters:{layout:"centered",backgrounds:{default:"dark",values:[{name:"dark",value:"#353535"},{name:"light",value:"#ffffff"}]}}};function U(){const{toast:s}=D(),[e,l]=u.useState({}),o=u.useCallback((i,C)=>{e[i]||(l(c=>({...c,[i]:!0})),C(),setTimeout(()=>{l(c=>({...c,[i]:!1}))},1e3))},[e]),v=()=>{o("achievement",()=>{s(m({title:"Pacifist Path",subtitle:"Earned!",xpAmount:100,progress:66.7,isDraft:!1,duration:4e3}))})},N=()=>{o("draft",()=>{s(m({title:"Diamonds",subtitle:"Earned!",xpAmount:100,progress:16.7,isDraft:!0,duration:6e3}))})},k=()=>{o("network",()=>{s(L({networkName:"Starknet Mainnet",networkIcon:t.jsx(Q,{size:"default"}),duration:3e3}))})},j=()=>{o("error",()=>{s(h({message:"Execution Error",progress:66.7,duration:5e3}))})},b=()=>{o("transaction",()=>{s(d({status:"confirming",isExpanded:!0,label:"New Game",progress:66.7,duration:8e3}))})},S=()=>{o("confirmed",()=>{s(d({status:"confirmed",isExpanded:!0,label:"Token Swap",progress:100,duration:3e3}))})},E=()=>{o("collapsed",()=>{s(d({status:"confirming",isExpanded:!1,duration:4e3}))})},y=()=>{o("quick",()=>{s(m({title:"Quick Toast",subtitle:"Fast!",xpAmount:50,progress:100,isDraft:!1,duration:2e3}))})},A=()=>{o("long",()=>{s(h({message:"Long Duration Error",progress:33.3,duration:1e4}))})};return t.jsxs("div",{className:"space-y-4",children:[t.jsx("div",{className:"text-white text-lg font-semibold mb-4",children:"Toast Integration with useToast Hook"}),t.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[t.jsxs("div",{className:"space-y-2",children:[t.jsx("h3",{className:"text-white text-sm font-medium",children:"Achievement Toasts"}),t.jsx(n,{onClick:v,className:"w-full",disabled:e.achievement,children:e.achievement?"Loading...":"Show Achievement (4s)"}),t.jsx(n,{onClick:N,className:"w-full",disabled:e.draft,children:e.draft?"Loading...":"Show Draft Achievement (6s)"})]}),t.jsxs("div",{className:"space-y-2",children:[t.jsx("h3",{className:"text-white text-sm font-medium",children:"Network & Error"}),t.jsx(n,{onClick:k,className:"w-full",disabled:e.network,children:e.network?"Loading...":"Show Network Switch (3s)"}),t.jsx(n,{onClick:j,className:"w-full",disabled:e.error,children:e.error?"Loading...":"Show Error (5s)"})]}),t.jsxs("div",{className:"space-y-2",children:[t.jsx("h3",{className:"text-white text-sm font-medium",children:"Transaction Status"}),t.jsx(n,{onClick:b,className:"w-full",disabled:e.transaction,children:e.transaction?"Loading...":"Show Confirming (8s)"}),t.jsx(n,{onClick:S,className:"w-full",disabled:e.confirmed,children:e.confirmed?"Loading...":"Show Confirmed (3s)"})]}),t.jsxs("div",{className:"space-y-2",children:[t.jsx("h3",{className:"text-white text-sm font-medium",children:"Duration Examples"}),t.jsx(n,{onClick:y,className:"w-full",disabled:e.quick,children:e.quick?"Loading...":"Quick Toast (2s)"}),t.jsx(n,{onClick:A,className:"w-full",disabled:e.long,children:e.long?"Loading...":"Long Toast (10s)"})]})]}),t.jsxs("div",{className:"space-y-2",children:[t.jsx("h3",{className:"text-white text-sm font-medium",children:"Collapsed View"}),t.jsx(n,{onClick:E,className:"w-full max-w-48",disabled:e.collapsed,children:e.collapsed?"Loading...":"Show Collapsed (4s)"})]}),t.jsx("div",{className:"text-xs text-gray-400 mt-4",children:"Click buttons to trigger specialized toasts with different durations. Buttons are debounced to prevent multiple toasts."}),t.jsx(I,{})]})}const a={render:()=>t.jsx(U,{})},r={render:()=>t.jsxs("div",{className:"space-y-4 text-white",children:[t.jsx("h2",{className:"text-lg font-semibold",children:"How to Use Specialized Toasts"}),t.jsxs("div",{className:"space-y-3 text-sm",children:[t.jsxs("div",{children:[t.jsx("h3",{className:"font-medium text-green-400",children:"1. Import the convenience functions:"}),t.jsx("pre",{className:"bg-gray-800 p-2 rounded mt-1 text-xs",children:`import { 
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
// Persistent: omit duration (manual dismiss only)`})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"font-medium text-green-400",children:"4. Add Toaster to your app:"}),t.jsx("pre",{className:"bg-gray-800 p-2 rounded mt-1 text-xs",children:`import { Toaster } from "@/components/primitives/toast";

function App() {
  return (
    <div>
      {/* Your app content */}
      <Toaster />
    </div>
  );
}`})]})]})]})};var p,x,w;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <ToastIntegrationDemo />
}`,...(w=(x=a.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var f,g,T;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
            {\`import { Toaster } from "@/components/primitives/toast";

function App() {
  return (
    <div>
      {/* Your app content */}
      <Toaster />
    </div>
  );
}\`}
          </pre>
        </div>
      </div>
    </div>
}`,...(T=(g=r.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};const ht=["IntegrationDemo","UsageExample"];export{a as IntegrationDemo,r as UsageExample,ht as __namedExportsOrder,lt as default};
