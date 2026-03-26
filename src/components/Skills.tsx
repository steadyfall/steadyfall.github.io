import { Icon } from '@iconify/react';

import { Badge } from '@/components/ui/Badge';
import BlurFade, { BLUR_FADE_DELAY } from '@/components/ui/BlurFade';
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
  const result = Object.entries(arr).map(([key, value], idx) => {
    return (
      <div className="mb-4" key={idx}>
        <div className="mb-2 text-xl font-bold">
          {
            <BlurFade delay={BLUR_FADE_DELAY * 10}>
              {key === 'frameworksAndLibraries'
                ? 'databases' in arr
                  ? 'Frameworks & Libraries'
                  : 'Frameworks, Libraries & Databases'
                : key.charAt(0).toUpperCase() + key.slice(1)}
              :
            </BlurFade>
          }
        </div>
        <div className="flex flex-wrap gap-1">
          {value.map((skillText, index) => (
            <BlurFade key={index} delay={BLUR_FADE_DELAY * 10 + index * 0.05}>
              <Badge key={index}>
                {techIcons?.[skillText] && (
                  <span className="mr-2">
                    {<Icon icon={techIcons[skillText]} inline={true} width={18} height={18} />}
                  </span>
                )}
                <span>{skillText}</span>
              </Badge>
            </BlurFade>
          ))}
        </div>
      </div>
    );
  });
  return (
    <section id="skills" className="mb-12 lg:mb-20">
      <BlurFade delay={BLUR_FADE_DELAY * 9}>
        <h2 className="mb-4 font-section text-2xl text-chinese-black-950 dark:text-selago-100 md:text-3xl lg:text-4xl">
          Skills
        </h2>
      </BlurFade>
      {arr ? result : <p>No skills to display.</p>}
    </section>
  );
}
