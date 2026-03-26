import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default async function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-portland-orange focus:px-4 focus:py-2 focus:text-white focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-white dark:focus:bg-dark-blue"
      >
        Skip to main content
      </a>
      <Navbar />
      <div
        id="main-content"
        className="mx-auto w-full flex-grow px-8 sm:px-16 md:px-24 lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl"
      >
        {children}
      </div>
      <Footer />
    </>
  );
}
