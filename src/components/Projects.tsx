import BlurFade, { BLUR_FADE_DELAY } from '@/components/ui/BlurFade';

import { ProjectTile, ProjectTileProps } from './Tiles/ProjectTile';

interface ProjectProps {
  arr: ProjectTileProps[];
}

export function Projects({ arr }: ProjectProps) {
  return (
    <section id="projects" className="mb-12">
      <BlurFade delay={BLUR_FADE_DELAY * 11}>
        <h2 className="mb-4 font-section text-2xl text-chinese-black-950 dark:text-selago-100 md:text-3xl lg:text-4xl">
          Projects
        </h2>
      </BlurFade>
      {arr && arr.length > 0 ? (
        <div className="space-y-5">
          {arr.map((project, index) => (
            <BlurFade key={index} delay={BLUR_FADE_DELAY * 12 + index * 0.2}>
              <ProjectTile {...project} delayTime={BLUR_FADE_DELAY * 12 + index * 0.2} />
            </BlurFade>
          ))}
        </div>
      ) : (
        <p>No projects to display.</p>
      )}
    </section>
  );
}
