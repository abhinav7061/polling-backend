import{r,U as I,u as P,j as e,N as U}from"./index-4f8d315e.js";import{s as b}from"./styles-0ca58f2b.js";import{C as L}from"./CircleLoader-c3abeb56.js";import{w as c}from"./index-44c1b41b.js";import{u as R,s as D}from"./index-57bfc9b6.js";import{D as O}from"./index-947ff924.js";const $="/assets/register-cf49c9ce.svg",T="https://mern-polling.onrender.com/api/v1",J=()=>{const{userInfo:g}=r.useContext(I),u=P(),[h,m]=r.useState(null),[v,x]=r.useState(!1),[p,f]=r.useState(!1),N={name:"",email:"",password:"",cpassword:""},y=async({name:t,email:w,password:F,avatar:B})=>{f(!0);try{const a=new FormData;a.set("name",t),a.set("email",w),a.set("password",F),a.set("avatar",B);const i=await(await fetch(`${T}/user/register`,{method:"POST",body:a})).json();i.success||i.needVerification?(c.info(i.message||"Signup successful. Please verify your email."),k(),m(null),x(!1),u("/verify-email",{state:{email:w}})):c.error(i.message)}catch(a){console.error(a),c.error("An error occurred during signup")}finally{f(!1)}},C=t=>{m(t),x(!0)},{values:l,errors:s,touched:n,handleBlur:o,handleChange:d,handleSubmit:S,resetForm:k}=R({initialValues:N,validationSchema:D,onSubmit:t=>{y({...t,avatar:h})}}),[A,j]=r.useState(!1),E=()=>{j(!0),x(!1),m(null)};return r.useEffect(()=>{g&&(c.warning("You are already logged in with registered account"),u("/poll"))}),e.jsxs("div",{className:"flex md:flex-row flex-col-reverse border bg-white border-sky-400 mx-2 my-4 md:m-20 rounded-2xl overflow-hidden",children:[e.jsx("div",{className:`flex-1 ${b.flexStart} flex-col xl:px-0 sm:px-16 px-6 p-16`,children:e.jsxs("div",{className:"w-full flex flex-col items-center",children:[e.jsxs("div",{className:"mb-5",children:[e.jsx("h2",{className:"font-bold text-3xl md:text-4xl mb-1",children:"Sign up"}),e.jsxs("p",{className:"text-[12px] md:text-sm text-slate-600",children:["Not a member? ",e.jsx("a",{href:"#",className:"text-sky-700",children:"Start a 14 day free trial"})]}),e.jsxs("p",{className:"text-[12px] md:text-sm text-slate-600",children:["Already have an account ",e.jsx(U,{to:"/login",className:"text-sky-600",children:"Login"})," "]})]}),e.jsxs("div",{className:"w-full md:w-[80%]",children:[e.jsxs("form",{method:"POST",onSubmit:S,children:[e.jsx("div",{className:"mb-2",children:v?e.jsxs("div",{className:"rounded-xl border-[2px]  border-dashed border-stone-300 p-3 flex",children:[e.jsxs("div",{className:"relative flex justify-center items-center group rounded-full h-48 w-48 overflow-hidden ",children:[e.jsx("img",{src:URL.createObjectURL(h),alt:"Profile pic",className:" group-hover:opacity-40 transition-opacity duration-300"}),e.jsx("button",{type:"button",onClick:E,className:"absolute text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold",children:"change Image"})]}),e.jsx("button",{type:"button",children:"Crop Image"})]}):e.jsx(O,{onImageSelect:C,clicked:A,setClicked:j})}),e.jsxs("div",{className:"mb-2",children:[e.jsx("label",{htmlFor:"name",className:"text-sm font-bold ",children:"Name:"}),e.jsx("div",{children:e.jsx("input",{id:"name",name:"name",type:"name",autoComplete:"name",placeholder:"Enter your email address",className:"rounded-md border-2 border-sky-500 w-full py-1 px-3 mt-1",value:l.name,onChange:d,onBlur:o})}),s.name&&n.name?e.jsx("p",{className:"text-red-600 text-[12px] mt-[3px]",children:s.name}):null]}),e.jsxs("div",{className:"mb-2",children:[e.jsx("label",{htmlFor:"email",className:"text-sm font-bold ",children:"Email address:"}),e.jsx("div",{children:e.jsx("input",{id:"email",name:"email",type:"email",autoComplete:"email",placeholder:"Enter your email address",className:"rounded-md border-2 border-sky-500 w-full py-1 px-3 mt-1",value:l.email,onChange:d,onBlur:o})}),s.email&&n.email?e.jsx("p",{className:"text-red-600 text-[12px] mt-[3px]",children:s.email}):null]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"password",className:"text-sm font-bold",children:"Password:"}),e.jsx("div",{children:e.jsx("input",{id:"password",name:"password",type:"password",placeholder:"Enter password",autoComplete:"current-password",className:"rounded-md border-2 border-sky-500 w-full py-1 px-3 mt-1",value:l.password,onChange:d,onBlur:o})}),s.password&&n.password?e.jsx("p",{className:"text-red-600 text-[12px] mt-[3px]",children:s.password}):null]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"cpassword",className:"text-sm font-bold",children:"Confirm Password:"}),e.jsx("div",{className:"lb",children:e.jsx("input",{id:"cpassword",name:"cpassword",type:"password",placeholder:"Enter password again",autoComplete:"current-password",className:"rounded-md border-2 border-sky-500 w-full py-1 px-3 mt-1",value:l.cpassword,onChange:d,onBlur:o})}),s.cpassword&&n.cpassword?e.jsx("p",{className:"text-red-600 text-[12px] mt-[3px]",children:s.cpassword}):null]}),e.jsx("div",{className:"my-6",children:e.jsx("button",{type:"submit",className:`font-poppins flex justify-center items-center gap-2 font-bold text-primary bg-blue-gradient rounded-md outline-none  p-2 md:px-4 w-full ${p?"opacity-75 cursor-not-allowed":""}`,disabled:p,children:p?e.jsx(L,{title:"Signing Up..."}):"Sign Up"})})]}),e.jsxs("div",{className:"mt-10",children:[e.jsxs("div",{className:"flex relative items-center justify-center",children:[e.jsx("div",{className:"h-0 w-full border border-slate-600 absolute","aria-hidden":"true"}),e.jsx("div",{className:"absolute",children:e.jsx("span",{className:"bg-white p-3",children:"Or continue with"})})]}),e.jsxs("div",{className:"flex mt-10 w-full justify-between",children:[e.jsxs("a",{href:"#",className:"flex h-9 font-poppins bg-blue-gradient items-center justify-center w-2/5 text-slate-500 dark:text-red-50 font-bold rounded-xl",children:[e.jsx("svg",{className:"w-5 mr-3","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{d:"M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"})}),e.jsx("span",{className:"",children:"Twitter"})]}),e.jsxs("a",{href:"#",className:"flex h-9 font-poppins bg-black-gradient items-center justify-center w-2/5 text-slate-500 dark:text-red-50 font-bold rounded-xl",children:[e.jsx("svg",{className:"w-5 mr-3","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z",clipRule:"evenodd"})}),e.jsx("span",{className:"",children:"GitHub"})]})]})]})]})]})}),e.jsx("div",{className:`flex-1 flex ${b.flexCenter} relative md:mx-2 md:mt-0 mt-6 mx-10`,children:e.jsx("img",{className:"w-[100%] h-[100%] relative z-[5]",src:$,alt:""})})]})};export{J as default};
