import{r as s,U as r,u as n}from"./index-395cc95b.js";import{w as a}from"./index-1503e879.js";const c=({children:o})=>{const{userInfo:t}=s.useContext(r),e=n();return s.useEffect(()=>{t||(e("/login"),a.info("Login First To Access The Resources"))},[t,e]),t?o:null};export{c as default};