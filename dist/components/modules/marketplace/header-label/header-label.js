import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "../../../../utils";
import { cva } from "class-variance-authority";
import React from "react";
const marketplaceHeaderLabelVariants = cva("flex px-2 py-3 select-none", {
    variants: {
        variant: {
            default: "text-xs font-semibold tracking-wider text-foreground-400",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
export const MarketplaceHeaderLabel = React.forwardRef(({ label, className, variant, children, ...props }, ref) => {
    return (_jsxs("div", { ref: ref, className: cn(marketplaceHeaderLabelVariants({ variant }), className), ...props, children: [_jsx("p", { children: label }), children] }));
});
export default MarketplaceHeaderLabel;
//# sourceMappingURL=header-label.js.map