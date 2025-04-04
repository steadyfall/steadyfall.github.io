import BlurFade, { BLUR_FADE_DELAY } from '@/components/ui/BlurFade';
import Highlight from '@/components/ui/Highlighter';
import { cn } from '@/lib/utils';
import LinkWithArrow from '@/components/ui/LinkWithArrow';

const About = () => {
  return (
    <section id="about" className="mb-12">
      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <h2 className={cn(
          'text-2xl md:text-3xl lg:text-4xl font-section mb-4',
          'inline-block text-transparent bg-clip-text bg-gradient-to-r dark:from-gray-300 dark:to-gray-100 from-[#434343] to-[#000000]'
        )}>About</h2>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <div className="text-gray-700 dark:text-gray-300">
          <p className="mb-2">
            I am a <Highlight text="software developer" color="red"/> based in <Highlight text="Toronto" color="red"/> and currently a <Highlight text="junior" /> pursuing a 
            <Highlight text="Computational Mathematics" /> major at the <Highlight text="University of Waterloo" />.
            I am passionate about tech and innovation, always exploring the <span className="underline underline-offset-4">
              intersection of software
              development and AI.
            </span>
          </p>
          {/* <p className="mb-2">
              Outside of academics and professional career, I enjoy contributing to open-source projects, working on side projects, participating in hackathons and playing
              table tennis, football, cricket and badminton. I also like to travel & explore new places, cuisines & restaurants.
            </p> */}
          {/* <div className="inline-flex flex-wrap gap-x-0.5 gap-y-1 mb-2 ">
              <span>You can find me</span> <Highlight text="re-watching" color="pink"/> <span>any one of these TV series:</span>
              <Highlight text="Silicon Valley" color="pink"/>,
              <Highlight text="South Park" color="pink"/>,
              <Highlight text="The Office" color="pink"/>,
              <Highlight text="The Big Bang Theory" color="pink"/>,
              <Highlight text="Suits" color="pink"/>,
              <Highlight text="Brooklyn 9-9" color="pink"/>,
              <Highlight text="How I Met Your Mother" color="pink"/>,
              <Highlight text="Impractical Jokers" color="pink"/>.
            </div> */}
          <p className="mb-2">
            You can find me <Highlight text="re-watching" color="pink"/> any one of these series:&nbsp;
            <Highlight text="Breaking Bad" color="pink"/>,&nbsp;
            <Highlight text="Silicon Valley" color="pink"/>,&nbsp;
            <Highlight text="South Park" color="pink"/> and <Highlight text="The Office" color="pink"/>.
          </p>
          <p className="mb-2">
              For those of you curious, the favicon is a <Highlight text="4-hypercube graph" color="cyan" /> made via Python, using NetworkX and Matplotlib.
              Check the <LinkWithArrow
              href="/icon.ico" target="_blank"
              className="mr-1 hover:underline hover:underline-offset-2 text-orange-500"
            >
                image
            </LinkWithArrow>
              out, learn <LinkWithArrow
              href="https://en.wikipedia.org/wiki/Hypercube_graph" target="_blank"
              className="mr-1 hover:underline hover:underline-offset-2 text-blue-violet-500"
            >
                more
            </LinkWithArrow> about hypercube graphs & here is the <LinkWithArrow
              href="https://github.com/steadyfall/steadyfall.github.io/blob/main/hypercube/generate.py" target="_blank"
              className="mr-1 hover:underline hover:underline-offset-2 dark:text-firefly-500 text-firefly-600"
            >
                code
            </LinkWithArrow> to generate it yourself.
          </p>
        </div>
      </BlurFade>
    </section>
  );
};

export default About;
