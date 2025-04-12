import BlurFade, { BLUR_FADE_DELAY } from '@/components/ui/BlurFade';
import LinkWithArrow from '@/components/ui/LinkWithArrow';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { cn } from '@/lib/utils';

export function Education() {
  const isTablet = useMediaQuery('(min-width: 768px)');
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
        <div className="flex items-center">
          <div className="relative flex-grow md:pl-12">
            <div className={'absolute left-[5px] aspect-square rounded-lg bg-white'}>
              {/* // center the bullet : `top-1/2 transform -translate-y-1/2` */}
              <img
                src="/images/uwaterlooLogo.png"
                alt={'University of Waterloo logo'}
                width={isTablet ? 80 : 45}
                height={isTablet ? 80 : 45}
                className="rounded-md"
              />
            </div>
            <div className={'pl-16 ' + (isTablet && 'py-3')}>
              <div className="mb-2 flex flex-col justify-between sm:flex-row md:items-start">
                <div>
                  <LinkWithArrow
                    href="https://uwaterloo.ca/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={'Link to University of Waterloo'}
                  >
                    <h2 className="inline-flex items-center text-xl font-bold">
                      University of Waterloo
                    </h2>
                  </LinkWithArrow>
                  <h3 className="text-lg font-semibold">
                    Bachelor of Mathematics, Computational Mathematics Major
                  </h3>
                  {!isTablet && (
                    <h3 className="font-typewriter text-gray-600 dark:text-gray-400">
                      Sept 2022 - Present
                    </h3>
                  )}
                </div>
                {isTablet && (
                  <h3 className="font-typewriter text-gray-600 dark:text-gray-400">
                    Sept 2022 - Present
                  </h3>
                )}
              </div>
            </div>
          </div>
        </div>
        <p className="mt-1 py-0 text-gray-700 dark:text-gray-300">
          <LinkWithArrow
            href="https://uwaterloo.ca/computational-mathematics/"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-0.5"
          >
            Computational Mathematics
          </LinkWithArrow>{' '}
          is a interdisplinary major that combines Mathematics, Statistics, Optimization and
          Computer Science, offered by the Faculty of Mathematics.
          {/* TODO: Insert all courses using a recursive React component */}
        </p>
      </BlurFade>
    </section>
  );
}
