import { Button } from '@base-ui/react/button';

import { projects } from '@/data/resume';

import styles from './Portfolio.module.css';
import { PortfolioArrow } from './PortfolioArrow';

export default function PortfolioSelectedProjects({ showProjects }: { showProjects: () => void }) {
  return (
    <section className={styles.gridSection} aria-labelledby="selected-projects-title">
      <div className={styles.sectionHeadingWithLink}>
        <h2 id="selected-projects-title">Selected projects</h2>
        <Button className={styles.allProjectsLink} onClick={showProjects}>
          All projects <PortfolioArrow />
        </Button>
      </div>
      <div className={styles.selectedProjects}>
        {projects.slice(0, 3).map((project) => (
          <div key={project.title}>
            <a href={project.liveUrl ?? project.repoUrl} target="_blank" rel="noreferrer">
              {project.title.toLowerCase()}{' '}
              {project.live || project.repo ? <PortfolioArrow /> : null}
            </a>
            <span> · {project.description}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
