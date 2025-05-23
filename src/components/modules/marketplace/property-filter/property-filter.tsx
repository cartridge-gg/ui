import { CheckboxCheckedIcon, CheckboxUncheckedIcon } from "@/index";
import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import React, { HTMLAttributes, useCallback, useEffect } from "react";

const propertyFilterVariants = cva(
  "h-8 flex justify-between items-center px-3 py-1.5 rounded cursor-pointer transition-colors duration-150",
  {
    variants: {
      variant: {
        default: "bg-transparent hover:bg-background-200 text-background-500 data-[selected=true]:text-foreground-200",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface PropertyFilterProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof propertyFilterVariants> {
  label: string;
  count: number;
  value?: boolean;
  setValue?: (value: boolean) => void;
}

export const PropertyFilter = React.forwardRef<HTMLDivElement, PropertyFilterProps>(
  (
    {label, count, value, setValue, className, variant },
    ref,
  ) => {
    const [selected, setSelected] = React.useState<boolean>(!!value);

    const handleClick = useCallback((value: boolean) => {
      setSelected(value);
      if (!setValue) return;
      setValue(value);
    }, [setValue, setSelected]);

    useEffect(() => {
      if (value !== undefined) {
        setSelected(value);
      }
    }, [value]);

    return (
      <div
        ref={ref}
        data-selected={selected}
        className={cn(propertyFilterVariants({ variant }), className)}
        onClick={() => handleClick(!selected)}
      >
        <div className="flex items-center gap-2">
          {selected ? <CheckboxCheckedIcon size="sm" /> : <CheckboxUncheckedIcon size="sm" /> }
          <p className="text-xs text-foreground-100">{label}</p>
        </div>
        <p className="text-xs text-foreground-100">{count}</p>
      </div>
    );
  },
);

export default PropertyFilter;
