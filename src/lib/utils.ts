import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDate = (d: string): string => {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  }).format(new Date(d));
};

export const formatShortDate = (d: string): string => {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: '2-digit',
  }).format(new Date(d));
};
