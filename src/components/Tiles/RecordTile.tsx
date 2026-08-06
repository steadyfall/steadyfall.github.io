import { PreviewLinkWithArrow } from '@/components/ui/PreviewLinkWithArrow';

export type RecordTileProps = {
  organizationName: string;
  organizationLink: string;
  role: string;
  duration: string;
  body?: React.ReactNode;
  previewDescription?: string;
};

export function RecordTile({
  organizationName,
  organizationLink,
  role,
  duration,
  body,
  previewDescription,
}: RecordTileProps) {
  return (
    <div>
      <div className="text-[15px] text-[#454440]">
        <PreviewLinkWithArrow
          href={organizationLink}
          target="_blank"
          rel="noreferrer"
          previewTitle={organizationName}
          previewDescription={[role, previewDescription].filter(Boolean).join(' · ')}
          previewMeta={duration}
          className="font-semibold text-[#11110f] no-underline hover:text-[#55544f]"
        >
          {organizationName}
        </PreviewLinkWithArrow>
        <span> · {role}</span>
      </div>
      {body}
      <p className="mt-[7px] font-mono text-xs leading-6 text-[#77756e]">{duration}</p>
    </div>
  );
}
