import Link from 'next/link';

import { EducationTile } from '@/components/Tiles/EducationTile';
import BlurFade, { BLUR_FADE_DELAY } from '@/components/ui/BlurFade';

export function Education() {
  const educationDetails = (
    <p className="mt-1 py-0 text-chinese-black-900 dark:text-selago-200">
      <Link
        href="https://uwaterloo.ca/computational-mathematics/"
        target="_blank"
        rel="noopener noreferrer"
        className="mr-0.5 rounded hover:text-black hover:underline hover:underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current dark:hover:text-white"
      >
        Computational Mathematics
      </Link>{' '}
      is an interdisciplinary major that combines Mathematics, Statistics, Optimization and Computer
      Science, offered by the Faculty of Mathematics.
    </p>
  );

  return (
    <section id="education" className="mb-12 lg:mb-20">
      <BlurFade delay={BLUR_FADE_DELAY * 7}>
        <h2 className="mb-4 font-section text-2xl text-chinese-black-950 dark:text-selago-100 md:text-3xl lg:text-4xl">
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
