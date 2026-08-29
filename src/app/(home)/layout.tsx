import PortfolioShell from '@/components/PortfolioShell';

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <PortfolioShell>{children}</PortfolioShell>;
}
