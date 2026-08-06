import { notFound } from 'next/navigation';
import { compileMDX } from 'next-mdx-remote/rsc';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

import BlogArticle from '@/components/blog/BlogArticle';
import { getMdxComponents } from '@/components/blog/MdxComponents';
import { getAdjacentBlogs, getAllBlogs, getBlogBySlug, type BlogFrontmatter } from '@/lib/blogs';

import type { Metadata } from 'next';

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllBlogs().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const result = getBlogBySlug(slug);
  if (!result) return {};

  return {
    title: result.post.title,
    description: result.post.description,
    alternates: { canonical: `/blogs/${slug}/` },
    openGraph: {
      title: result.post.title,
      description: result.post.description,
      type: 'article',
      url: `/blogs/${slug}/`,
      publishedTime: result.post.date,
      modifiedTime: result.post.updated,
      tags: result.post.tags,
    },
    twitter: {
      title: result.post.title,
      description: result.post.description,
      card: 'summary_large_image',
    },
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const result = getBlogBySlug(slug);
  if (!result) notFound();

  const { content } = await compileMDX<BlogFrontmatter>({
    source: result.source,
    components: getMdxComponents(),
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeSlug],
      },
    },
  });
  const adjacent = getAdjacentBlogs(slug);

  return (
    <BlogArticle post={result.post} older={adjacent.older} newer={adjacent.newer}>
      {content}
    </BlogArticle>
  );
}
