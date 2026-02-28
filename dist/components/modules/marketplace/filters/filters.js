import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "../../../../utils";
import { cva } from "class-variance-authority";
import React from "react";
const marketplaceFiltersVariants = cva("flex flex-col gap-2 p-4 bg-background-125 border border-background-200 rounded-xl w-full shadow-[0px_0px_8px_2px_#0F1410]", {
    variants: {
        variant: {
            default: "",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
export const MarketplaceFilters = React.forwardRef(({ className, variant, ...props }, ref) => {
    return (_jsx("div", { ref: ref, className: cn(marketplaceFiltersVariants({ variant }), className), ...props }));
});
export default MarketplaceFilters;
//# sourceMappingURL=filters.js.map