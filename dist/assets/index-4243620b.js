import{r as f,j as e}from"./index-4f8d315e.js";import{w as o}from"./index-44c1b41b.js";import{u as h,f as w}from"./index-57bfc9b6.js";import{l as b}from"./lock-18c19254.js";import{s as n}from"./styles-0ca58f2b.js";const y="https://mern-polling.onrender.com/api/v1",S=()=>{const[l,i]=f.useState(!1),m={email:""},d=async({email:t})=>{i(!0);try{const r=await fetch(`${y}/user/password/forgot`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t})}),u=await r.json();r.ok?(o.success("Reset link sent to your email"),p()):o.error(u.message||"Failed to send reset link")}catch(r){console.error("Error:",r),o.error("An error occurred while sending the reset link")}finally{i(!1)}},{errors:s,touched:a,handleSubmit:c,getFieldProps:x,resetForm:p}=h({initialValues:m,validationSchema:w,onSubmit:t=>{d(t)}});return e.jsxs("div",{className:"flex md:flex-row flex-col-reverse border bg-white border-sky-400 mx-2 my-4 md:m-20 rounded-2xl overflow-hidden",children:[e.jsx("div",{className:`md:w-3/5 ${n.flexStart} flex-col lg:p-16 sm:p-8 p-6`,children:e.jsxs("div",{className:"w-full flex flex-col items-center",children:[e.jsx("div",{className:"mb-5 md:mb-8 xl:mb-14 p-5 md:p-8 bg-yellow-100 rounded-lg border border-yellow-400 text-slate-700 text-sm leading-6 max-w-sm",children:e.jsx("p",{children:"Forgotten your password? Enter your e-mail address below, and we'll send you an e-mail allowing you to reset it."})}),e.jsxs("form",{onSubmit:c,className:"w-full md:w-[80%]",children:[e.jsxs("div",{className:"mb-2",children:[e.jsx("label",{htmlFor:"email",className:"text-sm font-bold ",children:"Email address:"}),e.jsx("div",{className:"lb",children:e.jsx("input",{id:"email",name:"email",type:"email",autoComplete:"email",placeholder:"Enter your email address",className:`rounded-md border-2 w-full py-1 px-3 mt-1 outline-none ${s.email&&a.email?"border-red-500":"border-sky-500"}`,"aria-invalid":s.email&&a.email?"true":"false","aria-describedby":"email-error",...x("email")})}),s.email&&a.email&&e.jsx("p",{id:"email-error",className:"text-red-600 text-[12px] mt-[3px]",children:s.email})]}),e.jsx("div",{className:"my-6",children:e.jsx("button",{type:"submit",className:`font-poppins flex justify-center items-center gap-2 font-bold text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none w-full py-1 ${l?"opacity-75 cursor-not-allowed":""}`,disabled:l,children:l?e.jsxs(e.Fragment,{children:[e.jsxs("svg",{"aria-hidden":"true",className:"w-4 h-4 text-gray-200 animate-spin dark:text-white fill-blue-800",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),e.jsx("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]}),e.jsx("span",{children:"Sending..."})]}):"Send Reset Email"})})]})]})}),e.jsx("div",{className:`md:w-2/5 flex ${n.flexCenter} relative md:mx-2 md:mt-0 mt-6 mx-10`,children:e.jsx("img",{className:"w-20 md:w-full object-contain max-h-96 max-w-sm relative z-[5]",src:b,alt:""})})]})};export{S as default};
