import Footer from '@/components/Footer';
import Landing from '@/components/Landing';

export default function HomePage() {
  return (
    <div className="flex flex-1 flex-col justify-between">
      <Landing />
      <Footer />
    </div>
  );
}
