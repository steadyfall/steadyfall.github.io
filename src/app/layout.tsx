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

export const metadata: Metadata = {
  title: {
    default: "Himank Dave",
    template: "%s | Himank Dave"
  },
  description: "Personal website of Himank Dave.",
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
