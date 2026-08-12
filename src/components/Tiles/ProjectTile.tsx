import Link from 'next/link';

import LinkWithArrow from '@/components/ui/LinkWithArrow';

export type ProjectTileProps = {
  title: string;
  selected_work: boolean;
  tldr: string;
  description: string;
  repo: boolean;
  repoUrl?: string;
  live: boolean;
  liveUrl?: string;
  techStack: string[];
  variant?: 'selected' | 'full';
};

export function ProjectTile({
  title,
  tldr,
  description,
  repo,
  repoUrl,
  liveUrl,
  techStack,
  variant = 'full',
}: ProjectTileProps) {
  const destination = liveUrl ?? repoUrl;
  const titleNode = destination ? (
    <LinkWithArrow
      href={destination}
      target="_blank"
      rel="noreferrer"
      className="font-normal text-[#11110f] underline decoration-[#888680] underline-offset-[3px] hover:text-[#55544f] hover:decoration-[#11110f]"
    >
      {title}
    </LinkWithArrow>
  ) : (
    title
  );

  if (variant === 'selected') {
    return (
      <div className="flex flex-col">
        <div className="flex flex-wrap items-center text-lg font-normal leading-[1.45] text-black">
          {destination ? (
            <Link
              href={destination}
              target="_blank"
              rel="noreferrer"
              className="text-black underline decoration-[#888680] underline-offset-[3px] transition-colors hover:decoration-black"
            >
              {title}
            </Link>
          ) : (
            <span>{title}</span>
          )}
        </div>
        <div className="mt-1 flex flex-wrap text-sm text-[#66645f] md:text-base">
          {techStack.map((tech, index) => (
            <span key={tech}>
              {index > 0 ? (
                <span aria-hidden className="mx-2 text-[#888680]">
                  ·
                </span>
              ) : null}
              {tech}
            </span>
          ))}
        </div>
        <p className="mt-2.5 text-md leading-[1.6] text-[#55544f]">{tldr}</p>
      </div>
    );
  }

  return (
    <article className="flex max-w-[70ch] flex-col">
      <div className="flex items-baseline justify-between gap-6">
        <h3 className="m-0 text-lg font-normal leading-[1.45] text-black">{titleNode}</h3>
        {repo && repoUrl ? (
          <LinkWithArrow
            href={repoUrl}
            target="_blank"
            rel="noreferrer"
            className="flex-none whitespace-nowrap text-sm text-[#66645f] underline underline-offset-[3px] hover:text-[#11110f] md:text-base [&_svg]:ml-0.5 [&_svg]:size-[0.85em] [&_svg]:stroke-[1.7]"
          >
            code
          </LinkWithArrow>
        ) : null}
      </div>
      <p className="mt-2.5 text-md leading-[1.6] text-[#55544f]">{description}</p>
      <div className="mt-1 flex flex-wrap text-sm text-[#66645f] md:text-base">
        {techStack.map((tech, index) => (
          <span key={tech}>
            {index > 0 ? (
              <span aria-hidden className="mx-2 text-[#888680]">
                ·
              </span>
            ) : null}
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}
