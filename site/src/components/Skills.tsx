import { Badge } from '@/components/ui/Badge';
import { useState } from 'react';
import BlurFade, { BLUR_FADE_DELAY } from '@/components/ui/BlurFade';
import { cn } from '@/lib/utils';
import { Icon } from '@iconify/react';
import { techIcons } from '@/lib/techIcons';

interface SkillsProps {
    arr: {
        languages: string[];
        frameworksAndLibraries: string[];
        databases?: string[];
        tools: string[];
    };
}

export function Skills({ arr }: SkillsProps) {
    const [skills, setSkills] = useState(arr)
    const result = Object.entries(skills).map(([key, value]) => {
        return (
            <div className="mb-4" suppressHydrationWarning>
                <div className="text-xl mb-2 font-bold">
                    {
                        <BlurFade
                        delay={BLUR_FADE_DELAY * 10}
                        >
                        {(key === "frameworksAndLibraries") 
                        ? (
                            ('databases' in skills) 
                            ? `Frameworks & Libraries` 
                            : `Frameworks, Libraries & Databases`
                        )
                        : key.charAt(0).toUpperCase() + key.slice(1)}:
                        </BlurFade>
                    }
                </div>
                <div className="flex flex-wrap gap-1">
                    {
                        value.map((skillText, index) => (
                            <BlurFade
                            key={index}
                            delay={BLUR_FADE_DELAY * 10 + index * 0.05}
                            >
                                <Badge key={index}>
                                    {
                                        techIcons?.[skillText] &&
                                        <span className="mr-2">{
                                            <Icon icon={techIcons[skillText]} 
                                            inline={true} width={18} height={18}/>
                                        }</span>
                                    }
                                    <span>{skillText}</span>
                                </Badge>
                            </BlurFade>
                        ))
                    }
                </div>
            </div>
        );
    });
    return (
        <section id="skills" className="mb-12">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
                <h2 className={cn(
                    "text-2xl md:text-3xl lg:text-4xl font-section mb-4",
                    "inline-block text-transparent bg-clip-text bg-gradient-to-r dark:from-gray-300 dark:to-gray-100 from-[#434343] to-[#000000]"
                )}>Skills</h2>
            </BlurFade>
            {skills ? result : (
                <p>No skills to display.</p>
            )}
        </section>
    )
}
