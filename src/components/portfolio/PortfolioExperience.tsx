import { Accordion } from '@base-ui/react/accordion';
import ReactMarkdown from 'react-markdown';

import { experiences } from '@/data/resume';

import styles from './Portfolio.module.css';
import { PortfolioArrow } from './PortfolioArrow';

function PlusIcon() {
  return (
    <svg className={styles.plusIcon} width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
      <path d="M1 7h12M7 1v12" />
    </svg>
  );
}

export default function PortfolioExperience() {
  return (
    <section className={styles.gridSection} aria-labelledby="experience-title">
      <h2 id="experience-title">Experience</h2>
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
                    {experience.companyName} <PortfolioArrow />
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
                  href={experience.companyLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit {experience.companyName} <PortfolioArrow />
                </a>
              </div>
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </section>
  );
}
