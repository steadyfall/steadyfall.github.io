import { Icon } from '@iconify/react';

import { Badge } from '@/components/ui/Badge';
import BlurFade from '@/components/ui/BlurFade';
import LinkWithArrow from '@/components/ui/LinkWithArrow';
import { techIcons } from '@/lib/techIcons';

type ProjectTileDetailProps = {
  title: string;
  description: string;
  repo: boolean;
  repoUrl?: string;
  live: boolean;
  liveUrl?: string;
  techStack: string[];
};

export type ProjectTileProps = ProjectTileDetailProps & {
  delayTime?: number;
};

export function ProjectTile({
  delayTime,
  title,
  description,
  repo,
  repoUrl,
  live,
  liveUrl,
  techStack,
}: ProjectTileProps) {
  return (
    <div className="items-center">
      <div className="mb-2 flex flex-col justify-between sm:flex-row md:items-start">
        <h3 className="text-xl font-semibold">{title}</h3>
        <div className="justify-end space-x-2">
          {repo && (
            <LinkWithArrow
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Repository link for ${title}`}
              className="text-white hover:underline hover:underline-offset-2 dark:text-pink-500"
            >
              repo
            </LinkWithArrow>
          )}
          {live && (
            <LinkWithArrow
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Live link for ${title}`}
              className="text-white hover:underline hover:underline-offset-2 dark:text-firefly-300"
            >
              link
            </LinkWithArrow>
          )}
        </div>
      </div>
      <p className="text-chinese-black-900 dark:text-selago-200">{description}</p>
      {techStack && techStack.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1">
          {techStack.map((skillText, index) =>
            delayTime ? (
              <BlurFade key={index} delay={delayTime + index * 0.05}>
                <Badge key={index} variant={'secondary'}>
                  {techIcons?.[skillText] && (
                    <span className="mr-2">
                      {<Icon icon={techIcons[skillText]} inline={true} width={18} height={18} />}
                    </span>
                  )}
                  <span>{skillText}</span>
                </Badge>
              </BlurFade>
            ) : (
              <Badge key={index} variant={'secondary'}>
                {techIcons?.[skillText] && (
                  <span className="mr-2">
                    {<Icon icon={techIcons[skillText]} inline={true} width={18} height={18} />}
                  </span>
                )}
                <span>{skillText}</span>
              </Badge>
            ),
          )}
        </div>
      )}
    </div>
  );
}
