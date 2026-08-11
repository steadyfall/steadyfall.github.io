import ReactMarkdown from 'react-markdown';

export type ExperienceTileProps = {
  companyLogo: string;
  companyName: string;
  companyLink: string;
  position: string;
  period: string;
  responsibilities?: string[];
};

export function ExperienceTile({
  companyName,
  companyLink,
  position,
  period,
  responsibilities = [],
}: ExperienceTileProps) {
  return (
    <div className="flex flex-col">
      <div className="text-lg font-normal leading-[1.45] text-black">
        <span className="text-black">{position}</span> <span className="text-[#33322f]">at</span>{' '}
        <a
          href={companyLink}
          target="_blank"
          rel="noreferrer"
          className="text-black underline decoration-[#888680] underline-offset-[3px] transition-colors hover:decoration-black"
        >
          {companyName}
        </a>
      </div>
      <div className="mt-1 text-sm text-[#66645f] md:text-base">
        {period.replaceAll(' - ', ' – ')}
      </div>
      {responsibilities.length > 0 && (
        <div className="mt-2.5 text-md leading-[1.6] text-[#55544f]">
          {responsibilities.map((responsibility, index) => (
            <ReactMarkdown
              key={index}
              components={{
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
