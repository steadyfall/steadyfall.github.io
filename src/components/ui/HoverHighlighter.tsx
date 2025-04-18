import { cn } from '@/lib/utils';

interface HoverHighlightProps {
  text: string;
  color?:
    | 'cyan'
    | 'pink'
    | 'violet-web'
    | 'slate-blue'
    | 'red'
    | 'yellow'
    | 'lemon'
    | 'laser-lemon'
    | 'background';
}

/**
 * Highlights the given text with the highlighter of specified color UPON hover.
 *
 * @param text - the text to be highlighted
 * @param color - the color of the highlighter [cyan,pink,violet-web,slate-blue,red,yellow,lemon,laser-lemon,background]
 *
 */
export default function HoverHighlight({ text, color = 'background' }: HoverHighlightProps) {
  let colorClass: string;

  if (color === 'cyan') {
    colorClass = 'bg-cyan-200 dark:bg-cyan-500/30';
  } else if (color === 'pink' || color === 'violet-web') {
    colorClass = 'bg-[#ffa7ee] dark:bg-[#f73ed2]/30';
  } else if (color === 'slate-blue') {
    colorClass = 'bg-[#a0a8ff] dark:bg-[#675bf9]/50';
  } else if (color === 'red') {
    colorClass = 'bg-[#ffa0a0] dark:bg-[#f83b3b]/50';
  } else if (color === 'background') {
    colorClass = 'dark:bg-neutral-100 bg-neutral-950';
  } else {
    // This covers "yellow", "lemon", "laser-lemon", and the default case
    colorClass = 'bg-[#ffff77] dark:bg-[#fce913]/30';
  }

  return (
    <span className="group relative inline-block">
      <span
        className={cn(
          colorClass,
          'absolute inset-0 origin-left scale-x-0 transform transition-transform duration-300 ease-in-out group-hover:scale-x-100',
        )}
      ></span>
      <span
        className={cn(
          'z-1 relative',
          color === 'background' ? 'group-hover:text-gray-200 group-hover:dark:text-gray-800' : '',
        )}
      >
        {text}
      </span>
    </span>
  );
}
