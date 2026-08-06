import { Tabs } from '@base-ui/react/tabs';

import { personalDetails } from '@/data/resume';

import styles from './Portfolio.module.css';

export default function PortfolioNavigation() {
  return (
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
  );
}
