import { RadialToggle } from "@/index";
import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import React, { HTMLAttributes } from "react";

const radialItemVariants = cva(
  "flex items-center gap-2.5 cursor-pointer data-[active=true]:cursor-default group",
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

export interface RadialItemProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof radialItemVariants> {
  label: string;
  active?: boolean;
}

export const RadialItem = React.forwardRef<HTMLDivElement, RadialItemProps>(
  ({ label, active, className, variant, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-active={active}
        className={cn(radialItemVariants({ variant }), className)}
        {...props}
      >
        <RadialToggle active={active} />
        <p className="text-sm text-foreground-100">{label}</p>
      </div>
    );
  },
);

export default RadialItem;
