import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as oe}from"./index-BlmOqGMO.js";import{c as te}from"./index-CRGxjvZy.js";import{c as ae}from"./index-KnJS0CU8.js";import"./context-C0ZuLyu1.js";import"./alert-HkMSTgu9.js";import"./badge-CF9VCaa2.js";import"./breadcrumb-BssIq4hO.js";import"./index-D5rlNKlk.js";import"./card-CHJmWtwN.js";import"./checkbox-B_0M2hZW.js";import"./drawer-xE2kwbAV.js";import"./dropdown-menu-CRT-B5yA.js";import"./radio-group-KQIGPIF9.js";import"./menubar-CHnEKWjv.js";import"./popover-BvzVgOqp.js";import"./progress-Dkom_LNH.js";import"./select-CgzdedN0.js";import"./separator-DLNkf967.js";import"./sheet-Bq6Tz9es.js";import"./skeleton-CV1PtUMd.js";import"./switch-ssHJkgb5.js";import"./table-2Lq_Rdjg.js";import"./tabs-Baec46jY.js";import"./specialized-toasts-B5CTLsw7.js";import"./toggle-group-C7AVasTd.js";import"./index-XwABQy1c.js";import"./tooltip-gQAcybeF.js";import{A as se}from"./player-label-DZ-Qdn1r.js";import{F as ne}from"./tag-CI7-s27K.js";import"./index-yBjzXJbu.js";import"./index-Dkb_ZYRU.js";import"./index-yBYjIlgW.js";import"./index-C_Dn7qTj.js";import"./index-DKk_hhWv.js";import"./index-CVWIyhAF.js";import"./index-DuqhnXMO.js";import"./index-fNjTmf9T.js";import"./index-BigR8kad.js";import"./index-CQ2Y0WLn.js";import"./index-xprPBo3d.js";import"./wedge-W0rbne9I.js";import"./utils-CWphn_pW.js";import"./index-D31t_0wX.js";import"./index-Ms1lWa6I.js";import"./index-DZCApzUK.js";import"./index-C-QU4qAu.js";import"./index-BZkNnodj.js";import"./alert-BrNdBT3c.js";import"./times-ynKcNaj_.js";import"./times-circle-gyi9izsJ.js";import"./spinner-D3wGzOGj.js";import"./dots-COnCu59r.js";import"./external-DG4iuQXv.js";import"./index-DZ2oWOeb.js";import"./index-BWkk9jnE.js";import"./checkbox-DBv66za0.js";import"./index-Ck-mJuwY.js";import"./index-wyL_HbYX.js";import"./index-DfuoQG06.js";import"./check-Dqm4PBhQ.js";import"./circle-XVpHZr0H.js";import"./index-Bbf5mMoM.js";import"./circle-check-qG_ejMER.js";import"./award-gyvpM0Ag.js";import"./toast-9BxvrNCO.js";import"./sparkles-B7iQfMYn.js";import"./utils-CZiDjOgf.js";import"./copy-address-BxuczC3M.js";import"./index-RVSQ8M9D.js";import"./index-tVhsd5GB.js";import"./account-DUMRL2DX.js";import"./copy-C2gH3tWj.js";import"./silver-tag-c0GvwDKR.js";import"./player-badge-3Ur4jeyT.js";import"./empty-Dnma9ZJh.js";import"./player-avatar-Bk5oJWsc.js";import"./olmech-piTdQnEx.js";import"./thumbnail-BvzW9a79.js";import"./index-DTUS6EFt.js";import"./warning-CrJl94iH.js";import"./info-BhoZyVIU.js";const ie=te("flex flex-col gap-y-4",{variants:{variant:{darkest:"",darker:"",dark:"",default:"",light:"",lighter:"",lightest:"",ghost:""},rank:{default:"",gold:"",silver:"",bronze:""}},defaultVariants:{variant:"default",rank:"default"}}),a=({username:r,address:o,points:t,icon:W,follower:X,followerCount:g,followingCount:x,followers:Y,compacted:Z,variant:v,rank:w,className:ee,...re})=>e.jsxs("div",{className:ae(ie({variant:v,rank:w}),ee),...re,children:[e.jsx(se,{username:r,address:o,icon:W,variant:"default",rank:w}),e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{className:"h-6 flex items-center gap-x-2",children:[e.jsxs("p",{className:"text-xs text-foreground-300 flex items-center gap-x-1",children:[e.jsx("strong",{className:"font-medium text-foreground-100",children:(g==null?void 0:g.toLocaleString())||0}),"Followers"]}),e.jsxs("p",{className:"text-xs text-foreground-300 flex items-center gap-x-1",children:[e.jsx("strong",{className:"font-medium text-foreground-100",children:(x==null?void 0:x.toLocaleString())||0}),"Following"]}),e.jsxs("p",{className:"text-xs text-foreground-300 flex items-center gap-x-1",children:[e.jsx("strong",{className:"font-medium text-foreground-100",children:t.toLocaleString()}),"Points"]}),X&&e.jsx(ne,{variant:v})]}),!Z&&e.jsx(le,{followers:Y||[]})]})]}),le=({followers:r})=>{const o=oe.useMemo(()=>{const t=r.slice(0,2);return r.length>3?`Followed by ${t.join(", ")} and ${r.length-2} others you follow`:r.length===3?`Followed by ${t.join(", ")} and ${r.length-2} other you follow`:r.length>0?`Followed by ${t.join(" and ")}`:"Followed by no one you follow"},[r]);return e.jsx("p",{className:"h-6 flex items-center text-xs text-foreground-300",children:o})};a.__docgenInfo={description:"",methods:[],displayName:"AchievementPlayerHeader",props:{username:{required:!0,tsType:{name:"string"},description:""},address:{required:!0,tsType:{name:"string"},description:""},points:{required:!0,tsType:{name:"number"},description:""},icon:{required:!1,tsType:{name:"string"},description:""},follower:{required:!1,tsType:{name:"boolean"},description:""},followerCount:{required:!1,tsType:{name:"number"},description:""},followingCount:{required:!1,tsType:{name:"number"},description:""},followers:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},compacted:{required:!1,tsType:{name:"boolean"},description:""}},composes:["HTMLAttributes","VariantProps"]};const _r={title:"Modules/Achievements/Player Header",component:a,tags:["autodocs"],parameters:{layout:"padded"},args:{username:"bal7hazar",address:"0x1234567890123456789012345678901234567890",points:2800,follower:!0,followerCount:1337,followingCount:42,followers:["clicksave","shinobi","johndoe","janedoe","harrypotter","hermione","ron","aragorn","legolas","gimli","boromir","gandalf","frodo","sam","merry","pippin","boromir","gandalf","frodo","sam","merry","pippin"]}},h=["default","gold","silver","bronze"],s={render:r=>{const o="dark";return e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("p",{className:"text-sm text-foreground-100 capitalize text-medium",children:o}),h.map(t=>e.jsx(a,{...r,variant:o,rank:t}))]},o)}},n={render:r=>{const o="default";return e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("p",{className:"text-sm text-foreground-100 capitalize text-medium",children:o}),h.map(t=>e.jsx(a,{...r,variant:o,rank:t}))]},o)}},i={render:r=>{const o="light";return e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("p",{className:"text-sm text-foreground-100 capitalize text-medium",children:o}),h.map(t=>e.jsx(a,{...r,variant:o,rank:t}))]},o)}},l={args:{follower:!1}},m={args:{followers:[],followerCount:0,followingCount:0}},p={args:{followers:["clicksave"],followerCount:1,followingCount:1}},c={args:{followers:["clicksave","shinobi"],followerCount:2,followingCount:2}},d={args:{followers:["clicksave","shinobi","johndoe"],followerCount:3,followingCount:3}},u={args:{follower:!1,compacted:!0}},f={args:{follower:!1,compacted:!0,rank:"gold"}};var y,k,j;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => {
    const variant = "dark";
    return <div key={variant} className="flex flex-col gap-3">
        <p className="text-sm text-foreground-100 capitalize text-medium">
          {variant}
        </p>
        {ranks.map(rank => <AchievementPlayerHeader {...args} variant={variant} rank={rank} />)}
      </div>;
  }
}`,...(j=(k=s.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var N,b,F;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => {
    const variant = "default";
    return <div key={variant} className="flex flex-col gap-3">
        <p className="text-sm text-foreground-100 capitalize text-medium">
          {variant}
        </p>
        {ranks.map(rank => <AchievementPlayerHeader {...args} variant={variant} rank={rank} />)}
      </div>;
  }
}`,...(F=(b=n.parameters)==null?void 0:b.docs)==null?void 0:F.source}}};var C,T,S;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => {
    const variant = "light";
    return <div key={variant} className="flex flex-col gap-3">
        <p className="text-sm text-foreground-100 capitalize text-medium">
          {variant}
        </p>
        {ranks.map(rank => <AchievementPlayerHeader {...args} variant={variant} rank={rank} />)}
      </div>;
  }
}`,...(S=(T=i.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var A,P,q;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    follower: false
  }
}`,...(q=(P=l.parameters)==null?void 0:P.docs)==null?void 0:q.source}}};var z,H,L;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    followers: [],
    followerCount: 0,
    followingCount: 0
  }
}`,...(L=(H=m.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var D,$,_;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    followers: ["clicksave"],
    followerCount: 1,
    followingCount: 1
  }
}`,...(_=($=p.parameters)==null?void 0:$.docs)==null?void 0:_.source}}};var E,M,O;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    followers: ["clicksave", "shinobi"],
    followerCount: 2,
    followingCount: 2
  }
}`,...(O=(M=c.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var V,G,I;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    followers: ["clicksave", "shinobi", "johndoe"],
    followerCount: 3,
    followingCount: 3
  }
}`,...(I=(G=d.parameters)==null?void 0:G.docs)==null?void 0:I.source}}};var R,B,J;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    follower: false,
    compacted: true
  }
}`,...(J=(B=u.parameters)==null?void 0:B.docs)==null?void 0:J.source}}};var K,Q,U;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    follower: false,
    compacted: true,
    rank: "gold"
  }
}`,...(U=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};const Er=["Dark","Default","Light","NotFollower","NoFollowers","OneFollower","TwoFollowers","ThreeFollowers","Compacted","GoldCompacted"];export{u as Compacted,s as Dark,n as Default,f as GoldCompacted,i as Light,m as NoFollowers,l as NotFollower,p as OneFollower,d as ThreeFollowers,c as TwoFollowers,Er as __namedExportsOrder,_r as default};
