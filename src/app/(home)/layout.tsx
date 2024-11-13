import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default async function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <>
    <Navbar />
    <div className="flex-grow mx-auto w-full px-4 sm:px-12 md:px-16 lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">{children}</div>
    <Footer />
  </>
  );
}
