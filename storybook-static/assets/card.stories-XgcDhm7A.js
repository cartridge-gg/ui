import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import"./context-C0ZuLyu1.js";import"./alert-HkMSTgu9.js";import"./badge-CF9VCaa2.js";import"./breadcrumb-BssIq4hO.js";import"./index-D5rlNKlk.js";import{b as R,c as x,d as T}from"./card-CHJmWtwN.js";import"./checkbox-B_0M2hZW.js";import"./drawer-xE2kwbAV.js";import"./dropdown-menu-CRT-B5yA.js";import"./radio-group-KQIGPIF9.js";import"./menubar-CHnEKWjv.js";import"./popover-BvzVgOqp.js";import"./progress-Dkom_LNH.js";import"./select-CgzdedN0.js";import"./separator-DLNkf967.js";import"./sheet-Bq6Tz9es.js";import"./skeleton-CV1PtUMd.js";import"./switch-ssHJkgb5.js";import"./table-2Lq_Rdjg.js";import"./tabs-Baec46jY.js";import{r as s}from"./index-BlmOqGMO.js";import"./specialized-toasts-B5CTLsw7.js";import"./toggle-group-C7AVasTd.js";import"./index-XwABQy1c.js";import"./tooltip-gQAcybeF.js";import{c as M}from"./index-KnJS0CU8.js";import{A as v}from"./pagination-DNKapRe9.js";import{A as Q}from"./bits-DoIDlEKy.js";import{A as U}from"./bit-BAVH4l9o.js";import{A as z}from"./content-BlYEwuVV.js";import{A as L}from"./pin-B79BOkqA.js";import{A as G}from"./share-5HsZWMSh.js";import{fn as f}from"./index-BgJgh-x_.js";import"./index-yBjzXJbu.js";import"./index-Dkb_ZYRU.js";import"./index-yBYjIlgW.js";import"./index-C_Dn7qTj.js";import"./index-DKk_hhWv.js";import"./index-CVWIyhAF.js";import"./index-DuqhnXMO.js";import"./index-fNjTmf9T.js";import"./index-BigR8kad.js";import"./index-CQ2Y0WLn.js";import"./index-xprPBo3d.js";import"./wedge-W0rbne9I.js";import"./utils-CWphn_pW.js";import"./index-CRGxjvZy.js";import"./index-D31t_0wX.js";import"./index-Ms1lWa6I.js";import"./index-DZCApzUK.js";import"./index-C-QU4qAu.js";import"./index-BZkNnodj.js";import"./alert-BrNdBT3c.js";import"./times-ynKcNaj_.js";import"./times-circle-gyi9izsJ.js";import"./spinner-D3wGzOGj.js";import"./dots-COnCu59r.js";import"./external-DG4iuQXv.js";import"./index-DZ2oWOeb.js";import"./index-BWkk9jnE.js";import"./checkbox-DBv66za0.js";import"./index-Ck-mJuwY.js";import"./index-wyL_HbYX.js";import"./index-DfuoQG06.js";import"./check-Dqm4PBhQ.js";import"./circle-XVpHZr0H.js";import"./index-Bbf5mMoM.js";import"./circle-check-qG_ejMER.js";import"./award-gyvpM0Ag.js";import"./toast-9BxvrNCO.js";import"./sparkles-B7iQfMYn.js";import"./utils-CZiDjOgf.js";import"./label-fJuXkB1a.js";import"./icon-B4o6j9MO.js";import"./points-CvN0Jd39.js";import"./calendar-D30UqIYm.js";import"./task-DTUXovdp.js";import"./task-header-Cjg5BmVe.js";import"./checkbox-unchecked-DlgJkr5d.js";import"./progress-bar-zN57Oe5H.js";import"./task-status-BG2ZNRyu.js";import"./track-ChH1l7dO.js";import"./x-QJiDzGqc.js";const V=({name:H,achievements:a})=>{const[o,d]=s.useState(0),[t,O]=s.useState([]),h=s.useMemo(()=>a.filter(e=>e.index===o||e.content.hidden&&!e.completed),[a,o]),_=s.useCallback(()=>{const e=t.indexOf(o),i=t[e+1];i&&d(i)},[o,t]),I=s.useCallback(()=>{const e=t.indexOf(o);e!==0&&d(t[e-1])},[o,t]);return s.useEffect(()=>{const e=a.filter(r=>!r.content.hidden||r.completed),i=e.length>0?[...new Set(e.map(r=>r.index))]:[0];O(i);const g=e.find(r=>!r.completed);d(g?g.index:i[i.length-1])},[a]),h.length===0?null:n.jsxs(R,{children:[n.jsxs("div",{className:"flex flex-row gap-x-px",children:[n.jsx(x,{className:"grow",children:n.jsx(T,{className:"capitalize",children:H.toLowerCase()})}),t.length>1&&n.jsx(v,{direction:"left",onClick:I,disabled:o===t[0]}),t.length>1&&n.jsx(v,{direction:"right",onClick:_,disabled:o===t[t.length-1]}),t.length>1&&n.jsx(x,{children:n.jsx(Q,{children:t.map(e=>n.jsx(U,{completed:a.filter(i=>i.index===e).every(i=>i.completed),active:e===o,onClick:()=>d(e)},e))})})]}),h.map(e=>n.jsxs("div",{className:"flex gap-x-px",children:[n.jsx(z,{...e.content}),n.jsxs("div",{className:M("flex flex-col gap-y-px",!e.pin&&!e.share&&"hidden"),children:[e.pin&&n.jsx(L,{...e.pin}),e.share&&n.jsx(G,{...e.share})]})]},e.id))]})};V.__docgenInfo={description:"",methods:[],displayName:"AchievementCard",props:{name:{required:!0,tsType:{name:"string"},description:""},achievements:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}[]`},description:""}}};const Sn={title:"Modules/Achievements/Card",component:V,tags:["autodocs"],parameters:{layout:"padded"}},p={args:{name:"SQUIRE",achievements:[{id:"1",index:0,completed:!0,content:{icon:"fa-seedling",title:"Squire",description:"Every journey begins with a single step",points:20,difficulty:12,hidden:!1,tasks:[{id:"1",count:1,total:1,description:"Finish onboarding"}],timestamp:1728717697},pin:{pinned:!0,onClick:f()},share:{website:"https://lootsurvivor.io",twitter:"https://x.com/lootsurvivor",timestamp:1728717697,points:20,difficulty:12,title:"Squire"}}]}},c={args:{name:"Squire",achievements:[{id:"1",index:0,completed:!0,content:{icon:"fa-seedling",title:"Squire",description:"Every journey begins with a single step",points:20,difficulty:12,hidden:!1,tasks:[{id:"1",count:1,total:1,description:"Finish onboarding"}],timestamp:1728717697},pin:{pinned:!0,onClick:f()}}]}},l={args:{name:"Battlelord",achievements:[{id:"1",index:0,completed:!0,content:{icon:"fa-swords",title:"Battlelord 1",description:"Death smiles at us all. All we can do is smile back",points:20,difficulty:16,hidden:!1,tasks:[{id:"1",count:2,total:1,description:"Conquer 2 realms"}]},pin:{pinned:!1,onClick:f()},share:{website:"https://lootsurvivor.io",twitter:"https://x.com/lootsurvivor",timestamp:1728717697,points:20,difficulty:12,title:"Battlelord 1"}},{id:"2",index:1,completed:!1,content:{icon:"fa-khanda",title:"Battlelord 2",description:"Death smiles at us all. All we can do is smile back",points:40,difficulty:6,hidden:!1,tasks:[{id:"1",count:2,total:5,description:"Conquer 5 realms"}]}}]}},m={args:{name:"Voyager",achievements:[{id:"1",index:0,completed:!0,content:{icon:"fa-rocket",title:"Voyager",description:"Fortune favors the bold",points:20,difficulty:12,hidden:!1,tasks:[{id:"1",count:1,total:1,description:"Discover a tile"},{id:"2",count:0,total:1,description:"Discover an ancient fragment"}]}}]}},u={args:{name:"Hidden",achievements:[{id:"1",index:0,completed:!1,content:{points:20,difficulty:12,hidden:!0}},{id:"2",index:1,completed:!1,content:{points:20,difficulty:12,hidden:!0}},{id:"3",index:2,completed:!1,content:{points:20,difficulty:12,hidden:!0}}]}};var y,k,b;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(F=(N=u.parameters)==null?void 0:N.docs)==null?void 0:F.source}}};const qn=["Squire","SquirePinOnly","Battlelord","Voyager","Hidden"];export{l as Battlelord,u as Hidden,p as Squire,c as SquirePinOnly,m as Voyager,qn as __namedExportsOrder,Sn as default};
