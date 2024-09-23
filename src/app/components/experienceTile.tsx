import Image from 'next/image'

export type ExperienceTileProps = {
  companyLogo: string
  companyName: string
  position: string
  period: string
  responsibilities: string[]
}

export function ExperienceTile({ companyLogo, companyName, position, period, responsibilities }: ExperienceTileProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <div className="flex flex-col sm:flex-row items-center sm:items-start mb-4">
        <div className="mb-4 sm:mb-0 sm:mr-4 flex-shrink-0">
          <Image
            src={companyLogo}
            alt={`${companyName} logo`}
            width={150}
            height={75}
            className="rounded-lg"
          />
        </div>
        <div className="sm:text-left">
          <h3 className="text-xl font-semibold mb-2">{position}</h3>
          <p className="text-gray-600 dark:text-gray-400">{companyName} | {period}</p>
        </div>
      </div>
      <div className="mt-4">
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
          {responsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}