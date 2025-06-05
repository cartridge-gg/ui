import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "../../../../utils";
import { cva } from "class-variance-authority";
import React from "react";
const marketplaceSearchResultVariants = cva("px-3 py-2.5 flex gap-3 select-none cursor-pointer transition-colors duration-150", {
    variants: {
        variant: {
            darkest: "bg-spacer-100 hover:bg-background-100",
            darker: "bg-background-100 hover:bg-background-200",
            dark: "bg-background-125 hover:bg-background-200",
            default: "bg-background-150 hover:bg-background-200",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
export const MarketplaceSearchResult = React.forwardRef(({ image, label, className, variant, ...props }, ref) => {
    return (_jsx("div", { ref: ref, className: cn(marketplaceSearchResultVariants({ variant }), className), ...props, children: _jsxs("div", { className: "flex items-center gap-1 grow overflow-hidden", children: [_jsx("div", { className: "w-5 h-5 min-w-5 min-h-5 flex items-center justify-center", children: image }), _jsx("p", { className: "truncate text-sm font-medium", children: label })] }) }));
});
export default MarketplaceSearchResult;
//# sourceMappingURL=search-result.js.map