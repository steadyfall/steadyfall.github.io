import Header from '@/components/Header';
import CompanyBadge from '@/components/ui/CompanyBadge';
import LinkWithArrow from '@/components/ui/LinkWithArrow';
import { experiences, personalDetails } from '@/data/resume';

export function Landing() {
  const currentExperience = experiences[0];

  return (
    <Header {...personalDetails}>
      <p className="order-3 col-span-full mt-[22px] max-w-[590px] text-pretty text-base leading-[1.6] text-[#33322f] min-[431px]:row-start-2 md:order-none md:mt-[26px] md:text-md">
        Software engineer studying Computational Mathematics at{' '}
        <LinkWithArrow
          href="https://uwaterloo.ca/"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-[#11110f] no-underline hover:text-[#55544f] [&_svg]:ml-0.5 [&_svg]:size-[0.9em] [&_svg]:stroke-[1.7]"
        >
          <CompanyBadge logo="/images/uwaterlooLogo.png" name="UWaterloo" />
        </LinkWithArrow>
        , currently interning at{' '}
        <CompanyBadge logo={currentExperience.companyLogo} name={currentExperience.companyName} />.
        I like small tools, fast feedback loops, and building reliable systems that remove
        repetitive work.
      </p>
    </Header>
  );
}

export default Landing;
