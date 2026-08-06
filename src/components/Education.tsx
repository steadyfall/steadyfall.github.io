import { EducationTile } from '@/components/Tiles/EducationTile';

export function Education() {
  return (
    <section
      id="education"
      className="mt-[52px] grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-[200px_minmax(0,1fr)] md:gap-0"
      aria-labelledby="education-title"
    >
      <h2
        id="education-title"
        className="m-0 font-display text-[21px] font-normal italic leading-tight"
      >
        Education
      </h2>
      <EducationTile
        institutionName="University of Waterloo"
        institutionLink="https://uwaterloo.ca/"
        degree="Bachelor of Mathematics"
        major="Computational Mathematics Major"
        duration="September 2022 – May 2027"
      />
    </section>
  );
}
