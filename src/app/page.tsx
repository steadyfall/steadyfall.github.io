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
    <main className="container py-6 z-1">
      <Header {...personalDetails} />
      <About />
      <Experiences arr={experiencesArray} />
      <Education />
      <Skills arr={skillsArray}/>
      <Projects arr={projectsArray} />
    </main>
  )
}