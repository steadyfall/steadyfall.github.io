import { Icon } from '@iconify/react';

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
    <div className="mt-3">
      <ul className="list-inside list-none space-y-1 text-gray-700 dark:text-gray-300">
        {responsibilities.map((responsibility, index) => (
          <li key={index}>
            <span className="mr-1 inline-block align-middle">
              {<Icon icon={'icons8:angle-right'} inline={true} />}
            </span>
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
