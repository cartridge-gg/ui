import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import React, { HTMLAttributes } from "react";

const filtersVariants = cva(
  "flex flex-col gap-2 p-4 bg-background-125 border border-background-200 rounded-xl w-full shadow-[0px_0px_8px_2px_#0F1410]",
  {
    variants: {
      variant: {
        default: "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface FiltersProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof filtersVariants> {
}

export const Filters = React.forwardRef<HTMLDivElement, FiltersProps>(
  (
    {className, variant, ...props },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(filtersVariants({ variant }), className)}
        {...props}
      />
    );
  },
);

export default Filters;
