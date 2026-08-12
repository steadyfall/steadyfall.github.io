import Image from 'next/image';
import React from 'react';

import { cn } from '@/lib/utils';

export interface CompanyBadgeProps {
  logo: string;
  name: string;
  subtitle?: string;
  className?: string;
}

export default function CompanyBadge({ logo, name, subtitle, className }: CompanyBadgeProps) {
  return (
    <span className={cn('font-normal text-[#11110f]', className)}>
      <Image
        src={logo}
        alt=""
        width={20}
        height={20}
        unoptimized
        className="rounded-xs mr-1.5 inline-block size-4 -translate-y-[1px] object-contain align-middle md:size-5"
      />
      {name}
      {subtitle ? <span className="font-normal text-[#66645f]"> ({subtitle})</span> : null}
    </span>
  );
}
