import { Github } from 'lucide-react'

export type ProjectTileProps = {
  title: string
  description: string
  repo: boolean,
  repoUrl: string
}

export function ProjectTile({ title, description, repo, repoUrl }: ProjectTileProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        {repo && (
          <a href={repoUrl} target="_blank" rel="noopener noreferrer" aria-label={`GitHub repository for ${title}`}>
            <Github className="w-6 h-6" />
          </a>
        )}
      </div>
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
    </div>
  )
}