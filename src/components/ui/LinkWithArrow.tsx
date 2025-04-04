'use client';

import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';


export default function LinkWithArrow({ className, href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      className={
        cn('group inline-flex items-center', className)
      }
      href={href}
      {...props}
    >
      {children}
      <ArrowUpRight className={cn(
        'w-4 h-4 md:w-5 md:h-5',
        'transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1',
        'flex-shrink-0'
      )}/>
    </a>
  );
}