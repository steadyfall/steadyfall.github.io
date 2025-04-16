(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[813],{4616:(e,t,a)=>{Promise.resolve().then(a.bind(a,5034))},5034:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>V});var i=a(5155),n=a(1763),s=a(5735),r=a(3466),l=a(6424),o=a(2115),c=a(9434);let d=l.bL,m=o.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,i.jsx)(l.q7,{ref:t,className:(0,c.cn)("",a),...n})});m.displayName="AccordionItem";let h=o.forwardRef((e,t)=>{let{className:a,children:n,...s}=e;return(0,i.jsx)(l.Y9,{className:"flex",children:(0,i.jsx)(l.l9,{ref:t,className:(0,c.cn)("flex flex-1 items-center justify-between py-2 transition-all hover:underline hover:underline-offset-2",a),...s,children:n})})});h.displayName=l.l9.displayName;let x=o.forwardRef((e,t)=>{let{className:a,children:n,...s}=e;return(0,i.jsx)(l.UC,{ref:t,className:"overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...s,children:(0,i.jsx)("div",{className:(0,c.cn)("pb-4 pt-0",a),children:n})})});x.displayName=l.UC.displayName;var p=a(6604),u=a(760),g=a(3249);let f=e=>{let{children:t,className:a,variant:n,duration:s=.4,delay:r=0,yOffset:l=6,inView:c=!1,inViewMargin:d="-50px",blur:m="6px"}=e,h=(0,o.useRef)(null),x=(0,p.W)(h,{once:!0,margin:d});return(0,i.jsx)(u.N,{children:(0,i.jsx)(g.P.div,{ref:h,initial:"hidden",animate:!c||x?"visible":"hidden",exit:"hidden",variants:n||{hidden:{y:l,opacity:0,filter:"blur(".concat(m,")")},visible:{y:-l,opacity:1,filter:"blur(0px)"}},transition:{delay:.04+r,duration:s,ease:"easeOut"},className:a,children:t})})};var j=a(9208);function v(e){let{text:t,color:a="yellow"}=e;"violet-web"===a?a="pink":("lemon"===a||"laser-lemon"===a)&&(a="yellow");let n={cyan:"bg-cyan-200 dark:bg-cyan-500/45",pink:"bg-[#ffa7ee] dark:bg-[#f73ed2]/50","slate-blue":"bg-[#a0a8ff] dark:bg-[#675bf9]/50",red:"bg-[#ffa0a0] dark:bg-[#f83b3b]/45",yellow:"bg-[#ffff77] dark:bg-[#fce913]/35"}[a];return(0,i.jsxs)("span",{className:"relative inline-block",children:[(0,i.jsx)("span",{className:(0,c.cn)("absolute left-0 right-0 top-[60%] h-[0.6em] -translate-y-1/2 px-[0.1em]",n)}),(0,i.jsx)("span",{className:"z-2 relative",children:t})]})}let y=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=e=>{let{value:t,iconTitle:a,title:n,iconBody:s,body:r}=e;return(0,i.jsxs)(m,{value:t,children:[(0,i.jsx)(h,{className:"text-black dark:text-white",children:(0,i.jsxs)("span",{className:"flex items-center gap-2",children:[a,(0,i.jsx)("span",{children:n})]})}),(0,i.jsx)(x,{className:"ps-7 text-base",children:(0,i.jsx)("ul",{className:"list-inside list-none space-y-1 text-gray-700 dark:text-gray-300",children:r.map((e,t)=>(0,i.jsxs)("li",{children:[s,e]},t))})})]})};return(0,i.jsx)(d,{type:"single",collapsible:!0,children:e.map((e,a)=>(0,i.jsx)(t,{...e},a))})},b=()=>{let e=[(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(v,{text:"re-watching",color:"pink"})," any one of these series:"," ",(0,i.jsx)(v,{text:"Breaking Bad",color:"pink"}),","," ",(0,i.jsx)(v,{text:"Silicon Valley",color:"pink"}),","," ",(0,i.jsx)(v,{text:"South Park",color:"pink"})," and"," ",(0,i.jsx)(v,{text:"The Office",color:"pink"}),"."]})],t=[(0,i.jsxs)(i.Fragment,{children:["The favicon is a ",(0,i.jsx)(v,{text:"4-hypercube graph",color:"cyan"})," made via Python, using NetworkX and Matplotlib. Check the"," ",(0,i.jsx)(j.default,{href:"/icon.ico",target:"_blank",className:"mr-1 text-orange-500 hover:underline hover:underline-offset-2",children:"image"}),"out, learn"," ",(0,i.jsx)(j.default,{href:"https://en.wikipedia.org/wiki/Hypercube_graph",target:"_blank",className:"mr-1 text-blue-violet-500 hover:underline hover:underline-offset-2",children:"more"})," ","about hypercube graphs & here is the"," ",(0,i.jsx)(j.default,{href:"https://github.com/steadyfall/steadyfall.github.io/blob/main/hypercube/generate.py",target:"_blank",className:"mr-1 text-firefly-600 hover:underline hover:underline-offset-2 dark:text-firefly-500",children:"code"})," ","to generate it yourself."]})],a=[{value:"findme",iconTitle:(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(n.A,{className:"h-4 w-4 opacity-90 md:h-5 md:w-5","aria-hidden":"true"})}),title:"You can find me:",iconBody:(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(s.A,{className:"mr-1 inline-block h-4 w-4 align-middle md:h-5 md:w-5"})}),body:e},{value:"curious",iconTitle:(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(r.A,{className:"h-4 w-4 opacity-90 md:h-5 md:w-5","aria-hidden":"true"})}),title:"For those of you curious:",iconBody:(0,i.jsx)(i.Fragment,{}),body:t}];return(0,i.jsxs)("section",{id:"about",className:"mb-12",children:[(0,i.jsx)(f,{delay:.12,children:(0,i.jsx)("h2",{className:(0,c.cn)("mb-4 font-section text-2xl md:text-3xl lg:text-4xl","inline-block bg-gradient-to-r from-[#434343] to-[#000000] bg-clip-text text-transparent dark:from-gray-300 dark:to-gray-100"),children:"About"})}),(0,i.jsx)(f,{delay:.16,children:(0,i.jsxs)("div",{className:"text-gray-700 dark:text-gray-300",children:[(0,i.jsxs)("p",{className:"mb-2",children:["I am a ",(0,i.jsx)(v,{text:"software developer",color:"red"})," based in"," ",(0,i.jsx)(v,{text:"Toronto",color:"red"})," and currently a"," ",(0,i.jsx)(v,{text:"junior"})," pursuing a"," ",(0,i.jsx)(v,{text:"Computational Mathematics"})," major at the"," ",(0,i.jsx)(v,{text:"University of Waterloo"}),". I am passionate about tech and innovation, always exploring the"," ",(0,i.jsx)("span",{className:"underline underline-offset-4",children:"intersection of software development and AI."})]}),(0,i.jsx)("div",{className:"mb-2",children:y(a)})]})})]})};var k=a(6874),N=a.n(k);function w(e){let[t,a]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{let i=window.matchMedia(e);i.matches!==t&&a(i.matches);let n=()=>a(i.matches);return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[t,e]),t}function S(e){let{organizationLogo:t,organizationName:a,organizationLink:n,role:s,duration:r,body:l,organizationBeforeRole:c=!1}=e,d=w("(min-width: 768px)"),m=w("(min-width: 1280px)");return(0,i.jsx)("div",{className:"-mb-2 flex items-center",children:(0,i.jsxs)("div",{className:"group relative flex-grow lg:-ml-[132px] xl:-ml-40 2xl:-ml-52",children:[d&&(0,i.jsx)("div",{className:"opacity-0 transition-opacity delay-100 md:group-hover:opacity-100",children:(0,i.jsx)("div",{className:"absolute top-1/2 aspect-square -translate-y-1/2 transform rounded-lg bg-transparent",children:(0,i.jsx)("img",{src:t,alt:"".concat(a," logo"),width:m?80:70,height:m?80:70,className:"rounded-md"})})}),(0,i.jsxs)("div",{className:"py-3 lg:pl-[132px] xl:pl-40 2xl:pl-52",children:[function(e,t,a,n){let s=arguments.length>4&&void 0!==arguments[4]&&arguments[4],r=arguments.length>5?arguments[5]:void 0,l=o.createElement(j.default,{href:t,target:"_blank",rel:"noopener noreferrer","aria-label":"Link to ".concat(e)},o.createElement(s?"h2":"h3",{className:s?"text-xl font-bold":"text-lg font-semibold"},e)),c=o.createElement(s?"h3":"h2",{className:s?"text-lg font-semibold":"text-xl font-bold"},a);return(0,i.jsxs)("div",{className:"flex flex-col justify-between sm:flex-row md:items-start",children:[(0,i.jsxs)("div",{children:[(0,i.jsxs)(i.Fragment,{children:[s&&(0,i.jsxs)(i.Fragment,{children:[l,c]}),!s&&(0,i.jsxs)(i.Fragment,{children:[c,l]})]}),!r&&(0,i.jsx)("h3",{className:"font-typewriter text-gray-600 dark:text-gray-400",children:n})]}),r&&(0,i.jsx)("h3",{className:"font-typewriter text-gray-600 dark:text-gray-400",children:n})]})}(a,n,s,r,c,d),l]})]})})}function C(e){let{institutionLogo:t,institutionName:a,institutionLink:n,degree:s,major:r,duration:l,details:o}=e,c=s.concat(", ").concat(r);return(0,i.jsx)(S,{organizationLogo:t,organizationName:a,organizationLink:n,role:c,duration:l,body:o,organizationBeforeRole:!0})}function L(){let e=(0,i.jsxs)("p",{className:"mt-1 py-0 text-gray-700 dark:text-gray-300",children:[(0,i.jsx)(N(),{href:"https://uwaterloo.ca/computational-mathematics/",target:"_blank",rel:"noopener noreferrer",className:"mr-0.5 hover:text-black hover:underline hover:underline-offset-4 dark:hover:text-white",children:"Computational Mathematics"})," ","is a interdisplinary major that combines Mathematics, Statistics, Optimization and Computer Science, offered by the Faculty of Mathematics."]});return(0,i.jsxs)("section",{id:"education",className:"mb-12",children:[(0,i.jsx)(f,{delay:.28,children:(0,i.jsx)("h2",{className:(0,c.cn)("mb-4 font-section text-2xl md:text-3xl lg:text-4xl","inline-block bg-gradient-to-r from-[#434343] to-[#000000] bg-clip-text text-transparent dark:from-gray-300 dark:to-gray-100"),children:"Education"})}),(0,i.jsx)(f,{delay:.32,children:(0,i.jsx)(C,{institutionLogo:"/images/uwaterlooLogo.png",institutionName:"University of Waterloo",institutionLink:"https://uwaterloo.ca/",degree:"Bachelor of Mathematics",major:"Computational Mathematics Major",duration:"Sept 2022 - Present",details:e})})]})}var P=a(3052);function A(e){let{companyLogo:t,companyName:a,companyLink:n,position:s,period:r,responsibilities:l}=e,o=l&&l.length>0&&(0,i.jsx)("div",{className:"mt-3",children:(0,i.jsx)("ul",{className:"list-inside list-none space-y-1 text-gray-700 dark:text-gray-300",children:l.map((e,t)=>(0,i.jsxs)("li",{children:[(0,i.jsx)(P.A,{className:"mr-0.25 inline-block h-4 w-4 align-middle md:h-5 md:w-5"}),e]},t))})});return(0,i.jsx)(S,{organizationLogo:t,organizationName:a,organizationLink:n,role:s,duration:r,body:o,organizationBeforeRole:!0})}function z(e){let{arr:t}=e,[a,n]=(0,o.useState)(t);return(0,i.jsxs)("section",{id:"experience",className:"mb-12",children:[(0,i.jsx)(f,{delay:.2,children:(0,i.jsx)("h2",{className:(0,c.cn)("mb-4 font-section text-2xl md:text-3xl lg:text-4xl","inline-block bg-gradient-to-r from-[#434343] to-[#000000] bg-clip-text text-transparent dark:from-gray-300 dark:to-gray-100"),children:"Experience"})}),a&&a.length>0?(0,i.jsx)("div",{className:"space-y-6",children:a.map((e,t)=>(0,i.jsx)(f,{delay:.24+.2*t,children:(0,i.jsx)(A,{...e},t)},t))}):(0,i.jsx)("p",{children:"No experiences to display."})]})}var D=a(9068),F=a.n(D),T=a(9496),M=a(4357);let E=e=>{let{name:t,pronouns:a,currentEducation:n,currentJob:s,basedFrom:r,githubLink:l,linkedinLink:c,email:d,resumeFile:m}=e,h=w("(min-width: 768px)"),[x,p]=(0,o.useState)();return(0,o.useEffect)(()=>{setTimeout(()=>{p(void 0)},3e3)},[x]),(0,i.jsx)("div",{className:"container mx-auto mb-10",children:(0,i.jsxs)("div",{className:"flex flex-col items-center justify-between md:flex-row",children:[(0,i.jsx)(f,{delay:.04,children:!h&&(0,i.jsx)("div",{className:"mb-4 flex-shrink-0 md:mb-0 md:mr-8",children:(0,i.jsx)("img",{src:"/images/headshot.jpg",alt:"Profile",width:200,height:200,className:"size-36 rounded-lg object-cover md:size-48 lg:size-56"})})}),(0,i.jsxs)("div",{className:"flex-grow text-center md:text-left",children:[(0,i.jsx)(f,{delay:.04,children:(0,i.jsx)("div",{className:"flex items-center justify-center md:justify-start",children:(0,i.jsx)("h1",{className:"mr-4 text-4xl font-bold md:text-5xl lg:text-6xl",children:t})})}),(0,i.jsxs)("div",{className:"mt-4 flex justify-center space-x-4 md:justify-start",children:[(0,i.jsx)(f,{delay:.04,children:(0,i.jsx)(j.default,{href:l,target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub",className:"text-pink-500 hover:underline hover:underline-offset-2",children:"github"})}),(0,i.jsx)(f,{delay:.04,children:(0,i.jsx)(j.default,{href:c,target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn",className:"text-thunderbird-600 hover:underline hover:underline-offset-2",children:"linkedin"})}),(0,i.jsx)(f,{delay:.04,children:(0,i.jsx)(j.default,{href:"mailto:"+d,"aria-label":"Email",className:"text-azure-radiance-600 hover:underline hover:underline-offset-2",children:"email"})}),(0,i.jsx)(f,{delay:.04,children:(0,i.jsx)(j.default,{href:"/"+m,target:"_blank","aria-label":"Resume",className:"text-neon-green-500 hover:underline hover:underline-offset-2 dark:text-neon-green-400",children:"resume"})})]}),(0,i.jsxs)("div",{className:"mt-4 text-sm md:text-base lg:text-lg",children:[a&&(0,i.jsx)(f,{delay:.04,children:(0,i.jsx)("p",{className:"text-xs italic md:text-sm lg:text-base",children:a})}),n&&(0,i.jsx)(f,{delay:.04,children:(0,i.jsx)("p",{children:n})}),(0,i.jsx)(f,{delay:.04,children:(0,i.jsxs)("div",{className:"inline-flex",children:[(0,i.jsx)("p",{className:"font-typewriter",children:d.split("").map(e=>"@"===e?"[at]":e)}),(0,i.jsx)("button",{className:"ml-3 cursor-pointer text-slate-600 hover:text-black dark:text-slate-300 dark:hover:text-white",onClick:async()=>{"clipboard"in navigator?await navigator.clipboard.writeText(d):F()(d),p("copied-email")},children:"copied-email"===x?(0,i.jsx)(T.A,{className:"h-4 w-4 md:h-5 md:w-5"}):(0,i.jsx)(M.A,{className:"h-4 w-4 md:h-5 md:w-5"})})]})})]})]}),(0,i.jsx)(f,{delay:.04,inView:!0,children:h&&(0,i.jsx)("div",{className:"flex-shrink-0",children:(0,i.jsx)("img",{src:"/images/headshot.jpg",alt:"Profile",width:200,height:200,className:"size-36 rounded-lg object-cover md:size-48 lg:size-56"})})})]})})};var I=a(7347);let R=(0,a(2085).F)("flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent shadow bg-neutral-950 text-gray-200 hover:bg-neutral-950/80 dark:bg-neutral-100 dark:text-gray-800 dark:hover:bg-neutral-100/80 focus:bg-neutral-900 dark:focus:bg-neutral-200",secondary:"border-transparent shadow bg-neutral-200 text-gray-800 hover:bg-neutral-200/80 dark:bg-neutral-700 dark:text-gray-200 dark:hover:bg-neutral-700/80",outline:"text-foreground focus:bg-accent focus:text-accent-foreground"}},defaultVariants:{variant:"default"}});function _(e){let{className:t,variant:a,...n}=e;return(0,i.jsx)("div",{className:(0,c.cn)(R({variant:a}),t),...n})}let O={AWS:"la:aws","AWS EC2":"simple-icons:amazonec2",Axios:"simple-icons:axios",Bash:"devicon-plain:bash",C:"devicon:c","C++":"devicon:cplusplus","C++20":"devicon:cplusplus",Cloudflare:"devicon:cloudflare",CMake:"devicon:cmake",CSS3:"devicon:css3",Cypress:"devicon-plain:cypressio","D3.js":"logos:d3",Django:"vscode-icons:file-type-django",Docker:"logos:docker-icon",Firebase:"devicon:firebase",Flask:"simple-icons:flask","Framer Motion":"simple-icons:framer",Go:"logos:go",HTML5:"devicon:html5",JavaScript:"devicon:javascript","JavaScript (ES6)":"devicon:javascript",Jest:"logos:jest",jQuery:"devicon-plain:jquery",Linux:"devicon:linux",MongoDB:"logos:mongodb-icon",MySQL:"fontisto:mysql","Next.js":"devicon:nextjs","Node.js":"devicon:nodejs",NumPy:"devicon:numpy",OpenCV:"devicon:opencv",Postgres:"logos:postgresql",Postman:"devicon:postman",Powershell:"vscode-icons:file-type-powershell",Pytest:"simple-icons:pytest",Python:"devicon:python",Python3:"devicon:python",R:"devicon:rstudio",Railway:"simple-icons:railway",React:"logos:react",Redis:"devicon:redis","Socket.IO":"simple-icons:socketdotio",Streamlit:"devicon:streamlit",TailwindCSS:"devicon:tailwindcss",TypeScript:"devicon:typescript"};function U(e){let{delayTime:t,title:a,description:n,repo:s,repoUrl:r,live:l,liveUrl:o,techStack:c}=e;return(0,i.jsxs)("div",{className:"items-center",children:[(0,i.jsxs)("div",{className:"mb-2 flex flex-col justify-between sm:flex-row md:items-start",children:[(0,i.jsx)("h3",{className:"text-xl font-semibold",children:a}),(0,i.jsxs)("div",{className:"justify-end space-x-2",children:[s&&(0,i.jsx)(j.default,{href:r,target:"_blank",rel:"noopener noreferrer","aria-label":"Repository link for ".concat(a),className:"text-pink-500 hover:underline hover:underline-offset-2",children:"repo"}),l&&(0,i.jsx)(j.default,{href:o,target:"_blank",rel:"noopener noreferrer","aria-label":"Live link for ".concat(a),className:"text-midnight-blue-500 hover:underline hover:underline-offset-2",children:"link"})]})]}),(0,i.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:n}),c&&c.length>0&&(0,i.jsx)("div",{className:"mt-3 flex flex-wrap gap-1",children:c.map((e,a)=>t?(0,i.jsx)(f,{delay:t+.05*a,children:(0,i.jsxs)(_,{variant:"secondary",children:[(null==O?void 0:O[e])&&(0,i.jsx)("span",{className:"mr-2",children:(0,i.jsx)(I.In,{icon:O[e],inline:!0,width:18,height:18})}),(0,i.jsx)("span",{children:e})]},a)},a):(0,i.jsxs)(_,{variant:"secondary",children:[(null==O?void 0:O[e])&&(0,i.jsx)("span",{className:"mr-2",children:(0,i.jsx)(I.In,{icon:O[e],inline:!0,width:18,height:18})}),(0,i.jsx)("span",{children:e})]},a))})]})}function W(e){let{arr:t}=e,[a,n]=(0,o.useState)(t);return(0,i.jsxs)("section",{id:"projects",className:"mb-12",children:[(0,i.jsx)(f,{delay:.44,children:(0,i.jsx)("h2",{className:(0,c.cn)("mb-4 font-section text-2xl md:text-3xl lg:text-4xl","inline-block bg-gradient-to-r from-[#434343] to-[#000000] bg-clip-text text-transparent dark:from-gray-300 dark:to-gray-100"),children:"Projects"})}),a&&a.length>0?(0,i.jsx)("div",{className:"space-y-5",children:a.map((e,t)=>(e.delayTime=.48+.2*t,(0,i.jsx)(f,{delay:.48+.2*t,children:(0,i.jsx)(U,{...e},t)},t)))}):(0,i.jsx)("p",{children:"No projects to display."})]})}function B(e){let{arr:t}=e,[a,n]=(0,o.useState)(t),s=Object.entries(a).map((e,t)=>{let[n,s]=e;return(0,i.jsxs)("div",{className:"mb-4",suppressHydrationWarning:!0,children:[(0,i.jsx)("div",{className:"mb-2 text-xl font-bold",children:(0,i.jsxs)(f,{delay:.4,children:["frameworksAndLibraries"===n?"databases"in a?"Frameworks & Libraries":"Frameworks, Libraries & Databases":n.charAt(0).toUpperCase()+n.slice(1),":"]})}),(0,i.jsx)("div",{className:"flex flex-wrap gap-1",children:s.map((e,t)=>(0,i.jsx)(f,{delay:.4+.05*t,children:(0,i.jsxs)(_,{children:[(null==O?void 0:O[e])&&(0,i.jsx)("span",{className:"mr-2",children:(0,i.jsx)(I.In,{icon:O[e],inline:!0,width:18,height:18})}),(0,i.jsx)("span",{children:e})]},t)},t))})]},t)});return(0,i.jsxs)("section",{id:"skills",className:"mb-12",children:[(0,i.jsx)(f,{delay:.36,children:(0,i.jsx)("h2",{className:(0,c.cn)("mb-4 font-section text-2xl md:text-3xl lg:text-4xl","inline-block bg-gradient-to-r from-[#434343] to-[#000000] bg-clip-text text-transparent dark:from-gray-300 dark:to-gray-100"),children:"Skills"})}),a?s:(0,i.jsx)("p",{children:"No skills to display."})]})}let q={name:"Himank Dave",pronouns:"he/him/his",currentEducation:"Computational Mathematics [at] UWaterloo",currentJob:["Software Developer in Test Intern","Geotab"],basedFrom:"Toronto",githubLink:"https://github.com/steadyfall",linkedinLink:"https://www.linkedin.com/in/himank-dave/",email:"hddave@uwaterloo.ca",resumeFile:"resume.pdf"},Q=[{companyLogo:"/images/geotab.jpeg",companyName:"Geotab",companyLink:"https://geotab.com/",position:"Test Automation Developer Intern",period:"Jan 2025 - Present"},{companyLogo:"/images/cactuscreatives.png",companyName:"Cactus Creatives",companyLink:"https://cactuscreatives.com/",position:"Software Developer Intern, Core",period:"May 2024 - August 2024",responsibilities:["Developed an ETL pipeline for unstructured hierarchical data with Flask, supporting interactive visualizations via React and D3.js.","Built a self-hosted uptime monitoring tool using Node.js, Axios for web & database monitoring, Redis for data storage, and Socket.IO for real-time websocket communication, with VPS deployment via Docker.","Designed multiple CI/CD pipelines using Github Actions to automate unit and integration testing with Jest and Cypress, deployment, and monitoring processes for the uptime monitoring tool.","Engineered a domain-specific chatbot with 85% accuracy, leveraging a PDF-trained algorithm, custom model trainer, and OpenAI's NLP API for multilingual responses."]},{companyLogo:"/images/cactuscreatives.png",companyName:"Cactus Creatives",companyLink:"https://cactuscreatives.com/",position:"Python Developer Intern",period:"May 2023 - August 2023",responsibilities:["Developed and maintained full-stack content management system in HTMX and Django, handling real-time metrics.","Designed REST APIs with Flask and REST Framework in production with 1000+ requests/day.","Implemented a Python script to parse and migrate over 25,000+ records from MySQL to PostgreSQL databases.","Optimized SQL queries in the client codebase to align with updated database schema and improve performance post-migration.","Analyzed large product usage datasets through linear/logistic regression and outlier detection, leading to over 25% client savings."]}],H=[{title:"Trivivo",description:"Crafted a feature-rich, dynamic quiz game platform with progressive difficulty levels, real-time analytics, and comprehensive admin tools, complemented by a secure API for question management and user engagement tracking.",repo:!0,repoUrl:"https://github.com/steadyfall/wwbm-webapp",live:!1,techStack:["Django","MySQL","HTML5","TailwindCSS","jQuery","Docker","AWS EC2"]},{title:"SpectraSVD",description:"Designed and deployed an advanced image compression algorithm achieving 25%+ size reduction, complemented by a real-time interactive web application for demonstrating compression quality and efficiency.",repo:!0,repoUrl:"https://github.com/steadyfall/svd-compression",live:!0,liveUrl:"https://spectrasvd.streamlit.app/",techStack:["NumPy","OpenCV","Pillow","Streamlit"]},{title:"Personal Website",description:"Built a modern, responsive portfolio website with fluid animations, architected as a customizable template.",repo:!0,repoUrl:"https://github.com/steadyfall/steadyfall.github.io.git",live:!0,liveUrl:"https://steadyfall.github.io",techStack:["TypeScript","React","TailwindCSS","Next.js","Framer Motion","Node.js"]},{title:"Chess (CS246 Final Project)",description:"Developed a C++ chess engine with innovative multi-player variants and AI capabilities, employing advanced software design patterns and rigorous testing methodologies in a Linux environment.",repo:!1,live:!1,techStack:["C++","CMake","XQuartz"]},{title:"EcoWiz",description:"Engineered a full-stack application featuring a multimodal image classification system for garbage sorting, achieving 80% accuracy through advanced deep learning techniques.",repo:!0,repoUrl:"https://github.com/karman103/DeltaHacksX",live:!1,techStack:["React","Flask","ResNet-50 CNN","YOLOv8"]},{title:"RedWish",description:"Developed a comprehensive full-stack health application to streamline blood donation and transfusion processes, incorporating an AI-powered chatbot to enhance user engagement and accessibility.",repo:!0,repoUrl:"https://github.com/steadyfall/RedWish",live:!0,liveUrl:"https://steadyfall.github.io/RedWish/",techStack:["HTML5","CSS3","JavaScript","Firebase","DialogFlow API"]}],J={languages:["Python","JavaScript (ES6)","TypeScript","Go","C","C++20","SQL"],frameworksAndLibraries:["Django","Flask","React","TailwindCSS","Next.js","Node.js","Postgres","MySQL"],tools:["Bash","Powershell","Docker","Postman"]};function V(){return(0,i.jsxs)("main",{className:"z-1 py-6",children:[(0,i.jsx)(E,{...q}),(0,i.jsx)(b,{}),(0,i.jsx)(z,{arr:Q}),(0,i.jsx)(L,{}),(0,i.jsx)(B,{arr:J}),(0,i.jsx)(W,{arr:H})]})}},9208:(e,t,a)=>{"use strict";a.d(t,{default:()=>r});var i=a(5155),n=a(4870),s=a(9434);function r(e){let{className:t,href:a,children:r,...l}=e;return(0,i.jsxs)("a",{className:(0,s.cn)("group inline-flex items-center",t),href:a,...l,children:[r,(0,i.jsx)(n.A,{className:(0,s.cn)("h-4 w-4 md:h-5 md:w-5","transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1","flex-shrink-0")})]})}},9434:(e,t,a)=>{"use strict";a.d(t,{cn:()=>s});var i=a(2596),n=a(9688);function s(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,n.QP)((0,i.$)(t))}}},e=>{var t=t=>e(e.s=t);e.O(0,[342,522,441,684,358],()=>t(4616)),_N_E=e.O()}]);