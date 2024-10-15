import { Badge } from '@/components/ui/Badge';
import { useState } from 'react';
import BlurFade, { BLUR_FADE_DELAY } from '@/components/ui/BlurFade';
import { cn } from '@/lib/utils';

interface SkillsProps {
    arr: string[];
}

export function Skills({ arr }: SkillsProps) {
    const [skills, setSkills] = useState(arr)
    return (
        <section id="skills" className="mb-12">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
                <h2 className={cn(
                    "text-2xl md:text-3xl lg:text-4xl font-section mb-4",
                    "inline-block text-transparent bg-clip-text bg-gradient-to-r dark:from-gray-300 dark:to-gray-100 from-[#434343] to-[#000000]"
                )}>Skills</h2>
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
