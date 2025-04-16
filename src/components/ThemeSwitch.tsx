'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
// import Image from "next/image";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      className="cursor-pointer"
      onClick={() => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
      }}
    >
      {resolvedTheme === 'dark' ? (
        <Sun className="h-4 w-4 text-orange-300 md:h-5 md:w-5" />
      ) : (
        <Moon className="h-4 w-4 text-indigo-500 md:h-5 md:w-5" />
      )}
    </button>
  );
}
