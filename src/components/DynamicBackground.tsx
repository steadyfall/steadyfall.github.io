'use client';

import { GrainGradient } from '@paper-design/shaders-react';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

import { useMediaQuery } from '@/hooks/useMediaQuery';

export default function DynamicBackground() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  const isTablet = useMediaQuery('(min-width: 768px)');

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDarkMode = resolvedTheme === 'dark';

  return (
    <div className="fixed inset-0 z-0">
      <GrainGradient
        style={{ height: '100%', width: '100%' }}
        colorBack={isDarkMode ? '#1A0098' : '#FF5E33'}
        colors={['#F5F4F6']}
        softness={1}
        intensity={1}
        noise={0}
        shape="dots"
        speed={0}
        scale={isTablet ? 4 : 2}
        rotation={360}
        offsetX={isTablet ? -0.75 : 1}
        offsetY={isTablet ? -1 : 1}
      />
    </div>
  );
}
