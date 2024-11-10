import { ArrowUpRight } from "lucide-react"
import { detailsForMetadata, personalDetails } from "@/app/config"
import { cn } from "@/lib/utils"

const Footer = () => {
  return (
    <footer className={cn(
      "py-16 text-gray-500 dark:text-gray-400 flex flex-col items-center justify-center sm:flex-row-reverse sm:justify-between",
      "mx-auto max-w-full px-4 sm:px-12 md:px-16 lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl"
    )}>
      <div className="flex justify-center md:justify-start space-x-4">
          <a href={personalDetails.githubLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
          className="inline-flex items-center hover:underline hover:underline-offset-2 text-pink-500"
          >
          github <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5"/>
          </a>
          <a href={personalDetails.linkedinLink} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
          className="inline-flex items-center hover:underline hover:underline-offset-2 text-thunderbird-600"
          >
          linkedin <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5"/>
          </a>
          <a href={`mailto:` + personalDetails.email} aria-label="Email"
          className="inline-flex items-center hover:underline hover:underline-offset-2 text-azure-radiance-600" // text-orange-500"
          >
          email <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5"/>
          </a>
      </div>
      <div className="mt-6 sm:mt-0">
        &copy; 2024 {new URL(detailsForMetadata.baseUrl).hostname}
      </div>
    </footer>
    
  )
}

export default Footer
