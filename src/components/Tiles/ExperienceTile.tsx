import LinkWithArrow from '@/components/ui/LinkWithArrow';
import { useMediaQuery } from '@/hooks/useMediaQuery';
// import Image from 'next/image';

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
  const isTablet = useMediaQuery('(min-width: 768px)');
  const isDesktop = useMediaQuery('(min-width: 1280px)');
  return (
    <div className="-mb-2 flex items-center">
      <div className="group relative flex-grow lg:-ml-[132px] xl:-ml-40 2xl:-ml-52">
        {isTablet && (
          <div className="opacity-0 transition-opacity delay-100 md:group-hover:opacity-100">
            <div className="absolute top-1/2 aspect-square -translate-y-1/2 transform rounded-lg bg-transparent">
              {/* // center the bullet : `top-1/2 transform -translate-y-1/2` */}
              <img
                src={companyLogo}
                alt={`${companyName} logo`}
                width={isDesktop ? 80 : 70}
                height={isDesktop ? 80 : 70}
                className="rounded-md"
              />
            </div>
          </div>
        )}
        <div className="py-3 lg:pl-[132px] xl:pl-40 2xl:pl-52">
          <div className="flex flex-col justify-between sm:flex-row md:items-start">
            <div>
              <h2 className="text-xl font-bold">{position}</h2>
              <LinkWithArrow
                href={companyLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Link to ${companyName}`}
              >
                <h3 className="text-lg font-semibold">{companyName}</h3>
              </LinkWithArrow>
              {!isTablet && (
                <h3 className="font-typewriter text-gray-600 dark:text-gray-400">{period}</h3>
              )}
            </div>
            {isTablet && (
              <h3 className="font-typewriter text-gray-600 dark:text-gray-400">{period}</h3>
            )}
          </div>
          {responsibilities && responsibilities.length > 0 && (
            <div className="mt-3">
              <ul className="list-inside list-['-_'] space-y-1 text-gray-700 dark:text-gray-300">
                {responsibilities.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
