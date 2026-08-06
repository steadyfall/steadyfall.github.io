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
      className="mt-[52px] grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-[200px_minmax(0,1fr)] md:gap-0"
      aria-labelledby="skills-title"
    >
      <h2
        id="skills-title"
        className="m-0 font-display text-[21px] font-normal italic leading-tight"
      >
        Skills
      </h2>
      <div className="flex flex-col gap-2.5 text-sm">
        {skillGroups.map(([label, values]) => (
          <div key={label} className="flex items-start gap-4">
            <span className="w-[88px] flex-none font-mono text-xs text-[#77756e] md:w-[110px]">
              {label}
            </span>
            <p className="m-0">{values.join(', ')}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
