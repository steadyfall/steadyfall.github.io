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
import { cn } from '@/lib/utils';

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
        <AccordionTrigger className="text-black dark:text-white">
          <span className="flex items-center gap-2">
            {iconTitle}
            <span>{title}</span>
          </span>
        </AccordionTrigger>
        <AccordionContent className="ps-7 text-base">
          <ul className="list-inside list-none space-y-1 text-gray-700 dark:text-gray-300">
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
    <>
      <StrikeHighlight text="re-watching" color="pink" /> any one of these series:{' '}
      <StrikeHighlight text="Breaking Bad" color="pink" />,{' '}
      <StrikeHighlight text="Silicon Valley" color="pink" />,{' '}
      <StrikeHighlight text="South Park" color="pink" /> and{' '}
      <StrikeHighlight text="The Office" color="pink" />.
    </>,
  ];
  const thoseOfYouCuriousBody = [
    <>
      The favicon is a <StrikeHighlight text="4-hypercube graph" color="cyan" /> made via Python,
      using NetworkX and Matplotlib. Check the{' '}
      <LinkWithArrow
        href="/icon.ico"
        target="_blank"
        className="mr-1 text-orange-500 hover:underline hover:underline-offset-2"
      >
        image
      </LinkWithArrow>
      out, learn{' '}
      <LinkWithArrow
        href="https://en.wikipedia.org/wiki/Hypercube_graph"
        target="_blank"
        className="mr-1 text-blue-violet-500 hover:underline hover:underline-offset-2"
      >
        more
      </LinkWithArrow>{' '}
      about hypercube graphs & here is the{' '}
      <LinkWithArrow
        href="https://github.com/steadyfall/steadyfall.github.io/blob/main/hypercube/generate.py"
        target="_blank"
        className="mr-1 text-firefly-600 hover:underline hover:underline-offset-2 dark:text-firefly-500"
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
          <GitCommitVertical className="mr-1 inline-block h-4 w-4 align-middle md:h-5 md:w-5" />
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
    <section id="about" className="mb-12">
      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <h2
          className={cn(
            'mb-4 font-section text-2xl md:text-3xl lg:text-4xl',
            'inline-block bg-gradient-to-r from-[#434343] to-[#000000] bg-clip-text text-transparent dark:from-gray-300 dark:to-gray-100',
          )}
        >
          About
        </h2>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <div className="text-gray-700 dark:text-gray-300">
          <p className="mb-2">
            I am a <StrikeHighlight text="software developer" color="red" /> based in{' '}
            <StrikeHighlight text="Toronto" color="red" /> and currently a{' '}
            <StrikeHighlight text="junior" /> pursuing a{' '}
            <StrikeHighlight text="Computational Mathematics" /> major at the{' '}
            <StrikeHighlight text="University of Waterloo" />. I am passionate about tech and
            innovation, always exploring the{' '}
            <span className="underline underline-offset-4">
              intersection of software development and AI.
            </span>
          </p>
          <div className="mb-2">{AccordionForExtraInfo(itemsForExtraInfo)}</div>
        </div>
      </BlurFade>
    </section>
  );
};

export default About;
