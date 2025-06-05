import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "../../../../utils";
import { cva } from "class-variance-authority";
import React from "react";
const marketplacePropertyEmptyVariants = cva("w-full h-8 flex justify-center items-center select-none", {
    variants: {
        variant: {
            default: "text-foreground-400",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
export const MarketplacePropertyEmpty = React.forwardRef(({ className, variant }, ref) => {
    return (_jsx("div", { ref: ref, className: cn(marketplacePropertyEmptyVariants({ variant }), className), children: _jsx("p", { className: "text-xs", children: "No results" }) }));
});
export default MarketplacePropertyEmpty;
//# sourceMappingURL=property-empty.js.map