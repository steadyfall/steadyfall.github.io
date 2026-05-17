import Link from 'next/link';

import BackButton from '@/components/ui/BackButton';

export default function NotFound() {
  return (
    <main className="z-1 container mx-auto mt-[28vh] flex flex-col items-center justify-center">
      <h1 className="font-typewriter text-6xl font-bold text-chinese-black-950 dark:text-selago-100 md:text-7xl lg:text-8xl">
        404
      </h1>
      <div className="mt-4 text-center">
        The page you&apos;re looking for, is either not there or has been moved.
      </div>
      <ul className="mt-4 flex gap-4 sm:gap-8">
        <li>
          {
            <BackButton className="text-chinese-black-50 hover:text-chinese-black-950 hover:underline hover:underline-offset-4 dark:text-selago-300 dark:hover:text-white">
              go back
            </BackButton>
          }
        </li>
        <li>|</li>
        <li>
          <Link
            href="/"
            className="text-chinese-black-50 hover:text-chinese-black-950 hover:underline hover:underline-offset-4 dark:text-selago-300 dark:hover:text-white"
          >
            home
          </Link>
        </li>
      </ul>
    </main>
  );
}
