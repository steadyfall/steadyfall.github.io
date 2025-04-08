'use client';

import { useState } from 'react';

import BlurFade, { BLUR_FADE_DELAY } from '@/components/ui/BlurFade';
import { cn } from '@/lib/utils';

import { ExperienceTileProps, ExperienceTile } from './Tiles/ExperienceTile';

interface ExperiencesProps {
  arr: ExperienceTileProps[];
}

export function Experiences({ arr }: ExperiencesProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [experiences, setExperiences] = useState(arr);
  return (
    <section id="experience" className="mb-12">
      <BlurFade delay={BLUR_FADE_DELAY * 5}>
        <h2
          className={cn(
            'mb-4 font-section text-2xl md:text-3xl lg:text-4xl',
            'inline-block bg-gradient-to-r from-[#434343] to-[#000000] bg-clip-text text-transparent dark:from-gray-300 dark:to-gray-100',
          )}
        >
          Experience
        </h2>
      </BlurFade>
      {experiences && experiences.length > 0 ? (
        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <BlurFade key={index} delay={BLUR_FADE_DELAY * 6 + index * 0.2}>
              <ExperienceTile key={index} {...experience} />
            </BlurFade>
          ))}
        </div>
      ) : (
        <p>No experiences to display.</p>
      )}
    </section>
  );
}
