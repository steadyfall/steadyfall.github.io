import { Accordion } from '@base-ui/react/accordion';
import { Plus } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

import LinkWithArrow from '@/components/ui/LinkWithArrow';

export type ExperienceTileProps = {
  companyLogo: string;
  companyName: string;
  companyLink: string;
  position: string;
  period: string;
  responsibilities?: string[];
};

export function ExperienceTile({
  companyName,
  companyLink,
  position,
  period,
  responsibilities = [],
}: ExperienceTileProps) {
  return (
    <Accordion.Item value={`${companyName}-${position}`}>
      <Accordion.Header className="m-0 flex w-full items-start gap-2.5 pb-4 md:items-baseline">
        <LinkWithArrow
          href={companyLink}
          target="_blank"
          rel="noreferrer"
          className="flex-none text-[15px] font-semibold leading-[1.45] text-[#11110f] hover:text-[#55544f] [&_svg]:ml-0.5 [&_svg]:size-[0.9em] [&_svg]:stroke-[1.7]"
        >
          {companyName}
        </LinkWithArrow>
        <Accordion.Trigger className="group flex min-w-0 flex-1 cursor-pointer items-start justify-between gap-4 rounded-none border-0 bg-transparent p-0 text-left text-[#11110f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#11110f] md:items-baseline">
          <span className="min-w-0 pr-1 text-[15px] leading-[1.45] text-[#454440] md:pr-0">
            <span>{position}</span>
          </span>
          <span className="flex max-w-[118px] flex-none flex-col items-end gap-[5px] text-right text-[11px] text-[#66645f] md:max-w-none md:flex-row md:items-baseline md:gap-3.5 md:whitespace-nowrap md:text-[13px]">
            <span>{period.replaceAll(' - ', ' – ')}</span>
            <Plus
              className="mt-0.5 size-3.5 flex-none stroke-[1.2] transition-transform duration-200 group-data-[panel-open]:rotate-45 motion-reduce:transition-none md:mt-0"
              aria-hidden
            />
          </span>
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Panel className="h-[var(--accordion-panel-height)] overflow-hidden transition-[height] duration-200 ease-out data-[ending-style]:h-0 data-[starting-style]:h-0 motion-reduce:transition-none">
        <div className="w-full pb-5 text-sm leading-[1.6] text-[#55544f] [&_p+p]:mt-2.5 [&_p]:m-0">
          {responsibilities.map((responsibility, index) => (
            <ReactMarkdown key={index}>{responsibility}</ReactMarkdown>
          ))}
        </div>
      </Accordion.Panel>
    </Accordion.Item>
  );
}
