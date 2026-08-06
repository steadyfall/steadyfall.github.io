'use client';

import { Tabs } from '@base-ui/react/tabs';
import { useState } from 'react';

import styles from '@/components/portfolio/Portfolio.module.css';
import PortfolioIndex from '@/components/portfolio/PortfolioIndex';
import PortfolioNavigation from '@/components/portfolio/PortfolioNavigation';
import PortfolioProjects from '@/components/portfolio/PortfolioProjects';

export default function Portfolio() {
  const [page, setPage] = useState('index');
  const changePage = (nextPage: string) => {
    setPage(nextPage);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  return (
    <Tabs.Root value={page} onValueChange={changePage} className={styles.site}>
      <PortfolioNavigation />
      <main id="main-content" className={styles.content}>
        <PortfolioIndex showProjects={() => changePage('projects')} />
        <PortfolioProjects />
      </main>
    </Tabs.Root>
  );
}
