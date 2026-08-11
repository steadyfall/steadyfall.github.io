import { ExperienceTile, ExperienceTileProps } from './Tiles/ExperienceTile';

interface ExperiencesProps {
  arr: ExperienceTileProps[];
}

export function Experiences({ arr }: ExperiencesProps) {
  return (
    <section
      id="experience"
      className="mt-6 flex flex-col gap-[18px] md:mt-10 md:gap-6"
      aria-labelledby="experience-title"
    >
      <h2
        id="experience-title"
        className="m-0 font-sans text-[22.5px] font-semibold leading-tight text-[#11110f]"
      >
        Experience
      </h2>
      <div className="flex w-full flex-col gap-6">
        {arr.map((experience) => (
          <ExperienceTile
            key={`${experience.companyName}-${experience.position}`}
            {...experience}
          />
        ))}
      </div>
    </section>
  );
}
