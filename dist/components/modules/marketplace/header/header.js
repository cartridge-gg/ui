import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { MarketplaceHeaderLabel } from "../../../../index";
import { cn } from "../../../../utils";
import { cva } from "class-variance-authority";
import React from "react";
const marketplaceHeaderVariants = cva("h-10 flex justify-between items-center", {
    variants: {
        variant: {
            default: "",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
export const MarketplaceHeader = React.forwardRef(({ label, className, variant, children, ...props }, ref) => {
    return (_jsxs("div", { ref: ref, className: cn(marketplaceHeaderVariants({ variant }), className), ...props, children: [_jsx(MarketplaceHeaderLabel, { label: label }), children] }));
});
export default MarketplaceHeader;
//# sourceMappingURL=header.js.map