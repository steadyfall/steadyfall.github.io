import { Tabs } from '@base-ui/react/tabs';

import { projects } from '@/data/resume';

import styles from './Portfolio.module.css';
import { PortfolioArrow } from './PortfolioArrow';
import PortfolioFooter from './PortfolioFooter';

export default function PortfolioProjects() {
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
                      {project.title.toLowerCase()} <PortfolioArrow />
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
                  code <PortfolioArrow />
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <PortfolioFooter />
    </Tabs.Panel>
  );
}
