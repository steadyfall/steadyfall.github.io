import { Button } from '@base-ui/react/button';
import { ArrowUpRight } from 'lucide-react';

import { ProjectTile, ProjectTileProps } from './Tiles/ProjectTile';

interface ProjectsProps {
  arr: ProjectTileProps[];
  variant?: 'selected' | 'all';
  showProjects?: () => void;
}

export function Projects({ arr, variant = 'selected', showProjects }: ProjectsProps) {
  if (variant === 'all') {
    return (
      <>
        <section className="mt-6">
          <h1 className="m-0 font-display text-5xl font-normal italic leading-[1.05] tracking-[-0.01em] md:text-[54px]">
            Projects
          </h1>
          <p className="mt-[18px] max-w-[560px] text-pretty text-base leading-[1.6] text-[#55544f]">
            Things I built to learn something, solve a problem, or make a useful idea tangible.
          </p>
        </section>
        <section
          id="projects"
          className="mt-[52px] grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-[200px_minmax(0,1fr)] md:gap-0"
          aria-label="All projects"
        >
          <h2 className="m-0 font-display text-[21px] font-normal italic leading-tight">
            Selected work
          </h2>
          <div className="flex flex-col gap-7">
            {arr.map((project) => (
              <ProjectTile key={project.title} {...project} variant="full" />
            ))}
          </div>
        </section>
      </>
    );
  }

  return (
    <section
      id="projects"
      className="mt-[52px] grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-[200px_minmax(0,1fr)] md:gap-0"
      aria-labelledby="selected-projects-title"
    >
      <div className="flex items-baseline justify-between gap-5 md:flex-col md:items-start md:justify-start md:gap-0">
        <h2
          id="selected-projects-title"
          className="m-0 font-display text-[21px] font-normal italic leading-tight"
        >
          Selected projects
        </h2>
        <Button
          className="m-0 mt-1 inline-flex flex-none cursor-pointer items-center border-0 bg-transparent p-0 text-xs text-[#66645f] underline underline-offset-[3px] hover:text-[#11110f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#11110f]"
          onClick={showProjects}
        >
          All projects <ArrowUpRight className="ml-0.5 size-[0.9em] stroke-[1.7]" aria-hidden />
        </Button>
      </div>
      <div className="flex flex-col gap-4">
        {arr.map((project) => (
          <ProjectTile key={project.title} {...project} variant="selected" />
        ))}
      </div>
    </section>
  );
}
