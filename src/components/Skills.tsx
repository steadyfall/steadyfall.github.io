import { Badge } from '@/components/ui/Badge';
import { useState } from 'react';
import BlurFade, { BLUR_FADE_DELAY } from '@/components/ui/BlurFade';

interface SkillsProps {
    arr: string[];
}

export function Skills({ arr }: SkillsProps) {
    const [skills, setSkills] = useState(arr)
    return (
        <section id="skills" className="mb-12">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-section font-bold mb-4">Skills</h2>
            </BlurFade>
            {skills && skills.length > 0 ? (
                <div className="flex flex-wrap gap-1">
                    {skills.map((skillText, index) => (
                        <BlurFade
                        key={index}
                        delay={BLUR_FADE_DELAY * 10 + index * 0.05}
                        >
                            <Badge key={index}>{skillText}</Badge>
                        </BlurFade>
                    ))}
                </div>
            ) : (
                <p>No skills to display.</p>
            )}
        </section>
    )
}
