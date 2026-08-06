'use client';

import { Tabs } from '@base-ui/react/tabs';

import { personalDetails } from '@/data/resume';

export default function Navbar() {
  const navItemClassName =
    'm-0 cursor-pointer rounded-none border-0 bg-transparent p-0 text-sm leading-[1.3] text-[#55544f] hover:text-[#11110f] hover:underline hover:underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#11110f] data-[active]:font-semibold data-[active]:text-[#11110f] data-[active]:underline data-[active]:underline-offset-4';

  return (
    <header className="sticky top-0 z-20 mx-auto flex max-w-[1100px] justify-end bg-white/95 px-[22px] py-[18px] backdrop-blur-xl md:px-12 md:py-5">
      <nav className="flex items-baseline gap-[22px] md:gap-7" aria-label="Portfolio pages">
        <Tabs.List className="flex items-baseline gap-[22px] md:gap-7">
          <Tabs.Tab value="index" className={navItemClassName}>
            Index
          </Tabs.Tab>
          <Tabs.Tab value="projects" className={navItemClassName}>
            Projects
          </Tabs.Tab>
        </Tabs.List>
        <a
          href={`/${personalDetails.resumeFile}`}
          target="_blank"
          rel="noreferrer"
          className={navItemClassName}
        >
          Résumé
        </a>
      </nav>
    </header>
  );
}
