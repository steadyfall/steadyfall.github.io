'use client';

import { ThemeProvider } from 'next-themes';

import DynamicBackground from '@/components/DynamicBackground';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <DynamicBackground />
      {children}
    </ThemeProvider>
  );
}
