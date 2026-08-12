'use client';

import { useEffect, useRef } from 'react';

function Doodle() {
  const doodleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const doodle = doodleRef.current;
    if (!doodle) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

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

      if (Math.hypot(event.clientX - centerX, event.clientY - centerY) < 90) {
        doodle.style.transform = `translateX(${event.clientX > centerX ? '-38px' : '0'})`;
        brows.forEach((brow) => (brow.style.opacity = '1'));
        clearTimeout(returnTimer);
        returnTimer = setTimeout(() => {
          doodle.style.transform = 'translateX(0)';
          brows.forEach((brow) => (brow.style.opacity = '0'));
        }, 800);
      }
    };

    const reset = () => pupils.forEach((pupil) => (pupil.style.transform = 'translate(0, 0)'));
    document.addEventListener('pointermove', move, { passive: true });
    document.addEventListener('pointerleave', reset);
    return () => {
      document.removeEventListener('pointermove', move);
      document.removeEventListener('pointerleave', reset);
      clearTimeout(returnTimer);
    };
  }, []);

  return (
    <div
      ref={doodleRef}
      className="h-[62px] w-[66px] flex-none text-[#141414] transition-transform duration-300 ease-out motion-reduce:transition-none [&_[data-brow]]:opacity-0 [&_[data-brow]]:transition-opacity [&_[data-brow]]:duration-200 [&_[data-pupil]]:transition-transform [&_[data-pupil]]:duration-75"
      aria-hidden
    >
      <svg viewBox="0 0 120 112" role="presentation" className="block size-full">
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

export default function Footer() {
  return (
    <footer className="mt-auto flex items-end justify-between gap-6 pt-16 md:pt-20">
      <div className="pb-1.5 font-mono text-[13px] text-[#77746d]">
        made w love by{' '}
        <span className="animate-rainbow bg-[linear-gradient(90deg,#d94f4f,#d98a3d,#b3ab3c,#4fae6d,#4a83d4,#8a63cc,#d94f4f)] bg-[length:250%_100%] bg-clip-text font-bold text-transparent motion-reduce:animate-none">
          himank
        </span>
        .
      </div>
      <Doodle />
    </footer>
  );
}
