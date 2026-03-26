'use client';

import { ArrowUpRight } from 'lucide-react';

import { cn } from '@/lib/utils';

export default function LinkWithArrow({
  className,
  href,
  children,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      className={cn(
        'group inline-flex items-center rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current',
        className,
      )}
      href={href}
      {...props}
    >
      {children}
      <ArrowUpRight
        className={cn(
          'h-4 w-4 md:h-5 md:w-5',
          'transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1',
          'flex-shrink-0',
        )}
      />
    </a>
  );
}
