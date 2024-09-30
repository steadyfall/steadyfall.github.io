import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import "./globals.css";

const inter = Inter({ subsets: ['latin'] })

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
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body>
        <div className={`min-h-screen`}>
            <Providers> {children} </Providers>
        </div>
      </body>
    </html>
  );
}
