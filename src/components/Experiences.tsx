import BlurFade, { BLUR_FADE_DELAY } from '@/components/ui/BlurFade';

import { ExperienceTileProps, ExperienceTile } from './Tiles/ExperienceTile';

interface ExperiencesProps {
  arr: ExperienceTileProps[];
}

export function Experiences({ arr }: ExperiencesProps) {
  return (
    <section id="experience" className="mb-12 lg:mb-20">
      <BlurFade delay={BLUR_FADE_DELAY * 5}>
        <h2 className="mb-4 font-section text-2xl text-chinese-black-950 dark:text-selago-100 md:text-3xl lg:text-4xl">
          Experience
        </h2>
      </BlurFade>
      {arr && arr.length > 0 ? (
        <div className="space-y-6">
          {arr.map((experience, index) => (
            <BlurFade key={index} delay={BLUR_FADE_DELAY * 6 + index * 0.2}>
              <ExperienceTile {...experience} />
            </BlurFade>
          ))}
        </div>
      ) : (
        <p>No experiences to display.</p>
      )}
    </section>
  );
}
