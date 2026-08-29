import Image from 'next/image';

import LinkWithArrow from '@/components/ui/LinkWithArrow';

export type HeaderProps = {
  name: string;
  githubLink: string;
  linkedinLink: string;
  email: string;
  resumeFile: string;
  children?: React.ReactNode;
};

export default function Header({
  name,
  githubLink,
  linkedinLink,
  email,
  resumeFile,
  children,
}: HeaderProps) {
  const linkClassName =
    'text-sm text-[#11110f] underline underline-offset-[3px] transition-colors hover:text-[#55544f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#11110f]';

  return (
    <section
      className="mt-6 grid grid-cols-1 items-start gap-6 min-[431px]:grid-cols-[minmax(0,1fr)_104px] md:mt-8 md:flex md:gap-12"
      aria-labelledby="intro-title"
    >
      <div className="contents min-w-0 flex-1 md:block">
        <h1
          id="intro-title"
          className="order-2 col-start-1 row-start-1 m-0 font-display text-[clamp(45px,13vw,58px)] font-normal italic leading-[1.02] tracking-[-0.01em] md:order-none md:text-[64px]"
        >
          {name}
        </h1>
        {children}
        <div
          className="order-4 col-span-full mt-6 flex flex-wrap gap-x-[18px] gap-y-2.5 min-[431px]:row-start-3 md:order-none md:mt-[30px] md:gap-x-6 md:gap-y-3"
          aria-label="Contact links"
        >
          <LinkWithArrow
            href={githubLink}
            target="_blank"
            rel="noreferrer"
            className={linkClassName}
          >
            GitHub
          </LinkWithArrow>
          <LinkWithArrow
            href={linkedinLink}
            target="_blank"
            rel="noreferrer"
            className={linkClassName}
          >
            LinkedIn
          </LinkWithArrow>
          <LinkWithArrow href={`mailto:${email}`} className={linkClassName}>
            Email
          </LinkWithArrow>
          <LinkWithArrow
            href={`/${resumeFile}`}
            target="_blank"
            rel="noreferrer"
            className={linkClassName}
          >
            Resume
          </LinkWithArrow>
        </div>
      </div>
      <div className="order-1 h-[116px] w-[94px] overflow-hidden bg-[#e9e7e1] min-[431px]:order-none min-[431px]:col-start-2 min-[431px]:row-start-1 min-[431px]:h-[132px] min-[431px]:w-[104px] md:h-[210px] md:w-[170px]">
        <Image
          src="/images/headshot.jpeg"
          alt="Portrait of Himank Dave"
          width={340}
          height={420}
          priority
          unoptimized
          className="size-full object-cover"
        />
      </div>
    </section>
  );
}
