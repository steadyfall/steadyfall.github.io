interface SkillsProps {
  arr: {
    languages: string[];
    frameworksAndLibraries: string[];
    databases?: string[];
    tools: string[];
  };
}

export function Skills({ arr }: SkillsProps) {
  const skillGroups = [
    ['Languages', arr.languages],
    ['Frameworks', [...arr.frameworksAndLibraries, ...(arr.databases ?? [])]],
    ['Tools', arr.tools],
  ] as const;

  return (
    <section
      id="skills"
      className="mt-[52px] flex flex-col gap-[18px] md:mt-16 md:gap-6"
      aria-labelledby="skills-title"
    >
      <h2
        id="skills-title"
        className="m-0 font-sans text-[22.5px] font-semibold leading-tight text-[#11110f]"
      >
        Skills
      </h2>
      <div className="flex flex-col gap-2.5 text-md leading-[1.6] text-[#55544f]">
        {skillGroups.map(([label, values]) => (
          <div key={label} className="grid grid-cols-[128px_minmax(0,1fr)]">
            <span className="text-[#11110f]">{label}</span>
            <span>{values.join(', ')}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
