import { ArrowUpRight } from "lucide-react"
import BlurFade, { BLUR_FADE_DELAY } from "@/components/ui/BlurFade";

function Highlight(text: string, color = "yellow") {
  var colorClassName: string = "bg-opacity-50 px-1 rounded ";
  if (color === "yellow") {
    colorClassName = colorClassName + "bg-[#ffff77]"
  }
  if (color === "cyan") {
    colorClassName = colorClassName + "bg-cyan-300 dark:bg-cyan-500/30"
  }
  if (color === "pink") {
    colorClassName = colorClassName + "bg-[#ff77e4]"
  }
  if (color === "slate-blue") {
    colorClassName = colorClassName + "bg-[#7777ff]"
  }
  if (color === "red") {
    colorClassName = colorClassName + "bg-[#ff7777]"
  }
  return (
    <span className={colorClassName}>{text}</span>
  )
}

const About = () => {
  return (
    <section id="about" className="mb-12">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-section mb-4">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <p className="text-gray-700 dark:text-gray-300">
              I am a {Highlight("junior")} at the {Highlight("University of Waterloo")}, pursuing a major in {Highlight("Computational Mathematics")}.
              With a {Highlight(`passion for technology and innovation`)}, I am constantly exploring new
              areas in {Highlight(`software development`)} and {Highlight(`artificial intelligence`)}.
              I am eager to work in areas that leverage the combined potential of {Highlight(`machine learning`)} and
              software development, regardless of traditional boundaries. <br></br>
              Outside of academics and professional career, I enjoy contributing to open-source projects, working on side projects, participating in hackathons and playing
              table tennis, football, cricket and badminton. I also like to travel & explore new places, cuisines & restaurants.<br></br>
              You can find me {Highlight(`re-watching`, "pink")} any one of these TV series:
                {Highlight(`Suits`, "pink")},
                {Highlight(`The Office`, "pink")},
                {Highlight(`Brooklyn 9-9`, "pink")},
                {Highlight(`How I Met Your Mother`, "pink")},
                {Highlight(`The Big Bang Theory`, "pink")},
                {Highlight(`South Park`, "pink")},
                {Highlight(`Impractical Jokers`, "pink")}.
              <br></br>
              For those of you curious, the favicon is a {Highlight("4-hypercube graph", "cyan")} made via Python, using NetworkX and Matplotlib.
              Check the <a
                href="/icon.ico" target="_blank"
                className="inline-flex items-center hover:underline hover:underline-offset-2 text-orange-500"
              >
                image <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5"/>
              </a>
              out and learn <a
                href="https://en.wikipedia.org/wiki/Hypercube_graph" target="_blank"
                className="inline-flex items-center hover:underline hover:underline-offset-2 text-blue-violet-500"
              >
                more <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5"/>
              </a>.
          </p>
        </BlurFade>
    </section>
  )
}

export default About
