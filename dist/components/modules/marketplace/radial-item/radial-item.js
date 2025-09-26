import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { MarketplaceRadialToggle } from "../../../../index";
import { cn } from "../../../../utils";
import { cva } from "class-variance-authority";
import React from "react";
const marketplaceMarketplaceRadialItemVariants = cva("flex items-center gap-2.5 cursor-pointer data-[active=true]:cursor-default group", {
    variants: {
        variant: {
            default: "",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
export const MarketplaceRadialItem = React.forwardRef(({ label, active, className, variant, ...props }, ref) => {
    return (_jsxs("div", { ref: ref, "data-active": active, className: cn(marketplaceMarketplaceRadialItemVariants({ variant }), className), ...props, children: [_jsx(MarketplaceRadialToggle, { active: active }), _jsx("p", { className: "text-sm text-foreground-100", children: label })] }));
});
export default MarketplaceRadialItem;
//# sourceMappingURL=radial-item.js.map