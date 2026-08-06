import { PreviewLinkWithArrow } from '@/components/ui/PreviewLinkWithArrow';

export default function About() {
  return (
    <p className="order-3 col-span-full mt-[22px] max-w-[590px] text-pretty text-base leading-[1.6] text-[#33322f] min-[431px]:row-start-2 md:order-none md:mt-[26px] md:text-lg">
      Software engineer studying Computational Mathematics at{' '}
      <PreviewLinkWithArrow
        href="https://uwaterloo.ca/"
        target="_blank"
        rel="noreferrer"
        previewTitle="University of Waterloo"
        previewDescription="Computational Mathematics"
        previewMeta="September 2022 – May 2027"
        className="font-semibold text-[#11110f] no-underline hover:text-[#55544f] [&_svg]:ml-0.5 [&_svg]:size-[0.9em] [&_svg]:stroke-[1.7]"
      >
        UWaterloo
      </PreviewLinkWithArrow>
      . I like small tools, fast feedback loops, and building reliable systems that remove
      repetitive work.
    </p>
  );
}
