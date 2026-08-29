import Footer from '@/components/Footer';
import { Projects } from '@/components/Projects';
import { projects } from '@/data/resume';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Projects by Himank Dave, built to learn, solve problems, and make ideas tangible.',
};

export default function ProjectsPage() {
  return (
    <>
      <Projects arr={projects} variant="all" />
      <Footer />
    </>
  );
}
