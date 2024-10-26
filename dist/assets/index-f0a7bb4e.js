import{j as l,r as g,U,L as I}from"./index-a1485a9d.js";import{s as O}from"./styles-12bc90a9.js";import{b as R}from"./SpinLoader-9c7d013d.js";import{w as j}from"./index-328a23ee.js";const L=({message:e,action:t})=>l.jsxs("div",{className:"flex items-center justify-start gap-3 w-full bg-red-500/10 border border-red-300 px-5 py-2 rounded-lg",children:[l.jsx("svg",{className:"mx-auto h-6 text-red-400","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 20",children:l.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"})}),l.jsxs("div",{className:"flex flex-wrap gap-1 flex-1 items-start",children:[l.jsx("p",{className:"text-justify text-base me-3",children:e}),t&&l.jsx("button",{className:"px-3 text-blue-400 border border-blue-300 hover:bg-sky-600/40 hover:text-white rounded-md",type:"button",onClick:t,children:"Retry"})]})]}),_="https://mern-polling.onrender.com/api/v1",Je=({userId:e,children:t,imageClassName:n,nameClassName:r})=>{const{userInfo:o}=g.useContext(U),[i,a]=g.useState({}),[u,s]=g.useState(!0),[d,f]=g.useState(null),h=async()=>{s(!0),f(null);try{const w=await fetch(`${_}/user/${e}`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"}),c=await w.json();if(c.success&&w.ok)a(c.user);else throw new Error((c==null?void 0:c.message)||"Server Error")}catch(w){console.error("Error fetching user:",w),f(w.message)}finally{s(!1)}};return g.useEffect(()=>{h()},[]),l.jsx("div",{className:"flex md:p-3 p-1 justify-between items-center",children:d?l.jsx(L,{message:"Error fetching the user",action:h}):u?l.jsx(R,{}):l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"flex",children:[l.jsx(I,{to:`/poll/profile/${i._id}`,className:`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 ${n}`,children:l.jsx("img",{src:i.avatar.url,alt:"profile image",title:`See ${o._id==e?"Your":`${i.name}'s`} profile`,className:"rounded-full object-top object-cover bg-slate-300 w-full h-full"})}),l.jsxs("div",{className:"md:ml-3 sm:ml-2 ml-1 max-w-[250px] lg:max-w-[350px]",children:[l.jsx("h4",{className:`text-sm sm:text-base font-semibold line-clamp-1 ${r}`,children:i.name||"Anonymous User"}),l.jsx("span",{className:`${O.smHeading} text-gray-600 line-clamp-1 font-thin`,children:i.myStatus||""})]})]}),t]})})},A="https://mern-polling.onrender.com/api/v1",Ze=({userToFollow:e,callback:t,heading:n="Follow",title:r,className:o})=>{const[i,a]=g.useState(!1),u=async()=>{a(!0);try{const s=await fetch(`${A}/followers_followings/follow/${e}`,{method:"PUT",headers:{"Content-Type":"application/json"},credentials:"include"}),d=await s.json();if(s.ok&&d.success)t&&t();else throw new Error(d.message)}catch(s){j.error(s.message)}finally{a(!1)}};return l.jsxs("button",{className:`flex gap-1 items-center hover:text-green-700 px-2 py-1 hover:bg-green-100 rounded-md cursor-pointer ${o}`,onClick:u,disabled:i,title:r,children:[i?l.jsxs("svg",{"aria-hidden":"true",className:"w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-3.5 lg:h-3.5 text-gray-200 animate-spin dark:text-gray-400 fill-green-700",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[l.jsx("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),l.jsx("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]}):l.jsx("ion-icon",{name:"add-circle-outline"}),n]})},X="https://mern-polling.onrender.com/api/v1",Qe=({userId:e,userToUnfollowId:t,callback:n,heading:r="Unfollow",title:o,className:i})=>{const[a,u]=g.useState(!1),s=async()=>{u(!0);try{const d=await fetch(`${X}/followers_followings/unFollow?userToUnfollowId=${encodeURIComponent(t)}&userId=${encodeURIComponent(e)}`,{method:"DELETE",headers:{"Content-Type":"application/json"},credentials:"include"}),f=await d.json();if(d.ok&&f.success)n&&n();else throw new Error(f.message)}catch(d){j.error(d.message)}finally{u(!1)}};return l.jsxs("button",{className:`flex gap-1 items-center hover:text-red-700 px-2 py-1 hover:bg-red-100 rounded-md cursor-pointer ${i}`,onClick:s,disabled:a,title:o,children:[a?l.jsxs("svg",{"aria-hidden":"true",className:"w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-3.5 lg:h-3.5 text-gray-200 animate-spin dark:text-gray-400 fill-red-700",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[l.jsx("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),l.jsx("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]}):l.jsx("ion-icon",{name:"close-circle-outline"}),r]})},Be=({Btn:e,dropDownElm:t,showDropDown:n,setShowDropdown:r,className:o})=>{const i=g.useRef(null);return g.useEffect(()=>{const a=u=>{i.current&&!i.current.contains(u.target)&&r(!1)};return document.addEventListener("mousedown",a),()=>{document.removeEventListener("mousedown",a)}},[]),l.jsxs("div",{ref:i,className:`relative ${o}`,children:[e,n&&t]})},Y="https://mern-polling.onrender.com/api/v1",Ge=({followerId:e,followingId:t})=>{const[n,r]=g.useState(!1),[o,i]=g.useState(!1);return{isFollower:n,loading:o,checkFollowing:async()=>{i(!0);try{const s=await(await fetch(`${Y}/followers_followings/checkFollowing?followerId=${encodeURIComponent(e)}&followingId=${encodeURIComponent(t)}`)).json();if(s.success)r(s.following);else throw new Error((s==null?void 0:s.message)||"Server Error")}catch(u){console.log(u),j.error(u.message)}finally{i(!1)}}}};function S(e){"@babel/helpers - typeof";return S=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(e)}function v(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function m(e){v(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||S(e)==="object"&&t==="[object Date]"?new Date(e.getTime()):typeof e=="number"||t==="[object Number]"?new Date(e):((typeof e=="string"||t==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}var V={};function z(){return V}function T(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}function M(e,t){v(2,arguments);var n=m(e),r=m(t),o=n.getTime()-r.getTime();return o<0?-1:o>0?1:o}function q(e,t){v(2,arguments);var n=m(e),r=m(t),o=n.getFullYear()-r.getFullYear(),i=n.getMonth()-r.getMonth();return o*12+i}function H(e,t){return v(2,arguments),m(e).getTime()-m(t).getTime()}var N={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(t){return t<0?Math.ceil(t):Math.floor(t)}},J="trunc";function Z(e){return e?N[e]:N[J]}function Q(e){v(1,arguments);var t=m(e);return t.setHours(23,59,59,999),t}function B(e){v(1,arguments);var t=m(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(23,59,59,999),t}function G(e){v(1,arguments);var t=m(e);return Q(t).getTime()===B(t).getTime()}function K(e,t){v(2,arguments);var n=m(e),r=m(t),o=M(n,r),i=Math.abs(q(n,r)),a;if(i<1)a=0;else{n.getMonth()===1&&n.getDate()>27&&n.setDate(30),n.setMonth(n.getMonth()-o*i);var u=M(n,r)===-o;G(m(e))&&i===1&&M(e,r)===1&&(u=!1),a=o*(i-Number(u))}return a===0?0:a}function ee(e,t,n){v(2,arguments);var r=H(e,t)/1e3;return Z(n==null?void 0:n.roundingMethod)(r)}var te={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},ne=function(t,n,r){var o,i=te[t];return typeof i=="string"?o=i:n===1?o=i.one:o=i.other.replace("{{count}}",n.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+o:o+" ago":o};const re=ne;function C(e){return function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth,r=e.formats[n]||e.formats[e.defaultWidth];return r}}var ae={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},oe={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},ie={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},se={date:C({formats:ae,defaultWidth:"full"}),time:C({formats:oe,defaultWidth:"full"}),dateTime:C({formats:ie,defaultWidth:"full"})};const le=se;var ue={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},de=function(t,n,r,o){return ue[t]};const ce=de;function b(e){return function(t,n){var r=n!=null&&n.context?String(n.context):"standalone",o;if(r==="formatting"&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,a=n!=null&&n.width?String(n.width):i;o=e.formattingValues[a]||e.formattingValues[i]}else{var u=e.defaultWidth,s=n!=null&&n.width?String(n.width):e.defaultWidth;o=e.values[s]||e.values[u]}var d=e.argumentCallback?e.argumentCallback(t):t;return o[d]}}var me={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},fe={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},he={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},ge={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},ve={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},we={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},pe=function(t,n){var r=Number(t),o=r%100;if(o>20||o<10)switch(o%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},be={ordinalNumber:pe,era:b({values:me,defaultWidth:"wide"}),quarter:b({values:fe,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:b({values:he,defaultWidth:"wide"}),day:b({values:ge,defaultWidth:"wide"}),dayPeriod:b({values:ve,defaultWidth:"wide",formattingValues:we,defaultFormattingWidth:"wide"})};const ye=be;function y(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.width,o=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],i=t.match(o);if(!i)return null;var a=i[0],u=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],s=Array.isArray(u)?xe(u,function(h){return h.test(a)}):Me(u,function(h){return h.test(a)}),d;d=e.valueCallback?e.valueCallback(s):s,d=n.valueCallback?n.valueCallback(d):d;var f=t.slice(a.length);return{value:d,rest:f}}}function Me(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}function xe(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}function Ce(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.match(e.matchPattern);if(!r)return null;var o=r[0],i=t.match(e.parsePattern);if(!i)return null;var a=e.valueCallback?e.valueCallback(i[0]):i[0];a=n.valueCallback?n.valueCallback(a):a;var u=t.slice(o.length);return{value:a,rest:u}}}var De=/^(\d+)(th|st|nd|rd)?/i,Se=/\d+/i,je={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Pe={any:[/^b/i,/^(a|c)/i]},Te={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Ne={any:[/1/i,/2/i,/3/i,/4/i]},ke={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},We={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Fe={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Ee={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},$e={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Ue={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Ie={ordinalNumber:Ce({matchPattern:De,parsePattern:Se,valueCallback:function(t){return parseInt(t,10)}}),era:y({matchPatterns:je,defaultMatchWidth:"wide",parsePatterns:Pe,defaultParseWidth:"any"}),quarter:y({matchPatterns:Te,defaultMatchWidth:"wide",parsePatterns:Ne,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:y({matchPatterns:ke,defaultMatchWidth:"wide",parsePatterns:We,defaultParseWidth:"any"}),day:y({matchPatterns:Fe,defaultMatchWidth:"wide",parsePatterns:Ee,defaultParseWidth:"any"}),dayPeriod:y({matchPatterns:$e,defaultMatchWidth:"any",parsePatterns:Ue,defaultParseWidth:"any"})};const Oe=Ie;var Re={code:"en-US",formatDistance:re,formatLong:le,formatRelative:ce,localize:ye,match:Oe,options:{weekStartsOn:0,firstWeekContainsDate:1}};const Le=Re;function W(e,t){if(e==null)throw new TypeError("assign requires that input parameter not be null or undefined");for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}function _e(e){return W({},e)}var k=1440,Ae=2520,D=43200,Xe=86400;function Ye(e,t,n){var r,o;v(2,arguments);var i=z(),a=(r=(o=n==null?void 0:n.locale)!==null&&o!==void 0?o:i.locale)!==null&&r!==void 0?r:Le;if(!a.formatDistance)throw new RangeError("locale must contain formatDistance property");var u=M(e,t);if(isNaN(u))throw new RangeError("Invalid time value");var s=W(_e(n),{addSuffix:!!(n!=null&&n.addSuffix),comparison:u}),d,f;u>0?(d=m(t),f=m(e)):(d=m(e),f=m(t));var h=ee(f,d),w=(T(f)-T(d))/1e3,c=Math.round((h-w)/60),p;if(c<2)return n!=null&&n.includeSeconds?h<5?a.formatDistance("lessThanXSeconds",5,s):h<10?a.formatDistance("lessThanXSeconds",10,s):h<20?a.formatDistance("lessThanXSeconds",20,s):h<40?a.formatDistance("halfAMinute",0,s):h<60?a.formatDistance("lessThanXMinutes",1,s):a.formatDistance("xMinutes",1,s):c===0?a.formatDistance("lessThanXMinutes",1,s):a.formatDistance("xMinutes",c,s);if(c<45)return a.formatDistance("xMinutes",c,s);if(c<90)return a.formatDistance("aboutXHours",1,s);if(c<k){var F=Math.round(c/60);return a.formatDistance("aboutXHours",F,s)}else{if(c<Ae)return a.formatDistance("xDays",1,s);if(c<D){var E=Math.round(c/k);return a.formatDistance("xDays",E,s)}else if(c<Xe)return p=Math.round(c/D),a.formatDistance("aboutXMonths",p,s)}if(p=K(f,d),p<12){var $=Math.round(c/D);return a.formatDistance("xMonths",$,s)}else{var P=p%12,x=Math.floor(p/12);return P<3?a.formatDistance("aboutXYears",x,s):P<9?a.formatDistance("overXYears",x,s):a.formatDistance("almostXYears",x+1,s)}}function Ke(e,t){return v(1,arguments),Ye(e,Date.now(),t)}export{Be as D,Ze as F,Qe as U,Je as a,H as d,Ke as f,v as r,Ge as u};