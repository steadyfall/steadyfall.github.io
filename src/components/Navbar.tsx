'use client';

import Link from 'next/link';

import HoverHighlight from '@/components/ui/HoverHighlighter';
import { cn } from '@/lib/utils';

import ThemeSwitch from './ThemeSwitch';

const Navbar = () => {
  // const completion = useReadingProgress();

  return (
    <header className="sticky top-0 z-50 lg:pt-6">
      <nav
        className={cn(
          'flex items-center justify-between',
          'mx-auto mb-3 px-8 py-4 sm:px-16 md:px-24 lg:max-w-3xl lg:px-8 xl:max-w-4xl 2xl:max-w-5xl',
          'bg-neutral-100/50 backdrop-blur-md dark:bg-neutral-950/50',
        )}
      >
        <ul className="flex gap-4 sm:gap-8">
          <li>
            <Link
              href="/"
              className="rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
            >
              <HoverHighlight text="home" />
            </Link>
          </li>
          <li>
            <Link
              href="/#experience"
              className="rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
            >
              <HoverHighlight text="experience" />
            </Link>
          </li>
          <li>
            <Link
              href="/#projects"
              className="rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
            >
              <HoverHighlight text="projects" />
            </Link>
          </li>
          <li>
            <Link
              href="/posts"
              className="rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
            >
              <HoverHighlight text="blog" />
            </Link>
          </li>
        </ul>
        <div className="flex gap-0 sm:gap-4">
          <ThemeSwitch />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
