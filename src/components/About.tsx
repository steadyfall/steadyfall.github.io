'use client';

import { FlagTriangleRight, GitCommitVertical, Signpost } from 'lucide-react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/Accordion';
import BlurFade, { BLUR_FADE_DELAY } from '@/components/ui/BlurFade';
import LinkWithArrow from '@/components/ui/LinkWithArrow';
import StrikeHighlight from '@/components/ui/StrikeHighlighter';

type CustomAccordionItemDetails = {
  value: string;
  iconTitle: React.ReactNode;
  title: string;
  iconBody: React.ReactNode;
  body: React.ReactNode[];
};

const AccordionForExtraInfo = (items: CustomAccordionItemDetails[] = []) => {
  const AccordionItemCustom = ({
    value,
    iconTitle,
    title,
    iconBody,
    body,
  }: CustomAccordionItemDetails) => {
    return (
      <AccordionItem value={value}>
        <AccordionTrigger className="text-chinese-black-950 dark:text-selago-100">
          <span className="flex items-center gap-2">
            {iconTitle}
            <span>{title}</span>
          </span>
        </AccordionTrigger>
        <AccordionContent className="ps-7 text-base">
          <ul className="list-inside list-none space-y-1 text-chinese-black-900 dark:text-selago-200">
            {body.map((node, idx) => (
              <li key={idx}>
                {iconBody}
                {node}
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    );
  };

  return (
    <Accordion type="single" collapsible>
      {items.map((item, idx) => (
        <AccordionItemCustom key={idx} {...item} />
      ))}
    </Accordion>
  );
};

const About = () => {
  const findMeDoingBody = [
    <>tinkering on projects that make my life a little easier.</>,
    <>
      <StrikeHighlight text="re-watching" color="white-pink" /> any one of these series:{' '}
      <StrikeHighlight text="Better Call Saul" color="white-pink" />,{' '}
      <StrikeHighlight text="Silicon Valley" color="white-pink" />,{' '}
      <StrikeHighlight text="South Park" color="white-pink" /> and{' '}
      <StrikeHighlight text="House" color="white-pink" />.
    </>,
  ];
  const thoseOfYouCuriousBody = [
    <>
      The favicon is a <StrikeHighlight text="4-hypercube graph" color="white-cyan" /> made via
      Python, using NetworkX and Matplotlib. Check the{' '}
      <LinkWithArrow
        href="/icon.ico"
        target="_blank"
        className="mr-1 text-white hover:underline hover:underline-offset-2 dark:text-portland-orange"
      >
        image
      </LinkWithArrow>
      out, learn{' '}
      <LinkWithArrow
        href="https://en.wikipedia.org/wiki/Hypercube_graph"
        target="_blank"
        className="mr-1 text-white hover:underline hover:underline-offset-2 dark:text-spring-green-400"
      >
        more
      </LinkWithArrow>{' '}
      about hypercube graphs & here is the{' '}
      <LinkWithArrow
        href="https://github.com/steadyfall/steadyfall.github.io/blob/dev/hypercube/generate.py"
        target="_blank"
        className="mr-1 text-white hover:underline hover:underline-offset-2 dark:text-firefly-400"
      >
        code
      </LinkWithArrow>{' '}
      to generate it yourself.
    </>,
  ];
  const itemsForExtraInfo: CustomAccordionItemDetails[] = [
    {
      value: 'findme',
      iconTitle: (
        <>
          <Signpost className="h-4 w-4 opacity-90 md:h-5 md:w-5" aria-hidden="true" />
        </>
      ),
      title: 'You can find me:',
      iconBody: (
        <>
          <GitCommitVertical
            className="mr-1 inline-block h-4 w-4 align-middle md:h-5 md:w-5"
            aria-hidden="true"
          />
        </>
      ),
      body: findMeDoingBody,
    },
    {
      value: 'curious',
      iconTitle: (
        <>
          <FlagTriangleRight className="h-4 w-4 opacity-90 md:h-5 md:w-5" aria-hidden="true" />
        </>
      ),
      title: 'For those of you curious:',
      iconBody: <></>,
      body: thoseOfYouCuriousBody,
    },
  ];

  return (
    <section id="about" className="mb-12 lg:mb-20">
      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <h2 className="mb-4 font-section text-2xl text-chinese-black-950 dark:text-selago-100 md:text-3xl lg:text-4xl">
          About
        </h2>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <div className="text-chinese-black-900 dark:text-selago-200">
          <p className="mb-2">
            I am a <StrikeHighlight text="software developer" color="white-red" /> based in{' '}
            <StrikeHighlight text="Waterloo" color="white-red" /> and currently a{' '}
            <StrikeHighlight text="junior" /> majoring in{' '}
            <StrikeHighlight text="Computational Mathematics" /> at the{' '}
            <StrikeHighlight text="University of Waterloo" />. I am passionate about technology and
            innovation, especially exploring{' '}
            <span className="underline underline-offset-4">unexplored or complex domains</span> and
            uncovering their{' '}
            <span className="underline underline-offset-4">intersection with tech</span>.
          </p>
          <div className="mb-2">{AccordionForExtraInfo(itemsForExtraInfo)}</div>
        </div>
      </BlurFade>
    </section>
  );
};

export default About;
