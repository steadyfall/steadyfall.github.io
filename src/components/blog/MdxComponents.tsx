import Link from 'next/link';

import { cn } from '@/lib/utils';

import type { MDXComponents } from 'mdx/types';

type CalloutProps = React.PropsWithChildren<{
  title?: string;
  tone?: 'note' | 'tip' | 'warning';
}>;

export function Callout({ children, title = 'Note', tone = 'note' }: CalloutProps) {
  const toneClassName = {
    note: 'bg-[#f4f3ef] text-[#383731]',
    tip: 'bg-[#eef5ec] text-[#263c28]',
    warning: 'bg-[#fbf1e5] text-[#4f3420]',
  }[tone];

  return (
    <aside
      className={cn('my-7 px-5 py-[18px] font-sans text-[15px] leading-[1.65]', toneClassName)}
    >
      <p className="!m-0 font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-current">
        {title}
      </p>
      <div className="mt-2 [&>:first-child]:mt-0 [&>:last-child]:mb-0">{children}</div>
    </aside>
  );
}

type FigureProps = {
  src: string;
  alt: string;
  caption?: string;
};

export function Figure({ src, alt, caption }: FigureProps) {
  return (
    <figure className="my-9">
      {/* MDX figures accept authored image dimensions and sources, so a native image is intentional. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="block h-auto w-full bg-[#f4f3ef] object-cover" />
      {caption ? (
        <figcaption className="mt-2.5 font-sans text-xs leading-relaxed text-[#77746d]">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

export function Highlight({ children }: React.PropsWithChildren) {
  return <mark className="bg-[#ffff77] px-1 text-inherit">{children}</mark>;
}

export function KeyboardKey({ children }: React.PropsWithChildren) {
  return (
    <kbd className="rounded border border-[#11110f]/20 bg-[#f6f5f2] px-1.5 py-0.5 font-mono text-[0.72em] shadow-[0_1px_0_rgba(0,0,0,0.12)]">
      {children}
    </kbd>
  );
}

export function Disclosure({ children, summary }: React.PropsWithChildren<{ summary: string }>) {
  return (
    <details className="group my-7 border-y border-[#11110f]/10 py-4 font-sans text-[15px] leading-[1.6]">
      <summary className="cursor-pointer font-semibold text-[#11110f] marker:text-[#77746d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#11110f]">
        {summary}
      </summary>
      <div className="[&>:first-child]:mt-3 [&>:last-child]:mb-0">{children}</div>
    </details>
  );
}

export function getMdxComponents(): MDXComponents {
  return {
    Callout,
    Disclosure,
    Figure,
    Highlight,
    KeyboardKey,
    h1: (props) => (
      <h2
        data-mdx-heading-level="1"
        className="mb-0 mt-12 font-display text-[36px] font-normal italic leading-[1.12] tracking-[-0.01em] text-[#11110f]"
        {...props}
      />
    ),
    h2: (props) => (
      <h2
        className="mb-0 mt-11 scroll-mt-24 font-display text-[28px] font-normal italic leading-[1.2] text-[#11110f]"
        {...props}
      />
    ),
    h3: (props) => (
      <h3
        className="mb-0 mt-9 scroll-mt-24 font-sans text-xl font-semibold leading-[1.3] text-[#11110f]"
        {...props}
      />
    ),
    h4: (props) => (
      <h4
        className="mb-0 mt-8 scroll-mt-24 font-sans text-lg font-semibold leading-[1.35] text-[#11110f]"
        {...props}
      />
    ),
    h5: (props) => (
      <h5
        className="mb-0 mt-7 scroll-mt-24 font-sans text-base font-semibold leading-[1.4] text-[#11110f]"
        {...props}
      />
    ),
    h6: (props) => (
      <h6
        className="mb-0 mt-7 scroll-mt-24 font-sans text-xs font-semibold uppercase leading-[1.4] tracking-[0.12em] text-[#66645f]"
        {...props}
      />
    ),
    p: (props) => <p className="mb-0 mt-[22px] text-pretty" {...props} />,
    a: ({ href = '', children, ...props }) => {
      const className =
        'rounded-sm text-[#11110f] underline decoration-[#11110f]/45 underline-offset-[3px] hover:decoration-[#11110f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#11110f]';
      const external = /^https?:\/\//.test(href);

      if (external) {
        return (
          <a href={href} className={className} target="_blank" rel="noreferrer" {...props}>
            {children}
            <span className="font-sans text-[0.75em]" aria-hidden>
              {' '}
              ↗
            </span>
          </a>
        );
      }

      return (
        <Link href={href} className={className} {...props}>
          {children}
        </Link>
      );
    },
    strong: (props) => <strong className="font-semibold text-[#11110f]" {...props} />,
    em: (props) => <em className="italic" {...props} />,
    del: (props) => <del className="decoration-[#8f4b45] decoration-2" {...props} />,
    blockquote: (props) => (
      <blockquote
        className="my-8 border-l border-[#c9c5bc] pl-5 font-display text-[22px] italic leading-[1.5] text-[#4c4a45] [&>p]:mt-0"
        {...props}
      />
    ),
    ul: (props) => (
      <ul
        className="mb-0 mt-[22px] list-disc space-y-2 pl-6 marker:text-[#77746d] [&.contains-task-list]:list-none [&.contains-task-list]:pl-0"
        {...props}
      />
    ),
    ol: (props) => (
      <ol
        className="mb-0 mt-[22px] list-decimal space-y-2 pl-6 marker:font-sans marker:text-sm marker:text-[#77746d]"
        {...props}
      />
    ),
    li: (props) => (
      <li
        className="pl-1 [&.task-list-item]:list-none [&.task-list-item]:pl-0 [&>ol]:mt-2 [&>p]:mt-0 [&>ul]:mt-2"
        {...props}
      />
    ),
    hr: (props) => <hr className="my-11 border-0 border-t border-[#11110f]/10" {...props} />,
    code: ({ className, ...props }) => (
      <code
        className={cn(
          className,
          className?.startsWith('language-')
            ? 'font-mono text-[13px] leading-[1.7] text-[#33322f]'
            : 'break-words rounded-[3px] bg-[#efeee9] px-1.5 py-0.5 font-mono text-[0.78em] text-[#33322f] [overflow-wrap:anywhere]',
        )}
        {...props}
      />
    ),
    pre: (props) => (
      <pre
        className="my-7 overflow-x-auto bg-[#f6f5f2] px-5 py-[18px] font-mono text-[13px] leading-[1.7] text-[#33322f] [tab-size:2]"
        {...props}
      />
    ),
    table: (props) => (
      <div className="my-8 overflow-x-auto">
        <table
          className="w-full min-w-[520px] border-collapse font-sans text-sm leading-[1.5]"
          {...props}
        />
      </div>
    ),
    thead: (props) => <thead className="border-b border-[#11110f]/25 text-left" {...props} />,
    tbody: (props) => <tbody className="divide-y divide-[#11110f]/10" {...props} />,
    th: (props) => <th className="px-3 py-2.5 font-semibold first:pl-0 last:pr-0" {...props} />,
    td: (props) => <td className="px-3 py-2.5 align-top first:pl-0 last:pr-0" {...props} />,
    input: (props) => (
      <input
        aria-label={props.checked ? 'Completed task' : 'Incomplete task'}
        className="mr-2 size-3.5 accent-[#11110f] disabled:cursor-default disabled:opacity-100"
        {...props}
      />
    ),
    details: (props) => (
      <details
        className="group my-7 border-y border-[#11110f]/10 py-4 font-sans text-[15px] leading-[1.6]"
        {...props}
      />
    ),
    summary: (props) => (
      <summary
        className="cursor-pointer font-semibold text-[#11110f] marker:text-[#77746d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#11110f]"
        {...props}
      />
    ),
    kbd: (props) => (
      <kbd
        className="rounded border border-[#11110f]/20 bg-[#f6f5f2] px-1.5 py-0.5 font-mono text-[0.72em] shadow-[0_1px_0_rgba(0,0,0,0.12)]"
        {...props}
      />
    ),
    mark: (props) => <mark className="bg-[#ffff77] px-1 text-inherit" {...props} />,
  };
}
