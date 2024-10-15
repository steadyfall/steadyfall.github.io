import { Badge } from '@/components/ui/Badge';
import { useState } from 'react';

interface SkillsProps {
    arr: string[];
}

export function Skills({ arr }: SkillsProps) {
    const [skills, setSkills] = useState(arr)
    return (
        <section id="skills" className="mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-section font-bold mb-4">Skills</h2>
            {skills && skills.length > 0 ? (
                <div className="space-x-2">
                    {skills.map((skillText, index) => (
                        <Badge key={index}>{skillText}</Badge>
                    ))}
                </div>
            ) : (
                <p>No skills to display.</p>
            )}
        </section>
    )
}
