import { Tabs } from '@base-ui/react/tabs';

import styles from './Portfolio.module.css';
import PortfolioEducation from './PortfolioEducation';
import PortfolioExperience from './PortfolioExperience';
import PortfolioFooter from './PortfolioFooter';
import PortfolioHero from './PortfolioHero';
import PortfolioSelectedProjects from './PortfolioSelectedProjects';
import PortfolioSkills from './PortfolioSkills';

export default function PortfolioIndex({ showProjects }: { showProjects: () => void }) {
  return (
    <Tabs.Panel value="index" className={styles.panel}>
      <PortfolioHero />
      <PortfolioExperience />
      <PortfolioEducation />
      <PortfolioSelectedProjects showProjects={showProjects} />
      <PortfolioSkills />
      <PortfolioFooter />
    </Tabs.Panel>
  );
}
