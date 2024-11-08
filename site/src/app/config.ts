export const detailsForMetadata = {
    baseUrl: "https://steadyfall.github.io/",
    title: "Himank Dave",
    name: "Himank Dave",
    ogImage: "/icon.ico",
    description: "A sleek, minimalistic and dynamic personal website built with React, TailwindCSS, Next.js and Framer Motion."
};

export const experiencesArray = [
    {
        companyLogo: "/images/cactuscreatives.png",
        companyName: "Cactus Creatives",
        companyLink: "https://cactuscreatives.com/",
        position: "Software Developer Intern, Core",
        period: "May 2024 - August 2024",
        responsibilities: [
        `Developed an ETL pipeline for unstructured hierarchical data with Flask, supporting interactive visualizations via React and D3.js.`,
        `Built a self-hosted uptime monitoring tool using Node.js, Axios for web & database monitoring, Redis for data storage, and Socket.IO for real-time websocket communication, with VPS deployment via Docker.`,
        `Designed multiple CI/CD pipelines using Github Actions to automate unit and integration testing with Jest and Cypress, deployment, and monitoring processes for the uptime monitoring tool.`,
        `Engineered a domain-specific chatbot with 85% accuracy, leveraging a PDF-trained algorithm, custom model trainer, and OpenAI's NLP API for multilingual responses.`
        ]
    },
    {
        companyLogo: "/images/cactuscreatives.png",
        companyName: "Cactus Creatives",
        companyLink: "https://cactuscreatives.com/",
        position: "Python Developer Intern",
        period: "May 2023 - August 2023",
        responsibilities: [
        "Developed and maintained full-stack content management system in HTMX and Django, handling real-time metrics.",
        "Designed REST APIs with Flask and REST Framework in production with 1000+ requests/day.",
        "Implemented a Python script to parse and migrate over 25,000+ records from MySQL to PostgreSQL databases.",
        "Optimized SQL queries in the client codebase to align with updated database schema and improve performance post-migration.",
        "Analyzed large product usage datasets through linear/logistic regression and outlier detection, leading to over 25% client savings.",
        ]
    }
]

export const projectsArray = [
    {
        title: "Trivivo",
        description: "Crafted a feature-rich, dynamic quiz game platform with progressive difficulty levels, real-time analytics, and comprehensive admin tools, complemented by a secure API for question management and user engagement tracking.",
        repo: true,
        repoUrl: "https://github.com/steadyfall/wwbm-webapp",
        live: false,
        techStack: [`Django`, `MySQL`, `HTML5/CSS3`, `jQuery`, `Docker`, `AWS EC2`]
    },
    {
        title: "SpectraSVD",
        description: "Designed and deployed an advanced image compression algorithm achieving 25%+ size reduction, complemented by a real-time interactive web application for demonstrating compression quality and efficiency.",
        repo: true,
        repoUrl: "https://github.com/steadyfall/svd-compression",
        live: true,
        liveUrl: "https://spectrasvd.streamlit.app/",
        techStack: [`NumPy`, `OpenCV`, `Pillow`, `Streamlit`]
    },
    {
        title: "Personal Website",
        description: "Built a modern, responsive portfolio website with fluid animations, architected as a customizable template.",
        repo: true,
        repoUrl: "https://github.com/steadyfall/steadyfall.github.io.git",
        live: true,
        liveUrl: "https://steadyfall.github.io",
        techStack: [`TypeScript`, `React`, `TailwindCSS`, `Next.js`, `Framer Motion`,`Node.js`]
    },
    {
        title: "Chess (CS246 Final Project)",
        description: "Developed a C++ chess engine with innovative multi-player variants and AI capabilities, employing advanced software design patterns and rigorous testing methodologies in a Linux environment.",
        repo: false,
        live: false,
        techStack: [`C++`, `CMake`, `XQuartz`]
    },
    {
        title: "EcoWiz",
        description: "Engineered a full-stack application featuring a multimodal image classification system for garbage sorting, achieving 80% accuracy through advanced deep learning techniques.",
        repo: true,
        repoUrl: "https://github.com/karman103/DeltaHacksX",
        live: false,
        techStack: [`React`, `Flask`, `ResNet-50 CNN`, `YOLOv8`]
    },
    {
        title: "RedWish",
        description: "Developed a comprehensive full-stack health application to streamline blood donation and transfusion processes, incorporating an AI-powered chatbot to enhance user engagement and accessibility.",
        repo: true,
        repoUrl: "https://github.com/steadyfall/RedWish",
        live: true,
        liveUrl: "https://steadyfall.github.io/RedWish/",
        techStack: [`HTML5/CSS3`, `JavaScript`, `Firebase`, `DialogFlow API`]
    },
]

export const skillsArray = [
    "Python", 
    "JavaScript (ES6)", 
    "TypeScript", 
    "Django", 
    "Flask", 
    "React", 
    "Next.js", 
    "Node.js", 
    "Postgres", 
    "MySQL", 
    "Docker", 
    "Bash", 
    "Powershell", 
    "C", 
    "C++"
]
