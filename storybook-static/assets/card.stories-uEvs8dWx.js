import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import"./context-CDbX8kD3.js";import"./alert-HkMSTgu9.js";import"./badge-CF9VCaa2.js";import"./breadcrumb-V3TW3CaT.js";import"./index-CYmZMVXJ.js";import{b as R,c as x,d as T}from"./card-CHJmWtwN.js";import"./checkbox-BJGOHg_b.js";import"./drawer-CB1qWX_Q.js";import"./dropdown-menu-Bf3pfD8n.js";import"./radio-group-WlSpQHWm.js";import"./menubar-eE93DyoQ.js";import"./popover-DNr9wWs8.js";import"./progress-Dkom_LNH.js";import"./select-COP56eT4.js";import"./separator-DLNkf967.js";import"./sheet-BHnC42pu.js";import"./skeleton-CV1PtUMd.js";import"./switch-CWQaiJ0M.js";import"./table-2Lq_Rdjg.js";import"./tabs-pHV4z6kt.js";import"./toggle-group-Bz_GEFe3.js";import"./index-Cd0zht5T.js";import"./tooltip-CEc4qSmp.js";import{c as M}from"./index-KnJS0CU8.js";import{r as s}from"./index-BlmOqGMO.js";import{A as v}from"./pagination-EVYM1OXx.js";import{A as Q}from"./bits-DoIDlEKy.js";import{A as U}from"./bit-BAVH4l9o.js";import{A as z}from"./content-Cr0VLKh7.js";import{A as L}from"./pin-CfKhPu0W.js";import{A as G}from"./share-bogyonfh.js";import{fn as f}from"./index-BgJgh-x_.js";import"./index-yBjzXJbu.js";import"./index-Dkb_ZYRU.js";import"./index-BYUKtP1h.js";import"./index-C_Dn7qTj.js";import"./index-BQxh6BgF.js";import"./index-CVWIyhAF.js";import"./index-DuqhnXMO.js";import"./index-fNjTmf9T.js";import"./index-BbW-7v3v.js";import"./index-DdDw_O67.js";import"./wedge-Ek6y42Ws.js";import"./utils-GTnaulzv.js";import"./index-CRGxjvZy.js";import"./index-B7ENhYdy.js";import"./index-BylD-epk.js";import"./index-DZCApzUK.js";import"./index-CJGASTBR.js";import"./alert-DG-IKYwr.js";import"./times-zfpenlOA.js";import"./times-circle-BPxv1pFA.js";import"./spinner-BCFkRInS.js";import"./dots-CqQy5XBj.js";import"./index-DZ2oWOeb.js";import"./index-DaMGPy2X.js";import"./checkbox-BNhnVxLV.js";import"./index-BV9D_7a1.js";import"./index-z8P03atw.js";import"./index-DoUPdNCX.js";import"./check-BknbCD27.js";import"./circle-Ddb5-e2i.js";import"./index-COzOtNfS.js";import"./circle-check-B84UAr7O.js";import"./utils-CzDHQuSw.js";import"./label-CiepOT87.js";import"./icon-B4o6j9MO.js";import"./points-B9Fn2MT7.js";import"./calendar-DP_YOFNw.js";import"./date-BYAbbsrF.js";import"./sparkles-CY9lzZpH.js";import"./task-_GG1sAei.js";import"./task-header-Bxdd5ksT.js";import"./checkbox-unchecked-DWGljWZJ.js";import"./progress-bar-Bh2F6sR0.js";import"./task-status-QKQPrJ_r.js";import"./track-B0hV4KHx.js";import"./x-C8cxsAZm.js";const V=({name:H,achievements:a})=>{const[o,d]=s.useState(0),[t,O]=s.useState([]),h=s.useMemo(()=>a.filter(e=>e.index===o||e.content.hidden&&!e.completed),[a,o]),_=s.useCallback(()=>{const e=t.indexOf(o),i=t[e+1];i&&d(i)},[o,t]),I=s.useCallback(()=>{const e=t.indexOf(o);e!==0&&d(t[e-1])},[o,t]);return s.useEffect(()=>{const e=a.filter(r=>!r.content.hidden||r.completed),i=e.length>0?[...new Set(e.map(r=>r.index))]:[0];O(i);const g=e.find(r=>!r.completed);d(g?g.index:i[i.length-1])},[a]),h.length===0?null:n.jsxs(R,{children:[n.jsxs("div",{className:"flex flex-row gap-x-px",children:[n.jsx(x,{className:"grow",children:n.jsx(T,{className:"capitalize",children:H.toLowerCase()})}),t.length>1&&n.jsx(v,{direction:"left",onClick:I,disabled:o===t[0]}),t.length>1&&n.jsx(v,{direction:"right",onClick:_,disabled:o===t[t.length-1]}),t.length>1&&n.jsx(x,{children:n.jsx(Q,{children:t.map(e=>n.jsx(U,{completed:a.filter(i=>i.index===e).every(i=>i.completed),active:e===o,onClick:()=>d(e)},e))})})]}),h.map(e=>n.jsxs("div",{className:"flex gap-x-px",children:[n.jsx(z,{...e.content}),n.jsxs("div",{className:M("flex flex-col gap-y-px",!e.pin&&!e.share&&"hidden"),children:[e.pin&&n.jsx(L,{...e.pin}),e.share&&n.jsx(G,{...e.share})]})]},e.id))]})};V.__docgenInfo={description:"",methods:[],displayName:"AchievementCard",props:{name:{required:!0,tsType:{name:"string"},description:""},achievements:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  index: number;
  completed: boolean;
  content: AchievementContentProps;
  pin?: AchievementPinProps;
  share?: AchievementShareProps;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"index",value:{name:"number",required:!0}},{key:"completed",value:{name:"boolean",required:!0}},{key:"content",value:{name:"AchievementContentProps",required:!0}},{key:"pin",value:{name:"AchievementPinProps",required:!1}},{key:"share",value:{name:"AchievementShareProps",required:!1}}]}}],raw:`{
  id: string;
  index: number;
  completed: boolean;
  content: AchievementContentProps;
  pin?: AchievementPinProps;
  share?: AchievementShareProps;
}[]`},description:""}}};const yn={title:"Modules/Achievements/Card",component:V,tags:["autodocs"],parameters:{layout:"padded"}},p={args:{name:"SQUIRE",achievements:[{id:"1",index:0,completed:!0,content:{icon:"fa-seedling",title:"Squire",description:"Every journey begins with a single step",points:20,difficulty:12,hidden:!1,tasks:[{id:"1",count:1,total:1,description:"Finish onboarding"}],timestamp:1728717697},pin:{pinned:!0,onClick:f()},share:{website:"https://lootsurvivor.io",twitter:"https://x.com/lootsurvivor",timestamp:1728717697,points:20,difficulty:12,title:"Squire"}}]}},c={args:{name:"Squire",achievements:[{id:"1",index:0,completed:!0,content:{icon:"fa-seedling",title:"Squire",description:"Every journey begins with a single step",points:20,difficulty:12,hidden:!1,tasks:[{id:"1",count:1,total:1,description:"Finish onboarding"}],timestamp:1728717697},pin:{pinned:!0,onClick:f()}}]}},l={args:{name:"Battlelord",achievements:[{id:"1",index:0,completed:!0,content:{icon:"fa-swords",title:"Battlelord 1",description:"Death smiles at us all. All we can do is smile back",points:20,difficulty:16,hidden:!1,tasks:[{id:"1",count:2,total:1,description:"Conquer 2 realms"}]},pin:{pinned:!1,onClick:f()},share:{website:"https://lootsurvivor.io",twitter:"https://x.com/lootsurvivor",timestamp:1728717697,points:20,difficulty:12,title:"Battlelord 1"}},{id:"2",index:1,completed:!1,content:{icon:"fa-khanda",title:"Battlelord 2",description:"Death smiles at us all. All we can do is smile back",points:40,difficulty:6,hidden:!1,tasks:[{id:"1",count:2,total:5,description:"Conquer 5 realms"}]}}]}},m={args:{name:"Voyager",achievements:[{id:"1",index:0,completed:!0,content:{icon:"fa-rocket",title:"Voyager",description:"Fortune favors the bold",points:20,difficulty:12,hidden:!1,tasks:[{id:"1",count:1,total:1,description:"Discover a tile"},{id:"2",count:0,total:1,description:"Discover an ancient fragment"}]}}]}},u={args:{name:"Hidden",achievements:[{id:"1",index:0,completed:!1,content:{points:20,difficulty:12,hidden:!0}},{id:"2",index:1,completed:!1,content:{points:20,difficulty:12,hidden:!0}},{id:"3",index:2,completed:!1,content:{points:20,difficulty:12,hidden:!0}}]}};var y,k,b;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    name: "SQUIRE",
    achievements: [{
      id: "1",
      index: 0,
      completed: true,
      content: {
        icon: "fa-seedling",
        title: "Squire",
        description: "Every journey begins with a single step",
        points: 20,
        difficulty: 12,
        hidden: false,
        tasks: [{
          id: "1",
          count: 1,
          total: 1,
          description: "Finish onboarding"
        }],
        timestamp: 1728717697
      },
      pin: {
        pinned: true,
        onClick: fn()
      },
      share: {
        website: "https://lootsurvivor.io",
        twitter: "https://x.com/lootsurvivor",
        timestamp: 1728717697,
        points: 20,
        difficulty: 12,
        title: "Squire"
      }
    }]
  }
}`,...(b=(k=p.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};var A,C,S;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    name: "Squire",
    achievements: [{
      id: "1",
      index: 0,
      completed: true,
      content: {
        icon: "fa-seedling",
        title: "Squire",
        description: "Every journey begins with a single step",
        points: 20,
        difficulty: 12,
        hidden: false,
        tasks: [{
          id: "1",
          count: 1,
          total: 1,
          description: "Finish onboarding"
        }],
        timestamp: 1728717697
      },
      pin: {
        pinned: true,
        onClick: fn()
      }
    }]
  }
}`,...(S=(C=c.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var q,w,j;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    name: "Battlelord",
    achievements: [{
      id: "1",
      index: 0,
      completed: true,
      content: {
        icon: "fa-swords",
        title: "Battlelord 1",
        description: "Death smiles at us all. All we can do is smile back",
        points: 20,
        difficulty: 16,
        hidden: false,
        tasks: [{
          id: "1",
          count: 2,
          total: 1,
          description: "Conquer 2 realms"
        }]
      },
      pin: {
        pinned: false,
        onClick: fn()
      },
      share: {
        website: "https://lootsurvivor.io",
        twitter: "https://x.com/lootsurvivor",
        timestamp: 1728717697,
        points: 20,
        difficulty: 12,
        title: "Battlelord 1"
      }
    }, {
      id: "2",
      index: 1,
      completed: false,
      content: {
        icon: "fa-khanda",
        title: "Battlelord 2",
        description: "Death smiles at us all. All we can do is smile back",
        points: 40,
        difficulty: 6,
        hidden: false,
        tasks: [{
          id: "1",
          count: 2,
          total: 5,
          description: "Conquer 5 realms"
        }]
      }
    }]
  }
}`,...(j=(w=l.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var P,B,E;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    name: "Voyager",
    achievements: [{
      id: "1",
      index: 0,
      completed: true,
      content: {
        icon: "fa-rocket",
        title: "Voyager",
        description: "Fortune favors the bold",
        points: 20,
        difficulty: 12,
        hidden: false,
        tasks: [{
          id: "1",
          count: 1,
          total: 1,
          description: "Discover a tile"
        }, {
          id: "2",
          count: 0,
          total: 1,
          description: "Discover an ancient fragment"
        }]
      }
    }]
  }
}`,...(E=(B=m.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var D,N,F;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    name: "Hidden",
    achievements: [{
      id: "1",
      index: 0,
      completed: false,
      content: {
        points: 20,
        difficulty: 12,
        hidden: true
      }
    }, {
      id: "2",
      index: 1,
      completed: false,
      content: {
        points: 20,
        difficulty: 12,
        hidden: true
      }
    }, {
      id: "3",
      index: 2,
      completed: false,
      content: {
        points: 20,
        difficulty: 12,
        hidden: true
      }
    }]
  }
}`,...(F=(N=u.parameters)==null?void 0:N.docs)==null?void 0:F.source}}};const kn=["Squire","SquirePinOnly","Battlelord","Voyager","Hidden"];export{l as Battlelord,u as Hidden,p as Squire,c as SquirePinOnly,m as Voyager,kn as __namedExportsOrder,yn as default};
