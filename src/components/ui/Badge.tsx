import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors',
  {
    variants: {
      variant: {
        default:
          'border-transparent shadow bg-[#ff9871] text-chinese-black-900 hover:bg-portland-orange hover:shadow-none dark:bg-[#2b40f5] dark:text-selago-200 dark:hover:bg-dark-blue',
        secondary:
          'border-transparent shadow bg-chinese-black-950 text-gray-200 hover:text-chinese-black-950 hover:bg-portland-orange hover:shadow-none dark:bg-selago-200 dark:text-gray-800 dark:hover:text-selago-200 dark:hover:bg-dark-blue',
        outline: 'text-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
