'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

export default function Navbar() {
  const pathname = usePathname();
  const normalizedPathname = pathname ? (pathname.endsWith('/') ? pathname : `${pathname}/`) : '/';
  const isResumeRoute = normalizedPathname.startsWith('/resume/');
  const isProjectsRoute = normalizedPathname.startsWith('/projects/');
  const isBlogRoute = normalizedPathname.startsWith('/blogs/');
  const navItemClassName =
    'm-0 rounded-none p-0 text-base leading-[1.3] text-[#55544f] hover:text-[#11110f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#11110f] md:text-md';
  const activeClassName = 'font-semibold text-[#11110f]';

  return (
    <header className="sticky top-0 z-20 mx-auto flex w-full max-w-[922px] justify-end bg-white/95 px-[22px] py-[22px] backdrop-blur-xl md:px-12 md:py-[30px]">
      <nav aria-label="Portfolio pages">
        <div className="flex items-baseline gap-[22px] md:gap-7">
          <Link
            href="/"
            className={cn(navItemClassName, pathname === '/' && activeClassName)}
            aria-current={pathname === '/' ? 'page' : undefined}
          >
            <span aria-hidden>/</span>
            <span className="sr-only">Home</span>
          </Link>
          <Link
            href="/projects/"
            className={cn(navItemClassName, isProjectsRoute && activeClassName)}
            aria-current={isProjectsRoute ? 'page' : undefined}
          >
            projects
          </Link>
          <Link
            href="/blogs/"
            className={cn(navItemClassName, isBlogRoute && activeClassName)}
            aria-current={isBlogRoute ? 'page' : undefined}
          >
            writing
          </Link>
          <Link
            href="/resume/"
            className={cn(navItemClassName, isResumeRoute && activeClassName)}
            aria-current={isResumeRoute ? 'page' : undefined}
          >
            resume
          </Link>
        </div>
      </nav>
    </header>
  );
}
