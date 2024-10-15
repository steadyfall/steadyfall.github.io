import { Heart } from "lucide-react"

const Footer = () => {
  return (
    <footer className="mt-2 py-6 text-center text-gray-500 dark:text-gray-400">
        <p>
          Designed & built with <span className="inline-flex items-center">
            <Heart className="w-3 h-3 md:w-4 md:h-4" color="#ff4444"/>
          </span> by <span className="underline underline-offset-4">Himank Dave</span>. You can take inspirations from this or fork it, as long as you credit me.
        </p>
    </footer>
  )
}

export default Footer
