'use client';

import { useEffect, useRef } from 'react';

import styles from './Portfolio.module.css';

function PortfolioDoodle() {
  const doodleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const doodle = doodleRef.current;
    if (!doodle) return;

    const pupils = Array.from(doodle.querySelectorAll<SVGCircleElement>('[data-pupil]'));
    const brows = Array.from(doodle.querySelectorAll<SVGPathElement>('[data-brow]'));
    let returnTimer: ReturnType<typeof setTimeout> | undefined;

    const move = (event: PointerEvent) => {
      const rect = doodle.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height * 0.34;
      const angle = Math.atan2(event.clientY - centerY, event.clientX - centerX);
      const distance = Math.min(
        2.7,
        Math.hypot(event.clientX - centerX, event.clientY - centerY) / 45,
      );

      pupils.forEach((pupil) => {
        pupil.style.transform = `translate(${(Math.cos(angle) * distance).toFixed(2)}px, ${(Math.sin(angle) * distance).toFixed(2)}px)`;
      });

      const proximity = Math.hypot(event.clientX - centerX, event.clientY - centerY);
      if (proximity < 90) {
        doodle.style.transform = `translateX(${event.clientX > centerX ? '-38px' : '0'})`;
        brows.forEach((brow) => (brow.style.opacity = '1'));
        clearTimeout(returnTimer);
        returnTimer = setTimeout(() => {
          doodle.style.transform = 'translateX(0)';
          brows.forEach((brow) => (brow.style.opacity = '0'));
        }, 800);
      }
    };

    const reset = () => {
      pupils.forEach((pupil) => (pupil.style.transform = 'translate(0, 0)'));
    };

    document.addEventListener('pointermove', move, { passive: true });
    document.addEventListener('pointerleave', reset);
    return () => {
      document.removeEventListener('pointermove', move);
      document.removeEventListener('pointerleave', reset);
      clearTimeout(returnTimer);
    };
  }, []);

  return (
    <div ref={doodleRef} className={styles.doodle} aria-hidden="true">
      <svg viewBox="0 0 120 112" role="presentation">
        <path
          d="M67 2 C82 4 91 17 88 31 C86 41 79 48 71 51 C71.5 54 73 56 77 59 C91 69 103 82 107 112 L13 112 C14 88 24 72 41 62 C46 59 48 56 48.5 52 C39 48 33 39 34 27 C35 12 50 0 67 2Z"
          fill="currentColor"
        />
        <circle cx="53" cy="26" r="7" fill="#fff" />
        <circle cx="73" cy="24" r="8" fill="#fff" />
        <circle data-pupil cx="54" cy="27" r="3" fill="currentColor" />
        <circle data-pupil cx="74" cy="25" r="3.5" fill="currentColor" />
        <path
          data-brow
          d="M44 14L60 16M68 14L84 12"
          stroke="#fff"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export default function PortfolioFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.madeWith}>
        made w love by <span>himank</span>.
      </div>
      <PortfolioDoodle />
    </footer>
  );
}
