import Footer from '@/components/Footer';
import PortfolioShell from '@/components/PortfolioShell';
import BackButton from '@/components/ui/BackButton';
import LinkWithArrow from '@/components/ui/LinkWithArrow';

export default function NotFound() {
  return (
    <PortfolioShell>
      <section className="mx-auto flex min-h-[62vh] max-w-[720px] flex-col justify-center py-12 md:py-20">
        <p className="m-0 font-mono text-xs uppercase tracking-[0.16em] text-[#88857e]">
          404 / page not found
        </p>
        <h1 className="mt-4 font-display text-5xl font-normal italic leading-[1.05] tracking-[-0.01em] md:text-[64px]">
          This page isn&apos;t here.
        </h1>
        <p className="mt-5 max-w-[560px] text-pretty text-base leading-[1.65] text-[#55544f]">
          The address may have changed, or the page may have wandered off. You can return to the
          portfolio or retrace your last step.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
          <LinkWithArrow
            href="/"
            className="font-semibold text-[#11110f] underline underline-offset-4 hover:text-[#55544f] [&_svg]:ml-0.5 [&_svg]:size-[0.95em]"
          >
            Return home
          </LinkWithArrow>
          <BackButton className="border-0 bg-transparent p-0">Go back</BackButton>
        </div>
      </section>
      <Footer />
    </PortfolioShell>
  );
}
