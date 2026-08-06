import styles from './Portfolio.module.css';
import { PortfolioArrow } from './PortfolioArrow';

export default function PortfolioEducation() {
  return (
    <section className={styles.gridSection} aria-labelledby="education-title">
      <h2 id="education-title">Education</h2>
      <div className={styles.education}>
        <div className={styles.educationHeading}>
          <a href="https://uwaterloo.ca/" target="_blank" rel="noreferrer">
            University of Waterloo <PortfolioArrow />
          </a>
          <span> · Bachelor of Mathematics</span>
        </div>
        <p>Computational Mathematics Major</p>
        <p className={styles.mono}>September 2022 – May 2027</p>
      </div>
    </section>
  );
}
