import { RecordTile } from '@/components/Tiles/RecordTile';

export type ExperienceTileProps = {
  companyLogo: string;
  companyName: string;
  companyLink: string;
  position: string;
  period: string;
  responsibilities?: string[];
};

export function ExperienceTile({
  companyLogo,
  companyName,
  companyLink,
  position,
  period,
  responsibilities,
}: ExperienceTileProps) {
  const responsibilitiesAsHTML = responsibilities && responsibilities.length > 0 && (
    <div className="mt-2">
      <ul className="-pb-1 list-inside list-none space-y-1 text-chinese-black-900 dark:text-selago-200">
        {responsibilities.map((responsibility, index) => (
          <li key={index} className="py-1">
            {responsibility}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <RecordTile
      organizationLogo={companyLogo}
      organizationName={companyName}
      organizationLink={companyLink}
      role={position}
      duration={period}
      body={responsibilitiesAsHTML}
      organizationBeforeRole={true}
    />
  );
}
