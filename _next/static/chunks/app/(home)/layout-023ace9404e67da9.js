(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[790],{3413:(e,t,r)=>{Promise.resolve().then(r.bind(r,1436)),Promise.resolve().then(r.bind(r,2591))},7401:(e,t,r)=>{"use strict";r.d(t,{A:()=>i});var a=r(2115);let n=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),s=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((e,t,r)=>!!e&&r.indexOf(e)===t).join(" ")};var l={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let o=(0,a.forwardRef)((e,t)=>{let{color:r="currentColor",size:n=24,strokeWidth:o=2,absoluteStrokeWidth:i,className:c="",children:d,iconNode:m,...h}=e;return(0,a.createElement)("svg",{ref:t,...l,width:n,height:n,stroke:r,strokeWidth:i?24*Number(o)/Number(n):o,className:s("lucide",c),...h},[...m.map(e=>{let[t,r]=e;return(0,a.createElement)(t,r)}),...Array.isArray(d)?d:[d]])}),i=(e,t)=>{let r=(0,a.forwardRef)((r,l)=>{let{className:i,...c}=r;return(0,a.createElement)(o,{ref:l,iconNode:t,className:s("lucide-".concat(n(e)),i),...c})});return r.displayName="".concat(e),r}},8251:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});let a=(0,r(7401).A)("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]])},1436:(e,t,r)=>{"use strict";r.d(t,{default:()=>d});var a=r(5155),n=r(7401);let s=(0,n.A)("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]),l=(0,n.A)("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);var o=r(2115),i=r(7113);function c(){let[e,t]=(0,o.useState)(!1),{setTheme:r,resolvedTheme:n}=(0,i.D)();return((0,o.useEffect)(()=>t(!0),[]),e)?(0,a.jsx)("button",{className:"cursor-pointer",onClick:()=>{r("dark"===n?"light":"dark")},children:"dark"===n?(0,a.jsx)(s,{className:"w-4 h-4 md:w-5 md:h-5 text-orange-300"}):(0,a.jsx)(l,{className:"w-4 h-4 md:w-5 md:h-5 text-indigo-500"})}):null}let d=()=>(0,a.jsx)("header",{className:"sticky top-0 z-50 py-6 backdrop-blur-xl",children:(0,a.jsxs)("nav",{className:"flex items-center justify-between mx-auto max-w-full px-4 sm:px-12 md:px-16 lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl",children:[(0,a.jsxs)("ul",{className:"flex gap-4 sm:gap-8",children:[(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"/",className:"hover:underline hover:underline-offset-4",children:"home"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"/#experience",className:"hover:underline hover:underline-offset-4",children:"experience"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"/#projects",className:"hover:underline hover:underline-offset-4",children:"projects"})})]}),(0,a.jsx)("div",{className:"flex gap-0 sm:gap-4",children:(0,a.jsx)(c,{})})]})})},2591:(e,t,r)=>{"use strict";r.d(t,{default:()=>l});var a=r(5155),n=r(1567),s=r(8251);function l(e){let{className:t,href:r,children:l,...o}=e;return(0,a.jsxs)("a",{className:(0,n.cn)("group inline-flex items-center",t),href:r,...o,children:[l,(0,a.jsx)(s.A,{className:"w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"})]})}},1567:(e,t,r)=>{"use strict";r.d(t,{cn:()=>s});var a=r(3463),n=r(9795);function s(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.QP)((0,a.$)(t))}},7113:(e,t,r)=>{"use strict";r.d(t,{D:()=>d,N:()=>m});var a=r(2115),n=(e,t,r,a,n,s,l,o)=>{let i=document.documentElement,c=["light","dark"];function d(t){(Array.isArray(e)?e:[e]).forEach(e=>{let r="class"===e,a=r&&s?n.map(e=>s[e]||e):n;r?(i.classList.remove(...a),i.classList.add(t)):i.setAttribute(e,t)}),o&&c.includes(t)&&(i.style.colorScheme=t)}if(a)d(a);else try{let e=localStorage.getItem(t)||r,a=l&&"system"===e?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e;d(a)}catch(e){}},s=["light","dark"],l="(prefers-color-scheme: dark)",o="undefined"==typeof window,i=a.createContext(void 0),c={setTheme:e=>{},themes:[]},d=()=>{var e;return null!=(e=a.useContext(i))?e:c},m=e=>a.useContext(i)?a.createElement(a.Fragment,null,e.children):a.createElement(u,{...e}),h=["light","dark"],u=e=>{let{forcedTheme:t,disableTransitionOnChange:r=!1,enableSystem:n=!0,enableColorScheme:o=!0,storageKey:c="theme",themes:d=h,defaultTheme:m=n?"system":"light",attribute:u="data-theme",value:x,children:g,nonce:w,scriptProps:k}=e,[b,j]=a.useState(()=>p(c,m)),[N,E]=a.useState(()=>p(c)),A=x?Object.values(x):d,C=a.useCallback(e=>{let t=e;if(!t)return;"system"===e&&n&&(t=v());let a=x?x[t]:t,l=r?y(w):null,i=document.documentElement,c=e=>{"class"===e?(i.classList.remove(...A),a&&i.classList.add(a)):e.startsWith("data-")&&(a?i.setAttribute(e,a):i.removeAttribute(e))};if(Array.isArray(u)?u.forEach(c):c(u),o){let e=s.includes(m)?m:null,r=s.includes(t)?t:e;i.style.colorScheme=r}null==l||l()},[w]),S=a.useCallback(e=>{let t="function"==typeof e?e(b):e;j(t);try{localStorage.setItem(c,t)}catch(e){}},[b]),T=a.useCallback(e=>{E(v(e)),"system"===b&&n&&!t&&C("system")},[b,t]);a.useEffect(()=>{let e=window.matchMedia(l);return e.addListener(T),T(e),()=>e.removeListener(T)},[T]),a.useEffect(()=>{let e=e=>{e.key===c&&S(e.newValue||m)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[S]),a.useEffect(()=>{C(null!=t?t:b)},[t,b]);let M=a.useMemo(()=>({theme:b,setTheme:S,forcedTheme:t,resolvedTheme:"system"===b?N:b,themes:n?[...d,"system"]:d,systemTheme:n?N:void 0}),[b,S,t,N,n,d]);return a.createElement(i.Provider,{value:M},a.createElement(f,{forcedTheme:t,storageKey:c,attribute:u,enableSystem:n,enableColorScheme:o,defaultTheme:m,value:x,themes:d,nonce:w,scriptProps:k}),g)},f=a.memo(e=>{let{forcedTheme:t,storageKey:r,attribute:s,enableSystem:l,enableColorScheme:o,defaultTheme:i,value:c,themes:d,nonce:m,scriptProps:h}=e,u=JSON.stringify([s,r,i,t,d,c,l,o]).slice(1,-1);return a.createElement("script",{...h,suppressHydrationWarning:!0,nonce:"undefined"==typeof window?m:"",dangerouslySetInnerHTML:{__html:"(".concat(n.toString(),")(").concat(u,")")}})}),p=(e,t)=>{let r;if(!o){try{r=localStorage.getItem(e)||void 0}catch(e){}return r||t}},y=e=>{let t=document.createElement("style");return e&&t.setAttribute("nonce",e),t.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(t),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(t)},1)}},v=e=>(e||(e=window.matchMedia(l)),e.matches?"dark":"light")}},e=>{var t=t=>e(e.s=t);e.O(0,[181,441,517,358],()=>t(3413)),_N_E=e.O()}]);