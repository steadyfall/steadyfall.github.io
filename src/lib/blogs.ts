import fs from 'node:fs';
import path from 'node:path';

import matter from 'gray-matter';

const BLOGS_DIRECTORY = path.join(process.cwd(), 'src/content/blogs');
const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

export interface BlogFrontmatter {
  title: string;
  description: string;
  date: string;
  updated?: string;
  tags?: string[];
  draft?: boolean;
}

export interface BlogPost extends BlogFrontmatter {
  slug: string;
  readingTime: number;
}

function assertString(value: unknown, field: string, fileName: string): asserts value is string {
  if (typeof value !== 'string' || value.trim().length === 0) {
    throw new Error(`Blog ${fileName} must include a non-empty string \"${field}\".`);
  }
}

function assertDate(value: unknown, field: string, fileName: string): asserts value is string {
  assertString(value, field, fileName);

  const parsed = new Date(`${value}T00:00:00Z`);
  if (
    !DATE_PATTERN.test(value) ||
    Number.isNaN(parsed.getTime()) ||
    parsed.toISOString().slice(0, 10) !== value
  ) {
    throw new Error(`Blog ${fileName} must use a real YYYY-MM-DD date for \"${field}\".`);
  }
}

function parseFrontmatter(fileName: string, data: Record<string, unknown>): BlogFrontmatter {
  assertString(data.title, 'title', fileName);
  assertString(data.description, 'description', fileName);
  assertDate(data.date, 'date', fileName);

  if (data.updated !== undefined) {
    assertDate(data.updated, 'updated', fileName);
  }

  if (
    data.tags !== undefined &&
    (!Array.isArray(data.tags) ||
      data.tags.some((tag) => typeof tag !== 'string' || tag.trim().length === 0))
  ) {
    throw new Error(`Blog ${fileName} must use non-empty strings for \"tags\".`);
  }

  if (data.draft !== undefined && typeof data.draft !== 'boolean') {
    throw new Error(`Blog ${fileName} must use a boolean for \"draft\".`);
  }

  return {
    title: data.title,
    description: data.description,
    date: data.date,
    updated: data.updated as string | undefined,
    tags: data.tags as string[] | undefined,
    draft: data.draft === true,
  };
}

function calculateReadingTime(content: string) {
  const words = content
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  return Math.max(1, Math.ceil(words / 220));
}

function getBlogFileNames() {
  if (!fs.existsSync(BLOGS_DIRECTORY)) return [];
  return fs.readdirSync(BLOGS_DIRECTORY).filter((fileName) => fileName.endsWith('.mdx'));
}

export function getAllBlogs(): BlogPost[] {
  return getBlogFileNames()
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      if (!SLUG_PATTERN.test(slug)) {
        throw new Error(`Blog file \"${fileName}\" must use a lowercase kebab-case name.`);
      }

      const source = fs.readFileSync(path.join(BLOGS_DIRECTORY, fileName), 'utf8');
      const { data, content } = matter(source);

      return {
        slug,
        ...parseFrontmatter(fileName, data),
        readingTime: calculateReadingTime(content),
      };
    })
    .filter((post) => !post.draft)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getBlogBySlug(slug: string) {
  if (!SLUG_PATTERN.test(slug)) return null;

  const post = getAllBlogs().find((candidate) => candidate.slug === slug);
  if (!post) return null;

  const source = fs.readFileSync(path.join(BLOGS_DIRECTORY, `${slug}.mdx`), 'utf8');
  return { post, source };
}

export function getAdjacentBlogs(slug: string) {
  const blogs = getAllBlogs();
  const index = blogs.findIndex((post) => post.slug === slug);

  if (index === -1) return { older: null, newer: null };

  return {
    newer: index > 0 ? blogs[index - 1] : null,
    older: index < blogs.length - 1 ? blogs[index + 1] : null,
  };
}

export function groupBlogsByYear(blogs: BlogPost[]) {
  return blogs.reduce<Record<string, BlogPost[]>>((groups, blog) => {
    const year = new Date(`${blog.date}T00:00:00Z`).getUTCFullYear().toString();
    groups[year] = [...(groups[year] ?? []), blog];
    return groups;
  }, {});
}

export function formatBlogMonth(date: string) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${date}T00:00:00Z`));
}

export function formatBlogDate(date: string) {
  return new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${date}T00:00:00Z`));
}
