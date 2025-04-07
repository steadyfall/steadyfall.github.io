'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useCallback } from 'react';

export function useSmoothScroll(offset = 0) {
  const router = useRouter();
  const pathname = usePathname();

  const scrollToElement = useCallback(
    (hash: string) => {
      const targetElement = document.getElementById(hash.substring(1));
      if (targetElement) {
        const yPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: yPosition, behavior: 'smooth' });
      }
    },
    [offset],
  );

  useEffect(() => {
    if (window.location.hash) {
      scrollToElement(window.location.hash);
    }
  }, [pathname, scrollToElement]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href) return;

      const url = new URL(href, window.location.origin);

      if (url.pathname === pathname && url.hash) {
        e.preventDefault();
        scrollToElement(url.hash);
        window.history.pushState(null, '', url.hash);
      } else if (url.pathname !== pathname && url.hash) {
        e.preventDefault();
        router.push(href);
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [pathname, router, scrollToElement]);
}
