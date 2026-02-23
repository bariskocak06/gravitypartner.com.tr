"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] disabled:pointer-events-none disabled:opacity-50 border border-transparent",
  {
    variants: {
      variant: {
        default:
          "bg-indigo-500 text-white shadow-[0_0_16px_rgba(99,102,241,0.5)] hover:bg-indigo-400",
        outline:
          "bg-transparent text-indigo-200 border border-indigo-500/70 hover:border-indigo-400 hover:text-white shadow-[0_0_20px_rgba(99,102,241,0.4)]",
        ghost:
          "bg-transparent text-zinc-200 hover:bg-zinc-800/80 border border-transparent",
      },
      size: {
        default: "h-10 px-4 py-2 rounded-md",
        sm: "h-8 px-3 text-xs rounded-md",
        lg: "h-11 px-6 rounded-md",
        icon: "h-9 w-9 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

