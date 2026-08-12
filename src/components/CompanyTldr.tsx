import Link from 'next/link';

import CompanyBadge from '@/components/ui/CompanyBadge';

export interface CompanyTldrItem {
  companyLogo: string;
  companyName: string;
  companyLink: string;
  tldr?: string;
}

interface CompanyTldrProps {
  arr: CompanyTldrItem[];
}

export function CompanyTldr({ arr }: CompanyTldrProps) {
  const uniqueCompanies = arr.filter(
    (exp, index, self) =>
      exp.tldr && self.findIndex((item) => item.companyName === exp.companyName) === index,
  );

  if (uniqueCompanies.length === 0) return null;

  return (
    <section
      id="company-tldr"
      className="mt-[52px] flex flex-col gap-[18px] border-t border-[#e9e7e1] pt-[52px] md:mt-16 md:gap-6 md:pt-16"
      aria-labelledby="company-tldr-title"
    >
      <h2
        id="company-tldr-title"
        className="m-0 font-sans text-[22.5px] font-semibold italic leading-tight text-[#11110f]"
      >
        Company overviews
      </h2>
      <div className="flex max-w-[70ch] flex-col gap-2.5 font-sans text-md leading-[1.6] text-[#55544f]">
        {uniqueCompanies.map((company, index) => (
          <div key={index} className="m-0 leading-[1.6]">
            <Link
              href={company.companyLink}
              target="_blank"
              rel="noreferrer"
              className="mr-1 inline-flex items-center text-black underline decoration-[#888680] underline-offset-[3px] transition-colors hover:decoration-black"
            >
              <CompanyBadge
                logo={company.companyLogo}
                name={company.companyName}
                className="font-normal text-black"
              />
            </Link>
            {company.tldr}
          </div>
        ))}
      </div>
    </section>
  );
}

export default CompanyTldr;
