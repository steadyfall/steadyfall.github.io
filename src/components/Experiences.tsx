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
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-section mb-4">Experience</h2>
            {experiences && experiences.length > 0 ? (
            <div className="space-y-6">
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