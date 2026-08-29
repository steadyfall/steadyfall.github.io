'use client';

import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import { cn } from '@/lib/utils';

type LinkWithArrowProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  href: string;
};

export default function LinkWithArrow({ className, href, children, ...props }: LinkWithArrowProps) {
  return (
    <Link
      className={cn(
        'group inline-flex items-center rounded no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current',
        className,
      )}
      href={href}
      {...props}
    >
      {children}
      <ArrowUpRight
        aria-hidden
        className={cn(
          'h-4 w-4 md:h-5 md:w-5',
          'transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1',
          'flex-shrink-0',
        )}
      />
    </Link>
  );
}
