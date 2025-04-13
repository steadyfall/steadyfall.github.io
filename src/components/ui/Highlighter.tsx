import { cn } from '@/lib/utils';

interface HighlightProps {
  text: string;
  color?:
    | 'cyan'
    | 'pink'
    | 'violet-web'
    | 'slate-blue'
    | 'red'
    | 'yellow'
    | 'lemon'
    | 'laser-lemon';
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
  const colors: Record<string, string> = {
    cyan: 'bg-cyan-200 dark:bg-cyan-500/30',
    pink: 'bg-[#ffa7ee] dark:bg-[#f73ed2]/30',
    'slate-blue': 'bg-[#a0a8ff] dark:bg-[#675bf9]/50',
    red: 'bg-[#ffa0a0] dark:bg-[#f83b3b]/50',
    yellow: 'bg-[#ffff77] dark:bg-[#fce913]/30',
  };

  if (color === 'violet-web') {
    color = 'pink';
  } else if (color === 'lemon' || color === 'laser-lemon') {
    color = 'yellow';
  }

  const colorClass = colors[color];

  return <span className={cn('rounded-sm px-[0.1em]', colorClass)}>{text}</span>;
}
