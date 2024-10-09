import { ArrowUpRight } from "lucide-react"

const About = () => {
  return (
    <section id="about" className="mb-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-section mb-4">About</h2>
        <p className="text-gray-700 dark:text-gray-300">
            I am a junior at the University of Waterloo, pursuing a major in Computational Mathematics.
            With a passion for technology and innovation, I am constantly exploring new
            areas in software development and artificial intelligence. 
            I am eager to work in areas that leverage the combined potential of machine learning and
            software development, regardless of traditional boundaries. <br></br>
            Outside of academics and professional career, I enjoy contributing to open-source projects, working on side projects, participating in hackathons and playing 
            table tennis, football, cricket and badminton. I also like to travel & explore new places, cuisines & restaurants.<br></br>
            You can find me re-watching any one of these TV series:
              Suits,
              The Office,
              Brooklyn 9-9,
              How I Met Your Mother,
              The Big Bang Theory,
              South Park,
              Impractical Jokers.
            <br></br>
            For those of you curious, the favicon is a 4-hypercube graph. Check the <a href="/icon.ico" target="_blank" className="inline-flex items-center hover:underline hover:underline-offset-2 text-orange-500">
              image <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5"/>
            </a> out and learn <a href="https://en.wikipedia.org/wiki/Hypercube_graph" target="_blank" className="inline-flex items-center hover:underline hover:underline-offset-2 text-blue-violet-500">
              more <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5"/>
            </a>.
        </p>
    </section>
  )
}

export default About
