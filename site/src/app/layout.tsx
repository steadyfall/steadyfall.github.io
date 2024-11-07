import type { Metadata } from "next";
import { Inter, Space_Mono } from 'next/font/google'
import { Providers } from './providers'
import "./globals.css";

const inter = Inter({ subsets: ['latin'] })
const spaceMono = Space_Mono({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-spaceMono'
})

export const detailsForMetadata = {
  baseUrl: "https://steadyfall.github.io/",
  title: "Himank Dave",
  name: "Himank Dave",
  ogImage: "/icon.ico",
  description:
    "A sleek, minimalistic and dynamic personal website built with React, TailwindCSS, Next.js and Framer Motion."
};

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
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: detailsForMetadata.name,
    card: "summary_large_image",
  },
  icons: {
    icon: "/icon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // ${inter.className} 
  return (
    <html lang="en" className={`${inter.className} ${spaceMono.variable}`} suppressHydrationWarning>
      <body>
        <div className={`min-h-screen`}>
            <Providers> {children} </Providers>
        </div>
      </body>
    </html>
  );
}
