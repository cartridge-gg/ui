import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "../../../../utils";
import { cva } from "class-variance-authority";
import React from "react";
const marketplaceRadialToggleVariants = cva("cursor-pointer data-[active=true]:cursor-default group", {
    variants: {
        variant: {
            default: "p-0.5",
        },
        size: {
            md: "h-5 w-5",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "md",
    },
});
export const MarketplaceRadialToggle = React.forwardRef(({ active, className, variant, size }, ref) => {
    return (_jsx("div", { ref: ref, "data-active": active, className: cn(marketplaceRadialToggleVariants({ variant, size }), className), children: _jsx("div", { className: "w-full h-full rounded-full flex items-center justify-center p-0.5 border border-background-200 bg-spacer-100", children: _jsx("div", { "data-active": active, className: "w-full h-full rounded-full bg-transparent group-hover:bg-background-500 data-[active=true]:bg-primary-100 data-[active=true]:group-hover:bg-primary-100 transition-colors" }) }) }));
});
export default MarketplaceRadialToggle;
//# sourceMappingURL=radial-toggle.js.map