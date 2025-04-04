'use client';

import { useSmoothScroll } from '@/hooks/useSmoothScroll';

export function SmoothScrollProvider({ children, offset = 0 }: { children: React.ReactNode, offset?: number }) {
  useSmoothScroll(offset);
  return <>{children}</>;
}
