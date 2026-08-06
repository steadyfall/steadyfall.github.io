'use client';

import { Tabs } from '@base-ui/react/tabs';
import { useState } from 'react';

import About from '@/components/About';
import { Education } from '@/components/Education';
import { Experiences } from '@/components/Experiences';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { experiences, personalDetails, projects, skills } from '@/data/resume';

export default function Portfolio() {
  const [page, setPage] = useState('index');
  const changePage = (nextPage: string) => {
    setPage(nextPage);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  return (
    <Tabs.Root
      value={page}
      onValueChange={changePage}
      className="min-h-screen w-full bg-white font-sans text-[#11110f]"
    >
      <Navbar />
      <main
        id="main-content"
        className="mx-auto w-full max-w-[1100px] px-[22px] pb-[34px] pt-2.5 md:px-12 md:pb-12 md:pt-3"
      >
        <Tabs.Panel
          value="index"
          className="w-full outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#11110f]"
        >
          <Header {...personalDetails}>
            <About />
          </Header>
          <Experiences arr={experiences} />
          <Education />
          <Projects arr={projects.slice(0, 3)} showProjects={() => changePage('projects')} />
          <Skills arr={skills} />
          <Footer />
        </Tabs.Panel>
        <Tabs.Panel
          value="projects"
          className="w-full outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#11110f]"
        >
          <Projects arr={projects} variant="all" />
          <Footer />
        </Tabs.Panel>
      </main>
    </Tabs.Root>
  );
}
