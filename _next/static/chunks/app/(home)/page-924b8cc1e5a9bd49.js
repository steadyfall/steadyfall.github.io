(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[813],{4616:(e,t,a)=>{Promise.resolve().then(a.bind(a,7439))},7439:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>z});var i=a(5155),s=a(5401),r=a(3920),n=a(2115);function l(e){let[t,a]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{let i=window.matchMedia(e);i.matches!==t&&a(i.matches);let s=()=>a(i.matches);return window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[t,e]),t}var o=a(2591),c=a(8140),d=a(5683),m=a(4842);let h=e=>{let{children:t,className:a,variant:s,duration:r=.4,delay:l=0,yOffset:o=6,inView:h=!1,inViewMargin:x="-50px",blur:p="6px"}=e,u=(0,n.useRef)(null),g=(0,c.W)(u,{once:!0,margin:x});return(0,i.jsx)(d.N,{children:(0,i.jsx)(m.P.div,{ref:u,initial:"hidden",animate:!h||g?"visible":"hidden",exit:"hidden",variants:s||{hidden:{y:o,opacity:0,filter:"blur(".concat(p,")")},visible:{y:-o,opacity:1,filter:"blur(0px)"}},transition:{delay:.04+l,duration:r,ease:"easeOut"},className:a,children:t})})};var x=a(1079),p=a.n(x);let u=e=>{let{name:t,pronouns:a,currentEducation:c,currentJob:d,githubLink:m,linkedinLink:x,email:u,resumeFile:g}=e,f=l("(min-width: 768px)"),[v,j]=(0,n.useState)();return(0,n.useEffect)(()=>{setTimeout(()=>{j(void 0)},3e3)},[v]),(0,i.jsx)("div",{className:"container mx-auto mb-10",children:(0,i.jsxs)("div",{className:"flex flex-col md:flex-row items-center justify-between",children:[(0,i.jsx)(h,{delay:.04,children:!f&&(0,i.jsx)("div",{className:"flex-shrink-0 mb-4 md:mb-0 md:mr-8",children:(0,i.jsx)("img",{src:"/images/headshot.jpg",alt:"Profile",width:200,height:200,className:"rounded-lg size-36 md:size-48 lg:size-56 object-cover"})})}),(0,i.jsxs)("div",{className:"flex-grow text-center md:text-left",children:[(0,i.jsx)(h,{delay:.04,children:(0,i.jsx)("div",{className:"flex items-center justify-center md:justify-start",children:(0,i.jsx)("h1",{className:"text-4xl md:text-5xl lg:text-6xl font-bold mr-4",children:t})})}),(0,i.jsxs)("div",{className:"flex justify-center md:justify-start mt-4 space-x-4",children:[(0,i.jsx)(h,{delay:.04,children:(0,i.jsx)(o.default,{href:m,target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub",className:"hover:underline hover:underline-offset-2 text-pink-500",children:"github"})}),(0,i.jsx)(h,{delay:.04,children:(0,i.jsx)(o.default,{href:x,target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn",className:"hover:underline hover:underline-offset-2 text-thunderbird-600",children:"linkedin"})}),(0,i.jsx)(h,{delay:.04,children:(0,i.jsx)(o.default,{href:"mailto:"+u,"aria-label":"Email",className:"hover:underline hover:underline-offset-2 text-azure-radiance-600",children:"email"})}),(0,i.jsx)(h,{delay:.04,children:(0,i.jsx)(o.default,{href:"/"+g,target:"_blank","aria-label":"Resume",className:"hover:underline hover:underline-offset-2 text-neon-green-500 dark:text-neon-green-400",children:"resume"})})]}),(0,i.jsxs)("div",{className:"mt-4 text-sm md:text-base lg:text-lg",children:[a&&(0,i.jsx)(h,{delay:.04,children:(0,i.jsx)("p",{children:a})}),d&&(0,i.jsx)(h,{delay:.04,children:(0,i.jsx)("p",{children:d})}),c&&(0,i.jsx)(h,{delay:.04,children:(0,i.jsx)("p",{children:c})}),(0,i.jsx)(h,{delay:.04,children:(0,i.jsxs)("div",{className:"inline-flex",children:[(0,i.jsx)("p",{className:"font-typewriter",children:u.split("").map(e=>"@"===e?"[at]":e)}),(0,i.jsx)("button",{className:"ml-3 text-slate-600 dark:text-slate-300 hover:text-black dark:hover:text-white cursor-pointer",onClick:async()=>{"clipboard"in navigator?await navigator.clipboard.writeText(u):p()(u),j("copied-email")},children:"copied-email"===v?(0,i.jsx)(s.A,{className:"w-4 h-4 md:w-5 md:h-5"}):(0,i.jsx)(r.A,{className:"w-4 h-4 md:w-5 md:h-5"})})]})})]})]}),(0,i.jsx)(h,{delay:.04,inView:!0,children:f&&(0,i.jsx)("div",{className:"flex-shrink-0",children:(0,i.jsx)("img",{src:"/images/headshot.jpg",alt:"Profile",width:200,height:200,className:"rounded-lg size-36 md:size-48 lg:size-56 object-cover"})})})]})})};var g=a(1567);function f(e){let t,{text:a,color:s="yellow"}=e;return t="cyan"===s?"bg-cyan-200 dark:bg-cyan-500/30":"pink"===s||"violet-web"===s?"bg-[#ffa7ee] dark:bg-[#f73ed2]/30":"slate-blue"===s?"bg-[#a0a8ff] dark:bg-[#675bf9]/50":"red"===s?"bg-[#ffa0a0] dark:bg-[#f83b3b]/50":"bg-[#ffff77] dark:bg-[#fce913]/30",(0,i.jsx)("span",{className:(0,g.cn)("px-1 rounded",t),children:a})}let v=()=>(0,i.jsxs)("section",{id:"about",className:"mb-12",children:[(0,i.jsx)(h,{delay:.12,children:(0,i.jsx)("h2",{className:(0,g.cn)("text-2xl md:text-3xl lg:text-4xl font-section mb-4","inline-block text-transparent bg-clip-text bg-gradient-to-r dark:from-gray-300 dark:to-gray-100 from-[#434343] to-[#000000]"),children:"About"})}),(0,i.jsx)(h,{delay:.16,children:(0,i.jsxs)("div",{className:"text-gray-700 dark:text-gray-300",children:[(0,i.jsxs)("p",{className:"mb-2",children:["I am a ",(0,i.jsx)(f,{text:"junior"})," at the ",(0,i.jsx)(f,{text:"University of Waterloo"}),", pursuing a major in ",(0,i.jsx)(f,{text:"Computational Mathematics"}),". With a ",(0,i.jsx)(f,{text:"passion for technology and innovation"}),", I am constantly exploring new areas in ",(0,i.jsx)(f,{text:"software development"})," and ",(0,i.jsx)(f,{text:"artificial intelligence"}),". I am eager to work in areas that leverage the combined potential of ",(0,i.jsx)(f,{text:"machine learning"})," and software development, regardless of traditional boundaries."]}),(0,i.jsxs)("p",{className:"mb-2",children:["You can find me ",(0,i.jsx)(f,{text:"re-watching",color:"pink"})," any one of these TV series:\xa0",(0,i.jsx)(f,{text:"Silicon Valley",color:"pink"}),",\xa0",(0,i.jsx)(f,{text:"South Park",color:"pink"})," and ",(0,i.jsx)(f,{text:"The Office",color:"pink"}),"."]}),(0,i.jsxs)("p",{className:"mb-2",children:["For those of you curious, the favicon is a ",(0,i.jsx)(f,{text:"4-hypercube graph",color:"cyan"})," made via Python, using NetworkX and Matplotlib. Check the ",(0,i.jsx)(o.default,{href:"/icon.ico",target:"_blank",className:"mr-1 hover:underline hover:underline-offset-2 text-orange-500",children:"image"}),"out, learn ",(0,i.jsx)(o.default,{href:"https://en.wikipedia.org/wiki/Hypercube_graph",target:"_blank",className:"mr-1 hover:underline hover:underline-offset-2 text-blue-violet-500",children:"more"})," about hypercube graphs & here is the ",(0,i.jsx)(o.default,{href:"https://github.com/steadyfall/steadyfall.github.io/blob/main/hypercube/generate.py",target:"_blank",className:"mr-1 hover:underline hover:underline-offset-2 dark:text-firefly-500 text-firefly-600",children:"code"})," to generate it yourself."]})]})})]});function j(e){let{companyLogo:t,companyName:a,companyLink:s,position:r,period:n,responsibilities:c}=e,d=l("(min-width: 768px)");return(0,i.jsx)("div",{className:"mb-6 flex items-center",children:(0,i.jsxs)("div",{className:"relative flex-grow md:pl-12",children:[(0,i.jsx)("div",{className:"bg-white aspect-square absolute left-[5px] top-3 rounded-lg",children:(0,i.jsx)("img",{src:t,alt:"".concat(a," logo"),width:d?80:45,height:d?80:45,className:"rounded-md"})}),(0,i.jsxs)("div",{className:"pl-16 py-3",children:[(0,i.jsxs)("div",{className:"flex flex-col md:items-start justify-between sm:flex-row mb-4",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("h2",{className:"text-xl font-bold",children:r}),(0,i.jsx)(o.default,{href:s,target:"_blank",rel:"noopener noreferrer","aria-label":"Link to ".concat(a),children:(0,i.jsx)("h3",{className:"text-lg font-semibold",children:a})}),!d&&(0,i.jsx)("h3",{className:"text-gray-600 font-typewriter dark:text-gray-400",children:n})]}),d&&(0,i.jsx)("h3",{className:"text-gray-600 font-typewriter dark:text-gray-400",children:n})]}),(0,i.jsx)("div",{className:"mt-4",children:(0,i.jsx)("ul",{className:"list-inside text-gray-700 dark:text-gray-300 space-y-1",children:c.map((e,t)=>(0,i.jsxs)("li",{children:["- ",e]},t))})})]})]})})}function y(e){let{arr:t}=e,[a,s]=(0,n.useState)(t);return(0,i.jsxs)("section",{id:"experience",className:"mb-12",children:[(0,i.jsx)(h,{delay:.2,children:(0,i.jsx)("h2",{className:(0,g.cn)("text-2xl md:text-3xl lg:text-4xl font-section mb-4","inline-block text-transparent bg-clip-text bg-gradient-to-r dark:from-gray-300 dark:to-gray-100 from-[#434343] to-[#000000]"),children:"Experience"})}),a&&a.length>0?(0,i.jsx)("div",{className:"space-y-6",children:a.map((e,t)=>(0,i.jsx)(h,{delay:.24+.2*t,children:(0,i.jsx)(j,{...e},t)},t))}):(0,i.jsx)("p",{children:"No experiences to display."})]})}var b=a(4788);let k={AWS:"la:aws","AWS EC2":"simple-icons:amazonec2",Axios:"simple-icons:axios",Bash:"devicon-plain:bash",C:"devicon:c","C++":"devicon:cplusplus","C++20":"devicon:cplusplus",Cloudflare:"devicon:cloudflare",CMake:"devicon:cmake",CSS3:"devicon:css3",Cypress:"devicon-plain:cypressio","D3.js":"logos:d3",Django:"vscode-icons:file-type-django",Docker:"logos:docker-icon",Firebase:"devicon:firebase",Flask:"simple-icons:flask","Framer Motion":"simple-icons:framer",Go:"logos:go",HTML5:"devicon:html5",JavaScript:"devicon:javascript","JavaScript (ES6)":"devicon:javascript",Jest:"logos:jest",jQuery:"devicon-plain:jquery",Linux:"devicon:linux",MongoDB:"logos:mongodb-icon",MySQL:"fontisto:mysql","Next.js":"devicon:nextjs","Node.js":"devicon:nodejs",NumPy:"devicon:numpy",OpenCV:"devicon:opencv",Postgres:"logos:postgresql",Postman:"devicon:postman",Powershell:"vscode-icons:file-type-powershell",Pytest:"simple-icons:pytest",Python:"devicon:python",Python3:"devicon:python",R:"devicon:rstudio",Railway:"simple-icons:railway",React:"logos:react",Redis:"devicon:redis","Socket.IO":"simple-icons:socketdotio",Streamlit:"devicon:streamlit",TailwindCSS:"devicon:tailwindcss",TypeScript:"devicon:typescript"},N=(0,a(652).F)("flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent shadow bg-neutral-950 text-gray-200 hover:bg-neutral-950/80 dark:bg-neutral-100 dark:text-gray-800 dark:hover:bg-neutral-100/80 focus:bg-neutral-900 dark:focus:bg-neutral-200",secondary:"border-transparent shadow bg-neutral-200 text-gray-800 hover:bg-neutral-200/80 dark:bg-neutral-700 dark:text-gray-200 dark:hover:bg-neutral-700/80",outline:"text-foreground focus:bg-accent focus:text-accent-foreground"}},defaultVariants:{variant:"default"}});function w(e){let{className:t,variant:a,...s}=e;return(0,i.jsx)("div",{className:(0,g.cn)(N({variant:a}),t),...s})}function S(e){let{delayTime:t,title:a,description:s,repo:r,repoUrl:n,live:l,liveUrl:c,techStack:d}=e;return(0,i.jsxs)("div",{className:"items-center",children:[(0,i.jsxs)("div",{className:"flex flex-col md:items-start justify-between sm:flex-row mb-2",children:[(0,i.jsx)("h3",{className:"text-xl font-semibold",children:a}),(0,i.jsxs)("div",{className:"space-x-2 justify-end",children:[r&&(0,i.jsx)(o.default,{href:n,target:"_blank",rel:"noopener noreferrer","aria-label":"Repository link for ".concat(a),className:"hover:underline hover:underline-offset-2 text-pink-500",children:"repo"}),l&&(0,i.jsx)(o.default,{href:c,target:"_blank",rel:"noopener noreferrer","aria-label":"Live link for ".concat(a),className:"hover:underline hover:underline-offset-2 text-midnight-blue-500",children:"link"})]})]}),(0,i.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:s}),d&&d.length>0&&(0,i.jsx)("div",{className:"mt-3 flex flex-wrap gap-1",children:d.map((e,a)=>t?(0,i.jsx)(h,{delay:t+.05*a,children:(0,i.jsxs)(w,{variant:"secondary",children:[(null==k?void 0:k[e])&&(0,i.jsx)("span",{className:"mr-2",children:(0,i.jsx)(b.In,{icon:k[e],inline:!0,width:18,height:18})}),(0,i.jsx)("span",{children:e})]},a)},a):(0,i.jsxs)(w,{variant:"secondary",children:[(null==k?void 0:k[e])&&(0,i.jsx)("span",{className:"mr-2",children:(0,i.jsx)(b.In,{icon:k[e],inline:!0,width:18,height:18})}),(0,i.jsx)("span",{children:e})]},a))})]})}function C(e){let{arr:t}=e,[a,s]=(0,n.useState)(t);return(0,i.jsxs)("section",{id:"projects",className:"mb-12",children:[(0,i.jsx)(h,{delay:.44,children:(0,i.jsx)("h2",{className:(0,g.cn)("text-2xl md:text-3xl lg:text-4xl font-section mb-4","inline-block text-transparent bg-clip-text bg-gradient-to-r dark:from-gray-300 dark:to-gray-100 from-[#434343] to-[#000000]"),children:"Projects"})}),a&&a.length>0?(0,i.jsx)("div",{className:"space-y-5",children:a.map((e,t)=>(e.delayTime=.48+.2*t,(0,i.jsx)(h,{delay:.48+.2*t,children:(0,i.jsx)(S,{...e},t)},t)))}):(0,i.jsx)("p",{children:"No projects to display."})]})}function P(){let e=l("(min-width: 768px)");return(0,i.jsxs)("section",{id:"education",className:"mb-12",children:[(0,i.jsx)(h,{delay:.28,children:(0,i.jsx)("h2",{className:(0,g.cn)("text-2xl md:text-3xl lg:text-4xl font-section mb-4","inline-block text-transparent bg-clip-text bg-gradient-to-r dark:from-gray-300 dark:to-gray-100 from-[#434343] to-[#000000]"),children:"Education"})}),(0,i.jsxs)(h,{delay:.32,children:[(0,i.jsx)("div",{className:"flex items-center",children:(0,i.jsxs)("div",{className:"relative flex-grow md:pl-12",children:[(0,i.jsx)("div",{className:"bg-white aspect-square absolute left-[5px] rounded-lg",children:(0,i.jsx)("img",{src:"/images/uwaterlooLogo.png",alt:"University of Waterloo logo",width:e?80:45,height:e?80:45,className:"rounded-md"})}),(0,i.jsx)("div",{className:"pl-16 "+(e&&"py-3"),children:(0,i.jsxs)("div",{className:"flex flex-col md:items-start justify-between sm:flex-row mb-2",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)(o.default,{href:"https://uwaterloo.ca/",target:"_blank",rel:"noopener noreferrer","aria-label":"Link to University of Waterloo",children:(0,i.jsx)("h2",{className:"text-xl font-bold inline-flex items-center",children:"University of Waterloo"})}),(0,i.jsx)("h3",{className:"text-lg font-semibold",children:"Bachelor of Mathematics, Computational Mathematics Major"}),!e&&(0,i.jsx)("h3",{className:"text-gray-600 font-typewriter dark:text-gray-400",children:"Sept 2022 - Present"})]}),e&&(0,i.jsx)("h3",{className:"text-gray-600 font-typewriter dark:text-gray-400",children:"Sept 2022 - Present"})]})})]})}),(0,i.jsxs)("p",{className:"text-gray-700 dark:text-gray-300 mt-1 py-0",children:[(0,i.jsx)(o.default,{href:"https://uwaterloo.ca/computational-mathematics/",target:"_blank",rel:"noopener noreferrer",className:"mr-0.5",children:"Computational Mathematics"})," is a interdisplinary major that combines Mathematics, Statistics, Optimization and Computer Science, offered by the Faculty of Mathematics."]})]})]})}function L(e){let{arr:t}=e,[a,s]=(0,n.useState)(t),r=Object.entries(a).map((e,t)=>{let[s,r]=e;return(0,i.jsxs)("div",{className:"mb-4",suppressHydrationWarning:!0,children:[(0,i.jsx)("div",{className:"text-xl mb-2 font-bold",children:(0,i.jsxs)(h,{delay:.4,children:["frameworksAndLibraries"===s?"databases"in a?"Frameworks & Libraries":"Frameworks, Libraries & Databases":s.charAt(0).toUpperCase()+s.slice(1),":"]})}),(0,i.jsx)("div",{className:"flex flex-wrap gap-1",children:r.map((e,t)=>(0,i.jsx)(h,{delay:.4+.05*t,children:(0,i.jsxs)(w,{children:[(null==k?void 0:k[e])&&(0,i.jsx)("span",{className:"mr-2",children:(0,i.jsx)(b.In,{icon:k[e],inline:!0,width:18,height:18})}),(0,i.jsx)("span",{children:e})]},t)},t))})]},t)});return(0,i.jsxs)("section",{id:"skills",className:"mb-12",children:[(0,i.jsx)(h,{delay:.36,children:(0,i.jsx)("h2",{className:(0,g.cn)("text-2xl md:text-3xl lg:text-4xl font-section mb-4","inline-block text-transparent bg-clip-text bg-gradient-to-r dark:from-gray-300 dark:to-gray-100 from-[#434343] to-[#000000]"),children:"Skills"})}),a?r:(0,i.jsx)("p",{children:"No skills to display."})]})}let D={name:"Himank Dave",pronouns:"he/him/his",currentEducation:"3A Computational Mathematics @ UWaterloo",githubLink:"https://github.com/steadyfall",linkedinLink:"https://www.linkedin.com/in/himank-dave/",email:"hddave@uwaterloo.ca",resumeFile:"resume.pdf"},A=[{companyLogo:"/images/cactuscreatives.png",companyName:"Cactus Creatives",companyLink:"https://cactuscreatives.com/",position:"Software Developer Intern, Core",period:"May 2024 - August 2024",responsibilities:["Developed an ETL pipeline for unstructured hierarchical data with Flask, supporting interactive visualizations via React and D3.js.","Built a self-hosted uptime monitoring tool using Node.js, Axios for web & database monitoring, Redis for data storage, and Socket.IO for real-time websocket communication, with VPS deployment via Docker.","Designed multiple CI/CD pipelines using Github Actions to automate unit and integration testing with Jest and Cypress, deployment, and monitoring processes for the uptime monitoring tool.","Engineered a domain-specific chatbot with 85% accuracy, leveraging a PDF-trained algorithm, custom model trainer, and OpenAI's NLP API for multilingual responses."]},{companyLogo:"/images/cactuscreatives.png",companyName:"Cactus Creatives",companyLink:"https://cactuscreatives.com/",position:"Python Developer Intern",period:"May 2023 - August 2023",responsibilities:["Developed and maintained full-stack content management system in HTMX and Django, handling real-time metrics.","Designed REST APIs with Flask and REST Framework in production with 1000+ requests/day.","Implemented a Python script to parse and migrate over 25,000+ records from MySQL to PostgreSQL databases.","Optimized SQL queries in the client codebase to align with updated database schema and improve performance post-migration.","Analyzed large product usage datasets through linear/logistic regression and outlier detection, leading to over 25% client savings."]}],M=[{title:"Trivivo",description:"Crafted a feature-rich, dynamic quiz game platform with progressive difficulty levels, real-time analytics, and comprehensive admin tools, complemented by a secure API for question management and user engagement tracking.",repo:!0,repoUrl:"https://github.com/steadyfall/wwbm-webapp",live:!1,techStack:["Django","MySQL","HTML5","TailwindCSS","jQuery","Docker","AWS EC2"]},{title:"SpectraSVD",description:"Designed and deployed an advanced image compression algorithm achieving 25%+ size reduction, complemented by a real-time interactive web application for demonstrating compression quality and efficiency.",repo:!0,repoUrl:"https://github.com/steadyfall/svd-compression",live:!0,liveUrl:"https://spectrasvd.streamlit.app/",techStack:["NumPy","OpenCV","Pillow","Streamlit"]},{title:"Personal Website",description:"Built a modern, responsive portfolio website with fluid animations, architected as a customizable template.",repo:!0,repoUrl:"https://github.com/steadyfall/steadyfall.github.io.git",live:!0,liveUrl:"https://steadyfall.github.io",techStack:["TypeScript","React","TailwindCSS","Next.js","Framer Motion","Node.js"]},{title:"Chess (CS246 Final Project)",description:"Developed a C++ chess engine with innovative multi-player variants and AI capabilities, employing advanced software design patterns and rigorous testing methodologies in a Linux environment.",repo:!1,live:!1,techStack:["C++","CMake","XQuartz"]},{title:"EcoWiz",description:"Engineered a full-stack application featuring a multimodal image classification system for garbage sorting, achieving 80% accuracy through advanced deep learning techniques.",repo:!0,repoUrl:"https://github.com/karman103/DeltaHacksX",live:!1,techStack:["React","Flask","ResNet-50 CNN","YOLOv8"]},{title:"RedWish",description:"Developed a comprehensive full-stack health application to streamline blood donation and transfusion processes, incorporating an AI-powered chatbot to enhance user engagement and accessibility.",repo:!0,repoUrl:"https://github.com/steadyfall/RedWish",live:!0,liveUrl:"https://steadyfall.github.io/RedWish/",techStack:["HTML5","CSS3","JavaScript","Firebase","DialogFlow API"]}],E={languages:["Python","JavaScript (ES6)","TypeScript","Go","C","C++20","SQL"],frameworksAndLibraries:["Django","Flask","React","TailwindCSS","Next.js","Node.js","Postgres","MySQL"],tools:["Bash","Powershell","Docker","Postman"]};function z(){return(0,i.jsxs)("main",{className:"py-6 z-1",children:[(0,i.jsx)(u,{...D}),(0,i.jsx)(v,{}),(0,i.jsx)(y,{arr:A}),(0,i.jsx)(P,{}),(0,i.jsx)(L,{arr:E}),(0,i.jsx)(C,{arr:M})]})}},2591:(e,t,a)=>{"use strict";a.d(t,{default:()=>n});var i=a(5155),s=a(1567),r=a(8251);function n(e){let{className:t,href:a,children:n,...l}=e;return(0,i.jsxs)("a",{className:(0,s.cn)("group inline-flex items-center",t),href:a,...l,children:[n,(0,i.jsx)(r.A,{className:(0,s.cn)("w-4 h-4 md:w-5 md:h-5","transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1","flex-shrink-0")})]})}},1567:(e,t,a)=>{"use strict";a.d(t,{cn:()=>r});var i=a(3463),s=a(9795);function r(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,s.QP)((0,i.$)(t))}}},e=>{var t=t=>e(e.s=t);e.O(0,[181,411,441,517,358],()=>t(4616)),_N_E=e.O()}]);