import ReactMarkdown from 'react-markdown';

import LinkWithArrow from '@/components/ui/LinkWithArrow';

export type EducationTileProps = {
  institution: string;
  degree: string;
  major: string;
  start: string;
  end: string;
  description?: string;
};

export function EducationTile({
  institution,
  degree,
  major,
  start,
  end,
  description,
}: EducationTileProps) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 text-lg font-normal leading-[1.45] text-black">
        <span>{institution}</span>
        <span className="text-sm text-[#66645f] md:text-base">
          {start} – {end}
        </span>
      </div>
      <p className="mt-1 text-sm leading-[1.6] text-[#66645f] md:text-base">
        {degree}, {major}
      </p>
      {description && (
        <div className="mt-2.5 text-md leading-[1.6] text-[#55544f]">
          <ReactMarkdown
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
              p: ({ children }) => <p className="m-0">{children}</p>,
            }}
          >
            {description}
          </ReactMarkdown>
        </div>
      )}
    </div>
  );
}
