import useReadingProgress from '@/hooks/useReadingProgress'

const Navbar = () => {
    const completion = useReadingProgress();

    return (
        <nav className="z-50 py-0.5 sticky top-0">
            {/* <div className="flex items-center justify-between container mx-auto text-xl"></div> */}
            <div className="h-0.5 overflow-hidden">
                <span
                    className="absolute bg-emerald-600 dark:bg-emerald-400 h-full w-full top-0 bottom-0"
                    style={{ transform: `translateX(${completion - 100}%)` }}
                />
            </div>
        </nav>
    )
}

export default Navbar