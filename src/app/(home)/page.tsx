'use client';

import About from '@/components/About';
import { Education } from '@/components/Education';
import { Experiences } from '@/components/Experiences';
import Header from '@/components/Header';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { personalDetails, experiences, projects, skills } from '@/data/resume';

export default function Portfolio() {
  return (
    <main className="z-1 py-6">
      <Header {...personalDetails} />
      <About />
      <Experiences arr={experiences} />
      <Education />
      <Skills arr={skills} />
      <Projects arr={projects} />
    </main>
  );
}
