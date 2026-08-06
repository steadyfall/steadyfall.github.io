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
      className="font-semibold text-[#11110f] no-underline hover:text-[#55544f]"
    >
      {title.toLowerCase()}
    </LinkWithArrow>
  ) : (
    title.toLowerCase()
  );

  if (variant === 'selected') {
    return (
      <div className="text-[15px] leading-6 text-[#55544f]">
        {titleNode} <span className="ml-1.5">{tldr}</span>
      </div>
    );
  }

  return (
    <article className="grid grid-cols-1 items-baseline gap-3 min-[431px]:grid-cols-[minmax(0,1fr)_auto] min-[431px]:gap-6">
      <div>
        <h3 className="m-0 inline text-[15px] font-semibold">{titleNode}</h3>{' '}
        <p className="m-0 ml-1.5 inline text-[15px] leading-[1.55] text-[#55544f]">{description}</p>
        <div className="mt-2 font-mono text-xs text-[#88857e]">{techStack.join(' / ')}</div>
      </div>
      {repo && repoUrl ? (
        <LinkWithArrow
          href={repoUrl}
          target="_blank"
          rel="noreferrer"
          className="w-max whitespace-nowrap text-[13px] text-[#66645f] underline underline-offset-[3px] hover:text-[#11110f]"
        >
          code
        </LinkWithArrow>
      ) : null}
    </article>
  );
}
