import Footer from '@/components/Footer';
import InteractiveHeadshot from '@/components/InteractiveHeadshot';

export default function HomePage() {
  return (
    <div className="flex flex-1 flex-col justify-between pt-2 md:pt-4">
      <InteractiveHeadshot />
      <Footer />
    </div>
  );
}
