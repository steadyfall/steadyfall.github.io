import LinkWithArrow from '@/components/ui/LinkWithArrow';
import { detailsForMetadata, personalDetails } from '@/data/resume';
import { cn } from '@/lib/utils';

const Footer = () => {
  return (
    <footer className={cn(
      'py-12 text-gray-500 dark:text-gray-400'
    )}>
      <div className={cn(
        'flex flex-col items-center justify-center sm:flex-row-reverse sm:justify-between',
        'max-w-full mx-auto px-8 sm:px-16 md:px-24 lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl'
      )}>
        <div className="flex justify-center md:justify-start space-x-4">
          <LinkWithArrow 
            href={personalDetails.githubLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
            className="hover:underline hover:underline-offset-2 text-pink-500"
          >
              github
          </LinkWithArrow>
          <LinkWithArrow 
            href={personalDetails.linkedinLink} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
            className="hover:underline hover:underline-offset-2 text-thunderbird-600"
          >
              linkedin
          </LinkWithArrow>
          <LinkWithArrow 
            href={'mailto:' + personalDetails.email} aria-label="Email"
            className="hover:underline hover:underline-offset-2 text-azure-radiance-600" // text-orange-500"
          >
              email
          </LinkWithArrow>
        </div>
        <div className="mt-6 sm:mt-0">
          &copy; 2024 {new URL(detailsForMetadata.baseUrl).hostname}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
