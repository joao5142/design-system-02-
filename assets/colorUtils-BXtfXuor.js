import{B as U,s as X,F as L,C as V,c as _,a as Z,D as j,E as q}from"./vue.esm-bundler-CUTHD45Y.js";function Se(e,t){return n=>Object.keys(e).reduce((r,s)=>{const a=typeof e[s]=="object"&&e[s]!=null&&!Array.isArray(e[s])?e[s]:{type:e[s]};return n&&s in n?r[s]={...a,default:n[s]}:r[s]=a,t&&!r[s].source&&(r[s].source=t),r},{})}const C=typeof window<"u",Te=C&&"IntersectionObserver"in window,Re=C&&("ontouchstart"in window||window.navigator.maxTouchPoints>0);function z(e,t,n){const r=t.length-1;if(r<0)return e===void 0?n:e;for(let s=0;s<r;s++){if(e==null)return n;e=e[t[s]]}return e==null||e[t[r]]===void 0?n:e[t[r]]}function K(e,t){if(e===t)return!0;if(e instanceof Date&&t instanceof Date&&e.getTime()!==t.getTime()||e!==Object(e)||t!==Object(t))return!1;const n=Object.keys(e);return n.length!==Object.keys(t).length?!1:n.every(r=>K(e[r],t[r]))}function Fe(e,t,n){return e==null||!t||typeof t!="string"?n:e[t]!==void 0?e[t]:(t=t.replace(/\[(\w+)\]/g,".$1"),t=t.replace(/^\./,""),z(e,t.split("."),n))}function Me(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return Array.from({length:e},(n,r)=>t+r)}function $e(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"px";if(!(e==null||e===""))return isNaN(+e)?String(e):isFinite(+e)?`${Number(e)}${t}`:void 0}function Ae(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)}function T(e){let t;return e!==null&&typeof e=="object"&&((t=Object.getPrototypeOf(e))===Object.prototype||t===null)}function J(e){if(e&&"$el"in e){const t=e.$el;return(t==null?void 0:t.nodeType)===Node.TEXT_NODE?t.nextElementSibling:t}return e}const Be=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16});function O(e,t){return t.every(n=>e.hasOwnProperty(n))}function Ee(e,t){const n={},r=new Set(Object.keys(e));for(const s of t)r.has(s)&&(n[s]=e[s]);return n}const Q=/^on[^a-z]/,Pe=e=>Q.test(e);function ee(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;return Math.max(t,Math.min(n,e))}function R(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0";return e+n.repeat(Math.max(0,t-e.length))}function ke(e,t){return(arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0").repeat(Math.max(0,t-e.length))+e}function te(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;const n=[];let r=0;for(;r<e.length;)n.push(e.substr(r,t)),r+=t;return n}function ne(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;const r={};for(const s in e)r[s]=e[s];for(const s in t){const u=e[s],a=t[s];if(T(u)&&T(a)){r[s]=ne(u,a,n);continue}if(n&&Array.isArray(u)&&Array.isArray(a)){r[s]=n(u,a);continue}r[s]=a}return r}function re(e){return e.map(t=>t.type===L?re(t.children):t).flat()}function d(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";if(d.cache.has(e))return d.cache.get(e);const t=e.replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase();return d.cache.set(e,t),t}d.cache=new Map;function xe(e){const t=V({}),n=_(e);return Z(()=>{for(const r in n.value)t[r]=n.value[r]},{flush:"sync"}),j(t)}function Ie(e,t){return e.includes(t)}function Ne(e){return e[2].toLowerCase()+e.slice(3)}function Ge(e,t){return t="on"+U(t),!!(e[t]||e[`${t}Once`]||e[`${t}Capture`]||e[`${t}OnceCapture`]||e[`${t}CaptureOnce`])}function He(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const n=["button","[href]",'input:not([type="hidden"])',"select","textarea","[tabindex]"].map(r=>`${r}${t?':not([tabindex="-1"])':""}:not([disabled])`).join(", ");return[...e.querySelectorAll(n)]}function De(e,t){if(!(C&&typeof CSS<"u"&&typeof CSS.supports<"u"&&CSS.supports(`selector(${t})`)))return null;try{return!!e&&e.matches(t)}catch{return null}}function We(e,t){if(!C||e===0)return t(),()=>{};const n=window.setTimeout(t,e);return()=>window.clearTimeout(n)}function Ye(){const e=X(),t=n=>{e.value=n};return Object.defineProperty(t,"value",{enumerable:!0,get:()=>e.value,set:n=>e.value=n}),Object.defineProperty(t,"el",{enumerable:!0,get:()=>J(e.value)}),t}function N(e,t){const n=q();if(!n)throw new Error(`[Vuetify] ${e} must be called from inside a setup function`);return n}function Ue(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"composables";const t=N(e).type;return d((t==null?void 0:t.aliasName)||(t==null?void 0:t.name))}let G=0,b=new WeakMap;function se(){const e=N("getUid");if(b.has(e))return b.get(e);{const t=G++;return b.set(e,t),t}}se.reset=()=>{G=0,b=new WeakMap};const l=2.4,F=.2126729,M=.7151522,$=.072175,ue=.55,ae=.58,ie=.57,oe=.62,h=.03,A=1.45,ce=5e-4,fe=1.25,le=1.25,B=.078,E=12.82051282051282,p=.06,P=.001;function k(e,t){const n=(e.r/255)**l,r=(e.g/255)**l,s=(e.b/255)**l,u=(t.r/255)**l,a=(t.g/255)**l,i=(t.b/255)**l;let c=n*F+r*M+s*$,f=u*F+a*M+i*$;if(c<=h&&(c+=(h-c)**A),f<=h&&(f+=(h-f)**A),Math.abs(f-c)<ce)return 0;let v;if(f>c){const o=(f**ue-c**ae)*fe;v=o<P?0:o<B?o-o*E*p:o-p}else{const o=(f**oe-c**ie)*le;v=o>-P?0:o>-B?o-o*E*p:o+p}return v*100}const w=.20689655172413793,ge=e=>e>w**3?Math.cbrt(e):e/(3*w**2)+4/29,de=e=>e>w?e**3:3*w**2*(e-4/29);function H(e){const t=ge,n=t(e[1]);return[116*n-16,500*(t(e[0]/.95047)-n),200*(n-t(e[2]/1.08883))]}function D(e){const t=de,n=(e[0]+16)/116;return[t(n+e[1]/500)*.95047,t(n),t(n-e[2]/200)*1.08883]}const me=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],he=e=>e<=.0031308?e*12.92:1.055*e**(1/2.4)-.055,pe=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],ye=e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4;function W(e){const t=Array(3),n=he,r=me;for(let s=0;s<3;++s)t[s]=Math.round(ee(n(r[s][0]*e[0]+r[s][1]*e[1]+r[s][2]*e[2]))*255);return{r:t[0],g:t[1],b:t[2]}}function S(e){let{r:t,g:n,b:r}=e;const s=[0,0,0],u=ye,a=pe;t=u(t/255),n=u(n/255),r=u(r/255);for(let i=0;i<3;++i)s[i]=a[i][0]*t+a[i][1]*n+a[i][2]*r;return s}function be(e){return!!e&&/^(#|var\(--|(rgb|hsl)a?\()/.test(e)}function Xe(e){return be(e)&&!/^((rgb|hsl)a?\()?var\(--/.test(e)}const x=/^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/,we={rgb:(e,t,n,r)=>({r:e,g:t,b:n,a:r}),rgba:(e,t,n,r)=>({r:e,g:t,b:n,a:r}),hsl:(e,t,n,r)=>I({h:e,s:t,l:n,a:r}),hsla:(e,t,n,r)=>I({h:e,s:t,l:n,a:r}),hsv:(e,t,n,r)=>m({h:e,s:t,v:n,a:r}),hsva:(e,t,n,r)=>m({h:e,s:t,v:n,a:r})};function g(e){if(typeof e=="number")return{r:(e&16711680)>>16,g:(e&65280)>>8,b:e&255};if(typeof e=="string"&&x.test(e)){const{groups:t}=e.match(x),{fn:n,values:r}=t,s=r.split(/,\s*/).map(u=>u.endsWith("%")&&["hsl","hsla","hsv","hsva"].includes(n)?parseFloat(u)/100:parseFloat(u));return we[n](...s)}else if(typeof e=="string"){let t=e.startsWith("#")?e.slice(1):e;return[3,4].includes(t.length)?t=t.split("").map(n=>n+n).join(""):[6,8].includes(t.length),Ce(t)}else if(typeof e=="object"){if(O(e,["r","g","b"]))return e;if(O(e,["h","s","l"]))return m(Y(e));if(O(e,["h","s","v"]))return m(e)}throw new TypeError(`Invalid color: ${e==null?e:String(e)||e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`)}function m(e){const{h:t,s:n,v:r,a:s}=e,u=i=>{const c=(i+t/60)%6;return r-r*n*Math.max(Math.min(c,4-c,1),0)},a=[u(5),u(3),u(1)].map(i=>Math.round(i*255));return{r:a[0],g:a[1],b:a[2],a:s}}function I(e){return m(Y(e))}function Y(e){const{h:t,s:n,l:r,a:s}=e,u=r+n*Math.min(r,1-r),a=u===0?0:2-2*r/u;return{h:t,s:a,v:u,a:s}}function y(e){const t=Math.round(e).toString(16);return("00".substr(0,2-t.length)+t).toUpperCase()}function Le(e){let{r:t,g:n,b:r,a:s}=e;return`#${[y(t),y(n),y(r),s!==void 0?y(Math.round(s*255)):""].join("")}`}function Ce(e){e=ve(e);let[t,n,r,s]=te(e,2).map(u=>parseInt(u,16));return s=s===void 0?s:s/255,{r:t,g:n,b:r,a:s}}function ve(e){return e.startsWith("#")&&(e=e.slice(1)),e=e.replace(/([^0-9a-f])/gi,"F"),(e.length===3||e.length===4)&&(e=e.split("").map(t=>t+t).join("")),e.length!==6&&(e=R(R(e,6),8,"F")),e}function Ve(e,t){const n=H(S(e));return n[0]=n[0]+t*10,W(D(n))}function _e(e,t){const n=H(S(e));return n[0]=n[0]-t*10,W(D(n))}function Ze(e){const t=g(e);return S(t)[1]}function je(e){const t=Math.abs(k(g(0),g(e)));return Math.abs(k(g(16777215),g(e)))>Math.min(t,50)?"#fff":"#000"}export{K as A,Ae as B,Be as C,We as D,Ye as E,De as F,He as G,C as I,Le as R,Re as S,je as a,Ze as b,Me as c,Se as d,_e as e,Ee as f,N as g,ke as h,se as i,Fe as j,Ue as k,Ve as l,ne as m,xe as n,be as o,g as p,Xe as q,$e as r,Te as s,d as t,Ie as u,Pe as v,Ne as w,re as x,ee as y,Ge as z};