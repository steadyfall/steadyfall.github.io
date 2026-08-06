import { RecordTile } from '@/components/Tiles/RecordTile';

export type EducationTileProps = {
  institutionName: string;
  institutionLink: string;
  degree: string;
  major: string;
  duration: string;
};

export function EducationTile({
  institutionName,
  institutionLink,
  degree,
  major,
  duration,
}: EducationTileProps) {
  return (
    <RecordTile
      organizationName={institutionName}
      organizationLink={institutionLink}
      role={degree}
      duration={duration}
      previewDescription={major}
      body={<p className="mt-[7px] text-sm leading-6 text-[#55544f]">{major}</p>}
    />
  );
}
