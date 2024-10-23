import{r as g,U as $,j as e,L as z}from"./index-9aec5bf0.js";import{u as L,b as M}from"./FollowersContext-a495b266.js";import{s as v}from"./styles-0ca58f2b.js";import{u as y,D as H,U as _,F as S,f as P,a as R}from"./index-0b1531bc.js";import{a as E}from"./SpinLoader-1fa1f2e1.js";import{E as Y}from"./index-01004776.js";import{w as j}from"./index-115b0bce.js";import{T as B,C as G}from"./TransitionGroup-32e1a896.js";const V=({userId:o,userName:s,profileUserId:t})=>{const{userInfo:l}=g.useContext($),[m,a]=g.useState(!1),[c,r]=g.useState(!1),[d,w]=g.useState(null),{isFollower:n,loading:f,checkFollowing:F}=y({followerId:l._id,followingId:o}),{isFollower:x,loading:i,checkFollowing:U}=y({followerId:o,followingId:l._id}),{followers:T,setFollowers:A}=L(),{followings:b,setFollowings:k}=M(),h=async N=>{if(a(!0),await F(),await U(),String(t)==String(l._id))switch(N){case"addFollowing":k([{_id:o,name:s,createdAt:new Date},...b.filter(u=>u._id!==o)]),j.success(`Successfully ddded ${s} to your followings`);break;case"removeFollowing":k(b.filter(u=>u._id!==o)),j.success(`Successfully removed ${s} from followings`);break;case"removeFollower":A(T.filter(u=>u._id!==o)),j.success(`Successfully removed ${s} from your followers`);break}},C=()=>String(l._id)==String(o)?e.jsxs(z,{to:"/poll/my_profile",className:"whitespace-nowrap px-2 p-1 flex items-center gap-1 rounded-md hover:bg-gray-200",title:"Visit to your Profile",children:[e.jsx("ion-icon",{name:"open-outline"}),"My Profile"]}):n&&x?e.jsxs(e.Fragment,{children:[e.jsx(_,{userId:l._id,userToUnfollowId:o,title:`Unfollow ${s}`,callback:()=>h("removeFollowing")}),e.jsx(_,{userId:o,userToUnfollowId:l._id,heading:"Remove",title:`Remove ${s} From Your Follower List`,callback:()=>h("removeFollower")})]}):!n&&x?e.jsxs(e.Fragment,{children:[e.jsx(_,{userId:o,userToUnfollowId:l._id,heading:"Remove",title:`Remove ${s} From Your Follower List`,callback:()=>h("removeFollower")}),e.jsx(S,{userToFollow:o,heading:"Follow_back",title:`Follow Back ${s}`,callback:()=>h("addFollowing")})]}):n&&!x?e.jsx(e.Fragment,{children:e.jsx(_,{userId:l._id,userToUnfollowId:o,title:`Unfollow ${s}`,callback:()=>h("removeFollowing")})}):e.jsx(S,{userToFollow:o,title:`Follow ${s}`,callback:()=>h("addFollowing")}),I=async()=>{c||(a(!0),await F(),await U()),r(!c)};return g.useEffect(()=>{a(f&&i),w(C)},[n,x,f,i]),e.jsx(H,{Btn:m?e.jsx(E,{}):e.jsx("span",{className:"cursor-pointer text-slate-500 hover:text-slate-900 p-1 mb-1 hover:bg-slate-300 flex rounded-full",onClick:I,children:e.jsx("ion-icon",{name:"ellipsis-vertical"})}),dropDownElm:e.jsx("span",{className:`absolute h-auto flex flex-col gap-1 ${v.heading6} p-2 border border-slate-500 rounded-lg shadow-black shadow-sm right-4 bg-white z-50 `,children:d}),showDropDown:c,setShowDropdown:r})},q="_followers_followings_item_1ezrs_2",p={followers_followings_item:q,"fade-slide-enter":"_fade-slide-enter_1ezrs_6","fade-slide-enter-active":"_fade-slide-enter-active_1ezrs_11","fade-slide-exit":"_fade-slide-exit_1ezrs_16","fade-slide-exit-active":"_fade-slide-exit-active_1ezrs_21"},D=({userId:o,userName:s,title:t,fetchUsers:l,users:m,setUsers:a,totalUsers:c,usersPage:r,setUsersPage:d,usersHasMore:w,setUsersHasMore:n,usersLoading:f,fetchUsersErrorMessage:F})=>{const{userInfo:x}=g.useContext($);return g.useEffect(()=>{a([]),d(1),n(!0)},[]),g.useEffect(()=>{w&&l(o,r)},[r,w]),e.jsxs("div",{className:"flex-1 bg-white p-8 rounded-xl h-fit max-h-screen overflow-auto",children:[e.jsx("h2",{className:`text-center ${v.heading4} font-bold mb-4 underline`,children:t}),F?e.jsx(Y,{heading:`Error Fetching ${t}`,message:F,action:()=>{r===1?l(o,r):d(1)}}):e.jsxs(e.Fragment,{children:[e.jsxs("h1",{className:"my-3",children:["Total Number of ",t,": ",c]}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(B,{className:"flex flex-col gap-3",children:m.map(i=>e.jsx(G,{timeout:500,classNames:{enter:p["fade-slide-enter"],enterActive:p["fade-slide-enter-active"],exit:p["fade-slide-exit"],exitActive:p["fade-slide-exit-active"]},children:e.jsx("div",{className:`p-2 border shadow-sm shadow-black rounded-lg ${p.followers_followings_item}`,title:` ${s} Follow ${x._id===i._id?"you":i.name} since ${P(new Date(i.createdAt),{addSuffix:!0})}.`,children:e.jsx(R,{userId:i._id,children:e.jsx(V,{userId:i._id,userName:i.name,profileUserId:o})})})},i._id))}),e.jsx("div",{className:`${v.heading6} flex w-full justify-center`,children:f?e.jsx(E,{}):e.jsx(e.Fragment,{children:w?e.jsx("div",{className:"cursor-pointer duration-500 hover:bg-sky-300 transition-colors rounded-md px-2 md:px-3 py-1",onClick:()=>d(i=>i+1),children:"Load More"}):e.jsxs("div",{children:["No More ",t]})})})]})]})]})},oe=({userId:o,userName:s="you"})=>{const{followers:t,setFollowers:l,totalFollowers:m,followersPage:a,setFollowersPage:c,followersHasMore:r,setFollowersHasMore:d,followersLoading:w,fetchFollowersErrorMessage:n,fetchFollowers:f}=L();return e.jsx(D,{userId:o,userName:s,title:"Followers",fetchUsers:f,users:t,setUsers:l,totalUsers:m,usersPage:a,setUsersPage:c,usersHasMore:r,setUsersHasMore:d,usersLoading:w,fetchUsersErrorMessage:n})},se=({userId:o,userName:s="You"})=>{const{followings:t,setFollowings:l,totalFollowings:m,followingsPage:a,setFollowingsPage:c,followingsHasMore:r,setFollowingsHasMore:d,followingsLoading:w,fetchFollowingErrorMessage:n,fetchFollowings:f}=M();return e.jsx(D,{userId:o,userName:s,title:"Followings",fetchUsers:f,users:t,setUsers:l,totalUsers:m,usersPage:a,setUsersPage:c,usersHasMore:r,setUsersHasMore:d,usersLoading:w,fetchUsersErrorMessage:n})};export{oe as F,se as a};
