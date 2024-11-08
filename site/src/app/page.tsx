"use client";

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import About from '@/components/About'
import { Experiences } from '@/components/Experiences'
import { Projects } from '@/components/Projects'
import { Education } from '@/components/Education'
import { Skills } from '@/components/Skills';
import Navbar from '@/components/Navbar';
import { experiencesArray, projectsArray, skillsArray } from '@/app/config';

export default function Portfolio() {
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