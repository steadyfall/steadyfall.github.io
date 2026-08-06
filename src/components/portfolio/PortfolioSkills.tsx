import { skills } from '@/data/resume';

import styles from './Portfolio.module.css';

export default function PortfolioSkills() {
  return (
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
  );
}
