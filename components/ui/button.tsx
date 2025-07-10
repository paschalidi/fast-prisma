import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-codesandbox-yellow to-codesandbox-lime hover:from-codesandbox-yellow/90 hover:to-codesandbox-lime/90 text-black font-semibold shadow-sm hover:shadow-md hover:shadow-codesandbox-yellow/20 border-0",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-sm hover:shadow-md hover:shadow-destructive/20",
        outline:
          "border-2 border-codesandbox-lime/60 bg-transparent hover:bg-codesandbox-lime/10 hover:border-codesandbox-lime text-codesandbox-lime shadow-sm hover:shadow-md hover:shadow-codesandbox-lime/20",
        secondary:
          "border-2 border-codesandbox-yellow/60 bg-transparent hover:bg-codesandbox-yellow/10 hover:border-codesandbox-yellow text-codesandbox-yellow shadow-sm hover:shadow-md hover:shadow-codesandbox-yellow/20",
        ghost: "hover:bg-muted/50 hover:text-foreground",
        link: "text-codesandbox-lime underline-offset-4 hover:underline hover:text-codesandbox-lime/80",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-xl px-3",
        lg: "h-11 rounded-xl px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }