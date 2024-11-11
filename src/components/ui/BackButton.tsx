"use client";

import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";


export default function BackButton({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const router = useRouter();

  const hasHistory =
    (typeof window !== "undefined" &&
      window.history?.length &&
      window.history.length > 1) ||
    typeof window === "undefined";

  if (!hasHistory) {
    return null;
  }

  return (
    <button
      className={
        cn(
          "text-slate-600 dark:text-slate-300 hover:text-black dark:hover:text-white",
          "cursor-pointer hover:underline hover:underline-offset-4",
          className
        )
      }
      onClick={router.back}
      {...props}
    />
  );
}