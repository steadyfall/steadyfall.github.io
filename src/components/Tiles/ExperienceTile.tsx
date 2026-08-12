import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

import CompanyBadge from '@/components/ui/CompanyBadge';
import LinkWithArrow from '@/components/ui/LinkWithArrow';

export type ExperienceTileProps = {
  companyLogo: string;
  companyName: string;
  companyLink: string;
  companyLocation?: string;
  position: string;
  period: string;
  responsibilities?: string[];
};

export function ExperienceTile({
  companyLogo,
  companyName,
  companyLink,
  companyLocation,
  position,
  period,
  responsibilities = [],
}: ExperienceTileProps) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap items-center gap-x-1.5 text-lg font-normal leading-[1.45] text-black">
        <span>{position}</span>
        <span className="text-[#33322f]">at</span>
        <Link
          href={companyLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center text-black underline decoration-[#888680] underline-offset-[3px] transition-colors hover:decoration-black"
        >
          <CompanyBadge logo={companyLogo} name={companyName} className="font-normal text-black" />
        </Link>
      </div>
      <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-[#66645f] md:text-base">
        <span>{period.replaceAll(' - ', ' – ')}</span>
        {companyLocation && (
          <>
            <span aria-hidden className="select-none text-[#888680]">
              •
            </span>
            <span>{companyLocation}</span>
          </>
        )}
      </div>
      {responsibilities.length > 0 && (
        <div className="mt-2.5 text-md leading-[1.6] text-[#55544f]">
          {responsibilities.map((responsibility, index) => (
            <ReactMarkdown
              key={index}
              components={{
                a: ({ href = '', children, ...props }) => (
                  <LinkWithArrow
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center text-[#11110f] hover:text-[#55544f] [&_svg]:ml-0.5 [&_svg]:size-[0.85em] [&_svg]:stroke-[1.7]"
                    {...props}
                  >
                    {children}
                  </LinkWithArrow>
                ),
                ul: ({ ...props }) => (
                  <ul className="ml-3 font-normal leading-[1.6] text-[#55544f]" {...props} />
                ),
                ol: ({ ...props }) => (
                  <ol
                    className="my-2 space-y-1.5 font-normal leading-[1.6] text-[#55544f]"
                    {...props}
                  />
                ),
                li: ({ children, ...props }) => (
                  <li
                    className="flex items-start gap-2.5 font-normal leading-[1.6] text-[#55544f]"
                    {...props}
                  >
                    <span className="flex-none select-none text-[#66645f]">–</span>
                    <span className="flex-1">{children}</span>
                  </li>
                ),
              }}
            >
              {responsibility}
            </ReactMarkdown>
          ))}
        </div>
      )}
    </div>
  );
}
