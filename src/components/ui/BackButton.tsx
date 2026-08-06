'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

export default function BackButton({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const router = useRouter();
  const [hasHistory, setHasHistory] = useState(true);

  useEffect(() => {
    setHasHistory(window.history?.length > 1);
  }, []);

  if (!hasHistory) {
    return null;
  }

  return (
    <button
      className={cn(
        'text-[#66645f] hover:text-[#11110f]',
        'cursor-pointer hover:underline hover:underline-offset-4',
        'rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current',
        className,
      )}
      onClick={router.back}
      {...props}
    />
  );
}
