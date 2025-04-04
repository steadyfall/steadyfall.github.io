import { cn } from '@/lib/utils';

interface HighlightProps {
    text: string
    color?: 'cyan' | 'pink' | 'violet-web' | 'slate-blue' | 'red' | 'yellow' | 'lemon' | 'laser-lemon'
}

/**
 * Highlights the given text with the highlighter of specified color.
 *
 * @param text - the text to be highlighted
 * @param color - the color of the highlighter [cyan,pink,violet-web,slate-blue,red,yellow,lemon,laser-lemon]
 * @returns Returns a `span` element with the highlighted text of specified color.
 *
 */
export default function Highlight({ text, color = 'yellow' }: HighlightProps) {
  let colorClass: string;

  if (color === 'cyan') {
    colorClass = 'bg-cyan-200 dark:bg-cyan-500/30';
  }
  else if (color === 'pink' || color === 'violet-web') {
    colorClass = 'bg-[#ffa7ee] dark:bg-[#f73ed2]/30';
  }
  else if (color === 'slate-blue') {
    colorClass = 'bg-[#a0a8ff] dark:bg-[#675bf9]/50';
  }
  else if (color === 'red') {
    colorClass = 'bg-[#ffa0a0] dark:bg-[#f83b3b]/50';
  }
  else {
    // This covers "yellow", "lemon", "laser-lemon", and the default case
    colorClass = 'bg-[#ffff77] dark:bg-[#fce913]/30';
  }

  return (
    <span className={cn('px-1 rounded', colorClass)}>{text}</span>
  );
}
