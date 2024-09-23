import { useState, useEffect } from 'react'
import { ProjectTile, ProjectTileProps } from './projectTile'

interface ProjectProps {
    arr: ProjectTileProps[];
}

export function Projects({ arr }: ProjectProps) {
    const [projects, setProjects] = useState(arr)
    return (
        <section id="projects" className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Projects</h2>
            {projects && projects.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <ProjectTile key={index} {...project} />
                    ))}
                </div>
            ) : (
                <p>No projects to display.</p>
            )}
        </section>
    )
}