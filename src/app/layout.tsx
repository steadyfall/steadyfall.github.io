import { Instrument_Sans, Space_Mono } from 'next/font/google';

import { SmoothScrollProvider } from '@/components/SmoothScrollProvider';
import { detailsForMetadata } from '@/data/resume';
import { cn } from '@/lib/utils';

import { Providers } from './providers';

import type { Metadata } from 'next';

import './globals.css';

const instrumentsans = Instrument_Sans({ subsets: ['latin'] });
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // ${instrumentsans.className}
  return (
    <html
      lang="en"
      className={`${instrumentsans.className} ${spaceMono.variable}`}
      suppressHydrationWarning
    >
      <body
        className={cn(
          'bg-[#ff5e33] text-neutral-200 dark:bg-[#1a0089] dark:text-gray-200',
          'transition-colors duration-300',
        )}
        suppressHydrationWarning
      >
        <SmoothScrollProvider offset={90}>
          <div className="flex min-h-screen flex-col">
            <Providers>{children}</Providers>
          </div>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
