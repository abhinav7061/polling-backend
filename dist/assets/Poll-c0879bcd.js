import{b as g,u,r as a,j as o}from"./index-4f8d315e.js";import{V as f}from"./index-89414d6f.js";import{S as h}from"./SpinLoader-1c504879.js";import{E as x}from"./index-94e5c423.js";import"./styles-0ca58f2b.js";import"./index-44c1b41b.js";import"./index-0afbd836.js";import"./index-567986f7.js";import"./useMediaQuery-2654f65b.js";const w=async(s,l)=>{try{const e=await(await fetch(`${s}`,l)).json();if(e.success)return e;throw new Error(e.message||"Server Error")}catch(r){throw console.log("Error while fetching the data: ",r.message),new Error(r)}},E="https://mern-polling.onrender.com/api/v1",N=()=>{const s=g(),l=u(),[r,e]=a.useState(!0),[p,m]=a.useState(null),[n,c]=a.useState(null),d=s.pollId;console.log(s);const i=async()=>{e(!0),c(null);try{const t=await w(`${E}/poll/getPoll/${d}`);console.log(t),m(t.poll)}catch(t){console.error(t),c(t.message)}finally{e(!1)}};return a.useEffect(()=>{i()},[]),n?o.jsx(x,{heading:"Error fetching the poll",message:n,action:i}):o.jsx("div",{className:"w-full flex justify-center",children:r?o.jsx(h,{}):o.jsx("div",{className:"bg-white rounded-[10px] overflow-hidden mb-4 px-2 py-1 md:px-6 md:py-2 relative max-w-[750px]",children:o.jsx(f,{pollData:p,deletePollCallback:()=>{l("/poll")}})})})};export{N as default};