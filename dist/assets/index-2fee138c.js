import{j as e}from"./index-4c064340.js";import{u as x,P as f,S as g}from"./index-bcd4131c.js";import{s as S}from"./styles-12bc90a9.js";import{E as j}from"./index-ddf156a2.js";import"./debounce-13b53e9a.js";import"./SpinLoader-16bc32d2.js";import"./index-330da05f.js";import"./index-bff4b79e.js";import"./index-49d39018.js";import"./index-1721f0c2.js";import"./useMediaQuery-431b8bf4.js";import"./index-2740fe42.js";import"./TransitionGroup-893ef530.js";const P="https://mern-polling.onrender.com/api/v1",D=()=>{const{feeds:t,setFeeds:a,errorMessage:r,loading:i,hasMore:c,search:n,sort:d,active:m,setSearch:p,setSort:h,setActive:v,resetPolls:l,searchPlaceholder:s}=x(`${P}/save-poll/saved-polls`),u=o=>{o.preventDefault(),l()};return r?e.jsx("div",{className:"min-h-screen flex items-center justify-center",children:e.jsx(j,{heading:"Error fetching the saved polls",message:r,action:()=>{l(),console.log("clicked refress")}})}):e.jsxs("div",{className:"flex lg:flex-row gap-6 flex-col-reverse",children:[e.jsx(f,{feeds:t,setFeeds:a,loading:i,hasMore:c,customMessage:s?`You have Zero Saved Polls which contains '${s}'`:"You have ZERO saved polls"}),e.jsx(g,{search:n,sort:d,setSearch:p,setSort:h,onSearchSortSubmit:u,searchPlaceholder:s,children:e.jsxs("select",{value:m,onChange:o=>v(o.target.value),className:`lg:mt-4 ${S.heading6} font-bold px-3 py-2 rounded-3xl bg-slate-400`,children:[e.jsx("option",{value:"all",children:"All"}),e.jsx("option",{value:"active",children:"Active"}),e.jsx("option",{value:"closed",children:"Cloded"})]})})]})};export{D as default};