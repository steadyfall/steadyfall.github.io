import { RecordTile } from '@/components/Tiles/RecordTile';

export type EducationTileProps = {
  institutionLogo: string;
  institutionName: string;
  institutionLink: string;
  degree: string;
  major: string;
  duration: string;
  details?: React.ReactNode;
};

export function EducationTile({
  institutionLogo,
  institutionName,
  institutionLink,
  degree,
  major,
  duration,
  details,
}: EducationTileProps) {
  const combinedDegreeNameAndMajor = degree.concat(', ').concat(major);
  return (
    <RecordTile
      organizationLogo={institutionLogo}
      organizationName={institutionName}
      organizationLink={institutionLink}
      role={combinedDegreeNameAndMajor}
      duration={duration}
      body={details}
      organizationBeforeRole={true}
    />
  );
}
