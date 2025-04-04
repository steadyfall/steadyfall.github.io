'use client';

import { cn } from '@/lib/utils';
import ThemeSwitch from './ThemeSwitch';
import HoverHighlight from '@/components/ui/HoverHighlighter';
import Link from 'next/link';

const Navbar = () => {
  // const completion = useReadingProgress();

  return (
    <header className="sticky top-0 z-50 py-6 backdrop-blur-xl">
      <nav className={cn(
        'flex items-center justify-between',
        'max-w-full mx-auto px-8 sm:px-16 md:px-24 lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl'
      )}>
        <ul className="flex gap-4 sm:gap-8">
          <li><Link href="/"><HoverHighlight text="home" /></Link></li>
          <li><Link href="/#experience"><HoverHighlight text="experience"/></Link></li>
          <li><Link href="/#projects"><HoverHighlight text="projects"/></Link></li>
          <li><Link href="/posts"><HoverHighlight text="blog"/></Link></li>
        </ul>
        <div className="flex gap-0 sm:gap-4">
          <ThemeSwitch />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;