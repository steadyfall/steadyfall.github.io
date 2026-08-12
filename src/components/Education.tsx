import { EducationTile, type EducationTileProps } from './Tiles/EducationTile';

interface EducationProps {
  arr: EducationTileProps[];
}

export function Education({ arr }: EducationProps) {
  return (
    <section
      id="education"
      className="mt-[52px] flex flex-col gap-[18px] md:mt-16 md:gap-6"
      aria-labelledby="education-title"
    >
      <h2
        id="education-title"
        className="m-0 font-sans text-[22.5px] font-semibold leading-tight text-[#11110f]"
      >
        Education
      </h2>
      <div className="flex w-full flex-col gap-6">
        {arr.map((education) => (
          <EducationTile
            key={`${education.institution}-${education.degree}-${education.major}`}
            {...education}
          />
        ))}
      </div>
    </section>
  );
}
