import CompanyTldr from '@/components/CompanyTldr';
import { Education } from '@/components/Education';
import { Experiences } from '@/components/Experiences';
import Footer from '@/components/Footer';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import VerticalLinks from '@/components/ui/VerticalLinks';
import { education, personalDetails, experiences, projects, skills } from '@/data/resume';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resume',
  description: 'Resume of Himank Dave.',
};

export default function AboutPage() {
  return (
    <>
      <section className="mt-6 grid grid-cols-[minmax(0,1fr)_auto] items-start">
        <h1 className="m-0 font-display text-5xl font-normal italic leading-[1.05] tracking-[-0.01em] md:text-[54px]">
          Résumé
        </h1>
        <VerticalLinks
          links={[
            { label: '1-page resume', href: `/${personalDetails.resumeFile}`, isExternal: true },
            { label: 'linkedin', href: personalDetails.linkedinLink, isExternal: true },
            { label: 'github', href: personalDetails.githubLink, isExternal: true },
            { label: 'email', href: `mailto:${personalDetails.email}`, isExternal: false },
          ]}
        />
      </section>
      <Experiences arr={experiences} />
      <Education arr={education} />
      <Projects arr={projects.filter((project) => project.selected_work)} />
      <Skills arr={skills} />
      <CompanyTldr arr={experiences} />
      <Footer />
    </>
  );
}
