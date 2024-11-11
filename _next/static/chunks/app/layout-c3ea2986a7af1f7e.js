(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{1846:(e,t,n)=>{Promise.resolve().then(n.t.bind(n,8346,23)),Promise.resolve().then(n.t.bind(n,3867,23)),Promise.resolve().then(n.t.bind(n,347,23)),Promise.resolve().then(n.bind(n,8534)),Promise.resolve().then(n.bind(n,3153))},6046:(e,t,n)=>{"use strict";var r=n(6658);n.o(r,"usePathname")&&n.d(t,{usePathname:function(){return r.usePathname}}),n.o(r,"useRouter")&&n.d(t,{useRouter:function(){return r.useRouter}})},8534:(e,t,n)=>{"use strict";n.d(t,{Providers:()=>a});var r=n(5155),s=n(7113);function a(e){let{children:t}=e;return(0,r.jsx)(s.N,{attribute:"class",defaultTheme:"system",enableSystem:!0,children:t})}},3153:(e,t,n)=>{"use strict";n.d(t,{SmoothScrollProvider:()=>o});var r=n(5155),s=n(2115),a=n(6046);function o(e){let{children:t,offset:n=0}=e;return!function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=(0,a.useRouter)(),n=(0,a.usePathname)(),r=(0,s.useCallback)(t=>{let n=document.getElementById(t.substring(1));if(n){let t=n.getBoundingClientRect().top+window.pageYOffset-e;window.scrollTo({top:t,behavior:"smooth"})}},[e]);(0,s.useEffect)(()=>{window.location.hash&&r(window.location.hash)},[n,r]),(0,s.useEffect)(()=>{let e=e=>{let s=e.target.closest("a");if(!s)return;let a=s.getAttribute("href");if(!a)return;let o=new URL(a,window.location.origin);o.pathname===n&&o.hash?(e.preventDefault(),r(o.hash),window.history.pushState(null,"",o.hash)):o.pathname!==n&&o.hash&&(e.preventDefault(),t.push(a))};return document.addEventListener("click",e),()=>document.removeEventListener("click",e)},[n,t,r])}(n),(0,r.jsx)(r.Fragment,{children:t})}},347:()=>{},8346:e=>{e.exports={style:{fontFamily:"'Inter', 'Inter Fallback'",fontStyle:"normal"},className:"__className_d65c78"}},3867:e=>{e.exports={style:{fontFamily:"'Space Mono', 'Space Mono Fallback'",fontStyle:"normal"},className:"__className_7dd02c",variable:"__variable_7dd02c"}},7113:(e,t,n)=>{"use strict";n.d(t,{D:()=>m,N:()=>u});var r=n(2115),s=(e,t,n,r,s,a,o,l)=>{let i=document.documentElement,c=["light","dark"];function m(t){(Array.isArray(e)?e:[e]).forEach(e=>{let n="class"===e,r=n&&a?s.map(e=>a[e]||e):s;n?(i.classList.remove(...r),i.classList.add(t)):i.setAttribute(e,t)}),l&&c.includes(t)&&(i.style.colorScheme=t)}if(r)m(r);else try{let e=localStorage.getItem(t)||n,r=o&&"system"===e?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e;m(r)}catch(e){}},a=["light","dark"],o="(prefers-color-scheme: dark)",l="undefined"==typeof window,i=r.createContext(void 0),c={setTheme:e=>{},themes:[]},m=()=>{var e;return null!=(e=r.useContext(i))?e:c},u=e=>r.useContext(i)?r.createElement(r.Fragment,null,e.children):r.createElement(h,{...e}),d=["light","dark"],h=e=>{let{forcedTheme:t,disableTransitionOnChange:n=!1,enableSystem:s=!0,enableColorScheme:l=!0,storageKey:c="theme",themes:m=d,defaultTheme:u=s?"system":"light",attribute:h="data-theme",value:b,children:g,nonce:w,scriptProps:S}=e,[E,k]=r.useState(()=>y(c,u)),[C,T]=r.useState(()=>y(c)),_=b?Object.values(b):m,P=r.useCallback(e=>{let t=e;if(!t)return;"system"===e&&s&&(t=v());let r=b?b[t]:t,o=n?p(w):null,i=document.documentElement,c=e=>{"class"===e?(i.classList.remove(..._),r&&i.classList.add(r)):e.startsWith("data-")&&(r?i.setAttribute(e,r):i.removeAttribute(e))};if(Array.isArray(h)?h.forEach(c):c(h),l){let e=a.includes(u)?u:null,n=a.includes(t)?t:e;i.style.colorScheme=n}null==o||o()},[w]),L=r.useCallback(e=>{let t="function"==typeof e?e(E):e;k(t);try{localStorage.setItem(c,t)}catch(e){}},[E]),N=r.useCallback(e=>{T(v(e)),"system"===E&&s&&!t&&P("system")},[E,t]);r.useEffect(()=>{let e=window.matchMedia(o);return e.addListener(N),N(e),()=>e.removeListener(N)},[N]),r.useEffect(()=>{let e=e=>{e.key===c&&L(e.newValue||u)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[L]),r.useEffect(()=>{P(null!=t?t:E)},[t,E]);let A=r.useMemo(()=>({theme:E,setTheme:L,forcedTheme:t,resolvedTheme:"system"===E?C:E,themes:s?[...m,"system"]:m,systemTheme:s?C:void 0}),[E,L,t,C,s,m]);return r.createElement(i.Provider,{value:A},r.createElement(f,{forcedTheme:t,storageKey:c,attribute:h,enableSystem:s,enableColorScheme:l,defaultTheme:u,value:b,themes:m,nonce:w,scriptProps:S}),g)},f=r.memo(e=>{let{forcedTheme:t,storageKey:n,attribute:a,enableSystem:o,enableColorScheme:l,defaultTheme:i,value:c,themes:m,nonce:u,scriptProps:d}=e,h=JSON.stringify([a,n,i,t,m,c,o,l]).slice(1,-1);return r.createElement("script",{...d,suppressHydrationWarning:!0,nonce:"undefined"==typeof window?u:"",dangerouslySetInnerHTML:{__html:"(".concat(s.toString(),")(").concat(h,")")}})}),y=(e,t)=>{let n;if(!l){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},p=e=>{let t=document.createElement("style");return e&&t.setAttribute("nonce",e),t.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(t),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(t)},1)}},v=e=>(e||(e=window.matchMedia(o)),e.matches?"dark":"light")}},e=>{var t=t=>e(e.s=t);e.O(0,[742,441,517,358],()=>t(1846)),_N_E=e.O()}]);