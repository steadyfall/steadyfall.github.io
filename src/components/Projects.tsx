import { ProjectTile, ProjectTileProps } from './Tiles/ProjectTile';
import LinkWithArrow from './ui/LinkWithArrow';

interface ProjectsProps {
  arr: ProjectTileProps[];
  variant?: 'selected' | 'all';
}

export function Projects({ arr, variant = 'selected' }: ProjectsProps) {
  if (variant === 'all') {
    return (
      <>
        <section className="mt-6">
          <h1 className="m-0 font-display text-5xl font-normal italic leading-[1.05] tracking-[-0.01em] md:text-[54px]">
            Projects
          </h1>
          <p className="mt-[18px] text-pretty text-base leading-[1.6] text-[#55544f]">
            Things I built to learn something, solve a problem, or make a useful idea tangible.
          </p>
        </section>
        <section
          id="projects"
          className="mt-[52px] grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-[200px_minmax(0,1fr)] md:gap-0"
          aria-label="All projects"
        >
          <h2 className="m-0 font-display text-[21px] font-normal italic leading-tight">
            All projects
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
      className="mt-[52px] flex flex-col gap-[18px] md:mt-16 md:gap-6"
      aria-labelledby="selected-projects-title"
    >
      <div className="flex items-baseline justify-between gap-5">
        <h2
          id="selected-projects-title"
          className="m-0 font-sans text-[22.5px] font-semibold leading-tight text-[#11110f]"
        >
          Selected projects
        </h2>
        <LinkWithArrow
          href="/projects"
          className="m-0 flex-none text-md text-[#66645f] hover:text-[#11110f] [&_svg]:ml-0.5 [&_svg]:size-[0.9em] [&_svg]:stroke-[1.7]"
        >
          All projects
        </LinkWithArrow>
      </div>
      <div className="flex flex-col gap-4">
        {arr.map((project) => (
          <ProjectTile key={project.title} {...project} variant="selected" />
        ))}
      </div>
    </section>
  );
}
