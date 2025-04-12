import React from 'react';

import LinkWithArrow from '@/components/ui/LinkWithArrow';
import { useMediaQuery } from '@/hooks/useMediaQuery';
// import Image from 'next/image';

export type RecordTileProps = {
  organizationLogo: string;
  organizationName: string;
  organizationLink: string;
  role: string;
  duration: string;
  details?: React.ReactNode;
  organizationBeforeRole?: boolean;
};

function jobDescriptorSection(
  organization: string,
  link: string,
  role: string,
  duration: string,
  isOrganizationBeforeRole: boolean = false,
  isWidth768pxOrMore: boolean,
) {
  // styling for:
  //    h2 - text-xl font-bold
  //    h3 - text-lg font-semibold

  const organizationNameHeadingTag = isOrganizationBeforeRole ? 'h2' : 'h3';
  const organizationNameHeading = React.createElement(
    LinkWithArrow,
    {
      href: link,
      target: '_blank',
      rel: 'noopener noreferrer',
      'aria-label': `Link to ${organization}`,
    },
    React.createElement(
      organizationNameHeadingTag,
      { className: isOrganizationBeforeRole ? 'text-xl font-bold' : 'text-lg font-semibold' },
      organization,
    ),
  );
  const roleHeadingTag = !isOrganizationBeforeRole ? 'h2' : 'h3';
  const roleHeading = React.createElement(
    roleHeadingTag,
    { className: !isOrganizationBeforeRole ? 'text-xl font-bold' : 'text-lg font-semibold' },
    role,
  );

  return (
    <div className="flex flex-col justify-between sm:flex-row md:items-start">
      <div>
        {isOrganizationBeforeRole ? organizationNameHeading : roleHeading}
        {!isOrganizationBeforeRole ? organizationNameHeading : roleHeading}
        {!isWidth768pxOrMore && (
          <h3 className="font-typewriter text-gray-600 dark:text-gray-400">{duration}</h3>
        )}
      </div>
      {isWidth768pxOrMore && (
        <h3 className="font-typewriter text-gray-600 dark:text-gray-400">{duration}</h3>
      )}
    </div>
  );
}

export function RecordTile({
  organizationLogo,
  organizationName,
  organizationLink,
  role,
  duration,
  details,
  organizationBeforeRole = false,
}: RecordTileProps) {
  const isTablet = useMediaQuery('(min-width: 768px)');
  const isDesktop = useMediaQuery('(min-width: 1280px)');

  //   const topRow = (
  //     <h2 className="text-xl font-bold">{!organizationBeforeRole ? role : organizationName}</h2>
  //   );
  //   const bottomRow = "";
  return (
    <div className="-mb-2 flex items-center">
      <div className="group relative flex-grow lg:-ml-[132px] xl:-ml-40 2xl:-ml-52">
        {isTablet && (
          <div className="opacity-0 transition-opacity delay-100 md:group-hover:opacity-100">
            <div className="absolute top-1/2 aspect-square -translate-y-1/2 transform rounded-lg bg-transparent">
              {/* // center the bullet : `top-1/2 transform -translate-y-1/2` */}
              <img
                src={organizationLogo}
                alt={`${organizationName} logo`}
                width={isDesktop ? 80 : 70}
                height={isDesktop ? 80 : 70}
                className="rounded-md"
              />
            </div>
          </div>
        )}
        <div className="py-3 lg:pl-[132px] xl:pl-40 2xl:pl-52">
          {jobDescriptorSection(
            organizationName,
            organizationLink,
            role,
            duration,
            organizationBeforeRole,
            isTablet,
          )}
          {details}
        </div>
      </div>
    </div>
  );
}
