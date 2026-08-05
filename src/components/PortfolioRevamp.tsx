'use client';

import { Accordion } from '@base-ui/react/accordion';
import { Button } from '@base-ui/react/button';
import { Tabs } from '@base-ui/react/tabs';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';

import { experiences, personalDetails, projects, skills } from '@/data/resume';

import styles from './PortfolioRevamp.module.css';

const companyLinks: Record<string, string> = {
  Geotab: 'https://geotab.com/',
  'Cactus Creatives': 'https://cactuscreatives.com/',
};

function ExternalArrow() {
  return <span aria-hidden="true">↗</span>;
}

function PlusIcon() {
  return (
    <svg className={styles.plusIcon} width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
      <path d="M1 7h12M7 1v12" />
    </svg>
  );
}

function Doodle() {
  const doodleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const doodle = doodleRef.current;
    if (!doodle) return;

    const pupils = Array.from(doodle.querySelectorAll<SVGCircleElement>('[data-pupil]'));
    const brows = Array.from(doodle.querySelectorAll<SVGPathElement>('[data-brow]'));
    let returnTimer: ReturnType<typeof setTimeout> | undefined;

    const move = (event: PointerEvent) => {
      const rect = doodle.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height * 0.34;
      const angle = Math.atan2(event.clientY - centerY, event.clientX - centerX);
      const distance = Math.min(
        2.7,
        Math.hypot(event.clientX - centerX, event.clientY - centerY) / 45,
      );

      pupils.forEach((pupil) => {
        pupil.style.transform = `translate(${(Math.cos(angle) * distance).toFixed(2)}px, ${(Math.sin(angle) * distance).toFixed(2)}px)`;
      });

      const proximity = Math.hypot(event.clientX - centerX, event.clientY - centerY);
      if (proximity < 90) {
        doodle.style.transform = `translateX(${event.clientX > centerX ? '-38px' : '0'})`;
        brows.forEach((brow) => (brow.style.opacity = '1'));
        clearTimeout(returnTimer);
        returnTimer = setTimeout(() => {
          doodle.style.transform = 'translateX(0)';
          brows.forEach((brow) => (brow.style.opacity = '0'));
        }, 800);
      }
    };

    const reset = () => {
      pupils.forEach((pupil) => (pupil.style.transform = 'translate(0, 0)'));
    };

    document.addEventListener('pointermove', move, { passive: true });
    document.addEventListener('pointerleave', reset);
    return () => {
      document.removeEventListener('pointermove', move);
      document.removeEventListener('pointerleave', reset);
      clearTimeout(returnTimer);
    };
  }, []);

  return (
    <div ref={doodleRef} className={styles.doodle} aria-hidden="true">
      <svg viewBox="0 0 120 112" role="presentation">
        <path
          d="M67 2 C82 4 91 17 88 31 C86 41 79 48 71 51 C71.5 54 73 56 77 59 C91 69 103 82 107 112 L13 112 C14 88 24 72 41 62 C46 59 48 56 48.5 52 C39 48 33 39 34 27 C35 12 50 0 67 2Z"
          fill="currentColor"
        />
        <circle cx="53" cy="26" r="7" fill="#fff" />
        <circle cx="73" cy="24" r="8" fill="#fff" />
        <circle data-pupil cx="54" cy="27" r="3" fill="currentColor" />
        <circle data-pupil cx="74" cy="25" r="3.5" fill="currentColor" />
        <path
          data-brow
          d="M44 14L60 16M68 14L84 12"
          stroke="#fff"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.madeWith}>
        made w love by <span>himank</span>.
      </div>
      <Doodle />
    </footer>
  );
}

