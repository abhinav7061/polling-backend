import{r as i,U as w,j as e,L as y,a as N,N as $,O as C}from"./index-4c064340.js";import{s as u}from"./styles-12bc90a9.js";import{u as L,l as S,L as k,C as E}from"./index-046b32dd.js";import{u as h}from"./useMediaQuery-431b8bf4.js";import{s as P}from"./index-2740fe42.js";import{L as R}from"./SpinLoader-16bc32d2.js";import{F as O,a as F}from"./FollowersContext-3cc64a2a.js";import"./index-bff4b79e.js";const p=i.createContext();function T({children:a}){const{userInfo:s}=i.useContext(w),r=h("(min-width: 640px)"),l=i.useRef(null),[t,o]=i.useState(r);return L(l,()=>{r||o(!1)}),i.useEffect(()=>{o(r)},[r]),e.jsx("aside",{ref:l,className:`sm:h-screen ${t?"h-screen top-0":"h-min py-1 sm:py-0 sm:overflow-visible top-0"} sm:sticky fixed sm:shadow-sm left-0 duration-500 overflow-hidden transition-all flex z-[10]`,children:e.jsxs("nav",{className:`h-full flex flex-col border-r items-center ${t?"bg-slate-900":"sm:bg-white border-r-0"} duration-500  transition-all`,children:[e.jsxs("div",{className:`w-full flex justify-between items-center ${t?"p-3":"p-1 sm:p-3"}`,children:[e.jsx("img",{src:S,className:`overflow-hidden transition-all ${t?"w-28":"w-0"}`,alt:""}),e.jsx("button",{onClick:()=>o(d=>!d),className:` bg-gray-200 hover:bg-gray-300 flex items-center justify-center  ${t?"p-3 rounded-lg":"text-xl sm:text-base sm:p-3 border border-slate-900 sm:border-0 rounded-full sm:rounded-lg overflow-hidden"}`,title:`${t?"Close Sidebar":"Open Sidebar"}`,type:"button",children:t?e.jsx("ion-icon",{name:"arrow-back-circle-outline","aria-label":"Collapse Sidebar"}):e.jsxs("span",{children:[e.jsx("img",{src:s.avatar.url,alt:`${s.name}`,className:"w-7 h-7 object-top object-cover sm:hidden"}),e.jsx("span",{className:"hidden sm:flex",children:e.jsx("ion-icon",{name:"arrow-forward-circle-outline","aria-label":"Expand Sidebar"})})]})})]}),e.jsx(p.Provider,{value:{expanded:t,setExpanded:o},children:e.jsx("ul",{className:`flex-1 w-full overflow-y-scroll px-3 flex flex-col items-center1 ${t?"":"hidden sm:block"}`,children:a})}),s&&e.jsxs("div",{className:`border-t p-3 flex ${t?"":"hidden sm:block"}`,title:t?"":s.name,children:[e.jsx(y,{to:"my_profile",className:"w-10 h-10 rounded-md flex justify-center items-center bg-blue-400 text-white overflow-hidden",onClick:()=>{r||o(!1)},children:e.jsx("img",{src:s.avatar.url,alt:`${s.name}`,className:"w-10 h-10 object-top object-cover "})}),e.jsxs("div",{className:`flex justify-between items-center overflow-hidden transition-all ${t?"ml-3":"hidden"} `,children:[e.jsxs("div",{className:"leading-4",children:[e.jsx("h4",{className:"font-semibold text-white",title:s.name,children:s.name}),e.jsx("span",{className:"text-xs text-gray-400 line-clamp-1 w-32 md:w-40",title:s.email,children:s.email})]}),e.jsx(k,{})]})]})]})})}function B({icon:a,text:s,active:r,alert:l}){const{expanded:t,setExpanded:o}=i.useContext(p),[d,g]=i.useState({top:0}),c=i.useRef(null),j=h("(min-width: 640px)");return i.useEffect(()=>{var x,f;const m=()=>{if(c.current&&!t){const{top:b,right:v}=c.current.getBoundingClientRect();g({top:b+1,right:v})}},n=(f=(x=c.current)==null?void 0:x.parentElement)==null?void 0:f.parentElement;return n==null||n.addEventListener("scroll",m),m(),()=>{n==null||n.removeEventListener("scroll",m)}},[t]),e.jsxs("li",{ref:c,className:`relative flex items-center p-3 my-1 font-medium rounded-md cursor-pointer transition-colors group
                    ${r?"bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800":`hover:bg-indigo-50 ${t?"text-white":"text-gray-500"} hover:text-gray-600`}
                    ${t?"ps-5":"w-10 h-10"}
                `,onClick:()=>{j||o(!1)},children:[a,e.jsx("span",{className:`overflow-hidden transition-all ${t?" md:w-44 ml-3":"hidden"}`,children:s}),l&&e.jsx("div",{className:`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${t?"":"top-2"}`}),!t&&e.jsx("div",{className:"fixed rounded-md px-2 py-1 bg-indigo-100 text-indigo-800 text-sm invisible group-hover:visible group-hover:opacity-100 transition-all transform group-hover:translate-x-6 duration-300 ease-in-out",style:{top:d.top,left:d.right},children:e.jsx("p",{className:"text-center whitespace-nowrap",children:s})})]})}const q=()=>{const a=N();return e.jsx(O,{children:e.jsx(F,{children:e.jsxs("div",{className:"flex bg-gray-100",children:[e.jsx(T,{children:P.map(s=>e.jsx($,{to:s.linkTo,children:e.jsx(B,{icon:e.jsx("ion-icon",{name:s.icon_name}),text:s.text,active:a.pathname===s.linkTo},s.id)},s.id))}),e.jsx("div",{className:`${u.paddingX} ${u.paddingY} flex-1 min-h-screen`,style:{flex:1},children:e.jsx(i.Suspense,{fallback:e.jsx(E,{children:e.jsx(R,{})}),children:e.jsx(C,{})})})]})})})};export{q as default};
