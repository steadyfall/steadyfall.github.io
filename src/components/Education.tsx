import { useMediaQuery } from '@/hooks/useMediaQuery'
import { ArrowUpRight } from 'lucide-react'

export function Education() {
    const isDesktop = useMediaQuery('(min-width: 768px)')
    return (
        <section id="education" className="mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-section font-bold mb-4">Education</h2>
            <div className="flex items-center">
                <div className="relative flex-grow md:pl-12">
                    <div className={"bg-white aspect-square absolute left-[5px] rounded-lg"}>
                        {/* // center the bullet : `top-1/2 transform -translate-y-1/2` */}
                        <img
                            src="/images/uwaterlooLogo.png"
                            alt={`University of Waterloo logo`}
                            width={isDesktop ? 80 : 45}
                            height={isDesktop ? 80 : 45}
                            className="rounded-md"
                        />
                    </div>
                    <div className={"pl-16 " + (isDesktop && "py-3")}>
                        <div className="flex flex-col md:items-start justify-between sm:flex-row mb-2">
                            <div>
                                <a
                                    href="https://uwaterloo.ca/" target="_blank"
                                    rel="noopener noreferrer" aria-label={`Link to University of Waterloo`}
                                >
                                    <h2 className="text-xl font-bold inline-flex items-center">
                                        University of Waterloo <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5"/>
                                    </h2>
                                </a>
                                <h3 className="text-lg font-semibold">Bachelor of Mathematics, Computational Mathematics Major</h3>
                                {(!isDesktop) && <h3 className="text-gray-600 font-typewriter dark:text-gray-400">Sept 2022 - Present</h3>}
                            </div>
                            {isDesktop && (<h3 className="text-gray-600 font-typewriter dark:text-gray-400">Sept 2022 - Present</h3>)}
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mt-1 py-0">
                <a
                    href="https://uwaterloo.ca/computational-mathematics/" target="_blank"
                    rel="noopener noreferrer"className="inline-flex items-center"
                >
                    Computational Mathematics <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5"/>
                </a> is a interdisplinary major that combines Mathematics, Statistics, Optimization and Computer Science, offered by the Faculty of Mathematics.
                {/* TODO: Insert all courses using a recursive React component */}
            </p>
        </section>
    )
}
