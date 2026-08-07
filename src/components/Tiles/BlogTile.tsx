import Link from 'next/link';

import { formatBlogMonth, type BlogPost } from '@/lib/blogs';

export default function BlogTile({ blog }: { blog: BlogPost }) {
  return (
    <article className="flex items-baseline justify-between gap-4 pb-3.5 pt-1 md:pb-7 md:pt-0 last:md:pb-0">
      <h3 className="m-0 min-w-0 text-[15px] font-medium leading-[1.45]">
        <Link
          href={`/blogs/${blog.slug}`}
          className="rounded-sm text-[#11110f] no-underline hover:underline hover:underline-offset-[3px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#11110f]"
        >
          {blog.title}
        </Link>
      </h3>
      <time
        dateTime={blog.date}
        className="flex-none whitespace-nowrap font-mono text-xs text-[#77746d]"
      >
        {formatBlogMonth(blog.date)}
      </time>
    </article>
  );
}
