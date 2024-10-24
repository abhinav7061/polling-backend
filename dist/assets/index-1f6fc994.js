import{a as F,r as o,U as P,j as t}from"./index-a1485a9d.js";import{w as r}from"./index-328a23ee.js";import{a as Y}from"./index-f0a7bb4e.js";import{S}from"./SpinLoader-9c7d013d.js";import{s as i}from"./styles-12bc90a9.js";import{l as q}from"./login-1b8b9d42.js";import{E as z}from"./index-ad12f7f3.js";import{T as G,C as J}from"./TransitionGroup-93382393.js";const O="_comment_item_1cfgw_2",a={comment_item:O,"fade-enter":"_fade-enter_1cfgw_6","fade-enter-active":"_fade-enter-active_1cfgw_11","fade-exit":"_fade-exit_1cfgw_16","fade-exit-active":"_fade-exit-active_1cfgw_21"},j="https://mern-polling.onrender.com/api/v1",k=3,se=({pollId:c})=>{const T=F(),[v,w]=o.useState(null),[h,m]=o.useState([]),[f,H]=o.useState(!0),[u,C]=o.useState(1),[M,l]=o.useState(!0),[I,L]=o.useState(!0),[p,x]=o.useState(""),{userInfo:b}=o.useContext(P),d=o.useRef(null),E=()=>{const e=d.current;e&&e.scrollTop+e.clientHeight>=e.scrollHeight&&C(s=>s+1),console.log({container:e,page:u})};o.useEffect(()=>{const e=d.current;if(e)return e.addEventListener("scroll",E),()=>{e.removeEventListener("scroll",E)}},[d]);const N=e=>{m(s=>s.filter(n=>n._id!==e))},U=async e=>{if(e.preventDefault(),p.length<3)return r.warning("The comment should contain 3 characters");l(!0);try{const s=await fetch(`${j}/comment/postComment/${c}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({comment:p}),credentials:"include"}),n=await s.json();if(console.log(n),s.ok){const{newComment:$,updatedComment:g}=n;$?m(y=>[$,...y]):g&&(N(g._id),m(y=>[g,...y])),x(""),r(n.message,{type:"info"})}else r(n.message,{type:"warning"})}catch(s){console.log("Error while posting your comment",s),r.error("Error posting comment")}finally{l(!1)}},_=async()=>{l(!0),w(null);try{const e=await fetch(`${j}/comment/getComments/${c}?page=${u}&limit=${k}`),s=await e.json();if(e.ok&&s.success)m(n=>[...new Set([...n,...s.comments])]),s.comments.length<k&&H(!1);else throw new Error((s==null?void 0:s.message)||"Server Error")}catch(e){console.error("Error fetching comment count:",e),w(e.message)}finally{l(!1),L(!1)}},B=e=>{x(e),r("post the new comment it will update your previous comment",{position:"top-center"});const s=document.getElementById(`commentInput${c}`);s&&s.focus()},D=async e=>{try{const s=await fetch(`${j}/comment/deleteComment/${e}`,{method:"DELETE",headers:{"Content-Type":"application/json"},credentials:"include"}),n=await s.json();s.ok?(N(e),r(n.message,{type:"info"})):r(n.message,{type:"warning"})}catch(s){console.log("Error while posting your comment",s),r("Error deleting comment",{type:"error"})}},R={resize:"none",overflowY:"hidden",minHeight:"50px"};o.useEffect(()=>{f&&_()},[u,f]);const A=e=>{x(e.target.value);const s=event.target;s.style.height="auto",s.style.height=`${s.scrollHeight}px`;const n=parseInt(window.getComputedStyle(s).lineHeight)*4;s.scrollHeight>n?(s.style.height=`${n}px`,s.style.overflowY="auto"):s.style.overflowY="hidden"};return t.jsxs(t.Fragment,{children:[t.jsx("form",{className:`flex ${i.heading5}`,onSubmit:U,children:t.jsxs("div",{className:"relative w-full overflow-hidden rounded-xl",children:[t.jsx("textarea",{id:`commentInput${c}`,name:"comment",value:p,onChange:A,className:"w-full border-2 border-slate-400 pl-3 sm:pl-5 py-2 outline-none focus:border-slate-600 rounded-xl pr-12 sm:pr-16",placeholder:"Enter your comment here",autoComplete:"off",style:R,required:!0}),t.jsx("button",{type:"submit",className:`absolute bottom-4 right-3 bg-slate-300 text-black hover:bg-sky-400 hover:text-white rounded-md px-3 py-1.5 cursor-pointer duration-500 transition-colors ${i.smHeading} ${i.flexCenter}`,title:"comment",children:t.jsx("ion-icon",{name:"send"})})]})}),v?t.jsx(z,{heading:"Error Fetching Comments",message:v,action:_}):I?t.jsx("div",{className:" w-full flex justify-center items-center",children:t.jsx(S,{})}):h.length>0?t.jsxs("div",{className:`my-3 py-3 ${T.pathname.includes("/poll/posts/")?"":"max-h-96 border border-slate-800 rounded-lg px-5"} overflow-auto`,ref:d,children:[t.jsxs("div",{className:`flex justify-between mb-4 ${i.heading5}`,children:[t.jsx("p",{children:"Comments"})," ",t.jsx("p",{className:"cursor-pointer",children:"Most Relevent"})]}),t.jsx(G,{children:h.map((e,s)=>t.jsx(J,{timeout:500,classNames:{enter:a["fade-enter"],enterActive:a["fade-enter-active"],exit:a["fade-exit"],exitActive:a["fade-exit-active"]},children:t.jsxs("div",{className:`rounded-md bg-slate-100 p-1 sm:p-3 ${h.length-1===s?"":"mb-5"} ${a.comment_item}`,children:[t.jsxs("div",{className:"flex items-center",children:[t.jsx("div",{className:"flex-1",children:t.jsx(Y,{userId:e.commentedBy,imageClassName:"w-7 h-7 sm:w-9 sm:h-9"})}),b&&b._id===e.commentedBy&&t.jsxs(t.Fragment,{children:[t.jsx("button",{className:" hover:text-blue-600",title:"Edit Comment",onClick:()=>B(e.comment),children:t.jsx("ion-icon",{name:"create-outline"})}),t.jsx("button",{className:"md:ml-3 lg:ml-5 ml-1 hover:text-red-500",title:"Delete Comment",onClick:()=>D(e._id),children:t.jsx("ion-icon",{name:"trash-outline"})})]})]}),t.jsx("h1",{className:`${i.heading5} mt-1 px-2`,children:e.comment})]})},e._id))}),t.jsx("div",{className:"flex justify-center items-center",children:M&&t.jsx(S,{})}),t.jsx("div",{className:`mt-8 flex justify-center items-center font-bold ${i.heading6}`,children:f?t.jsx("div",{className:"cursor-pointer duration-500 hover:bg-sky-300 transition-colors rounded-md  px-2 md:px-3 py-1",onClick:()=>C(e=>e+1),children:"loadMore"}):t.jsx("div",{className:"",children:"End Comments"})})]}):t.jsxs("div",{className:"flex flex-col justify-center items-center my-3 py-3 px-5",children:[t.jsx("img",{src:q,alt:"comment",className:"lg:h-44 md:h-40 sm:h-36 h-28"}),t.jsx("h1",{className:`font-semibold ${i.heading5}`,children:"Be the first to comment"})]})]})};export{se as default};
