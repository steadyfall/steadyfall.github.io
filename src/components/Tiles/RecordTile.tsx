import LinkWithArrow from '@/components/ui/LinkWithArrow';

export type RecordTileProps = {
  organizationName: string;
  organizationLink: string;
  role: string;
  duration: string;
  body?: React.ReactNode;
};

export function RecordTile({
  organizationName,
  organizationLink,
  role,
  duration,
  body,
}: RecordTileProps) {
  return (
    <div>
      <div className="text-[15px] text-[#454440]">
        <LinkWithArrow
          href={organizationLink}
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-[#11110f] no-underline hover:text-[#55544f]"
        >
          {organizationName}
        </LinkWithArrow>
        <span> · {role}</span>
      </div>
      {body}
      <p className="mt-[7px] font-mono text-xs leading-6 text-[#77756e]">{duration}</p>
    </div>
  );
}
