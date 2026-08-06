import Image from 'next/image';

import { personalDetails } from '@/data/resume';

import styles from './Portfolio.module.css';
import { PortfolioArrow } from './PortfolioArrow';

export default function PortfolioHero() {
  return (
    <section className={styles.hero} aria-labelledby="intro-title">
      <div className={styles.heroCopy}>
        <h1 id="intro-title">{personalDetails.name}</h1>
        <p>
          Software engineer studying Computational Mathematics at Waterloo. I like small tools, fast
          feedback loops, and building reliable systems that remove repetitive work.
        </p>
        <div className={styles.socialLinks} aria-label="Contact links">
          <a href={personalDetails.githubLink} target="_blank" rel="noreferrer">
            GitHub <PortfolioArrow />
          </a>
          <a href={personalDetails.linkedinLink} target="_blank" rel="noreferrer">
            LinkedIn <PortfolioArrow />
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
  );
}