function ExperienceList() {
  return (
    <Accordion.Root multiple className={styles.experienceList}>
      {experiences.map((experience) => (
        <Accordion.Item
          key={`${experience.companyName}-${experience.position}`}
          value={`${experience.companyName}-${experience.position}`}
          className={styles.experienceItem}
        >
          <Accordion.Header className={styles.accordionHeader}>
            <Accordion.Trigger className={styles.experienceTrigger}>
              <span className={styles.experienceTitle}>
                <strong>
                  {experience.companyName} <ExternalArrow />
                </strong>
                <span aria-hidden="true"> · </span>
                <span>{experience.position}</span>
              </span>
              <span className={styles.experienceMeta}>
                <span>{experience.period.replaceAll(' - ', ' – ')}</span>
                <PlusIcon />
              </span>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Panel className={styles.experiencePanel}>
            <div className={styles.experienceDetails}>
              {experience.responsibilities.map((responsibility, index) => (
                <ReactMarkdown key={index}>{`· ${responsibility}`}</ReactMarkdown>
              ))}
              <a
                className={styles.companyLink}
                href={experience.companyLink ?? companyLinks[experience.companyName]}
                target="_blank"
                rel="noreferrer"
              >
                Visit {experience.companyName} <ExternalArrow />
              </a>
            </div>
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}

function IndexPanel({ showProjects }: { showProjects: () => void }) {
  const selectedProjects = projects.slice(0, 3);

  return (
    <Tabs.Panel value="index" className={styles.panel}>
      <section className={styles.hero} aria-labelledby="intro-title">
        <div className={styles.heroCopy}>
          <h1 id="intro-title">{personalDetails.name}</h1>
          <p>
            Software engineer studying Computational Mathematics at Waterloo. I like small tools,
            fast feedback loops, and building reliable systems that remove repetitive work.
          </p>
          <div className={styles.socialLinks} aria-label="Contact links">
            <a href={personalDetails.githubLink} target="_blank" rel="noreferrer">
              GitHub <ExternalArrow />
            </a>
            <a href={personalDetails.linkedinLink} target="_blank" rel="noreferrer">
              LinkedIn <ExternalArrow />
            </a>
            <a href={`mailto:${personalDetails.email}`}>Email</a>
            <a href={`/${personalDetails.resumeFile}`} target="_blank" rel="noreferrer">
              Resume ↓
            </a>
          </div>
        </div>
        <div className={styles.portraitWrap}>
          <Image
            src="/images/headshot.jpeg"
            alt="Portrait of Himank Dave"
            width={340}
            height={420}
            priority
            unoptimized
            className={styles.portrait}
          />
        </div>
      </section>

      <section className={styles.gridSection} aria-labelledby="experience-title">
        <h2 id="experience-title">Experience</h2>
        <ExperienceList />
      </section>

      <section className={styles.gridSection} aria-labelledby="education-title">
        <h2 id="education-title">Education</h2>
        <div className={styles.education}>
          <div className={styles.educationHeading}>
            <a href="https://uwaterloo.ca/" target="_blank" rel="noreferrer">
              University of Waterloo <ExternalArrow />
            </a>
            <span> · Bachelor of Mathematics</span>
          </div>
          <p>Computational Mathematics Major</p>
          <p className={styles.mono}>September 2022 – May 2027</p>
        </div>
      </section>

      <section className={styles.gridSection} aria-labelledby="selected-projects-title">
        <div className={styles.sectionHeadingWithLink}>
          <h2 id="selected-projects-title">Selected projects</h2>
          <Button className={styles.allProjectsLink} onClick={showProjects}>
            All projects ↗
          </Button>
        </div>
        <div className={styles.selectedProjects}>
          {selectedProjects.map((project) => (
            <div key={project.title}>
              <a href={project.liveUrl ?? project.repoUrl} target="_blank" rel="noreferrer">
                {project.title.toLowerCase()}{' '}
                {project.live || project.repo ? <ExternalArrow /> : null}
              </a>
              <span> · {project.description}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.gridSection} aria-labelledby="skills-title">
        <h2 id="skills-title">Skills</h2>
        <div className={styles.skills}>
          <div>
            <span>Languages</span>
            <p>{skills.languages.join(', ')}</p>
          </div>
          <div>
            <span>Frameworks</span>
            <p>{skills.frameworksAndLibraries.join(', ')}</p>
          </div>
          <div>
            <span>Tools</span>
            <p>{skills.tools.join(', ')}</p>
          </div>
        </div>
      </section>

      <Footer />
    </Tabs.Panel>
  );
}

function ProjectsPanel() {
  return (
    <Tabs.Panel value="projects" className={styles.panel}>
      <section className={styles.projectsIntro}>
        <h1>Projects</h1>
        <p>Things I built to learn something, solve a problem, or make a useful idea tangible.</p>
      </section>

      <section className={`${styles.gridSection} ${styles.projectsGrid}`} aria-label="All projects">
        <h2>Selected work</h2>
        <div className={styles.projectList}>
          {projects.map((project) => (
            <article key={project.title} className={styles.projectItem}>
              <div>
                <h3>
                  {project.liveUrl || project.repoUrl ? (
                    <a href={project.liveUrl ?? project.repoUrl} target="_blank" rel="noreferrer">
                      {project.title.toLowerCase()} <ExternalArrow />
                    </a>
                  ) : (
                    project.title.toLowerCase()
                  )}
                </h3>
                <p>{project.description}</p>
                <div className={styles.projectStack}>{project.techStack.join(' · ')}</div>
              </div>
              {project.repoUrl ? (
                <a
                  className={styles.codeLink}
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  code ↗
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </Tabs.Panel>
  );
}

export default function PortfolioRevamp() {
  const [page, setPage] = useState('index');
  const changePage = (nextPage: string) => {
    setPage(nextPage);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  return (
    <Tabs.Root value={page} onValueChange={changePage} className={styles.site}>
      <header className={styles.navbar}>
        <nav className={styles.navList} aria-label="Portfolio pages">
          <Tabs.List className={styles.tabList}>
            <Tabs.Tab value="index" className={styles.navTab}>
              Index
            </Tabs.Tab>
            <Tabs.Tab value="projects" className={styles.navTab}>
              Projects
            </Tabs.Tab>
          </Tabs.List>
          <a
            href={`/${personalDetails.resumeFile}`}
            target="_blank"
            rel="noreferrer"
            className={styles.navLink}
          >
            Résumé
          </a>
        </nav>
      </header>
      <main id="main-content" className={styles.content}>
        <IndexPanel showProjects={() => changePage('projects')} />
        <ProjectsPanel />
      </main>
    </Tabs.Root>
  );
}
