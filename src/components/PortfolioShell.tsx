import Navbar from '@/components/Navbar';

export default function PortfolioShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-white font-sans text-[#11110f]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:block focus:bg-white focus:px-4 focus:py-2 focus:text-[#11110f] focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-[#11110f]"
      >
        Skip to main content
      </a>
      <Navbar />
      <main
        id="main-content"
        className="mx-auto flex w-full max-w-[922px] flex-1 flex-col px-[22px] pb-[34px] pt-2.5 md:px-12 md:pb-12 md:pt-3"
      >
        {children}
      </main>
    </div>
  );
}
