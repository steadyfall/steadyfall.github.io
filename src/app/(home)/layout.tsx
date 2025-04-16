import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default async function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <div className="mx-auto w-full flex-grow px-8 sm:px-16 md:px-24 lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl">
        {children}
      </div>
      <Footer />
    </>
  );
}
