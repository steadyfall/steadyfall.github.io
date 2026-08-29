import Image from 'next/image';

import { education, experiences } from '@/data/resume';

import CompanyBadge from './ui/CompanyBadge';

export function Landing() {
  const currentExperience = experiences[0];
  const currentEducation = education[0];
  const pastExperience = experiences
    .slice(1)
    .filter(
      (experience, index, allExperiences) =>
        allExperiences.findIndex(({ companyName }) => companyName === experience.companyName) ===
        index,
    );

  return (
    <section className="mt-6" aria-labelledby="intro-title">
      <h1
        id="intro-title"
        className="m-0 font-display text-5xl font-normal italic leading-[1.05] tracking-[-0.01em] md:text-[54px]"
      >
        Hello, I am Himank Dave.
      </h1>
      <div className="mt-[18px] max-w-[800px] md:max-w-none">
        <div className="mb-6 size-[132px] overflow-hidden bg-[#e9e7e1] md:float-left md:mb-2 md:mr-6 md:size-[190px]">
          <Image
            src="/images/headshot.jpeg"
            alt="Portrait of Himank Dave"
            width={380}
            height={380}
            priority
            unoptimized
            className="size-full translate-x-[-2.5%] scale-[1.15] object-cover object-[70%_28%]"
          />
        </div>
        <div className="space-y-4 text-md leading-[1.6] text-[#11110f] md:contents">
          <p>
            I am a senior at
            <CompanyBadge
              logo={currentEducation.logo}
              name={currentEducation.shortName}
              className="ml-1"
            />{' '}
            and build software for problems that become tiring the second time around.
          </p>
          <p>
            Currently, I am working on adaptive traffic control at
            <CompanyBadge
              logo={currentExperience.companyLogo}
              name={currentExperience.companyName}
              className="ml-1"
            />
            . I have previously worked at companies like{' '}
            {pastExperience.map((experience, index) => (
              <span key={experience.companyName}>
                {index > 0 ? (index === pastExperience.length - 1 ? ' and ' : ', ') : null}
                <CompanyBadge logo={experience.companyLogo} name={experience.companyName} />
              </span>
            ))}
            .
          </p>
          <p>
            I love exploring unexplored or complex domains and uncovering their intersection with
            tech.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Landing;
