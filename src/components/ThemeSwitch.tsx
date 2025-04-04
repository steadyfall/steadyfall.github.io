'use client';

import { Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
// import Image from "next/image";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() =>  setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      className="cursor-pointer"
      onClick={() => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
      }}>
      {
        resolvedTheme === 'dark' 
          ? <Sun className="w-4 h-4 md:w-5 md:h-5 text-orange-300"/> 
          : <Moon className="w-4 h-4 md:w-5 md:h-5 text-indigo-500"/>
      }
    </button>
  );
}
