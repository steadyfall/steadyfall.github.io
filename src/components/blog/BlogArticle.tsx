import Link from 'next/link';

import Footer from '@/components/Footer';
import { formatBlogDate, type BlogPost } from '@/lib/blogs';

interface BlogArticleProps {
  post: BlogPost;
  older: BlogPost | null;
  newer: BlogPost | null;
  children: React.ReactNode;
}

export default function BlogArticle({ post, older, newer, children }: BlogArticleProps) {
  return (
    <article className="mx-auto max-w-[620px] pt-1">
      <Link
        href="/blogs"
        className="rounded-sm font-mono text-xs text-[#88857e] no-underline hover:text-[#11110f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#11110f]"
      >
        ← All posts
      </Link>

      <header>
        <h1 className="mb-0 mt-7 text-balance font-display text-[38px] font-normal italic leading-[1.1] tracking-[-0.01em] md:text-[44px]">
          {post.title}
        </h1>
        <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs text-[#88857e]">
          <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
          <span aria-hidden>·</span>
          <span>{post.readingTime} min read</span>
        </div>
      </header>

      <div className="mt-9 font-reader text-[18px] leading-[1.75] text-[#24231f]">{children}</div>

      {older || newer ? (
        <nav
          aria-label="Adjacent blog posts"
          className="mt-14 flex justify-between gap-6 border-t border-[#11110f]/10 pt-5 font-sans text-sm"
        >
          {older ? (
            <Link
              href={`/blogs/${older.slug}`}
              className="max-w-[45%] text-[#55544f] no-underline hover:text-[#11110f]"
            >
              <span className="mb-1.5 block font-mono text-[11px] text-[#88857e]">← Older</span>
              {older.title}
            </Link>
          ) : (
            <span />
          )}
          {newer ? (
            <Link
              href={`/blogs/${newer.slug}`}
              className="max-w-[45%] text-right text-[#55544f] no-underline hover:text-[#11110f]"
            >
              <span className="mb-1.5 block font-mono text-[11px] text-[#88857e]">Newer →</span>
              {newer.title}
            </Link>
          ) : null}
        </nav>
      ) : null}

      <Footer />
    </article>
  );
}
