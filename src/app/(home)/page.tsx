import About from '@/components/About';
import { Experiences } from '@/components/Experiences';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { experiences, personalDetails, projects, skills } from '@/data/resume';

export default function Portfolio() {
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
