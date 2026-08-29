'use client';

import { PreviewCard } from '@base-ui/react/preview-card';
import { ArrowUpRight } from 'lucide-react';

import { cn } from '@/lib/utils';

export type PreviewLinkWithArrowProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  previewTitle: React.ReactNode;
  previewDescription?: React.ReactNode;
  previewMeta?: string;
};

export function PreviewLinkWithArrow({
  className,
  children,
  previewTitle,
  previewDescription,
  previewMeta,
  ...props
}: PreviewLinkWithArrowProps) {
  return (
    <PreviewCard.Root>
      <PreviewCard.Trigger
        className={cn(
          'group inline-flex items-center rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current',
          className,
        )}
        {...props}
      >
        {children}
        <ArrowUpRight
          className="h-4 w-4 flex-shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 md:h-5 md:w-5"
          aria-hidden
        />
      </PreviewCard.Trigger>
      <PreviewCard.Portal>
        <PreviewCard.Positioner sideOffset={8} className="z-50 max-w-[var(--available-width)]">
          <PreviewCard.Popup className="w-fit max-w-[min(320px,var(--available-width))] origin-[var(--transform-origin)] border border-[#d8d6cf] bg-white p-3.5 text-[#11110f] shadow-[0_12px_32px_rgba(17,17,15,0.14)] transition-[transform,opacity] duration-150 ease-out data-[ending-style]:scale-[0.98] data-[starting-style]:scale-[0.98] data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 motion-reduce:transition-none">
            <p className="m-0 text-sm font-semibold leading-5">{previewTitle}</p>
            {previewDescription ? (
              <p className="m-0 mt-1 text-sm leading-5 text-[#55544f]">{previewDescription}</p>
            ) : null}
            {previewMeta ? (
              <p className="m-0 mt-2 font-mono text-[11px] leading-4 text-[#77756e]">
                {previewMeta}
              </p>
            ) : null}
          </PreviewCard.Popup>
        </PreviewCard.Positioner>
      </PreviewCard.Portal>
    </PreviewCard.Root>
  );
}
