import About from '@/components/About';
import { Experiences } from '@/components/Experiences';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { experiences, personalDetails, projects, skills } from '@/data/resume';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description:
    'About Himank Dave - Software engineer studying Computational Mathematics at UWaterloo.',
};

export default function AboutPage() {
  return (
    <>
      <Header {...personalDetails}>
        <About />
      </Header>
      <Experiences arr={experiences} />
      <Projects arr={projects.filter((project) => project.selected_work)} />
      <Skills arr={skills} />
      <Footer />
    </>
  );
}
