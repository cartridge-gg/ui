import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "../../../../utils";
import { cva } from "class-variance-authority";
import React from "react";
const marketplaceSearchResultsVariants = cva("flex flex-col gap-px rounded overflow-hidden shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]", {
    variants: {
        variant: {
            darkest: "bg-background-100",
            darker: "bg-background-200",
            dark: "bg-transparent",
            default: "bg-transparent",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
export const MarketplaceSearchResults = React.forwardRef(({ className, variant, ...props }, ref) => {
    return (_jsx("div", { ref: ref, className: cn(marketplaceSearchResultsVariants({ variant }), className), ...props }));
});
export default MarketplaceSearchResults;
//# sourceMappingURL=search-results.js.map