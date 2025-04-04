import BackButton from '@/components/ui/BackButton';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center container mx-auto mt-[28vh] z-1">
      <h1 className={
        cn(
          'font-typewriter text-6xl md:text-7xl lg:text-8xl font-bold',
          'text-transparent bg-clip-text bg-gradient-to-r dark:from-gray-500 dark:to-gray-300 from-gray-500 to-gray-700'
        )
      }>
            404
      </h1>
      <div className="mt-4 text-center">
            The page you&apos;re looking for, is either not there or has been moved.
      </div>
      <ul className="mt-4 flex gap-4 sm:gap-8">
        <li>{<BackButton>go back</BackButton>}</li>
        <li>|</li>
        <li><Link href="/" className="text-slate-600 dark:text-slate-300 hover:text-black dark:hover:text-white hover:underline hover:underline-offset-4">home</Link></li>
      </ul>
    </main>
  );
}


