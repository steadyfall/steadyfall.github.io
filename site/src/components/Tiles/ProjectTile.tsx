import { ArrowUpRight } from 'lucide-react'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { Badge } from '@/components/ui/Badge'

export type ProjectTileProps = {
  title: string
  description: string
  repo: boolean,
  repoUrl?: string,
  live: boolean,
  liveUrl?: string,
  techStack: string[]
}

export function ProjectTile({ title, description, repo, repoUrl, live, liveUrl, techStack }: ProjectTileProps) {
  const isDesktop = useMediaQuery('(min-width: 768px)')
  return (
    <div className="items-center">
      <div className="flex flex-col md:items-start justify-between sm:flex-row mb-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        <div className="space-x-2 justify-end">
          {repo && (
            <a
            href={repoUrl} target="_blank"
            rel="noopener noreferrer" aria-label={`Repository link for ${title}`}
            className="text-pink-500 inline-flex items-center hover:underline hover:underline-offset-2"
            >
              repo <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5"/>
            </a>
          )}
          {live && (
            <a
            href={liveUrl} target="_blank"
            rel="noopener noreferrer" aria-label={`Live link for ${title}`}
            className="text-midnight-blue-500 inline-flex items-center hover:underline hover:underline-offset-2"
            >
              link <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5"/>
            </a>
          )}
        </div>
      </div>
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
      {techStack && techStack.length > 0 && (
          <div className="mt-1 flex flex-wrap gap-1">
              {techStack.map((skillText, index) => (
                  <Badge key={index} variant={`secondary`}>{skillText}</Badge>
              ))}
          </div>
      )}
    </div>
  )
}