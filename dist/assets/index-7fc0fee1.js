import{j as e}from"./index-9aec5bf0.js";import{u as x,P as f,S as g}from"./index-b227d8a0.js";import{s as S}from"./styles-0ca58f2b.js";import{E as j}from"./index-01004776.js";import"./debounce-13b53e9a.js";import"./SpinLoader-1fa1f2e1.js";import"./index-e8ae43e0.js";import"./index-115b0bce.js";import"./index-0b1531bc.js";import"./index-ce1f1610.js";import"./useMediaQuery-44146a80.js";import"./index-2740fe42.js";import"./TransitionGroup-32e1a896.js";const P="http://localhost:5000/api/v1",D=()=>{const{feeds:l,setFeeds:a,errorMessage:r,loading:i,hasMore:c,search:n,sort:d,active:p,setSearch:h,setSort:m,setActive:v,resetPolls:t,searchPlaceholder:s}=x(`${P}/save-poll/saved-polls`),u=o=>{o.preventDefault(),t()};return r?e.jsx("div",{className:"min-h-screen flex items-center justify-center",children:e.jsx(j,{heading:"Error fetching the saved polls",message:r,action:()=>{t(),console.log("clicked refress")}})}):e.jsxs("div",{className:"flex lg:flex-row gap-6 flex-col-reverse",children:[e.jsx(f,{feeds:l,setFeeds:a,loading:i,hasMore:c,customMessage:s?`You have Zero Saved Polls which contains '${s}'`:"You have ZERO saved polls"}),e.jsx(g,{search:n,sort:d,setSearch:h,setSort:m,onSearchSortSubmit:u,searchPlaceholder:s,children:e.jsxs("select",{value:p,onChange:o=>v(o.target.value),className:`lg:mt-4 ${S.heading6} font-bold px-3 py-2 rounded-3xl bg-slate-400`,children:[e.jsx("option",{value:"all",children:"All"}),e.jsx("option",{value:"active",children:"Active"}),e.jsx("option",{value:"closed",children:"Cloded"})]})})]})};export{D as default};
