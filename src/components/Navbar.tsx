'use client'

import { cn } from '@/lib/utils';
import ThemeSwitch from './ThemeSwitch';
import Link from 'next/link';

const Navbar = () => {
    // const completion = useReadingProgress();

    return (
        <header className="sticky top-0 z-50 py-6 backdrop-blur-xl">
            <nav className={cn(
                "flex items-center justify-between",
                "max-w-full mx-auto px-8 sm:px-16 md:px-24 lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl"
            )}>
                <ul className="flex gap-4 sm:gap-8">
                    <li><Link href="/" className="hover:underline hover:underline-offset-4">home</Link></li>
                    <li><Link href="/#experience" className="hover:underline hover:underline-offset-4">experience</Link></li>
                    <li><Link href="/#projects" className="hover:underline hover:underline-offset-4">projects</Link></li>
                    <li><Link href="/posts" className="hover:underline hover:underline-offset-4">blog</Link></li>
                </ul>
                <div className="flex gap-0 sm:gap-4">
                    <ThemeSwitch />
                </div>
            </nav>
        </header>
    )
}

export default Navbar