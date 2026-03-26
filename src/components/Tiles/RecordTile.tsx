'use client';

import { PaperTexture } from '@paper-design/shaders-react';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';

import LinkWithArrow from '@/components/ui/LinkWithArrow';
// import Image from 'next/image';

export type RecordTileProps = {
  organizationLogo: string;
  organizationName: string;
  organizationLink: string;
  role: string;
  duration: string;
  body?: React.ReactNode;
  organizationBeforeRole?: boolean;
};

function jobDescriptorSection(
  organization: string,
  link: string,
  role: string,
  duration: string,
  isOrganizationBeforeRole: boolean = false,
) {
  // styling for:
  //    h2 - text-xl font-bold
  //    h3 - text-lg font-semibold

  const organizationNameHeadingTag = isOrganizationBeforeRole ? 'h3' : 'h4';
  const organizationNameHeading = React.createElement(
    LinkWithArrow,
    {
      href: link,
      target: '_blank',
      rel: 'noopener noreferrer',
      'aria-label': `Link to ${organization}`,
      className:
        'rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current',
    },
    React.createElement(
      organizationNameHeadingTag,
      { className: isOrganizationBeforeRole ? 'text-xl font-bold' : 'text-lg font-semibold' },
      organization,
    ),
  );
  const roleHeadingTag = !isOrganizationBeforeRole ? 'h3' : 'h4';
  const roleHeading = React.createElement(
    roleHeadingTag,
    { className: !isOrganizationBeforeRole ? 'text-xl font-bold' : 'text-lg font-semibold' },
    role,
  );

  return (
    <div className="flex flex-col justify-between sm:flex-row md:items-start">
      <div>
        <>
          {isOrganizationBeforeRole && (
            <>
              {organizationNameHeading}
              {roleHeading}
            </>
          )}
          {!isOrganizationBeforeRole && (
            <>
              {roleHeading}
              {organizationNameHeading}
            </>
          )}
        </>
        <p className="font-typewriter text-white dark:text-selago-100 md:hidden">{duration}</p>
      </div>
      <p className="hidden font-typewriter text-white dark:text-selago-100 md:block">{duration}</p>
    </div>
  );
}

export function RecordTile({
  organizationLogo,
  organizationName,
  organizationLink,
  role,
  duration,
  body,
  organizationBeforeRole = false,
}: RecordTileProps) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  // for useTheme
  useEffect(() => setMounted(true), []);

  const isDarkMode = resolvedTheme === 'dark';

  const OrganizationLogoOnPaper = (
    <PaperTexture
      width={80}
      height={80}
      image={organizationLogo}
      colorBack={isDarkMode ? '#1a0089' : '#ff5e33'} // Dark mode: blue, Light mode: orange
      colorFront={isDarkMode ? '#1a0089' : '#ff5e33'} // Dark mode: blue, Light mode: orange
      contrast={0.3}
      roughness={0.25}
      fiber={0.4}
      fiberSize={0.01}
      crumples={0}
      crumpleSize={0.01}
      folds={0}
      foldCount={1}
      drops={0}
      fade={0}
      seed={100}
      scale={1}
      imageAlphaMode="preserve"
      fit="contain"
    />
  );

  if (!mounted) return null;

  //   const topRow = (
  //     <h2 className="text-xl font-bold">{!organizationBeforeRole ? role : organizationName}</h2>
  //   );
  //   const bottomRow = "";
  return (
    <div className="-mb-2 flex items-center">
      <div className="group relative flex-grow lg:-ml-[132px] xl:-ml-40 2xl:-ml-52">
        <div className="hidden xl:block xl:opacity-0 xl:transition-opacity xl:delay-100 xl:group-hover:opacity-100">
          <div className="absolute top-1/2 aspect-square -translate-y-1/2 transform rounded-lg bg-transparent">
            {OrganizationLogoOnPaper}
          </div>
        </div>
        <div className="py-3 lg:pl-[132px] xl:pl-40 2xl:pl-52">
          {jobDescriptorSection(
            organizationName,
            organizationLink,
            role,
            duration,
            organizationBeforeRole,
          )}
          {body}
        </div>
      </div>
    </div>
  );
}
