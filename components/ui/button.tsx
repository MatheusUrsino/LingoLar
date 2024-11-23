import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 uppercase tracking-wide",
  {
    variants: {
      variant: {
        locked:
          "bg-neutral-200 text-primary-foreground hover:bg-neutral-200/90 border-neutral-400 border-b-4 active:border-b-0",
        default:
          "bg-white text-black border-slate-200 border-2 border-b-4 active:border-b-2 hover:bg-slate-100 hover:text-slate-500",
        primary:
          "bg-sky-600 text-primary-foreground hover:bg-sky-700/90 hover:border-border-sky-700 border-sky-800 border-b-4 active:border-b-0",
        primaryOutline: "bg-white text-[#006182] hover:bg-slate-300",
        green:
          "bg-[#198168] text-primary-foreground hover:bg-[#135E4C]/90 hover:border-border-sky-700 border-[#0E4538] border-b-4 active:border-b-0",
        greenOutline: "bg-white text-[#006182] hover:bg-slate-300",
        secondary:
          "bg-orange-600 text-primary-foreground hover:bg-orange-700/90 hover:border-border-orange-700 border-orange-800 border-b-4 active:border-b-0",
        secondaryOutline: "bg-white text-orange-500 hover:bg-slate-300",
        Danger:
          "bg-rose-600 text-primary-foreground hover:bg-rose-700/90 hover:border-border-rose-700 border-rose-800 border-b-4 active:border-b-0",
        DangerOutline: "bg-white text-rose-500 hover:bg-slate-300",
        Super:
          "bg-teal-600 text-primary-foreground hover:bg-teal-700/90 hover:border-border-teal-700 border-teal-800 border-b-4 active:border-b-0",
        SuperOutline: "bg-white text-teal-500 hover:bg-slate-300",
        Ghost:
          "bg-transparent text-slate-700 border-transparent border-0 hover:bg-slate-200",
        Sidebar:
          "bg-transparent text-slate-500 border-transparent border-2 hover:bg-slate-100 transition-none",
        SidebarOutline:
          "bg-sky-500/15 text-sky-600 border-sky-400 border-2 hover:bg-sky=500/20 transition-none",
      },
      size: {
        default: "h-11 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-12 px-8",
        icon: "h-10 w-10",
        rounded: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
