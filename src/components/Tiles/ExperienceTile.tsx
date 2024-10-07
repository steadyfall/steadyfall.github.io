import { Briefcase } from 'lucide-react'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import Image from 'next/image'

export type ExperienceTileProps = {
  companyLogo: string
  companyName: string
  position: string
  period: string
  responsibilities: string[]
}



export function ExperienceTile({ companyLogo, companyName, position, period, responsibilities }: ExperienceTileProps) {
  const isDesktop = useMediaQuery('(min-width: 768px)')
  return (
    <div className="mb-8 flex items-center">
        <div className="relative flex-grow md:pl-28">
            {isDesktop ? (
              <div className="bg-white absolute left-[5px] top-3 p-1 rounded-full">
                  {/* // center the bullet : `top-1/2 transform -translate-y-1/2` */}
                  <img
                      src={companyLogo}
                      alt={`${companyName} logo`}
                      width={150}
                      height={75}
                      className="rounded-md"
                  />
              </div>
            ) : (
              <div className="absolute left-[-10px] top-5">
                <Briefcase className="bg-neutral-100 dark:bg-neutral-950 rounded-md w-6 h-6"/>
              </div>
            )}
            <div className="pl-8 md:pl-16 py-3"> 
                <div className="flex flex-col md:items-center sm:flex-row mb-4">
                    <div>
                      <h2 className="text-xl font-bold">{position}</h2>
                      <h3 className="text-lg font-semibold">{companyName}</h3>
                      <h3 className="text-gray-600 italic dark:text-gray-400">{period}</h3>
                    </div>
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