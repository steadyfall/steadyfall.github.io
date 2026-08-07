import { groupBlogsByYear, type BlogPost } from '@/lib/blogs';

import BlogTile from './Tiles/BlogTile';

export default function Blogs({ blogs }: { blogs: BlogPost[] }) {
  const groupedBlogs = Object.entries(groupBlogsByYear(blogs)).sort(
    ([yearA], [yearB]) => Number(yearB) - Number(yearA),
  );

  return (
    <>
      <section className="mt-6">
        <h1 className="m-0 font-display text-5xl font-normal italic leading-[1.05] tracking-[-0.01em] md:text-[54px]">
          Blog
        </h1>
        <p className="mt-[18px] max-w-[560px] text-pretty text-base leading-[1.6] text-[#55544f]">
          Notes on things I broke, fixed, or read. Infrequent by design.
        </p>
      </section>

      <div className="mt-[52px] md:mt-14">
        {groupedBlogs.map(([year, posts], index) => (
          <section
            key={year}
            aria-labelledby={`blogs-${year}`}
            className={
              index === 0
                ? 'grid gap-3 md:grid-cols-[200px_minmax(0,1fr)] md:gap-0'
                : 'mt-8 grid gap-3 md:grid-cols-[200px_minmax(0,1fr)] md:gap-0'
            }
          >
            <h2
              id={`blogs-${year}`}
              className="m-0 font-display text-[21px] font-normal italic leading-tight"
            >
              {year}
            </h2>
            <div className="flex flex-col">
              {posts.map((blog) => (
                <BlogTile key={blog.slug} blog={blog} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
