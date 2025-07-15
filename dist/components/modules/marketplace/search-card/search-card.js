import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { TimesIcon } from "../../../../components/icons";
import { cn } from "../../../../utils";
import { cva } from "class-variance-authority";
import React from "react";
const marketplaceSearchCardVariants = cva("group p-1 pl-1.5 rounded-sm flex items-center gap-1 text-primary-100 select-none cursor-pointer transition-colors", {
    variants: {
        variant: {
            default: "bg-background-200 hover:bg-background-300",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
export const MarketplaceSearchCard = React.forwardRef(({ image, label, className, variant, ...props }, ref) => {
    return (_jsxs("div", { ref: ref, className: cn(marketplaceSearchCardVariants({ variant }), className), ...props, children: [_jsxs("div", { className: "flex items-center gap-1 grow overflow-hidden", children: [_jsx("div", { className: "w-5 h-5 min-w-5 min-h-5 flex items-center justify-center", children: image }), _jsx("p", { className: "truncate text-sm", children: label })] }), _jsx("div", { className: "p-0.5", children: _jsx(TimesIcon, { size: "xs", className: "text-foreground-400 group-hover:text-foreground-300 transition-colors" }) })] }));
});
export default MarketplaceSearchCard;
//# sourceMappingURL=search-card.js.map