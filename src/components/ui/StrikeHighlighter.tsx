import { cn } from '@/lib/utils';

interface StrikeHighlightProps {
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
 * Highlights the given text with the highlighter of specified color with a strikethrough effect.
 *
 * @param text - the text to be highlighted
 * @param color - the color of the highlighter [cyan,pink,violet-web,slate-blue,red,yellow,lemon,laser-lemon]
 * @returns Returns a `span` element with the highlighted text of specified color with strikethrough effect.
 *
 */
export default function StrikeHighlight({ text, color = 'yellow' }: StrikeHighlightProps) {
  const colors: Record<string, string> = {
    cyan: 'bg-cyan-200/80 dark:bg-cyan-500/35',
    pink: 'bg-[#ffa7ee]/80 dark:bg-[#f73ed2]/35',
    'slate-blue': 'bg-[#a0a8ff] dark:bg-[#675bf9]/40',
    red: 'bg-[#ffa0a0]/75 dark:bg-[#f83b3b]/40',
    yellow: 'bg-[#ffff77]/75 dark:bg-[#fce913]/40',
  };

  if (color === 'violet-web') {
    color = 'pink';
  } else if (color === 'lemon' || color === 'laser-lemon') {
    color = 'yellow';
  }

  const colorClass = colors[color];

  return (
    <span className="relative inline-block">
      <span
        className={cn(
          'absolute left-0 right-0 top-[60%] h-[0.6em] -translate-y-1/2 px-[0.1em]',
          colorClass,
        )}
      ></span>
      <span className="z-2 relative">{text}</span>
    </span>
  );
}
