import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "../../../../index";
import { cn } from "../../../../utils";
import { cva } from "class-variance-authority";
import React from "react";
const marketplaceHeaderVariants = cva("h-8 px-3 py-2 normal-case tracking-normal font-medium rounded", {
    variants: {
        variant: {
            default: "text-primary-100 text-xs bg-background-125 hover:bg-background-200",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
export const MarketplaceHeaderReset = React.forwardRef(({ label = "Clear", className, variant, children, ...props }, ref) => {
    return (_jsxs(Button, { ref: ref, className: cn(marketplaceHeaderVariants({ variant }), className), ...props, children: [_jsx("p", { children: label }), children] }));
});
export default MarketplaceHeaderReset;
//# sourceMappingURL=header-reset.js.map