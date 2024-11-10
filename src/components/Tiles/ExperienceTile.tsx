import { ArrowUpRight, Briefcase } from 'lucide-react'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import Image from 'next/image'

export type ExperienceTileProps = {
  companyLogo: string
  companyName: string
  companyLink: string
  position: string
  period: string
  responsibilities: string[]
}



export function ExperienceTile({ companyLogo, companyName, companyLink, position, period, responsibilities }: ExperienceTileProps) {
  const isDesktop = useMediaQuery('(min-width: 768px)')
  return (
    <div className="mb-6 flex items-center">
        <div className="relative flex-grow md:pl-12">
              <div className="bg-white aspect-square absolute left-[5px] top-3 rounded-lg">
                  {/* // center the bullet : `top-1/2 transform -translate-y-1/2` */}
                  <img
                      src={companyLogo}
                      alt={`${companyName} logo`}
                      width={isDesktop ? 80 : 45}
                      height={isDesktop ? 80 : 45}
                      className="rounded-md"
                  />
              </div>
            <div className="pl-16 py-3"> 
                <div className="flex flex-col md:items-start justify-between sm:flex-row mb-4">
                    <div>
                        <h2 className="text-xl font-bold">{position}</h2>
                        <a 
                          href={companyLink} target="_blank"
                          rel="noopener noreferrer" aria-label={`Link to ${companyName}`}
                        >
                          <h3 className="text-lg font-semibold inline-flex items-center">
                            {companyName} <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5"/>
                          </h3>
                        </a>
                        {(!isDesktop) && <h3 className="text-gray-600 font-typewriter dark:text-gray-400">{period}</h3>}
                    </div>
                    {isDesktop && (<h3 className="text-gray-600 font-typewriter dark:text-gray-400">{period}</h3>)}
                </div>
                <div className="mt-4">
                    <ul className="list-inside text-gray-700 dark:text-gray-300 space-y-1">
                    {responsibilities.map((responsibility, index) => (
                        <li key={index}>- {responsibility}</li>
                    ))}
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}