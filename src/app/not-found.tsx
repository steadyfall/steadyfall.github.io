import Link from 'next/link';

import BackButton from '@/components/ui/BackButton';
import { cn } from '@/lib/utils';

export default function NotFound() {
  return (
    <main className="z-1 container mx-auto mt-[28vh] flex flex-col items-center justify-center">
      <h1
        className={cn(
          'font-typewriter text-6xl font-bold md:text-7xl lg:text-8xl',
          'bg-gradient-to-r from-gray-500 to-gray-700 bg-clip-text text-transparent dark:from-gray-500 dark:to-gray-300',
        )}
      >
        404
      </h1>
      <div className="mt-4 text-center">
        The page you&apos;re looking for, is either not there or has been moved.
      </div>
      <ul className="mt-4 flex gap-4 sm:gap-8">
        <li>{<BackButton>go back</BackButton>}</li>
        <li>|</li>
        <li>
          <Link
            href="/"
            className="text-slate-600 hover:text-black hover:underline hover:underline-offset-4 dark:text-slate-300 dark:hover:text-white"
          >
            home
          </Link>
        </li>
      </ul>
    </main>
  );
}
