import { Icon } from '@iconify/react';
import { techIcons } from '@/lib/techIcons';
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { Badge } from '@/components/ui/Badge'
import BlurFade, { BLUR_FADE_DELAY } from '@/components/ui/BlurFade';
import LinkWithArrow from "@/components/ui/LinkWithArrow";

type ProjectTileDetailProps = {
  title: string
  description: string
  repo: boolean,
  repoUrl?: string,
  live: boolean,
  liveUrl?: string,
  techStack: string[]
}

export type ProjectTileProps = ProjectTileDetailProps & {
  delayTime?: number;
};

export function ProjectTile({ delayTime, title, description, repo, repoUrl, live, liveUrl, techStack }: ProjectTileProps) {
  const isDesktop = useMediaQuery('(min-width: 768px)')
  return (
    <div className="items-center">
      <div className="flex flex-col md:items-start justify-between sm:flex-row mb-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        <div className="space-x-2 justify-end">
          {repo && (
            <LinkWithArrow
              href={repoUrl} target="_blank"
              rel="noopener noreferrer" aria-label={`Repository link for ${title}`}
              className="hover:underline hover:underline-offset-2 text-pink-500"
            >
              repo
            </LinkWithArrow>
          )}
          {live && (
            <LinkWithArrow
              href={liveUrl} target="_blank"
              rel="noopener noreferrer" aria-label={`Live link for ${title}`}
              className="hover:underline hover:underline-offset-2 text-midnight-blue-500"
            >
              link
            </LinkWithArrow>
          )}
        </div>
      </div>
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
      {techStack && techStack.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1">
              {techStack.map((skillText, index) => (
                  delayTime ? (
                  <BlurFade
                  key={index}
                  delay={delayTime + index * 0.05}
                  >
                    <Badge key={index} variant={`secondary`}>
                      {
                        techIcons?.[skillText] &&
                        <span className="mr-2">{
                            <Icon icon={techIcons[skillText]} inline={true} width={18} height={18}/>
                        }</span>
                      }
                      <span>{skillText}</span>
                    </Badge>
                  </BlurFade>
                  ) : (
                    <Badge key={index} variant={`secondary`}>
                      {
                        techIcons?.[skillText] &&
                        <span className="mr-2">{
                            <Icon icon={techIcons[skillText]} inline={true} width={18} height={18}/>
                        }</span>
                      }
                      <span>{skillText}</span>
                    </Badge>
                  )
              ))}
          </div>
      )}
    </div>
  )
}