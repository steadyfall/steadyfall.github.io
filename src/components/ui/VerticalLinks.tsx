import LinkWithArrow from '@/components/ui/LinkWithArrow';

export interface VerticalLink {
  label: string;
  href: string;
  isExternal: boolean;
}

export interface VerticalLinksProps {
  links: VerticalLink[];
  className?: string;
}

export function VerticalLinks({ links, className = '' }: VerticalLinksProps) {
  const linkClassName =
    'inline-flex min-h-6 items-center text-sm min-[1240px]:text-md text-[#11110f] no-underline transition-colors hover:text-[#55544f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#11110f]';
  return (
    <aside aria-label="Quick links" className={`min-[1240px]:justify-self-end ${className}`}>
      <nav aria-label="Top vertical links">
        <ul className="m-0 ml-auto flex w-max list-none flex-col items-end p-0 min-[1240px]:hidden">
          {links.map((link) => (
            <li key={link.label}>
              <LinkWithArrow
                href={link.href}
                {...(link.isExternal ? { target: '_blank', rel: 'noreferrer' } : {})}
                className={linkClassName}
              >
                {link.label}
              </LinkWithArrow>
            </li>
          ))}
        </ul>
        <ul className="m-0 hidden list-none flex-col items-end p-0 min-[1240px]:flex">
          {links.map((link) => (
            <li key={link.label}>
              <LinkWithArrow
                href={link.href}
                {...(link.isExternal ? { target: '_blank', rel: 'noreferrer' } : {})}
                className={linkClassName}
              >
                {link.label}
              </LinkWithArrow>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default VerticalLinks;
