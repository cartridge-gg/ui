import { RadialItem } from "@/index";
import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import React, { HTMLAttributes, useCallback } from "react";

const assetFilterVariants = cva(
  "flex flex-col gap-2 px-2",
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

export interface AssetFilterProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof assetFilterVariants> {
  value?: 0 | 1;
  setValue?: (value: number) => void;
}

export const AssetFilter = React.forwardRef<HTMLDivElement, AssetFilterProps>(
  (
    {value = 0, setValue, className, variant },
    ref,
  ) => {
    const [active, setActive] = React.useState<number>(value);

    const handleClick = useCallback((value: number) => {
      setActive(value);
      if (!setValue) return;
      setValue(value);
    }, [setValue, setActive]);

    return (
      <div
        ref={ref}
        className={cn(assetFilterVariants({ variant }), className)}
      >
        <RadialItem label="Buy Now" active={active === 0} onClick={() => handleClick(0)} />
        <RadialItem label="Show All" active={active === 1} onClick={() => handleClick(1)} />
      </div>
    );
  },
);

export default AssetFilter;
