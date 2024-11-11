'use client'

import ThemeSwitch from './ThemeSwitch';

const Navbar = () => {
    // const completion = useReadingProgress();

    return (
        <header className="sticky top-0 z-50 py-6 backdrop-blur-xl">
            <nav className="flex items-center justify-between mx-auto max-w-full px-4 sm:px-12 md:px-16 lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
                <ul className="flex gap-4 sm:gap-8">
                    <li><a href="/" className="hover:underline hover:underline-offset-4">home</a></li>
                    <li><a href="/#experience" className="hover:underline hover:underline-offset-4">experience</a></li>
                    {/* <li><a href="#education" className="hover:underline hover:underline-offset-4">education</a></li> */}
                    <li><a href="/#projects" className="hover:underline hover:underline-offset-4">projects</a></li>
                </ul>
                <div className="flex gap-0 sm:gap-4">
                    <ThemeSwitch />
                </div>
            </nav>
        </header>
    )
}

export default Navbar