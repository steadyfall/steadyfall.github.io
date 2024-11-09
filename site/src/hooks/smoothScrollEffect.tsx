import { useEffect } from 'react';

export default function SmoothScroll() {
  useEffect(() => {
    const handleAnchorClick = (event: { target: any; preventDefault: () => void; }) => {
      const target = event.target;

      // Check if the clicked element is an anchor link with a hash href
      if (
        target.tagName === 'A' &&
        target.getAttribute('href') &&
        target.getAttribute('href').startsWith('#')
      ) {
        event.preventDefault();
        const element = document.querySelector(target.getAttribute('href'));

        if (element) {
          const topOffset = element.getBoundingClientRect().top + window.pageYOffset - 100;

          window.scrollTo({
            top: topOffset,
            behavior: 'smooth',
          });
        }
      }
    };

    // Attach event listener
    document.addEventListener('click', handleAnchorClick);

    // Cleanup event listener
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return null;
}
