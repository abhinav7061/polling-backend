import{r as l,U as c,u as i,j as e}from"./index-395cc95b.js";import{w as t}from"./index-1503e879.js";import{s as u}from"./styles-12bc90a9.js";const p="/assets/logo-a78d9440.svg",g="http://localhost:5000/api/v1",h=()=>{const{setUserInfo:s,userInfo:f}=l.useContext(c),r=i(),n=async()=>{try{const o=await fetch(`${g}/user/logout`,{method:"POST",credentials:"include"}),a=await o.json();o.ok?(t.success("Logged out successfully"),s(null),r("/"),console.log("logout successfully")):(t.error("Logout failed"),console.error("Logout failed:",a.message))}catch(o){t.info("Error during logout"),console.log("Error during logout:",o)}};return e.jsx("div",{className:`text-white ml-2 cursor-pointer flex items-center ${u.heading4}`,onClick:n,title:"Logout",children:e.jsx("ion-icon",{name:"log-out-outline"})})},j=({children:s})=>e.jsx("div",{className:"flex justify-center items-center",children:s});export{j as C,h as L,p as l};