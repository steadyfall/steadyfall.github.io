import Link from 'next/link';

import { EducationTile } from '@/components/Tiles/EducationTile';
import BlurFade, { BLUR_FADE_DELAY } from '@/components/ui/BlurFade';
import { cn } from '@/lib/utils';

export function Education() {
  const educationDetails = (
    <p className="mt-1 py-0 text-gray-700 dark:text-gray-300">
      <Link
        href="https://uwaterloo.ca/computational-mathematics/"
        target="_blank"
        rel="noopener noreferrer"
        className="mr-0.5 hover:text-black hover:underline hover:underline-offset-4 dark:hover:text-white"
      >
        Computational Mathematics
      </Link>{' '}
      is a interdisplinary major that combines Mathematics, Statistics, Optimization and Computer
      Science, offered by the Faculty of Mathematics.
      {/* TODO: Insert all courses using a recursive React component */}
    </p>
  );

  return (
    <section id="education" className="mb-12">
      <BlurFade delay={BLUR_FADE_DELAY * 7}>
        <h2
          className={cn(
            'mb-4 font-section text-2xl md:text-3xl lg:text-4xl',
            'inline-block bg-gradient-to-r from-[#434343] to-[#000000] bg-clip-text text-transparent dark:from-gray-300 dark:to-gray-100',
          )}
        >
          Education
        </h2>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 8}>
        <EducationTile
          institutionLogo={'/images/uwaterlooLogo.png'}
          institutionName={'University of Waterloo'}
          institutionLink={'https://uwaterloo.ca/'}
          degree={'Bachelor of Mathematics'}
          major={'Computational Mathematics Major'}
          duration={'Sept 2022 - Present'}
          details={educationDetails}
        />
      </BlurFade>
    </section>
  );
}
