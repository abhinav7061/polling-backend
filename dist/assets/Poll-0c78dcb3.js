import{b as d,u as g,r as a,j as o}from"./index-4dcbfe16.js";import{V as f}from"./index-895c8494.js";import{S as h}from"./SpinLoader-78ef40b6.js";import{E as x}from"./index-b4b753a9.js";import"./styles-e7ca6728.js";import"./index-69a0fb70.js";import"./index-54a24c07.js";import"./index-c8068174.js";import"./useMediaQuery-69a8a8ed.js";const w=async(s,l)=>{try{const e=await(await fetch(`${s}`,l)).json();if(e.success)return e;throw new Error(e.message||"Server Error")}catch(t){throw console.log("Error while fetching the data: ",t.message),new Error(t)}},E="http://localhost:5000/api/v1",N=()=>{const s=d(),l=g(),[t,e]=a.useState(!0),[p,m]=a.useState(null),[n,c]=a.useState(null),u=s.pollId;console.log(s);const i=async()=>{e(!0),c(null);try{const r=await w(`${E}/poll/getPoll/${u}`);console.log(r),m(r.poll)}catch(r){console.error(r),c(r.message)}finally{e(!1)}};return a.useEffect(()=>{i()},[]),n?o.jsx(x,{heading:"Error fetching the poll",message:n,action:i}):o.jsx("div",{className:"w-full flex justify-center",children:t?o.jsx(h,{}):o.jsx("div",{className:"bg-white rounded-[10px] overflow-hidden mb-4 px-2 py-1 md:px-6 md:py-2 relative max-w-[750px]",children:o.jsx(f,{pollData:p,deletePollCallback:()=>{l("/poll")}})})})};export{N as default};
