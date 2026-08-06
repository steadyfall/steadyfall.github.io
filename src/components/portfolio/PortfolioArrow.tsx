import { ArrowDown, ArrowUpRight } from 'lucide-react';

import styles from './Portfolio.module.css';

export function PortfolioArrow() {
  return <ArrowUpRight className={styles.arrowIcon} aria-hidden="true" />;
}

export function PortfolioDownloadArrow() {
  return <ArrowDown className={styles.arrowIcon} aria-hidden="true" />;
}
