import { Moon, Sun, Github, Linkedin, Mail, StickyNote } from 'lucide-react'
import Image from 'next/image'

export function Header() {
    const githubLink: string = "https://github.com/steadyfall"
    const linkedinLink: string = "https://www.linkedin.com/in/himank-dave/"
    return (
        <header className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
            <img
                src="/images/topImage.jpg"
                alt="Profile"
                width={200}
                height={200}
                className="rounded-full w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 object-cover"
            />
            </div>
            <div className="flex-grow text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mr-4">Himank Dave</h1>
                {/* <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full bg-gray-300 dark:bg-gray-700"
                aria-label="Toggle dark mode"
                >
                {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
                </button> */}
            </div>
            <div className="flex justify-center md:justify-start mt-4 space-x-4">
                <a href={githubLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="w-6 h-6 md:w-7 md:h-7" />
                </a>
                <a href={linkedinLink} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="w-6 h-6 md:w-7 md:h-7" />
                </a>
                <a href="mailto:hddave@uwaterloo.ca" aria-label="Email">
                <Mail className="w-6 h-6 md:w-7 md:h-7" />
                </a>
                <a href="/resume.pdf" aria-label="Resume">
                <StickyNote className="w-6 h-6 md:w-7 md:h-7" />
                </a>
            </div>
            <div className="mt-4 text-sm md:text-base lg:text-lg">
                <p>he/him/they/them</p>
                <p>3A Computational Mathematics @ UWaterloo</p>
                <p>hddave [at] uwaterloo.ca</p>
            </div>
            </div>
        </div>
        <nav className="mt-8">
            <ul className="flex justify-center md:justify-start space-x-6 text-sm md:text-base">
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#experience" className="hover:underline">Experience</a></li>
            <li><a href="#projects" className="hover:underline">Projects</a></li>
            {/* <li><a href="#misc" className="hover:underline">Misc.</a></li> */}
            </ul>
        </nav>
        </header>
  )
}
