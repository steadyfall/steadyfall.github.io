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
  const isDesktop = useMediaQuery('(min-width: 768px)');
  return (
    <div
      className={
        (!(responsibilities && responsibilities.length > 0) && !isDesktop ? '-mb-6' : 'mb-6') +
        ' ' +
        'flex items-center'
      }
    >
      <div className="relative flex-grow md:pl-12">
        <div className="absolute left-[5px] top-3 aspect-square rounded-lg bg-white">
          {/* // center the bullet : `top-1/2 transform -translate-y-1/2` */}
          <img
            src={companyLogo}
            alt={`${companyName} logo`}
            width={isDesktop ? 80 : 45}
            height={isDesktop ? 80 : 45}
            className="rounded-md"
          />
        </div>
        <div className="py-3 pl-16">
          <div className="mb-4 flex flex-col justify-between sm:flex-row md:items-start">
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
              {!isDesktop && (
                <h3 className="font-typewriter text-gray-600 dark:text-gray-400">{period}</h3>
              )}
            </div>
            {isDesktop && (
              <h3 className="font-typewriter text-gray-600 dark:text-gray-400">{period}</h3>
            )}
          </div>
          {responsibilities && responsibilities.length > 0 && (
            <div className="mt-4">
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
