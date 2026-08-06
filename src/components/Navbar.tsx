'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

export default function Navbar() {
  const pathname = usePathname();
  const navItemClassName =
    'm-0 rounded-none p-0 text-sm leading-[1.3] text-[#55544f] hover:text-[#11110f] hover:underline hover:underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#11110f]';
  const activeClassName = 'font-semibold text-[#11110f] underline underline-offset-4';

  return (
    <header className="sticky top-0 z-20 mx-auto flex max-w-[1100px] justify-end bg-white/95 px-[22px] py-[18px] backdrop-blur-xl md:px-12 md:py-5">
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
            href="/projects"
            className={cn(navItemClassName, pathname === '/projects' && activeClassName)}
            aria-current={pathname === '/projects' ? 'page' : undefined}
          >
            Projects
          </Link>
        </div>
      </nav>
    </header>
  );
}
