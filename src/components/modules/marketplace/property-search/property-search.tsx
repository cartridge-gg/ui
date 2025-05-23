import { Input, SearchIcon } from "@/index";
import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import React, { HTMLAttributes, useState } from "react";

const propertySearchVariants = cva("pr-9 caret-foreground-100", {
  variants: {
    variant: {
      darkest:
        "bg-spacer-100 hover:bg-spacer-100 focus-visible:bg-spacer-100 border border-background-200 hover:border-background-300 focus-visible:border-background-300 focus-visible:border-bg-background-300",
      darker:
        "bg-background-100 hover:bg-background-100 focus-visible:bg-background-100 border border-background-200 hover:border-background-300 focus-visible:border-background-300 focus-visible:border-bg-background-300",
      dark: "bg-background-125 hover:bg-background-125 focus-visible:bg-background-125 border border-background-200 hover:border-background-300 focus-visible:border-background-300 focus-visible:border-bg-background-300",
      default:
        "bg-background-150 hover:bg-background-150 focus-visible:bg-background-150 border border-background-200 hover:border-background-300 focus-visible:border-background-300 focus-visible:border-bg-background-300",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface PropertySearchProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof propertySearchVariants> {
  search: string;
  setSearch: (search: string) => void;
}

export const PropertySearch = React.forwardRef<
  HTMLDivElement,
  PropertySearchProps
>(({ search, setSearch, className, variant, ...props }, ref) => {
  const [focus, setFocus] = useState(false);

  return (
    <div ref={ref} className="relative" {...props}>
      <Input
        className={cn(propertySearchVariants({ variant }), className)}
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
      <SearchIcon
        data-focused={focus}
        data-content={search.length > 0 && !focus}
        className={cn(
          "absolute right-2 top-1/2 -translate-y-1/2 transition-colors duration-100",
          "text-foreground-400 data-[content=true]:text-foreground-300 data-[focused=true]:text-foreground-100 ",
        )}
      />
    </div>
  );
});

export default PropertySearch;
