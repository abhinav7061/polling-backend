import{r as o,j as E}from"./index-395cc95b.js";const M="http://localhost:5000/api/v1",$=o.createContext(),j=({children:c})=>{const[w,l]=o.useState([]),[i,g]=o.useState(0),[f,u]=o.useState(1),[F,t]=o.useState(!0),[h,r]=o.useState(!1),[x,n]=o.useState(null),S=async(p,d,a=5)=>{r(!0),n(null);try{const s=await fetch(`${M}/followers_followings/followings/${p}?page=${d}&pageSize=${a}`,{credentials:"include"}),e=await s.json();if(s.ok&&e.success)l(v=>[...v,...e.followings]),g(e.totalFollowings),e.followings.length<a&&t(!1);else throw new Error((e==null?void 0:e.message)||"Server Error")}catch(s){console.error(s),n(s.message)}finally{r(!1)}};return E.jsx($.Provider,{value:{followings:w,setFollowings:l,totalFollowings:i,followingsPage:f,setFollowingsPage:u,followingsHasMore:F,setFollowingsHasMore:t,followingsLoading:h,fetchFollowingErrorMessage:x,fetchFollowings:S},children:c})},y=()=>o.useContext($),P="http://localhost:5000/api/v1",C=o.createContext(),H=({children:c})=>{const[w,l]=o.useState([]),[i,g]=o.useState(0),[f,u]=o.useState(1),[F,t]=o.useState(!0),[h,r]=o.useState(!1),[x,n]=o.useState(null),S=async(p,d,a=5)=>{r(!0),n(null);try{const s=await fetch(`${P}/followers_followings/followers/${p}?page=${d}&&pageSize=${a}`,{credentials:"include"}),e=await s.json();if(s.ok&&e.success)l(v=>[...v,...e.followers]),g(e.totalFollowers),e.followers.length<a&&t(!1);else throw new Error((e==null?void 0:e.message)||"Server Error")}catch(s){console.error(s),n(s.message)}finally{r(!1)}};return E.jsx(C.Provider,{value:{followers:w,setFollowers:l,totalFollowers:i,followersPage:f,setFollowersPage:u,followersHasMore:F,setFollowersHasMore:t,followersLoading:h,fetchFollowersErrorMessage:x,fetchFollowers:S},children:c})},L=()=>o.useContext(C);export{j as F,H as a,y as b,L as u};
