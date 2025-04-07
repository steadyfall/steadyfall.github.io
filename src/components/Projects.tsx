import { useState } from 'react';

import BlurFade, { BLUR_FADE_DELAY } from '@/components/ui/BlurFade';
import { cn } from '@/lib/utils';

import { ProjectTile, ProjectTileProps } from './Tiles/ProjectTile';

interface ProjectProps {
  arr: ProjectTileProps[];
}

export function Projects({ arr }: ProjectProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [projects, setProjects] = useState(arr);
  return (
    <section id="projects" className="mb-12">
      <BlurFade delay={BLUR_FADE_DELAY * 11}>
        <h2
          className={cn(
            'mb-4 font-section text-2xl md:text-3xl lg:text-4xl',
            'inline-block bg-gradient-to-r from-[#434343] to-[#000000] bg-clip-text text-transparent dark:from-gray-300 dark:to-gray-100',
          )}
        >
          Projects
        </h2>
      </BlurFade>
      {projects && projects.length > 0 ? (
        <div className="space-y-5">
          {projects.map((project, index) => {
            project.delayTime = BLUR_FADE_DELAY * 12 + index * 0.2;
            return (
              <BlurFade key={index} delay={BLUR_FADE_DELAY * 12 + index * 0.2}>
                <ProjectTile key={index} {...project} />
              </BlurFade>
            );
          })}
        </div>
      ) : (
        <p>No projects to display.</p>
      )}
    </section>
  );
}
