"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[342],{2596:(e,r,t)=>{t.d(r,{$:()=>o});function o(){for(var e,r,t=0,o="",n=arguments.length;t<n;t++)(e=arguments[t])&&(r=function e(r){var t,o,n="";if("string"==typeof r||"number"==typeof r)n+=r;else if("object"==typeof r){if(Array.isArray(r)){var l=r.length;for(t=0;t<l;t++)r[t]&&(o=e(r[t]))&&(n&&(n+=" "),n+=o)}else for(o in r)r[o]&&(n&&(n+=" "),n+=o)}return n}(e))&&(o&&(o+=" "),o+=r);return o}},2757:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0}),!function(e,r){for(var t in r)Object.defineProperty(e,t,{enumerable:!0,get:r[t]})}(r,{formatUrl:function(){return l},formatWithValidation:function(){return a},urlObjectKeys:function(){return s}});let o=t(6966)._(t(8859)),n=/https?|ftp|gopher|file/;function l(e){let{auth:r,hostname:t}=e,l=e.protocol||"",s=e.pathname||"",a=e.hash||"",i=e.query||"",c=!1;r=r?encodeURIComponent(r).replace(/%3A/i,":")+"@":"",e.host?c=r+e.host:t&&(c=r+(~t.indexOf(":")?"["+t+"]":t),e.port&&(c+=":"+e.port)),i&&"object"==typeof i&&(i=String(o.urlQueryToSearchParams(i)));let d=e.search||i&&"?"+i||"";return l&&!l.endsWith(":")&&(l+=":"),e.slashes||(!l||n.test(l))&&!1!==c?(c="//"+(c||""),s&&"/"!==s[0]&&(s="/"+s)):c||(c=""),a&&"#"!==a[0]&&(a="#"+a),d&&"?"!==d[0]&&(d="?"+d),""+l+c+(s=s.replace(/[?#]/g,encodeURIComponent))+(d=d.replace("#","%23"))+a}let s=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function a(e){return l(e)}},6654:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return n}});let o=t(2115);function n(e,r){let t=(0,o.useRef)(null),n=(0,o.useRef)(null);return(0,o.useCallback)(o=>{if(null===o){let e=t.current;e&&(t.current=null,e());let r=n.current;r&&(n.current=null,r())}else e&&(t.current=l(e,o)),r&&(n.current=l(r,o))},[e,r])}function l(e,r){if("function"!=typeof e)return e.current=r,()=>{e.current=null};{let t=e(r);return"function"==typeof t?t:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),e.exports=r.default)},6874:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return b}});let o=t(8229),n=t(5155),l=o._(t(2115)),s=t(2757),a=t(5227),i=t(9818),c=t(6654),d=t(9991),u=t(5929);t(3230);let p=t(4930);function f(e){return"string"==typeof e?e:(0,s.formatUrl)(e)}let b=l.default.forwardRef(function(e,r){let t,o;let{href:s,as:b,children:g,prefetch:m=null,passHref:h,replace:y,shallow:x,scroll:v,onClick:w,onMouseEnter:k,onTouchStart:j,legacyBehavior:z=!1,...P}=e;t=g,z&&("string"==typeof t||"number"==typeof t)&&(t=(0,n.jsx)("a",{children:t}));let E=l.default.useContext(a.AppRouterContext),C=!1!==m,S=null===m?i.PrefetchKind.AUTO:i.PrefetchKind.FULL,{href:_,as:O}=l.default.useMemo(()=>{let e=f(s);return{href:e,as:b?f(b):e}},[s,b]);z&&(o=l.default.Children.only(t));let N=z?o&&"object"==typeof o&&o.ref:r,M=l.default.useCallback(e=>(C&&null!==E&&(0,p.mountLinkInstance)(e,_,E,S),()=>{(0,p.unmountLinkInstance)(e)}),[C,_,E,S]),T={ref:(0,c.useMergedRef)(M,N),onClick(e){z||"function"!=typeof w||w(e),z&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(e),E&&!e.defaultPrevented&&!function(e,r,t,o,n,s,a){let{nodeName:i}=e.currentTarget;!("A"===i.toUpperCase()&&function(e){let r=e.currentTarget.getAttribute("target");return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e))&&(e.preventDefault(),l.default.startTransition(()=>{let e=null==a||a;"beforePopState"in r?r[n?"replace":"push"](t,o,{shallow:s,scroll:e}):r[n?"replace":"push"](o||t,{scroll:e})}))}(e,E,_,O,y,x,v)},onMouseEnter(e){z||"function"!=typeof k||k(e),z&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),E&&C&&(0,p.onNavigationIntent)(e.currentTarget)},onTouchStart:function(e){z||"function"!=typeof j||j(e),z&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),E&&C&&(0,p.onNavigationIntent)(e.currentTarget)}};return(0,d.isAbsoluteUrl)(O)?T.href=O:z&&!h&&("a"!==o.type||"href"in o.props)||(T.href=(0,u.addBasePath)(O)),z?l.default.cloneElement(o,T):(0,n.jsx)("a",{...P,...T,children:t})});("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),e.exports=r.default)},8859:(e,r)=>{function t(e){let r={};for(let[t,o]of e.entries()){let e=r[t];void 0===e?r[t]=o:Array.isArray(e)?e.push(o):r[t]=[e,o]}return r}function o(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function n(e){let r=new URLSearchParams;for(let[t,n]of Object.entries(e))if(Array.isArray(n))for(let e of n)r.append(t,o(e));else r.set(t,o(n));return r}function l(e){for(var r=arguments.length,t=Array(r>1?r-1:0),o=1;o<r;o++)t[o-1]=arguments[o];for(let r of t){for(let t of r.keys())e.delete(t);for(let[t,o]of r.entries())e.append(t,o)}return e}Object.defineProperty(r,"__esModule",{value:!0}),!function(e,r){for(var t in r)Object.defineProperty(e,t,{enumerable:!0,get:r[t]})}(r,{assign:function(){return l},searchParamsToUrlQuery:function(){return t},urlQueryToSearchParams:function(){return n}})},9688:(e,r,t)=>{t.d(r,{QP:()=>Z});let o=e=>{let r=a(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:o}=e;return{getClassGroupId:e=>{let t=e.split("-");return""===t[0]&&1!==t.length&&t.shift(),n(t,r)||s(e)},getConflictingClassGroupIds:(e,r)=>{let n=t[e]||[];return r&&o[e]?[...n,...o[e]]:n}}},n=(e,r)=>{if(0===e.length)return r.classGroupId;let t=e[0],o=r.nextPart.get(t),l=o?n(e.slice(1),o):void 0;if(l)return l;if(0===r.validators.length)return;let s=e.join("-");return r.validators.find(({validator:e})=>e(s))?.classGroupId},l=/^\[(.+)\]$/,s=e=>{if(l.test(e)){let r=l.exec(e)[1],t=r?.substring(0,r.indexOf(":"));if(t)return"arbitrary.."+t}},a=e=>{let{theme:r,prefix:t}=e,o={nextPart:new Map,validators:[]};return u(Object.entries(e.classGroups),t).forEach(([e,t])=>{i(t,o,e,r)}),o},i=(e,r,t,o)=>{e.forEach(e=>{if("string"==typeof e){(""===e?r:c(r,e)).classGroupId=t;return}if("function"==typeof e){if(d(e)){i(e(o),r,t,o);return}r.validators.push({validator:e,classGroupId:t});return}Object.entries(e).forEach(([e,n])=>{i(n,c(r,e),t,o)})})},c=(e,r)=>{let t=e;return r.split("-").forEach(e=>{t.nextPart.has(e)||t.nextPart.set(e,{nextPart:new Map,validators:[]}),t=t.nextPart.get(e)}),t},d=e=>e.isThemeGetter,u=(e,r)=>r?e.map(([e,t])=>[e,t.map(e=>"string"==typeof e?r+e:"object"==typeof e?Object.fromEntries(Object.entries(e).map(([e,t])=>[r+e,t])):e)]):e,p=e=>{if(e<1)return{get:()=>void 0,set:()=>{}};let r=0,t=new Map,o=new Map,n=(n,l)=>{t.set(n,l),++r>e&&(r=0,o=t,t=new Map)};return{get(e){let r=t.get(e);return void 0!==r?r:void 0!==(r=o.get(e))?(n(e,r),r):void 0},set(e,r){t.has(e)?t.set(e,r):n(e,r)}}},f=e=>{let{separator:r,experimentalParseClassName:t}=e,o=1===r.length,n=r[0],l=r.length,s=e=>{let t;let s=[],a=0,i=0;for(let c=0;c<e.length;c++){let d=e[c];if(0===a){if(d===n&&(o||e.slice(c,c+l)===r)){s.push(e.slice(i,c)),i=c+l;continue}if("/"===d){t=c;continue}}"["===d?a++:"]"===d&&a--}let c=0===s.length?e:e.substring(i),d=c.startsWith("!"),u=d?c.substring(1):c;return{modifiers:s,hasImportantModifier:d,baseClassName:u,maybePostfixModifierPosition:t&&t>i?t-i:void 0}};return t?e=>t({className:e,parseClassName:s}):s},b=e=>{if(e.length<=1)return e;let r=[],t=[];return e.forEach(e=>{"["===e[0]?(r.push(...t.sort(),e),t=[]):t.push(e)}),r.push(...t.sort()),r},g=e=>({cache:p(e.cacheSize),parseClassName:f(e),...o(e)}),m=/\s+/,h=(e,r)=>{let{parseClassName:t,getClassGroupId:o,getConflictingClassGroupIds:n}=r,l=[],s=e.trim().split(m),a="";for(let e=s.length-1;e>=0;e-=1){let r=s[e],{modifiers:i,hasImportantModifier:c,baseClassName:d,maybePostfixModifierPosition:u}=t(r),p=!!u,f=o(p?d.substring(0,u):d);if(!f){if(!p||!(f=o(d))){a=r+(a.length>0?" "+a:a);continue}p=!1}let g=b(i).join(":"),m=c?g+"!":g,h=m+f;if(l.includes(h))continue;l.push(h);let y=n(f,p);for(let e=0;e<y.length;++e){let r=y[e];l.push(m+r)}a=r+(a.length>0?" "+a:a)}return a};function y(){let e,r,t=0,o="";for(;t<arguments.length;)(e=arguments[t++])&&(r=x(e))&&(o&&(o+=" "),o+=r);return o}let x=e=>{let r;if("string"==typeof e)return e;let t="";for(let o=0;o<e.length;o++)e[o]&&(r=x(e[o]))&&(t&&(t+=" "),t+=r);return t},v=e=>{let r=r=>r[e]||[];return r.isThemeGetter=!0,r},w=/^\[(?:([a-z-]+):)?(.+)\]$/i,k=/^\d+\/\d+$/,j=new Set(["px","full","screen"]),z=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,P=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,E=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,C=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,S=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,_=e=>N(e)||j.has(e)||k.test(e),O=e=>B(e,"length",D),N=e=>!!e&&!Number.isNaN(Number(e)),M=e=>B(e,"number",N),T=e=>!!e&&Number.isInteger(Number(e)),I=e=>e.endsWith("%")&&N(e.slice(0,-1)),R=e=>w.test(e),A=e=>z.test(e),U=new Set(["length","size","percentage"]),G=e=>B(e,U,q),L=e=>B(e,"position",q),F=new Set(["image","url"]),$=e=>B(e,F,V),K=e=>B(e,"",Q),W=()=>!0,B=(e,r,t)=>{let o=w.exec(e);return!!o&&(o[1]?"string"==typeof r?o[1]===r:r.has(o[1]):t(o[2]))},D=e=>P.test(e)&&!E.test(e),q=()=>!1,Q=e=>C.test(e),V=e=>S.test(e);Symbol.toStringTag;let Z=function(e,...r){let t,o,n;let l=function(a){return o=(t=g(r.reduce((e,r)=>r(e),e()))).cache.get,n=t.cache.set,l=s,s(a)};function s(e){let r=o(e);if(r)return r;let l=h(e,t);return n(e,l),l}return function(){return l(y.apply(null,arguments))}}(()=>{let e=v("colors"),r=v("spacing"),t=v("blur"),o=v("brightness"),n=v("borderColor"),l=v("borderRadius"),s=v("borderSpacing"),a=v("borderWidth"),i=v("contrast"),c=v("grayscale"),d=v("hueRotate"),u=v("invert"),p=v("gap"),f=v("gradientColorStops"),b=v("gradientColorStopPositions"),g=v("inset"),m=v("margin"),h=v("opacity"),y=v("padding"),x=v("saturate"),w=v("scale"),k=v("sepia"),j=v("skew"),z=v("space"),P=v("translate"),E=()=>["auto","contain","none"],C=()=>["auto","hidden","clip","visible","scroll"],S=()=>["auto",R,r],U=()=>[R,r],F=()=>["",_,O],B=()=>["auto",N,R],D=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],q=()=>["solid","dashed","dotted","double","none"],Q=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],V=()=>["start","end","center","between","around","evenly","stretch"],Z=()=>["","0",R],J=()=>["auto","avoid","all","avoid-page","page","left","right","column"],X=()=>[N,R];return{cacheSize:500,separator:":",theme:{colors:[W],spacing:[_,O],blur:["none","",A,R],brightness:X(),borderColor:[e],borderRadius:["none","","full",A,R],borderSpacing:U(),borderWidth:F(),contrast:X(),grayscale:Z(),hueRotate:X(),invert:Z(),gap:U(),gradientColorStops:[e],gradientColorStopPositions:[I,O],inset:S(),margin:S(),opacity:X(),padding:U(),saturate:X(),scale:X(),sepia:Z(),skew:X(),space:U(),translate:U()},classGroups:{aspect:[{aspect:["auto","square","video",R]}],container:["container"],columns:[{columns:[A]}],"break-after":[{"break-after":J()}],"break-before":[{"break-before":J()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...D(),R]}],overflow:[{overflow:C()}],"overflow-x":[{"overflow-x":C()}],"overflow-y":[{"overflow-y":C()}],overscroll:[{overscroll:E()}],"overscroll-x":[{"overscroll-x":E()}],"overscroll-y":[{"overscroll-y":E()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[g]}],"inset-x":[{"inset-x":[g]}],"inset-y":[{"inset-y":[g]}],start:[{start:[g]}],end:[{end:[g]}],top:[{top:[g]}],right:[{right:[g]}],bottom:[{bottom:[g]}],left:[{left:[g]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",T,R]}],basis:[{basis:S()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",R]}],grow:[{grow:Z()}],shrink:[{shrink:Z()}],order:[{order:["first","last","none",T,R]}],"grid-cols":[{"grid-cols":[W]}],"col-start-end":[{col:["auto",{span:["full",T,R]},R]}],"col-start":[{"col-start":B()}],"col-end":[{"col-end":B()}],"grid-rows":[{"grid-rows":[W]}],"row-start-end":[{row:["auto",{span:[T,R]},R]}],"row-start":[{"row-start":B()}],"row-end":[{"row-end":B()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",R]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",R]}],gap:[{gap:[p]}],"gap-x":[{"gap-x":[p]}],"gap-y":[{"gap-y":[p]}],"justify-content":[{justify:["normal",...V()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...V(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...V(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[y]}],px:[{px:[y]}],py:[{py:[y]}],ps:[{ps:[y]}],pe:[{pe:[y]}],pt:[{pt:[y]}],pr:[{pr:[y]}],pb:[{pb:[y]}],pl:[{pl:[y]}],m:[{m:[m]}],mx:[{mx:[m]}],my:[{my:[m]}],ms:[{ms:[m]}],me:[{me:[m]}],mt:[{mt:[m]}],mr:[{mr:[m]}],mb:[{mb:[m]}],ml:[{ml:[m]}],"space-x":[{"space-x":[z]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[z]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",R,r]}],"min-w":[{"min-w":[R,r,"min","max","fit"]}],"max-w":[{"max-w":[R,r,"none","full","min","max","fit","prose",{screen:[A]},A]}],h:[{h:[R,r,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[R,r,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[R,r,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[R,r,"auto","min","max","fit"]}],"font-size":[{text:["base",A,O]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",M]}],"font-family":[{font:[W]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",R]}],"line-clamp":[{"line-clamp":["none",N,M]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",_,R]}],"list-image":[{"list-image":["none",R]}],"list-style-type":[{list:["none","disc","decimal",R]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[h]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[h]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...q(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",_,O]}],"underline-offset":[{"underline-offset":["auto",_,R]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:U()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",R]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",R]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[h]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...D(),L]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",G]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},$]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[b]}],"gradient-via-pos":[{via:[b]}],"gradient-to-pos":[{to:[b]}],"gradient-from":[{from:[f]}],"gradient-via":[{via:[f]}],"gradient-to":[{to:[f]}],rounded:[{rounded:[l]}],"rounded-s":[{"rounded-s":[l]}],"rounded-e":[{"rounded-e":[l]}],"rounded-t":[{"rounded-t":[l]}],"rounded-r":[{"rounded-r":[l]}],"rounded-b":[{"rounded-b":[l]}],"rounded-l":[{"rounded-l":[l]}],"rounded-ss":[{"rounded-ss":[l]}],"rounded-se":[{"rounded-se":[l]}],"rounded-ee":[{"rounded-ee":[l]}],"rounded-es":[{"rounded-es":[l]}],"rounded-tl":[{"rounded-tl":[l]}],"rounded-tr":[{"rounded-tr":[l]}],"rounded-br":[{"rounded-br":[l]}],"rounded-bl":[{"rounded-bl":[l]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[h]}],"border-style":[{border:[...q(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[h]}],"divide-style":[{divide:q()}],"border-color":[{border:[n]}],"border-color-x":[{"border-x":[n]}],"border-color-y":[{"border-y":[n]}],"border-color-s":[{"border-s":[n]}],"border-color-e":[{"border-e":[n]}],"border-color-t":[{"border-t":[n]}],"border-color-r":[{"border-r":[n]}],"border-color-b":[{"border-b":[n]}],"border-color-l":[{"border-l":[n]}],"divide-color":[{divide:[n]}],"outline-style":[{outline:["",...q()]}],"outline-offset":[{"outline-offset":[_,R]}],"outline-w":[{outline:[_,O]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:F()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[h]}],"ring-offset-w":[{"ring-offset":[_,O]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",A,K]}],"shadow-color":[{shadow:[W]}],opacity:[{opacity:[h]}],"mix-blend":[{"mix-blend":[...Q(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":Q()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[o]}],contrast:[{contrast:[i]}],"drop-shadow":[{"drop-shadow":["","none",A,R]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[d]}],invert:[{invert:[u]}],saturate:[{saturate:[x]}],sepia:[{sepia:[k]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[i]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[d]}],"backdrop-invert":[{"backdrop-invert":[u]}],"backdrop-opacity":[{"backdrop-opacity":[h]}],"backdrop-saturate":[{"backdrop-saturate":[x]}],"backdrop-sepia":[{"backdrop-sepia":[k]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",R]}],duration:[{duration:X()}],ease:[{ease:["linear","in","out","in-out",R]}],delay:[{delay:X()}],animate:[{animate:["none","spin","ping","pulse","bounce",R]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[w]}],"scale-x":[{"scale-x":[w]}],"scale-y":[{"scale-y":[w]}],rotate:[{rotate:[T,R]}],"translate-x":[{"translate-x":[P]}],"translate-y":[{"translate-y":[P]}],"skew-x":[{"skew-x":[j]}],"skew-y":[{"skew-y":[j]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",R]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",R]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":U()}],"scroll-mx":[{"scroll-mx":U()}],"scroll-my":[{"scroll-my":U()}],"scroll-ms":[{"scroll-ms":U()}],"scroll-me":[{"scroll-me":U()}],"scroll-mt":[{"scroll-mt":U()}],"scroll-mr":[{"scroll-mr":U()}],"scroll-mb":[{"scroll-mb":U()}],"scroll-ml":[{"scroll-ml":U()}],"scroll-p":[{"scroll-p":U()}],"scroll-px":[{"scroll-px":U()}],"scroll-py":[{"scroll-py":U()}],"scroll-ps":[{"scroll-ps":U()}],"scroll-pe":[{"scroll-pe":U()}],"scroll-pt":[{"scroll-pt":U()}],"scroll-pr":[{"scroll-pr":U()}],"scroll-pb":[{"scroll-pb":U()}],"scroll-pl":[{"scroll-pl":U()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",R]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[_,O,M]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}})},9991:(e,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),!function(e,r){for(var t in r)Object.defineProperty(e,t,{enumerable:!0,get:r[t]})}(r,{DecodeError:function(){return b},MiddlewareNotFoundError:function(){return y},MissingStaticPage:function(){return h},NormalizeError:function(){return g},PageNotFoundError:function(){return m},SP:function(){return p},ST:function(){return f},WEB_VITALS:function(){return t},execOnce:function(){return o},getDisplayName:function(){return i},getLocationOrigin:function(){return s},getURL:function(){return a},isAbsoluteUrl:function(){return l},isResSent:function(){return c},loadGetInitialProps:function(){return u},normalizeRepeatedSlashes:function(){return d},stringifyError:function(){return x}});let t=["CLS","FCP","FID","INP","LCP","TTFB"];function o(e){let r,t=!1;return function(){for(var o=arguments.length,n=Array(o),l=0;l<o;l++)n[l]=arguments[l];return t||(t=!0,r=e(...n)),r}}let n=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,l=e=>n.test(e);function s(){let{protocol:e,hostname:r,port:t}=window.location;return e+"//"+r+(t?":"+t:"")}function a(){let{href:e}=window.location,r=s();return e.substring(r.length)}function i(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function c(e){return e.finished||e.headersSent}function d(e){let r=e.split("?");return r[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(r[1]?"?"+r.slice(1).join("?"):"")}async function u(e,r){let t=r.res||r.ctx&&r.ctx.res;if(!e.getInitialProps)return r.ctx&&r.Component?{pageProps:await u(r.Component,r.ctx)}:{};let o=await e.getInitialProps(r);if(t&&c(t))return o;if(!o)throw Object.defineProperty(Error('"'+i(e)+'.getInitialProps()" should resolve to an object. But found "'+o+'" instead.'),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return o}let p="undefined"!=typeof performance,f=p&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class b extends Error{}class g extends Error{}class m extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class h extends Error{constructor(e,r){super(),this.message="Failed to load static file for page: "+e+" "+r}}class y extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function x(e){return JSON.stringify({message:e.message,stack:e.stack})}}}]);