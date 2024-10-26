import{R as f,c as b,r as d}from"./index-a1485a9d.js";function I(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function D(r,a){return D=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,n){return e.__proto__=n,e},D(r,a)}function S(){return S=Object.assign?Object.assign.bind():function(r){for(var a=1;a<arguments.length;a++){var l=arguments[a];for(var e in l)Object.prototype.hasOwnProperty.call(l,e)&&(r[e]=l[e])}return r},S.apply(this,arguments)}function M(r,a){if(r==null)return{};var l={},e=Object.keys(r),n,t;for(t=0;t<e.length;t++)n=e[t],!(a.indexOf(n)>=0)&&(l[n]=r[n]);return l}function _(r,a){r.prototype=Object.create(a.prototype),r.prototype.constructor=r,D(r,a)}function y(r,a){return r.classList?!!a&&r.classList.contains(a):(" "+(r.className.baseVal||r.className)+" ").indexOf(" "+a+" ")!==-1}function U(r,a){r.classList?r.classList.add(a):y(r,a)||(typeof r.className=="string"?r.className=r.className+" "+a:r.setAttribute("class",(r.className&&r.className.baseVal||"")+" "+a))}function L(r,a){return r.replace(new RegExp("(^|\\s)"+a+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function F(r,a){r.classList?r.classList.remove(a):typeof r.className=="string"?r.className=L(r.className,a):r.setAttribute("class",L(r.className&&r.className.baseVal||"",a))}const j={disabled:!1},T=f.createContext(null);var k=function(a){return a.scrollTop},N="unmounted",E="exited",m="entering",C="entered",R="exiting",h=function(r){_(a,r);function a(e,n){var t;t=r.call(this,e,n)||this;var i=n,s=i&&!i.isMounting?e.enter:e.appear,o;return t.appearStatus=null,e.in?s?(o=E,t.appearStatus=m):o=C:e.unmountOnExit||e.mountOnEnter?o=N:o=E,t.state={status:o},t.nextCallback=null,t}a.getDerivedStateFromProps=function(n,t){var i=n.in;return i&&t.status===N?{status:E}:null};var l=a.prototype;return l.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},l.componentDidUpdate=function(n){var t=null;if(n!==this.props){var i=this.state.status;this.props.in?i!==m&&i!==C&&(t=m):(i===m||i===C)&&(t=R)}this.updateStatus(!1,t)},l.componentWillUnmount=function(){this.cancelNextCallback()},l.getTimeouts=function(){var n=this.props.timeout,t,i,s;return t=i=s=n,n!=null&&typeof n!="number"&&(t=n.exit,i=n.enter,s=n.appear!==void 0?n.appear:i),{exit:t,enter:i,appear:s}},l.updateStatus=function(n,t){if(n===void 0&&(n=!1),t!==null)if(this.cancelNextCallback(),t===m){if(this.props.unmountOnExit||this.props.mountOnEnter){var i=this.props.nodeRef?this.props.nodeRef.current:b.findDOMNode(this);i&&k(i)}this.performEnter(n)}else this.performExit();else this.props.unmountOnExit&&this.state.status===E&&this.setState({status:N})},l.performEnter=function(n){var t=this,i=this.props.enter,s=this.context?this.context.isMounting:n,o=this.props.nodeRef?[s]:[b.findDOMNode(this),s],u=o[0],p=o[1],c=this.getTimeouts(),v=s?c.appear:c.enter;if(!n&&!i||j.disabled){this.safeSetState({status:C},function(){t.props.onEntered(u)});return}this.props.onEnter(u,p),this.safeSetState({status:m},function(){t.props.onEntering(u,p),t.onTransitionEnd(v,function(){t.safeSetState({status:C},function(){t.props.onEntered(u,p)})})})},l.performExit=function(){var n=this,t=this.props.exit,i=this.getTimeouts(),s=this.props.nodeRef?void 0:b.findDOMNode(this);if(!t||j.disabled){this.safeSetState({status:E},function(){n.props.onExited(s)});return}this.props.onExit(s),this.safeSetState({status:R},function(){n.props.onExiting(s),n.onTransitionEnd(i.exit,function(){n.safeSetState({status:E},function(){n.props.onExited(s)})})})},l.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},l.safeSetState=function(n,t){t=this.setNextCallback(t),this.setState(n,t)},l.setNextCallback=function(n){var t=this,i=!0;return this.nextCallback=function(s){i&&(i=!1,t.nextCallback=null,n(s))},this.nextCallback.cancel=function(){i=!1},this.nextCallback},l.onTransitionEnd=function(n,t){this.setNextCallback(t);var i=this.props.nodeRef?this.props.nodeRef.current:b.findDOMNode(this),s=n==null&&!this.props.addEndListener;if(!i||s){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var o=this.props.nodeRef?[this.nextCallback]:[i,this.nextCallback],u=o[0],p=o[1];this.props.addEndListener(u,p)}n!=null&&setTimeout(this.nextCallback,n)},l.render=function(){var n=this.state.status;if(n===N)return null;var t=this.props,i=t.children;t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef;var s=M(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return f.createElement(T.Provider,{value:null},typeof i=="function"?i(n,s):f.cloneElement(f.Children.only(i),s))},a}(f.Component);h.contextType=T;h.propTypes={};function g(){}h.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:g,onEntering:g,onEntered:g,onExit:g,onExiting:g,onExited:g};h.UNMOUNTED=N;h.EXITED=E;h.ENTERING=m;h.ENTERED=C;h.EXITING=R;const G=h;var w=function(a,l){return a&&l&&l.split(" ").forEach(function(e){return U(a,e)})},O=function(a,l){return a&&l&&l.split(" ").forEach(function(e){return F(a,e)})},P=function(r){_(a,r);function a(){for(var e,n=arguments.length,t=new Array(n),i=0;i<n;i++)t[i]=arguments[i];return e=r.call.apply(r,[this].concat(t))||this,e.appliedClasses={appear:{},enter:{},exit:{}},e.onEnter=function(s,o){var u=e.resolveArguments(s,o),p=u[0],c=u[1];e.removeClasses(p,"exit"),e.addClass(p,c?"appear":"enter","base"),e.props.onEnter&&e.props.onEnter(s,o)},e.onEntering=function(s,o){var u=e.resolveArguments(s,o),p=u[0],c=u[1],v=c?"appear":"enter";e.addClass(p,v,"active"),e.props.onEntering&&e.props.onEntering(s,o)},e.onEntered=function(s,o){var u=e.resolveArguments(s,o),p=u[0],c=u[1],v=c?"appear":"enter";e.removeClasses(p,v),e.addClass(p,v,"done"),e.props.onEntered&&e.props.onEntered(s,o)},e.onExit=function(s){var o=e.resolveArguments(s),u=o[0];e.removeClasses(u,"appear"),e.removeClasses(u,"enter"),e.addClass(u,"exit","base"),e.props.onExit&&e.props.onExit(s)},e.onExiting=function(s){var o=e.resolveArguments(s),u=o[0];e.addClass(u,"exit","active"),e.props.onExiting&&e.props.onExiting(s)},e.onExited=function(s){var o=e.resolveArguments(s),u=o[0];e.removeClasses(u,"exit"),e.addClass(u,"exit","done"),e.props.onExited&&e.props.onExited(s)},e.resolveArguments=function(s,o){return e.props.nodeRef?[e.props.nodeRef.current,s]:[s,o]},e.getClassNames=function(s){var o=e.props.classNames,u=typeof o=="string",p=u&&o?o+"-":"",c=u?""+p+s:o[s],v=u?c+"-active":o[s+"Active"],V=u?c+"-done":o[s+"Done"];return{baseClassName:c,activeClassName:v,doneClassName:V}},e}var l=a.prototype;return l.addClass=function(n,t,i){var s=this.getClassNames(t)[i+"ClassName"],o=this.getClassNames("enter"),u=o.doneClassName;t==="appear"&&i==="done"&&u&&(s+=" "+u),i==="active"&&n&&k(n),s&&(this.appliedClasses[t][i]=s,w(n,s))},l.removeClasses=function(n,t){var i=this.appliedClasses[t],s=i.base,o=i.active,u=i.done;this.appliedClasses[t]={},s&&O(n,s),o&&O(n,o),u&&O(n,u)},l.render=function(){var n=this.props;n.classNames;var t=M(n,["classNames"]);return f.createElement(G,S({},t,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},a}(f.Component);P.defaultProps={classNames:""};P.propTypes={};const J=P;function $(r,a){var l=function(t){return a&&d.isValidElement(t)?a(t):t},e=Object.create(null);return r&&d.Children.map(r,function(n){return n}).forEach(function(n){e[n.key]=l(n)}),e}function W(r,a){r=r||{},a=a||{};function l(p){return p in a?a[p]:r[p]}var e=Object.create(null),n=[];for(var t in r)t in a?n.length&&(e[t]=n,n=[]):n.push(t);var i,s={};for(var o in a){if(e[o])for(i=0;i<e[o].length;i++){var u=e[o][i];s[e[o][i]]=l(u)}s[o]=l(o)}for(i=0;i<n.length;i++)s[n[i]]=l(n[i]);return s}function x(r,a,l){return l[a]!=null?l[a]:r.props[a]}function X(r,a){return $(r.children,function(l){return d.cloneElement(l,{onExited:a.bind(null,l),in:!0,appear:x(l,"appear",r),enter:x(l,"enter",r),exit:x(l,"exit",r)})})}function z(r,a,l){var e=$(r.children),n=W(a,e);return Object.keys(n).forEach(function(t){var i=n[t];if(d.isValidElement(i)){var s=t in a,o=t in e,u=a[t],p=d.isValidElement(u)&&!u.props.in;o&&(!s||p)?n[t]=d.cloneElement(i,{onExited:l.bind(null,i),in:!0,exit:x(i,"exit",r),enter:x(i,"enter",r)}):!o&&s&&!p?n[t]=d.cloneElement(i,{in:!1}):o&&s&&d.isValidElement(u)&&(n[t]=d.cloneElement(i,{onExited:l.bind(null,i),in:u.props.in,exit:x(i,"exit",r),enter:x(i,"enter",r)}))}}),n}var H=Object.values||function(r){return Object.keys(r).map(function(a){return r[a]})},q={component:"div",childFactory:function(a){return a}},A=function(r){_(a,r);function a(e,n){var t;t=r.call(this,e,n)||this;var i=t.handleExited.bind(I(t));return t.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},t}var l=a.prototype;return l.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},l.componentWillUnmount=function(){this.mounted=!1},a.getDerivedStateFromProps=function(n,t){var i=t.children,s=t.handleExited,o=t.firstRender;return{children:o?X(n,s):z(n,i,s),firstRender:!1}},l.handleExited=function(n,t){var i=$(this.props.children);n.key in i||(n.props.onExited&&n.props.onExited(t),this.mounted&&this.setState(function(s){var o=S({},s.children);return delete o[n.key],{children:o}}))},l.render=function(){var n=this.props,t=n.component,i=n.childFactory,s=M(n,["component","childFactory"]),o=this.state.contextValue,u=H(this.state.children).map(i);return delete s.appear,delete s.enter,delete s.exit,t===null?f.createElement(T.Provider,{value:o},u):f.createElement(T.Provider,{value:o},f.createElement(t,s,u))},a}(f.Component);A.propTypes={};A.defaultProps=q;const Q=A;export{J as C,Q as T};