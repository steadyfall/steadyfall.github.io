import Blogs from '@/components/Blogs';
import Footer from '@/components/Footer';
import { getAllBlogs } from '@/lib/blogs';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Notes by Himank Dave on things he broke, fixed, built, or read.',
  alternates: { canonical: '/blogs/' },
  openGraph: {
    title: 'Blog',
    description: 'Notes by Himank Dave on things he broke, fixed, built, or read.',
    type: 'website',
    url: '/blogs/',
  },
  twitter: {
    title: 'Blog',
    description: 'Notes by Himank Dave on things he broke, fixed, built, or read.',
    card: 'summary_large_image',
  },
};

export default function BlogsPage() {
  return (
    <>
      <Blogs blogs={getAllBlogs()} />
      <Footer />
    </>
  );
}
