"use client";

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import About from '@/components/About'
import { Experiences } from '@/components/Experiences'
import { Projects } from '@/components/Projects'
import { Education } from '@/components/Education'
import { Skills } from '@/components/Skills';
import Navbar from '@/components/Navbar';

export default function Portfolio() {
  const experiencesArray = [
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

  const projectsArray = [
    {
      title: "Trivivo",
      description: "Developed a full-stack web app with a Django/MySQL backend, HTML5/CSS3/jQuery frontend, RESTful API and real-time admin dashboard, optimizing game management by 45%.",
      repo: true,
      repoUrl: "https://github.com/steadyfall/wwbm-webapp",
      live: false
    },
    {
      title: "SpectraSVD",
      description: "Designed a low-rank approximation image compression algorithm with 25%+ size reduction, visualized using OpenCV/Pillow, and deployed an interactive Streamlit web app for real-time results.",
      repo: true,
      repoUrl: "https://github.com/steadyfall/svd-compression",
      live: true,
      liveUrl: "https://spectrasvd.streamlit.app/"
    },
    {
      title: "Personal Website",
      description: "Built a modern, responsive personal website written in TypeScript with React, TailwindCSS and Next.js.",
      repo: true,
      repoUrl: "https://github.com/steadyfall/steadyfall.github.io.git",
      live: true,
      liveUrl: "https://steadyfall.github.io"
    },
    {
      title: "Chess (CS246 Final Project)",
      description: "Developed a C++ chess engine, innovating 3-way and 4-way variants, and creating test suites and GUI in a Linux environment with CMake and XWindows.",
      repo: false,
      live: false
    },
    {
      title: "EcoWiz",
      description: "Developed a full-stack garbage classification app with React/Flask, and an 80% accurate multimodal model using ResNet-50 CNN and YOLOv8.",
      repo: true,
      repoUrl: "https://github.com/karman103/DeltaHacksX",
      live: false
    },
    {
      title: "RedWish",
      description: "Developed a full-stack health app for blood donation accessibility with a Firebase backend, HTML5/CSS3/jQuery frontend, and integrated a chatbot using DialogFlow API to boost user engagement.",
      repo: true,
      repoUrl: "https://github.com/steadyfall/RedWish",
      live: true,
      liveUrl: "https://steadyfall.github.io/RedWish/"
    },
  ]

  const skillsArray = [
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

  return (
    <div className="bg-neutral-100 dark:bg-neutral-950 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <Navbar />
      <div className="mx-auto max-w-full px-4 sm:px-12 md:px-16 lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
        <Header />
        <main className="container mx-auto px-4 py-8 z-1">
          <About />
          <Experiences arr={experiencesArray}/>
          <Education />
          <Skills arr={skillsArray}/>
          <Projects arr={projectsArray}/>
        </main>
        <Footer />
      </div>
    </div>
  )
}