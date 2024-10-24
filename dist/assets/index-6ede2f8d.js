import{u as N,b as P,r as c,j as e,L as w}from"./index-a1485a9d.js";import{u as v,r as C}from"./index-971afe37.js";import{w as n}from"./index-328a23ee.js";import{s as x}from"./styles-12bc90a9.js";import{l as k}from"./lock-18c19254.js";const f="https://mern-polling.onrender.com/api/v1",L=()=>{const p=N(),{token:d}=P(),[t,i]=c.useState(!0),[u,h]=c.useState(!1);c.useEffect(()=>{(async()=>{try{(await(await fetch(`${f}/user/verify-reset-token/${d}`)).json()).success&&h(!0)}catch(o){console.error("Error verifying token:",o),n.error("An error occurred while verifying the reset link")}finally{i(!1)}})()},[d]);const b={newPassword:"",confirmPassword:""},g=async a=>{i(!0);try{const l=await(await fetch(`${f}/user/password/reset/${d}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({newPassword:a.newPassword,confirmPassword:a.confirmPassword})})).json();l.success?(n.success(l.message),j(),p("/login")):n.error(l.message||"An error occurred")}catch(o){console.error("Error resetting password:",o),n.error("An error occurred while resetting the password")}finally{i(!1)}},{errors:s,touched:r,getFieldProps:m,handleSubmit:y,resetForm:j}=v({initialValues:b,validationSchema:C,onSubmit:a=>{g(a)}});return t?e.jsx("div",{children:"Loading..."}):u?e.jsx("main",{className:"reset-password-container",children:e.jsxs("section",{className:"flex md:flex-row flex-col-reverse border bg-white border-sky-400 mx-2 my-4 md:m-20 rounded-2xl overflow-hidden",children:[e.jsx("div",{className:`md:w-3/5 ${x.flexStart} flex-col lg:p-16 sm:p-8 p-6`,children:e.jsxs("div",{className:"w-full flex flex-col items-center",children:[e.jsx("div",{className:"mb-5 md:mb-8 xl:mb-14 p-5 md:p-8 bg-yellow-100 rounded-lg border border-yellow-400 text-slate-700 text-sm leading-6 max-w-sm",children:e.jsx("p",{children:"Enter your new password below. Make sure it's strong and you can remember it."})}),e.jsxs("form",{onSubmit:y,className:"w-full md:w-[80%]",children:[e.jsxs("div",{className:"mb-2",children:[e.jsx("label",{htmlFor:"newPassword",className:"text-sm font-bold",children:"New Password:"}),e.jsx("div",{className:"lb",children:e.jsx("input",{id:"newPassword",name:"newPassword",type:"password",placeholder:"Enter new password",className:`rounded-md border-2 w-full py-1 px-3 mt-1 outline-none ${s.newPassword&&r.newPassword?"border-red-500":"border-sky-500"}`,"aria-invalid":s.email&&r.email?"true":"false","aria-label":"New password","aria-describedby":"email-error",...m("newPassword")})}),s.newPassword&&r.newPassword&&e.jsx("p",{className:"text-red-600 text-[12px] mt-[3px]",children:s.newPassword})]}),e.jsxs("div",{className:"mb-2",children:[e.jsx("label",{htmlFor:"confirmPassword",className:"text-sm font-bold",children:"Confirm Password:"}),e.jsx("div",{className:"lb",children:e.jsx("input",{id:"confirmPassword",name:"confirmPassword",type:"password",placeholder:"Confirm new password",className:`rounded-md border-2 w-full py-1 px-3 mt-1 outline-none ${s.confirmPassword&&r.confirmPassword?"border-red-500":"border-sky-500"}`,"aria-label":"Confirm new password","aria-invalid":s.email&&r.email?"true":"false","aria-describedby":"email-error",...m("confirmPassword")})}),s.confirmPassword&&r.confirmPassword&&e.jsx("p",{className:"text-red-600 text-[12px] mt-[3px]",children:s.confirmPassword})]}),e.jsx("div",{className:"my-6",children:e.jsx("button",{type:"submit",className:`font-poppins flex justify-center items-center gap-2 font-bold text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none w-full py-1 ${t?"opacity-75 cursor-not-allowed":""}`,disabled:t,children:t?e.jsxs(e.Fragment,{children:[e.jsxs("svg",{"aria-hidden":"true",className:"w-4 h-4 text-gray-200 animate-spin dark:text-white fill-blue-800",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),e.jsx("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]}),e.jsx("span",{children:"Resetting..."})]}):"Reset Password"})})]})]})}),e.jsx("div",{className:`md:w-2/5 flex ${x.flexCenter} relative md:mx-2 md:mt-0 mt-6 mx-10`,children:e.jsx("img",{className:"w-20 md:w-full object-contain max-h-96 max-w-sm relative z-[5]",src:k,alt:""})})]})}):e.jsx("div",{className:"flex flex-col items-center justify-center flex-grow p-4 bg-gray-100",children:e.jsxs("div",{className:"max-w-md w-full bg-white shadow-md rounded-lg p-8",children:[e.jsx("h2",{className:"text-2xl font-bold text-red-600",children:"Bad Token"}),e.jsx("hr",{className:"my-4"}),e.jsx("p",{className:"text-gray-700 mb-6",children:"The password reset link was invalid, possibly because it has already been used. Please request a new password reset."}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-4",children:[e.jsx(w,{to:"/forgot-password",className:"bg-blue-gradient font-bold py-1.5 text-sm px-4 rounded-lg",children:"Request New Reset Link"}),e.jsx(w,{to:"/login",className:"bg-blue-gradient font-bold py-1.5 text-sm px-4 rounded-lg",children:"Login"})]})]})})};export{L as default};
