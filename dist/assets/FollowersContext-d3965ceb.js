import{r as o,j as v}from"./index-a1485a9d.js";const C="https://mern-polling.onrender.com/api/v1",E=o.createContext(),j=({children:c})=>{const[i,l]=o.useState([]),[w,g]=o.useState(0),[f,u]=o.useState(1),[F,t]=o.useState(!0),[h,r]=o.useState(!1),[p,n]=o.useState(null),x=async(S,d,a=5)=>{r(!0),n(null);try{const s=await fetch(`${C}/followers_followings/followings/${S}?page=${d}&pageSize=${a}`,{credentials:"include"}),e=await s.json();if(s.ok&&e.success)l(m=>[...m,...e.followings]),g(e.totalFollowings),e.followings.length<a&&t(!1);else throw new Error((e==null?void 0:e.message)||"Server Error")}catch(s){console.error(s),n(s.message)}finally{r(!1)}};return v.jsx(E.Provider,{value:{followings:i,setFollowings:l,totalFollowings:w,followingsPage:f,setFollowingsPage:u,followingsHasMore:F,setFollowingsHasMore:t,followingsLoading:h,fetchFollowingErrorMessage:p,fetchFollowings:x},children:c})},y=()=>o.useContext(E),M="https://mern-polling.onrender.com/api/v1",$=o.createContext(),H=({children:c})=>{const[i,l]=o.useState([]),[w,g]=o.useState(0),[f,u]=o.useState(1),[F,t]=o.useState(!0),[h,r]=o.useState(!1),[p,n]=o.useState(null),x=async(S,d,a=5)=>{r(!0),n(null);try{const s=await fetch(`${M}/followers_followings/followers/${S}?page=${d}&&pageSize=${a}`,{credentials:"include"}),e=await s.json();if(s.ok&&e.success)l(m=>[...m,...e.followers]),g(e.totalFollowers),e.followers.length<a&&t(!1);else throw new Error((e==null?void 0:e.message)||"Server Error")}catch(s){console.error(s),n(s.message)}finally{r(!1)}};return v.jsx($.Provider,{value:{followers:i,setFollowers:l,totalFollowers:w,followersPage:f,setFollowersPage:u,followersHasMore:F,setFollowersHasMore:t,followersLoading:h,fetchFollowersErrorMessage:p,fetchFollowers:x},children:c})},L=()=>o.useContext($);export{j as F,H as a,y as b,L as u};
