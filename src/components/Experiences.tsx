'use client'

import { useState, useEffect } from 'react'
import { ExperienceTileProps, ExperienceTile } from './Tiles/ExperienceTile'
import BlurFade, { BLUR_FADE_DELAY } from '@/components/ui/BlurFade';

interface ExperiencesProps {
    arr: ExperienceTileProps[];
}

export function Experiences({ arr }: ExperiencesProps) {
    const [experiences, setExperiences] = useState(arr)
    return (
        <section id="experience" className="mb-12">
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-section mb-4">Experience</h2>
            </BlurFade>
            {experiences && experiences.length > 0 ? (
            <div className="space-y-6">
                {experiences.map((experience, index) => (
                    <BlurFade
                    key={index}
                    delay={BLUR_FADE_DELAY * 6 + index * 0.05}
                    >
                        <ExperienceTile key={index} {...experience} />
                    </BlurFade>
                ))}
            </div>
            ) : (
            <p>No experiences to display.</p>
            )}
        </section>
    )
}