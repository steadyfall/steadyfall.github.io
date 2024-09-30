"use client";

import { Header } from './components/header'
import { Footer } from './components/footer'
import { About } from './components/about'
import { Experiences } from './components/experiences'
import { Projects } from './components/projects'
import Navbar from './components/navbar';

export default function Portfolio() {
  // const [darkMode, setDarkMode] = useState(false)
  // useEffect(() => {
  //   if (darkMode) {
  //     document.documentElement.classList.add('dark')
  //   } else {
  //     document.documentElement.classList.remove('dark')
  //   }
  // }, [darkMode])

  const experiencesArray = [
    {
      companyLogo: "/images/cactuscreatives.png",
      companyName: "Cactus Creatives",
      position: "Software Developer Intern, Core",
      period: "Summer 2024",
      responsibilities: [
        `Developed a pipeline to scrape, clean, and model hierarchical data with Flask, supporting interactive visualizations via React and D3.js.`,
        `Built a self-hosted uptime monitoring tool using Node.js, Axios for web & database monitoring, Redis for data storage, and Socket.IO for real-time websocket communication, with VPS deployment via Docker.`,
        `Designed multiple CI/CD pipelines using Github Actions to automate unit and integration testing with Jest and Cypress, deployment, and monitoring processes for the uptime monitoring tool.`,
        `Engineered a domain-specific chatbot with 85% accuracy, leveraging a PDF-trained algorithm, custom model trainer, and OpenAI's NLP API for multilingual responses.`
      ]
    },
    {
      companyLogo: "/images/cactuscreatives.png",
      companyName: "Cactus Creatives",
      position: "Python Developer Intern",
      period: "Summer 2023",
      responsibilities: [
        "Developed and maintained full-stack CMS in HTMX and Django, displaying real-time metrics.",
        "Implemented a Python script to parse and migrate over 25k+ records from MySQL to PostgreSQL databases.",
        "Optimized SQL queries in the client codebase to align with updated database schema and improve performance post-migration.",
        "Analyzed large product usage datasets through linear/logistic regression and outlier detection, leading to over 25% client savings."
      ]
    }
  ]

  const projectsArray = [
    {
      title: "Trivivo",
      description: "Developed a full-stack web app with a Django/MySQL backend, HTML5/CSS3/jQuery frontend, RESTful API and real-time admin dashboard, optimizing game management by 45%.",
      repo: true,
      repoUrl: "https://github.com/steadyfall/wwbm-webapp"
    },
    {
      title: "SpectraSVD",
      description: "Designed a low-rank approximation image compression algorithm with 25%+ size reduction, visualized using OpenCV/Pillow, and deployed an interactive Streamlit web app for real-time results.",
      repo: true,
      repoUrl: "https://github.com/steadyfall/svd-compression"
    },
    {
      title: "RedWish",
      description: "Developed a full-stack health app for blood donation accessibility with a Firebase backend, HTML5/CSS3/jQuery frontend, and integrated a chatbot using DialogFlow API to boost user engagement.",
      repo: true,
      repoUrl: "https://github.com/steadyfall/RedWish"
    },
    {
      title: "Chess (CS246 Final Project)",
      description: "Developed a C++ chess engine, innovating three-way and four-way variants, and creating test suites and GUI in a Linux environment with CMake and XWindows.",
      repo: false,
      repoUrl: ""
    },
    {
      title: "EcoWiz",
      description: "Developed a full-stack garbage classification app with a React frontend, Flask backend, and an 80%-accurate multimodal model using ResNet-50 CNN and YOLOv8.",
      repo: true,
      repoUrl: "https://github.com/karman103/DeltaHacksX"
    }
  ]


  return (
    // ${darkMode ? 'dark' : ''}
    <div className={`min-h-screen`}> 
      <div className="bg-neutral-100 dark:bg-neutral-950 text-gray-800 dark:text-gray-200 transition-colors duration-300">
        <Navbar />
        <div className="mx-auto max-w-full px-4 sm:px-6 md:px-8 lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
          <Header />
          <main className="container mx-auto px-4 py-8">
            <About />
            <Experiences arr={experiencesArray}/>
            <Projects arr={projectsArray}/>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  )
}