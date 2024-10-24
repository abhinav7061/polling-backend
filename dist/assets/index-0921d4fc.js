import{j as e,r as a}from"./index-a1485a9d.js";import{s as i}from"./styles-12bc90a9.js";import{B as D}from"./index-f1871076.js";import{w as l}from"./index-328a23ee.js";const S="/assets/delete-8ed14ac5.png",E="/assets/add-827d9a84.png";function $(r){return e.jsx(e.Fragment,{children:e.jsxs("li",{className:"flex w-full",children:[e.jsx("span",{onClick:()=>{r.onSelect(r.id)},className:` ${i.flexCenter} w-8 rounded-md hover:bg-red-300 hover:border-slate-500 hover:border-2 px-2 py-1 cursor-pointer mr-6 bg-slate-300`,title:"Click to delete this option",children:e.jsx("img",{src:S,alt:"X"})}),e.jsxs("h1",{className:"mr-3",children:[r.id+1,"."]}),r.listText]})})}const P=({handleSubmit:r,initialData:o,type:b,reset:v})=>{const[d,h]=a.useState(o.question||""),[c,f]=a.useState(o.description||""),[m,p]=a.useState(""),[s,u]=a.useState(o.optionList||[]),[g,j]=a.useState(o.endDate instanceof Date?new Date(o.endDate).toISOString().split("T")[0]:""),w=()=>{if(m==="")return l.error("You can not add a option blank");if(s.includes(m))return l.error("You have already added this option");u(t=>[...t,m]),p("")},y=t=>{s.length===1?l.warning("This is last option! Delete it?",{action:{label:"Yes",onClick:()=>u(n=>n.filter((C,x)=>x!==t))}}):u(n=>n.filter((C,x)=>x!==t))},N=t=>{if(t.preventDefault(),!d||d.length<3)return l.error("Length of question should be min 3");if(!c||c.length<5)return l.error("Description is required and length should be at least 5 characters");if(!s||s.length<2)return l.error("Minimum two options is required");v&&(h(""),f(""),p(""),u([]),j("")),r({question:d,description:c,optionList:s,endDate:g})};return e.jsx("div",{className:`${i.flexCenter}`,children:e.jsxs("form",{onSubmit:N,className:`${i.flexCenter} ${i.heading5} flex-col w-full sm:w-3/5 md:h-3/4 lg:w-1/2`,children:[e.jsx("textarea",{type:"text",placeholder:"Enter your question",value:d,onChange:t=>h(t.target.value),className:"w-full p-2 md:p-4 rounded-md mb-5"}),e.jsx("textarea",{type:"text",placeholder:"Enter your description",value:c,onChange:t=>f(t.target.value),className:"w-full p-2 md:p-4 rounded-md mb-5"}),e.jsxs("div",{className:"flex justify-between w-full items-cente",children:[e.jsx("input",{type:"text",placeholder:"Enter your option",value:m,onChange:t=>p(t.target.value),className:"w-4/5 p-2 md:py-3 md:px-4 rounded-md"}),e.jsx("button",{type:"button",title:"Click to add option",onClick:w,className:` ${i.flexCenter} md:w-12 sm:w-11 w-8 rounded-md hover:border-slate-500 hover:border-2 md:px-3 md:py-2 p-[5px]  bg-slate-300`,children:e.jsx("img",{src:E,alt:"Add Option",className:" object-contain"})})]}),e.jsxs("div",{className:"flex flex-wrap gap-3 py-4 w-full items-center font-semibold",children:[e.jsx("label",{htmlFor:"endDate",children:"Select End Date:"}),e.jsx("input",{type:"date",name:"endDate",id:"endDate",value:g,onChange:t=>j(t.target.value),className:"p-2 rounded-md text-slate-600  outline-none cursor-pointer"})]}),s.length>0&&e.jsxs("div",{className:"mt-6 w-full",children:[e.jsx("h1",{className:"text-[26px] font-semibold",children:"Your options"}),e.jsx("ol",{className:"my-6",children:s.map((t,n)=>e.jsx("div",{className:`${n>0?"mt-2.5":"mt-0"} px-3 py-1 hover:bg-slate-200 flex items-center text-[20px] rounded-md font-semibold`,children:e.jsx($,{listText:t,id:n,onSelect:y})},n))}),e.jsx(D,{type:"submit",title:`${b} poll`,styles:"px-5 py-2"})]})]})})};export{P};
