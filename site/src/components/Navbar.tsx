import useReadingProgress from '@/hooks/useReadingProgress'
import ThemeSwitch from './ThemeSwitch';

const Navbar = () => {
    const completion = useReadingProgress();

    return (
        <div className="sticky top-0 z-50 py-6 backdrop-blur-sm">
            <nav className="flex items-center justify-between">
                <ul className="flex gap-4 sm:gap-8">
                    <li><a href="#about" className="hover:underline hover:underline-offset-4">home</a></li>
                    <li><a href="#experience" className="hover:underline hover:underline-offset-4">experience</a></li>
                    <li><a href="#education" className="hover:underline hover:underline-offset-4">education</a></li>
                    <li><a href="#projects" className="hover:underline hover:underline-offset-4">projects</a></li>
                </ul>
                <div className="flex gap-0 sm:gap-4">
                    <ThemeSwitch />
                </div>
            </nav>
        </div>
    )
}

export default Navbar