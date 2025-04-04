import { useMediaQuery } from '@/hooks/useMediaQuery';
import LinkWithArrow from '@/components/ui/LinkWithArrow';
import BlurFade, { BLUR_FADE_DELAY } from '@/components/ui/BlurFade';
import { cn } from '@/lib/utils';

export function Education() {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  return (
    <section id="education" className="mb-12">
      <BlurFade delay={BLUR_FADE_DELAY * 7}>
        <h2 className={cn(
          'text-2xl md:text-3xl lg:text-4xl font-section mb-4',
          'inline-block text-transparent bg-clip-text bg-gradient-to-r dark:from-gray-300 dark:to-gray-100 from-[#434343] to-[#000000]'
        )}>Education</h2>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 8}>
        <div className="flex items-center">
          <div className="relative flex-grow md:pl-12">
            <div className={'bg-white aspect-square absolute left-[5px] rounded-lg'}>
              {/* // center the bullet : `top-1/2 transform -translate-y-1/2` */}
              <img
                src="/images/uwaterlooLogo.png"
                alt={'University of Waterloo logo'}
                width={isDesktop ? 80 : 45}
                height={isDesktop ? 80 : 45}
                className="rounded-md"
              />
            </div>
            <div className={'pl-16 ' + (isDesktop && 'py-3')}>
              <div className="flex flex-col md:items-start justify-between sm:flex-row mb-2">
                <div>
                  <LinkWithArrow
                    href="https://uwaterloo.ca/" target="_blank"
                    rel="noopener noreferrer" aria-label={'Link to University of Waterloo'}
                  >
                    <h2 className="text-xl font-bold inline-flex items-center">
                                            University of Waterloo
                    </h2>
                  </LinkWithArrow>
                  <h3 className="text-lg font-semibold">Bachelor of Mathematics, Computational Mathematics Major</h3>
                  {(!isDesktop) && <h3 className="text-gray-600 font-typewriter dark:text-gray-400">Sept 2022 - Present</h3>}
                </div>
                {isDesktop && (<h3 className="text-gray-600 font-typewriter dark:text-gray-400">Sept 2022 - Present</h3>)}
              </div>
            </div>
          </div>
        </div>
        <p className="text-gray-700 dark:text-gray-300 mt-1 py-0">
          <LinkWithArrow
            href="https://uwaterloo.ca/computational-mathematics/" target="_blank"
            rel="noopener noreferrer" className="mr-0.5"
          >
                        Computational Mathematics
          </LinkWithArrow> is a interdisplinary major that combines Mathematics, Statistics, Optimization and Computer Science, offered by the Faculty of Mathematics.
          {/* TODO: Insert all courses using a recursive React component */}
        </p>
      </BlurFade>
    </section>
  );
}
