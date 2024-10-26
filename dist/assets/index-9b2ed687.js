import{r as l,U as u,u as f,j as e,N as m,L as p,a as j,O as b}from"./index-4c064340.js";import{U as y}from"./index-bff4b79e.js";import{s as c}from"./styles-12bc90a9.js";import{n as h,f as v}from"./index-2740fe42.js";import{u as N,L as k,l as L,C}from"./index-046b32dd.js";import{L as w}from"./SpinLoader-16bc32d2.js";const $="/assets/menu-e0613cf3.svg",U="/assets/close-945782e8.svg";function S(){const{userInfo:s}=l.useContext(u),a=l.useRef(null),d=f(),[n,i]=l.useState(!1);return N(a,()=>i(!1)),e.jsx("nav",{className:`${c.paddingX} md:py-5 py-3 px-3 sticky top-0 bg-gray-900 z-[1000]`,children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs(m,{to:"/",className:"flex items-center",children:[e.jsx("img",{src:"https://cdn-icons-png.flaticon.com/128/6432/6432236.png?track=ais",className:"h-8 mr-1",alt:"pollab"}),e.jsx("span",{className:"self-center text-sm font-semibold text-white",children:"PollLab"})]}),e.jsx("div",{className:"items-center hidden md:flex",children:e.jsx("ul",{className:"flex font-medium",children:h.map((t,r)=>e.jsx("li",{children:e.jsx(m,{to:t.linkTo,className:({isActive:o})=>{const x=o?"text-sky-600":"text-white",g=r===0?"ml-0":"ml-6";return x+" hover:text-sky-400 "+g},children:t.name})},t.id))})}),s&&e.jsxs("div",{className:`flex justify-center items-center ${c.heading6} `,children:[e.jsx(p,{to:"profile",children:e.jsxs("p",{className:"text-white",children:["Hi ",s.name," !"]})}),e.jsx(k,{})]}),e.jsx("div",{className:`hidden ${s?null:"md:block"} `,children:e.jsx("button",{type:"button",className:" bg-green-500 text-black hover:bg-blue-400  font-semibold py-2 px-5 rounded text-base",onClick:()=>{d("/login")},children:"LogIn/SignUp"})}),e.jsxs("div",{ref:a,className:"flex md:hidden items-center z-50",children:[e.jsx("div",{className:"text-3xl md:hidden cursor-pointer",onClick:()=>i(t=>!t),"aria-expanded":n,children:e.jsx("img",{src:n?U:$,alt:"menu",className:""})}),e.jsx("div",{className:` ${n?"flex":"hidden"} items-center flex absolute top-16 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar bg-slate-900 p-6`,children:e.jsxs("ul",{className:"flex justify-end items-start flex-1 flex-col gap-2",children:[h.map(t=>e.jsx("li",{onClick:()=>i(!n),children:e.jsx(m,{to:t.linkTo,className:({isActive:r})=>`${r?"text-sky-600":"text-white"} px-2 py-1 hover:bg-slate-800 rounded-sm hover:text-sky-400`,children:t.name})},t.id)),e.jsx("li",{className:`${s?"hidden":"mt-4"}`,children:e.jsx("button",{type:"button",className:" bg-green-500 text-black hover:bg-blue-400  font-semibold py-2 px-5 rounded text-base",onClick:()=>{d("/login"),i(!n)},children:"LogIn/SignUp"})})]})})]})]})})}function I(){return e.jsxs("div",{className:`${c.paddingX} bg-gray-900 text-white md:py-5 py-3 flex justify-between items-center text-[14px] mt-auto`,children:[e.jsxs("p",{children:["Copyright Ⓒ 2023 Pollab.",e.jsx("br",{className:"md:hidden"})," All Rights Reserved."]}),e.jsx("div",{children:e.jsx("ul",{className:"flex  flex-col md:flex-row",children:v.map(s=>e.jsx("li",{className:"m-2",children:e.jsx(p,{to:s.linkTo,children:s.name})},s.id))})})]})}const T=()=>{const s={display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",width:"100%",backgroundColor:"#000",color:"#fff",overflow:"hidden"},a={animation:"scaleToFull 3s ease-in-out infinite",width:"200px",height:"200px"};return e.jsx("div",{style:s,children:e.jsx("img",{src:L,style:a})})},E="https://mern-polling.onrender.com/api/v1",W=()=>{const{userInfo:s,setUserInfo:a}=l.useContext(u),[d,n]=l.useState(!0),i=f(),t=j(),r=async()=>{try{const o=await fetch(`${E}/user/me`,{credentials:"include"}),x=await o.json();x.success&&o.ok&&(a(x.user),t.pathname.startsWith("/poll")||i("/poll"))}catch(o){console.error("Error fetching user data:",o)}finally{n(!1)}};return l.useEffect(()=>{r()},[]),e.jsx("div",{className:`${c.flexCenter}`,children:d?e.jsx(T,{}):e.jsxs("div",{className:`${c.boxWidth} flex flex-col min-h-screen`,children:[s?null:e.jsx(S,{}),e.jsx(y,{position:"top-right",richColors:!0,closeButton:"true"})," ",e.jsx(l.Suspense,{fallback:e.jsx(C,{children:e.jsx(w,{})}),children:e.jsx(b,{})}),s?null:e.jsx(I,{})]})})};export{W as default};