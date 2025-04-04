'use client';

import Header from '@/components/Header';
import About from '@/components/About';
import { Experiences } from '@/components/Experiences';
import { Projects } from '@/components/Projects';
import { Education } from '@/components/Education';
import { Skills } from '@/components/Skills';
import { personalDetails, experiences, projects, skills } from '@/data/resume';

export default function Portfolio() {
  return (
    <main className="py-6 z-1">
      <Header {...personalDetails} />
      <About />
      <Experiences arr={experiences} />
      <Education />
      <Skills arr={skills}/>
      <Projects arr={projects} />
    </main>
  );
}