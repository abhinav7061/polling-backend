import{u as f,j as e}from"./index-4dcbfe16.js";import{s as g}from"./styles-e7ca6728.js";import{w as n}from"./index-69a0fb70.js";import{P as y}from"./index-91dbd293.js";import"./index-a290fad1.js";const P="http://localhost:5000/api/v1",D=()=>{const i=f(),c={question:"",description:"",optionList:[],endDate:""},p=async(s,o,a,r)=>{const d=s,h=a.map(t=>({subject:t})),u=new Date(r);try{const t=await fetch(`${P}/poll/createPoll`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({title:d,description:o,options:h,endDate:u})}),l=await t.json();t.status===400||l.success===!1?n.error(l.message):(n.success("Your poll has been created successfully"),i("/poll"))}catch(t){console.log("Error while creating the poll",t)}},m=({question:s,description:o,optionList:a,endDate:r})=>{p(s,o,a,r)};return e.jsxs(e.Fragment,{children:[e.jsx("h1",{className:`${g.heading2} mb-6`,children:"Create Free Poll With PollLab"}),e.jsx(y,{handleSubmit:m,initialData:c,reset:!0,type:"Create"})]})};export{D as default};