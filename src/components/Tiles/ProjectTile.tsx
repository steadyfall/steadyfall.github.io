import { PreviewLinkWithArrow } from '@/components/ui/PreviewLinkWithArrow';

export type ProjectTileProps = {
  title: string;
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
  description,
  repo,
  repoUrl,
  liveUrl,
  techStack,
  variant = 'full',
}: ProjectTileProps) {
  const destination = liveUrl ?? repoUrl;
  const titleNode = destination ? (
    <PreviewLinkWithArrow
      href={destination}
      target="_blank"
      rel="noreferrer"
      previewTitle={title}
      previewDescription={description}
      previewMeta={techStack.join(' · ')}
      className="font-semibold text-[#11110f] no-underline hover:text-[#55544f]"
    >
      {title.toLowerCase()}
    </PreviewLinkWithArrow>
  ) : (
    title.toLowerCase()
  );

  if (variant === 'selected') {
    return (
      <div className="text-[15px] leading-6 text-[#55544f]">
        {titleNode}
        <span> · {description}</span>
      </div>
    );
  }

  return (
    <article className="grid grid-cols-1 items-baseline gap-3 min-[431px]:grid-cols-[minmax(0,1fr)_auto] min-[431px]:gap-6">
      <div>
        <h3 className="m-0 inline text-[15px] font-semibold">{titleNode}</h3>
        <p className="m-0 ml-1.5 inline text-[15px] leading-[1.55] text-[#55544f] before:content-['·__']">
          {description}
        </p>
        <div className="mt-2 font-mono text-xs text-[#88857e]">{techStack.join(' · ')}</div>
      </div>
      {repo && repoUrl ? (
        <PreviewLinkWithArrow
          href={repoUrl}
          target="_blank"
          rel="noreferrer"
          previewTitle={`${title} source`}
          previewDescription={description}
          previewMeta={techStack.join(' · ')}
          className="w-max whitespace-nowrap text-[13px] text-[#66645f] underline underline-offset-[3px] hover:text-[#11110f]"
        >
          code
        </PreviewLinkWithArrow>
      ) : null}
    </article>
  );
}
