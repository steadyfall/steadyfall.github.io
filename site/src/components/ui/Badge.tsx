import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent shadow bg-neutral-950 text-gray-200 hover:bg-neutral-950/80 dark:bg-neutral-100 dark:text-gray-800 dark:hover:bg-neutral-100/80 focus:bg-neutral-900 dark:focus:bg-neutral-200",
        secondary:
          "border-transparent shadow bg-neutral-200 text-gray-800 hover:bg-neutral-200/80 dark:bg-neutral-700 dark:text-gray-200 dark:hover:bg-neutral-700/80",
        outline: "text-foreground focus:bg-accent focus:text-accent-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }