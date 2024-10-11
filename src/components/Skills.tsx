import { useMediaQuery } from '@/hooks/useMediaQuery';
import { BaselineIcon, GalleryVerticalEndIcon } from 'lucide-react';
import { Fragment, FunctionComponent, useState } from 'react';
import { techIcons } from '@/utils/techIcons';

interface Props extends React.SVGProps<SVGElement> {
    size?: number | string;
}

type TechIconsDisplayProps = {
    heading: string
    techNames: string[]
}

function TechIconsDisplay({ heading, techNames }: TechIconsDisplayProps) {
    const hasRemainingIcons = (list: string[], startIndex: number, icons = techIcons): boolean => {
        for (let i = startIndex + 1; i < list.length; i++) {
            if (list[i] in icons) {
              return true;
            }
          }
        return false;
    }

    const isDesktop = useMediaQuery('(min-width: 768px)')
    const TechIcon: React.FunctionComponent<{ techName: string }> = ({techName}) => {
        // TODO: For techName = SQL, handle multiple SQL service like Postgres, MYSQL, MongoDB, etc.
        const IconComponent: React.FunctionComponent<Props> = techIcons[techName]
        return (
          <div className="items-center justify-center">
            <IconComponent size={isDesktop ? 50 : 35}/>
          </div>
        )
    }
    const [showIcons, setShowIcons] = useState(false)
    const toggleView = () => setShowIcons(!showIcons)

    return (
        <div className="px-4">
            <div className="inline-flex items-center mb-2">
                <h3 className="text-xl underline underline-offset-4 items-center">
                    <span className="font-bold">{heading}</span>
                </h3>
                <span>&nbsp;&nbsp;&nbsp;</span>
                {/* {
                    showIcons 
                    ? <BaselineIcon onClick={toggleView} className="w-5 h-5 md:w-6 md:h-6"/> 
                    : <GalleryVerticalEndIcon onClick={toggleView} className="w-5 h-5 md:w-6 md:h-6"/> 
                } */}
            </div>
            {techNames.length > 0 ? (
            <div>
                {/* TODO: Make this compatible for mobile screens in the future */} 
                {/* className="md:flex md:flex-row md:items-start md:justify-start grid grid-cols-2" */}
                {/* {techNames.map((lang, index) => (
                (lang in techIcons) && <Fragment key={lang}>
                    {showIcons ? (
                    <div className="inline-flex items-center justify-center" aria-label={lang}>
                        <div className="bg-white p-1 rounded-md shadow-sm">
                            <TechIcon techName={lang} />
                        </div>
                    </div>
                    ) : (
                    <span className="inline-flex items-center">
                        {lang}
                        {index < techNames.length - 1 && hasRemainingIcons(techNames, index) && (
                        <span className="mr-1">,</span>
                        )}
                    </span>
                    )}
                </Fragment>
                ))} */}
                {techNames.map((lang, index) => (
                    <span className="inline-flex items-center">
                        {lang}
                        {index < techNames.length - 1 && (
                        <span className="mr-1">,</span>
                        )}
                    </span>
                ))}
            </div>
            ) : (
            <p className="text-gray-600">Nothing to display.</p>
            )}
        </div>
    )
}

export function Skills() {
    return (
        <section id="skills" className="mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-section font-bold mb-4">Skills</h2>
            <div className="flex flex-col justify-around">
                {/* TODO: Check if this fits in small screens & if this is good at all or not */}
                <TechIconsDisplay 
                    heading="Programming Languages:" 
                    techNames={["Python3", "HTML5", "CSS3", "JavaScript (ES6)", "TypeScript", "Go", "C", "C++20", "SQL"]}
                />
                <TechIconsDisplay
                    heading="Frameworks:"
                    techNames={[
                        "Django",
                        "Flask",
                        "React",
                        "Next.js",
                        "Node.js",
                        "Axios",
                        "Socket.IO",
                        "TailwindCSS",
                        "D3.js",
                        "Jest",
                        "Cypress",
                        "Pytest"
                    ]}
                />
                <TechIconsDisplay
                    heading="Libraries:"
                    techNames={[
                        "Pandas",
                        "Matplotlib",
                        "Plotly",
                        "NumPy",
                        "OpenCV",
                        "Pillow",
                        "NetworkX",
                    ]}
                />
                <TechIconsDisplay
                    heading="Tools:"
                    techNames={[
                        "Git",
                        "Linux",
                        "Bash",
                        "Powershell",
                        "Docker",
                        "Postman",
                        "GCP",
                        "AWS",
                    ]}
                />
            </div>
        </section>
    )
}
