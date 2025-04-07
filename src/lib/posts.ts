export type PostMetadata = {
  title?: string;
  description?: string;
  date?: string;
  tags?: string[];
  slug: string;
};

export type PostData = {
  metadata: PostMetadata;
  content: string;
};

export function groupPostsByYear(posts: PostMetadata[]): { year: number; posts: PostMetadata[] }[] {
  // Filter out posts with no date to avoid runtime errors
  // Sort posts by date in descending order
  // Group posts by year
  // Sort by year in descending order

  posts.sort(
    (a, b) => (new Date(b.date ?? '').getTime() || 0) - (new Date(a.date ?? '').getTime() || 0),
  );

  const groupedByYear: { [key: number]: PostMetadata[] } = posts.reduce(
    (acc, post) => {
      const year = new Date(post.date ?? '').getFullYear() || 1;
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(post);
      return acc;
    },
    {} as { [key: number]: PostMetadata[] },
  );

  const postsByYear = Object.keys(groupedByYear)
    .map((year) => ({
      year: parseInt(year),
      posts: groupedByYear[parseInt(year)],
    }))
    .sort((a, b) => b.year - a.year);

  return postsByYear;
}
