import { cn } from "@/lib/utils";

/**
 * Highlights the given text with the highlighter of specified color.
 *
 * @param text - the text to be highlighted
 * @param color - the color of the highlighter [cyan,pink,violet-web,slate-blue,red,yellow,lemon,laser-lemon]
 * @returns Returns a `span` element with the highlighted text of specified color.
 *
 */
export default function Highlight(text: string, color = "yellow") {
    let colorClass: string;

    if (color === "cyan") {
        colorClass = "bg-cyan-300 dark:bg-cyan-500/30";
    }
    else if (color === "pink" || color === "violet-web") {
        colorClass = "bg-[#ff77e4]";
    }
    else if (color === "slate-blue") {
        colorClass = "bg-[#7777ff]";
    }
    else if (color === "red") {
        colorClass = "bg-[#ff7777]";
    }
    else {
        // This covers "yellow", "lemon", "laser-lemon", and the default case
        colorClass = "bg-[#ffff77]";
    }

    return (
      <span className={cn("bg-opacity-50 px-1 rounded", colorClass)}>{text}</span>
    )
}
