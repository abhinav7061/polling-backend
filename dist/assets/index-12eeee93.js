import{a as f,j as e}from"./index-4dcbfe16.js";import{u as g,P as j,S}from"./index-c0f725ac.js";import{s as y}from"./styles-e7ca6728.js";import{E}from"./index-b4b753a9.js";import"./debounce-13b53e9a.js";import"./SpinLoader-78ef40b6.js";import"./index-895c8494.js";import"./index-69a0fb70.js";import"./index-54a24c07.js";import"./index-c8068174.js";import"./useMediaQuery-69a8a8ed.js";import"./index-2740fe42.js";import"./TransitionGroup-27b79dea.js";const M="http://localhost:5000/api/v1",F=()=>{const{feeds:i,setFeeds:c,errorMessage:r,loading:n,hasMore:m,search:h,sort:p,active:d,setSearch:u,setSort:v,setActive:a,resetPolls:l,searchPlaceholder:t}=g(`${M}/vote/myVotes`),s=f();s.state!==null&&(a(s.state.active),s.state=null);const x=o=>{o.preventDefault(),l()};return r?e.jsx("div",{className:"min-h-screen flex items-center justify-center",children:e.jsx(E,{heading:"Error fetching the my votes",message:r,action:l})}):e.jsxs("div",{className:"flex lg:flex-row gap-6 flex-col-reverse",children:[e.jsx(j,{feeds:i,setFeeds:c,loading:n,hasMore:m,role:"vote",customMessage:t?`You have Zero votes which contains '${t}'`:"You have ZERO votes"}),e.jsx(S,{search:h,sort:p,setSearch:u,setSort:v,onSearchSortSubmit:x,searchPlaceholder:t,children:e.jsxs("select",{value:d,onChange:o=>a(o.target.value),className:`lg:mt-4 ${y.heading6} font-bold px-3 py-2 rounded-3xl bg-slate-400`,children:[e.jsx("option",{value:"all",children:"All"}),e.jsx("option",{value:"active",children:"Active"}),e.jsx("option",{value:"closed",children:"Cloded"})]})})]})};export{F as default};