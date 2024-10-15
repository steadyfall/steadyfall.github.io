import { ArrowUpRight } from 'lucide-react'
import ThemeSwitch from './ThemeSwitch'
import Image from 'next/image'

const Header = () => {
    const githubLink: string = "https://github.com/steadyfall"
    const linkedinLink: string = "https://www.linkedin.com/in/himank-dave/"
    return (
        <header className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
                    <img
                        src="/images/headshot.jpg"
                        alt="Profile"
                        width={200}
                        height={200}
                        className="rounded-lg size-36 md:size-48 lg:size-56 object-cover"
                    />
                </div>
                <div className="flex-grow text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mr-4">Himank Dave</h1>
                        <ThemeSwitch />
                    </div>
                    <div className="flex justify-center md:justify-start mt-4 space-x-4">
                        <a href={githubLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                        className="inline-flex items-center hover:underline hover:underline-offset-2 text-pink-500"
                        >
                        github <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5"/>
                        </a>
                        <a href={linkedinLink} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                        className="inline-flex items-center hover:underline hover:underline-offset-2 text-thunderbird-600"
                        >
                        linkedin <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5"/>
                        </a>
                        <a href="mailto:hddave@uwaterloo.ca" aria-label="Email"
                        className="inline-flex items-center hover:underline hover:underline-offset-2 text-azure-radiance-600" // text-orange-500"
                        >
                        email <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5"/>
                        </a>
                        <a href="/resume.pdf" target="_blank" aria-label="Resume"
                        className="inline-flex items-center hover:underline hover:underline-offset-2 text-neon-green-500 dark:text-neon-green-400"
                        >
                        resume <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5"/>
                        </a>
                    </div>
                    <div className="mt-4 text-sm md:text-base lg:text-lg">
                        <p>he/him/his</p>
                        <p>3A Computational Mathematics @ UWaterloo</p>
                        <p className="font-typewriter">hddave[at]uwaterloo.ca</p>
                    </div>
                </div>
            </div>
            <nav className="mt-8">
                <ul className="flex justify-center md:justify-start space-x-6 text-sm md:text-base">
                <li><a href="#about" className="hover:underline hover:underline-offset-4">About</a></li>
                <li><a href="#experience" className="hover:underline hover:underline-offset-4">Experience</a></li>
                <li><a href="#education" className="hover:underline hover:underline-offset-4">Education</a></li>
                <li><a href="#skills" className="hover:underline hover:underline-offset-4">Skills</a></li>
                <li><a href="#projects" className="hover:underline hover:underline-offset-4">Projects</a></li>
                </ul>
            </nav>
        </header>
  )
}

export default Header
