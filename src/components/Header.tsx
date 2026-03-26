'use client';

import { ImageDithering } from '@paper-design/shaders-react';
import copy from 'copy-to-clipboard';
import { Copy, CopyCheck } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import BlurFade, { BLUR_FADE_DELAY } from '@/components/ui/BlurFade';
import LinkWithArrow from '@/components/ui/LinkWithArrow';
// import Image from 'next/image'

export type HeaderProps = {
  name: string;
  pronouns: string;
  currentEducation: string;
  currentJob?: string[];
  basedFrom?: string;
  githubLink: string;
  linkedinLink: string;
  email: string;
  resumeFile: string;
};

const Header = ({
  name,
  pronouns,
  currentEducation,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  currentJob,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  basedFrom,
  githubLink,
  linkedinLink,
  email,
  resumeFile,
}: HeaderProps) => {
  const [copied, setCopiedId] = useState<string>();
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  // for useTheme
  useEffect(() => setMounted(true), []);

  // for copy button
  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => {
      setCopiedId(undefined);
    }, 3000);
    return () => clearTimeout(timer);
  }, [copied]);

  const isDarkMode = resolvedTheme === 'dark';

  const DitheredHeadshot = (
    <div className="size-36 md:size-48 lg:size-56">
      <ImageDithering
        style={{ height: '100%', width: '100%' }}
        image="/images/headshot.jpg"
        colorBack={isDarkMode ? '#1a0098' : '#ff3600'} // Dark mode: blue, Light mode: orange
        colorFront="#ffffff"
        colorHighlight="#ffffff"
        // originalColors
        type="8x8"
        size={1}
        colorSteps={5}
        fit="contain"
        className="object-cover"
      />
    </div>
  );

  if (!mounted) return null;

  return (
    <div className="container mx-auto mb-10 lg:mb-16">
      <div className="flex flex-col items-center justify-between md:flex-row">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <div className="mb-4 flex-shrink-0 md:mb-0 md:mr-8 md:hidden">{DitheredHeadshot}</div>
        </BlurFade>
        <div className="flex-grow text-center md:text-left">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <div className="flex items-center justify-center md:justify-start">
              <h1 className="mr-4 text-4xl font-bold md:text-5xl lg:text-6xl">{name}</h1>
            </div>
          </BlurFade>
          <div className="mt-4 flex justify-center space-x-4 md:justify-start">
            <BlurFade delay={BLUR_FADE_DELAY}>
              <LinkWithArrow
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-white hover:underline hover:underline-offset-2 dark:text-pink-500"
              >
                github
              </LinkWithArrow>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <LinkWithArrow
                href={linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-white hover:underline hover:underline-offset-2 dark:text-thunderbird-500"
              >
                linkedin
              </LinkWithArrow>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <LinkWithArrow
                href={'mailto:' + email}
                aria-label="Email"
                className="text-white hover:underline hover:underline-offset-2 dark:text-starship-500" // text-orange-500"
              >
                email
              </LinkWithArrow>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <LinkWithArrow
                href={'/' + resumeFile}
                target="_blank"
                aria-label="Resume"
                className="text-white hover:underline hover:underline-offset-2 dark:text-neon-green-400"
              >
                resume
              </LinkWithArrow>
            </BlurFade>
          </div>
          <div className="mt-4 text-sm md:text-base lg:text-lg">
            {pronouns && (
              <BlurFade delay={BLUR_FADE_DELAY}>
                <p className="text-xs italic md:text-sm lg:text-base">{pronouns}</p>
              </BlurFade>
            )}
            {currentEducation && (
              <BlurFade delay={BLUR_FADE_DELAY}>
                <p>{currentEducation}</p>
              </BlurFade>
            )}
            <BlurFade delay={BLUR_FADE_DELAY}>
              <div className="inline-flex">
                <p className="font-typewriter">
                  {email.split('').map((char) => {
                    return char === '@' ? '[at]' : char;
                  })}
                </p>
                <button
                  className="ml-3 cursor-pointer rounded text-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current dark:text-white dark:hover:text-chinese-black-300"
                  aria-label={
                    copied === 'copied-email' ? 'Email address copied' : 'Copy email address'
                  }
                  onClick={async () => {
                    if ('clipboard' in navigator) {
                      await navigator.clipboard.writeText(email);
                    } else {
                      copy(email);
                    }
                    setCopiedId('copied-email');
                  }}
                >
                  {copied === 'copied-email' ? (
                    <CopyCheck className="h-4 w-4 md:h-5 md:w-5" aria-hidden="true" />
                  ) : (
                    <Copy className="h-4 w-4 md:h-5 md:w-5" aria-hidden="true" />
                  )}
                </button>
              </div>
            </BlurFade>
          </div>
        </div>
        <BlurFade delay={BLUR_FADE_DELAY} inView={true}>
          <div className="hidden flex-shrink-0 md:block">{DitheredHeadshot}</div>
        </BlurFade>
      </div>
      {/*
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <nav className="mt-8">
              <ul className="flex justify-center md:justify-start space-x-6 text-sm md:text-base">
              <li><a href="#about" className="hover:underline hover:underline-offset-4">About</a></li>
              <li><a href="#experience" className="hover:underline hover:underline-offset-4">Experience</a></li>
              <li><a href="#education" className="hover:underline hover:underline-offset-4">Education</a></li>
              <li><a href="#skills" className="hover:underline hover:underline-offset-4">Skills</a></li>
              <li><a href="#projects" className="hover:underline hover:underline-offset-4">Projects</a></li>
              </ul>
          </nav>
        </BlurFade>
      */}
    </div>
  );
};

export default Header;
