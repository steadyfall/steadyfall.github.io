import { useState, useEffect } from 'react'
import { ProjectTile, ProjectTileProps } from './Tiles/ProjectTile'
import BlurFade, { BLUR_FADE_DELAY } from '@/components/ui/BlurFade';
import { cn } from '@/lib/utils';

interface ProjectProps {
    arr: ProjectTileProps[];
}

export function Projects({ arr }: ProjectProps) {
    const [projects, setProjects] = useState(arr)
    return (
        <section id="projects" className="mb-12">
            <BlurFade delay={BLUR_FADE_DELAY * 11}>
                <h2 className={cn(
                    "text-2xl md:text-3xl lg:text-4xl font-section mb-4",
                    "inline-block text-transparent bg-clip-text bg-gradient-to-r dark:from-gray-300 dark:to-gray-100 from-[#434343] to-[#000000]"
                )}>Projects</h2>
            </BlurFade>
            {projects && projects.length > 0 ? (
                <div className="space-y-5">
                    {projects.map((project, index) => (
                        <BlurFade
                        key={index}
                        delay={BLUR_FADE_DELAY * 12 + index * 0.05}
                        >
                            <ProjectTile key={index} {...project} />
                        </BlurFade>
                    ))}
                </div>
            ) : (
                <p>No projects to display.</p>
            )}
        </section>
    )
}