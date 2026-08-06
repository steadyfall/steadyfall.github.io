import { Accordion } from '@base-ui/react/accordion';

import { ExperienceTile, ExperienceTileProps } from './Tiles/ExperienceTile';

interface ExperiencesProps {
  arr: ExperienceTileProps[];
}

export function Experiences({ arr }: ExperiencesProps) {
  return (
    <section
      id="experience"
      className="mt-[52px] grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-[200px_minmax(0,1fr)] md:gap-0 [&:first-of-type]:mt-[62px] md:[&:first-of-type]:mt-[72px]"
      aria-labelledby="experience-title"
    >
      <h2
        id="experience-title"
        className="m-0 font-display text-[21px] font-normal italic leading-tight"
      >
        Experience
      </h2>
      <Accordion.Root multiple className="flex w-full flex-col">
        {arr.map((experience) => (
          <ExperienceTile
            key={`${experience.companyName}-${experience.position}`}
            {...experience}
          />
        ))}
      </Accordion.Root>
    </section>
  );
}
