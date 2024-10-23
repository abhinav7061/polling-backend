import{r as a,U as W,j as e}from"./index-4f8d315e.js";import{w as h}from"./index-44c1b41b.js";import{C as U,p as X,i as D,d as M,v as Y}from"./index-3165b535.js";import{s as Z}from"./styles-0ca58f2b.js";import{B as ee}from"./index-2fec4983.js";import{D as se}from"./index-947ff924.js";import{S as F}from"./SpinLoader-1c504879.js";import{F as te,a as ae}from"./index-b1fd3893.js";import{E as re}from"./index-94e5c423.js";import"./FollowersContext-cf006dac.js";import"./index-0afbd836.js";import"./TransitionGroup-12f7dff9.js";const p="https://mern-polling.onrender.com/api/v1",pe=()=>{const{userInfo:r,setUserInfo:V}=a.useContext(W),[L,d]=a.useState(!1),[T,b]=a.useState(!1),[$,v]=a.useState(!1),[R,w]=a.useState(!1),[A,j]=a.useState(!1),[y,i]=a.useState(!1),[_,u]=a.useState(!1),[z,N]=a.useState(!1),[l,B]=a.useState(null),[O,C]=a.useState(!0),[S,c]=a.useState(null),E=async()=>{c(null),C(!0);try{const s=await fetch(`${p}/user/dashboard/${r._id}`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"}),t=await s.json();if(s.ok)B(t);else throw new Error((t==null?void 0:t.message)||"Server Error")}catch(s){console.log("Error while getting your dashboard",s),c(s.message)}finally{C(!1)}};a.useEffect(()=>{E()},[]);const P={name:r.name,email:r.email,myStatus:r.myStatus,avatar:r.avatar.url},[o,m]=a.useState(P),G=async()=>{c(null),u(!0);try{const s=await fetch(`${p}/user/me`,{credentials:"include"}),t=await s.json();if(t.success&&s.ok)V(t.user);else throw new Error((t==null?void 0:t.message)||"Server Error")}catch(s){console.log("Error: ",s),c(s.message)}finally{u(!1)}},f=s=>{const{name:t,value:x}=s.target;m(g=>({...g,[t]:x})),t==="avatar"&&i(!0)},q=async({name:s,email:t,myStatus:x,avatar:g})=>{u(!0);try{const n=new FormData;n.set("name",s),n.set("email",t),n.set("myStatus",x),n.set("avatar",g);const I=await fetch(`${p}/user/profile/update`,{method:"PUT",body:n,credentials:"include"}),k=await I.json();I.ok?(h.success(k.message),i(!1),d(!1),w(!1),v(!1),G(),b(!1)):h.error(k.message)}catch(n){console.log("Error while updating",n),h.error("Error while updating")}},H=s=>{s.preventDefault(),q(o),N(!1)},J=s=>{i(!0),d(t=>!t),m(t=>({...t,avatar:s}))},K=()=>{j(!0),d(s=>!s),m(s=>({...s,avatar:r.avatar.url}))},Q=()=>{i(!1),m(s=>({...s,avatar:r.avatar.url}))};return a.useEffect(()=>{const s=Object.keys(o).some(t=>o[t]!==P[t]);N(s)},[o]),S?e.jsx("div",{className:"min-h-screen flex items-center justify-center",children:e.jsx(re,{heading:"Error fetching the dashoard",message:S,action:E})}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex justify-around items-center flex-col xl:flex-row",children:[e.jsxs("form",{className:"rounded-3xl bg-white sm:p-6 p-3 flex flex-col items-center w-full xl:w-2/3",onSubmit:H,children:[_&&e.jsx("div",{className:"absolute bg-black/20 top-0 right-0 left-0 bottom-0 rounded-3xl w-full h-full z-10 flex justify-center items-center",children:e.jsx(F,{})}),L?e.jsx(se,{onImageSelect:J,clicked:A,setClicked:j}):e.jsxs("div",{className:"rounded-xl border-[2px]  border-dashed border-stone-300 p-3 flex items-center gap-2",children:[e.jsxs("div",{className:"relative flex justify-center items-center group rounded-full h-48 w-48 overflow-hidden ",children:[e.jsx("img",{src:y?URL.createObjectURL(o.avatar):r.avatar.url,alt:"Profile pic",className:" group-hover:opacity-40 transition-opacity duration-300  object-top object-cover  h-48 w-48"}),e.jsx("button",{type:"button",onClick:K,className:"absolute text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold",children:"change Image"})]}),y&&e.jsx("button",{type:"button",className:"bg-slate-400 h-6 px-3 py-1 flex items-center justify-center rounded-md",style:{whiteSpace:"nowrap"},onClick:Q,children:"Revert Image"})]}),e.jsxs("div",{className:"flex items-center justify-center flex-wrap gap-5 my-5 relative",children:[e.jsx("h1",{className:`font-bold ${Z.heading4} whitespace-nowrap`,children:"My Profile"}),e.jsxs("div",{className:"flex items-center flex-grow",children:[e.jsx("textarea",{type:"text",name:"myStatus",value:o.myStatus,onChange:f,className:"outline-none text-[12px] lg:text-[16px] flex-grow resize-none py-1 rounded-md border focus:border-2 focus:border-slate-500 lg:px-3 sm:px-1 text-center",disabled:!T}),e.jsx("div",{className:"px-1 cursor-pointer hover:text-red-600 rounded-sm hover:bg-slate-400 h-6 w-6 right-[-20px] lg:right-0",onClick:()=>b(s=>!s),children:e.jsx("ion-icon",{name:"pencil-outline"})})]})]}),e.jsxs("div",{className:" rounded-xl p-3 bg-slate-50",children:[e.jsxs("div",{className:"flex flex-wrap items-center my-3",children:[e.jsx("label",{htmlFor:"name",className:"ml-2 font-semibold mr-5",style:{whiteSpace:"nowrap"},children:"My Name:"}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("input",{type:"text",name:"name",value:o.name,onChange:f,className:"outline-none my-[2px] px-3 py-1 rounded-md border-2 focus:border-slate-500 w-full overflow-scroll",disabled:!$}),e.jsx("div",{className:"px-1 cursor-pointer ml-3 hover:text-red-600 rounded-sm hover:bg-slate-400",onClick:()=>v(s=>!s),children:e.jsx("ion-icon",{name:"pencil-outline"})})]})]}),e.jsxs("div",{className:"flex flex-wrap items-center my-3",children:[e.jsx("label",{htmlFor:"email",className:"ml-2 font-semibold mr-5",style:{whiteSpace:"nowrap"},children:"My Email:"}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("input",{type:"email",name:"email",value:o.email,onChange:f,className:"outline-none my-[2px] px-3 py-1 rounded-md border-2 focus:border-slate-500 w-full overflow-scroll",disabled:!R}),e.jsx("div",{className:"px-1 cursor-pointer ml-3 hover:text-red-600 rounded-sm hover:bg-slate-400",onClick:()=>w(s=>!s),children:e.jsx("ion-icon",{name:"pencil-outline"})})]})]})]}),z&&e.jsx(ee,{type:"submit",title:"Save changes",styles:" px-5 py-1 mb-3"})]}),O?e.jsx(F,{}):e.jsxs("div",{className:"xl:ml-5 items-center gap-6 md:gap-8 mt-8 xl:mt-0 flex flex-col lg:flex-row w-full xl:flex-col xl:w-auto",children:[e.jsx(U,{img:X,num:l.totalPollsCreated.totalNumber,title:"My Total Polls",color:l.totalPollsCreated.growth?"green":"red",progress:l.totalPollsCreated.growthPercentage,indicator:l.totalPollsCreated.growth?D:M,className:"w-full"}),e.jsx(U,{img:Y,num:l.lifetimeVotes.totalNumber,title:"My Total Votes",color:l.lifetimeVotes.growth?"green":"red",progress:l.lifetimeVotes.growthPercentage,indicator:l.lifetimeVotes.growth?D:M,className:"w-full"})]})]}),e.jsxs("div",{className:"flex gap-12 w-full mt-12 xl:flex-row flex-col pb-5 sm:pb-0",children:[e.jsx(te,{userId:r._id}),e.jsx(ae,{userId:r._id})]})]})};export{pe as default};
