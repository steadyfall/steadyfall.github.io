import type { Metadata } from 'next';
import { Inter, Space_Mono } from 'next/font/google';
import { Providers } from './providers';
import './globals.css';
import { detailsForMetadata } from '@/data/resume';
import { cn } from '@/lib/utils';
import { SmoothScrollProvider } from '@/components/SmoothScrollProvider';

const inter = Inter({ subsets: ['latin'] });
const spaceMono = Space_Mono({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-spaceMono',
});

export const metadata: Metadata = {
  metadataBase: new URL(detailsForMetadata.baseUrl),
  title: {
    default: detailsForMetadata.title,
    template: `%s | ${detailsForMetadata.title}`,
  },
  description: detailsForMetadata.description,
  openGraph: {
    images: detailsForMetadata.ogImage,
    title: detailsForMetadata.title,
    description: detailsForMetadata.description,
    url: detailsForMetadata.baseUrl,
    siteName: detailsForMetadata.name,
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: detailsForMetadata.name,
    card: 'summary_large_image',
  },
  icons: {
    icon: '/icon.ico',
  },
  verification: { google: 'Wwciyzq9ANfCqyfI9hjLic5BhSc30awKaJPxbWCm5mc' },
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  // ${inter.className} 
  return (
    <html lang="en" className={`${inter.className} ${spaceMono.variable}`} suppressHydrationWarning>
      <body className={
        cn(
          'bg-neutral-100 dark:bg-neutral-950 text-gray-800 dark:text-gray-200',
          'transition-colors duration-300'
        )} 
      suppressHydrationWarning
      >
        <SmoothScrollProvider offset={90}>
          <div className="flex flex-col min-h-screen">
            <Providers>
              {children}
            </Providers>
          </div>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
