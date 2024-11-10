"use client";

import Header from '@/components/Header'
import About from '@/components/About'
import { Experiences } from '@/components/Experiences'
import { Projects } from '@/components/Projects'
import { Education } from '@/components/Education'
import { Skills } from '@/components/Skills';
import { personalDetails, experiencesArray, projectsArray, skillsArray } from '@/app/config';

export default function Portfolio() {
  return (
    <div className="mx-auto max-w-full px-4 sm:px-12 md:px-16 lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
      <Header {...personalDetails} />
      <main className="container mx-auto py-8 z-1">
        <About />
        <Experiences arr={experiencesArray} />
        <Education />
        <Skills arr={skillsArray}/>
        <Projects arr={projectsArray} />
      </main>
    </div>
  )
}