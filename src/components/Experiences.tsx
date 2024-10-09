'use client'

import { useState, useEffect } from 'react'
import { ExperienceTileProps, ExperienceTile } from './Tiles/ExperienceTile'

interface ExperiencesProps {
    arr: ExperienceTileProps[];
}

export function Experiences({ arr }: ExperiencesProps) {
    const [experiences, setExperiences] = useState(arr)
    return (
        <section id="experience" className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Experience</h2>
            {experiences && experiences.length > 0 ? (
            <div className="relative space-y-6">
                <div 
                    className="z-1 absolute md:left-20 top-0 bottom-0 w-1 bg-pink-500 rounded-full"
                ></div>
                {experiences.map((experience, index) => (
                    <ExperienceTile key={index} {...experience} />
                ))}
            </div>
            ) : (
            <p>No experiences to display.</p>
            )}
        </section>
    )
}