"use client";

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import About from '@/components/About'
import { Experiences } from '@/components/Experiences'
import { Projects } from '@/components/Projects'
import { Education } from '@/components/Education'
import { Skills } from '@/components/Skills';
import Navbar from '@/components/Navbar';
import { personalDetails, experiencesArray, projectsArray, skillsArray } from '@/app/config';

import { useEffect } from 'react';

function SmoothScroll() {
  useEffect(() => {
    const handleAnchorClick = (event: { target: any; preventDefault: () => void; }) => {
      const target = event.target;

      // Check if the clicked element is an anchor link with a hash href
      if (
        target.tagName === 'A' &&
        target.getAttribute('href') &&
        target.getAttribute('href').startsWith('#')
      ) {
        event.preventDefault();
        const element = document.querySelector(target.getAttribute('href'));

        if (element) {
          const topOffset = element.getBoundingClientRect().top + window.pageYOffset - 100;

          window.scrollTo({
            top: topOffset,
            behavior: 'smooth',
          });
        }
      }
    };

    // Attach event listener
    document.addEventListener('click', handleAnchorClick);

    // Cleanup event listener
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return null;
}

export default function Portfolio() {
  return (
    <div className="transition-colors duration-300">
      <SmoothScroll />
      <Navbar />
      <div className="mx-auto max-w-full px-4 sm:px-12 md:px-16 lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
        <Header {...personalDetails} />
        <main className="container mx-auto py-8 z-1">
          <About />
          <Experiences arr={experiencesArray} />
          <Education />
          <Skills arr={skillsArray}/>
          <Projects arr={projectsArray} />
        </main>
        <Footer />
      </div>
    </div>
  )
}